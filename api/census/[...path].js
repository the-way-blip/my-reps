// Vercel serverless proxy for Census Geocoder API (avoids CORS issues)

const ALLOWED_ORIGINS = [
  'https://www.offorandbythepeople.com',
  'https://offorandbythepeople.com',
  'https://my-reps-pi.vercel.app',
]

function getCorsOrigin(req) {
  const origin = req.headers.origin || ''
  if (ALLOWED_ORIGINS.includes(origin)) return origin
  if (origin.startsWith('http://localhost:')) return origin
  return ALLOWED_ORIGINS[0]
}

export default async function handler(req, res) {
  const corsOrigin = getCorsOrigin(req)

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Vary', 'Origin')
    return res.status(200).end()
  }

  // Extract path from URL (e.g., /api/census/geocoder/geographies/onelineaddress)
  const urlPath = req.url.replace(/\?.*$/, '')
  const apiPath = urlPath.replace(/^\/api\/census\/?/, '')

  // Forward query params as-is
  const queryString = req.url.includes('?') ? req.url.split('?')[1] : ''
  const incomingParams = new URLSearchParams(queryString)
  const params = new URLSearchParams()
  for (const [key, value] of incomingParams.entries()) {
    if (key === 'path' || key === '...path') continue
    params.append(key, value)
  }

  const url = `https://geocoding.geo.census.gov/${apiPath}?${params}`

  try {
    const response = await fetch(url)
    const data = await response.text()
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json')
    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Vary', 'Origin')
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200')
    res.status(response.status).send(data)
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Vary', 'Origin')
    res.status(500).json({ error: 'Census proxy error', message: err.message })
  }
}
