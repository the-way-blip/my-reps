// Kentucky Nov 3, 2026 general-election ballot data in the shared multi-state schema (see src/data/stateBallot.js).
// Phase one: every contest filed with the Secretary of State — U.S. Senate, U.S. House, Kentucky Senate (even districts)
// and House, Supreme Court, Court of Appeals, Circuit and Family Court judges, District judges, Commonwealth's Attorney —
// plus Constitutional Amendment 1. Judicial and Commonwealth's Attorney races are placed by county using the judicial map.
// County offices (judge/executive, clerk, sheriff, magistrate…), city and school board races file with county clerks and
// aren't loaded yet: every county gets localComplete: false and a link to its official sample ballot on the SOS site.
// Inputs (data-raw/kentucky-2026-general/), transcribed from https://web.sos.ky.gov/CandidateFilings/ (2026 General Election):
//   federal.tsv, state-rep.tsv, other-judges.tsv (State Senator, appellate/circuit judges, Commonwealth's Attorney),
//   district-judge.tsv, judicial-map.tsv (county -> Supreme Court/appellate district, circuit, judicial district),
//   amendment-1.json (SOS 2026 Constitutional Amendments page)
// Write-in candidates aren't printed on the ballot and are left out, as for every other state.
// Hand-researched grades: data-raw/grades-ky/*.json (same six-value format and rules as every state, see RULES.md there).
//   node scripts/build-kentucky.mjs

import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const RAW = path.join(ROOT, 'data-raw/kentucky-2026-general')
const OUT = path.join(ROOT, 'public/data/ky/ballots')
const slug = s => String(s).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const tsv = f => {
  const [head, ...rows] = readFileSync(path.join(RAW, f), 'utf8').trim().split('\n').map(l => l.replace(/\r$/, '').split('\t'))
  return rows.map(r => Object.fromEntries(head.map((h, i) => [h, (r[i] ?? '').trim()])))
}
const active = rows => rows.filter(r => r.withdrawn !== 'yes' && r.party !== 'Write-In')
const amendment = JSON.parse(readFileSync(path.join(RAW, 'amendment-1.json'), 'utf8'))
const SOURCE = 'Kentucky Secretary of State candidate filings'

const PARTY = { 'Republican Party': 'republican', 'Democratic Party': 'democratic', Independent: 'independent', 'Libertarian Party': 'Libertarian', 'Kentucky Party': 'Kentucky Party', Nonpartisan: null }
const party = p => (p in PARTY ? PARTY[p] : p || null)
const ord = n => { const v = n % 100; return n + (['th', 'st', 'nd', 'rd'][(v - 20) % 10] || ['th', 'st', 'nd', 'rd'][v] || 'th') }

// ── grades (later files win) ──
const GRADES_DIR = path.join(ROOT, 'data-raw/grades-ky')
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
  if (valid(g.grade)) graded++
  return {
    ...(valid(g.grade) ? { grade: g.grade } : {}), ...(g.gradeNote ? { gradeNote: g.gradeNote } : {}),
    ...(g.positions && Object.values(g.positions).some(valid) ? { positions: g.positions, gradeJustifications: g.gradeJustifications || {} } : {}),
    ...(g.description ? { description: g.description } : {}), ...(g.website ? { website: g.website } : {}), ...(g.sources?.length ? { sources: g.sources } : {}),
  }
}

function race({ id, office, category, level, scope, district, type, order, rows }) {
  const candidates = rows.map(r => ({ name: r.name, party: party(r.party), status: 'candidate', ...gradeFor(r.name, office) }))
  return {
    id, office, category, level, scope, ...(district != null ? { district } : {}), seats: 1, type,
    description: candidates.length === 1 ? 'Unopposed.' : '', ballotOrder: order, candidates,
  }
}
const groupBy = (rows, key) => rows.reduce((m, r) => m.set(key(r), [...(m.get(key(r)) || []), r]), new Map())
const byNum = (a, b) => Number(a[0]) - Number(b[0])

// ── statewide file: federal, legislative ──
const fed = tsv('federal.tsv')
const others = tsv('other-judges.tsv')
const races = []
races.push(race({ id: 'ky-us-senator', office: 'United States Senator', category: 'US Senator', level: 'Federal', scope: 'state', type: 'partisan', order: 0, rows: active(fed.filter(r => r.office === 'US Senator')) }))
for (const [d, rows] of [...groupBy(active(fed.filter(r => r.office === 'US Representative')), r => r.district)].sort(byNum)) {
  races.push(race({ id: `ky-us-house-${d}`, office: `United States Representative, District ${d}`, category: 'US Representative', level: 'Federal', scope: 'congressional', district: Number(d), type: 'partisan', order: 10 + Number(d), rows }))
}
for (const [d, rows] of [...groupBy(active(others.filter(r => r.office === 'State Senator')), r => r.district)].sort(byNum)) {
  races.push(race({ id: `ky-state-senate-${d}`, office: `State Senator, District ${d}`, category: 'State Senator', level: 'State Legislature', scope: 'stateSenate', district: Number(d), type: 'partisan', order: 100 + Number(d), rows }))
}
for (const [d, rows] of [...groupBy(active(tsv('state-rep.tsv')), r => r.district)].sort(byNum)) {
  races.push(race({ id: `ky-state-house-${d}`, office: `State Representative, District ${d}`, category: 'State Representative', level: 'State Legislature', scope: 'stateHouse', district: Number(d), type: 'partisan', order: 200 + Number(d), rows }))
}

