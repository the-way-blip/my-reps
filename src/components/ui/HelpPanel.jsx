import { useState, useMemo, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

/* ── FAQ data ── */
const FAQS = [
  // Getting Started
  {
    category: 'Getting Started',
    question: 'What is Of For & By The People?',
    answer: 'A free civic toolkit for conservative voters. Research candidates, grade your representatives, and walk into every election informed. We evaluate candidates on alignment with Christian principles and Constitutional values.',
    keywords: ['about', 'what', 'platform', 'mission', 'purpose'],
  },
  {
    category: 'Getting Started',
    question: 'Is this really free?',
    answer: 'Yes — every tool is free forever. No paywalls, no premium tiers, no credit card required. Informed voters strengthen our republic.',
    keywords: ['free', 'cost', 'price', 'pay', 'subscription'],
  },
  {
    category: 'Getting Started',
    question: 'How do I get started?',
    answer: 'Create a free account, then enter your address. You\'ll immediately see your ballot with graded candidates, your elected representatives, and more.',
    keywords: ['start', 'begin', 'setup', 'new', 'account'],
  },

  // Build My Ballot
  {
    category: 'Build My Ballot',
    question: 'How does Build My Ballot work?',
    answer: 'Enter your address and we show you every race on your upcoming ballot. Each candidate is graded A through F on six issue areas: protection of unborn life, marriage & family, religious liberty, Second Amendment, limited government, and fiscal responsibility.',
    keywords: ['ballot', 'vote', 'election', 'candidate', 'race'],
  },
  {
    category: 'Build My Ballot',
    question: 'How are candidates graded?',
    answer: 'Every candidate is evaluated on a 6-issue rubric using voting records, interest group scorecards from 30+ conservative organizations, questionnaire responses, endorsements, and public statements. Voting records carry the most weight. See our full methodology page for details.',
    keywords: ['grade', 'score', 'rating', 'evaluate', 'methodology', 'rubric'],
    link: { text: 'View full methodology', to: '/methodology' },
  },
  {
    category: 'Build My Ballot',
    question: 'What do the letter grades mean?',
    answer: 'A = Strong alignment with conservative/Christian values. B = Mostly aligned but limited record or minor gaps. C = Mixed or moderate positions. D = Mostly opposed. F = Actively works against these values. A null grade means insufficient public information.',
    keywords: ['grade', 'letter', 'A', 'B', 'C', 'D', 'F', 'scale', 'meaning'],
  },
  {
    category: 'Build My Ballot',
    question: 'What is the data confidence indicator?',
    answer: 'The signal-strength bars next to each grade show how much evidence backs the score. "Extensive Record" means 4+ scorecards from 3+ organizations. "Minimal Record" means the grade is based on stated positions only, with no external ratings found.',
    keywords: ['confidence', 'evidence', 'data', 'bars', 'signal', 'record', 'indicator'],
  },
  {
    category: 'Build My Ballot',
    question: 'Can I save and print my ballot picks?',
    answer: 'Yes. Select your preferred candidate in each race, then use the print/save feature to create a ballot plan you can bring to the polls on election day.',
    keywords: ['save', 'print', 'ballot', 'picks', 'plan', 'election day'],
  },
  {
    category: 'Build My Ballot',
    question: 'What elections are covered?',
    answer: 'We currently cover the Michigan August 2026 primary election with full candidate data. More states and elections are being added. Check the State Coverage page to see what\'s available.',
    keywords: ['election', 'state', 'coverage', 'michigan', 'primary', 'which'],
  },
  {
    category: 'Build My Ballot',
    question: 'How do I compare candidates?',
    answer: 'Tap any candidate card to see their full profile including per-issue grades, justifications, endorsements, and background. Use the side-by-side comparison within each race to evaluate candidates against each other.',
    keywords: ['compare', 'side by side', 'versus', 'difference', 'candidate'],
  },

  // Find My Reps
  {
    category: 'Find My Reps',
    question: 'How does Find My Reps work?',
    answer: 'Enter your address and we show you every elected official who represents you — U.S. Senators, House member, state legislators, county commissioners, city council, and school board. You can see their party, contact info, and more.',
    keywords: ['reps', 'representative', 'who represents', 'official', 'elected'],
  },
  {
    category: 'Find My Reps',
    question: 'Can I contact my representatives?',
    answer: 'Yes. Each representative card shows their email, phone number, and official website (when available). Tap the Email, Call, or Website buttons to reach out directly.',
    keywords: ['contact', 'email', 'phone', 'call', 'reach', 'write'],
  },
  {
    category: 'Find My Reps',
    question: 'What levels of government are shown?',
    answer: 'Federal (U.S. Senators and House members), statewide officials (Governor, AG, SOS), state legislature (State Senate and House), county government, city/township government, and school boards. Coverage varies by state.',
    keywords: ['level', 'federal', 'state', 'local', 'county', 'city', 'school'],
  },

  // Founding Documents
  {
    category: 'Founding Documents',
    question: 'What\'s in the Founding Documents section?',
    answer: 'The full text of the U.S. Constitution, all 27 amendments, and key founding-era documents. We connect founding principles to the issues we grade candidates on — so you can see how today\'s leaders measure up to the founders\' vision.',
    keywords: ['founding', 'constitution', 'amendment', 'document', 'founders', 'history'],
  },

  // Analytics
  {
    category: 'Analytics',
    question: 'What does Alignment Analytics show?',
    answer: 'A big-picture view of how candidates score across all issue areas. See grade distributions, per-issue breakdowns, party comparisons, and federal vs. state performance — all in clear visual charts.',
    keywords: ['analytics', 'chart', 'data', 'distribution', 'statistics', 'overview'],
  },

  // Account & Settings
  {
    category: 'Account & Settings',
    question: 'How do I change my address?',
    answer: 'You can update your address anytime from the main Ballot page or Find My Reps page. Just enter a new address in the search bar at the top.',
    keywords: ['address', 'change', 'update', 'location', 'move'],
  },
  {
    category: 'Account & Settings',
    question: 'How can I manage my data?',
    answer: 'Go to Settings to clear saved data, manage notifications, or update your preferences. Your ballot selections and preferences are stored so you can pick up where you left off.',
    keywords: ['data', 'clear', 'delete', 'settings', 'privacy', 'manage'],
  },
  {
    category: 'Account & Settings',
    question: 'Is my data private?',
    answer: 'Yes. Your address and ballot selections are stored locally and in your secure account. We don\'t sell your data or share it with third parties. See our Privacy Policy for full details.',
    keywords: ['private', 'privacy', 'data', 'secure', 'share', 'sell'],
    link: { text: 'Read Privacy Policy', to: '/privacy' },
  },
  {
    category: 'Account & Settings',
    question: 'How do I switch between light and dark mode?',
    answer: 'Go to Settings and toggle the Theme option. You can choose Light, Dark, or System (which follows your device\'s preference).',
    keywords: ['dark', 'light', 'theme', 'mode', 'appearance', 'color'],
  },

  // Transparency
  {
    category: 'Transparency',
    question: 'Who is behind this platform?',
    answer: 'Of For & By The People is an independent civic education platform. We are not paid for by any candidate or candidate\'s committee, and we are not affiliated with any political party or government entity.',
    keywords: ['who', 'behind', 'organization', 'independent', 'party', 'affiliated'],
  },
  {
    category: 'Transparency',
    question: 'Are grades biased toward one party?',
    answer: 'Republicans and Democrats are graded on the exact same 6-issue rubric. We evaluate positions, not party labels. However, our rubric is explicitly built around conservative Christian and Constitutional values — candidates who hold those positions will naturally score higher.',
    keywords: ['bias', 'party', 'fair', 'republican', 'democrat', 'objective', 'neutral'],
  },
  {
    category: 'Transparency',
    question: 'Where does the grading data come from?',
    answer: 'Voting records, scorecards from 30+ conservative organizations (Heritage Action, NRA-PVF, FRC Action, SBA Pro-Life America, Club for Growth, etc.), candidate questionnaires, campaign websites, endorsements, and public statements.',
    keywords: ['source', 'data', 'where', 'come from', 'organization', 'scorecard'],
    link: { text: 'View full methodology', to: '/methodology' },
  },
]

const CATEGORIES = [...new Set(FAQS.map(f => f.category))]

export default function HelpPanel() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [expandedIdx, setExpandedIdx] = useState(null)
  const searchRef = useRef(null)
  const panelRef = useRef(null)

  // Focus search on open
  useEffect(() => {
    if (open && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 150)
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = e => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  // Filter FAQs
  const filtered = useMemo(() => {
    if (!search.trim()) return FAQS
    const terms = search.toLowerCase().split(/\s+/)
    return FAQS.filter(faq => {
      const haystack = `${faq.question} ${faq.answer} ${faq.category} ${faq.keywords.join(' ')}`.toLowerCase()
      return terms.every(t => haystack.includes(t))
    })
  }, [search])

  // Group filtered FAQs by category
  const grouped = useMemo(() => {
    const groups = {}
    filtered.forEach(faq => {
      if (!groups[faq.category]) groups[faq.category] = []
      groups[faq.category].push(faq)
    })
    return groups
  }, [filtered])

  const toggleFaq = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx)
  }

  return (
    <>
      {/* Floating help button */}
      <button
        className="help-fab"
        onClick={() => setOpen(true)}
        aria-label="Help"
        title="Help & FAQs"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <path d="M12 17h.01"/>
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <div className="help-backdrop" onClick={() => setOpen(false)} />
      )}

      {/* Panel */}
      <div
        className={`help-panel${open ? ' help-panel-open' : ''}`}
        ref={panelRef}
        role="dialog"
        aria-label="Help & FAQs"
        aria-hidden={!open}
      >
        {/* Panel header */}
        <div className="help-panel-header">
          <h2 className="help-panel-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <path d="M12 17h.01"/>
            </svg>
            Help & FAQs
          </h2>
          <button className="help-panel-close" onClick={() => setOpen(false)} aria-label="Close help">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="help-search-wrap">
          <svg className="help-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            ref={searchRef}
            type="text"
            className="help-search-input"
            placeholder="Search help topics..."
            value={search}
            onChange={e => { setSearch(e.target.value); setExpandedIdx(null) }}
          />
          {search && (
            <button
              className="help-search-clear"
              onClick={() => { setSearch(''); setExpandedIdx(null) }}
              aria-label="Clear search"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>

        {/* Results count when searching */}
        {search && (
          <div className="help-results-count">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{search}&rdquo;
          </div>
        )}

        {/* FAQ list */}
        <div className="help-faq-list">
          {filtered.length === 0 && (
            <div className="help-no-results">
              <p>No results found. Try different keywords or browse our detailed pages:</p>
              <div className="help-no-results-links">
                <Link to="/about" onClick={() => setOpen(false)}>About the Platform</Link>
                <Link to="/methodology" onClick={() => setOpen(false)}>Grading Methodology</Link>
              </div>
            </div>
          )}

          {Object.entries(grouped).map(([category, faqs]) => (
            <div key={category} className="help-category">
              <h3 className="help-category-title">{category}</h3>
              {faqs.map((faq) => {
                const globalIdx = FAQS.indexOf(faq)
                const isOpen = expandedIdx === globalIdx
                return (
                  <div key={globalIdx} className="help-faq-item">
                    <button
                      className={`help-faq-question${isOpen ? ' open' : ''}`}
                      onClick={() => toggleFaq(globalIdx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`help-faq-chevron${isOpen ? ' open' : ''}`}>
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="help-faq-answer">
                        <p>{faq.answer}</p>
                        {faq.link && (
                          <Link
                            to={faq.link.to}
                            className="help-faq-link"
                            onClick={() => setOpen(false)}
                          >
                            {faq.link.text} &rarr;
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Footer links */}
        <div className="help-panel-footer">
          <Link to="/about" className="help-footer-link" onClick={() => setOpen(false)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            About the Platform
          </Link>
          <Link to="/methodology" className="help-footer-link" onClick={() => setOpen(false)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Grading Methodology
          </Link>
        </div>
      </div>
    </>
  )
}
