// Ohio Nov 3, 2026 general-election ballot data in the shared multi-state schema (see src/data/stateBallot.js).
// Phase one: every contest the Secretary of State runs statewide — Governor and other statewide offices,
// Supreme Court, U.S. Senate, U.S. House, Ohio Senate and House, Court of Appeals — plus State Issue 3.
// County offices and local issues come from each county board of elections where we've collected them
// (data-raw/ohio-2026-general/counties/<slug>.json, see RULES.md there); other counties get localComplete: false,
// so the ballot page points those voters to their county board's sample ballot.
// Inputs (data-raw/ohio-2026-general/):
//   contests.json   parsed from the SOS election-night results workbook (all contests + candidates, 0 votes)
//   issue-3.json    Ohio Ballot Board certified ballot language for State Issue 3
// Hand-researched grades: data-raw/grades-oh/*.json (same six-value format as every state).
//   node scripts/build-ohio.mjs

import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const RAW = path.join(ROOT, 'data-raw/ohio-2026-general')
const GRADES_DIR = path.join(ROOT, 'data-raw/grades-oh')
const OUT = path.join(ROOT, 'public/data/oh/ballots')
const read = f => JSON.parse(readFileSync(path.join(RAW, f), 'utf8'))
const slug = s => String(s).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const src = read('contests.json')
const issue3 = read('issue-3.json')

// Ohio's 12 appellate districts (R.C. 2501.01)
const APPEALS = {
  1: ['Hamilton'],
  2: ['Champaign', 'Clark', 'Darke', 'Greene', 'Miami', 'Montgomery'],
  3: ['Allen', 'Auglaize', 'Crawford', 'Defiance', 'Hancock', 'Hardin', 'Henry', 'Logan', 'Marion', 'Mercer', 'Paulding', 'Putnam', 'Seneca', 'Shelby', 'Union', 'Van Wert', 'Wyandot'],
  4: ['Adams', 'Athens', 'Gallia', 'Highland', 'Hocking', 'Jackson', 'Lawrence', 'Meigs', 'Pickaway', 'Pike', 'Ross', 'Scioto', 'Vinton', 'Washington'],
  5: ['Ashland', 'Coshocton', 'Delaware', 'Fairfield', 'Guernsey', 'Holmes', 'Knox', 'Licking', 'Morgan', 'Morrow', 'Muskingum', 'Perry', 'Richland', 'Stark', 'Tuscarawas'],
  6: ['Erie', 'Fulton', 'Huron', 'Lucas', 'Ottawa', 'Sandusky', 'Williams', 'Wood'],
  7: ['Belmont', 'Carroll', 'Columbiana', 'Harrison', 'Jefferson', 'Mahoning', 'Monroe', 'Noble'],
  8: ['Cuyahoga'],
  9: ['Lorain', 'Medina', 'Summit', 'Wayne'],
  10: ['Franklin'],
  11: ['Ashtabula', 'Geauga', 'Lake', 'Portage', 'Trumbull'],
  12: ['Brown', 'Butler', 'Clermont', 'Clinton', 'Fayette', 'Madison', 'Preble', 'Warren'],
}
const counties = Object.values(APPEALS).flat().sort()
if (counties.length !== 88) throw new Error(`appellate map covers ${counties.length} counties, expected 88`)

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
  if (valid(g.grade)) graded++
  return {
    ...(valid(g.grade) ? { grade: g.grade } : {}), ...(g.gradeNote ? { gradeNote: g.gradeNote } : {}),
    ...(g.positions && Object.values(g.positions).some(valid) ? { positions: g.positions, gradeJustifications: g.gradeJustifications || {} } : {}),
    ...(g.description ? { description: g.description } : {}), ...(g.website ? { website: g.website } : {}), ...(g.sources?.length ? { sources: g.sources } : {}),
  }
}

const PARTY = { R: 'republican', D: 'democratic', L: 'Libertarian', G: 'Green' }
const num = s => Number(s)
function classify(title) {
  let m
  if ((m = title.match(/^Representative to Congress - District (\d+)/))) return { scope: 'congressional', district: num(m[1]), office: `United States Representative, District ${num(m[1])}`, level: 'Federal' }
  if ((m = title.match(/^State Senator - District (\d+)/))) return { scope: 'stateSenate', district: num(m[1]), office: `State Senator, District ${num(m[1])}`, level: 'State Legislature' }
  if ((m = title.match(/^State Representative - District (\d+)/))) return { scope: 'stateHouse', district: num(m[1]), office: `State Representative, District ${num(m[1])}`, level: 'State Legislature' }
  if ((m = title.match(/^Judge of the Court of Appeals - District (\d+)\s*(.*)$/))) return { scope: 'appeals', district: num(m[1]), office: `Judge of the Court of Appeals, District ${num(m[1])}${m[2] ? ` (${m[2].replace(/^-\s*/, '')})` : ''}`, level: 'Courts' }
  if (/^U\.S\. Senator/.test(title)) return { scope: 'state', office: 'United States Senator', level: 'Federal', note: title.replace(/^U\.S\. Senator\s*/, '') }
  if (/^Justice of the Supreme Court/.test(title)) return { scope: 'state', office: title.replace(/ Term Commencing /, ' (Term Commencing ') + ')', level: 'State Courts' }
  if (/Issue/.test(title)) return null
  return { scope: 'state', office: title, level: 'Statewide' }
}

