// Vercel serverless function — proxies new user registrations to GoHighLevel CRM
// This avoids CORS issues and keeps the GHL webhook URL server-side only.

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL
    || 'https://services.leadconnectorhq.com/hooks/CFNKZrr92QFvfZIK7O7M/webhook-trigger/f9aa5f19-23a6-4f1c-867a-86ebbc0be590'

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
      source: source || 'Build My Ballot',
      tags: ['bmb-signup', 'michigan-voter'],
      customField: {
        signup_date: new Date().toISOString(),
        platform: 'buildmyballot.com',
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
