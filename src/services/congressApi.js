import { STATE_BY_CODE } from '../data/states'
import { recordFetchTime } from '../utils/freshness'

// Use server-side proxy in production, direct API in dev
const IS_PROD = import.meta.env.PROD
const PROXY_BASE = '/api/congress'
const DIRECT_BASE = 'https://api.congress.gov/v3'
const KEY = import.meta.env.VITE_CONGRESS_API_KEY

async function apiFetch(path, params = {}) {
  const base = IS_PROD ? PROXY_BASE : DIRECT_BASE
  const url = new URL(`${base}${path}`, window.location.origin)
  if (!IS_PROD) {
    url.searchParams.set('api_key', KEY)
    url.searchParams.set('format', 'json')
  }
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Congress API ${res.status}: ${res.statusText}`)
  return res.json()
}

// The /member endpoint doesn't support stateCode filtering — it returns all 538
// current members. We fetch all pages once and cache, then filter client-side.
let _cache = null
let _pending = null

const LS_KEY = 'myreps_congress_members'
const LS_TTL = 24 * 60 * 60 * 1000 // 24 hours

function getLocalStorageCache() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts < LS_TTL && Array.isArray(data) && data.length > 0) {
      return data
    }
  } catch {}
  return null
}

function setLocalStorageCache(data) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {}
}

function getStaleLocalStorageCache() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (!raw) return null
    const { data } = JSON.parse(raw)
    if (Array.isArray(data) && data.length > 0) return data
  } catch {}
  return null
}

export async function getAllMembers() {
  if (_cache) return _cache
  if (_pending) return _pending

  // Check localStorage first (survives across sessions)
  const lsCached = getLocalStorageCache()
  if (lsCached) {
    _cache = lsCached
    return _cache
  }

  _pending = Promise.all([
    apiFetch('/member', { currentMember: true, limit: 250, offset: 0 }),
    apiFetch('/member', { currentMember: true, limit: 250, offset: 250 }),
    apiFetch('/member', { currentMember: true, limit: 50,  offset: 500 }),
  ]).then(pages => {
    _cache = pages.flatMap(p => p.members ?? [])
    _pending = null
    recordFetchTime('congress-api')
    setLocalStorageCache(_cache)
    return _cache
  }).catch(err => {
    _pending = null
    // If network fails, try localStorage even if expired
    const stale = getStaleLocalStorageCache()
    if (stale) {
      _cache = stale
      return _cache
    }
    throw err
  })

  return _pending
}

// Returns { senators: [], reps: [] } for a 2-letter state code
export async function getMembersByState(stateCode) {
  const stateName = STATE_BY_CODE[stateCode]?.name
  if (!stateName) return { senators: [], reps: [] }

  const all = await getAllMembers()
  const stateMembers = all.filter(m => m.state === stateName)

  // Senators have no district (null/undefined); House members have a number
  const senators = stateMembers.filter(m => m.district == null)
  const reps     = stateMembers.filter(m => m.district != null)

  return { senators, reps }
}

// Full member detail: officialWebsiteUrl, addressInformation, leadership, etc.
export async function getMemberDetail(bioguideId) {
  const data = await apiFetch(`/member/${bioguideId}`)
  return data.member
}

// Recent sponsored legislation (proxy for legislative activity)
export async function getMemberLegislation(bioguideId, limit = 15) {
  const data = await apiFetch(`/member/${bioguideId}/sponsored-legislation`, { limit })
  return data.sponsoredLegislation ?? []
}

// Cosponsored legislation — shows what a member actively supports
export async function getMemberCosponsoredLegislation(bioguideId, limit = 20) {
  try {
    const data = await apiFetch(`/member/${bioguideId}/cosponsored-legislation`, { limit })
    return data.cosponsoredLegislation ?? []
  } catch {
    return []
  }
}
