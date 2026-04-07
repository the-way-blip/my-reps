import { recordFetchTime } from '../utils/freshness'

// Use /api/openstates in both dev (Vite proxy) and prod (Vercel serverless function)
const BASE = '/api/openstates'
const KEY = import.meta.env.VITE_OPENSTATES_API_KEY

async function apiFetch(path, params = {}) {
  const url = new URL(`${BASE}${path}`, window.location.origin)
  Object.entries(params).forEach(([k, v]) => {
    if (v == null) return
    if (Array.isArray(v)) {
      v.forEach(item => url.searchParams.append(k, item))
    } else {
      url.searchParams.set(k, v)
    }
  })
  if (KEY) url.searchParams.set('apikey', KEY)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`OpenStates ${res.status}: ${res.statusText}`)
  return res.json()
}

// Cache in sessionStorage (survives page reloads)
const CACHE_TTL = 24 * 60 * 60 * 1000
const _memCache = {}

function getCached(stateCode) {
  if (_memCache[stateCode]) return _memCache[stateCode]
  // Check sessionStorage first (faster, same session)
  try {
    const raw = sessionStorage.getItem(`openstates_${stateCode}`)
    if (raw) {
      const { data, ts } = JSON.parse(raw)
      if (Date.now() - ts < CACHE_TTL) {
        _memCache[stateCode] = data
        return data
      }
    }
  } catch {}
  // Fall back to localStorage (persists across sessions / offline)
  try {
    const raw = localStorage.getItem(`myreps_openstates_${stateCode}`)
    if (raw) {
      const { data, ts } = JSON.parse(raw)
      if (Date.now() - ts < CACHE_TTL) {
        _memCache[stateCode] = data
        return data
      }
    }
  } catch {}
  return null
}

function setCache(stateCode, data) {
  _memCache[stateCode] = data
  try {
    const payload = JSON.stringify({ data, ts: Date.now() })
    sessionStorage.setItem(`openstates_${stateCode}`, payload)
    localStorage.setItem(`myreps_openstates_${stateCode}`, payload)
  } catch {}
}

// Retrieve stale localStorage data when offline (ignores TTL)
function getStaleCached(stateCode) {
  try {
    const raw = localStorage.getItem(`myreps_openstates_${stateCode}`)
    if (raw) {
      const { data } = JSON.parse(raw)
      return data
    }
  } catch {}
  return null
}

// Lazy-load the large static data file (4MB) only when needed
let _staticDataPromise = null
function loadStaticData() {
  if (!_staticDataPromise) {
    _staticDataPromise = import('../data/stateLegislators.json').then(m => m.default)
  }
  return _staticDataPromise
}

// Check if pre-built static data exists for this state
async function getStaticData(stateCode) {
  const staticData = await loadStaticData()
  const stateData = staticData.states?.[stateCode]
  if (stateData && (stateData.stateSenators?.length > 0 || stateData.stateReps?.length > 0)) {
    return stateData
  }
  return null
}

// Paginate through all results (API max is 50 per page)
async function fetchAllPeople(params) {
  const allResults = []
  let page = 1
  while (true) {
    const data = await apiFetch('/people', { ...params, per_page: 50, page, include: ['links', 'offices', 'sources'] })
    allResults.push(...(data.results || []))
    if (!data.pagination || page >= data.pagination.max_page) break
    page++
  }
  return allResults
}

export async function getStateLegislators(stateCode) {
  const lower = stateCode.toLowerCase()

  // 1. Check in-memory / sessionStorage cache
  const cached = getCached(lower)
  if (cached) return cached

  // 2. Check pre-built static data (zero API calls)
  const static_ = await getStaticData(lower)
  if (static_) {
    setCache(lower, static_)
    return static_
  }

  // 3. Fall back to live API
  try {
    const [upperResults, lowerResults] = await Promise.all([
      fetchAllPeople({ jurisdiction: lower, org_classification: 'upper' }),
      fetchAllPeople({ jurisdiction: lower, org_classification: 'lower' }),
    ])

    const stateSenators = upperResults.map(p => normalizePerson(p, 'upper'))
    const stateReps = lowerResults.map(p => normalizePerson(p, 'lower'))

    const result = { stateSenators, stateReps }
    setCache(lower, result)
    recordFetchTime('openstates-api')
    return result
  } catch (err) {
    // If network fails, try stale localStorage data
    const stale = getStaleCached(lower)
    if (stale) return stale
    throw err
  }
}

function normalizePerson(person, chamber) {
  const currentRole = person.current_role || {}
  return {
    id: person.id,
    name: person.name,
    photoUrl: person.image || null,
    party: person.party || 'Unknown',
    chamber: chamber === 'upper' ? 'State Senate' : 'State House',
    district: currentRole.district || '',
    state: person.jurisdiction?.name || '',
    contacts: {
      email: person.email || null,
      links: (person.links || []).map(l => l.url),
      offices: (person.offices || []).map(o => ({
        name: o.name,
        address: o.address,
        phone: o.voice,
      })),
    },
    source: 'openstates',
    sourceId: person.id,
    oppiId: person.openstates_url,
  }
}

export async function getStateLegislatorDetail(personId) {
  return apiFetch(`/people/${personId}`)
}
