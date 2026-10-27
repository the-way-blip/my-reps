#!/usr/bin/env node
// Builds public/data/ballots/<county>.json from the Michigan SOS (MVIC) sample-ballot scrape
// in data-raw/mvic-2026-general. Each file holds every local race and proposal for every
// city/township in that county, enriched with grades from the hand-researched data files.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'fs'
import { gunzipSync } from 'zlib'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const RAW = path.join(ROOT, 'data-raw/mvic-2026-general')
const OUT = path.join(ROOT, 'public/data/ballots')
mkdirSync(OUT, { recursive: true })

// ───────────────────────── load raw scrape ─────────────────────────
const counties = {}
// chunk-NN files are consecutive slices of ONE base64(gzip(JSON)) stream — concatenate before decoding
const chunkFiles = readdirSync(RAW).filter(f => f.startsWith('chunk-')).sort()
if (chunkFiles.length) {
  const b64 = chunkFiles.map(f => readFileSync(path.join(RAW, f), 'utf8').trim()).join('')
  const json = JSON.parse(gunzipSync(Buffer.from(b64, 'base64')).toString('utf8'))
  for (const c of (Array.isArray(json) ? json : [json])) counties[c.county] = c
}
for (const f of readdirSync(RAW)) {
  if (f.startsWith('county-') && f.endsWith('.json')) {
    const c = JSON.parse(readFileSync(path.join(RAW, f), 'utf8'))
    counties[c.county] = c
  }
}
console.log(`loaded ${Object.keys(counties).length} counties from ${RAW}`)

