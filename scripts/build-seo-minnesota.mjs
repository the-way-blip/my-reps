// Static SEO pages for the November 3, 2026 Minnesota ballot, generated into public/minnesota/… after the
// earlier states' pages (it appends its URLs to public/sitemap.xml). Data: public/data/mn/ballots/ (build-minnesota.mjs).
//   /minnesota/                              state index
//   /minnesota/<county>/                     county ballot (county offices, judges, soil & water, county questions)
//   /minnesota/<county>/<city-or-township>/  city / township ballot (local races + county races)
//   /minnesota/school-boards/<district>/     school board races and school questions
//   /minnesota/race/<slug>/                  statewide, U.S. Senate/House, State Senate/House races
//   /minnesota/candidate/<slug>/             every graded statewide/district candidate
//   /minnesota/amendment-1/                  Constitutional Amendment 1 (official text)
//   /minnesota/question/<slug>/              every local ballot question (official text)
//   /minnesota/races/, /minnesota/how-to-vote/, /minnesota/key-dates/

import { readdirSync, readFileSync, writeFileSync, rmSync, mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SITE, ELECTION, esc, slug, PARTY, PARTY_LONG, ISSUES, makePageWriter, ctaBox, faq, gradeBadge, otherStateLinks } from './seo-shared.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'public/data/mn/ballots')
const OUT = path.join(ROOT, 'public/minnesota')
const MN_SITE = 'https://www.sos.state.mn.us/elections-voting/'
const SAMPLE = 'https://myballotmn.sos.mn.gov/'

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

const { layout, write, pages } = makePageWriter({
  outDir: OUT,
  urlPrefix: 'minnesota',
  footerHtml: `Races and ballot questions are taken from the Minnesota Secretary of State&#39;s official election files (<a href="${MN_SITE}">sos.state.mn.us</a>). Always confirm with your own sample ballot.<br>&copy; 2026 Of For &amp; By The People · <a href="${SITE}/minnesota/">Minnesota ballot by county</a> · <a href="${SITE}/minnesota/races/">Statewide races</a> · <a href="${SITE}/minnesota/key-dates/">Key dates</a> · <a href="${SITE}/minnesota/how-to-vote/">How to vote</a> · ${otherStateLinks('minnesota')} · <a href="${SITE}/privacy">Privacy</a> · <a href="${SITE}/terms">Terms</a>`,
})

// ───────────────────────── load data ─────────────────────────
const statewide = JSON.parse(readFileSync(path.join(DATA, '_statewide.json'), 'utf8'))
const counties = readdirSync(DATA).filter(f => f.endsWith('.json') && !f.startsWith('_'))
  .map(f => JSON.parse(readFileSync(path.join(DATA, f), 'utf8')))
  .sort((a, b) => a.county.localeCompare(b.county))
