import { useEffect, useRef } from 'react'

/**
 * Traps keyboard focus inside a container element while active.
 * Returns a ref to attach to the container.
 *
 * @param {boolean} active — whether the trap is currently active
 * @returns {React.RefObject}
 */
export default function useFocusTrap(active) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!active || !containerRef.current) return

    const container = containerRef.current
    const previouslyFocused = document.activeElement

    // Focus the first focusable element
    const focusable = getFocusable(container)
    if (focusable.length > 0) {
      focusable[0].focus()
    }

    function handleKeyDown(e) {
      if (e.key !== 'Tab') return

      const elements = getFocusable(container)
      if (elements.length === 0) return

      const first = elements[0]
      const last = elements[elements.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      // Restore focus
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus()
      }
    }
  }, [active])

  return containerRef
}

function getFocusable(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter(el => el.offsetParent !== null) // visible only
}
