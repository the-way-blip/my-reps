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
 * Last updated: 2026-05-20 (expanded with NFIB MI 2023-24 scorecard + Vote Smart data)
 * Sources verified via Heritage Action, Club for Growth, GOA, NRA-PVF,
 * SBA Pro-Life, NRLC, CCAGW, NFIB, ATR, Freedom Index, ACU/CPAC, FRC Action,
 * NTU, AFP, CWA, Eagle Forum, FAIR, NumbersUSA
 */

const EXTERNAL_RATINGS = {

  // ═══════════════════════════════════════════════════════════════
  // STATEWIDE — Governor (Republican)
  // ═══════════════════════════════════════════════════════════════

  'Aric Nesbitt': [
    // State Senate Minority Leader (R, SD-20). NFIB MI 2023-24 Voting Record.
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2023-24 session' },
    { sourceId: 'nfib', type: 'award', value: 'Guardian of Small Business', issue: 'fiscal', period: '2023-24 session' },
  ],

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
  // US SENATE RACE — Haley Stevens (D, incumbent US House MI-11)
  // ═══════════════════════════════════════════════════════════════

  'Haley Stevens': [
    // Federal scorecards — Heritage Action, JBS Freedom Index, ACU
    { sourceId: 'heritage_action', type: 'scorecard', value: '0%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'jbs_freedom_index', type: 'scorecard', value: '0%', issue: 'limitedGov', period: '119th Congress' },
    { sourceId: 'acu', type: 'scorecard', value: '5%', issue: 'limitedGov', period: '2023' },
    { sourceId: 'numbersusa', type: 'scorecard', value: '4%', issue: 'limitedGov', period: '2023-2024' },
    { sourceId: 'fair', type: 'scorecard', value: '0%', issue: 'limitedGov', period: '2021-2022' },
    // Fiscal
    { sourceId: 'club_for_growth', type: 'scorecard', value: '2%', issue: 'fiscal', period: '2023' },
    { sourceId: 'ntu', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023' },
    { sourceId: 'ccagw', type: 'scorecard', value: '7%', issue: 'fiscal', period: '2022' },
    { sourceId: 'afp', type: 'scorecard', value: '12%', issue: 'fiscal', period: '2024' },
    // 2nd Amendment
    { sourceId: 'nra_pvf', type: 'scorecard', value: '0%', issue: 'secondAmendment', period: '2024' },
    { sourceId: 'goa', type: 'scorecard', value: '8%', issue: 'secondAmendment', period: '2024' },
    // Pro-life
    { sourceId: 'nrlc', type: 'scorecard', value: '0%', issue: 'proLife', period: '2023-2024' },
    { sourceId: 'sba_prolife', type: 'scorecard', value: '0%', issue: 'proLife', period: '2023-2024' },
    // Marriage & Family
    { sourceId: 'frc_action', type: 'scorecard', value: '5%', issue: 'marriage', period: '2023' },
    { sourceId: 'cwa', type: 'scorecard', value: '21%', issue: 'marriage', period: '2023-2024' },
    { sourceId: 'eagle_forum', type: 'scorecard', value: '5%', issue: 'marriage', period: '2023-2024' },
    // Sources: Heritage Action (heritageaction.com), JBS Freedom Index (thenewamerican.com),
    // Vote Smart aggregator (justfacts.votesmart.org/candidate/evaluations/181092/haley-stevens)
  ],

  'Mallory McMorrow': [
    // State Senator (D, SD-08); running for U.S. Senate in 2026.
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
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

  // ═══════════════════════════════════════════════════════════════
  // STATE HOUSE — Republican Incumbents (NFIB MI 2023-24 Voting Record)
  // ═══════════════════════════════════════════════════════════════

  'Mike Harris': [
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2023-24 session' },
    { sourceId: 'nfib', type: 'award', value: 'Guardian of Small Business', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Thomas E. Kuhn': [
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Greg VanWoerkom': [
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Pat Outman': [
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Jerry Neyer': [
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Timothy Beson': [
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'John R. Roth': [
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Alicia St. Germaine': [
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'David W. Martin': [
    { sourceId: 'nfib', type: 'scorecard', value: '100%', issue: 'fiscal', period: '2023-24 session' },
    { sourceId: 'nfib', type: 'award', value: 'Guardian of Small Business', issue: 'fiscal', period: '2023-24 session' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // STATE HOUSE/SENATE — Democratic Incumbents (NFIB MI 2023-24 Voting Record)
  // ═══════════════════════════════════════════════════════════════

  'Veronica Klinefelt': [
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Mary Cavanagh': [
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Dayna Polehanki': [
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Sue Shink': [
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Felicia Brabec': [
    { sourceId: 'nfib', type: 'scorecard', value: '0%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Sarah Anthony': [
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Samantha Steckloff': [
    { sourceId: 'nfib', type: 'scorecard', value: '0%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Noah Arbit': [
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Brenda Carter': [
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Sharon MacDonell': [
    { sourceId: 'nfib', type: 'scorecard', value: '0%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Denise Mentzer': [
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Cynthia R. Neeley': [
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Julie Brixie': [
    { sourceId: 'nfib', type: 'scorecard', value: '0%', issue: 'fiscal', period: '2023-24 session' },
  ],

  'Kristian C. Grant': [
    { sourceId: 'nfib', type: 'scorecard', value: '11%', issue: 'fiscal', period: '2023-24 session' },
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

/**
 * Calculate an evidence level for a candidate's grade.
 * Returns { level, label, description, score, details }
 *
 * Evidence is based on:
 *  - Number of external org ratings (scorecards weigh most)
 *  - Number of unique source organizations
 *  - Number of issue areas covered by external data
 *  - Presence of gradeJustifications, keyPositions, endorsements, bio
 *
 * Levels:
 *  - 'extensive'  — Voting-record scorecards from multiple orgs across many issues
 *  - 'moderate'   — Some external ratings or endorsements plus editorial research
 *  - 'limited'    — Primarily editorial assessment with minimal external org data
 *  - 'minimal'    — No external org data; based on public statements and platform only
 */
export function getEvidenceLevel(candidateName, candidate = {}) {
  const ratings = getRatingsForCandidate(candidateName)

  // Count scorecards (voting-record-based, highest value)
  const scorecards = ratings.filter(r => r.type === 'scorecard')
  const endorsements = ratings.filter(r => r.type === 'endorsement' || r.type === 'award')
  const pledges = ratings.filter(r => r.type === 'pledge' || r.type === 'voter_guide')

  // Unique orgs
  const uniqueOrgs = new Set(ratings.map(r => r.sourceId))

  // Unique issue areas covered by external data
  const issuesCovered = new Set(ratings.map(r => r.issue))

  // Internal data checks
  const hasJustifications = candidate.gradeJustifications
    ? Object.keys(candidate.gradeJustifications).length
    : 0
  const hasKeyPositions = candidate.keyPositions?.length || 0
  const hasEndorsements = candidate.endorsements?.length || 0
  const hasBio = candidate.bio ? 1 : 0

  // Weighted evidence score
  // Scorecards are gold-standard (voting records), endorsements are supporting
  let score = 0
  score += scorecards.length * 3    // scorecards most valuable
  score += endorsements.length * 1.5 // endorsements/awards
  score += pledges.length * 1       // pledges/voter guides
  score += uniqueOrgs.size * 2      // org breadth bonus
  score += issuesCovered.size * 1.5 // issue coverage bonus
  score += hasJustifications * 0.5  // internal justifications
  score += hasKeyPositions * 0.3    // key positions
  score += hasEndorsements * 0.3    // listed endorsements
  score += hasBio * 0.5            // has bio

  // Build details
  const details = {
    externalRatings: ratings.length,
    scorecardRatings: scorecards.length,
    endorsementRatings: endorsements.length,
    uniqueOrgs: uniqueOrgs.size,
    issuesCovered: issuesCovered.size,
    justifications: hasJustifications,
    keyPositions: hasKeyPositions,
  }

  // Determine level
  let level, label, description
  if (scorecards.length >= 4 && uniqueOrgs.size >= 3 && issuesCovered.size >= 3) {
    level = 'extensive'
    label = 'Extensive Record'
    description = `Grade backed by ${scorecards.length} voting-record scorecards from ${uniqueOrgs.size} organizations across ${issuesCovered.size} issue areas.`
  } else if (ratings.length >= 3 || (scorecards.length >= 2 && uniqueOrgs.size >= 2)) {
    level = 'moderate'
    label = 'Moderate Record'
    description = `Grade informed by ${ratings.length} external rating${ratings.length !== 1 ? 's' : ''} from ${uniqueOrgs.size} organization${uniqueOrgs.size !== 1 ? 's' : ''}.`
  } else if (ratings.length >= 1) {
    level = 'limited'
    label = 'Limited Record'
    description = `Grade based on ${ratings.length} external rating${ratings.length !== 1 ? 's' : ''} plus editorial research.`
  } else {
    level = 'minimal'
    label = 'Minimal Record'
    description = 'Grade based on public statements, campaign platform, and editorial assessment. No independent organization scorecards available.'
  }

  return { level, label, description, score: Math.round(score), details }
}
