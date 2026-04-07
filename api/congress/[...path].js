// Vercel serverless proxy for Congress.gov API (avoids CORS/403 issues)
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
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
  const apiKey = (process.env.VITE_CONGRESS_API_KEY || '').trim()
  if (!apiKey) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    return res.status(500).json({ error: 'Congress API key not configured' })
  }
  params.set('api_key', apiKey)
  params.set('format', 'json')

  const url = `https://api.congress.gov/v3/${apiPath}?${params}`

  try {
    const response = await fetch(url)
    const data = await response.text()
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
    res.status(response.status).send(data)
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(500).json({ error: 'Proxy error', message: err.message })
  }
}
