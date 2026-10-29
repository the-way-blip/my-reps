// Wisconsin Nov 3, 2026 general-election ballot data in the shared multi-state schema (see src/data/stateBallot.js).
// Inputs (data-raw/wisconsin-2026-general/, from the Wisconsin Elections Commission):
//   contests.json   "All Contests and Candidates_November 3, 2026.xlsx" — every contest statewide
//   questions.json  "Referendum Listing" — verbatim text of every referendum
// Hand-researched grades: data-raw/grades-wi/*.json (same six-value format as every state).
// Writes public/data/wi/ballots/_statewide.json, _index.json and one file per county.
//   node scripts/build-wisconsin.mjs

import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const RAW = path.join(ROOT, 'data-raw/wisconsin-2026-general')
const GRADES_DIR = path.join(ROOT, 'data-raw/grades-wi')
const OUT = path.join(ROOT, 'public/data/wi/ballots')
const read = f => JSON.parse(readFileSync(path.join(RAW, f), 'utf8'))
const slug = s => String(s).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const titleCase = s => s.toLowerCase().replace(/(^|[\s/(-])([a-z])/g, (m, a, b) => a + b.toUpperCase()).replace(/ (Of|And|The|For) /g, m => m.toLowerCase())

const src = read('contests.json')
const qs = read('questions.json')
const textFor = new Map(qs.questions.map(q => [`${q.jurisdiction}|${q.contest}`, q.textFound ? q.text : '']))

// ── grades (later files win) ──
const nameKey = n => String(n).toLowerCase().replace(/\(.*?\)/g, ' ').replace(/[^a-z ]+/g, ' ').replace(/\b(jr|sr|ii|iii)\b/g, ' ').trim().split(/\s+/).filter(Boolean)
const gradeMap = new Map()
if (existsSync(GRADES_DIR)) {
  for (const f of readdirSync(GRADES_DIR).filter(f => f.endsWith('.json') && !f.startsWith('_')).sort()) {
    for (const g of JSON.parse(readFileSync(path.join(GRADES_DIR, f), 'utf8'))) {
      const k = nameKey(g.name)
      gradeMap.set(`${k[0]}|${k.at(-1)}|${String(g.office || '').toLowerCase()}`, g)
    }
  }
}
const valid = v => /^[A-F]$/.test(v || '')
function gradeFor(name, office) {
  const k = nameKey(name)
  const g = gradeMap.get(`${k[0]}|${k.at(-1)}|${office.toLowerCase()}`)
  if (!g) return {}
  return {
    ...(valid(g.grade) ? { grade: g.grade } : {}), ...(g.gradeNote ? { gradeNote: g.gradeNote } : {}),
    ...(g.positions && Object.values(g.positions).some(valid) ? { positions: g.positions, gradeJustifications: g.gradeJustifications || {} } : {}),
    ...(g.description ? { description: g.description } : {}), ...(g.website ? { website: g.website } : {}), ...(g.sources?.length ? { sources: g.sources } : {}),
  }
}

const officeTitle = c => c.scope === 'congressional' ? `United States Representative, District ${c.districtNumber}`
  : c.scope === 'stateSenate' ? `State Senator, District ${c.districtNumber}`
  : c.scope === 'stateHouse' ? `Representative to the Assembly, District ${c.districtNumber}`
  : c.scope === 'state' ? titleCase(c.contest).replace(/ \/ /g, ' and ') : c.contest
const LEVEL = { state: 'Statewide', congressional: 'Federal', stateSenate: 'State Legislature', stateHouse: 'State Legislature' }
let graded = 0
function race(c, id, extra = {}) {
  const office = officeTitle(c)
  const candidates = c.candidates.map(x => {
    const g = gradeFor(x.name, office)
    if (g.grade || g.positions) graded++
    return { name: x.name, party: x.party || null, status: 'candidate', ...(x.runningMate ? { runningMate: x.runningMate } : {}), ...g }
  })
  return {
    id, office, category: c.contest, level: LEVEL[c.scope] || 'County', scope: c.scope,
    ...(c.districtNumber != null && LEVEL[c.scope] ? { district: c.districtNumber } : {}),
    seats: 1, type: candidates.some(x => x.party) ? 'partisan' : 'nonpartisan',
    description: candidates.length === 1 ? 'Unopposed.' : '', ballotOrder: c.contestBallotPosition || 999, candidates, ...extra,
  }
}
// Local questions carry the jurisdiction that votes on them (area), so the ballot page can match the voter's
// county, school district, or city/village/town; titles that don't name it ("Exceed Revenue Limits") get it prefixed.
const AREA_SCOPE = { county: 'county', school: 'school', municipal: 'municipal' }
function question(c, id) {
  const statewide = c.scope === 'state'
  const area = statewide ? null : titleCase(String(c.district || '').replace(/\s*-\s*/g, '-'))
  const word = area && area.replace(/^(City|Village|Town) of /, '').split(/[\s-]/)[0].toLowerCase()
  const name = area && !c.contest.toLowerCase().includes(word) ? `${area}: ${c.contest}` : c.contest
  return {
    id, name, type: statewide ? 'Ratification Of State Constitutional Amendment' : 'Local Public Question', statewide,
    ...(area ? { scope: AREA_SCOPE[c.scope] || 'county', area } : {}),
    ballotLanguage: textFor.get(`${c.jurisdiction}|${c.contest}`) || '',
  }
}

// ── statewide + district races, statewide questions ──
const contests = src.contests
const races = contests.filter(c => !c.isReferendum && LEVEL[c.scope] && c.candidates.length).map(c => race(c, `wi-${slug(officeTitle(c))}`))
const stateQuestions = contests.filter(c => c.isReferendum && c.scope === 'state').map((c, i) => question(c, `wi-state-q-${i + 1}`))

// ── counties: county offices, municipal judges, and every local referendum ──
const countyName = c => c.county
const counties = [...new Set(contests.filter(c => c.scope === 'county').map(countyName))].sort()
rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })
const generatedAt = new Date().toISOString()
writeFileSync(path.join(OUT, '_statewide.json'), JSON.stringify({ state: 'WI', source: src.source, sourceVersion: src.sourceLastModified, sourceWriteTime: src.sourceLastModified, generatedAt, races }))
const index = []
for (const county of counties) {
  const mine = contests.filter(c => !LEVEL[c.scope] && (c.county === county || (Array.isArray(c.counties) && c.counties.includes(county))))
  const countyRaces = mine.filter(c => !c.isReferendum && c.candidates.length).map((c, i) => {
    if (c.scope === 'municipal') {
      // e.g. "CITY OF JEFFERSON - JEFFERSON COUNTY" → area "Jefferson"
      // a joint court ("Marshfield Area Joint Municipal Court") is matched on its host city
      const area = titleCase((c.district || c.jurisdiction).replace(/^(CITY|VILLAGE|TOWN) OF\s+/i, '').replace(/\s+-.*$/, '').replace(/\s+Area Joint Municipal Court$/i, ''))
      return race(c, `wi-${slug(county)}-${slug(c.contest)}-${i}`, { scope: 'city', area, level: 'City' })
    }
    if (c.scope === 'countyDistrict') return race(c, `wi-${slug(county)}-${slug(c.contest)}-${i}`, { scope: 'county', maybe: true, description: 'May be on your ballot: only voters in this supervisory district vote on this seat.' })
    return race(c, `wi-${slug(county)}-${slug(c.contest)}-${i}`, { scope: 'county' })
  })
  const referendums = [...stateQuestions, ...mine.filter(c => c.isReferendum).map((c, i) => question(c, `wi-${slug(county)}-q-${i}`))]
  writeFileSync(path.join(OUT, `${slug(county)}.json`), JSON.stringify({ state: 'WI', county, source: 'Wisconsin Elections Commission', generatedAt, localComplete: true, races: countyRaces, referendums }))
  index.push({ county, slug: slug(county), races: countyRaces.length, referendums: referendums.length })
}
writeFileSync(path.join(OUT, '_index.json'), JSON.stringify({ sourceVersion: src.sourceLastModified, counties: index }, null, 1))
console.log(`Wisconsin: ${races.length} statewide/district races (${races.reduce((a, r) => a + r.candidates.length, 0)} candidates, ${graded} graded), ${stateQuestions.length} statewide questions, ${counties.length} counties, ${index.reduce((a, c) => a + c.races, 0)} county/municipal races, ${index.reduce((a, c) => a + c.referendums, 0) - stateQuestions.length * counties.length} local questions`)
