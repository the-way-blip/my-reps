import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { STATES, STATE_BY_CODE } from '../data/states'
import { geocodeToDistrict } from '../services/districtService'
import { loadSearchData } from '../data/michiganLocalLoader'

/* ── Hardcoded executive & judicial data (mirrors RepsView.jsx) ── */

const FEDERAL_EXECUTIVE = [
  { name: 'Donald Trump', title: 'President', party: 'Republican', source: 'executive' },
  { name: 'JD Vance', title: 'Vice President', party: 'Republican', source: 'executive' },
]

const FEDERAL_JUDICIARY = [
  { name: 'John Roberts', title: 'Chief Justice', party: 'Republican', source: 'judiciary' },
  { name: 'Clarence Thomas', title: 'Associate Justice', party: 'Republican', source: 'judiciary' },
  { name: 'Samuel Alito', title: 'Associate Justice', party: 'Republican', source: 'judiciary' },
  { name: 'Neil Gorsuch', title: 'Associate Justice', party: 'Republican', source: 'judiciary' },
  { name: 'Brett Kavanaugh', title: 'Associate Justice', party: 'Republican', source: 'judiciary' },
  { name: 'Amy Coney Barrett', title: 'Associate Justice', party: 'Republican', source: 'judiciary' },
  { name: 'Sonia Sotomayor', title: 'Associate Justice', party: 'Democratic', source: 'judiciary' },
  { name: 'Elena Kagan', title: 'Associate Justice', party: 'Democratic', source: 'judiciary' },
  { name: 'Ketanji Brown Jackson', title: 'Associate Justice', party: 'Democratic', source: 'judiciary' },
]

const STATE_EXECUTIVE = {
  Michigan: [
    { name: 'Gretchen Whitmer', title: 'Governor', party: 'Democratic', source: 'executive' },
    { name: 'Garlin Gilchrist II', title: 'Lt. Governor', party: 'Democratic', source: 'executive' },
    { name: 'Dana Nessel', title: 'Attorney General', party: 'Democratic', source: 'executive' },
    { name: 'Jocelyn Benson', title: 'Secretary of State', party: 'Democratic', source: 'executive' },
  ],
}

const STATE_JUDICIARY = {
  Michigan: [
    { name: 'Megan Cavanagh', title: 'Chief Justice', party: 'Democratic', source: 'judiciary' },
    { name: 'Richard Bernstein', title: 'Justice', party: 'Democratic', source: 'judiciary' },
    { name: 'Elizabeth Welch', title: 'Justice', party: 'Democratic', source: 'judiciary' },
    { name: 'Kyra Harris Bolden', title: 'Justice', party: 'Democratic', source: 'judiciary' },
    { name: 'Kimberly Thomas', title: 'Justice', party: 'Democratic', source: 'judiciary' },
    { name: 'Brian Zahra', title: 'Justice', party: 'Republican', source: 'judiciary' },
    { name: 'Andrew Fink', title: 'Justice', party: 'Republican', source: 'judiciary' },
  ],
}

// Lazily-loaded Michigan search lists -- populated on first search
let MI_COUNTIES = []
let MI_CITIES = []
let _searchDataLoaded = false

function ensureSearchData() {
  if (_searchDataLoaded) return
  _searchDataLoaded = true
  loadSearchData().then(({ MI_COUNTY_OFFICIALS, MI_CITY_OFFICIALS }) => {
    MI_COUNTIES = Object.keys(MI_COUNTY_OFFICIALS).map(key => ({
      key, name: MI_COUNTY_OFFICIALS[key].name, label: `${key} County`,
    }))
    MI_CITIES = Object.keys(MI_CITY_OFFICIALS).map(key => ({
      key, name: MI_CITY_OFFICIALS[key].name,
    }))
  })
}

