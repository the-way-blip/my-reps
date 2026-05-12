/**
 * Michigan 2026 race and candidate data.
 *
 * Structured candidate-level data for the 2026 election cycle, including
 * primary fields (party, current role, incumbent status, website, key issues)
 * to support voter research before the August 4 primary and November 3
 * general election.
 *
 * Sources: Candidate campaign sites, MI Secretary of State candidate filings,
 * Cook Political Report ratings, Ballotpedia, AP race profiles.
 * Verified April–May 2026.
 *
 * Race ratings:
 *   "Safe D" / "Safe R": >15-point margin expected
 *   "Likely D" / "Likely R": 8–15 point margin expected
 *   "Lean D" / "Lean R": 3–8 point margin expected
 *   "Toss-up": within 3 points
 */

/* ── Governor (open seat — Whitmer term-limited) ── */

export const MI_2026_GOVERNOR = {
  office: 'Governor of Michigan',
  termLength: 4,
  incumbent: 'Gretchen Whitmer (D)',
  incumbentStatus: 'term-limited',
  cookRating: 'Toss-up',
  primaryDate: '2026-08-04',
  generalDate: '2026-11-03',
  description:
    'Open-seat race to replace term-limited Democrat Gretchen Whitmer. Wide-open primary on both sides; ' +
    'Detroit Mayor Mike Duggan is running as an independent, complicating the November general.',
  candidates: {
    democratic: [
      {
        name: 'Jocelyn Benson',
        currentRole: 'Michigan Secretary of State',
        website: 'https://jocelynbenson.com',
        announced: '2025-01-22',
        priorOffices: ['Secretary of State (2019–present)'],
        keyIssues: ['Voting rights', 'Education funding', 'Reproductive rights'],
        endorsements: ['MEA (Michigan Education Association)', 'Planned Parenthood Advocates of MI'],
        status: 'frontrunner',
      },
      {
        name: 'Chris Swanson',
        currentRole: 'Genesee County Sheriff',
        website: 'https://chrisswanson.com',
        announced: '2025-04-15',
        priorOffices: ['Genesee County Sheriff (2020–present)'],
        keyIssues: ['Public safety', 'Mental health response', 'Anti-corruption'],
        notes: 'Gained national attention in 2020 for marching with George Floyd protesters in Flint.',
        status: 'major',
      },
      {
        name: 'Kevin Hogan',
        currentRole: 'Businessman / Investor',
        website: 'https://kevinhoganformichigan.com',
        announced: '2025-09-10',
        status: 'minor',
      },
      {
        name: 'Marni Sawicki',
        currentRole: 'Educator / former mayor of Cape Coral, FL',
        announced: '2025-07-20',
        status: 'minor',
      },
      {
        name: 'Kim Thomas',
        currentRole: 'Activist',
        announced: '2025-10-05',
        status: 'minor',
      },
    ],
    republican: [
      {
        name: 'John James',
        currentRole: 'U.S. Representative (MI-10)',
        website: 'https://johnjamesformichigan.com',
        announced: '2025-04-07',
        priorOffices: ['U.S. House MI-10 (2023–present)'],
        priorRuns: ['U.S. Senate (2018, 2020 — lost to Stabenow, Peters)'],
        keyIssues: ['Tax cuts', 'Border security', 'Energy independence', 'Parental rights'],
        endorsements: ['President Donald Trump (2025-05-12)', 'Michigan Republican Party'],
        notes: 'Combat veteran (Iraq), West Point grad. Trump-aligned frontrunner.',
        status: 'frontrunner',
      },
      {
        name: 'Aric Nesbitt',
        currentRole: 'Michigan State Senate Minority Leader',
        website: 'https://aricnesbitt.com',
        announced: '2025-03-04',
        priorOffices: ['State Senate (2018–present)', 'State Representative (2010–2016)'],
        keyIssues: ['School choice', 'Economic growth', 'Roads', 'Anti-tax'],
        notes: 'Establishment-conservative pick; legislative experience.',
        status: 'major',
      },
      {
        name: 'Tom Leonard',
        currentRole: 'Attorney / former MI House Speaker',
        website: 'https://tomleonard.com',
        announced: '2025-05-20',
        priorOffices: ['Speaker, MI House (2017–2018)', 'State Representative (2013–2018)'],
        priorRuns: ['Attorney General (2018 — lost to Nessel)'],
        keyIssues: ['Election integrity', 'Public safety', 'Crime'],
        status: 'major',
      },
      {
        name: 'Mike Cox',
        currentRole: 'Attorney / former MI Attorney General',
        announced: '2025-06-12',
        priorOffices: ['Attorney General (2003–2011)'],
        priorRuns: ['Governor (2010 primary — lost to Rick Snyder)'],
        status: 'minor',
      },
      {
        name: 'Anthony Hudson',
        currentRole: 'Businessman',
        announced: '2025-08-04',
        status: 'minor',
      },
    ],
    independent: [
      {
        name: 'Mike Duggan',
        currentRole: 'Mayor of Detroit',
        website: 'https://mikeduggan.com',
        announced: '2024-12-04',
        priorOffices: ['Mayor of Detroit (2014–present)', 'Wayne County Prosecutor (2001–2003)'],
        keyIssues: ['Bipartisan governance', 'Economic development', 'Urban revitalization'],
        notes:
          'Skipping the primary entirely — running as an independent. Strongest indie gubernatorial bid in MI in decades.',
        status: 'frontrunner',
      },
    ],
  },
}

