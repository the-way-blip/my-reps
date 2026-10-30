// Static SEO pages for the November 3, 2026 Kentucky ballot, generated into public/kentucky/… after the
// Ohio pages (it appends its URLs to public/sitemap.xml). Data: public/data/ky/ballots/ (build-kentucky.mjs).
//   /kentucky/                                 state index
//   /kentucky/<county>/                        county ballot (U.S. Senate, judges, Commonwealth's Attorney, Amendment 1)
//   /kentucky/race/<slug>/                     U.S. Senate/House, Kentucky Senate/House and Supreme Court races
//   /kentucky/candidate/<slug>/                every graded candidate
//   /kentucky/amendment-1/                     Constitutional Amendment 1 (official ballot language)
//   /kentucky/races/, /kentucky/how-to-vote/, /kentucky/key-dates/

import { readdirSync, readFileSync, writeFileSync, rmSync, mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SITE, ELECTION, esc, slug, PARTY, PARTY_LONG, ISSUES, makePageWriter, ctaBox, faq, gradeBadge, otherStateLinks } from './seo-shared.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'public/data/ky/ballots')
const OUT = path.join(ROOT, 'public/kentucky')
const GOVOTE = 'https://vrsws.sos.ky.gov/ovrweb/govoteky'
const VIC = 'https://vrsws.sos.ky.gov/vic/'
const ABSENTEE = 'https://elect.ky.gov/Voters/Pages/Absentee-Voting-By-Mail.aspx'

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

