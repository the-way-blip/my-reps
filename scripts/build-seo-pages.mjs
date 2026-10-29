#!/usr/bin/env node
// Static SEO pages for the November 3, 2026 Michigan ballot, generated into public/michigan/… before
// `vite build` (Vercel serves them ahead of the SPA). Run: node --import ./scripts/ext-loader.mjs scripts/build-seo-pages.mjs
//   /michigan/                              state index
//   /michigan/<county>/                     county index
//   /michigan/<county>/<jurisdiction>/      every city/township sample ballot (local races + proposals)
//   /michigan/<county>/proposals/<slug>/    every local proposal / millage / bond
//   /michigan/school-boards/<district>/     every school board race
//   /michigan/race/<slug>/                  Governor, U.S. Senate, SoS, AG, boards, Supreme Court, all U.S. House / State Senate / State House districts
//   /michigan/proposal/26-1/ and /26-2/     statewide proposals
//   /michigan/key-dates/                    dates, deadlines, hours
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { SITE, ELECTION, DEFAULT_OG, esc, slug, PARTY, PARTY_LONG, GRADE_COLOR, ISSUES, DISCLAIMER, makePageWriter, ctaBox, faq, displayName, gradeBadge, otherStateLinks } from './seo-shared.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'public/data/ballots')
const OUT = path.join(ROOT, 'public/michigan')
const { getGeneralBallot, BALLOT_PROPOSALS, GENERAL_INFO } = await import(pathToFileURL(path.join(ROOT, 'src/data/michiganPrimary2026.js')).href)

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })


const { layout, write, pages } = makePageWriter({
  outDir: OUT,
  urlPrefix: 'michigan',
  footerHtml: `Local races and proposals are taken from the official Michigan Secretary of State sample ballots (<a href="https://mvic.sos.state.mi.us/PublicBallot/Index">Voter Information Center</a>). Always confirm with your own sample ballot.<br>&copy; 2026 Of For &amp; By The People · <a href="${SITE}/michigan/">Michigan ballot by county</a> · <a href="${SITE}/michigan/races/">Statewide races</a> · <a href="${SITE}/michigan/key-dates/">Key dates</a> · <a href="${SITE}/michigan/how-to-vote/">How to vote</a> · ${otherStateLinks('michigan')} · <a href="${SITE}/privacy">Privacy</a> · <a href="${SITE}/terms">Terms</a>`,
})

// ───────────────────────── load county data ─────────────────────────
const index = JSON.parse(readFileSync(path.join(DATA, 'index.json'), 'utf8'))
const counties = index.counties.map(c => ({ ...JSON.parse(readFileSync(path.join(DATA, c.file), 'utf8')), name: c.county.replace(/ County$/, '') }))
for (const c of counties) { c.slug = slug(c.name); c.jurisdictions.sort((a, b) => a.name.localeCompare(b.name)) }

// Local proposals (unique per county) and school-board races (unique per district), with where they appear
const localProps = new Map() // key -> { county, p, jurs:Set }
const schoolRaces = new Map() // districtSlug -> { district, races: Map(officeKey -> race), counties:Set, jurs:Set }
for (const c of counties) {
  for (const j of c.jurisdictions) {
    for (const p of j.proposals) {
      const key = `${c.slug}|${slug(p.jurisdiction)}|${slug(p.officialTitle)}`
      if (!localProps.has(key)) localProps.set(key, { county: c, p, jurs: new Set(), pslug: `${slug(p.jurisdiction)}-${slug(p.officialTitle)}`.slice(0, 110).replace(/-$/, '') })
      localProps.get(key).jurs.add(j.name)
      p._pageUrl = `${SITE}/michigan/${c.slug}/proposals/${localProps.get(key).pslug}/`
    }
    for (const r of j.races) {
      if (r.level !== 'School Board' || !r.district) continue
      const ds = slug(r.district)
      if (!schoolRaces.has(ds)) schoolRaces.set(ds, { district: r.district, races: new Map(), counties: new Set(), jurs: new Set() })
      const e = schoolRaces.get(ds)
      const ok = `${r.office}|${r.seats}|${r.candidates.map(x => x.name).sort().join('~')}`
      if (!e.races.has(ok)) e.races.set(ok, r)
      e.counties.add(c.name); e.jurs.add(`${j.name} (${c.name} County)`)
      r._pageUrl = `${SITE}/michigan/school-boards/${ds}/`
    }
  }
}
// de-duplicate proposal slugs within a county
{
  const seen = new Set()
  for (const e of localProps.values()) { let s = `${e.county.slug}/${e.pslug}`, n = 2; while (seen.has(s)) { e.pslug = `${e.pslug}-${n++}`; s = `${e.county.slug}/${e.pslug}` } seen.add(s); e.p._pageUrl = `${SITE}/michigan/${e.county.slug}/proposals/${e.pslug}/` }
}

