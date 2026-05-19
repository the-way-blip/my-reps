import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { useApp } from '../contexts/AppContext'
import { useAuth } from '../contexts/AuthContext'
import AddressAutocomplete from '../components/ui/AddressAutocomplete'
import { geocodeToDistrict } from '../services/districtService'
import { getVoterInfo } from '../services/googleCivicApi'
import { STATE_BY_CODE } from '../data/states'
import { PRIMARY_INFO } from '../data/michiganPrimary2026'

// ── MI SOS deep links ──
const MI_SOS_VOTER_LOOKUP = 'https://mvic.sos.state.mi.us/Voter/Index'
const MI_SOS_REGISTER = 'https://mvic.sos.state.mi.us/RegisterVoter'
const MI_SOS_ABSENTEE = 'https://mvic.sos.state.mi.us/AVApplication/Index'
const MI_SOS_SAMPLE_BALLOT = 'https://mvic.sos.state.mi.us/Voter/Index'

// ── Countdown helper ──
function daysUntil(dateStr) {
  const target = new Date(dateStr)
  const now = new Date()
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24))
  return diff > 0 ? diff : 0
}

// ── Address Entry Hero ──
function AddressHero({ onSubmit, loading }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) onSubmit(input.trim())
  }

  return (
    <div className="home-hero">
      <div className="home-hero-badge">Michigan Voter Hub</div>
      <h1 className="home-hero-title">
        Your vote starts here.
      </h1>
      <p className="home-hero-desc">
        Enter your address to see your representatives, plan your ballot, find your polling place, and check your registration — all in one place.
      </p>
      <form onSubmit={handleSubmit} className="home-hero-form">
        <AddressAutocomplete
          value={input}
          onChange={setInput}
          onSelect={(s) => { setInput(s.display); onSubmit(s.display) }}
          placeholder="Enter your Michigan address..."
          className="home-hero-input"
          autoFocus
        />
        <button type="submit" className="home-hero-btn" disabled={loading || !input.trim()}>
          {loading ? (
            <>
              <span className="home-spinner" />
              Looking up...
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              Find Everything
            </>
          )}
        </button>
      </form>
      <div className="home-hero-countdown">
        <span className="home-countdown-num">{daysUntil('2026-08-04')}</span>
        <span className="home-countdown-label">days until the August 4 primary</span>
      </div>
    </div>
  )
}

// ── Quick Action Card ──
function QuickCard({ icon, title, desc, to, href, accent, badge }) {
  const inner = (
    <>
      <div className="home-card-icon" style={accent ? { color: accent } : undefined}>{icon}</div>
      <div className="home-card-body">
        <h3 className="home-card-title">
          {title}
          {badge && <span className="home-card-badge" style={{ background: accent }}>{badge}</span>}
        </h3>
        <p className="home-card-desc">{desc}</p>
      </div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" className="home-card-arrow">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="home-card">
        {inner}
      </a>
    )
  }
  return (
    <Link to={to} className="home-card">
      {inner}
    </Link>
  )
}

