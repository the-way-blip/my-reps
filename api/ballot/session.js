// Records anonymous ballot sessions (address + matched districts) and optional email capture.
import { createClient } from '@supabase/supabase-js'

function db() {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  return url && key ? createClient(url, key, { auth: { persistSession: false } }) : null
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST' && req.method !== 'PATCH') { res.setHeader('Allow', 'POST, PATCH'); return res.status(405).end() }
  const client = db()
  if (!client) return res.status(200).json({ ok: false, reason: 'not configured' })
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim()

  if (req.method === 'POST') {
    if (!b.address || String(b.address).length > 300) return res.status(400).json({ error: 'address required' })
    const row = {
      session_key: String(b.sessionKey || '').slice(0, 64) || null,
      user_id: b.userId || null,
      address: String(b.address).slice(0, 300),
      county: b.county || null,
      jurisdiction: b.jurisdiction || null,
      place: b.place || null,
      school_district: b.schoolDistrict || null,
      congressional: b.congressional ?? null,
      state_senate: b.stateSenate ?? null,
      state_house: b.stateHouse ?? null,
      zip: (String(b.address).match(/\b(4[89]\d{3})\b/) || [])[1] || null,
      source: String(b.source || '').slice(0, 80) || null,
      referrer: String(b.referrer || '').slice(0, 300) || null,
      user_agent: (req.headers['user-agent'] || '').slice(0, 200),
      ip_hash: ip ? Buffer.from(ip).toString('base64').slice(0, 24) : null,
    }
    const { data, error } = await client.from('ballot_sessions').insert(row).select('id').single()
    if (error) return res.status(200).json({ ok: false, reason: error.message })
    return res.status(200).json({ ok: true, id: data.id })
  }

  // PATCH: attach email/name/phone captured later in the session
  if (!b.id && !b.sessionKey) return res.status(400).json({ error: 'id required' })
  const patch = { updated_at: new Date().toISOString() }
  if (b.email) patch.email = String(b.email).slice(0, 200).toLowerCase()
  if (b.name) patch.name = String(b.name).slice(0, 120)
  if (b.phone) patch.phone = String(b.phone).slice(0, 40)
  if (typeof b.ballotDone === 'boolean') patch.ballot_done = b.ballotDone
  let q = client.from('ballot_sessions').update(patch)
  q = b.id ? q.eq('id', b.id) : q.eq('session_key', b.sessionKey)
  const { error } = await q
  if (error) return res.status(200).json({ ok: false, reason: error.message })
  return res.status(200).json({ ok: true })
}
