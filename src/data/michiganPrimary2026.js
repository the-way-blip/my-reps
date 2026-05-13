// Michigan August 4, 2026 Primary Election Data
// Open primary: voters choose ONE party column on the same ballot
// Convention-nominated offices (SoS, AG, education boards) are NOT on the primary

export const PRIMARY_DATE = 'August 4, 2026'
export const REGISTRATION_DEADLINE = 'July 20, 2026 (online/mail) or August 4, 2026 (in person at clerk)'
export const EARLY_VOTING_START = 'July 26, 2026'
export const ABSENTEE_DEADLINE = 'July 31, 2026 (by mail) or August 3, 2026 (in person)'

export const PRIMARY_INFO = {
  title: 'Michigan August Primary',
  date: PRIMARY_DATE,
  type: 'Open Primary',
  explanation: 'Michigan uses an open primary. Every voter receives the same ballot with separate party columns. You may vote in only ONE party\'s column for partisan races. If you mark candidates in both columns, your partisan votes are invalidated. You can always vote in the nonpartisan section regardless of which party column you choose.',
  registrationDeadline: REGISTRATION_DEADLINE,
  earlyVotingStart: EARLY_VOTING_START,
  absenteeDeadline: ABSENTEE_DEADLINE,
}

// Constitutional alignment grading criteria (same 6 issues as the app scorecard)
// A = Strong alignment, B = Mostly aligned, C = Mixed/Moderate, D = Mostly opposed, F = Opposed
// null = Unknown / insufficient record

// ── Statewide Races ──────────────────────────────────────────────

