import { useEffect, useState } from 'react'
import { searchCandidate, getCandidateFinances } from '../services/fecApi'

/**
 * Fetches FEC campaign finance data for a federal legislator.
 * Returns { finances, loading, error }.
 * Skips non-federal members (state, civic, judiciary, executive).
 */
export default function useCampaignFinance(member) {
  const [finances, setFinances] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const isFederal = member &&
    member.source !== 'openstates' &&
    member.source !== 'civic' &&
    member.source !== 'judiciary' &&
    member.source !== 'executive'

  const key = member?.bioguideId || member?.id

  useEffect(() => {
    setFinances(null)
    setError(null)

    if (!isFederal || !member?.name) {
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)

    searchCandidate(member.name, member.state)
      .then(candidate => {
        if (cancelled) return null
        if (candidate) return getCandidateFinances(candidate.candidateId)
        return null
      })
      .then(data => {
        if (!cancelled) setFinances(data)
      })
      .catch(err => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [key])

  return { finances, loading, error }
}
