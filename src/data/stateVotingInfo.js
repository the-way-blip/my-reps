// Per-state voting rules, deadlines and official links shown on the ballot page.
// Michigan is the default; Indiana is preview-only until launch (see indianaBallot.js).

const MI_SITE = 'https://mvic.sos.state.mi.us/Voter/Index'
const IN_SITE = 'https://indianavoters.in.gov/'

export const STATE_VOTING_INFO = {
  MI: {
    code: 'MI',
    name: 'Michigan',
    sourceName: 'Michigan Secretary of State',
    voterSite: MI_SITE,
    voterSiteName: 'Michigan Voter Information Center',
    registerUrl: 'https://mvic.sos.state.mi.us/RegisterVoter',
    absenteeUrl: 'https://mvic.sos.state.mi.us/AVApplication/Index',
    sameDayRegistration: true,
    electionDayText: "Polls are open. You can still register at your clerk's office and vote today.",
    deadlines: [
      { date: '2026-10-19T12:00:00', label: 'Registration deadline (online/mail)', action: 'Register now', href: 'https://mvic.sos.state.mi.us/RegisterVoter' },
      { date: '2026-10-24T12:00:00', label: 'Early voting begins', action: 'Find early voting site', href: MI_SITE },
      { date: '2026-10-30T12:00:00', label: 'Absentee ballot deadline (mail)', action: 'Request absentee ballot', href: 'https://mvic.sos.state.mi.us/AVApplication/Index' },
      { date: '2026-11-02T12:00:00', label: 'Last day for in-person absentee', action: 'Find your clerk', href: MI_SITE },
      { date: '2026-11-03T12:00:00', label: 'General Election Day', action: 'Find your polling place', href: MI_SITE },
    ],
    checklist: {
      id: "Michigan requires a photo ID to vote. If you don't have one, you can sign an affidavit at the polls and still vote.",
      registration: 'Check your registration status at the Michigan Voter Information Center. You can register at your clerk\'s office through Election Day.',
      polling: "Michigan polls are open 7:00 AM – 8:00 PM. If you're in line by 8 PM, you will be allowed to vote.",
    },
  },
  IN: {
    code: 'IN',
    name: 'Indiana',
    sourceName: 'Indiana Election Division',
    voterSite: IN_SITE,
    voterSiteName: 'IndianaVoters.in.gov',
    registerUrl: IN_SITE,
    absenteeUrl: IN_SITE,
    sameDayRegistration: false,
    electionDayText: 'Polls are open 6 a.m. – 6 p.m. local time. Bring a government-issued photo ID.',
    deadlines: [
      { date: '2026-10-05T12:00:00', label: 'Voter registration deadline', action: 'Check registration', href: IN_SITE },
      { date: '2026-10-22T12:00:00', label: 'Absentee-by-mail application deadline', action: 'Absentee info', href: IN_SITE },
      { date: '2026-11-02T12:00:00', label: 'Early voting ends at noon', action: 'Find early voting', href: IN_SITE },
      { date: '2026-11-03T12:00:00', label: 'General Election Day', action: 'Find your polling place', href: IN_SITE },
    ],
    checklist: {
      id: 'Indiana requires a government-issued photo ID (Indiana or U.S. government, with your name and an expiration date). Without one you can vote a provisional ballot and must show ID to your county election office shortly after the election.',
      registration: 'Indiana registration closed October 5. Confirm your registration and polling place at IndianaVoters.in.gov.',
      polling: 'Indiana polls are open 6:00 AM – 6:00 PM local time. If you\'re in line by 6 PM, you will be allowed to vote. Mailed absentee ballots must arrive by 6 PM on Election Day.',
    },
  },
  IA: {
    code: 'IA',
    name: 'Iowa',
    sourceName: 'Iowa Secretary of State',
    voterSite: 'https://sos.iowa.gov/amiregistered',
    voterSiteName: 'the Iowa Secretary of State voter lookup',
    registerUrl: 'https://sos.iowa.gov/voters/voter-registration',
    absenteeUrl: 'https://sos.iowa.gov/amiregistered',
    sameDayRegistration: true,
    electionDayText: 'Polls are open 7 a.m. – 8 p.m. You can still register at your polling place with ID and proof of residence.',
    localNote: "Some county and township races in this county aren't listed yet — check your county auditor's sample ballot.",
    localNoteUrl: 'https://sos.iowa.gov/elections/auditors/auditorslist.html',
    deadlines: [
      { date: '2026-10-14T12:00:00', label: 'Early in-person voting begins', action: 'Find your county auditor', href: 'https://sos.iowa.gov/elections/auditors/auditorslist.html' },
      { date: '2026-10-19T12:00:00', label: 'Registration & absentee request deadline (5 p.m.)', action: 'Check registration', href: 'https://sos.iowa.gov/amiregistered' },
      { date: '2026-11-02T12:00:00', label: 'Last day to vote early at your county auditor', action: 'Find your county auditor', href: 'https://sos.iowa.gov/elections/auditors/auditorslist.html' },
      { date: '2026-11-03T12:00:00', label: 'General Election Day', action: 'Find your polling place', href: 'https://apps.sos.iowa.gov/elections/voterreg/pollingplace/search.aspx' },
    ],
    checklist: {
      id: 'Iowa requires ID: an Iowa driver\'s license or nonoperator ID, U.S. passport, military or veterans ID, tribal ID, or your signed Iowa Voter ID card. Without one, a registered voter from your precinct can vouch for you, or you can vote a provisional ballot.',
      registration: 'Pre-registration closed October 19, but Iowa allows Election Day registration at your polling place with ID and proof of residence.',
      polling: 'Iowa polls are open 7:00 AM – 8:00 PM. Absentee ballots must reach your county auditor before polls close — a postmark is not enough.',
    },
  },
  WI: {
    code: 'WI',
    name: 'Wisconsin',
    sourceName: 'Wisconsin Elections Commission',
    voterSite: 'https://myvote.wi.gov/en-us/',
    voterSiteName: 'MyVote Wisconsin',
    registerUrl: 'https://myvote.wi.gov/en-us/Register-To-Vote',
    absenteeUrl: 'https://myvote.wi.gov/en-us/Vote-Absentee-By-Mail',
    sameDayRegistration: true,
    electionDayText: 'Polls are open 7 a.m. – 8 p.m. Bring a photo ID. You can still register at your polling place with proof of residence.',
    deadlines: [
      { date: '2026-10-14T12:00:00', label: 'Online & mail registration deadline', action: 'Check registration', href: 'https://myvote.wi.gov/en-us/My-Voter-Info' },
      { date: '2026-10-20T12:00:00', label: 'In-person absentee (early) voting may begin', action: 'Find early voting', href: 'https://myvote.wi.gov/en-us/Vote-Absentee-In-Person' },
      { date: '2026-10-29T12:00:00', label: 'Absentee-by-mail request deadline (5 p.m.)', action: 'Request absentee ballot', href: 'https://myvote.wi.gov/en-us/Vote-Absentee-By-Mail' },
      { date: '2026-10-30T12:00:00', label: "Last day to register at your clerk's office", action: 'Find your clerk', href: 'https://myvote.wi.gov/en-us/' },
      { date: '2026-11-01T12:00:00', label: 'Last possible day of early voting (varies by town)', action: 'Find early voting', href: 'https://myvote.wi.gov/en-us/Vote-Absentee-In-Person' },
      { date: '2026-11-03T12:00:00', label: 'General Election Day', action: 'Find your polling place', href: 'https://myvote.wi.gov/en-us/Find-My-Polling-Place' },
    ],
    checklist: {
      id: 'Wisconsin requires an acceptable photo ID to vote: a Wisconsin driver license or state ID, U.S. passport, military ID, tribal ID, or certain college IDs. The DMV issues a free state ID for voting.',
      registration: 'Online and mail registration closed October 14. You can still register at your municipal clerk\'s office through October 30, or at your polling place on Election Day, with proof of residence.',
      polling: 'Wisconsin polls are open 7:00 AM – 8:00 PM. If you\'re in line by 8 PM, you will be allowed to vote. Absentee ballots must be received by 8 PM on Election Day — postmarks do not count.',
    },
  },
  MN: {
    code: 'MN',
    name: 'Minnesota',
    sourceName: 'Minnesota Secretary of State',
    voterSite: 'https://www.sos.state.mn.us/elections-voting/',
    voterSiteName: 'the Minnesota Secretary of State',
    registerUrl: 'https://mnvotes.sos.mn.gov/VoterRegistration/index',
    absenteeUrl: 'https://mnvotes.sos.mn.gov/ABRegistration/index',
    sameDayRegistration: true,
    electionDayText: 'Polls are open 7 a.m. – 8 p.m. (some small townships open as late as 10 a.m.). You can register at your polling place with proof of residence.',
    deadlines: [
      { date: '2026-09-18T12:00:00', label: 'Early voting begins', action: 'Find early voting', href: 'https://www.sos.state.mn.us/elections-voting/other-ways-to-vote/vote-early-in-person/' },
      { date: '2026-10-13T12:00:00', label: 'Pre-registration deadline', action: 'Check registration', href: 'https://mnvotes.sos.mn.gov/VoterStatus.aspx' },
      { date: '2026-11-02T12:00:00', label: 'Last day of early voting', action: 'Find early voting', href: 'https://www.sos.state.mn.us/elections-voting/other-ways-to-vote/vote-early-in-person/' },
      { date: '2026-11-03T12:00:00', label: 'General Election Day', action: 'Find your polling place', href: 'https://pollfinder.sos.mn.gov/' },
    ],
    checklist: {
      id: "Minnesota does not require ID to vote if you're already registered. If you register at the polls, bring proof of residence, such as a Minnesota driver's license or ID with your current address.",
      registration: 'Pre-registration closed October 13, but Minnesota allows Election Day registration at your polling place with proof of residence.',
      polling: "Minnesota polls are open 7:00 AM – 8:00 PM. If you're in line by 8 PM, you will be allowed to vote. Absentee ballots must be received by Election Day — check the deadline with your county.",
    },
  },
}

export const getStateVotingInfo = code => STATE_VOTING_INFO[code] || STATE_VOTING_INFO.MI
