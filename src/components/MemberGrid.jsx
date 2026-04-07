import MemberCard from './MemberCard'

export default function MemberGrid({ members, onSelect, onHoverDistrict, highlightDistrict }) {
  if (!members.length) {
    return <p className="empty-state" role="status">No members found for this selection.</p>
  }

  return (
    <div className="member-grid" role="region" aria-label={`${members.length} representatives`}>
      {members.map(m => (
        <MemberCard
          key={m.bioguideId}
          member={m}
          onClick={() => onSelect(m)}
          onMouseEnter={() => m.district != null && onHoverDistrict?.(m.district)}
          onMouseLeave={() => m.district != null && onHoverDistrict?.(null)}
          highlighted={m.district != null && m.district === highlightDistrict}
        />
      ))}
    </div>
  )
}
