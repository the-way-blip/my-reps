#!/usr/bin/env node
// Submits every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver; feeds DuckDuckGo/Yahoo). Run after a deploy.
import { readFileSync } from 'fs'
const KEY = '918bdf7071ace4fbcc2a8df1008b7705'
const HOST = 'www.offorandbythepeople.com'
const urls = [...readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
for (let i = 0; i < urls.length; i += 10000) {
  const r = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(i, i + 10000) }) })
  console.log(`IndexNow batch ${i / 10000 + 1}: ${urls.slice(i, i + 10000).length} urls -> HTTP ${r.status}`)
}