/* ── U.S. Senate (open seat — Peters retiring) ── */

export const MI_2026_SENATE = {
  office: 'U.S. Senate (Class II)',
  termLength: 6,
  incumbent: 'Gary Peters (D)',
  incumbentStatus: 'retiring',
  cookRating: 'Toss-up',
  primaryDate: '2026-08-04',
  generalDate: '2026-11-03',
  description:
    'Open-seat Senate race to replace retiring Democrat Gary Peters. One of the most competitive Senate ' +
    'races in the country and a top national pickup target for Republicans.',
  candidates: {
    democratic: [
      {
        name: 'Haley Stevens',
        currentRole: 'U.S. Representative (MI-11)',
        website: 'https://haleystevens.com',
        announced: '2025-04-08',
        priorOffices: ['U.S. House MI-11 (2019–present)'],
        keyIssues: ['Manufacturing & jobs', 'Reproductive rights', 'Auto industry'],
        endorsements: ['EMILYs List', 'UAW'],
        status: 'major',
      },
      {
        name: 'Mallory McMorrow',
        currentRole: 'Michigan State Senator (District 8)',
        website: 'https://mallorymcmorrow.com',
        announced: '2025-04-02',
        priorOffices: ['State Senate (2019–present)'],
        keyIssues: ['Reproductive rights', 'LGBTQ+ rights', 'Public education'],
        notes:
          'National progressive star; viral 2022 floor speech defending public schools and LGBTQ kids drew widespread attention.',
        status: 'frontrunner',
      },
      {
        name: 'Joe Tate',
        currentRole: 'U.S. Representative (MI-13) / former MI House Speaker',
        website: 'https://joetate.com',
        announced: '2025-05-19',
        priorOffices: ['Speaker, MI House (2023–2024)', 'State Representative (2019–2024)'],
        keyIssues: ['Veterans', 'Economic opportunity', 'Detroit-area investment'],
        notes: 'Marine Corps veteran; first Black Speaker of the Michigan House.',
        status: 'major',
      },
      {
        name: 'Abdul El-Sayed',
        currentRole: 'Public-health physician / former Wayne County Health Director',
        website: 'https://abdulelsayed.com',
        announced: '2025-04-17',
        priorRuns: ['Governor (2018 primary — lost to Whitmer)'],
        keyIssues: ['Medicare for All', 'Gaza ceasefire', 'Climate justice'],
        endorsements: ['Bernie Sanders', 'Justice Democrats'],
        notes: 'Progressive lane; strong support among MI Arab-American community.',
        status: 'major',
      },
    ],
    republican: [
      {
        name: 'Mike Rogers',
        currentRole: 'Former U.S. Representative (MI-8)',
        website: 'https://mikerogersformi.com',
        announced: '2025-02-04',
        priorOffices: ['U.S. House MI-8 (2001–2015)', 'Chair, House Intelligence Committee (2011–2015)'],
        priorRuns: ['U.S. Senate (2024 — lost to Slotkin by ~0.3 points)'],
        keyIssues: ['National security', 'Border', 'Economy', 'China'],
        endorsements: ['President Donald Trump (2025-03-11)', 'NRSC'],
        notes: 'Lost 2024 Senate race by under 20,000 votes. Cleared the GOP field for 2026.',
        status: 'frontrunner',
      },
    ],
  },
}

/* ── U.S. House (all 13 districts) ── */

