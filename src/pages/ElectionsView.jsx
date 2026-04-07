import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { useApp } from '../contexts/AppContext'
import ShareButton from '../components/ui/ShareButton'
import FounderQuoteBanner from '../components/ui/FounderQuoteBanner'
import { VOTING_QUOTES } from '../data/foundingValues'
import { getVoterInfo } from '../services/googleCivicApi'
import {
  STATE_ELECTION_RESOURCES,
  getStateElectionUrl,
  MI_ELECTIONS,
} from '../data/electionData'
import { REGISTRATION_LINKS } from '../data/registrationLinks'
import {
  requestNotificationPermission,
  scheduleReminder,
  hasReminder,
  getReminder,
  removeReminder,
  isElectionPast,
} from '../utils/reminders'

function generateIcsContent(election) {
  const dateStr = election.date || election.electionDay || election.dateRange
  if (!dateStr) return null

  // Parse date string like "November 3, 2026" or "2026-11-03" into YYYYMMDD
  const parsed = new Date(dateStr)
  if (isNaN(parsed.getTime())) return null

  const pad = (n) => String(n).padStart(2, '0')
  const startDate = `${parsed.getFullYear()}${pad(parsed.getMonth() + 1)}${pad(parsed.getDate())}`
  const nextDay = new Date(parsed)
  nextDay.setDate(nextDay.getDate() + 1)
  const endDate = `${nextDay.getFullYear()}${pad(nextDay.getMonth() + 1)}${pad(nextDay.getDate())}`

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MyReps//EN',
    'BEGIN:VEVENT',
    `DTSTART;VALUE=DATE:${startDate}`,
    `DTEND;VALUE=DATE:${endDate}`,
    `SUMMARY:${election.name}`,
    'DESCRIPTION:Remember to vote! Find your polling location at MyReps.',
    'URL:https://www.vote.org/polling-place-locator/',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

function downloadIcs(election) {
  const icsContent = generateIcsContent(election)
  if (!icsContent) return
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${election.name.replace(/[^a-zA-Z0-9]/g, '_')}.ics`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function BellOffIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8" />
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" />
      <path d="M18 8a6 6 0 0 0-9.33-5" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

function RemindButton({ election }) {
  const [reminderSet, setReminderSet] = useState(() => hasReminder(election))
  const [showOptions, setShowOptions] = useState(false)
  const [message, setMessage] = useState(null)
  const currentReminder = reminderSet ? getReminder(election) : null

  // Determine which option label to show for existing reminder
  const currentLabel = currentReminder
    ? currentReminder.daysBefore.length === 2
      ? 'Both'
      : currentReminder.daysBefore[0] === 1
        ? '1 day before'
        : '1 week before'
    : null

  async function handleSetReminder(daysBefore) {
    const perm = await requestNotificationPermission()
    if (perm === 'unsupported') {
      setMessage('Notifications are not supported in this browser.')
      setTimeout(() => setMessage(null), 4000)
      return
    }
    if (perm === 'denied') {
      setMessage('Notifications blocked. Enable them in your browser settings.')
      setTimeout(() => setMessage(null), 4000)
      return
    }
    const success = scheduleReminder(election, daysBefore)
    if (success) {
      setReminderSet(true)
      setShowOptions(false)
      setMessage('Reminder set!')
      setTimeout(() => setMessage(null), 2500)
    }
  }

  function handleRemove(e) {
    e.stopPropagation()
    removeReminder(election)
    setReminderSet(false)
    setShowOptions(false)
    setMessage(null)
  }

  return (
    <div className="remind-btn-wrap" onClick={(e) => e.stopPropagation()}>
      <span
        className={`remind-btn ${reminderSet ? 'remind-btn-active' : ''}`}
        role="button"
        tabIndex={0}
        title={reminderSet ? 'Reminder set' : 'Set a reminder'}
        onClick={(e) => {
          e.stopPropagation()
          if (reminderSet) {
            setShowOptions(!showOptions)
          } else {
            setShowOptions(!showOptions)
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.stopPropagation()
            e.preventDefault()
            setShowOptions(!showOptions)
          }
        }}
      >
        {reminderSet ? <BellOffIcon /> : <BellIcon />}
        {reminderSet ? `Reminder Set (${currentLabel})` : 'Remind Me'}
      </span>

      {showOptions && (
        <div className="remind-options">
          {!reminderSet ? (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); handleSetReminder([1]) }}>1 day before</button>
              <button type="button" onClick={(e) => { e.stopPropagation(); handleSetReminder([7]) }}>1 week before</button>
              <button type="button" onClick={(e) => { e.stopPropagation(); handleSetReminder([1, 7]) }}>Both</button>
            </>
          ) : (
            <>
              <button type="button" className="remind-option-remove" onClick={handleRemove}>Remove Reminder</button>
            </>
          )}
        </div>
      )}

      {message && <span className="remind-message">{message}</span>}
    </div>
  )
}

function ElectionCard({ election, onSelect, featured }) {
  const isGeneral = election.type === 'general'
  const hasDownloadableDate = !!(election.date || election.electionDay)
  const isPast = isElectionPast(election)
  return (
    <button
      className={`election-card ${isGeneral ? 'election-card-general' : ''} ${featured ? 'election-card-featured' : ''}`}
      onClick={onSelect ? () => onSelect(election) : undefined}
      type="button"
      style={{ cursor: onSelect ? 'pointer' : 'default', textAlign: 'left', width: '100%' }}
    >
      <div className="election-card-header">
        <span className={`election-type-badge ${election.type}`}>
          {election.type === 'general' ? 'General' : election.type === 'primary' ? 'Primary' : 'Election'}
        </span>
        <span className="election-date">{election.date || election.dateRange || election.electionDay}</span>
      </div>
      <h3 className="election-card-title">{election.name}</h3>
      {election.description && <p className="election-card-desc">{election.description}</p>}
      {election.registrationDeadline && (
        <p className="election-deadline">
          <strong>Registration deadline:</strong> {election.registrationDeadline}
        </p>
      )}
      {election.offices && (
        <div className="election-offices">
          <strong>On the ballot:</strong>
          <ul>
            {election.offices.map((office, i) => (
              <li key={i}>{office}</li>
            ))}
          </ul>
        </div>
      )}
      {election.note && <p className="election-note">{election.note}</p>}
      {onSelect === undefined && <p className="election-note" style={{ marginTop: '0.5rem', opacity: 0.7 }}>Enter your address above to see your ballot</p>}
      <div className="election-card-actions">
        {hasDownloadableDate && (
          <span
            className="add-to-calendar-btn"
            role="button"
            tabIndex={0}
            title="Add to Calendar"
            onClick={(e) => {
              e.stopPropagation()
              downloadIcs(election)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.stopPropagation()
                e.preventDefault()
                downloadIcs(election)
              }
            }}
          >
            <CalendarIcon />
            Add to Calendar
          </span>
        )}
        {!isPast && <RemindButton election={election} />}
      </div>
    </button>
  )
}

function ContestCard({ contest }) {
  const isReferendum = !!contest.referendumTitle
  return (
    <div className="election-card">
      <div className="election-card-header">
        <span className={`election-type-badge ${isReferendum ? 'primary' : 'general'}`}>
          {isReferendum ? 'Ballot Measure' : 'Race'}
        </span>
        {contest.district?.name && (
          <span className="election-date">{contest.district.name}</span>
        )}
      </div>
      {isReferendum ? (
        <>
          <h3 className="election-card-title">{contest.referendumTitle}</h3>
          {contest.referendumSubtitle && <p className="election-card-desc">{contest.referendumSubtitle}</p>}
          {contest.referendumText && (
            <p className="election-card-desc" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
              {contest.referendumText.length > 300
                ? contest.referendumText.slice(0, 300) + '...'
                : contest.referendumText}
            </p>
          )}
          {contest.referendumBallotResponses?.length > 0 && (
            <div className="election-offices">
              <strong>Options:</strong>
              <ul>
                {contest.referendumBallotResponses.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          )}
        </>
      ) : (
        <>
          <h3 className="election-card-title">{contest.office}</h3>
          {contest.candidates?.length > 0 ? (
            <div className="candidates-list">
              {contest.candidates.map((c, i) => (
                <div key={i} className="candidate-row">
                  <span className="candidate-name">{c.name}</span>
                  {c.party && <span className="candidate-party">({c.party})</span>}
                </div>
              ))}
            </div>
          ) : (
            <p className="election-card-desc">No candidate information available yet.</p>
          )}
        </>
      )}
    </div>
  )
}

function PollingLocationCard({ location, label }) {
  return (
    <div className="election-card">
      <div className="election-card-header">
        <span className="election-type-badge general">{label}</span>
      </div>
      <h3 className="election-card-title">{location.name || 'Polling Location'}</h3>
      <p className="election-card-desc">{location.address}</p>
      {location.hours && <p className="election-note">Hours: {location.hours}</p>}
      {location.startDate && location.endDate && (
        <p className="election-note">{location.startDate} — {location.endDate}</p>
      )}
      {location.notes && <p className="election-note">{location.notes}</p>}
    </div>
  )
}

function ResourceLink({ label, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="resource-link">
      <span className="resource-link-text">{label}</span>
      <span className="resource-link-arrow">&rarr;</span>
    </a>
  )
}

function VotingInfoCard({ info }) {
  const items = [
    { label: 'Early Voting', value: info.earlyVoting, icon: '🗓' },
    { label: 'Absentee / Mail-In', value: info.absentee, icon: '📬' },
    { label: 'Same-Day Registration', value: info.sameDay, icon: '✍️' },
    { label: 'ID Requirements', value: info.idRequired, icon: '🪪' },
  ]
  return (
    <div className="voting-info-grid">
      {items.map((item, i) => (
        <div key={i} className="voting-info-item">
          <div className="voting-info-header">
            <span className="voting-info-icon">{item.icon}</span>
            <strong>{item.label}</strong>
          </div>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  )
}

export default function ElectionsView() {
  usePageTitle('Elections & Registration', 'Upcoming elections, voter registration, and ballot information')
  const { selectedState, elections, electionsLoading, userAddress } = useApp()
  const stateCode = selectedState?.code
  const stateResource = stateCode ? STATE_ELECTION_RESOURCES[stateCode] : null
  const regInfo = stateCode ? REGISTRATION_LINKS[stateCode] : null
  const stateElectionUrl = stateCode ? getStateElectionUrl(stateCode) : null
  const stateElections = stateCode === 'MI' ? MI_ELECTIONS : []

  const [voterInfo, setVoterInfo] = useState(null)
  const [voterInfoLoading, setVoterInfoLoading] = useState(false)
  const [selectedElection, setSelectedElection] = useState(null)
  const [activeTab, setActiveTab] = useState('elections')

  // Auto-fetch voter info when we have an address and elections
  useEffect(() => {
    if (!userAddress) {
      setVoterInfo(null)
      return
    }
    const realElections = elections.filter(e => e.id !== '2000')
    const stateOcd = stateCode ? `ocd-division/country:us/state:${stateCode.toLowerCase()}` : null
    const relevantElection = realElections.find(e => e.ocdDivisionId === stateOcd)
      || realElections[0]

    if (!relevantElection) return

    setSelectedElection(relevantElection)
    setVoterInfoLoading(true)
    getVoterInfo(userAddress, relevantElection.id)
      .then(setVoterInfo)
      .catch(err => {
        console.error('Voter info error:', err.message)
        setVoterInfo(null)
      })
      .finally(() => setVoterInfoLoading(false))
  }, [userAddress, elections, stateCode])

  function handleElectionSelect(election) {
    if (!userAddress) return
    setSelectedElection(election)
    setVoterInfoLoading(true)
    getVoterInfo(userAddress, election.id)
      .then(setVoterInfo)
      .catch(err => {
        console.error('Voter info error:', err.message)
        setVoterInfo(null)
      })
      .finally(() => setVoterInfoLoading(false))
  }

  const races = voterInfo?.contests?.filter(c => !c.referendumTitle) || []
  const ballotMeasures = voterInfo?.contests?.filter(c => c.referendumTitle) || []
  const pollingLocations = voterInfo?.pollingLocations || []
  const earlyVoteSites = voterInfo?.earlyVoteSites || []
  const dropOffLocations = voterInfo?.dropOffLocations || []

  const realElections = elections.filter(e => e.id !== '2000')
  const hasBallot = userAddress && voterInfo && selectedElection
  const hasPolling = pollingLocations.length > 0 || earlyVoteSites.length > 0 || dropOffLocations.length > 0

  const tabs = [
    { id: 'elections', label: 'Elections', count: realElections.length + stateElections.length },
    ...(hasBallot ? [{ id: 'ballot', label: 'My Ballot', count: (voterInfo.contests?.length || 0) }] : []),
    { id: 'register', label: 'Register' },
    ...(stateResource?.votingInfo ? [{ id: 'how-to', label: 'How to Vote' }] : []),
    { id: 'resources', label: 'Resources' },
  ]

  // Auto-switch to ballot tab when ballot data loads
  useEffect(() => {
    if (hasBallot && activeTab === 'elections') {
      setActiveTab('ballot')
    }
  }, [hasBallot])

  return (
    <div className="page-container elections-page">
      {/* Hero */}
      <div className="elections-hero">
        <h2 className="elections-hero-title">Elections & Registration</h2>
        <p className="elections-hero-sub">
          {selectedState
            ? `Know your elections, know your ballot, make your voice heard in ${selectedState.name}.`
            : 'Select a state to see election and registration information.'}
        </p>
        {!userAddress && selectedState && (
          <p className="elections-hero-cta">
            Enter your address in the search bar to see your personalized ballot and polling locations.
          </p>
        )}
      </div>

      <Link to="/ballot" className="ballot-hero-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        Plan My Ballot
      </Link>

      <FounderQuoteBanner quotes={VOTING_QUOTES} />

      {/* Tab navigation */}
      <div className="elections-tabs">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`elections-tab ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}
            type="button"
          >
            {t.label}
            {t.count != null && t.count > 0 && (
              <span className="elections-tab-count">{t.count}</span>
            )}
          </button>
        ))}
      </div>

      <div className="page-content">
        {/* ── Elections tab ── */}
        {activeTab === 'elections' && (
          <>
            {/* Upcoming elections from Google Civic API */}
            {realElections.length > 0 && (
              <section className="elections-section">
                <h3 className="section-heading">
                  Upcoming Elections
                  <span className="my-reps-group-count">{realElections.length}</span>
                </h3>
                {electionsLoading && <p className="detail-meta">Loading elections...</p>}
                <div className="elections-grid">
                  {realElections.map((el) => (
                    <ElectionCard
                      key={el.id}
                      election={{ ...el, type: el.name.toLowerCase().includes('primary') ? 'primary' : 'general' }}
                      onSelect={userAddress ? () => handleElectionSelect(el) : undefined}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* State-specific elections (static data) */}
            {stateElections.length > 0 && (
              <section className="elections-section">
                <h3 className="section-heading">{selectedState.name} Elections</h3>
                <div className="elections-grid">
                  {stateElections.map((el, i) => (
                    <ElectionCard key={i} election={el} featured={i === 0} />
                  ))}
                </div>
              </section>
            )}

            {realElections.length === 0 && stateElections.length === 0 && !electionsLoading && (
              <div className="elections-empty">
                <p>No upcoming elections found. Check back closer to election season.</p>
              </div>
            )}
          </>
        )}

        {/* ── My Ballot tab ── */}
        {activeTab === 'ballot' && hasBallot && (
          <>
            <section className="elections-section">
              <h3 className="section-heading">
                Your Ballot — {selectedElection.name}
                <span className="my-reps-group-count">{voterInfo.contests?.length || 0}</span>
              </h3>
              {voterInfoLoading && <p className="detail-meta">Loading ballot info...</p>}

              {races.length > 0 && (
                <>
                  <h4 className="section-subheading">Races ({races.length})</h4>
                  <div className="elections-grid">
                    {races.map((c, i) => <ContestCard key={i} contest={c} />)}
                  </div>
                </>
              )}

              {ballotMeasures.length > 0 && (
                <>
                  <h4 className="section-subheading">Ballot Measures ({ballotMeasures.length})</h4>
                  <div className="elections-grid">
                    {ballotMeasures.map((c, i) => <ContestCard key={i} contest={c} />)}
                  </div>
                </>
              )}

              {races.length === 0 && ballotMeasures.length === 0 && !voterInfoLoading && (
                <p className="detail-meta">No ballot information available yet for this election. Check back closer to election day.</p>
              )}
            </section>

            {/* Polling locations */}
            {hasPolling && (
              <section className="elections-section">
                <h3 className="section-heading">Where to Vote</h3>
                <div className="elections-grid">
                  {pollingLocations.map((loc, i) => (
                    <PollingLocationCard key={`poll-${i}`} location={loc} label="Polling Place" />
                  ))}
                  {earlyVoteSites.map((loc, i) => (
                    <PollingLocationCard key={`early-${i}`} location={loc} label="Early Voting" />
                  ))}
                  {dropOffLocations.map((loc, i) => (
                    <PollingLocationCard key={`drop-${i}`} location={loc} label="Drop-off" />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* ── Register tab ── */}
        {activeTab === 'register' && (
          <>
            {regInfo ? (
              <section className="elections-section">
                <h3 className="section-heading">Voter Registration — {selectedState?.name}</h3>

                {/* Registration availability badges */}
                <div className="register-badges">
                  <span className={`register-badge ${regInfo.onlineRegistration ? 'badge-yes' : 'badge-no'}`}>
                    {regInfo.onlineRegistration ? 'Online Registration Available' : 'No Online Registration'}
                  </span>
                  <span className={`register-badge ${regInfo.sameDayRegistration ? 'badge-yes' : 'badge-no'}`}>
                    {regInfo.sameDayRegistration ? 'Same-Day Registration' : 'No Same-Day Registration'}
                  </span>
                </div>

                {/* Helpful summary line */}
                <p className="register-summary">
                  {regInfo.onlineRegistration
                    ? `You can register to vote online in ${selectedState.name} — it only takes a few minutes.`
                    : `${selectedState.name} requires mail or in-person registration. Online registration is not available.`}
                  {regInfo.sameDayRegistration && ' Same-day registration is also available.'}
                </p>

                <div className="register-grid">
                  <div className="register-card register-card-primary">
                    <h4>Register to Vote</h4>
                    <p>
                      {regInfo.onlineRegistration
                        ? `Register online or update your registration in ${selectedState.name}.`
                        : `Start your voter registration in ${selectedState.name} — download forms or find your local office.`}
                    </p>
                    <a
                      href={regInfo.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="register-link-btn"
                    >
                      {regInfo.onlineRegistration ? 'Register Online' : 'Get Registration Form'} &rarr;
                    </a>
                  </div>

                  <div className="register-card register-card-check">
                    <h4>Check Your Registration Status</h4>
                    <p>Verify that your voter registration is active and your information is up to date before election day.</p>
                    <a
                      href={regInfo.checkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="register-link-btn secondary"
                    >
                      Check Registration Status &rarr;
                    </a>
                  </div>

                  {regInfo.deadlines?.length > 0 && (
                    <div className="register-card">
                      <h4>Key Dates &amp; Deadlines</h4>
                      <div className="key-dates">
                        {regInfo.deadlines.map((d, i) => (
                          <div key={i} className="date-item">
                            <span className="date-label">{d.label}</span>
                            <span className="date-value">{d.date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="register-card">
                    <h4>What You'll Need</h4>
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

                  {regInfo.notes && (
                    <div className="register-card register-card-note">
                      <h4>Good to Know</h4>
                      <p>{regInfo.notes}</p>
                    </div>
                  )}

                  {/* Michigan-specific detailed cards */}
                  {stateCode === 'MI' && regInfo.michiganDetails && (
                    <>
                      <div className="register-card register-card-mi">
                        <h4>Same-Day Registration</h4>
                        <p>{regInfo.michiganDetails.sameDayInfo}</p>
                      </div>
                      <div className="register-card register-card-mi">
                        <h4>Early Voting</h4>
                        <p>{regInfo.michiganDetails.earlyVotingInfo}</p>
                      </div>
                      <div className="register-card register-card-mi">
                        <h4>Absentee / Mail-In Voting</h4>
                        <p>{regInfo.michiganDetails.absenteeInfo}</p>
                      </div>
                      <div className="register-card register-card-mi">
                        <h4>Voter ID at the Polls</h4>
                        <p>{regInfo.michiganDetails.idInfo}</p>
                      </div>
                    </>
                  )}
                </div>
              </section>
            ) : (
              <div className="elections-empty">
                <p>{selectedState ? `Registration information for ${selectedState.name} is being added.` : 'Select a state to see registration information.'}</p>
              </div>
            )}
          </>
        )}

        {/* ── How to Vote tab ── */}
        {activeTab === 'how-to' && stateResource?.votingInfo && (
          <section className="elections-section">
            <h3 className="section-heading">How Voting Works in {selectedState.name}</h3>
            <VotingInfoCard info={stateResource.votingInfo} />
          </section>
        )}

        {/* ── Resources tab ── */}
        {activeTab === 'resources' && (
          <>
            {stateResource ? (
              <section className="elections-section">
                <h3 className="section-heading">Election Resources — {selectedState?.name}</h3>
                <div className="resources-grid">
                  {stateResource.resources.map((r, i) => (
                    <ResourceLink key={i} label={r.label} url={r.url} />
                  ))}
                </div>
              </section>
            ) : stateElectionUrl ? (
              <section className="elections-section">
                <h3 className="section-heading">Election Resources</h3>
                <div className="resources-grid">
                  <ResourceLink
                    label={`${selectedState.name} Elections Website`}
                    url={stateElectionUrl}
                  />
                </div>
              </section>
            ) : (
              <div className="elections-empty">
                <p>{selectedState ? `Resources for ${selectedState.name} are being added.` : 'Select a state to see election resources.'}</p>
              </div>
            )}

            {selectedState && (
              <div className="page-share">
                <ShareButton
                  title={`Elections in ${selectedState.name}`}
                  text={`Check out election information for ${selectedState.name} on MyReps`}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
