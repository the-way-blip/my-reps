// Minnesota Nov 3, 2026 general-election ballot data in the shared multi-state schema (see src/data/stateBallot.js).
// Inputs: the Secretary of State's election-night media files (data-raw/minnesota-2026-general/, from
// https://electionresultsfiles.sos.mn.gov/20261103/ — every contest is pre-loaded at 0 votes):
//   ussenate/ushouse/Governor/secofstate/attorneygen/LegislativeByDistrict.txt   statewide + district races
//   allracesbyprecinct.txt   every state/county/judicial contest and county question, per precinct
//   local.txt / hospital.txt  city, township and hospital-district races + local questions (district = MCD code)
//   sdrace.txt / sdRaceQuestions.txt   school board races + school questions (district = school district number)
//   BallotQuestions.txt       verbatim text of every question; PrctTbl.txt precinct → MCD; mcdtbl.txt; SchoolDistTbl.txt
// Local contests are matched on the voter's MCD (Census county subdivision code = SOS MCD code). A contest that
// covers only some precincts of an MCD (commissioner districts, wards) is listed as "may be on your ballot" there.
// Hand-researched grades: data-raw/grades-mn/*.json (same six-value format as every state).
//   node scripts/build-minnesota.mjs

import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const RAW = path.join(ROOT, 'data-raw/minnesota-2026-general')
const GRADES_DIR = path.join(ROOT, 'data-raw/grades-mn')
const OUT = path.join(ROOT, 'public/data/mn/ballots')
const rows = f => readFileSync(path.join(RAW, f), 'latin1').split(/\r?\n/).filter(Boolean).map(l => l.split(';'))
const slug = s => String(s).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const titleCase = s => s.toLowerCase().replace(/(^|[\s/(-])([a-z])/g, (m, a, b) => a + b.toUpperCase()).replace(/ (Of|And|The|For) /g, m => m.toLowerCase())

// media-file row: state;county;precinct;office_id;office_name;district;cand_order;cand_name;suffix;incumbent;party;...
const contestKey = r => `${r[3]}|${r[4]}|${r[5]}`
const PARTY = { R: 'republican', DFL: 'democratic', GP: 'Green', LIB: 'Libertarian', IND: 'Independent', FI: 'Forward', UNI: 'Unity' }
function collect(fileRows, filter = () => true) {
  const contests = new Map()
  for (const r of fileRows) {
    if (!filter(r)) continue
    const k = contestKey(r)
    if (!contests.has(k)) contests.set(k, { officeId: r[3], name: r[4], district: r[5], county: r[1], candidates: [] })
    const c = contests.get(k)
    if (r[10] === 'WI' || /^WRITE-IN/i.test(r[7]) || c.candidates.some(x => x.order === r[6])) continue
    c.candidates.push({ order: r[6], name: r[7] + (r[8] ? ` ${r[8]}` : ''), party: r[10], incumbent: r[9] === 'I' || r[9] === 'Y' })
  }
  return contests
}
const isQuestion = c => /QUESTION|AMENDMENT/i.test(c.name)

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
let graded = 0
function gradeFor(name, office) {
  const k = nameKey(name)
  const g = gradeMap.get(`${k[0]}|${k.at(-1)}|${office.toLowerCase()}`)
  if (!g) return {}
  if (valid(g.grade) || g.positions) graded++
  return {
    ...(valid(g.grade) ? { grade: g.grade } : {}), ...(g.gradeNote ? { gradeNote: g.gradeNote } : {}),
    ...(g.positions && Object.values(g.positions).some(valid) ? { positions: g.positions, gradeJustifications: g.gradeJustifications || {} } : {}),
    ...(g.description ? { description: g.description } : {}), ...(g.website ? { website: g.website } : {}), ...(g.sources?.length ? { sources: g.sources } : {}),
  }
}

// ── statewide + district races ──
const officeTitle = c => {
  if (/^U\.S\. Representative District/.test(c.name)) return `United States Representative, District ${c.district}`
  if (/^State Senator District/.test(c.name)) return `State Senator, District ${c.district}`
  if (/^State Representative District/.test(c.name)) return `State Representative, District ${c.district}`
  return c.name.replace(/^U\.S\. Senator$/, 'United States Senator').replace(' & ', ' and ')
}
function candidatesOf(c, office) {
  return c.candidates.map(x => {
    const [name, runningMate] = /Governor/.test(c.name) ? x.name.split(/ and /) : [x.name]
    return { name, party: PARTY[x.party] || (x.party === 'NP' ? null : x.party) || null, status: 'candidate',
      ...(runningMate ? { runningMate } : {}), ...(x.incumbent ? { incumbent: true } : {}), ...gradeFor(name, office) }
  })
}
const SCOPE = c => /^U\.S\. Representative/.test(c.name) ? 'congressional' : /^State Senator/.test(c.name) ? 'stateSenate'
  : /^State Representative/.test(c.name) ? 'stateHouse' : 'state'
const LEVEL = { state: 'Statewide', congressional: 'Federal', stateSenate: 'State Legislature', stateHouse: 'State Legislature' }
const stateContests = [...collect([...rows('ussenate.txt'), ...rows('Governor.txt'), ...rows('secofstate.txt'), ...rows('attorneygen.txt'),
  ...rows('ushouse.txt'), ...rows('LegislativeByDistrict.txt')]).values()]
const precinctRows = rows('allracesbyprecinct.txt')
// statewide offices not in a separate file (State Auditor, Supreme Court, Court of Appeals)
for (const c of collect(precinctRows, r => /^(0333|70\d\d)$/.test(r[3])).values()) if (!stateContests.some(s => s.officeId === c.officeId)) stateContests.push({ ...c, county: '' })
const races = stateContests.filter(c => c.candidates.length).map((c, i) => {
  const scope = /^70/.test(c.officeId) ? 'state' : SCOPE(c)
  const office = officeTitle(c)
  return {
    id: `mn-${slug(office)}`, office, category: c.name, level: /^70/.test(c.officeId) ? 'State Courts' : LEVEL[scope], scope,
    ...(scope !== 'state' ? { district: c.district.replace(/^0+/, '') } : {}),
    seats: 1, type: /^70/.test(c.officeId) ? 'nonpartisan' : 'partisan', description: c.candidates.length === 1 ? 'Unopposed.' : '',
    ballotOrder: Number(c.officeId) + i / 1000, candidates: candidatesOf(c, office),
  }
})

// ── geography ──
const mcdOfPrecinct = new Map(rows('PrctTbl.txt').map(r => [`${r[0]}|${r[1]}`, r[8]]))
const mcdName = new Map(rows('mcdtbl.txt').map(r => [`${r[0]}|${r[2]}`, r[3]]))
const countyName = new Map(rows('mcdtbl.txt').map(r => [r[0], r[1]]))
const precinctsOfMcd = new Map() // "county|mcd" → precinct count
for (const [k, mcd] of mcdOfPrecinct) { const key = `${k.split('|')[0]}|${mcd}`; precinctsOfMcd.set(key, (precinctsOfMcd.get(key) || 0) + 1) }
// num;NAME;countyId;County — the one district the table lists only by number gets its name
const SCHOOL_NAME_FIX = { '0728': 'ELK RIVER AREA' }
const schoolDistricts = rows('SchoolDistTbl.txt').map(r => (SCHOOL_NAME_FIX[r[0]] ? [r[0], SCHOOL_NAME_FIX[r[0]], ...r.slice(2)] : r))
const questionText = new Map()
for (const r of rows('BallotQuestions.txt')) {
  const [county, officeId, mcd, school, title, subtitle, ...text] = r
  questionText.set(`${county}|${officeId}|${mcd}|${school}|${title}`, { subtitle, text: text.join(';').replace(/\s{3,}/g, '\n\n').trim() })
}
const findText = (county, officeId, mcd, school, title) => questionText.get(`${county}|${officeId}|${mcd}|${school}|${title}`) ||
  [...questionText].find(([k]) => k.startsWith(`${county}|${officeId}|`) && k.endsWith(`|${title}`))?.[1] || null

// county/judicial contests and county questions: which precincts of each MCD carry them
const perCounty = new Map() // countyId → Map(contestKey → { contest, mcdHits: Map(mcd → precinct count) })
const seen = new Set()
for (const r of precinctRows) {
  if (/^0(1|2|3)\d\d$/.test(r[3]) || /^70/.test(r[3])) continue // statewide & district races handled above
  const pk = `${r[1]}|${r[2]}|${contestKey(r)}`
  const first = !seen.has(pk); seen.add(pk)
  if (!perCounty.has(r[1])) perCounty.set(r[1], new Map())
  const m = perCounty.get(r[1]); const k = contestKey(r)
  if (!m.has(k)) m.set(k, { rows: [], mcdHits: new Map() })
  const e = m.get(k); e.rows.push(r)
  if (first) { const mcd = mcdOfPrecinct.get(`${r[1]}|${r[2]}`); e.mcdHits.set(mcd, (e.mcdHits.get(mcd) || 0) + 1) }
}
const split = (county, hits) => {
  const mcds = [], mcdMaybe = []
  for (const [mcd, n] of hits) (n >= (precinctsOfMcd.get(`${county}|${mcd}`) || 1) ? mcds : mcdMaybe).push(mcd)
  return { mcds, ...(mcdMaybe.length ? { mcdMaybe } : {}) }
}

function localRace(c, id, extra) {
  const office = c.name
  return { id, office, category: c.name, seats: Number(c.name.match(/\(Elect (\d+)\)/)?.[1] || 1), type: 'nonpartisan', description: c.candidates.length === 1 ? 'Unopposed.' : '',
    ballotOrder: Number(c.officeId), candidates: candidatesOf(c, office), ...extra }
}
const toQuestion = (c, id, county, extra, mcd = '', school = '') => {
  const t = findText(county, c.officeId, mcd, school, c.name)
  return { id, name: t?.subtitle ? `${c.name}: ${titleCase(t.subtitle)}` : c.name, type: 'Local Public Question', statewide: false,
    ballotLanguage: t?.text || '', ...extra }
}

const localContests = [...collect([...rows('local.txt'), ...rows('hospital.txt')]).values()]
const schoolContests = [...collect([...rows('sdrace.txt'), ...rows('sdRaceQuestions.txt')]).values()]
const amendment = [...questionText].filter(([k]) => k.startsWith('88|')).map(([k, t], i) => ({
  id: `mn-amendment-${i + 1}`, name: `${k.split('|')[4]}: ${t.subtitle}`, type: 'Ratification Of State Constitutional Amendment', statewide: true, ballotLanguage: t.text,
}))

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })
const generatedAt = new Date().toISOString()
const sourceWriteTime = statSync(path.join(RAW, 'allracesbyprecinct.txt')).mtime.toISOString()
writeFileSync(path.join(OUT, '_statewide.json'), JSON.stringify({ state: 'MN', source: 'Minnesota Secretary of State', sourceWriteTime, generatedAt, races }))

