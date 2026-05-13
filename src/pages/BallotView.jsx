import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import useProfile from '../hooks/useProfile'
import { useApp } from '../contexts/AppContext'
import ShareButton from '../components/ui/ShareButton'
import FounderQuoteBanner from '../components/ui/FounderQuoteBanner'
import { VOTING_QUOTES } from '../data/foundingValues'
import {
  PRIMARY_INFO,
  STATEWIDE_RACES,
  US_HOUSE_RACES,
  CONVENTION_NOMINEES,
  BALLOT_PROPOSALS,
  getPrimaryBallot,
  getLocalBallotRaces,
  getGradeColor,
} from '../data/michiganPrimary2026'
import generateBallotPDF from '../utils/generateBallotPDF'
import AddressAutocomplete from '../components/ui/AddressAutocomplete'
import { getVoterInfo } from '../services/googleCivicApi'

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
        Enter your Michigan address to see the exact races and candidates on your primary ballot.
      </p>
      <form onSubmit={handleSubmit} className="ballot-address-form">
        <AddressAutocomplete
          value={input}
          onChange={setInput}
          onSelect={handleSuggestionSelect}
          placeholder="Enter your Michigan address..."
          className="ballot-address-input"
          autoFocus
        />
        <button type="submit" className="ballot-address-btn" disabled={!input.trim()}>
          Find My Ballot
        </button>
      </form>
      <p className="ballot-step-note">
        Your address is used only to determine your districts. It is not shared or stored on any server.
      </p>
    </div>
  )
}

// ── Step 2: Party Ballot Picker ──

function PartyStep({ onSelect, address }) {
  return (
    <div className="ballot-step ballot-step-party">
      <div className="ballot-step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="2" y1="9" x2="22" y2="9" />
        </svg>
      </div>
      <h3 className="ballot-step-title">Choose Your Party Column</h3>
      <p className="ballot-step-desc">
        Michigan uses an open primary. Every voter gets the same ballot but must choose
        <strong> one party&rsquo;s column</strong> for partisan races. You cannot split between parties.
      </p>

      <div className="ballot-party-cards">
        <button
          className="ballot-party-card ballot-party-r"
          onClick={() => onSelect('republican')}
        >
          <span className="ballot-party-elephant">
            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M19.5 7.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .55.3 1.03.74 1.29-.04.36-.13.7-.28 1.01C16.54 10.7 15.85 11.5 15 12H9c-.85-.5-1.54-1.3-1.96-2.2a3.2 3.2 0 01-.28-1.01c.44-.26.74-.74.74-1.29 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .55.3 1.03.74 1.29a6.3 6.3 0 001.76 4.21v5h2v-2h6v2h2v-5a6.3 6.3 0 001.76-4.21c.44-.26.74-.74.74-1.29z"/></svg>
          </span>
          <span className="ballot-party-name">Republican</span>
          <span className="ballot-party-hint">Vote in the Republican primary column</span>
        </button>

        <button
          className="ballot-party-card ballot-party-d"
          onClick={() => onSelect('democratic')}
        >
          <span className="ballot-party-donkey">
            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.76 1.12 5.26 2.93 7.07l1.41-1.41A8 8 0 014 12c0-4.42 3.58-8 8-8s8 3.58 8 8a8 8 0 01-2.34 5.66l1.41 1.41A9.97 9.97 0 0022 12c0-5.52-4.48-10-10-10zm-1 5h2v6h-2V7zm0 8h2v2h-2v-2z"/></svg>
          </span>
          <span className="ballot-party-name">Democratic</span>
          <span className="ballot-party-hint">Vote in the Democratic primary column</span>
        </button>
      </div>

      <div className="ballot-party-info">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>
          You can still vote on nonpartisan races (like judges) and ballot proposals regardless of which column you choose.
        </span>
      </div>

      <button className="ballot-back-link" onClick={() => {}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Voting from: {address}
      </button>
    </div>
  )
}

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
  const sizes = {
    sm: { width: '1.35rem', height: '1.35rem', fontSize: '0.65rem' },
    md: { width: '1.8rem', height: '1.8rem', fontSize: '0.85rem' },
    lg: { width: '2.4rem', height: '2.4rem', fontSize: '1.1rem' },
  }
  const s = sizes[size] || sizes.sm
  return (
    <span
      className="grade-badge"
      style={{
        background: color,
        width: s.width,
        height: s.height,
        fontSize: s.fontSize,
      }}
      onClick={onClick}
      title={`Constitutional Alignment: ${grade}`}
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

// ── Candidate Detail Modal ──

function CandidateDetailModal({ candidate, onClose }) {
  if (!candidate) return null

  // Close on escape
  React.useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="candidate-modal-overlay" onClick={onClose}>
      <div className="candidate-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
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
          {candidate.status === 'incumbent' && (
            <span className="ballot-incumbent-tag" style={{ alignSelf: 'flex-start' }}>Incumbent</span>
          )}
        </div>

        {/* Bio */}
        {candidate.bio && (
          <div className="candidate-modal-section">
            <h4 className="candidate-modal-section-title">About</h4>
            <p className="candidate-modal-bio">{candidate.bio}</p>
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
                  </div>
                )
              })}
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
          Grades reflect alignment with constitutional conservative principles across six key issues.
          Data sourced from voting records, public statements, and campaign platforms.
        </div>
      </div>
    </div>
  )
}

