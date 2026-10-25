// Sends the Nov 3 "ballot is ready" SMS to GHL contacts with Michigan mobile numbers.
// Usage: node scripts/ghl-sms-campaign.mjs            (dry run — prints counts + first 5 recipients)
//        node scripts/ghl-sms-campaign.mjs --send     (actually sends; tags each contact nov3-sms-sent)
import { readFileSync } from 'fs'
const env = Object.fromEntries(readFileSync('.ghl-env', 'utf8').split('\n').filter(l => /^[A-Z_]+=/.test(l)).map(l => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1).replace(/^"|"$/g, '').trim()] }))
const TOKEN = env.GHL_PIT_TOKEN, LOC = env.GHL_LOCATION_ID
if (!TOKEN || !LOC) { console.error('Fill GHL_PIT_TOKEN and GHL_LOCATION_ID in .ghl-env first'); process.exit(1) }
const SEND = process.argv.includes('--send')
const MESSAGE = 'Of For & By The People: your full Nov 3 ballot is ready — every local race & proposal, graded on your values. Independent & personally funded — no party or candidate ties. Early voting ends Nov 1. offorandbythepeople.com/ballot  Reply STOP to opt out'
// Only people who actually signed up for Build My Ballot / Of For & By The People — never the church or Scroll lists
const OPT_IN_TAGS = /^(ofp-signup|build my ballot|my reps sign up|voter)$/i
const MI = new Set(['231', '248', '269', '313', '517', '586', '616', '679', '734', '810', '906', '947', '989'])
const SENT_TAG = 'nov3-sms-sent'

const api = async (path, opts = {}) => {
  const r = await fetch(`https://services.leadconnectorhq.com${path}`, { ...opts, headers: { Authorization: `Bearer ${TOKEN}`, Version: '2021-07-28', 'Content-Type': 'application/json', Accept: 'application/json' } })
  const t = await r.text(); try { return { status: r.status, ...JSON.parse(t) } } catch { return { status: r.status, raw: t.slice(0, 200) } }
}
const loc = await api(`/locations/${LOC}`)
if (!loc.location) { console.error('Location lookup failed:', loc.status, loc.message || loc.raw); process.exit(1) }
console.log('Location:', loc.location.name)

let all = [], startAfterId, startAfter
for (let page = 0; page < 100; page++) {
  const q = new URLSearchParams({ locationId: LOC, limit: '100' }); if (startAfterId) { q.set('startAfterId', startAfterId); q.set('startAfter', startAfter) }
  const r = await api(`/contacts/?${q}`); const c = r.contacts || []; all.push(...c)
  if (!r.meta?.startAfterId || c.length < 100) break
  startAfterId = r.meta.startAfterId; startAfter = r.meta.startAfter
}
const digits = p => String(p || '').replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '')
const eligible = all.filter(c => {
  if (!(c.tags || []).some(t => OPT_IN_TAGS.test(t))) return false
  const d = digits(c.phone); if (d.length !== 10 || !MI.has(d.slice(0, 3))) return false
  if (c.dnd) return false
  if (c.dndSettings?.SMS?.status && c.dndSettings.SMS.status !== 'active') return false
  if ((c.tags || []).includes(SENT_TAG)) return false
  return true
})
const seen = new Set(); const unique = eligible.filter(c => { const d = digits(c.phone); if (seen.has(d)) return false; seen.add(d); return true })
console.log({ contacts: all.length, michiganSmsEligible: unique.length, alreadySent: all.filter(c => (c.tags || []).includes(SENT_TAG)).length })
console.log('message (' + MESSAGE.length + ' chars):', MESSAGE)
console.log('first recipients:', unique.slice(0, 5).map(c => `${c.firstName || ''} ${c.lastName || ''} ***-***-${digits(c.phone).slice(-4)}`))
if (!SEND) { console.log('\nDry run. Re-run with --send to send.'); process.exit(0) }

let ok = 0, fail = 0
for (const c of unique) {
  const r = await api('/conversations/messages', { method: 'POST', body: JSON.stringify({ type: 'SMS', contactId: c.id, message: MESSAGE }) })
  if (r.status >= 200 && r.status < 300) {
    ok++
    await api(`/contacts/${c.id}/tags`, { method: 'POST', body: JSON.stringify({ tags: [SENT_TAG] }) })
  } else { fail++; console.error('send failed', c.id, r.status, r.message || r.raw) }
  await new Promise(res => setTimeout(res, 150))
}
console.log({ sent: ok, failed: fail })
