const FRESHNESS_PREFIX = 'myreps_fetch_'

/**
 * Record the current timestamp for a data source fetch.
 * @param {string} key — data source identifier (e.g. 'congress-api')
 */
export function recordFetchTime(key) {
  try {
    localStorage.setItem(`${FRESHNESS_PREFIX}${key}`, String(Date.now()))
  } catch {
    // localStorage unavailable — silently ignore
  }
}

/**
 * Get the last fetch timestamp for a data source.
 * @param {string} key
 * @returns {number|null} — epoch ms or null if never fetched
 */
export function getFetchTime(key) {
  try {
    const raw = localStorage.getItem(`${FRESHNESS_PREFIX}${key}`)
    if (raw) return Number(raw)
  } catch { /* ignore */ }
  return null
}

/**
 * Return a human-readable "time ago" string.
 * @param {number} timestamp — epoch ms
 * @returns {string}
 */
export function getTimeAgo(timestamp) {
  if (!timestamp) return 'never'
  const diff = Date.now() - timestamp
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) return 'just now'
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`
  if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`
  if (days === 1) return 'yesterday'
  if (days < 30) return `${days} days ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`
  return 'over a year ago'
}

/**
 * Check if data for a key is older than maxAgeMs.
 * @param {string} key
 * @param {number} maxAgeMs — max age in milliseconds
 * @returns {boolean}
 */
export function isStale(key, maxAgeMs) {
  const ts = getFetchTime(key)
  if (!ts) return true
  return Date.now() - ts > maxAgeMs
}

/**
 * Clear all freshness timestamps (used when forcing a refresh).
 */
export function clearAllFetchTimes() {
  try {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k && k.startsWith(FRESHNESS_PREFIX)) keys.push(k)
    }
    keys.forEach(k => localStorage.removeItem(k))
  } catch { /* ignore */ }
}