// Fetch location/address suggestions via Nominatim (OpenStreetMap) -- free, no API key
async function fetchAddressSuggestions(query) {
  if (query.length < 3) return []
  try {
    const params = new URLSearchParams({
      q: query,
      format: 'json',
      countrycodes: 'us',
      limit: '5',
      addressdetails: '1',
    })
    const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
      headers: { 'Accept': 'application/json' },
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.map(r => {
      const parts = r.display_name.split(',').map(s => s.trim())
      const locType = r.type === 'county' ? 'county'
        : r.type === 'city' || r.type === 'town' || r.type === 'village' ? 'city'
        : r.type === 'state' ? 'state'
        : r.type === 'township' ? 'township'
        : 'address'
      const emoji = locType === 'county' ? '\u{1F3E2}' : locType === 'city' ? '\u{1F3D9}\uFE0F'
        : locType === 'township' ? '\u{1F3D8}\uFE0F' : locType === 'state' ? '\u{1F5FA}\uFE0F' : '\u{1F4CD}'
      return {
        type: 'location',
        locType,
        emoji,
        label: parts.slice(0, 2).join(', '),
        sub: parts.slice(2, 5).join(', '),
        fullAddress: r.display_name,
        lat: r.lat,
        lon: r.lon,
        stateCode: r.address?.state_code?.toUpperCase() || null,
      }
    })
  } catch {
    return []
  }
}

const MAX_PER_CATEGORY = 5

/** Collect local officials from civicReps into a flat searchable array */
function flattenCivicReps(civicReps) {
  if (!civicReps) return []
  const results = []
  const sections = ['county', 'city', 'township', 'village', 'schoolBoard']
  for (const section of sections) {
    const data = civicReps[section]
    if (!data) continue
    // data has a shape like { name, officials: [...] } or similar
    const officials = data.officials || data.members || []
    for (const o of officials) {
      if (o && o.name) {
        results.push({
          name: o.name,
          title: o.title || o.role || section,
          party: o.party || null,
          localSection: section,
          source: 'local',
        })
      }
    }
  }
  return results
}

