// Ballot data for states beyond Michigan (public/data/<dir>/ballots/), one file per county plus
// _statewide.json, all in the same schema (built by scripts/build-indiana.mjs, scripts/build-iowa.mjs, scripts/build-wisconsin.mjs, scripts/build-minnesota.mjs).
// Adding a state = a data build + one entry here + its voting rules in stateVotingInfo.js.

import { countySlug } from './officialBallot'

// Preview hosts see states that aren't launched yet
const PREVIEW = typeof window !== 'undefined' && /^(localhost|127\.0\.0\.1)$|\.vercel\.app$/.test(window.location.hostname)

export const STATE_BALLOTS = {
  // Live since 2026-10-28. VITE_ENABLE_INDIANA=0 switches it off without a code change.
  IN: { code: 'IN', name: 'Indiana', dir: 'in', idPrefix: 'in-', live: import.meta.env?.VITE_ENABLE_INDIANA !== '0' },
  // Live since 2026-10-29.
  IA: { code: 'IA', name: 'Iowa', dir: 'ia', idPrefix: 'ia-', live: true },
  // Live since 2026-10-29.
  WI: { code: 'WI', name: 'Wisconsin', dir: 'wi', idPrefix: 'wi-', live: true },
  // Preview only until approved for launch.
  MN: { code: 'MN', name: 'Minnesota', dir: 'mn', idPrefix: 'mn-', live: false },
}

// The state's config when its ballot is available on this host, else null (Michigan uses its own pipeline)
export function stateBallotFor(code) {
  const s = STATE_BALLOTS[code]
  return s && (s.live || PREVIEW) ? s : null
}
export const enabledStateCodes = () => ['MI', ...Object.keys(STATE_BALLOTS).filter(c => stateBallotFor(c))]

const cache = new Map()
function base() {
  return (typeof window !== 'undefined' && window.Capacitor)
    ? 'https://www.offorandbythepeople.com/'
    : (import.meta.env?.BASE_URL || '/').replace(/\/?$/, '/')
}
function load(dir, file) {
  const key = `${dir}/${file}`
  if (!cache.has(key)) {
    cache.set(key, fetch(`${base()}data/${dir}/ballots/${file}.json`).then(r => (r.ok ? r.json() : null)).catch(() => null))
  }
  return cache.get(key)
}

export async function loadStateBallotData(code, county) {
  const st = stateBallotFor(code)
  const slug = countySlug(county)
  if (!st || !slug) return null
  const [countyData, statewide] = await Promise.all([load(st.dir, slug), load(st.dir, '_statewide')])
  return countyData && statewide ? { county: countyData, statewide } : null
}

