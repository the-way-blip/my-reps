import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from '../components/auth/AuthModal'

const TOOLS = [
  {
    name: 'Build My Ballot',
    route: '/tools/ballot',
    appRoute: '/ballot',
    status: 'live',
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></>,
    purpose: 'Help voters walk into every election informed and confident.',
    description: 'Enter your address and see every race on your upcoming ballot. Each candidate is graded on alignment with Christian and Constitutional values across six key issues. Compare candidates side by side, pick your choices, and print a ballot plan to bring to the polls.',
    howItWorks: [
      'Enter your address to see the exact races on your ballot',
      'Review candidate grades across 6 issue areas (A through F scale)',
      'Read detailed justifications for every grade — the specific votes, scorecards, and positions that informed the score',
      'Compare candidates within each race using side-by-side comparison',
      'Save your picks and print a ballot plan for election day',
    ],
  },
  {
    name: 'Find My Reps',
    route: '/tools/reps',
    appRoute: '/my-reps',
    status: 'live',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    purpose: 'Know exactly who represents you and how to reach them.',
    description: 'Enter your address and instantly see every elected official who represents you — from U.S. Senators and your House member to your state legislators, county commissioners, city council, and school board. View their photos, party affiliation, and contact information.',
    howItWorks: [
      'Enter your address to look up your specific districts',
      'See representatives at every level — federal, state, county, city, and school board',
      'View photos, party affiliation, and office titles',
      'Access direct contact information — email, phone, and official websites',
      'Share representative info with friends and family',
    ],
  },
  {
    name: 'Founding Documents',
    route: '/tools/founding',
    appRoute: '/founding',
    status: 'live',
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    purpose: 'Understand the principles America was built on.',
    description: 'Read the full text of the U.S. Constitution, the Bill of Rights, all 27 amendments, and key founding documents. See how the founding principles connect to the issues we grade candidates on — and understand why these values matter for governance today.',
    howItWorks: [
      'Browse the full text of the U.S. Constitution and all 27 amendments',
      'Read founding-era documents and quotes from the founders',
      'See how founding principles map to our 6-issue grading rubric',
      'Understand the Biblical and philosophical roots of American governance',
    ],
  },
  {
    name: 'Alignment Analytics',
    route: '/tools/analytics',
    appRoute: '/analytics',
    status: 'live',
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    purpose: 'The big-picture view of how well your government upholds your values.',
    description: 'See grade distributions across all scored officials, break down alignment by issue area, and compare performance across parties and levels of government. Data-driven insights into how well your representatives are upholding Christian and Constitutional values.',
    howItWorks: [
      'View grade distributions across all scored candidates (A through F)',
      'Drill into specific issue areas — life, 2A, fiscal, religious liberty, etc.',
      'Compare average alignment between parties',
      'See how federal vs. state representatives perform',
    ],
  },
]

