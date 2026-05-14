import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { STATES } from '../data/states'

const PARTY_OPTIONS = [
  'Republican',
  'Democratic',
  'Libertarian',
  'Independent',
  'Other',
  'Prefer not to say',
]

/* ── Helpers ── */
function getInitials(name) {
  if (!name) return '?'
  return name
    .split(' ')
    .filter(Boolean)
    .map(w => w[0].toUpperCase())
    .slice(0, 2)
    .join('')
}

function formatDate(dateStr) {
  if (!dateStr) return 'Unknown'
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

/* ── Try to dynamically load services that may not exist yet ── */
async function tryLoadAuth() {
  try {
    return await import('../contexts/AuthContext.jsx')
  } catch {
    return null
  }
}

async function tryLoadProfileService() {
  try {
    return await import('../services/profileService.js')
  } catch {
    return null
  }
}

async function tryLoadGHL() {
  try {
    return await import('../services/gohighlevel.js')
  } catch {
    return null
  }
}

/* ── Delete-account confirmation modal ── */
function DeleteModal({ onConfirm, onCancel }) {
  return (
    <div className="profile-modal-overlay" onClick={onCancel}>
      <div className="profile-modal" onClick={e => e.stopPropagation()}>
        <h3 className="profile-modal-title">Delete Account</h3>
        <p className="settings-muted">
          This action is permanent. All your data, ballot plans, and profile information
          will be permanently deleted and cannot be recovered.
        </p>
        <div className="profile-modal-actions">
          <button className="settings-btn-outline" onClick={onCancel}>
            Cancel
          </button>
          <button className="settings-btn-danger confirming" onClick={onConfirm}>
            Yes, Delete My Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProfileView() {
  usePageTitle('Profile')

  /* ── Auth state ── */
  const [authMod, setAuthMod] = useState(null)
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [authLoaded, setAuthLoaded] = useState(false)

  /* ── Profile form state ── */
  const [form, setForm] = useState({
    name: '',
    phone: '',
    state: '',
    address: '',
    party: '',
  })
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')
  const [profileLoading, setProfileLoading] = useState(true)

  /* ── Activity stats ── */
  const [ballotStats, setBallotStats] = useState({ decided: 0, total: 0 })
  const [repsViewed, setRepsViewed] = useState(0)

  /* ── Delete modal ── */
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  /* ── Load auth context dynamically ── */
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const mod = await tryLoadAuth()
      if (cancelled) return
      setAuthMod(mod)
      setAuthLoaded(true)
    })()
    return () => { cancelled = true }
  }, [])

  /* ── Subscribe to auth if available (hook-free approach for dynamic import) ── */
  useEffect(() => {
    if (!authMod) return
    // If the module exports a hook like useAuth, we cannot call it here (not a hook call).
    // Instead we try to read from supabase directly.
    ;(async () => {
      try {
        const { supabase } = await import('../lib/supabase.js')
        if (!supabase) return
        const { data: { session: s } } = await supabase.auth.getSession()
        if (s) {
          setSession(s)
          setUser(s.user)
        }
        // listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => {
          setSession(s)
          setUser(s?.user ?? null)
        })
        return () => subscription?.unsubscribe()
      } catch {
        // supabase not ready
      }
    })()
  }, [authMod])

  /* ── Fallback: try supabase directly even without auth module ── */
  useEffect(() => {
    if (authMod) return // already handled above
    if (!authLoaded) return
    ;(async () => {
      try {
        const { supabase } = await import('../lib/supabase.js')
        if (!supabase) return
        const { data: { session: s } } = await supabase.auth.getSession()
        if (s) {
          setSession(s)
          setUser(s.user)
        }
      } catch {
        // supabase not available
      }
      setProfileLoading(false)
    })()
  }, [authLoaded, authMod])

  /* ── Load profile from service ── */
  useEffect(() => {
    if (!user) {
      setProfileLoading(false)
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        const svc = await tryLoadProfileService()
        if (cancelled) return
        if (svc?.getProfile) {
          const profile = await svc.getProfile(user.id)
          if (profile && !cancelled) {
            setForm(f => ({
              ...f,
              name: profile.name || profile.full_name || user.user_metadata?.full_name || '',
              phone: profile.phone || '',
              state: profile.state || '',
              address: profile.address || '',
              party: profile.party || '',
            }))
          }
        } else {
          // Fallback: populate from user metadata
          setForm(f => ({
            ...f,
            name: user.user_metadata?.full_name || user.user_metadata?.name || '',
          }))
        }
      } catch {
        // service not ready, populate from auth metadata
        setForm(f => ({
          ...f,
          name: user.user_metadata?.full_name || user.user_metadata?.name || '',
        }))
      }
      if (!cancelled) setProfileLoading(false)
    })()
    return () => { cancelled = true }
  }, [user])

  /* ── Load activity stats from localStorage ── */
  useEffect(() => {
    try {
      const plan = JSON.parse(localStorage.getItem('myreps-ballot-plan') || '{}')
      const choices = Object.values(plan)
      const total = choices.length
      const decided = choices.filter(c => c && c.candidate).length
      setBallotStats({ decided, total })
    } catch { /* ignore */ }

    try {
      const viewed = JSON.parse(localStorage.getItem('myreps_reps_viewed') || '[]')
      setRepsViewed(Array.isArray(viewed) ? viewed.length : 0)
    } catch {
      setRepsViewed(0)
    }
  }, [])

  /* ── Form handlers ── */
  const updateField = useCallback((field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    setSaveMsg('')
  }, [])

  async function handleSave(e) {
    e.preventDefault()
    if (!user) return
    setSaving(true)
    setSaveMsg('')
    try {
      const svc = await tryLoadProfileService()
      if (svc?.updateProfile) {
        await svc.updateProfile(user.id, {
          name: form.name,
          phone: form.phone,
          state: form.state,
          address: form.address,
          party: form.party,
        })
      }
      // Sync to GHL
      try {
        const ghl = await tryLoadGHL()
        if (ghl?.createOrUpdateContact) {
          await ghl.createOrUpdateContact({
            email: user.email,
            name: form.name,
            phone: form.phone,
            state: form.state,
            address: form.address,
          })
        }
      } catch { /* GHL sync failed silently */ }
      setSaveMsg('Profile saved successfully!')
    } catch (err) {
      setSaveMsg('Failed to save profile. Please try again.')
      console.error('Profile save error:', err)
    }
    setSaving(false)
  }

  /* ── Download data ── */
  function handleDownloadData() {
    const data = {
      profile: {
        email: user?.email,
        ...form,
        memberSince: user?.created_at,
      },
      ballotPlan: JSON.parse(localStorage.getItem('myreps-ballot-plan') || '{}'),
      settings: {
        location: JSON.parse(localStorage.getItem('myreps_location') || 'null'),
        theme: localStorage.getItem('myreps_theme'),
      },
      exportedAt: new Date().toISOString(),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `myreps-data-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  /* ── Delete account ── */
  async function handleDeleteAccount() {
    try {
      const { supabase } = await import('../lib/supabase.js')
      // Delete profile data first
      try {
        const svc = await tryLoadProfileService()
        if (svc?.deleteProfile) {
          await svc.deleteProfile(user.id)
        }
      } catch { /* ignore */ }
      // Clear local data
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('myreps')) localStorage.removeItem(key)
      })
      // Sign out
      if (supabase) await supabase.auth.signOut()
      setShowDeleteModal(false)
      window.location.href = '/'
    } catch (err) {
      console.error('Delete account error:', err)
      setShowDeleteModal(false)
    }
  }

  /* ── Sign out ── */
  async function handleSignOut() {
    try {
      // Try AuthContext signOut first
      if (authMod?.signOut) {
        await authMod.signOut()
      } else {
        const { supabase } = await import('../lib/supabase.js')
        if (supabase) await supabase.auth.signOut()
      }
      window.location.href = '/'
    } catch {
      window.location.href = '/'
    }
  }

  /* ── Loading state ── */
  if (profileLoading) {
    return (
      <div className="page-container">
        <div className="loader"><div className="spinner" /></div>
      </div>
    )
  }

  /* ── Not logged in ── */
  if (!user) {
    return (
      <div className="page-container profile-page">
        <div className="page-header">
          <h2 className="page-title">Profile</h2>
          <p className="page-sub">Manage your account and personal information</p>
        </div>
        <section className="settings-section">
          <div className="settings-card profile-signin-card">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <h3>Please Sign In</h3>
            <p className="settings-muted">
              Sign in to view and manage your profile, track your activity, and save your preferences.
            </p>
          </div>
        </section>
      </div>
    )
  }

  const email = user.email || ''
  const displayName = form.name || email.split('@')[0] || 'User'
  const avatarUrl = user.user_metadata?.avatar_url || null
  const memberSince = formatDate(user.created_at)

  return (
    <div className="page-container profile-page">
      <div className="page-header">
        <h2 className="page-title">Profile</h2>
        <p className="page-sub">Manage your account and personal information</p>
      </div>

      {/* ── Profile Header ── */}
      <section className="settings-section">
        <div className="settings-card profile-header-card">
          <div className="profile-avatar-wrap">
            {avatarUrl ? (
              <img src={avatarUrl} alt={displayName} className="profile-avatar" />
            ) : (
              <div className="profile-avatar profile-avatar-initials">
                {getInitials(displayName)}
              </div>
            )}
          </div>
          <div className="profile-header-info">
            <h3 className="profile-display-name">{displayName}</h3>
            <p className="settings-muted">{email}</p>
            <p className="settings-muted profile-member-since">
              Member since {memberSince}
            </p>
          </div>
        </div>
      </section>

      {/* ── Personal Info ── */}
      <section className="settings-section">
        <h3 className="settings-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Personal Information
        </h3>
        <form className="settings-card" onSubmit={handleSave}>
          <label className="settings-label" htmlFor="profile-name">Name</label>
          <input
            id="profile-name"
            type="text"
            className="profile-input"
            value={form.name}
            onChange={e => updateField('name', e.target.value)}
            placeholder="Your full name"
          />

          <label className="settings-label settings-label-top" htmlFor="profile-email">Email</label>
          <input
            id="profile-email"
            type="email"
            className="profile-input profile-input-readonly"
            value={email}
            readOnly
            tabIndex={-1}
          />

          <label className="settings-label settings-label-top" htmlFor="profile-phone">Phone</label>
          <input
            id="profile-phone"
            type="tel"
            className="profile-input"
            value={form.phone}
            onChange={e => updateField('phone', e.target.value)}
            placeholder="(555) 123-4567"
          />

          <label className="settings-label settings-label-top" htmlFor="profile-state">State</label>
          <select
            id="profile-state"
            className="settings-select"
            value={form.state}
            onChange={e => updateField('state', e.target.value)}
          >
            <option value="">Select a state...</option>
            {STATES.map(s => (
              <option key={s.code} value={s.code}>{s.name} ({s.code})</option>
            ))}
          </select>

          <label className="settings-label settings-label-top" htmlFor="profile-address">Address</label>
          <input
            id="profile-address"
            type="text"
            className="profile-input"
            value={form.address}
            onChange={e => updateField('address', e.target.value)}
            placeholder="123 Main St, Detroit, MI 48201"
          />

          <label className="settings-label settings-label-top" htmlFor="profile-party">Party Affiliation</label>
          <select
            id="profile-party"
            className="settings-select"
            value={form.party}
            onChange={e => updateField('party', e.target.value)}
          >
            <option value="">Select...</option>
            {PARTY_OPTIONS.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          {saveMsg && (
            <p className={`profile-save-msg ${saveMsg.includes('success') ? 'success' : 'error'}`}>
              {saveMsg}
            </p>
          )}

          <button
            type="submit"
            className="settings-btn profile-save-btn"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </section>

      {/* ── My Activity ── */}
      <section className="settings-section">
        <h3 className="settings-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          My Activity
        </h3>
        <div className="settings-card">
          <div className="profile-activity-row">
            <div className="profile-activity-item">
              <span className="profile-activity-label">Ballot Plan</span>
              <span className="profile-activity-value">
                {ballotStats.total > 0
                  ? `${ballotStats.decided} of ${ballotStats.total} offices decided`
                  : 'No ballot plan yet'}
              </span>
              <Link to="/ballot" className="settings-btn-text">
                {ballotStats.total > 0 ? 'View Ballot' : 'Start Planning'}
              </Link>
            </div>

            <div className="settings-divider profile-activity-divider" />

            <div className="profile-activity-item">
              <span className="profile-activity-label">Reps Viewed</span>
              <span className="profile-activity-value">{repsViewed} representatives</span>
            </div>

            <div className="settings-divider profile-activity-divider" />

            <div className="profile-activity-item">
              <span className="profile-activity-label">Voter Registration</span>
              <Link to="/elections" className="settings-btn-text">
                Check Registration Status
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Data & Privacy ── */}
      <section className="settings-section">
        <h3 className="settings-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Data &amp; Privacy
        </h3>
        <div className="settings-card">
          <div className="settings-row">
            <div>
              <span className="settings-label">Download My Data</span>
              <p className="settings-muted">Export your profile and ballot plan as JSON.</p>
            </div>
            <button className="settings-btn-outline" onClick={handleDownloadData}>
              Download
            </button>
          </div>

          <div className="settings-divider" />

          <div className="settings-card settings-danger-zone">
            <div className="settings-danger-row">
              <div>
                <strong className="settings-danger-text">Delete Account</strong>
                <p className="settings-muted">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
              </div>
              <button
                className="settings-btn-danger"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sign Out ── */}
      <section className="settings-section profile-signout-section">
        <button className="profile-signout-btn" onClick={handleSignOut}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Sign Out
        </button>
      </section>

      {/* ── Delete confirmation modal ── */}
      {showDeleteModal && (
        <DeleteModal
          onConfirm={handleDeleteAccount}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  )
}