export const MI_2026_US_HOUSE = [
  {
    district: 'MI-1',
    cookRating: 'Likely R',
    description: 'Northern Lower Peninsula and Upper Peninsula.',
    incumbent: {
      name: 'Jack Bergman',
      party: 'Republican',
      since: 2017,
      running: true,
      website: 'https://bergman.house.gov',
    },
    challengers: [
      { name: 'Callie Barr', party: 'Democratic', notes: 'Attorney, 2024 nominee.' },
    ],
  },
  {
    district: 'MI-2',
    cookRating: 'Safe R',
    description: 'West-central Lower Peninsula (Mt. Pleasant, Big Rapids, Cadillac).',
    incumbent: {
      name: 'John Moolenaar',
      party: 'Republican',
      since: 2015,
      running: true,
      website: 'https://moolenaar.house.gov',
    },
    challengers: [],
  },
  {
    district: 'MI-3',
    cookRating: 'Lean D',
    description: 'Grand Rapids and Kent County suburbs.',
    incumbent: {
      name: 'Hillary Scholten',
      party: 'Democratic',
      since: 2023,
      running: true,
      website: 'https://scholten.house.gov',
    },
    challengers: [
      { name: 'Tim Kelly', party: 'Republican', notes: 'Former state representative.' },
    ],
  },
  {
    district: 'MI-4',
    cookRating: 'Likely R',
    description: 'Southwest Michigan (Kalamazoo to Battle Creek to lakeshore).',
    incumbent: {
      name: 'Bill Huizenga',
      party: 'Republican',
      since: 2011,
      running: true,
      website: 'https://huizenga.house.gov',
      notes: 'Considered running for Senate in 2024 but stayed in House.',
    },
    challengers: [],
  },
  {
    district: 'MI-5',
    cookRating: 'Safe R',
    description: 'Southern Michigan border (Hillsdale, Coldwater, Adrian).',
    incumbent: {
      name: 'Tim Walberg',
      party: 'Republican',
      since: 2011,
      running: true,
      website: 'https://walberg.house.gov',
    },
    challengers: [],
  },
  {
    district: 'MI-6',
    cookRating: 'Safe D',
    description: 'Ann Arbor and parts of western Wayne County.',
    incumbent: {
      name: 'Debbie Dingell',
      party: 'Democratic',
      since: 2015,
      running: true,
      website: 'https://debbiedingell.house.gov',
    },
    challengers: [],
  },
  {
    district: 'MI-7',
    cookRating: 'Toss-up',
    description:
      'Mid-Michigan including Lansing/East Lansing. Top national Democratic pickup target.',
    incumbent: {
      name: 'Tom Barrett',
      party: 'Republican',
      since: 2025,
      running: true,
      website: 'https://barrett.house.gov',
      notes: 'Freshman; won open seat after Elissa Slotkin ran for Senate.',
    },
    challengers: [
      {
        name: 'Curtis Hertel Jr.',
        party: 'Democratic',
        notes: 'Former state senator; 2024 nominee who lost narrowly. Running again.',
      },
      {
        name: 'Trevor Watson',
        party: 'Democratic',
        notes: 'Air Force veteran.',
      },
    ],
  },
  {
    district: 'MI-8',
    cookRating: 'Toss-up',
    description:
      'Flint, Saginaw, Bay City, Tri-Cities. Top national Republican pickup target.',
    incumbent: {
      name: 'Kristen McDonald Rivet',
      party: 'Democratic',
      since: 2025,
      running: true,
      website: 'https://mcdonaldrivet.house.gov',
      notes: 'Freshman; former state senator.',
    },
    challengers: [
      {
        name: 'Paul Junge',
        party: 'Republican',
        notes: 'Attorney, frequent MI-8 candidate.',
      },
      {
        name: 'Bill G. Schuette',
        party: 'Republican',
        notes: 'State representative, son of former AG Bill Schuette.',
      },
    ],
  },
  {
    district: 'MI-9',
    cookRating: 'Safe R',
    description: 'Northern Macomb and St. Clair County (Port Huron, parts of Lapeer).',
    incumbent: {
      name: 'Lisa McClain',
      party: 'Republican',
      since: 2021,
      running: true,
      website: 'https://mcclain.house.gov',
      notes: 'Chair, House Republican Conference (#4 GOP leadership).',
    },
    challengers: [],
  },
  {
    district: 'MI-10',
    cookRating: 'Lean R',
    description:
      'Southern Macomb County and parts of Oakland (Rochester area). Open seat — James running for Governor.',
    incumbent: null,
    incumbentName: 'John James (R) — running for Governor',
    candidates: [
      {
        name: 'Brian Begole',
        party: 'Republican',
        notes: 'State representative.',
      },
      {
        name: 'Carl Marlinga',
        party: 'Democratic',
        notes: 'Former Macomb County judge; 2022 and 2024 nominee.',
      },
      {
        name: 'Diane Young',
        party: 'Democratic',
        notes: 'Attorney; Macomb County Bar leader.',
      },
    ],
  },
  {
    district: 'MI-11',
    cookRating: 'Safe D',
    description: 'Oakland County (Bloomfield, Birmingham, Royal Oak, parts of Troy).',
    incumbent: null,
    incumbentName: 'Haley Stevens (D) — running for U.S. Senate',
    candidates: [
      {
        name: 'Brenda Lawrence',
        party: 'Democratic',
        notes: 'Former U.S. Rep. (MI-14, 2015–2023), exploring comeback.',
      },
      {
        name: 'Padma Kuppa',
        party: 'Democratic',
        notes: 'Former state representative.',
      },
      {
        name: 'Sam Yono',
        party: 'Republican',
        notes: '2024 nominee, businessman.',
      },
    ],
  },
  {
    district: 'MI-12',
    cookRating: 'Safe D',
    description: 'Downriver, western Wayne County, and parts of Detroit and Dearborn.',
    incumbent: {
      name: 'Rashida Tlaib',
      party: 'Democratic',
      since: 2019,
      running: true,
      website: 'https://tlaib.house.gov',
    },
    challengers: [],
  },
  {
    district: 'MI-13',
    cookRating: 'Safe D',
    description: 'Most of Detroit and northeastern suburbs.',
    incumbent: null,
    incumbentName: 'Joe Tate (D) — running for U.S. Senate',
    candidates: [
      {
        name: 'Shri Thanedar',
        party: 'Democratic',
        notes: 'Former MI-13 incumbent (2023–2025); businessman.',
      },
      {
        name: 'Adam Hollier',
        party: 'Democratic',
        notes: 'Former state senator; 2022 and 2024 candidate.',
      },
      {
        name: 'Mary Waters',
        party: 'Democratic',
        notes: 'Detroit City Council Member At-Large.',
      },
    ],
  },
]

