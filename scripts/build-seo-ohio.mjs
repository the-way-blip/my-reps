// Static SEO pages for the November 3, 2026 Ohio ballot, generated into public/ohio/… after the
// Iowa pages (it appends its URLs to public/sitemap.xml). Data: public/data/oh/ballots/ (build-ohio.mjs).
//   /ohio/                                   state index
//   /ohio/<county>/                          county ballot (statewide races, Court of Appeals, State Issue 3)
//   /ohio/race/<slug>/                       statewide, Supreme Court, U.S. Senate/House, Ohio Senate/House races
//   /ohio/candidate/<slug>/                  every graded statewide/district candidate
//   /ohio/state-issue-3/                     State Issue 3 (official ballot language)
//   /ohio/races/, /ohio/how-to-vote/, /ohio/key-dates/

import { readdirSync, readFileSync, writeFileSync, rmSync, mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SITE, ELECTION, esc, slug, PARTY, PARTY_LONG, ISSUES, makePageWriter, ctaBox, faq, gradeBadge } from './seo-shared.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'public/data/oh/ballots')
const OUT = path.join(ROOT, 'public/ohio')
const BOARDS = 'https://www.ohiosos.gov/elections/elections-officials/county-boards-of-elections-directory/'

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

const { layout, write, pages } = makePageWriter({
  outDir: OUT,
  urlPrefix: 'ohio',
  footerHtml: `Races are taken from the Ohio Secretary of State&#39;s official candidate list. County offices and local issues are on your <a href="${BOARDS}">county board of elections</a>&#39; sample ballot. Always confirm with your own sample ballot.<br>&copy; 2026 Of For &amp; By The People · <a href="${SITE}/ohio/">Ohio ballot by county</a> · <a href="${SITE}/ohio/races/">Statewide races</a> · <a href="${SITE}/ohio/key-dates/">Key dates</a> · <a href="${SITE}/ohio/how-to-vote/">How to vote</a> · <a href="${SITE}/michigan/">Michigan ballot</a> · <a href="${SITE}/indiana/">Indiana ballot</a> · <a href="${SITE}/iowa/">Iowa ballot</a> · <a href="${SITE}/wisconsin/">Wisconsin ballot</a> · <a href="${SITE}/privacy">Privacy</a> · <a href="${SITE}/terms">Terms</a>`,
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
const districtLabel = r => r.scope === 'congressional' ? `U.S. House District ${r.district}` : r.scope === 'stateSenate' ? `Ohio Senate District ${r.district}` : r.scope === 'stateHouse' ? `Ohio House District ${r.district}` : r.office
const raceSlug = r => r.scope === 'state' ? slug(r.office) : slug(districtLabel(r))

// ───────────────────────── statewide + district races, candidate pages ─────────────────────────
const races = statewide.races
for (const r of races) r._pageUrl = `${SITE}/ohio/race/${raceSlug(r)}/`
const candidatePages = new Map() // slug -> { c, race }
for (const r of races) for (const c of r.candidates) {
  if (!c.grade && !c.gradeNote) continue
  let cs = slug(c.name)
  if (candidatePages.has(cs)) cs = `${cs}-${raceSlug(r)}`
  candidatePages.set(cs, { c, race: r })
  c._pageUrl = `${SITE}/ohio/candidate/${cs}/`
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
  const links = [c.website ? `<a href="${esc(c.website)}" rel="nofollow noopener" target="_blank">Campaign site</a>` : '', `<a href="https://ballotpedia.org/wiki/index.php?search=${encodeURIComponent(c.name + ' Ohio')}" rel="nofollow noopener" target="_blank">Ballotpedia</a>`].filter(Boolean).join('')
  const src = c.sources?.length ? `<p class="note"><b>Sources:</b> ${c.sources.slice(0, 6).map((u, i) => `<a href="${esc(u)}" rel="nofollow noopener" target="_blank">[${i + 1}]</a>`).join(' ')}</p>` : ''
  return `<div class="cand"><h3>${gradeBadge(c.grade)}${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}${c.party ? `<span class="p">${esc(partyLong(c.party))}</span>` : ''}</h3>${c.runningMate ? `<p class="desc">Running mate: ${esc(c.runningMate)}</p>` : ''}${c.description ? `<p class="desc">${esc(c.description)}</p>` : ''}${issues}${c.gradeNote ? `<p class="bio">${esc(c.gradeNote)}</p>` : ''}${why}${src}<p class="links">${links}</p></div>`
}
const raceLinkList = list => `<p class="links">${list.map(r => `<a href="${r._pageUrl}">${esc(r.scope === 'state' ? r.office : districtLabel(r))}</a>`).join(' · ')}</p>`

for (const r of races) {
  const names = r.candidates.map(c => c.name + (c.party ? ` (${partyShort(c.party)})` : '')).join(', ')
  const label = r.scope === 'state' ? r.office : districtLabel(r)
  const graded = r.candidates.filter(c => c.grade).length
  const title = `${label} — Ohio 2026 candidates, graded | ${ELECTION}`
  const description = `${label} on Ohio's ${ELECTION} ballot: ${names || 'no candidates filed'}. ${graded ? `${graded} of ${r.candidates.length} candidates graded A–F on constitutional and Christian values` : `${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'}`}.`
  const body = `<h1>${esc(label)} — Ohio 2026</h1><p class="lede">${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'} on the ${ELECTION} general election ballot (official Ohio Secretary of State list, as of ${dataAsOf}). Grades reflect each candidate&#39;s public record on life, family, religious liberty, the Second Amendment, limited government and fiscal responsibility.</p>
${ctaBox('See this race on your own ballot — with your district and court races.', `${SITE}/ballot?utm_source=seo&utm_medium=race&utm_campaign=oh-${raceSlug(r)}`)}
<h2>Candidates</h2>${r.candidates.map(fullCandidate).join('') || '<p class="note">No candidates filed.</p>'}
<h2>More Ohio 2026 races</h2>${raceLinkList(races.filter(x => x.scope === r.scope && x !== r).slice(0, 40))}`
  write(`race/${raceSlug(r)}`, layout({ url: r._pageUrl, title, description, body, pageType: 'race', breadcrumbs: [{ name: 'Ohio', url: `${SITE}/ohio/` }, { name: 'Races', url: `${SITE}/ohio/races/` }, { name: label, url: r._pageUrl }], jsonld: [faq([[`Who is running for ${label} in Ohio in 2026?`, names || 'No candidates filed.'], ['When is the Ohio 2026 general election?', `Tuesday, ${ELECTION}. Polls are open 6:30 a.m. to 7:30 p.m.`]])] }))
}

for (const [cs, { c, race }] of candidatePages) {
  const label = race.scope === 'state' ? race.office : districtLabel(race)
  const title = `${c.name} (${partyShort(c.party) || 'Ind.'}) — ${label}, Ohio 2026${c.grade ? ` · Grade ${c.grade}` : ''}`
  const description = `${c.name}, ${partyLong(c.party) || 'candidate'} for ${label} on Ohio's ${ELECTION} ballot.${c.grade ? ` Values grade ${c.grade}.` : ''} ${c.gradeNote ? c.gradeNote.slice(0, 180) : ''}`
  const others = race.candidates.filter(x => x !== c)
  const body = `<h1>${esc(c.name)} — ${esc(label)}</h1><p class="lede">${esc(partyLong(c.party) || 'Candidate')} · Ohio general election, ${ELECTION}.</p>${fullCandidate(c)}
${others.length ? `<h2>Also running for ${esc(label)}</h2><ul class="cands">${others.map(candidateLi).join('')}</ul>` : ''}<p><a href="${race._pageUrl}">Full race: ${esc(label)} →</a></p>
${ctaBox('See every race on your Ohio ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=candidate&utm_campaign=oh-${cs}`)}`
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: c.name, ...(c.party ? { affiliation: partyLong(c.party) } : {}), ...(c.website ? { url: c.website } : {}) }
  write(`candidate/${cs}`, layout({ url: c._pageUrl, title, description, body, pageType: 'candidate', breadcrumbs: [{ name: 'Ohio', url: `${SITE}/ohio/` }, { name: label, url: race._pageUrl }, { name: c.name, url: c._pageUrl }], jsonld: [person, faq([[`What office is ${c.name} running for?`, `${label} in Ohio, on the ${ELECTION} general election ballot.`], [`Who is running against ${c.name}?`, others.map(x => x.name).join(', ') || 'No other candidates are listed.']])] }))
}

write('races', layout({ url: `${SITE}/ohio/races/`, title: 'Ohio 2026 election: every statewide, congressional and legislative race, graded', description: `Governor, Attorney General, Auditor, Secretary of State, Treasurer, two Supreme Court seats, U.S. Senate, all 15 U.S. House seats, ${races.filter(r => r.scope === 'stateSenate').length} State Senate and ${races.filter(r => r.scope === 'stateHouse').length} Ohio House races on Ohio's ${ELECTION} ballot — candidates graded on constitutional and Christian values.`, pageType: 'races', breadcrumbs: [{ name: 'Ohio', url: `${SITE}/ohio/` }, { name: 'Races', url: `${SITE}/ohio/races/` }], body: `<h1>Ohio 2026 races — every candidate, graded</h1><p class="lede">Every statewide and district race on Ohio&#39;s ${ELECTION} ballot.</p>
<h2>Statewide</h2>${raceLinkList(races.filter(r => r.scope === 'state'))}<h2>U.S. House</h2>${raceLinkList(races.filter(r => r.scope === 'congressional'))}<h2>Ohio Senate</h2>${raceLinkList(races.filter(r => r.scope === 'stateSenate'))}<h2>Ohio House</h2>${raceLinkList(races.filter(r => r.scope === 'stateHouse'))}
${ctaBox('Find your exact districts — enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=races&utm_campaign=oh`)}` }))

// ───────────────────────── State Issue 3 ─────────────────────────
const issue = counties[0].referendums.find(q => q.statewide)
issue._pageUrl = `${SITE}/ohio/state-issue-3/`
write('state-issue-3', layout({ url: issue._pageUrl, title: `Ohio State Issue 3 (2026): photo ID to vote — official ballot language | ${ELECTION}`, description: `The official ballot language of Ohio State Issue 3, a proposed constitutional amendment to require voters to present photo identification, on the ${ELECTION} ballot.`, pageType: 'proposal', breadcrumbs: [{ name: 'Ohio', url: `${SITE}/ohio/` }, { name: 'State Issue 3', url: issue._pageUrl }], jsonld: [faq([['What is Ohio State Issue 3 in 2026?', issue.ballotLanguage], ['What vote does State Issue 3 need to pass?', 'A simple majority of voters. If approved, it takes effect immediately.']])], body: `<h1>Ohio State Issue 3 — photo ID to vote</h1><p class="lede">Proposed constitutional amendment · On every Ohio ballot, ${ELECTION}.</p><div class="prop"><h3>Official ballot language</h3><p style="white-space:pre-line">${esc(issue.ballotLanguage)}</p></div><p class="note">Ohio Ballot Board certified language. A YES vote approves the amendment; a NO vote rejects it.</p>
${ctaBox('See State Issue 3 with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=proposal&utm_campaign=oh-issue-3`)}` }))

// ───────────────────────── counties ─────────────────────────
const statewideBlock = `<h2>Statewide races (every Ohio ballot)</h2>${races.filter(r => r.scope === 'state').map(raceHtml).join('')}<div class="race"><p class="meta">Also on your ballot: your <a href="${SITE}/ohio/races/" style="color:#0a2342">U.S. House, Ohio Senate and Ohio House districts</a> (enter your address to see yours) and <a href="${issue._pageUrl}" style="color:#0a2342"><b>State Issue 3</b></a>.</p></div>`
function votingInHtml(name) {
  return `<h2>Voting in ${esc(name)}</h2><ul class="dates">
<li><b>Election Day</b>Tuesday, ${ELECTION} · polls open 6:30 a.m.–7:30 p.m. If you&#39;re in line by 7:30 p.m., you can vote.</li>
<li><b>Where to vote</b>Look up your polling place with the <a href="https://voterlookup.ohiosos.gov/" rel="noopener">Ohio Secretary of State voter lookup</a>.</li>
<li><b>Early voting</b>In person at your county board of elections through Sunday, November 1.</li>
<li><b>Photo ID</b>Ohio requires an unexpired photo ID to vote in person. <a href="${SITE}/ohio/how-to-vote/">Full checklist →</a></li>
</ul>`
}
for (const c of counties) {
  const cUrl = `${SITE}/ohio/${c.slug}/`
  const appeals = c.races
  write(c.slug, layout({ url: cUrl, title: `${c.county} County, OH ballot 2026 — Governor, Congress, courts & State Issue 3 (${ELECTION})`, description: `What's on the ballot in ${c.county} County, Ohio for ${ELECTION}: Governor, U.S. Senate, Attorney General and other statewide offices, two Ohio Supreme Court seats, ${appeals.length ? `${appeals.length} Court of Appeals seat${appeals.length === 1 ? '' : 's'}, ` : ''}U.S. House, Ohio Senate and House, and State Issue 3.`, pageType: 'county', breadcrumbs: [{ name: 'Ohio', url: `${SITE}/ohio/` }, { name: `${c.county} County`, url: cUrl }], jsonld: [faq([[`What is on the ballot in ${c.county} County, Ohio on ${ELECTION}?`, `Governor and Lieutenant Governor, U.S. Senate, Attorney General, Auditor, Secretary of State, Treasurer, two Ohio Supreme Court seats, ${appeals.length ? 'Court of Appeals, ' : ''}U.S. House, Ohio Senate and House, State Issue 3, plus county offices and local issues on your county board of elections' sample ballot.`], [`What time do polls close in ${c.county} County?`, `Ohio polls are open 6:30 a.m. to 7:30 p.m. on Tuesday, ${ELECTION}.`]])], body: `<h1>${esc(c.county)} County ballot — ${ELECTION}</h1><p class="lede">Ohio General Election · Tuesday, ${ELECTION} · Polls open 6:30 a.m.–7:30 p.m. From the Ohio Secretary of State&#39;s official candidate list (as of ${dataAsOf}). Enter your address to see your exact ballot with candidates graded.</p>
${ctaBox('Faster: enter your address for your exact ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=county&utm_campaign=oh-${c.slug}`)}
${appeals.length ? `<h2>Court of Appeals (${appeals.length})</h2>${appeals.map(raceHtml).join('')}` : ''}
<h2>State Issue 3</h2><div class="prop"><h3><a href="${issue._pageUrl}">State Issue 3 — photo ID to vote</a></h3><details><summary>Official ballot language</summary><p style="white-space:pre-line">${esc(issue.ballotLanguage)}</p></details></div>
<p class="note">County offices (commissioner, auditor, Common Pleas judges) and local levies are on your <a href="${BOARDS}">county board of elections&#39;</a> sample ballot.</p>
${statewideBlock}${votingInHtml(`${c.county} County`)}
<h2>Other Ohio counties</h2><p class="links">${counties.filter(x => x !== c).map(x => `<a href="${SITE}/ohio/${x.slug}/">${esc(x.county)}</a>`).join(' · ')}</p>` }))
}

// ───────────────────────── how to vote, key dates, state index ─────────────────────────
const qa = [
  ['Am I registered to vote in Ohio?', 'Check with the Ohio Secretary of State voter lookup (voterlookup.ohiosos.gov). It also shows your polling place.'],
  ['Can I still register to vote?', 'No. Ohio voter registration for the 2026 general election closed October 5, 2026. Ohio does not have Election Day registration.'],
  ['What ID do I need to vote in Ohio?', 'An unexpired photo ID: an Ohio driver’s license or state ID card, U.S. passport or passport card, or a U.S. military, Ohio National Guard or VA ID card. Without one you can vote a provisional ballot.'],
  ['When can I vote early?', 'Early in-person voting began October 6 and runs through Sunday, November 1, 2026 at your county board of elections.'],
  ['How do I return my absentee ballot?', 'Return it by mail or in person to your county board of elections. Check your county board for the return deadline.'],
  ['What are the polling hours on Election Day?', 'Polls are open 6:30 a.m. to 7:30 p.m. on Tuesday, November 3, 2026. If you are in line by 7:30 p.m., you can vote.'],
  ['Can I bring notes into the voting booth?', 'Yes. You may bring a printed or written list of your choices, such as your ballot plan.'],
]
write('how-to-vote', layout({ url: `${SITE}/ohio/how-to-vote/`, title: 'How to vote in Ohio 2026: photo ID, early voting, absentee ballots, poll hours', description: `Everything you need to vote in Ohio's ${ELECTION} election: photo ID rules, early voting through Nov 1, absentee ballots and polling hours (6:30 a.m.–7:30 p.m.).`, pageType: 'how-to-vote', breadcrumbs: [{ name: 'Ohio', url: `${SITE}/ohio/` }, { name: 'How to vote', url: `${SITE}/ohio/how-to-vote/` }], jsonld: [faq(qa)], body: `<h1>How to vote in Ohio — ${ELECTION}</h1><p class="lede">A plain-English checklist for the general election.</p><ul class="dates">${qa.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Know every race before you go — build your ballot plan.', `${SITE}/ballot?utm_source=seo&utm_medium=how-to-vote&utm_campaign=oh`)}<p><a href="${SITE}/ohio/key-dates/">Key dates →</a> · <a href="${SITE}/ohio/">What&#39;s on the ballot in my county →</a></p>` }))

const dates = [
  ['Voter registration deadline', 'Monday, October 5, 2026 (closed)'],
  ['Early in-person voting', 'October 6 through Sunday, November 1, 2026, at your county board of elections'],
  ['Absentee ballot request deadline', 'Tuesday, October 27, 2026 (closed)'],
  ['Election Day', `Tuesday, ${ELECTION} · polls open 6:30 a.m.–7:30 p.m.`],
]
write('key-dates', layout({ url: `${SITE}/ohio/key-dates/`, title: 'Ohio election key dates 2026: early voting, absentee deadline, Election Day hours', description: `Ohio ${ELECTION} general election: early voting through Nov 1, absentee requests closed Oct 27, polls open 6:30 a.m.–7:30 p.m. on Election Day.`, pageType: 'key-dates', breadcrumbs: [{ name: 'Ohio', url: `${SITE}/ohio/` }, { name: 'Key dates', url: `${SITE}/ohio/key-dates/` }], jsonld: [faq(dates.map(([q, a]) => [`Ohio 2026: ${q}?`, a]))], body: `<h1>Ohio 2026 election — key dates &amp; deadlines</h1><p class="lede">General election Tuesday, ${ELECTION}.</p><ul class="dates">${dates.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Plan your vote in two minutes.', `${SITE}/ballot?utm_source=seo&utm_medium=key-dates&utm_campaign=oh`)}` }))

write('', layout({ url: `${SITE}/ohio/`, title: `Ohio ballot 2026 by county — Governor, Congress, courts & State Issue 3 (${ELECTION})`, description: `Every statewide, Supreme Court, Court of Appeals, congressional and legislative race on Ohio's ${ELECTION} ballot for all ${counties.length} counties, plus State Issue 3 — candidates graded on constitutional and Christian values.`, pageType: 'state', body: `<h1>Ohio ballot — ${ELECTION}</h1><p class="lede">Pick your county, or jump to <a href="${SITE}/ohio/races/">statewide and district races</a>, <a href="${issue._pageUrl}">State Issue 3</a> or <a href="${SITE}/ohio/key-dates/">key dates</a>.</p><p class="links">${counties.map(c => `<a href="${SITE}/ohio/${c.slug}/">${esc(c.county)} County</a>`).join(' · ')}</p>${ctaBox('Faster: enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=state-page&utm_campaign=oh`)}` }))

// ───────────────────────── append to the sitemap written by build-seo-pages.mjs ─────────────────────────
const sitemapPath = path.join(ROOT, 'public/sitemap.xml')
const today = new Date().toISOString().slice(0, 10)
const sm = readFileSync(sitemapPath, 'utf8').replace(/\s*<url><loc>https:\/\/www\.offorandbythepeople\.com\/ohio\/[^<]*<\/loc>[^\n]*/g, '')
writeFileSync(sitemapPath, sm.replace('</urlset>', `${pages.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>`))
console.log(`ohio: wrote ${pages.length} pages: ${counties.length} counties, ${races.length} races, ${candidatePages.size} candidates, State Issue 3`)