export const STATEWIDE_RACES = [
  {
    id: 'governor',
    office: 'Governor',
    level: 'State',
    description: 'Open seat — Gretchen Whitmer (D) is term-limited.',
    candidates: {
      republican: [
        {
          name: 'John James',
          description: 'U.S. Representative (MI-10)',
          status: 'frontrunner',
          website: 'https://johnjamesmi.com/',
          twitter: 'JohnJamesMI',
          facebook: 'https://www.facebook.com/JohnJamesMI/',
          instagram: 'johnjamesmi',
          raised: '$10.3M',
          topDonors: 'DeVos family ($5M to Super PAC), Charles Secchia, Ross Perot Jr.',
          grade: 'A',
          positions: {
            proLife: 'A',
            marriage: 'B',
            religiousLiberty: 'A',
            secondAmendment: 'A',
            limitedGov: 'A',
            fiscal: 'A',
          },
          bio: 'West Point graduate, Army veteran (Apache helicopter pilot), and businessman. Served in Iraq and Afghanistan. Elected to U.S. House in 2022 after two U.S. Senate campaigns. Endorsed by Trump in 2020 Senate race.',
          keyPositions: [
            'Voted to defund ATF enforcement of pistol brace rule',
            'Co-sponsored Born-Alive Abortion Survivors Protection Act',
            'A-rated by NRA, endorsed by Michigan gun rights groups',
            'Supports balanced budget amendment',
          ],
        },
        {
          name: 'Perry Johnson',
          description: 'Businessman, 2022 gubernatorial candidate',
          status: 'major',
          website: 'https://www.perryjohnson.com/',
          twitter: 'PJQualityGuru',
          raised: '$10M+ (self-funded)',
          topDonors: 'Self-funded campaign',
          grade: 'B',
          positions: {
            proLife: 'B',
            marriage: null,
            religiousLiberty: 'B',
            secondAmendment: 'B',
            limitedGov: 'A',
            fiscal: 'A',
          },
          bio: 'Founder of Perry Johnson Registrars Inc., one of the largest ISO certification companies. Business background focused on quality management. Previous 2022 gubernatorial and 2024 presidential campaigns.',
          keyPositions: [
            'Pledges to cut state spending and reduce regulations',
            'Supports school choice and education reform',
            'Opposes state income tax increases',
            'Supports Second Amendment rights',
          ],
        },
        {
          name: 'Aric Nesbitt',
          description: 'State Senate Minority Leader',
          status: 'major',
          website: 'https://nesbittforgovernor.com/',
          twitter: 'SenAricNesbitt',
          facebook: 'https://www.facebook.com/aricnesbitt/',
          raised: '$2.3M',
          topDonors: 'GOPAC ($400K+), legislative PAC transfers ($800K)',
          grade: 'A',
          positions: {
            proLife: 'A',
            marriage: 'A',
            religiousLiberty: 'A',
            secondAmendment: 'A',
            limitedGov: 'A',
            fiscal: 'A',
          },
          bio: 'Longest-serving Republican in the Michigan Senate. Led Senate minority through Democratic trifecta. Known for fiscal conservatism and opposing Whitmer administration policies.',
          keyPositions: [
            'Led opposition to Michigan\'s repeal of 1931 abortion ban',
            'Opposed Prop 3 (abortion constitutional amendment)',
            'Voted against every Whitmer tax increase',
            'Authored Right to Work defense legislation',
            'A+ NRA rating throughout legislative career',
          ],
        },
        {
          name: 'Mike Cox',
          description: 'Former Michigan Attorney General',
          status: 'major',
          website: 'https://mikecox2026.com/',
          twitter: 'Mike_Cox',
          raised: '$5.1M',
          topDonors: 'Self-funded (over half), Peter Karmanos, attorney donors',
          grade: 'A',
          positions: {
            proLife: 'A',
            marriage: 'A',
            religiousLiberty: 'A',
            secondAmendment: 'A',
            limitedGov: 'A',
            fiscal: 'B',
          },
          bio: 'Served as Michigan Attorney General 2003-2011. Led legal challenges on constitutional issues. Private practice attorney. Previous 2010 gubernatorial campaign.',
          keyPositions: [
            'Defended Michigan\'s marriage amendment as AG',
            'Joined multistate lawsuit against Obamacare',
            'Strong law enforcement record as AG',
            'Supports constitutional carry',
          ],
        },
        {
          name: 'Evan Space',
          description: 'Military veteran, Traverse City',
          status: 'minor',
          website: 'https://space4governor.com/',
          twitter: 'GovernorSpace',
          grade: 'C',
          positions: {
            proLife: null,
            marriage: null,
            religiousLiberty: null,
            secondAmendment: 'A',
            limitedGov: 'B',
            fiscal: null,
          },
          bio: 'Third-time gubernatorial candidate. Military veteran running on grassroots platform.',
        },
      ],
      democratic: [
        {
          name: 'Jocelyn Benson',
          description: 'Michigan Secretary of State',
          status: 'frontrunner',
          website: 'https://www.jocelynbenson.com/',
          twitter: 'JocelynBenson',
          raised: '$5.8M',
          topDonors: 'Ford family, Jon Stryker (billionaire), Jeff Dean (Google AI)',
          grade: 'F',
          positions: {
            proLife: 'F',
            marriage: 'F',
            religiousLiberty: 'D',
            secondAmendment: 'F',
            limitedGov: 'F',
            fiscal: 'F',
          },
          bio: 'Two-term Secretary of State. Election law professor at Wayne State Law School. Expanded voting access as SoS. Heavily favored in Democratic primary.',
          keyPositions: [
            'Championed Prop 2 (independent redistricting) and Prop 3 (voting access)',
            'Supports gun safety legislation including red flag laws',
            'Supports Prop 3 abortion rights amendment',
            'Expanded mail-in and early voting as SoS',
          ],
        },
        {
          name: 'Chris Swanson',
          description: 'Genesee County Sheriff',
          status: 'major',
          website: 'https://swansonformichigan.com/',
          twitter: 'swanson4mi',
          facebook: 'https://www.facebook.com/swanson4mi/',
          instagram: 'swanson4mi',
          raised: '$87K',
          topDonors: 'Union endorsements (12+ including Boilermakers, IBEW)',
          grade: 'D',
          positions: {
            proLife: 'D',
            marriage: 'F',
            religiousLiberty: 'C',
            secondAmendment: 'C',
            limitedGov: 'D',
            fiscal: 'D',
          },
          bio: 'Genesee County Sheriff known for "walking with protesters" during 2020 George Floyd protests. Law enforcement career spanning 30+ years. Union-backed candidate.',
        },
        {
          name: 'Kevin Hogan',
          description: 'Candidate',
          status: 'minor',
          grade: null,
        },
        {
          name: 'Marni Sawicki',
          description: 'Candidate',
          status: 'minor',
          grade: null,
        },
        {
          name: 'Kim Thomas',
          description: 'Candidate',
          status: 'minor',
          grade: null,
        },
      ],
    },
    note: 'Mike Duggan (I) is running as an independent and will not appear on the primary ballot.',
  },
  {
    id: 'us-senate',
    office: 'U.S. Senate',
    level: 'Federal',
    description: 'Open seat — Gary Peters (D) is retiring. Rated a toss-up.',
    candidates: {
      republican: [
        {
          name: 'Mike Rogers',
          description: 'Former U.S. Rep (MI-8), 2024 Senate nominee',
          status: 'frontrunner',
          website: 'https://rogersforsenate.com/',
          twitter: 'MikeRogersForMI',
          fecId: 'S4MI00595',
          raised: '$7.6M',
          cashOnHand: '$4.2M',
          topDonors: 'Senate Leadership Fund ($45M outside spending), Roger Penske ($250K to Super PAC)',
          grade: 'B',
          positions: {
            proLife: 'B',
            marriage: 'B',
            religiousLiberty: 'B',
            secondAmendment: 'A',
            limitedGov: 'B',
            fiscal: 'B',
          },
          bio: 'Former U.S. Representative (2001-2015) and FBI special agent. Chaired House Intelligence Committee. 2024 Republican Senate nominee. Endorsed by Senate Majority Leader John Thune.',
          keyPositions: [
            'Chaired House Intelligence Committee — national security hawk',
            'Supported FISA reauthorization and intelligence programs',
            'A-rated by NRA during congressional tenure',
            'Endorsed by NRSC and most major Republican organizations',
          ],
        },
        {
          name: 'Bernadette Smith',
          description: 'Former MI GOP co-chair',
          status: 'minor',
          grade: null,
        },
      ],
      democratic: [
        {
          name: 'Haley Stevens',
          description: 'U.S. Representative (MI-11)',
          status: 'major',
          website: 'https://haleyformi.com/',
          twitter: 'HaleyforMI',
          fecId: 'S6MI00426',
          raised: '$8.9M',
          cashOnHand: '$3.4M',
          topDonors: 'AIPAC-aligned donors, Debbie Stabenow endorsement, corporate/professional donors',
          grade: 'F',
          positions: {
            proLife: 'F',
            marriage: 'F',
            religiousLiberty: 'D',
            secondAmendment: 'F',
            limitedGov: 'F',
            fiscal: 'F',
          },
          bio: 'U.S. Representative since 2019. Former Obama auto industry task force member. Focused on manufacturing and STEM education.',
          keyPositions: [
            'Co-sponsored Equality Act',
            'Voted for Inflation Reduction Act',
            'Supports assault weapons ban',
            'Supports codifying Roe v. Wade',
          ],
        },
        {
          name: 'Mallory McMorrow',
          description: 'State Senator, Royal Oak',
          status: 'major',
          website: 'https://www.mcmorrowformichigan.com/',
          twitter: 'MalloryMcMorrow',
          facebook: 'https://www.facebook.com/mcmorrowformichigan/',
          fecId: 'S6MI00392',
          raised: '$8.6M',
          cashOnHand: '$3.7M',
          topDonors: 'Small-dollar donors (98% of total), grassroots fundraising',
          grade: 'F',
          positions: {
            proLife: 'F',
            marriage: 'F',
            religiousLiberty: 'D',
            secondAmendment: 'F',
            limitedGov: 'F',
            fiscal: 'F',
          },
          bio: 'State Senator known for viral 2022 floor speech defending LGBTQ rights. Elizabeth Warren endorsement. Record-breaking small-dollar fundraising.',
          keyPositions: [
            'Viral speech opposing "groomer" accusations against Democrats',
            'Voted for Michigan\'s LGBTQ civil rights expansion',
            'Supports gun safety legislation',
            'Voted for Prop 3 abortion rights codification bills',
          ],
        },
        {
          name: 'Abdul El-Sayed',
          description: 'Physician, former 2018 gubernatorial candidate',
          status: 'major',
          website: 'https://abdulforsenate.com/',
          twitter: 'AbdulElSayed',
          facebook: 'https://www.facebook.com/DrAbdulElSayed/',
          fecId: 'S6MI00418',
          raised: '$7.6M',
          cashOnHand: '$2.5M',
          topDonors: 'Small-dollar / grassroots donors, Bernie Sanders endorsement',
          grade: 'F',
          positions: {
            proLife: 'F',
            marriage: 'F',
            religiousLiberty: 'D',
            secondAmendment: 'F',
            limitedGov: 'F',
            fiscal: 'F',
          },
          bio: 'Epidemiologist and public health advocate. Former Detroit Health Department director. 2018 gubernatorial candidate. Progressive policy platform.',
          keyPositions: [
            'Supports Medicare for All',
            'Endorsed by Bernie Sanders',
            'Supports Green New Deal',
            'Supports abolishing the filibuster',
          ],
        },
        {
          name: 'Rachel Howard',
          description: 'Combat medic veteran, Purple Heart recipient',
          status: 'major',
          website: 'https://rachelforussenate.org/',
          fecId: 'S6MI00467',
          raised: '$11K',
          grade: null,
          bio: 'Combat medic veteran with Purple Heart. VA researcher. Running on veterans issues and healthcare.',
        },
        {
          name: 'Travis Zollner',
          description: 'Candidate',
          status: 'minor',
          grade: null,
        },
      ],
    },
  },
]