// ───────────────────────── render helpers ─────────────────────────
function candidateLi(c) {
  const p = c.party ? `<span class="p">(${PARTY[c.party] || c.party})</span>` : ''
  const inc = c.status === 'incumbent' ? `<span class="inc">Incumbent</span>` : c.status === 'withdrawn' ? `<span class="inc">Withdrew</span>` : ''
  const mate = c.runningMate ? `<span class="p">/ ${esc(c.runningMate)}</span>` : ''
  return `<li>${gradeBadge(c.grade)}<span>${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}</span>${mate}${p}${inc}</li>`
}
function raceHtml(r) {
  const title = r._pageUrl ? `<a href="${r._pageUrl}" style="color:#0a2342">${esc(r.office)}</a>` : esc(r.office)
  return `<div class="race"><h3>${title}</h3><p class="meta">${esc(r.level)} · ${esc(r.description)}${r.note ? ' · ' + esc(r.note) : ''}</p><ul class="cands">${r.candidates.map(candidateLi).join('')}</ul></div>`
}
function propTags(p) { return [p.type, p.mills != null ? `${p.mills} mills` : null, p.duration, p.bondAmount, p.estimatedRevenue ? `est. ${p.estimatedRevenue}/yr` : null].filter(Boolean).map(t => `<span>${esc(t)}</span>`).join('') }
function propHtml(p, link = true) {
  return `<div class="prop"><h3>${link && p._pageUrl ? `<a href="${p._pageUrl}">${esc(p.name)}</a>` : esc(p.name)}</h3><div class="tags">${propTags(p)}</div>
<p>${esc(p.description)}</p>${p.taxImpact ? `<p class="tax"><b>Cost to you:</b> ${esc(p.taxImpact)}</p>` : ''}
<div class="yn"><div><b>YES</b>${esc(p.yesVote)}</div><div><b>NO</b>${esc(p.noVote)}</div></div>
${p.ballotLanguage ? `<details><summary>Official ballot language</summary><p>${esc(p.ballotLanguage)}</p></details>` : ''}${p.precinctNote ? `<p class="note">${esc(p.precinctNote)}</p>` : ''}</div>`
}
function fullCandidate(c) {
  const party = c.party ? PARTY_LONG[c.party] || c.party : ''
  const issues = c.positions ? `<div class="issues">${Object.entries(ISSUES).map(([k, l]) => `<span>${l}<b>${esc(c.positions[k] || '–')}</b></span>`).join('')}</div>` : ''
  const kp = Array.isArray(c.keyPositions) && c.keyPositions.length ? `<ul>${c.keyPositions.slice(0, 6).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''
  const end = Array.isArray(c.endorsements) && c.endorsements.length ? `<p class="note"><b>Endorsements:</b> ${c.endorsements.slice(0, 8).map(esc).join(', ')}</p>` : ''
  const links = [c.website ? `<a href="${esc(c.website)}" rel="nofollow noopener" target="_blank">Campaign site</a>` : '', `<a href="https://ballotpedia.org/wiki/index.php?search=${encodeURIComponent(c.name + ' Michigan')}" rel="nofollow noopener" target="_blank">Ballotpedia</a>`].filter(Boolean).join('')
  return `<div class="cand"><h3>${gradeBadge(c.grade)}${c._pageUrl ? `<a href="${c._pageUrl}" style="color:#0a2342">${esc(c.name)}</a>` : esc(c.name)}${party ? `<span class="p">${esc(party)}</span>` : ''}${c.status === 'incumbent' ? '<span class="inc">Incumbent</span>' : ''}</h3>${c.description ? `<p class="desc">${esc(c.description)}</p>` : ''}${issues}${c.bio ? `<p class="bio">${esc(c.bio)}</p>` : ''}${kp}${end}<p class="links">${links}</p></div>`
}

// ───────────────────────── statewide + district races ─────────────────────────
const raceMap = new Map()
function collect(d) { for (const r of getGeneralBallot(d)) if (!raceMap.has(r.id)) raceMap.set(r.id, r) }
for (let cd = 1; cd <= 13; cd++) collect({ congressional: cd, stateSenate: 1, stateHouse: 1 })
for (let s = 1; s <= 38; s++) collect({ congressional: 1, stateSenate: s, stateHouse: 1 })
for (let h = 1; h <= 110; h++) collect({ congressional: 1, stateSenate: 1, stateHouse: h })
const raceSlug = id => slug(id.replace(/([a-z])([A-Z])/g, '$1-$2'))
const raceOrder = ['governor', 'us-senate', 'secretaryOfState', 'attorneyGeneral', 'supreme-court', 'stateBoardOfEd', 'umRegents', 'msuTrustees', 'wayneStateGovernors']
const races = [...raceMap.values()].sort((a, b) => {
  const ia = raceOrder.indexOf(a.id), ib = raceOrder.indexOf(b.id)
  if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
  const num = s => parseInt((s.match(/\d+/) || ['0'])[0], 10)
  const grp = s => s.startsWith('us-house') ? 1 : s.startsWith('state-senate') ? 2 : 3
  return grp(a.id) - grp(b.id) || num(a.id) - num(b.id)
})
for (const r of races) r._pageUrl = `${SITE}/michigan/race/${raceSlug(r.id)}/`
const raceCommunities = new Map() // raceId -> [{ name, url }]
function districtRacesFor(j) {
  const d = j.districts || {}
  const ids = [...(d.congressional || []).map(n => `us-house-${n}`), ...(d.stateSenate || []).map(n => `state-senate-${n}`), ...(d.stateHouse || []).map(n => `state-house-${n}`)]
  return ids.map(id => raceMap.get(id)).filter(Boolean)
}
function topRacesHtml() {
  const ids = ['governor', 'us-senate', 'secretaryOfState', 'attorneyGeneral']
  return ids.map(id => raceMap.get(id)).filter(Boolean).map(r => `<div class="race"><h3><a href="${r._pageUrl}" style="color:#0a2342">${esc(r.office)}</a></h3><ul class="cands">${r.candidates.filter(c => c.party === 'republican' || c.party === 'democratic' || c.party === 'independent' || c.grade).map(candidateLi).join('')}</ul></div>`).join('')
}
const candidatePages = new Map() // slug -> { c, race }
for (const r of races) for (const c of r.candidates) {
  if (!c.name || (!c.grade && !c.bio && !c.description)) continue
  let cs = slug(c.name)
  if (candidatePages.has(cs) && candidatePages.get(cs).race !== r) cs = `${cs}-${raceSlug(r.id)}`
  if (!candidatePages.has(cs)) candidatePages.set(cs, { c, race: r })
  c._pageUrl = `${SITE}/michigan/candidate/${cs}/`
}
const raceLinkList = rs => `<ul class="links">${rs.map(r => `<li><a href="${r._pageUrl}">${esc(r.office)}</a></li>`).join('')}</ul>`
function renderRacePages() { for (const r of races) {
  const graded = r.candidates.filter(c => c.grade).length
  const names = r.candidates.map(c => c.name + (c.party ? ` (${PARTY[c.party] || c.party})` : '')).join(', ')
  const title = `${r.office} — Michigan 2026 candidates, graded | ${ELECTION}`
  const description = `${r.office} on Michigan's ${ELECTION} ballot: ${names}. ${graded ? `${graded} of ${r.candidates.length} candidates graded A–F` : `${r.candidates.length} candidates`} on constitutional and Christian values, with positions, endorsements and campaign links.`
  const body = `<h1>${esc(r.office)} — Michigan 2026</h1><p class="lede">${esc(r.description || '')}${r.note ? ' ' + esc(r.note) : ''} ${r.candidates.length} candidates on the ${ELECTION} general election ballot. Grades reflect each candidate&#39;s public record on life, family, religious liberty, the Second Amendment, limited government and fiscal responsibility.</p>
${ctaBox('See this race on your own ballot — with every local race and proposal.', `${SITE}/ballot?utm_source=seo&utm_medium=race&utm_campaign=${raceSlug(r.id)}`)}
<h2>Candidates</h2>${r.candidates.map(fullCandidate).join('')}
${raceCommunities.get(r.id)?.length ? `<h2>Communities in this district</h2><p class="links">${raceCommunities.get(r.id).map(x => `<a href="${x.url}">${esc(x.name)}</a>`).join(' · ')}</p>` : ''}<h2>More Michigan 2026 races</h2>${raceLinkList(races.filter(x => x !== r).slice(0, 12))}<p><a href="${SITE}/michigan/races/">All statewide, congressional and legislative races →</a> · <a href="${SITE}/michigan/">Find your county&#39;s local ballot →</a></p>`
  write(`race/${raceSlug(r.id)}`, layout({ url: r._pageUrl, title, description, body, pageType: 'race', breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: 'Races', url: `${SITE}/michigan/races/` }, { name: r.office, url: r._pageUrl }], jsonld: [faq([[`Who is running for ${r.office} in Michigan in 2026?`, `${names}. The general election is ${ELECTION}.`], [`When is the Michigan 2026 general election?`, `Tuesday, ${ELECTION}. Polls are open 7 a.m. to 8 p.m. Early voting runs October 24 – November 1.`]])] }))
} }
write('races', layout({ url: `${SITE}/michigan/races/`, title: `Michigan 2026 election: every statewide, congressional and legislative race, graded`, description: `Governor, U.S. Senate, Secretary of State, Attorney General, Supreme Court, university boards, all 13 U.S. House seats, 38 State Senate and 110 State House districts on the ${ELECTION} Michigan ballot — candidates graded on constitutional and Christian values.`, pageType: 'races-hub', breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: 'Races', url: `${SITE}/michigan/races/` }], body: `<h1>Michigan 2026 races — every candidate, graded</h1><p class="lede">General election ${ELECTION}. Pick a race, or <a href="${SITE}/ballot?utm_source=seo&utm_medium=races-hub">enter your address</a> to see only the races on your ballot.</p>
<h2>Statewide</h2>${raceLinkList(races.filter(r => !/^(us-house|state-senate|state-house)/.test(r.id)))}
<h2>U.S. House</h2>${raceLinkList(races.filter(r => r.id.startsWith('us-house')))}
<h2>State Senate</h2>${raceLinkList(races.filter(r => r.id.startsWith('state-senate')))}
<h2>State House</h2>${raceLinkList(races.filter(r => r.id.startsWith('state-house')))}
<h2>Ballot proposals</h2><ul class="links">${BALLOT_PROPOSALS.map(p => `<li><a href="${SITE}/michigan/proposal/${slug(p.number || p.name)}/">${esc(p.name)}</a></li>`).join('')}</ul>${ctaBox('Two minutes to a complete ballot plan.', `${SITE}/ballot?utm_source=seo&utm_medium=races-hub`)}` }))