const norm = s => String(s || '').toLowerCase().replace(/\b(township|twp|town|city|village|of|the)\b/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim()
const GENERIC = /\b(community|consolidated|school|schools|corporation|corp|metropolitan|district|of|the|county|united|public|msd|csc|sc|cs)\b/g
const schoolTokens = (s, county) => norm(s).replace(GENERIC, ' ').split(/\s+/)
  .filter(t => t.length >= 3 && t !== norm(county))

// The voter's school district number: the county's district whose name best matches Census's school district name
function bestSchool(list, censusName, county) {
  const target = schoolTokens(String(censusName || '').replace(/\bsaint\b/gi, 'st'), county).map(t => t.replace(/^st$/, ''))
  if (!target.length) return null
  let best = null, bestScore = 0, tie = false
  for (const s of list) {
    const toks = schoolTokens(s.name.replace(/\bst\./gi, 'st'), county)
    const hit = toks.filter(t => target.includes(t)).length
    const score = hit / Math.max(toks.length, target.length)
    if (score > bestScore) { best = s.num; bestScore = score; tie = false } else if (score === bestScore && score > 0) tie = true
  }
  return tie ? null : best
}

// Official question text is shown word for word — no paraphrased summaries
function toProposal(q, county) {
  const retention = /retention/i.test(q.type)
  return {
    id: q.id,
    name: q.name,
    type: retention ? 'Judicial Retention' : q.statewide ? 'Constitutional Amendment' : 'Local Public Question',
    jurisdiction: q.statewide ? 'Statewide' : county,
    division: q.statewide ? 'State' : retention ? 'Judicial' : 'Local',
    category: retention ? 'judicial' : q.statewide ? 'constitution' : 'education',
    description: q.ballotLanguage,
    ballotLanguage: q.ballotLanguage,
    yesVote: '',
    noVote: '',
    official: true,
    status: 'confirmed',
  }
}

// Build a voter's ballot from their geocoded address (any state in this schema).
export function getStateBallot(data, geo, districts) {
  if (!data || !geo) return { matched: false, races: [], proposals: [] }
  const { county, statewide } = data
  // District numbers compare as text so Minnesota House districts ("10A") work alongside plain numbers
  const dk = v => String(v ?? '').replace(/^0+/, '').toUpperCase()
  const cd = dk(districts?.congressional ?? geo.district)
  const ss = dk(districts?.stateSenate ?? geo.stateUpperDistrict)
  const sh = dk(districts?.stateHouse ?? geo.stateLowerDistrict)

  const stateRaces = statewide.races.filter(r =>
    r.scope === 'state' ||
    (r.scope === 'congressional' && dk(r.district) === cd) ||
    (r.scope === 'stateSenate' && dk(r.district) === ss) ||
    (r.scope === 'stateHouse' && dk(r.district) === sh))

  // Minnesota: contests list the MCDs (Census county subdivision codes) that vote on them — all of the MCD (mcds)
  // or only some precincts of it (mcdMaybe) — and school contests carry the district number
  const mcd = geo.countySubFips || null
  const byMcd = r => Array.isArray(r.mcds)
  const inMcd = r => !!mcd && r.mcds.includes(mcd)
  const inMcdMaybe = r => !!mcd && (r.mcdMaybe || []).includes(mcd)
  const voterSchoolNum = county.schoolDistricts ? bestSchool(county.schoolDistricts, geo.schoolDistrict, county.county) : null

  const twp = norm(geo.countySubdivision)
  const place = norm(geo.place)
  const target = schoolTokens(geo.schoolDistrict, county.county)
  const schoolRaces = county.races.filter(r => r.scope === 'school')
  const schoolMatch = r => (r.schoolNum ? r.schoolNum === voterSchoolNum : schoolTokens(r.area, county.county).some(t => target.includes(t)))
  const schoolKnown = target.length && schoolRaces.some(schoolMatch)

  const inCityMaybe = r => r.cityMaybe && !!place && r.scope === 'township' && norm(r.area) === twp
  const local = county.races.filter(r => {
    if (byMcd(r)) return inMcd(r)
    if (r.maybe || inCityMaybe(r)) return false
    if (r.scope === 'county') return true
    if (r.scope === 'township') return !!twp && norm(r.area) === twp
    if (r.scope === 'town' || r.scope === 'city') return !!place && norm(r.area) === place
    if (r.scope === 'school') return schoolKnown ? schoolMatch(r) : false
    return false
  })

  // Local questions: keep the ones whose name matches the voter's city, school district or county
  const mine = new Set([...target, ...schoolTokens(geo.place, county.county)])
  // County measures, and community-college (merged area) measures, which cover whole counties
  const countyWide = q => /community college|merged area/i.test(q.name) ||
    (new RegExp(`\\b${county.county}\\s+County\\b`, 'i').test(q.name) && !/school|city|town/i.test(q.name))
  // Questions tagged with the jurisdiction that votes on them (Wisconsin) match on it directly;
  // "Town of X" is only the town's voters, not residents of the city or village of X
  const areaMatch = q => q.scope === 'county' ||
    (q.scope === 'school' && schoolTokens(q.area, county.county).some(t => target.includes(t))) ||
    (q.scope === 'municipal' && (/^town of /i.test(q.area)
      ? !!twp && norm(q.area) === twp && norm(q.area) !== place
      : !!place && norm(q.area) === place))
  const proposals = county.referendums
    .filter(q => q.statewide || /retention/i.test(q.type) || (byMcd(q) ? inMcd(q) : q.schoolNum ? q.schoolNum === voterSchoolNum : q.area ? areaMatch(q) : countyWide(q) ||
      schoolTokens(q.name, county.county).some(t => mine.has(t))))
    .map(q => toProposal(q, `${county.county} County`))
    .sort((a, b) => (a.division === 'State' ? 0 : 1) - (b.division === 'State' ? 0 : 1))

  // Districted seats in the voter's county / township / town / school corporation that may or may not be on their ballot
  const inArea = r => r.scope === 'county' ||
    (r.scope === 'school' && (schoolKnown ? schoolMatch(r) : false)) ||
    ((r.scope === 'town' || r.scope === 'city') && !!place && norm(r.area).startsWith(place))
  const maybeRaces = county.races.filter(r => (byMcd(r) ? inMcdMaybe(r) : (r.maybe && inArea(r)) || inCityMaybe(r)))

  return {
    matched: true,
    maybeRaces,
    localComplete: county.localComplete !== false,
    dataAsOf: statewide.sourceWriteTime || county.generatedAt,
    jurisdiction: [geo.place, geo.countySubdivision && `${geo.countySubdivision} Township`].filter(Boolean)[0] || `${county.county} County`,
    stateRaces,
    races: local,
    proposals,
    schoolMatched: !!schoolKnown,
    unmatchedSchoolRaces: schoolKnown ? [] : schoolRaces,
    electionOffice: county.electionOffice,
    source: county.source,
  }
}
