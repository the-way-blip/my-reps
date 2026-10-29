// Static SEO pages for the November 3, 2026 Wisconsin ballot, generated into public/wisconsin/… after the
// Indiana pages (it appends its URLs to public/sitemap.xml). Data: public/data/wi/ballots/ (build-wisconsin.mjs).
//   /wisconsin/                              state index
//   /wisconsin/<county>/                     county ballot (county offices, municipal judges, local referendums)
//   /wisconsin/race/<slug>/                  statewide, U.S. House, State Senate, Assembly races
//   /wisconsin/candidate/<slug>/             every graded statewide/district candidate
//   /wisconsin/<question-slug>/              the three statewide constitutional questions (official text)
//   /wisconsin/referendum/<slug>/            every local school, municipal and county referendum (official text)
//   /wisconsin/races/, /wisconsin/how-to-vote/, /wisconsin/key-dates/

import { readdirSync, readFileSync, writeFileSync, rmSync, mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SITE, ELECTION, esc, slug, PARTY, PARTY_LONG, ISSUES, makePageWriter, ctaBox, faq, gradeBadge, otherStateLinks } from './seo-shared.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'public/data/wi/ballots')
const OUT = path.join(ROOT, 'public/wisconsin')
const WI_SITE = 'https://myvote.wi.gov/en-us/'

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

