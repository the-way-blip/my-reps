// Static SEO pages for the November 3, 2026 Iowa ballot, generated into public/iowa/… after the
// Wisconsin pages (it appends its URLs to public/sitemap.xml). Data: public/data/ia/ballots/ (build-iowa.mjs).
//   /iowa/                                   state index
//   /iowa/<county>/                          county ballot (county offices, township races, measures, judges)
//   /iowa/<county>/<township>-township/      township ballot (township + county races)
//   /iowa/race/<slug>/                       statewide, U.S. House, State Senate, State House races
//   /iowa/candidate/<slug>/                  every graded statewide/district candidate
//   /iowa/amendment-1/                       the statewide constitutional amendment (official text)
//   /iowa/measure/<slug>/                    every local school, city and county measure (official text)
//   /iowa/races/, /iowa/how-to-vote/, /iowa/key-dates/

import { readdirSync, readFileSync, writeFileSync, rmSync, mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SITE, ELECTION, esc, slug, PARTY, PARTY_LONG, ISSUES, makePageWriter, ctaBox, faq, gradeBadge } from './seo-shared.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'public/data/ia/ballots')
const OUT = path.join(ROOT, 'public/iowa')
const IA_SITE = 'https://sos.iowa.gov/amiregistered'
const AUDITORS = 'https://sos.iowa.gov/elections/auditors/auditorslist.html'

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

