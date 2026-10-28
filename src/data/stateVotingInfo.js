// Per-state voting rules, deadlines and official links shown on the ballot page.
// Michigan is the default; Indiana is preview-only until launch (see indianaBallot.js).

const MI_SITE = 'https://mvic.sos.state.mi.us/Voter/Index'
const IN_SITE = 'https://indianavoters.in.gov/'

export const STATE_VOTING_INFO = {
  MI: {
    code: 'MI',
    name: 'Michigan',
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
}

export const getStateVotingInfo = code => STATE_VOTING_INFO[code] || STATE_VOTING_INFO.MI
