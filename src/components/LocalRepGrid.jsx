import React from 'react'
import ShareButton from './ui/ShareButton'

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

const LEVEL_ORDER = ['federal', 'state', 'local', 'other']
const LEVEL_LABELS = {
  federal: 'Federal',
  state: 'State',
  local: 'Local Government',
  other: 'Other',
}

const LocalRepCard = React.memo(function LocalRepCard({ rep, onSelect }) {
  return (
    <div
      className="state-rep-card"
      onClick={() => onSelect(rep)}
      role="button"
      tabIndex={0}
      aria-label={`${rep.name}, ${rep.office}, ${rep.party || 'Nonpartisan'}`}
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
      </div>

      <div className="state-rep-info">
        <span className="state-rep-name">{rep.name}</span>
        <span className="state-rep-detail">{rep.office}</span>
        <span className={`state-rep-party ${partyClass(rep.party)}`}>
          {rep.party || 'Nonpartisan'}
        </span>
      </div>

      <ShareButton
        title={rep.name}
        text={`${rep.name} — ${rep.office} (${rep.party || 'Nonpartisan'})`}
        className="state-rep-share"
      />
    </div>
  )
})

export default function LocalRepGrid({ reps = [], onSelect, hasAddress }) {
  if (!hasAddress) {
    return (
      <div className="empty-state-card">
        <h3>Who Represents You?</h3>
        <p>Enter your address in the search bar to find all your elected officials — from the President down to your local city council.</p>
        <p className="detail-meta" style={{ marginTop: '0.5rem' }}>
          Try searching for your full street address (e.g., "123 Main St, Detroit, MI 48201")
        </p>
      </div>
    )
  }

  if (reps.length === 0) {
    return (
      <div className="empty-state-card">
        <h3>No Representatives Found</h3>
        <p>We couldn't find representative data for your address. Try a more specific street address including city, state, and zip code.</p>
      </div>
    )
  }

  // Group reps by level
  const grouped = {}
  for (const rep of reps) {
    const level = rep.level || 'other'
    if (!grouped[level]) grouped[level] = []
    grouped[level].push(rep)
  }

  return (
    <div className="my-reps-view">
      {LEVEL_ORDER.map(level => {
        const group = grouped[level]
        if (!group || group.length === 0) return null
        return (
          <div key={level} className="my-reps-group">
            <h3 className="my-reps-group-title">
              {LEVEL_LABELS[level]}
              <span className="my-reps-group-count">{group.length}</span>
            </h3>
            <div className="state-rep-list">
              {group.map(rep => (
                <LocalRepCard key={rep.id} rep={rep} onSelect={onSelect} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
