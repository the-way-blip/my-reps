// Vercel serverless proxy for Congress.gov API (avoids CORS/403 issues)

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

// Congress member data barely changes — cache aggressively at the edge.
// /member list: 24 hours. Individual member details: 6 hours.
function getCacheControl(apiPath) {
  if (/^member\/?$/.test(apiPath) || /^member\?/.test(apiPath)) {
    // Member list: 24h edge cache, serve stale up to 7 days
    return 'public, s-maxage=86400, stale-while-revalidate=604800'
  }
  // Individual member endpoints: 6h edge, stale up to 24h
  return 'public, s-maxage=21600, stale-while-revalidate=86400'
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

  // Extract path from URL
  const urlPath = req.url.replace(/\?.*$/, '')
  const apiPath = urlPath.replace(/^\/api\/congress\/?/, '')

  // Build query params
  const queryString = req.url.includes('?') ? req.url.split('?')[1] : ''
  const incomingParams = new URLSearchParams(queryString)
  const params = new URLSearchParams()
  for (const [key, value] of incomingParams.entries()) {
    if (key === 'path' || key === '...path') continue
    params.append(key, value)
  }

  // Add API key server-side
  const apiKey = (process.env.VITE_CONGRESS_API_KEY || process.env.CONGRESS_API_KEY || '').trim()
  if (!apiKey) {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Vary', 'Origin')
    return res.status(500).json({ error: 'Congress API key not configured' })
  }
  params.set('api_key', apiKey)
  params.set('format', 'json')

  const url = `https://api.congress.gov/v3/${apiPath}?${params}`

  // Abort if upstream takes too long (Congress API can be very slow)
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 25000) // 25s timeout

  try {
    const response = await fetch(url, { signal: controller.signal })
    clearTimeout(timeout)

    const data = await response.text()

    // Log upstream errors for Vercel diagnostics
    if (!response.ok) {
      console.error(`[congress-proxy] Upstream ${response.status} for /${apiPath}`)
    }

    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json')
    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Vary', 'Origin')
    res.setHeader('Cache-Control', getCacheControl(apiPath))
    res.status(response.status).send(data)
  } catch (err) {
    clearTimeout(timeout)
    const isTimeout = err.name === 'AbortError'
    console.error(`[congress-proxy] ${isTimeout ? 'TIMEOUT' : 'FETCH_ERROR'} for /${apiPath}: ${err.message}`)

    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Vary', 'Origin')
    // Return 504 for timeouts so the client knows to retry
    res.status(isTimeout ? 504 : 500).json({
      error: isTimeout ? 'Upstream timeout' : 'Proxy error',
      message: err.message,
    })
  }
}
