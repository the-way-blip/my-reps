// Shared pieces of the static SEO pages (one look and footer pattern for every state).
// Used by build-seo-pages.mjs (Michigan) and build-seo-indiana.mjs.
import { writeFileSync, mkdirSync } from 'fs'
import path from 'path'

export const SITE = 'https://www.offorandbythepeople.com'
export const ELECTION = 'November 3, 2026'
export const DEFAULT_OG = `${SITE}/og-image.jpg`
export const GA = 'G-9XXQND8PR2'
// Every state's pages cross-link the other live states' hubs (one place to add a state).
export const STATES = { michigan: 'Michigan', indiana: 'Indiana', iowa: 'Iowa', wisconsin: 'Wisconsin', minnesota: 'Minnesota', ohio: 'Ohio' }
export const otherStateLinks = current => Object.entries(STATES).filter(([k]) => k !== current).map(([k, n]) => `<a href="${SITE}/${k}/">${n} ballot</a>`).join(' · ')

export const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
export const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
export const PARTY = { republican: 'R', democratic: 'D', libertarian: 'Lib', green: 'Green', 'us-taxpayers': 'UST', 'working-class': 'WC', 'natural-law': 'NL', independent: 'Ind', r: 'R', d: 'D', i: 'Ind' }
export const PARTY_LONG = { republican: 'Republican', democratic: 'Democratic', libertarian: 'Libertarian', green: 'Green', 'us-taxpayers': 'U.S. Taxpayers', 'working-class': 'Working Class', 'natural-law': 'Natural Law', independent: 'Independent' }
export const GRADE_COLOR = { A: '#1a7f37', B: '#4f9a3d', C: '#c99a06', D: '#d9641e', F: '#b22234' }
export const ISSUES = { proLife: 'Life', marriage: 'Family', religiousLiberty: 'Religious liberty', secondAmendment: '2nd Amendment', limitedGov: 'Limited gov’t', fiscal: 'Fiscal' }
export const DISCLAIMER = 'Of For &amp; By The People is an independent, personally funded voter-education tool. It has no party or candidate affiliation, is not paid for or authorized by any candidate, party, or political committee, and does not coordinate with any campaign. Grades are our opinion of how each candidate&#39;s public record aligns with constitutional and Christian values.'

export const CSS = `
*{box-sizing:border-box}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:#1a1a2e;background:#f7f7fb;line-height:1.5;font-size:17px}
header{background:#0a2342;color:#fff;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
header a{color:#fff;text-decoration:none}header .brand{font-weight:800;font-size:1.1rem}header .cta{background:#b22234;padding:10px 14px;border-radius:8px;font-weight:700}
main{max-width:900px;margin:0 auto;padding:20px}h1{font-size:1.65rem;margin:.2em 0 .3em;color:#0a2342;line-height:1.25}h2{font-size:1.2rem;margin:1.6em 0 .6em;color:#0a2342;border-bottom:2px solid #b22234;padding-bottom:4px}
.lede{color:#444}.crumbs{font-size:.85rem;color:#666}.crumbs a{color:#0a2342}
.race{background:#fff;border:1px solid #e3e5ee;border-radius:10px;padding:12px 14px;margin:10px 0}.race h3{margin:0 0 2px;font-size:1.05rem}.race .meta{color:#666;font-size:.88rem;margin:0 0 8px}
ul.cands{list-style:none;padding:0;margin:0;display:grid;gap:4px}ul.cands li{display:flex;align-items:center;gap:8px;font-size:.98rem;flex-wrap:wrap}
.g{display:inline-block;min-width:24px;text-align:center;border-radius:6px;color:#fff;font-weight:800;font-size:.82rem;padding:2px 6px}.nr{background:#c7cad6;color:#333}.p{color:#666;font-size:.85rem}.inc{font-size:.74rem;background:#e8edf5;color:#0a2342;border-radius:999px;padding:1px 7px}
.cand{background:#fff;border:1px solid #e3e5ee;border-radius:12px;padding:14px 16px;margin:12px 0}.cand h3{margin:0;font-size:1.15rem;display:flex;align-items:center;gap:10px;flex-wrap:wrap}.cand .desc{color:#444;margin:6px 0}.cand .bio{color:#444;font-size:.95rem}
.issues{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}.issues span{font-size:.78rem;background:#f1f3f8;border-radius:999px;padding:3px 9px;color:#0a2342}.issues b{margin-left:4px}
.cand ul{margin:6px 0 0 18px;padding:0;font-size:.95rem;color:#333}.cand .links a{color:#0a2342;font-size:.9rem;margin-right:12px}
.prop{background:#fff;border:1px solid #e3e5ee;border-left:4px solid #b22234;border-radius:10px;padding:12px 14px;margin:10px 0}.prop h3{margin:0 0 4px;font-size:1.05rem}.prop h3 a{color:#0a2342}.prop .tags span{display:inline-block;background:#eef1f7;border-radius:999px;padding:2px 9px;font-size:.8rem;margin:0 6px 6px 0;color:#0a2342}
.yn{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0}.yn div{background:#f4f6fa;border-radius:8px;padding:8px 10px;font-size:.92rem}.yn b{display:block;margin-bottom:2px}.tax{font-size:.92rem;color:#444}
details{margin-top:6px}summary{cursor:pointer;font-size:.88rem;color:#0a2342;font-weight:600}details p{white-space:pre-line;font-size:.9rem;color:#444}
.cta-box{background:#0a2342;color:#fff;border-radius:12px;padding:18px;margin:24px 0;text-align:center}.cta-box a{display:inline-block;background:#b22234;color:#fff;padding:12px 18px;border-radius:8px;font-weight:700;text-decoration:none;margin-top:8px}.cta-box a.appstore{background:#111;border:1px solid #444;font-size:.95rem}
.note{font-size:.85rem;color:#666}.links{columns:2;column-gap:24px;font-size:.95rem}.links a{color:#0a2342}.links li{margin:2px 0}.dates{list-style:none;padding:0}.dates li{background:#fff;border:1px solid #e3e5ee;border-radius:10px;padding:10px 14px;margin:8px 0}.dates b{display:block;color:#0a2342}
footer{padding:24px 20px;text-align:center;color:#666;font-size:.82rem}footer a{color:#0a2342}
@media(max-width:600px){.yn{grid-template-columns:1fr}.links{columns:1}}
.sticky-cta{display:none}@media(max-width:700px){.sticky-cta{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:50;background:#0a2342;color:#fff;align-items:center;justify-content:space-between;gap:10px;padding:10px 14px;padding-bottom:calc(10px + env(safe-area-inset-bottom));font-size:.92rem;box-shadow:0 -4px 16px rgba(0,0,0,.2)}.sticky-cta a{background:#b22234;color:#fff;text-decoration:none;font-weight:700;padding:10px 14px;border-radius:8px;white-space:nowrap}main{padding-bottom:80px}}`