const { layout, write, pages } = makePageWriter({
  outDir: OUT,
  urlPrefix: 'iowa',
  footerHtml: `Races are taken from the Iowa Secretary of State&#39;s candidate list and each county auditor&#39;s published sample ballot or notice of election (<a href="${AUDITORS}">county auditors</a>). Always confirm with your own sample ballot.<br>&copy; 2026 Of For &amp; By The People · <a href="${SITE}/iowa/">Iowa ballot by county</a> · <a href="${SITE}/iowa/races/">Statewide races</a> · <a href="${SITE}/iowa/key-dates/">Key dates</a> · <a href="${SITE}/iowa/how-to-vote/">How to vote</a> · <a href="${SITE}/michigan/">Michigan ballot</a> · <a href="${SITE}/indiana/">Indiana ballot</a> · <a href="${SITE}/wisconsin/">Wisconsin ballot</a> · <a href="${SITE}/privacy">Privacy</a> · <a href="${SITE}/terms">Terms</a>`,
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
for (const r of races) r._pageUrl = `${SITE}/iowa/race/${raceSlug(r)}/`
const candidatePages = new Map() // slug -> { c, race }
for (const r of races) for (const c of r.candidates) {
  if (!c.grade && !c.gradeNote) continue
  let cs = slug(c.name)
  if (candidatePages.has(cs)) cs = `${cs}-${raceSlug(r)}`
  candidatePages.set(cs, { c, race: r })
  c._pageUrl = `${SITE}/iowa/candidate/${cs}/`
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
  const links = [c.website ? `<a href="${esc(c.website)}" rel="nofollow noopener" target="_blank">Campaign site</a>` : '', `<a href="https://ballotpedia.org/wiki/index.php?search=${encodeURIComponent(c.name + ' Iowa')}" rel="nofollow noopener" target="_blank">Ballotpedia</a>`].filter(Boolean).join('')
  const src = c.sources?.length ? `<p class="note"><b>Sources:</b> ${c.sources.slice(0, 6).map((u, i) => `<a href="${esc(u)}" rel="nofollow noopener" target="_blank">[${i + 1}]</a>`).join(' ')}</p>` : ''
  return `<div class="cand"><h3>${gradeBadge(c.grade)}${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}${c.party ? `<span class="p">${esc(partyLong(c.party))}</span>` : ''}</h3>${c.runningMate ? `<p class="desc">Running mate: ${esc(c.runningMate)}</p>` : ''}${c.description ? `<p class="desc">${esc(c.description)}</p>` : ''}${issues}${c.gradeNote ? `<p class="bio">${esc(c.gradeNote)}</p>` : ''}${why}${src}<p class="links">${links}</p></div>`
}
const raceLinkList = list => `<p class="links">${list.map(r => `<a href="${r._pageUrl}">${esc(r.scope === 'state' ? r.office : districtLabel(r))}</a>`).join(' · ')}</p>`

for (const r of races) {
  const names = r.candidates.map(c => c.name + (c.party ? ` (${partyShort(c.party)})` : '')).join(', ')
  const label = r.scope === 'state' ? r.office : districtLabel(r)
  const graded = r.candidates.filter(c => c.grade).length
  const title = `${label} — Iowa 2026 candidates, graded | ${ELECTION}`
  const description = `${label} on Iowa's ${ELECTION} ballot: ${names || 'no candidates filed'}. ${graded ? `${graded} of ${r.candidates.length} candidates graded A–F on constitutional and Christian values` : `${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'}`}.`
  const body = `<h1>${esc(label)} — Iowa 2026</h1><p class="lede">${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'} on the ${ELECTION} general election ballot (official Iowa Secretary of State list, as of ${dataAsOf}). Grades reflect each candidate&#39;s public record on life, family, religious liberty, the Second Amendment, limited government and fiscal responsibility.</p>
${ctaBox('See this race on your own ballot — with your county races and local referendums.', `${SITE}/ballot?utm_source=seo&utm_medium=race&utm_campaign=ia-${raceSlug(r)}`)}
<h2>Candidates</h2>${r.candidates.map(fullCandidate).join('') || '<p class="note">No candidates filed.</p>'}
<h2>More Iowa 2026 races</h2>${raceLinkList(races.filter(x => x.scope === r.scope && x !== r).slice(0, 40))}`
  write(`race/${raceSlug(r)}`, layout({ url: r._pageUrl, title, description, body, pageType: 'race', breadcrumbs: [{ name: 'Iowa', url: `${SITE}/iowa/` }, { name: 'Races', url: `${SITE}/iowa/races/` }, { name: label, url: r._pageUrl }], jsonld: [faq([[`Who is running for ${label} in Iowa in 2026?`, names || 'No candidates filed.'], ['When is the Iowa 2026 general election?', `Tuesday, ${ELECTION}. Polls are open 7 a.m. to 8 p.m.`]])] }))
}

for (const [cs, { c, race }] of candidatePages) {
  const label = race.scope === 'state' ? race.office : districtLabel(race)
  const title = `${c.name} (${partyShort(c.party) || 'Ind.'}) — ${label}, Iowa 2026${c.grade ? ` · Grade ${c.grade}` : ''}`
  const description = `${c.name}, ${partyLong(c.party) || 'candidate'} for ${label} on Iowa's ${ELECTION} ballot.${c.grade ? ` Values grade ${c.grade}.` : ''} ${c.gradeNote ? c.gradeNote.slice(0, 180) : ''}`
  const others = race.candidates.filter(x => x !== c)
  const body = `<h1>${esc(c.name)} — ${esc(label)}</h1><p class="lede">${esc(partyLong(c.party) || 'Candidate')} · Iowa general election, ${ELECTION}.</p>${fullCandidate(c)}
${others.length ? `<h2>Also running for ${esc(label)}</h2><ul class="cands">${others.map(candidateLi).join('')}</ul>` : ''}<p><a href="${race._pageUrl}">Full race: ${esc(label)} →</a></p>
${ctaBox('See every race on your Iowa ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=candidate&utm_campaign=ia-${cs}`)}`
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: c.name, ...(c.party ? { affiliation: partyLong(c.party) } : {}), ...(c.website ? { url: c.website } : {}) }
  write(`candidate/${cs}`, layout({ url: c._pageUrl, title, description, body, pageType: 'candidate', breadcrumbs: [{ name: 'Iowa', url: `${SITE}/iowa/` }, { name: label, url: race._pageUrl }, { name: c.name, url: c._pageUrl }], jsonld: [person, faq([[`What office is ${c.name} running for?`, `${label} in Iowa, on the ${ELECTION} general election ballot.`], [`Who is running against ${c.name}?`, others.map(x => x.name).join(', ') || 'No other candidates are listed.']])] }))
}

write('races', layout({ url: `${SITE}/iowa/races/`, title: 'Iowa 2026 election: every statewide, congressional and legislative race, graded', description: `U.S. Senate, Governor, Attorney General, Secretary of State, Auditor, Treasurer, Secretary of Agriculture, all 4 U.S. House seats, ${races.filter(r => r.scope === 'stateSenate').length} State Senate and ${races.filter(r => r.scope === 'stateHouse').length} State House races on Iowa's ${ELECTION} ballot — candidates graded on constitutional and Christian values.`, pageType: 'races', breadcrumbs: [{ name: 'Iowa', url: `${SITE}/iowa/` }, { name: 'Races', url: `${SITE}/iowa/races/` }], body: `<h1>Iowa 2026 races — every candidate, graded</h1><p class="lede">Every statewide and district race on Iowa&#39;s ${ELECTION} ballot.</p>
<h2>Statewide</h2>${raceLinkList(races.filter(r => r.scope === 'state'))}<h2>U.S. House</h2>${raceLinkList(races.filter(r => r.scope === 'congressional'))}<h2>State Senate</h2>${raceLinkList(races.filter(r => r.scope === 'stateSenate'))}<h2>State House</h2>${raceLinkList(races.filter(r => r.scope === 'stateHouse'))}
${ctaBox('Find your exact districts — enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=races&utm_campaign=ia`)}` }))

// ───────────────────────── amendment, local measures, judges ─────────────────────────
const isJudge = q => /retention/i.test(q.type)
const statewideQs = counties[0].referendums.filter(q => q.statewide)
const shortQ = q => q.name.replace(/^Statewide Public Measure 1 — /, 'Amendment 1: ')
for (const q of statewideQs) {
  const label = shortQ(q)
  const qs = 'amendment-1'
  q._pageUrl = `${SITE}/iowa/${qs}/`
  write(qs, layout({ url: q._pageUrl, title: `Iowa ${label} 2026 — official ballot language | ${ELECTION}`, description: `The official text of Iowa's ${label}, a proposed amendment to the Iowa Constitution on the ${ELECTION} ballot. ${q.ballotLanguage.slice(0, 140)}`, pageType: 'proposal', breadcrumbs: [{ name: 'Iowa', url: `${SITE}/iowa/` }, { name: label, url: q._pageUrl }], jsonld: [faq([[`What is Iowa's ${label}?`, q.ballotLanguage]])], body: `<h1>Iowa ${esc(label)}</h1><p class="lede">Constitutional amendment · On every Iowa ballot, ${ELECTION}.</p><div class="prop"><h3>Official ballot language</h3><p style="white-space:pre-line">${esc(q.ballotLanguage)}</p></div><p class="note">Shown word for word from the Iowa Secretary of State. Vote YES to approve the amendment or NO to reject it.</p>
${ctaBox('See this amendment with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=proposal&utm_campaign=ia-${qs}`)}` }))
}

const localPages = new Map()
for (const c of counties) for (const q of c.referendums.filter(q => !q.statewide && !isJudge(q))) {
  const key = q.name
  if (localPages.has(key)) { q._pageUrl = localPages.get(key); continue }
  let ms = slug(q.name.replace(/\$/g, '').slice(0, 90))
  while ([...localPages.values()].includes(`${SITE}/iowa/measure/${ms}/`)) ms += `-${c.slug}`
  q._pageUrl = `${SITE}/iowa/measure/${ms}/`
  localPages.set(key, q._pageUrl)
  write(`measure/${ms}`, layout({ url: q._pageUrl, title: `${q.name} — ${c.county} County, Iowa | ${ELECTION}`, description: `Official ballot language of ${q.name} on the ${ELECTION} ballot in ${c.county} County, Iowa. ${q.ballotLanguage.slice(0, 130)}`, pageType: 'proposal', breadcrumbs: [{ name: 'Iowa', url: `${SITE}/iowa/` }, { name: `${c.county} County`, url: `${SITE}/iowa/${c.slug}/` }, { name: q.name, url: q._pageUrl }], jsonld: [faq([[`What does ${q.name} ask?`, q.ballotLanguage || 'See your sample ballot.']])], body: `<h1>${esc(q.name)}</h1><p class="lede">Local public measure · ${esc(c.county)} County · ${ELECTION}. Only voters in the district holding the vote see this measure.</p><div class="prop"><h3>Official ballot language</h3><p style="white-space:pre-line">${esc(q.ballotLanguage)}</p></div><p class="note">From the county auditor&#39;s published sample ballot or notice of election.</p>
${ctaBox('See this measure with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=measure&utm_campaign=ia-${ms}`)}<p><a href="${SITE}/iowa/${c.slug}/">All ${esc(c.county)} County races →</a></p>` }))
}
const qHtml = q => `<div class="prop"><h3>${q._pageUrl ? `<a href="${q._pageUrl}">${esc(q.statewide ? shortQ(q) : q.name)}</a>` : esc(q.name)}</h3><div class="tags"><span>${q.statewide ? 'Constitutional amendment' : esc(q.type)}</span></div><details><summary>Official ballot language</summary><p>${esc(q.ballotLanguage)}</p></details></div>`
const judgeList = c => { const js = c.referendums.filter(isJudge); return js.length ? `<h2>Judges up for retention (${js.length})</h2><p class="links">${js.map(q => esc(q.name.replace(/^Retain\s+/, '').replace(/\?$/, ''))).join(' · ')}</p>` : '' }

// ───────────────────────── counties and townships ─────────────────────────
const statewideBlock = `<h2>Statewide races (every Iowa ballot)</h2>${races.filter(r => r.scope === 'state').map(raceHtml).join('')}<div class="race"><p class="meta">Also on your ballot: your <a href="${SITE}/iowa/races/" style="color:#0a2342">U.S. House, State Senate and State House districts</a> (enter your address to see yours), <a href="${statewideQs[0]?._pageUrl}" style="color:#0a2342"><b>Amendment 1</b></a> and judge retention questions.</p></div>`
function votingInHtml(name) {
  return `<h2>Voting in ${esc(name)}</h2><ul class="dates">
<li><b>Election Day</b>Tuesday, ${ELECTION} · polls open 7 a.m.–8 p.m. If you&#39;re in line by 8 p.m., you can vote.</li>
<li><b>Where to vote</b>Look up your polling place with the <a href="https://apps.sos.iowa.gov/elections/voterreg/pollingplace/search.aspx" rel="noopener">Iowa Secretary of State</a>.</li>
<li><b>Register at the polls</b>Iowa allows Election Day registration with ID and proof of residence.</li>
<li><b>Absentee ballots</b>Must reach your county auditor before polls close — a postmark is not enough.</li>
<li><b>ID</b>Iowa requires ID to vote. <a href="${SITE}/iowa/how-to-vote/">Full checklist →</a></li>
</ul>`
}
const partialNote = c => c.localComplete === false ? `<p class="note">Some county and township races in ${esc(c.county)} County aren&#39;t listed yet — check your <a href="${AUDITORS}">county auditor&#39;s</a> sample ballot.</p>` : ''

let townshipPages = 0
for (const c of counties) {
  const cUrl = `${SITE}/iowa/${c.slug}/`
  const county = c.races.filter(r => r.scope === 'county' && !r.maybe)
  const maybe = c.races.filter(r => r.scope === 'county' && r.maybe)
  const townships = [...new Set(c.races.filter(r => r.scope === 'township').map(r => r.area))].filter(Boolean).sort()
  const twpUrl = a => `${cUrl}${slug(a)}-township/`
  const localQ = c.referendums.filter(q => !q.statewide && !isJudge(q))
  const countyBlock = `<h2>${esc(c.county)} County races (${county.length})</h2>${county.map(raceHtml).join('') || '<p class="note">No countywide races are listed.</p>'}${maybe.length ? `<h2>May be on your ballot (${maybe.length})</h2><p class="note">Supervisor seats elected by district. Check your <a href="${AUDITORS}">county auditor&#39;s</a> sample ballot.</p>${maybe.map(raceHtml).join('')}` : ''}${partialNote(c)}`
  const qBlock = `<h2>Measures (${statewideQs.length + localQ.length})</h2>${statewideQs.map(qHtml).join('')}${localQ.map(qHtml).join('')}${localQ.length ? '<p class="note">Local measures appear only for voters in that school district, city or county.</p>' : ''}${judgeList(c)}`
  for (const a of townships) {
    const rs = c.races.filter(r => r.scope === 'township' && r.area === a)
    const name = `${a} Township`
    const url = twpUrl(a)
    townshipPages++
    write(`${c.slug}/${slug(a)}-township`, layout({ url, title: `What's on the ballot in ${name}, IA (${c.county} County) — ${ELECTION}`, description: `${name} (${c.county} County) sample ballot for ${ELECTION}: ${rs.map(r => r.office).join(', ')}, ${county.length} county races, U.S. Senate, Governor, Congress, state legislature and Amendment 1.`, pageType: 'jurisdiction', breadcrumbs: [{ name: 'Iowa', url: `${SITE}/iowa/` }, { name: `${c.county} County`, url: cUrl }, { name, url }], jsonld: [faq([[`What is on the ballot in ${name}, Iowa on ${ELECTION}?`, `${rs.length} township races, ${c.county} County offices, statewide offices, U.S. House, state legislature, Amendment 1 and judge retention questions.`], [`Who is running for ${name} offices?`, rs.flatMap(r => r.candidates.map(x => x.name)).join(', ') || 'No candidates filed; write-ins are possible.']])], body: `<h1>What&#39;s on the ballot in ${esc(name)}, ${esc(c.county)} County</h1>
<p class="lede">Iowa General Election · Tuesday, ${ELECTION} · Polls open 7 a.m.–8 p.m. Residents of a city inside the township may not vote on township offices — check your sample ballot.</p>
${ctaBox(`See every race on your ${esc(name)} ballot.`, `${SITE}/ballot?utm_source=seo&utm_medium=ballot-page&utm_campaign=ia-${c.slug}-${slug(a)}`)}
<h2>${esc(name)} races (${rs.length})</h2>${rs.map(raceHtml).join('')}
${statewideBlock}${countyBlock}${qBlock}${votingInHtml(name)}
<h2>Other townships in ${esc(c.county)} County</h2><p class="links">${townships.filter(x => x !== a).map(x => `<a href="${twpUrl(x)}">${esc(x)} Township</a>`).join(' · ')}</p>` }))
  }
  const names = county.flatMap(r => r.candidates.map(x => x.name)).slice(0, 6).join(', ')
  write(c.slug, layout({ url: cUrl, title: `${c.county} County, IA sample ballot 2026 — every race & measure (${ELECTION})`, description: `What's on the ballot in ${c.county} County, Iowa for ${ELECTION}: ${county.map(r => r.office.replace(`${c.county} County `, '')).slice(0, 5).join(', ') || 'county offices'}${townships.length ? `, ${townships.length} townships` : ''}${localQ.length ? `, ${localQ.length} local measure${localQ.length === 1 ? '' : 's'}` : ''}, U.S. Senate, Governor, Congress, state legislature and Amendment 1.`, pageType: 'county', breadcrumbs: [{ name: 'Iowa', url: `${SITE}/iowa/` }, { name: `${c.county} County`, url: cUrl }], jsonld: [faq([[`What is on the ballot in ${c.county} County, Iowa on ${ELECTION}?`, `${county.map(r => r.office).join(', ') || 'County offices'}, township offices, U.S. Senate, Governor, U.S. House, state legislature, Amendment 1${localQ.length ? `, ${localQ.length} local measures` : ''} and judge retention questions.`], [`Who is running for ${c.county} County offices in 2026?`, names || 'See the county races listed on this page.'], [`What time do polls close in ${c.county} County?`, `Iowa polls are open 7 a.m. to 8 p.m. on Tuesday, ${ELECTION}.`]])], body: `<h1>${esc(c.county)} County ballot — ${ELECTION}</h1><p class="lede">Iowa General Election · Tuesday, ${ELECTION} · Polls open 7 a.m.–8 p.m. Statewide races from the Iowa Secretary of State (as of ${dataAsOf}); county and township races from the county auditor. Enter your address to see your exact ballot with candidates graded.</p>
${ctaBox('Faster: enter your address for your exact ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=county&utm_campaign=ia-${c.slug}`)}
${townships.length ? `<h2>Townships</h2><p class="links">${townships.map(x => `<a href="${twpUrl(x)}">${esc(x)} Township</a>`).join(' · ')}</p>` : ''}
${countyBlock}${qBlock}${statewideBlock}${votingInHtml(`${c.county} County`)}
<h2>Other Iowa counties</h2><p class="links">${counties.filter(x => x !== c).map(x => `<a href="${SITE}/iowa/${x.slug}/">${esc(x.county)}</a>`).join(' · ')}</p>` }))
}

// ───────────────────────── how to vote, key dates, state index ─────────────────────────
const qa = [
  ['Am I registered to vote in Iowa?', 'Check with the Iowa Secretary of State voter lookup (sos.iowa.gov/amiregistered). It also shows your polling place.'],
  ['Can I still register to vote?', 'Yes. Pre-registration closed October 19, but Iowa allows Election Day registration at your polling place with ID and proof of residence.'],
  ['What ID do I need to vote in Iowa?', 'An Iowa driver’s license or nonoperator ID, U.S. passport, military or veterans ID, tribal ID, or your signed Iowa Voter ID card. Without one, a registered voter from your precinct can attest for you, or you can vote a provisional ballot.'],
  ['When can I vote early?', 'Early in-person voting runs October 14 through Monday, November 2, 2026 at your county auditor’s office.'],
  ['How do I return my absentee ballot?', 'Your ballot must reach your county auditor before polls close at 8 p.m. on Tuesday, November 3. A postmark is not enough.'],
  ['What are the polling hours on Election Day?', 'Polls are open 7 a.m. to 8 p.m. on Tuesday, November 3, 2026. If you are in line by 8 p.m., you can vote.'],
  ['Can I bring notes into the voting booth?', 'Yes. You may bring a printed or written list of your choices, such as your ballot plan.'],
]
write('how-to-vote', layout({ url: `${SITE}/iowa/how-to-vote/`, title: 'How to vote in Iowa 2026: voter ID, same-day registration, absentee ballots, poll hours', description: `Everything you need to vote in Iowa's ${ELECTION} election: ID rules, Election Day registration, early voting, returning absentee ballots and polling hours (7 a.m.–8 p.m.).`, pageType: 'how-to-vote', breadcrumbs: [{ name: 'Iowa', url: `${SITE}/iowa/` }, { name: 'How to vote', url: `${SITE}/iowa/how-to-vote/` }], jsonld: [faq(qa)], body: `<h1>How to vote in Iowa — ${ELECTION}</h1><p class="lede">A plain-English checklist for the general election.</p><ul class="dates">${qa.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Know every race before you go — build your ballot plan.', `${SITE}/ballot?utm_source=seo&utm_medium=how-to-vote&utm_campaign=ia`)}<p><a href="${SITE}/iowa/key-dates/">Key dates →</a> · <a href="${SITE}/iowa/">What&#39;s on the ballot in my county →</a></p>` }))

const dates = [
  ['Early in-person voting', 'October 14 through Monday, November 2, 2026, at your county auditor’s office'],
  ['Registration & absentee request deadline', '5 p.m. Monday, October 19, 2026 (closed)'],
  ['Election Day', `Tuesday, ${ELECTION} · polls open 7 a.m.–8 p.m. · Election Day registration available`],
  ['Absentee ballot return', 'Must reach your county auditor before polls close at 8 p.m. on Election Day — a postmark is not enough'],
]
write('key-dates', layout({ url: `${SITE}/iowa/key-dates/`, title: 'Iowa election key dates 2026: early voting, absentee deadline, Election Day hours', description: `Iowa ${ELECTION} general election: early voting through Nov 2, register at the polls on Election Day, absentee ballots due to the auditor by 8 p.m., polls open 7 a.m.–8 p.m.`, pageType: 'key-dates', breadcrumbs: [{ name: 'Iowa', url: `${SITE}/iowa/` }, { name: 'Key dates', url: `${SITE}/iowa/key-dates/` }], jsonld: [faq(dates.map(([q, a]) => [`Iowa 2026: ${q}?`, a]))], body: `<h1>Iowa 2026 election — key dates &amp; deadlines</h1><p class="lede">General election Tuesday, ${ELECTION}.</p><ul class="dates">${dates.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Plan your vote in two minutes.', `${SITE}/ballot?utm_source=seo&utm_medium=key-dates&utm_campaign=ia`)}` }))

write('', layout({ url: `${SITE}/iowa/`, title: `Iowa sample ballot 2026 by county — what's on the ${ELECTION} ballot`, description: `Every race and measure on Iowa's ${ELECTION} ballot for all ${counties.length} counties — U.S. Senate, Governor, Congress, state legislature, county and township offices, Amendment 1, ${localPages.size} local measures and judge retentions.`, pageType: 'state', body: `<h1>Iowa ballot — ${ELECTION}</h1><p class="lede">Pick your county, then your township, to see what&#39;s on your ballot. Or jump to <a href="${SITE}/iowa/races/">statewide and district races</a>, <a href="${statewideQs[0]?._pageUrl}">Amendment 1</a> or <a href="${SITE}/iowa/key-dates/">key dates</a>.</p><p class="links">${counties.map(c => `<a href="${SITE}/iowa/${c.slug}/">${esc(c.county)} County</a>`).join(' · ')}</p>${ctaBox('Faster: enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=state-page&utm_campaign=ia`)}` }))

// ───────────────────────── append to the sitemap written by build-seo-pages.mjs ─────────────────────────
const sitemapPath = path.join(ROOT, 'public/sitemap.xml')
const today = new Date().toISOString().slice(0, 10)
const sm = readFileSync(sitemapPath, 'utf8').replace(/\s*<url><loc>https:\/\/www\.offorandbythepeople\.com\/iowa\/[^<]*<\/loc>[^\n]*/g, '')
writeFileSync(sitemapPath, sm.replace('</urlset>', `${pages.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>`))
console.log(`iowa: wrote ${pages.length} pages: ${counties.length} counties, ${townshipPages} townships, ${races.length} races, ${candidatePages.size} candidates, ${localPages.size} local measures`)