// ───────────────────────── statewide proposals ─────────────────────────
for (const p of BALLOT_PROPOSALS) {
  const ps = slug(p.number || p.name)
  const url = `${SITE}/michigan/proposal/${ps}/`
  const title = `Michigan ${p.number || p.name} explained — what a YES or NO vote means (${ELECTION})`
  const description = `${p.name}: ${p.description.slice(0, 150)}… Plain-English summary, official ballot language, and the conservative and progressive case.`
  write(`proposal/${ps}`, layout({ url, title, description, pageType: 'proposal', breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: 'Races', url: `${SITE}/michigan/races/` }, { name: p.number || p.name, url }], jsonld: [faq([[`What is Michigan ${p.number}?`, p.description], [`What does a YES vote on ${p.number} mean?`, p.yesVote], [`What does a NO vote on ${p.number} mean?`, p.noVote]])], body: `<h1>${esc(p.name)}</h1><p class="lede">${esc(p.officialTitle || '')}</p><div class="prop"><div class="tags"><span>${esc(p.type)}</span><span>Statewide</span></div><p>${esc(p.description)}</p><div class="yn"><div><b>YES</b>${esc(p.yesVote)}</div><div><b>NO</b>${esc(p.noVote)}</div></div>${p.ballotLanguage ? `<details open><summary>Official ballot language</summary><p>${esc(p.ballotLanguage)}</p></details>` : ''}</div>
<h2>The conservative case</h2><p>${esc(p.conservativeView)}</p><h2>The progressive case</h2><p>${esc(p.progressiveView)}</p>${p.recommendation ? `<p class="note"><b>Our note:</b> ${esc(p.recommendation)}</p>` : ''}
${ctaBox('See both proposals plus every race on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=proposal&utm_campaign=${ps}`)}<p><a href="${SITE}/michigan/races/">All Michigan 2026 races →</a></p>` }))
}

// ───────────────────────── key dates ─────────────────────────
{
  const url = `${SITE}/michigan/key-dates/`
  const dates = [
    ['Registration (online / by mail)', 'Closed October 19, 2026. You can still register in person at your city or township clerk through 8 p.m. on Election Day with proof of residency — and vote at the same time.'],
    ['Early in-person voting', 'October 24 – November 1, 2026 (at least 9 days; some communities started earlier). Hours vary by site — check your clerk.'],
    ['Absentee ballot request by mail', 'Friday, October 30, 2026 at 5 p.m. After that, request one in person at your clerk through Monday, November 2 at 4 p.m.'],
    ['Returning an absentee ballot', 'Don’t mail it in the final week. Return it to your clerk’s office or an official drop box by 8 p.m. on November 3.'],
    ['Election Day', 'Tuesday, November 3, 2026. Polls open 7 a.m. to 8 p.m. If you are in line by 8 p.m., you can vote. Bring photo ID (or sign the affidavit if you don’t have it).'],
  ]
  write('key-dates', layout({ url, title: `Michigan election key dates 2026: early voting, absentee deadline, Election Day hours`, description: `Michigan ${ELECTION} general election: early voting October 24–November 1, absentee request deadline October 30 at 5 p.m., polls open 7 a.m.–8 p.m. on Election Day, same-day registration at your clerk.`, pageType: 'key-dates', breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: 'Key dates', url }], jsonld: [faq(dates.map(([q, a]) => [`Michigan 2026: ${q}?`, a]))], body: `<h1>Michigan 2026 election — key dates &amp; deadlines</h1><p class="lede">General election Tuesday, ${ELECTION}.</p><ul class="dates">${dates.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
<h2>Where do I vote?</h2><p>Look up your polling place, early-voting site and drop boxes at the <a href="https://mvic.sos.state.mi.us/Voter/Index">Michigan Voter Information Center</a>, or enter your address in our ballot builder to see your races and polling place together.</p>
${ctaBox('See everything on your ballot before you go.', `${SITE}/ballot?utm_source=seo&utm_medium=key-dates`)}<p><a href="${SITE}/michigan/">What&#39;s on the ballot in my county →</a> · <a href="${SITE}/michigan/races/">Statewide races →</a></p>` }))
}