export default function AboutView() {
  const { user } = useAuth()
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="landing">
      <header className="landing-header">
        <div className="landing-header-inner">
          <Link to="/welcome" className="landing-brand" style={{ textDecoration: 'none' }}>
            <img src="/logo-icon-white.png" alt="Of For & By The People" className="landing-header-logo" />
          </Link>
          {user ? (
            <Link to="/" className="landing-signin-btn" style={{ textDecoration: 'none' }}>Go to App</Link>
          ) : (
            <button className="landing-signin-btn" onClick={() => setAuthOpen(true)}>Sign In</button>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="tool-info-hero">
        <div className="tool-info-hero-inner">
          <h1 className="tool-info-name">About Of For & By The People</h1>
          <p className="tool-info-tagline">Free civic tools for conservative voters who value faith, the Constitution, and limited government.</p>
        </div>
      </section>

      {/* Mission / Why We Exist */}
      <section className="method-section">
        <div className="method-section-inner">
          <h2 className="method-section-title">Why This Exists</h2>
          <p className="method-section-desc" style={{ maxWidth: 720 }}>
            Most people skip elections — especially primaries — because they don&apos;t know who the candidates are
            or where they stand. Nobody wants to cast a vote for someone they&apos;d never support if they had all the facts.
            And most people can&apos;t name their state representative, let alone hold them accountable.
          </p>
          <p className="method-section-desc" style={{ maxWidth: 720 }}>
            We&apos;re building the civic toolkit that solves this. Free, transparent tools that help conservative
            voters research candidates, grade their representatives, and walk into every election informed and ready.
            Our republic only works when the people pay attention.
          </p>
        </div>
      </section>

      {/* Three Problems */}
      <section className="method-section method-section-alt">
        <div className="method-section-inner">
          <h2 className="method-section-title">Three Problems We&apos;re Solving</h2>
          <div className="method-transparency-grid">
            <div className="method-transparency-item">
              <h4>1. Low Primary Turnout</h4>
              <p>Your vote has the most impact in a primary election — turnout is low, candidates are many,
                and party splits mean each ballot carries outsized weight. Yet most people skip primaries.
                We make it easy to show up prepared.</p>
            </div>
            <div className="method-transparency-item">
              <h4>2. Voting Blind</h4>
              <p>People skip elections because they don&apos;t know who the candidates are or where they stand.
                We do the research so you don&apos;t have to — every candidate graded on the same 6-issue rubric,
                with the evidence behind each grade.</p>
            </div>
            <div className="method-transparency-item">
              <h4>3. No Accountability</h4>
              <p>Most people can&apos;t name their state representative, let alone contact them. We show you exactly
                who represents you, what they&apos;re doing, and how to reach them — so they answer to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="method-section">
        <div className="method-section-inner">
          <h2 className="method-section-title">The Platform</h2>
          <p className="method-section-desc">
            Everything is free. No paywalls, no premium tiers, no ads. Here are the tools available today.
          </p>
        </div>
      </section>

      {/* Tools Detail */}
      {TOOLS.map((tool, idx) => (
        <section key={tool.name} className={`method-section${idx % 2 === 1 ? ' method-section-alt' : ''}`}>
          <div className="method-section-inner">
            <div className="about-tool-header">
              <div className="about-tool-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {tool.icon}
                </svg>
              </div>
              <div>
                <h3 className="about-tool-name">{tool.name}</h3>
                <p className="about-tool-purpose">{tool.purpose}</p>
              </div>
            </div>
            <p className="method-section-desc">{tool.description}</p>
            <div className="about-tool-steps">
              <strong>How it works:</strong>
              <ol>
                {tool.howItWorks.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </div>
            <div className="about-tool-cta">
              <Link to={tool.route} className="about-tool-link">
                Learn more about {tool.name} &rarr;
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Grading Section */}
      <section className="method-section method-section-alt">
        <div className="method-section-inner">
          <h2 className="method-section-title">How We Grade Candidates</h2>
          <p className="method-section-desc">
            Every candidate is evaluated on 6 issue areas using publicly available evidence — voting records,
            interest group scorecards from 30+ conservative organizations, questionnaire responses, campaign positions,
            endorsements, and signed pledges. Voting records carry the most weight. For first-time candidates,
            stated positions and endorsements carry the weight. We grade Republicans and Democrats on the exact same scale.
          </p>
          <div className="about-tool-cta" style={{ marginTop: '1.5rem' }}>
            <Link to="/methodology" className="landing-cta-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Read Our Full Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="method-section">
        <div className="method-section-inner">
          <h2 className="method-section-title">Our Values</h2>
          <div className="method-transparency-grid">
            <div className="method-transparency-item">
              <h4>Faith-Driven</h4>
              <p>Grounded in Christian values and the belief that our rights come from God, not government.
                We evaluate candidates through the lens of Biblical principles and America&apos;s Christian heritage.</p>
            </div>
            <div className="method-transparency-item">
              <h4>Constitutional</h4>
              <p>Every grade is measured against the Constitution and the founding principles that made America exceptional.
                We believe in limited government, individual liberty, and the rule of law.</p>
            </div>
            <div className="method-transparency-item">
              <h4>Transparent</h4>
              <p>Every grade has a justification. Every source is cited. Our methodology is public.
                We show you exactly how we arrive at every score — nothing is hidden.</p>
            </div>
            <div className="method-transparency-item">
              <h4>Free Forever</h4>
              <p>Every tool is free. No paywalls, no premium tiers, no ads.
                Informed voters strengthen our republic, and that&apos;s worth more than subscription revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="method-section method-section-alt">
        <div className="method-section-inner">
          <div className="about-disclaimer">
            <h4>Editorial Disclaimer</h4>
            <p>
              Candidate grades are our editorial assessment based on publicly available evidence.
              They are not paid for by any candidate or candidate&apos;s committee and are not endorsed
              by any government entity or political party. We are an independent civic education platform.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="landing-bottom-cta">
        <div className="landing-bottom-cta-overlay">
          <h2>Government of the people, by the people, for the people.</h2>
          <p>Stand for Faith, Family, and our Founding Principles. Join the movement.</p>
          {user ? (
            <Link to="/" className="landing-cta-primary" style={{ textDecoration: 'none' }}>Go to My Ballot</Link>
          ) : (
            <button className="landing-cta-primary" onClick={() => setAuthOpen(true)}>Create Your Free Account</button>
          )}
        </div>
      </section>

      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <p>&copy; {new Date().getFullYear()} Of For &amp; By The People. All rights reserved.</p>
          <div className="landing-footer-links">
            <Link to="/about">About</Link>
            <Link to="/methodology">Methodology</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} initialView="signup" />
    </div>
  )
}
