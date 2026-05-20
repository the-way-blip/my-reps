import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { syncUserToGHL } from '../services/ghlService'

/**
 * Handles the auth callback from Supabase email confirmation / password reset / OAuth.
 *
 * When a user clicks a confirmation link in their email, Supabase redirects here
 * with either:
 *   - A `code` query param (PKCE flow) → needs exchangeCodeForSession
 *   - Hash fragments with access_token/refresh_token (implicit flow) → handled by onAuthStateChange
 *
 * After processing, the user is redirected to the home page (or /settings for password resets).
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
        const code = url.searchParams.get('code')
        const errorParam = url.searchParams.get('error')
        const errorDescription = url.searchParams.get('error_description')

        // Handle error from Supabase
        if (errorParam) {
          setError(errorDescription || errorParam)
          return
        }

        // PKCE flow: exchange the code for a session
        if (code) {
          const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
          if (exchangeError) {
            setError(exchangeError.message)
            return
          }
        }

        // Check if we have hash fragments (implicit flow / magic link)
        // onAuthStateChange in AuthContext handles this automatically,
        // but we still need to wait for it to process
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const accessToken = hashParams.get('access_token')
        const type = hashParams.get('type') || url.searchParams.get('type')

        // If this is a password recovery, redirect to settings
        if (type === 'recovery') {
          navigate('/settings', { replace: true })
          return
        }

        // If we had a code or access token, session is now established
        // Check if this is a new OAuth user and sync to GHL
        if (code || accessToken) {
          try {
            const { data: { session: currentSession } } = await supabase.auth.getSession()
            const oauthUser = currentSession?.user
            if (oauthUser) {
              const createdAt = new Date(oauthUser.created_at)
              const isNewUser = (Date.now() - createdAt.getTime()) < 120000 // within 2 min
              if (isNewUser) {
                const fullName = oauthUser.user_metadata?.full_name || oauthUser.user_metadata?.name || ''
                syncUserToGHL({
                  email: oauthUser.email || '',
                  name: fullName,
                  phone: oauthUser.user_metadata?.phone || '',
                  state: '',
                  zipCode: '',
                }).catch(() => {}) // fire-and-forget
              }
            }
          } catch (syncErr) {
            console.warn('OAuth GHL sync check failed:', syncErr)
          }

          // Small delay to let auth state propagate, then redirect
          setTimeout(() => {
            navigate('/', { replace: true })
          }, 100)
          return
        }

        // If no code and no hash, try to get the current session
        // (user may have already been authenticated)
        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          navigate('/', { replace: true })
        } else {
          // No auth params and no session — just go home
          navigate('/', { replace: true })
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