// ───────────────────────── school boards ─────────────────────────
for (const [ds, e] of [...schoolRaces.entries()].sort((a, b) => a[1].district.localeCompare(b[1].district))) {
  const url = `${SITE}/michigan/school-boards/${ds}/`
  const rs = [...e.races.values()]
  const cands = [...new Set(rs.flatMap(r => r.candidates.map(c => c.name)))]
  const title = `${e.district} school board candidates 2026 — ${[...e.counties].join(' / ')} County | ${ELECTION}`
  const description = `${e.district} Board of Education election ${ELECTION}: ${cands.slice(0, 8).join(', ')}${cands.length > 8 ? ' and more' : ''}. Candidates graded on parental rights, academics and fiscal discipline.`
  const body = `<h1>${esc(e.district)} — school board election 2026</h1><p class="lede">On the ${ELECTION} ballot in ${[...e.jurs].slice(0, 12).map(esc).join(', ')}${e.jurs.size > 12 ? ` and ${e.jurs.size - 12} more communities` : ''}.</p>
${rs.map(r => `<div class="race"><h3>${esc(r.office)}</h3><p class="meta">${esc(r.description)}</p>${r.candidates.map(c => c.grade || c.description ? fullCandidate(c) : `<ul class="cands">${candidateLi(c)}</ul>`).join('')}</div>`).join('')}
${ctaBox('See this race with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=school-board&utm_campaign=${ds}`)}<p><a href="${SITE}/michigan/${slug([...e.counties][0])}/">${esc([...e.counties][0])} County ballot →</a></p>`
  write(`school-boards/${ds}`, layout({ url, title, description, body, pageType: 'school-board', breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: `${[...e.counties][0]} County`, url: `${SITE}/michigan/${slug([...e.counties][0])}/` }, { name: e.district, url }], jsonld: [faq([[`Who is running for the ${e.district} school board in 2026?`, cands.join(', ')]])] }))
}


// Election-week logistics block on every community page ("where do I vote in X", "polls close", etc.)
function votingInHtml(dn) {
  return `<h2>Voting in ${esc(dn)}</h2><ul class="dates">
