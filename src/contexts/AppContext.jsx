import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { STATE_BY_CODE } from '../data/states'
import { getMembersByState, getAllMembers } from '../services/congressApi'
import { getStateLegislators } from '../services/openStatesApi'
import { getElections } from '../services/googleCivicApi'
import { checkAndFireReminders } from '../utils/reminders'

import { loadMichiganLocalOfficials } from '../data/michiganLocalLoader'

const AppContext = createContext(null)

const STORAGE_KEY = 'myreps_location'

function loadSavedLocation() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {}
  return null
}

export function AppProvider({ children }) {
  const saved = loadSavedLocation()
  // Michigan-only app — always locked to MI
  const [selectedState, setSelectedState] = useState(STATE_BY_CODE['MI'])
  const [activeTab, setActiveTab] = useState('senate')
  const [senators, setSenators] = useState([])
  const [reps, setReps] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedMember, setSelectedMember] = useState(null)
  const [highlightDistrict, setHighlightDistrict] = useState(null)
  const [allMembers, setAllMembers] = useState([])
  const [userAddress, setUserAddress] = useState(saved?.address || null)
  // User's district info from geocoding
  const [userDistricts, setUserDistricts] = useState(saved?.districts || null)
  // State-level reps
  const [stateSenators, setStateSenators] = useState([])
  const [stateReps, setStateReps] = useState([])
  const [stateLoading, setStateLoading] = useState(false)
  const [repLevel, setRepLevel] = useState('federal') // 'federal' | 'state' | 'local'
  // Local reps (combined from Congress + OpenStates)
  const [localReps, setLocalReps] = useState([])
  const [localLoading, setLocalLoading] = useState(false)
  // Local geography from Census geocoder (county, place, school district)
  const [localGeo, setLocalGeo] = useState(saved?.localGeo || null)
  // Local civic officials (county commissioners, city council, school board)
  const [civicReps, setCivicReps] = useState({ county: null, city: null, township: null, village: null, schoolBoard: null })
  // Elections from Google Civic
  const [elections, setElections] = useState([])
  const [electionsLoading, setElectionsLoading] = useState(false)

  // Preload all members for search on mount
  useEffect(() => {
    getAllMembers().then(setAllMembers).catch(() => {})
  }, [])

  // Fetch members when state changes
  useEffect(() => {
    if (!selectedState) return
    setLoading(true)
    setError(null)
    setSenators([])
    setReps([])
    setSelectedMember(null)
    setHighlightDistrict(null)

    getMembersByState(selectedState.code)
      .then(({ senators, reps }) => {
        setSenators(senators)
        setReps(reps)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [selectedState])

  // Fetch state legislators when state changes
  useEffect(() => {
    if (!selectedState) {
      setStateSenators([])
      setStateReps([])
      return
    }
    setStateLoading(true)
    getStateLegislators(selectedState.code)
      .then(({ stateSenators, stateReps }) => {
        setStateSenators(stateSenators)
        setStateReps(stateReps)
      })
      .catch(() => {
        setStateSenators([])
        setStateReps([])
      })
      .finally(() => setStateLoading(false))
  }, [selectedState])

  // Build "My Representatives" list from existing data sources (Congress + OpenStates)
  // Google Civic representatives endpoint was removed by Google
  useEffect(() => {
    if (!userAddress || !selectedState) {
      setLocalReps([])
      return
    }
    // Combine federal and state reps into a unified list
    const combined = []
    // Federal reps
    for (const s of senators) {
      combined.push({ ...s, id: `fed-${s.bioguideId || s.name}`, office: `U.S. Senator`, level: 'federal' })
    }
    for (const r of reps) {
      combined.push({ ...r, id: `fed-${r.bioguideId || r.name}`, office: `U.S. Representative — District ${r.district}`, level: 'federal' })
    }
    // State reps
    for (const s of stateSenators) {
      combined.push({ ...s, id: `state-${s.id}`, office: `State Senator — District ${s.district}`, level: 'state' })
    }
    for (const r of stateReps) {
      combined.push({ ...r, id: `state-${r.id}`, office: `State Representative — District ${r.district}`, level: 'state' })
    }
    setLocalReps(combined)
  }, [userAddress, selectedState, senators, reps, stateSenators, stateReps])

  // Resolve local civic officials when localGeo changes
  useEffect(() => {
    if (!localGeo || localGeo.stateCode !== 'MI') {
      setCivicReps({ county: null, city: null, township: null, village: null, schoolBoard: null })
      return
    }
    let cancelled = false
    loadMichiganLocalOfficials(localGeo).then(result => {
      if (!cancelled) setCivicReps(result)
    })
    return () => { cancelled = true }
  }, [localGeo])

  // Fetch elections from Google Civic API
  useEffect(() => {
    setElectionsLoading(true)
    getElections()
      .then(setElections)
      .catch(err => {
        console.error('Elections API error:', err.message)
        setElections([])
      })
      .finally(() => setElectionsLoading(false))
  }, [])

  // Check election reminders on app load
  useEffect(() => {
    checkAndFireReminders()
  }, [])

  // Persist location
  useEffect(() => {
    if (selectedState) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        state: selectedState,
        address: userAddress,
        districts: userDistricts,
        localGeo,
      }))
    }
  }, [selectedState, userAddress, userDistricts, localGeo])

  // Michigan-only — state selection is locked
  const selectState = useCallback(() => {
    setSelectedState(STATE_BY_CODE['MI'])
    setActiveTab('senate')
  }, [])

  const clearState = useCallback(() => {
    // Don't null the state — always stay on Michigan
    setHighlightDistrict(null)
    setSelectedMember(null)
  }, [])

  const handleDistrictClick = useCallback((districtNum, rep) => {
    setActiveTab('house')
    setHighlightDistrict(districtNum)
    if (rep) setSelectedMember(rep)
  }, [])

  // Michigan-only — ignore state changes from search
  const handleSearchState = useCallback(() => {
    setSelectedState(STATE_BY_CODE['MI'])
    setActiveTab('senate')
  }, [])

  const handleSearchMember = useCallback((state, member) => {
    // Always stay on Michigan
    setSelectedState(STATE_BY_CODE['MI'])
    if (member.district != null) {
      setActiveTab('house')
      setHighlightDistrict(member.district)
    } else {
      setActiveTab('senate')
    }
    setSelectedMember(member)
  }, [])

  const handleSearchDistrict = useCallback((state, districtNum, matchedAddress, geoResult) => {
    // Always stay on Michigan
    setSelectedState(STATE_BY_CODE['MI'])
    setActiveTab('house')
    setHighlightDistrict(districtNum)
    // Store full district info if available
    if (geoResult) {
      setUserDistricts({
        congressional: geoResult.district,
        stateSenate: geoResult.stateUpperDistrict,
        stateHouse: geoResult.stateLowerDistrict,
      })
      // Also set localGeo for civic rep lookup
      setLocalGeo(geoResult)
    } else if (districtNum != null) {
      setUserDistricts(prev => ({ ...prev, congressional: districtNum }))
    }
    getMembersByState(state.code).then(({ reps }) => {
      const rep = reps.find(r => r.district === districtNum)
      if (rep) setHighlightDistrict(rep.district)
    })
  }, [])

  const handleSetAddress = useCallback((address) => {
    setUserAddress(address)
    // Auto-switch to "My Representatives" tab when an address is entered
    if (address) setRepLevel('local')
  }, [])

  const value = {
    selectedState, setSelectedState: selectState, clearState,
    activeTab, setActiveTab,
    senators, reps, loading, error,
    selectedMember, setSelectedMember,
    highlightDistrict, setHighlightDistrict,
    allMembers,
    userAddress, setUserAddress: handleSetAddress,
    userDistricts, setUserDistricts,
    handleDistrictClick, handleSearchState, handleSearchMember, handleSearchDistrict,
    // State-level
    stateSenators, stateReps, stateLoading,
    repLevel, setRepLevel,
    // Local
    localReps, localLoading,
    localGeo, setLocalGeo,
    civicReps,
    // Elections
    elections, electionsLoading,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be inside AppProvider')
  return ctx
}
