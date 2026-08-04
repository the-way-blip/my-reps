import { useState } from 'react'
import { shareEntity } from '../../utils/share'

export default function ShareButton({ title, text, url, className = '', children, onShare }) {
  const [status, setStatus] = useState(null)

  async function handleShare() {
    const result = await shareEntity({ title, text, url })
    if (onShare) onShare(result)
    if (result === 'copied') {
      setStatus('copied')
      setTimeout(() => setStatus(null), 2000)
    }
  }

  const defaultIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  )

  return (
    <button
      className={`share-btn ${className}`}
      onClick={handleShare}
      aria-label="Share"
      title="Share"
    >
      {children || defaultIcon}
      {status === 'copied' && <span className="share-toast" role="status" aria-live="polite">Copied!</span>}
    </button>
  )
}
