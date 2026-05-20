import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from '../components/auth/AuthModal'

export default function LandingView() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [authOpen, setAuthOpen] = useState(false)
  const [authTab, setAuthTab] = useState('signup')

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
      {/* Header */}
      <header className="landing-header">
        <div className="landing-header-inner">
          <div className="landing-brand">
            <img src="/logo-icon-white.png" alt="Of For & By The People" className="landing-header-logo" />
          </div>
          <button className="landing-signin-btn" onClick={openSignIn}>
            Sign In
          </button>
        </div>
      </header>

      {/* Hero — Organization */}
      <section className="landing-hero">
        <div className="landing-hero-content landing-hero-centered">
          <img src="/logo.png" alt="Of For & By The People" className="landing-hero-logo" />
          <p className="landing-subheadline landing-subheadline-centered">
            Free tools for conservative voters who value faith, the Constitution,
            and limited government. Research candidates, grade your representatives,
            and walk into every election informed and ready.
          </p>
          <div className="landing-cta-group landing-cta-centered">
            <button className="landing-cta-primary" onClick={openSignUp}>
              Join For Free
            </button>
            <p className="landing-cta-sub">
              Free forever &middot; No credit card &middot; Takes 30 seconds
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="landing-mission">
        <div className="landing-mission-inner">
          <h2 className="landing-section-title">Our Mission</h2>
          <p className="landing-mission-text">
            America was built on Christian principles and Constitutional liberty. But
            today, finding out which candidates actually uphold those values takes hours
            of research most people don't have time for. We're building the civic toolkit
            that makes it easy for conservative voters to see where every candidate stands
            on the issues that matter — faith, family, the Second Amendment, fiscal
            responsibility, and the Constitutional rights our founders fought to protect.
          </p>
          <div className="landing-values">
            <div className="landing-value">
              <div className="landing-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="22"/><line x1="6" y1="8" x2="18" y2="8"/>
                </svg>
              </div>
              <h4>Faith-Driven</h4>
              <p>Grounded in Christian values and the belief that our rights come from God, not government.</p>
            </div>
            <div className="landing-value">
              <div className="landing-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>Constitutional</h4>
              <p>Every grade is measured against the Constitution and the founding principles that made America exceptional.</p>
            </div>
            <div className="landing-value">
              <div className="landing-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h4>100% Free</h4>
              <p>Every tool is free forever. No paywalls, no premium tiers — because informed voters strengthen our republic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="landing-tools">
        <h2 className="landing-section-title">Our Tools</h2>
        <p className="landing-section-subtitle">Everything you need to vote your values, all in one place.</p>
        <div className="landing-tools-grid">

          {/* Build My Ballot */}
          <Link to="/tools/ballot" className="landing-tool-card landing-tool-featured" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="landing-tool-badge">Live Now</div>
            <div className="landing-tool-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/>
              </svg>
            </div>
            <h3>Build My Ballot</h3>
            <p>
              See every race on your ballot, graded against Christian and
              Constitutional values. Compare candidates, pick your choices,
              and bring a printable plan to the polls.
            </p>
            <ul className="landing-tool-features">
              <li>Every candidate in your district</li>
              <li>Christian &amp; Constitutional values grades (A&ndash;F)</li>
              <li>Side-by-side candidate comparison</li>
              <li>Printable ballot plan for election day</li>
            </ul>
            <span className="landing-tool-learn-more">Learn More &rarr;</span>
          </Link>

          {/* Find My Reps */}
          <Link to="/tools/reps" className="landing-tool-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="landing-tool-badge landing-tool-badge-soon">Coming Soon</div>
            <div className="landing-tool-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Find My Reps</h3>
            <p>
              Look up every elected official who represents you and see how they
              score on the issues that matter — faith, family, the Constitution,
              and limited government.
            </p>
            <ul className="landing-tool-features">
              <li>Federal, state, and local representatives</li>
              <li>Values alignment scores &amp; voting records</li>
              <li>Direct contact information</li>
              <li>Hold them accountable to their promises</li>
            </ul>
            <span className="landing-tool-learn-more">Learn More &rarr;</span>
          </Link>

          {/* More Tools */}
          <div className="landing-tool-card landing-tool-more">
            <div className="landing-tool-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
            <h3>More Coming Soon</h3>
            <p>
              We're building new tools to help conservative voters stay informed
              and engaged. Founding documents, community insights, bill tracking,
              and more — all free.
            </p>
            <ul className="landing-tool-features">
              <li>Founding documents &amp; principles</li>
              <li>Community voting insights</li>
              <li>Bill and legislation tracker</li>
              <li>Election date reminders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="landing-bottom-cta">
        <h2>Government of the people, by the people, for the people.</h2>
        <p>Stand for Faith, Family, and our Founding Principles. Join the movement.</p>
        <button className="landing-cta-primary" onClick={openSignUp}>
          Create Your Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <p>&copy; {new Date().getFullYear()} Of For &amp; By The People. All rights reserved.</p>
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
