export const APP_STORE_URL = 'https://apps.apple.com/us/app/of-for-by-the-people/id6802903783'

export function isNativeApp() {
  return typeof window !== 'undefined' && (!!window.Capacitor || !!window.__CAPACITOR_NATIVE__)
}

export function isIOSBrowser() {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent || ''
  const iOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  return iOS && !isNativeApp()
}
