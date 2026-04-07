import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import {
  FOUNDING_DOCUMENTS,
  AMENDMENTS,
  HISTORIC_DOCUMENTS,
  STATE_CONSTITUTIONS,
} from '../data/civicDocuments'

function DocumentCard({ doc }) {
  return (
    <a
      className="docs-card"
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="docs-card-header">
        <h3 className="docs-card-title">{doc.title}</h3>
        {doc.date && <span className="docs-card-date">{doc.date}</span>}
      </div>
      <p className="docs-card-desc">{doc.description}</p>
      {doc.excerpt && (
        <blockquote className="docs-card-excerpt">"{doc.excerpt}"</blockquote>
      )}
      {doc.text && (
        <blockquote className="docs-card-excerpt">"{doc.text}"</blockquote>
      )}
      {doc.articles && (
        <div className="docs-articles-list">
          {doc.articles.map(a => (
            <div key={a.number} className="docs-article-row">
              <span className="docs-article-num">Article {a.number}</span>
              <span className="docs-article-name">{a.title}</span>
            </div>
          ))}
        </div>
      )}
      {doc.source && (
        <span className="docs-card-source">
          Read full text at {doc.source} →
        </span>
      )}
    </a>
  )
}

function AmendmentRow({ amendment }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="docs-amendment">
      <button
        className="docs-amendment-btn"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="docs-amendment-number">{amendment.number}</span>
        <span className="docs-amendment-title-text">{amendment.title}</span>
        <span className="docs-amendment-date">{amendment.ratified}</span>
        <span className="docs-amendment-toggle">{open ? '\u2212' : '+'}</span>
      </button>
      {open && (
        <p className="docs-amendment-summary">{amendment.summary}</p>
      )}
    </div>
  )
}

export default function DocumentsView() {
  usePageTitle('Founding Documents & Civic Texts', 'Read and explore America\'s founding documents and civic texts')
  const [filter, setFilter] = useState('')
  const lowerFilter = filter.toLowerCase()

  const filteredAmendments = lowerFilter
    ? AMENDMENTS.filter(a =>
        a.title.toLowerCase().includes(lowerFilter) ||
        a.summary.toLowerCase().includes(lowerFilter) ||
        String(a.number).includes(lowerFilter)
      )
    : AMENDMENTS

  const billOfRights = filteredAmendments.filter(a => a.billOfRights)
  const laterAmendments = filteredAmendments.filter(a => !a.billOfRights)

  return (
    <div className="docs-page">
      <div className="docs-hero">
        <h1 className="docs-hero-title">Founding Documents & Civic Texts</h1>
        <p className="docs-hero-sub">
          The essential documents of American democracy — from the nation's founding
          through every amendment to the Constitution.
        </p>
      </div>

      {/* Founding Documents */}
      <section className="docs-section" id="founding">
        <h2 className="docs-section-title">Founding Documents</h2>
        <div className="docs-cards-grid">
          {FOUNDING_DOCUMENTS.map(doc => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </section>

      {/* Amendments */}
      <section className="docs-section" id="amendments">
        <div className="docs-section-top">
          <h2 className="docs-section-title">Constitutional Amendments</h2>
          <a
            className="docs-ext-link"
            href="https://www.archives.gov/founding-docs/amendments-11-27"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full text at National Archives →
          </a>
        </div>

        <div className="docs-filter">
          <input
            type="text"
            className="docs-filter-input"
            placeholder="Filter amendments..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
          {filter && (
            <button
              className="docs-filter-clear"
              onClick={() => setFilter('')}
              type="button"
            >
              Clear
            </button>
          )}
        </div>

        {billOfRights.length > 0 && (
          <div className="docs-amendment-group">
            <h3 className="docs-group-title">The Bill of Rights (1-10)</h3>
            <p className="docs-group-desc">
              Ratified December 15, 1791 — the first ten amendments guaranteeing fundamental rights and freedoms.
            </p>
            {billOfRights.map(a => (
              <AmendmentRow key={a.number} amendment={a} />
            ))}
          </div>
        )}

        {laterAmendments.length > 0 && (
          <div className="docs-amendment-group">
            <h3 className="docs-group-title">Later Amendments (11-27)</h3>
            {laterAmendments.map(a => (
              <AmendmentRow key={a.number} amendment={a} />
            ))}
          </div>
        )}

        {filteredAmendments.length === 0 && (
          <p className="docs-no-results">No amendments match "{filter}"</p>
        )}
      </section>

      {/* Historic Documents */}
      <section className="docs-section" id="historic">
        <h2 className="docs-section-title">Historic Documents & Speeches</h2>
        <div className="docs-cards-grid">
          {HISTORIC_DOCUMENTS.map(doc => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </section>

      {/* State Constitutions */}
      <section className="docs-section" id="states">
        <h2 className="docs-section-title">State Constitutions</h2>
        <p className="docs-section-desc">
          Every state has its own constitution. Click any state to read its full text.
        </p>
        <div className="docs-state-grid">
          {STATE_CONSTITUTIONS.map(sc => (
            <a
              key={sc.code}
              className="docs-state-link"
              href={sc.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="docs-state-code">{sc.code}</span>
              <span className="docs-state-name">{sc.state}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
