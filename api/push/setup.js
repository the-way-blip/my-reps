// One-time: creates the push_subscriptions table. POST with Authorization: Bearer <CRON_SECRET>.
import pg from 'pg'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const auth = req.headers.authorization || ''
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) return res.status(401).json({ error: 'unauthorized' })
  const conn = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL
  if (!conn) return res.status(500).json({ error: 'no POSTGRES_URL' })
  const client = new pg.Client({ connectionString: conn, ssl: { rejectUnauthorized: false } })
  try {
    await client.connect()
    await client.query(`
      create table if not exists public.push_subscriptions (
        id bigserial primary key,
        endpoint text unique not null,
        p256dh text not null,
        auth text not null,
        county text,
        jurisdiction text,
        state text default 'MI',
        ballot_done boolean default false,
        user_agent text,
        created_at timestamptz default now(),
        updated_at timestamptz default now(),
        last_sent_at timestamptz,
        last_sent_key text
      );
      alter table public.push_subscriptions enable row level security;
    `)
    const { rows } = await client.query('select count(*)::int as n from public.push_subscriptions')
    return res.status(200).json({ ok: true, subscriptions: rows[0].n })
  } catch (e) {
    return res.status(500).json({ error: e.message })
  } finally {
    await client.end().catch(() => {})
  }
}
