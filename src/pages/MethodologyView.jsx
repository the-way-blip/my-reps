import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from '../components/auth/AuthModal'

/* ── Accordion ── */
function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="method-accordion">
      <button
        className={`method-accordion-header${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`method-accordion-chevron${open ? ' open' : ''}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && <div className="method-accordion-body">{children}</div>}
    </div>
  )
}

/* ── Data ── */
const ISSUES = [
  {
    key: 'proLife',
    name: 'Protection of Unborn Life',
    icon: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>,
    description: 'Does the candidate support protecting unborn life from conception? Do they support restrictions on abortion, oppose taxpayer funding of abortion, and back born-alive protections?',
    sources: ['SBA Pro-Life America', 'National Right to Life Committee (NRLC)', 'Right to Life of Michigan', 'Students for Life', 'Susan B. Anthony List'],
  },
  {
    key: 'marriage',
    name: 'Marriage & Family Values',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    description: 'Does the candidate support traditional marriage and family structures? Do they defend parental rights in education, oppose gender ideology mandates in schools, and support faith-based family services?',
    sources: ['Family Research Council (FRC Action)', 'Family Policy Alliance', 'Michigan Family Forum', 'Eagle Forum', 'Concerned Women for America (CWA)'],
  },
  {
    key: 'religiousLiberty',
    name: 'Religious Liberty',
    icon: <><line x1="12" y1="2" x2="12" y2="22"/><line x1="6" y1="8" x2="18" y2="8"/></>,
    description: 'Does the candidate protect the right to practice faith freely? Do they oppose compelled speech, support conscience protections for religious employers and professionals, and defend the free exercise clause?',
    sources: ['iVoterGuide', 'Faith & Freedom Coalition', 'CatholicVote', 'Liberty Counsel', 'Becket Fund'],
  },
  {
    key: 'secondAmendment',
    name: 'Second Amendment',
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    description: 'Does the candidate support the individual right to keep and bear arms? Do they oppose red flag laws, magazine bans, and universal background check registries? Do they support constitutional carry?',
    sources: ['NRA-PVF (Political Victory Fund)', 'Gun Owners of America (GOA)', 'NAGR (National Association for Gun Rights)', 'CCRKBA'],
  },
  {
    key: 'limitedGov',
    name: 'Limited Government',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></>,
    description: 'Does the candidate believe in restrained government? Do they support deregulation, parental rights, school choice, state sovereignty, and oppose federal overreach? Do they defend the 10th Amendment?',
    sources: ['Heritage Action', 'American Conservative Union (ACU)', 'Conservative Review', 'Freedom Index (JBS)', 'NumbersUSA', 'FAIR'],
  },
  {
    key: 'fiscal',
    name: 'Fiscal Responsibility',
    icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
    description: 'Does the candidate support low taxes, balanced budgets, and responsible spending? Do they oppose wasteful government programs, support spending caps, and sign the Taxpayer Protection Pledge?',
    sources: ['Club for Growth', 'Americans for Prosperity (AFP)', 'National Taxpayers Union (NTU)', 'Americans for Tax Reform (ATR)', 'CCAGW', 'National Federation of Independent Business (NFIB)'],
  },
]

const GRADE_SCALE = [
  { grade: 'A', label: 'Strong Alignment', color: '#16a34a', description: 'Clear, consistent, demonstrated commitment to this value through voting record, public statements, and organizational endorsements.' },
  { grade: 'B', label: 'Mostly Aligned', color: '#65a30d', description: 'Generally supportive positions but may have a limited public record, minor gaps, or is a newcomer expressing strong support without a voting history to verify.' },
  { grade: 'C', label: 'Mixed / Moderate', color: '#eab308', description: 'Conflicting signals — may support some positions while opposing others, or takes centrist positions that don\'t clearly align with conservative principles.' },
  { grade: 'D', label: 'Mostly Opposed', color: '#f97316', description: 'Leans against conservative positions on most measures in this issue area. May have occasional crossover votes but the overall pattern is concerning.' },
  { grade: 'F', label: 'Opposed', color: '#dc2626', description: 'Actively works against this position through legislation, votes, and public advocacy. Clear opposition to conservative/Christian values on this issue.' },
]

