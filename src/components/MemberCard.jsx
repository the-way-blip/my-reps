import React from 'react'
import { REP_ALIGNMENT, gradeColor } from '../data/foundingValues'

const PHOTO_FALLBACK = id =>
  `https://unitedstates.github.io/images/congress/225x275/${id}.jpg`

function partyInfo(partyName) {
  if (!partyName) return { label: 'I', cls: 'party-i', full: 'Independent' }
  const p = partyName.toLowerCase()
  if (p.includes('democrat')) return { label: 'D', cls: 'party-d', full: 'Democrat' }
  if (p.includes('republican')) return { label: 'R', cls: 'party-r', full: 'Republican' }
  return { label: 'I', cls: 'party-i', full: partyName }
}

function getInitials(name) {
  if (!name) return '?'
  const parts = name.replace(/,.*/, '').trim().split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  return parts[0][0]?.toUpperCase() || '?'
}

const MemberCard = React.memo(function MemberCard({ member, onClick, onMouseEnter, onMouseLeave, highlighted }) {
  const photoUrl = member.depiction?.imageUrl ?? PHOTO_FALLBACK(member.bioguideId)
  const party = partyInfo(member.partyName)
  const districtLabel = member.district ? `District ${member.district}` : 'U.S. Senator'
  const alignKey = member.bioguideId || member.sourceId || member.id || ('judge-' + member.name?.toLowerCase().replace(/[^a-z]+/g, '-'))
  const alignment = REP_ALIGNMENT[alignKey]

  return (
    <button className={`member-card${highlighted ? ' member-card-highlighted' : ''}`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} aria-label={`View details for ${member.name}`}>
      <div className="card-photo-wrap">
        <img
          src={photoUrl}
          alt={member.name}
          className="card-photo"
          loading="lazy"
          onError={e => {
            e.target.onerror = null
            e.target.style.display = 'none'
            e.target.nextSibling?.classList?.remove('card-initials-hidden')
          }}
        />
        <span className="card-initials-hidden">
          <div className={`card-initials ${party.cls}`}>{getInitials(member.name)}</div>
        </span>
        <span className={`party-badge ${party.cls}`} title={party.full} aria-hidden="true">
          {party.label}
        </span>
        {alignment && (
          <span
            className="alignment-badge"
            style={{ background: gradeColor(alignment.overall) }}
            title={`Constitutional Alignment: ${alignment.overall}`}
            aria-hidden="true"
          >
            {alignment.overall}
          </span>
        )}
      </div>
      <div className="card-info">
        <h3 className="card-name">{member.name}</h3>
        <p className="card-district">{districtLabel}</p>
        <p className={`card-party ${party.cls}`}>{party.full}</p>
      </div>
    </button>
  )
})

export default MemberCard
