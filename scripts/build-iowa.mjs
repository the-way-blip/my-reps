// Iowa Nov 3, 2026 general-election ballot data in the shared multi-state schema (see src/data/stateBallot.js).
// Inputs (data-raw/iowa-2026-general/, built from official sources):
//   candidates.json  Iowa Secretary of State candidate list (federal, statewide, legislature)
//   amendment.json   constitutional amendment, verbatim
//   judges.json      judges standing for retention + the counties that vote on each
// Hand-researched grades: data-raw/grades-ia/*.json (same six-value format as Michigan and Indiana).
// Writes public/data/ia/ballots/_statewide.json, _index.json and one file per county.
//   node scripts/build-iowa.mjs

import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const RAW = path.join(ROOT, 'data-raw/iowa-2026-general')
const GRADES_DIR = path.join(ROOT, 'data-raw/grades-ia')
const OUT = path.join(ROOT, 'public/data/ia/ballots')
const read = f => JSON.parse(readFileSync(path.join(RAW, f), 'utf8'))
const slug = s => String(s).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const cand = read('candidates.json')
const amend = read('amendment.json')
const judges = read('judges.json')

// ── grades (later files win, like Indiana) ──
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

// ── statewide + district races ──
const ORDER = { state: 100, congressional: 200, stateSenate: 300, stateHouse: 400 }
const LEVEL = { state: 'Statewide', congressional: 'Federal', stateSenate: 'State Legislature', stateHouse: 'State Legislature' }
const officeTitle = c => c.scope === 'congressional' ? `United States Representative, District ${c.district}`
  : c.scope === 'stateSenate' ? `State Senator, District ${c.district}`
  : c.scope === 'stateHouse' ? `State Representative, District ${c.district}` : c.office
let graded = 0
const races = cand.contests.map((c, i) => {
  const office = officeTitle(c)
  const candidates = c.candidates.map(x => {
    const g = gradeFor(x.name, office)
    if (g.grade || g.positions) graded++
    return { name: x.name, party: x.party || null, status: 'candidate', ...(x.runningMate ? { runningMate: x.runningMate } : {}), ...g }
  })
  return {
    id: `ia-${slug(office)}`, office, category: c.office, level: /United States Senator/.test(c.office) ? 'Federal' : LEVEL[c.scope],
    scope: c.scope, ...(c.district != null ? { district: c.district } : {}), seats: 1,
    type: 'partisan', description: c.candidates.length === 1 ? 'Unopposed.' : '', ballotOrder: ORDER[c.scope] + i, candidates,
  }
})

// ── ballot questions: Amendment 1 (statewide) + judges standing for retention (by county) ──
const questions = amend.amendments.map(a => ({
  id: `ia-amendment-${a.number}`,
  name: `${a.ballotHeading} — ${a.shortTitle}`,
  type: 'Ratification Of State Constitutional Amendment',
  statewide: true,
  ballotLanguage: [a.ballotQuestion, a.summary, a.fullTextAsPrinted].filter(Boolean).join('\n\n'),
}))
const judgeQ = j => ({
  id: `ia-retain-${slug(j.name)}`,
  name: `Retain ${j.court} Judge ${j.name}?${j.electionDistrict && j.electionDistrict !== 'statewide' ? ` (District ${j.electionDistrict})` : ''}`,
  type: `${j.court} Judge Retention`,
  statewide: false,
  ballotLanguage: `Shall ${j.name}, ${j.court} judge${j.electionDistrict && j.electionDistrict !== 'statewide' ? ` (Judicial Election District ${j.electionDistrict})` : ''}, be retained in office? Vote YES to keep the judge or NO to remove the judge.`,
})

const counties = [...new Set(Object.values(judges.electionDistricts).flatMap(d => d.counties))].sort()
if (counties.length !== 99) throw new Error(`expected 99 Iowa counties, got ${counties.length}`)

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })
const generatedAt = new Date().toISOString()
writeFileSync(path.join(OUT, '_statewide.json'), JSON.stringify({ state: 'IA', source: cand.source, sourceVersion: cand.sourceVersion, sourceWriteTime: cand.fetchedAt, generatedAt, races }))
const index = []
for (const county of counties) {
  const js = judges.judges.filter(j => j.counties === 'all' || (Array.isArray(j.counties) && j.counties.includes(county)))
  const referendums = [...questions, ...js.map(judgeQ)]
  writeFileSync(path.join(OUT, `${slug(county)}.json`), JSON.stringify({ state: 'IA', county, source: 'Iowa Secretary of State; Iowa Judicial Branch', generatedAt, races: [], referendums }))
  index.push({ county, slug: slug(county), races: 0, referendums: referendums.length })
}
writeFileSync(path.join(OUT, '_index.json'), JSON.stringify({ sourceVersion: cand.sourceVersion, counties: index }, null, 1))
console.log(`Iowa: ${races.length} statewide/district races, ${races.reduce((a, r) => a + r.candidates.length, 0)} candidates (${graded} graded), ${questions.length} amendment(s), ${judges.judges.length} judges across ${counties.length} counties`)
