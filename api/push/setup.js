// One-time: creates the push_subscriptions table. POST with Authorization: Bearer <CRON_SECRET>.
import pg from 'pg'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const auth = req.headers.authorization || ''
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) return res.status(401).json({ error: 'unauthorized' })
  const raw = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL
  if (!raw) return res.status(500).json({ error: 'no POSTGRES_URL' })
  // Supabase's pooler cert chain isn't in Node's store; drop sslmode from the URL so our ssl option wins
  const conn = raw.replace(/([?&])sslmode=[^&]*&?/, '$1').replace(/[?&]$/, '')
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
      create table if not exists public.ballot_sessions (
        id bigserial primary key,
        session_key text,
        user_id uuid,
        address text not null,
        zip text,
        county text,
        jurisdiction text,
        place text,
        school_district text,
        congressional int,
        state_senate int,
        state_house int,
        email text,
        name text,
        phone text,
        ballot_done boolean default false,
        source text,
        referrer text,
        user_agent text,
        ip_hash text,
        created_at timestamptz default now(),
        updated_at timestamptz default now()
      );
      create index if not exists ballot_sessions_created_idx on public.ballot_sessions (created_at desc);
      create index if not exists ballot_sessions_email_idx on public.ballot_sessions (email);
      alter table public.ballot_sessions enable row level security;
      notify pgrst, 'reload schema';
    `)
    const { rows } = await client.query('select (select count(*) from public.push_subscriptions)::int as subs, (select count(*) from public.ballot_sessions)::int as sessions')
    return res.status(200).json({ ok: true, subscriptions: rows[0].subs, ballotSessions: rows[0].sessions })
  } catch (e) {
    return res.status(500).json({ error: e.message })
  } finally {
    await client.end().catch(() => {})
  }
}
