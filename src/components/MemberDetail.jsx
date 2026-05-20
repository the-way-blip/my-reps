import { useEffect, useState, useRef } from 'react'
import useFocusTrap from '../hooks/useFocusTrap'
import { getMemberDetail, getMemberLegislation, getMemberCosponsoredLegislation } from '../services/congressApi'
import useCampaignFinance from '../hooks/useCampaignFinance'
import VotingRecord from './VotingRecord'
import ShareButton from './ui/ShareButton'
import ScorecardShare from './ui/ScorecardShare'
import { IDEOLOGY_SCORES } from '../data/ideologyScores'
import { REP_ALIGNMENT, SCORECARD_ISSUES, gradeColor } from '../data/foundingValues'
import { COMMITTEE_ASSIGNMENTS } from '../data/committeeAssignments'
import FreshnessIndicator from './ui/FreshnessIndicator'

const PHOTO_FALLBACK = id =>
  `https://unitedstates.github.io/images/congress/225x275/${id}.jpg`

function fmtMoney(val) {
  if (val == null) return '—'
  const abs = Math.abs(val)
  if (abs >= 1_000_000) return `$${(val / 1_000_000).toFixed(1)}M`
  if (abs >= 1_000) return `$${(val / 1_000).toFixed(0)}K`
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

function partyInfo(partyName) {
  if (!partyName) return { cls: 'party-i', full: 'Independent' }
  const p = partyName.toLowerCase()
  if (p.includes('democrat')) return { cls: 'party-d', full: 'Democrat' }
  if (p.includes('republican')) return { cls: 'party-r', full: 'Republican' }
  return { cls: 'party-i', full: partyName }
}

// Detect if this is a state legislator (from OpenStates) vs federal (from Congress.gov)
function isStateLeg(member) {
  return member.source === 'openstates'
}

function slugifyName(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function MemberDetail({ member, onClose }) {
  const [detail, setDetail] = useState(null)
  const [legislation, setLegislation] = useState(null)
  const [cosponsored, setCosponsored] = useState(null)
  const [loading, setLoading] = useState(true)
  const [legLoading, setLegLoading] = useState(true)
  const [coLegLoading, setCoLegLoading] = useState(true)
  const [legTab, setLegTab] = useState('sponsored')
  const [scorecardPopup, setScorecardPopup] = useState(null)
  const [error, setError] = useState(null)
  const panelRef = useRef(null)
  const previousFocusRef = useRef(null)
  const focusTrapRef = useFocusTrap(true)

  const stateLevel = isStateLeg(member)
  const isCivic = member.source === 'civic'
  const isBranch = member.source === 'judiciary' || member.source === 'executive'
  const { finances, loading: finLoading } = useCampaignFinance(member)

  // Focus trap: capture focus on open, trap Tab, restore on close
  useEffect(() => {
    previousFocusRef.current = document.activeElement
    // Focus the close button on open
    const panel = panelRef.current
    if (panel) {
      const closeBtn = panel.querySelector('.detail-close')
      if (closeBtn) closeBtn.focus()
    }
    return () => {
      if (previousFocusRef.current && previousFocusRef.current.focus) {
        previousFocusRef.current.focus()
      }
    }
  }, [member])

  // Trap Tab within the panel and close on Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return
      const focusable = panel.querySelectorAll('a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])')
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    setDetail(null)
    setLegislation(null)
    setCosponsored(null)
    setLoading(true)
    setLegLoading(true)
    setCoLegLoading(true)
    setLegTab('sponsored')
    setError(null)

    if (stateLevel || isCivic || isBranch) {
      setLoading(false)
      setLegLoading(false)
      setCoLegLoading(false)
      setLegislation([])
      setCosponsored([])
    } else {
      // Federal member — fetch detail, legislation, cosponsored, and campaign finance
      getMemberDetail(member.bioguideId)
        .then(setDetail)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))

      getMemberLegislation(member.bioguideId)
        .then(setLegislation)
        .catch(() => setLegislation([]))
        .finally(() => setLegLoading(false))

      getMemberCosponsoredLegislation(member.bioguideId)
        .then(setCosponsored)
        .catch(() => setCosponsored([]))
        .finally(() => setCoLegLoading(false))
    }
  }, [member.bioguideId || member.id])

  // Close on Escape
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Determine display values based on source
  const party = partyInfo(stateLevel || isCivic || isBranch ? member.party || member.partyName : member.partyName)

  const photoUrl = stateLevel || isCivic || isBranch
    ? (member.photoUrl || '/placeholder-avatar.svg')
    : (member.depiction?.imageUrl ?? PHOTO_FALLBACK(member.bioguideId))

  const districtLabel = isBranch
    ? [member.chamber, member.district].filter(Boolean).join(' — ')
    : isCivic
      ? member.office
      : stateLevel
        ? `${member.chamber} — District ${member.district}`
        : (member.district ? `District ${member.district} — House` : 'U.S. Senator')

  const stateName = stateLevel ? member.state : member.state

  // Contact info
  const website = stateLevel
    ? member.contacts?.links?.[0]
    : isCivic
      ? member.contacts?.website
      : detail?.officialWebsiteUrl
  const address = stateLevel
    ? member.contacts?.offices?.[0]?.address
    : isCivic
      ? member.contacts?.address
      : detail?.addressInformation?.officeAddress
  const phone = stateLevel
    ? member.contacts?.offices?.[0]?.phone
    : isCivic
      ? member.contacts?.phone
      : detail?.addressInformation?.phoneNumber
  const email = stateLevel
    ? member.contacts?.email
    : isCivic
      ? member.contacts?.email
      : null
  const leadership = !stateLevel && !isCivic ? detail?.leadership?.[0]?.type : null

  // Determine title for letter greeting
  const repTitle = (() => {
    if (isBranch) return ''
    if (isCivic) return ''
    if (stateLevel) {
      const ch = (member.chamber || '').toLowerCase()
      if (ch.includes('senate') || ch.includes('upper')) return 'Senator'
      return 'Representative'
    }
    // federal
    return member.district ? 'Representative' : 'Senator'
  })()

  const lastName = (member.name || '').split(/\s+/).pop()

  const [letterOpen, setLetterOpen] = useState(false)
  const [letterCopied, setLetterCopied] = useState(false)

  const letterText = repTitle && lastName
    ? `Dear ${repTitle} ${lastName},\n\nI am a constituent writing to express my views on [issue]. I respectfully ask that you [action].\n\nThank you for your time and service.\n\nSincerely,\n[Your Name]\n[Your Address]`
    : ''

  const copyLetter = () => {
    navigator.clipboard.writeText(letterText).then(() => {
      setLetterCopied(true)
      setTimeout(() => setLetterCopied(false), 2000)
    })
  }

  return (
    <>
      <div className="detail-overlay" onClick={onClose} aria-hidden="true" />
      <div className="detail-panel" role="dialog" aria-modal="true" aria-label={`Details for ${member.name}`} ref={(node) => { panelRef.current = node; focusTrapRef.current = node }}>
        <div className="detail-top-bar">
          <ShareButton
            title={member.name}
            text={`${member.name} — ${districtLabel}, ${stateName} (${party.full})`}
          />
          <button className="detail-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Hero */}
        <div className="detail-hero">
          <img
            src={photoUrl}
            alt={`Photo of ${member.name}`}
            className="detail-photo"
            onError={e => {
              e.target.onerror = null
              e.target.src = '/placeholder-avatar.svg'
            }}
          />
          <div className="detail-hero-info">
            <h2 className="detail-name">{member.name}</h2>
            <span className={`detail-party-badge ${party.cls}`}>{party.full}</span>
            <p className="detail-role">{districtLabel}</p>
            <p className="detail-state">{stateName}</p>
            {leadership && <p className="detail-leadership">{leadership}</p>}
            {stateLevel && (
              <span className="detail-level-badge">State Legislature</span>
            )}
            {isCivic && member.level === 'local' && (
              <span className="detail-level-badge detail-level-local">Local Government</span>
            )}
          </div>
        </div>

        {loading && (
          <div className="detail-loading-skeleton" role="status" aria-live="polite">
            <div className="skeleton skeleton-line" style={{ width: '60%', height: '0.8rem', marginBottom: '0.75rem' }} />
            <div className="skeleton skeleton-line" style={{ width: '80%', height: '0.7rem', marginBottom: '0.5rem' }} />
            <div className="skeleton skeleton-line" style={{ width: '45%', height: '0.7rem', marginBottom: '0.5rem' }} />
            <div className="skeleton skeleton-line" style={{ width: '70%', height: '0.7rem' }} />
          </div>
        )}

        {/* Constitutional Alignment Scorecard */}
        {(() => {
          const alignKey = member.bioguideId || member.sourceId || member.id || ('judge-' + member.name?.toLowerCase().replace(/[^a-z]+/g, '-'))
          const alignment = REP_ALIGNMENT[alignKey]
          if (!alignment) return null
          const overallLabel = alignment.overall === 'A' ? 'Strongly Aligned'
            : alignment.overall === 'B' ? 'Mostly Aligned'
            : alignment.overall === 'C' ? 'Mixed Record'
            : alignment.overall === 'D' ? 'Mostly Opposed'
            : 'Strongly Opposed'
          return (
            <div className="detail-section scorecard-section">
              <h3 className="section-title">Constitutional Alignment</h3>
              <p className="section-sub">Scored on key issues based on voting record and public positions</p>
              <div className="scorecard-overall">
                <div
                  className="scorecard-overall-grade"
                  style={{ background: gradeColor(alignment.overall) }}
                >
                  {alignment.overall}
                </div>
                <div className="scorecard-overall-text">
                  <div className="scorecard-overall-label">{overallLabel}</div>
                  <div className="scorecard-overall-sub">with constitutional & Christian values</div>
                </div>
              </div>
              <div className="scorecard-grid">
                {SCORECARD_ISSUES.map(issue => (
                  <button
                    key={issue.id}
                    className="scorecard-item scorecard-item-btn"
                    onClick={() => setScorecardPopup({ issue, grade: alignment[issue.id] })}
                    aria-label={`${issue.label}: grade ${alignment[issue.id] || 'unknown'} — tap for details`}
                  >
                    <span
                      className="scorecard-item-grade"
                      style={{ background: gradeColor(alignment[issue.id]) }}
                    >
                      {alignment[issue.id] || '?'}
                    </span>
                    <span className="scorecard-item-label">{issue.shortLabel}</span>
                  </button>
                ))}
              </div>
              {scorecardPopup && (() => {
                const { issue, grade } = scorecardPopup
                const issueVotes = alignment.votes?.[issue.id]
                return (
                  <>
                    <div className="scorecard-popup-overlay" onClick={() => setScorecardPopup(null)} aria-hidden="true" />
                    <div className="scorecard-popup" role="dialog" aria-label={issue.label}>
                      <div className="scorecard-popup-header">
                        <h4 className="scorecard-popup-title">{issue.label}</h4>
                        <button className="scorecard-popup-close" onClick={() => setScorecardPopup(null)} aria-label="Close">✕</button>
                      </div>
                      <p className="scorecard-popup-desc">{issue.description}</p>
                      <div className="scorecard-popup-grade-row">
                        <span className="scorecard-popup-grade" style={{ background: gradeColor(grade) }}>{grade || '?'}</span>
                        <span className="scorecard-popup-grade-text">{issue.grades?.[grade] || 'No data available'}</span>
                      </div>
                      {issueVotes && issueVotes.length > 0 && (
                        <div className="scorecard-popup-votes">
                          <strong>Key Votes & Actions:</strong>
                          <ul className="scorecard-votes-list">
                            {issueVotes.map((v, i) => (
                              <li key={i} className="scorecard-vote-item">
                                <span className={`scorecard-vote-icon ${v.good ? 'scorecard-vote-good' : 'scorecard-vote-bad'}`} aria-label={v.good ? 'Aligned' : 'Not aligned'}>
                                  {v.good ? '\u2713' : '\u2717'}
                                </span>
                                <div className="scorecard-vote-detail">
                                  <span className="scorecard-vote-bill">{v.bill}</span>
                                  <span className="scorecard-vote-meta">
                                    <span className="scorecard-vote-action">{v.vote}</span>
                                    <span className="scorecard-vote-year">{v.year}</span>
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="scorecard-popup-method">
                        <strong>How it's graded:</strong>
                        <p>{issue.grading}</p>
                      </div>
                      <div className="scorecard-popup-scale">
                        <strong>Grade scale:</strong>
                        <div className="scorecard-popup-scale-list">
                          {['A', 'B', 'C', 'D', 'F'].map(g => (
                            <div key={g} className={`scorecard-popup-scale-item ${g === grade ? 'scorecard-popup-scale-current' : ''}`}>
                              <span className="scorecard-popup-scale-badge" style={{ background: gradeColor(g) }}>{g}</span>
                              <span className="scorecard-popup-scale-desc">{issue.grades?.[g]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
              {alignment.sources?.length > 0 && (
                <div className="scorecard-sources">
                  {alignment.sources.map((s, i) => (
                    <span key={i} className="scorecard-source-tag">{s}</span>
                  ))}
                </div>
              )}
              <ScorecardShare member={member} alignment={alignment} />
            </div>
          )
        })()}

        {/* Ideology Score — simplified 0-100 scale */}
        {!stateLevel && !isCivic && IDEOLOGY_SCORES[member.bioguideId] != null && (() => {
          const raw = IDEOLOGY_SCORES[member.bioguideId]
          const score100 = Math.round(((raw + 1) / 2) * 100)
          const label = score100 >= 80 ? 'Strongly Conservative'
            : score100 >= 60 ? 'Conservative'
            : score100 >= 45 ? 'Moderate'
            : score100 >= 25 ? 'Liberal'
            : 'Strongly Liberal'
          return (
          <div className="detail-section ideology-section">
            <h3 className="section-title">Conservative Score</h3>
            <p className="section-sub">Based on voting patterns (119th Congress)</p>
            <div className="ideology-bar-container">
              <div className="ideology-bar">
                <div
                  className="ideology-marker"
                  style={{ left: `${score100}%` }}
                  title={`${score100}/100`}
                />
              </div>
              <div className="ideology-labels">
                <span>Liberal</span>
                <span>Conservative</span>
              </div>
              <p className="ideology-score-value">
                <strong>{score100}</strong>/100 — {label}
              </p>
            </div>
          </div>
          )
        })()}

        {/* Contact Actions */}
        {!loading && (website || address || phone || email) && (
          <div className="detail-section contact-actions-section">
            <h3 className="section-title">Contact</h3>
            <div className="contact-actions-grid">
              {phone && (
                <a href={`tel:${phone}`} className="contact-action-btn contact-action-call">
                  <svg className="contact-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <span className="contact-action-label">Call</span>
                  <span className="contact-action-detail">{phone}</span>
                </a>
              )}
              {email && (
                <a href={`mailto:${email}?subject=${encodeURIComponent(`Message for ${member.name}`)}`} className="contact-action-btn contact-action-email">
                  <svg className="contact-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                  <span className="contact-action-label">Email</span>
                  <span className="contact-action-detail">{email}</span>
                </a>
              )}
              {website && (
                <a href={website.startsWith('http') ? website : `https://${website}`} target="_blank" rel="noopener noreferrer" className="contact-action-btn contact-action-web">
                  <svg className="contact-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/>
                  </svg>
                  <span className="contact-action-label">Website</span>
                  <span className="contact-action-detail">{website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                </a>
              )}
              {address && (
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="contact-action-btn contact-action-address">
                  <svg className="contact-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="contact-action-label">Office</span>
                  <span className="contact-action-detail">{address}</span>
                </a>
              )}
            </div>
            {letterText && (
              <div className="contact-letter-section">
                <button
                  className="contact-letter-toggle"
                  onClick={() => setLetterOpen(o => !o)}
                  aria-expanded={letterOpen}
                >
                  <svg className="contact-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  <span>Write a Letter</span>
                  <svg className={`contact-letter-chevron ${letterOpen ? 'contact-letter-chevron-open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {letterOpen && (
                  <div className="contact-letter-body">
                    <textarea
                      className="contact-letter-textarea"
                      defaultValue={letterText}
                      rows={8}
                      aria-label="Letter template"
                    />
                    <button className="contact-letter-copy" onClick={copyLetter}>
                      {letterCopied ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Committee Assignments — only for federal legislators */}
        {!stateLevel && !isCivic && !isBranch && COMMITTEE_ASSIGNMENTS[member.bioguideId] && (
          <div className="detail-section committee-section">
            <h3 className="section-title">Committee Assignments</h3>
            <ul className="committee-list">
              {COMMITTEE_ASSIGNMENTS[member.bioguideId].committees.map((c, i) => (
                <li key={i} className="committee-item">
                  <div className="committee-name-row">
                    <span className="committee-name">{c.name}</span>
                    {c.role !== 'Member' && (
                      <span className="committee-role">{c.role}</span>
                    )}
                  </div>
                  {c.subcommittees.length > 0 && (
                    <ul className="committee-subcommittees">
                      {c.subcommittees.map((sub, j) => (
                        <li key={j}>{sub}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Legislative Activity — only for federal legislators */}
        {!stateLevel && !isCivic && !isBranch && (
          <div className="detail-section">
            <h3 className="section-title">Legislative Activity</h3>
            <div className="leg-tabs" role="tablist" aria-label="Legislative activity tabs">
              <button
                className={`leg-tab ${legTab === 'sponsored' ? 'leg-tab-active' : ''}`}
                onClick={() => setLegTab('sponsored')}
                role="tab"
                aria-selected={legTab === 'sponsored'}
                aria-controls="leg-panel-sponsored"
              >
                Sponsored ({legislation?.length ?? '…'})
              </button>
              <button
                className={`leg-tab ${legTab === 'cosponsored' ? 'leg-tab-active' : ''}`}
                onClick={() => setLegTab('cosponsored')}
                role="tab"
                aria-selected={legTab === 'cosponsored'}
                aria-controls="leg-panel-cosponsored"
              >
                Cosponsored ({cosponsored?.length ?? '…'})
              </button>
            </div>
            {legTab === 'sponsored' && (
              <div id="leg-panel-sponsored" role="tabpanel" aria-label="Sponsored legislation">
                <VotingRecord legislation={legislation} loading={legLoading} error={error} />
              </div>
            )}
            {legTab === 'cosponsored' && (
              <div id="leg-panel-cosponsored" role="tabpanel" aria-label="Cosponsored legislation">
                <VotingRecord legislation={cosponsored} loading={coLegLoading} error={error} />
              </div>
            )}
          </div>
        )}

        {/* Voting Record & More — federal legislators */}
        {!stateLevel && !isCivic && !isBranch && (
          <div className="detail-section">
            <h3 className="section-title">External Resources</h3>
            <p className="section-sub">Full voting history and profiles on external sites</p>
            <div className="voting-record-links">
              <a href={`https://www.congress.gov/member/${slugifyName(member.name)}/${member.bioguideId}`} target="_blank" rel="noopener noreferrer" className="voting-record-link">
                <div>
                  <strong>Congress.gov</strong>
                  <span>Official profile, votes, and bill activity</span>
                </div>
                <span className="voting-record-arrow" aria-hidden="true">&rarr;</span>
              </a>
              <a href={`https://justfacts.votesmart.org/search#.0.s=${encodeURIComponent(member.name)}`} target="_blank" rel="noopener noreferrer" className="voting-record-link">
                <div>
                  <strong>VoteSmart</strong>
                  <span>Key votes, positions, and ratings</span>
                </div>
                <span className="voting-record-arrow" aria-hidden="true">&rarr;</span>
              </a>
              <a href={`https://www.govtrack.us/congress/members/${member.bioguideId}`} target="_blank" rel="noopener noreferrer" className="voting-record-link">
                <div>
                  <strong>GovTrack</strong>
                  <span>Voting record, stats, and bill tracking</span>
                </div>
                <span className="voting-record-arrow" aria-hidden="true">&rarr;</span>
              </a>
              <a href={`https://projects.propublica.org/represent/members/${member.bioguideId}`} target="_blank" rel="noopener noreferrer" className="voting-record-link">
                <div>
                  <strong>ProPublica</strong>
                  <span>Votes, statements, and comparisons</span>
                </div>
                <span className="voting-record-arrow" aria-hidden="true">&rarr;</span>
              </a>
              <a href={`https://www.opensecrets.org/search?q=${encodeURIComponent(member.name)}&type=members`} target="_blank" rel="noopener noreferrer" className="voting-record-link">
                <div>
                  <strong>OpenSecrets</strong>
                  <span>Campaign finance and donor data</span>
                </div>
                <span className="voting-record-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        )}

        {/* Voting Record & More — state legislators */}
        {stateLevel && (
          <div className="detail-section">
            <h3 className="section-title">External Resources</h3>
            <p className="section-sub">Full voting history and profiles on external sites</p>
            <div className="voting-record-links">
              {(member.openstates_url || member.oppiId || member.sourceId) && (
                <a href={member.openstates_url || member.oppiId || `https://openstates.org/person/${member.sourceId?.replace('ocd-person/', '')}`} target="_blank" rel="noopener noreferrer" className="voting-record-link">
                  <div>
                    <strong>OpenStates</strong>
                    <span>Bills, votes, and committee membership</span>
                  </div>
                  <span className="voting-record-arrow" aria-hidden="true">&rarr;</span>
                </a>
              )}
              {member.contacts?.links?.[0] && (
                <a href={member.contacts.links[0].startsWith('http') ? member.contacts.links[0] : `https://${member.contacts.links[0]}`} target="_blank" rel="noopener noreferrer" className="voting-record-link">
                  <div>
                    <strong>State Legislature</strong>
                    <span>Official legislative page</span>
                  </div>
                  <span className="voting-record-arrow" aria-hidden="true">&rarr;</span>
                </a>
              )}
              <a href={`https://justfacts.votesmart.org/search#.0.s=${encodeURIComponent(member.name)}`} target="_blank" rel="noopener noreferrer" className="voting-record-link">
                <div>
                  <strong>VoteSmart</strong>
                  <span>Key votes, positions, and ratings</span>
                </div>
                <span className="voting-record-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        )}

        {/* Campaign Finance — only for federal legislators */}
        {!stateLevel && !isCivic && !isBranch && (finLoading || finances) && (
          <div className="detail-section">
            <h3 className="section-title">Campaign Finance</h3>
            {finLoading ? (
              <div className="finance-skeleton" aria-label="Loading campaign finance data" role="status">
                <div className="skeleton-line skeleton-line-short" />
                <div className="finance-grid">
                  {[1, 2, 3, 4].map(i => (
                    <div className="finance-item" key={i}>
                      <span className="skeleton-line skeleton-line-label" />
                      <span className="skeleton-line skeleton-line-value" />
                    </div>
                  ))}
                </div>
              </div>
            ) : finances ? (
              <>
                <p className="section-sub">{finances.cycle} election cycle</p>
                <div className="finance-grid">
                  <div className="finance-item">
                    <span className="finance-label">Total Raised</span>
                    <span className="finance-value">{fmtMoney(finances.totalRaised)}</span>
                  </div>
                  <div className="finance-item">
                    <span className="finance-label">Total Spent</span>
                    <span className="finance-value">{fmtMoney(finances.totalSpent)}</span>
                  </div>
                  <div className="finance-item">
                    <span className="finance-label">Cash on Hand</span>
                    <span className="finance-value">{fmtMoney(finances.cashOnHand)}</span>
                  </div>
                  <div className="finance-item">
                    <span className="finance-label">Debt</span>
                    <span className="finance-value">{fmtMoney(finances.debt)}</span>
                  </div>
                </div>
                <div className="finance-footer">
                  <span className="finance-source">Source: Federal Election Commission</span>
                  {finances.candidateId && (
                    <a
                      href={`https://www.fec.gov/data/candidate/${finances.candidateId}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="finance-fec-link"
                    >
                      View full details on FEC.gov
                    </a>
                  )}
                </div>
              </>
            ) : null}
          </div>
        )}

        {/* Branch (executive/judicial) info */}
        {isBranch && (
          <div className="detail-section">
            <h3 className="section-title">About</h3>
            <p className="detail-meta">
              {member.name} serves as {member.chamber || member.title}.
              {member.district ? ` ${member.district}.` : ''}
            </p>
          </div>
        )}

        {/* State legislator info */}
        {stateLevel && (
          <div className="detail-section">
            <h3 className="section-title">About</h3>
            <p className="detail-meta">
              This representative serves in the {member.chamber} for {stateName}.
              Visit their official website for legislative activity and more information.
            </p>
          </div>
        )}

        {/* Civic / local official — Government Body */}
        {isCivic && member.governmentBody && (
          <div className="detail-section">
            <h3 className="section-title">Government Body</h3>
            <p className="detail-meta civic-body-name">{member.governmentBody}</p>
          </div>
        )}

        {/* Civic / local official info */}
        {isCivic && (
          <div className="detail-section">
            <h3 className="section-title">About</h3>
            <p className="detail-meta">
              {member.name} serves as {member.office}
              {member.governmentBody ? ` for ${member.governmentBody}` : ''}.
            </p>
            {member.district && (
              <p className="detail-meta">District {member.district}</p>
            )}
            {member.ward && (
              <p className="detail-meta">Ward {member.ward}</p>
            )}
            {member.channels?.length > 0 && (
              <div className="social-links">
                {member.channels.map((ch, i) => (
                  <a
                    key={i}
                    href={`https://${ch.type === 'Facebook' ? 'facebook.com/' : ch.type === 'Twitter' ? 'twitter.com/' : ch.type === 'YouTube' ? 'youtube.com/' : ''}${ch.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-link"
                  >
                    {ch.type}: {ch.id}
                  </a>
                ))}
              </div>
            )}
            <div className="voting-record-links" style={{ marginTop: '0.75rem' }}>
              <a href={`https://ballotpedia.org/${encodeURIComponent(member.name.replace(/\s+/g, '_'))}`} target="_blank" rel="noopener noreferrer" className="voting-record-link">
                <div>
                  <strong>Ballotpedia</strong>
                  <span>Background, elections, and public positions</span>
                </div>
                <span className="voting-record-arrow" aria-hidden="true">&rarr;</span>
              </a>
              <a href={`https://justfacts.votesmart.org/search#.0.s=${encodeURIComponent(member.name)}`} target="_blank" rel="noopener noreferrer" className="voting-record-link">
                <div>
                  <strong>VoteSmart</strong>
                  <span>Ratings, positions, and biographical info</span>
                </div>
                <span className="voting-record-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        )}

        {/* Data freshness footer */}
        <div className="detail-section detail-freshness-footer">
          <FreshnessIndicator
            sources={
              stateLevel ? ['openstates-api']
                : isCivic ? ['google-civic-api']
                : isBranch ? ['congress-api']
                : ['congress-api', 'fec-api']
            }
            onRefresh={() => window.location.reload()}
            variant="footer"
          />
        </div>
      </div>
    </>
  )
}
