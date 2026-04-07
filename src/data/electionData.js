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
  {
    name: 'Michigan August Primary',
    type: 'primary',
    date: 'August 4, 2026',
    description: 'Primary election for state and federal offices.',
    registrationDeadline: 'July 20, 2026 (by mail) or August 4, 2026 (in person)',
  },
  {
    name: 'Michigan General Election',
    type: 'general',
    date: 'November 3, 2026',
    description: 'General election for Governor, state legislature, U.S. House, U.S. Senate, and local offices.',
    registrationDeadline: 'October 19, 2026 (by mail) or November 3, 2026 (in person)',
    offices: [
      'Governor',
      'Secretary of State',
      'Attorney General',
      'U.S. Senate',
      'U.S. House (all 13 districts)',
      'State Senate',
      'State House',
      'State Supreme Court',
      'Local offices and ballot proposals',
    ],
  },
]