// ── U.S. House Races (by district) ──────────────────────────────

export const US_HOUSE_RACES = {
  1: {
    office: 'U.S. House — District 1',
    region: 'Upper Peninsula & Northern Lower',
    incumbent: 'Jack Bergman (R)',
    candidates: {
      republican: [
        { name: 'Jack Bergman', description: 'Incumbent, retired Lt. General', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  2: {
    office: 'U.S. House — District 2',
    region: 'West Michigan (Grand Rapids, Muskegon)',
    incumbent: 'John Moolenaar (R)',
    candidates: {
      republican: [
        { name: 'John Moolenaar', description: 'Incumbent', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  3: {
    office: 'U.S. House — District 3',
    region: 'Southwest Michigan (Kalamazoo, Battle Creek)',
    incumbent: 'Hillary Scholten (D)',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Hillary Scholten', description: 'Incumbent', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  4: {
    office: 'U.S. House — District 4',
    region: 'Central Michigan (Midland, Mt. Pleasant)',
    incumbent: 'Bill Huizenga (R)',
    candidates: {
      republican: [
        { name: 'Bill Huizenga', description: 'Incumbent', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  5: {
    office: 'U.S. House — District 5',
    region: 'Southeast Michigan (Monroe, Lenawee)',
    incumbent: 'Tim Walberg (R)',
    candidates: {
      republican: [
        { name: 'Tim Walberg', description: 'Incumbent', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  6: {
    office: 'U.S. House — District 6',
    region: 'Ann Arbor & Washtenaw',
    incumbent: 'Debbie Dingell (D)',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Debbie Dingell', description: 'Incumbent', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  7: {
    office: 'U.S. House — District 7',
    region: 'Lansing & South Central Michigan',
    incumbent: 'Tom Barrett (R)',
    note: 'Competitive swing district. Top Democratic target.',
    candidates: {
      republican: [
        { name: 'Tom Barrett', description: 'Incumbent, former State Senator', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  8: {
    office: 'U.S. House — District 8',
    region: 'Flint / Tri-Cities / Bay City / Saginaw',
    incumbent: 'Kristen McDonald Rivet (D)',
    note: 'Competitive swing district. Top Republican target.',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Kristen McDonald Rivet', description: 'Incumbent', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  9: {
    office: 'U.S. House — District 9',
    region: 'Macomb County / Northern Oakland',
    incumbent: 'Lisa McClain (R)',
    candidates: {
      republican: [
        { name: 'Lisa McClain', description: 'Incumbent', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  10: {
    office: 'U.S. House — District 10',
    region: 'Southern Macomb / Oakland County',
    incumbent: 'Open (John James running for Governor)',
    note: 'Open seat — swing district. Highly competitive.',
    candidates: {
      republican: [],
      democratic: [],
    },
  },
  11: {
    office: 'U.S. House — District 11',
    region: 'Oakland County / Western Detroit Suburbs',
    incumbent: 'Haley Stevens (D)',
    note: 'Stevens may vacate if she wins Senate primary.',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Haley Stevens', description: 'Incumbent (also running for U.S. Senate)', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  12: {
    office: 'U.S. House — District 12',
    region: 'Downriver / Monroe / Western Wayne',
    incumbent: 'Rashida Tlaib (D)',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Rashida Tlaib', description: 'Incumbent', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  13: {
    office: 'U.S. House — District 13',
    region: 'Detroit & Grosse Pointe',
    incumbent: 'Shri Thanedar (D)',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Shri Thanedar', description: 'Incumbent', status: 'incumbent', grade: 'F' },
      ],
    },
  },
}

// ── Ballot Proposals (confirmed or likely for Nov 2026) ──────────

export const BALLOT_PROPOSALS = [
  {
    id: 'prop-1-con-con',
    name: 'Proposal 1 — Constitutional Convention',
    type: 'constitutional',
    status: 'confirmed',
    description: 'Mandatory ballot question (every 16 years) asking whether Michigan should hold a constitutional convention to revise the 1963 state constitution.',
    conservativeView: 'Opportunity to enshrine fiscal discipline, protect gun rights, and revisit progressive amendments. But conventions are unpredictable — conservative groups are divided.',
    progressiveView: 'Risk of rolling back recent voting, reproductive, and labor rights amendments.',
    recommendation: 'Research carefully — a convention rewrites everything.',
  },
  {
    id: 'prop-citizenship-voting',
    name: 'Citizenship Verification for Voting',
    type: 'constitutional amendment',
    status: 'likely',
    statusNote: '750,000 signatures submitted (needs 446,198). Pending verification.',
    description: 'Requires proof of citizenship to register to vote, photo ID for absentee voting, eliminates affidavit-of-identity option, and mandates removal of noncitizens from voter rolls.',
    conservativeView: 'Common-sense election integrity measure ensuring only citizens vote. Strongly supported.',
    progressiveView: 'Critics say it creates barriers to voting, especially for naturalized citizens and elderly voters.',
    recommendation: null,
  },
  {
    id: 'prop-money-politics',
    name: 'Money Out of Politics',
    type: 'initiated statute',
    status: 'likely',
    statusNote: 'Actively collecting signatures. On track for 500K+ (needs 356,958).',
    description: 'Bans regulated utilities and state government contractors from making political contributions. Modernizes campaign finance disclosure for digital ads.',
    conservativeView: 'Could restrict legitimate political speech and fundraising. May disproportionately impact certain industries.',
    progressiveView: 'Reduces corruption and corporate influence in state politics.',
    recommendation: null,
  },
]

// ── Convention-Nominated Offices (November only, NOT on primary ballot) ──

export const CONVENTION_NOMINEES = {
  secretaryOfState: {
    office: 'Secretary of State',
    note: 'Nominated at party conventions, not on the primary ballot.',
    republican: { name: 'Anthony Forlini', description: 'Macomb County Prosecutor', website: 'https://www.forliniforus.com/', twitter: 'tonyforlini1' },
    democratic: { name: 'Garlin Gilchrist II', description: 'Current Lt. Governor', website: 'https://garlingilchrist.com/', twitter: 'garlin' },
  },
  attorneyGeneral: {
    office: 'Attorney General',
    note: 'Nominated at party conventions, not on the primary ballot.',
    republican: { name: 'Doug Lloyd', description: 'Eaton County Prosecutor', website: 'https://www.votedouglloyd.com/', twitter: 'DougLloyd4ag' },
    democratic: { name: 'Eli Savit', description: 'Washtenaw County Prosecutor', website: 'https://www.eliformichigan.com/', twitter: 'EliNSavit' },
  },
  stateBoardOfEd: {
    office: 'State Board of Education (2 seats)',
    note: 'Nominated at party conventions, not on the primary ballot.',
    republican: [
      { name: 'Terence Collins' },
      { name: 'Bree Moeggenberg' },
    ],
    democratic: [
      { name: 'Tiffany Tilley' },
      { name: 'Judith Pritchett' },
    ],
  },
  umRegents: {
    office: 'U-M Board of Regents (2 seats)',
    note: 'Nominated at party conventions, not on the primary ballot.',
    republican: [
      { name: 'Lena Epstein' },
      { name: 'Michael Schostak' },
    ],
    democratic: [
      { name: 'Paul Brown', description: 'Incumbent' },
      { name: 'Amir Makled' },
    ],
  },
  msuTrustees: {
    office: 'MSU Board of Trustees (2 seats)',
    note: 'Nominated at party conventions, not on the primary ballot.',
    republican: [
      { name: 'Julie Maday', description: 'Former Novi city councilwoman' },
      { name: 'Roger Victory', description: 'State Senator' },
    ],
    democratic: [
      { name: 'Brianna Scott', description: 'Incumbent' },
      { name: 'Kelly Tebay Zemke', description: 'Incumbent' },
    ],
  },
  wayneStateGovernors: {
    office: 'Wayne State Board of Governors (2 seats)',
    note: 'Nominated at party conventions, not on the primary ballot.',
    republican: [
      { name: 'Christa Murphy' },
      { name: 'Andy Anuzis' },
    ],
    democratic: [
      { name: 'Shereef Akeel' },
      { name: 'Richard Mack' },
    ],
  },
  supremeCourt: {
    office: 'Michigan Supreme Court (2 seats)',
    note: 'Nonpartisan on the November ballot. Not on the primary.',
    nominees: [
      { name: 'Megan Cavanagh', description: 'Incumbent Chief Justice (D-nominated)' },
      { name: 'Noah Hood', description: 'Incumbent Justice (D-nominated, appointed 2025)' },
      { name: 'Michael Warren', description: 'Oakland County Circuit Court Judge (R-nominated)' },
      { name: 'Casandra Morse-Bills', description: '23rd Judicial Circuit Judge (R-nominated)' },
    ],
  },
}

// ── Grade color helper ──

export function getGradeColor(grade) {
  if (!grade) return null
  const map = { A: '#22c55e', B: '#84cc16', C: '#ca8a04', D: '#f97316', F: '#ef4444' }
  return map[grade] || null
}

// ── Helper: Get races for a given party and districts ──

export function getPrimaryBallot(party, districts = {}) {
  const ballot = []
  const partyKey = party === 'republican' ? 'republican' : 'democratic'

  // Statewide races
  STATEWIDE_RACES.forEach(race => {
    const candidates = race.candidates[partyKey] || []
    ballot.push({
      id: race.id,
      office: race.office,
      level: race.level,
      description: race.description,
      note: race.note,
      candidates,
      type: 'partisan',
    })
  })

  // U.S. House
  const cd = districts.congressional
  if (cd && US_HOUSE_RACES[cd]) {
    const race = US_HOUSE_RACES[cd]
    ballot.push({
      id: `us-house-${cd}`,
      office: race.office,
      level: 'Federal',
      description: race.region,
      note: race.note,
      candidates: race.candidates[partyKey] || [],
      type: 'partisan',
      allowWrite: true,
    })
  } else {
    ballot.push({
      id: 'us-house-unknown',
      office: 'U.S. House',
      level: 'Federal',
      description: 'Use the search bar at the top of the app to enter your full address and determine your congressional district.',
      candidates: [],
      type: 'partisan',
      allowWrite: true,
    })
  }

  // State Senate
  const sd = districts.stateSenate
  ballot.push({
    id: sd ? `state-senate-${sd}` : 'state-senate-unknown',
    office: sd ? `State Senate — District ${sd}` : 'State Senate',
    level: 'State',
    description: sd
      ? 'All 38 state senate seats are on the ballot.'
      : 'Use the search bar to enter your full address and find your state senate district.',
    candidates: [],
    type: 'partisan',
    allowWrite: true,
  })

  // State House
  const hd = districts.stateHouse
  ballot.push({
    id: hd ? `state-house-${hd}` : 'state-house-unknown',
    office: hd ? `State House — District ${hd}` : 'State House',
    level: 'State',
    description: hd
      ? 'All 110 state house seats are on the ballot.'
      : 'Use the search bar to enter your full address and find your state house district.',
    candidates: [],
    type: 'partisan',
    allowWrite: true,
  })

  return ballot
}
