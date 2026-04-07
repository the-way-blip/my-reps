import React from 'react'
import ShareButton from './ui/ShareButton'
import { REP_ALIGNMENT, gradeColor } from '../data/foundingValues'

function partyClass(party) {
  if (!party) return 'party-i'
  const p = party.toLowerCase()
  if (p.includes('democrat')) return 'party-d'
  if (p.includes('republican')) return 'party-r'
  return 'party-i'
}

function partyLetter(party) {
  if (!party) return 'NP'
  const p = party.toLowerCase()
  if (p.includes('democrat')) return 'D'
  if (p.includes('republican')) return 'R'
  if (p.includes('nonpartisan') || p.includes('non-partisan')) return 'NP'
  return 'I'
}

const StateRepCard = React.memo(function StateRepCard({ rep, onSelect }) {
  return (
    <div
      className="state-rep-card"
      onClick={() => onSelect(rep)}
      role="button"
      tabIndex={0}
      aria-label={`${rep.name}, ${rep.chamber} District ${rep.district}, ${rep.party || 'Nonpartisan'}`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(rep) } }}
    >
      <div className="state-rep-photo-wrap">
        {rep.photoUrl ? (
          <img
            src={rep.photoUrl}
            alt={rep.name}
            className="state-rep-photo"
            loading="lazy"
            onError={e => { e.target.onerror = null; e.target.src = '/placeholder-avatar.svg' }}
          />
        ) : (
          <img src="/placeholder-avatar.svg" alt="" className="state-rep-photo" />
        )}
        <span className={`party-badge ${partyClass(rep.party)}`}>
          {partyLetter(rep.party)}
        </span>
        {(() => {
          const alignKey = rep.sourceId || rep.id
          const alignment = alignKey && REP_ALIGNMENT[alignKey]
          if (!alignment) return null
          return (
            <span className="alignment-badge" style={{ background: gradeColor(alignment.overall) }}>
              {alignment.overall}
            </span>
          )
        })()}
      </div>

      <div className="state-rep-info">
        <span className="state-rep-name">{rep.name}</span>
        <span className="state-rep-detail">
          {rep.chamber} &middot; District {rep.district}
        </span>
        <span className={`state-rep-party ${partyClass(rep.party)}`}>
          {rep.party || 'Nonpartisan'}
        </span>
      </div>

      <ShareButton
        title={rep.name}
        text={`${rep.name} — ${rep.chamber}, District ${rep.district} (${rep.party || 'Nonpartisan'})`}
        className="state-rep-share"
      />
    </div>
  )
})

export default function StateRepGrid({ reps = [], onSelect }) {
  if (reps.length === 0) {
    return (
      <div className="empty-state-card">
        <h3>State Legislators</h3>
        <p>State legislator data is temporarily unavailable. This may be due to API rate limits — please try again later.</p>
      </div>
    )
  }

  return (
    <div className="state-rep-list" role="list" aria-label="State legislators">
      {reps.map(rep => (
        <StateRepCard key={rep.id} rep={rep} onSelect={onSelect} />
      ))}
    </div>
  )
}
