import { trackEvent } from '../../utils/analytics'
import { APP_STORE_URL, isNativeApp } from '../../utils/platform'

export default function AppStoreBadge({ placement = 'generic', size = 'md', className = '' }) {
  if (isNativeApp()) return null
  return (
    <a
      href={`${APP_STORE_URL}?utm_source=site&utm_medium=badge&utm_campaign=${placement}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`app-store-badge app-store-badge-${size} ${className}`}
      onClick={() => trackEvent('app_store_click', { placement })}
      aria-label="Download Of For & By The People on the App Store"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M16.365 1.43c0 1.14-.47 2.26-1.24 3.08-.84.9-2.19 1.6-3.3 1.5-.14-1.1.4-2.26 1.14-3.05.84-.9 2.25-1.56 3.4-1.53zM20.9 17.24c-.6 1.37-.88 1.98-1.65 3.19-1.08 1.69-2.6 3.8-4.49 3.82-1.68.02-2.11-1.1-4.39-1.09-2.28.01-2.76 1.11-4.44 1.09-1.89-.02-3.33-1.9-4.41-3.59C-1.65 15.99-1.96 10.3.9 7.3c2.03-2.14 5.23-2.44 6.9-.62.78.84 1.77.9 2.73-.2 1.69-1.9 4.86-1.6 6.52.36-2.95 1.62-2.47 5.84.66 7.07-.12.33-.54 1.72-.81 3.33z" />
      </svg>
      <span className="app-store-badge-text">
        <small>Download on the</small>
        <strong>App Store</strong>
      </span>
    </a>
  )
}