const EVIDENCE_SOURCES = [
  { name: 'Legislative Voting Record', weight: 'Highest', desc: 'Actual roll-call votes on key bills are the most reliable evidence of a candidate\'s true positions. Where available, this outweighs all other sources.' },
  { name: 'Interest Group Scorecards', weight: 'High', desc: 'Numerical or letter grades from 30+ conservative organizations (Heritage Action, NRA-PVF, FRC Action, SBA Pro-Life America, etc.) based on actual votes and co-sponsorships.' },
  { name: 'External Organizational Ratings', weight: 'High', desc: 'Structured data from conservative rating organizations tracked in our external ratings database, including endorsements, awards, and scorecard percentages.' },
  { name: 'Candidate Questionnaires', weight: 'Medium', desc: 'Formal responses to questionnaires from Right to Life, NRA-PVF, AFP, and party organizations where candidates state their positions on specific issues.' },
  { name: 'Campaign Website Positions', weight: 'Medium', desc: 'Official policy positions published on the candidate\'s campaign website or platform documents.' },
  { name: 'Public Statements', weight: 'Medium', desc: 'Statements made in debates, candidate forums, interviews, press releases, and news coverage.' },
  { name: 'Signed Pledges', weight: 'Medium', desc: 'Formal pledges signed by the candidate — ATR\'s Taxpayer Protection Pledge, pro-life pledges, Second Amendment pledges.' },
  { name: 'Endorsements Received', weight: 'Supporting', desc: 'Who endorses a candidate reveals where they stand. NRA endorsement signals 2A support; Planned Parenthood endorsement signals pro-choice positions.' },
  { name: 'Social Media & Advocacy', weight: 'Supporting', desc: 'Public social media posts and advocacy efforts where candidates take clear positions on key issues.' },
  { name: 'Professional Background', weight: 'Supporting', desc: 'Career history and affiliations — a former pastor, military veteran, or ACLU attorney each bring contextual evidence.' },
]

