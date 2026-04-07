import { useState, useEffect, useSyncExternalStore } from 'react'

function subscribe(callback) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

function getSnapshot() {
  return navigator.onLine
}

/**
 * Hook that tracks the browser's online/offline status in real time.
 * Uses useSyncExternalStore for tear-free reads.
 */
export function useOnlineStatus() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true)
}