<li><b>Election Day</b>Tuesday, ${ELECTION} · polls open 7 a.m.–8 p.m. If you're in line by 8 p.m., you can vote.</li>
<li><b>Where to vote</b>Look up your ${esc(dn)} polling place, early-voting site and drop boxes at the <a href="https://mvic.sos.state.mi.us/Voter/Index" rel="noopener">Michigan Voter Information Center</a>.</li>
<li><b>Early voting</b>October 24 – November 1, 2026 at sites set by your clerk.</li>
<li><b>Absentee ballots</b>Must reach the ${esc(dn)} clerk or a drop box by 8 p.m. on Election Day. Too late to mail safely — drop it off.</li>
<li><b>Not registered?</b>Register and vote the same day at the ${esc(dn)} clerk's office with proof of residency.</li>
<li><b>ID</b>Bring a photo ID, or sign an affidavit if you don't have one. <a href="${SITE}/michigan/how-to-vote/">Full checklist →</a></li>
</ul>`
}

// ───────────────────────── counties, jurisdictions, local proposals ─────────────────────────
for (const c of counties) {
  const cUrl = `${SITE}/michigan/${c.slug}/`
  const ogCounty = existsSync(path.join(ROOT, 'public/og/county', `${c.slug}.jpg`)) ? `${SITE}/og/county/${c.slug}.jpg` : DEFAULT_OG
  const cProps = [...localProps.values()].filter(e => e.county === c).sort((a, b) => b.jurs.size - a.jurs.size)
  for (const j of c.jurisdictions) {
    const jSlug = slug(j.name)
    const url = `${cUrl}${jSlug}/`
    const nCands = j.races.reduce((a, r) => a + r.candidates.length, 0)
    const dn = displayName(j.name)
    const dRaces = districtRacesFor(j)
    for (const r of dRaces) { if (!raceCommunities.has(r.id)) raceCommunities.set(r.id, []); raceCommunities.get(r.id).push({ name: `${dn} (${c.name} Co.)`, url }) }
    const distLabel = dRaces.map(r => r.office.replace(/ — District /, ' ')).join(', ')
    const title = `What's on the ballot in ${dn}, MI (${c.name} County) — ${ELECTION}`
    const description = `${dn} (${c.name} County) sample ballot for ${ELECTION}${distLabel ? ` — ${distLabel}` : ''}: ${j.races.length} local races with ${nCands} candidates and ${j.proposals.length} local proposal${j.proposals.length === 1 ? '' : 's'} — plus Governor, U.S. Senate, Congress, state legislature, Supreme Court and Proposals 26-1 and 26-2. Candidates graded on conservative values.`
    const others = c.jurisdictions.filter(x => x !== j).map(x => `<a href="${cUrl}${slug(x.name)}/">${esc(displayName(x.name))}</a>`).join(' · ')
    const body = `<h1>What's on the ballot in ${esc(dn)}, ${esc(c.name)} County</h1>
<p class="lede">Michigan General Election · Tuesday, ${ELECTION} · Polls open 7 a.m.–8 p.m. · <a href="${SITE}/michigan/key-dates/">Early voting Oct 24–Nov 1</a>. Every local race and proposal on the official ${esc(j.name)} sample ballot${j.precincts > 1 ? ` (${j.precincts} precincts${j.ballotVariants > 1 ? '; some items vary by precinct' : ''})` : ''}. Enter your address in the app to see your exact ballot with every candidate graded.</p>
${ctaBox(`See every candidate on your ${esc(j.name)} ballot, graded on faith, family and the Constitution.`, `${SITE}/ballot?utm_source=seo&utm_medium=ballot-page&utm_campaign=${c.slug}-${jSlug}`)}
${dRaces.length ? `<h2>Your district races</h2>${dRaces.map(r => `<div class="race"><h3><a href="${r._pageUrl}" style="color:#0a2342">${esc(r.office)}</a></h3><ul class="cands">${r.candidates.map(candidateLi).join('')}</ul></div>`).join('')}${dRaces.length > 3 ? '<p class="note">This community is split between districts — your address determines which appear on your ballot.</p>' : ''}` : ''}<h2>Statewide races (every Michigan ballot)</h2>${topRacesHtml()}<div class="race"><p class="meta">Also on your ballot: ${races.filter(r => !/^(us-house|state-senate|state-house)/.test(r.id)).map(r => `<a href="${r._pageUrl}" style="color:#0a2342">${esc(r.office)}</a>`).join(' · ')} · <a href="${SITE}/michigan/proposal/proposal-26-1/" style="color:#0a2342"><b>Proposal 26-1</b></a> · <a href="${SITE}/michigan/proposal/proposal-26-2/" style="color:#0a2342"><b>Proposal 26-2</b></a> · <a href="${SITE}/michigan/races/" style="color:#0a2342">all district races</a>.</p></div>
<h2>Local races in ${esc(j.name)} (${j.races.length})</h2>${j.races.length ? j.races.map(raceHtml).join('') : '<p class="note">No local races beyond the statewide ballot.</p>'}
<h2>Local proposals &amp; millages (${j.proposals.length})</h2>${j.proposals.length ? j.proposals.map(p => propHtml(p)).join('') : '<p class="note">No local proposals on this ballot.</p>'}
${votingInHtml(dn)}
${ctaBox('Plan your vote in two minutes.', `${SITE}/ballot?utm_source=seo&utm_medium=ballot-page&utm_campaign=${c.slug}-${jSlug}`)}
<h2>Other communities in ${esc(c.name)} County</h2><p class="links">${others}</p>`
    write(`${c.slug}/${jSlug}`, layout({ url, title, description, body, pageType: 'jurisdiction', ogImage: ogCounty, breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: `${c.name} County`, url: cUrl }, { name: dn, url }], jsonld: [faq([[`What is on the ballot in ${dn}, Michigan on November 3, 2026?`, `${j.races.length} local races (${nCands} candidates) and ${j.proposals.length} local proposals, plus Governor, U.S. Senate, U.S. House, State Senate, State House, Michigan Supreme Court, university boards and statewide Proposals 26-1 and 26-2.`], [`When is early voting in ${j.name}?`, 'Early in-person voting in Michigan runs October 24 – November 1, 2026; hours and locations are set by your city or township clerk.'], [`Where do I vote in ${j.name}?`, 'Find your polling place, early-voting site and drop boxes at the Michigan Voter Information Center (mvic.sos.state.mi.us) or by entering your address at offorandbythepeople.com.'], [`What time do polls open and close in ${dn} on Election Day?`, `Polls in ${dn} are open 7 a.m. to 8 p.m. on Tuesday, ${ELECTION}. Anyone in line at 8 p.m. can still vote.`], [`Can I register and vote on Election Day in ${dn}?`, `Yes. Michigan allows same-day registration: go to the ${dn} clerk's office with proof of residency (a driver's license, utility bill, bank statement or paycheck with your address), register, and vote there.`], [`When is the absentee ballot deadline in ${dn}?`, `Absentee ballots must be received by the ${dn} clerk (or a clerk drop box) by 8 p.m. on Election Day, ${ELECTION}. Mailing after October 27 is risky — drop it off instead.`]])] }))
  }
  for (const e of cProps) {
    const p = e.p
    const title = `${p.name} — ${p.jurisdiction} ballot proposal, ${ELECTION}`
    const description = `${p.jurisdiction} (${c.name} County): ${p.type}${p.mills != null ? `, ${p.mills} mills` : ''}${p.bondAmount ? `, ${p.bondAmount}` : ''}. What a YES or NO vote means, what it costs, and the full official ballot language.`
    const body = `<h1>${esc(p.name)}</h1><p class="lede">${esc(p.jurisdiction)} · ${esc(c.name)} County · on the ${ELECTION} ballot in ${[...e.jurs].slice(0, 10).map(esc).join(', ')}${e.jurs.size > 10 ? ` and ${e.jurs.size - 10} more` : ''}.</p>${propHtml(p, false)}
<h2>How we grade proposals</h2><p>Plain-English summaries and the YES/NO explanations are ours; the ballot language above is the official text from the Michigan Secretary of State sample ballot. Confirm with your clerk if anything differs on your ballot.</p>
${ctaBox('See this proposal with everything else on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=local-proposal&utm_campaign=${c.slug}`)}<p><a href="${cUrl}">${esc(c.name)} County ballot →</a></p>`
    write(`${c.slug}/proposals/${e.pslug}`, layout({ url: p._pageUrl, title, description, body, pageType: 'local-proposal', ogImage: ogCounty, breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: `${c.name} County`, url: cUrl }, { name: p.name, url: p._pageUrl }], jsonld: [faq([[`What does a YES vote on the ${p.name} mean?`, p.yesVote], [`What does a NO vote on the ${p.name} mean?`, p.noVote]])] }))
  }
  const cSchools = [...schoolRaces.entries()].filter(([, e]) => e.counties.has(c.name)).map(([ds, e]) => `<li><a href="${SITE}/michigan/school-boards/${ds}/">${esc(e.district)}</a></li>`).join('')
  write(c.slug, layout({ url: cUrl, title: `${c.name} County, MI sample ballot 2026 — every city, township & proposal (${ELECTION})`, description: `What's on the ballot in ${c.name} County, Michigan for ${ELECTION}: local races, candidates, ${cProps.length} local proposals and millages for all ${c.jurisdictions.length} cities and townships, school board races, plus statewide races.`, pageType: 'county', ogImage: ogCounty, breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: `${c.name} County`, url: cUrl }], body: `<h1>${esc(c.name)} County ballot — ${ELECTION}</h1><p class="lede">Choose your city or township to see every local race and proposal on your official sample ballot.</p><p class="links">${c.jurisdictions.map(j => `<a href="${cUrl}${slug(j.name)}/">${esc(displayName(j.name))}</a>`).join(' · ')}</p>
