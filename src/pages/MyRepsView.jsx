import React, { useState, useEffect, useCallback, useRef } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import { useApp } from '../contexts/AppContext'
import ShareButton from '../components/ui/ShareButton'
import { geocodeToDistrict } from '../services/districtService'
import { STATE_BY_CODE } from '../data/states'
import { MI_STATEWIDE_OFFICIALS } from '../data/michiganLocalLoader'
import FounderQuoteBanner from '../components/ui/FounderQuoteBanner'

const CONGRESS_PHOTO = id =>
  `https://unitedstates.github.io/images/congress/225x275/${id}.jpg`

function partyClass(party) {
  if (!party) return 'party-i'
  const p = party.toLowerCase()
  if (p.includes('democrat')) return 'party-d'
  if (p.includes('republican')) return 'party-r'
  if (p.includes('nonpartisan') || p.includes('non-partisan')) return 'party-i'
  return 'party-i'
}

function partyLetter(party) {
  if (!party) return 'NP'
  const p = party.toLowerCase()
  if (p.includes('democrat')) return 'D'
  if (p.includes('republican')) return 'R'
  if (p.includes('nonpartisan') || p.includes('non-partisan')) return 'NP'
  return 'I'
}

function displayParty(party) {
  if (!party) return 'Nonpartisan'
  const p = party.toLowerCase()
  if (p === 'null' || p === 'undefined' || p === 'unknown' || p === '') return 'Nonpartisan'
  return party
}

function getInitials(name) {
  if (!name) return '?'
  const parts = name.replace(/,.*/, '').trim().split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  return parts[0][0]?.toUpperCase() || '?'
}

function getPhotoUrl(rep) {
  // Federal reps from Congress API use depiction.imageUrl
  if (rep.depiction?.imageUrl) return rep.depiction.imageUrl
  // Federal reps can use bioguideId fallback
  if (rep.bioguideId) return CONGRESS_PHOTO(rep.bioguideId)
  // State reps from OpenStates use photoUrl
  if (rep.photoUrl) return rep.photoUrl
  return null
}

function InitialsAvatar({ name, party }) {
  return (
    <div className={`myreps-initials-avatar ${partyClass(party)}`}>
      {getInitials(name)}
    </div>
  )
}

const RepCard = React.memo(function RepCard({ rep, onSelect }) {
  const photo = getPhotoUrl(rep)
  const partyName = rep.party || rep.partyName

  return (
    <div
      className="myreps-card"
      onClick={() => onSelect?.(rep)}
      role="button"
      tabIndex={0}
      aria-label={`${rep.name}, ${rep.office || rep.title}, ${displayParty(rep.party || rep.partyName)}`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect?.(rep) } }}
    >
      <div className="myreps-card-photo">
        {photo ? (
          <img
            src={photo}
            alt={rep.name}
            loading="lazy"
            onError={e => {
              e.target.onerror = null
              e.target.style.display = 'none'
              e.target.nextSibling?.classList?.remove('myreps-initials-hidden')
            }}
          />
        ) : null}
        {photo ? (
          <span className="myreps-initials-hidden">
            <InitialsAvatar name={rep.name} party={partyName} />
          </span>
        ) : (
          <InitialsAvatar name={rep.name} party={partyName} />
        )}
        <span className={`party-badge ${partyClass(partyName)}`}>
          {partyLetter(partyName)}
        </span>
      </div>
      <div className="myreps-card-info">
        <span className="myreps-card-name">{rep.name}</span>
        <span className="myreps-card-title">{rep.office || rep.title}</span>
        <span className={`myreps-card-party ${partyClass(partyName)}`}>{displayParty(partyName)}</span>
        {rep.contacts?.email && (
          <a
            href={`mailto:${rep.contacts.email}`}
            className="myreps-card-contact"
            onClick={e => e.stopPropagation()}
          >
            {rep.contacts.email}
          </a>
        )}
      </div>
      <div className="myreps-card-actions">
        {rep.contacts?.email && (
          <a
            href={`mailto:${rep.contacts.email}`}
            className="myreps-action-btn"
            title="Email"
            onClick={e => e.stopPropagation()}
          >
            Email
          </a>
        )}
        {rep.contacts?.phone && (
          <a
            href={`tel:${rep.contacts.phone}`}
            className="myreps-action-btn"
            title="Call"
            onClick={e => e.stopPropagation()}
          >
            Call
          </a>
        )}
        {(rep.contacts?.links?.[0] || rep.contacts?.website) && (
          <a
            href={rep.contacts.links?.[0] || rep.contacts.website}
            target="_blank"
            rel="noopener noreferrer"
            className="myreps-action-btn"
            title="Website"
            onClick={e => e.stopPropagation()}
          >
            Website
          </a>
        )}
        <ShareButton
          title={rep.name}
          text={`${rep.name} — ${rep.office || rep.title} (${partyName})`}
          className="myreps-action-btn"
        />
      </div>
    </div>
  )
})

