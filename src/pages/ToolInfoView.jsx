import { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from '../components/auth/AuthModal'

/* ── Tool data ── */
const TOOLS = {
  ballot: {
    name: 'Build My Ballot',
    tagline: 'Walk into every election prepared.',
    status: 'live',
    hero: 'Your personalized ballot plan — every race, every candidate, every choice.',
    description:
      'Build My Ballot takes the guesswork out of voting. Enter your Michigan address and instantly see every race on your upcoming ballot — from Governor and U.S. Senate down to county commissioners and local proposals. Research every candidate with values-based grades, detailed positions, and background information. Then pick your candidates, save your choices, and print a ballot plan to bring with you on election day.',
    features: [
      {
        title: 'Address-Based Ballot Lookup',
        desc: 'Enter your address and see the exact races and candidates on your ballot. No more surprises at the polling booth — know every race before you go.',
        icon: 'map',
      },
      {
        title: 'Candidate Grades (A–F)',
        desc: 'Every candidate receives a values alignment grade based on publicly available voting records, public statements, and policy positions. Quickly compare where candidates stand.',
        icon: 'grade',
      },
      {
        title: 'Side-by-Side Comparison',
        desc: 'Compare candidates within each race. See their grades, party affiliation, endorsements, and key positions all in one view so you can make informed decisions.',
        icon: 'compare',
      },
      {
        title: 'Printable Ballot Plan',
        desc: 'Once you\'ve made your picks, download a printable PDF ballot plan. Take it to the polls on election day so you never blank on a down-ballot race again.',
        icon: 'print',
      },
      {
        title: 'Election Countdown & Info',
        desc: 'See upcoming elections, key dates, registration deadlines, and early voting information. Never miss an election again.',
        icon: 'calendar',
      },
      {
        title: 'Local Proposals & Ballot Measures',
        desc: 'It\'s not just candidates — see proposals and ballot measures in your area with plain-language summaries so you understand what you\'re voting on.',
        icon: 'doc',
      },
    ],
    cta: 'Start Building Your Ballot',
  },
  reps: {
    name: 'Find My Reps',
    tagline: 'Know who represents you at every level.',
    status: 'live',
    hero: 'From your city council to the U.S. Senate — every elected official who represents you, in one place.',
    description:
      'Find My Reps connects you directly to the people who represent you in government. Enter your address and instantly see your elected officials at every level — federal, state, and local. View their photos, party affiliation, contact information, and how they align with founding American values. Democracy works best when citizens know who speaks for them.',
    features: [
      {
        title: 'All Levels of Government',
        desc: 'See your representatives at every level — U.S. Congress, state legislature, governor, attorney general, and more. One address, every level of representation.',
        icon: 'layers',
      },
      {
        title: 'Alignment Grades',
        desc: 'Each representative receives a values alignment grade showing how their voting record and positions align with founding principles. See the data behind every grade.',
        icon: 'grade',
      },
      {
        title: 'Contact Information',
        desc: 'Find phone numbers, office addresses, and websites for all your representatives. Make your voice heard — reach out directly to the people who represent you.',
        icon: 'contact',
      },
      {
        title: 'Voting Records',
        desc: 'See how your representatives have voted on key issues. Track their record over time and hold them accountable to the positions they campaigned on.',
        icon: 'vote',
      },
      {
        title: 'Committee Assignments',
        desc: 'Know which committees your representatives sit on and what policy areas they influence. Understanding committee roles helps you know who to contact about specific issues.',
        icon: 'committee',
      },
      {
        title: 'Party & Background Info',
        desc: 'View party affiliation, tenure in office, biographical details, and professional background for every representative. Know who\'s serving you.',
        icon: 'person',
      },
    ],
    cta: 'Find Your Representatives',
  },
  founding: {
    name: 'Founding Documents',
    tagline: 'The principles that started it all.',
    status: 'live',
    hero: 'Access America\'s founding documents, understand the principles behind them, and see how today\'s leaders measure up.',
    description:
      'The Founding Documents tool is your civic reference library. Read the full text of the U.S. Constitution, the Bill of Rights, all 27 amendments, and key historical documents that shaped American democracy. But it goes beyond just reading — we connect these founding principles to modern governance by showing how today\'s elected officials align with the values the founders established.',
    features: [
      {
        title: 'Full Constitutional Text',
        desc: 'Read the complete U.S. Constitution, including all 27 amendments, with clear formatting and section navigation. The supreme law of the land, at your fingertips.',
        icon: 'doc',
      },
      {
        title: 'Founding Principles',
        desc: 'Explore the core principles behind the founding — individual liberty, limited government, rule of law, separation of powers — with quotes directly from the founders.',
        icon: 'star',
      },
      {
        title: 'Scorecard Issues',
        desc: 'See the specific issues we use to grade elected officials. Each issue traces back to a founding principle, so you understand why it matters and how it\'s measured.',
        icon: 'grade',
      },
      {
        title: 'Historic Documents',
        desc: 'Beyond the Constitution — explore the Declaration of Independence, Federalist Papers excerpts, and other documents that shaped American governance.',
        icon: 'scroll',
      },
      {
        title: 'State Constitutions',
        desc: 'Access the Michigan state constitution and understand how state-level governance connects to the broader American system of federalism.',
        icon: 'state',
      },
      {
        title: 'Founders\' Quotes',
        desc: 'Read what Washington, Jefferson, Madison, Hamilton, and other founders actually said about the issues that still matter today. Context from the people who built the republic.',
        icon: 'quote',
      },
    ],
    cta: 'Explore Founding Documents',
  },
  community: {
    name: 'Community Pulse',
    tagline: 'See how your community plans to vote.',
    status: 'live',
    hero: 'Aggregated, anonymous insights into how Build My Ballot users are planning their votes.',
    description:
      'Community Pulse gives you a window into how other informed voters are thinking. See aggregated, anonymous data on which candidates are gaining traction, how support breaks down by party, and which races are the most competitive. This isn\'t a poll — it\'s real data from real users who\'ve done the research and made their picks. Use it as one more data point in your own decision-making.',
    features: [
      {
        title: 'Candidate Popularity',
        desc: 'See which candidates are most selected by Build My Ballot users in each race. Understand who\'s gaining traction among informed voters.',
        icon: 'chart',
      },
      {
        title: 'Party Breakdown',
        desc: 'View how selections break down by party across all races. See the overall lean of the Build My Ballot community and where crossover support exists.',
        icon: 'party',
      },
      {
        title: 'Race-by-Race Data',
        desc: 'Drill into individual races to see detailed selection data. From governor to county commissioner, see how the community is planning to vote at every level.',
        icon: 'layers',
      },
      {
        title: 'State Filtering',
        desc: 'Filter community data by state to see regional trends. As we expand beyond Michigan, compare how different areas are leaning.',
        icon: 'filter',
      },
      {
        title: 'Anonymous & Aggregated',
        desc: 'All data is fully anonymous and aggregated. No individual votes are ever shared. Your ballot plan is always private — community data is about trends, not individuals.',
        icon: 'lock',
      },
      {
        title: 'Real-Time Updates',
        desc: 'Community data updates as users make their selections. Watch trends shift as election day approaches and more voters do their research.',
        icon: 'live',
      },
    ],
    cta: 'See Community Pulse',
  },
  analytics: {
    name: 'Alignment Analytics',
    tagline: 'Data-driven insights into your representation.',
    status: 'live',
    hero: 'See the big picture — how your representatives score across issues, parties, and levels of government.',
    description:
      'Alignment Analytics takes all of our representative grading data and presents it in a clear, visual format. See grade distributions across all scored officials, break down alignment by individual issues, and compare how federal vs. state representatives perform. It\'s the 30,000-foot view of how well your government actually represents founding American values.',
    features: [
      {
        title: 'Grade Distribution',
        desc: 'See how all scored representatives break down across A through F grades. Understand the overall state of values alignment in your government.',
        icon: 'chart',
      },
      {
        title: 'Per-Issue Breakdown',
        desc: 'Drill into individual scorecard issues to see how representatives perform on specific topics — from fiscal responsibility to constitutional rights.',
        icon: 'issues',
      },
      {
        title: 'Party Comparison',
        desc: 'Compare average grades between parties. See which party\'s representatives better align with founding principles on each individual issue.',
        icon: 'party',
      },
      {
        title: 'Federal vs. State',
        desc: 'Compare alignment at different levels of government. See whether your federal or state representatives are doing a better job representing founding values.',
        icon: 'layers',
      },
      {
        title: 'Visual Charts',
        desc: 'All data presented with clear, easy-to-read charts and visualizations. No spreadsheets, no data overload — just clear insights you can act on.',
        icon: 'visual',
      },
      {
        title: 'Transparent Methodology',
        desc: 'Every grade links back to specific scorecard issues and founding principles. Nothing is hidden — see exactly how we arrive at every score.',
        icon: 'transparent',
      },
    ],
    cta: 'View Analytics',
  },
}

/* ── Icon helper ── */
function FeatureIcon({ type }) {
  const icons = {
    map: <><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></>,
    grade: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
    compare: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    print: <><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    doc: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
    layers: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
    contact: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></>,
    vote: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></>,
    committee: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
    person: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    star: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
    scroll: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    state: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></>,
    quote: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
    chart: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    party: <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>,
    filter: <><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    live: <><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></>,
    issues: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
    visual: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></>,
    transparent: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {icons[type] || icons.doc}
    </svg>
  )
}

export default function ToolInfoView() {
  const { toolId } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [authOpen, setAuthOpen] = useState(false)

  const tool = TOOLS[toolId]

  // Unknown tool → redirect to landing
  if (!tool) {
    navigate('/welcome', { replace: true })
    return null
  }

  const handleCTA = () => {
    if (user) {
      // Logged in → go to the tool
      const routes = { ballot: '/', reps: '/my-reps', founding: '/founding', community: '/community', analytics: '/analytics' }
      navigate(routes[toolId] || '/')
    } else {
      setAuthOpen(true)
    }
  }

  return (
    <div className="landing">
      {/* Header */}
      <header className="landing-header">
        <div className="landing-header-inner">
          <Link to="/welcome" className="landing-brand" style={{ textDecoration: 'none' }}>
            <span className="landing-parent-brand">Of For <span className="landing-ampersand">&amp;</span> By The People</span>
          </Link>
          {user ? (
            <button className="landing-signin-btn" onClick={() => navigate('/')}>Go to App</button>
          ) : (
            <button className="landing-signin-btn" onClick={() => setAuthOpen(true)}>Sign In</button>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="tool-info-hero">
        <div className="tool-info-hero-inner">
          <span className="tool-info-status-badge" data-status={tool.status}>
            {tool.status === 'live' ? 'Available Now' : 'Coming Soon'}
          </span>
          <h1 className="tool-info-name">{tool.name}</h1>
          <p className="tool-info-tagline">{tool.tagline}</p>
          <p className="tool-info-hero-text">{tool.hero}</p>
          <button className="landing-cta-primary" onClick={handleCTA} style={{ marginTop: '1.5rem' }}>
            {tool.cta}
          </button>
        </div>
      </section>

      {/* Description */}
      <section className="tool-info-about">
        <div className="tool-info-about-inner">
          <h2>About {tool.name}</h2>
          <p>{tool.description}</p>
        </div>
      </section>

      {/* Features */}
      <section className="tool-info-features">
        <h2 className="landing-section-title">What You Get</h2>
        <div className="tool-info-features-grid">
          {tool.features.map((f, i) => (
            <div className="tool-info-feature-card" key={i}>
              <div className="tool-info-feature-icon">
                <FeatureIcon type={f.icon} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="landing-bottom-cta">
        <h2>{tool.cta}</h2>
        <p>Create a free account and start using {tool.name} today.</p>
        <button className="landing-cta-primary" onClick={handleCTA}>
          {user ? 'Open ' + tool.name : 'Join For Free'}
        </button>
      </section>

      {/* Other tools */}
      <section className="tool-info-other">
        <h2 className="landing-section-title">Explore More Tools</h2>
        <div className="tool-info-other-grid">
          {Object.entries(TOOLS)
            .filter(([key]) => key !== toolId)
            .slice(0, 4)
            .map(([key, t]) => (
              <Link to={`/tools/${key}`} className="tool-info-other-card" key={key}>
                <h4>{t.name}</h4>
                <p>{t.tagline}</p>
              </Link>
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <p>&copy; {new Date().getFullYear()} Of For &amp; By The People. All rights reserved.</p>
          <div className="landing-footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        initialView="signup"
      />
    </div>
  )
}
