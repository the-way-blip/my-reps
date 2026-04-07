import { useState, useEffect, useRef } from 'react'
import SearchBar from '../SearchBar'
import { useApp } from '../../contexts/AppContext'
import { useAuth } from '../../contexts/AuthContext'
import { STATES } from '../../data/states'
import AuthModal from '../auth/AuthModal'

function StateDropdown({ selectedState, onSelectState }) {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState('')
  const wrapRef = useRef(null)
  const inputRef = useRef(null)

  const filtered = filter
    ? STATES.filter(s =>
        s.name.toLowerCase().includes(filter.toLowerCase()) ||
        s.code.toLowerCase().includes(filter.toLowerCase())
      )
    : STATES

  useEffect(() => {
    function onClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function handleSelect(state) {
    onSelectState(state)
    setOpen(false)
    setFilter('')
  }

  return (
    <div className="state-dropdown-wrap" ref={wrapRef}>
      <button
        className="state-dropdown"
        onClick={() => { setOpen(o => !o); setTimeout(() => inputRef.current?.focus(), 50) }}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={selectedState?.name ? `Selected state: ${selectedState.name}. Change state` : 'Select a state'}
      >
        {selectedState?.name || 'Select state...'}
        <span className="state-dropdown-arrow" aria-hidden="true">{open ? '\u25B2' : '\u25BC'}</span>
      </button>
      {open && (
        <div className="state-dropdown-menu" role="dialog" aria-label="Select a state">
          <input
            ref={inputRef}
            type="text"
            className="state-dropdown-search"
            placeholder="Search states..."
            aria-label="Search states by name or abbreviation"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Escape') { setOpen(false); setFilter('') }
              if (e.key === 'Enter' && filtered.length === 1) handleSelect(filtered[0])
            }}
          />
          <ul className="state-dropdown-list" role="listbox" aria-label="States">
            {filtered.map(s => (
              <li key={s.code} role="option" aria-selected={s.code === selectedState?.code}>
                <button
                  className={`state-dropdown-item${s.code === selectedState?.code ? ' active' : ''}`}
                  onClick={() => handleSelect(s)}
                  type="button"
                >
                  {s.name}
                  <span className="state-dropdown-code">{s.code}</span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="state-dropdown-empty" role="option" aria-selected={false}>No states match "{filter}"</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('myreps_theme')
    if (saved === 'dark' || saved === 'light') return saved === 'dark'
    // No saved preference — fall back to system preference
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('myreps_theme', dark ? 'dark' : 'light')
  }, [dark])

  return [dark, () => setDark(d => !d)]
}

function UserMenu({ user, onSignOut }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const displayName = user.user_metadata?.full_name || user.email || ''
  const initials = displayName
    ? displayName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : '?'

  return (
    <div className="user-menu-wrap" ref={ref}>
      <button
        className="user-avatar-btn"
        onClick={() => setOpen(o => !o)}
        aria-label="User menu"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="user-avatar">{initials}</span>
      </button>
      {open && (
        <div className="user-dropdown">
          <div className="user-dropdown-name">{displayName}</div>
          <div className="user-dropdown-email">{user.email}</div>
          <hr className="user-dropdown-divider" />
          <a href="/settings" className="user-dropdown-item">Settings</a>
          <button
            className="user-dropdown-item user-dropdown-signout"
            onClick={() => { onSignOut(); setOpen(false) }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const {
    selectedState, clearState,
    allMembers,
    handleSearchState, handleSearchMember, handleSearchDistrict,
    setUserAddress,
    stateSenators, stateReps,
    civicReps,
  } = useApp()

  const { user, loading: authLoading, signOut } = useAuth()
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [dark, toggleTheme] = useTheme()

  return (
    <header className="app-header">
      <div className="header-brand">
        <span className="header-icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 21V7l9-4 9 4v14" /><path d="M9 21V11h6v10" /><path d="M3 7h18" />
          </svg>
        </span>
        <div>
          <h1 className="header-title">MyReps</h1>
          <p className="header-sub">Know your government</p>
        </div>
      </div>

      <SearchBar
        allMembers={allMembers}
        stateSenators={stateSenators}
        stateReps={stateReps}
        civicReps={civicReps}
        selectedState={selectedState}
        onSelectState={handleSearchState}
        onSelectMember={handleSearchMember}
        onSelectDistrict={handleSearchDistrict}
        onSetAddress={setUserAddress}
      />

      <StateDropdown selectedState={selectedState} onSelectState={handleSearchState} />

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {dark ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      {!authLoading && (
        user ? (
          <UserMenu user={user} onSignOut={signOut} />
        ) : (
          <button
            className="auth-signin-btn"
            onClick={() => setAuthModalOpen(true)}
          >
            Sign In
          </button>
        )
      )}

      <AuthModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </header>
  )
}
