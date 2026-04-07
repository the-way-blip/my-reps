import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'myreps_tutorial_done'

const STEPS = [
  {
    target: '.search-input',
    title: 'Find Your Representatives',
    text: 'Type your address, city, or state to discover who represents you — and how they align with constitutional and Christian values.',
    position: 'bottom',
  },
  {
    target: '.state-dropdown',
    title: 'Select Your State',
    text: 'Choose your state to explore federal and state legislators, view the map, and see their alignment scores.',
    position: 'bottom',
  },
  {
    target: 'nav a[href="/my-reps"]',
    title: 'My Representatives',
    text: 'Enter your address to see all your elected officials — from Congress to your local school board — with their values scorecard.',
    position: 'top',
  },
  {
    target: 'nav a[href="/elections"]',
    title: 'Elections & Registration',
    text: 'View upcoming elections, your personalized ballot, polling locations, and register to vote — all in one place.',
    position: 'top',
  },
  {
    target: 'nav a[href="/founding"]',
    title: 'Our Founding & Values',
    text: 'Explore America\'s founding principles rooted in Christian morality, the Constitution, and how we score representatives on key issues.',
    position: 'top',
  },
  {
    target: '.theme-toggle',
    title: 'Dark Mode',
    text: 'Toggle between light and dark themes. Your preference is saved automatically.',
    position: 'bottom',
  },
]

function getRect(selector) {
  const el = document.querySelector(selector)
  if (!el) return null
  return el.getBoundingClientRect()
}

export default function Tutorial() {
  const [active, setActive] = useState(false)
  const [step, setStep] = useState(0)
  const [rect, setRect] = useState(null)

  useEffect(() => {
    // Show tutorial on first visit
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Small delay so DOM is ready
      const t = setTimeout(() => setActive(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    if (!active) return
    const r = getRect(STEPS[step].target)
    setRect(r)

    // Update rect on scroll/resize
    function update() { setRect(getRect(STEPS[step].target)) }
    window.addEventListener('resize', update)
    window.addEventListener('scroll', update, true)
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update, true)
    }
  }, [active, step])

  const finish = useCallback(() => {
    setActive(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }, [])

  const next = useCallback(() => {
    if (step < STEPS.length - 1) {
      setStep(s => s + 1)
    } else {
      finish()
    }
  }, [step, finish])

  const prev = useCallback(() => {
    if (step > 0) setStep(s => s - 1)
  }, [step])

  // Close on Escape
  useEffect(() => {
    if (!active) return
    function onKey(e) { if (e.key === 'Escape') finish() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active, finish])

  if (!active || !rect) return null

  const s = STEPS[step]
  const pad = 8
  const isTop = s.position === 'top'

  // Tooltip positioning
  const tooltipStyle = {
    position: 'fixed',
    left: Math.max(12, Math.min(rect.left + rect.width / 2 - 160, window.innerWidth - 332)),
    zIndex: 10001,
  }
  if (isTop) {
    tooltipStyle.bottom = window.innerHeight - rect.top + pad + 8
  } else {
    tooltipStyle.top = rect.bottom + pad + 8
  }

  // Highlight cutout
  const highlightStyle = {
    position: 'fixed',
    left: rect.left - pad,
    top: rect.top - pad,
    width: rect.width + pad * 2,
    height: rect.height + pad * 2,
    borderRadius: 'var(--radius)',
    boxShadow: '0 0 0 4000px rgba(0,0,0,0.55)',
    zIndex: 10000,
    pointerEvents: 'none',
    border: '2px solid var(--accent-gold)',
    transition: 'all 0.3s ease',
  }

  return (
    <>
      {/* Overlay click to dismiss */}
      <div
        className="tutorial-overlay"
        onClick={finish}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          cursor: 'pointer',
        }}
      />

      {/* Highlight ring */}
      <div style={highlightStyle} />

      {/* Tooltip */}
      <div className="tutorial-tooltip" style={tooltipStyle} role="dialog" aria-label="App tutorial">
        <div className="tutorial-arrow" data-position={s.position} />
        <div className="tutorial-header">
          <span className="tutorial-step-badge">{step + 1} / {STEPS.length}</span>
          <button className="tutorial-skip" onClick={finish} aria-label="Skip tutorial">✕</button>
        </div>
        <h4 className="tutorial-title">{s.title}</h4>
        <p className="tutorial-text">{s.text}</p>
        <div className="tutorial-actions">
          {step > 0 && (
            <button className="tutorial-btn tutorial-btn-secondary" onClick={prev}>Back</button>
          )}
          <button className="tutorial-btn tutorial-btn-primary" onClick={next}>
            {step < STEPS.length - 1 ? 'Next' : 'Get Started'}
          </button>
        </div>
        <div className="tutorial-dots">
          {STEPS.map((_, i) => (
            <span key={i} className={`tutorial-dot ${i === step ? 'active' : ''}`} />
          ))}
        </div>
      </div>
    </>
  )
}

// Reset tutorial (callable from console or a settings button)
export function resetTutorial() {
  localStorage.removeItem(STORAGE_KEY)
}