// ── Dashboard (shown after address entry) ──
function Dashboard({ address, districts, pollingData, repsCount, onReset }) {
  const primaryDays = daysUntil('2026-08-04')

  // Polling location from Google Civic
  const pollingPlace = pollingData?.pollingLocations?.[0] || null
  const earlyVoteSite = pollingData?.earlyVoteSites?.[0] || null
  const dropOffSite = pollingData?.dropOffLocations?.[0] || null

  return (
    <div className="home-dashboard">
      {/* Address bar */}
      <div className="home-address-bar">
        <div className="home-address-info">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="home-address-text">{address}</span>
        </div>
        <button className="home-address-change" onClick={onReset}>Change address</button>
      </div>

      {/* District badges */}
      {districts && (
        <div className="home-districts">
          {districts.congressional != null && (
            <span className="home-district-badge">
              <strong>US House</strong> District {districts.congressional}
            </span>
          )}
          {districts.stateSenate != null && (
            <span className="home-district-badge">
              <strong>State Senate</strong> District {districts.stateSenate}
            </span>
          )}
          {districts.stateHouse != null && (
            <span className="home-district-badge">
              <strong>State House</strong> District {districts.stateHouse}
            </span>
          )}
        </div>
      )}

      {/* 4 main action panels */}
      <div className="home-panels">
        {/* 1. Your Representatives */}
        <QuickCard
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
              <path d="M3 21V7l9-4 9 4v14" /><path d="M9 21V11h6v10" /><path d="M3 7h18" />
            </svg>
          }
          title="Your Representatives"
          desc={repsCount > 0
            ? `${repsCount} officials represent you — from Congress to your local government.`
            : 'See every elected official who represents your address.'}
          to="/my-reps"
          accent="var(--accent)"
        />

        {/* 2. Your Ballot */}
        <QuickCard
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 10h18" />
              <path d="m9 16 2 2 4-4" />
            </svg>
          }
          title="Plan Your Ballot"
          desc="See who's running in the August primary, compare candidates, and lock in your picks."
          to="/ballot"
          accent="var(--accent-gold)"
          badge={`${primaryDays}d`}
        />

        {/* 3. Polling Place */}
        <div className="home-panel-polling">
          <div className="home-card home-card-polling">
            <div className="home-card-icon" style={{ color: 'var(--grade-a)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="home-card-body">
              <h3 className="home-card-title">Your Polling Place</h3>
              {pollingPlace ? (
                <div className="home-polling-details">
                  {pollingPlace.name && <p className="home-polling-name">{pollingPlace.name}</p>}
                  <p className="home-polling-addr">{pollingPlace.address}</p>
                  {pollingPlace.hours && <p className="home-polling-hours">{pollingPlace.hours}</p>}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pollingPlace.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-polling-map-link"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Open in Maps
                  </a>
                </div>
              ) : (
                <p className="home-card-desc">
                  Polling places are typically published 4-6 weeks before an election.
                  Check the Michigan SOS site for the latest.
                </p>
              )}
            </div>
          </div>

          {/* Early voting / drop-off */}
          {(earlyVoteSite || dropOffSite) && (
            <div className="home-polling-extra">
              {earlyVoteSite && (
                <div className="home-polling-extra-item">
                  <strong>Early Voting:</strong> {earlyVoteSite.name || earlyVoteSite.address}
                  {earlyVoteSite.startDate && ` (${earlyVoteSite.startDate} – ${earlyVoteSite.endDate})`}
                </div>
              )}
              {dropOffSite && (
                <div className="home-polling-extra-item">
                  <strong>Drop-off:</strong> {dropOffSite.name || dropOffSite.address}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 4. Registration Status */}
        <QuickCard
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          }
          title="Check Registration"
          desc="Verify you're registered to vote, request an absentee ballot, or register online."
          href={MI_SOS_VOTER_LOOKUP}
          accent="var(--accent-red)"
        />
      </div>

      {/* Key dates */}
      <div className="home-dates">
        <h3 className="home-dates-title">Key Dates — August 2026 Primary</h3>
        <div className="home-dates-grid">
          <div className="home-date-item">
            <span className="home-date-label">Registration Deadline</span>
            <span className="home-date-value">{PRIMARY_INFO.registrationDeadline}</span>
          </div>
          <div className="home-date-item">
            <span className="home-date-label">Early Voting Begins</span>
            <span className="home-date-value">{PRIMARY_INFO.earlyVotingStart}</span>
          </div>
          <div className="home-date-item">
            <span className="home-date-label">Absentee Deadline</span>
            <span className="home-date-value">{PRIMARY_INFO.absenteeDeadline}</span>
          </div>
          <div className="home-date-item home-date-primary">
            <span className="home-date-label">Primary Election Day</span>
            <span className="home-date-value">{PRIMARY_INFO.date}</span>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="home-quick-links">
        <a href={MI_SOS_REGISTER} target="_blank" rel="noopener noreferrer" className="home-quick-link">
          Register to Vote
        </a>
        <a href={MI_SOS_ABSENTEE} target="_blank" rel="noopener noreferrer" className="home-quick-link">
          Request Absentee Ballot
        </a>
        <a href={MI_SOS_SAMPLE_BALLOT} target="_blank" rel="noopener noreferrer" className="home-quick-link">
          Official Sample Ballot
        </a>
        <Link to="/elections" className="home-quick-link">
          Full Election Calendar
        </Link>
      </div>
    </div>
  )
}

// ── Main HomeView ──
export default function HomeView() {
  usePageTitle('Build My Ballot — Michigan', 'Your Michigan voter hub — reps, ballot, polling place, and registration')

  const navigate = useNavigate()
  const {
    userAddress, setUserAddress, userDistricts, setUserDistricts,
    handleSearchDistrict, localReps, senators, reps, stateSenators, stateReps,
    civicReps,
  } = useApp()

  const [loading, setLoading] = useState(false)
  const [pollingData, setPollingData] = useState(null)
  const [showDashboard, setShowDashboard] = useState(!!userAddress)

  // Count total reps — only YOUR representatives, not all Michigan legislators
  const repsCount = useMemo(() => {
    let count = 0

    // 2 US Senators (both represent all of Michigan)
    count += (senators?.length || 0)

    // 1 US House member for your congressional district
    if (userDistricts?.congressional != null) {
      const myRep = reps?.find(r => r.district === userDistricts.congressional)
      count += myRep ? 1 : 0
    }

    // 1 State Senator for your state senate district
    if (userDistricts?.stateSenate != null) {
      const mySen = stateSenators?.find(s => s.district === userDistricts.stateSenate || String(s.district) === String(userDistricts.stateSenate))
      count += mySen ? 1 : 0
    }

    // 1 State House rep for your state house district
    if (userDistricts?.stateHouse != null) {
      const myHouseRep = stateReps?.find(r => r.district === userDistricts.stateHouse || String(r.district) === String(userDistricts.stateHouse))
      count += myHouseRep ? 1 : 0
    }

    // Local civic officials (county, city, township, village, school board)
    if (civicReps) {
      for (const section of ['county', 'city', 'township', 'village', 'schoolBoard']) {
        const data = civicReps[section]
        if (data) {
          count += (data.officials || data.members || []).length
        }
      }
    }
    return count
  }, [senators, reps, stateSenators, stateReps, civicReps, userDistricts])

  // If we already have an address, show dashboard
  useEffect(() => {
    if (userAddress) {
      setShowDashboard(true)
    }
  }, [userAddress])

  // Fetch polling data when address is set
  const fetchPollingData = useCallback(async (address) => {
    try {
      const data = await getVoterInfo(address)
      setPollingData(data)
    } catch {
      // Polling data may not be available yet — that's okay
      setPollingData(null)
    }
  }, [])

  useEffect(() => {
    if (userAddress) {
      fetchPollingData(userAddress)
    }
  }, [userAddress, fetchPollingData])

  const handleAddressSubmit = async (address) => {
    setLoading(true)
    setUserAddress(address)

    try {
      const geo = await geocodeToDistrict(address)
      if (geo) {
        const state = STATE_BY_CODE[geo.stateCode]
        if (state) {
          handleSearchDistrict(state, geo.district, geo.matchedAddress, geo)
          setUserAddress(geo.matchedAddress || address)
        }
      }
    } catch {
      // Geocoding failed — still show dashboard with what we have
    }

    setShowDashboard(true)
    setLoading(false)
  }

  const handleReset = () => {
    setShowDashboard(false)
    setPollingData(null)
  }

  return (
    <div className="page-container home-page">
      {!showDashboard ? (
        <AddressHero onSubmit={handleAddressSubmit} loading={loading} />
      ) : (
        <Dashboard
          address={userAddress || ''}
          districts={userDistricts}
          pollingData={pollingData}
          repsCount={repsCount}
          onReset={handleReset}
        />
      )}
    </div>
  )
}
