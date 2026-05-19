/**
 * GoHighLevel CRM integration service.
 *
 * Sends new user registrations to GHL via a Vercel serverless function
 * so the user gets added to the email list and CRM automations.
 *
 * This call is fire-and-forget — it never blocks or fails the registration.
 */

const GHL_ENDPOINT = '/api/ghl/contact'

/**
 * Sync a new user to GoHighLevel CRM.
 * @param {{ email: string, name?: string, phone?: string }} userData
 * @returns {Promise<{ ok: boolean, crmSync?: boolean }>}
 */
export async function syncUserToGHL({ email, name, phone, state, zipCode }) {
  try {
    const res = await fetch(GHL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        name: name || '',
        phone: phone || '',
        state: state || '',
        zipCode: zipCode || '',
        source: 'Build My Ballot',
      }),
    })

    if (!res.ok) {
      console.warn('GHL sync returned', res.status)
      return { ok: true, crmSync: false }
    }

    return await res.json()
  } catch (err) {
    // CRM sync is non-critical — never block the user flow
    console.warn('GHL sync failed:', err.message)
    return { ok: true, crmSync: false }
  }
}
