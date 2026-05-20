import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { syncUserToGHL } from '../services/ghlService'

/**
 * Handles the auth callback from Supabase email confirmation / OAuth.
 *
 * With implicit flow, Supabase redirects here with hash fragments containing
 * access_token/refresh_token. The onAuthStateChange listener in AuthContext
 * picks these up automatically via detectSessionInUrl.
 *
 * This view waits for the session to be established, syncs new OAuth users
 * to GHL, then redirects to the appropriate page.
 */
export default function AuthCallbackView() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  useEffect(() => {
    async function handleCallback() {
      try {
        if (!supabase) {
          setError('Authentication is not configured.')
          return
        }

        const url = new URL(window.location.href)
        const errorParam = url.searchParams.get('error')
        const errorDescription = url.searchParams.get('error_description')

        // Handle error from Supabase
        if (errorParam) {
          setError(errorDescription || errorParam)
          return
        }

        // Check for recovery type (password reset)
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const type = hashParams.get('type') || url.searchParams.get('type')

        if (type === 'recovery') {
          navigate('/settings', { replace: true })
          return
        }

        // Wait briefly for onAuthStateChange to process hash fragments
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Check if session was established
        const { data: { session } } = await supabase.auth.getSession()

        if (session?.user) {
          // Check if this is a new OAuth user and sync to GHL
          try {
            const createdAt = new Date(session.user.created_at)
            const isNewUser = (Date.now() - createdAt.getTime()) < 120000 // within 2 min
            if (isNewUser && session.user.app_metadata?.provider !== 'email') {
              const fullName = session.user.user_metadata?.full_name || session.user.user_metadata?.name || ''
              syncUserToGHL({
                email: session.user.email || '',
                name: fullName,
                phone: session.user.user_metadata?.phone || '',
                state: '',
                zipCode: '',
              }).catch(() => {}) // fire-and-forget
            }
          } catch (syncErr) {
            console.warn('GHL sync check failed:', syncErr)
          }

          navigate('/', { replace: true })
        } else {
          // No session yet — give it one more moment, then redirect anyway
          setTimeout(() => {
            navigate('/', { replace: true })
          }, 1000)
        }
      } catch (err) {
        console.error('Auth callback error:', err)
        setError(err.message || 'An error occurred during authentication.')
      }
    }

    handleCallback()
  }, [navigate])

  if (error) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <div style={{
          background: 'var(--error-bg, #fef2f2)',
          color: 'var(--error-text, #dc2626)',
          padding: '1rem 1.5rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          maxWidth: '400px',
        }}>
          {error}
        </div>
        <button
          onClick={() => navigate('/', { replace: true })}
          style={{
            background: 'var(--accent, #0B2E59)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.75rem 1.5rem',
            cursor: 'pointer',
            fontSize: '0.95rem',
          }}
        >
          Go to Home
        </button>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: '1rem',
    }}>
      <div className="spinner" />
      <p style={{ color: 'var(--text-secondary, #666)', fontSize: '0.95rem' }}>
        Confirming your account...
      </p>
    </div>
  )
}