export default function SearchBar({ allMembers, stateSenators, stateReps, civicReps, selectedState, onSelectState, onSelectMember, onSelectDistrict, onSetAddress }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState({})
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [placeSuggestions, setPlaceSuggestions] = useState([])
  const [flatResults, setFlatResults] = useState([]) // flat list for submit/selection
  const wrapRef = useRef(null)
  const debounceRef = useRef(null)
  const addressDebounceRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const fetchPlaces = useCallback((q) => {
    clearTimeout(addressDebounceRef.current)
    if (q.length < 3) { setPlaceSuggestions([]); return }
    addressDebounceRef.current = setTimeout(() => {
      fetchAddressSuggestions(q).then(suggestions => {
        setPlaceSuggestions(suggestions)
        if (suggestions.length > 0) setOpen(true)
      })
    }, 300)
  }, [])

  function search(q) {
    if (!q.trim()) { setResults({}); setFlatResults([]); setPlaceSuggestions([]); setOpen(false); return }
    ensureSearchData()
    const lower = q.toLowerCase().trim()

    const categorized = {
      locations: [],
      federal: [],
      state: [],
      executive: [],
      judiciary: [],
      local: [],
    }

    // --- Locations: states, counties, cities ---
    STATES.forEach(s => {
      if (s.name.toLowerCase().includes(lower) || s.code.toLowerCase() === lower) {
        categorized.locations.push({ type: 'state', state: s, label: s.name, sub: 'State' })
      }
    })
    MI_COUNTIES.forEach(c => {
      if (c.key.toLowerCase().includes(lower) || c.label.toLowerCase().includes(lower)) {
        categorized.locations.push({ type: 'county', county: c.key, label: c.label, sub: 'Michigan \u2014 County Government' })
      }
    })
    MI_CITIES.forEach(c => {
      if (c.key.toLowerCase().includes(lower)) {
        categorized.locations.push({ type: 'city', city: c.key, label: c.name, sub: 'Michigan \u2014 City Government' })
      }
    })

    // --- Federal members (senators + house reps) ---
    if (allMembers?.length) {
      allMembers.forEach(m => {
        if (m.name?.toLowerCase().includes(lower)) {
          const role = m.district != null ? `District ${m.district}` : 'Senator'
          categorized.federal.push({ type: 'member', member: m, label: m.name, sub: `${m.state} \u2014 ${role}`, party: m.partyName })
        }
      })
    }

    // --- State legislators ---
    const stateName = selectedState?.name || ''
    if (stateSenators?.length) {
      stateSenators.forEach(m => {
        const name = m.name || m.officialName || ''
        if (name.toLowerCase().includes(lower)) {
          categorized.state.push({
            type: 'state-legislator', member: m, label: name,
            sub: `${stateName} State Senate \u2014 District ${m.district || ''}`,
            party: m.partyName || m.party || null,
          })
        }
      })
    }
    if (stateReps?.length) {
      stateReps.forEach(m => {
        const name = m.name || m.officialName || ''
        if (name.toLowerCase().includes(lower)) {
          categorized.state.push({
            type: 'state-legislator', member: m, label: name,
            sub: `${stateName} State House \u2014 District ${m.district || ''}`,
            party: m.partyName || m.party || null,
          })
        }
      })
    }

    // --- Executive branch ---
    FEDERAL_EXECUTIVE.forEach(p => {
      if (p.name.toLowerCase().includes(lower)) {
        categorized.executive.push({
          type: 'executive', person: p, label: p.name,
          sub: `Federal \u2014 ${p.title}`, party: p.party,
        })
      }
    })
    if (stateName && STATE_EXECUTIVE[stateName]) {
      STATE_EXECUTIVE[stateName].forEach(p => {
        if (p.name.toLowerCase().includes(lower)) {
          categorized.executive.push({
            type: 'executive', person: p, label: p.name,
            sub: `${stateName} \u2014 ${p.title}`, party: p.party,
          })
        }
      })
    }

    // --- Judiciary ---
    FEDERAL_JUDICIARY.forEach(p => {
      if (p.name.toLowerCase().includes(lower)) {
        categorized.judiciary.push({
          type: 'judiciary', person: p, label: p.name,
          sub: `SCOTUS \u2014 ${p.title}`, party: p.party,
        })
      }
    })
    if (stateName && STATE_JUDICIARY[stateName]) {
      STATE_JUDICIARY[stateName].forEach(p => {
        if (p.name.toLowerCase().includes(lower)) {
          categorized.judiciary.push({
            type: 'judiciary', person: p, label: p.name,
            sub: `${stateName} Supreme Court \u2014 ${p.title}`, party: p.party,
          })
        }
      })
    }

    // --- Local officials ---
    const localOfficials = flattenCivicReps(civicReps)
    localOfficials.forEach(o => {
      if (o.name.toLowerCase().includes(lower)) {
        categorized.local.push({
          type: 'local-official', person: o, label: o.name,
          sub: `Local \u2014 ${o.title}`, party: o.party,
        })
      }
    })

    // Trim each category to MAX_PER_CATEGORY
    for (const key of Object.keys(categorized)) {
      categorized[key] = categorized[key].slice(0, MAX_PER_CATEGORY)
    }

    // Build flat results for "select first" on submit
    const flat = [
      ...categorized.locations,
      ...categorized.federal,
      ...categorized.state,
      ...categorized.executive,
      ...categorized.judiciary,
      ...categorized.local,
    ]

    setResults(categorized)
    setFlatResults(flat)
    const hasHits = flat.length > 0
    setOpen(hasHits || q.trim().length >= 3)

    // Fetch location/address autocomplete suggestions from Nominatim
    fetchPlaces(q)
  }

  function handleInput(e) {
    const val = e.target.value
    setQuery(val)
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => search(val), 150)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!query.trim()) return

    const looksLikeAddress = /\d/.test(query)

    if (flatResults.length > 0 && !looksLikeAddress) {
      selectResult(flatResults[0])
      return
    }
    if (flatResults.length > 0 && (flatResults[0].type === 'county' || flatResults[0].type === 'city')) {
      selectResult(flatResults[0])
      return
    }
    if (placeSuggestions.length > 0) {
      selectResult(placeSuggestions[0])
      return
    }

    // Set address immediately for Google Civic lookup (My Reps tab)
    if (onSetAddress) onSetAddress(query.trim())
    setOpen(false)
    setQuery('')
    setPlaceSuggestions([])
    navigate('/my-reps')

    // Geocode for district/state selection
    setLoading(true)
    try {
      const geo = await geocodeToDistrict(query)
      if (geo) {
        const state = STATE_BY_CODE[geo.stateCode]
        if (state) {
          onSelectDistrict(state, geo.district, geo.matchedAddress, geo)
          if (onSetAddress) onSetAddress(geo.matchedAddress || query.trim())
        }
      }
    } catch {
      // geocoding failed
    } finally {
      setLoading(false)
    }
  }

  function slugifyName(name) {
    return name?.toLowerCase().replace(/[^a-z]+/g, '-') || ''
  }

  async function selectResult(r) {
    if (r.type === 'state') {
      onSelectState(r.state)
    } else if (r.type === 'county') {
      const miState = STATE_BY_CODE['MI']
      if (miState) onSelectState(miState)
      if (onSetAddress) onSetAddress(`${r.county} County, Michigan`)
      if (onSelectDistrict) {
        onSelectDistrict(miState, null, null, {
          stateCode: 'MI', county: r.county,
          place: null, countySubdivision: null, schoolDistrict: null,
        })
      }
      navigate('/my-reps')
    } else if (r.type === 'city') {
      const miState = STATE_BY_CODE['MI']
      if (miState) onSelectState(miState)
      if (onSetAddress) onSetAddress(`${r.city}, Michigan`)
      if (onSelectDistrict) {
        onSelectDistrict(miState, null, null, {
          stateCode: 'MI', county: null,
          place: r.city, countySubdivision: r.city, schoolDistrict: null,
        })
      }
      navigate('/my-reps')
    } else if (r.type === 'member') {
      const state = STATES.find(s => s.name === r.member.state)
      if (state) onSelectMember(state, r.member)
    } else if (r.type === 'state-legislator') {
      // Select the state legislator via the same member handler
      // The member object from OpenStates has enough info for the detail view
      if (onSelectMember && selectedState) {
        onSelectMember(selectedState, r.member)
      }
    } else if (r.type === 'executive' || r.type === 'judiciary') {
      // Build a member-like object for the detail view
      const p = r.person
      const prefix = p.source === 'executive' ? 'exec-' : 'judge-'
      const detailObj = {
        id: prefix + slugifyName(p.name),
        name: p.name,
        officialName: p.name,
        title: p.title,
        partyName: p.party,
        photoUrl: p.photoUrl || null,
        source: p.source || r.type,
        chamber: p.title,
        district: p.appointed ? `Appointed by ${p.appointed}` : '',
      }
      if (onSelectMember && selectedState) {
        onSelectMember(selectedState, detailObj)
      } else {
        // If no state selected, just set the member
        const miState = STATE_BY_CODE['MI']
        if (onSelectMember) onSelectMember(miState || STATES[0], detailObj)
      }
    } else if (r.type === 'local-official') {
      // Build a member-like object
      const p = r.person
      const detailObj = {
        id: 'local-' + slugifyName(p.name),
        name: p.name,
        officialName: p.name,
        title: p.title,
        partyName: p.party,
        source: 'local',
        chamber: p.title,
      }
      if (onSelectMember && selectedState) {
        onSelectMember(selectedState, detailObj)
      }
    } else if (r.type === 'address' || r.type === 'location') {
      if (onSetAddress) onSetAddress(r.fullAddress)
      if (r.stateCode && STATE_BY_CODE[r.stateCode]) {
        onSelectState(STATE_BY_CODE[r.stateCode])
      }
      navigate('/my-reps')
      setLoading(true)
      try {
        const geo = await geocodeToDistrict(r.fullAddress)
        if (geo) {
          const state = STATE_BY_CODE[geo.stateCode]
          if (state) {
            onSelectDistrict(state, geo.district, geo.matchedAddress, geo)
          }
        }
      } catch {
        // geocoding failed
      } finally {
        setLoading(false)
      }
    }
    setOpen(false)
    setQuery('')
    setPlaceSuggestions([])
  }

  // Determine if there are any categorized results
  const hasResults = Object.values(results).some(arr => arr.length > 0)

  const categoryConfig = [
    { key: 'locations', label: 'Locations', emoji: '\u{1F5FA}\uFE0F' },
    { key: 'federal', label: 'Federal', emoji: '\u{1F3DB}\uFE0F' },
    { key: 'state', label: 'State Legislature', emoji: '\u{1F3E4}' },
    { key: 'executive', label: 'Executive', emoji: '\u2B50' },
    { key: 'judiciary', label: 'Judiciary', emoji: '\u2696\uFE0F' },
    { key: 'local', label: 'Local', emoji: '\u{1F3E0}' },
  ]

  function badgeForResult(r) {
    if (r.type === 'state') return '\u{1F5FA}\uFE0F'
    if (r.type === 'county') return '\u{1F3E2}'
    if (r.type === 'city') return '\u{1F3D9}\uFE0F'
    return '\u{1F464}'
  }

  function partyIndicator(party) {
    if (!party) return null
    const p = party.toLowerCase()
    if (p.includes('democrat')) return <span className="search-party-badge search-party-d">D</span>
    if (p.includes('republican')) return <span className="search-party-badge search-party-r">R</span>
    return <span className="search-party-badge search-party-i">I</span>
  }

  return (
    <div className="search-wrap" ref={wrapRef}>
      <form className="search-form" onSubmit={handleSubmit} role="search">
        <svg className="search-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search representatives, officials, or locations..."
          aria-label="Search representatives, officials, or locations"
          aria-expanded={open && (hasResults || placeSuggestions.length > 0)}
          aria-controls="search-results-list"
          aria-autocomplete="list"
          role="combobox"
          value={query}
          onChange={handleInput}
          onFocus={() => hasResults && setOpen(true)}
        />
        {loading && <div className="search-spinner" aria-label="Loading search results" role="status"><span className="sr-only">Loading...</span></div>}
      </form>

      {open && (hasResults || placeSuggestions.length > 0) && (
        <ul className="search-results" aria-label="Search results" role="listbox" id="search-results-list">
          {categoryConfig.map(({ key, label, emoji }) => {
            const items = results[key]
            if (!items || items.length === 0) return null
            return (
              <li key={key} className="search-category-group" role="group" aria-label={label}>
                <div className="search-category-label">
                  <span className="search-category-emoji" aria-hidden="true">{emoji}</span>
                  {label}
                </div>
                <ul className="search-category-items" role="group">
                  {items.map((r, i) => (
                    <li key={`${key}-${i}`} role="option">
                      {r.type === 'none' ? (
                        <div className="search-result-item no-result">
                          <span className="result-label">{r.label}</span>
                          <span className="result-sub">{r.sub}</span>
                        </div>
                      ) : (
                        <button className="search-result-item" onClick={() => selectResult(r)}>
                          <span className="result-type-badge">
                            {badgeForResult(r)}
                          </span>
                          <div className="result-text">
                            <span className="result-label">
                              {r.label}
                              {partyIndicator(r.party)}
                            </span>
                            <span className="result-sub">{r.sub}</span>
                          </div>
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
          {placeSuggestions.map((r, i) => (
            <li key={`addr-${i}`} role="option">
              <button className="search-result-item" onClick={() => selectResult(r)}>
                <span className="result-type-badge">{r.emoji || '\u{1F4CD}'}</span>
                <div className="result-text">
                  <span className="result-label">{r.label}</span>
                  <span className="result-sub">{r.sub}</span>
                </div>
              </button>
            </li>
          ))}
          {!loading && query.trim().length >= 3 && placeSuggestions.length === 0 && (
            <li>
              <button className="search-result-item geocode-btn" onClick={handleSubmit}>
                <span className="result-type-badge">{'\u{1F4CD}'}</span>
                <div className="result-text">
                  <span className="result-label">Search this location</span>
                  <span className="result-sub">Find representatives for this area</span>
                </div>
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  )
}
