import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import {
  getProfile,
  updateProfile as updateProfileService,
  syncLocalToCloud,
  getBallotPlan,
  upsertBallotPlan,
} from '../services/profileService'

/**
 * Hook that loads profile data when user is authenticated.
 *
 * Returns:
 *   profile     — the user's profile row (or null)
 *   loading     — true while fetching
 *   updateProfile — function(fields) to update profile
 *   syncBallot  — function(ballotData) to save ballot to cloud
 *   ballotPlan  — the cloud ballot plan (or null)
 *   user        — the Supabase auth user (or null)
 */
export default function useProfile() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [ballotPlan, setBallotPlan] = useState(null)
  const [loading, setLoading] = useState(true)

  // Listen for auth state changes
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  // When user changes, load profile + ballot
  useEffect(() => {
    if (!user) {
      setProfile(null)
      setBallotPlan(null)
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)

    async function load() {
      try {
        // Load profile
        const p = await getProfile(user.id)
        if (!cancelled) setProfile(p)

        // Sync localStorage ballot to cloud on first login, then load cloud data
        await syncLocalToCloud(user.id)
        const bp = await getBallotPlan(user.id)
        if (!cancelled) setBallotPlan(bp)
      } catch (err) {
        console.error('useProfile load error:', err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [user])

  const updateProfile = useCallback(
    async (fields) => {
      if (!user) return null
      const updated = await updateProfileService(user.id, fields)
      setProfile(updated)
      return updated
    },
    [user]
  )

  const syncBallot = useCallback(
    async (ballotData) => {
      if (!user) return null
      const saved = await upsertBallotPlan(user.id, ballotData)
      setBallotPlan(saved)
      return saved
    },
    [user]
  )

  return { user, profile, loading, updateProfile, syncBallot, ballotPlan }
}
