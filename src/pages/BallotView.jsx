import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import useProfile from '../hooks/useProfile'
import { useApp } from '../contexts/AppContext'
import ShareButton from '../components/ui/ShareButton'
import FounderQuoteBanner from '../components/ui/FounderQuoteBanner'
import { VOTING_QUOTES } from '../data/foundingValues'
import {
  GENERAL_INFO,
  GENERAL_DATE,
  STATEWIDE_RACES,
  US_HOUSE_RACES,
  BALLOT_PROPOSALS,
  CONVENTION_NOMINEES,
  getGeneralBallot,
  getGeneralLocalRaces,
  getGradeColor,
} from '../data/michiganPrimary2026'
import { getNovemberLocalRaces } from '../data/michiganNovember2026'
import { getProposalsForLocation, getCategoryLabel, getCategoryIcon } from '../data/michiganProposals2026'
import generateBallotPDF from '../utils/generateBallotPDF'
import { trackAddressEntered, trackPartySelected, trackCandidateSelected, trackBallotComplete, trackProposalVoted, trackChecklistItem, trackShareTool, trackShareBallot } from '../utils/analytics'
import AddressAutocomplete from '../components/ui/AddressAutocomplete'
import useFocusTrap from '../hooks/useFocusTrap'
import { getRatingsForCandidate, getRatingsForIssue, getEvidenceLevel } from '../data/externalRatings'
import { getSource, RATING_SOURCES, ISSUE_AREA_LABELS, RATING_TYPE_LABELS, RATING_TYPE_DESCRIPTIONS } from '../data/ratingSources'
import { getVoterInfo } from '../services/googleCivicApi'
import { geocodeToDistrict } from '../services/districtService'
import { MI_ELECTIONS } from '../data/electionData'

const STORAGE_KEY = 'myreps-ballot-plan-2026'

function loadBallot() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {}
  return null
}

function saveBallot(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {}
}

function getHighlights(c) {
  if (c.highlights && c.highlights.length > 0) return c.highlights
  if (!c.positions) return []
  const h = []
  const p = c.positions
  const good = g => g === 'A' || g === 'B'
  const bad = g => g === 'D' || g === 'F'
  if (good(p.proLife)) h.push('Pro-life')
  else if (bad(p.proLife)) h.push('Pro-choice')
  if (good(p.secondAmendment)) h.push('Pro-2A')
  else if (bad(p.secondAmendment)) h.push('Gun reform')
  if (good(p.fiscal)) h.push('Lower taxes')
  else if (bad(p.fiscal)) h.push('Higher spending')
  if (good(p.limitedGov)) h.push('Limited gov\'t')
  else if (bad(p.limitedGov)) h.push('Bigger gov\'t')
  if (good(p.religiousLiberty)) h.push('Religious liberty')
  if (good(p.marriage)) h.push('Traditional marriage')
  return h
}

// ── Step 1: Address Entry ──

function AddressStep({ address, onSubmit }) {
  const [input, setInput] = useState(address || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) onSubmit(input.trim())
  }

  const handleSuggestionSelect = (suggestion) => {
    setInput(suggestion.display)
    // Auto-submit when user picks a suggestion
    onSubmit(suggestion.display)
  }

  return (
    <div className="ballot-step ballot-step-address">
      <div className="ballot-step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
      <h3 className="ballot-step-title">Where Do You Vote?</h3>
      <p className="ballot-step-desc">
        Enter your address to see the exact races and candidates on your ballot.
      </p>
      <form onSubmit={handleSubmit} className="ballot-address-form">
        <AddressAutocomplete
          value={input}
          onChange={setInput}
          onSelect={handleSuggestionSelect}
          placeholder="Enter your address"
          className="ballot-address-input"
          autoFocus
        />
        <button type="submit" className="ballot-address-btn" disabled={!input.trim()}>
          Find My Ballot
        </button>
      </form>
      <p className="ballot-step-note">
        Enter your home address to see every race on your ballot.
      </p>

      <div className="ballot-preview-features">
        <div className="ballot-preview-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" width="20" height="20">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>Every candidate in your races</span>
        </div>
        <div className="ballot-preview-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" width="20" height="20">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>Values alignment grades (A–F)</span>
        </div>
        <div className="ballot-preview-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" width="20" height="20">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          <span>Printable ballot plan for election day</span>
        </div>
      </div>
    </div>
  )
}

// ── Step 2: Party Ballot Picker ──

// PartyStep removed — general election has no party column selection

// ── Grade Badge ──

function GradeBadge({ grade, size = 'sm', onClick, showUnrated = false }) {
  if (!grade && !showUnrated) return null
  if (!grade && showUnrated) {
    const sizes = {
      sm: { width: '1.35rem', height: '1.35rem', fontSize: '0.5rem' },
      md: { width: '1.8rem', height: '1.8rem', fontSize: '0.6rem' },
      lg: { width: '2.4rem', height: '2.4rem', fontSize: '0.75rem' },
    }
    const s = sizes[size] || sizes.sm
    return (
      <span
        className="grade-badge grade-badge-unrated"
        style={{
          background: '#6b7280',
          width: s.width,
          height: s.height,
          fontSize: s.fontSize,
          opacity: 0.7,
        }}
        onClick={onClick}
        title="Not Rated — no public information found"
      >
        N/R
      </span>
    )
  }
  const color = getGradeColor(grade)
  const gradeLabels = { A: 'Excellent', B: 'Good', C: 'Mixed', D: 'Poor', F: 'Failing' }
  const gradeLabel = gradeLabels[grade?.[0]] || grade
  const sizes = {
    sm: { width: '1.35rem', height: '1.35rem', fontSize: '0.65rem' },
    md: { width: '1.8rem', height: '1.8rem', fontSize: '0.85rem' },
    lg: { width: '2.4rem', height: '2.4rem', fontSize: '1.1rem' },
  }
  const s = sizes[size] || sizes.sm
  return (
    <span
      className={`grade-badge grade-badge-${(grade?.[0] || '').toLowerCase()}`}
      style={{
        background: color,
        width: s.width,
        height: s.height,
        fontSize: s.fontSize,
      }}
      onClick={onClick}
      title={`Constitutional Alignment: ${grade} (${gradeLabel})`}
      aria-label={`Grade ${grade}: ${gradeLabel} constitutional alignment`}
      role="img"
    >
      {grade}
    </span>
  )
}

// ── Issue Label Mapping ──

const ISSUE_LABELS = {
  proLife: { label: 'Pro-Life', icon: '🤲' },
  marriage: { label: 'Traditional Marriage', icon: '💒' },
  religiousLiberty: { label: 'Religious Liberty', icon: '⛪' },
  secondAmendment: { label: '2nd Amendment', icon: '🛡️' },
  limitedGov: { label: 'Limited Government', icon: '🏛️' },
  fiscal: { label: 'Fiscal Responsibility', icon: '💰' },
}

// ── External Rating Badge ──

function ExternalRatingBadge({ rating }) {
  const source = getSource(rating.sourceId)
  if (!source) return null

  const typeLabel = RATING_TYPE_LABELS[rating.type] || rating.type
  const isPositive = ['A+', 'A', 'A-', 'B+', 'B', '100%', 'Endorsed', 'Board Member', 'Lifetime Member', 'Member', 'Affiliated'].includes(rating.value)
  const isNegative = ['F', 'D', 'D-', '0%'].includes(rating.value)

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`external-rating-badge ${isPositive ? 'external-rating-positive' : ''} ${isNegative ? 'external-rating-negative' : ''}`}
      title={`${source.fullName}: ${rating.value} (${typeLabel}, ${rating.period})`}
    >
      <span className="external-rating-org">{source.name}</span>
      <span className="external-rating-value">{rating.value}</span>
    </a>
  )
}

// ── Evidence Level Indicator ──

function EvidenceIndicator({ candidate }) {
  const evidence = getEvidenceLevel(candidate.name, candidate)
  const segments = 4
  const filled = evidence.level === 'extensive' ? 4
    : evidence.level === 'moderate' ? 3
    : evidence.level === 'limited' ? 2
    : 1

  const levelColors = {
    extensive: '#22c55e',
    moderate: '#3b82f6',
    limited: '#f59e0b',
    minimal: '#9ca3af',
  }
  const color = levelColors[evidence.level]

  return (
    <div className="evidence-indicator" title={evidence.description}>
      <div className="evidence-indicator-top">
        <span className="evidence-indicator-label">Data Depth</span>
        <span className={`evidence-indicator-level evidence-level-${evidence.level}`}>{evidence.label}</span>
      </div>
      <div className="evidence-indicator-bar">
        {Array.from({ length: segments }).map((_, i) => (
          <span
            key={i}
            className={`evidence-bar-segment ${i < filled ? 'evidence-bar-filled' : ''}`}
            style={i < filled ? { background: color } : undefined}
          />
        ))}
      </div>
      <p className="evidence-indicator-desc">{evidence.description}</p>
    </div>
  )
}

