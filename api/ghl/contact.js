// Vercel serverless function — syncs new user registrations to GoHighLevel CRM
// via the GHL public API (v2) using a Private Integration Token.

const ALLOWED_ORIGINS = [
  'https://www.buildmyballot.com',
  'https://buildmyballot.com',
  'https://www.offorandbythepeople.com',
  'https://offorandbythepeople.com',
  'https://www.myreps.vote',
  'https://myreps.vote',
  'https://my-reps-pi.vercel.app',
]

const GHL_API = 'https://services.leadconnectorhq.com'
const GHL_API_VERSION = '2021-07-28'

function getCorsOrigin(req) {
  const origin = req.headers.origin || ''
  if (ALLOWED_ORIGINS.includes(origin)) return origin
  if (origin.startsWith('http://localhost:')) return origin
  return ALLOWED_ORIGINS[0]
}

async function ghlRequest(method, path, body, token) {
  const res = await fetch(`${GHL_API}${path}`, {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Version': GHL_API_VERSION,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  return { status: res.status, ok: res.ok, data: text ? JSON.parse(text) : {} }
}

export default async function handler(req, res) {
  const corsOrigin = getCorsOrigin(req)
  res.setHeader('Access-Control-Allow-Origin', corsOrigin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Vary', 'Origin')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const token = process.env.GHL_PIT_TOKEN
  const locationId = process.env.GHL_LOCATION_ID
  if (!token || !locationId) {
    console.error('GHL_PIT_TOKEN or GHL_LOCATION_ID not configured')
    return res.status(200).json({ ok: true, crmSync: false, reason: 'ghl_not_configured' })
  }

  try {
    const { email, name, phone, state, zipCode, source } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    const nameParts = (name || '').trim().split(/\s+/)
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    // Upsert contact via GHL API — creates if new, updates if email exists
    const contactPayload = {
      locationId,
      email,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      phone: phone || undefined,
      state: state || undefined,
      postalCode: zipCode || undefined,
      source: source || 'buildmyballot.com',
      tags: ['ofp-signup', 'voter', 'my reps sign up', 'build my ballot'],
    }

    // Remove undefined fields
    Object.keys(contactPayload).forEach(k => {
      if (contactPayload[k] === undefined) delete contactPayload[k]
    })

    const result = await ghlRequest('POST', '/contacts/upsert', contactPayload, token)

    if (!result.ok) {
      console.error('GHL API error:', result.status, JSON.stringify(result.data))
      return res.status(200).json({ ok: true, crmSync: false, reason: 'ghl_api_error' })
    }

    return res.status(200).json({ ok: true, crmSync: true, contactId: result.data?.contact?.id })
  } catch (err) {
    console.error('GHL sync exception:', err.message)
    return res.status(200).json({ ok: true, crmSync: false, reason: err.message })
  }
}
