/**
 * External Organization Ratings for Michigan 2026 Primary Candidates
 *
 * Structured external rating data from established conservative organizations.
 * These are ratings assigned by outside organizations — NOT our editorial grades.
 *
 * Each entry: candidate name → array of { sourceId, type, value, issue, period, url? }
 *
 * sourceId  — matches an `id` in ratingSources.js
 * type      — 'scorecard' | 'endorsement' | 'voter_guide' | 'pledge'
 * value     — the raw rating: "A", "100%", "endorsed", "F", etc.
 * issue     — which of our 6 issue keys this rating informs
 * period    — e.g. "119th Congress", "2026 cycle", "lifetime"
 * url       — optional direct link to the specific rating page
 *
 * Last updated: 2026-05-20
 * Sources verified via Heritage Action, Club for Growth, GOA, NRA-PVF,
 * SBA Pro-Life, NRLC, CCAGW, NFIB, ATR, Freedom Index, ACU/CPAC, FRC Action
 */

const EXTERNAL_RATINGS = {

  // ═══════════════════════════════════════════════════════════════
  // STATEWIDE — Governor
  // ═══════════════════════════════════════════════════════════════

  'John James': [
    // Heritage Action
    { sourceId: 'heritage_action', type: 'scorecard', value: '85%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '73%', issue: 'limitedGov', period: 'Lifetime' },
    // Club for Growth
    { sourceId: 'club_for_growth', type: 'scorecard', value: '48%', issue: 'fiscal', period: '2024' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '57%', issue: 'fiscal', period: 'Lifetime' },
    // Gun ratings
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'AQ', issue: 'secondAmendment', period: '2022' },
    { sourceId: 'goa', type: 'scorecard', value: 'B+', issue: 'secondAmendment', period: '2024' },
    // Pro-life
    { sourceId: 'nrlc', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2024' },
    // Fiscal
    { sourceId: 'nfib', type: 'award', value: 'Guardian of Small Business', issue: 'fiscal', period: '118th Congress' },
  ],

  'Mike Rogers': [
    // From his congressional career (2001–2015)
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'A', issue: 'secondAmendment', period: 'Congressional career' },
    { sourceId: 'nrlc', type: 'scorecard', value: '100%', issue: 'proLife', period: 'Congressional career' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-01: Jack Bergman
  // ═══════════════════════════════════════════════════════════════

  'Jack Bergman': [
    // Heritage Action
    { sourceId: 'heritage_action', type: 'scorecard', value: '83%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '75%', issue: 'limitedGov', period: 'Lifetime' },
    // Club for Growth
    { sourceId: 'club_for_growth', type: 'scorecard', value: '70%', issue: 'fiscal', period: '2024' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '68%', issue: 'fiscal', period: 'Lifetime' },
    // Gun ratings
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'A', issue: 'secondAmendment', period: '2020' },
    { sourceId: 'goa', type: 'scorecard', value: 'A-', issue: 'secondAmendment', period: '2024' },
    // Pro-life
    { sourceId: 'nrlc', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2024' },
    { sourceId: 'nrlc', type: 'scorecard', value: '100%', issue: 'proLife', period: 'Historical' },
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2024' },
    // Fiscal
    { sourceId: 'ccagw', type: 'scorecard', value: '89%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'nfib', type: 'award', value: 'Guardian of Small Business', issue: 'fiscal', period: '118th Congress' },
    // Immigration
    { sourceId: 'numbersusa', type: 'scorecard', value: 'B', issue: 'limitedGov', period: 'Career (79%)' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-02: John Moolenaar
  // ═══════════════════════════════════════════════════════════════

  'John Moolenaar': [
    { sourceId: 'heritage_action', type: 'scorecard', value: '76%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '74%', issue: 'limitedGov', period: 'Lifetime' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '54%', issue: 'fiscal', period: '2024' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '70%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'A', issue: 'secondAmendment', period: 'Recent cycle' },
    { sourceId: 'goa', type: 'scorecard', value: 'B+', issue: 'secondAmendment', period: '2024' },
    { sourceId: 'sba_prolife', type: 'scorecard', value: '100%', issue: 'proLife', period: '119th Congress' },
    { sourceId: 'nrlc', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2024' },
    { sourceId: 'ccagw', type: 'scorecard', value: '87%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'nfib', type: 'award', value: 'Guardian of Small Business', issue: 'fiscal', period: '118th Congress' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-03: Hillary Scholten (D)
  // ═══════════════════════════════════════════════════════════════

  'Hillary Scholten': [
    { sourceId: 'heritage_action', type: 'scorecard', value: '0%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '6%', issue: 'limitedGov', period: 'Lifetime' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '6%', issue: 'fiscal', period: '2024' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '3%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'goa', type: 'scorecard', value: 'F', issue: 'secondAmendment', period: '2024' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-04: Bill Huizenga
  // ═══════════════════════════════════════════════════════════════

  'Bill Huizenga': [
    { sourceId: 'heritage_action', type: 'scorecard', value: '83%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '80%', issue: 'limitedGov', period: 'Lifetime' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '59%', issue: 'fiscal', period: '2024' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '79%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'A', issue: 'secondAmendment', period: '2018' },
    { sourceId: 'goa', type: 'scorecard', value: 'A-', issue: 'secondAmendment', period: '2024' },
    { sourceId: 'nrlc', type: 'scorecard', value: '100%', issue: 'proLife', period: '119th Congress' },
    { sourceId: 'nrlc', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2024' },
    { sourceId: 'frc_action', type: 'scorecard', value: '100%', issue: 'marriage', period: '2018–2021' },
    { sourceId: 'frc_action', type: 'award', value: 'True Blue', issue: 'marriage', period: '2021' },
    { sourceId: 'ccagw', type: 'scorecard', value: '94%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'nfib', type: 'award', value: 'Guardian of Small Business', issue: 'fiscal', period: '118th Congress' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-05: Tim Walberg
  // ═══════════════════════════════════════════════════════════════

  'Tim Walberg': [
    { sourceId: 'heritage_action', type: 'scorecard', value: '76%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '74%', issue: 'limitedGov', period: 'Lifetime' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '53%', issue: 'fiscal', period: '2024' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '77%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'A+', issue: 'secondAmendment', period: 'Lifetime' },
    { sourceId: 'goa', type: 'scorecard', value: 'B+', issue: 'secondAmendment', period: '2024' },
    { sourceId: 'nrlc', type: 'scorecard', value: '100%', issue: 'proLife', period: '119th Congress' },
    { sourceId: 'nrlc', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2024' },
    { sourceId: 'sba_prolife', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: 'Historical' },
    { sourceId: 'ccagw', type: 'scorecard', value: '92%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'nfib', type: 'award', value: 'Guardian of Small Business', issue: 'fiscal', period: '118th Congress' },
    { sourceId: 'numbersusa', type: 'scorecard', value: 'A', issue: 'limitedGov', period: 'Career (90%)' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-06: Debbie Dingell (D)
  // ═══════════════════════════════════════════════════════════════

  'Debbie Dingell': [
    { sourceId: 'heritage_action', type: 'scorecard', value: '0%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '6%', issue: 'limitedGov', period: 'Lifetime' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '7%', issue: 'fiscal', period: '2024' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '5%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'F', issue: 'secondAmendment', period: '119th Congress' },
    { sourceId: 'goa', type: 'scorecard', value: 'F', issue: 'secondAmendment', period: '2024' },
    { sourceId: 'nrlc', type: 'scorecard', value: '0%', issue: 'proLife', period: '119th Congress' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-07: Tom Barrett
  // ═══════════════════════════════════════════════════════════════

  'Tom Barrett': [
    { sourceId: 'heritage_action', type: 'scorecard', value: '92%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '92%', issue: 'limitedGov', period: 'Lifetime' },
    { sourceId: 'nra_pvf', type: 'scorecard', value: '100%', issue: 'secondAmendment', period: 'MI Senate career' },
    { sourceId: 'sba_prolife', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2024' },
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2024' },
    { sourceId: 'atr', type: 'pledge', value: 'Signed', issue: 'fiscal', period: '2025' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-08: Kristen McDonald Rivet (D)
  // ═══════════════════════════════════════════════════════════════

  'Kristen McDonald Rivet': [
    { sourceId: 'heritage_action', type: 'scorecard', value: '0%', issue: 'limitedGov', period: '119th Congress' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-09: Lisa McClain
  // ═══════════════════════════════════════════════════════════════

  'Lisa McClain': [
    { sourceId: 'heritage_action', type: 'scorecard', value: '83%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '85%', issue: 'limitedGov', period: 'Lifetime' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '52%', issue: 'fiscal', period: '2024' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '77%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'nra_pvf', type: 'endorsement', value: 'Endorsed', issue: 'secondAmendment', period: '2020' },
    { sourceId: 'goa', type: 'scorecard', value: 'A-', issue: 'secondAmendment', period: '2024' },
    { sourceId: 'sba_prolife', type: 'scorecard', value: 'A+', issue: 'proLife', period: '117th–118th Congress' },
    { sourceId: 'nrlc', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2024' },
    { sourceId: 'ccagw', type: 'scorecard', value: '100%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'nfib', type: 'award', value: 'Guardian of Small Business', issue: 'fiscal', period: '118th Congress' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-12: Rashida Tlaib (D)
  // ═══════════════════════════════════════════════════════════════

  'Rashida Tlaib': [
    { sourceId: 'heritage_action', type: 'scorecard', value: '0%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '12%', issue: 'limitedGov', period: 'Lifetime' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '15%', issue: 'fiscal', period: '2024' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '13%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'goa', type: 'scorecard', value: 'F', issue: 'secondAmendment', period: '2024' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // US HOUSE — MI-13: Shri Thanedar (D)
  // ═══════════════════════════════════════════════════════════════

  'Shri Thanedar': [
    { sourceId: 'heritage_action', type: 'scorecard', value: '9%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'heritage_action', type: 'scorecard', value: '10%', issue: 'limitedGov', period: 'Lifetime' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '5%', issue: 'fiscal', period: '2024' },
    { sourceId: 'club_for_growth', type: 'scorecard', value: '3%', issue: 'fiscal', period: 'Lifetime' },
    { sourceId: 'goa', type: 'scorecard', value: 'F', issue: 'secondAmendment', period: '2024' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // STATE SENATE
  // ═══════════════════════════════════════════════════════════════

  'Michele Hoitenga': [
    { sourceId: 'acu', type: 'scorecard', value: '100%', issue: 'limitedGov', period: '2023' },
    { sourceId: 'acu', type: 'award', value: 'Conservative Excellence', issue: 'limitedGov', period: '2023' },
    { sourceId: 'jbs_freedom_index', type: 'scorecard', value: '83%', issue: 'limitedGov', period: '2023' },
    { sourceId: 'rtl_michigan', type: 'scorecard', value: '100%', issue: 'proLife', period: 'MI Senate career' },
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'A', issue: 'secondAmendment', period: 'MI Senate career' },
  ],

  'Lana Theis': [
    { sourceId: 'jbs_freedom_index', type: 'scorecard', value: '83%', issue: 'limitedGov', period: '2023' },
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2026 cycle' },
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'A', issue: 'secondAmendment', period: 'MI Senate career' },
    { sourceId: 'afp', type: 'endorsement', value: 'Endorsed', issue: 'fiscal', period: '2026 cycle' },
  ],

  'John Damoose': [
    { sourceId: 'jbs_freedom_index', type: 'scorecard', value: '67%', issue: 'limitedGov', period: '2023' },
  ],

  'Michael Webber': [
    { sourceId: 'jbs_freedom_index', type: 'scorecard', value: '50%', issue: 'limitedGov', period: '2023' },
  ],

  'Mike Murphy': [
    // Livingston County Sheriff, strong conservative record — no org ratings found yet
  ],

  // ═══════════════════════════════════════════════════════════════
  // STATE HOUSE — Incumbents & key challengers with verified ratings
  // ═══════════════════════════════════════════════════════════════

  'Steve Carra': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2026 cycle' },
    { sourceId: 'nra_pvf', type: 'endorsement', value: 'Endorsed', issue: 'secondAmendment', period: '2024' },
  ],

  'Pauline Wendzel': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2026 cycle' },
  ],

  'Rachelle Smit': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Affiliated', issue: 'proLife', period: '2026 cycle' },
    { sourceId: 'nra_pvf', type: 'endorsement', value: 'Affiliated', issue: 'secondAmendment', period: '2026 cycle' },
    { sourceId: 'nfib', type: 'endorsement', value: 'Endorsed', issue: 'fiscal', period: '2022' },
  ],

  'Ann M. Bollin': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2026 cycle' },
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2021–22' },
    { sourceId: 'nfib', type: 'award', value: 'Guardian of Small Business', issue: 'fiscal', period: '2021–22' },
  ],

  'Matt Maddock': [
    // No specific org ratings found — known as founder of Michigan Conservative Coalition
  ],

  'Ken Borton': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Member', issue: 'proLife', period: '2026 cycle' },
    { sourceId: 'nra_pvf', type: 'endorsement', value: 'Lifetime Member', issue: 'secondAmendment', period: 'Lifetime' },
  ],

  'Joseph G. Pavlov': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Board President (12 yrs)', issue: 'proLife', period: 'Lifetime' },
  ],

  'Josh Schriver': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2026 cycle' },
  ],

  'Bill G. Schuette': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Affiliated', issue: 'proLife', period: '2026 cycle' },
    { sourceId: 'nra_pvf', type: 'endorsement', value: 'Affiliated', issue: 'secondAmendment', period: '2026 cycle' },
  ],

  'Roger Hauck': [
    { sourceId: 'rtl_michigan', type: 'scorecard', value: '100%', issue: 'proLife', period: 'MI House career' },
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'A', issue: 'secondAmendment', period: 'MI House career' },
  ],

  'Beau Matthew LaFave': [
    { sourceId: 'nra_pvf', type: 'scorecard', value: 'A+', issue: 'secondAmendment', period: 'MI House career' },
  ],

  // Challengers with RTL PAC endorsement
  'Jonathan Lindsey': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2026 cycle' },
    { sourceId: 'jbs_freedom_index', type: 'scorecard', value: '80%', issue: 'limitedGov', period: '2023' },
  ],

  'Andrew Beeler': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Endorsed', issue: 'proLife', period: '2026 cycle' },
  ],

  'Al Lemmo': [
    { sourceId: 'rtl_michigan', type: 'endorsement', value: 'Board Member (10+ yrs)', issue: 'proLife', period: 'Lifetime' },
  ],
}

export default EXTERNAL_RATINGS

/**
 * Get external ratings for a candidate by name.
 * Returns an array of rating objects or empty array.
 */
export function getRatingsForCandidate(name) {
  return EXTERNAL_RATINGS[name] || []
}

/**
 * Get external ratings for a candidate filtered by app issue key.
 * e.g., getRatingsForIssue('John James', 'secondAmendment')
 */
export function getRatingsForIssue(name, issueKey) {
  return (EXTERNAL_RATINGS[name] || []).filter(r => r.issue === issueKey)
}

/**
 * Check if a candidate has any external ratings.
 */
export function hasExternalRatings(name) {
  return (EXTERNAL_RATINGS[name] || []).length > 0
}
