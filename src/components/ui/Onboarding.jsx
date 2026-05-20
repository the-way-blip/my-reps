import { useState, useEffect, useCallback } from 'react'
import useFocusTrap from '../../hooks/useFocusTrap'
import { useAuth } from '../../contexts/AuthContext'

const STORAGE_KEY = 'myreps-onboarding-complete'

const STEPS = [
  {
    id: 'welcome',
    title: 'Build Your Ballot',
    content: 'Walk into the voting booth prepared. We\'ll help you research every race on your ballot and build a personalized plan before election day.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: 'address',
    title: 'Enter Your Address',
    content: 'Type in your address to see the exact races and candidates that will be on your ballot — from Governor down to your local school board.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 'choose',
    title: 'Pick Your Candidates',
    content: 'Review candidates in each race, see their values alignment scores, and select who you want to vote for. Your choices are saved automatically.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'scorecard',
    title: 'Values Scorecard',
    content: 'Each candidate is graded on Constitutional and Christian values alignment. Use these scores to make informed decisions at the ballot box.',
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
    title: 'You\'re Ready to Vote!',
    content: 'Take your completed ballot plan to the polls on election day. Sign up for an account to save your plan and get election reminders.',
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
  const focusTrapRef = useFocusTrap(visible)
  const [direction, setDirection] = useState('next') // 'next' | 'prev'
  const [animating, setAnimating] = useState(false)
  const { user } = useAuth()

  // Only auto-show onboarding for brand-new sign-ups (account created within the last 2 minutes)
  useEffect(() => {
    if (!user) return
    if (localStorage.getItem(STORAGE_KEY)) return

    const createdAt = new Date(user.created_at)
    const now = new Date()
    const ageMs = now - createdAt
    const isNewSignUp = ageMs < 2 * 60 * 1000 // within 2 minutes

    if (isNewSignUp) {
      const t = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(t)
    }
  }, [user])

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
      <div className="onboarding-card" ref={focusTrapRef}>
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