// ── Proposal Card ──

function ProposalCard({ proposal }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`ballot-proposal ${expanded ? 'ballot-proposal-expanded' : ''}`}>
      <button className="ballot-proposal-header" onClick={() => setExpanded(!expanded)}>
        <div className="ballot-proposal-title-row">
          <span className={`ballot-proposal-status ballot-proposal-status-${proposal.status}`}>
            {proposal.status === 'confirmed' ? 'Confirmed' : 'Likely'}
          </span>
          <h4 className="ballot-proposal-name">{proposal.name}</h4>
        </div>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          width="18"
          height="18"
          className={`ballot-proposal-chevron ${expanded ? 'rotated' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {expanded && (
        <div className="ballot-proposal-body">
          <p className="ballot-proposal-type">
            <strong>Type:</strong> {proposal.type}
          </p>
          {proposal.statusNote && (
            <p className="ballot-proposal-status-note">{proposal.statusNote}</p>
          )}
          <p className="ballot-proposal-desc">{proposal.description}</p>

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
            const hasDetail = c.bio || c.positions || c.website || c.keyPositions || !c.grade
            return (
              <div key={i} className={`ballot-candidate-row ${isSelected ? 'ballot-candidate-selected' : ''}`}>
                <button
                  className={`ballot-candidate ${isSelected ? 'ballot-candidate-selected' : ''} ${
                    c.status === 'incumbent' ? 'ballot-candidate-incumbent' : ''
                  }`}
                  onClick={() => onSelect(race.id, { name: c.name, description: c.description })}
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
                  <span className="ballot-candidate-info">
                    <span className="ballot-candidate-name">
                      {c.name}
                      <GradeBadge grade={c.grade} size="sm" showUnrated={!c.grade} />
                      {c.status === 'incumbent' && <span className="ballot-incumbent-tag">Incumbent</span>}
                    </span>
                    {c.description && <span className="ballot-candidate-desc">{c.description}</span>}
                  </span>
                </button>
                {hasDetail && (
                  <button
                    className="ballot-candidate-detail-btn"
                    onClick={(e) => { e.stopPropagation(); onCandidateDetail(c) }}
                    title={`View ${c.name}'s profile`}
                    aria-label={`View details for ${c.name}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </button>
                )}
              </div>
            )
          })}
        </div>
      )}

      {!hasCandidates && !showWriteIn && (
        <p className="ballot-no-candidates">
          Candidate filings not yet available for this race.
        </p>
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
  usePageTitle('My Ballot Plan', 'Plan your ballot for the Michigan August 2026 primary')

  const { selectedState, userAddress, userDistricts, localGeo, setUserAddress, handleSearchDistrict } = useApp()
  const { user, syncBallot, ballotPlan, loading: profileLoading } = useProfile()

  const [step, setStep] = useState('address') // 'address' | 'party' | 'ballot' | 'review'
  const [address, setAddress] = useState(userAddress || '')
  const [party, setParty] = useState(null) // 'republican' | 'democratic'
  const [choices, setChoices] = useState({})
  const [cloudStatus, setCloudStatus] = useState('idle')
  const [detailCandidate, setDetailCandidate] = useState(null)
  const [pollingData, setPollingData] = useState(null)
  const [pollingLoading, setPollingLoading] = useState(false)
  const cloudTimerRef = useRef(null)

  // Load saved ballot
  useEffect(() => {
    if (profileLoading) return

    const saved = (user && ballotPlan) ? ballotPlan : loadBallot()
    if (saved) {
      if (saved.choices) setChoices(saved.choices)
      if (saved.party) {
        setParty(saved.party)
        setStep('ballot')
      }
      if (saved.address) setAddress(saved.address)
    }
  }, [user, ballotPlan, profileLoading])

  // If address already exists in AppContext, skip to party step
  useEffect(() => {
    if (userAddress && step === 'address') {
      setAddress(userAddress)
      setStep('party')
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

  // Get ballot races based on party and districts
  const races = useMemo(() => {
    if (!party) return []
    return getPrimaryBallot(party, userDistricts || {})
  }, [party, userDistricts])

  // Get local ballot races (county, township) based on geography
  const localRaces = useMemo(() => {
    if (!party || !localGeo) return []
    return getLocalBallotRaces(party, localGeo)
  }, [party, localGeo])

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
    } else {
      delete next[raceId]
    }
    setChoices(next)
    persist(next, party, address)
  }

  const writeInCandidate = (raceId, name) => {
    selectCandidate(raceId, { name, description: 'Write-in candidate' })
  }

  const handleAddressSubmit = (addr) => {
    setAddress(addr)
    setStep('party')
    // Try to geocode through AppContext if available
    if (setUserAddress) setUserAddress(addr)
  }

  const handlePartySelect = (p) => {
    setParty(p)
    setStep('ballot')
    persist(choices, p, address)
  }

  const handleRestart = () => {
    setStep('address')
    setParty(null)
    setChoices({})
    setAddress('')
    localStorage.removeItem(STORAGE_KEY)
  }

  // Summary stats
  const allRaces = useMemo(() => [...races, ...localRaces], [races, localRaces])
  const decidedCount = Object.keys(choices).filter(k => choices[k]?.name).length
  const totalRaces = allRaces.length

  // Build shareable summary
  const summaryText = useMemo(() => {
    if (!party || allRaces.length === 0) return ''
    const lines = [
      `My Ballot Plan — Michigan ${party === 'republican' ? 'Republican' : 'Democratic'} Primary`,
      `August 4, 2026\n`,
    ]
    allRaces.forEach(race => {
      const c = choices[race.id]
      if (c?.name) {
        lines.push(`${race.office}: ${c.name}`)
      }
    })
    lines.push('\nCreated with MyReps — myrepsapp.com')
    return lines.join('\n')
  }, [party, allRaces, choices])

  // Countdown to primary
  const daysUntil = useMemo(() => {
    const primary = new Date('2026-08-04')
    const now = new Date()
    const diff = Math.ceil((primary - now) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 0
  }, [])

  return (
    <div className="page-container ballot-page">
      {/* Header with countdown */}
      <div className="ballot-header">
        <h2 className="page-title">My Ballot Plan</h2>
        <div className="ballot-countdown">
          <span className="ballot-countdown-number">{daysUntil}</span>
          <span className="ballot-countdown-label">days until the Michigan Primary</span>
        </div>
        <p className="ballot-date-line">
          <strong>{PRIMARY_INFO.date}</strong> &middot; {PRIMARY_INFO.type}
        </p>
      </div>

      {/* Cloud sync status */}
      {user && step === 'ballot' && (
        <div className="ballot-cloud-status" aria-live="polite">
          {cloudStatus === 'saving' && <span className="cloud-indicator cloud-saving">Syncing...</span>}
          {cloudStatus === 'saved' && <span className="cloud-indicator cloud-saved">Saved to cloud</span>}
          {cloudStatus === 'error' && <span className="cloud-indicator cloud-error">Sync failed</span>}
        </div>
      )}

      {/* Step indicator */}
      {step !== 'address' && (
        <div className="ballot-steps-indicator">
          <div className={`ballot-step-dot ${step === 'address' || step === 'party' || step === 'ballot' ? 'active' : ''}`}>
            <span>1</span>
            <label>Address</label>
          </div>
          <div className="ballot-step-line" />
          <div className={`ballot-step-dot ${step === 'party' || step === 'ballot' ? 'active' : ''}`}>
            <span>2</span>
            <label>Party</label>
          </div>
          <div className="ballot-step-line" />
          <div className={`ballot-step-dot ${step === 'ballot' ? 'active' : ''}`}>
            <span>3</span>
            <label>Ballot</label>
          </div>
        </div>
      )}

      {/* ── Step 1: Address ── */}
      {step === 'address' && (
        <AddressStep address={address} onSubmit={handleAddressSubmit} />
      )}

      {/* ── Step 2: Party ── */}
      {step === 'party' && (
        <PartyStep
          address={address}
          onSelect={handlePartySelect}
        />
      )}

      {/* ── Step 3: Ballot ── */}
      {step === 'ballot' && (
        <>
          {/* Party badge & controls */}
          <div className="ballot-party-badge-row">
            <div className={`ballot-party-badge ${party === 'republican' ? 'badge-r' : 'badge-d'}`}>
              {party === 'republican' ? 'Republican Ballot' : 'Democratic Ballot'}
            </div>
            <button className="ballot-switch-party" onClick={() => setStep('party')}>
              Switch party
            </button>
          </div>

          {/* Progress bar */}
          {totalRaces > 0 && (
            <div className="ballot-progress">
              <div className="ballot-progress-bar">
                <div
                  className="ballot-progress-fill"
                  style={{ width: `${totalRaces > 0 ? (decidedCount / totalRaces) * 100 : 0}%` }}
                />
              </div>
              <span className="ballot-progress-text">
                {decidedCount} of {totalRaces} races decided
              </span>
            </div>
          )}

          <FounderQuoteBanner quotes={VOTING_QUOTES} />

          {/* Key dates info box */}
          <div className="ballot-dates-box">
            <h4 className="ballot-dates-title">Key Dates</h4>
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
            </div>
          </div>

          {/* Races */}
          <section className="ballot-section">
            <h3 className="ballot-section-title">
              {party === 'republican' ? 'Republican' : 'Democratic'} Primary Races
            </h3>
            <div className="ballot-races">
              {races.map(race => (
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

          {/* Local Races (County Executive, Judicial) */}
          {localRaces.length > 0 && (
            <section className="ballot-section ballot-section-local">
              <h3 className="ballot-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M3 21V7l9-4 9 4v14" /><path d="M9 21V11h6v10" /><path d="M3 7h18" />
                </svg>
                Local Races
              </h3>
              <p className="ballot-local-note">
                {localRaces.some(r => r.type === 'nonpartisan')
                  ? 'Judicial races appear on the nonpartisan section of your ballot — you can vote in these regardless of which party column you chose.'
                  : 'These local offices also appear on your August primary ballot.'}
              </p>
              <div className="ballot-races">
                {localRaces.map(race => (
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

          {/* November preview (convention nominees) */}
          <section className="ballot-section ballot-section-november">
            <h3 className="ballot-section-title">Coming in November</h3>
            <p className="ballot-november-note">
              These offices are nominated at party conventions and will appear on the November 3 general election ballot — not the August primary.
            </p>
            <div className="ballot-november-races">
              {Object.entries(CONVENTION_NOMINEES).map(([key, race]) => (
                <div key={key} className="ballot-november-race">
                  <span className="ballot-november-office">{race.office}</span>
                  {race.republican && !Array.isArray(race.republican) && (
                    <div className="ballot-november-matchup">
                      <span className="ballot-november-candidate party-r-text">{race.republican.name} (R)</span>
                      <span className="ballot-november-vs">vs</span>
                      <span className="ballot-november-candidate party-d-text">{race.democratic.name} (D)</span>
                    </div>
                  )}
                  {race.nominees && (
                    <div className="ballot-november-list">
                      {race.nominees.map((n, i) => (
                        <span key={i} className="ballot-november-candidate">{n.name}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Ballot Proposals */}
          {BALLOT_PROPOSALS.length > 0 && (
            <section className="ballot-section ballot-section-proposals">
              <h3 className="ballot-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Ballot Proposals
              </h3>
              <p className="ballot-proposals-note">
                These statewide proposals will appear on the November ballot. Review them now to be prepared.
              </p>
              <div className="ballot-proposals-list">
                {BALLOT_PROPOSALS.map(proposal => (
                  <ProposalCard key={proposal.id} proposal={proposal} />
                ))}
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
              onClick={() => generateBallotPDF({ party, races: allRaces, choices, address })}
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
            <p style={{ marginTop: '0.25rem' }}>
              <a href="https://mvic.sos.state.mi.us/Voter/Index" target="_blank" rel="noopener noreferrer" className="ballot-mvic-link">
                View your official sample ballot on Michigan.gov
              </a>
            </p>
          </div>

          {/* ── Polling Place Section ── */}
          <section className="ballot-section ballot-section-polling">
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

          {/* ── Voter Resources Section ── */}
          <section className="ballot-section ballot-section-resources">
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
              <a href="https://mvic.sos.state.mi.us/AVApplication/Index" target="_blank" rel="noopener noreferrer" className="ballot-resource-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="ballot-resource-label">Request Absentee Ballot</span>
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

          {/* ── Grade Tip Submission ── */}
          <div className="ballot-grade-tip">
            <h4 className="ballot-grade-tip-title">Know something about a candidate?</h4>
            <p className="ballot-grade-tip-desc">
              Our grades are based on public records. If you have documented information about a candidate's positions, help us improve our data.
            </p>
            <a
              href="mailto:dillon@branddesignco.com?subject=MyReps Grade Tip&body=Candidate name:%0AOffice/District:%0AInformation:%0ASource/Link:"
              className="ballot-grade-tip-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Submit a Tip
            </a>
          </div>
        </>
      )}
    </div>
  )
}