export default function MethodologyView() {
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
          <h1 className="tool-info-name">Grading Methodology</h1>
          <p className="tool-info-tagline">How we evaluate candidates and representatives</p>
          <p className="tool-info-hero-text">
            Every candidate is graded on the same 6-issue rubric using publicly available evidence.
            Our grades reflect alignment with Christian principles and Constitutional values.
            Nothing is hidden — here is exactly how we arrive at every score.
          </p>
        </div>
      </section>

      {/* Grade Scale */}
      <section className="method-section">
        <div className="method-section-inner">
          <h2 className="method-section-title">Grade Scale</h2>
          <p className="method-section-desc">
            Each candidate receives a letter grade (A through F) on each of six issue areas.
            These per-issue grades combine to form an overall grade. A <code>null</code> grade means
            we could not find sufficient public information to evaluate the candidate on that issue.
          </p>
          <div className="method-grade-scale">
            {GRADE_SCALE.map(g => (
              <div key={g.grade} className="method-grade-item">
                <span className="method-grade-letter" style={{ background: g.color }}>{g.grade}</span>
                <div>
                  <strong>{g.label}</strong>
                  <p>{g.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Issues */}
      <section className="method-section method-section-alt">
        <div className="method-section-inner">
          <h2 className="method-section-title">The 6-Issue Rubric</h2>
          <p className="method-section-desc">
            Every candidate — incumbent or challenger, Republican or Democrat — is evaluated on the same six issues.
            These issues are rooted in Biblical principles and the founding documents of the United States.
          </p>
          <div className="method-issues-grid">
            {ISSUES.map(issue => (
              <Accordion key={issue.key} title={issue.name}>
                <p className="method-issue-desc">{issue.description}</p>
                <div className="method-issue-sources">
                  <strong>Key Rating Organizations:</strong>
                  <ul>
                    {issue.sources.map(s => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence Sources */}
      <section className="method-section">
        <div className="method-section-inner">
          <h2 className="method-section-title">Evidence Sources & Weighting</h2>
          <p className="method-section-desc">
            We draw from 10 categories of publicly available evidence. Sources with higher reliability
            carry more weight. Voting records are the gold standard — where they exist, they outweigh
            self-reported positions. For first-time candidates without a voting record, we rely on
            stated positions, questionnaire responses, endorsements, and professional background.
          </p>
          <div className="method-evidence-list">
            {EVIDENCE_SOURCES.map((src, i) => (
              <div key={i} className="method-evidence-item">
                <div className="method-evidence-header">
                  <span className="method-evidence-name">{src.name}</span>
                  <span className={`method-evidence-weight method-weight-${src.weight.toLowerCase()}`}>{src.weight}</span>
                </div>
                <p>{src.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Confidence */}
      <section className="method-section method-section-alt">
        <div className="method-section-inner">
          <h2 className="method-section-title">Data Confidence Indicator</h2>
          <p className="method-section-desc">
            Not all grades are backed by the same depth of evidence. A U.S. Senator with 6 years of
            voting records has far more data behind their grade than a first-time state house candidate.
            We show this transparently with a data confidence indicator on every graded candidate.
          </p>
          <div className="method-confidence-grid">
            <div className="method-confidence-item">
              <div className="method-confidence-bars" data-level="4">
                <span /><span /><span /><span />
              </div>
              <div>
                <strong>Extensive Record</strong>
                <p>4+ scorecards from 3+ organizations covering 3+ issue areas. Strong evidentiary basis for the grade.</p>
              </div>
            </div>
            <div className="method-confidence-item">
              <div className="method-confidence-bars" data-level="3">
                <span /><span /><span /><span />
              </div>
              <div>
                <strong>Moderate Record</strong>
                <p>3+ total ratings or 2+ scorecards from 2+ organizations. Good evidence supporting the grade.</p>
              </div>
            </div>
            <div className="method-confidence-item">
              <div className="method-confidence-bars" data-level="2">
                <span /><span /><span /><span />
              </div>
              <div>
                <strong>Limited Record</strong>
                <p>1-2 ratings or endorsements. Grade based on available evidence but less data to verify.</p>
              </div>
            </div>
            <div className="method-confidence-item">
              <div className="method-confidence-bars" data-level="1">
                <span /><span /><span /><span />
              </div>
              <div>
                <strong>Minimal Record</strong>
                <p>No external organizational ratings found. Grade based on stated positions, campaign materials, and background.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="method-section">
        <div className="method-section-inner">
          <h2 className="method-section-title">Our Commitment to Transparency</h2>
          <div className="method-transparency-grid">
            <div className="method-transparency-item">
              <h4>Every Grade Has a Justification</h4>
              <p>Tap any candidate to see the specific reasoning behind each issue grade — which votes, scorecards, endorsements, or positions informed the score.</p>
            </div>
            <div className="method-transparency-item">
              <h4>Same Rubric for Everyone</h4>
              <p>Republicans and Democrats are graded on the exact same 6-issue scale. No party gets a free pass. We evaluate positions, not party labels.</p>
            </div>
            <div className="method-transparency-item">
              <h4>Crossover Votes Are Flagged</h4>
              <p>When a Republican votes against conservative positions on key bills (gun control, abortion, Elliott-Larsen), it&apos;s noted in their justification — regardless of their overall record.</p>
            </div>
            <div className="method-transparency-item">
              <h4>Editorial, Not Official</h4>
              <p>Candidate grades are our editorial assessment based on available evidence. They are not endorsed by any government entity, political party, or candidate committee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="landing-bottom-cta">
        <div className="landing-bottom-cta-overlay">
          <h2>See the Grades in Action</h2>
          <p>Build your ballot and see how every candidate on your ballot measures up.</p>
          {user ? (
            <Link to="/" className="landing-cta-primary" style={{ textDecoration: 'none' }}>Go to My Ballot</Link>
          ) : (
            <button className="landing-cta-primary" onClick={() => setAuthOpen(true)}>Join For Free</button>
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
