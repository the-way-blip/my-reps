// Vercel serverless proxy for OpenStates API with aggressive caching
// State legislators rarely change — cache responses for 24 hours to stay within rate limits

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

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Vary', 'Origin')
    return res.status(200).end()
  }

  // Extract the catch-all path from the URL directly (more reliable than req.query)
  const urlPath = req.url.replace(/\?.*$/, '')
  const apiPath = urlPath.replace(/^\/api\/openstates\/?/, '')

  // Build query params from the URL (skip internal routing params)
  const queryString = req.url.includes('?') ? req.url.split('?')[1] : ''
  const incomingParams = new URLSearchParams(queryString)
  const params = new URLSearchParams()
  for (const [key, value] of incomingParams.entries()) {
    if (key === 'path' || key === '...path') continue
    params.append(key, value)
  }

  // Add API key from server-side env (trim whitespace/newlines)
  const apiKey = (process.env.VITE_OPENSTATES_API_KEY || process.env.OPENSTATES_API_KEY || '').trim()
  if (!apiKey) {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Vary', 'Origin')
    return res.status(500).json({ error: 'Server configuration error', message: 'OpenStates API key not configured' })
  }
  params.set('apikey', apiKey)

  const url = `https://v3.openstates.org/${apiPath}?${params}`

  try {
    const response = await fetch(url)
    const contentType = response.headers.get('content-type') || 'application/json'

    // If OpenStates returns HTML (e.g. Swagger docs), the request was invalid
    if (contentType.includes('text/html')) {
      res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Vary', 'Origin')
      return res.status(502).json({
        error: 'Upstream error',
        message: 'OpenStates returned HTML instead of JSON',
        debug: { apiPath, status: response.status },
      })
    }

    const data = await response.text()
    res.setHeader('Content-Type', contentType)
    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Vary', 'Origin')
    // Cache successful responses for 24 hours on Vercel's edge, allow stale for 7 days
    if (response.status === 200) {
      res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800')
    }
    res.status(response.status).send(data)
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Vary', 'Origin')
    res.status(500).json({ error: 'Proxy error', message: err.message })
  }
}
