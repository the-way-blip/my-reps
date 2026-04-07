import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'myreps-onboarding-complete'

const STEPS = [
  {
    id: 'welcome',
    title: 'Welcome to MyReps!',
    content: 'Your guide to representatives, elections, and civic engagement. Let\'s get you set up.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    id: 'location',
    title: 'Set Your Location',
    content: 'Select your state to see your representatives. You can also enter your full address later to find your exact district and local officials.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 'features',
    title: 'Explore Features',
    content: null, // Custom render below
    features: [
      {
        label: 'Explore',
        desc: 'Search and browse all federal and state representatives.',
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
        ),
      },
      {
        label: 'My Reps',
        desc: 'See all your elected officials in one place.',
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21V7l9-4 9 4v14" /><path d="M9 21V11h6v10" /><path d="M3 7h18" />
          </svg>
        ),
      },
      {
        label: 'Elections',
        desc: 'Upcoming elections, your ballot, and voter registration.',
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" />
          </svg>
        ),
      },
      {
        label: 'Founding',
        desc: 'America\'s founding principles and constitutional values.',
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'scorecard',
    title: 'Values Scorecard',
    content: 'We score representatives on Constitutional alignment across 6 key issues. Each representative receives a letter grade from A to F based on their voting record and public positions.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    grades: true,
  },
  {
    id: 'ready',
    title: 'You\'re All Set!',
    content: 'Start exploring your representatives, check upcoming elections, and stay informed on the issues that matter.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--grade-a)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

export default function Onboarding() {
  const [visible, setVisible] = useState(false)
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState('next') // 'next' | 'prev'
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  // Listen for custom event to re-trigger onboarding
  useEffect(() => {
    function handleReopen() {
      setStep(0)
      setDirection('next')
      setVisible(true)
    }
    window.addEventListener('myreps-open-onboarding', handleReopen)
    return () => window.removeEventListener('myreps-open-onboarding', handleReopen)
  }, [])

  const finish = useCallback(() => {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }, [])

  const goNext = useCallback(() => {
    if (animating) return
    if (step < STEPS.length - 1) {
      setDirection('next')
      setAnimating(true)
      setTimeout(() => {
        setStep(s => s + 1)
        setAnimating(false)
      }, 250)
    } else {
      finish()
    }
  }, [step, finish, animating])

  const goBack = useCallback(() => {
    if (animating || step === 0) return
    setDirection('prev')
    setAnimating(true)
    setTimeout(() => {
      setStep(s => s - 1)
      setAnimating(false)
    }, 250)
  }, [step, animating])

  // Close on Escape
  useEffect(() => {
    if (!visible) return
    function onKey(e) {
      if (e.key === 'Escape') finish()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [visible, finish])

  if (!visible) return null

  const s = STEPS[step]
  const isLast = step === STEPS.length - 1
  const slideClass = animating
    ? `onboarding-step onboarding-slide-out-${direction}`
    : 'onboarding-step onboarding-slide-in'

  return (
    <div className="onboarding-overlay" role="dialog" aria-modal="true" aria-label="Onboarding walkthrough">
      <div className="onboarding-card">
        {/* Skip button */}
        {!isLast && (
          <button className="onboarding-skip" onClick={finish} aria-label="Skip onboarding">
            Skip
          </button>
        )}

        <div className={slideClass} key={step}>
          {/* Icon */}
          {s.icon && <div className="onboarding-icon">{s.icon}</div>}

          {/* Title */}
          <h2 className="onboarding-title">{s.title}</h2>

          {/* Content */}
          {s.content && <p className="onboarding-text">{s.content}</p>}

          {/* Features list (step 3) */}
          {s.features && (
            <div className="onboarding-features">
              {s.features.map(f => (
                <div key={f.label} className="onboarding-feature-item">
                  <span className="onboarding-feature-icon">{f.icon}</span>
                  <div>
                    <strong>{f.label}</strong>
                    <span className="onboarding-feature-desc">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Grade scale (step 4) */}
          {s.grades && (
            <div className="onboarding-grades">
              {[
                { letter: 'A', color: 'var(--grade-a)', label: 'Excellent' },
                { letter: 'B', color: 'var(--grade-b)', label: 'Good' },
                { letter: 'C', color: 'var(--grade-c)', label: 'Mixed' },
                { letter: 'D', color: 'var(--grade-d)', label: 'Poor' },
                { letter: 'F', color: 'var(--grade-f)', label: 'Failing' },
              ].map(g => (
                <div key={g.letter} className="onboarding-grade">
                  <span className="onboarding-grade-letter" style={{ background: g.color }}>{g.letter}</span>
                  <span className="onboarding-grade-label">{g.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Progress dots */}
        <div className="onboarding-dots">
          {STEPS.map((_, i) => (
            <span key={i} className={`onboarding-dot ${i === step ? 'active' : ''}`} />
          ))}
        </div>

        {/* Actions */}
        <div className="onboarding-actions">
          {step > 0 && (
            <button className="onboarding-btn onboarding-btn-secondary" onClick={goBack}>
              Back
            </button>
          )}
          <button className="onboarding-btn onboarding-btn-primary" onClick={goNext}>
            {isLast ? 'Get Started' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}

/** Call this to re-trigger onboarding from anywhere */
export function openOnboarding() {
  window.dispatchEvent(new CustomEvent('myreps-open-onboarding'))
}
