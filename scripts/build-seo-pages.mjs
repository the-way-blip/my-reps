#!/usr/bin/env node
// Generates static "What's on the ballot in <city/township>" pages from public/data/ballots/*.json
// into public/michigan/<county>/<jurisdiction>/index.html, plus county/state index pages, sitemap.xml
// and robots.txt. Runs before `vite build` so Vercel serves them as static files ahead of the SPA.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'public/data/ballots')
const OUT = path.join(ROOT, 'public/michigan')
const SITE = 'https://www.offorandbythepeople.com'
const ELECTION = 'November 3, 2026'
rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const PARTY = { republican: 'R', democratic: 'D', libertarian: 'Lib', green: 'Green', 'us-taxpayers': 'UST', 'working-class': 'WC', 'natural-law': 'NL', independent: 'Ind' }
const GRADE_COLOR = { A: '#1a7f37', B: '#4f9a3d', C: '#c99a06', D: '#d9641e', F: '#b22234' }

const CSS = `
*{box-sizing:border-box}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:#1a1a2e;background:#f7f7fb;line-height:1.5}
header{background:#0a2342;color:#fff;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
header a{color:#fff;text-decoration:none}header .brand{font-weight:800;font-size:1.1rem}header .cta{background:#b22234;padding:9px 14px;border-radius:8px;font-weight:700}
main{max-width:900px;margin:0 auto;padding:20px}h1{font-size:1.6rem;margin:.2em 0 .3em;color:#0a2342}h2{font-size:1.2rem;margin:1.6em 0 .6em;color:#0a2342;border-bottom:2px solid #b22234;padding-bottom:4px}
.lede{color:#444}.race{background:#fff;border:1px solid #e3e5ee;border-radius:10px;padding:12px 14px;margin:10px 0}.race h3{margin:0 0 2px;font-size:1.02rem}.race .meta{color:#666;font-size:.85rem;margin:0 0 8px}
ul.cands{list-style:none;padding:0;margin:0;display:grid;gap:4px}ul.cands li{display:flex;align-items:center;gap:8px;font-size:.95rem}
.g{display:inline-block;min-width:22px;text-align:center;border-radius:6px;color:#fff;font-weight:800;font-size:.8rem;padding:1px 5px}.nr{background:#c7cad6;color:#333}.p{color:#666;font-size:.8rem}.inc{font-size:.72rem;background:#e8edf5;color:#0a2342;border-radius:999px;padding:1px 7px}
.prop{background:#fff;border:1px solid #e3e5ee;border-left:4px solid #b22234;border-radius:10px;padding:12px 14px;margin:10px 0}.prop h3{margin:0 0 4px;font-size:1.02rem}.prop .tags span{display:inline-block;background:#eef1f7;border-radius:999px;padding:2px 9px;font-size:.78rem;margin:0 6px 6px 0;color:#0a2342}
.yn{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0}.yn div{background:#f4f6fa;border-radius:8px;padding:8px 10px;font-size:.88rem}.yn b{display:block;margin-bottom:2px}.tax{font-size:.88rem;color:#444}
details{margin-top:6px}summary{cursor:pointer;font-size:.85rem;color:#0a2342;font-weight:600}details p{white-space:pre-line;font-size:.85rem;color:#444}
.cta-box{background:#0a2342;color:#fff;border-radius:12px;padding:18px;margin:24px 0;text-align:center}.cta-box a{display:inline-block;background:#b22234;color:#fff;padding:12px 18px;border-radius:8px;font-weight:700;text-decoration:none;margin-top:8px}
.note{font-size:.82rem;color:#666}.links{columns:2;column-gap:24px;font-size:.92rem}.links a{color:#0a2342}footer{padding:24px 20px;text-align:center;color:#666;font-size:.8rem}
@media(max-width:600px){.yn{grid-template-columns:1fr}.links{columns:1}}`

function layout({ title, description, canonical, body, breadcrumbs, pageType }) {
  const bc = breadcrumbs ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: breadcrumbs.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, item: b.url })) })}</script>` : ''
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${canonical}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="article"><meta property="og:url" content="${canonical}"><meta property="og:site_name" content="Of For &amp; By The People">
<link rel="icon" href="/favicon.png">${bc}
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MDN3Z57G');</script>
<script>window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'ballot_page_view',page_type:'${esc(pageType || 'jurisdiction')}'});document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="/ballot"]');if(a){window.dataLayer.push({event:'seo_cta_click',link_url:a.href})}},true);</script>
<style>${CSS}</style></head><body>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDN3Z57G" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<header><a class="brand" href="${SITE}/">Of For &amp; By The People</a><a class="cta" href="${SITE}/ballot?utm_source=seo&utm_medium=ballot-page">Build my ballot →</a></header>
<main>${body}</main>
<footer><p style="max-width:760px;margin:0 auto 10px">Of For &amp; By The People is an independent, personally funded voter-education tool. It has no party or candidate affiliation, is not paid for or authorized by any candidate, party, or political committee, and does not coordinate with any campaign. Grades are our opinion of how each candidate&#39;s public record aligns with constitutional and Christian values.</p>Local races and proposals are taken from the official Michigan Secretary of State sample ballots (<a href="https://mvic.sos.state.mi.us/PublicBallot/Index">Voter Information Center</a>). Grades and summaries are the opinion of Of For &amp; By The People. Always confirm with your own sample ballot.<br>&copy; 2026 Of For &amp; By The People · <a href="${SITE}/privacy">Privacy</a> · <a href="${SITE}/terms">Terms</a></footer>
</body></html>`
}

