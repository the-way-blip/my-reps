#!/usr/bin/env node
// Static SEO pages for the November 3, 2026 Indiana ballot, generated into public/indiana/… after the
// Michigan pages (it appends its URLs to public/sitemap.xml). Data: public/data/in/ballots/ (build-indiana.mjs).
//   /indiana/                                 state index
//   /indiana/<county>/                        county ballot
//   /indiana/<county>/<township>-township/    township ballot (county + township races)
//   /indiana/<county>/<town>/                 town ballot (county + town races)
//   /indiana/school-boards/<county>-<corp>/   school board races
//   /indiana/race/<slug>/                     statewide, U.S. House, State Senate, State House races
//   /indiana/candidate/<slug>/                every graded statewide/district candidate
//   /indiana/public-question-1/ and -2/       statewide public questions (official text)
//   /indiana/races/, /indiana/how-to-vote/, /indiana/key-dates/
import { readdirSync, readFileSync, writeFileSync, rmSync, mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SITE, ELECTION, esc, slug, PARTY, PARTY_LONG, ISSUES, makePageWriter, ctaBox, faq, gradeBadge } from './seo-shared.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'public/data/in/ballots')
const OUT = path.join(ROOT, 'public/indiana')
const IN_SITE = 'https://indianavoters.in.gov/'

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

