import { supabase } from '../lib/supabase'

const STORAGE_KEY = 'myreps-ballot-plan'

/**
 * Fetch a user's profile from Supabase.
 */
export async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

/**
 * Update profile fields for a user.
 */
export async function updateProfile(userId, fields) {
  const { data, error } = await supabase
    .from('profiles')
    .update(fields)
    .eq('id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

/**
 * Upsert the user's ballot plan (choices, proposals, customOffices).
 * Creates a new row if none exists, otherwise updates the existing one.
 */
export async function upsertBallotPlan(userId, ballotData) {
  // Check for existing plan
  const { data: existing } = await supabase
    .from('ballot_plans')
    .select('id')
    .eq('user_id', userId)
    .maybeSingle()

  if (existing) {
    const { data, error } = await supabase
      .from('ballot_plans')
      .update({
        choices: ballotData.choices || {},
        proposals: ballotData.proposals || [],
        custom_offices: ballotData.customOffices || [],
      })
      .eq('id', existing.id)
      .select()
      .single()

    if (error) throw error
    return data
  }

  const { data, error } = await supabase
    .from('ballot_plans')
    .insert({
      user_id: userId,
      choices: ballotData.choices || {},
      proposals: ballotData.proposals || [],
      custom_offices: ballotData.customOffices || [],
    })
    .select()
    .single()

  if (error) throw error
  return data
}

/**
 * Fetch the user's ballot plan from Supabase.
 */
export async function getBallotPlan(userId) {
  const { data, error } = await supabase
    .from('ballot_plans')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle()

  if (error) throw error
  return data
}

/**
 * Migrate localStorage ballot plan to Supabase on first login.
 * Only writes to cloud if there is local data and no existing cloud data.
 */
export async function syncLocalToCloud(userId) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null

    const localData = JSON.parse(raw)
    const hasLocalData =
      Object.keys(localData.choices || {}).length > 0 ||
      (localData.proposals || []).length > 0 ||
      (localData.customOffices || []).length > 0

    if (!hasLocalData) return null

    // Check if cloud already has data
    const cloudPlan = await getBallotPlan(userId)
    if (cloudPlan) {
      // Cloud data exists — prefer it, don't overwrite
      return cloudPlan
    }

    // Push local data to cloud
    return await upsertBallotPlan(userId, localData)
  } catch (err) {
    console.error('syncLocalToCloud failed:', err)
    return null
  }
}

/**
 * Add or update a community vote for aggregate stats.
 */
export async function submitCommunityVote(userId, state, officeId, candidateName, party) {
  const { data, error } = await supabase
    .from('community_votes')
    .upsert(
      {
        user_id: userId,
        state,
        office_id: officeId,
        candidate_name: candidateName,
        party,
      },
      { onConflict: 'user_id,office_id' }
    )
    .select()
    .single()

  if (error) throw error
  return data
}

/**
 * Get aggregate vote counts for a specific state, grouped by office and candidate.
 */
export async function getCommunityStats(state) {
  const { data, error } = await supabase
    .from('community_votes')
    .select('office_id, candidate_name, party')
    .eq('state', state)

  if (error) throw error
  return aggregateVotes(data)
}

/**
 * Get nationwide aggregate vote counts grouped by office and candidate.
 */
export async function getCommunityStatsAll() {
  const { data, error } = await supabase
    .from('community_votes')
    .select('office_id, candidate_name, party')

  if (error) throw error
  return aggregateVotes(data)
}

/**
 * Aggregate raw vote rows into { [officeId]: { [candidateName]: { count, party } } }
 */
function aggregateVotes(rows) {
  const result = {}
  for (const row of rows) {
    if (!result[row.office_id]) {
      result[row.office_id] = {}
    }
    const key = row.candidate_name || 'Unknown'
    if (!result[row.office_id][key]) {
      result[row.office_id][key] = { count: 0, party: row.party }
    }
    result[row.office_id][key].count++
  }
  return result
}