for (const c of counties) c.slug = slug(c.county)
const dataAsOf = new Date(statewide.sourceWriteTime || statewide.generatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

const partyShort = p => (p ? PARTY[p] || p : '')
const partyLong = p => (p ? PARTY_LONG[p] || p : '')
const districtLabel = r => r.scope === 'congressional' ? `U.S. House District ${r.district}` : r.scope === 'stateSenate' ? `State Senate District ${r.district}` : r.scope === 'stateHouse' ? `State House District ${r.district}` : r.office
const raceSlug = r => r.scope === 'state' ? slug(r.office) : slug(districtLabel(r))

// ───────────────────────── statewide + district races, candidate pages ─────────────────────────
const races = statewide.races
for (const r of races) r._pageUrl = `${SITE}/minnesota/race/${raceSlug(r)}/`
const candidatePages = new Map() // slug -> { c, race }
for (const r of races) for (const c of r.candidates) {
  if (!c.grade && !c.gradeNote) continue
  let cs = slug(c.name)
  if (candidatePages.has(cs)) cs = `${cs}-${raceSlug(r)}`
  candidatePages.set(cs, { c, race: r })
  c._pageUrl = `${SITE}/minnesota/candidate/${cs}/`
}

function candidateLi(c) {
  const p = c.party ? `<span class="p">(${esc(partyShort(c.party))})</span>` : ''
  const mate = c.runningMate ? ` <span class="p">with ${esc(c.runningMate)}</span>` : ''
  return `<li>${gradeBadge(c.grade)}<span>${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}</span>${p}${mate}</li>`
}
function raceHtml(r) {
  const title = r._pageUrl ? `<a href="${r._pageUrl}" style="color:#0a2342">${esc(r.office)}</a>` : esc(r.office)
  const meta = [r.level, r.description].filter(Boolean).map(esc).join(' · ')
  return `<div class="race"><h3>${title}</h3>${meta ? `<p class="meta">${meta}</p>` : ''}<ul class="cands">${r.candidates.map(candidateLi).join('')}</ul></div>`
}
function fullCandidate(c) {
  const issues = c.positions ? `<div class="issues">${Object.entries(ISSUES).map(([k, l]) => `<span>${l}<b>${esc(c.positions[k] || '–')}</b></span>`).join('')}</div>` : ''
  const why = c.gradeJustifications ? `<ul>${Object.entries(ISSUES).filter(([k]) => c.gradeJustifications[k]).map(([k, l]) => `<li><b>${l}:</b> ${esc(c.gradeJustifications[k])}</li>`).join('')}</ul>` : ''
  const links = [c.website ? `<a href="${esc(c.website)}" rel="nofollow noopener" target="_blank">Campaign site</a>` : '', `<a href="https://ballotpedia.org/wiki/index.php?search=${encodeURIComponent(c.name + ' Minnesota')}" rel="nofollow noopener" target="_blank">Ballotpedia</a>`].filter(Boolean).join('')
  const src = c.sources?.length ? `<p class="note"><b>Sources:</b> ${c.sources.slice(0, 6).map((u, i) => `<a href="${esc(u)}" rel="nofollow noopener" target="_blank">[${i + 1}]</a>`).join(' ')}</p>` : ''
  return `<div class="cand"><h3>${gradeBadge(c.grade)}${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}${c.party ? `<span class="p">${esc(partyLong(c.party))}</span>` : ''}</h3>${c.runningMate ? `<p class="desc">Running mate: ${esc(c.runningMate)}</p>` : ''}${c.description ? `<p class="desc">${esc(c.description)}</p>` : ''}${issues}${c.gradeNote ? `<p class="bio">${esc(c.gradeNote)}</p>` : ''}${why}${src}<p class="links">${links}</p></div>`
}
const raceLinkList = list => `<p class="links">${list.map(r => `<a href="${r._pageUrl}">${esc(r.scope === 'state' ? r.office : districtLabel(r))}</a>`).join(' · ')}</p>`

for (const r of races) {
  const names = r.candidates.map(c => c.name + (c.party ? ` (${partyShort(c.party)})` : '')).join(', ')
  const label = r.scope === 'state' ? r.office : districtLabel(r)
  const graded = r.candidates.filter(c => c.grade).length
  const title = `${label} — Minnesota 2026 candidates, graded | ${ELECTION}`
  const description = `${label} on Minnesota's ${ELECTION} ballot: ${names || 'no candidates filed'}. ${graded ? `${graded} of ${r.candidates.length} candidates graded A–F on constitutional and Christian values` : `${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'}`}.`
  const body = `<h1>${esc(label)} — Minnesota 2026</h1><p class="lede">${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'} on the ${ELECTION} general election ballot (official Minnesota Secretary of State files, as of ${dataAsOf}). Grades reflect each candidate&#39;s public record on life, family, religious liberty, the Second Amendment, limited government and fiscal responsibility.</p>
${ctaBox('See this race on your own ballot — with your county, city and school races.', `${SITE}/ballot?utm_source=seo&utm_medium=race&utm_campaign=mn-${raceSlug(r)}`)}
<h2>Candidates</h2>${r.candidates.map(fullCandidate).join('') || '<p class="note">No candidates filed.</p>'}
<h2>More Minnesota 2026 races</h2>${raceLinkList(races.filter(x => x.scope === r.scope && x !== r).slice(0, 40))}`
  write(`race/${raceSlug(r)}`, layout({ url: r._pageUrl, title, description, body, pageType: 'race', breadcrumbs: [{ name: 'Minnesota', url: `${SITE}/minnesota/` }, { name: 'Races', url: `${SITE}/minnesota/races/` }, { name: label, url: r._pageUrl }], jsonld: [faq([[`Who is running for ${label} in Minnesota in 2026?`, names || 'No candidates filed.'], ['When is the Minnesota 2026 general election?', `Tuesday, ${ELECTION}. Polls are open 7 a.m. to 8 p.m.`]])] }))
}

for (const [cs, { c, race }] of candidatePages) {
  const label = race.scope === 'state' ? race.office : districtLabel(race)
  const title = `${c.name} (${partyShort(c.party) || 'Ind.'}) — ${label}, Minnesota 2026${c.grade ? ` · Grade ${c.grade}` : ''}`
  const description = `${c.name}, ${partyLong(c.party) || 'candidate'} for ${label} on Minnesota's ${ELECTION} ballot.${c.grade ? ` Values grade ${c.grade}.` : ''} ${c.gradeNote ? c.gradeNote.slice(0, 180) : ''}`
  const others = race.candidates.filter(x => x !== c)
  const body = `<h1>${esc(c.name)} — ${esc(label)}</h1><p class="lede">${esc(partyLong(c.party) || 'Candidate')} · Minnesota general election, ${ELECTION}.</p>${fullCandidate(c)}
${others.length ? `<h2>Also running for ${esc(label)}</h2><ul class="cands">${others.map(candidateLi).join('')}</ul>` : ''}<p><a href="${race._pageUrl}">Full race: ${esc(label)} →</a></p>
${ctaBox('See every race on your Minnesota ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=candidate&utm_campaign=mn-${cs}`)}`
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: c.name, ...(c.party ? { affiliation: partyLong(c.party) } : {}), ...(c.website ? { url: c.website } : {}) }
  write(`candidate/${cs}`, layout({ url: c._pageUrl, title, description, body, pageType: 'candidate', breadcrumbs: [{ name: 'Minnesota', url: `${SITE}/minnesota/` }, { name: label, url: race._pageUrl }, { name: c.name, url: c._pageUrl }], jsonld: [person, faq([[`What office is ${c.name} running for?`, `${label} in Minnesota, on the ${ELECTION} general election ballot.`], [`Who is running against ${c.name}?`, others.map(x => x.name).join(', ') || 'No other candidates are listed.']])] }))
}

write('races', layout({ url: `${SITE}/minnesota/races/`, title: 'Minnesota 2026 election: every statewide, congressional and legislative race, graded', description: `U.S. Senate, Governor, Attorney General, Secretary of State, State Auditor, all 8 U.S. House seats, ${races.filter(r => r.scope === 'stateSenate').length} State Senate and ${races.filter(r => r.scope === 'stateHouse').length} State House races on Minnesota's ${ELECTION} ballot — candidates graded on constitutional and Christian values.`, pageType: 'races', breadcrumbs: [{ name: 'Minnesota', url: `${SITE}/minnesota/` }, { name: 'Races', url: `${SITE}/minnesota/races/` }], body: `<h1>Minnesota 2026 races — every candidate, graded</h1><p class="lede">Every statewide and district race on Minnesota&#39;s ${ELECTION} ballot.</p>
<h2>Statewide</h2>${raceLinkList(races.filter(r => r.scope === 'state'))}<h2>U.S. House</h2>${raceLinkList(races.filter(r => r.scope === 'congressional'))}<h2>State Senate</h2>${raceLinkList(races.filter(r => r.scope === 'stateSenate'))}<h2>State House</h2>${raceLinkList(races.filter(r => r.scope === 'stateHouse'))}
${ctaBox('Find your exact districts — enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=races&utm_campaign=mn`)}` }))

// ───────────────────────── Amendment 1 + local questions ─────────────────────────
const amendment = counties[0].referendums.find(q => q.statewide)
amendment._pageUrl = `${SITE}/minnesota/amendment-1/`
write('amendment-1', layout({ url: amendment._pageUrl, title: `Minnesota Constitutional Amendment 1 (2026): school funding — official ballot language | ${ELECTION}`, description: `The official ballot question for Minnesota Constitutional Amendment 1 on the ${ELECTION} ballot. ${amendment.ballotLanguage.slice(0, 150)}`, pageType: 'proposal', breadcrumbs: [{ name: 'Minnesota', url: `${SITE}/minnesota/` }, { name: 'Amendment 1', url: amendment._pageUrl }], jsonld: [faq([['What is Minnesota Constitutional Amendment 1 in 2026?', amendment.ballotLanguage]])], body: `<h1>Minnesota Constitutional Amendment 1</h1><p class="lede">${esc(amendment.name.replace(/^CONSTITUTIONAL AMENDMENT 1:\s*/, ''))} · On every Minnesota ballot, ${ELECTION}.</p><div class="prop"><h3>Official ballot question</h3><p style="white-space:pre-line">${esc(amendment.ballotLanguage)}</p></div><p class="note">Shown word for word from the Minnesota Secretary of State. In Minnesota, a constitutional amendment needs a majority of everyone voting in the election — leaving it blank counts as a no.</p>
${ctaBox('See Amendment 1 with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=proposal&utm_campaign=mn-amendment-1`)}` }))

const qPages = new Map()
const qTitle = q => q.name.replace(/\s*\((ISD|SSD|IND) #(\d+)\)/, (m, k, n) => ` (${k} ${Number(n)})`)
for (const c of counties) for (const q of c.referendums.filter(q => !q.statewide)) {
  const key = `${q.schoolNum || ''}|${(q.mcds || []).join(',')}|${q.name}`
  if (qPages.has(key)) { q._pageUrl = qPages.get(key); continue }
  const where = q.area || (q.mcds?.length === 1 ? null : null) || `${c.county} County`
  let qs = slug(`${where} ${qTitle(q)}`.slice(0, 100))
  while ([...qPages.values()].includes(`${SITE}/minnesota/question/${qs}/`)) qs += `-${c.slug}`
  q._pageUrl = `${SITE}/minnesota/question/${qs}/`
  qPages.set(key, q._pageUrl)
  write(`question/${qs}`, layout({ url: q._pageUrl, title: `${qTitle(q)} — ${where}, Minnesota | ${ELECTION}`, description: `Official ballot language of ${qTitle(q)} on the ${ELECTION} ballot in ${where}, Minnesota. ${q.ballotLanguage.slice(0, 120)}`, pageType: 'proposal', breadcrumbs: [{ name: 'Minnesota', url: `${SITE}/minnesota/` }, { name: `${c.county} County`, url: `${SITE}/minnesota/${c.slug}/` }, { name: qTitle(q), url: q._pageUrl }], jsonld: [faq([[`What does ${qTitle(q)} ask?`, q.ballotLanguage || 'See your sample ballot.']])], body: `<h1>${esc(qTitle(q))}</h1><p class="lede">Local ballot question · ${esc(where)} · ${ELECTION}. Only voters in the district holding the vote see this question.</p><div class="prop"><h3>Official ballot language</h3><p style="white-space:pre-line">${esc(q.ballotLanguage)}</p></div><p class="note">Shown word for word from the Minnesota Secretary of State&#39;s ballot question file.</p>
${ctaBox('See this question with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=question&utm_campaign=mn-${qs}`)}<p><a href="${SITE}/minnesota/${c.slug}/">All ${esc(c.county)} County races →</a></p>` }))
}
const qHtml = q => `<div class="prop"><h3>${q._pageUrl ? `<a href="${q._pageUrl}">${esc(q.statewide ? 'Constitutional Amendment 1' : qTitle(q))}</a>` : esc(q.name)}</h3><div class="tags"><span>${q.statewide ? 'Constitutional amendment' : esc(q.area || 'Local question')}</span></div><details><summary>Official ballot language</summary><p style="white-space:pre-line">${esc(q.ballotLanguage)}</p></details></div>`

// ───────────────────────── school boards, counties, cities & townships ─────────────────────────
const statewideBlock = `<h2>Statewide races (every Minnesota ballot)</h2>${races.filter(r => r.scope === 'state').map(raceHtml).join('')}<div class="race"><p class="meta">Also on your ballot: your <a href="${SITE}/minnesota/races/" style="color:#0a2342">U.S. House, State Senate and State House districts</a> (enter your address to see yours) and <a href="${amendment._pageUrl}" style="color:#0a2342"><b>Constitutional Amendment 1</b></a>.</p></div>`
function votingInHtml(name) {
  return `<h2>Voting in ${esc(name)}</h2><ul class="dates">
<li><b>Election Day</b>Tuesday, ${ELECTION} · polls open 7 a.m.–8 p.m. (some small townships open as late as 10 a.m.).</li>
<li><b>Where to vote</b>Look up your polling place with the <a href="https://pollfinder.sos.mn.gov/" rel="noopener">Minnesota Secretary of State poll finder</a>.</li>
<li><b>Register at the polls</b>Minnesota allows Election Day registration with proof of residence.</li>
<li><b>ID</b>Registered voters don&#39;t need ID. <a href="${SITE}/minnesota/how-to-vote/">Full checklist →</a></li>
</ul>`
}
const schoolPages = new Map()
let placePages = 0
const cleanArea = a => String(a || '').replace(/^City of /, '')
for (const c of counties) {
  const cUrl = `${SITE}/minnesota/${c.slug}/`
  const allMcds = new Set(c.races.filter(r => r.scope === 'county').flatMap(r => [...(r.mcds || []), ...(r.mcdMaybe || [])]))
  const trulyCounty = c.races.filter(r => r.scope === 'county' && (r.mcds || []).length === allMcds.size)
  const partCounty = c.races.filter(r => r.scope === 'county' && !trulyCounty.includes(r))
  const local = c.races.filter(r => r.scope === 'city' || r.scope === 'township')
  const places = [...new Map(local.map(r => [r.area, { area: r.area, code: (r.mcds?.[0] || r.mcdMaybe?.[0]), township: r.scope === 'township' }])).values()].sort((a, b) => cleanArea(a.area).localeCompare(cleanArea(b.area)))
  const placeUrl = p => `${cUrl}${slug(cleanArea(p.area))}/`
  const schools = c.schoolDistricts || []
  const localQ = c.referendums.filter(q => !q.statewide)

  for (const s of schools) {
    const rs = c.races.filter(r => r.scope === 'school' && r.schoolNum === s.num)
    const qs = localQ.filter(q => q.schoolNum === s.num)
    if (!rs.length && !qs.length) continue
    const sSlug = slug(`${s.name} ${Number(s.num)}`)
    const url = `${SITE}/minnesota/school-boards/${sSlug}/`
    if (schoolPages.has(sSlug)) continue
    schoolPages.set(sSlug, url)
    write(`school-boards/${sSlug}`, layout({ url, title: `${s.name} school board election 2026 (District ${Number(s.num)}) — candidates & questions | ${ELECTION}`, description: `${s.name} (School District ${Number(s.num)}) on the ${ELECTION} ballot: ${rs.map(r => r.candidates.map(x => x.name).join(', ')).filter(Boolean).join('; ') || 'no board races'}${qs.length ? `; ${qs.length} school ballot question${qs.length === 1 ? '' : 's'}` : ''}.`, pageType: 'school-board', breadcrumbs: [{ name: 'Minnesota', url: `${SITE}/minnesota/` }, { name: `${c.county} County`, url: cUrl }, { name: `${s.name} school board`, url }], jsonld: [faq([[`Who is running for the ${s.name} school board in 2026?`, rs.flatMap(r => r.candidates.map(x => x.name)).join(', ') || 'No board races are on the ballot.']])], body: `<h1>${esc(s.name)} school board — 2026</h1><p class="lede">School District ${Number(s.num)} · ${ELECTION}. Seats elected by board district appear only for voters in that district.</p>${rs.map(raceHtml).join('')}${qs.length ? `<h2>School ballot questions (${qs.length})</h2>${qs.map(qHtml).join('')}` : ''}
${ctaBox('See your full ballot — every race, graded where reviewed.', `${SITE}/ballot?utm_source=seo&utm_medium=school-board&utm_campaign=mn-${sSlug}`)}<p><a href="${cUrl}">All ${esc(c.county)} County races →</a></p>` }))
  }
  const schoolLinks = schools.filter(s => schoolPages.has(slug(`${s.name} ${Number(s.num)}`))).map(s => `<a href="${schoolPages.get(slug(`${s.name} ${Number(s.num)}`))}">${esc(s.name)}</a>`)
  const schoolBlock = schoolLinks.length ? `<h2>School districts in ${esc(c.county)} County</h2><p class="links">${schoolLinks.join(' · ')}</p>` : ''
  const countyBlock = `<h2>${esc(c.county)} County races (${trulyCounty.length})</h2>${trulyCounty.map(raceHtml).join('')}${partCounty.length ? `<h2>District seats in ${esc(c.county)} County (${partCounty.length})</h2><p class="note">Commissioner, park and soil &amp; water district seats appear only for voters in that district. Check your sample ballot at <a href="${SAMPLE}">My Ballot</a>.</p>${partCounty.map(raceHtml).join('')}` : ''}`

  for (const p of places) {
    const rs = local.filter(r => r.area === p.area)
    const sure = rs.filter(r => (r.mcds || []).length), maybe = rs.filter(r => !(r.mcds || []).length)
    const name = cleanArea(p.area)
    const here = c.races.filter(r => r.scope === 'county' && ((r.mcds || []).includes(p.code)))
    const hereMaybe = c.races.filter(r => r.scope === 'county' && ((r.mcdMaybe || []).includes(p.code)))
    const qs = localQ.filter(q => (q.mcds || []).includes(p.code))
    const url = placeUrl(p)
    placePages++
    write(`${c.slug}/${slug(name)}`, layout({ url, title: `What's on the ballot in ${name}, MN (${c.county} County) — ${ELECTION}`, description: `${name} sample ballot for ${ELECTION}: ${rs.map(r => r.office.replace(/\s*\([^)]*\)/g, '')).slice(0, 4).join(', ')}, ${here.length} county races, U.S. Senate, Governor, Congress, legislature and Amendment 1.`, pageType: 'jurisdiction', breadcrumbs: [{ name: 'Minnesota', url: `${SITE}/minnesota/` }, { name: `${c.county} County`, url: cUrl }, { name, url }], jsonld: [faq([[`What is on the ballot in ${name}, Minnesota on ${ELECTION}?`, `${rs.length} ${p.township ? 'township' : 'city'} races, ${here.length} ${c.county} County races, U.S. Senate, Governor and statewide offices, U.S. House, State Senate and House, Constitutional Amendment 1${qs.length ? ` and ${qs.length} local question${qs.length === 1 ? '' : 's'}` : ''}.`], [`Who is running in ${name}?`, rs.flatMap(r => r.candidates.map(x => x.name)).join(', ') || 'No candidates filed; write-ins are possible.']])], body: `<h1>What&#39;s on the ballot in ${esc(name)}, ${esc(c.county)} County</h1>
<p class="lede">Minnesota General Election · Tuesday, ${ELECTION} · Polls open 7 a.m.–8 p.m. From the Minnesota Secretary of State&#39;s official election files (as of ${dataAsOf}). Enter your address to see your exact ballot with candidates graded.</p>
${ctaBox(`See every race on your ${esc(name)} ballot.`, `${SITE}/ballot?utm_source=seo&utm_medium=ballot-page&utm_campaign=mn-${c.slug}-${slug(name)}`)}
<h2>${esc(name)} races (${sure.length})</h2>${sure.map(raceHtml).join('') || '<p class="note">No races for this office on the ballot.</p>'}${maybe.length ? `<h2>Ward / district seats (${maybe.length})</h2><p class="note">Only voters in that ward or district see these seats.</p>${maybe.map(raceHtml).join('')}` : ''}
${qs.length ? `<h2>Local questions (${qs.length})</h2>${qs.map(qHtml).join('')}` : ''}
${statewideBlock}<h2>${esc(c.county)} County races (${here.length})</h2>${here.map(raceHtml).join('')}${hereMaybe.length ? `<h2>County district seats that may be on your ballot (${hereMaybe.length})</h2>${hereMaybe.map(raceHtml).join('')}` : ''}${schoolBlock}${votingInHtml(name)}
<h2>Other cities &amp; townships in ${esc(c.county)} County</h2><p class="links">${places.filter(x => x !== p).map(x => `<a href="${placeUrl(x)}">${esc(cleanArea(x.area))}</a>`).join(' · ')}</p>` }))
  }

  const countyQ = localQ.filter(q => !q.schoolNum && !(q.mcds || []).length || (q.mcds || []).length === allMcds.size && !q.schoolNum)
  write(c.slug, layout({ url: cUrl, title: `${c.county} County, MN sample ballot 2026 — every city, township & race (${ELECTION})`, description: `What's on the ballot in ${c.county} County, Minnesota for ${ELECTION}: ${trulyCounty.map(r => r.office.replace(/\s*-\s*/, ' ')).slice(0, 4).join(', ') || 'county offices'}, ${places.length} cities and townships, ${schoolLinks.length} school districts, ${localQ.length} local questions, plus statewide and district races.`, pageType: 'county', breadcrumbs: [{ name: 'Minnesota', url: `${SITE}/minnesota/` }, { name: `${c.county} County`, url: cUrl }], jsonld: [faq([[`What is on the ballot in ${c.county} County, Minnesota on ${ELECTION}?`, `${trulyCounty.map(r => r.office).join(', ') || 'County offices'}, city and township races, school boards, U.S. Senate, Governor, U.S. House, legislature and Constitutional Amendment 1.`], [`What time do polls close in ${c.county} County?`, `Minnesota polls are open 7 a.m. to 8 p.m. on Tuesday, ${ELECTION}.`]])], body: `<h1>${esc(c.county)} County ballot — ${ELECTION}</h1><p class="lede">Pick your city or township to see your local races. From the Minnesota Secretary of State&#39;s official election files (as of ${dataAsOf}).</p>
${ctaBox('Faster: enter your address for your exact ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=county&utm_campaign=mn-${c.slug}`)}
${places.length ? `<h2>Cities &amp; townships with races</h2><p class="links">${places.map(x => `<a href="${placeUrl(x)}">${esc(cleanArea(x.area))}</a>`).join(' · ')}</p>` : ''}${schoolBlock}
${countyBlock}${countyQ.length ? `<h2>County questions (${countyQ.length})</h2>${countyQ.map(qHtml).join('')}` : ''}<h2>Constitutional Amendment 1</h2>${qHtml(amendment)}
${statewideBlock}${votingInHtml(`${c.county} County`)}
<h2>Other Minnesota counties</h2><p class="links">${counties.filter(x => x !== c).map(x => `<a href="${SITE}/minnesota/${x.slug}/">${esc(x.county)}</a>`).join(' · ')}</p>` }))
}

// ───────────────────────── how to vote, key dates, state index ─────────────────────────
const qa = [
  ['Am I registered to vote in Minnesota?', 'Check with the Minnesota Secretary of State (mnvotes.sos.mn.gov). The poll finder shows your polling place.'],
  ['Can I still register to vote?', 'Yes. Pre-registration closed October 13, but Minnesota allows Election Day registration at your polling place with proof of residence.'],
  ['Do I need ID to vote in Minnesota?', 'Not if you are already registered. If you register at the polls, bring proof of residence, such as a Minnesota driver’s license or ID with your current address.'],
  ['When can I vote early?', 'Early in-person voting began September 18 and runs through Monday, November 2, 2026. Check your county or city election office for locations and hours.'],
  ['What are the polling hours on Election Day?', 'Polls are open 7 a.m. to 8 p.m. on Tuesday, November 3, 2026 (some small townships open as late as 10 a.m.). If you are in line by 8 p.m., you can vote.'],
  ['Can I bring notes into the voting booth?', 'Yes. You may bring a printed or written list of your choices, such as your ballot plan.'],
]
write('how-to-vote', layout({ url: `${SITE}/minnesota/how-to-vote/`, title: 'How to vote in Minnesota 2026: same-day registration, early voting, ID, poll hours', description: `Everything you need to vote in Minnesota's ${ELECTION} election: Election Day registration, early voting through Nov 2, ID rules and polling hours (7 a.m.–8 p.m.).`, pageType: 'how-to-vote', breadcrumbs: [{ name: 'Minnesota', url: `${SITE}/minnesota/` }, { name: 'How to vote', url: `${SITE}/minnesota/how-to-vote/` }], jsonld: [faq(qa)], body: `<h1>How to vote in Minnesota — ${ELECTION}</h1><p class="lede">A plain-English checklist for the general election.</p><ul class="dates">${qa.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Know every race before you go — build your ballot plan.', `${SITE}/ballot?utm_source=seo&utm_medium=how-to-vote&utm_campaign=mn`)}<p><a href="${SITE}/minnesota/key-dates/">Key dates →</a> · <a href="${SITE}/minnesota/">What&#39;s on the ballot in my county →</a></p>` }))

const dates = [
  ['Early in-person voting', 'September 18 through Monday, November 2, 2026'],
  ['Pre-registration deadline', 'Tuesday, October 13, 2026 (closed) — Election Day registration still available'],
  ['Election Day', `Tuesday, ${ELECTION} · polls open 7 a.m.–8 p.m.`],
]
write('key-dates', layout({ url: `${SITE}/minnesota/key-dates/`, title: 'Minnesota election key dates 2026: early voting, registration, Election Day hours', description: `Minnesota ${ELECTION} general election: early voting through Nov 2, register at the polls on Election Day, polls open 7 a.m.–8 p.m.`, pageType: 'key-dates', breadcrumbs: [{ name: 'Minnesota', url: `${SITE}/minnesota/` }, { name: 'Key dates', url: `${SITE}/minnesota/key-dates/` }], jsonld: [faq(dates.map(([q, a]) => [`Minnesota 2026: ${q}?`, a]))], body: `<h1>Minnesota 2026 election — key dates &amp; deadlines</h1><p class="lede">General election Tuesday, ${ELECTION}.</p><ul class="dates">${dates.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Plan your vote in two minutes.', `${SITE}/ballot?utm_source=seo&utm_medium=key-dates&utm_campaign=mn`)}` }))

write('', layout({ url: `${SITE}/minnesota/`, title: `Minnesota sample ballot 2026 by county — what's on the ${ELECTION} ballot`, description: `Every race and ballot question on Minnesota's ${ELECTION} ballot for all ${counties.length} counties — U.S. Senate, Governor, Congress, legislature, county, city, township and school board races, Amendment 1 and ${qPages.size} local questions.`, pageType: 'state', body: `<h1>Minnesota ballot — ${ELECTION}</h1><p class="lede">Pick your county, then your city or township, to see what&#39;s on your ballot. Or jump to <a href="${SITE}/minnesota/races/">statewide and district races</a>, <a href="${amendment._pageUrl}">Amendment 1</a> or <a href="${SITE}/minnesota/key-dates/">key dates</a>.</p><p class="links">${counties.map(c => `<a href="${SITE}/minnesota/${c.slug}/">${esc(c.county)} County</a>`).join(' · ')}</p>${ctaBox('Faster: enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=state-page&utm_campaign=mn`)}` }))

// ───────────────────────── append to the sitemap written by build-seo-pages.mjs ─────────────────────────
const sitemapPath = path.join(ROOT, 'public/sitemap.xml')
const today = new Date().toISOString().slice(0, 10)
const sm = readFileSync(sitemapPath, 'utf8').replace(/\s*<url><loc>https:\/\/www\.offorandbythepeople\.com\/minnesota\/[^<]*<\/loc>[^\n]*/g, '')
writeFileSync(sitemapPath, sm.replace('</urlset>', `${pages.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>`))
console.log(`minnesota: wrote ${pages.length} pages: ${counties.length} counties, ${placePages} cities/townships, ${schoolPages.size} school districts, ${races.length} races, ${candidatePages.size} candidates, ${qPages.size} local questions`)
