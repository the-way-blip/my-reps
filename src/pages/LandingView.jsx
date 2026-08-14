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
      {/* ── Header ── */}
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

      {/* ══════════════════════════════════════
         SB7 Element 1: CHARACTER
         The voter is the hero. Open with their desire.
         ══════════════════════════════════════ */}
      <section className="landing-hero">
        <div className="landing-hero-content landing-hero-centered">
          <img src="/logo.png" alt="Of For & By The People" className="landing-hero-logo" />
          <h1 className="landing-hero-headline">
            Walk Into Every Election Confident You're Voting Your Values
          </h1>
          <p className="landing-subheadline landing-subheadline-centered">
            You believe in faith, family, and the Constitution. Now you can see
            exactly which candidates share those convictions — graded on the
            issues that matter, ready in under two minutes.
          </p>
          <div className="landing-cta-group landing-cta-centered">
            <button className="landing-cta-primary" onClick={openSignUp}>
              Build My Ballot
            </button>
            <p className="landing-cta-sub">
              Takes 30 seconds &middot; No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SB7 Element 2: PROBLEM
         External, Internal, and Philosophical layers
         ══════════════════════════════════════ */}
      <section className="landing-problem">
        <div className="landing-problem-inner">
          <h2 className="landing-section-title">Voting Shouldn't Require a Research Project</h2>
          <p className="landing-section-subtitle">
            Three problems facing conservative voters today.
          </p>
          <div className="landing-problem-grid">
            {/* External Problem */}
            <div className="landing-problem-card">
              <div className="landing-problem-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <h3>Candidates Are Hard to Research</h3>
              <p>
                There are dozens of races on every ballot — from Congress down to
                school board — and credible information on most candidates simply
                doesn't exist in one place.
              </p>
            </div>
            {/* Internal Problem */}
            <div className="landing-problem-card">
              <div className="landing-problem-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="12" r="10"/><path d="M12 17h.01"/>
                </svg>
              </div>
              <h3>You Don't Want to Vote Blindly</h3>
              <p>
                Nobody wants to cast a ballot for someone who opposes everything
                they believe in. The uncertainty makes people skip races — or skip
                elections entirely.
              </p>
            </div>
            {/* Philosophical Problem */}
            <div className="landing-problem-card">
              <div className="landing-problem-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Our Values Deserve Better</h3>
              <p>
                In a republic founded on Christian principles and Constitutional
                liberty, every citizen should be able to hold their leaders
                accountable — not just the ones with time for hours of research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SB7 Element 3: GUIDE
         Position the platform as the empathetic authority
         ══════════════════════════════════════ */}
      <section className="landing-guide">
        <div className="landing-guide-inner">
          <div className="landing-guide-content">
            <p className="landing-guide-eyebrow">We Understand</p>
            <h2 className="landing-section-title landing-guide-title">
              We Built the Ballot Tool We Wished Existed
            </h2>
            <p className="landing-guide-text">
              We're conservative voters who got tired of showing up unprepared.
              So we built a tool that grades every candidate on your ballot
              using a clear, transparent rubric — rooted in the values we share:
              protection of unborn life, religious liberty, the Second Amendment,
              marriage &amp; family, limited government, and fiscal responsibility.
            </p>
            <div className="landing-guide-credentials">
              <div className="landing-guide-cred">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>30+ conservative organization scorecards</span>
              </div>
              <div className="landing-guide-cred">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Voting records carry the most weight</span>
              </div>
              <div className="landing-guide-cred">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Independent — no party affiliation</span>
              </div>
              <div className="landing-guide-cred">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Every level of government covered</span>
              </div>
            </div>
          </div>
          <div className="landing-guide-image">
            <img src="/hero-constitution.jpg" alt="We The People — the United States Constitution" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SB7 Element 4: PLAN
         Give a clear 3-step path
         ══════════════════════════════════════ */}
      <section className="landing-plan">
        <h2 className="landing-section-title">Three Steps to Voting Your Values</h2>
        <p className="landing-section-subtitle">
          It takes under two minutes. Here's how it works.
        </p>
        <div className="landing-plan-grid">
          <div className="landing-plan-step">
            <div className="landing-plan-number">1</div>
            <h3>Create Your Account</h3>
            <p>Sign up in 30 seconds and get instant access to your personalized ballot.</p>
          </div>
          <div className="landing-plan-connector" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
          <div className="landing-plan-step">
            <div className="landing-plan-number">2</div>
            <h3>Enter Your Address</h3>
            <p>We show you every race on your ballot with candidates graded A through F.</p>
          </div>
          <div className="landing-plan-connector" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
          <div className="landing-plan-step">
            <div className="landing-plan-number">3</div>
            <h3>Vote With Confidence</h3>
            <p>Compare candidates, pick your choices, and bring a printable plan to the polls.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SB7 Element 5: CALL TO ACTION (Direct)
         ══════════════════════════════════════ */}
      <section className="landing-direct-cta">
        <div className="landing-direct-cta-inner">
          <h2>Ready to See Your Ballot?</h2>
          <p>Know exactly which candidates align with your values before election day.</p>
          <button className="landing-cta-primary" onClick={openSignUp}>
            Build My Ballot
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SB7 Element 5b: TRANSITIONAL CTA
         Lower commitment — explore the tools
         ══════════════════════════════════════ */}
      <section className="landing-tools">
        <h2 className="landing-section-title">What's On Your Ballot?</h2>
        <p className="landing-section-subtitle">
          Enter your address and see every race you'll vote on — candidates graded
          on the values that matter most.
        </p>
        <div className="landing-ballot-hero-card" onClick={openSignUp}>
          <div className="landing-ballot-hero-left">
            <div className="landing-tool-badge">Live Now</div>
            <div className="landing-ballot-hero-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/>
              </svg>
            </div>
            <h3>Build My Ballot</h3>
            <p>
              See every race on your November 3rd general election ballot — Governor, US Senate,
              US House, State Legislature, and more. Every candidate graded A–F.
            </p>
            <span className="landing-ballot-hero-cta">Build My Ballot &rarr;</span>
          </div>
          <ul className="landing-ballot-hero-features">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Every candidate in your district
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" width="18" height="18"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18"/><path d="M12 3v18"/></svg>
              Values alignment grades (A–F)
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" width="18" height="18"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              Issue scorecards &amp; voting records
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" width="18" height="18"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              Printable ballot plan for the polls
            </li>
          </ul>
        </div>
        <p className="landing-tools-coming">
          More tools coming after the election — Find My Reps, bill tracking,
          founding documents, and more.
        </p>
      </section>

      {/* ══════════════════════════════════════
         SB7 Element 6: SUCCESS
         Paint the picture of life after using the platform
         ══════════════════════════════════════ */}
      <section className="landing-success">
        <h2 className="landing-section-title">Imagine Walking Into the Polls Prepared</h2>
        <div className="landing-success-grid">
          <div className="landing-success-item">
            <div className="landing-success-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h4>Every Race, Every Candidate — Graded</h4>
            <p>No more guessing. You know exactly which candidates align with your values before you step into the booth.</p>
          </div>
          <div className="landing-success-item">
            <div className="landing-success-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/>
              </svg>
            </div>
            <h4>A Printable Ballot Plan</h4>
            <p>Pick your candidates at home, print your selections, and bring your cheat sheet on election day. Done in minutes.</p>
          </div>
          <div className="landing-success-item">
            <div className="landing-success-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              </svg>
            </div>
            <h4>Share It With Your Church &amp; Community</h4>
            <p>Forward your ballot plan to friends and family. Help your entire community walk into the polls prepared and confident.</p>
          </div>
          <div className="landing-success-item">
            <div className="landing-success-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h4>Your Vote Protects What Matters</h4>
            <p>Faith, family, and freedom aren't abstract ideas — they're the foundation of our republic. Your informed vote defends them.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SB7 Element 7: FAILURE
         What's at stake if they don't act
         ══════════════════════════════════════ */}
      <section className="landing-stakes">
        <div className="landing-stakes-inner">
          <h2 className="landing-section-title landing-stakes-title">What Happens When We Stay Home?</h2>
          <div className="landing-stakes-grid">
            <div className="landing-stakes-item">
              <span className="landing-stakes-num">73%</span>
              <p>of eligible voters skip primary elections — the races where your vote has the biggest impact.</p>
            </div>
            <div className="landing-stakes-item">
              <span className="landing-stakes-num">62%</span>
              <p>of Americans can't name their state representative — let alone hold them accountable.</p>
            </div>
            <div className="landing-stakes-item">
              <span className="landing-stakes-num">1 in 3</span>
              <p>voters say they've voted for a candidate whose positions they later disagreed with.</p>
            </div>
          </div>
          <p className="landing-stakes-bottom">
            When conservative voters stay home or vote uninformed, the leaders
            who get elected don't reflect our values. That's a problem we can fix.
          </p>
        </div>
      </section>

      {/* State Coverage Banner */}
      <section className="landing-state-banner">
        <div className="landing-state-banner-inner">
          <div className="landing-state-banner-text">
            <h3>Growing Across America</h3>
            <p>
              We're building ballot data and candidate grades state by state.
              See which states have full coverage and what's coming next.
            </p>
          </div>
          <Link to="/states" className="landing-state-banner-btn">
            View State Coverage &rarr;
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════
         Final CTA — repeat the direct call to action
         ══════════════════════════════════════ */}
      <section className="landing-bottom-cta">
        <div className="landing-bottom-cta-overlay">
          <h2>Government of the people, by the people, for the people.</h2>
          <p>Stand for Faith, Family, and our Founding Principles. Join the movement.</p>
          <button className="landing-cta-primary" onClick={openSignUp}>
            Build My Ballot
          </button>
          <p className="landing-bottom-reassurance">
            30-second signup &middot; No credit card required
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <p>&copy; {new Date().getFullYear()} Of For &amp; By The People. All rights reserved.</p>
          <p className="landing-footer-disclaimer">
            Not paid for by any candidate or candidate's committee. Candidate grades are
            editorial opinions and not endorsed by any government entity or political party.
          </p>
          <div className="landing-footer-links">
            <Link to="/about">About</Link>
            <Link to="/methodology">Methodology</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
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
