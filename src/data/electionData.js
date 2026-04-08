// Known upcoming elections and state election resources
// This data supplements the Google Civic API when available

export const STATE_ELECTION_RESOURCES = {
  MI: {
    name: 'Michigan',
    sosUrl: 'https://mvic.sos.state.mi.us/',
    ballotPreviewUrl: 'https://mvic.sos.state.mi.us/Voter/Index',
    pollingLocatorUrl: 'https://mvic.sos.state.mi.us/Voter/Index',
    absenteeUrl: 'https://mvic.sos.state.mi.us/AVApplication',
    electionResultsUrl: 'https://mielections.us/election/results/',
    sampleBallotUrl: 'https://mvic.sos.state.mi.us/Voter/Index',
    resources: [
      { label: 'Michigan Voter Information Center', url: 'https://mvic.sos.state.mi.us/' },
      { label: 'Check Voter Registration', url: 'https://mvic.sos.state.mi.us/Voter/Index' },
      { label: 'Request Absentee Ballot', url: 'https://mvic.sos.state.mi.us/AVApplication' },
      { label: 'Find Your Polling Place', url: 'https://mvic.sos.state.mi.us/Voter/Index' },
      { label: 'View Sample Ballot', url: 'https://mvic.sos.state.mi.us/Voter/Index' },
      { label: 'Track Your Ballot', url: 'https://mvic.sos.state.mi.us/Voter/Index' },
    ],
    votingInfo: {
      earlyVoting: 'Michigan allows early in-person voting starting 9 days before Election Day.',
      absentee: 'All registered voters can vote absentee. No reason required.',
      sameDay: 'Michigan allows same-day voter registration at your local clerk\'s office.',
      idRequired: 'Photo ID is requested but not required. If you don\'t have one, you can sign an affidavit.',
    },
  },
}

// Generic resources for states without specific data
export function getStateElectionUrl(stateCode) {
  const generic = {
    AL: 'https://www.sos.alabama.gov/alabama-votes',
    AK: 'https://www.elections.alaska.gov/',
    AZ: 'https://azsos.gov/elections',
    AR: 'https://www.sos.arkansas.gov/elections',
    CA: 'https://www.sos.ca.gov/elections',
    CO: 'https://www.sos.state.co.us/pubs/elections/',
    CT: 'https://portal.ct.gov/sots/election-services',
    DE: 'https://elections.delaware.gov/',
    FL: 'https://dos.fl.gov/elections/',
    GA: 'https://sos.ga.gov/how-to-guide/how-guide-voting',
    HI: 'https://elections.hawaii.gov/',
    ID: 'https://sos.idaho.gov/elect/',
    IL: 'https://www.elections.il.gov/',
    IN: 'https://indianavoters.in.gov/',
    IA: 'https://sos.iowa.gov/elections/',
    KS: 'https://sos.ks.gov/elections/',
    KY: 'https://elect.ky.gov/',
    LA: 'https://www.sos.la.gov/ElectionsAndVoting/',
    ME: 'https://www.maine.gov/sos/cec/elec/',
    MD: 'https://elections.maryland.gov/',
    MA: 'https://www.sec.state.ma.us/ele/',
    MI: 'https://mvic.sos.state.mi.us/',
    MN: 'https://www.sos.state.mn.us/elections-voting/',
    MS: 'https://www.sos.ms.gov/elections',
    MO: 'https://www.sos.mo.gov/elections',
    MT: 'https://sosmt.gov/elections/',
    NE: 'https://sos.nebraska.gov/elections',
    NV: 'https://www.nvsos.gov/sos/elections',
    NH: 'https://www.sos.nh.gov/elections',
    NJ: 'https://www.nj.gov/state/elections/',
    NM: 'https://www.sos.state.nm.us/voting-and-elections/',
    NY: 'https://www.elections.ny.gov/',
    NC: 'https://www.ncsbe.gov/',
    ND: 'https://vip.sos.nd.gov/',
    OH: 'https://www.ohiosos.gov/elections-voting/',
    OK: 'https://oklahoma.gov/elections.html',
    OR: 'https://sos.oregon.gov/voting/Pages/default.aspx',
    PA: 'https://www.vote.pa.gov/',
    RI: 'https://vote.ri.gov/',
    SC: 'https://www.scvotes.gov/',
    SD: 'https://sdsos.gov/elections-voting/',
    TN: 'https://sos.tn.gov/elections',
    TX: 'https://www.sos.texas.gov/elections/',
    UT: 'https://vote.utah.gov/',
    VT: 'https://sos.vermont.gov/elections/',
    VA: 'https://www.elections.virginia.gov/',
    WA: 'https://www.sos.wa.gov/elections/',
    WV: 'https://sos.wv.gov/elections/',
    WI: 'https://elections.wi.gov/',
    WY: 'https://sos.wyo.gov/Elections/',
    DC: 'https://www.dcboe.org/',
  }
  return generic[stateCode] || null
}

