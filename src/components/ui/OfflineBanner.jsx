import { useState } from 'react'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'
import './OfflineBanner.css'

export default function OfflineBanner() {
  const isOnline = useOnlineStatus()
  const [dismissed, setDismissed] = useState(false)

  if (isOnline || dismissed) return null

  return (
    <div className="offline-banner" role="status" aria-live="polite">
      <span className="offline-banner-text">
        You're offline &mdash; showing cached data
      </span>
      <button
        className="offline-banner-dismiss"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss offline notice"
      >
        &times;
      </button>
    </div>
  )
}
