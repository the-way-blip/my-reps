import { useState, useMemo } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import StateMap from '../components/StateMap'
import MemberGrid from '../components/MemberGrid'
import StateRepGrid from '../components/StateRepGrid'
import LocalRepGrid from '../components/LocalRepGrid'
import { SkeletonGrid, SkeletonList } from '../components/ui/Skeleton'
import { useApp } from '../contexts/AppContext'
import FounderQuoteBanner from '../components/ui/FounderQuoteBanner'
import { REP_ALIGNMENT, gradeColor } from '../data/foundingValues'
import FreshnessIndicator, { RefreshDataButton } from '../components/ui/FreshnessIndicator'

/* ── Hardcoded executive & judicial data ── */

const FEDERAL_EXECUTIVE = [
  { name: 'Donald Trump', title: 'President', party: 'Republican', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg', source: 'executive' },
  { name: 'JD Vance', title: 'Vice President', party: 'Republican', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/J.D._Vance_official_Senate_portrait.jpg/220px-J.D._Vance_official_Senate_portrait.jpg', source: 'executive' },
]

const FEDERAL_JUDICIARY = [
  { name: 'John Roberts', title: 'Chief Justice', party: 'Republican', appointed: 'Bush', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Official_roberts_CJ.jpg/220px-Official_roberts_CJ.jpg', source: 'judiciary' },
  { name: 'Clarence Thomas', title: 'Associate Justice', party: 'Republican', appointed: 'H.W. Bush', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Clarence_Thomas_official_SCOTUS_portrait_%28cropped%29.jpg/220px-Clarence_Thomas_official_SCOTUS_portrait_%28cropped%29.jpg', source: 'judiciary' },
  { name: 'Samuel Alito', title: 'Associate Justice', party: 'Republican', appointed: 'Bush', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Samuel_Alito_official_photo.jpg/220px-Samuel_Alito_official_photo.jpg', source: 'judiciary' },
  { name: 'Neil Gorsuch', title: 'Associate Justice', party: 'Republican', appointed: 'Trump', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Associate_Justice_Neil_Gorsuch_Official_Portrait_%28cropped%29.jpg/220px-Associate_Justice_Neil_Gorsuch_Official_Portrait_%28cropped%29.jpg', source: 'judiciary' },
  { name: 'Brett Kavanaugh', title: 'Associate Justice', party: 'Republican', appointed: 'Trump', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Associate_Justice_Brett_Kavanaugh_Official_Portrait.jpg/220px-Associate_Justice_Brett_Kavanaugh_Official_Portrait.jpg', source: 'judiciary' },
  { name: 'Amy Coney Barrett', title: 'Associate Justice', party: 'Republican', appointed: 'Trump', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Official_Amy_Barrett_photo.jpg/220px-Official_Amy_Barrett_photo.jpg', source: 'judiciary' },
  { name: 'Sonia Sotomayor', title: 'Associate Justice', party: 'Democratic', appointed: 'Obama', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Sonia_Sotomayor_in_SCOTUS_robe.jpg/220px-Sonia_Sotomayor_in_SCOTUS_robe.jpg', source: 'judiciary' },
  { name: 'Elena Kagan', title: 'Associate Justice', party: 'Democratic', appointed: 'Obama', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Elena_Kagan_Official_SCOTUS_Portrait_%282013%29.jpg/220px-Elena_Kagan_Official_SCOTUS_Portrait_%282013%29.jpg', source: 'judiciary' },
  { name: 'Ketanji Brown Jackson', title: 'Associate Justice', party: 'Democratic', appointed: 'Biden', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ketanji_Brown_Jackson_official_SCOTUS_portrait.jpg/220px-Ketanji_Brown_Jackson_official_SCOTUS_portrait.jpg', source: 'judiciary' },
]

const STATE_EXECUTIVE = {
  Michigan: [
    { name: 'Gretchen Whitmer', title: 'Governor', party: 'Democratic', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/2025_Gretchen_Whitmer_%28cropped%29.jpg/220px-2025_Gretchen_Whitmer_%28cropped%29.jpg', source: 'executive' },
    { name: 'Garlin Gilchrist II', title: 'Lt. Governor', party: 'Democratic', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/8R4A9159_%2853359280492%29_%28Garlin_Gilchrist%29.jpg/220px-8R4A9159_%2853359280492%29_%28Garlin_Gilchrist%29.jpg', source: 'executive' },
    { name: 'Dana Nessel', title: 'Attorney General', party: 'Democratic', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Dana_Nessel_Michigan_Is_Preparing_for_%27Every_Scenario%27_on_Election_Day_THE_CIRCUS_SHOWTIME_0-25_screenshot_%28cropped%29.jpg/220px-Dana_Nessel_Michigan_Is_Preparing_for_%27Every_Scenario%27_on_Election_Day_THE_CIRCUS_SHOWTIME_0-25_screenshot_%28cropped%29.jpg', source: 'executive' },
    { name: 'Jocelyn Benson', title: 'Secretary of State', party: 'Democratic', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/SOS_Jocelyn_Benson_web.jpg/220px-SOS_Jocelyn_Benson_web.jpg', source: 'executive' },
    { name: 'Rachael Eubanks', title: 'State Treasurer', party: 'Democratic', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/National_Association_of_State_Treasurers_Conference_-_54597413425_%28cropped%29.jpg/220px-National_Association_of_State_Treasurers_Conference_-_54597413425_%28cropped%29.jpg', source: 'executive' },
  ],
}

const STATE_JUDICIARY = {
  Michigan: [
    { name: 'Megan Cavanagh', title: 'Chief Justice', party: 'Democratic', photoUrl: 'https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/cavanagh_headshot_2.jpg', source: 'judiciary' },
    { name: 'Richard Bernstein', title: 'Justice', party: 'Democratic', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Justice_Richard_Bernstein_in_Shanghai_02_%28cropped%29.jpg/220px-Justice_Richard_Bernstein_in_Shanghai_02_%28cropped%29.jpg', source: 'judiciary' },
    { name: 'Elizabeth Welch', title: 'Justice', party: 'Democratic', photoUrl: 'https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/ElizabethWelch1.png', source: 'judiciary' },
    { name: 'Kyra Harris Bolden', title: 'Justice', party: 'Democratic', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kyra_Harris_Bolden_%2852956402853%29_%281%29.jpg/220px-Kyra_Harris_Bolden_%2852956402853%29_%281%29.jpg', source: 'judiciary' },
    { name: 'Kimberly Thomas', title: 'Justice', party: 'Democratic', photoUrl: 'https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/KimberlyThomasMI24.png', source: 'judiciary' },
    { name: 'Brian Zahra', title: 'Justice', party: 'Republican', photoUrl: 'https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/BZahraMI.jpg', source: 'judiciary' },
    { name: 'Andrew Fink', title: 'Justice', party: 'Republican', photoUrl: 'https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/AndrewFink1.jpg', source: 'judiciary' },
  ],
}

/* ── Simple card for executive/judicial members ── */

function getInitials(name) {
  if (!name) return '?'
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  return parts[0][0]?.toUpperCase() || '?'
}

function InitialsCircle({ name, party }) {
  const cls = party === 'Democratic' ? 'party-d'
    : party === 'Republican' ? 'party-r' : 'party-i'
  return (
    <div className={`branch-initials ${cls}`}>
      {getInitials(name)}
    </div>
  )
}

function slugifyName(name) {
  return name?.toLowerCase().replace(/[^a-z]+/g, '-') || ''
}

function BranchCard({ person, onSelect }) {
  const partyClass = person.party === 'Democratic' ? 'dem'
    : person.party === 'Republican' ? 'rep'
    : 'ind'

  const prefix = person.source === 'executive' ? 'exec-' : 'judge-'
  const alignmentKey = prefix + slugifyName(person.name)
  const alignment = REP_ALIGNMENT[alignmentKey]

  const handleClick = () => {
    if (!onSelect) return
    onSelect({
      id: alignmentKey,
      name: person.name,
      officialName: person.name,
      title: person.title,
      partyName: person.party,
      photoUrl: person.photoUrl,
      source: person.source || 'executive',
      chamber: person.title,
      district: person.appointed ? `Appointed by ${person.appointed}` : '',
    })
  }

  return (
    <button className="state-rep-card" type="button" onClick={handleClick}>
      <div className="state-rep-photo-wrap">
        {person.photoUrl ? (
          <img
            src={person.photoUrl}
            alt={person.name}
            className="state-rep-photo"
            loading="lazy"
            onError={e => {
              e.target.onerror = null
              e.target.style.display = 'none'
              e.target.nextSibling?.classList?.remove('branch-initials-hidden')
            }}
          />
        ) : null}
        {person.photoUrl ? (
          <span className="branch-initials-hidden">
            <InitialsCircle name={person.name} party={person.party} />
          </span>
        ) : (
          <InitialsCircle name={person.name} party={person.party} />
        )}
        {person.party && (
          <span className={`party-badge party-${partyClass === 'dem' ? 'd' : partyClass === 'rep' ? 'r' : 'i'}`}>
            {partyClass === 'dem' ? 'D' : partyClass === 'rep' ? 'R' : 'I'}
          </span>
        )}
        {alignment && (
          <span className="alignment-badge" style={{ background: gradeColor(alignment.overall) }}>
            {alignment.overall}
          </span>
        )}
      </div>
      <div className="state-rep-info">
        <span className="state-rep-name">{person.name}</span>
        <span className="state-rep-detail">{person.title}</span>
        {person.party && (
          <span className={`state-rep-party party-${partyClass === 'dem' ? 'd' : partyClass === 'rep' ? 'r' : 'i'}`}>
            {person.party}
          </span>
        )}
      </div>
    </button>
  )
}

function BranchSection({ members, note, onSelect }) {
  return (
    <div className="state-rep-list">
      {members.map((p) => (
        <BranchCard key={p.name} person={p} onSelect={onSelect} />
      ))}
      {note && <p className="branch-note">{note}</p>}
    </div>
  )
}

export default function RepsView() {
  const {
    selectedState, setSelectedState,
    activeTab, setActiveTab,
    senators, reps, loading, error,
    setSelectedMember,
    highlightDistrict, setHighlightDistrict,
    handleDistrictClick,
    // State level
    stateSenators, stateReps, stateLoading,
    repLevel, setRepLevel,
    // Local
    localReps, localLoading,
    userAddress,
  } = useApp()

  usePageTitle(
    selectedState ? `${selectedState.name} Representatives` : 'Explore',
    'Explore federal, state, and local representatives with Constitutional alignment scores'
  )

  const [branch, setBranch] = useState('legislative')
  const [filterQuery, setFilterQuery] = useState('')

  const isFederal = repLevel === 'federal'
  const isState = repLevel === 'state'
  const isLocal = repLevel === 'local'

  const members = activeTab === 'senate'
    ? (isFederal ? senators : stateSenators)
    : (isFederal ? reps : stateReps)
  const isLoading = isFederal ? loading : isState ? stateLoading : localLoading

  const upperLabel = isFederal ? 'Senate' : 'State Senate'
  const lowerLabel = isFederal ? 'House' : 'State House'
  const upperCount = isFederal ? senators.length : stateSenators.length
  const lowerCount = isFederal ? reps.length : stateReps.length

  const stateName = selectedState?.name

  /* Resolve executive/judicial data for the current level */
  const executiveMembers = isFederal
    ? FEDERAL_EXECUTIVE
    : (STATE_EXECUTIVE[stateName] || null)

  const judiciaryMembers = isFederal
    ? FEDERAL_JUDICIARY
    : (STATE_JUDICIARY[stateName] || null)

  /* Delegation summary stats */
  const delegationStats = useMemo(() => {
    const all = [...senators, ...reps]
    if (all.length === 0) return null
    let dems = 0, reps_ = 0, other = 0
    all.forEach(m => {
      const p = (m.partyName || '').toLowerCase()
      if (p.includes('democrat')) dems++
      else if (p.includes('republican')) reps_++
      else other++
    })
    return { total: all.length, dems, reps: reps_, other }
  }, [senators, reps])

  const handleLevelChange = (level) => {
    setRepLevel(level)
    setActiveTab('senate')
    setBranch('legislative')
    setFilterQuery('')
  }

  /* Filter helpers */
  const matchesFilter = (name) =>
    name?.toLowerCase().includes(filterQuery.toLowerCase())

  const filteredMembers = filterQuery
    ? members.filter(m => matchesFilter(m.name || m.officialName))
    : members

  const filteredExecutive = filterQuery && executiveMembers
    ? executiveMembers.filter(m => matchesFilter(m.name))
    : executiveMembers

  const filteredJudiciary = filterQuery && judiciaryMembers
    ? judiciaryMembers.filter(m => matchesFilter(m.name))
    : judiciaryMembers

  const filteredLocalReps = filterQuery && localReps
    ? localReps.filter(m => matchesFilter(m.name || m.officialName))
    : localReps

  // Determine which district layer to show on the map
  const districtLayer = isFederal
    ? (activeTab === 'house' ? 'congressional' : 'congressional')
    : (activeTab === 'senate' ? 'stateSenate' : 'stateHouse')

  // Map reps for district overlay coloring
  const mapReps = isFederal ? reps
    : activeTab === 'senate' ? stateSenators : stateReps

  return (
    <div className={`layout ${selectedState ? 'has-state' : ''}`}>
      <section className="map-section">
        <StateMap
          selectedState={selectedState}
          onStateSelect={setSelectedState}
          reps={mapReps}
          highlightDistrict={highlightDistrict}
          onDistrictClick={handleDistrictClick}
          onDistrictHover={setHighlightDistrict}
          districtLayer={districtLayer}
        />
      </section>

      <FounderQuoteBanner />

      {selectedState && (
        <section className="reps-section">
          <div className="reps-header">
            <div className="reps-title-row">
              <h2 className="reps-title">{selectedState.name}</h2>
              <FreshnessIndicator
                sources={isFederal ? ['congress-api'] : ['openstates-api']}
                onRefresh={() => window.location.reload()}
              />
            </div>

            {/* Federal / State toggle */}
            <div className="level-toggle">
              <button
                className={`level-btn ${repLevel === 'federal' ? 'active' : ''}`}
                onClick={() => handleLevelChange('federal')}
              >
                Federal
              </button>
              <button
                className={`level-btn ${repLevel === 'state' ? 'active' : ''}`}
                onClick={() => handleLevelChange('state')}
              >
                State
              </button>
            </div>

            {/* Branch toggle (Federal & State only) */}
            {!isLocal && (
              <div className="branch-toggle">
                <button
                  className={`branch-btn ${branch === 'legislative' ? 'active' : ''}`}
                  onClick={() => { setBranch('legislative'); setFilterQuery('') }}
                >
                  Legislative
                </button>
                <button
                  className={`branch-btn ${branch === 'executive' ? 'active' : ''}`}
                  onClick={() => { setBranch('executive'); setFilterQuery('') }}
                >
                  Executive
                </button>
                <button
                  className={`branch-btn ${branch === 'judicial' ? 'active' : ''}`}
                  onClick={() => { setBranch('judicial'); setFilterQuery('') }}
                >
                  Judicial
                </button>
              </div>
            )}

            {/* Sub-tabs for legislative branch */}
            {!isLocal && branch === 'legislative' && (
              <div className="tabs">
                <button
                  className={`tab-btn ${activeTab === 'senate' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('senate'); setFilterQuery('') }}
                >
                  {upperLabel}
                  {upperCount > 0 && <span className="tab-count">{upperCount}</span>}
                </button>
                <button
                  className={`tab-btn ${activeTab === 'house' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('house'); setFilterQuery('') }}
                >
                  {lowerLabel}
                  {lowerCount > 0 && <span className="tab-count">{lowerCount}</span>}
                </button>
              </div>
            )}
          </div>

          <div className="reps-body">
            <div className="explore-search">
              <svg className="explore-search-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input
                type="text"
                className="explore-search-input"
                placeholder="Filter by name..."
                aria-label="Filter representatives by name"
                value={filterQuery}
                onChange={e => setFilterQuery(e.target.value)}
              />
              <RefreshDataButton onRefresh={() => window.location.reload()} />
            </div>

            {/* ── Legislative branch ── */}
            {branch === 'legislative' && (
              <>
                {isLoading && isFederal && <SkeletonGrid />}
                {isLoading && (isState || isLocal) && <SkeletonList />}
                {!isLoading && isFederal && error && (
                  <div className="error-box">
                    <p>Failed to load representatives.</p>
                    <p className="error-detail">{error}</p>
                  </div>
                )}
                {!isLoading && isFederal && !error && (
                  <>
                    <MemberGrid members={filteredMembers} onSelect={setSelectedMember} onHoverDistrict={setHighlightDistrict} highlightDistrict={highlightDistrict} />
                    {activeTab === 'senate' && delegationStats && (
                      <div className="delegation-summary">
                        <div className="delegation-header">
                          <h4 className="delegation-title">Full Delegation</h4>
                          <span className="delegation-total">{delegationStats.total} members</span>
                        </div>
                        <div className="delegation-bar">
                          <div className="delegation-bar-fill delegation-bar-d" style={{ flex: delegationStats.dems }} />
                          <div className="delegation-bar-fill delegation-bar-r" style={{ flex: delegationStats.reps }} />
                          {delegationStats.other > 0 && <div className="delegation-bar-fill delegation-bar-i" style={{ flex: delegationStats.other }} />}
                        </div>
                        <div className="delegation-legend">
                          <span className="delegation-legend-item"><span className="delegation-dot delegation-dot-d" />{delegationStats.dems} Democrat{delegationStats.dems !== 1 ? 's' : ''}</span>
                          <span className="delegation-legend-item"><span className="delegation-dot delegation-dot-r" />{delegationStats.reps} Republican{delegationStats.reps !== 1 ? 's' : ''}</span>
                          {delegationStats.other > 0 && <span className="delegation-legend-item"><span className="delegation-dot delegation-dot-i" />{delegationStats.other} Other</span>}
                        </div>
                        <button className="delegation-view-all" onClick={() => setActiveTab('house')}>
                          View House Members ({lowerCount})
                        </button>
                      </div>
                    )}
                  </>
                )}
                {!isLoading && isState && (
                  <StateRepGrid reps={filteredMembers} onSelect={setSelectedMember} />
                )}
                {!isLoading && isLocal && (
                  <LocalRepGrid
                    reps={filteredLocalReps}
                    onSelect={setSelectedMember}
                    hasAddress={!!userAddress}
                  />
                )}
              </>
            )}

            {/* ── Executive branch ── */}
            {branch === 'executive' && (
              filteredExecutive
                ? <BranchSection members={filteredExecutive} onSelect={setSelectedMember} />
                : <BranchSection
                    members={[]}
                    note={`Executive branch data is not yet available for ${stateName}. Currently only Michigan is supported.`}
                  />
            )}

            {/* ── Judicial branch ── */}
            {branch === 'judicial' && (
              filteredJudiciary
                ? <BranchSection members={filteredJudiciary} onSelect={setSelectedMember} />
                : <BranchSection
                    members={[]}
                    note={`Judicial branch data is not yet available for ${stateName}. Currently only Michigan is supported.`}
                  />
            )}
          </div>
        </section>
      )}
    </div>
  )
}