const GROUP_ICONS = {
  federal: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M12 3l9 4.5v1.5H3V7.5L12 3z" /><path d="M4 10v7m4-7v7m4-7v7m4-7v7m4-7v7" /><path d="M2 20h20" /></svg>,
  state: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /><path d="M9 10h.01M15 10h.01" /></svg>,
  local: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><rect x="3" y="7" width="18" height="14" rx="1" /><path d="M3 11h18M7 7V4h10v3" /><path d="M10 14h4" /></svg>,
  school: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M12 3L2 9l10 6 10-6-10-6z" /><path d="M20 9v7" /><path d="M6 11.5v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></svg>,
  star: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" /></svg>,
}

function RepGroup({ title, icon, reps, onSelect }) {
  if (!reps || reps.length === 0) return null
  const iconEl = typeof icon === 'string' ? GROUP_ICONS[icon] || null : icon
  return (
    <div className="myreps-group">
      <h3 className="myreps-group-title">
        {iconEl && <span className="myreps-group-icon">{iconEl}</span>}
        {title}
        <span className="my-reps-group-count">{reps.length}</span>
      </h3>
      <div className="myreps-group-list">
        {reps.map(rep => (
          <RepCard key={rep.id || rep.name} rep={rep} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}

export default function MyRepsView() {
  const {
    userAddress, setUserAddress,
    userDistricts, setUserDistricts,
    senators, reps, loading,
    stateSenators, stateReps, stateLoading,
    selectedState, setSelectedState,
    setSelectedMember,
    localGeo, setLocalGeo,
    civicReps,
  } = useApp()

  usePageTitle('My Representatives', 'Your personalized representatives based on your address')

  const [addressInput, setAddressInput] = useState(userAddress || '')
  const [submitting, setSubmitting] = useState(false)
  const [addressError, setAddressError] = useState(null)
  const resultsRef = useRef(null)

  // Filter reps to only those representing the user's specific districts
  const federalReps = (() => {
    // Senators always represent the whole state
    const myReps = senators.map(s => ({
      ...s, id: `fed-sen-${s.bioguideId || s.name}`,
      office: 'U.S. Senator',
      level: 'federal',
    }))
    // House reps — filter to user's congressional district
    const cdDistrict = userDistricts?.congressional
    const filteredHouseReps = cdDistrict != null
      ? reps.filter(r => r.district === cdDistrict)
      : reps
    filteredHouseReps.forEach(r => {
      myReps.push({
        ...r, id: `fed-rep-${r.bioguideId || r.name}`,
        office: `U.S. Representative — District ${r.district}`,
        level: 'federal',
      })
    })
    return myReps
  })()

  // State Senate — filter to user's state senate district
  const stateUpper = (() => {
    const sd = userDistricts?.stateSenate
    const filtered = sd != null
      ? stateSenators.filter(s => String(s.district) === String(sd))
      : stateSenators
    return filtered.map(s => ({
      ...s, id: `state-sen-${s.id}`,
      office: `State Senator — District ${s.district}`,
      level: 'state',
    }))
  })()

  // State House — filter to user's state house district
  const stateLower = (() => {
    const hd = userDistricts?.stateHouse
    const filtered = hd != null
      ? stateReps.filter(r => String(r.district) === String(hd))
      : stateReps
    return filtered.map(r => ({
      ...r, id: `state-rep-${r.id}`,
      office: `State Representative — District ${r.district}`,
      level: 'state',
    }))
  })()

  // Convert civic officials (county, city, school board) into RepCard-compatible format
  const countyReps = (civicReps.county?.officials || []).map((o, i) => ({
    ...o, id: `county-${i}`, office: o.title, level: 'local',
    partyName: o.party, source: 'civic',
    governmentBody: civicReps.county?.name || 'County Government',
    contacts: { email: o.email, phone: o.phone, website: o.website || civicReps.county?.website },
  }))

  const cityReps = (civicReps.city?.officials || []).map((o, i) => ({
    ...o, id: `city-${i}`, office: o.title, level: 'local',
    partyName: o.party, source: 'civic',
    governmentBody: civicReps.city?.name || 'City Government',
    contacts: { email: o.email, phone: o.phone, website: o.website || civicReps.city?.website },
  }))

  const townshipReps = (civicReps.township?.officials || []).map((o, i) => ({
    ...o, id: `twp-${i}`, office: o.title, level: 'local',
    partyName: o.party, source: 'civic',
    governmentBody: civicReps.township?.name || 'Township Government',
    contacts: { email: o.email, phone: o.phone, website: o.website || civicReps.township?.website },
  }))

  const villageReps = (civicReps.village?.officials || []).map((o, i) => ({
    ...o, id: `village-${i}`, office: o.title, level: 'local',
    partyName: o.party, source: 'civic',
    governmentBody: civicReps.village?.name || 'Village Government',
    contacts: { email: o.email, phone: o.phone, website: o.website || civicReps.village?.website },
  }))

  const schoolReps = (civicReps.schoolBoard?.officials || []).map((o, i) => ({
    ...o, id: `school-${i}`, office: o.title, level: 'local',
    partyName: o.party, source: 'civic',
    governmentBody: civicReps.schoolBoard?.name || 'School Board',
    contacts: { email: o.email, phone: o.phone, website: o.website || civicReps.schoolBoard?.website },
  }))

  // Statewide officials (MI only)
  const statewideReps = selectedState?.code === 'MI'
    ? MI_STATEWIDE_OFFICIALS.officials.map((o, i) => ({
        ...o, id: `statewide-${i}`, office: o.title, level: 'state',
        partyName: o.party, source: 'civic',
        contacts: { phone: o.phone, website: o.website },
      }))
    : []

  const totalReps = federalReps.length + stateUpper.length + stateLower.length
    + countyReps.length + cityReps.length + townshipReps.length + villageReps.length
    + schoolReps.length + statewideReps.length

  const hasData = totalReps > 0
  const isLoading = loading || stateLoading || submitting

  // Count active government levels for summary
  const levelCount = [
    federalReps, stateUpper, stateLower, statewideReps,
    countyReps, cityReps, townshipReps, villageReps, schoolReps,
  ].filter(g => g.length > 0).length

  // Scroll to results when data finishes loading
  useEffect(() => {
    if (hasData && !isLoading && userAddress && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hasData, isLoading, userAddress])

  async function handleSubmit(e) {
    e.preventDefault()
    const addr = addressInput.trim()
    if (!addr) return

    // Basic validation: should have some structure (number + street, or zip)
    const hasZip = /\d{5}/.test(addr)
    const hasComma = addr.includes(',')
    const wordCount = addr.split(/\s+/).length
    if (wordCount < 3 && !hasZip) {
      setAddressError('Please enter a full street address (e.g., 123 Main St, Detroit, MI 48201)')
      return
    }

    setAddressError(null)
    setSubmitting(true)
    setUserAddress(addr)

    try {
      const geo = await geocodeToDistrict(addr)
      if (geo) {
        const state = STATE_BY_CODE[geo.stateCode]
        if (state) setSelectedState(state)
        setUserDistricts({
          congressional: geo.district,
          stateSenate: geo.stateUpperDistrict,
          stateHouse: geo.stateLowerDistrict,
        })
        // Store local geography for civic rep lookup
        setLocalGeo(geo)
      } else {
        setAddressError('Could not find that address. Try including city, state, and zip code.')
      }
    } catch {
      setAddressError('Address lookup failed. Please check the address and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="myreps-page">
      {/* Address entry section */}
      <div className="myreps-address-section">
        <div className="myreps-address-inner">
          <h2 className="myreps-heading">Who Represents You?</h2>
          <p className="myreps-subheading">
            Enter your address to see all of your elected officials — from Congress to your state legislature.
          </p>
          <form className="myreps-address-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="myreps-address-input"
              placeholder="Enter your full address (e.g., 123 Main St, Detroit, MI 48201)"
              aria-label="Enter your full street address"
              value={addressInput}
              onChange={e => { setAddressInput(e.target.value); setAddressError(null) }}
            />
            <button type="submit" className="myreps-address-btn" disabled={submitting}>
              {submitting ? 'Looking up...' : 'Find My Reps'}
            </button>
          </form>
          {addressError && (
            <div className="myreps-address-error" role="alert">
              {addressError}
            </div>
          )}
          {userAddress && (
            <div className="myreps-current-address">
              <p>
                Showing representatives for: <strong>{userAddress}</strong>
                {selectedState && <span> ({selectedState.name})</span>}
              </p>
              {userDistricts && (
                <div className="myreps-districts-info">
                  {userDistricts.congressional != null && (
                    <span className="myreps-district-badge">
                      Congressional District {userDistricts.congressional}
                    </span>
                  )}
                  {userDistricts.stateSenate != null && (
                    <span className="myreps-district-badge">
                      State Senate District {userDistricts.stateSenate}
                    </span>
                  )}
                  {userDistricts.stateHouse != null && (
                    <span className="myreps-district-badge">
                      State House District {userDistricts.stateHouse}
                    </span>
                  )}
                  {localGeo?.county && (
                    <span className="myreps-district-badge">
                      {localGeo.county} County
                    </span>
                  )}
                  {localGeo?.place && (
                    <span className="myreps-district-badge">
                      {localGeo.place}
                    </span>
                  )}
                  {localGeo?.schoolDistrict && (
                    <span className="myreps-district-badge">
                      {localGeo.schoolDistrict}
                    </span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <FounderQuoteBanner />

      {/* Results */}
      {isLoading && !hasData && (
        <div className="myreps-loading">
          <p>Finding your representatives...</p>
          <div className="myreps-loading-skeletons">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="myreps-card skeleton-card" style={{ padding: '0.75rem' }}>
                <div className="skeleton skeleton-circle" style={{ width: 56, height: 56 }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div className="skeleton skeleton-line" style={{ width: '70%', height: '0.8rem' }} />
                  <div className="skeleton skeleton-line" style={{ width: '50%', height: '0.65rem' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!userAddress && !isLoading && !hasData && (
        <div className="myreps-empty">
          <div className="myreps-empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48"><path d="M12 3l9 4.5v1.5H3V7.5L12 3z" /><path d="M4 10v7m4-7v7m4-7v7m4-7v7m4-7v7" /><path d="M2 20h20" /></svg>
          </div>
          <h3>Know Your Representatives</h3>
          <p>Enter your address above to discover who represents you at every level of government. You'll be able to see their contact information, party affiliation, and more.</p>
          <div className="myreps-empty-features">
            <div className="myreps-feature">
              <span className="myreps-feature-icon">{GROUP_ICONS.federal}</span>
              <span>U.S. Senators &amp; House Members</span>
            </div>
            <div className="myreps-feature">
              <span className="myreps-feature-icon">{GROUP_ICONS.state}</span>
              <span>State Senators &amp; Representatives</span>
            </div>
            <div className="myreps-feature">
              <span className="myreps-feature-icon">{GROUP_ICONS.local}</span>
              <span>County, City &amp; School Board (MI)</span>
            </div>
            <div className="myreps-feature">
              <span className="myreps-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </span>
              <span>Contact info &amp; websites</span>
            </div>
          </div>
        </div>
      )}

      {hasData && !userAddress && !isLoading && (
        <div className="myreps-address-hint">
          <p>Enter your address above to see only <strong>your</strong> representatives and local officials.</p>
        </div>
      )}

      {hasData && (
        <div className="myreps-results" ref={resultsRef}>
          {userAddress && !isLoading && (
            <p className="myreps-summary" aria-live="polite">
              Showing {totalReps} representative{totalReps !== 1 ? 's' : ''} across {levelCount} level{levelCount !== 1 ? 's' : ''} of government
            </p>
          )}
          <RepGroup
            title="Federal"
            icon="federal"
            reps={federalReps}
            onSelect={setSelectedMember}
          />
          {statewideReps.length > 0 && (
            <RepGroup
              title="Michigan Statewide Officials"
              icon="star"
              reps={statewideReps}
              onSelect={setSelectedMember}
            />
          )}
          <RepGroup
            title="State Senate"
            icon="state"
            reps={stateUpper}
            onSelect={setSelectedMember}
          />
          <RepGroup
            title="State House"
            icon="state"
            reps={stateLower}
            onSelect={setSelectedMember}
          />

          {/* Local government */}
          {countyReps.length > 0 && (
            <RepGroup
              title={civicReps.county?.name || 'County Government'}
              icon="local"
              reps={countyReps}
              onSelect={setSelectedMember}
            />
          )}
          {cityReps.length > 0 && (
            <RepGroup
              title={civicReps.city?.name || 'City Government'}
              icon="local"
              reps={cityReps}
              onSelect={setSelectedMember}
            />
          )}
          {townshipReps.length > 0 && (
            <RepGroup
              title={civicReps.township?.name || 'Township Government'}
              icon="local"
              reps={townshipReps}
              onSelect={setSelectedMember}
            />
          )}
          {villageReps.length > 0 && (
            <RepGroup
              title={civicReps.village?.name || 'Village Government'}
              icon="local"
              reps={villageReps}
              onSelect={setSelectedMember}
            />
          )}
          {schoolReps.length > 0 && (
            <RepGroup
              title={civicReps.schoolBoard?.name || 'School Board'}
              icon="school"
              reps={schoolReps}
              onSelect={setSelectedMember}
            />
          )}

          {/* Show note if Michigan but no local data */}
          {selectedState?.code === 'MI' && countyReps.length === 0 && cityReps.length === 0 && userAddress && !isLoading && (
            <div className="myreps-local-note">
              <p>Local government data (county, city, school board) is being expanded across Michigan. Data is currently available for Ann Arbor, Detroit, Grand Rapids, and select counties.</p>
            </div>
          )}
          {selectedState && selectedState.code !== 'MI' && userAddress && !isLoading && (
            <div className="myreps-local-note">
              <p>Local government data is currently available for Michigan addresses only. More states coming soon.</p>
            </div>
          )}

          {/* Data freshness banner */}
          {userAddress && !isLoading && (countyReps.length > 0 || cityReps.length > 0 || townshipReps.length > 0 || villageReps.length > 0 || schoolReps.length > 0) && (
            <div className="myreps-freshness-banner">
              <p>Local government data last verified: <strong>April 2026</strong>. Federal and state data is fetched live from Congress.gov and OpenStates.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
