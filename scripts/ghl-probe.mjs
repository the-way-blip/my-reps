import { readFileSync } from 'fs'
const env = Object.fromEntries(readFileSync('.ghl-env', 'utf8').split('\n').filter(l => /^[A-Z_]+=/.test(l)).map(l => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1).replace(/^"|"$/g, '')] }))
const TOKEN = env.GHL_PIT_TOKEN, LOC = env.GHL_LOCATION_ID
const api = async (path, opts = {}) => { const r = await fetch(`https://services.leadconnectorhq.com${path}`, { ...opts, headers: { Authorization: `Bearer ${TOKEN}`, Version: '2021-07-28', 'Content-Type': 'application/json', Accept: 'application/json', ...(opts.headers || {}) } }); const t = await r.text(); try { return { status: r.status, ...JSON.parse(t) } } catch { return { status: r.status, raw: t.slice(0, 200) } } }
const loc = await api(`/locations/${LOC}`)
console.log('location:', loc.location?.name, '| status', loc.status)
const MI = new Set(['231','248','269','313','517','586','616','679','734','810','906','947','989'])
let all = [], startAfterId, startAfter
for (let page = 0; page < 50; page++) {
  const q = new URLSearchParams({ locationId: LOC, limit: '100' }); if (startAfterId) { q.set('startAfterId', startAfterId); q.set('startAfter', startAfter) }
  const r = await api(`/contacts/?${q}`); const c = r.contacts || []; all.push(...c)
  if (!r.meta?.startAfterId || c.length < 100) break
  startAfterId = r.meta.startAfterId; startAfter = r.meta.startAfter
}
const tagCounts = {}; for (const c of all) for (const t of c.tags || []) tagCounts[t] = (tagCounts[t] || 0) + 1
const withPhone = all.filter(c => c.phone)
const area = p => (String(p).replace(/\D/g, '').replace(/^1/, '')).slice(0, 3)
const mi = withPhone.filter(c => MI.has(area(c.phone)))
const miOk = mi.filter(c => !c.dnd && !(c.dndSettings?.SMS?.status === 'inactive'))
console.log({ total: all.length, withPhone: withPhone.length, michiganPhones: mi.length, michiganSmsOk: miOk.length })
console.log('tags:', tagCounts)
console.log('sources:', Object.entries(all.reduce((a, c) => { a[c.source || '-'] = (a[c.source || '-'] || 0) + 1; return a }, {})))
console.log('sample fields:', Object.keys(all[0] || {}).join(', '))