const { layout, write, pages } = makePageWriter({
  outDir: OUT,
  urlPrefix: 'kentucky',
  footerHtml: `Races are taken from the Kentucky Secretary of State&#39;s official candidate filings. County, city and school board races are on your county&#39;s official sample ballot. Always confirm with your own sample ballot at <a href="${GOVOTE}">GoVoteKY</a>.<br>&copy; 2026 Of For &amp; By The People · <a href="${SITE}/kentucky/">Kentucky ballot by county</a> · <a href="${SITE}/kentucky/races/">Statewide and district races</a> · <a href="${SITE}/kentucky/key-dates/">Key dates</a> · <a href="${SITE}/kentucky/how-to-vote/">How to vote</a> · ${otherStateLinks('kentucky')} · <a href="${SITE}/privacy">Privacy</a> · <a href="${SITE}/terms">Terms</a>`,
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
const districtLabel = r => r.scope === 'congressional' ? `U.S. House District ${r.district}` : r.scope === 'stateSenate' ? `Kentucky Senate District ${r.district}` : r.scope === 'stateHouse' ? `Kentucky House District ${r.district}` : r.office
const raceSlug = r => r.scope === 'state' || r.scope === 'county' ? slug(r.office) : slug(districtLabel(r))

// ───────────────────────── race pages: statewide file + Supreme Court (placed by county) ─────────────────────────
const supreme = new Map() // id -> { race, counties }
for (const c of counties) for (const r of c.races.filter(r => r.category === 'Justice of the Supreme Court')) {
  if (!supreme.has(r.id)) supreme.set(r.id, { race: r, counties: [] })
  supreme.get(r.id).counties.push(c)
}
const races = [...statewide.races, ...[...supreme.values()].map(s => Object.assign(s.race, { _counties: s.counties }))]
for (const r of races) r._pageUrl = `${SITE}/kentucky/race/${raceSlug(r)}/`
// county files hold their own copies of the Supreme Court race: link those to the same page
for (const c of counties) for (const r of c.races) if (supreme.has(r.id)) r._pageUrl = supreme.get(r.id).race._pageUrl

const candidatePages = new Map() // slug -> { c, race }
for (const r of races) for (const c of r.candidates) {
  if (!c.grade && !c.gradeNote) continue
  let cs = slug(c.name)
  if (candidatePages.has(cs)) cs = `${cs}-${raceSlug(r)}`
  candidatePages.set(cs, { c, race: r })
  c._pageUrl = `${SITE}/kentucky/candidate/${cs}/`
}

function candidateLi(c) {
  const p = c.party ? `<span class="p">(${esc(partyShort(c.party))})</span>` : ''
  return `<li>${gradeBadge(c.grade)}<span>${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}</span>${p}</li>`
}
function raceHtml(r) {
  const title = r._pageUrl ? `<a href="${r._pageUrl}" style="color:#0a2342">${esc(r.office)}</a>` : esc(r.office)
  const meta = [r.level, r.type === 'nonpartisan' ? 'Nonpartisan' : '', r.description].filter(Boolean).map(esc).join(' · ')
  return `<div class="race"><h3>${title}</h3>${meta ? `<p class="meta">${meta}</p>` : ''}<ul class="cands">${r.candidates.map(candidateLi).join('')}</ul></div>`
}
function fullCandidate(c) {
  const issues = c.positions ? `<div class="issues">${Object.entries(ISSUES).map(([k, l]) => `<span>${l}<b>${esc(c.positions[k] || '–')}</b></span>`).join('')}</div>` : ''
  const why = c.gradeJustifications ? `<ul>${Object.entries(ISSUES).filter(([k]) => c.gradeJustifications[k]).map(([k, l]) => `<li><b>${l}:</b> ${esc(c.gradeJustifications[k])}</li>`).join('')}</ul>` : ''
  const links = [c.website ? `<a href="${esc(c.website)}" rel="nofollow noopener" target="_blank">Campaign site</a>` : '', `<a href="https://ballotpedia.org/wiki/index.php?search=${encodeURIComponent(c.name + ' Kentucky')}" rel="nofollow noopener" target="_blank">Ballotpedia</a>`].filter(Boolean).join('')
  const src = c.sources?.length ? `<p class="note"><b>Sources:</b> ${c.sources.slice(0, 6).map((u, i) => `<a href="${esc(u)}" rel="nofollow noopener" target="_blank">[${i + 1}]</a>`).join(' ')}</p>` : ''
  return `<div class="cand"><h3>${gradeBadge(c.grade)}${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}${c.party ? `<span class="p">${esc(partyLong(c.party))}</span>` : ''}</h3>${c.description ? `<p class="desc">${esc(c.description)}</p>` : ''}${issues}${c.gradeNote ? `<p class="bio">${esc(c.gradeNote)}</p>` : ''}${why}${src}<p class="links">${links}</p></div>`
}
const labelOf = r => r.scope === 'state' || r.scope === 'county' ? r.office : districtLabel(r)
const raceLinkList = list => `<p class="links">${list.map(r => `<a href="${r._pageUrl}">${esc(labelOf(r))}</a>`).join(' · ')}</p>`

for (const r of races) {
  const names = r.candidates.map(c => c.name + (c.party ? ` (${partyShort(c.party)})` : '')).join(', ')
  const label = labelOf(r)
  const graded = r.candidates.filter(c => c.grade).length
  const title = `${label} — Kentucky 2026 candidates${graded ? ', graded' : ''} | ${ELECTION}`
  const description = `${label} on Kentucky's ${ELECTION} ballot: ${names || 'no candidates filed'}. ${graded ? `${graded} of ${r.candidates.length} candidates graded A–F on constitutional and Christian values` : `${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'}`}.`
  const where = r._counties ? `<p class="note">On the ballot in ${r._counties.length} counties: ${r._counties.map(c => `<a href="${SITE}/kentucky/${c.slug}/">${esc(c.county)}</a>`).join(' · ')}.</p>` : ''
  const body = `<h1>${esc(label)} — Kentucky 2026</h1><p class="lede">${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'} on the ${ELECTION} general election ballot (official Kentucky Secretary of State filings, as of ${dataAsOf}). Grades reflect each candidate&#39;s public record on life, family, religious liberty, the Second Amendment, limited government and fiscal responsibility.</p>${where}
${ctaBox('See this race on your own ballot — with your district and court races.', `${SITE}/ballot?utm_source=seo&utm_medium=race&utm_campaign=ky-${raceSlug(r)}`)}
<h2>Candidates</h2>${r.candidates.map(fullCandidate).join('') || '<p class="note">No candidates filed.</p>'}
<h2>More Kentucky 2026 races</h2>${raceLinkList(races.filter(x => x.scope === r.scope && x !== r).slice(0, 40))}`
  write(`race/${raceSlug(r)}`, layout({ url: r._pageUrl, title, description, body, pageType: 'race', breadcrumbs: [{ name: 'Kentucky', url: `${SITE}/kentucky/` }, { name: 'Races', url: `${SITE}/kentucky/races/` }, { name: label, url: r._pageUrl }], jsonld: [faq([[`Who is running for ${label} in Kentucky in 2026?`, names || 'No candidates filed.'], ['When is the Kentucky 2026 general election?', `Tuesday, ${ELECTION}. Polls are open 6 a.m. to 6 p.m. local time.`]])] }))
}

for (const [cs, { c, race }] of candidatePages) {
  const label = labelOf(race)
  const title = `${c.name} (${partyShort(c.party) || (race.type === 'nonpartisan' ? 'Nonpartisan' : 'Ind.')}) — ${label}, Kentucky 2026${c.grade ? ` · Grade ${c.grade}` : ''}`
  const description = `${c.name}, ${partyLong(c.party) || 'candidate'} for ${label} on Kentucky's ${ELECTION} ballot.${c.grade ? ` Values grade ${c.grade}.` : ''} ${c.gradeNote ? c.gradeNote.slice(0, 180) : ''}`
  const others = race.candidates.filter(x => x !== c)
  const body = `<h1>${esc(c.name)} — ${esc(label)}</h1><p class="lede">${esc(partyLong(c.party) || 'Candidate')} · Kentucky general election, ${ELECTION}.</p>${fullCandidate(c)}
${others.length ? `<h2>Also running for ${esc(label)}</h2><ul class="cands">${others.map(candidateLi).join('')}</ul>` : ''}<p><a href="${race._pageUrl}">Full race: ${esc(label)} →</a></p>
${ctaBox('See every race on your Kentucky ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=candidate&utm_campaign=ky-${cs}`)}`
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: c.name, ...(c.party ? { affiliation: partyLong(c.party) } : {}), ...(c.website ? { url: c.website } : {}) }
  write(`candidate/${cs}`, layout({ url: c._pageUrl, title, description, body, pageType: 'candidate', breadcrumbs: [{ name: 'Kentucky', url: `${SITE}/kentucky/` }, { name: label, url: race._pageUrl }, { name: c.name, url: c._pageUrl }], jsonld: [person, faq([[`What office is ${c.name} running for?`, `${label} in Kentucky, on the ${ELECTION} general election ballot.`], [`Who is running against ${c.name}?`, others.map(x => x.name).join(', ') || 'No other candidates are listed.']])] }))
}

const nSenate = races.filter(r => r.scope === 'stateSenate').length
const nHouse = races.filter(r => r.scope === 'stateHouse').length
write('races', layout({ url: `${SITE}/kentucky/races/`, title: 'Kentucky 2026 election: every U.S. Senate, congressional and legislative race, graded', description: `U.S. Senate, all 6 U.S. House seats, ${nSenate} Kentucky Senate and ${nHouse} Kentucky House races and the Supreme Court on Kentucky's ${ELECTION} ballot — candidates graded on constitutional and Christian values.`, pageType: 'races', breadcrumbs: [{ name: 'Kentucky', url: `${SITE}/kentucky/` }, { name: 'Races', url: `${SITE}/kentucky/races/` }], body: `<h1>Kentucky 2026 races — every candidate, graded</h1><p class="lede">Every statewide and district race on Kentucky&#39;s ${ELECTION} ballot.</p>
<h2>U.S. Senate</h2>${raceLinkList(races.filter(r => r.scope === 'state'))}<h2>U.S. House</h2>${raceLinkList(races.filter(r => r.scope === 'congressional'))}<h2>Kentucky Senate</h2>${raceLinkList(races.filter(r => r.scope === 'stateSenate'))}<h2>Kentucky House</h2>${raceLinkList(races.filter(r => r.scope === 'stateHouse'))}<h2>Kentucky Supreme Court</h2>${raceLinkList(races.filter(r => r.scope === 'county'))}
<p class="note">Court of Appeals, Circuit, Family and District Court judges and Commonwealth&#39;s Attorney races are listed on each <a href="${SITE}/kentucky/">county page</a>.</p>
${ctaBox('Find your exact districts — enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=races&utm_campaign=ky`)}` }))

// ───────────────────────── Amendment 1 ─────────────────────────
const issue = counties[0].referendums.find(q => q.statewide)
issue._pageUrl = `${SITE}/kentucky/amendment-1/`
write('amendment-1', layout({ url: issue._pageUrl, title: `Kentucky Constitutional Amendment 1 (2026): governor's pardons before an election — official ballot language | ${ELECTION}`, description: `The official ballot language of Kentucky Constitutional Amendment 1, which would bar a governor from granting pardons or commuting sentences from 60 days before the general election at which the governor is elected until the new term begins, on the ${ELECTION} ballot.`, pageType: 'proposal', breadcrumbs: [{ name: 'Kentucky', url: `${SITE}/kentucky/` }, { name: 'Amendment 1', url: issue._pageUrl }], jsonld: [faq([['What is Kentucky Constitutional Amendment 1 in 2026?', issue.ballotLanguage], ['Is Amendment 1 on every Kentucky ballot?', `Yes. It is a statewide question on every Kentucky ballot on ${ELECTION}.`]])], body: `<h1>Kentucky Constitutional Amendment 1 — governor&#39;s pardons and commutations</h1><p class="lede">Proposed constitutional amendment · On every Kentucky ballot, ${ELECTION}.</p><div class="prop"><h3>Official ballot language</h3><p style="white-space:pre-line">${esc(issue.ballotLanguage)}</p></div><p class="note">Ballot language as published by the Kentucky Secretary of State. A YES vote approves the amendment; a NO vote rejects it.</p>
${ctaBox('See Amendment 1 with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=proposal&utm_campaign=ky-amendment-1`)}` }))

// ───────────────────────── counties ─────────────────────────
const senateBlock = `<h2>U.S. Senate (every Kentucky ballot)</h2>${races.filter(r => r.scope === 'state').map(raceHtml).join('')}<div class="race"><p class="meta">Also on your ballot: your <a href="${SITE}/kentucky/races/" style="color:#0a2342">U.S. House, Kentucky Senate and Kentucky House districts</a> (enter your address to see yours) and <a href="${issue._pageUrl}" style="color:#0a2342"><b>Constitutional Amendment 1</b></a>.</p></div>`
function votingInHtml(name) {
  return `<h2>Voting in ${esc(name)}</h2><ul class="dates">
<li><b>Election Day</b>Tuesday, ${ELECTION} · polls open 6 a.m.–6 p.m. local time. If you&#39;re in line by 6 p.m., you can vote.</li>
<li><b>Where to vote</b>Look up your polling place and early voting sites with the <a href="${VIC}" rel="noopener">Kentucky voter information center</a>.</li>
<li><b>Early voting</b>No-excuse early in-person voting runs Thursday, October 29 through Saturday, October 31.</li>
<li><b>Photo ID</b>Kentucky asks for a photo ID to vote. <a href="${SITE}/kentucky/how-to-vote/">Full checklist →</a></li>
</ul>`
}
const order = ['Justice of the Supreme Court', 'Judge of the Court of Appeals', 'Circuit Judge', 'Circuit Judge, Family Court', 'District Judge', "Commonwealth's Attorney"]
for (const c of counties) {
  const cUrl = `${SITE}/kentucky/${c.slug}/`
  const courts = c.races.filter(r => r.level === 'Courts')
  const ca = c.races.filter(r => r.category === "Commonwealth's Attorney")
  const kinds = order.filter(k => c.races.some(r => r.category === k))
  const COURT = { 'Justice of the Supreme Court': 'Supreme Court', 'Judge of the Court of Appeals': 'Court of Appeals', 'Circuit Judge': 'Circuit Court', 'Circuit Judge, Family Court': 'Family Court', 'District Judge': 'District Court' }
  const courtWords = kinds.filter(k => COURT[k]).map(k => COURT[k]).join(', ')
  const sample = c.sampleBallotUrl
  const title = `${c.county} County, KY ballot 2026 — U.S. Senate, Congress, ${courts.length ? 'judges, ' : ''}Amendment 1 (${ELECTION})`
  const description = `What's on the ballot in ${c.county} County, Kentucky for ${ELECTION}: U.S. Senate, U.S. House, Kentucky Senate and House${courts.length ? `, ${courts.length} judicial race${courts.length === 1 ? '' : 's'} (${courtWords})` : ''}${ca.length ? ", Commonwealth's Attorney" : ''} and Constitutional Amendment 1, with candidates graded.`
  write(c.slug, layout({ url: cUrl, title, description, pageType: 'county', breadcrumbs: [{ name: 'Kentucky', url: `${SITE}/kentucky/` }, { name: `${c.county} County`, url: cUrl }], jsonld: [faq([[`What is on the ballot in ${c.county} County, Kentucky on ${ELECTION}?`, `U.S. Senate, U.S. House, Kentucky Senate and House${courts.length ? `, judges (${courtWords})` : ''}${ca.length ? ", Commonwealth's Attorney" : ''}, Constitutional Amendment 1, plus county, city and school board races on the ${c.county} County official sample ballot.`], [`What time do polls close in ${c.county} County?`, `Kentucky polls are open 6 a.m. to 6 p.m. local time on Tuesday, ${ELECTION}.`]])], body: `<h1>${esc(c.county)} County ballot — ${ELECTION}</h1><p class="lede">Kentucky General Election · Tuesday, ${ELECTION} · Polls open 6 a.m.–6 p.m. local time. From the Kentucky Secretary of State&#39;s official candidate filings (as of ${dataAsOf}). Enter your address to see your exact ballot with candidates graded.</p>
${ctaBox('Faster: enter your address for your exact ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=county&utm_campaign=ky-${c.slug}`)}
${courts.length ? `<h2>Judges (${courts.length})</h2><p class="note">Judicial races are nonpartisan: candidates appear without party labels.</p>${courts.map(raceHtml).join('')}` : ''}
${ca.length ? `<h2>Commonwealth&#39;s Attorney</h2>${ca.map(raceHtml).join('')}` : ''}
<h2>Constitutional Amendment 1</h2><div class="prop"><h3><a href="${issue._pageUrl}">Amendment 1 — governor&#39;s pardons and commutations near an election</a></h3><details><summary>Official ballot language</summary><p style="white-space:pre-line">${esc(issue.ballotLanguage)}</p></details></div>
<h2>County, city and school board races</h2><p class="note">${esc(c.county)} County offices (judge/executive, clerk, sheriff, magistrate), city and school board races are on the ${sample ? `<a href="${esc(sample)}" rel="noopener">official ${esc(c.county)} County sample ballot</a>` : `county&#39;s official sample ballot at <a href="${GOVOTE}">GoVoteKY</a>`}.</p>
${senateBlock}${votingInHtml(`${c.county} County`)}
<h2>Other Kentucky counties</h2><p class="links">${counties.filter(x => x !== c).map(x => `<a href="${SITE}/kentucky/${x.slug}/">${esc(x.county)}</a>`).join(' · ')}</p>` }))
}

// ───────────────────────── how to vote, key dates, state index ─────────────────────────
const qa = [
  ['Am I registered to vote in Kentucky?', 'Check on GoVoteKY (vrsws.sos.ky.gov/ovrweb/govoteky). It also shows your polling place.'],
  ['Can I still register to vote?', 'No. Kentucky voter registration for the 2026 general election closed October 5, 2026. Kentucky does not have Election Day registration.'],
  ['What ID do I need to vote in Kentucky?', 'Kentucky asks for a photo ID, such as a Kentucky driver’s license or state ID card, U.S. passport, or military ID. If you don’t have one, ask your poll worker about the other ways to verify your identity.'],
  ['When can I vote early?', 'No-excuse early in-person voting runs Thursday, October 29 through Saturday, October 31, 2026. Find your county’s early voting sites on the Kentucky voter information center.'],
  ['How do I return my absentee ballot?', 'Mail-in absentee ballots must reach your county clerk by 6 p.m. on Election Day, November 3, 2026. The request deadline was October 20.'],
  ['What are the polling hours on Election Day?', 'Polls are open 6 a.m. to 6 p.m. local time on Tuesday, November 3, 2026 (Kentucky spans the Eastern and Central time zones). If you are in line by 6 p.m., you can vote.'],
  ['Can I bring notes into the voting booth?', 'Yes. You may bring a printed or written list of your choices, such as your ballot plan.'],
]
write('how-to-vote', layout({ url: `${SITE}/kentucky/how-to-vote/`, title: 'How to vote in Kentucky 2026: photo ID, early voting, absentee ballots, poll hours', description: `Everything you need to vote in Kentucky's ${ELECTION} election: photo ID, early voting Oct 29–31, absentee ballot deadlines and polling hours (6 a.m.–6 p.m. local time).`, pageType: 'how-to-vote', breadcrumbs: [{ name: 'Kentucky', url: `${SITE}/kentucky/` }, { name: 'How to vote', url: `${SITE}/kentucky/how-to-vote/` }], jsonld: [faq(qa)], body: `<h1>How to vote in Kentucky — ${ELECTION}</h1><p class="lede">A plain-English checklist for the general election.</p><ul class="dates">${qa.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
<p class="note">Official sources: <a href="${GOVOTE}">GoVoteKY</a> · <a href="${VIC}">Kentucky voter information center</a> · <a href="${ABSENTEE}">Absentee voting by mail</a>.</p>
${ctaBox('Know every race before you go — build your ballot plan.', `${SITE}/ballot?utm_source=seo&utm_medium=how-to-vote&utm_campaign=ky`)}<p><a href="${SITE}/kentucky/key-dates/">Key dates →</a> · <a href="${SITE}/kentucky/">What&#39;s on the ballot in my county →</a></p>` }))

const dates = [
  ['Voter registration deadline', 'Monday, October 5, 2026 (closed)'],
  ['Mail-in absentee ballot request deadline', 'Tuesday, October 20, 2026 (closed)'],
  ['Early in-person voting', 'Thursday, October 29 through Saturday, October 31, 2026, no excuse needed'],
  ['Election Day', `Tuesday, ${ELECTION} · polls open 6 a.m.–6 p.m. local time`],
  ['Mail-in absentee ballots due', `By 6 p.m. on ${ELECTION}, at your county clerk`],
]
write('key-dates', layout({ url: `${SITE}/kentucky/key-dates/`, title: 'Kentucky election key dates 2026: early voting, absentee deadline, Election Day hours', description: `Kentucky ${ELECTION} general election: early voting Oct 29–31, absentee requests closed Oct 20, polls open 6 a.m.–6 p.m. local time on Election Day.`, pageType: 'key-dates', breadcrumbs: [{ name: 'Kentucky', url: `${SITE}/kentucky/` }, { name: 'Key dates', url: `${SITE}/kentucky/key-dates/` }], jsonld: [faq(dates.map(([q, a]) => [`Kentucky 2026: ${q}?`, a]))], body: `<h1>Kentucky 2026 election — key dates &amp; deadlines</h1><p class="lede">General election Tuesday, ${ELECTION}.</p><ul class="dates">${dates.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Plan your vote in two minutes.', `${SITE}/ballot?utm_source=seo&utm_medium=key-dates&utm_campaign=ky`)}` }))

write('', layout({ url: `${SITE}/kentucky/`, title: `Kentucky ballot 2026 by county — U.S. Senate, Congress, judges & Amendment 1 (${ELECTION})`, description: `Every U.S. Senate, congressional, legislative and judicial race on Kentucky's ${ELECTION} ballot for all ${counties.length} counties, plus Constitutional Amendment 1 — candidates graded on constitutional and Christian values.`, pageType: 'state', body: `<h1>Kentucky ballot — ${ELECTION}</h1><p class="lede">Pick your county, or jump to <a href="${SITE}/kentucky/races/">statewide and district races</a>, <a href="${issue._pageUrl}">Amendment 1</a> or <a href="${SITE}/kentucky/key-dates/">key dates</a>.</p><p class="links">${counties.map(c => `<a href="${SITE}/kentucky/${c.slug}/">${esc(c.county)} County</a>`).join(' · ')}</p>${ctaBox('Faster: enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=state-page&utm_campaign=ky`)}` }))

// ───────────────────────── append to the sitemap written by build-seo-pages.mjs ─────────────────────────
const sitemapPath = path.join(ROOT, 'public/sitemap.xml')
const today = new Date().toISOString().slice(0, 10)
const sm = readFileSync(sitemapPath, 'utf8').replace(/\s*<url><loc>https:\/\/www\.offorandbythepeople\.com\/kentucky\/[^<]*<\/loc>[^\n]*/g, '')
writeFileSync(sitemapPath, sm.replace('</urlset>', `${pages.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>`))
console.log(`kentucky: wrote ${pages.length} pages: ${counties.length} counties, ${races.length} races, ${candidatePages.size} candidates, Amendment 1`)
