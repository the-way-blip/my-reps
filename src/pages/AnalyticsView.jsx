import { useMemo } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import { REP_ALIGNMENT, SCORECARD_ISSUES, gradeColor, gradeToNum } from '../data/foundingValues'
import { useApp } from '../contexts/AppContext'
import FounderQuoteBanner from '../components/ui/FounderQuoteBanner'

const GRADE_ORDER = ['A', 'B', 'C', 'D', 'F']

function gradeLabel(grade) {
  if (grade === 'A') return 'Strongly Aligned'
  if (grade === 'B') return 'Mostly Aligned'
  if (grade === 'C') return 'Mixed'
  if (grade === 'D') return 'Mostly Opposed'
  return 'Strongly Opposed'
}

function categorize(key) {
  if (key.startsWith('judge-') || key.startsWith('exec-')) return null // exclude from legislator stats
  if (/^[A-Z]\d{6}$/.test(key)) return 'federal' // bioguideId pattern
  if (key.startsWith('ocd-person/')) return 'state'
  return 'federal' // fallback
}

function getPartyFromKey(key) {
  const entry = REP_ALIGNMENT[key]
  if (!entry) return null
  // Use comment-based party info — we'll infer from grades as fallback
  return null
}

export default function AnalyticsView() {
  usePageTitle('Alignment Analytics', 'Alignment analytics across all scored representatives')

  const { senators, reps, stateSenators, stateReps } = useApp()

  // Build lookup of bioguideId/sourceId -> { party, name }
  const repInfo = useMemo(() => {
    const map = {}
    const allReps = [...(senators || []), ...(reps || []), ...(stateSenators || []), ...(stateReps || [])]
    allReps.forEach(r => {
      const key = r.bioguideId || r.sourceId || r.id
      if (key) {
        const p = (r.partyName || r.party || '').toLowerCase()
        map[key] = {
          name: r.name || r.officialName || key,
          party: p.includes('democrat') ? 'Democrat' : p.includes('republican') ? 'Republican' : 'Other',
        }
      }
    })
    return map
  }, [senators, reps, stateSenators, stateReps])

  const partyMap = useMemo(() => {
    const map = {}
    Object.entries(repInfo).forEach(([key, info]) => { map[key] = info.party })
    return map
  }, [repInfo])

  const analytics = useMemo(() => {
    const entries = Object.entries(REP_ALIGNMENT)

    // Overall grade distribution
    const overallDist = { A: 0, B: 0, C: 0, D: 0, F: 0 }
    // Per-issue distributions
    const issueDist = {}
    SCORECARD_ISSUES.forEach(i => {
      issueDist[i.id] = { A: 0, B: 0, C: 0, D: 0, F: 0 }
    })
    // Party breakdown
    const partyGrades = { Democrat: [], Republican: [], Other: [] }
    // Level breakdown
    const levelGrades = { federal: [], state: [], judicial: [], executive: [] }
    // Individual entries for ranking
    const ranked = []

    entries.forEach(([key, data]) => {
      if (!data || !data.overall) return

      overallDist[data.overall] = (overallDist[data.overall] || 0) + 1

      SCORECARD_ISSUES.forEach(issue => {
        const grade = data[issue.id]
        if (grade && issueDist[issue.id]) {
          issueDist[issue.id][grade] = (issueDist[issue.id][grade] || 0) + 1
        }
      })

      // Compute numeric score
      const numScore = gradeToNum(data.overall)
      const entry = { key, data, score: numScore }

      // Determine level
      if (key.startsWith('judge-')) {
        levelGrades.judicial.push(entry)
      } else if (key.startsWith('exec-')) {
        levelGrades.executive.push(entry)
      } else if (key.startsWith('ocd-person/')) {
        levelGrades.state.push(entry)
      } else {
        levelGrades.federal.push(entry)
      }

      // Party
      const party = partyMap[key] || 'Other'
      partyGrades[party]?.push(entry)

      ranked.push(entry)
    })

    // Sort ranked by score descending
    ranked.sort((a, b) => b.score - a.score)

    // Compute averages
    const avgScore = ranked.length > 0
      ? ranked.reduce((s, e) => s + e.score, 0) / ranked.length
      : 0

    const partyAvg = {}
    Object.entries(partyGrades).forEach(([party, entries]) => {
      if (entries.length > 0) {
        partyAvg[party] = entries.reduce((s, e) => s + e.score, 0) / entries.length
      }
    })

    const issueAvg = {}
    SCORECARD_ISSUES.forEach(issue => {
      const dist = issueDist[issue.id]
      const total = GRADE_ORDER.reduce((s, g) => s + dist[g], 0)
      if (total > 0) {
        const sum = GRADE_ORDER.reduce((s, g) => s + dist[g] * gradeToNum(g), 0)
        issueAvg[issue.id] = sum / total
      }
    })

    return {
      total: ranked.length,
      overallDist,
      issueDist,
      partyGrades,
      partyAvg,
      levelGrades,
      issueAvg,
      avgScore,
      ranked,
    }
  }, [partyMap])

  function numToGradeLabel(num) {
    if (num >= 3.5) return 'A'
    if (num >= 2.5) return 'B'
    if (num >= 1.5) return 'C'
    if (num >= 0.5) return 'D'
    return 'F'
  }

  function displayName(key) {
    // Check rep info from loaded data
    if (repInfo[key]) return repInfo[key].name
    // Judge/exec keys: convert slug back to name
    if (key.startsWith('judge-') || key.startsWith('exec-')) {
      return key.replace(/^(judge|exec)-/, '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    }
    return key
  }

  const overallGrade = numToGradeLabel(analytics.avgScore)

  return (
    <div className="page-container analytics-page">
      <h2 className="page-title">Alignment Analytics</h2>
      <p className="page-subtitle">
        Aggregate Constitutional Alignment scores across {analytics.total} tracked officials
      </p>

      <FounderQuoteBanner />

      {/* ── Overall Summary ── */}
      <div className="analytics-summary">
        <div className="analytics-big-grade">
          <div className="analytics-grade-circle" style={{ background: gradeColor(overallGrade) }}>
            {overallGrade}
          </div>
          <div className="analytics-grade-info">
            <strong>Overall Delegation Score</strong>
            <span>{gradeLabel(overallGrade)} — {analytics.avgScore.toFixed(1)}/4.0</span>
          </div>
        </div>
        <div className="analytics-stat-row">
          <div className="analytics-stat">
            <span className="analytics-stat-value">{analytics.total}</span>
            <span className="analytics-stat-label">Officials Tracked</span>
          </div>
          <div className="analytics-stat">
            <span className="analytics-stat-value">{analytics.overallDist.A + analytics.overallDist.B}</span>
            <span className="analytics-stat-label">Aligned (A-B)</span>
          </div>
          <div className="analytics-stat">
            <span className="analytics-stat-value">{analytics.overallDist.D + analytics.overallDist.F}</span>
            <span className="analytics-stat-label">Opposed (D-F)</span>
          </div>
        </div>
      </div>

      {/* ── Grade Distribution ── */}
      <div className="analytics-section">
        <h3 className="analytics-section-title">Overall Grade Distribution</h3>
        <div className="analytics-bar-chart">
          {GRADE_ORDER.map(g => {
            const count = analytics.overallDist[g]
            const pct = analytics.total > 0 ? (count / analytics.total) * 100 : 0
            return (
              <div key={g} className="analytics-bar-row">
                <span className="analytics-bar-label" style={{ color: gradeColor(g) }}>{g}</span>
                <div className="analytics-bar-track">
                  <div
                    className="analytics-bar-fill"
                    style={{ width: `${pct}%`, background: gradeColor(g) }}
                  />
                </div>
                <span className="analytics-bar-count">{count} ({Math.round(pct)}%)</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Party Comparison ── */}
      <div className="analytics-section">
        <h3 className="analytics-section-title">Party Comparison</h3>
        <div className="analytics-party-cards">
          {['Republican', 'Democrat'].map(party => {
            const entries = analytics.partyGrades[party] || []
            const avg = analytics.partyAvg[party] || 0
            const grade = numToGradeLabel(avg)
            const cls = party === 'Democrat' ? 'party-d' : 'party-r'
            const gradeDist = { A: 0, B: 0, C: 0, D: 0, F: 0 }
            entries.forEach(e => { gradeDist[e.data.overall]++ })
            return (
              <div key={party} className="analytics-party-card">
                <div className="analytics-party-header">
                  <span className={`analytics-party-name ${cls}`}>{party}s</span>
                  <span className="analytics-party-count">{entries.length}</span>
                </div>
                <div className="analytics-party-grade" style={{ background: gradeColor(grade) }}>
                  {grade}
                </div>
                <span className="analytics-party-avg">{avg.toFixed(1)}/4.0 avg</span>
                <div className="analytics-mini-bar">
                  {GRADE_ORDER.map(g => {
                    const pct = entries.length > 0 ? (gradeDist[g] / entries.length) * 100 : 0
                    return pct > 0 ? (
                      <div
                        key={g}
                        className="analytics-mini-fill"
                        style={{ flex: gradeDist[g], background: gradeColor(g) }}
                        title={`${g}: ${gradeDist[g]}`}
                      />
                    ) : null
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Issue Breakdown ── */}
      <div className="analytics-section">
        <h3 className="analytics-section-title">Issue Breakdown</h3>
        <p className="analytics-section-sub">Average score across all tracked officials per issue</p>
        <div className="analytics-issue-grid">
          {SCORECARD_ISSUES.map(issue => {
            const avg = analytics.issueAvg[issue.id] || 0
            const grade = numToGradeLabel(avg)
            return (
              <div key={issue.id} className="analytics-issue-card">
                <div className="analytics-issue-grade" style={{ background: gradeColor(grade) }}>
                  {grade}
                </div>
                <span className="analytics-issue-name">{issue.shortLabel}</span>
                <span className="analytics-issue-avg">{avg.toFixed(1)}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Level Breakdown ── */}
      <div className="analytics-section">
        <h3 className="analytics-section-title">By Government Level</h3>
        <div className="analytics-level-grid">
          {[
            { key: 'federal', label: 'Federal' },
            { key: 'state', label: 'State' },
            { key: 'judicial', label: 'Judicial' },
            { key: 'executive', label: 'Executive' },
          ].map(({ key, label }) => {
            const entries = analytics.levelGrades[key] || []
            if (entries.length === 0) return null
            const avg = entries.reduce((s, e) => s + e.score, 0) / entries.length
            const grade = numToGradeLabel(avg)
            return (
              <div key={key} className="analytics-level-card">
                <span className="analytics-level-label">{label}</span>
                <div className="analytics-level-grade" style={{ background: gradeColor(grade) }}>
                  {grade}
                </div>
                <span className="analytics-level-count">{entries.length} officials</span>
                <span className="analytics-level-avg">{avg.toFixed(1)}/4.0</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Top Aligned & Opposed ── */}
      <div className="analytics-section">
        <h3 className="analytics-section-title">Most Aligned Officials</h3>
        <div className="analytics-ranking">
          {analytics.ranked.slice(0, 10).map((entry, i) => (
              <div key={entry.key} className="analytics-rank-item">
                <span className="analytics-rank-num">{i + 1}</span>
                <div className="analytics-rank-grade" style={{ background: gradeColor(entry.data.overall) }}>
                  {entry.data.overall}
                </div>
                <span className="analytics-rank-name">{displayName(entry.key)}</span>
              </div>
          ))}
        </div>
      </div>

      <div className="analytics-section">
        <h3 className="analytics-section-title">Least Aligned Officials</h3>
        <div className="analytics-ranking">
          {analytics.ranked.slice(-10).reverse().map((entry, i) => (
              <div key={entry.key} className="analytics-rank-item">
                <span className="analytics-rank-num">{i + 1}</span>
                <div className="analytics-rank-grade" style={{ background: gradeColor(entry.data.overall) }}>
                  {entry.data.overall}
                </div>
                <span className="analytics-rank-name">{displayName(entry.key)}</span>
              </div>
          ))}
        </div>
      </div>

      <div className="analytics-footnote">
        <p>
          Scores are based on Heritage Action, FRC Action, NRA, and Club for Growth ratings,
          combined with key roll-call votes and public positions. Judicial scores reflect rulings
          on constitutional issues. See individual scorecards for detailed methodology.
        </p>
      </div>
    </div>
  )
}
