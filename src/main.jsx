import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { applyTextSize, getTextSize } from './hooks/useTextSize'

applyTextSize(getTextSize())

// Native app and home-screen installs draw under the status bar, so they need viewport-fit=cover for the
// safe-area insets. Plain Safari must not get it: it drops Safari's Smart App Banner under the status bar.
if (typeof window !== 'undefined' && (window.Capacitor?.isNativePlatform?.() || window.navigator.standalone || window.matchMedia?.('(display-mode: standalone)').matches)) {
  document.querySelector('meta[name="viewport"]')?.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover')
}

// Native app: the bundle is served from capacitor://localhost, so send site-relative API/data calls to the live site
if (typeof window !== 'undefined' && window.Capacitor?.isNativePlatform?.()) {
  const SITE = 'https://www.offorandbythepeople.com'
  const nativeFetch = window.fetch.bind(window)
  window.fetch = (input, init) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input?.url
    if (url && /^\/(api|data)\//.test(url)) return nativeFetch(SITE + url, init)
    if (url && /^capacitor:\/\/localhost\/(api|data)\//.test(url)) return nativeFetch(url.replace(/^capacitor:\/\/localhost/, SITE), init)
    return nativeFetch(input, init)
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
