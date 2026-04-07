import { useState } from 'react'

function deriveBillStatus(action) {
  if (!action) return { label: 'Introduced', cls: 'status-introduced' }
  const a = action.toLowerCase()
  if (a.includes('became public law') || a.includes('signed by president')) return { label: 'Signed into Law', cls: 'status-law' }
  if (a.includes('passed senate') && a.includes('passed house')) return { label: 'Passed Congress', cls: 'status-passed' }
  if (a.includes('passed senate')) return { label: 'Passed Senate', cls: 'status-passed' }
  if (a.includes('passed house') || a.includes('passed/agreed to in house')) return { label: 'Passed House', cls: 'status-passed' }
  if (a.includes('cloture') || a.includes('floor')) return { label: 'Floor Action', cls: 'status-committee' }
  if (a.includes('reported') || a.includes('ordered to be reported')) return { label: 'Reported', cls: 'status-committee' }
  if (a.includes('committee') || a.includes('referred to')) return { label: 'In Committee', cls: 'status-committee' }
  return { label: 'Introduced', cls: 'status-introduced' }
}

export default function VotingRecord({ legislation, loading, error }) {
  const [expanded, setExpanded] = useState({})

  if (loading) return <p className="loading-text">Loading legislative activity...</p>
  if (error) return <p className="error-text">Could not load legislation.</p>
  if (!legislation?.length) return <p className="empty-text">No legislation found.</p>

  function toggleExpand(i) {
    setExpanded(prev => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <div className="legislation-list">
      <p className="legislation-summary">{legislation.length} bill{legislation.length !== 1 ? 's' : ''}</p>
      <ul className="vote-list">
        {legislation.map((bill, i) => {
          const billId = [bill.type, bill.number].filter(Boolean).join('\u00a0')
          const title = bill.title ?? 'Untitled'
          const date = bill.introducedDate
            ? new Date(bill.introducedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
            : null
          const action = bill.latestAction?.text
          const status = deriveBillStatus(action)
          const isExpanded = expanded[i]

          return (
            <li key={i} className={`vote-item ${isExpanded ? 'vote-item-expanded' : ''}`}>
              <button
                className="vote-item-toggle"
                onClick={() => toggleExpand(i)}
                aria-expanded={isExpanded}
                aria-label={`${billId}: ${title}`}
              >
                <div className="vote-header">
                  {billId && <span className="bill-id">{billId}</span>}
                  <span className={`bill-status ${status.cls}`}>{status.label}</span>
                  {date && <span className="bill-date">{date}</span>}
                </div>
                <p className="bill-title">
                  {isExpanded ? title : (title.length > 100 ? title.slice(0, 100) + '…' : title)}
                </p>
                <span className="vote-expand-icon" aria-hidden="true">{isExpanded ? '▲' : '▼'}</span>
              </button>
              {isExpanded && action && (
                <div className="vote-detail">
                  <p className="bill-action"><strong>Latest action:</strong> {action}</p>
                  {bill.policyArea?.name && (
                    <p className="bill-policy"><strong>Policy area:</strong> {bill.policyArea.name}</p>
                  )}
                  {bill.congress && (
                    <p className="bill-congress">{bill.congress}th Congress</p>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