function race(c, info, i) {
  const candidates = c.candidates.filter(x => !x.writeIn).map(x => ({
    name: x.name.replace(/\s{2,}/g, ' '), party: PARTY[x.party] || (x.party ? x.party : null), status: 'candidate',
    ...(x.runningMate ? { runningMate: x.runningMate } : {}), ...gradeFor(x.name.replace(/\s{2,}/g, ' '), info.office),
  }))
  const judicial = info.level === 'Courts' || info.level === 'State Courts'
  return {
    id: `oh-${slug(info.office)}`, office: info.office, category: c.title, level: info.level,
    scope: info.scope === 'appeals' ? 'county' : info.scope, ...(info.district && info.scope !== 'appeals' ? { district: info.district } : {}),
    seats: 1, type: judicial ? 'nonpartisan' : 'partisan',
    description: [info.note, candidates.length === 1 ? 'Unopposed.' : ''].filter(Boolean).join(' · '),
    ballotOrder: i, candidates,
  }
}

const parsed = src.contests.map((c, i) => ({ c, info: classify(c.title), i })).filter(x => x.info)
const races = parsed.filter(x => x.info.scope !== 'appeals').map(x => race(x.c, x.info, x.i))
const appeals = parsed.filter(x => x.info.scope === 'appeals')

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })
const generatedAt = new Date().toISOString()
writeFileSync(path.join(OUT, '_statewide.json'), JSON.stringify({ state: 'OH', source: src.source, sourceWriteTime: generatedAt, generatedAt, races }))

const issue = { id: 'oh-state-issue-3', name: `State Issue 3 — ${issue3.title.replace(/^./, s => s.toUpperCase())}`, type: 'Ratification Of State Constitutional Amendment', statewide: true, ballotLanguage: issue3.ballotLanguage }
// ── county boards of elections: county offices, municipal/township/school races, local issues ──
const COUNTY_DIR = path.join(RAW, 'counties')
const LEVEL = { county: 'County', city: 'City', township: 'Township', school: 'School' }
const PARTY_WORD = { republican: 'republican', democratic: 'democratic', libertarian: 'Libertarian', green: 'Green', independent: 'independent' }
function localFor(county) {
  const f = path.join(COUNTY_DIR, `${slug(county)}.json`)
  if (!existsSync(f)) return { found: false, races: [], issues: [], sources: [] }
  const c = JSON.parse(readFileSync(f, 'utf8'))
  const races = (c.races || []).filter(r => r.candidates?.length || r.writeInOnly).map((r, i) => {
    const scope = LEVEL[r.scope] ? r.scope : 'county'
    const office = scope !== 'county' || new RegExp(`^${county}\\b`).test(r.office) ? r.office
      : /^County\b/.test(r.office) ? `${county} ${r.office}` : `${county} County ${r.office}`
    const seats = r.seats || 1
    // Seats elected by a sub-county district (county council, ward) can't be pinned to an address
    const maybe = scope === 'county' && /\b(District|Ward)\s+\d+/i.test(r.office)
    return {
      id: `oh-${slug(county)}-${slug(r.office)}${r.area ? '-' + slug(r.area) : ''}-${i}`, office, category: r.office, level: LEVEL[scope], scope,
      ...(r.area ? { area: r.area } : {}), seats, type: r.candidates.some(x => x.party) ? 'partisan' : 'nonpartisan',
      description: [seats > 1 ? `Vote for up to ${seats}.` : '', r.writeInOnly ? 'Write-in candidates only.' : r.candidates.length === 1 ? 'Unopposed.' : '', maybe ? 'May be on your ballot: only voters in this district vote on this seat. Check your county board of elections\' sample ballot.' : ''].filter(Boolean).join(' '),
      ...(maybe ? { maybe: true } : {}),
      ballotOrder: 500 + i,
      candidates: r.candidates.map(x => ({ name: x.name, party: x.party ? (PARTY_WORD[x.party] || x.party) : null, status: 'candidate' })),
    }
  })
  const issues = (c.issues || []).map((q, i) => ({
    id: `oh-${slug(county)}-q-${i}`, name: q.name, type: 'Local Public Question', statewide: false,
    scope: LEVEL[q.scope] ? q.scope : 'county', ...(q.area ? { area: q.area } : {}), ballotLanguage: q.ballotLanguage || '',
  }))
  return { found: !!c.found, partial: !!c.partial, races, issues, sources: c.sources || [] }
}

const index = []
let withLocal = 0
for (const county of counties) {
  const district = Object.entries(APPEALS).find(([, cs]) => cs.includes(county))[0]
  const local = localFor(county)
  if (local.found) withLocal++
  const countyRaces = [...appeals.filter(x => x.info.district === Number(district)).map(x => race(x.c, x.info, x.i)), ...local.races]
  writeFileSync(path.join(OUT, `${slug(county)}.json`), JSON.stringify({
    state: 'OH', county, source: local.found ? 'Ohio Secretary of State; county board of elections' : 'Ohio Secretary of State', generatedAt,
    localComplete: local.found && !local.partial, localSources: local.sources, races: countyRaces, referendums: [issue, ...local.issues],
  }))
  index.push({ county, slug: slug(county), appealsDistrict: Number(district), races: countyRaces.length, referendums: 1 + local.issues.length, localFound: local.found })
}
writeFileSync(path.join(OUT, '_index.json'), JSON.stringify({ counties: index }, null, 1))
console.log(`Ohio: ${withLocal} counties with board-of-elections data; ${races.length} statewide/district races (${races.reduce((a, r) => a + r.candidates.length, 0)} candidates, ${graded} graded), ${appeals.length} Court of Appeals races across 12 districts, Issue 3, ${counties.length} counties`)