// Known upcoming federal election dates
export const UPCOMING_ELECTIONS = [
  {
    name: '2026 Primary Elections',
    type: 'primary',
    description: 'Primary elections vary by state. Check your state\'s election website for specific dates.',
    dateRange: 'March – September 2026',
    note: 'Dates vary by state',
  },
  {
    name: '2026 Midterm General Election',
    type: 'general',
    date: 'November 3, 2026',
    description: 'All 435 U.S. House seats, 33-34 U.S. Senate seats, and many state/local offices are on the ballot.',
    offices: ['U.S. House (all 435 seats)', 'U.S. Senate (Class II)', 'Governors (36 states)', 'State legislatures', 'Local offices'],
  },
]

export const MI_ELECTIONS = [
  // Special elections
  {
    name: 'Michigan SD-35 Special Primary',
    type: 'special-primary',
    date: 'February 3, 2026',
    description: 'Special primary election for Michigan State Senate District 35, vacated by U.S. Rep. Kristen McDonald Rivet when she was elected to Congress.',
  },
  {
    name: 'Michigan SD-35 Special General & Local Elections',
    type: 'special-general',
    date: 'May 5, 2026',
    description: 'Special general election for Michigan State Senate District 35, plus select local elections across Michigan communities.',
  },
  // Statewide primary
  {
    name: 'Michigan August Primary',
    type: 'primary',
    date: 'August 4, 2026',
    description: 'Primary election for all statewide, federal, and state legislative offices. Voters select party nominees for the November general election.',
    registrationDeadline: 'July 20, 2026 (by mail) or August 4, 2026 (in person)',
    keyRaces: [
      {
        office: 'Governor (R Primary)',
        note: 'Whitmer is term-limited. Open seat.',
        candidates: ['Rep. John James', 'Sen. Aric Nesbitt', 'Tom Leonard', 'Mike Cox', 'Anthony Hudson'],
      },
      {
        office: 'Governor (D Primary)',
        note: 'Open seat.',
        candidates: ['Jocelyn Benson (Secretary of State)', 'Chris Swanson', 'Kevin Hogan', 'Marni Sawicki', 'Kim Thomas'],
      },
      {
        office: 'Governor (Independent)',
        note: 'Detroit Mayor Mike Duggan is running as an independent (no primary).',
        candidates: ['Mike Duggan'],
      },
      {
        office: 'U.S. Senate (R Primary)',
        note: 'Gary Peters retiring. Open seat.',
        candidates: ['Mike Rogers (former U.S. Rep.)'],
      },
      {
        office: 'U.S. Senate (D Primary)',
        note: 'Gary Peters retiring. Open seat.',
        candidates: ['Rep. Haley Stevens', 'Sen. Mallory McMorrow', 'Rep. Joe Tate', 'Abdul El-Sayed'],
      },
      {
        office: 'Secretary of State',
        note: 'Open — Jocelyn Benson running for Governor.',
      },
      {
        office: 'Attorney General',
        note: 'Open — Dana Nessel is term-limited.',
      },
      {
        office: 'U.S. House — all 13 districts',
        note: 'MI-7 (Barrett, R), MI-8 (McDonald Rivet, D), and MI-10 (open — James running for Gov) are top competitive races.',
      },
    ],
  },
  // General election
  {
    name: 'Michigan General Election',
    type: 'general',
    date: 'November 3, 2026',
    description: 'Major election year: Governor (open seat), U.S. Senate (open seat), all 13 U.S. House seats, full state legislature, two Supreme Court seats, and statewide executive offices.',
    registrationDeadline: 'October 19, 2026 (by mail) or November 3, 2026 (in person)',
    offices: [
      'Governor and Lieutenant Governor (open — Whitmer term-limited)',
      'Secretary of State (open — Benson running for Governor)',
      'Attorney General (open — Nessel term-limited)',
      'U.S. Senate — Class II (open — Gary Peters retiring)',
      'U.S. House (all 13 districts)',
      'State Senate (all 38 seats)',
      'State House (all 110 seats)',
      'State Supreme Court (2 seats — Chief Justice Megan Cavanagh and Justice Noah Hood)',
      'State Board of Education (2 seats)',
      'University governing boards (MSU, U-M, Wayne State — 2 seats each)',
      'Local offices and ballot proposals',
    ],
    keyRaces: [
      {
        office: 'Governor',
        note: 'Open seat. Gretchen Whitmer (D) is term-limited.',
        details: 'Top contenders: Jocelyn Benson (D), John James (R), Mike Duggan (I).',
      },
      {
        office: 'U.S. Senate',
        note: 'Open seat — Gary Peters (D) not seeking reelection. Rated Toss-up.',
        details: 'Key swing-state race. Both parties investing heavily.',
      },
      {
        office: 'MI Supreme Court (2 seats)',
        note: 'Chief Justice Megan Cavanagh and Justice Noah Hood (both Democrat-nominated) seeking election. Current court has 6-1 liberal majority.',
      },
      {
        office: 'MI-10 (U.S. House)',
        note: 'Open seat — John James leaving to run for Governor. Swing district in southern Macomb / Oakland County.',
      },
      {
        office: 'MI-7 (U.S. House)',
        note: 'Tom Barrett (R) is a freshman in a competitive Lansing-area district. Top Democratic target.',
      },
      {
        office: 'MI-8 (U.S. House)',
        note: 'Kristen McDonald Rivet (D) is a freshman in a competitive Flint/Tri-Cities district. Top Republican target.',
      },
    ],
    proposals: [
      {
        name: 'Proposal 1 — Constitutional Convention',
        type: 'constitutional',
        description: 'Mandatory ballot question (every 16 years) asking whether Michigan should hold a constitutional convention to revise the 1963 state constitution. Endorsed by House Speaker Matt Hall. Voters rejected similar proposals in 1978, 1994, and 2010.',
        conservativePerspective: 'Supporters see an opportunity to enshrine fiscal discipline, protect gun rights, and roll back recent progressive amendments (e.g., Prop 3 abortion amendment). Opponents warn a convention could be unpredictable. Conservative groups are divided.',
      },
      {
        name: 'Citizenship Verification for Voting',
        type: 'constitutional amendment',
        description: 'Citizen-initiated amendment (Americans for Citizen Voting) requiring proof of citizenship to register to vote and photo ID for in-person voting, eliminating the current affidavit-of-identity option. Requires 446,198 signatures by July 6, 2026.',
        conservativePerspective: 'Strongly supported by conservatives as a common-sense election integrity measure ensuring only citizens vote.',
      },
      {
        name: 'Ranked-Choice Voting',
        type: 'constitutional amendment',
        description: 'Citizen-initiated amendment (Rank MI Vote) requiring ranked-choice voting in most congressional, state, and local elections. Candidates are eliminated in rounds until one achieves a majority. Requires 446,198 signatures by July 6, 2026.',
        conservativePerspective: 'Generally opposed by conservatives who argue RCV is confusing, reduces transparency, and has historically benefited progressive candidates in other states.',
      },
      {
        name: 'Graduated Income Tax',
        type: 'constitutional amendment',
        description: 'Citizen-initiated amendment to raise Michigan\'s income tax to 9.5% on income exceeding $500,000 (single) / $1,000,000 (joint), including many small and midsized businesses. Requires 446,198 signatures by July 6, 2026.',
        conservativePerspective: 'Strongly opposed. Would harm small business owners and entrepreneurs, discourage investment, and move Michigan away from the flat-tax structure conservatives have defended for decades.',
      },
      {
        name: 'Property Tax Elimination (AxMITax)',
        type: 'constitutional amendment',
        description: 'Citizen-initiated amendment to eliminate all property taxes in Michigan, require 60% voter approval for future local tax increases, and two-thirds legislative approval for state tax increases. Previously failed to make the 2024 ballot.',
        conservativePerspective: 'Appeals to tax-reduction conservatives but raises serious questions about funding schools and local services. The supermajority requirements for future taxes are a strong fiscal guardrail.',
      },
      {
        name: 'Minimum Wage Referendum',
        type: 'referendum',
        description: 'If enough signatures are collected, this referendum would freeze implementation of Public Act 1 of 2025 (minimum wage increase) and let voters decide its fate at the November 2026 election.',
        conservativePerspective: 'Supported by business groups and conservatives who argue the wage mandate hurts small businesses and reduces entry-level employment opportunities.',
      },
      {
        name: 'Local Millages & Bond Proposals',
        type: 'local millage',
        description: 'Various local proposals for school operating millages, road improvement bonds, public safety millages, library funding, and parks/recreation bonds appear on ballots across Michigan counties and municipalities.',
        conservativePerspective: 'Evaluate each on its merits. Prioritize essential services (roads, public safety) and scrutinize spending plans. Oppose millages that duplicate existing funding or expand government beyond core functions.',
      },
    ],
  },
]