// One page writer per state: writes <outDir>/<relPath>/index.html and records the URL for the sitemap
export function makePageWriter({ outDir, urlPrefix, footerHtml }) {
  const pages = []
function layout({ url, title, description, body, breadcrumbs, pageType = 'page', ogImage = DEFAULT_OG, jsonld = [] }) {
  const ld = [...jsonld]
  if (breadcrumbs) ld.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: breadcrumbs.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, item: b.url })) })
  const crumbs = breadcrumbs ? `<p class="crumbs">${breadcrumbs.map((b, i) => i === breadcrumbs.length - 1 ? esc(b.name) : `<a href="${b.url}">${esc(b.name)}</a>`).join(' › ')}</p>` : ''
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="apple-itunes-app" content="app-id=6802903783">
<title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${url}"><meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="article"><meta property="og:url" content="${url}"><meta property="og:site_name" content="Of For &amp; By The People"><meta property="og:image" content="${ogImage}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${ogImage}">
<link rel="icon" href="/favicon.png">${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('')}
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}',{page_type:'${pageType}'});gtag('event','ballot_page_view',{page_type:'${pageType}'});document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="/ballot"],a[href*="apps.apple.com"]');if(a){gtag('event',a.href.indexOf('apple')>-1?'app_store_click':'seo_cta_click',{link_url:a.href,placement:'seo-${pageType}'})}},true);</script>
<style>${CSS}</style></head><body>
<header><a class="brand" href="${SITE}/">Of For &amp; By The People</a><a class="cta" href="${SITE}/ballot?utm_source=seo&utm_medium=${pageType}">Build my ballot →</a></header>
<main>${crumbs}${body}</main>
${['jurisdiction', 'local-proposal', 'school-board', 'race', 'proposal'].includes(pageType) ? `<div class="sticky-cta"><span>See your full ballot, graded</span><a href="${SITE}/ballot?utm_source=seo&utm_medium=sticky&utm_campaign=${pageType}">Build my ballot →</a></div>` : ''}
<footer><p style="max-width:760px;margin:0 auto 10px">${DISCLAIMER}</p>${footerHtml}</footer>
</body></html>`
}
function write(relPath, html) {
  const dir = path.join(outDir, relPath)
  mkdirSync(dir, { recursive: true })
  writeFileSync(path.join(dir, 'index.html'), html)
  pages.push(`${SITE}/${urlPrefix}/${relPath ? relPath + '/' : ''}`)
}
  return { layout, write, pages }
}

export const ctaBox = (label, href, extra = '') => `<div class="cta-box"><strong>${label}</strong><br><a href="${href}">Build my ballot →</a>${extra}<br><a class="appstore" href="https://apps.apple.com/us/app/of-for-by-the-people/id6802903783?utm_source=seo">&#63743; Download the iPhone app</a></div>`
export const faq = qa => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: qa.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) })
// "Royal Oak City" -> "City of Royal Oak"; townships/villages keep their names. URLs stay unchanged.
export const displayName = n => /\sCity$/i.test(n) && !/^Village/i.test(n) ? `City of ${n.replace(/\s+City$/i, '')}` : n
export const gradeBadge = g => g ? `<span class="g" style="background:${GRADE_COLOR[g[0]] || '#555'}">${esc(g)}</span>` : `<span class="g nr">N/R</span>`