const { layout, write, pages } = makePageWriter({
  outDir: OUT,
  urlPrefix: 'indiana',
  footerHtml: `Races and public questions are taken from the Indiana Election Division&#39;s official candidate list (<a href="${IN_SITE}">IndianaVoters.in.gov</a>). Always confirm with your own sample ballot.<br>&copy; 2026 Of For &amp; By The People · <a href="${SITE}/indiana/">Indiana ballot by county</a> · <a href="${SITE}/indiana/races/">Statewide races</a> · <a href="${SITE}/indiana/key-dates/">Key dates</a> · <a href="${SITE}/indiana/how-to-vote/">How to vote</a> · <a href="${SITE}/michigan/">Michigan ballot</a> · <a href="${SITE}/privacy">Privacy</a> · <a href="${SITE}/terms">Terms</a>`,
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
const raceSlug = r => r.scope === 'state' ? slug(r.office.replace(/\s*\(.*\)/, '')) : slug(districtLabel(r))

// ───────────────────────── statewide + district races, candidate pages ─────────────────────────
const races = statewide.races
for (const r of races) r._pageUrl = `${SITE}/indiana/race/${raceSlug(r)}/`
const candidatePages = new Map() // slug -> { c, race }
for (const r of races) for (const c of r.candidates) {
  if (!c.grade && !c.gradeNote) continue
  let cs = slug(c.name)
  if (candidatePages.has(cs)) cs = `${cs}-${raceSlug(r)}`
  candidatePages.set(cs, { c, race: r })
  c._pageUrl = `${SITE}/indiana/candidate/${cs}/`
}

function candidateLi(c) {
  const p = c.party ? `<span class="p">(${esc(partyShort(c.party))})</span>` : ''
  return `<li>${gradeBadge(c.grade)}<span>${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}</span>${p}</li>`
}
function raceHtml(r) {
  const title = r._pageUrl ? `<a href="${r._pageUrl}" style="color:#0a2342">${esc(r.office)}</a>` : esc(r.office)
  const meta = [r.level, r.description].filter(Boolean).map(esc).join(' · ')
  return `<div class="race"><h3>${title}</h3>${meta ? `<p class="meta">${meta}</p>` : ''}<ul class="cands">${r.candidates.map(candidateLi).join('')}</ul></div>`
}
function fullCandidate(c) {
  const issues = c.positions ? `<div class="issues">${Object.entries(ISSUES).map(([k, l]) => `<span>${l}<b>${esc(c.positions[k] || '–')}</b></span>`).join('')}</div>` : ''
  const why = c.gradeJustifications ? `<ul>${Object.entries(ISSUES).filter(([k]) => c.gradeJustifications[k]).map(([k, l]) => `<li><b>${l}:</b> ${esc(c.gradeJustifications[k])}</li>`).join('')}</ul>` : ''
  const links = [c.website ? `<a href="${esc(c.website)}" rel="nofollow noopener" target="_blank">Campaign site</a>` : '', `<a href="https://ballotpedia.org/wiki/index.php?search=${encodeURIComponent(c.name + ' Indiana')}" rel="nofollow noopener" target="_blank">Ballotpedia</a>`].filter(Boolean).join('')
  const src = c.sources?.length ? `<p class="note"><b>Sources:</b> ${c.sources.slice(0, 6).map((u, i) => `<a href="${esc(u)}" rel="nofollow noopener" target="_blank">[${i + 1}]</a>`).join(' ')}</p>` : ''
  return `<div class="cand"><h3>${gradeBadge(c.grade)}${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}${c.party ? `<span class="p">${esc(partyLong(c.party))}</span>` : ''}</h3>${c.description ? `<p class="desc">${esc(c.description)}</p>` : ''}${issues}${c.gradeNote ? `<p class="bio">${esc(c.gradeNote)}</p>` : ''}${why}${src}<p class="links">${links}</p></div>`
}
const raceLinkList = list => `<p class="links">${list.map(r => `<a href="${r._pageUrl}">${esc(r.scope === 'state' ? r.office : districtLabel(r))}</a>`).join(' · ')}</p>`

for (const r of races) {
  const names = r.candidates.map(c => c.name + (c.party ? ` (${partyShort(c.party)})` : '')).join(', ')
  const label = r.scope === 'state' ? r.office : districtLabel(r)
  const graded = r.candidates.filter(c => c.grade).length
  const title = `${label} — Indiana 2026 candidates, graded | ${ELECTION}`
  const description = `${label} on Indiana's ${ELECTION} ballot: ${names || 'no candidates filed'}. ${graded ? `${graded} of ${r.candidates.length} candidates graded A–F on constitutional and Christian values` : `${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'}`}.`
  const body = `<h1>${esc(label)} — Indiana 2026</h1><p class="lede">${r.candidates.length} candidate${r.candidates.length === 1 ? '' : 's'} on the ${ELECTION} general election ballot (official Indiana Election Division list, as of ${dataAsOf}). Grades reflect each candidate&#39;s public record on life, family, religious liberty, the Second Amendment, limited government and fiscal responsibility.</p>
${ctaBox('See this race on your own ballot — with every county, township and school race.', `${SITE}/ballot?utm_source=seo&utm_medium=race&utm_campaign=in-${raceSlug(r)}`)}
<h2>Candidates</h2>${r.candidates.map(fullCandidate).join('') || '<p class="note">No candidates filed.</p>'}
<h2>More Indiana 2026 races</h2>${raceLinkList(races.filter(x => x.scope === r.scope && x !== r).slice(0, 40))}`
  write(`race/${raceSlug(r)}`, layout({ url: r._pageUrl, title, description, body, pageType: 'race', breadcrumbs: [{ name: 'Indiana', url: `${SITE}/indiana/` }, { name: 'Races', url: `${SITE}/indiana/races/` }, { name: label, url: r._pageUrl }], jsonld: [faq([[`Who is running for ${label} in Indiana in 2026?`, names || 'No candidates filed.'], ['When is the Indiana 2026 general election?', `Tuesday, ${ELECTION}. Polls are open 6 a.m. to 6 p.m. local time.`]])] }))
}

for (const [cs, { c, race }] of candidatePages) {
  const label = race.scope === 'state' ? race.office : districtLabel(race)
  const title = `${c.name} (${partyShort(c.party) || 'Ind.'}) — ${label}, Indiana 2026${c.grade ? ` · Grade ${c.grade}` : ''}`
  const description = `${c.name}, ${partyLong(c.party) || 'candidate'} for ${label} on Indiana's ${ELECTION} ballot.${c.grade ? ` Values grade ${c.grade}.` : ''} ${c.gradeNote ? c.gradeNote.slice(0, 180) : ''}`
  const others = race.candidates.filter(x => x !== c)
  const body = `<h1>${esc(c.name)} — ${esc(label)}</h1><p class="lede">${esc(partyLong(c.party) || 'Candidate')} · Indiana general election, ${ELECTION}.</p>${fullCandidate(c)}
${others.length ? `<h2>Also running for ${esc(label)}</h2><ul class="cands">${others.map(candidateLi).join('')}</ul>` : ''}<p><a href="${race._pageUrl}">Full race: ${esc(label)} →</a></p>
${ctaBox('See every race on your Indiana ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=candidate&utm_campaign=in-${cs}`)}`
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: c.name, ...(c.party ? { affiliation: partyLong(c.party) } : {}), ...(c.website ? { url: c.website } : {}) }
  write(`candidate/${cs}`, layout({ url: c._pageUrl, title, description, body, pageType: 'candidate', breadcrumbs: [{ name: 'Indiana', url: `${SITE}/indiana/` }, { name: label, url: race._pageUrl }, { name: c.name, url: c._pageUrl }], jsonld: [person, faq([[`What office is ${c.name} running for?`, `${label} in Indiana, on the ${ELECTION} general election ballot.`], [`Who is running against ${c.name}?`, others.map(x => x.name).join(', ') || 'No other candidates are listed.']])] }))
}

write('races', layout({ url: `${SITE}/indiana/races/`, title: 'Indiana 2026 election: every statewide, congressional and legislative race, graded', description: `Secretary of State, Comptroller, Treasurer, all 9 U.S. House seats, ${races.filter(r => r.scope === 'stateSenate').length} State Senate and ${races.filter(r => r.scope === 'stateHouse').length} State House races on Indiana's ${ELECTION} ballot — candidates graded on constitutional and Christian values.`, pageType: 'races', breadcrumbs: [{ name: 'Indiana', url: `${SITE}/indiana/` }, { name: 'Races', url: `${SITE}/indiana/races/` }], body: `<h1>Indiana 2026 races — every candidate, graded</h1><p class="lede">Every statewide and district race on Indiana&#39;s ${ELECTION} ballot.</p>
<h2>Statewide</h2>${raceLinkList(races.filter(r => r.scope === 'state'))}<h2>U.S. House</h2>${raceLinkList(races.filter(r => r.scope === 'congressional'))}<h2>State Senate</h2>${raceLinkList(races.filter(r => r.scope === 'stateSenate'))}<h2>State House</h2>${raceLinkList(races.filter(r => r.scope === 'stateHouse'))}
${ctaBox('Find your exact districts — enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=races`)}` }))

// ───────────────────────── public questions ─────────────────────────
const qText = {}
for (const c of counties) for (const q of c.referendums) if (q.statewide && !qText[q.name]) qText[q.name] = q
const statewideQs = Object.values(qText).sort((a, b) => a.name.localeCompare(b.name))
const qSlug = q => slug(q.name.replace(/#/g, ''))
for (const q of statewideQs) {
  const url = `${SITE}/indiana/${qSlug(q)}/`
  q._pageUrl = url
  write(qSlug(q), layout({ url, title: `Indiana ${q.name} 2026 — official ballot language | ${ELECTION}`, description: `The official text of Indiana ${q.name}, a proposed amendment to the Indiana Constitution on the ${ELECTION} ballot. ${q.ballotLanguage.slice(0, 140)}`, pageType: 'proposal', breadcrumbs: [{ name: 'Indiana', url: `${SITE}/indiana/` }, { name: q.name, url }], jsonld: [faq([[`What is Indiana ${q.name}?`, q.ballotLanguage]])], body: `<h1>Indiana ${esc(q.name)}</h1><p class="lede">${esc(q.type)} · On every Indiana ballot, ${ELECTION}.</p><div class="prop"><h3>Official ballot language</h3><p style="white-space:pre-line">${esc(q.ballotLanguage)}</p></div><p class="note">Shown word for word from the Indiana Election Division. Vote YES to approve the amendment or NO to reject it.</p>
${ctaBox('See this question with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=proposal&utm_campaign=in-${qSlug(q)}`)}` }))
}
const qHtml = q => `<div class="prop"><h3>${q._pageUrl ? `<a href="${q._pageUrl}">${esc(q.name)}</a>` : esc(q.name)}</h3><div class="tags"><span>${esc(q.type)}</span></div><details><summary>Official ballot language</summary><p>${esc(q.ballotLanguage)}</p></details></div>`

// ───────────────────────── counties, townships, towns, school boards ─────────────────────────
const schoolPages = []
function areaRaces(c, scope, area) { return c.races.filter(r => r.scope === scope && r.area === area) }
function countyBlock(c) {
  const definite = c.races.filter(r => r.scope === 'county' && !r.maybe)
  const maybe = c.races.filter(r => r.scope === 'county' && r.maybe)
  return `<h2>${esc(c.county)} County races (${definite.length})</h2>${definite.map(raceHtml).join('')}${maybe.length ? `<h2>May be on your ballot (${maybe.length})</h2><p class="note">These seats are elected by district. Check your official sample ballot at <a href="${IN_SITE}">IndianaVoters.in.gov</a>.</p>${maybe.map(raceHtml).join('')}` : ''}`
}
const statewideBlock = `<h2>Statewide races (every Indiana ballot)</h2>${races.filter(r => r.scope === 'state').map(raceHtml).join('')}<div class="race"><p class="meta">Also on your ballot: your <a href="${SITE}/indiana/races/" style="color:#0a2342">U.S. House, State Senate and State House districts</a> (enter your address to see yours), ${statewideQs.map(q => `<a href="${q._pageUrl}" style="color:#0a2342"><b>${esc(q.name)}</b></a>`).join(' and ')}, and judge retention questions.</p></div>`
function votingInHtml(name) {
  return `<h2>Voting in ${esc(name)}</h2><ul class="dates">
<li><b>Election Day</b>Tuesday, ${ELECTION} · polls open 6 a.m.–6 p.m. local time. If you&#39;re in line by 6 p.m., you can vote.</li>
<li><b>Where to vote</b>Look up your polling place and vote center at <a href="${IN_SITE}" rel="noopener">IndianaVoters.in.gov</a>.</li>
<li><b>Early voting</b>In person through noon Monday, November 2 at your county clerk&#39;s office or satellite sites.</li>
<li><b>Absentee ballots</b>Mailed ballots must reach your county election office by 6 p.m. on Election Day.</li>
<li><b>Photo ID</b>Indiana requires a government-issued photo ID. <a href="${SITE}/indiana/how-to-vote/">Full checklist →</a></li>
</ul>`
}

for (const c of counties) {
  const cUrl = `${SITE}/indiana/${c.slug}/`
  const townships = [...new Set(c.races.filter(r => r.scope === 'township').map(r => r.area))].sort()
  const towns = [...new Set(c.races.filter(r => (r.scope === 'town' || r.scope === 'city') && !r.maybe).map(r => r.area))].sort()
  const schools = [...new Set(c.races.filter(r => r.scope === 'school').map(r => r.area))].sort()
  const twpUrl = a => `${cUrl}${slug(a)}-township/`
  const townUrl = a => `${cUrl}${slug(a)}/`
  const schoolSlug = a => `${c.slug}-${slug(a)}`
  const statewideQ = c.referendums.filter(q => q.statewide)
  const localQ = c.referendums.filter(q => !q.statewide)

  for (const a of schools) {
    const rs = areaRaces(c, 'school', a)
    const url = `${SITE}/indiana/school-boards/${schoolSlug(a)}/`
    schoolPages.push({ county: c, area: a, url })
    write(`school-boards/${schoolSlug(a)}`, layout({ url, title: `${a} school board candidates 2026 — ${c.county} County, Indiana | ${ELECTION}`, description: `${a} school board races on the ${ELECTION} ballot in ${c.county} County, Indiana: ${rs.map(r => r.candidates.map(x => x.name).join(', ')).filter(Boolean).join('; ')}.`, pageType: 'school-board', breadcrumbs: [{ name: 'Indiana', url: `${SITE}/indiana/` }, { name: `${c.county} County`, url: cUrl }, { name: `${a} school board`, url }], jsonld: [faq([[`Who is running for the ${a} school board in 2026?`, rs.flatMap(r => r.candidates.map(x => x.name)).join(', ') || 'No candidates filed.']])], body: `<h1>${esc(a)} school board — 2026</h1><p class="lede">${c.county} County, Indiana · ${ELECTION}. Some seats are elected only by voters in that board district — check your sample ballot.</p>${rs.map(raceHtml).join('')}
${ctaBox('See your full ballot — every race, graded where reviewed.', `${SITE}/ballot?utm_source=seo&utm_medium=school-board&utm_campaign=in-${schoolSlug(a)}`)}<p><a href="${cUrl}">All ${esc(c.county)} County races →</a></p>` }))
  }

  const schoolLinks = schools.length ? `<h2>School boards in ${esc(c.county)} County</h2><p class="links">${schools.map(a => `<a href="${SITE}/indiana/school-boards/${schoolSlug(a)}/">${esc(a)}</a>`).join(' · ')}</p>` : ''
  const qBlock = `<h2>Public questions (${c.referendums.length})</h2>${statewideQ.map(qHtml).join('')}${localQ.map(qHtml).join('')}${localQ.some(q => !/retention/i.test(q.type)) ? '<p class="note">Local public questions appear only for voters in that district.</p>' : ''}`

  for (const a of townships) {
    const rs = areaRaces(c, 'township', a)
    const url = twpUrl(a)
    const name = `${a} Township`
    write(`${c.slug}/${slug(a)}-township`, layout({ url, title: `What's on the ballot in ${name}, IN (${c.county} County) — ${ELECTION}`, description: `${name} (${c.county} County) sample ballot for ${ELECTION}: ${rs.length} township race${rs.length === 1 ? '' : 's'}, ${c.races.filter(r => r.scope === 'county' && !r.maybe).length} county races, Secretary of State, Comptroller, Treasurer, Congress, state legislature and ${statewideQs.map(q => q.name).join(' and ')}. Candidates graded on conservative values.`, pageType: 'jurisdiction', breadcrumbs: [{ name: 'Indiana', url: `${SITE}/indiana/` }, { name: `${c.county} County`, url: cUrl }, { name, url }], jsonld: [faq([[`What is on the ballot in ${name}, Indiana on ${ELECTION}?`, `${rs.length} township races, ${c.county} County offices, statewide offices, U.S. House, state legislature, ${statewideQs.map(q => q.name).join(' and ')} and judge retention questions.`], [`What time do polls close in ${name}?`, `Indiana polls are open 6 a.m. to 6 p.m. local time on Tuesday, ${ELECTION}.`], [`Where do I vote in ${name}?`, 'Find your polling place or vote center at IndianaVoters.in.gov or by entering your address at offorandbythepeople.com.']])], body: `<h1>What&#39;s on the ballot in ${esc(name)}, ${esc(c.county)} County</h1>
<p class="lede">Indiana General Election · Tuesday, ${ELECTION} · Polls open 6 a.m.–6 p.m. local time. From the Indiana Election Division&#39;s official candidate list (as of ${dataAsOf}). Enter your address to see your exact ballot with candidates graded.</p>
${ctaBox(`See every race on your ${esc(name)} ballot.`, `${SITE}/ballot?utm_source=seo&utm_medium=ballot-page&utm_campaign=in-${c.slug}-${slug(a)}`)}
<h2>${esc(name)} races (${rs.length})</h2>${rs.map(raceHtml).join('')}
${statewideBlock}${countyBlock(c)}${schoolLinks}${qBlock}${votingInHtml(name)}
<h2>Other communities in ${esc(c.county)} County</h2><p class="links">${[...townships.filter(x => x !== a).map(x => `<a href="${twpUrl(x)}">${esc(x)} Township</a>`), ...towns.map(x => `<a href="${townUrl(x)}">${esc(x)}</a>`)].join(' · ')}</p>` }))
  }

  for (const a of towns) {
    const rs = [...areaRaces(c, 'town', a), ...areaRaces(c, 'city', a)]
    const url = townUrl(a)
    write(`${c.slug}/${slug(a)}`, layout({ url, title: `What's on the ballot in ${a}, IN (${c.county} County) — ${ELECTION}`, description: `${a} (${c.county} County) sample ballot for ${ELECTION}: ${rs.length} local race${rs.length === 1 ? '' : 's'}, county races, statewide offices, Congress, state legislature and ${statewideQs.map(q => q.name).join(' and ')}.`, pageType: 'jurisdiction', breadcrumbs: [{ name: 'Indiana', url: `${SITE}/indiana/` }, { name: `${c.county} County`, url: cUrl }, { name: a, url }], jsonld: [faq([[`What is on the ballot in ${a}, Indiana on ${ELECTION}?`, `${rs.length} local races, your township races, ${c.county} County offices, statewide offices, U.S. House, state legislature and ${statewideQs.map(q => q.name).join(' and ')}.`]])], body: `<h1>What&#39;s on the ballot in ${esc(a)}, ${esc(c.county)} County</h1>
<p class="lede">Indiana General Election · Tuesday, ${ELECTION}. Town residents also vote in their township&#39;s races. From the Indiana Election Division (as of ${dataAsOf}).</p>
${ctaBox(`See every race on your ${esc(a)} ballot.`, `${SITE}/ballot?utm_source=seo&utm_medium=ballot-page&utm_campaign=in-${c.slug}-${slug(a)}`)}
<h2>${esc(a)} races (${rs.length})</h2>${rs.map(raceHtml).join('')}
${statewideBlock}${countyBlock(c)}${schoolLinks}${qBlock}${votingInHtml(a)}
<h2>Townships in ${esc(c.county)} County</h2><p class="links">${townships.map(x => `<a href="${twpUrl(x)}">${esc(x)} Township</a>`).join(' · ')}</p>` }))
  }

  write(c.slug, layout({ url: cUrl, title: `${c.county} County, IN sample ballot 2026 — every township, town & race (${ELECTION})`, description: `What's on the ballot in ${c.county} County, Indiana for ${ELECTION}: ${c.races.filter(r => r.scope === 'county').length} county races, ${townships.length} townships, ${schools.length} school boards, ${c.referendums.length} public questions, plus statewide and district races.`, pageType: 'county', breadcrumbs: [{ name: 'Indiana', url: `${SITE}/indiana/` }, { name: `${c.county} County`, url: cUrl }], body: `<h1>${esc(c.county)} County ballot — ${ELECTION}</h1><p class="lede">Pick your township or town to see your local races. From the Indiana Election Division&#39;s official list (as of ${dataAsOf}).</p>
${ctaBox('Faster: enter your address for your exact ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=county&utm_campaign=in-${c.slug}`)}
${townships.length ? `<h2>Townships</h2><p class="links">${townships.map(x => `<a href="${twpUrl(x)}">${esc(x)} Township</a>`).join(' · ')}</p>` : ''}${towns.length ? `<h2>Towns &amp; cities with races</h2><p class="links">${towns.map(x => `<a href="${townUrl(x)}">${esc(x)}</a>`).join(' · ')}</p>` : ''}
${countyBlock(c)}${schoolLinks}${qBlock}${statewideBlock}` }))
}

// ───────────────────────── how to vote, key dates, state index ─────────────────────────
const qa = [
  ['Am I registered to vote in Indiana?', 'Check at IndianaVoters.in.gov. It also shows your polling place, sample ballot and absentee status.'],
  ['Can I still register to vote?', 'No. Indiana voter registration for the 2026 general election closed October 5, 2026. Indiana does not have Election Day registration.'],
  ['What ID do I need to vote in Indiana?', 'A government-issued photo ID (Indiana or U.S. government) showing your name and an expiration date. Without one you can vote a provisional ballot and show ID to your county election office shortly after the election.'],
  ['When can I vote early?', 'Early in-person voting runs through noon Monday, November 2, 2026 at your county clerk’s office and any satellite sites.'],
  ['How do I return my absentee ballot?', 'Mailed absentee ballots must reach your county election office by 6 p.m. on Tuesday, November 3. In the final days, hand-deliver it to the county election office.'],
  ['What are the polling hours on Election Day?', 'Polls are open 6 a.m. to 6 p.m. local time on Tuesday, November 3, 2026. If you are in line by 6 p.m., you can vote.'],
  ['Can I bring notes into the voting booth?', 'Yes. You may bring a printed or written list of your choices, such as your ballot plan.'],
]
write('how-to-vote', layout({ url: `${SITE}/indiana/how-to-vote/`, title: 'How to vote in Indiana 2026: photo ID, early voting, absentee ballots, poll hours', description: `Everything you need to vote in Indiana's ${ELECTION} election: photo ID rules, early voting through noon Nov 2, returning absentee ballots and polling hours (6 a.m.–6 p.m.).`, pageType: 'how-to-vote', breadcrumbs: [{ name: 'Indiana', url: `${SITE}/indiana/` }, { name: 'How to vote', url: `${SITE}/indiana/how-to-vote/` }], jsonld: [faq(qa)], body: `<h1>How to vote in Indiana — ${ELECTION}</h1><p class="lede">A plain-English checklist for the general election.</p><ul class="dates">${qa.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Know every race before you go — build your ballot plan.', `${SITE}/ballot?utm_source=seo&utm_medium=how-to-vote&utm_campaign=in`)}<p><a href="${SITE}/indiana/key-dates/">Key dates →</a> · <a href="${SITE}/indiana/">What&#39;s on the ballot in my county →</a></p>` }))

const dates = [
  ['Voter registration deadline', 'Monday, October 5, 2026 (closed)'],
  ['Early in-person voting', 'October 6 through noon Monday, November 2, 2026'],
  ['Absentee-by-mail application deadline', 'Thursday, October 22, 2026 (closed)'],
  ['Election Day', `Tuesday, ${ELECTION} · polls open 6 a.m.–6 p.m. local time`],
  ['Absentee ballot return', 'Must be received by your county election office by 6 p.m. on Election Day'],
]
write('key-dates', layout({ url: `${SITE}/indiana/key-dates/`, title: 'Indiana election key dates 2026: early voting, absentee deadline, Election Day hours', description: `Indiana ${ELECTION} general election: early voting through noon Nov 2, absentee applications closed Oct 22, polls open 6 a.m.–6 p.m. local time on Election Day.`, pageType: 'key-dates', breadcrumbs: [{ name: 'Indiana', url: `${SITE}/indiana/` }, { name: 'Key dates', url: `${SITE}/indiana/key-dates/` }], jsonld: [faq(dates.map(([q, a]) => [`Indiana 2026: ${q}?`, a]))], body: `<h1>Indiana 2026 election — key dates &amp; deadlines</h1><p class="lede">General election Tuesday, ${ELECTION}.</p><ul class="dates">${dates.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Plan your vote in two minutes.', `${SITE}/ballot?utm_source=seo&utm_medium=key-dates&utm_campaign=in`)}` }))

write('', layout({ url: `${SITE}/indiana/`, title: `Indiana sample ballot 2026 by county — what's on the ${ELECTION} ballot`, description: `Every race and public question on Indiana's ${ELECTION} ballot for all ${counties.length} counties — township, town, school board, county, state legislature, Congress and statewide offices — from the Indiana Election Division.`, pageType: 'state', body: `<h1>Indiana ballot — ${ELECTION}</h1><p class="lede">Pick your county, then your township or town, to see what&#39;s on your ballot. Or jump to <a href="${SITE}/indiana/races/">statewide and district races</a>, ${statewideQs.map(q => `<a href="${q._pageUrl}">${esc(q.name)}</a>`).join(', ')} or <a href="${SITE}/indiana/key-dates/">key dates</a>.</p><p class="links">${counties.map(c => `<a href="${SITE}/indiana/${c.slug}/">${esc(c.county)} County</a>`).join(' · ')}</p>${ctaBox('Faster: enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=state-page&utm_campaign=in`)}` }))

// ───────────────────────── append to the sitemap written by build-seo-pages.mjs ─────────────────────────
const sitemapPath = path.join(ROOT, 'public/sitemap.xml')
const today = new Date().toISOString().slice(0, 10)
const sm = readFileSync(sitemapPath, 'utf8').replace(/\s*<url><loc>https:\/\/www\.offorandbythepeople\.com\/indiana\/[^<]*<\/loc>[^\n]*/g, '')
writeFileSync(sitemapPath, sm.replace('</urlset>', `${pages.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>`))
console.log(`indiana: wrote ${pages.length} pages: ${counties.length} counties, ${races.length} races, ${candidatePages.size} candidates, ${schoolPages.length} school boards, ${statewideQs.length} statewide questions`)