<h2>Proposals &amp; millages in ${esc(c.name)} County (${cProps.length})</h2><ul class="links">${cProps.map(e => `<li><a href="${e.p._pageUrl}">${esc(e.p.name)}</a> <span class="note">— ${esc(e.p.jurisdiction)}</span></li>`).join('')}</ul>
${cSchools ? `<h2>School board elections</h2><ul class="links">${cSchools}</ul>` : ''}
${ctaBox('Or enter your address and get your exact ballot, graded.', `${SITE}/ballot?utm_source=seo&utm_medium=county-page`)}` }))
}


// ───────────────────────── race pages (need community reverse map) ─────────────────────────
renderRacePages()

// ───────────────────────── candidate pages ─────────────────────────
for (const [cs, { c, race: r }] of candidatePages) {
  const url = c._pageUrl
  const party = c.party ? PARTY_LONG[c.party] || c.party : ''
  const others = r.candidates.filter(x => x !== c)
  const title = `${c.name}${party ? ` (${PARTY[c.party] || party})` : ''} — ${r.office}, Michigan 2026: record, positions${c.grade ? ' & grade' : ''}`
  const description = `${c.name}${party ? `, ${party}` : ''}, is running for ${r.office} on Michigan's ${ELECTION} ballot.${c.grade ? ` Graded ${c.grade} on constitutional and Christian values.` : ''} ${String(c.description || c.bio || '').slice(0, 140)}`
  const vs = others.length ? `<h2>Also running for ${esc(r.office)}</h2><ul class="cands">${others.map(candidateLi).join('')}</ul>` : ''
  const body = `<h1>${esc(c.name)}</h1><p class="lede">${party ? `${esc(party)} candidate` : 'Candidate'} for <a href="${r._pageUrl}">${esc(r.office)}</a> · Michigan General Election, ${ELECTION}.</p>
${fullCandidate({ ...c, _pageUrl: null })}${vs}
${ctaBox('See this race alongside every local race and proposal on your ballot.', `${SITE}/ballot?utm_source=seo&utm_medium=candidate&utm_campaign=${cs}`)}
<p><a href="${r._pageUrl}">Compare all ${esc(r.office)} candidates →</a> · <a href="${SITE}/michigan/races/">All Michigan races →</a></p>`
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: c.name, ...(party ? { affiliation: { '@type': 'Organization', name: `${party} Party` } } : {}), ...(c.website ? { url: c.website } : {}), description: `Candidate for ${r.office} (Michigan, ${ELECTION})` }
  write(`candidate/${cs}`, layout({ url, title, description, body, pageType: 'candidate', breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: r.office, url: r._pageUrl }, { name: c.name, url }], jsonld: [person, faq([[`What office is ${c.name} running for?`, `${r.office} in Michigan, on the ${ELECTION} general election ballot.`], [`Who is running against ${c.name}?`, others.map(x => x.name).join(', ') || 'No other candidates are listed.']])] }))
}

