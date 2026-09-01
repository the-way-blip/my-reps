import { createClient } from '@supabase/supabase-js'

const ALLOWED_ORIGINS = [
  'https://www.offorandbythepeople.com',
  'https://offorandbythepeople.com',
  'https://www.buildmyballot.com',
  'https://buildmyballot.com',
  'https://my-reps-pi.vercel.app',
  'capacitor://localhost',
  'ionic://localhost',
]

function getCorsOrigin(req) {
  const origin = req.headers.origin || ''
  if (ALLOWED_ORIGINS.includes(origin)) return origin
  if (origin.startsWith('http://localhost:')) return origin
  return ALLOWED_ORIGINS[0]
}

export default async function handler(req, res) {
  const corsOrigin = getCorsOrigin(req)
  res.setHeader('Access-Control-Allow-Origin', corsOrigin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Vary', 'Origin')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !serviceRoleKey) {
    return res.status(500).json({ error: 'Server not configured for account deletion' })
  }

  const authHeader = req.headers.authorization || ''
  const token = authHeader.replace(/^Bearer\s+/i, '')
  if (!token) {
    return res.status(401).json({ error: 'Missing authorization token' })
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token)
  if (authError || !user) {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }

  const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(user.id)
  if (deleteError) {
    console.error('Failed to delete user:', deleteError.message)
    return res.status(500).json({ error: 'Failed to delete account' })
  }

  return res.status(200).json({ ok: true })
}
