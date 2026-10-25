// Daily election reminders via web push. Scheduled in vercel.json (09:00 ET); Vercel calls it with
// Authorization: Bearer <CRON_SECRET>. Manual test: GET /api/push/cron?test=<endpoint-suffix> with the same header.
import webpush from 'web-push'
import { createClient } from '@supabase/supabase-js'

const SITE = 'https://www.offorandbythepeople.com'

// key = Detroit-local date. `done` = message for people who finished their ballot plan, `todo` = those who haven't.
const SCHEDULE = {
  '2026-10-26': {
    tag: 'early-voting-open',
    done: { title: 'Early voting is open', body: 'Vote any day through Sunday, Nov 1 at your early-voting site. Bring your ballot plan.', url: '/?utm_source=push&utm_campaign=oct26' },
    todo: { title: '8 days to Election Day', body: 'Early voting is open now. Your ballot plan isn\'t finished — it takes two minutes.', url: '/ballot?utm_source=push&utm_campaign=oct26' },
  },
  '2026-10-28': {
    tag: 'absentee-reminder',
    done: { title: 'Voting absentee?', body: 'Friday Oct 30 at 5 p.m. is the last day to request a ballot by mail. Already have one? Return it in person, not by mail.', url: '/?utm_source=push&utm_campaign=oct28' },
    todo: { title: '6 days left', body: 'Local races and millages are on your ballot too. Finish your plan before you vote.', url: '/ballot?utm_source=push&utm_campaign=oct28' },
  },
  '2026-10-30': {
    tag: 'absentee-deadline',
    done: { title: 'Today 5 p.m.: absentee request deadline', body: 'Last chance to request a mail ballot. Early voting continues through Sunday.', url: '/?utm_source=push&utm_campaign=oct30' },
    todo: { title: 'Today 5 p.m.: absentee request deadline', body: 'Early voting runs through Sunday. Your ballot plan is still waiting.', url: '/ballot?utm_source=push&utm_campaign=oct30' },
  },
  '2026-11-01': {
    tag: 'early-voting-last-day',
    done: { title: 'Last day of early voting', body: 'Sites close today. Absentee ballots: hand them to your clerk or a drop box — don\'t mail them now.', url: '/?utm_source=push&utm_campaign=nov1' },
    todo: { title: 'Last day of early voting', body: 'Two days to Election Day and your ballot plan isn\'t done. Finish it today.', url: '/ballot?utm_source=push&utm_campaign=nov1' },
  },
  '2026-11-02': {
    tag: 'election-eve',
    done: { title: 'Tomorrow is Election Day', body: 'Polls open 7 a.m.–8 p.m. Bring photo ID and your ballot plan. Find your polling place tonight.', url: '/?utm_source=push&utm_campaign=nov2' },
    todo: { title: 'Tomorrow is Election Day', body: 'Polls open 7 a.m.–8 p.m. Finish your ballot plan tonight so you\'re ready.', url: '/ballot?utm_source=push&utm_campaign=nov2' },
  },
  '2026-11-03': {
    tag: 'election-day',
    done: { title: 'Polls are open until 8 p.m.', body: 'Today is Election Day. Bring photo ID. In line by 8 p.m. means you can vote.', url: '/?utm_source=push&utm_campaign=nov3' },
    todo: { title: 'Today is Election Day', body: 'Polls close at 8 p.m. Open your ballot to see every race before you go.', url: '/ballot?utm_source=push&utm_campaign=nov3' },
  },
}

function detroitDate() {
  const p = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Detroit', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date())
  const g = t => p.find(x => x.type === t).value
  return `${g('year')}-${g('month')}-${g('day')}`
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  const auth = req.headers.authorization || ''
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) return res.status(401).json({ error: 'unauthorized' })
  const { VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT } = process.env
  if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) return res.status(500).json({ error: 'VAPID keys missing' })
  webpush.setVapidDetails(VAPID_SUBJECT || 'mailto:vote@info.offorandbythepeople.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY)

  const client = createClient(process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } })
  const today = req.query.date || detroitDate()
  const test = req.query.test || null
  const entry = SCHEDULE[today] || (test ? { tag: 'test', done: { title: 'Test reminder', body: 'Push reminders are working. You\'ll hear from us on key election dates.', url: '/' }, todo: { title: 'Test reminder', body: 'Push reminders are working. Finish your ballot plan any time.', url: '/ballot' } } : null)
  if (!entry) return res.status(200).json({ ok: true, today, sent: 0, reason: 'no message scheduled today' })

  let q = client.from('push_subscriptions').select('id, endpoint, p256dh, auth, ballot_done, last_sent_key')
  if (test) q = q.like('endpoint', `%${test}`)
  const { data: subs, error } = await q
  if (error) return res.status(500).json({ error: error.message })

  let sent = 0, skipped = 0, removed = 0, failed = 0
  for (const s of subs || []) {
    if (!test && s.last_sent_key === `${today}:${entry.tag}`) { skipped++; continue }
    const msg = s.ballot_done ? entry.done : entry.todo
    const payload = JSON.stringify({ title: msg.title, body: msg.body, url: `${SITE}${msg.url}`, tag: entry.tag })
    try {
      await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload, { TTL: 60 * 60 * 12 })
      sent++
      await client.from('push_subscriptions').update({ last_sent_at: new Date().toISOString(), last_sent_key: `${today}:${entry.tag}` }).eq('id', s.id)
    } catch (e) {
      if (e.statusCode === 404 || e.statusCode === 410) { removed++; await client.from('push_subscriptions').delete().eq('id', s.id) }
      else failed++
    }
  }
  return res.status(200).json({ ok: true, today, tag: entry.tag, total: (subs || []).length, sent, skipped, removed, failed })
}
