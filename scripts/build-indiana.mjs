// Indiana Nov 3, 2026 general-election ballot data from the state's election-night results site
// (enr.indianavoters.in.gov), which is pre-loaded with every contest and candidate at 0 votes.
//
//   node scripts/build-indiana.mjs            fetch + build
//   node scripts/build-indiana.mjs --cached   rebuild from data-raw/indiana-2026-general/
//
// Writes public/data/in/ballots/<county>.json — one per county: every race whose region includes
// that county, tagged with a scope (district / county / township / town / city / school) so the
// app can pick the ones for a voter's address — plus that county's public questions.

import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const RAW = path.join(ROOT, 'data-raw/indiana-2026-general')
const OUT = path.join(ROOT, 'public/data/in/ballots')
const BASE = 'https://enr.indianavoters.in.gov/site/data'
const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36' }
const cached = process.argv.includes('--cached')

mkdirSync(RAW, { recursive: true })
mkdirSync(OUT, { recursive: true })

const arr = x => (x == null ? [] : Array.isArray(x) ? x : [x])
const slug = s => String(s).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

async function getJson(name) {
  const file = path.join(RAW, `${name}.json`)
  if (cached && existsSync(file)) return JSON.parse(readFileSync(file, 'utf8').replace(/^﻿/, ''))
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(`${BASE}/${name}.json`, { headers: UA })
    if (res.ok) {
      const text = (await res.text()).replace(/^﻿/, '')
      writeFileSync(file, text)
      return JSON.parse(text)
    }
    if (res.status === 404) return null
    await new Promise(r => setTimeout(r, 1000 * attempt))
  }
  throw new Error(`fetch failed: ${name}`)
}

const settings = (await getJson('settings')).Root
const V = settings.VersionType
const parties = Object.fromEntries(arr(settings.PolParties?.PolParty).map(p => [p.POLITICALPARTYID, p.PARTY_NAME]))
const sw = (await getJson(`statewideElectionsC_${V}`)).Root

const categories = []
for (const h of arr(sw.List)) for (const it of arr(h.Items?.Item)) categories.push({ id: it.OFFICECATEGORYID, name: it.OFFICE_CATEGORY_NAME, heading: h.Heading, description: it.OFFICE_CATEGORY_DESCRIPTION })

function partyOf(c) {
  const ab = c.PARTY ?? c.PARTY_ABBREV
  if (ab === 'R') return 'republican'
  if (ab === 'D') return 'democratic'
  if (ab === 'L') return 'libertarian'
  const name = parties[c.POLITICALPARTYID]
  return name && !/^\(\s*\)$/.test(name) ? name : null
}