/* ── Other statewide partisan offices ── */

export const MI_2026_STATEWIDE = [
  {
    office: 'Secretary of State',
    incumbent: 'Jocelyn Benson (D) — running for Governor',
    incumbentStatus: 'open',
    description: 'Chief election officer of Michigan. Open seat.',
    candidates: {
      democratic: [
        {
          name: 'Aghogho Edevbie',
          currentRole: 'MI Deputy Secretary of State',
          website: 'https://aghoghoformi.com',
          announced: '2025-05-08',
          keyIssues: ['Election security', 'Voter access', 'Modernization'],
        },
        {
          name: 'Jeremy Moss',
          currentRole: 'State Senator (D-Southfield)',
          website: 'https://jeremymoss.com',
          announced: '2025-04-30',
          keyIssues: ['Voting rights', 'Government transparency', 'Anti-gerrymandering'],
        },
      ],
      republican: [
        {
          name: 'Ruth Johnson',
          currentRole: 'State Senator / former MI Secretary of State',
          website: 'https://ruthjohnsonformi.com',
          announced: '2025-06-15',
          priorOffices: ['Secretary of State (2011–2019)'],
          keyIssues: ['Election integrity', 'Voter ID'],
        },
      ],
    },
  },
  {
    office: 'Attorney General',
    incumbent: 'Dana Nessel (D)',
    incumbentStatus: 'term-limited',
    description: "Michigan's chief legal officer. Open seat.",
    candidates: {
      democratic: [
        {
          name: 'Mark Totten',
          currentRole: 'Former U.S. Attorney (W.D. Michigan)',
          website: 'https://totten4ag.com',
          announced: '2025-04-22',
          keyIssues: ['Public corruption', 'Consumer protection', 'Civil rights'],
        },
        {
          name: 'Carl Marlinga',
          currentRole: 'Former Macomb County judge / former prosecutor',
          announced: '2025-09-03',
          notes: 'Also exploring MI-10 House race.',
        },
      ],
      republican: [
        {
          name: 'Matthew DePerno',
          currentRole: 'Attorney',
          website: 'https://depernoforag.com',
          announced: '2025-05-15',
          priorRuns: ['Attorney General (2022 — lost to Nessel)'],
          notes:
            'Indicted in 2024 over alleged voting-machine tampering scheme. Charges dismissed in late 2025; running again.',
        },
        {
          name: 'Joani Gerber',
          currentRole: 'Attorney / former AG candidate',
          announced: '2025-07-11',
        },
      ],
    },
  },
]