function candidateLi(c) {
  const g = c.grade ? `<span class="g" style="background:${GRADE_COLOR[c.grade] || '#555'}">${c.grade}</span>` : `<span class="g nr">N/R</span>`
  const p = c.party ? `<span class="p">(${PARTY[c.party] || c.party})</span>` : ''
  const inc = c.status === 'incumbent' ? `<span class="inc">Incumbent</span>` : ''
  const mate = c.runningMate ? `<span class="p">/ ${esc(c.runningMate)}</span>` : ''
  return `<li>${g}<span>${esc(c.name)}</span>${mate}${p}${inc}</li>`
}
function raceHtml(r) {
  return `<div class="race"><h3>${esc(r.office)}</h3><p class="meta">${esc(r.level)} · ${esc(r.description)}${r.note ? ' · ' + esc(r.note) : ''}</p>
<ul class="cands">${r.candidates.map(candidateLi).join('')}</ul></div>`
}
function propHtml(p) {
  const tags = [p.type, p.mills != null ? `${p.mills} mills` : null, p.duration, p.bondAmount, p.estimatedRevenue ? `est. ${p.estimatedRevenue}/yr` : null].filter(Boolean)
  return `<div class="prop"><h3>${esc(p.name)}</h3><div class="tags">${tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
<p>${esc(p.description)}</p>${p.taxImpact ? `<p class="tax"><b>Cost to you:</b> ${esc(p.taxImpact)}</p>` : ''}
<div class="yn"><div><b>YES</b>${esc(p.yesVote)}</div><div><b>NO</b>${esc(p.noVote)}</div></div>
${p.ballotLanguage ? `<details><summary>Official ballot language</summary><p>${esc(p.ballotLanguage)}</p></details>` : ''}
${p.precinctNote ? `<p class="note">${esc(p.precinctNote)}</p>` : ''}</div>`
}

