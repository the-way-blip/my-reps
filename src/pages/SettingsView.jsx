import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { useApp } from '../contexts/AppContext'
import { STATES } from '../data/states'
import { openOnboarding } from '../components/ui/Onboarding'
import {
  getReminders,
  removeReminder,
  requestNotificationPermission,
} from '../utils/reminders'

/* ── localStorage keys used by the app ── */
const KEYS = {
  location: 'myreps_location',
  theme: 'myreps_theme',
  ballotPlan: 'myreps-ballot-plan',
  reminders: 'myreps_election_reminders',
  onboarding: 'myreps-onboarding-complete',
  tutorial: 'myreps_tutorial_done',
}

/* ── Simple accordion for FAQ ── */
function FaqItem({ question, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="settings-faq-item">
      <button
        className="settings-faq-question"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="settings-faq-arrow" aria-hidden="true">
          {open ? '\u25B2' : '\u25BC'}
        </span>
      </button>
      {open && <div className="settings-faq-answer">{children}</div>}
    </div>
  )
}

export default function SettingsView() {
  usePageTitle('Settings')

  const {
    selectedState,
    setSelectedState,
    userAddress,
    setUserAddress,
    clearState,
    setUserDistricts,
    setLocalGeo,
  } = useApp()

  /* ── Theme state (mirrors Header useTheme logic) ── */
  const [themeMode, setThemeMode] = useState(() => {
    const saved = localStorage.getItem(KEYS.theme)
    if (saved === 'dark') return 'dark'
    if (saved === 'light') return 'light'
    return 'system'
  })

  useEffect(() => {
    if (themeMode === 'system') {
      localStorage.removeItem(KEYS.theme)
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
    } else {
      localStorage.setItem(KEYS.theme, themeMode)
      document.documentElement.setAttribute('data-theme', themeMode)
    }
  }, [themeMode])

  /* ── Notification permission ── */
  const [notifPerm, setNotifPerm] = useState(() =>
    'Notification' in window ? Notification.permission : 'unsupported'
  )

  /* ── Election reminders ── */
  const [reminders, setReminders] = useState(() => getReminders())

  function refreshReminders() {
    setReminders(getReminders())
  }

  function handleRemoveReminder(electionId) {
    removeReminder({ id: electionId })
    refreshReminders()
  }

  async function handleEnableNotifications() {
    const result = await requestNotificationPermission()
    setNotifPerm(result)
  }

  /* ── Data management ── */
  const [confirmClearAll, setConfirmClearAll] = useState(false)

  function handleClearBallot() {
    localStorage.removeItem(KEYS.ballotPlan)
  }

  function handleClearAddress() {
    setUserAddress(null)
    setUserDistricts(null)
    setLocalGeo(null)
    // Re-save location without address
    const saved = localStorage.getItem(KEYS.location)
    if (saved) {
      try {
        const data = JSON.parse(saved)
        delete data.address
        delete data.districts
        delete data.localGeo
        localStorage.setItem(KEYS.location, JSON.stringify(data))
      } catch {}
    }
  }

  function handleClearAll() {
    if (!confirmClearAll) {
      setConfirmClearAll(true)
      return
    }
    Object.values(KEYS).forEach(key => localStorage.removeItem(key))
    setConfirmClearAll(false)
    window.location.reload()
  }

  const reminderEntries = Object.entries(reminders)

  return (
    <div className="page-container settings-page">
      <div className="page-header">
        <h2 className="page-title">Settings</h2>
        <p className="page-sub">Manage your preferences and app data</p>
      </div>

      {/* ── Location ── */}
      <section className="settings-section">
        <h3 className="settings-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Location
        </h3>
        <div className="settings-card">
          <label className="settings-label" htmlFor="settings-state">State</label>
          <select
            id="settings-state"
            className="settings-select"
            value={selectedState?.code || ''}
            onChange={e => {
              const st = STATES.find(s => s.code === e.target.value)
              if (st) setSelectedState(st)
            }}
          >
            <option value="">Select a state...</option>
            {STATES.map(s => (
              <option key={s.code} value={s.code}>{s.name} ({s.code})</option>
            ))}
          </select>

          <label className="settings-label settings-label-top">Saved Address</label>
          {userAddress ? (
            <div className="settings-address-display">
              <span>{userAddress}</span>
              <button className="settings-btn-text" onClick={handleClearAddress}>Clear</button>
            </div>
          ) : (
            <p className="settings-muted">No address saved. Use the search bar to enter your address.</p>
          )}
        </div>
      </section>

      {/* ── Appearance ── */}
      <section className="settings-section">
        <h3 className="settings-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          Appearance
        </h3>
        <div className="settings-card">
          <div className="settings-segmented" role="radiogroup" aria-label="Theme selection">
            {['light', 'dark', 'system'].map(mode => (
              <button
                key={mode}
                role="radio"
                aria-checked={themeMode === mode}
                className={`settings-seg-btn${themeMode === mode ? ' active' : ''}`}
                onClick={() => setThemeMode(mode)}
              >
                {mode === 'light' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                )}
                {mode === 'dark' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
                {mode === 'system' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                )}
                <span style={{ textTransform: 'capitalize' }}>{mode}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notifications ── */}
      <section className="settings-section">
        <h3 className="settings-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          Notifications
        </h3>
        <div className="settings-card">
          <div className="settings-row">
            <div>
              <span className="settings-label">Browser Notifications</span>
              <span className={`settings-badge ${notifPerm === 'granted' ? 'granted' : notifPerm === 'denied' ? 'denied' : 'default'}`}>
                {notifPerm === 'granted' ? 'Enabled' : notifPerm === 'denied' ? 'Blocked' : notifPerm === 'unsupported' ? 'Not Supported' : 'Not Set'}
              </span>
            </div>
            {notifPerm !== 'granted' && notifPerm !== 'unsupported' && (
              <button className="settings-btn" onClick={handleEnableNotifications}>
                {notifPerm === 'denied' ? 'Blocked by Browser' : 'Enable'}
              </button>
            )}
          </div>

          <div className="settings-divider" />

          <div>
            <span className="settings-label">Election Reminders</span>
            {reminderEntries.length === 0 ? (
              <p className="settings-muted">No election reminders set. You can add them from the Elections page.</p>
            ) : (
              <ul className="settings-reminder-list">
                {reminderEntries.map(([id, r]) => (
                  <li key={id} className="settings-reminder-item">
                    <div className="settings-reminder-info">
                      <strong>{r.electionName}</strong>
                      <span className="settings-muted">{r.electionDate}</span>
                    </div>
                    <button
                      className="settings-btn-danger-sm"
                      onClick={() => handleRemoveReminder(id)}
                      aria-label={`Remove reminder for ${r.electionName}`}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* ── Data Management ── */}
      <section className="settings-section">
        <h3 className="settings-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Data Management
        </h3>
        <div className="settings-card settings-danger-zone">
          <button className="settings-btn-outline" onClick={handleClearBallot}>
            Clear Ballot Plan
          </button>
          <button className="settings-btn-outline" onClick={handleClearAddress}>
            Clear Saved Address
          </button>
          <div className="settings-divider" />
          <div className="settings-danger-row">
            <div>
              <strong className="settings-danger-text">Clear All App Data</strong>
              <p className="settings-muted">This removes all saved preferences, ballot plan, reminders, and location data.</p>
            </div>
            <button
              className={`settings-btn-danger${confirmClearAll ? ' confirming' : ''}`}
              onClick={handleClearAll}
            >
              {confirmClearAll ? 'Confirm Clear All' : 'Clear All Data'}
            </button>
          </div>
          {confirmClearAll && (
            <button className="settings-btn-text" onClick={() => setConfirmClearAll(false)}>
              Cancel
            </button>
          )}
        </div>
      </section>

      {/* ── About ── */}
      <section className="settings-section">
        <h3 className="settings-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          About
        </h3>
        <div className="settings-card settings-about">
          <div className="settings-about-header">
            <img src="/logo.png" alt="Of For & By The People" className="settings-logo" />
            <div>
              <strong className="settings-app-name">Of For & By The People</strong>
              <span className="settings-version">v1.0.0</span>
            </div>
          </div>
          <p className="settings-about-desc">
            Research candidates. Plan your vote. Walk into the voting booth prepared with a personalized ballot plan for every race on election day.
          </p>
          <div className="settings-about-links">
            <Link to="/privacy" className="settings-link-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Privacy Policy
            </Link>
            <Link to="/terms" className="settings-link-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              Terms of Service
            </Link>
          </div>
        </div>
      </section>

      {/* ── Help ── */}
      <section className="settings-section">
        <h3 className="settings-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
          Help
        </h3>
        <div className="settings-card">
          <button className="settings-btn" onClick={openOnboarding}>
            Take the tour again
          </button>

          <div className="settings-divider" />

          <FaqItem question="How do I find my representatives?">
            <p>Select your state from the dropdown above or on the main page. For your exact district, enter your full address using the search bar at the top of the app. This will show your U.S. House member, state legislators, and local officials.</p>
          </FaqItem>

          <FaqItem question="How do election reminders work?">
            <p>On the Elections page, click the bell icon next to any upcoming election to set a reminder. You will receive a browser notification 7 days and 1 day before the election. Make sure browser notifications are enabled in the Notifications section above.</p>
          </FaqItem>

          <FaqItem question="How can I manage my data?">
            <p>You can clear all saved data at any time from the Data Management section above. Your ballot selections and preferences are stored so you can pick up where you left off.</p>
          </FaqItem>
        </div>
      </section>
    </div>
  )
}
