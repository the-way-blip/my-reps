import React, { useState, useEffect, useCallback, useRef } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import useProfile from '../hooks/useProfile'
import { useApp } from '../contexts/AppContext'
import ShareButton from '../components/ui/ShareButton'
import FounderQuoteBanner from '../components/ui/FounderQuoteBanner'
import { VOTING_QUOTES } from '../data/foundingValues'

const STORAGE_KEY = 'myreps-ballot-plan'

const DEFAULT_OFFICES = [
  { id: 'president', label: 'President', level: 'Federal' },
  { id: 'us-senate', label: 'U.S. Senate', level: 'Federal' },
  { id: 'us-house', label: 'U.S. House', level: 'Federal' },
  { id: 'governor', label: 'Governor', level: 'State' },
  { id: 'secretary-state', label: 'Secretary of State', level: 'State' },
  { id: 'attorney-general', label: 'Attorney General', level: 'State' },
  { id: 'state-senate', label: 'State Senator', level: 'State' },
  { id: 'state-house', label: 'State Representative', level: 'State' },
  { id: 'supreme-court', label: 'Supreme Court Justice', level: 'State' },
  { id: 'county-exec', label: 'County Executive / Commissioner', level: 'Local' },
  { id: 'mayor', label: 'Mayor / City Council', level: 'Local' },
  { id: 'school-board', label: 'School Board', level: 'Local' },
]

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

const BallotOffice = React.memo(function BallotOffice({ office, choice, onUpdate }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(choice?.name || '')
  const [party, setParty] = useState(choice?.party || '')
  const [notes, setNotes] = useState(choice?.notes || '')

  const handleSave = () => {
    onUpdate(office.id, { name: name.trim(), party, notes: notes.trim() })
    setEditing(false)
  }

  const handleClear = () => {
    setName('')
    setParty('')
    setNotes('')
    onUpdate(office.id, null)
    setEditing(false)
  }

  const hasChoice = choice && choice.name

  return (
    <div className={`ballot-office ${hasChoice ? 'ballot-office-filled' : ''}`}>
      <div className="ballot-office-header">
        <div className="ballot-office-info">
          <span className="ballot-office-level">{office.level}</span>
          <span className="ballot-office-label">{office.label}</span>
        </div>
        {!editing && (
          <button
            className="ballot-edit-btn"
            onClick={() => setEditing(true)}
            type="button"
            aria-label={`Edit choice for ${office.label}`}
          >
            {hasChoice ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" />
              </svg>
            )}
          </button>
        )}
      </div>

      {hasChoice && !editing && (
        <div className="ballot-choice-display">
          <span className="ballot-choice-name">{choice.name}</span>
          {choice.party && (
            <span className={`ballot-choice-party ${
              choice.party.toLowerCase().includes('rep') ? 'party-r' :
              choice.party.toLowerCase().includes('dem') ? 'party-d' : 'party-i'
            }`}>
              {choice.party}
            </span>
          )}
          {choice.notes && <p className="ballot-choice-notes">{choice.notes}</p>}
        </div>
      )}

      {editing && (
        <div className="ballot-edit-form">
          <input
            type="text"
            className="ballot-input"
            placeholder="Candidate name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
          />
          <select
            className="ballot-select"
            value={party}
            onChange={e => setParty(e.target.value)}
          >
            <option value="">Party...</option>
            <option value="Republican">Republican</option>
            <option value="Democratic">Democratic</option>
            <option value="Libertarian">Libertarian</option>
            <option value="Independent">Independent</option>
            <option value="Nonpartisan">Nonpartisan</option>
          </select>
          <textarea
            className="ballot-textarea"
            placeholder="Notes (optional)"
            value={notes}
            onChange={e => setNotes(e.target.value)}
            rows={2}
          />
          <div className="ballot-edit-actions">
            <button className="ballot-save-btn" onClick={handleSave} type="button">Save</button>
            <button className="ballot-cancel-btn" onClick={() => setEditing(false)} type="button">Cancel</button>
            {hasChoice && (
              <button className="ballot-clear-btn" onClick={handleClear} type="button">Clear</button>
            )}
          </div>
        </div>
      )}
    </div>
  )
})

