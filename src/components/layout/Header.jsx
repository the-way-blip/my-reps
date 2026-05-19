import { useState, useEffect, useRef } from 'react'
import { useApp } from '../../contexts/AppContext'
import { useAuth } from '../../contexts/AuthContext'
import AuthModal from '../auth/AuthModal'

function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('myreps_theme')
    if (saved === 'dark' || saved === 'light') return saved === 'dark'
    // No saved preference — default to light mode
    return false
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
  const { selectedState } = useApp()

  const { user, loading: authLoading, signOut } = useAuth()
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [dark, toggleTheme] = useTheme()

  return (
    <header className="app-header">
      <div className="header-brand">
        <img src="/logo-white.png" alt="" className="header-logo" aria-hidden="true" />
        <div>
          <h1 className="header-title">Build My Ballot</h1>
          <p className="header-sub">Research candidates. Plan your vote.</p>
        </div>
      </div>


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
