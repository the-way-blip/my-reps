import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { useApp } from '../contexts/AppContext'
import { STATES } from '../data/states'
import {
  getCommunityStats,
  getCommunityStatsNational,
  DEFAULT_OFFICES,
} from '../services/communityService'

const PARTY_COLORS = {
  Republican: 'var(--party-r)',
  Democratic: 'var(--party-d)',
  Libertarian: '#ca8a04',
  Independent: 'var(--party-i)',
}

function partyColor(party) {
  return PARTY_COLORS[party] || 'var(--party-i)'
}

function partyAbbr(party) {
  if (party === 'Republican') return 'R'
  if (party === 'Democratic') return 'D'
  if (party === 'Libertarian') return 'L'
  if (party === 'Independent') return 'I'
  return party?.charAt(0) || '?'
}

const officeMap = Object.fromEntries(DEFAULT_OFFICES.map(o => [o.id, o]))

export default function CommunityView() {
  usePageTitle('Community Pulse', 'See how Of For & By The People users are planning to vote')

  const { selectedState } = useApp()
  const [filterState, setFilterState] = useState(selectedState?.code || '')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    const fetch = filterState
      ? getCommunityStats(filterState)
      : getCommunityStatsNational()

    fetch.then(result => {
      if (!cancelled) {
        setData(result)
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [filterState])

  // Group stats by office
  const officeStats = useMemo(() => {
    if (!data?.stats) return []
    const grouped = {}
    data.stats.forEach(s => {
      if (!grouped[s.office_id]) grouped[s.office_id] = []
      grouped[s.office_id].push(s)
    })

    return DEFAULT_OFFICES
      .filter(o => grouped[o.id])
      .map(office => {
        const candidates = grouped[office.id].sort((a, b) => b.count - a.count)
        const total = candidates.reduce((s, c) => s + c.count, 0)
        return { office, candidates, total }
      })
  }, [data])

  // Summary stats
  const summary = useMemo(() => {
    if (!data?.stats || data.stats.length === 0) return null
    const allCandidates = [...data.stats].sort((a, b) => b.count - a.count)
    const topCandidate = allCandidates[0]

    // Party distribution
    const partyTotals = {}
    let grandTotal = 0
    data.stats.forEach(s => {
      partyTotals[s.party] = (partyTotals[s.party] || 0) + s.count
      grandTotal += s.count
    })

    const partyBreakdown = Object.entries(partyTotals)
      .map(([party, count]) => ({ party, count, pct: grandTotal > 0 ? (count / grandTotal) * 100 : 0 }))
      .sort((a, b) => b.count - a.count)

    return {
      totalUsers: data.totalUsers,
      topCandidate,
      partyBreakdown,
      grandTotal,
    }
  }, [data])

  const stateName = filterState
    ? STATES.find(s => s.code === filterState)?.name || filterState
    : 'the Nation'

  return (
    <div className="page-container community-page">
      {/* Hero */}
      <div className="community-hero">
        <h2 className="page-title community-title">Community Pulse</h2>
        <p className="community-subtitle">
          See how Of For & By The People users across {stateName} are planning to vote
        </p>
      </div>

      {/* Demo banner */}
      {data?.isDemo && (
        <div className="community-demo-banner">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>
            Sample data shown — <Link to="/ballot">sign in and share your ballot</Link> to contribute real data
          </span>
        </div>
      )}

      {/* State filter */}
      <div className="community-filter">
        <label htmlFor="community-state-filter" className="community-filter-label">
          Filter by state
        </label>
        <select
          id="community-state-filter"
          className="community-filter-select"
          value={filterState}
          onChange={e => setFilterState(e.target.value)}
        >
          <option value="">National (All States)</option>
          {STATES.map(s => (
            <option key={s.code} value={s.code}>{s.name}</option>
          ))}
        </select>
      </div>

      {loading && (
        <div className="loader"><div className="spinner" /></div>
      )}

      {!loading && summary && (
        <>
          {/* Summary stats */}
          <div className="community-summary">
            <div className="community-stat">
              <span className="community-stat-value">{summary.totalUsers}</span>
              <span className="community-stat-label">Users Sharing Choices</span>
            </div>
            <div className="community-stat">
              <span className="community-stat-value">{summary.topCandidate?.candidate_name}</span>
              <span className="community-stat-label">Most Popular Candidate</span>
            </div>
            <div className="community-stat">
              <span className="community-stat-value">{officeStats.length}</span>
              <span className="community-stat-label">Offices Tracked</span>
            </div>
          </div>

          {/* Party distribution donut */}
          <div className="community-section">
            <h3 className="community-section-title">Party Distribution</h3>
            <div className="community-donut-container">
              <div className="community-donut">
                {(() => {
                  let cumulative = 0
                  return summary.partyBreakdown.map(p => {
                    const start = cumulative
                    cumulative += p.pct
                    const style = {
                      background: `conic-gradient(transparent ${start}%, ${partyColor(p.party)} ${start}%, ${partyColor(p.party)} ${cumulative}%, transparent ${cumulative}%)`,
                    }
                    return <div key={p.party} className="community-donut-segment" style={style} />
                  })
                })()}
                <div className="community-donut-center">
                  <span className="community-donut-total">{summary.grandTotal}</span>
                  <span className="community-donut-label">votes</span>
                </div>
              </div>
              <div className="community-donut-legend">
                {summary.partyBreakdown.map(p => (
                  <div key={p.party} className="community-legend-item">
                    <span className="community-legend-dot" style={{ background: partyColor(p.party) }} />
                    <span className="community-legend-name">{p.party}</span>
                    <span className="community-legend-pct">{Math.round(p.pct)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Office cards */}
          <div className="community-section">
            <h3 className="community-section-title">Candidate Breakdown by Office</h3>
            <div className="community-office-grid">
              {officeStats.map(({ office, candidates, total }) => {
                const leader = candidates[0]
                const leaderPct = total > 0 ? Math.round((leader.count / total) * 100) : 0
                return (
                  <div key={office.id} className="community-office-card">
                    <div className="community-office-header">
                      <span className="community-office-level">{office.level}</span>
                      <h4 className="community-office-name">{office.label}</h4>
                    </div>
                    <div className="community-office-bars">
                      {candidates.map(c => {
                        const pct = total > 0 ? (c.count / total) * 100 : 0
                        return (
                          <div key={c.candidate_name} className="community-bar-row">
                            <div className="community-bar-info">
                              <span className="community-bar-candidate">{c.candidate_name}</span>
                              <span
                                className="community-bar-party-badge"
                                style={{ background: partyColor(c.party), color: '#fff' }}
                              >
                                {partyAbbr(c.party)}
                              </span>
                            </div>
                            <div className="community-bar-track">
                              <div
                                className="community-bar-fill"
                                style={{
                                  width: `${pct}%`,
                                  background: partyColor(c.party),
                                }}
                              />
                            </div>
                            <span className="community-bar-stats">
                              {Math.round(pct)}% ({c.count})
                            </span>
                          </div>
                        )
                      })}
                    </div>
                    <p className="community-office-leader">
                      {leaderPct}% of {stateName} users support {leader.candidate_name} for {office.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Privacy note */}
          <div className="community-privacy">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>All data is anonymized. Only aggregate totals are shown.</span>
          </div>

          {/* CTA */}
          <div className="community-cta">
            <Link to="/ballot" className="community-cta-btn">
              Share your choices to influence the community pulse
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
