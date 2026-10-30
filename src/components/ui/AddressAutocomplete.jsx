import { useState, useRef, useEffect, useCallback } from 'react'
import { enabledStateCodes } from '../../data/stateBallot'

/**
 * Fetch address suggestions from Nominatim (OpenStreetMap) — free, no API key.
 * Limited to the states the app has ballots for on this host.
 */
const STATE_NAMES = { MI: 'Michigan', IN: 'Indiana', IA: 'Iowa', WI: 'Wisconsin', MN: 'Minnesota', OH: 'Ohio', KY: 'Kentucky' }
const supportedIso = () => enabledStateCodes().map(c => `US-${c}`)

async function fetchSuggestions(query) {
  if (query.length < 3) return []
  try {
    const params = new URLSearchParams({
      q: query,
      format: 'json',
      countrycodes: 'us',
      limit: '10',
      addressdetails: '1',
      // Box around Michigan, Indiana, Iowa, Wisconsin, Minnesota, Ohio and Kentucky (lon/lat); results outside enabled states are filtered below
      viewbox: '-97.3,49.4,-80.4,36.4',
      bounded: '1',
    })
    const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
      headers: { 'Accept': 'application/json', 'User-Agent': 'OfForAndByThePeople/1.0 (https://offorandbythepeople.com)' },
    })
    if (!res.ok) throw new Error(`Nominatim ${res.status}`)
    const data = await res.json()
    return data
      .filter(r => {
        const iso = r.address?.['ISO3166-2-lvl4']
        const ok = supportedIso()
        return iso ? ok.includes(iso) : ok.some(c => STATE_NAMES[c.slice(3)] === r.address?.state)
      })
      .slice(0, 5)
      .map(r => {
        // Build a clean display address
        const addr = r.address || {}
        const parts = []
        if (addr.house_number && addr.road) {
          parts.push(`${addr.house_number} ${addr.road}`)
        } else if (addr.road) {
          parts.push(addr.road)
        }
        if (addr.city || addr.town || addr.village || addr.hamlet) {
          parts.push(addr.city || addr.town || addr.village || addr.hamlet)
        }
        if (addr.state) parts.push(addr.state)
        if (addr.postcode) parts.push(addr.postcode)

        return {
          display: parts.join(', ') || r.display_name.split(',').slice(0, 3).join(','),
          fullAddress: r.display_name,
          lat: r.lat,
          lon: r.lon,
          city: addr.city || addr.town || addr.village || addr.hamlet || '',
          state: addr.state || '',
          zip: addr.postcode || '',
        }
      })
  } catch {
    return []
  }
}

/**
 * Address input with autocomplete suggestions.
 *
 * Props:
 * - value: string (controlled input value)
 * - onChange: (value: string) => void
 * - onSelect: (suggestion: { display, fullAddress, lat, lon, city, state, zip }) => void
 * - placeholder: string
 * - className: string (for the input)
 * - autoFocus: boolean
 */
export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  placeholder = 'Enter your address',
  className = '',
  autoFocus = false,
  inputProps = {},
}) {
  const [suggestions, setSuggestions] = useState([])
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [noResults, setNoResults] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const debounceRef = useRef(null)
  const wrapRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const doFetch = useCallback((query) => {
    clearTimeout(debounceRef.current)
    if (query.length < 3) {
      setSuggestions([])
      setOpen(false)
      setNoResults(false)
      setFetchError(false)
      return
    }
    debounceRef.current = setTimeout(() => {
      fetchSuggestions(query).then(results => {
        setSuggestions(results)
        setActiveIndex(-1)
        setFetchError(false)
        if (results.length > 0) {
          setOpen(true)
          setNoResults(false)
        } else {
          setOpen(false)
          setNoResults(true)
        }
      }).catch(() => {
        setFetchError(true)
        setNoResults(false)
      })
    }, 300)
  }, [])

  function handleChange(e) {
    const val = e.target.value
    onChange(val)
    doFetch(val)
  }

  function handleSelect(suggestion) {
    onChange(suggestion.display)
    onSelect(suggestion)
    setOpen(false)
    setSuggestions([])
  }

  function handleKeyDown(e) {
    if (!open || suggestions.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      handleSelect(suggestions[activeIndex])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div className="address-autocomplete-wrap" ref={wrapRef}>
      <input
        type="text"
        className={className || 'address-autocomplete-input'}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        autoFocus={autoFocus}
        autoComplete="off"
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        aria-controls="address-suggestions"
        {...inputProps}
      />
      {open && suggestions.length > 0 && (
        <ul className="address-suggestions" id="address-suggestions" role="listbox">
          {suggestions.map((s, i) => (
            <li
              key={i}
              role="option"
              aria-selected={i === activeIndex}
              className={`address-suggestion ${i === activeIndex ? 'address-suggestion-active' : ''}`}
              onClick={() => handleSelect(s)}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16" className="address-suggestion-icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="address-suggestion-text">{s.display}</span>
            </li>
          ))}
        </ul>
      )}
      {noResults && !open && value.length >= 3 && (
        <div className="address-no-results" role="status">
          No addresses found. Try entering your full street address with city and state.
        </div>
      )}
      {fetchError && (
        <div className="address-fetch-error" role="alert">
          Address lookup is temporarily unavailable. You can still type your full address and submit.
        </div>
      )}
    </div>
  )
}
