import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { useApp } from '../contexts/AppContext'
import ShareButton from '../components/ui/ShareButton'
import FounderQuoteBanner from '../components/ui/FounderQuoteBanner'
import { VOTING_QUOTES } from '../data/foundingValues'
import { getVoterInfo } from '../services/googleCivicApi'
import { geocodeToDistrict } from '../services/districtService'
import {
  STATE_ELECTION_RESOURCES,
  getStateElectionUrl,
  MI_ELECTIONS,
} from '../data/electionData'
import {
  MI_2026_GOVERNOR,
  MI_2026_SENATE,
  MI_2026_US_HOUSE,
  MI_2026_STATEWIDE,
  MI_2026_SUPREME_COURT,
} from '../data/mi2026Races'
import { REGISTRATION_LINKS } from '../data/registrationLinks'
import {
  requestNotificationPermission,
  scheduleReminder,
  hasReminder,
  getReminder,
  removeReminder,
  isElectionPast,
} from '../utils/reminders'

function parseElectionDate(election) {
  const dateStr = election.date || election.electionDay || election.dateRange
  if (!dateStr) return null
  const parsed = new Date(dateStr)
  if (isNaN(parsed.getTime())) return null
  return parsed
}

function formatIcsDate(date) {
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`
}

function generateIcsContent(election) {
  const parsed = parseElectionDate(election)
  if (!parsed) return null
  const startDate = formatIcsDate(parsed)
  const nextDay = new Date(parsed)
  nextDay.setDate(nextDay.getDate() + 1)
  const endDate = formatIcsDate(nextDay)

  const desc = election.registrationDeadline
    ? `Remember to vote!\\nRegistration deadline: ${election.registrationDeadline}\\nEarly voting: ${election.earlyVotingStart || 'Check your state'}\\n\\nPlan your ballot at buildmyballot.com`
    : 'Remember to vote! Plan your ballot at buildmyballot.com'

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//BuildMyBallot//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART;VALUE=DATE:${startDate}`,
    `DTEND;VALUE=DATE:${endDate}`,
    `SUMMARY:${election.name}`,
    `DESCRIPTION:${desc}`,
    'URL:https://mvic.sos.state.mi.us/Voter/Index',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    `DESCRIPTION:Tomorrow is ${election.name}! Make sure you're ready to vote.`,
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:-P7D',
    `ACTION:DISPLAY`,
    `DESCRIPTION:${election.name} is in one week. Check your polling location and ballot.`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

function getGoogleCalendarUrl(election) {
  const parsed = parseElectionDate(election)
  if (!parsed) return null
  const startDate = formatIcsDate(parsed)
  const nextDay = new Date(parsed)
  nextDay.setDate(nextDay.getDate() + 1)
  const endDate = formatIcsDate(nextDay)
  const details = election.registrationDeadline
    ? `Registration deadline: ${election.registrationDeadline}\nEarly voting: ${election.earlyVotingStart || 'Check your state'}\n\nFind your polling location at https://mvic.sos.state.mi.us/Voter/Index`
    : 'Find your polling location at https://mvic.sos.state.mi.us/Voter/Index'
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: election.name,
    dates: `${startDate}/${endDate}`,
    details,
    sf: 'true',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

function addToCalendar(election) {
  // Detect platform for best experience
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent)
  const isAndroid = /Android/.test(navigator.userAgent)
  const isCapacitor = !!window.Capacitor

  // On native Capacitor, try the .ics approach (iOS opens in Calendar app natively)
  // On mobile web, .ics works well on iOS, Google Calendar link on Android
  if (isAndroid && !isCapacitor) {
    const url = getGoogleCalendarUrl(election)
    if (url) {
      window.open(url, '_blank')
      return
    }
  }

  // Default: download .ics file (works great on iOS, macOS, Outlook, etc.)
  const icsContent = generateIcsContent(election)
  if (!icsContent) return
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  if (isIOS || isCapacitor) {
    // On iOS, opening the blob URL directly triggers the Calendar app
    window.open(url)
  } else {
    // Desktop: download the .ics file
    const a = document.createElement('a')
    a.href = url
    a.download = `${election.name.replace(/[^a-zA-Z0-9]/g, '_')}.ics`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  setTimeout(() => URL.revokeObjectURL(url), 5000)
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
  const [expanded, setExpanded] = useState(false)
  const hasDetail = (election.keyRaces?.length > 0) || (election.proposals?.length > 0)
  return (
    <div
      className={`election-card ${isGeneral ? 'election-card-general' : ''} ${featured ? 'election-card-featured' : ''}`}
      style={{ width: '100%' }}
    >
      <button
        type="button"
        onClick={onSelect ? () => onSelect(election) : undefined}
        style={{
          all: 'unset',
          cursor: onSelect ? 'pointer' : 'default',
          textAlign: 'left',
          width: '100%',
          display: 'block',
        }}
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
      </button>

      {hasDetail && (
        <div style={{ marginTop: '0.75rem' }}>
          <button
            type="button"
            onClick={() => setExpanded(e => !e)}
            className="election-expand-btn"
            style={{
              background: 'transparent',
              border: '1px solid var(--border, rgba(0,0,0,0.15))',
              borderRadius: '6px',
              padding: '0.4rem 0.8rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
              color: 'var(--text)',
            }}
          >
            {expanded ? '▾' : '▸'} {expanded ? 'Hide' : 'Show'} key races &amp; proposals
            {!expanded && (election.keyRaces?.length || election.proposals?.length) ? (
              <span style={{ opacity: 0.7, marginLeft: '0.4rem' }}>
                ({(election.keyRaces?.length || 0) + (election.proposals?.length || 0)})
              </span>
            ) : null}
          </button>

          {expanded && (
            <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {election.keyRaces?.length > 0 && (
                <div>
                  <strong style={{ fontSize: '0.9rem' }}>Key races</strong>
                  <div style={{ marginTop: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {election.keyRaces.map((race, i) => (
                      <div key={i} style={{ padding: '0.6rem 0.75rem', background: 'var(--bg-subtle, rgba(0,0,0,0.04))', borderRadius: '6px' }}>
                        <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{race.office}</div>
                        {race.note && (
                          <div style={{ fontSize: '0.82rem', opacity: 0.85, marginTop: '0.2rem' }}>{race.note}</div>
                        )}
                        {race.details && (
                          <div style={{ fontSize: '0.82rem', opacity: 0.85, marginTop: '0.2rem' }}>{race.details}</div>
                        )}
                        {race.candidates?.length > 0 && (
                          <div style={{ fontSize: '0.82rem', marginTop: '0.3rem' }}>
                            <span style={{ opacity: 0.7 }}>Candidates: </span>
                            {race.candidates.join(', ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {election.proposals?.length > 0 && (
                <div>
                  <strong style={{ fontSize: '0.9rem' }}>Ballot proposals</strong>
                  <div style={{ marginTop: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {election.proposals.map((prop, i) => (
                      <div key={i} style={{ padding: '0.6rem 0.75rem', background: 'var(--bg-subtle, rgba(0,0,0,0.04))', borderRadius: '6px' }}>
                        <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{prop.name}</div>
                        {prop.type && (
                          <div style={{ fontSize: '0.72rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.2rem' }}>
                            {prop.type}
                          </div>
                        )}
                        {prop.description && (
                          <div style={{ fontSize: '0.82rem', marginTop: '0.3rem' }}>{prop.description}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {onSelect === undefined && (
        <p className="election-note" style={{ marginTop: '0.5rem', opacity: 0.7 }}>
          Enter your address above to see your ballot
        </p>
      )}
      <div className="election-card-actions">
        {hasDownloadableDate && (
          <span
            className="add-to-calendar-btn"
            role="button"
            tabIndex={0}
            title="Add to Calendar"
            onClick={(e) => {
              e.stopPropagation()
              addToCalendar(election)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.stopPropagation()
                e.preventDefault()
                addToCalendar(election)
              }
            }}
          >
            <CalendarIcon />
            Add to Calendar
          </span>
        )}
        {!isPast && <RemindButton election={election} />}
      </div>
    </div>
  )
}

/* ── 2026 Race detail cards (Michigan) ── */

function getRatingColor(rating) {
  if (!rating) return null
  if (rating.includes('Toss-up')) return '#9C6BFF'
  if (rating.startsWith('Lean D') || rating.startsWith('Likely D') || rating.startsWith('Safe D')) return '#3B82F6'
  if (rating.startsWith('Lean R') || rating.startsWith('Likely R') || rating.startsWith('Safe R')) return '#EF4444'
  return null
}

function CandidateRow({ candidate, party }) {
  const partyAbbrev = party === 'democratic' ? 'D' : party === 'republican' ? 'R' : party === 'independent' ? 'I' : null
  const partyColor = party === 'democratic' ? '#3B82F6' : party === 'republican' ? '#EF4444' : party === 'independent' ? '#9CA3AF' : null
  return (
    <div style={{ padding: '0.6rem 0', borderBottom: '1px solid var(--border, rgba(0,0,0,0.08))' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{candidate.name}</span>
        {partyAbbrev && (
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: partyColor, padding: '0.1rem 0.4rem', border: `1px solid ${partyColor}`, borderRadius: '3px' }}>
            {partyAbbrev}
          </span>
        )}
        {candidate.status === 'frontrunner' && (
          <span style={{ fontSize: '0.7rem', background: '#FCD34D', color: '#78350F', padding: '0.1rem 0.4rem', borderRadius: '3px', fontWeight: 600 }}>
            FRONTRUNNER
          </span>
        )}
        {candidate.status === 'minor' && (
          <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>minor candidate</span>
        )}
      </div>
      {candidate.currentRole && (
        <div style={{ fontSize: '0.82rem', opacity: 0.85, marginTop: '0.2rem' }}>{candidate.currentRole}</div>
      )}
      {candidate.keyIssues?.length > 0 && (
        <div style={{ fontSize: '0.78rem', opacity: 0.8, marginTop: '0.25rem' }}>
          <span style={{ opacity: 0.7 }}>Key issues: </span>
          {candidate.keyIssues.join(' · ')}
        </div>
      )}
      {candidate.notes && (
        <div style={{ fontSize: '0.78rem', opacity: 0.75, marginTop: '0.25rem', fontStyle: 'italic' }}>{candidate.notes}</div>
      )}
      {candidate.website && (
        <a
          href={candidate.website}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.78rem', marginTop: '0.3rem', display: 'inline-block', textDecoration: 'underline' }}
        >
          Campaign site &rarr;
        </a>
      )}
    </div>
  )
}

function RaceCard({ race, title }) {
  const ratingColor = getRatingColor(race.cookRating)
  return (
    <div className="election-card" style={{ width: '100%' }}>
      <div className="election-card-header">
        <span className="election-type-badge general">{title || race.office}</span>
        {race.cookRating && (
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: ratingColor || 'inherit', padding: '0.15rem 0.5rem', border: `1px solid ${ratingColor || 'var(--border)'}`, borderRadius: '4px' }}>
            {race.cookRating}
          </span>
        )}
      </div>
      <h3 className="election-card-title">{race.office}</h3>
      {race.description && <p className="election-card-desc">{race.description}</p>}
      {race.incumbent && (
        <p className="election-note">
          <strong>Incumbent:</strong> {race.incumbent}
          {race.incumbentStatus === 'term-limited' && ' (term-limited)'}
          {race.incumbentStatus === 'retiring' && ' (retiring)'}
          {race.incumbentStatus === 'open' && ' (open seat)'}
        </p>
      )}
      {race.candidates?.democratic?.length > 0 && (
        <div style={{ marginTop: '0.8rem' }}>
          <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#3B82F6', marginBottom: '0.3rem' }}>
            DEMOCRATIC PRIMARY ({race.candidates.democratic.length})
          </div>
          {race.candidates.democratic.map((c, i) => (
            <CandidateRow key={i} candidate={c} party="democratic" />
          ))}
        </div>
      )}
      {race.candidates?.republican?.length > 0 && (
        <div style={{ marginTop: '0.8rem' }}>
          <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#EF4444', marginBottom: '0.3rem' }}>
            REPUBLICAN PRIMARY ({race.candidates.republican.length})
          </div>
          {race.candidates.republican.map((c, i) => (
            <CandidateRow key={i} candidate={c} party="republican" />
          ))}
        </div>
      )}
      {race.candidates?.independent?.length > 0 && (
        <div style={{ marginTop: '0.8rem' }}>
          <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#9CA3AF', marginBottom: '0.3rem' }}>
            INDEPENDENT ({race.candidates.independent.length})
          </div>
          {race.candidates.independent.map((c, i) => (
            <CandidateRow key={i} candidate={c} party="independent" />
          ))}
        </div>
      )}
    </div>
  )
}

function USHouseDistrictCard({ district }) {
  const ratingColor = getRatingColor(district.cookRating)
  const allCandidates = district.candidates || [
    ...(district.incumbent ? [{ ...district.incumbent, isIncumbent: true }] : []),
    ...(district.challengers || []),
  ]
  return (
    <div className="election-card" style={{ width: '100%' }}>
      <div className="election-card-header">
        <span className="election-type-badge general">U.S. House</span>
        {district.cookRating && (
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: ratingColor || 'inherit', padding: '0.15rem 0.5rem', border: `1px solid ${ratingColor || 'var(--border)'}`, borderRadius: '4px' }}>
            {district.cookRating}
          </span>
        )}
      </div>
      <h3 className="election-card-title">{district.district}</h3>
      {district.description && <p className="election-card-desc">{district.description}</p>}
      {district.incumbentName && (
        <p className="election-note"><strong>Open seat:</strong> {district.incumbentName}</p>
      )}
      <div style={{ marginTop: '0.6rem' }}>
        {allCandidates.map((c, i) => {
          const partyKey = c.party?.toLowerCase().startsWith('d') ? 'democratic' : c.party?.toLowerCase().startsWith('r') ? 'republican' : null
          return (
            <CandidateRow
              key={i}
              candidate={{
                name: c.name,
                website: c.website,
                currentRole: c.isIncumbent
                  ? `Incumbent since ${c.since || '?'}${c.notes ? ` — ${c.notes}` : ''}`
                  : c.notes,
                status: c.isIncumbent ? 'frontrunner' : undefined,
              }}
              party={partyKey}
            />
          )
        })}
        {allCandidates.length === 0 && (
          <p className="election-card-desc">No major challengers announced yet.</p>
        )}
      </div>
    </div>
  )
}

function SupremeCourtCard({ data }) {
  return (
    <div className="election-card" style={{ width: '100%' }}>
      <div className="election-card-header">
        <span className="election-type-badge general">Judicial</span>
        <span className="election-date">2 seats up</span>
      </div>
      <h3 className="election-card-title">{data.office}</h3>
      <p className="election-card-desc">{data.description}</p>
      {data.seats.map((seat, i) => (
        <div key={i} style={{ marginTop: '0.8rem', padding: '0.6rem', background: 'var(--bg-subtle, rgba(0,0,0,0.04))', borderRadius: '6px' }}>
          <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{seat.seat}</div>
          {seat.incumbent && (
            <CandidateRow
              candidate={{
                name: seat.incumbent.name,
                currentRole: `${seat.incumbent.currentRole}${seat.incumbent.notes ? ' — ' + seat.incumbent.notes : ''}`,
                status: 'frontrunner',
              }}
              party={seat.incumbent.nominatedBy === 'Democratic' ? 'democratic' : seat.incumbent.nominatedBy === 'Republican' ? 'republican' : null}
            />
          )}
          {seat.challengers && (
            <div style={{ fontSize: '0.82rem', marginTop: '0.4rem', opacity: 0.8 }}>{seat.challengers}</div>
          )}
        </div>
      ))}
    </div>
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

function ElectionsAddressBar({ userAddress, setUserAddress, handleSearchDistrict, selectedState }) {
  const [query, setQuery] = useState(userAddress || '')
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [open, setOpen] = useState(false)
  const debounceRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    function onClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  function handleChange(e) {
    const val = e.target.value
    setQuery(val)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (val.length < 5) { setSuggestions([]); setOpen(false); return }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=us&limit=5&q=${encodeURIComponent(val)}`)
        const data = await res.json()
        const filtered = data.filter(d => d.display_name.includes('Michigan'))
        setSuggestions(filtered)
        setOpen(filtered.length > 0)
      } catch { setSuggestions([]); setOpen(false) }
    }, 350)
  }

  async function submitAddress(address) {
    setQuery(address)
    setOpen(false)
    setSuggestions([])
    setUserAddress(address)
    setLoading(true)
    try {
      const geo = await geocodeToDistrict(address)
      if (geo && selectedState) {
        handleSearchDistrict(selectedState, geo.district, geo.matchedAddress, geo)
        if (geo.matchedAddress) {
          setUserAddress(geo.matchedAddress)
          setQuery(geo.matchedAddress)
        }
      }
    } catch { /* geocoding failed */ }
    finally { setLoading(false) }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (query.trim()) submitAddress(query.trim())
  }

  return (
    <form className="elections-address-bar" onSubmit={handleSubmit} ref={wrapRef}>
      <div className="elections-address-input-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="elections-address-icon">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
        <input
          type="text"
          className="elections-address-input"
          placeholder="Enter your Michigan address..."
          value={query}
          onChange={handleChange}
          aria-label="Enter your address"
        />
        <button type="submit" className="elections-address-btn" disabled={loading || !query.trim()}>
          {loading ? 'Finding...' : 'Find My Ballot'}
        </button>
      </div>
      {open && suggestions.length > 0 && (
        <ul className="elections-address-suggestions">
          {suggestions.map((s, i) => (
            <li key={i}>
              <button type="button" onClick={() => submitAddress(s.display_name)}>
                {s.display_name}
              </button>
            </li>
          ))}
        </ul>
      )}
      {userAddress && !loading && (
        <p className="elections-address-current">
          <span>Current:</span> {userAddress}
        </p>
      )}
    </form>
  )
}

export default function ElectionsView() {
  usePageTitle('Elections & Registration', 'Upcoming elections, voter registration, and ballot information')
  const { selectedState, elections, electionsLoading, userAddress, setUserAddress, handleSearchDistrict } = useApp()
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

  const isMI = stateCode === 'MI'
  const mi2026RaceCount = isMI ? (1 + 1 + MI_2026_US_HOUSE.length + MI_2026_STATEWIDE.length + 1) : 0

  const tabs = [
    { id: 'elections', label: 'Elections', count: realElections.length + stateElections.length },
    ...(hasBallot ? [{ id: 'ballot', label: 'My Ballot', count: (voterInfo.contests?.length || 0) }] : []),
    ...(isMI ? [{ id: 'races2026', label: '2026 Races', count: mi2026RaceCount }] : []),
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
        <ElectionsAddressBar
          userAddress={userAddress}
          setUserAddress={setUserAddress}
          handleSearchDistrict={handleSearchDistrict}
          selectedState={selectedState}
        />
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

        {/* ── 2026 Races tab (Michigan) ── */}
        {activeTab === 'races2026' && isMI && (
          <>
            <section className="elections-section">
              <h3 className="section-heading">Statewide Races</h3>
              <p className="detail-meta" style={{ marginBottom: '1rem' }}>
                Primary: August 4, 2026 &middot; General: November 3, 2026
              </p>
              <div className="elections-grid">
                <RaceCard race={MI_2026_GOVERNOR} title="Governor" />
                <RaceCard race={MI_2026_SENATE} title="U.S. Senate" />
                {MI_2026_STATEWIDE.map((race, i) => (
                  <RaceCard key={i} race={race} />
                ))}
                <SupremeCourtCard data={MI_2026_SUPREME_COURT} />
              </div>
            </section>

            <section className="elections-section">
              <h3 className="section-heading">
                U.S. House — All 13 Districts
                <span className="my-reps-group-count">{MI_2026_US_HOUSE.length}</span>
              </h3>
              <p className="detail-meta" style={{ marginBottom: '1rem' }}>
                Toss-up districts (MI-7, MI-8) are top national targets. MI-10 is an open seat (John James running for Governor).
              </p>
              <div className="elections-grid">
                {MI_2026_US_HOUSE.map((district, i) => (
                  <USHouseDistrictCard key={i} district={district} />
                ))}
              </div>
            </section>

            {selectedState && (
              <div className="page-share">
                <ShareButton
                  title="Michigan 2026 Races"
                  text="See the 2026 candidates running in Michigan — Build My Ballot"
                />
              </div>
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
