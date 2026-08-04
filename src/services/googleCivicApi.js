import { recordFetchTime } from '../utils/freshness'

const BASE = 'https://www.googleapis.com/civicinfo/v2'
const KEY = import.meta.env.VITE_GOOGLE_CIVIC_API_KEY

async function apiFetch(path, params = {}) {
  const url = new URL(`${BASE}${path}`)
  url.searchParams.set('key', KEY)
  Object.entries(params).forEach(([k, v]) => {
    if (v != null) url.searchParams.set(k, v)
  })
  const res = await fetch(url)
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Google Civic API ${res.status}: ${res.statusText} — ${body}`)
  }
  return res.json()
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function deriveLevel(levels) {
  if (!levels || levels.length === 0) return 'other'
  if (levels.includes('country')) return 'federal'
  if (levels.includes('administrativeArea1')) return 'state'
  if (
    levels.includes('locality') ||
    levels.includes('regional') ||
    levels.includes('administrativeArea2') ||
    levels.includes('subLocality1') ||
    levels.includes('subLocality2') ||
    levels.includes('special')
  ) {
    return 'local'
  }
  return 'other'
}

function normalizeAddress(addrArray) {
  if (!addrArray || addrArray.length === 0) return null
  const a = addrArray[0]
  return [a.line1, a.line2, a.line3, a.city, a.state, a.zip]
    .filter(Boolean)
    .join(', ')
}

function normalizeOfficial(official, office, index) {
  return {
    id: `civic-${office.divisionId}-${index}`,
    name: official.name ?? 'Unknown',
    photoUrl: official.photoUrl ?? null,
    party: official.party ?? 'Unknown',
    office: office.name,
    level: deriveLevel(office.levels),
    contacts: {
      email: official.emails?.[0] ?? null,
      phone: official.phones?.[0] ?? null,
      website: official.urls?.[0] ?? null,
      address: normalizeAddress(official.address),
    },
    source: 'civic',
    channels: official.channels ?? [],
  }
}

/* ------------------------------------------------------------------ */
/*  localStorage cache for offline support                            */
/* ------------------------------------------------------------------ */

const CIVIC_LS_TTL = 24 * 60 * 60 * 1000 // 24 hours

function getCivicCache(address) {
  try {
    const key = `myreps_civic_${address.trim().toLowerCase()}`
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts < CIVIC_LS_TTL && Array.isArray(data) && data.length > 0) {
      return data
    }
  } catch { /* ignore */ }
  return null
}

function setCivicCache(address, data) {
  try {
    const key = `myreps_civic_${address.trim().toLowerCase()}`
    localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }))
  } catch { /* ignore */ }
}

function getStaleCivicCache(address) {
  try {
    const key = `myreps_civic_${address.trim().toLowerCase()}`
    const raw = localStorage.getItem(key)
    if (raw) {
      const { data } = JSON.parse(raw)
      return data
    }
  } catch { /* ignore */ }
  return null
}

/* ------------------------------------------------------------------ */
/*  getRepresentatives                                                */
/* ------------------------------------------------------------------ */

export async function getRepresentatives(address) {
  // Check localStorage cache first
  const cached = getCivicCache(address)
  if (cached) return cached

  try {
    const data = await apiFetch('/representatives', { address })
    const { offices = [], officials = [] } = data
    const reps = []

    for (const office of offices) {
      const indices = office.officialIndices ?? []
      for (const idx of indices) {
        const official = officials[idx]
        if (official) {
          reps.push(normalizeOfficial(official, office, idx))
        }
      }
    }

    recordFetchTime('google-civic-api')
    setCivicCache(address, reps)
    return reps
  } catch (err) {
    // If network fails, try stale cache
    const stale = getStaleCivicCache(address)
    if (stale) return stale
    throw err
  }
}

/* ------------------------------------------------------------------ */
/*  getElections                                                      */
/* ------------------------------------------------------------------ */

export async function getElections() {
  const data = await apiFetch('/elections')
  const elections = data.elections ?? []

  return elections.map((e) => ({
    id: e.id,
    name: e.name,
    electionDay: e.electionDay,
    ocdDivisionId: e.ocdDivisionId ?? null,
  }))
}

/* ------------------------------------------------------------------ */
/*  getVoterInfo                                                      */
/* ------------------------------------------------------------------ */

function normalizePollingLocation(loc) {
  if (!loc) return null
  const addr = loc.address ?? {}
  return {
    name: loc.name ?? addr.locationName ?? null,
    address: [addr.line1, addr.line2, addr.line3, addr.city, addr.state, addr.zip]
      .filter(Boolean)
      .join(', '),
    hours: loc.pollingHours ?? null,
    startDate: loc.startDate ?? null,
    endDate: loc.endDate ?? null,
    notes: loc.notes ?? null,
    sources: loc.sources ?? [],
  }
}

function normalizeContest(contest) {
  return {
    type: contest.type ?? null,
    office: contest.office ?? null,
    district: contest.district ?? null,
    level: contest.level ?? [],
    candidates: (contest.candidates ?? []).map((c) => ({
      name: c.name,
      party: c.party ?? null,
      candidateUrl: c.candidateUrl ?? null,
      email: c.email ?? null,
      phone: c.phone ?? null,
      photoUrl: c.photoUrl ?? null,
      channels: c.channels ?? [],
    })),
    referendumTitle: contest.referendumTitle ?? null,
    referendumSubtitle: contest.referendumSubtitle ?? null,
    referendumText: contest.referendumText ?? null,
    referendumUrl: contest.referendumUrl ?? null,
    referendumBallotResponses: contest.referendumBallotResponses ?? [],
    sources: contest.sources ?? [],
  }
}

export async function getVoterInfo(address, electionId) {
  const data = await apiFetch('/voterinfo', { address, electionId })

  return {
    election: data.election
      ? {
          id: data.election.id,
          name: data.election.name,
          electionDay: data.election.electionDay,
        }
      : null,
    pollingLocations: (data.pollingLocations ?? []).map(normalizePollingLocation),
    earlyVoteSites: (data.earlyVoteSites ?? []).map(normalizePollingLocation),
    dropOffLocations: (data.dropOffLocations ?? []).map(normalizePollingLocation),
    contests: (data.contests ?? []).map(normalizeContest),
    state: (data.state ?? []).map((s) => ({
      name: s.name ?? null,
      electionAdminBody: s.electionAdministrationBody ?? null,
      localJurisdiction: s.local_jurisdiction ?? null,
    })),
  }
}
