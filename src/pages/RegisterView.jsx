import usePageTitle from '../hooks/usePageTitle'
import { useApp } from '../contexts/AppContext'
import { REGISTRATION_LINKS } from '../data/registrationLinks'

export default function RegisterView() {
  usePageTitle('Voter Registration', 'Register to vote in your state and check your registration status')
  const { selectedState } = useApp()
  const regInfo = selectedState ? REGISTRATION_LINKS[selectedState.code] : null

  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">Register to Vote</h2>
        <p className="page-sub">
          {selectedState
            ? `Voter registration for ${selectedState.name}`
            : 'Select a state to see registration information'}
        </p>
      </div>

      <div className="page-content">
        {regInfo ? (
          <div className="register-grid">
            <div className="register-card register-card-primary">
              <h3>Register Online</h3>
              <p>Register to vote or update your registration in {selectedState.name}.</p>
              <a
                href={regInfo.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="register-link-btn"
              >
                Register to Vote &rarr;
              </a>
            </div>

            <div className="register-card">
              <h3>Check Registration Status</h3>
              <p>Verify that your voter registration is active and up to date.</p>
              <a
                href={regInfo.checkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="register-link-btn secondary"
              >
                Check Status &rarr;
              </a>
            </div>

            <div className="register-card">
              <h3>Key Dates</h3>
              <div className="key-dates">
                {regInfo.deadlines?.map((d, i) => (
                  <div key={i} className="date-item">
                    <span className="date-label">{d.label}</span>
                    <span className="date-value">{d.date}</span>
                  </div>
                ))}
                {(!regInfo.deadlines || regInfo.deadlines.length === 0) && (
                  <p className="muted-text">Check your state's official website for deadline information.</p>
                )}
              </div>
            </div>

            <div className="register-card">
              <h3>What You'll Need</h3>
              <ul className="requirements-list">
                {(regInfo.requirements || [
                  'Valid photo ID or last 4 digits of SSN',
                  'Current residential address',
                  'Date of birth',
                  'US citizenship',
                ]).map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="coming-soon-card">
            <span className="coming-soon-icon">📋</span>
            <h3>Select a State</h3>
            <p>Use the map or search bar to select your state and see voter registration information.</p>
            <a
              href="https://vote.org/register-to-vote/"
              target="_blank"
              rel="noopener noreferrer"
              className="register-link-btn"
            >
              Register at Vote.org &rarr;
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