// ───────────────────────── how to vote ─────────────────────────
{
  const url = `${SITE}/michigan/how-to-vote/`
  const qa = [
    ['Am I registered to vote in Michigan?', 'Check at the Michigan Voter Information Center (mvic.sos.state.mi.us). It also shows your polling place, sample ballot and absentee ballot status.'],
    ['Can I still register to vote?', 'Yes. Online and mail registration closed October 19, 2026, but you can register in person at your city or township clerk’s office through 8 p.m. on Election Day with proof of residency, and vote the same day.'],
    ['What ID do I need to vote in Michigan?', 'Bring a photo ID such as a Michigan driver’s license or state ID, passport, military ID, or student ID. If you don’t have one, you can sign an affidavit and still vote a regular ballot.'],
    ['When can I vote early?', 'Early in-person voting runs October 24 – November 1, 2026 at your community’s early-voting site. Hours vary; check with your clerk.'],
    ['How do I return my absentee ballot?', 'In the final week, don’t mail it. Hand it to your city or township clerk or put it in an official drop box by 8 p.m. on Tuesday, November 3. You can track it at mvic.sos.state.mi.us.'],
    ['What are the polling hours on Election Day?', 'Polls are open 7 a.m. to 8 p.m. on Tuesday, November 3, 2026. If you are in line by 8 p.m., you can vote.'],
    ['Can I bring notes into the voting booth?', 'Yes. You may bring a printed or written list of your choices — such as your ballot plan — into the booth.'],
    ['Do I have to vote in every race?', 'No. You can skip any race or proposal; the rest of your ballot still counts.'],
  ]
  write('how-to-vote', layout({ url, title: `How to vote in Michigan 2026: ID, same-day registration, early voting, absentee ballots`, description: `Everything you need to vote in Michigan's ${ELECTION} election: what ID to bring, same-day registration, early voting Oct 24–Nov 1, returning absentee ballots, polling hours and bringing your ballot plan.`, pageType: 'how-to-vote', breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: 'How to vote', url }], jsonld: [faq(qa)], body: `<h1>How to vote in Michigan — ${ELECTION}</h1><p class="lede">A plain-English checklist for the general election.</p><ul class="dates">${qa.map(([q, a]) => `<li><b>${esc(q)}</b>${esc(a)}</li>`).join('')}</ul>
${ctaBox('Know every race before you go — build your ballot plan.', `${SITE}/ballot?utm_source=seo&utm_medium=how-to-vote`)}<p><a href="${SITE}/michigan/key-dates/">Key dates →</a> · <a href="${SITE}/michigan/">What&#39;s on the ballot in my county →</a></p>` }))
}