// ── Compact Evidence Badge (for candidate card list) ──

function EvidenceBadge({ candidate }) {
  const evidence = getEvidenceLevel(candidate.name, candidate)
  const segments = 4
  const filled = evidence.level === 'extensive' ? 4
    : evidence.level === 'moderate' ? 3
    : evidence.level === 'limited' ? 2
    : 1

  const levelColors = {
    extensive: '#22c55e',
    moderate: '#3b82f6',
    limited: '#f59e0b',
    minimal: '#9ca3af',
  }
  const color = levelColors[evidence.level]

  return (
    <span className="evidence-badge" title={`${evidence.label}: ${evidence.description}`}>
      <span className="evidence-badge-bars">
        {Array.from({ length: segments }).map((_, i) => (
          <span
            key={i}
            className={`evidence-badge-bar ${i < filled ? 'evidence-badge-bar-filled' : ''}`}
            style={i < filled ? { background: color } : undefined}
          />
        ))}
      </span>
    </span>
  )
}

// ── Candidate Detail Modal ──

function CandidateDetailModal({ candidate, onClose }) {
  const focusTrapRef = useFocusTrap(!!candidate)
  if (!candidate) return null

  // Close on escape
  React.useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="candidate-modal-overlay" onClick={onClose}>
      <div className="candidate-modal" ref={focusTrapRef} onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="candidate-modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className="candidate-modal-header">
          <div className="candidate-modal-name-row">
            <h3 className="candidate-modal-name">{candidate.name}</h3>
            <GradeBadge grade={candidate.grade} size="lg" showUnrated={!candidate.grade} />
          </div>
          {candidate.description && (
            <p className="candidate-modal-role">{candidate.description}</p>
          )}
          {candidate.gradeNote && (
            <p className="candidate-modal-grade-note">{candidate.gradeNote}</p>
          )}
          <div className="candidate-modal-tags">
            {candidate.status === 'incumbent' && (
              <span className="ballot-incumbent-tag">Incumbent</span>
            )}
            {candidate.termInfo && (
              <span className="ballot-term-info-tag" title={candidate.termInfo.detail || ''}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                {candidate.termInfo.label}
              </span>
            )}
          </div>
          {getHighlights(candidate).length > 0 && (
            <div className="candidate-modal-highlights">
              {getHighlights(candidate).map((h, i) => (
                <span key={i} className="ballot-highlight-chip">{h}</span>
              ))}
            </div>
          )}
        </div>

        {/* Evidence Level */}
        {candidate.grade && (
          <EvidenceIndicator candidate={candidate} />
        )}

        {/* Bio */}
        {candidate.bio && (
          <div className="candidate-modal-section">
            <h4 className="candidate-modal-section-title">About</h4>
            <p className="candidate-modal-bio">{candidate.bio}</p>
          </div>
        )}

        {/* Endorsements */}
        {candidate.endorsements && candidate.endorsements.length > 0 && (
          <div className="candidate-modal-section">
            <h4 className="candidate-modal-section-title">Endorsements</h4>
            <div className="candidate-endorsements">
              {candidate.endorsements.map((e, i) => (
                <span key={i} className="candidate-endorsement-tag">{e}</span>
              ))}
            </div>
          </div>
        )}

        {/* No Data Notice for unrated candidates */}
        {!candidate.grade && !candidate.positions && (
          <div className="candidate-modal-section">
            <div className="candidate-no-data-notice">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <div>
                <strong>Not Rated</strong> — No public information was found for this candidate.
                We searched voting records, endorsements, questionnaire responses, campaign websites, public statements,
                social media, signed pledges, professional background, endorsements received, and prior campaigns.
                If you have information about this candidate, please contact us.
              </div>
            </div>
          </div>
        )}

        {/* Constitutional Alignment Scorecard */}
        {candidate.positions && (
          <div className="candidate-modal-section">
            <h4 className="candidate-modal-section-title">Constitutional Alignment</h4>
            <div className="candidate-scorecard">
              {Object.entries(ISSUE_LABELS).map(([key, { label, icon }]) => {
                const issueGrade = candidate.positions[key]
                const justification = candidate.gradeJustifications?.[key]
                const issueRatings = getRatingsForIssue(candidate.name, key)
                return (
                  <div key={key} className={`candidate-scorecard-row ${justification ? 'has-justification' : ''}`}>
                    <div className="candidate-scorecard-row-top">
                      <span className="candidate-scorecard-icon">{icon}</span>
                      <span className="candidate-scorecard-label">{label}</span>
                      <span className="candidate-scorecard-grade">
                        {issueGrade ? (
                          <GradeBadge grade={issueGrade} size="sm" />
                        ) : (
                          <span className="candidate-scorecard-na">N/A</span>
                        )}
                      </span>
                    </div>
                    {justification && (
                      <p className="candidate-scorecard-justification">{justification}</p>
                    )}
                    {issueRatings.length > 0 && (
                      <div className="candidate-scorecard-external">
                        {issueRatings.map((r, i) => (
                          <ExternalRatingBadge key={i} rating={r} />
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Organization Ratings Summary */}
        {getRatingsForCandidate(candidate.name).length > 0 && (
          <div className="candidate-modal-section">
            <h4 className="candidate-modal-section-title">Organization Ratings</h4>
            <p className="candidate-modal-ratings-note">
              Independent ratings from conservative organizations. Click any badge to visit the source.
            </p>
            <div className="candidate-external-ratings">
              {getRatingsForCandidate(candidate.name).map((r, i) => (
                <ExternalRatingBadge key={i} rating={r} />
              ))}
            </div>
          </div>
        )}

        {/* Key Positions */}
        {candidate.keyPositions && candidate.keyPositions.length > 0 && (
          <div className="candidate-modal-section">
            <h4 className="candidate-modal-section-title">Key Positions</h4>
            <ul className="candidate-positions-list">
              {candidate.keyPositions.map((pos, i) => (
                <li key={i}>{pos}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Campaign Finance */}
        {(candidate.raised || candidate.topDonors) && (
          <div className="candidate-modal-section">
            <h4 className="candidate-modal-section-title">Campaign Finance</h4>
            <div className="candidate-finance">
              {candidate.raised && (
                <div className="candidate-finance-item">
                  <span className="candidate-finance-label">Raised</span>
                  <span className="candidate-finance-value">{candidate.raised}</span>
                </div>
              )}
              {candidate.cashOnHand && (
                <div className="candidate-finance-item">
                  <span className="candidate-finance-label">Cash on Hand</span>
                  <span className="candidate-finance-value">{candidate.cashOnHand}</span>
                </div>
              )}
              {candidate.topDonors && (
                <div className="candidate-finance-item">
                  <span className="candidate-finance-label">Top Donors</span>
                  <span className="candidate-finance-value">{candidate.topDonors}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Social Links */}
        {(candidate.website || candidate.twitter || candidate.facebook || candidate.instagram) && (
          <div className="candidate-modal-section">
            <h4 className="candidate-modal-section-title">Links</h4>
            <div className="candidate-links">
              {candidate.website && (
                <a href={candidate.website} target="_blank" rel="noopener noreferrer" className="candidate-link candidate-link-web">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15 15 0 010 20 15 15 0 010-20z" />
                  </svg>
                  Website
                </a>
              )}
              {candidate.twitter && (
                <a href={`https://x.com/${candidate.twitter}`} target="_blank" rel="noopener noreferrer" className="candidate-link candidate-link-twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @{candidate.twitter}
                </a>
              )}
              {candidate.facebook && (
                <a href={candidate.facebook} target="_blank" rel="noopener noreferrer" className="candidate-link candidate-link-facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              )}
              {candidate.instagram && (
                <a href={`https://instagram.com/${candidate.instagram}`} target="_blank" rel="noopener noreferrer" className="candidate-link candidate-link-instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  @{candidate.instagram}
                </a>
              )}
              {candidate.fecId && (
                <a href={`https://www.fec.gov/data/candidate/${candidate.fecId}/`} target="_blank" rel="noopener noreferrer" className="candidate-link candidate-link-fec">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  FEC Filings
                </a>
              )}
            </div>
          </div>
        )}

        {/* Grade methodology note */}
        <div className="candidate-modal-footnote">
          Our grades reflect alignment with constitutional conservative principles across six key issues.
          Data sourced from voting records, interest group scorecards (Heritage Action, ACU, NRA, SBA Pro-Life,
          NRLC, FRC, Club for Growth, NumbersUSA, and others), candidate questionnaires, campaign platforms,
          public statements, signed pledges, and endorsements. See the grade legend for full methodology.
        </div>
      </div>
    </div>
  )
}

// ── Proposal Card (with YES/NO explainers + vote tracking) ──

function ProposalCard({ proposal, choice, onVote }) {
  const [expanded, setExpanded] = useState(false)
  const isRenewal = /renewal/i.test(proposal.type)
  const isNew = /new|increase|bond/i.test(proposal.type)

  return (
    <div className={`ballot-proposal ${expanded ? 'ballot-proposal-expanded' : ''} ${choice ? 'ballot-proposal-decided' : ''}`}>
      <button className="ballot-proposal-header" onClick={() => setExpanded(!expanded)}>
        <div className="ballot-proposal-title-row">
          <span className="ballot-proposal-category-icon">{getCategoryIcon(proposal.category)}</span>
          <div className="ballot-proposal-title-stack">
            <h4 className="ballot-proposal-name">{proposal.name}</h4>
            <span className="ballot-proposal-jurisdiction">{proposal.jurisdiction}</span>
          </div>
          {choice && (
            <span className={`ballot-proposal-vote-badge ballot-proposal-vote-${choice}`}>
              {choice === 'yes' ? 'YES' : 'NO'}
            </span>
          )}
        </div>
        <svg
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"
          className={`ballot-proposal-chevron ${expanded ? 'rotated' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {expanded && (
        <div className="ballot-proposal-body">
          <div className="ballot-proposal-meta">
            <span className="ballot-proposal-type-badge">{proposal.type}</span>
            {proposal.mills != null && <span className="ballot-proposal-mills">{proposal.mills} mills</span>}
            {proposal.duration && <span className="ballot-proposal-duration">{proposal.duration}</span>}
            {proposal.bondAmount && <span className="ballot-proposal-bond">{proposal.bondAmount}</span>}
          </div>

          <p className="ballot-proposal-desc">{proposal.description}</p>

          {proposal.taxImpact && (
            <div className="ballot-proposal-tax">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span>{proposal.taxImpact}</span>
            </div>
          )}

          <div className="ballot-proposal-yes-no">
            <button
              className={`ballot-proposal-vote-btn ballot-proposal-vote-yes ${choice === 'yes' ? 'selected' : ''}`}
              onClick={(e) => { e.stopPropagation(); onVote(proposal.id, choice === 'yes' ? null : 'yes') }}
            >
              <span className="ballot-proposal-vote-label">YES</span>
              <span className="ballot-proposal-vote-explain">{proposal.yesVote}</span>
            </button>
            <button
              className={`ballot-proposal-vote-btn ballot-proposal-vote-no ${choice === 'no' ? 'selected' : ''}`}
              onClick={(e) => { e.stopPropagation(); onVote(proposal.id, choice === 'no' ? null : 'no') }}
            >
              <span className="ballot-proposal-vote-label">NO</span>
              <span className="ballot-proposal-vote-explain">{proposal.noVote}</span>
            </button>
          </div>

          <div className="ballot-proposal-views">
            <div className="ballot-proposal-view ballot-proposal-view-conservative">
              <span className="ballot-proposal-view-label">Conservative View</span>
              <p>{proposal.conservativeView}</p>
            </div>
            <div className="ballot-proposal-view ballot-proposal-view-progressive">
              <span className="ballot-proposal-view-label">Progressive View</span>
              <p>{proposal.progressiveView}</p>
            </div>
          </div>

          {proposal.recommendation && (
            <div className="ballot-proposal-recommendation">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              {proposal.recommendation}
            </div>
          )}

          {isRenewal && (
            <div className="ballot-proposal-renewal-note">
              <strong>Renewal:</strong> This renews an existing tax — your rate does not change if it passes.
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Deadline Banner ──

function DeadlineBanner() {
  const now = new Date()
  const electionDate = new Date('2026-11-03')
  const isElectionDay = now.toDateString() === electionDate.toDateString()
  const isPastElection = now > electionDate && !isElectionDay

  if (isPastElection) return null

  if (isElectionDay) {
    return (
      <div className="ballot-deadline-banner ballot-deadline-urgent">
        <div className="ballot-deadline-left">
          <span className="ballot-deadline-days" style={{ fontSize: '14px' }}>TODAY</span>
        </div>
        <div className="ballot-deadline-info">
          <strong>General Election Day</strong>
          <span className="ballot-deadline-date">
            Polls are open. You can still register at your clerk's office and vote today.
          </span>
        </div>
        <a href="https://mvic.sos.state.mi.us/Voter/Index" target="_blank" rel="noopener noreferrer" className="ballot-deadline-action">
          Find your polling place
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    )
  }

  const deadlines = [
    { date: new Date('2026-10-19'), label: 'Registration deadline (online/mail)', action: 'Register now', href: 'https://mvic.sos.state.mi.us/RegisterVoter' },
    { date: new Date('2026-10-25'), label: 'Early voting begins', action: 'Find early voting site', href: 'https://mvic.sos.state.mi.us/Voter/Index' },
    { date: new Date('2026-10-30'), label: 'Absentee ballot deadline (mail)', action: 'Request absentee ballot', href: 'https://mvic.sos.state.mi.us/AVApplication/Index' },
    { date: new Date('2026-11-02'), label: 'Last day for in-person absentee', action: 'Find your clerk', href: 'https://mvic.sos.state.mi.us/Voter/Index' },
    { date: new Date('2026-11-03'), label: 'General Election Day', action: 'Find your polling place', href: 'https://mvic.sos.state.mi.us/Voter/Index' },
  ]

  const next = deadlines.find(d => d.date >= now)
  if (!next) return null

  const daysLeft = Math.ceil((next.date - now) / (1000 * 60 * 60 * 24))
  const urgent = daysLeft <= 7

  return (
    <div className={`ballot-deadline-banner ${urgent ? 'ballot-deadline-urgent' : ''}`}>
      <div className="ballot-deadline-left">
        <span className="ballot-deadline-days">{daysLeft}</span>
        <span className="ballot-deadline-days-label">days</span>
      </div>
      <div className="ballot-deadline-info">
        <strong>{next.label}</strong>
        <span className="ballot-deadline-date">
          {next.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </span>
      </div>
      <a href={next.href} target="_blank" rel="noopener noreferrer" className="ballot-deadline-action">
        {next.action}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </div>
  )
}

// NovemberPreview removed — now in general election mode

// ── Grade Legend ──

function GradeLegend() {
  const [expanded, setExpanded] = useState(false)
  const grades = [
    { grade: 'A', color: getGradeColor('A'), label: 'Strong conservative/constitutional alignment' },
    { grade: 'B', color: getGradeColor('B'), label: 'Generally conservative positions' },
    { grade: 'C', color: getGradeColor('C'), label: 'Mixed or unclear positions' },
    { grade: 'D', color: getGradeColor('D'), label: 'Progressive-leaning positions' },
    { grade: 'F', color: getGradeColor('F'), label: 'Actively opposes conservative values' },
  ]

  return (
    <div className="grade-legend">
      <button className="grade-legend-toggle" onClick={() => setExpanded(!expanded)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>What do the grades mean?</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" className={expanded ? 'rotated' : ''}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {expanded && (
        <div className="grade-legend-body">
          <p className="grade-legend-intro">
            Grades reflect alignment with conservative/constitutional principles across six issues:
            pro-life, traditional marriage, religious liberty, 2nd Amendment, limited government, and fiscal responsibility.
          </p>
          <div className="grade-legend-scale">
            {grades.map(g => (
              <div key={g.grade} className="grade-legend-item">
                <span className="grade-badge" style={{ background: g.color, width: '1.35rem', height: '1.35rem', fontSize: '0.65rem' }}>{g.grade}</span>
                <span className="grade-legend-desc">{g.label}</span>
              </div>
            ))}
          </div>

          <h5 className="grade-legend-sources-title">Evidence Sources</h5>
          <p className="grade-legend-sources-intro">
            Our grades are informed by data from 30+ established conservative organizations. We consult multiple independent sources per issue area to ensure well-rounded assessments:
          </p>
          <div className="grade-legend-sources-grid">
            <div className="grade-legend-source-group">
              <span className="grade-legend-source-label">Pro-Life</span>
              <span className="grade-legend-source-orgs">SBA Pro-Life America, NRLC, Right to Life of Michigan, Students for Life Action, March for Life Action</span>
            </div>
            <div className="grade-legend-source-group">
              <span className="grade-legend-source-label">Marriage & Family</span>
              <span className="grade-legend-source-orgs">FRC Action, Family Policy Alliance, Michigan Family Forum, Eagle Forum, Concerned Women for America</span>
            </div>
            <div className="grade-legend-source-group">
              <span className="grade-legend-source-label">Religious Liberty</span>
              <span className="grade-legend-source-orgs">iVoterGuide, Faith & Freedom Coalition, CatholicVote, Liberty Counsel Action</span>
            </div>
            <div className="grade-legend-source-group">
              <span className="grade-legend-source-label">2nd Amendment</span>
              <span className="grade-legend-source-orgs">NRA-PVF, Gun Owners of America, NAGR, CCRKBA</span>
            </div>
            <div className="grade-legend-source-group">
              <span className="grade-legend-source-label">Limited Gov.</span>
              <span className="grade-legend-source-orgs">Heritage Action, ACU, Freedom Index, NumbersUSA, FAIR</span>
            </div>
            <div className="grade-legend-source-group">
              <span className="grade-legend-source-label">Fiscal</span>
              <span className="grade-legend-source-orgs">Club for Growth, AFP, NTU, ATR, CCAGW, NFIB</span>
            </div>
          </div>

          <p className="grade-legend-sources-note">
            We also consult legislative voting records, candidate questionnaire responses, campaign websites,
            public statements, social media, signed pledges, professional backgrounds, and endorsements.
            Grades are our editorial assessment — not an average of external scores.
          </p>
        </div>
      )}
    </div>
  )
}

// ── Ballot Summary Card ──

function BallotSummaryCard({ choices, races }) {
  const [expanded, setExpanded] = useState(false)
  const picks = races
    .filter(r => choices[r.id]?.name)
    .map(r => {
      const candidate = r.candidates?.find(c => c.name === choices[r.id].name)
      return { office: r.office, name: choices[r.id].name, grade: candidate?.grade }
    })

  if (picks.length === 0) return null

  return (
    <div className="ballot-summary-card">
      <button className="ballot-summary-toggle" onClick={() => setExpanded(!expanded)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
          <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
        <span>Your Picks ({picks.length})</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" className={`ballot-summary-chevron ${expanded ? 'open' : ''}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {expanded && (
        <div className="ballot-summary-list">
          {picks.map((p, i) => (
            <div key={i} className="ballot-summary-pick">
              <span className="ballot-summary-office">{p.office}</span>
              <span className="ballot-summary-name">
                {p.name}
                {p.grade && <GradeBadge grade={p.grade} size="sm" />}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Step 3: Race Card with Candidates ──

const RaceCard = React.memo(function RaceCard({ race, choice, onSelect, onWriteIn, onCandidateDetail }) {
  const [showWriteIn, setShowWriteIn] = useState(false)
  const [writeInName, setWriteInName] = useState('')

  const hasCandidates = race.candidates && race.candidates.length > 0

  const handleWriteIn = () => {
    if (writeInName.trim()) {
      onWriteIn(race.id, writeInName.trim())
      setWriteInName('')
      setShowWriteIn(false)
    }
  }

  return (
    <div className={`ballot-race ${choice ? 'ballot-race-decided' : ''}`}>
      <div className="ballot-race-header">
        <div>
          <span className="ballot-race-level">{race.level}</span>
          <h4 className="ballot-race-office">{race.office}</h4>
          {race.description && <p className="ballot-race-desc">{race.description}</p>}
          {race.note && <p className="ballot-race-note">{race.note}</p>}
          {race.termLimit && (
            <span className="ballot-term-limit-tag" title={race.termLimit.maxTerms ? `Michigan term limit: ${race.termLimit.maxTerms} terms of ${race.termLimit.termLength} years each` : `${race.termLimit.termLength}-year terms, no federal term limit`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              {race.termLimit.label}
            </span>
          )}
        </div>
        {choice && (
          <button
            className="ballot-race-clear"
            onClick={() => onSelect(race.id, null)}
            title="Clear choice"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {hasCandidates && (
        <div className="ballot-candidates">
          {race.candidates.map((c, i) => {
            const isSelected = choice?.name === c.name
            const isWithdrawn = c.withdrawn || c.status === 'withdrawn' || c.status === 'disqualified'
            return (
              <div key={i} className={`ballot-candidate-card ${isSelected ? 'ballot-candidate-selected' : ''} ${
                c.status === 'incumbent' ? 'ballot-candidate-incumbent' : ''
              } ${isWithdrawn ? 'ballot-candidate-withdrawn' : ''}`}>
                {/* Top row: radio select + name + grade */}
                <div className="ballot-candidate-top">
                  {!isWithdrawn ? (
                  <button
                    className="ballot-candidate-select-btn"
                    onClick={() => onSelect(race.id, isSelected ? null : { name: c.name, description: c.description })}
                    aria-label={isSelected ? `${c.name} selected — click to deselect` : `Select ${c.name}`}
                  >
                    <span className="ballot-candidate-radio">
                      {isSelected ? (
                        <svg viewBox="0 0 24 24" fill="var(--accent-gold)" width="18" height="18">
                          <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" stroke="#000" strokeWidth="2.5" fill="none" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                          <circle cx="12" cy="12" r="9" />
                        </svg>
                      )}
                    </span>
                  </button>
                  ) : (
                    <span className="ballot-candidate-select-btn" aria-hidden="true">
                      <span className="ballot-candidate-radio">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-muted, #64748b)" strokeWidth="1.5" width="18" height="18" opacity="0.4">
                          <circle cx="12" cy="12" r="9" /><line x1="7" y1="7" x2="17" y2="17" />
                        </svg>
                      </span>
                    </span>
                  )}
                  <div className="ballot-candidate-header" onClick={() => onCandidateDetail(c)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onCandidateDetail(c) } }}>
                    <span className="ballot-candidate-name">
                      {c.name}
                      <GradeBadge grade={c.grade} size="sm" showUnrated={!c.grade} />
                      {c.grade && <EvidenceBadge candidate={c} />}
                      {c.party === 'republican' && <span className="ballot-party-tag ballot-party-tag-r">R</span>}
                      {c.party === 'democratic' && <span className="ballot-party-tag ballot-party-tag-d">D</span>}
                      {c.party === 'independent' && <span className="ballot-party-tag ballot-party-tag-i">I</span>}
                      {c.status === 'incumbent' && <span className="ballot-incumbent-tag">Incumbent</span>}
                      {c.status === 'withdrawn' && <span className="ballot-withdrawn-tag">Withdrew</span>}
                      {c.status === 'disqualified' && <span className="ballot-withdrawn-tag">Disqualified</span>}
                    </span>
                    {c.description && <span className="ballot-candidate-desc">{c.description}</span>}
                  </div>
                </div>

                {/* Quick highlights chips */}
                {getHighlights(c).length > 0 && (
                  <div className="ballot-candidate-highlights">
                    {getHighlights(c).map((h, hi) => (
                      <span key={hi} className="ballot-highlight-chip">{h}</span>
                    ))}
                  </div>
                )}

                {/* Mini scorecard preview + View Profile link */}
                <div className="ballot-candidate-bottom">
                  {c.positions && (
                    <div className="ballot-candidate-mini-scores" aria-label="Issue grades at a glance">
                      {Object.entries(ISSUE_LABELS).map(([key, { label }]) => {
                        const g = c.positions[key]
                        const shortLabels = {
                          proLife: 'Life',
                          marriage: 'Marr.',
                          religiousLiberty: 'Faith',
                          secondAmendment: '2A',
                          limitedGov: 'Gov',
                          fiscal: 'Tax',
                        }
                        return (
                          <span
                            key={key}
                            className="ballot-mini-score-wrap"
                            title={`${label}: ${g || 'N/A'}`}
                          >
                            <span
                              className="ballot-mini-score"
                              style={g ? { background: getGradeColor(g), color: '#fff' } : undefined}
                            >
                              {g || '–'}
                            </span>
                            <span className="ballot-mini-score-label">{shortLabels[key]}</span>
                          </span>
                        )
                      })}
                    </div>
                  )}
                  <div className="ballot-candidate-links">
                    <button
                      className="ballot-candidate-profile-btn"
                      onClick={() => onCandidateDetail(c)}
                      aria-label={`View full profile for ${c.name}`}
                    >
                      View Profile
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                    <a
                      href={`https://ballotpedia.org/${c.name.replace(/\s+/g, '_')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ballot-candidate-source-link"
                      onClick={e => e.stopPropagation()}
                    >
                      Ballotpedia
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    {c.website && (
                      <a
                        href={c.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ballot-candidate-source-link"
                        onClick={e => e.stopPropagation()}
                      >
                        Campaign Site
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                {c.gradeNote && <span className="ballot-candidate-grade-note">{c.gradeNote}</span>}
              </div>
            )
          })}
        </div>
      )}

      {!hasCandidates && !showWriteIn && (
        <div className="ballot-no-candidates">
          <p>No candidates filed for this party in this race.</p>
          <p className="ballot-no-candidates-hint">
            Use the write-in below to note your pick, or verify at{' '}
            <a href="https://mvic.sos.state.mi.us/Voter/Index" target="_blank" rel="noopener noreferrer">
              Michigan Voter Information Center
            </a>
          </p>
        </div>
      )}

      {/* Write-in option */}
      {(race.allowWrite || !hasCandidates) && !showWriteIn && (
        <button className="ballot-writein-toggle" onClick={() => setShowWriteIn(true)}>
          + Enter a candidate name
        </button>
      )}

      {showWriteIn && (
        <div className="ballot-writein-form">
          <input
            type="text"
            className="ballot-input"
            placeholder="Candidate name"
            value={writeInName}
            onChange={e => setWriteInName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleWriteIn() }}
            autoFocus
          />
          <div className="ballot-writein-actions">
            <button className="ballot-save-btn" onClick={handleWriteIn}>Save</button>
            <button className="ballot-cancel-btn" onClick={() => setShowWriteIn(false)}>Cancel</button>
          </div>
        </div>
      )}

      {choice && choice.name && !race.candidates?.find(c => c.name === choice.name) && (
        <div className="ballot-writein-chosen">
          <span className="ballot-candidate-radio">
            <svg viewBox="0 0 24 24" fill="var(--accent-gold)" width="18" height="18">
              <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" stroke="#000" strokeWidth="2.5" fill="none" />
            </svg>
          </span>
          <span className="ballot-candidate-name">{choice.name}</span>
          <span className="ballot-writein-label">Write-in</span>
        </div>
      )}
    </div>
  )
})

// ── Main BallotView ──

export default function BallotView() {
  usePageTitle('Build My Ballot — November 2026 Michigan General Election', 'Every candidate on your ballot, graded A through F on Constitutional values')

  const { selectedState, userAddress, userDistricts, localGeo, setUserAddress, handleSearchDistrict } = useApp()
  const { user, syncBallot, ballotPlan, loading: profileLoading } = useProfile()

  const [step, setStep] = useState('address') // 'address' | 'ballot'
  const [address, setAddress] = useState(userAddress || '')
  const [choices, setChoices] = useState({})
  const [cloudStatus, setCloudStatus] = useState('idle')
  const [detailCandidate, setDetailCandidate] = useState(null)
  const [pollingData, setPollingData] = useState(null)
  const [pollingLoading, setPollingLoading] = useState(false)
  const [raceFilter, setRaceFilter] = useState('all') // 'all' | 'undecided' | 'decided'
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [checklist, setChecklist] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ballot_checklist') || '{}') } catch { return {} }
  })
  const cloudTimerRef = useRef(null)

  const toggleChecklist = useCallback((key) => {
    setChecklist(prev => {
      const next = { ...prev, [key]: !prev[key] }
      if (next[key]) trackChecklistItem(key)
      localStorage.setItem('ballot_checklist', JSON.stringify(next))
      return next
    })
  }, [])

  // Load saved ballot
  useEffect(() => {
    if (profileLoading) return

    const saved = (user && ballotPlan) ? ballotPlan : loadBallot()
    if (saved) {
      if (saved.choices) setChoices(saved.choices)
      if (saved.address) {
        setAddress(saved.address)
        setStep('ballot')
      }
    }
  }, [user, ballotPlan, profileLoading])

  // If address already exists in AppContext, skip to ballot
  useEffect(() => {
    if (userAddress && step === 'address') {
      setAddress(userAddress)
      setStep('ballot')
    }
  }, [userAddress])

  // Fetch polling place data when address is set and ballot is showing
  useEffect(() => {
    if (!address || step !== 'ballot') return
    let cancelled = false
    setPollingLoading(true)
    getVoterInfo(address)
      .then(data => { if (!cancelled) setPollingData(data) })
      .catch(() => { if (!cancelled) setPollingData(null) })
      .finally(() => { if (!cancelled) setPollingLoading(false) })
    return () => { cancelled = true }
  }, [address, step])

  // Get ballot races for the general election
  const races = useMemo(() => {
    return getGeneralBallot(userDistricts || {})
  }, [userDistricts])

  // Get local ballot races (county executive, judicial) based on geography
  const localRaces = useMemo(() => {
    if (!localGeo) return []
    return getGeneralLocalRaces(localGeo)
  }, [localGeo])

  // November local races (school boards, county officers, etc.)
  const novemberLocalRaces = useMemo(() => {
    if (!localGeo) return []
    return getNovemberLocalRaces(localGeo)
  }, [localGeo])

  // Statewide + local ballot proposals
  const proposals = useMemo(() => {
    const local = localGeo ? getProposalsForLocation(localGeo) : []
    return [...BALLOT_PROPOSALS, ...local]
  }, [localGeo])

  const [showStickyBar, setShowStickyBar] = useState(false)
  const progressRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 600)
      if (progressRef.current) {
        const rect = progressRef.current.getBoundingClientRect()
        setShowStickyBar(rect.bottom < 0)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track ballot completion (fire once)
  const completionTracked = useRef(false)
  useEffect(() => {
    const decidedCount = Object.keys(choices).length
    const totalItems = (races.length || 0) + (localRaces?.length || 0) + (proposals?.length || 0)
    if (totalItems > 0 && decidedCount === totalItems && !completionTracked.current) {
      completionTracked.current = true
      trackBallotComplete(totalItems)
    }
  }, [choices, races, localRaces, proposals])

  // Save
  const persist = useCallback((c, p, addr) => {
    const data = { choices: c, party: p, address: addr }
    saveBallot(data)

    if (user && syncBallot) {
      setCloudStatus('saving')
      if (cloudTimerRef.current) clearTimeout(cloudTimerRef.current)
      cloudTimerRef.current = setTimeout(() => {
        syncBallot(data)
          .then(() => {
            setCloudStatus('saved')
            setTimeout(() => setCloudStatus('idle'), 2000)
          })
          .catch(() => setCloudStatus('error'))
      }, 800)
    }
  }, [user, syncBallot])

  const selectCandidate = (raceId, candidate) => {
    const next = { ...choices }
    if (candidate) {
      next[raceId] = candidate
      trackCandidateSelected(raceId, candidate.name)
    } else {
      delete next[raceId]
    }
    setChoices(next)
    persist(next, null, address)
  }

  const writeInCandidate = (raceId, name) => {
    selectCandidate(raceId, { name, description: 'Write-in candidate' })
  }

  const voteOnProposal = (proposalId, vote) => {
    const next = { ...choices }
    if (vote) {
      next[proposalId] = { name: vote === 'yes' ? 'YES' : 'NO', proposalVote: vote }
      trackProposalVoted(proposalId, vote)
    } else {
      delete next[proposalId]
    }
    setChoices(next)
    persist(next, party, address)
  }

  const handleAddressSubmit = (addr) => {
    setAddress(addr)
    setStep('ballot')
    trackAddressEntered()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (setUserAddress) setUserAddress(addr)
    geocodeToDistrict(addr).then(geo => {
      if (geo && selectedState) {
        handleSearchDistrict(selectedState, geo.district, geo.matchedAddress, geo)
      }
    }).catch(() => {})
  }

  const handleRestart = () => {
    setStep('address')
    setChoices({})
    setAddress('')
    localStorage.removeItem(STORAGE_KEY)
  }

  // Summary stats
  const allRaces = useMemo(() => [...races, ...localRaces, ...novemberLocalRaces], [races, localRaces, novemberLocalRaces])
  const totalItems = allRaces.length + proposals.length
  const decidedCount = Object.keys(choices).filter(k => choices[k]?.name).length
  const totalRaces = allRaces.length

  // Build shareable summary
  const summaryText = useMemo(() => {
    if (allRaces.length === 0 && proposals.length === 0) return ''
    const lines = [
      `My Ballot Plan — Michigan General Election`,
      `November 3, 2026\n`,
    ]
    allRaces.forEach(race => {
      const c = choices[race.id]
      if (c?.name) {
        lines.push(`${race.office}: ${c.name}`)
      }
    })
    if (proposals.length > 0) {
      const proposalChoices = proposals.filter(p => choices[p.id]?.proposalVote)
      if (proposalChoices.length > 0) {
        lines.push('\nBallot Proposals:')
        proposalChoices.forEach(p => {
          lines.push(`${p.name}: ${choices[p.id].proposalVote.toUpperCase()}`)
        })
      }
    }
    lines.push('\nCreated with Of For & By The People — buildmyballot.com')
    return lines.join('\n')
  }, [allRaces, proposals, choices])

  // Countdown to election
  const daysUntil = useMemo(() => {
    const election = new Date('2026-11-03')
    const now = new Date()
    const diff = Math.ceil((election - now) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 0
  }, [])

  const isElectionDay = useMemo(() => {
    return new Date().toDateString() === new Date('2026-11-03').toDateString()
  }, [])

  return (
    <div className="page-container ballot-page">
      {/* Header with countdown */}
      <div className="ballot-header">
        <h2 className="page-title">My Ballot Plan</h2>
        <div className="ballot-countdown">
          <span className="ballot-countdown-number">{isElectionDay ? 'TODAY' : daysUntil}</span>
          <span className="ballot-countdown-label">{isElectionDay ? 'is the Michigan General Election' : 'days until the General Election'}</span>
        </div>
        <p className="ballot-date-line">
          <strong>{GENERAL_INFO.date}</strong> &middot; {GENERAL_INFO.type}
        </p>
      </div>

      {/* Election day same-day registration note */}
      {isElectionDay && (
        <div className="ballot-deadline-alert urgent">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>
            <strong>Not registered?</strong> You can register and vote today at your{' '}
            <a href="https://mvic.sos.state.mi.us/Voter/Index" target="_blank" rel="noopener noreferrer">
              local clerk's office
            </a>. Bring a photo ID and proof of residency.
          </span>
        </div>
      )}

      {/* Cloud sync status */}
      {user && step === 'ballot' && (
        <div className="ballot-cloud-status" aria-live="polite">
          {cloudStatus === 'saving' && <span className="cloud-indicator cloud-saving">Syncing...</span>}
          {cloudStatus === 'saved' && <span className="cloud-indicator cloud-saved">Saved to cloud</span>}
          {cloudStatus === 'error' && <span className="cloud-indicator cloud-error">Sync failed</span>}
        </div>
      )}

      {/* Step indicator — always visible */}
      <div className="ballot-steps-indicator">
        <div className={`ballot-step-dot ${step === 'address' || step === 'ballot' ? 'active' : ''}`}>
          <span>1</span>
          <label>Address</label>
        </div>
        <div className={`ballot-step-line ${step === 'ballot' ? 'active' : ''}`} />
        <div className={`ballot-step-dot ${step === 'ballot' ? 'active' : ''}`}>
          <span>2</span>
          <label>Ballot</label>
        </div>
      </div>

      {/* ── Step 1: Address ── */}
      {step === 'address' && (
        <>
          <AddressStep address={address} onSubmit={handleAddressSubmit} />

          {/* Upcoming Elections */}
          <section className="ballot-section ballot-elections-preview">
            <h3 className="ballot-section-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" />
              </svg>
              Upcoming Michigan Elections
            </h3>
            <div className="ballot-elections-list">
              {MI_ELECTIONS.filter(e => new Date(e.date) >= new Date()).slice(0, 4).map(e => (
                <div key={e.id} className="ballot-election-item">
                  <div className="ballot-election-date">
                    <span className="ballot-election-month">{new Date(e.date).toLocaleString('en-US', { month: 'short' })}</span>
                    <span className="ballot-election-day">{new Date(e.date).getDate()}</span>
                  </div>
                  <div className="ballot-election-info">
                    <strong>{e.name}</strong>
                    <p>{e.description?.slice(0, 120)}{e.description?.length > 120 ? '...' : ''}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ballot-elections-links">
              <a href="https://mvic.sos.state.mi.us/RegisterVoter" target="_blank" rel="noopener noreferrer" className="ballot-elections-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                Register to Vote
              </a>
              <a href="https://mvic.sos.state.mi.us/Voter/Index" target="_blank" rel="noopener noreferrer" className="ballot-elections-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Check Registration
              </a>
              <a href="https://mvic.sos.state.mi.us/AVApplication/Index" target="_blank" rel="noopener noreferrer" className="ballot-elections-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Absentee Ballot
              </a>
            </div>
          </section>
        </>
      )}

      {/* ── Step 2: Ballot ── */}
      {step === 'ballot' && (
        <>
          {/* Voting address bar */}
          {address && (
            <div className="ballot-address-bar">
              <div className="ballot-address-bar-info">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="ballot-address-bar-label">Voting from:</span>
                <span className="ballot-address-bar-text">{address}</span>
              </div>
              <button className="ballot-address-bar-change" onClick={() => setStep('address')}>
                Change
              </button>
            </div>
          )}

          {/* General election badge */}
          <div className="ballot-party-badge-row">
            <div className="ballot-party-badge badge-general">
              General Election Ballot
            </div>
          </div>

          {/* Key deadline */}
          <DeadlineBanner />

          {/* General election explainer */}
          <div className="ballot-explainer">
            <div className="ballot-explainer-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div className="ballot-explainer-text">
              <strong>How does the general election work?</strong>
              <p>
                In the general election, every race appears on one ballot — there are no party
                columns. For partisan races, you choose between the Republican nominee, Democratic
                nominee, and any independent or third-party candidates. Nonpartisan races (judges,
                school boards) and ballot proposals appear for all voters.
              </p>
              <p>
                Each candidate below is shown with their party affiliation
                (<span className="ballot-party-tag ballot-party-tag-r" style={{ display: 'inline', verticalAlign: 'middle' }}>R</span>{' '}
                <span className="ballot-party-tag ballot-party-tag-d" style={{ display: 'inline', verticalAlign: 'middle' }}>D</span>{' '}
                <span className="ballot-party-tag ballot-party-tag-i" style={{ display: 'inline', verticalAlign: 'middle' }}>I</span>)
                and graded A through F on constitutional values.
              </p>
            </div>
          </div>

          {/* Progress bar */}
          {totalItems > 0 && (
            <div className="ballot-progress" ref={progressRef}>
              <div className="ballot-progress-bar">
                <div
                  className="ballot-progress-fill"
                  style={{ width: `${totalItems > 0 ? (decidedCount / totalItems) * 100 : 0}%` }}
                />
              </div>
              <span className="ballot-progress-text">
                <span><strong>{decidedCount}</strong> of {totalItems} decided</span>
                {decidedCount === totalItems && <span className="ballot-progress-done">All set!</span>}
                {decidedCount > 0 && decidedCount < totalItems && (
                  <button
                    className="ballot-next-undecided"
                    onClick={() => {
                      const el = document.querySelector('.ballot-race:not(.ballot-race-decided)')
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                  >
                    Next undecided
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}
              </span>
            </div>
          )}


          {/* Ballot complete celebration */}
          {decidedCount === totalItems && totalItems > 0 && (
            <div className="ballot-complete-banner">
              <div className="ballot-complete-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="ballot-complete-text">
                <strong>Your ballot plan is complete!</strong>
                <p>You've decided on all {totalItems} races and proposals. Download a PDF to take to the polls or share with friends.</p>
              </div>
              <div className="ballot-complete-actions">
                <button
                  className="ballot-complete-pdf"
                  onClick={() => generateBallotPDF({ party: 'general', races: allRaces, choices, address })}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </button>
                <ShareButton
                  title="My Ballot Plan"
                  text={summaryText}
                  className="ballot-complete-share"
                  onShare={trackShareBallot}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  Share
                </ShareButton>
              </div>
            </div>
          )}

          <FounderQuoteBanner quotes={VOTING_QUOTES} />

          {/* Quick picks summary */}
          {decidedCount > 0 && (
            <BallotSummaryCard choices={choices} races={allRaces} />
          )}

          <GradeLegend />

          {/* Key dates — collapsible since DeadlineBanner handles the urgent one */}
          <details className="ballot-dates-details">
            <summary className="ballot-dates-summary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 2v4" /><path d="M16 2v4" />
              </svg>
              All Key Dates
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" className="ballot-dates-chevron">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div className="ballot-dates-grid">
              <div className="ballot-date-item">
                <span className="ballot-date-label">Registration Deadline</span>
                <span className="ballot-date-value">{PRIMARY_INFO.registrationDeadline}</span>
              </div>
              <div className="ballot-date-item">
                <span className="ballot-date-label">Early Voting Begins</span>
                <span className="ballot-date-value">{PRIMARY_INFO.earlyVotingStart}</span>
              </div>
              <div className="ballot-date-item">
                <span className="ballot-date-label">Absentee Ballot Deadline</span>
                <span className="ballot-date-value">{PRIMARY_INFO.absenteeDeadline}</span>
              </div>
              <div className="ballot-date-item ballot-date-highlight-item">
                <span className="ballot-date-label">Election Day</span>
                <span className="ballot-date-value">{PRIMARY_INFO.date}</span>
              </div>
            </div>
          </details>

          {/* Race filter tabs */}
          {totalRaces > 3 && (
            <div className="ballot-filter-tabs">
              <button
                className={`ballot-filter-tab ${raceFilter === 'all' ? 'active' : ''}`}
                onClick={() => setRaceFilter('all')}
              >
                All ({totalRaces})
              </button>
              <button
                className={`ballot-filter-tab ${raceFilter === 'undecided' ? 'active' : ''}`}
                onClick={() => setRaceFilter('undecided')}
              >
                Undecided ({totalRaces - decidedCount})
              </button>
              <button
                className={`ballot-filter-tab ${raceFilter === 'decided' ? 'active' : ''}`}
                onClick={() => setRaceFilter('decided')}
              >
                Decided ({decidedCount})
              </button>
            </div>
          )}

          {/* Section jump nav */}
          <div className="ballot-jump-nav">
            <span className="ballot-jump-label">Jump to:</span>
            <button onClick={() => document.getElementById('section-races')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Races</button>
            {(localRaces.length > 0 || novemberLocalRaces.length > 0) && (
              <button onClick={() => document.getElementById('section-local')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Local</button>
            )}
            {proposals.length > 0 && (
              <button onClick={() => document.getElementById('section-proposals')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Proposals</button>
            )}
            <button onClick={() => document.getElementById('section-resources')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Resources</button>
          </div>

          {/* Races */}
          <section id="section-races" className="ballot-section ballot-section-main">
            <div className="ballot-election-header">
              <span className="ballot-election-date-badge ballot-date-general">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 2v4" /><path d="M16 2v4" />
                </svg>
                November 3, 2026
              </span>
            </div>
            <h3 className="ballot-section-title">
              General Election Races
            </h3>
            <p className="ballot-section-subtitle">Choose one candidate per race. Candidates from all parties are shown together.</p>
            <div className="ballot-races">
              {races
                .filter(race => {
                  if (raceFilter === 'undecided') return !choices[race.id]?.name
                  if (raceFilter === 'decided') return !!choices[race.id]?.name
                  return true
                })
                .map(race => (
                <RaceCard
                  key={race.id}
                  race={race}
                  choice={choices[race.id]}
                  onSelect={selectCandidate}
                  onWriteIn={writeInCandidate}
                  onCandidateDetail={setDetailCandidate}
                />
              ))}
              {raceFilter === 'undecided' && races.every(race => choices[race.id]?.name) && (
                <p className="ballot-filter-empty">All races decided!</p>
              )}
              {raceFilter === 'decided' && races.every(race => !choices[race.id]?.name) && (
                <p className="ballot-filter-empty">No races decided yet. Choose your candidates above.</p>
              )}
            </div>
          </section>

          {/* Local Races (County Executive, Judicial, School Boards, County Officers, etc.) */}
          {(localRaces.length > 0 || novemberLocalRaces.length > 0) && (
            <section id="section-local" className="ballot-section ballot-section-local">
              <h3 className="ballot-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M3 21V7l9-4 9 4v14" /><path d="M9 21V11h6v10" /><path d="M3 7h18" />
                </svg>
                Local Races
              </h3>
              <p className="ballot-local-note">
                These local races appear on your November general election ballot.
              </p>
              {[...localRaces, ...novemberLocalRaces].some(r => r.type === 'nonpartisan') && (
                <div className="ballot-judicial-explainer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" style={{ flexShrink: 0, marginTop: '0.1rem' }}>
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                  </svg>
                  <div>
                    <strong>How judicial and nonpartisan races work:</strong> These races are <strong>nonpartisan</strong> — candidates do not appear with party labels.
                    {' '}<em>For multi-seat races, you may vote for up to the number of open seats.</em>
                  </div>
                </div>
              )}
              <div className="ballot-races">
                {[...localRaces, ...novemberLocalRaces].map(race => (
                  <RaceCard
                    key={race.id}
                    race={race}
                    choice={choices[race.id]}
                    onSelect={selectCandidate}
                    onWriteIn={writeInCandidate}
                    onCandidateDetail={setDetailCandidate}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Note about county/township offices NOT on this ballot */}
          {localGeo?.county && (
            <div className="ballot-not-on-ballot-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>
                County offices (Sheriff, Prosecutor, Clerk, Treasurer, Commissioners) and township offices were elected in 2024 for 4-year terms and are <strong>not on the 2026 ballot</strong>. Next election for these offices: 2028.
              </span>
            </div>
          )}

          {/* Ballot Proposals & Millages */}
          {proposals.length > 0 && (
            <section id="section-proposals" className="ballot-section ballot-section-proposals">
              <h3 className="ballot-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Ballot Proposals &amp; Millages
              </h3>
              <p className="ballot-proposals-note">
                Statewide and local proposals on your ballot. Tap each to see what a YES or NO vote means in plain English.
              </p>
              <div className="ballot-proposals-list">
                {proposals.map(p => (
                  <ProposalCard
                    key={p.id}
                    proposal={p}
                    choice={choices[p.id]?.proposalVote || null}
                    onVote={voteOnProposal}
                  />
                ))}
              </div>
              <div className="ballot-explainer" style={{ marginTop: '1rem' }}>
                <div className="ballot-explainer-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 2v4" /><path d="M16 2v4" />
                  </svg>
                </div>
                <div className="ballot-explainer-text">
                  <strong>More local proposals coming soon</strong>
                  <p>
                    School bonds, road millages, park millages, police/fire millages, and other hyperlocal proposals
                    are typically published by county clerks about 60 days before the election. We'll add them to your
                    personalized ballot as soon as they're available (early September 2026).
                  </p>
                </div>
              </div>
              <div className="ballot-proposals-disclaimer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>
                  Proposals are matched to your address. Your actual ballot may include additional proposals not yet in our database.
                  Always verify with your <a href="https://mvic.sos.state.mi.us/Voter/Index" target="_blank" rel="noopener noreferrer">official sample ballot</a>.
                </span>
              </div>
            </section>
          )}

          {/* Candidate Detail Modal */}
          {detailCandidate && (
            <CandidateDetailModal
              candidate={detailCandidate}
              onClose={() => setDetailCandidate(null)}
            />
          )}

          {/* Actions */}
          <div className="ballot-actions">
            <ShareButton
              title="My Ballot Plan"
              text={summaryText}
              className="ballot-share-btn"
            />
            <button
              className="ballot-share-btn ballot-pdf-btn"
              onClick={() => generateBallotPDF({ party: 'general', races: allRaces, choices, address })}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </button>
            <button className="ballot-clear-all" onClick={handleRestart}>
              Start Over
            </button>
          </div>

          <div className="ballot-disclaimer">
            <p>
              {user
                ? 'Your ballot plan is saved to your account and synced across devices.'
                : 'Your ballot plan is stored on this device only. Sign in to sync across devices.'}
              {' '}Candidate data is sourced from public filings and may change before election day.
            </p>
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
              Disclaimer: All information is kept as current as possible but may not reflect the latest developments. Candidate grades reflect our editorial assessment based on publicly available records and are inherently subjective. We encourage all voters to conduct their own research before making final voting decisions.
            </p>
            <p style={{ marginTop: '0.25rem' }}>
              <a href="https://mvic.sos.state.mi.us/Voter/Index" target="_blank" rel="noopener noreferrer" className="ballot-mvic-link">
                View your official sample ballot on Michigan.gov
              </a>
            </p>
          </div>

          {/* ── Polling Place Section ── */}
          <section id="section-polling" className="ballot-section ballot-section-polling">
            <h3 className="ballot-section-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Where to Vote
            </h3>

            {pollingLoading && (
              <div className="ballot-polling-loading">Loading polling place information...</div>
            )}

            {!pollingLoading && pollingData && pollingData.pollingLocations?.length > 0 && (
              <div className="ballot-polling-cards">
                {pollingData.pollingLocations.map((loc, i) => (
                  <div key={`poll-${i}`} className="ballot-polling-card">
                    <h4 className="ballot-polling-card-title">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                      {loc.name || 'Polling Location'}
                    </h4>
                    {loc.address && <p className="ballot-polling-address">{loc.address}</p>}
                    {loc.hours && <p className="ballot-polling-hours">Hours: {loc.hours}</p>}
                    {loc.address && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ballot-polling-map-link"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Open in Maps
                      </a>
                    )}
                  </div>
                ))}

                {pollingData.earlyVoteSites?.length > 0 && (
                  <div className="ballot-polling-card ballot-polling-card-early">
                    <h4 className="ballot-polling-card-title">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                      Early Voting Site
                    </h4>
                    <p className="ballot-polling-address">{pollingData.earlyVoteSites[0].name}</p>
                    {pollingData.earlyVoteSites[0].address && (
                      <p className="ballot-polling-address">{pollingData.earlyVoteSites[0].address}</p>
                    )}
                    {pollingData.earlyVoteSites[0].hours && (
                      <p className="ballot-polling-hours">Hours: {pollingData.earlyVoteSites[0].hours}</p>
                    )}
                  </div>
                )}

                {pollingData.dropOffLocations?.length > 0 && (
                  <div className="ballot-polling-card ballot-polling-card-dropoff">
                    <h4 className="ballot-polling-card-title">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a4 4 0 0 0-8 0v2" />
                      </svg>
                      Ballot Drop-off Location
                    </h4>
                    <p className="ballot-polling-address">{pollingData.dropOffLocations[0].name}</p>
                    {pollingData.dropOffLocations[0].address && (
                      <p className="ballot-polling-address">{pollingData.dropOffLocations[0].address}</p>
                    )}
                  </div>
                )}
              </div>
            )}

            {!pollingLoading && (!pollingData || !pollingData.pollingLocations?.length) && (
              <div className="ballot-polling-unavailable">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <div>
                  <p>Polling places are typically published 4-6 weeks before an election.</p>
                  <a
                    href="https://mvic.sos.state.mi.us/Voter/Index"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ballot-polling-sos-link"
                  >
                    Check the Michigan Secretary of State voter lookup for updates
                  </a>
                </div>
              </div>
            )}
          </section>

          {/* ── Election Day Checklist ── */}
          <section id="section-checklist" className="ballot-section ballot-section-checklist">
            <h3 className="ballot-section-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Election Day Checklist
            </h3>
            <p className="ballot-checklist-subtitle">Make sure you're ready before you head to the polls.</p>
            <div className="ballot-checklist-items">
              {[
                { key: 'id', label: 'Bring a valid photo ID', detail: 'Michigan requires a photo ID to vote. If you don\'t have one, you can sign an affidavit at the polls and still cast a ballot.' },
                { key: 'registration', label: 'Confirm your registration is active', detail: 'Check your registration status at the Michigan Voter Information Center — you can register or update your address on Election Day at your clerk\'s office.', link: 'https://mvic.sos.state.mi.us/Voter/Index', linkLabel: 'Check status' },
                { key: 'polling', label: 'Know your polling place', detail: 'Michigan polls are open 7:00 AM – 8:00 PM. If you\'re in line by 8 PM, you will be allowed to vote.', link: 'https://mvic.sos.state.mi.us/Voter/Index', linkLabel: 'Find location' },
                { key: 'ballot', label: 'Save your ballot plan to your phone', detail: 'Screenshot your completed ballot above or bookmark this page. Cell service can be spotty at polling locations.' },
                { key: 'research', label: 'Review your ballot proposals', detail: 'Proposals and millages are the races voters are least prepared for. Scroll up to read the plain-English YES/NO explainers.' },
                { key: 'friend', label: 'Remind a friend to vote', detail: 'Share this free tool with someone who wants to vote their values but doesn\'t have time to research every race.' },
              ].map(item => (
                <button
                  key={item.key}
                  className={`ballot-checklist-item ${checklist[item.key] ? 'checked' : ''}`}
                  onClick={() => toggleChecklist(item.key)}
                >
                  <span className="ballot-checklist-check">
                    {checklist[item.key] ? (
                      <svg viewBox="0 0 24 24" fill="var(--accent-gold)" width="20" height="20">
                        <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2.5" fill="none" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    )}
                  </span>
                  <div className="ballot-checklist-content">
                    <span className="ballot-checklist-label">{item.label}</span>
                    <span className="ballot-checklist-detail">{item.detail}</span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ballot-checklist-link"
                        onClick={e => e.stopPropagation()}
                      >
                        {item.linkLabel}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </button>
              ))}
            </div>
            <div className="ballot-checklist-progress">
              {Object.values(checklist).filter(Boolean).length} of 6 complete
            </div>
          </section>

          {/* ── Voter Resources Section ── */}
          <section id="section-resources" className="ballot-section ballot-section-resources">
            <h3 className="ballot-section-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Voter Resources
            </h3>
            <div className="ballot-resources-grid">
              <a href="https://mvic.sos.state.mi.us/Voter/Index" target="_blank" rel="noopener noreferrer" className="ballot-resource-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="ballot-resource-label">Check Registration</span>
              </a>
              <a href="https://mvic.sos.state.mi.us/RegisterVoter" target="_blank" rel="noopener noreferrer" className="ballot-resource-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                <span className="ballot-resource-label">Register to Vote</span>
              </a>
              <a href="https://mvic.sos.state.mi.us/Voter/Index" target="_blank" rel="noopener noreferrer" className="ballot-resource-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="ballot-resource-label">Find Your Polling Place</span>
              </a>
              <a href="https://mvic.sos.state.mi.us/Voter/Index" target="_blank" rel="noopener noreferrer" className="ballot-resource-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <span className="ballot-resource-label">Official Sample Ballot</span>
              </a>
            </div>
          </section>

          {/* Spread the word */}
          <div className="ballot-spread-cta">
            <h4 className="ballot-spread-title">Know someone who needs a ballot plan?</h4>
            <p className="ballot-spread-desc">Help your friends and family vote their values — share this free tool.</p>
            <ShareButton
              title="Of For & By The People"
              text="Plan your ballot for Michigan's November 3 general election — every race, every candidate, graded on Constitutional values. Free at buildmyballot.com"
              url="https://www.buildmyballot.com/ballot"
              className="ballot-spread-btn"
              onShare={trackShareTool}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
              Share This Tool
            </ShareButton>
          </div>

          {/* ── Grade Tip Submission ── */}
          <div className="ballot-grade-tip">
            <h4 className="ballot-grade-tip-title">Know something about a candidate?</h4>
            <p className="ballot-grade-tip-desc">
              Our grades are based on public records. If you have documented information about a candidate's positions, help us improve our data.
            </p>
            <a
              href="mailto:dillon@branddesignco.com?subject=Candidate Grade Tip&body=Candidate name:%0AOffice/District:%0AInformation:%0ASource/Link:"
              className="ballot-grade-tip-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Submit a Tip
            </a>
          </div>

          {/* ── Election Disclaimer ── */}
          <div className="ballot-disclaimer">
            <p>
              <strong>Disclaimer:</strong> Candidate grades and values alignment scores are
              editorial opinions based on publicly available voting records, public statements,
              and policy positions. They are not endorsed by any government entity, political
              party, candidate, or campaign. This tool is not affiliated with any political
              organization. Always verify election information with your local election office.
            </p>
            <p>
              Not paid for by any candidate or candidate's committee.
            </p>
          </div>
        </>
      )}

      {/* Sticky mobile progress bar */}
      {step === 'ballot' && totalRaces > 0 && showStickyBar && (
        <div className="ballot-sticky-bar">
          <div className="ballot-sticky-progress">
            <div className="ballot-sticky-fill" style={{ width: `${(decidedCount / totalRaces) * 100}%` }} />
          </div>
          <span className="ballot-sticky-count">
            <strong>{decidedCount}</strong>/{totalRaces}
          </span>
          {decidedCount < totalRaces ? (
            <button
              className="ballot-sticky-next"
              onClick={() => {
                const el = document.querySelector('.ballot-race:not(.ballot-race-decided)')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }}
            >
              Next
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          ) : (
            <button
              className="ballot-sticky-next ballot-sticky-done"
              onClick={() => generateBallotPDF({ party: 'general', races: allRaces, choices, address })}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              PDF
            </button>
          )}
        </div>
      )}

      {showScrollTop && (
        <button
          className="ballot-scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  )
}
