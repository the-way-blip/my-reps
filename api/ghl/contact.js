// Vercel serverless function — proxies new user registrations to GoHighLevel CRM
// This avoids CORS issues and keeps the GHL webhook URL server-side only.

const ALLOWED_ORIGINS = [
  'https://www.offorandbythepeople.com',
  'https://offorandbythepeople.com',
  'https://my-reps-pi.vercel.app',
]

function getCorsOrigin(req) {
  const origin = req.headers.origin || ''
  if (ALLOWED_ORIGINS.includes(origin)) return origin
  // Allow localhost during development
  if (origin.startsWith('http://localhost:')) return origin
  return ALLOWED_ORIGINS[0]
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

  const webhookUrl = process.env.GHL_WEBHOOK_URL
  if (!webhookUrl) {
    console.error('GHL_WEBHOOK_URL environment variable is not configured')
    return res.status(200).json({ ok: true, crmSync: false, reason: 'webhook_not_configured' })
  }

  try {
    const { email, name, phone, state, zipCode, source } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    // Split name into first/last for GHL
    const nameParts = (name || '').trim().split(/\s+/)
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    const payload = {
      email,
      firstName,
      lastName,
      phone: phone || '',
      state: state || '',
      postalCode: zipCode || '',
      source: source || 'Of For & By The People',
      tags: ['ofp-signup', 'voter'],
      customField: {
        signup_date: new Date().toISOString(),
        platform: 'offorandbythepeople.com',
        state: state || '',
        zip_code: zipCode || '',
      },
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('GHL webhook error:', response.status, text)
      // Don't fail the registration — CRM sync is non-critical
      return res.status(200).json({ ok: true, crmSync: false, reason: 'webhook_error' })
    }

    return res.status(200).json({ ok: true, crmSync: true })
  } catch (err) {
    console.error('GHL webhook exception:', err.message)
    // Don't fail the registration — CRM sync is non-critical
    return res.status(200).json({ ok: true, crmSync: false, reason: err.message })
  }
}
