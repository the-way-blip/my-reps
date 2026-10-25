import { useEffect, useState } from 'react'

export const TEXT_SIZES = [
  { id: 'normal', label: 'Normal' },
  { id: 'large', label: 'Large' },
  { id: 'xl', label: 'Extra large' },
]
const KEY = 'myreps_text_size'
const EVENT = 'myreps-text-size'

export function getTextSize() {
  try {
    const v = localStorage.getItem(KEY)
    return TEXT_SIZES.some(s => s.id === v) ? v : 'normal'
  } catch {
    return 'normal'
  }
}

export function applyTextSize(size) {
  if (size === 'normal') document.documentElement.removeAttribute('data-text')
  else document.documentElement.setAttribute('data-text', size)
}

export function setTextSize(size) {
  try { localStorage.setItem(KEY, size) } catch { /* private mode */ }
  applyTextSize(size)
  window.dispatchEvent(new CustomEvent(EVENT, { detail: size }))
}

export function useTextSize() {
  const [size, setSize] = useState(getTextSize)
  useEffect(() => {
    const onChange = e => setSize(e.detail)
    window.addEventListener(EVENT, onChange)
    return () => window.removeEventListener(EVENT, onChange)
  }, [])
  const cycle = () => {
    const i = TEXT_SIZES.findIndex(s => s.id === size)
    setTextSize(TEXT_SIZES[(i + 1) % TEXT_SIZES.length].id)
  }
  return [size, setTextSize, cycle]
}