const urls = []
const counties = []
for (const f of readdirSync(DATA).filter(f => f.endsWith('.json') && f !== 'index.json').sort()) {
  const d = JSON.parse(readFileSync(path.join(DATA, f), 'utf8'))
  const countyName = d.county.replace(/ County$/, '')
  const cSlug = slug(countyName)
  const jurs = d.jurisdictions.slice().sort((a, b) => a.name.localeCompare(b.name))
  counties.push({ name: countyName, slug: cSlug, n: jurs.length })
  for (const j of jurs) {
    const jSlug = slug(j.name)
    const url = `${SITE}/michigan/${cSlug}/${jSlug}/`
    urls.push(url)
    const nCands = j.races.reduce((a, r) => a + r.candidates.length, 0)
    const title = `What's on the ballot in ${j.name}, ${countyName} County, MI — ${ELECTION}`
    const description = `${j.name} (${countyName} County) sample ballot for ${ELECTION}: ${j.races.length} local races with ${nCands} candidates and ${j.proposals.length} local proposal${j.proposals.length === 1 ? '' : 's'} — plus Governor, U.S. Senate, Congress, state legislature, Supreme Court and Proposals 26-1 and 26-2. Candidates graded on conservative values.`
    const others = jurs.filter(x => x !== j).map(x => `<a href="${SITE}/michigan/${cSlug}/${slug(x.name)}/">${esc(x.name)}</a>`).join(' · ')
    const body = `
<p class="note"><a href="${SITE}/michigan/">Michigan</a> › <a href="${SITE}/michigan/${cSlug}/">${esc(countyName)} County</a> › ${esc(j.name)}</p>
<h1>What's on the ballot in ${esc(j.name)}, ${esc(countyName)} County</h1>
<p class="lede">Michigan General Election · Tuesday, ${ELECTION} · Polls open 7 a.m.–8 p.m. · Early voting Oct 24–Nov 1. This page lists every local race and proposal on the official ${esc(j.name)} sample ballot${j.precincts > 1 ? ` (${j.precincts} precincts${j.ballotVariants > 1 ? '; some items vary by precinct' : ''})` : ''}. Enter your address in the app to see your exact ballot with every candidate graded.</p>
<div class="cta-box"><strong>See every candidate on your ballot, graded on faith, family and the Constitution.</strong><br><a href="${SITE}/ballot?utm_source=seo&utm_medium=ballot-page&utm_campaign=${cSlug}-${jSlug}">Build my ballot for ${esc(j.name)} →</a></div>
<h2>Statewide &amp; federal races (every Michigan ballot)</h2>
<div class="race"><p class="meta">Governor &amp; Lt. Governor · Secretary of State · Attorney General · U.S. Senate · U.S. House · State Senate · State House · State Board of Education · U-M Regents · MSU Trustees · Wayne State Governors · Michigan Supreme Court (2 seats) · <b>Proposal 26-1</b> (constitutional convention) · <b>Proposal 26-2</b> (ban utility &amp; contractor campaign contributions). <a href="${SITE}/ballot?utm_source=seo&utm_medium=ballot-page">See the graded candidates →</a></p></div>
<h2>Local races in ${esc(j.name)} (${j.races.length})</h2>
${j.races.length ? j.races.map(raceHtml).join('') : '<p class="note">No local races beyond the statewide ballot.</p>'}
<h2>Local proposals &amp; millages (${j.proposals.length})</h2>
${j.proposals.length ? j.proposals.map(propHtml).join('') : '<p class="note">No local proposals on this ballot.</p>'}
<div class="cta-box"><strong>Plan your vote in two minutes.</strong><br><a href="${SITE}/ballot?utm_source=seo&utm_medium=ballot-page&utm_campaign=${cSlug}-${jSlug}">Open the free ballot builder →</a></div>
<h2>Other communities in ${esc(countyName)} County</h2><p class="links">${others}</p>`
    mkdirSync(path.join(OUT, cSlug, jSlug), { recursive: true })
    writeFileSync(path.join(OUT, cSlug, jSlug, 'index.html'), layout({ title, description, canonical: url, body, breadcrumbs: [{ name: 'Michigan', url: `${SITE}/michigan/` }, { name: `${countyName} County`, url: `${SITE}/michigan/${cSlug}/` }, { name: j.name, url }], pageType: 'jurisdiction' }))
  }
  // county index
  const cUrl = `${SITE}/michigan/${cSlug}/`
  urls.push(cUrl)
  const props = jurs.reduce((a, j) => a + j.proposals.length, 0)
  writeFileSync(path.join(OUT, cSlug, 'index.html'), layout({
    title: `${countyName} County, MI ballot — ${ELECTION}: every city & township`,
    description: `What's on the ballot in ${countyName} County, Michigan for ${ELECTION}: local races, candidates and ${props} local proposals for all ${jurs.length} cities and townships, plus statewide races.`,
    canonical: cUrl, pageType: 'county',
    body: `<p class="note"><a href="${SITE}/michigan/">Michigan</a> › ${esc(countyName)} County</p><h1>${esc(countyName)} County ballot — ${ELECTION}</h1><p class="lede">Choose your city or township to see every local race and proposal on your official sample ballot.</p><p class="links">${jurs.map(j => `<a href="${SITE}/michigan/${cSlug}/${slug(j.name)}/">${esc(j.name)}</a>`).join(' · ')}</p><div class="cta-box"><strong>Or enter your address and get your exact ballot, graded.</strong><br><a href="${SITE}/ballot?utm_source=seo&utm_medium=county-page">Build my ballot →</a></div>`,
  }))
}
// state index
const sUrl = `${SITE}/michigan/`
urls.push(sUrl)
writeFileSync(path.join(OUT, 'index.html'), layout({
  title: `Michigan ballot by county — ${ELECTION} General Election`,
  description: `Every local race and proposal on the ${ELECTION} ballot for all 83 Michigan counties and ${counties.reduce((a, c) => a + c.n, 0)} cities and townships, from the official Secretary of State sample ballots.`,
  canonical: sUrl, pageType: 'state',
  body: `<h1>Michigan ballot — ${ELECTION}</h1><p class="lede">Pick your county, then your city or township, to see what's on your ballot.</p><p class="links">${counties.map(c => `<a href="${SITE}/michigan/${c.slug}/">${esc(c.name)} County</a>`).join(' · ')}</p><div class="cta-box"><strong>Faster: enter your address.</strong><br><a href="${SITE}/ballot?utm_source=seo&utm_medium=state-page">Build my ballot →</a></div>`,
}))
writeFileSync(path.join(ROOT, 'public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[`${SITE}/`, `${SITE}/ballot`, `${SITE}/welcome`, ...urls].map(u => `  <url><loc>${u}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>`).join('\n')}\n</urlset>\n`)
writeFileSync(path.join(ROOT, 'public/robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`wrote ${urls.length} pages + sitemap`)