// ── judicial map and county-placed races ──
const map = tsv('judicial-map.tsv')
if (map.length !== 120) throw new Error(`judicial map covers ${map.length} counties, expected 120`)
const countyRaces = new Map(map.map(c => [c.county, []]))
const placed = []
// e.g. "District Judge, 2nd Judicial District, 1st Division"
function place(rows, { label, unit, category, level, type, order, counties }) {
  for (const [key, group] of groupBy(active(rows), r => `${r.district}|${r.division}`)) {
    const r0 = group[0]
    const office = [label, `${ord(Number(r0.district))} ${unit}`, r0.division && `${ord(Number(r0.division))} Division`].filter(Boolean).join(', ')
    const where = counties(r0)
    if (!where.length) throw new Error(`no counties for ${office}`)
    const rc = race({ id: `ky-${slug(office)}`, office, category, level, scope: 'county', type, order: order + Number(r0.district) + (Number(r0.division) || 0) / 100, rows: group })
    for (const c of where) countyRaces.get(c).push(rc)
    placed.push({ office, counties: where.length, candidates: group.length, key })
  }
}
const inCol = (col, v) => map.filter(c => String(Number(c[col])) === String(Number(v))).map(c => c.county)
place(others.filter(r => r.office === 'Justice of the Supreme Court'), { label: 'Justice of the Supreme Court', unit: 'Supreme Court District', category: 'Justice of the Supreme Court', level: 'Courts', type: 'nonpartisan', order: 300, counties: r => inCol('supreme_district', r.district) })
place(others.filter(r => r.office === 'Judge of the Court of Appeals'), {
  label: 'Judge of the Court of Appeals', unit: 'Appellate District', category: 'Judge of the Court of Appeals', level: 'Courts', type: 'nonpartisan', order: 310,
  // Divisions are seats elected by the whole appellate district (each district = its Supreme Court district, KRS 22A.010)
  counties: r => inCol('appeals_district', r.district),
})
place(others.filter(r => r.office === 'Circuit Judge'), { label: 'Circuit Judge', unit: 'Judicial Circuit', category: 'Circuit Judge', level: 'Courts', type: 'nonpartisan', order: 400, counties: r => inCol('circuit', r.district) })
place(others.filter(r => r.office === 'Circuit Judge Family Court'), { label: 'Circuit Judge, Family Court', unit: 'Judicial Circuit', category: 'Circuit Judge, Family Court', level: 'Courts', type: 'nonpartisan', order: 470, counties: r => inCol('circuit', r.district) })
place(tsv('district-judge.tsv'), { label: 'District Judge', unit: 'Judicial District', category: 'District Judge', level: 'Courts', type: 'nonpartisan', order: 540, counties: r => inCol('district_court', r.district) })
place(others.filter(r => r.office === "Commonwealth's Attorney"), { label: "Commonwealth's Attorney", unit: 'Judicial Circuit', category: "Commonwealth's Attorney", level: 'County', type: 'partisan', order: 610, counties: r => inCol('circuit', r.district) })

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })
const generatedAt = new Date().toISOString()
writeFileSync(path.join(OUT, '_statewide.json'), JSON.stringify({ state: 'KY', source: SOURCE, sourceWriteTime: generatedAt, generatedAt, races }))

const issue = { id: 'ky-constitutional-amendment-1', name: 'Constitutional Amendment 1 — Governor\'s pardons and commutations near a gubernatorial election', type: 'Constitutional Amendment', statewide: true, ballotLanguage: amendment.ballotLanguage }
// Official sample ballots the Secretary of State posts for each county (Jefferson County links to its clerk's lookup)
const SAMPLE = { Jefferson: 'https://strap.jeffersoncountyclerk.org/WhereDoIVote/', Lewis: 'https://web.sos.ky.gov/ballots/Lewisv2%202026G.pdf' }
const sampleBallot = county => SAMPLE[county] || `https://web.sos.ky.gov/ballots/${encodeURIComponent(county)}%202026G.pdf`

const index = []
for (const c of map) {
  const list = countyRaces.get(c.county).sort((a, b) => a.ballotOrder - b.ballotOrder)
  writeFileSync(path.join(OUT, `${slug(c.county)}.json`), JSON.stringify({
    state: 'KY', county: c.county, source: SOURCE, generatedAt, localComplete: false, sampleBallotUrl: sampleBallot(c.county),
    races: list, referendums: [issue],
  }))
  index.push({ county: c.county, slug: slug(c.county), supremeDistrict: Number(c.supreme_district), appellateDistrict: Number(c.appeals_district), circuit: Number(c.circuit), judicialDistrict: Number(c.district_court), races: list.length, referendums: 1 })
}
writeFileSync(path.join(OUT, '_index.json'), JSON.stringify({ counties: index }, null, 1))
const n = races.reduce((a, r) => a + r.candidates.length, 0)
console.log(`Kentucky: ${races.length} statewide/district races (${n} candidates, ${graded} graded), ${placed.length} judicial/prosecutor races placed by county (${placed.reduce((a, p) => a + p.candidates, 0)} candidates), Amendment 1, ${map.length} counties`)
