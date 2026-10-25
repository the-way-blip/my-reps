// Web push reminders (early voting, absentee deadline, Election Day, "finish your ballot").
import { isNativeApp, isIOSBrowser } from './platform'

const KEY = 'myreps_push_state'
const VAPID = import.meta.env.VITE_VAPID_PUBLIC_KEY || ''

export function isStandalone() {
  return typeof window !== 'undefined' && (window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches)
}

// iOS Safari only supports web push for apps added to the Home Screen.
export function pushAvailability() {
  if (typeof window === 'undefined') return 'unsupported'
  if (isNativeApp()) return 'native'
  if (!('serviceWorker' in navigator) || !('PushManager' in window) || !('Notification' in window)) {
    return isIOSBrowser() && !isStandalone() ? 'ios-needs-homescreen' : 'unsupported'
  }
  if (!VAPID) return 'unsupported'
  if (Notification.permission === 'denied') return 'denied'
  return 'available'
}

export function getPushState() {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} }
}
function setPushState(patch) {
  const next = { ...getPushState(), ...patch }
  try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* private mode */ }
  return next
}

function b64ToUint8(b64) {
  const pad = '='.repeat((4 - (b64.length % 4)) % 4)
  const raw = atob((b64 + pad).replace(/-/g, '+').replace(/_/g, '/'))
  return Uint8Array.from([...raw].map(c => c.charCodeAt(0)))
}

async function registration() {
  const reg = await navigator.serviceWorker.getRegistration()
  if (reg) return reg
  return navigator.serviceWorker.ready
}

export async function getCurrentSubscription() {
  if (pushAvailability() !== 'available') return null
  const reg = await registration()
  return reg?.pushManager.getSubscription() || null
}

async function post(body, method = 'POST') {
  const r = await fetch('/api/push/subscribe', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
  if (!r.ok) throw new Error(`subscribe api ${r.status}`)
  return r.json().catch(() => ({}))
}

export async function enableReminders(meta = {}) {
  if (pushAvailability() !== 'available') throw new Error(pushAvailability())
  const perm = await Notification.requestPermission()
  if (perm !== 'granted') { setPushState({ enabled: false, permission: perm }); return { ok: false, permission: perm } }
  const reg = await registration()
  const sub = (await reg.pushManager.getSubscription()) || (await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToUint8(VAPID) }))
  await post({ subscription: sub.toJSON(), ...meta, ballotDone: !!getPushState().ballotDone })
  setPushState({ enabled: true, permission: 'granted', endpoint: sub.endpoint, enabledAt: new Date().toISOString() })
  return { ok: true }
}

export async function disableReminders() {
  const sub = await getCurrentSubscription()
  if (sub) {
    try { await post({ endpoint: sub.endpoint }, 'DELETE') } catch { /* best effort */ }
    await sub.unsubscribe()
  }
  setPushState({ enabled: false })
}

// Called when the user finishes their ballot plan so the cron stops nudging them.
export async function markBallotDone(done = true) {
  setPushState({ ballotDone: done })
  const sub = await getCurrentSubscription().catch(() => null)
  if (sub) { try { await post({ endpoint: sub.endpoint, ballotDone: done }, 'PATCH') } catch { /* best effort */ } }
}

export async function isSubscribed() {
  const sub = await getCurrentSubscription().catch(() => null)
  return !!sub
}
