import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

const SUPABASE_NOT_CONFIGURED = 'Supabase is not configured. Authentication is unavailable.'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = useCallback(async (email, password, metadata = {}) => {
    if (!supabase) throw new Error(SUPABASE_NOT_CONFIGURED)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: metadata.name || '',
          phone: metadata.phone || '',
        },
      },
    })
    if (error) throw error
    return data
  }, [])

  const signIn = useCallback(async (email, password) => {
    if (!supabase) throw new Error(SUPABASE_NOT_CONFIGURED)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return data
  }, [])

  const signInWithGoogle = useCallback(async () => {
    if (!supabase) throw new Error(SUPABASE_NOT_CONFIGURED)
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    })
    if (error) throw error
    return data
  }, [])

  const signInWithPhone = useCallback(async (phone) => {
    if (!supabase) throw new Error(SUPABASE_NOT_CONFIGURED)
    const { data, error } = await supabase.auth.signInWithOtp({
      phone,
    })
    if (error) throw error
    return data
  }, [])

  const verifyOtp = useCallback(async (phone, token) => {
    if (!supabase) throw new Error(SUPABASE_NOT_CONFIGURED)
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token,
      type: 'sms',
    })
    if (error) throw error
    return data
  }, [])

  const signOut = useCallback(async () => {
    if (!supabase) throw new Error(SUPABASE_NOT_CONFIGURED)
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }, [])

  const resetPassword = useCallback(async (email) => {
    if (!supabase) throw new Error(SUPABASE_NOT_CONFIGURED)
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/settings`,
    })
    if (error) throw error
    return data
  }, [])

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithPhone,
    verifyOtp,
    signOut,
    resetPassword,
    isSupabaseConfigured: !!supabase,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}
