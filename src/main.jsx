import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { applyTextSize, getTextSize } from './hooks/useTextSize'

applyTextSize(getTextSize())

// Native app: the bundle is served from capacitor://localhost, so send site-relative API/data calls to the live site
if (typeof window !== 'undefined' && window.Capacitor?.isNativePlatform?.()) {
  const SITE = 'https://www.offorandbythepeople.com'
  const nativeFetch = window.fetch.bind(window)
  window.fetch = (input, init) => {
    const url = typeof input === 'string' ? input : input?.url
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
