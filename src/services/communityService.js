let supabase = null
try {
  const mod = await import('../lib/supabase.js')
  supabase = mod.supabase || mod.default
} catch {
  // Supabase not configured — will use demo data
}

const DEFAULT_OFFICES = [
  { id: 'president', label: 'President', level: 'Federal' },
  { id: 'us-senate', label: 'U.S. Senate', level: 'Federal' },
  { id: 'us-house', label: 'U.S. House', level: 'Federal' },
  { id: 'governor', label: 'Governor', level: 'State' },
  { id: 'secretary-state', label: 'Secretary of State', level: 'State' },
  { id: 'attorney-general', label: 'Attorney General', level: 'State' },
  { id: 'state-senate', label: 'State Senator', level: 'State' },
  { id: 'state-house', label: 'State Representative', level: 'State' },
]

const DEMO_DATA = {
  stats: [
    { office_id: 'president', candidate_name: 'John Smith', party: 'Republican', count: 142 },
    { office_id: 'president', candidate_name: 'Jane Doe', party: 'Democratic', count: 118 },
    { office_id: 'president', candidate_name: 'Alex Rivera', party: 'Libertarian', count: 23 },
    { office_id: 'president', candidate_name: 'Pat Morgan', party: 'Independent', count: 11 },
    { office_id: 'us-senate', candidate_name: 'Bob Williams', party: 'Republican', count: 97 },
    { office_id: 'us-senate', candidate_name: 'Sara Chen', party: 'Democratic', count: 88 },
    { office_id: 'us-senate', candidate_name: 'Mike Torres', party: 'Libertarian', count: 14 },
    { office_id: 'us-house', candidate_name: 'Lisa Park', party: 'Democratic', count: 76 },
    { office_id: 'us-house', candidate_name: 'Tom Baker', party: 'Republican', count: 71 },
    { office_id: 'us-house', candidate_name: 'Nina Patel', party: 'Independent', count: 9 },
    { office_id: 'governor', candidate_name: 'Mark Johnson', party: 'Republican', count: 104 },
    { office_id: 'governor', candidate_name: 'Emily Davis', party: 'Democratic', count: 91 },
    { office_id: 'secretary-state', candidate_name: 'Carol White', party: 'Democratic', count: 63 },
    { office_id: 'secretary-state', candidate_name: 'Dan Harris', party: 'Republican', count: 58 },
    { office_id: 'attorney-general', candidate_name: 'Rachel Kim', party: 'Democratic', count: 72 },
    { office_id: 'attorney-general', candidate_name: 'James Lee', party: 'Republican', count: 65 },
    { office_id: 'state-senate', candidate_name: 'Kevin Brown', party: 'Republican', count: 55 },
    { office_id: 'state-senate', candidate_name: 'Amy Clark', party: 'Democratic', count: 48 },
    { office_id: 'state-house', candidate_name: 'Chris Martin', party: 'Democratic', count: 42 },
    { office_id: 'state-house', candidate_name: 'Laura Scott', party: 'Republican', count: 39 },
  ],
  totalUsers: 294,
  isDemo: true,
}

export { DEFAULT_OFFICES }

export async function getCommunityStats(state) {
  if (!supabase) return DEMO_DATA

  try {
    const { data, error } = await supabase
      .from('community_votes')
      .select('office_id, candidate_name, party')
      .eq('state', state)

    if (error) throw error
    if (!data || data.length === 0) return DEMO_DATA

    return aggregateVotes(data)
  } catch {
    return DEMO_DATA
  }
}

export async function getCommunityStatsNational() {
  if (!supabase) return DEMO_DATA

  try {
    const { data, error } = await supabase
      .from('community_votes')
      .select('office_id, candidate_name, party')

    if (error) throw error
    if (!data || data.length === 0) return DEMO_DATA

    return aggregateVotes(data)
  } catch {
    return DEMO_DATA
  }
}

export async function submitVote(userId, state, officeId, candidateName, party) {
  if (!supabase) return { success: false, demo: true }

  try {
    const { error } = await supabase
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

    if (error) throw error
    return { success: true }
  } catch {
    return { success: false }
  }
}

function aggregateVotes(data) {
  const grouped = {}
  const userIds = new Set()

  data.forEach(row => {
    const key = `${row.office_id}::${row.candidate_name}::${row.party}`
    if (!grouped[key]) {
      grouped[key] = {
        office_id: row.office_id,
        candidate_name: row.candidate_name,
        party: row.party,
        count: 0,
      }
    }
    grouped[key].count++
    if (row.user_id) userIds.add(row.user_id)
  })

  return {
    stats: Object.values(grouped),
    totalUsers: userIds.size || data.length,
    isDemo: false,
  }
}