const index = []
let countyRaceCount = 0, localQuestionCount = 0, missingText = 0
for (const [countyId, cname] of [...countyName].sort((a, b) => a[1].localeCompare(b[1]))) {
  const mcdsHere = [...mcdOfPrecinct].filter(([k]) => k.startsWith(`${countyId}|`)).map(([, m]) => m)
  const countyRaces = [], referendums = [...amendment]
  // county offices, county commissioners, district judges, soil & water, county questions
  for (const [k, e] of perCounty.get(countyId) || []) {
    const c = collect(e.rows).get(k)
    const where = split(countyId, e.mcdHits)
    const id = `mn-${slug(cname)}-${slug(c.name)}-${slug(c.district || '0')}`
    if (isQuestion(c)) { referendums.push(toQuestion(c, id, countyId, where)); localQuestionCount++; continue }
    if (!c.candidates.length) continue
    countyRaces.push(localRace(c, id, { scope: 'county', level: /Judge/.test(c.name) ? 'Courts' : 'County', ...where }))
  }
  // cities, townships, hospital districts (district field = MCD code)
  for (const c of localContests.filter(c => mcdsHere.includes(c.district))) {
    const area = mcdName.get(`${countyId}|${c.district}`) || ''
    const id = `mn-${slug(cname)}-${c.district}-${slug(c.name)}`
    const ward = /\bWard\b|\bDistrict\b|\bPrecinct\b/i.test(c.name.replace(/\(.*\)/, ''))
    const where = ward ? { mcds: [], mcdMaybe: [c.district] } : { mcds: [c.district] }
    if (isQuestion(c)) { referendums.push(toQuestion(c, id, countyId, where, c.district)); localQuestionCount++; continue }
    if (!c.candidates.length) continue
    countyRaces.push(localRace(c, id, { scope: /Township|Twp/i.test(area) ? 'township' : 'city', level: /Hospital/.test(c.name) ? 'Special District' : 'City', area, ...where }))
  }
  // school districts that reach this county (number 1 is Minneapolis SSD in Hennepin, Aitkin ISD elsewhere)
  const schoolsHere = schoolDistricts.filter(s => s[2] === countyId).map(s => ({ num: s[0], name: titleCase(s[1]) }))
  for (const s of schoolsHere) {
    const kind = s.num === '0001' ? (countyId === '27' ? 'SSD' : 'ISD') : null
    for (const c of schoolContests.filter(c => c.district === s.num && (!kind || c.name.includes(`${kind} #1)`)))) {
      const id = `mn-${slug(cname)}-sd${s.num}-${slug(c.name)}`
      if (isQuestion(c)) { referendums.push(toQuestion(c, id, countyId, { schoolNum: s.num, area: s.name }, '', s.num)); localQuestionCount++; continue }
      if (!c.candidates.length) continue
      countyRaces.push(localRace(c, id, { scope: 'school', level: 'School', area: s.name, schoolNum: s.num, ...(/\(Elect \d\)/.test(c.name) || /At Large/.test(c.name) ? {} : { maybe: true }) }))
    }
  }
  missingText += referendums.filter(q => !q.ballotLanguage).length
  countyRaceCount += countyRaces.length
  writeFileSync(path.join(OUT, `${slug(cname)}.json`), JSON.stringify({ state: 'MN', county: cname, source: 'Minnesota Secretary of State', generatedAt, localComplete: true, schoolDistricts: schoolsHere, races: countyRaces, referendums }))
  index.push({ county: cname, slug: slug(cname), races: countyRaces.length, referendums: referendums.length })
}
writeFileSync(path.join(OUT, '_index.json'), JSON.stringify({ sourceWriteTime, counties: index }, null, 1))
console.log(`Minnesota: ${races.length} statewide/district races (${races.reduce((a, r) => a + r.candidates.length, 0)} candidates, ${graded} graded), ${amendment.length} amendment(s), ${index.length} counties, ${countyRaceCount} county/local/school races, ${localQuestionCount} local questions (${missingText} missing text)`)