const { layout, write, pages } = makePageWriter({
  outDir: OUT,
  urlPrefix: 'wisconsin',
  footerHtml: `Races and referendums are taken from the Wisconsin Elections Commission&#39;s official candidate and referendum lists (<a href="${WI_SITE}">MyVote Wisconsin</a>). Always confirm with your own sample ballot.<br>&copy; 2026 Of For &amp; By The People · <a href="${SITE}/wisconsin/">Wisconsin ballot by county</a> · <a href="${SITE}/wisconsin/races/">Statewide races</a> · <a href="${SITE}/wisconsin/key-dates/">Key dates</a> · <a href="${SITE}/wisconsin/how-to-vote/">How to vote</a> · ${otherStateLinks('wisconsin')} · <a href="${SITE}/privacy">Privacy</a> · <a href="${SITE}/terms">Terms</a>`,
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
const districtLabel = r => r.scope === 'congressional' ? `U.S. House District ${r.district}` : r.scope === 'stateSenate' ? `State Senate District ${r.district}` : r.scope === 'stateHouse' ? `Assembly District ${r.district}` : r.office
const raceSlug = r => r.scope === 'state' ? slug(r.office) : slug(districtLabel(r))

// ───────────────────────── statewide + district races, candidate pages ─────────────────────────
const races = statewide.races
for (const r of races) r._pageUrl = `${SITE}/wisconsin/race/${raceSlug(r)}/`
const candidatePages = new Map() // slug -> { c, race }
for (const r of races) for (const c of r.candidates) {
  if (!c.grade && !c.gradeNote) continue
  let cs = slug(c.name)
  if (candidatePages.has(cs)) cs = `${cs}-${raceSlug(r)}`
  candidatePages.set(cs, { c, race: r })
  c._pageUrl = `${SITE}/wisconsin/candidate/${cs}/`
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
  const links = [c.website ? `<a href="${esc(c.website)}" rel="nofollow noopener" target="_blank">Campaign site</a>` : '', `<a href="https://ballotpedia.org/wiki/index.php?search=${encodeURIComponent(c.name + ' Wisconsin')}" rel="nofollow noopener" target="_blank">Ballotpedia</a>`].filter(Boolean).join('')
  const src = c.sources?.length ? `<p class="note"><b>Sources:</b> ${c.sources.slice(0, 6).map((u, i) => `<a href="${esc(u)}" rel="nofollow noopener" target="_blank">[${i + 1}]</a>`).join(' ')}</p>` : ''
  return `<div class="cand"><h3>${gradeBadge(c.grade)}${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}${c.party ? `<span class="p">${esc(partyLong(c.party))}</span>` : ''}</h3>${c.runningMate ? `<p class="desc">Running mate: ${esc(c.runningMate)}</p>` : ''}${c.description ? `<p class="desc">${esc(c.description)}</p>` : ''}${issues}${c.gradeNote ? `<p class="bio">${esc(c.gradeNote)}</p>` : ''}${why}${src}<p class="links">${links}</p></div>`
}
const raceLinkList = list => `<p class="links">${list.map(r => `<a href="${r._pageUrl}">${esc(r.scope === 'state' ? r.office : districtLabel(r))}</a>`).join(' · ')}</p>`

for (const r of races) {
  const names = r.candidates.map(c => c.name + (c.party ? ` (${partyShort(c.party)})` : '')).join(', ')
  const label = r.scope === 'state' ? r.office : districtLabel(r)
  const graded = r.candidates.filter(c => c.grade).length
  const title = `${label} — Wisconsin 2026 candidates, graded | ${ELECTION}`
  const description = `${label} on Wisconsin's ${ELECTION} ballot: ${names || 'no candidates filed'}. ${graded ? `${graded} of ${r.candidates.length} candidates graded A–F on constitutional and Christian values` : `${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'}`}.`
  const body = `<h1>${esc(label)} — Wisconsin 2026</h1><p class="lede">${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'} on the ${ELECTION} general election ballot (official Wisconsin Elections Commission list, as of ${dataAsOf}). Grades reflect each candidate&#39;s public record on life, family, religious liberty, the Second Amendment, limited government and fiscal responsibility.</p>
${ctaBox('See this race on your own ballot — with your county races and local referendums.', `${SITE}/ballot?utm_source=seo&utm_medium=race&utm_campaign=wi-${raceSlug(r)}`)}
<h2>Candidates</h2>${r.candidates.map(fullCandidate).join('') || '<p class="note">No candidates filed.</p>'}
<h2>More Wisconsin 2026 races</h2>${raceLinkList(races.filter(x => x.scope === r.scope && x !== r).slice(0, 40))}`
  write(`race/${raceSlug(r)}`, layout({ url: r._pageUrl, title, description, body, pageType: 'race', breadcrumbs: [{ name: 'Wisconsin', url: `${SITE}/wisconsin/` }, { name: 'Races', url: `${SITE}/wisconsin/races/` }, { name: label, url: r._pageUrl }], jsonld: [faq([[`Who is running for ${label} in Wisconsin in 2026?`, names || 'No candidates filed.'], ['When is the Wisconsin 2026 general election?', `Tuesday, ${ELECTION}. Polls are open 7 a.m. to 8 p.m.`]])] }))
}

for (const [cs, { c, race }] of candidatePages) {
  const label = race.scope === 'state' ? race.office : districtLabel(race)
  const title = `${c.name} (${partyShort(c.party) || 'Ind.'}) — ${label}, Wisconsin 2026${c.grade ? ` · Grade ${c.grade}` : ''}`
  const description = `${c.name}, ${partyLong(c.party) || 'candidate'} for ${label} on Wisconsin's ${ELECTION} ballot.${c.grade ? ` Values grade ${c.grade}.` : ''} ${c.gradeNote ? c.gradeNote.slice(0, 180) : ''}`
  const others = race.candidates.filter(x => x !== c)
  const body = `<h1>${esc(c.name)} — ${esc(label)}</h1><p class="lede">${esc(partyLong(c.party) || 'Candidate')} · Wisconsin general election, ${ELECTION}.</p>${fullCandidate(c)}
${others.length ? `<h2>Also running for ${esc(label)}</h2><ul class="cands">${others.map(candidateLi).join('')}</ul>` : ''}<p><a href="${race._pageUrl}">Full race: ${esc(label)} →</a></p>
${ctaBox('See every race on your Wisconsin ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=candidate&utm_campaign=wi-${cs}`)}`
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: c.name, ...(c.party ? { affiliation: partyLong(c.party) } : {}), ...(c.website ? { url: c.website } : {}) }
  write(`candidate/${cs}`, layout({ url: c._pageUrl, title, description, body, pageType: 'candidate', breadcrumbs: [{ name: 'Wisconsin', url: `${SITE}/wisconsin/` }, { name: label, url: race._pageUrl }, { name: c.name, url: c._pageUrl }], jsonld: [person, faq([[`What office is ${c.name} running for?`, `${label} in Wisconsin, on the ${ELECTION} general election ballot.`], [`Who is running against ${c.name}?`, others.map(x => x.name).join(', ') || 'No other candidates are listed.']])] }))
}

write('races', layout({ url: `${SITE}/wisconsin/races/`, title: 'Wisconsin 2026 election: every statewide, congressional and legislative race, graded', description: `Governor, Attorney General, Secretary of State, Treasurer, all 8 U.S. House seats, ${races.filter(r => r.scope === 'stateSenate').length} State Senate and ${races.filter(r => r.scope === 'stateHouse').length} Assembly races on Wisconsin's ${ELECTION} ballot — candidates graded on constitutional and Christian values.`, pageType: 'races', breadcrumbs: [{ name: 'Wisconsin', url: `${SITE}/wisconsin/` }, { name: 'Races', url: `${SITE}/wisconsin/races/` }], body: `<h1>Wisconsin 2026 races — every candidate, graded</h1><p class="lede">Every statewide and district race on Wisconsin&#39;s ${ELECTION} ballot.</p>
<h2>Statewide</h2>${raceLinkList(races.filter(r => r.scope === 'state'))}<h2>U.S. House</h2>${raceLinkList(races.filter(r => r.scope === 'congressional'))}<h2>State Senate</h2>${raceLinkList(races.filter(r => r.scope === 'stateSenate'))}<h2>State Assembly</h2>${raceLinkList(races.filter(r => r.scope === 'stateHouse'))}
${ctaBox('Find your exact districts — enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=races&utm_campaign=wi`)}` }))

// ───────────────────────── statewide questions + local referendums ─────────────────────────
const statewideQs = counties[0].referendums.filter(q => q.statewide)
const shortQ = q => q.name.replace(/^State of Wisconsin\s+/, '').replace(/\s+Referendum\s+-\s+QUESTION\s+(\d)$/i, ' (Question $1)')
for (const q of statewideQs) {
  const label = shortQ(q)
  const qs = slug(label.replace(/\(Question (\d)\)/, 'question $1'))
  q._pageUrl = `${SITE}/wisconsin/${qs}/`
  write(qs, layout({ url: q._pageUrl, title: `Wisconsin ${label} 2026 — official ballot language | ${ELECTION}`, description: `The official text of Wisconsin's ${label}, a proposed amendment to the Wisconsin Constitution on the ${ELECTION} ballot. ${q.ballotLanguage.slice(0, 140)}`, pageType: 'proposal', breadcrumbs: [{ name: 'Wisconsin', url: `${SITE}/wisconsin/` }, { name: label, url: q._pageUrl }], jsonld: [faq([[`What is Wisconsin's ${label}?`, q.ballotLanguage]])], body: `<h1>Wisconsin ${esc(label)}</h1><p class="lede">Constitutional amendment · On every Wisconsin ballot, ${ELECTION}.</p><div class="prop"><h3>Official ballot language</h3><p style="white-space:pre-line">${esc(q.ballotLanguage)}</p></div><p class="note">Shown word for word from the Wisconsin Elections Commission. Vote YES to approve the amendment or NO to reject it.</p>
${ctaBox('See this question with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=proposal&utm_campaign=wi-${qs}`)}` }))
}

const localPages = new Map() // referendum id -> url (a question can appear in more than one county file)
const refSlug = q => slug(q.name.replace(/\$/g, '').replace(/^(.{0,90}).*$/, '$1'))
for (const c of counties) for (const q of c.referendums.filter(q => !q.statewide)) {
  const key = `${q.area}|${q.name}`
  if (localPages.has(key)) { q._pageUrl = localPages.get(key); continue }
  let rs = refSlug(q)
  while ([...localPages.values()].includes(`${SITE}/wisconsin/referendum/${rs}/`)) rs += `-${c.slug}`
  q._pageUrl = `${SITE}/wisconsin/referendum/${rs}/`
  localPages.set(key, q._pageUrl)
  const where = q.area || `${c.county} County`
  write(`referendum/${rs}`, layout({ url: q._pageUrl, title: `${q.name} — ${where}, Wisconsin | ${ELECTION}`, description: `Official ballot language of the ${q.name} on the ${ELECTION} ballot in ${where}, Wisconsin. ${q.ballotLanguage.slice(0, 130)}`, pageType: 'proposal', breadcrumbs: [{ name: 'Wisconsin', url: `${SITE}/wisconsin/` }, { name: `${c.county} County`, url: `${SITE}/wisconsin/${c.slug}/` }, { name: q.name, url: q._pageUrl }], jsonld: [faq([[`What does the ${q.name} ask?`, q.ballotLanguage || 'See your sample ballot.'], [`Who votes on the ${q.name}?`, `Voters in ${where}, on ${ELECTION}.`]])], body: `<h1>${esc(q.name)}</h1><p class="lede">Local referendum · ${esc(where)} · ${ELECTION}. Only voters in ${esc(where)} see this question.</p><div class="prop"><h3>Official ballot language</h3><p style="white-space:pre-line">${esc(q.ballotLanguage)}</p></div><p class="note">Shown word for word from the Wisconsin Elections Commission&#39;s referendum listing.</p>
${ctaBox('See this referendum with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=referendum&utm_campaign=wi-${rs}`)}<p><a href="${SITE}/wisconsin/${c.slug}/">All ${esc(c.county)} County races →</a></p>` }))
}
const qHtml = q => `<div class="prop"><h3>${q._pageUrl ? `<a href="${q._pageUrl}">${esc(q.statewide ? shortQ(q) : q.name)}</a>` : esc(q.name)}</h3><div class="tags"><span>${q.statewide ? 'Constitutional amendment' : esc(q.area || 'Local referendum')}</span></div><details><summary>Official ballot language</summary><p>${esc(q.ballotLanguage)}</p></details></div>`

// ───────────────────────── counties ─────────────────────────
const statewideBlock = `<h2>Statewide races (every Wisconsin ballot)</h2>${races.filter(r => r.scope === 'state').map(raceHtml).join('')}<div class="race"><p class="meta">Also on your ballot: your <a href="${SITE}/wisconsin/races/" style="color:#0a2342">U.S. House, State Senate and Assembly districts</a> (enter your address to see yours) and three constitutional questions: ${statewideQs.map(q => `<a href="${q._pageUrl}" style="color:#0a2342"><b>${esc(shortQ(q))}</b></a>`).join(', ')}.</p></div>`
function votingInHtml(name) {
  return `<h2>Voting in ${esc(name)}</h2><ul class="dates">
<li><b>Election Day</b>Tuesday, ${ELECTION} · polls open 7 a.m.–8 p.m. If you&#39;re in line by 8 p.m., you can vote.</li>
<li><b>Where to vote</b>Look up your polling place at <a href="https://myvote.wi.gov/en-us/Find-My-Polling-Place" rel="noopener">MyVote Wisconsin</a>.</li>
<li><b>Register at the polls</b>Wisconsin allows Election Day registration with proof of residence.</li>
<li><b>Absentee ballots</b>Must be received by 8 p.m. on Election Day — postmarks do not count.</li>
<li><b>Photo ID</b>Wisconsin requires an acceptable photo ID. <a href="${SITE}/wisconsin/how-to-vote/">Full checklist →</a></li>
</ul>`
}

for (const c of counties) {
  const cUrl = `${SITE}/wisconsin/${c.slug}/`
  const county = c.races.filter(r => r.scope === 'county' && !r.maybe)
  const maybe = c.races.filter(r => r.maybe)
  const city = c.races.filter(r => r.scope === 'city')
  const localQ = c.referendums.filter(q => !q.statewide)
  const names = county.flatMap(r => r.candidates.map(x => x.name)).slice(0, 6).join(', ')
  write(c.slug, layout({ url: cUrl, title: `${c.county} County, WI sample ballot 2026 — every race & referendum (${ELECTION})`, description: `What's on the ballot in ${c.county} County, Wisconsin for ${ELECTION}: ${county.map(r => r.office).join(', ') || 'county offices'}${localQ.length ? `, ${localQ.length} local referendum${localQ.length === 1 ? '' : 's'}` : ''}, Governor, Congress, state legislature and three constitutional questions.`, pageType: 'county', breadcrumbs: [{ name: 'Wisconsin', url: `${SITE}/wisconsin/` }, { name: `${c.county} County`, url: cUrl }], jsonld: [faq([[`What is on the ballot in ${c.county} County, Wisconsin on ${ELECTION}?`, `${county.map(r => r.office).join(', ') || 'County offices'}, Governor and Lieutenant Governor, Attorney General, Secretary of State, State Treasurer, U.S. House, state legislature, three constitutional questions${localQ.length ? ` and ${localQ.length} local referendums` : ''}.`], [`Who is running for ${c.county} County offices in 2026?`, names || 'See the county races listed on this page.'], [`What time do polls close in ${c.county} County?`, `Wisconsin polls are open 7 a.m. to 8 p.m. on Tuesday, ${ELECTION}.`]])], body: `<h1>${esc(c.county)} County ballot — ${ELECTION}</h1><p class="lede">Wisconsin General Election · Tuesday, ${ELECTION} · Polls open 7 a.m.–8 p.m. From the Wisconsin Elections Commission&#39;s official lists (as of ${dataAsOf}). Enter your address to see your exact ballot with candidates graded.</p>
${ctaBox('Faster: enter your address for your exact ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=county&utm_campaign=wi-${c.slug}`)}
<h2>${esc(c.county)} County races (${county.length})</h2>${county.map(raceHtml).join('') || '<p class="note">No county offices are listed for this county.</p>'}
${city.length ? `<h2>Municipal judge races (${city.length})</h2>${city.map(raceHtml).join('')}` : ''}${maybe.length ? `<h2>May be on your ballot (${maybe.length})</h2><p class="note">Only voters in that district see these seats. Check your sample ballot at <a href="https://myvote.wi.gov/en-us/Whats-On-My-Ballot">MyVote Wisconsin</a>.</p>${maybe.map(raceHtml).join('')}` : ''}
<h2>Referendums (${c.referendums.length})</h2>${statewideQs.map(qHtml).join('')}${localQ.map(qHtml).join('')}${localQ.length ? '<p class="note">Local referendums appear only for voters in that school district, municipality or county.</p>' : ''}
${statewideBlock}${votingInHtml(`${c.county} County`)}
<h2>Other Wisconsin counties</h2><p class="links">${counties.filter(x => x !== c).map(x => `<a href="${SITE}/wisconsin/${x.slug}/">${esc(x.county)}</a>`).join(' · ')}</p>` }))
}

// ───────────────────────── how to vote, key dates, state index ─────────────────────────
const qa = [
  ['Am I registered to vote in Wisconsin?', 'Check at MyVote Wisconsin (myvote.wi.gov). It also shows your polling place, sample ballot and absentee status.'],
  ['Can I still register to vote?', 'Yes. Online and mail registration closed October 14, but you can register at your municipal clerk’s office through 5 p.m. Friday, October 30, or at your polling place on Election Day, with proof of residence.'],
  ['What ID do I need to vote in Wisconsin?', 'An acceptable photo ID: a Wisconsin driver license or state ID card, U.S. passport, military ID, tribal ID, or certain college IDs. The DMV issues a free state ID for voting.'],
  ['When can I vote early?', 'In-person absentee (early) voting may run October 20 through Sunday, November 1, 2026. Each municipal clerk sets its own dates and hours — check MyVote Wisconsin.'],
  ['How do I return my absentee ballot?', 'Your ballot must be received by your municipal clerk (or at your polling place) by 8 p.m. on Tuesday, November 3. Postmarks do not count.'],
  ['What are the polling hours on Election Day?', 'Polls are open 7 a.m. to 8 p.m. on Tuesday, November 3, 2026. If you are in line by 8 p.m., you can vote.'],
  ['Can I bring notes into the voting booth?', 'Yes. You may bring a printed or written list of your choices, such as your ballot plan.'],
]
write('how-to-vote', layout({ url: `${SITE}/wisconsin/how-to-vote/`, title: 'How to vote in Wisconsin 2026: photo ID, same-day registration, absentee ballots, poll hours', description: `Everything you need to vote in Wisconsin's ${ELECTION} election: photo ID rules, Election Day registration, early voting, returning absentee ballots and polling hours (7 a.m.–8 p.m.).`, pageType: 'how-to-vote', breadcrumbs: [{ name: 'Wisconsin', url: `${SITE}/wisconsin/` }, { name: 'How to vote', url: `${SITE}/wisconsin/how-to-vote/` }], jsonld: [faq(qa)], body: `<h1>How to vote in Wisconsin — ${ELECTION}</h1><p class="lede">A plain-English checklist for the general election.</p><ul class="dates">${qa.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Know every race before you go — build your ballot plan.', `${SITE}/ballot?utm_source=seo&utm_medium=how-to-vote&utm_campaign=wi`)}<p><a href="${SITE}/wisconsin/key-dates/">Key dates →</a> · <a href="${SITE}/wisconsin/">What&#39;s on the ballot in my county →</a></p>` }))

const dates = [
  ['Online & mail registration deadline', 'Wednesday, October 14, 2026 (closed)'],
  ['In-person absentee (early) voting', 'May begin October 20 and run through Sunday, November 1, 2026 — dates and hours vary by municipality'],
  ['Absentee-by-mail request deadline', '5 p.m. Thursday, October 29, 2026'],
  ['Last day to register at your clerk’s office', '5 p.m. Friday, October 30, 2026'],
  ['Election Day', `Tuesday, ${ELECTION} · polls open 7 a.m.–8 p.m. · Election Day registration available`],
  ['Absentee ballot return', 'Must be received by 8 p.m. on Election Day — postmarks do not count'],
]
write('key-dates', layout({ url: `${SITE}/wisconsin/key-dates/`, title: 'Wisconsin election key dates 2026: early voting, absentee deadline, Election Day hours', description: `Wisconsin ${ELECTION} general election: early voting through Nov 1, absentee requests due Oct 29, register at your clerk through Oct 30 or at the polls, polls open 7 a.m.–8 p.m.`, pageType: 'key-dates', breadcrumbs: [{ name: 'Wisconsin', url: `${SITE}/wisconsin/` }, { name: 'Key dates', url: `${SITE}/wisconsin/key-dates/` }], jsonld: [faq(dates.map(([q, a]) => [`Wisconsin 2026: ${q}?`, a]))], body: `<h1>Wisconsin 2026 election — key dates &amp; deadlines</h1><p class="lede">General election Tuesday, ${ELECTION}.</p><ul class="dates">${dates.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Plan your vote in two minutes.', `${SITE}/ballot?utm_source=seo&utm_medium=key-dates&utm_campaign=wi`)}` }))

write('', layout({ url: `${SITE}/wisconsin/`, title: `Wisconsin sample ballot 2026 by county — what's on the ${ELECTION} ballot`, description: `Every race and referendum on Wisconsin's ${ELECTION} ballot for all ${counties.length} counties — Governor, Congress, state legislature, county offices, three constitutional questions and ${localPages.size} local referendums — from the Wisconsin Elections Commission.`, pageType: 'state', body: `<h1>Wisconsin ballot — ${ELECTION}</h1><p class="lede">Pick your county to see what&#39;s on your ballot. Or jump to <a href="${SITE}/wisconsin/races/">statewide and district races</a>, the constitutional questions (${statewideQs.map(q => `<a href="${q._pageUrl}">${esc(shortQ(q))}</a>`).join(', ')}) or <a href="${SITE}/wisconsin/key-dates/">key dates</a>.</p><p class="links">${counties.map(c => `<a href="${SITE}/wisconsin/${c.slug}/">${esc(c.county)} County</a>`).join(' · ')}</p>${ctaBox('Faster: enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=state-page&utm_campaign=wi`)}` }))

// ───────────────────────── append to the sitemap written by build-seo-pages.mjs ─────────────────────────
const sitemapPath = path.join(ROOT, 'public/sitemap.xml')
const today = new Date().toISOString().slice(0, 10)
const sm = readFileSync(sitemapPath, 'utf8').replace(/\s*<url><loc>https:\/\/www\.offorandbythepeople\.com\/wisconsin\/[^<]*<\/loc>[^\n]*/g, '')
writeFileSync(sitemapPath, sm.replace('</urlset>', `${pages.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>`))
console.log(`wisconsin: wrote ${pages.length} pages: ${counties.length} counties, ${races.length} races, ${candidatePages.size} candidates, ${statewideQs.length} statewide questions, ${localPages.size} local referendums`)
