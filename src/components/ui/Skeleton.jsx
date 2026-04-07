export function SkeletonCard() {
  return (
    <div className="member-card skeleton-card">
      <div className="skeleton skeleton-photo" />
      <div className="card-info">
        <div className="skeleton skeleton-line skeleton-line-name" />
        <div className="skeleton skeleton-line skeleton-line-role" />
      </div>
      <div className="skeleton skeleton-bar" />
    </div>
  )
}

export function SkeletonRow() {
  return (
    <div className="state-rep-card skeleton-row">
      <div className="skeleton skeleton-circle" />
      <div className="state-rep-info" style={{ flexDirection: 'row', gap: '0.5rem' }}>
        <div className="skeleton skeleton-line skeleton-line-name" style={{ flex: 1 }} />
        <div className="skeleton skeleton-line skeleton-line-role" style={{ flex: 0.6 }} />
      </div>
    </div>
  )
}

export function SkeletonGrid({ count = 8 }) {
  return (
    <div className="member-grid">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export function SkeletonList({ count = 6 }) {
  return (
    <div className="state-rep-list">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonRow key={i} />
      ))}
    </div>
  )
}
