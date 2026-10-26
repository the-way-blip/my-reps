// Anonymous ballot-session capture (address, matched districts, later email) → api/ballot/session
const KEY = 'myreps_ballot_session'

function sessionKey() {
  try {
    let k = localStorage.getItem(KEY + '_key')
    if (!k) { k = Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem(KEY + '_key', k) }
    return k
  } catch { return null }
}

export async function recordBallotSession(address, geo, userId) {
  try {
    const body = {
      sessionKey: sessionKey(), userId: userId || null, address,
      county: geo?.county || null, jurisdiction: geo?.countySubdivision || null, place: geo?.place || null,
      schoolDistrict: geo?.schoolDistrict || null,
      congressional: geo?.district ? Number(geo.district) : null,
      stateSenate: geo?.stateUpperDistrict ? Number(geo.stateUpperDistrict) : null,
      stateHouse: geo?.stateLowerDistrict ? Number(geo.stateLowerDistrict) : null,
      source: new URLSearchParams(location.search).get('utm_source') || (document.referrer ? 'referral' : 'direct'),
      referrer: document.referrer || null,
    }
    const r = await fetch('/api/ballot/session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    const j = await r.json().catch(() => ({}))
    if (j?.id) { try { localStorage.setItem(KEY + '_id', String(j.id)) } catch { /* ignore */ } }
  } catch { /* never block the ballot */ }
}

export async function attachSessionContact(patch) {
  try {
    let id = null
    try { id = localStorage.getItem(KEY + '_id') } catch { /* ignore */ }
    const body = { ...patch, id: id ? Number(id) : undefined, sessionKey: id ? undefined : sessionKey() }
    await fetch('/api/ballot/session', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
  } catch { /* ignore */ }
}
