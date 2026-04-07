import { useState } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import {
  FOUNDING_DOCUMENTS,
  AMENDMENTS,
  HISTORIC_DOCUMENTS,
  STATE_CONSTITUTIONS,
} from '../data/civicDocuments'
import {
  FOUNDING_PRINCIPLES,
  FOUNDERS_QUOTES,
  SCORECARD_ISSUES,
} from '../data/foundingValues'

function PrincipleCard({ principle }) {
  return (
    <div className="principle-card">
      <h3 className="principle-title">{principle.title}</h3>
      <p className="principle-summary">{principle.summary}</p>
      <blockquote className="principle-quote">
        "{principle.quote}"
      </blockquote>
      <cite className="principle-source">— {principle.source}</cite>
    </div>
  )
}

function QuoteCard({ item }) {
  return (
    <div className="founder-quote-card">
      <blockquote className="founder-quote-text">
        "{item.quote}"
      </blockquote>
      <div className="founder-quote-attr">
        <strong className="founder-quote-author">{item.author}</strong>
        <span className="founder-quote-title">{item.title}</span>
      </div>
    </div>
  )
}

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
          Read full text at {doc.source} &rarr;
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

function IssueCard({ issue }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`issue-card ${expanded ? 'issue-card--expanded' : ''}`}>
      <button
        className="issue-card-header"
        onClick={() => setExpanded(!expanded)}
        type="button"
      >
        <div className="issue-card-header-text">
          <h4 className="issue-card-label">{issue.label}</h4>
          <p className="issue-card-desc">{issue.description}</p>
        </div>
        <span className={`issue-card-chevron ${expanded ? 'issue-card-chevron--open' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className={`issue-card-body ${expanded ? 'issue-card-body--open' : ''}`}>
        <div className="issue-card-body-inner">
          {issue.deepDive && (
            <div className="issue-deep-dive">
              <h5 className="issue-section-heading">Deep Dive</h5>
              {issue.deepDive.split('\n\n').map((para, i) => (
                <p key={i} className="issue-deep-dive-para">{para}</p>
              ))}
            </div>
          )}
          {issue.constitutionalBasis && (
            <div className="issue-constitutional">
              <h5 className="issue-section-heading">Constitutional Basis</h5>
              <p className="issue-constitutional-text">{issue.constitutionalBasis}</p>
            </div>
          )}
          {issue.keyVotes && issue.keyVotes.length > 0 && (
            <div className="issue-key-votes">
              <h5 className="issue-section-heading">Key Votes & Actions</h5>
              <ul className="issue-list">
                {issue.keyVotes.map((vote, i) => (
                  <li key={i} className="issue-list-item">{vote}</li>
                ))}
              </ul>
            </div>
          )}
          {issue.scoringSources && issue.scoringSources.length > 0 && (
            <div className="issue-sources">
              <h5 className="issue-section-heading">Scoring Sources</h5>
              <ul className="issue-list">
                {issue.scoringSources.map((src, i) => (
                  <li key={i} className="issue-list-item">{src}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function FoundingView() {
  usePageTitle('Our Founding & Values', 'America\'s founding documents, principles, and values')
  const [filter, setFilter] = useState('')
  const [activeSection, setActiveSection] = useState('values')
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

  const sections = [
    { id: 'values', label: 'Our Values' },
    { id: 'documents', label: 'Documents' },
    { id: 'amendments', label: 'Amendments' },
    { id: 'quotes', label: 'Founders\' Words' },
    { id: 'states', label: 'State Constitutions' },
  ]

  return (
    <div className="docs-page founding-page">
      {/* Hero */}
      <div className="docs-hero founding-hero">
        <h1 className="docs-hero-title">Our Founding & Values</h1>
        <p className="docs-hero-sub">
          America was founded on the principle that our rights come from God, not government.
          The Constitution was designed by men who understood that liberty requires virtue,
          and that a free people must be a moral people.
        </p>
        <p className="founding-hero-verse">
          "Blessed is the nation whose God is the Lord" — Psalm 33:12
        </p>
        <Link to="/analytics" className="analytics-hero-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          View Alignment Analytics
        </Link>
      </div>

      {/* Section tabs */}
      <div className="founding-tabs">
        {sections.map(s => (
          <button
            key={s.id}
            className={`founding-tab ${activeSection === s.id ? 'active' : ''}`}
            onClick={() => { setActiveSection(s.id); setFilter('') }}
            type="button"
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Our Values */}
      {activeSection === 'values' && (
        <>
          <section className="docs-section founding-section" id="principles">
            <h2 className="docs-section-title">Founding Principles</h2>
            <p className="docs-section-desc">
              These are the bedrock principles upon which America was built — principles
              rooted in Scripture and natural law that the Founders enshrined in our
              founding documents.
            </p>
            <div className="principles-grid">
              {FOUNDING_PRINCIPLES.map(p => (
                <PrincipleCard key={p.id} principle={p} />
              ))}
            </div>
          </section>

          <section className="docs-section founding-section" id="scorecard-info">
            <h2 className="docs-section-title">How We Score Representatives</h2>
            <p className="docs-section-desc">
              We evaluate elected officials based on their alignment with constitutional
              principles and Christian values. Each representative is scored on these
              key issues using data from Heritage Action, Family Research Council,
              NRA ratings, and key roll-call votes.
            </p>
            <div className="issues-grid">
              {SCORECARD_ISSUES.map(issue => (
                <IssueCard key={issue.id} issue={issue} />
              ))}
            </div>
            <div className="grade-legend">
              <h4 className="grade-legend-title">Grade Scale</h4>
              <div className="grade-legend-items">
                <span className="grade-item"><span className="grade-badge grade-a">A</span> Strongly Aligned</span>
                <span className="grade-item"><span className="grade-badge grade-b">B</span> Mostly Aligned</span>
                <span className="grade-item"><span className="grade-badge grade-c">C</span> Mixed Record</span>
                <span className="grade-item"><span className="grade-badge grade-d">D</span> Mostly Opposed</span>
                <span className="grade-item"><span className="grade-badge grade-f">F</span> Strongly Opposed</span>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Documents */}
      {activeSection === 'documents' && (
        <>
          <section className="docs-section" id="founding">
            <h2 className="docs-section-title">Founding Documents</h2>
            <div className="docs-cards-grid">
              {FOUNDING_DOCUMENTS.map(doc => (
                <DocumentCard key={doc.id} doc={doc} />
              ))}
            </div>
          </section>

          <section className="docs-section" id="historic">
            <h2 className="docs-section-title">Historic Documents & Speeches</h2>
            <div className="docs-cards-grid">
              {HISTORIC_DOCUMENTS.map(doc => (
                <DocumentCard key={doc.id} doc={doc} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Amendments */}
      {activeSection === 'amendments' && (
        <section className="docs-section" id="amendments">
          <div className="docs-section-top">
            <h2 className="docs-section-title">Constitutional Amendments</h2>
            <a
              className="docs-ext-link"
              href="https://www.archives.gov/founding-docs/amendments-11-27"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full text at National Archives &rarr;
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
      )}

      {/* Founders' Quotes */}
      {activeSection === 'quotes' && (
        <section className="docs-section founding-section" id="quotes">
          <h2 className="docs-section-title">In Their Own Words</h2>
          <p className="docs-section-desc">
            The men who founded this nation were clear about the role of God, morality,
            and Christian principles in sustaining a free republic.
          </p>
          <div className="founders-quotes-grid">
            {FOUNDERS_QUOTES.map((q, i) => (
              <QuoteCard key={i} item={q} />
            ))}
          </div>
        </section>
      )}

      {/* State Constitutions */}
      {activeSection === 'states' && (
        <section className="docs-section" id="states">
          <h2 className="docs-section-title">State Constitutions</h2>
          <p className="docs-section-desc">
            Every state has its own constitution. Many explicitly acknowledge God and
            invoke His blessings. Click any state to read its full text.
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
      )}
    </div>
  )
}