/* ── Michigan Supreme Court (2 seats — nonpartisan ballot, partisan nominations) ── */

export const MI_2026_SUPREME_COURT = {
  office: 'Michigan Supreme Court',
  description:
    'Two of seven seats are up. Justices serve 8-year terms. Nominated by party conventions but ' +
    'appear on a nonpartisan ballot. Current court: 6 Democrat-nominated, 1 Republican-nominated.',
  seats: [
    {
      seat: 'Chief Justice (currently held by Megan Cavanagh)',
      incumbent: {
        name: 'Megan K. Cavanagh',
        nominatedBy: 'Democratic',
        since: 2019,
        running: true,
        currentRole: 'Chief Justice',
        notes: 'Elected Chief Justice by colleagues. Seeking 8-year reelection term.',
      },
      challengers: 'Republican nominee TBD at August convention.',
    },
    {
      seat: 'Justice (currently held by Noah Hood)',
      incumbent: {
        name: 'Noah Hood',
        nominatedBy: 'Democratic',
        since: 2024,
        running: true,
        currentRole: 'Justice',
        notes:
          'Appointed by Gov. Whitmer in late 2023 to fill the seat vacated by Justice Cavanagh becoming Chief Justice. Must stand for election in 2026 to complete the term.',
      },
      challengers: 'Republican nominee TBD at August convention.',
    },
  ],
}

/* ── State Board of Education (2 seats) ── */

export const MI_2026_STATE_BOARD = {
  office: 'State Board of Education',
  description:
    '8-year terms. Two seats up in 2026. Sets statewide K-12 education policy and oversees the ' +
    'Michigan Department of Education and State Superintendent.',
  seatsUp: 2,
  currentBalance: '6D-2R',
  candidates: {
    democratic: ['TBD — nominated at state convention'],
    republican: ['TBD — nominated at state convention'],
  },
}

/* ── University Governing Boards (2 seats each) ── */

export const MI_2026_UNIVERSITY_BOARDS = [
  {
    office: 'University of Michigan Board of Regents',
    seatsUp: 2,
    description:
      '8-year terms. Governs the University of Michigan system (Ann Arbor, Flint, Dearborn). ' +
      'Two of eight seats up in 2026.',
    candidates: { democratic: ['TBD'], republican: ['TBD'] },
  },
  {
    office: 'Michigan State University Board of Trustees',
    seatsUp: 2,
    description: '8-year terms. Two of eight seats up in 2026.',
    candidates: { democratic: ['TBD'], republican: ['TBD'] },
  },
  {
    office: 'Wayne State University Board of Governors',
    seatsUp: 2,
    description: '8-year terms. Two of eight seats up in 2026.',
    candidates: { democratic: ['TBD'], republican: ['TBD'] },
  },
]

/* ── Aggregated 2026 race index ── */

export const MI_2026_ALL_RACES = {
  governor: MI_2026_GOVERNOR,
  senate: MI_2026_SENATE,
  usHouse: MI_2026_US_HOUSE,
  statewide: MI_2026_STATEWIDE,
  supremeCourt: MI_2026_SUPREME_COURT,
  stateBoard: MI_2026_STATE_BOARD,
  universityBoards: MI_2026_UNIVERSITY_BOARDS,
}

/**
 * Returns the 2026 races most relevant to a voter based on their U.S. House
 * district. Used by ElectionsView and BallotView to surface personalized
 * race info.
 */
export function getRacesForDistrict(houseDistrict) {
  const houseRace = houseDistrict
    ? MI_2026_US_HOUSE.find(r => r.district === `MI-${houseDistrict}`)
    : null
  return {
    federal: {
      house: houseRace,
      senate: MI_2026_SENATE,
    },
    statewide: {
      governor: MI_2026_GOVERNOR,
      secretaryOfState: MI_2026_STATEWIDE.find(r => r.office === 'Secretary of State'),
      attorneyGeneral: MI_2026_STATEWIDE.find(r => r.office === 'Attorney General'),
      supremeCourt: MI_2026_SUPREME_COURT,
      stateBoard: MI_2026_STATE_BOARD,
    },
  }
}