// ───────────────────────── enrichment index ─────────────────────────
// Run with: node --import ./scripts/ext-loader.mjs scripts/build-official-ballots.mjs
const bundle = rel => import(pathToFileURL(path.join(ROOT, rel)).href)
const STOP = new Set(['county', 'township', 'city', 'village', 'school', 'schools', 'district', 'public', 'community', 'area', 'board', 'court', 'judge', 'the', 'of', 'and', 'charter', 'michigan', 'college', 'library', 'incumbent', 'challenger'])
const tokens = s => String(s || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter(t => t.length >= 4 && !STOP.has(t))
function nameKey(n) {
  const parts = String(n || '').toLowerCase().replace(/["“”().,']/g, ' ').replace(/\b(jr|sr|ii|iii|iv)\b/g, ' ').split(/\s+/).filter(Boolean)
  if (parts.length < 2) return parts.join(' ')
  return parts[0] + ' ' + parts[parts.length - 1]
}
const index = new Map()
function addPerson(p) { const k = nameKey(p.name); if (!k) return; if (!index.has(k)) index.set(k, []); index.get(k).push(p) }
function walk(v, pool, ctx, incumbentPool) {
  if (Array.isArray(v)) return v.forEach(x => walk(x, pool, ctx, incumbentPool))
  if (!v || typeof v !== 'object') return
  const nextCtx = ctx + ' ' + ['district', 'county', 'court', 'office', 'jurisdiction', 'name', 'title'].map(k => typeof v[k] === 'string' ? v[k] : '').join(' ')
  if (typeof v.name === 'string' && ('grade' in v || v.description || v.title || v.party)) {
    addPerson({ name: v.name, grade: v.grade ?? null, gradeNote: v.gradeNote || null, description: v.description || v.title || null, website: v.website || null, party: v.party || null, status: v.status || (incumbentPool ? 'incumbent' : null), pool, ctx: tokens(nextCtx) })
  }
  for (const k of Object.keys(v)) if (k !== 'name') walk(v[k], pool, nextCtx, incumbentPool)
}
{
  const nov = await bundle('src/data/michiganNovember2026.js')
  for (const [k, v] of Object.entries(nov)) if (typeof v === 'object') walk(v, 'nov', k, false)
  const jud = await bundle('src/data/michiganJudicial2026.js')
  for (const k of ['courtOfAppeals2026', 'circuitCourt2026', 'probateCourt2026', 'districtCourt2026']) walk(jud[k], 'judicial', k, false)
  const loc = await bundle('src/data/michiganLocal.js')
  for (const k of ['MI_COUNTY_OFFICIALS', 'MI_CITY_OFFICIALS', 'MI_TOWNSHIP_OFFICIALS', 'MI_SCHOOL_BOARDS', 'MI_VILLAGE_OFFICIALS']) walk(loc[k], 'incumbent', k, true)
  const cty = await bundle('src/data/michiganCounties.js')
  walk(cty.default, 'incumbent', 'MI_COUNTIES', true)
  const pri = await bundle('src/data/michiganPrimary2026.js')
  for (const k of ['COUNTY_EXECUTIVE_RACES', 'COUNTY_EXEC_RACES', 'LOCAL_RACES']) if (pri[k]) walk(pri[k], 'nov', k, false)
  if (typeof pri.getGeneralLocalRaces === 'function') {
    for (const c of Object.keys(cty.default)) walk(pri.getGeneralLocalRaces({ county: c }), 'nov', c, false)
  }
}
console.log(`enrichment index: ${index.size} distinct names`)

// Hand-researched grade overrides (data-raw/grades/*.json) take precedence over the name index
const OVERRIDES = new Map()
{
  const dir = path.join(ROOT, 'data-raw/grades')
  let files = []
  try { files = readdirSync(dir).filter(f => f.endsWith('.json')) } catch { files = [] }
  for (const f of files) {
    let arr = []
    try { arr = JSON.parse(readFileSync(path.join(dir, f), 'utf8')) } catch (e) { console.warn('bad grades file', f, e.message); continue }
    for (const o of arr) {
      if (!o?.name) continue
      const k = `${nameKey(o.name)}|${String(o.county || '').replace(/ county$/i, '').toLowerCase()}`
      OVERRIDES.set(k, { name: o.name, status: o.status || null, grade: o.grade && o.grade !== 'null' ? o.grade : null, gradeNote: o.gradeNote || null, description: o.description || null, website: o.website || null, officeTokens: tokens(o.office || '').filter(t => !tokens(o.county || '').includes(t)), sources: o.sources || [] })
    }
  }
  console.log(`grade overrides: ${OVERRIDES.size} candidates from ${files.length} files`)
}

function enrich(cand, raceKind, ctxTokens, countyName) {
  const ov = OVERRIDES.get(`${nameKey(cand.n)}|${String(countyName || '').replace(/ county$/i, '').toLowerCase()}`)
  if (ov && (ov.officeTokens.length === 0 || ov.officeTokens.some(t => ctxTokens.includes(t)))) {
    return { grade: ov.grade, gradeNote: ov.gradeNote, description: ov.description, website: ov.website, status: ov.status, pool: 'override', researched: true }
  }
  const list = index.get(nameKey(cand.n))
  if (!list || list.length === 0) return null
  const poolPref = raceKind === 'judicial' ? ['judicial', 'nov', 'incumbent'] : ['nov', 'incumbent', 'judicial']
  const overlap = e => e.ctx.filter(t => ctxTokens.includes(t)).length
  const graded = list.filter(e => e.grade)
  const pick = (arr) => {
    if (arr.length === 1) return arr[0]
    const withCtx = arr.filter(e => overlap(e) > 0).sort((a, b) => overlap(b) - overlap(a))
    if (withCtx.length) return withCtx[0]
    return null
  }
  for (const pool of poolPref) {
    const sub = graded.filter(e => e.pool === pool)
    const hit = pick(sub)
    if (hit) return hit
  }
  for (const pool of poolPref) {
    const hit = pick(list.filter(e => e.pool === pool))
    if (hit) return hit
  }
  return null
}

// ───────────────────────── helpers ─────────────────────────
const SMALL = new Set(['of', 'the', 'and', 'in', 'for', 'at', 'to', 'a', 'an', 'on', 'by'])
const ACRONYMS = new Set(['ems', 'dda', 'isd', 'resa', 'esd', 'esa', 'mta', 'smart', 'cadl', 'dpw', 'hvac', 'stem', 'steam', 'cte', 'ii', 'iii', 'iv', 'llc', 'usa', 'mi', 'tifa', 'ldfa', 'bra', 'cia', 'eda', 'ems/fire', 'fire/ems', 'pto', 'ppo', 'hmo', 'dnr', 'epa', 'tv', 'id', 'gis', 'it'])
function titleCase(s) {
  return String(s || '').toLowerCase().replace(/\s+/g, ' ').trim().split(' ').map((w, i) => {
    if (/^(\d+(st|nd|rd|th))$/.test(w)) return w
    if (/^\d/.test(w)) return w.toUpperCase()
    const bare = w.replace(/[^a-z/]/g, '')
    if (ACRONYMS.has(bare)) return w.toUpperCase()
    if (/^[ivx]+$/.test(w) && w.length <= 3 && i > 0) return w.toUpperCase()
    if (w === 'u.s.' || w === 'us') return 'U.S.'
    if (SMALL.has(w) && i > 0) return w
    return w.replace(/(^|[-/(])([a-z])/g, (m, p, c) => p + c.toUpperCase())
  }).join(' ')
}
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const normJur = s => String(s || '').toLowerCase().replace(/\b(charter|township|twp|city|village|of|the)\b/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim()
const PARTY = { 'Republican': 'republican', 'Democratic': 'democratic', 'Libertarian': 'libertarian', 'Green': 'green', 'U.S. Taxpayers': 'us-taxpayers', 'Working Class': 'working-class', 'Natural Law': 'natural-law', 'No Party Affiliation': 'independent' }
const LEVEL = { 'County': 'County', 'Township': 'Township', 'City': 'City', 'Village': 'Village', 'Local School District': 'School Board', 'Intermediate School District': 'Intermediate School District', 'Community College': 'Community College', 'District Library': 'Library Board', 'Judicial': 'Judicial', 'Authority': 'Authority', 'Metropolitan District': 'Metropolitan District' }
const SKIP_DIV = /^(State|Congressional|Legislative|State Boards|State Boards - Continued)$/i

function raceKindOf(d) {
  if (/judicial/i.test(d)) return 'judicial'
  if (/school|college|library/i.test(d)) return 'school'
  return 'municipal'
}

function shapeRace(r, jur, countyName, cov) {
  const voteFor = r.t.find(t => /vote for not more than/i.test(t))
  const seats = voteFor ? parseInt(voteFor.match(/(\d+)/)?.[1] || '1', 10) : 1
  const extra = r.t.filter(t => t !== voteFor)
  const bodyLine = extra.find(t => !/term|position|year/i.test(t))
  const terms = extra.filter(t => t !== bodyLine)
  const div = r.d.replace(/\s*-\s*continued$/i, '')
  const level = LEVEL[div] || titleCase(div)
  const kind = raceKindOf(div)
  const divPrefix = new RegExp('^' + titleCase(div).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ' ', 'i')
  const officeName = titleCase(r.o).replace(/^Local School District /i, '').replace(divPrefix, '')
  const jurLabel = titleCase(jur.name.replace(/^Village Of /i, ''))
  let office
  if (bodyLine) office = `${titleCase(bodyLine)} — ${officeName}`
  else if (/^(County)$/i.test(div)) office = `${countyName.replace(/ County$/i, '')} County ${officeName.replace(/^County /i, '')}`
  else if (/^(Township|City|Village)$/i.test(div)) office = `${jurLabel} ${officeName}`
  else office = officeName
  const descParts = []
  if (seats > 1) descParts.push(`Vote for up to ${seats}.`)
  else descParts.push('Vote for one.')
  for (const t of terms) descParts.push(titleCase(t).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, '$1/$2/$3') + '.')
  const ctxTokens = tokens(`${countyName} ${jur.name} ${bodyLine || ''} ${r.o}`)
  const candidates = r.c.map(c => {
    const e = enrich(c, kind, ctxTokens, countyName)
    const cand = { name: c.n, party: PARTY[c.p] || (c.p ? slug(c.p) : null), status: e?.status === 'withdrawn' ? 'withdrawn' : c.inc ? 'incumbent' : (e?.status === 'incumbent' ? 'incumbent' : 'candidate'), grade: e?.grade || null }
    if (c.m) cand.runningMate = c.m
    if (c.inc) cand.incumbentDesignation = c.inc
    if (e?.gradeNote) cand.gradeNote = e.gradeNote
    if (e?.description) cand.description = e.description
    else if (c.inc) cand.description = `Incumbent — ${c.inc}`
    if (e?.website) cand.website = e.website
    if (e?.researched) cand.researched = true
    return cand
  })
  const id = 'off-' + slug(`${countyName}-${jur.name}-${r.d}-${r.o}-${extra.join('-')}`)
  const race = {
    id, office, level, seats, type: /nonpartisan/i.test(r.s) ? 'nonpartisan' : 'partisan',
    description: descParts.join(' '), candidates, allowWrite: true, localOffice: true, official: true,
    category: kind === 'judicial' ? 'judicial' : kind === 'school' ? 'school' : 'municipal',
  }
  if (bodyLine) race.district = titleCase(bodyLine)
  if (cov.appears < cov.total) race.note = `Appears on ballots in ${cov.appears} of ${cov.total} precincts in ${jurLabel} — check your official sample ballot.`
  return race
}

// ───────────────────────── proposals ─────────────────────────
const CAT_RULES = [
  [/\b(fire|firefight)/i, 'fire'],
  [/\b(police|law enforcement|public safety|sheriff|9-?1-?1|dispatch|jail|corrections|detention|ambulance|\bems\b|emergency medical|rescue)/i, 'public-safety'],
  [/\blibrar/i, 'library'],
  [/\b(road|street|bridge|sidewalk|culvert|paving)/i, 'roads'],
  [/\b(park|recreation|trail|zoo|museum|pool|arena)/i, 'parks'],
  [/\bsenior/i, 'senior-services'],
  [/\b(mental health|health care|healthcare|health plan|hospital|medical care)/i, 'mental-health'],
  [/\b(transit|transportation|bus|smart\b|mta\b)/i, 'transit'],
  [/\bveteran/i, 'veterans'],
  [/\b(conservation|farmland|open space|land preservation|drain|water quality|sewer)/i, 'land-preservation'],
  [/\b(school|education|college|academy|sinking fund|non-?homestead)/i, 'schools'],
  [/\bcharter\b|\bamendment\b|\bordinance\b|\bannex|\bincorporat|\bcouncil\b|\bterm/i, 'governance'],
  [/\b(operating|general fund|headlee|millage restoration|general operating)/i, 'county-operations'],
  [/\bcemeter/i, 'cemetery'],
  [/\bairport|\bharbor|\bmarina/i, 'other'],
]
function categorize(div, text) {
  if (/school district/i.test(div) && !/library/i.test(text)) return 'schools'
  if (/community college/i.test(div)) return 'schools'
  if (/district library/i.test(div)) return 'library'
  for (const [re, cat] of CAT_RULES) if (re.test(text)) return cat
  return 'other'
}
function detectType(text) {
  // "Shall the increased limitation ... be renewed" is boilerplate Michigan renewal language, not an increase
  const t = text.replace(/increased? limitation/gi, 'limitation')
  const hasMillage = /millage|\bmills?\b/i.test(t)
  if (/\bbond/i.test(t) && !/renew/i.test(t)) return 'Bond Proposal'
  if (/surcharge/i.test(t)) return /renew/i.test(t) ? 'Surcharge Renewal' : 'Surcharge Proposal'
  if (hasMillage) {
    if (/\bnon-?homestead/i.test(t) && /renew/i.test(t)) return 'Operating Millage Renewal (Non-Homestead)'
    if (/renew/i.test(t) && /(restor|increase|additional)/i.test(t)) return 'Millage Renewal with Increase'
    if (/renew/i.test(t)) return 'Millage Renewal'
    if (/restor|headlee|rollback|roll-back/i.test(t)) return 'Millage Restoration (Headlee Override)'
    if (/sinking fund/i.test(t)) return 'Sinking Fund Millage'
    if (/\bnew\b.*millage|additional millage|millage increase|increase/i.test(t)) return 'New Millage / Increase'
    return 'Millage Proposal'
  }
  if (/charter amendment|amend(ment)? to the (city|village|township)? ?charter|charter revision|general revision of the|\bcharter\b/i.test(t)) return 'Charter Amendment'
  if (/annex|incorporat|dissol|consolidat|detach/i.test(t)) return 'Boundary / Governance Question'
  if (/ordinance|referendum/i.test(t)) return 'Ordinance / Referendum'
  return 'Ballot Question'
}
function extractMills(text) {
  const m = text.match(/\((\d*\.\d+|\d+)\)\s*(?:of\s+(?:one|1)\s+)?mills?\b/i)
    || text.match(/(\d*\.\d+|\d+)\s*mills?\b/i)
    || text.match(/\$\s?(\d+(?:\.\d+)?)\s*(?:on|per|for)\s*(?:each\s*)?\$\s?1,?000(?:\.00)?/i)
  const v = m ? parseFloat(m[1]) : null
  return v != null && v < 100 ? v : null
}
function extractDuration(text) {
  const words = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12, fifteen: 15, twenty: 20, 'twenty-five': 25, thirty: 30 }
  let m = text.match(/(?:for\s+(?:a\s+)?(?:period\s+of\s+)?)([a-z-]+|\d+)\s*\((\d+)\)\s*years?/i)
  if (m) return `${m[2]} years`
  m = text.match(/(?:for\s+(?:a\s+)?(?:period\s+of\s+)?)(\d+)\s*years?/i)
  if (m) return `${m[1]} years`
  m = text.match(/(?:for\s+(?:a\s+)?(?:period\s+of\s+)?)([a-z-]+)\s*years?/i)
  if (m && words[m[1].toLowerCase()]) return `${words[m[1].toLowerCase()]} years`
  m = text.match(/\b(20\d\d)\s*(?:through|thru|to|–|-)\s*(20\d\d)\b/i)
  if (m) return `${m[1]}–${m[2]}`
  if (/in perpetuity|perpetual|permanent/i.test(text)) return 'Permanent'
  return null
}
function extractBond(text) {
  if (!/bond/i.test(text)) return null
  // Principal is the "not to exceed … ($N)" figure; other dollar amounts are debt service / outstanding debt
  const nte = text.match(/not\s+to\s+exceed\s+[^$]{0,160}?\$\s?([\d,]{7,})/i)
  const figs = [...text.matchAll(/\$\s?([\d,]{7,})(?:\.\d+)?/g)].map(x => parseFloat(x[1].replace(/,/g, ''))).filter(Number.isFinite)
  const n = nte ? parseFloat(nte[1].replace(/,/g, '')) : (figs.length ? Math.max(...figs) : null)
  if (!n) return null
  if (n < 1e6) return `$${n.toLocaleString()}`
  const m = n / 1e6
  return `$${Number.isInteger(m) ? m : m.toFixed(2).replace(/\.?0+$/, '')} million`
}
function extractRevenue(text) {
  const m = text.match(/estimat\w*[^$]{0,120}\$\s?([\d,]{5,})(?:\.\d+)?/i)
  return m ? `$${m[1]}` : null
}
function extractYears(text) {
  const m = text.match(/\b(20\d\d)\s*(?:through|thru|to|–|-)\s*(20\d\d)\b/i)
  return m ? `${m[1]}–${m[2]}` : null
}
function cleanTitle(t) {
  return t.replace(/^(I{1,3}V?|IV|V|VI{0,3}|\d+)\.\s+/, '').replace(/\s+/g, ' ').trim()
}
function proposalJurisdiction(p, jur, countyName) {
  const d = p.d
  const t = cleanTitle(p.title)
  if (/^County$/i.test(d)) return `${countyName}`
  if (/^(Township|City|Village)$/i.test(d)) return titleCase(jur.name.replace(/^Village Of /i, ''))
  // School/college proposals often omit the district from the title but open the body with it
  if (/school district|community college|intermediate/i.test(d)) {
    const first = (p.body || '').split('\n').map(x => x.trim()).find(Boolean) || ''
    const m0 = first.match(/^([A-Z][A-Za-z.'&\- ]{3,60}?(Schools|School District|Public Schools|Community Schools|Area Schools|Community College|College|Educational Service Agency|Intermediate School District|ISD|RESA))\b/i)
    if (m0 && !/^(shall|this|the )/i.test(first)) return titleCase(m0[1])
    const m1 = (p.body || '').slice(0, 400).match(/shall (?:the )?([A-Z][A-Za-z.'&\- ]{3,60}?(Schools|School District|Public Schools|Community Schools|Area Schools|Community College|College|Educational Service Agency|Intermediate School District|ISD|RESA))\b/i)
    if (m1) return titleCase(m1[1])
  }
  const stripped = t.replace(/^(RENEWAL OF|PROPOSED|PROPOSAL (FOR|TO)|RENEWAL|RESTORATION OF|CHARTER AMENDMENT FOR( RENEWAL OF)?|RENEW(AL)? OF THE)\s+/i, '')
  const m = stripped.match(/^(.*?)(?=\s+(BOND|MILLAGE|OPERATING|SINKING|BUILDING|SPECIAL|AREA|CAREER|PROPOSAL|PROPOSITION|RENEWAL|RESTORATION|ANNEXATION|CHARTER|HEADLEE|PUBLIC SAFETY|FIRE|POLICE|ROAD|LIBRARY|SENIOR|PARKS?)\b)/i)
  if (m && m[1].length > 3 && !/^(the|a|an)$/i.test(m[1])) return titleCase(m[1])
  return titleCase(d)
}
function templates(type, mills, duration, bond, cat, isRenewal) {
  const span = duration ? ` for ${duration}` : ''
  const rate = mills != null ? `${mills} mill${mills === 1 ? '' : 's'}` : (/Surcharge/.test(type) ? 'the surcharge described in the ballot language' : 'the levy described in the ballot language')
  if (/Bond/.test(type)) return {
    yes: `A YES vote authorizes the sale of ${bond ? bond + ' in' : ''} bonds, repaid through a property tax levy over the life of the bonds.`,
    no: 'A NO vote rejects the borrowing — no bonds are issued and no new debt levy is added.',
    con: 'Bonds commit taxpayers to decades of debt service. Ask whether the project list is needs or wants, whether the district has maintained what it already has, and what the total interest cost will be. "No tax rate increase" often means extending an existing levy for many more years rather than letting it expire.',
    pro: 'Bonds let communities fund major facility needs — safety, infrastructure, aging buildings — spreading the cost over the years the improvements will be used.',
  }
  if (/Charter|Governance|Question/.test(type)) return {
    yes: 'A YES vote adopts the change described in the ballot language.',
    no: 'A NO vote keeps the current rules in place.',
    con: 'Read the full language carefully. Charter changes are hard to undo; be cautious about proposals that expand government authority, create new boards, or raise spending or borrowing limits.',
    pro: 'Supporters typically argue the change modernizes outdated provisions or improves how local government operates.',
  }
  if (isRenewal) return {
    yes: `A YES vote continues the existing levy of ${rate}${span} — generally no increase over what you pay now${/Increase|Restoration/.test(type) ? ', plus the restored or added amount described' : ''}.`,
    no: `A NO vote lets the current millage expire; the service it funds would need cuts or other revenue.`,
    con: 'Renewals are the least disruptive way to keep a service funded, but every renewal is a chance to ask whether the service is delivering value. Watch for "renewal" proposals that quietly restore Headlee rollbacks — that is a tax increase.',
    pro: 'Keeps an existing, voter-approved service funded at the same rate with no new tax.',
  }
  if (/Restoration|Headlee/.test(type)) return {
    yes: `A YES vote raises the levy back to the originally authorized ${rate}, overriding the Headlee Amendment rollback — this is a tax increase over the current rate.`,
    no: 'A NO vote keeps the current, rolled-back rate in place.',
    con: 'The Headlee Amendment is a constitutional taxpayer protection that limits how fast property-tax revenue can grow. Overriding it raises taxes above what the constitution would otherwise allow.',
    pro: 'Restores funding that inflation and Headlee rollbacks have eroded so existing services can continue.',
  }
  return {
    yes: `A YES vote approves a new levy of ${rate}${span} — this is a tax increase.`,
    no: 'A NO vote rejects the new tax; your property tax rate stays where it is.',
    con: 'This is new taxation. Ask whether the need could be met within existing budgets, whether the millage sunsets, and who oversees how the money is spent.',
    pro: 'New funding dedicated to a specific local service that supporters say current revenue cannot cover.',
  }
}

// Hand-researched enrichment (data-raw/local-proposals-research-2026-10-24.md). Matched by county + title regex.
const RESEARCH = [
  { county: /Wayne|Oakland|Macomb/, re: /zoo/i, f: { taxImpact: 'About $10/year on a $200,000 home (campaign estimate).', description: 'Renews the Detroit Zoo operating millage first approved in 2008 (0.10 mill, 2028–2037) for animal care, education and senior programs, and facility maintenance. Includes a small Headlee restoration back to the original 0.10 mill.' } },
  { county: /Wayne|Oakland/, re: /museum|historical/i, f: { taxImpact: 'About $30/year on a $300,000 home (advocates\' estimate).', description: 'NEW 0.2-mill, 10-year tax (2026–2035) creating the Southeast Michigan Public Historical Museum Authority to fund the Charles H. Wright Museum of African American History, Detroit Historical Museum and Dossin Great Lakes Museum; 15% of each county\'s revenue goes to other local historical museums. Residents get free admission.' } },
  { county: /Macomb/, re: /veteran/i, f: { taxImpact: 'About $3.45/year on a home with $50,000 taxable value.', description: 'Renews the 0.0690-mill veterans\' millage (2027–2030) funding veterans\' financial aid and the county Department of Veterans Affairs; ~$2.9M/year.' } },
  { county: /Macomb/, re: /transportation|smart/i, f: { taxImpact: 'About $94/year per $100,000 of taxable value (0.94 mill, slightly below the expiring 0.95).', description: 'Replaces the expiring SMART bus millage at 0.94 mill for 2027–2031 (~$39M/year). Funds fixed-route and paratransit service; each community receives 12.5% of collections from its own taxpayers for local transit.' } },
  { county: /Kent/, re: /correction|detention|jail/i, f: { taxImpact: '$98/year per $100,000 of taxable value — up $24.68 from the current $74.17.', description: 'Renews the 1990 jail millage early (it would expire after 2029) AND raises it from 0.7332 to 0.98 mill for 20 years (2026–2045) to expand and remodel the 1972-era jail and juvenile detention, adding medical, mental-health and substance-use treatment space. ~$37.3M first year. The county board approved it 11–5 over objections about the tax burden.' } },
  { county: /Kent/, re: /zoo|museum/i, f: { taxImpact: 'About $41/year per $100,000 of taxable value.', description: 'Renews the 2016 John Ball Zoo / Grand Rapids Public Museum millage at a slightly lower 0.4086 mill for 2026–2035 (~$15.6M/year) for animal and artifact care, exhibit repair and education programs.' } },
  { county: /Genesee/, re: /health/i, f: { taxImpact: 'About $40/year on a $100,000 home.', description: 'Renews the ~20-year-old Genesee Health Plan millage at a reduced 0.8 mill (down from 0.998) for 5 years. Funds primary care, prescriptions and counseling for uninsured, low-income and between-jobs residents (~$11M/year).' } },
  { county: /Genesee/, re: /animal/i, f: { taxImpact: 'Under $20/year on a $100,000 home.', description: 'Renews the 0.1922-mill Animal Care millage (2028–2034, ~$2.7M/year) for shelter operations, in-house veterinary care and low-cost clinics. No rate increase.' } },
  { county: /Genesee|Oakland|Livingston|Lapeer|Shiawassee/, re: /mott community college/i, f: { taxImpact: 'About $76.90/year on $250,000 of taxable value (unchanged).', description: 'Renews Mott Community College\'s operating millage at the Headlee-reduced 0.6152 mill for 2028–2037 (~$8.9M/year, 9% of operating budget). Not a tax increase.' } },
  { county: /Ottawa/, re: /park/i, f: { taxImpact: 'About $40/year on $200,000 of taxable value.', description: 'NEW 0.20-mill addition (2027–2036) on top of the 0.33-mill parks millage renewed in August, for greenway trails and water access, year-round restrooms, winter trail plowing, ~$3M in land acquisition, Grand Ravines dog park expansion and nature education facilities (~$3.8M/year).' } },
  { county: /Saginaw/, re: /9-?1-?1|dispatch/i, f: { taxImpact: 'About $28/year per $100,000 of taxable value (unchanged).', description: 'Renews the 0.28-mill 9-1-1 Central Dispatch millage for 2028–2037 (~$2.0M/year) to replace aging police/fire/EMS radio equipment and continue 24-hour dispatch.' } },
  { county: /Washtenaw/, jur: /ann arbor/i, re: /street|bridge|sidewalk repair/i, f: { taxImpact: 'About $212/year per $100,000 of taxable value (continues current rate).', description: 'Replaces the expiring 2022–2026 street, bridge and sidewalk repair millage at up to 2.125 mills for 2027–2032 (~$19.2M first year).' } },
  { county: /Washtenaw/, jur: /ann arbor/i, re: /new sidewalk/i, f: { taxImpact: 'About $20/year per $100,000 of taxable value.', description: 'Replaces the 2021–2026 new-sidewalk millage at up to 0.20 mill for 2027–2032 (~$1.8M first year) to fill sidewalk gaps.' } },
  { county: /Washtenaw/, jur: /ann arbor/i, re: /electric|utility|energy/i, f: { description: 'Petition-initiated charter amendment requiring the city to establish a municipal electric utility and a nine-member governing board (5 elected by ward in 2028, 4 mayoral appointees). It does not itself take over DTE\'s grid — any acquisition would need a later 60% voter approval. A DTE-funded group challenged the petition in court.', conservativeView: 'Creates a new government-run utility and bureaucracy with uncertain costs; a public takeover of private assets would mean billions in debt. The 60% backstop vote is the only guardrail.', progressiveView: 'Supporters say a public utility would be more reliable, cheaper over time, and faster to move to clean energy than DTE.' } },
  { county: /Genesee/, jur: /^flint/i, re: /police|fire/i, f: { taxImpact: 'About $600/year per $100,000 of taxable value — no increase over the current rate.', description: 'Renews Flint\'s dedicated 6-mill police and fire millage (levied at the Headlee-reduced 5.9568) from July 2027 through 2031 (~$6.5M/year). Last renewed in 2021 with 82% support.' } },
  { county: /Genesee/, jur: /^flint/i, re: /park|forestry|recreation/i, f: { taxImpact: 'About $50/year per $100,000 of taxable value.', description: 'Renews the city\'s 0.50-mill parks, forestry and recreation millage through 2036 (~$544K/year).' } },
  { county: /Genesee/, jur: /^flint/i, re: /transportation|transit|mta/i, f: { taxImpact: 'About $60/year per $100,000 of taxable value.', description: 'Renews the city\'s 0.60-mill Flint Mass Transportation Authority millage through June 2033 (~$653K/year).' } },
  { county: /Ingham|Eaton|Clinton/, jur: /^lansing/i, re: /essential services|operating/i, f: { description: 'Renews the Headlee override, first approved in 2011 and renewed in 2016 and 2021, that lets Lansing levy up to 20 mills (currently ~19.44) for police, fire and local road and sidewalk maintenance. The prior cycle raised about $8M/year.' } },
  { county: /Ingham|Kalamazoo/, re: /health ?care action|advisory health/i, f: { description: 'Petition-initiated charter amendment creating a citizen advisory board to draft a local Healthcare Action Plan and recommend ways to lower costs and improve access. The board is advisory only — the city has no authority to implement health policy. Parallel measures appear in Lansing, East Lansing, Kalamazoo and Portage.', conservativeView: 'Creates a permanent new government body for a subject cities have no power over; the "plan" cannot be implemented and risks becoming an advocacy vehicle for single-payer-style policy.', progressiveView: 'Supporters say it gives residents a formal voice on healthcare affordability and pressures state and federal officials to act.' } },
  { county: /Saginaw/, jur: /^saginaw city/i, re: /charter|section 45|revenue/i, f: { description: 'Removes the 1979 charter cap that limits city property-tax revenue to the dollar amount collected in 1978–79 ($3.83M), while keeping the 7.5-mill rate limit and 3-mill emergency provision. Effectively lets the city collect up to the full 7.5 mills.', conservativeView: 'Removing a revenue cap is a tax increase by another name — the city could collect far more without another vote.', progressiveView: 'The 1979 cap has frozen city revenue at 1970s levels while costs have tripled; the mill limit still protects taxpayers.' } },
  { county: /Oakland/, jur: /^pontiac/i, re: /road|bond/i, f: { taxImpact: 'About $336/year per $100,000 of taxable value in 2027 (3.36 mills estimated first year; 2.4 mills average).', description: '$75 million in unlimited-tax general obligation bonds, repaid over up to 30 years, for road, sidewalk, drainage, lighting, traffic signal and related utility work.' } },
  { county: /Oakland/, jur: /^novi/i, re: /capital/i, f: { taxImpact: 'About $100/year per $100,000 of taxable value (continues current rate).', description: 'Replaces the expiring 1.0-mill capital-improvements millage for 10 years from July 2027 (~$5.4M/year) for parks, facilities, land, pathways and apparatus — not operations or payroll.' } },
  { county: /Oakland/, jur: /^royal oak city/i, re: /park|recreation|animal/i, f: { taxImpact: 'About $70/year per $100,000 of taxable value (continues current rate).', description: 'Renews the 0.70-mill parks, recreation, playgrounds and animal-shelter millage for 5 years from 2027 (~$2.9M/year).' } },
  { county: /Oakland/, jur: /^royal oak city/i, re: /senior/i, f: { description: 'Renews the 0.20-mill senior services millage for 5 years (~$836K/year).' } },
  { county: /Wayne/, jur: /^lincoln park/i, re: /operating|headlee|millage/i, f: { taxImpact: 'Up to about $283/year more per $100,000 of taxable value at the full 20-mill levy.', description: 'Headlee override restoring the city\'s general operating limit from about 17.17 mills to 20 mills (up to $2.4M/year in 2027).' } },
  { county: /Kent/, jur: /^walker/i, re: /public safety|police|fire/i, f: { taxImpact: 'About $175/year per $100,000 of taxable value.', description: 'NEW 1.75-mill public safety millage for 2027–2036 (~$3.1M/year) for police and fire capital and operating costs.' } },
  { county: /Kent/, jur: /east grand rapids/i, re: /parking|pedestrian|bond/i, f: { taxImpact: 'About $59/year per $100,000 of taxable value (0.59 mill estimated first year).', description: '$9 million in bonds for a public parking facility near the schools lot on Bagley, traffic signals at Lake/Bagley and San Lu Rae, and pedestrian and micromobility safety work.' } },
  { county: /Kent/, jur: /^byron/i, re: /park|recreation/i, f: { description: 'NEW parks and recreation millage of up to 1.0 mill for 2026–2035 (the board plans to levy 0.60 in 2026) to acquire, expand and maintain parks, trails, pathways and sidewalks (~$2.0M/year at the full levy).' } },
  { county: /Oakland/, jur: /^bloomfield township/i, re: /public safety|bond/i, f: { taxImpact: 'Roughly $24–44/year per $100,000 of taxable value.', description: '$50 million in bonds (up to 20 years) for a new fire station, police building and site work.' } },
  { county: /Oakland/, jur: /^independence/i, re: /police/i, f: { taxImpact: 'Up to about $320/year per $100,000 of taxable value at the full levy.', description: 'Replaces the expired 2.8282-mill police millage with up to 3.2 mills for Dec 2026–Dec 2029 (~$7.8M/year) for police personnel, equipment and school resource officers — an increase over the prior rate.' } },
  { county: /Ingham/, jur: /^meridian/i, re: /police|fire/i, f: { description: 'Renews the 1.4563-mill police and fire millage for 10 years (~$3.7M in 2027). No rate increase.' } },
  { county: /Ingham/, jur: /^meridian/i, re: /park/i, f: { description: 'Renews the 0.6503-mill parks millage for 10 years (~$1.6M/year). No rate increase.' } },
  { county: /Washtenaw/, jur: /^scio/i, re: /road|bridge|culvert/i, f: { taxImpact: 'About $50/year per $100,000 of taxable value.', description: 'NEW 0.5-mill road, bridge and culvert millage for 2027–2032 (~$985K/year), usable as matching funds for county and state road grants.' } },
  { county: /Washtenaw/, jur: /^northfield/i, re: /fire|rescue/i, f: { description: 'Renews the fire and medical rescue millage at up to 2.5 mills (2.4206 after Headlee) for 2027–2031 (~$1.3M/year).' } },
  { county: /Kalamazoo/, jur: /^cooper/i, re: /fire|rescue/i, f: { taxImpact: 'About $200/year per $100,000 of taxable value at the full levy.', description: 'NEW fire and rescue millage of up to 2.0 mills for 2026–2035 (~$882K first year) for operations, equipment, personnel and a new fire building.' } },
  { county: /Kalamazoo/, jur: /^comstock/i, re: /law enforcement|police/i, f: { description: 'Renews the expired law-enforcement millage at up to 0.9920 mill for 2026–2029 (~$814K first year).' } },
  { county: /Wayne/, re: /dearborn public schools/i, f: { taxImpact: '3.14-mill increase in year one (about $314/year per $100,000 of taxable value), partly offset by the district dropping its 2.18-mill operating levy and a 0.96-mill drop in city sewer debt.', description: '$1.51 BILLION bond — the largest school bond in Michigan this cycle, issued in four waves over 20 years with up to 30-year repayment per series. Builds six new preK–8 neighborhood schools, remodels every other building, adds air conditioning district-wide, secured entrances, CTE/STEAM labs and preschool space. Voters rejected a $240M bond in 2019.' } },
  { county: /Macomb/, re: /chippewa valley/i, f: { taxImpact: 'District says no increase to the current 8.64-mill debt rate (0 mills first year, 2.47 average).', description: '$288 million bond (up to 25 years) for safety and security upgrades, building and athletic repairs, instructional technology, a replacement elementary school, additions and buses; more than $90M modernizes four elementary schools. The district already has $323M in bonds outstanding.' } },
  { county: /Oakland/, re: /birmingham public schools/i, f: { taxImpact: 'No millage-rate increase per the district (0.84 mill first year within the current 3.80-mill debt levy).', description: '$240 million bond (up to 20 years) for safety and security, HVAC, playgrounds, the Midvale center, technology and buses.' } },
  { county: /Oakland/, re: /farmington public schools/i, f: { taxImpact: 'No millage-rate increase per the district (0.95 mill first year within the current 3.20-mill debt levy).', description: '$171 million bond (up to 20 years) for STEAM and maker spaces, remodeling, technology and site work across 17 buildings.' } },
  { county: /Oakland/, re: /royal oak schools|royal oak school/i, f: { taxImpact: 'No tax-rate increase per the district (1.41 mills first year within the current 2.20-mill debt levy).', description: '$165 million bond (up to 15 years) for early-childhood classrooms, STEAM and career spaces, special-education facilities, remodeling, athletic fields and technology.' } },
  { county: /Clinton|Ingham|Eaton/, re: /dewitt public schools/i, f: { taxImpact: 'Continues the current 10-mill debt rate for more years rather than letting it decline.', description: '$157 million bond (up to 25 years): about 80% for aging assets and shared learning spaces, plus an auxiliary gym, multipurpose fieldhouse, auditorium renovation, athletics upgrades, security cameras and a bus loop.' } },
  { county: /Eaton|Clinton|Ionia/, re: /grand ledge/i, f: { taxImpact: 'Extends the current 5.63-mill debt rate; a NO vote would let it drop 0.19 mill.', description: '$123.5 million bond for added elementary classrooms, a Wacousta cafeteria, high-school renovations, and safety and technology upgrades to handle enrollment growth.' } },
  { county: /Oakland/, re: /lake orion/i, f: { taxImpact: 'No change to the current tax rate per the district (1.74 mills first year within the 7.00-mill debt levy).', description: '$116 million bond (up to 20 years) for safety, infrastructure, special-education and high-school additions, and buses.' } },
  { county: /Macomb/, re: /eastpointe/i, f: { taxImpact: '3.50 mills first year (about $350/year per $100,000 of taxable value); 5.45 mills average over up to 30 years.', description: '$99 million bond for facility improvements across the district.' } },
  { county: /Oakland/, re: /holly area/i, f: { taxImpact: '3.45 mills; district says no net increase over the current rate.', description: '$97.6 million bond for facility improvements.' } },
  { county: /Livingston/, re: /brighton area/i, f: { taxImpact: '0.11 mill in 2027, 1.18 mills average, up to 21 years.', description: '$90.3 million bond for facility improvements.' } },
  { county: /Wayne|Oakland/, re: /schoolcraft college/i, f: { taxImpact: 'About $227/year per $100,000 of taxable value — unchanged from today.', description: 'Renews Schoolcraft College\'s operating millage at the Headlee-restored 2.27 mills for 2029–2038 (~$50.8M in 2029). Covers Clarenceville, Garden City, Livonia, Northville, Plymouth-Canton and part of Novi.' } },
  { county: /Saginaw|Midland|Bay/, re: /freeland/i, f: { taxImpact: 'District says no net increase in the overall school tax rate — it will drop its sinking fund as the bond levy starts (1.98 mills in 2027).', description: '$21.2 million bond (up to 20 years) for remodeling, equipment, site work and a stormwater project at the Learning Center playground.' } },
  { county: /Isabella|Clare/, re: /mid michigan college/i, f: { taxImpact: 'About $29/year per $100,000 of taxable value — permanent.', description: 'Permanently restores 0.2929 mill of Mid Michigan College\'s Headlee-reduced charter millage (~$1.3M in 2027).' } },
  { county: /Osceola|Mecosta|Newaygo|Lake/, re: /reed city/i, f: { taxImpact: 'No net increase over the prior year per the ballot (0.20 mill estimated in 2027).', description: '$10.78 million bond for building remodeling and high-school athletic field improvements.' } },
  { county: /Isabella/, jur: /shepherd/i, re: /operating|restoration/i, f: { taxImpact: 'About $136/year per $100,000 of taxable value at the full restored rate.', description: 'Restores the village operating millage from the Headlee-reduced 11.1368 mills back to 12.5 mills for 4 years (~$57K/year).' } },
]

function shapeProposal(p, jur, countyName, cov, seq) {
  const title = cleanTitle(p.title)
  const text = `${title}\n${p.body}`
  const type = detectType(text)
  const isRenewal = /Renewal/.test(type) && !/Non-Homestead/.test(type) || /Non-Homestead/.test(type)
  const mills = extractMills(text)
  const duration = extractDuration(text)
  const years = extractYears(text)
  const bond = extractBond(text)
  const revenue = extractRevenue(text)
  const category = categorize(p.d, text)
  const jurisdiction = proposalJurisdiction(p, jur, countyName)
  const tpl = templates(type, mills, duration, bond, category, isRenewal)
  const jurLabel = titleCase(jur.name.replace(/^Village Of /i, ''))
  let name = titleCase(title).replace(/\bProposal\b/g, 'Proposal').replace(/^(Proposal|Proposition)\s+([a-z])$/i, (m, w, l) => `${w} ${l.toUpperCase()}`)
  if (/^(proposal|proposition)\s+[a-z0-9-]+$/i.test(title)) {
    const firstLine = p.body.split('\n').map(x => x.trim()).find(x => x.length > 20) || ''
    const snippet = firstLine.replace(/^shall\s+/i, '').replace(/\s+/g, ' ').slice(0, 90).replace(/\s+\S*$/, '')
    if (snippet) name = `${name} — ${snippet.charAt(0).toUpperCase()}${snippet.slice(1)}…`
  }
  const out = {
    id: 'offprop-' + slug(`${countyName}-${jur.name}-${seq}-${title.slice(0, 60)}`),
    name,
    jurisdiction,
    division: p.d,
    type, category, mills, duration: years && duration && !duration.includes('–') ? `${duration} (${years})` : (duration || years),
    bondAmount: bond,
    estimatedRevenue: revenue,
    status: 'confirmed', official: true,
    description: p.body.length > 520 ? p.body.slice(0, 500).replace(/\s+\S*$/, '') + '…' : p.body,
    ballotLanguage: p.body,
    officialTitle: title,
    yesVote: tpl.yes, noVote: tpl.no, conservativeView: tpl.con, progressiveView: tpl.pro,
    recommendation: null,
  }
  const hit = RESEARCH.find(r => r.county.test(countyName) && (!r.jur || r.jur.test(jur.name)) && r.re.test(`${jurisdiction} ${title} ${p.body.slice(0, 400)}`))
  if (hit) Object.assign(out, hit.f)
  if (cov.appears < cov.total) out.precinctNote = `Appears on ballots in ${cov.appears} of ${cov.total} precincts in ${jurLabel} — check your official sample ballot.`
  return out
}

// ───────────────────────── build ─────────────────────────
const indexOut = { generatedAt: new Date().toISOString(), source: 'Michigan Secretary of State — Voter Information Center sample ballots (election 707, Nov 3 2026)', counties: [] }
let totals = { jurisdictions: 0, precincts: 0, races: 0, candidates: 0, graded: 0, proposals: 0, enrichedProposals: 0 }
for (const countyName of Object.keys(counties).sort()) {
  const c = counties[countyName]
  const jurisdictions = []
  for (const jur of c.jurisdictions) {
    const precTotal = jur.precincts.filter(p => p.ballot).length
    if (!precTotal) continue
    const ballotPrec = {}
    for (const p of jur.precincts) if (p.ballot) ballotPrec[p.ballot] = (ballotPrec[p.ballot] || 0) + 1
    const raceMap = new Map(), propMap = new Map()
    const districtSets = {}
    for (const [hk, b] of Object.entries(jur.ballots)) {
      const n = ballotPrec[hk] || 0
      for (const r of b.races) {
        if (/^(Congressional|Legislative)$/i.test(r.d)) {
          const dm = r.t.join(' ').match(/(\d+)(?:st|nd|rd|th) DISTRICT/i)
          if (dm) {
            const k = /Congress/i.test(r.o) ? 'congressional' : /SENATOR/i.test(r.o) ? 'stateSenate' : /REPRESENTATIVE/i.test(r.o) ? 'stateHouse' : null
            if (k) { districtSets[k] = districtSets[k] || new Set(); districtSets[k].add(Number(dm[1])) }
          }
        }
        if (SKIP_DIV.test(r.d)) continue
        if (/JUSTICE OF SUPREME COURT/i.test(r.o)) continue // already in the graded statewide ballot
        const key = `${r.d}|${r.o}|${r.t.join('|')}`
        if (!raceMap.has(key)) raceMap.set(key, { r, appears: 0 })
        raceMap.get(key).appears += n
      }
      for (const p of b.props) {
        if (/^State$/i.test(p.d)) continue
        const key = `${p.d}|${p.title}`
        if (!propMap.has(key)) propMap.set(key, { p, appears: 0 })
        propMap.get(key).appears += n
      }
    }
    // Merge ballot variants that list the same office + same candidates but differ only in term wording
    const shaped = [...raceMap.values()].map(({ r, appears }) => ({ race: shapeRace(r, jur, countyName, { appears, total: precTotal }), appears, r }))
    const merged = new Map()
    for (const s of shaped) {
      const k = `${s.race.level}|${s.race.office}|${s.race.seats}|${s.race.candidates.map(c => c.name).sort().join('~')}`
      const prev = merged.get(k)
      if (!prev) { merged.set(k, s); continue }
      const combined = Math.min(precTotal, prev.appears + s.appears)
      const keep = s.r.t.length > prev.r.t.length ? s : prev
      keep.appears = combined
      keep.race = shapeRace(keep.r, jur, countyName, { appears: combined, total: precTotal })
      merged.set(k, keep)
    }
    const races = [...merged.values()].map(s => s.race)
    let seq = 0
    const proposals = [...propMap.values()].map(({ p, appears }) => shapeProposal(p, jur, countyName, { appears, total: precTotal }, ++seq))
    const isCity = /\bCity$/i.test(jur.name)
    jurisdictions.push({
      name: titleCase(jur.name.replace(/^Village Of /i, '')), mvicName: jur.name, kind: isCity ? 'city' : 'township', key: normJur(jur.name),
      precincts: precTotal, ballotVariants: Object.keys(jur.ballots).length, races, proposals,
      districts: Object.fromEntries(Object.entries(districtSets).map(([k, v]) => [k, [...v].sort((a, b) => a - b)])),
    })
    totals.jurisdictions++; totals.precincts += precTotal; totals.races += races.length; totals.proposals += proposals.length
    totals.candidates += races.reduce((a, r) => a + r.candidates.length, 0)
    totals.graded += races.reduce((a, r) => a + r.candidates.filter(x => x.grade).length, 0)
    totals.enrichedProposals += proposals.filter(p => p.taxImpact).length
  }
  const file = `${slug(countyName.replace(/ County$/i, ''))}.json`
  writeFileSync(path.join(OUT, file), JSON.stringify({ county: countyName, generatedAt: indexOut.generatedAt, jurisdictions }))
  indexOut.counties.push({ county: countyName, file, jurisdictions: jurisdictions.length, precincts: jurisdictions.reduce((a, j) => a + j.precincts, 0), races: jurisdictions.reduce((a, j) => a + j.races.length, 0), proposals: jurisdictions.reduce((a, j) => a + j.proposals.length, 0) })
}
writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(indexOut, null, 2))
console.log('totals', totals)
console.log(`wrote ${indexOut.counties.length} county files to ${OUT}`)
