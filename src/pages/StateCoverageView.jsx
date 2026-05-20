import { Link } from 'react-router-dom'

const STATES = [
  { name: 'Alabama', code: 'AL' },
  { name: 'Alaska', code: 'AK' },
  { name: 'Arizona', code: 'AZ' },
  { name: 'Arkansas', code: 'AR' },
  { name: 'California', code: 'CA' },
  { name: 'Colorado', code: 'CO' },
  { name: 'Connecticut', code: 'CT' },
  { name: 'Delaware', code: 'DE' },
  { name: 'Florida', code: 'FL' },
  { name: 'Georgia', code: 'GA' },
  { name: 'Hawaii', code: 'HI' },
  { name: 'Idaho', code: 'ID' },
  { name: 'Illinois', code: 'IL' },
  { name: 'Indiana', code: 'IN' },
  { name: 'Iowa', code: 'IA' },
  { name: 'Kansas', code: 'KS' },
  { name: 'Kentucky', code: 'KY' },
  { name: 'Louisiana', code: 'LA' },
  { name: 'Maine', code: 'ME' },
  { name: 'Maryland', code: 'MD' },
  { name: 'Massachusetts', code: 'MA' },
  { name: 'Michigan', code: 'MI' },
  { name: 'Minnesota', code: 'MN' },
  { name: 'Mississippi', code: 'MS' },
  { name: 'Missouri', code: 'MO' },
  { name: 'Montana', code: 'MT' },
  { name: 'Nebraska', code: 'NE' },
  { name: 'Nevada', code: 'NV' },
  { name: 'New Hampshire', code: 'NH' },
  { name: 'New Jersey', code: 'NJ' },
  { name: 'New Mexico', code: 'NM' },
  { name: 'New York', code: 'NY' },
  { name: 'North Carolina', code: 'NC' },
  { name: 'North Dakota', code: 'ND' },
  { name: 'Ohio', code: 'OH' },
  { name: 'Oklahoma', code: 'OK' },
  { name: 'Oregon', code: 'OR' },
  { name: 'Pennsylvania', code: 'PA' },
  { name: 'Rhode Island', code: 'RI' },
  { name: 'South Carolina', code: 'SC' },
  { name: 'South Dakota', code: 'SD' },
  { name: 'Tennessee', code: 'TN' },
  { name: 'Texas', code: 'TX' },
  { name: 'Utah', code: 'UT' },
  { name: 'Vermont', code: 'VT' },
  { name: 'Virginia', code: 'VA' },
  { name: 'Washington', code: 'WA' },
  { name: 'West Virginia', code: 'WV' },
  { name: 'Wisconsin', code: 'WI' },
  { name: 'Wyoming', code: 'WY' },
]

// States that currently have ballot data
const LIVE_STATES = ['MI']

export default function StateCoverageView() {
  const liveStates = STATES.filter(s => LIVE_STATES.includes(s.code))
  const comingStates = STATES.filter(s => !LIVE_STATES.includes(s.code))

  return (
    <div className="state-coverage">
      {/* Header */}
      <header className="state-coverage-header">
        <div className="state-coverage-header-inner">
          <Link to="/welcome" className="state-coverage-brand">
            <img src="/logo-icon-white.png" alt="Of For & By The People" className="state-coverage-logo" />
          </Link>
          <Link to="/welcome" className="state-coverage-back-btn">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="state-coverage-hero">
        <div className="state-coverage-hero-content">
          <h1>State Coverage</h1>
          <p>
            We're building ballot data and candidate grades for every state in America.
            See where we are today and what's coming next.
          </p>
          <div className="state-coverage-stats">
            <div className="state-coverage-stat">
              <span className="state-coverage-stat-num">{liveStates.length}</span>
              <span className="state-coverage-stat-label">Live Now</span>
            </div>
            <div className="state-coverage-stat">
              <span className="state-coverage-stat-num">{comingStates.length}</span>
              <span className="state-coverage-stat-label">Coming Soon</span>
            </div>
            <div className="state-coverage-stat">
              <span className="state-coverage-stat-num">50</span>
              <span className="state-coverage-stat-label">Total States</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live States */}
      <section className="state-coverage-section">
        <h2 className="state-coverage-section-title">
          <span className="state-coverage-live-dot"></span>
          Live Now
        </h2>
        <p className="state-coverage-section-desc">
          Full ballot data, candidate grades, and values alignment scores available.
        </p>
        <div className="state-coverage-grid">
          {liveStates.map(state => (
            <Link
              key={state.code}
              to="/welcome"
              className="state-coverage-card state-coverage-card-live"
            >
              <span className="state-coverage-code">{state.code}</span>
              <span className="state-coverage-name">{state.name}</span>
              <span className="state-coverage-badge state-coverage-badge-live">Live</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon States */}
      <section className="state-coverage-section">
        <h2 className="state-coverage-section-title">Coming Soon</h2>
        <p className="state-coverage-section-desc">
          We're actively working to bring ballot data and candidate grades to these states.
          Sign up to be notified when your state goes live.
        </p>
        <div className="state-coverage-grid">
          {comingStates.map(state => (
            <div
              key={state.code}
              className="state-coverage-card state-coverage-card-soon"
            >
              <span className="state-coverage-code">{state.code}</span>
              <span className="state-coverage-name">{state.name}</span>
              <span className="state-coverage-badge state-coverage-badge-soon">Coming Soon</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="state-coverage-cta">
        <h2>Don't see your state?</h2>
        <p>Sign up for free and we'll notify you when your state's data goes live.</p>
        <Link to="/welcome" className="state-coverage-cta-btn">
          Join For Free
        </Link>
      </section>

      {/* Footer */}
      <footer className="state-coverage-footer">
        <p>&copy; {new Date().getFullYear()} Of For &amp; By The People. All rights reserved.</p>
      </footer>
    </div>
  )
}