// Scope = which voters see the race. Area = the township / town / city / school corporation name.
function classify(cat, title) {
  const t = title.replace(/\s+/g, ' ').trim()
  const name = cat.name
  if (name === 'US Representative') return { scope: 'congressional', district: ordinalDistrict(t), level: 'Federal' }
  if (name === 'State Senator') return { scope: 'stateSenate', district: num(t), level: 'State Legislature' }
  if (name === 'State Representative') return { scope: 'stateHouse', district: num(t), level: 'State Legislature' }
  if (['Secretary of State', 'State Comptroller (Auditor of State)', 'Treasurer of State'].includes(name)) return { scope: 'state', level: 'Statewide' }
  if (name === 'School Board Member') {
    const area = t.replace(/,.*$/, '').replace(/\s+School Board.*$/i, '').trim()
    return { scope: 'school', area, level: 'School Board' }
  }
  if (name === 'Township Trustee' || name === 'Township Board Member' || name === 'Township Assessor') {
    const area = t.replace(/,.*$/, '').replace(/\s+(Township\s+)?(Trustee|Board( Member)?|Assessor)\b.*$/i, '').replace(/\s+Township$/i, '').trim()
    return { scope: 'township', area, level: 'Township' }
  }
  if (name === 'Town Council Member' || name === 'Town Clerk-Treasurer') {
    const area = t.replace(/,.*$/, '').replace(/\s+Town\s+(Council|Clerk).*$/i, '').trim()
    return { scope: 'town', area, level: 'Town' }
  }
  if (['Mayor', 'City Clerk or Clerk/Treasurer', 'Judge, City Court', 'City-County or City Common Council Member'].includes(name)) {
    const m = t.match(/^Mayor Of (.+)$/i) || t.match(/^(.+?)\s+City\b/i)
    return { scope: 'city', area: m ? m[1].trim() : t, level: 'City' }
  }
  if (name === 'Judge, Small Claims Court' || name === 'Constable of Small Claims Court') {
    const m = t.match(/,\s*([A-Za-z .'-]+?)\s+(Twp|Township)\.?(,|$)/i)
    return m ? { scope: 'township', area: m[1].trim(), level: 'Judicial' } : { scope: 'county', level: 'Judicial' }
  }
  if (/^Judge/.test(name) || name === 'Prosecuting Attorney') return { scope: 'county', level: 'Judicial' }
  return { scope: 'county', level: 'County' }
}
// Districted local seats: not every voter in the county/school corporation votes on every one
function districtNote(scope, catName, title) {
  if (!/District|Dist\b/i.test(title)) return ''
  if (catName === 'County Council Member') return 'Only voters in this council district vote on this seat — check your sample ballot.'
  if (scope === 'school') return 'Some school boards elect district seats only by voters in that district — check your sample ballot.'
  return ''
}
const num = t => { const m = t.match(/District\s+0*(\d+)/i); return m ? Number(m[1]) : null }
const ORD = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth']
const ordinalDistrict = t => { const m = t.match(/,\s*(\w+)\s+District/i); return m ? ORD.indexOf(m[1].toLowerCase()) + 1 || null : num(t) }

// Some counties enter names in ALL CAPS — normalize those (leave mixed-case names alone)
const fixCase = n => (n === n.toUpperCase() && /[A-Z]{2}/.test(n)
  ? n.toLowerCase().replace(/(^|[\s(\-'.])([a-z])/g, (m, a, b) => a + b.toUpperCase()).replace(/\b(Ii|Iii|Iv)\b/g, x => x.toUpperCase()).replace(/\bMc([a-z])/g, (m, a) => 'Mc' + a.toUpperCase())
  : n)
const cleanOffice = (cat, t) => t.replace(/\s+/g, ' ').replace(/\bOf\b/g, 'of').replace(/\bThe\b/g, 'the').trim()

function raceFrom(cat, r, countyName) {
  const cls = classify(cat, r.OFFICE_TITLE)
  const seats = Number(r.NumofSeats) || 1
  // Declared write-ins ("(W/I)") are not printed on the ballot — keep them out of the candidate list
  const all = arr(r.Candidates?.Candidate)
  const isWriteIn = c => /\(W\/I\)/i.test(c.NAME_ON_BALLOT)
  const cands = all.filter(c => !isWriteIn(c)).map(c => ({ name: fixCase(c.NAME_ON_BALLOT.replace(/\s+/g, ' ').trim()), party: partyOf(c), status: 'candidate' }))
  const writeIns = all.filter(isWriteIn).length
  const partisan = cands.some(c => c.party)
  let office = cleanOffice(cat, r.OFFICE_TITLE)
  // County-level titles like "Sheriff" or "Council Dist 1" need the county for context
  if (cls.scope === 'county' && !/county|court|prosecut/i.test(office)) office = `${countyName} County ${office}`
  return {
    id: `in-${slug(countyName)}-${r.OFFICEID}`,
    officeId: r.OFFICEID,
    office,
    category: cat.name,
    level: cls.level,
    scope: cls.scope,
    ...(cls.area ? { area: cls.area } : {}),
    ...(cls.district != null ? { district: cls.district } : {}),
    seats,
    type: partisan ? 'partisan' : 'nonpartisan',
    description: [seats > 1 ? `Vote for up to ${seats}.` : '', districtNote(cls.scope, cat.name, r.OFFICE_TITLE)].filter(Boolean).join(' '),
    ballotOrder: Number(r.BALLOT_ORDER) || 999,
    candidates: cands,
    ...(writeIns ? { declaredWriteIns: writeIns } : {}),
  }
}

// ── Fetch every office category; distribute races to counties ──
const counties = new Map() // fips -> { name, fips, office, races: Map(officeId -> race) }
const districtRaces = new Map() // officeId -> race (statewide + district races)
for (const cat of categories) {
  const j = await getJson(`OffCatC_${cat.id}_${V}`)
  if (!j) { console.warn('missing category', cat.id, cat.name); continue }
  for (const reg of arr(j.Root.OfficeCategory?.Regions?.Region)) {
    // District-mapped categories (US House, state legislature) list races by district, not county
    if (reg.MAP_JURISDICTION_TYPE === 'District' || !reg.MAP_FIPS) {
      for (const r of arr(reg.Races?.Race ?? reg.RegionSummary?.Race)) if (!districtRaces.has(r.OFFICEID)) districtRaces.set(r.OFFICEID, raceFrom(cat, r, 'Indiana'))
      continue
    }
    const fips = reg.MAP_FIPS
    if (!counties.has(fips)) counties.set(fips, { name: reg.MAP_JURISDICTION_NAME, fips, office: reg.Office_Info, races: new Map() })
    const c = counties.get(fips)
    for (const r of arr(reg.RegionSummary?.Race)) if (!c.races.has(r.OFFICEID)) c.races.set(r.OFFICEID, raceFrom(cat, r, c.name))
  }
  process.stdout.write('.')
}
console.log()

// ── Public questions per county ──
const STATE_Q = /^Public Question #?\s*\d/i
let nRef = 0
for (const c of counties.values()) {
  const j = await getJson(`JurR_${c.fips}_${V}`)
  const refs = arr(j?.Root?.Region?.Reporting_Regions?.Regions?.Referendums?.Referendum)
  c.referendums = refs.map((q, i) => ({
    id: `in-${slug(c.name)}-q-${slug(q.REFERENDUM_TITLE || String(i))}`,
    name: /referendum|question|retention/i.test(q.REFERENDUM_TITLE || '') ? q.REFERENDUM_TITLE.trim() : `${(q.REFERENDUM_TITLE || '').trim()} — public question`,
    type: q.REFERENDUM_TYPE_NAME?.trim() || 'Public Question',
    statewide: STATE_Q.test(q.REFERENDUM_TITLE || '') && /constitution/i.test(q.REFERENDUM_TYPE_NAME || ''),
    ballotLanguage: (q.REFERENDUM_TEXT || '').replace(/\r\n/g, '\n').trim(),
  }))
  nRef += c.referendums.length
}

// Statewide + district races (same for every county) live in one file
for (const c of counties.values()) for (const [id, r] of c.races) if (['state', 'congressional', 'stateSenate', 'stateHouse'].includes(r.scope)) { if (!districtRaces.has(id)) districtRaces.set(id, { ...r, id: `in-${id}` }); c.races.delete(id) }
const statewide = [...districtRaces.values()].map(r => ({ ...r, id: `in-${r.officeId}` })).sort((a, b) => a.ballotOrder - b.ballotOrder || (a.district ?? 0) - (b.district ?? 0))
writeFileSync(path.join(OUT, '_statewide.json'), JSON.stringify({ state: 'IN', sourceVersion: settings.VersionCode, generatedAt: new Date().toISOString(), races: statewide }))
console.log(`statewide/district races: ${statewide.length}`)

// ── Write ──
let nRaces = 0, nCands = 0
const index = []
for (const c of [...counties.values()].sort((a, b) => a.name.localeCompare(b.name))) {
  const races = [...c.races.values()].sort((a, b) => a.ballotOrder - b.ballotOrder || a.office.localeCompare(b.office))
  nRaces += races.length; nCands += races.reduce((a, r) => a + r.candidates.length, 0)
  const file = { state: 'IN', county: c.name, fips: c.fips, source: 'Indiana Election Division ENR (enr.indianavoters.in.gov)', sourceVersion: settings.VersionCode, generatedAt: new Date().toISOString(), electionOffice: c.office, races, referendums: c.referendums }
  writeFileSync(path.join(OUT, `${slug(c.name)}.json`), JSON.stringify(file))
  index.push({ county: c.name, slug: slug(c.name), fips: c.fips, races: races.length, referendums: c.referendums.length })
}
writeFileSync(path.join(OUT, '_index.json'), JSON.stringify({ sourceVersion: settings.VersionCode, counties: index }, null, 1))
console.log(`Indiana: ${counties.size} counties, ${nRaces} county-race rows, ${nCands} candidate rows, ${nRef} public-question rows (source ${settings.VersionCode})`)
