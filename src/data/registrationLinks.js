// State voter registration URLs, status check links, deadlines, and requirements
// Sources: state secretary of state websites, vote.org
// Michigan has the most detail as the app's primary focus state

export const REGISTRATION_LINKS = {
  MI: {
    registerUrl: 'https://mvic.sos.state.mi.us/registervoter',
    checkUrl: 'https://mvic.sos.state.mi.us/',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '15 days before Election Day' },
      { label: 'In-person registration', date: 'Up to and including Election Day (same-day)' },
      { label: 'Early voting begins', date: '9 days before Election Day' },
      { label: 'Absentee ballot request', date: 'Available to all voters — no reason required' },
      { label: 'Absentee ballot due', date: 'By 8 p.m. on Election Day' },
    ],
    requirements: [
      'Michigan driver\'s license or state ID',
      'Last 4 digits of Social Security Number (if no MI ID)',
      'Current residential address in Michigan',
      'US citizenship',
      'At least 18 years old by Election Day',
    ],
    michiganDetails: {
      sameDayInfo: 'Michigan allows same-day voter registration at your local clerk\'s office. Bring proof of residency (e.g., a document with your name and current address) to register and vote on the same day — including on Election Day itself.',
      earlyVotingInfo: 'Early in-person voting is available starting 9 days before Election Day through the day before the election at your local clerk\'s office.',
      absenteeInfo: 'All registered Michigan voters can request an absentee ballot without providing a reason. You can apply online, by mail, or in person at your clerk\'s office. Track your ballot status at mvic.sos.state.mi.us.',
      idInfo: 'Photo ID is requested but not required at the polls. If you do not have a photo ID, you can sign an affidavit affirming your identity and still cast a regular ballot.',
    },
  },

  AL: {
    registerUrl: 'https://www.alabamainteractive.org/sos/voter_registration/voterRegistrationWelcome.action',
    checkUrl: 'https://myinfo.alabamavotes.gov/voterview',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '15 days before Election Day' },
      { label: 'In-person registration', date: '15 days before Election Day' },
    ],
    requirements: [
      'Valid Alabama driver\'s license or non-driver ID',
      'Last 4 digits of Social Security Number',
      'Date of birth',
      'US citizenship',
    ],
  },

  AK: {
    registerUrl: 'https://voterregistration.alaska.gov/',
    checkUrl: 'https://myvoterinformation.alaska.gov/',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '30 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Alaska driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  AZ: {
    registerUrl: 'https://azsos.gov/elections/voting-election/register-vote-or-update-your-current-voter-information',
    checkUrl: 'https://my.arizona.vote/PortalList.aspx',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '29 days before Election Day' },
      { label: 'In-person registration', date: '29 days before Election Day' },
    ],
    requirements: [
      'Arizona driver\'s license or ID number',
      'Last 4 digits of Social Security Number',
      'Proof of citizenship',
    ],
  },

  AR: {
    registerUrl: 'https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information',
    checkUrl: 'https://www.voterview.ar-nova.org/VoterView/RegistrantSearch.do',
    onlineRegistration: false,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Mail registration', date: '30 days before Election Day' },
      { label: 'In-person registration', date: '30 days before Election Day' },
    ],
    requirements: [
      'Social Security Number',
      'Current residential address',
      'US citizenship',
    ],
    notes: 'Arkansas does not offer online voter registration. You must register by mail or in person.',
  },

  CA: {
    registerUrl: 'https://registertovote.ca.gov/',
    checkUrl: 'https://voterstatus.sos.ca.gov/',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '15 days before Election Day' },
      { label: 'Conditional (same-day) registration', date: 'Available through Election Day' },
    ],
    requirements: [
      'California driver\'s license or ID number',
      'Last 4 digits of Social Security Number',
      'Date of birth',
      'US citizenship',
    ],
  },

  CO: {
    registerUrl: 'https://www.sos.state.co.us/voter/pages/pub/olvr/verifyNewVoter.xhtml',
    checkUrl: 'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '8 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Colorado driver\'s license or ID number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  CT: {
    registerUrl: 'https://voterregistration.ct.gov/',
    checkUrl: 'https://portaldir.ct.gov/sots/LookUp.aspx',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '7 days before Election Day' },
      { label: 'In-person (Election Day) registration', date: 'Available on Election Day at polls' },
    ],
    requirements: [
      'Connecticut driver\'s license number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  DE: {
    registerUrl: 'https://ivote.de.gov/',
    checkUrl: 'https://ivote.de.gov/VoterView',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '24 days before Election Day' },
      { label: 'In-person registration', date: '24 days before Election Day' },
    ],
    requirements: [
      'Delaware driver\'s license number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  FL: {
    registerUrl: 'https://registertovoteflorida.gov/',
    checkUrl: 'https://registration.elections.myflorida.com/CheckVoterStatus',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '29 days before Election Day' },
      { label: 'In-person registration', date: '29 days before Election Day' },
    ],
    requirements: [
      'Florida driver\'s license or ID number',
      'Last 4 digits of Social Security Number',
      'Date of birth',
      'US citizenship',
    ],
  },

  GA: {
    registerUrl: 'https://registertovote.sos.ga.gov/',
    checkUrl: 'https://mvp.sos.ga.gov/',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '29 days before Election Day' },
      { label: 'In-person registration', date: '29 days before Election Day' },
    ],
    requirements: [
      'Georgia driver\'s license or ID number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  HI: {
    registerUrl: 'https://olvr.hawaii.gov/',
    checkUrl: 'https://olvr.hawaii.gov/',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online registration', date: '10 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Hawaii driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  ID: {
    registerUrl: 'https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ApplicationInstructions.aspx',
    checkUrl: 'https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ViewPollingPlace.aspx',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '25 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Idaho driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  IL: {
    registerUrl: 'https://ova.elections.il.gov/',
    checkUrl: 'https://www.elections.il.gov/VotingInformation/RegistrationLookup.aspx',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '28 days before Election Day' },
      { label: 'Grace period / same-day registration', date: 'Available through Election Day' },
    ],
    requirements: [
      'Illinois driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  IN: {
    registerUrl: 'https://indianavoters.in.gov/',
    checkUrl: 'https://indianavoters.in.gov/',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '29 days before Election Day' },
      { label: 'In-person registration', date: '29 days before Election Day' },
    ],
    requirements: [
      'Indiana driver\'s license or state ID number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  IA: {
    registerUrl: 'https://sos.iowa.gov/elections/voterinformation/voterregistration.html',
    checkUrl: 'https://sos.iowa.gov/elections/voterreg/regtovote/search.aspx',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '15 days before Election Day (primary), 10 days (general)' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Iowa driver\'s license or ID number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  KS: {
    registerUrl: 'https://www.kdor.ks.gov/apps/voterreg/default.aspx',
    checkUrl: 'https://myvoteinfo.voteks.org/voterview',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '21 days before Election Day' },
      { label: 'In-person registration', date: '21 days before Election Day' },
    ],
    requirements: [
      'Kansas driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'Proof of citizenship',
    ],
  },

  KY: {
    registerUrl: 'https://vrsws.sos.ky.gov/ovrweb/',
    checkUrl: 'https://vrsws.sos.ky.gov/VIC/',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '29 days before Election Day' },
      { label: 'In-person registration', date: '29 days before Election Day' },
    ],
    requirements: [
      'Kentucky driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  LA: {
    registerUrl: 'https://www.sos.la.gov/ElectionsAndVoting/RegisterToVote/Pages/default.aspx',
    checkUrl: 'https://voterportal.sos.la.gov/',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online registration', date: '20 days before Election Day' },
      { label: 'Mail registration', date: '30 days before Election Day' },
      { label: 'In-person registration', date: '30 days before Election Day' },
    ],
    requirements: [
      'Louisiana driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  ME: {
    registerUrl: 'https://www.maine.gov/sos/cec/elec/voter-info/voterguide.html',
    checkUrl: 'https://www.maine.gov/sos/cec/elec/data/index.html',
    onlineRegistration: false,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Mail registration', date: '21 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Maine driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'Proof of residency (for same-day)',
      'US citizenship',
    ],
    notes: 'Maine does not offer online voter registration. You can register by mail or in person, including on Election Day.',
  },

  MD: {
    registerUrl: 'https://voterservices.elections.maryland.gov/OnlineVoterRegistration/InstructionsStep1',
    checkUrl: 'https://voterservices.elections.maryland.gov/VoterSearch',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '21 days before Election Day' },
      { label: 'In-person (same-day) registration', date: 'Available during early voting and on Election Day' },
    ],
    requirements: [
      'Maryland driver\'s license or ID number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  MA: {
    registerUrl: 'https://www.sec.state.ma.us/ovr/',
    checkUrl: 'https://www.sec.state.ma.us/VoterRegistrationSearch/MyVoterRegStatus.aspx',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '10 days before Election Day' },
      { label: 'In-person registration', date: 'Available on Election Day (same-day)' },
    ],
    requirements: [
      'Massachusetts driver\'s license or ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  MN: {
    registerUrl: 'https://www.sos.state.mn.us/elections-voting/register-to-vote/',
    checkUrl: 'https://mnvotes.sos.state.mn.us/VoterStatus.aspx',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '21 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Minnesota driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  MS: {
    registerUrl: 'https://www.sos.ms.gov/elections-voting/voter-registration-information',
    checkUrl: 'https://www.msegov.com/sos/voter_registration/amiregistered/Search',
    onlineRegistration: false,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Mail registration', date: '30 days before Election Day' },
      { label: 'In-person registration', date: '30 days before Election Day' },
    ],
    requirements: [
      'Social Security Number',
      'Current residential address',
      'Photo ID for voting',
      'US citizenship',
    ],
    notes: 'Mississippi does not offer online voter registration. You must register by mail or in person.',
  },

  MO: {
    registerUrl: 'https://www.sos.mo.gov/elections/goVoteMissouri/register',
    checkUrl: 'https://voterregistration.sos.mo.gov/VoterRegistration/VoterSearch',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '27 days before Election Day' },
      { label: 'In-person registration', date: '27 days before Election Day' },
    ],
    requirements: [
      'Missouri driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  MT: {
    registerUrl: 'https://sosmt.gov/elections/vote/',
    checkUrl: 'https://app.mt.gov/voterinfo/',
    onlineRegistration: false,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Mail registration', date: '30 days before Election Day' },
      { label: 'Late / same-day registration', date: 'Available through Election Day at county election office' },
    ],
    requirements: [
      'Montana driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
    notes: 'Montana does not offer online voter registration. Late registration is available at the county election office through Election Day.',
  },

  NE: {
    registerUrl: 'https://www.nebraska.gov/apps-sos-voter-registration/',
    checkUrl: 'https://www.votercheck.necvr.ne.gov/',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '18 days before Election Day' },
      { label: 'In-person registration', date: '11 days before Election Day' },
    ],
    requirements: [
      'Nebraska driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  NV: {
    registerUrl: 'https://www.registertovotenv.gov/',
    checkUrl: 'https://www.nvsos.gov/votersearch/',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '28 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Nevada driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  NH: {
    registerUrl: 'https://sos.nh.gov/elections/voters/register-to-vote/',
    checkUrl: 'https://app.sos.nh.gov/voterinformation',
    onlineRegistration: false,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Mail registration', date: '6 to 13 days before Election Day (varies by town)' },
      { label: 'In-person registration', date: 'Available on Election Day at polls (same-day)' },
    ],
    requirements: [
      'Photo ID or signed affidavit',
      'Proof of domicile',
      'Proof of citizenship',
    ],
    notes: 'New Hampshire does not offer online voter registration. You can register in person, including on Election Day at the polls.',
  },

  NJ: {
    registerUrl: 'https://voter.svrs.nj.gov/register',
    checkUrl: 'https://voter.svrs.nj.gov/registration-check',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '21 days before Election Day' },
      { label: 'In-person registration', date: '21 days before Election Day' },
    ],
    requirements: [
      'New Jersey driver\'s license or ID number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  NM: {
    registerUrl: 'https://portal.sos.state.nm.us/OVR/WebPages/InstructionsStep1.aspx',
    checkUrl: 'https://voterportal.servis.sos.state.nm.us/WhereToVote.aspx',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '28 days before Election Day' },
      { label: 'In-person / same-day registration', date: 'Available through Election Day' },
    ],
    requirements: [
      'New Mexico driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  NY: {
    registerUrl: 'https://voterreg.dmv.ny.gov/MotorVoter/',
    checkUrl: 'https://voterlookup.elections.ny.gov/',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '25 days before Election Day' },
      { label: 'In-person registration', date: '25 days before Election Day' },
    ],
    requirements: [
      'New York driver\'s license or DMV ID number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  NC: {
    registerUrl: 'https://www.ncsbe.gov/registering/how-register',
    checkUrl: 'https://vt.ncsbe.gov/RegLkup/',
    onlineRegistration: false,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Mail registration', date: '25 days before Election Day' },
      { label: 'Same-day registration', date: 'Available during early voting period only (not on Election Day)' },
    ],
    requirements: [
      'North Carolina driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
    notes: 'North Carolina does not offer online voter registration. Same-day registration is available during the early voting period but not on Election Day itself.',
  },

  ND: {
    registerUrl: 'https://vip.sos.nd.gov/PortalListDetails.aspx?ptlhPKID=79&ptlPKID=7',
    checkUrl: 'https://vip.sos.nd.gov/WhereToVote.aspx',
    onlineRegistration: false,
    sameDayRegistration: false,
    deadlines: [],
    requirements: [
      'Valid ID with current North Dakota residential address',
      'No voter registration required — just bring valid ID to vote',
    ],
    notes: 'North Dakota is the only state that does not require voter registration. You simply need a valid ID with your current residential address to vote.',
  },

  OH: {
    registerUrl: 'https://olvr.ohiosos.gov/',
    checkUrl: 'https://voterlookup.ohiosos.gov/voterlookup.aspx',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '30 days before Election Day' },
      { label: 'In-person registration', date: '30 days before Election Day' },
    ],
    requirements: [
      'Ohio driver\'s license or state ID number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  OK: {
    registerUrl: 'https://oklahoma.gov/elections/voter-registration/register-to-vote.html',
    checkUrl: 'https://okvoterportal.okelections.us/',
    onlineRegistration: false,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Mail registration', date: '25 days before Election Day' },
      { label: 'In-person registration', date: '25 days before Election Day' },
    ],
    requirements: [
      'Social Security Number (last 4 digits or full)',
      'Proof of identity',
      'US citizenship',
    ],
    notes: 'Oklahoma does not offer online voter registration. You must register by mail or in person.',
  },

  OR: {
    registerUrl: 'https://sos.oregon.gov/voting/Pages/registration.aspx',
    checkUrl: 'https://sos.oregon.gov/voting/Pages/registration.aspx',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '21 days before Election Day' },
      { label: 'In-person registration', date: '21 days before Election Day' },
    ],
    requirements: [
      'Oregon driver\'s license or ID number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
    notes: 'Oregon is a vote-by-mail state. All registered voters automatically receive a ballot in the mail.',
  },

  PA: {
    registerUrl: 'https://www.pavoterservices.pa.gov/pages/VoterRegistrationApplication.aspx',
    checkUrl: 'https://www.pavoterservices.pa.gov/pages/voterregistrationstatus.aspx',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '15 days before Election Day' },
      { label: 'In-person registration', date: '15 days before Election Day' },
    ],
    requirements: [
      'Pennsylvania driver\'s license number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  RI: {
    registerUrl: 'https://vote.sos.ri.gov/',
    checkUrl: 'https://vote.sos.ri.gov/Home/UpdateVoterRecord?ActiveFlag=0',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '30 days before Election Day' },
      { label: 'In-person registration', date: '30 days before Election Day' },
    ],
    requirements: [
      'Rhode Island driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  SC: {
    registerUrl: 'https://info.scvotes.sc.gov/eng/ovr/start.aspx',
    checkUrl: 'https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '30 days before Election Day' },
      { label: 'In-person registration', date: '30 days before Election Day' },
    ],
    requirements: [
      'South Carolina driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  SD: {
    registerUrl: 'https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx',
    checkUrl: 'https://vip.sdsos.gov/VIPLogin.aspx',
    onlineRegistration: false,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Mail registration', date: '15 days before Election Day' },
      { label: 'In-person registration', date: '15 days before Election Day' },
    ],
    requirements: [
      'South Dakota driver\'s license or ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
    notes: 'South Dakota does not offer online voter registration. You must register by mail or in person.',
  },

  TN: {
    registerUrl: 'https://ovr.govote.tn.gov/',
    checkUrl: 'https://tnmap.tn.gov/voterlookup/',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '30 days before Election Day' },
      { label: 'In-person registration', date: '30 days before Election Day' },
    ],
    requirements: [
      'Tennessee driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  TX: {
    registerUrl: 'https://www.votetexas.gov/register-to-vote/',
    checkUrl: 'https://teamrv-mvp.sos.texas.gov/MVP/mvp.do',
    onlineRegistration: false,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Mail / in-person registration', date: '30 days before Election Day' },
    ],
    requirements: [
      'Texas driver\'s license or state ID number',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
    notes: 'Texas does not offer online voter registration. You must register by mail or in person.',
  },

  UT: {
    registerUrl: 'https://secure.utah.gov/voterreg/index.html',
    checkUrl: 'https://votesearch.utah.gov/voter-search/search/search-by-voter/voter-info',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '11 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Utah driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  VT: {
    registerUrl: 'https://olvr.vermont.gov/',
    checkUrl: 'https://mvp.vermont.gov/',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: 'No set deadline (recommended before Election Day)' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Vermont driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  VA: {
    registerUrl: 'https://vote.elections.virginia.gov/VoterInformation',
    checkUrl: 'https://vote.elections.virginia.gov/VoterInformation',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '22 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Virginia driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  WA: {
    registerUrl: 'https://voter.votewa.gov/WhereToVote.aspx',
    checkUrl: 'https://voter.votewa.gov/WhereToVote.aspx',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '8 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Washington driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
    notes: 'Washington is a vote-by-mail state. All registered voters automatically receive a ballot in the mail.',
  },

  WV: {
    registerUrl: 'https://ovr.sos.wv.gov/Register',
    checkUrl: 'https://apps.sos.wv.gov/elections/voter/amiregisteredtovote',
    onlineRegistration: true,
    sameDayRegistration: false,
    deadlines: [
      { label: 'Online / mail registration', date: '21 days before Election Day' },
      { label: 'In-person registration', date: '21 days before Election Day' },
    ],
    requirements: [
      'West Virginia driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },

  WI: {
    registerUrl: 'https://myvote.wi.gov/en-us/RegisterToVote',
    checkUrl: 'https://myvote.wi.gov/en-us/MyVoterInfo',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '20 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'Wisconsin driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'Proof of residence (for same-day registration)',
      'US citizenship',
    ],
  },

  WY: {
    registerUrl: 'https://sos.wyo.gov/Elections/State/RegisteringToVote.aspx',
    checkUrl: 'https://sos.wyo.gov/Elections/Docs/WYCountyClerks.pdf',
    onlineRegistration: false,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Mail registration', date: '14 days before Election Day' },
      { label: 'In-person registration', date: 'Available on Election Day (same-day)' },
    ],
    requirements: [
      'Wyoming driver\'s license or state ID',
      'US citizenship',
    ],
    notes: 'Wyoming does not offer online voter registration. You can register by mail or in person, including on Election Day.',
  },

  DC: {
    registerUrl: 'https://www.vote4dc.com/ApplyInstructions/Register',
    checkUrl: 'https://www.dcboe.org/voters/register-to-vote/check-voter-registration-status',
    onlineRegistration: true,
    sameDayRegistration: true,
    deadlines: [
      { label: 'Online / mail registration', date: '21 days before Election Day' },
      { label: 'In-person registration', date: 'Available through Election Day (same-day)' },
    ],
    requirements: [
      'DC driver\'s license or state ID',
      'Last 4 digits of Social Security Number',
      'US citizenship',
    ],
  },
}