// ───────────────────────── state index ─────────────────────────
write('', layout({ url: `${SITE}/michigan/`, title: `Michigan sample ballot 2026 by county — what's on the ${ELECTION} ballot`, description: `Every local race and proposal on the ${ELECTION} ballot for all 83 Michigan counties and ${counties.reduce((a, c) => a + c.jurisdictions.length, 0)} cities and townships, plus every statewide, congressional and legislative race — from the official Secretary of State sample ballots.`, pageType: 'state', body: `<h1>Michigan ballot — ${ELECTION}</h1><p class="lede">Pick your county, then your city or township, to see what's on your ballot. Or jump to <a href="${SITE}/michigan/races/">statewide races</a>, <a href="${SITE}/michigan/proposal/proposal-26-1/">Proposal 26-1</a>, <a href="${SITE}/michigan/proposal/proposal-26-2/">Proposal 26-2</a> or <a href="${SITE}/michigan/key-dates/">key dates</a>.</p><p class="links">${counties.map(c => `<a href="${SITE}/michigan/${c.slug}/">${esc(c.name)} County</a>`).join(' · ')}</p>${ctaBox('Faster: enter your address.', `${SITE}/ballot?utm_source=seo&utm_medium=state-page`)}` }))

// ───────────────────────── sitemap + robots ─────────────────────────
const today = new Date().toISOString().slice(0, 10)
writeFileSync(path.join(ROOT, 'public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[`${SITE}/`, `${SITE}/ballot`, `${SITE}/welcome`, `${SITE}/results`, ...pages].map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`)
writeFileSync(path.join(ROOT, 'public/robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`wrote ${pages.length} pages: ${candidatePages.size} candidates, ${races.length} races, ${BALLOT_PROPOSALS.length} statewide proposals, ${localProps.size} local proposals, ${schoolRaces.size} school boards, ${counties.reduce((a, c) => a + c.jurisdictions.length, 0)} jurisdictions, ${counties.length} counties`)
