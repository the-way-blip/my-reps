import { useState, useEffect, useCallback, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { syncUserToGHL } from '../../services/ghlService'
import useFocusTrap from '../../hooks/useFocusTrap'

const VIEWS = { SIGN_IN: 'signin', SIGN_UP: 'signup', PHONE: 'phone', FORGOT: 'forgot' }

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  )
}

export default function AuthModal({ open, onClose, initialView }) {
  const { signIn, signUp, signInWithGoogle, signInWithPhone, verifyOtp, resetPassword, isSupabaseConfigured } = useAuth()
  const [view, setView] = useState(VIEWS.SIGN_IN)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const modalRef = useRef(null)
  const focusTrapRef = useFocusTrap(open)

  // Form fields
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [state, setState] = useState('MI')
  const [zipCode, setZipCode] = useState('')
  const [agreedTerms, setAgreedTerms] = useState(false)

  // Phone OTP
  const [otpSent, setOtpSent] = useState(false)
  const [otpCode, setOtpCode] = useState('')

  // Reset state when modal opens/closes
  useEffect(() => {
    if (open) {
      setView(initialView === 'signup' ? VIEWS.SIGN_UP : VIEWS.SIGN_IN)
      setError('')
      setSuccess('')
      setEmail('')
      setPassword('')
      setName('')
      setPhone('')
      setConfirmPassword('')
      setState('MI')
      setZipCode('')
      setAgreedTerms(false)
      setOtpSent(false)
      setOtpCode('')
    }
  }, [open, initialView])

  // Escape key
  useEffect(() => {
    if (!open) return
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  // Trap focus inside modal
  useEffect(() => {
    if (open) {
      const prev = document.activeElement
      modalRef.current?.focus()
      return () => prev?.focus?.()
    }
  }, [open])

  const clearMessages = useCallback(() => {
    setError('')
    setSuccess('')
  }, [])

  const handleSignIn = async (e) => {
    e.preventDefault()
    clearMessages()
    setLoading(true)
    try {
      await signIn(email, password)
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    clearMessages()
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (!agreedTerms) {
      setError('You must agree to the terms and privacy policy.')
      return
    }
    setLoading(true)
    try {
      const result = await signUp(email, password, { name, phone, state, zipCode })

      // Fire-and-forget: sync new user to GHL CRM for email list
      syncUserToGHL({ email, name, phone, state, zipCode }).catch(() => {})

      // If Supabase returned a session, user is logged in immediately (no confirmation needed)
      if (result?.session) {
        onClose()
      } else {
        setSuccess('Account created! Check your email to confirm.')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    clearMessages()
    setLoading(true)
    try {
      await signInWithGoogle()
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleSendOtp = async (e) => {
    e.preventDefault()
    clearMessages()
    if (!phone.trim()) {
      setError('Please enter a phone number.')
      return
    }
    setLoading(true)
    try {
      await signInWithPhone(phone)
      setOtpSent(true)
      setSuccess('Code sent! Check your phone.')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    clearMessages()
    if (otpCode.length !== 6) {
      setError('Please enter the 6-digit code.')
      return
    }
    setLoading(true)
    try {
      await verifyOtp(phone, otpCode)
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    clearMessages()
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    setLoading(true)
    try {
      await resetPassword(email)
      setSuccess('Password reset email sent! Check your inbox.')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  const isSignIn = view === VIEWS.SIGN_IN
  const isSignUp = view === VIEWS.SIGN_UP
  const isPhone = view === VIEWS.PHONE
  const isForgot = view === VIEWS.FORGOT

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div
        className="auth-card"
        ref={(node) => { modalRef.current = node; focusTrapRef.current = node }}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Authentication"
      >
        <button className="auth-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {!isSupabaseConfigured && (
          <div className="auth-error" style={{ marginBottom: '1rem' }}>
            Authentication is not available right now. Please try again later.
          </div>
        )}

        {/* Tabs — only show for sign in / sign up */}
        {(isSignIn || isSignUp) && (
          <div className="auth-tabs">
            <button
              className={`auth-tab ${isSignIn ? 'active' : ''}`}
              onClick={() => { setView(VIEWS.SIGN_IN); clearMessages() }}
            >
              Sign In
            </button>
            <button
              className={`auth-tab ${isSignUp ? 'active' : ''}`}
              onClick={() => { setView(VIEWS.SIGN_UP); clearMessages() }}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Back button for phone/forgot views */}
        {(isPhone || isForgot) && (
          <button
            className="auth-back"
            onClick={() => { setView(VIEWS.SIGN_IN); clearMessages(); setOtpSent(false); setOtpCode('') }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Back to Sign In
          </button>
        )}

        {/* Error / success messages */}
        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        {/* ── Sign In ── */}
        {isSignIn && (
          <form className="auth-form" onSubmit={handleSignIn}>
            <label className="auth-label">
              Email
              <input
                type="email"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
            <label className="auth-label">
              Password
              <input
                type="password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="Your password"
              />
            </label>
            <button type="submit" className="auth-btn auth-btn-primary" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
            <button
              type="button"
              className="auth-link"
              onClick={() => { setView(VIEWS.FORGOT); clearMessages() }}
            >
              Forgot password?
            </button>

            <div className="auth-divider"><span>or</span></div>

            <button
              type="button"
              className="auth-btn auth-btn-phone"
              onClick={() => { setView(VIEWS.PHONE); clearMessages() }}
            >
              <PhoneIcon />
              Sign in with Phone
            </button>
          </form>
        )}

        {/* ── Sign Up ── */}
        {isSignUp && (
          <form className="auth-form" onSubmit={handleSignUp}>
            <label className="auth-label">
              Full Name
              <input
                type="text"
                className="auth-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                placeholder="Jane Doe"
              />
            </label>
            <label className="auth-label">
              Email
              <input
                type="email"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
            <label className="auth-label">
              Phone
              <input
                type="tel"
                className="auth-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                placeholder="+1 (555) 123-4567"
              />
            </label>
            <div className="auth-row">
              <label className="auth-label auth-label-half">
                State
                <select
                  className="auth-input"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="MI">Michigan</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                  <option value="DC">Washington D.C.</option>
                </select>
              </label>
              <label className="auth-label auth-label-half">
                Zip Code
                <input
                  type="text"
                  className="auth-input"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  autoComplete="postal-code"
                  placeholder="48201"
                  inputMode="numeric"
                  maxLength={5}
                />
              </label>
            </div>
            <label className="auth-label">
              Password
              <input
                type="password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
                placeholder="At least 8 characters"
              />
            </label>
            <label className="auth-label">
              Confirm Password
              <input
                type="password"
                className="auth-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
                placeholder="Re-enter your password"
              />
              {confirmPassword && password !== confirmPassword && (
                <span className="auth-field-error">Passwords do not match</span>
              )}
            </label>
            <label className="auth-checkbox-label">
              <input
                type="checkbox"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
              />
              I agree to the{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Privacy Policy</a>
              , including receiving civic engagement communications
            </label>
            <button type="submit" className="auth-btn auth-btn-primary" disabled={loading}>
              {loading ? 'Creating account...' : 'Create Account'}
            </button>

          </form>
        )}

        {/* ── Phone OTP ── */}
        {isPhone && (
          <div className="auth-form">
            <h3 className="auth-phone-title">Phone Sign In</h3>
            {!otpSent ? (
              <form onSubmit={handleSendOtp}>
                <label className="auth-label">
                  Phone Number
                  <input
                    type="tel"
                    className="auth-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    autoComplete="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </label>
                <button type="submit" className="auth-btn auth-btn-phone" disabled={loading} style={{ marginTop: '0.75rem' }}>
                  {loading ? 'Sending...' : 'Send Verification Code'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <label className="auth-label">
                  Enter 6-digit code
                  <input
                    type="text"
                    className="auth-input auth-otp-input"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    required
                    maxLength={6}
                    placeholder="000000"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                  />
                </label>
                <button type="submit" className="auth-btn auth-btn-primary" disabled={loading} style={{ marginTop: '0.75rem' }}>
                  {loading ? 'Verifying...' : 'Verify Code'}
                </button>
                <button
                  type="button"
                  className="auth-link"
                  onClick={() => { setOtpSent(false); setOtpCode(''); clearMessages() }}
                >
                  Use a different number
                </button>
              </form>
            )}
          </div>
        )}

        {/* ── Forgot Password ── */}
        {isForgot && (
          <form className="auth-form" onSubmit={handleForgotPassword}>
            <h3 className="auth-phone-title">Reset Password</h3>
            <label className="auth-label">
              Email
              <input
                type="email"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
            <button type="submit" className="auth-btn auth-btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
