import { useState, useEffect } from 'react'
import { getFetchTime, getTimeAgo, isStale, clearAllFetchTimes } from '../../utils/freshness'

const STALE_24H = 24 * 60 * 60 * 1000
const STALE_7D = 7 * 24 * 60 * 60 * 1000

const ClockIcon = () => (
  <svg
    className="freshness-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="14"
    height="14"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

/**
 * Shows data freshness for one or more API sources.
 * @param {Object} props
 * @param {string[]} props.sources — freshness keys to check (e.g. ['congress-api', 'openstates-api'])
 * @param {function} [props.onRefresh] — called when user clicks Refresh
 * @param {string} [props.variant] — 'inline' (default) or 'footer'
 */
export default function FreshnessIndicator({ sources = [], onRefresh, variant = 'inline' }) {
  const [, setTick] = useState(0)

  // Re-render every 60 seconds to keep "time ago" up to date
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 60_000)
    return () => clearInterval(id)
  }, [])

  // Find the most recent fetch time across all sources
  const timestamps = sources.map(getFetchTime).filter(Boolean)
  const mostRecent = timestamps.length > 0 ? Math.max(...timestamps) : null

  if (!mostRecent) return null

  const timeAgo = getTimeAgo(mostRecent)
  const veryStale = sources.some(s => isStale(s, STALE_7D))
  const stale = !veryStale && sources.some(s => isStale(s, STALE_24H))

  const colorClass = veryStale ? 'freshness-very-stale' : stale ? 'freshness-stale' : ''
  const wrapClass = `freshness-indicator ${variant === 'footer' ? 'freshness-footer' : 'freshness-inline'} ${colorClass}`

  const handleRefresh = () => {
    // Clear sessionStorage cache
    try { sessionStorage.clear() } catch {}
    // Clear freshness timestamps
    clearAllFetchTimes()
    // Call the refresh callback
    if (onRefresh) onRefresh()
  }

  return (
    <span className={wrapClass}>
      <ClockIcon />
      <span className="freshness-text">
        {variant === 'footer' ? 'Data last updated ' : 'Updated '}
        {timeAgo}
      </span>
      {veryStale && (
        <button className="freshness-refresh-btn" onClick={handleRefresh} type="button">
          Refresh
        </button>
      )}
    </span>
  )
}

/**
 * Standalone refresh button — clears all caches and re-fetches.
 */
export function RefreshDataButton({ onRefresh }) {
  const handleRefresh = () => {
    try { sessionStorage.clear() } catch {}
    clearAllFetchTimes()
    if (onRefresh) onRefresh()
  }

  return (
    <button className="refresh-data-btn" onClick={handleRefresh} type="button">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="14"
        height="14"
        aria-hidden="true"
      >
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
      Refresh Data
    </button>
  )
}