const ProposalItem = React.memo(function ProposalItem({ proposal, onToggle }) {
  return (
    <div className={`ballot-proposal ${proposal.vote ? 'ballot-proposal-voted' : ''}`}>
      <div className="ballot-proposal-header">
        <span className="ballot-proposal-title">{proposal.title}</span>
        <div className="ballot-proposal-btns">
          <button
            className={`ballot-vote-btn ${proposal.vote === 'yes' ? 'ballot-vote-yes' : ''}`}
            onClick={() => onToggle(proposal.id, proposal.vote === 'yes' ? null : 'yes')}
            type="button"
          >
            Yes
          </button>
          <button
            className={`ballot-vote-btn ${proposal.vote === 'no' ? 'ballot-vote-no' : ''}`}
            onClick={() => onToggle(proposal.id, proposal.vote === 'no' ? null : 'no')}
            type="button"
          >
            No
          </button>
        </div>
      </div>
      {proposal.description && (
        <p className="ballot-proposal-desc">{proposal.description}</p>
      )}
    </div>
  )
})

export default function BallotView() {
  usePageTitle('My Ballot Plan', 'Plan your ballot and track your voting choices')

  const { selectedState } = useApp()
  const { user, syncBallot, ballotPlan, loading: profileLoading } = useProfile()

  const [choices, setChoices] = useState({})
  const [proposals, setProposals] = useState([])
  const [customOffices, setCustomOffices] = useState([])
  const [newOfficeName, setNewOfficeName] = useState('')
  const [newProposalTitle, setNewProposalTitle] = useState('')
  const [newProposalDesc, setNewProposalDesc] = useState('')
  const [cloudStatus, setCloudStatus] = useState('idle') // 'idle' | 'saving' | 'saved' | 'error'
  const cloudTimerRef = useRef(null)

  // Load from cloud (preferred) or localStorage
  useEffect(() => {
    if (profileLoading) return

    if (user && ballotPlan) {
      // Cloud data takes priority for logged-in users
      setChoices(ballotPlan.choices || {})
      setProposals(ballotPlan.proposals || [])
      setCustomOffices(ballotPlan.custom_offices || [])
      return
    }

    // Fallback to localStorage
    const saved = loadBallot()
    if (saved) {
      setChoices(saved.choices || {})
      setProposals(saved.proposals || [])
      setCustomOffices(saved.customOffices || [])
    }
  }, [user, ballotPlan, profileLoading])

  // Save to localStorage + Supabase if logged in
  const persist = useCallback((c, p, co) => {
    const data = { choices: c, proposals: p, customOffices: co }
    saveBallot(data)

    if (user && syncBallot) {
      setCloudStatus('saving')
      if (cloudTimerRef.current) clearTimeout(cloudTimerRef.current)

      // Debounce cloud saves to avoid rapid writes
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

  const updateChoice = (officeId, choice) => {
    const next = { ...choices }
    if (choice) {
      next[officeId] = choice
    } else {
      delete next[officeId]
    }
    setChoices(next)
    persist(next, proposals, customOffices)
  }

  const toggleProposalVote = (proposalId, vote) => {
    const next = proposals.map(p =>
      p.id === proposalId ? { ...p, vote } : p
    )
    setProposals(next)
    persist(choices, next, customOffices)
  }

  const addCustomOffice = () => {
    const name = newOfficeName.trim()
    if (!name) return
    const id = `custom-${Date.now()}`
    const next = [...customOffices, { id, label: name, level: 'Custom' }]
    setCustomOffices(next)
    setNewOfficeName('')
    persist(choices, proposals, next)
  }

  const addProposal = () => {
    const title = newProposalTitle.trim()
    if (!title) return
    const next = [...proposals, {
      id: `prop-${Date.now()}`,
      title,
      description: newProposalDesc.trim(),
      vote: null,
    }]
    setProposals(next)
    setNewProposalTitle('')
    setNewProposalDesc('')
    persist(choices, next, customOffices)
  }

  const clearAll = () => {
    setChoices({})
    setProposals([])
    setCustomOffices([])
    localStorage.removeItem(STORAGE_KEY)
    if (user && syncBallot) {
      syncBallot({ choices: {}, proposals: [], customOffices: [] })
    }
  }

  const allOffices = [...DEFAULT_OFFICES, ...customOffices]
  const filledCount = Object.keys(choices).filter(k => choices[k]?.name).length
  const totalSlots = allOffices.length + proposals.length
  const decidedCount = filledCount + proposals.filter(p => p.vote).length

  // Build shareable text summary
  const summaryText = (() => {
    const lines = ['My Ballot Plan\n']
    allOffices.forEach(office => {
      const c = choices[office.id]
      if (c?.name) {
        lines.push(`${office.label}: ${c.name}${c.party ? ` (${c.party})` : ''}`)
      }
    })
    if (proposals.length > 0) {
      lines.push('\nBallot Proposals:')
      proposals.forEach(p => {
        if (p.vote) lines.push(`${p.title}: ${p.vote.toUpperCase()}`)
      })
    }
    lines.push('\nCreated with MyReps')
    return lines.join('\n')
  })()

  return (
    <div className="page-container ballot-page">
      <div className="ballot-header">
        <h2 className="page-title">My Ballot Plan</h2>
        <p className="page-subtitle">
          Plan your vote ahead of election day. Your choices are saved locally on your device.
        </p>
        {totalSlots > 0 && (
          <div className="ballot-progress">
            <div className="ballot-progress-bar">
              <div
                className="ballot-progress-fill"
                style={{ width: `${totalSlots > 0 ? (decidedCount / totalSlots) * 100 : 0}%` }}
              />
            </div>
            <span className="ballot-progress-text">
              {decidedCount} of {totalSlots} decided
            </span>
          </div>
        )}
      </div>

      {user && (
        <div className="ballot-cloud-status" aria-live="polite">
          {cloudStatus === 'saving' && (
            <span className="cloud-indicator cloud-saving">Syncing to cloud...</span>
          )}
          {cloudStatus === 'saved' && (
            <span className="cloud-indicator cloud-saved">Saved to cloud</span>
          )}
          {cloudStatus === 'error' && (
            <span className="cloud-indicator cloud-error">Sync failed — saved locally</span>
          )}
          {cloudStatus === 'idle' && (
            <span className="cloud-indicator cloud-idle">Cloud sync active</span>
          )}
        </div>
      )}

      <FounderQuoteBanner quotes={VOTING_QUOTES} />

      {/* ── Office Selections ── */}
      <section className="ballot-section">
        <h3 className="ballot-section-title">Offices</h3>
        <div className="ballot-offices">
          {allOffices.map(office => (
            <BallotOffice
              key={office.id}
              office={office}
              choice={choices[office.id]}
              onUpdate={updateChoice}
            />
          ))}
        </div>

        {/* Add custom office */}
        <div className="ballot-add-row">
          <input
            type="text"
            className="ballot-input ballot-add-input"
            placeholder="Add a custom office..."
            value={newOfficeName}
            onChange={e => setNewOfficeName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') addCustomOffice() }}
          />
          <button className="ballot-add-btn" onClick={addCustomOffice} type="button">
            Add
          </button>
        </div>
      </section>

      {/* ── Ballot Proposals ── */}
      <section className="ballot-section">
        <h3 className="ballot-section-title">Ballot Proposals</h3>
        {proposals.length > 0 && (
          <div className="ballot-proposals">
            {proposals.map(p => (
              <ProposalItem key={p.id} proposal={p} onToggle={toggleProposalVote} />
            ))}
          </div>
        )}
        {proposals.length === 0 && (
          <p className="ballot-empty-note">
            No proposals added yet. Add ballot measures and proposals below.
          </p>
        )}

        <div className="ballot-add-proposal">
          <input
            type="text"
            className="ballot-input"
            placeholder="Proposal title"
            value={newProposalTitle}
            onChange={e => setNewProposalTitle(e.target.value)}
          />
          <input
            type="text"
            className="ballot-input"
            placeholder="Description (optional)"
            value={newProposalDesc}
            onChange={e => setNewProposalDesc(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') addProposal() }}
          />
          <button className="ballot-add-btn" onClick={addProposal} type="button">
            Add Proposal
          </button>
        </div>
      </section>

      {/* ── Actions ── */}
      <div className="ballot-actions">
        <ShareButton
          title="My Ballot Plan"
          text={summaryText}
          className="ballot-share-btn"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          Share Ballot Plan
        </ShareButton>
        {decidedCount > 0 && (
          <button className="ballot-clear-all" onClick={clearAll} type="button">
            Clear All Choices
          </button>
        )}
      </div>

      <div className="ballot-disclaimer">
        <p>
          {user
            ? 'Your ballot plan is saved to your account and synced across devices.'
            : 'Your ballot plan is stored only on this device. Sign in to sync across devices.'}
          {' '}Take a screenshot or share your plan before heading to the polls.
        </p>
      </div>
    </div>
  )
}
