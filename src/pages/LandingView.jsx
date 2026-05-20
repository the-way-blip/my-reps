import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from '../components/auth/AuthModal'

export default function LandingView() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [authOpen, setAuthOpen] = useState(false)
  const [authTab, setAuthTab] = useState('signup') // 'signup' or 'signin'

  // If already logged in, redirect to ballot
  if (user) {
    navigate('/', { replace: true })
    return null
  }

  const openSignUp = () => {
    setAuthTab('signup')
    setAuthOpen(true)
  }

  const openSignIn = () => {
    setAuthTab('signin')
    setAuthOpen(true)
  }

  return (
    <div className="landing">
      {/* Hero */}
      <header className="landing-header">
        <div className="landing-header-inner">
          <div className="landing-brand">
            <img src="/logo-white.png" alt="" className="landing-logo" />
            <span className="landing-brand-name">Build My Ballot</span>
          </div>
          <button className="landing-signin-btn" onClick={openSignIn}>
            Sign In
          </button>
        </div>
      </header>

      <section className="landing-hero">
        <div className="landing-hero-content">
          <h1 className="landing-headline">
            Know Your Candidates.<br />Own Your Vote.
          </h1>
          <p className="landing-subheadline">
            Build My Ballot is the free tool that shows you every race on your ballot,
            grades candidates on the issues that matter, and lets you build a
            printable voting plan before election day.
          </p>
          <div className="landing-cta-group">
            <button className="landing-cta-primary" onClick={openSignUp}>
              Get Started Free
            </button>
            <p className="landing-cta-sub">
              Free account &middot; No credit card &middot; Takes 30 seconds
            </p>
          </div>
        </div>
        <div className="landing-hero-visual">
          <div className="landing-ballot-preview">
            <div className="landing-preview-header">
              <span className="landing-preview-dot" />
              <span>My Ballot Plan</span>
            </div>
            <div className="landing-preview-row">
              <span className="landing-preview-office">Governor</span>
              <span className="landing-preview-grade grade-a">A</span>
            </div>
            <div className="landing-preview-row">
              <span className="landing-preview-office">US Senate</span>
              <span className="landing-preview-grade grade-b">B+</span>
            </div>
            <div className="landing-preview-row">
              <span className="landing-preview-office">State Rep</span>
              <span className="landing-preview-grade grade-a">A-</span>
            </div>
            <div className="landing-preview-row">
              <span className="landing-preview-office">County Clerk</span>
              <span className="landing-preview-grade grade-c">C</span>
            </div>
            <div className="landing-preview-footer">
              4 races &middot; Ready to vote
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="landing-steps">
        <h2 className="landing-section-title">How It Works</h2>
        <div className="landing-steps-grid">
          <div className="landing-step">
            <div className="landing-step-number">1</div>
            <h3>Enter Your Address</h3>
            <p>We use your Michigan address to find the exact races and candidates on your ballot — from President down to local offices.</p>
          </div>
          <div className="landing-step">
            <div className="landing-step-number">2</div>
            <h3>Research Candidates</h3>
            <p>See grades, positions, endorsements, and background info for every candidate. Compare them side by side in every race.</p>
          </div>
          <div className="landing-step">
            <div className="landing-step-number">3</div>
            <h3>Build Your Ballot</h3>
            <p>Pick your candidates, save your choices, and bring a printable ballot plan with you on election day. Vote with confidence.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="landing-features">
        <div className="landing-features-grid">
          <div className="landing-feature">
            <div className="landing-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Every Candidate</h3>
            <p>See every candidate running in your district, not just the big races. Local elections matter too.</p>
          </div>
          <div className="landing-feature">
            <div className="landing-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Values-Based Grades</h3>
            <p>We grade candidates A through F based on publicly available records so you can quickly see where they stand.</p>
          </div>
          <div className="landing-feature">
            <div className="landing-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <h3>Printable Plan</h3>
            <p>Take your completed ballot plan to the polls. No more scrambling to remember who you wanted to vote for.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="landing-bottom-cta">
        <h2>Ready to build your ballot?</h2>
        <p>Join thousands of Michigan voters making informed decisions.</p>
        <button className="landing-cta-primary" onClick={openSignUp}>
          Create Your Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <p>&copy; {new Date().getFullYear()} Build My Ballot. All rights reserved.</p>
          <div className="landing-footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        initialView={authTab}
      />
    </div>
  )
}
