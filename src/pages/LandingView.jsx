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
            <span className="landing-parent-brand">Of For <span className="landing-ampersand">&amp;</span> By The People</span>
          </div>
          <button className="landing-signin-btn" onClick={openSignIn}>
            Sign In
          </button>
        </div>
      </header>

      {/* Hero — Organization */}
      <section className="landing-hero">
        <div className="landing-hero-content landing-hero-centered">
          <h1 className="landing-headline landing-headline-lg">
            Of For <span className="landing-ampersand-hero">&amp;</span> By The People
          </h1>
          <p className="landing-subheadline landing-subheadline-centered">
            We build free tools that put the power of democracy back in your hands.
            Research candidates, find your representatives, and walk into every
            election informed and ready.
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
            Democracy works best when people show up informed. But finding reliable,
            unbiased information about who's on your ballot shouldn't require hours of
            research. We're building the civic toolkit that makes it easy for every
            citizen to understand their government, know their options, and make their
            voice heard — from the top of the ticket to the most local race on your ballot.
          </p>
          <div className="landing-values">
            <div className="landing-value">
              <div className="landing-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h4>Nonpartisan</h4>
              <p>We don't tell you who to vote for. We give you the facts and let you decide.</p>
            </div>
            <div className="landing-value">
              <div className="landing-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h4>Transparent</h4>
              <p>Every grade and assessment is based on publicly available records you can verify yourself.</p>
            </div>
            <div className="landing-value">
              <div className="landing-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>For Everyone</h4>
              <p>Free tools for every citizen, regardless of party, background, or political experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="landing-tools">
        <h2 className="landing-section-title">Our Tools</h2>
        <p className="landing-section-subtitle">Everything you need to participate in democracy, all in one place.</p>
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
              Enter your address and see every race on your upcoming ballot. Research
              candidates with grades, positions, and background info. Save your picks
              and bring a printable ballot plan to the polls.
            </p>
            <ul className="landing-tool-features">
              <li>Every candidate in your district</li>
              <li>Values alignment grades (A&ndash;F)</li>
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
              Look up every elected official who represents you — from your city
              council member to your U.S. senators. See their voting records,
              contact info, and how to reach them.
            </p>
            <ul className="landing-tool-features">
              <li>Federal, state, and local representatives</li>
              <li>Voting records and key positions</li>
              <li>Direct contact information</li>
              <li>Committee assignments and leadership roles</li>
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
              We're building new tools to help you stay informed and engaged.
              Voter registration status, election reminders, bill tracking,
              and more — all free, all nonpartisan.
            </p>
            <ul className="landing-tool-features">
              <li>Voter registration checker</li>
              <li>Election date reminders</li>
              <li>Bill and legislation tracker</li>
              <li>Civic engagement resources</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="landing-bottom-cta">
        <h2>Government of the people, by the people, for the people.</h2>
        <p>Join us and take ownership of your democracy.</p>
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
