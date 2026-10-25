// Stores / updates / removes web-push subscriptions in Supabase (table: push_subscriptions).
import { createClient } from '@supabase/supabase-js'

function db() {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key, { auth: { persistSession: false } })
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  const client = db()
  if (!client) return res.status(500).json({ error: 'push storage not configured' })
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})

  if (req.method === 'POST') {
    const sub = body.subscription
    if (!sub?.endpoint || !sub?.keys?.p256dh || !sub?.keys?.auth) return res.status(400).json({ error: 'invalid subscription' })
    const row = {
      endpoint: sub.endpoint,
      p256dh: sub.keys.p256dh,
      auth: sub.keys.auth,
      county: body.county || null,
      jurisdiction: body.jurisdiction || null,
      state: body.state || 'MI',
      ballot_done: !!body.ballotDone,
      user_agent: (req.headers['user-agent'] || '').slice(0, 200),
      updated_at: new Date().toISOString(),
    }
    const { error } = await client.from('push_subscriptions').upsert(row, { onConflict: 'endpoint' })
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ ok: true })
  }

  if (req.method === 'PATCH') {
    if (!body.endpoint) return res.status(400).json({ error: 'endpoint required' })
    const patch = { updated_at: new Date().toISOString() }
    if (typeof body.ballotDone === 'boolean') patch.ballot_done = body.ballotDone
    const { error } = await client.from('push_subscriptions').update(patch).eq('endpoint', body.endpoint)
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ ok: true })
  }

  if (req.method === 'DELETE') {
    if (!body.endpoint) return res.status(400).json({ error: 'endpoint required' })
    const { error } = await client.from('push_subscriptions').delete().eq('endpoint', body.endpoint)
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ ok: true })
  }

  res.setHeader('Allow', 'POST, PATCH, DELETE')
  return res.status(405).json({ error: 'method not allowed' })
}
