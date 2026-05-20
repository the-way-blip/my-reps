/**
 * Conservative Candidate Rating & Endorsement Data Sources Registry
 *
 * Structured catalog of 40+ organizations that rate, endorse, or evaluate
 * candidates from a conservative / constitutional perspective.
 *
 * Data types:
 *   scorecard    — 0–100 or letter grade from actual votes (incumbents only, highest reliability)
 *   endorsement  — binary PAC backing (incumbents + challengers, medium reliability)
 *   voter_guide  — candidate questionnaire / position comparison (self-reported, medium)
 *   pledge       — candidate signed a pledge or received an award (supplementary)
 *
 * Issue areas map to the app's 6-issue grading rubric:
 *   proLife         ← pro_life sources
 *   marriage        ← family_marriage sources
 *   religiousLiberty← religious_liberty sources
 *   secondAmendment ← second_amendment sources
 *   limitedGov      ← general sources (constitutional / limited-gov focus)
 *   fiscal          ← fiscal sources
 *
 * Additional: immigration sources inform limitedGov; aggregators span all areas.
 */

// ── Issue area mapping: data-source issue → app issue key(s) ──

export const SOURCE_ISSUE_TO_APP_ISSUE = {
  general:           ['limitedGov'],
  pro_life:          ['proLife'],
  family_marriage:   ['marriage'],
  second_amendment:  ['secondAmendment'],
  religious_liberty: ['religiousLiberty'],
  fiscal:            ['fiscal'],
  immigration:       ['limitedGov'],
  aggregator:        ['proLife', 'marriage', 'religiousLiberty', 'secondAmendment', 'limitedGov', 'fiscal'],
  reference:         [],
}

// ── Source registry ──

export const RATING_SOURCES = [
  // ─── General / multi-issue ───
  {
    id: 'heritage_action',
    name: 'Heritage Action',
    fullName: 'Heritage Action for America',
    issue: 'general',
    outputs: ['scorecard'],
    scope: 'federal',
    url: 'https://heritageaction.com/scorecard',
    scale: '0-100',
    cadence: 'Weekly in session',
    description: 'Congressional scorecard based on votes and co-sponsorships, plus lifetime score.',
  },
  {
    id: 'acu',
    name: 'ACU',
    fullName: 'American Conservative Union / CPAC',
    issue: 'general',
    outputs: ['scorecard'],
    scope: 'federal+state',
    url: 'https://ratings.conservative.org',
    scale: '0-100',
    cadence: 'Annual',
    description: 'Annual "Ratings of Congress" and all 50 state legislatures via Center for Legislative Accountability.',
  },
  {
    id: 'conservative_review',
    name: 'Liberty Score',
    fullName: 'Conservative Review Liberty Score',
    issue: 'general',
    outputs: ['scorecard'],
    scope: 'federal',
    url: 'https://libertyscore.conservativereview.com',
    scale: '0-100',
    cadence: 'Periodic',
    description: 'Lifetime conservative rating of members of Congress.',
  },
  {
    id: 'jbs_freedom_index',
    name: 'Freedom Index',
    fullName: 'John Birch Society Freedom Index',
    issue: 'general',
    outputs: ['scorecard'],
    scope: 'federal',
    url: 'https://thenewamerican.com/freedom-index',
    scale: '0-100',
    cadence: 'Twice per Congress',
    description: 'Congressional scorecard vs. a constitutional / limited-government standard.',
  },

  // ─── Pro-life ───
  {
    id: 'sba_prolife',
    name: 'SBA Pro-Life',
    fullName: 'SBA Pro-Life America',
    issue: 'pro_life',
    outputs: ['scorecard', 'endorsement'],
    scope: 'federal+state',
    url: 'https://sbaprolife.org/scorecard',
    scale: '0-100',
    cadence: 'Per Congress + per cycle',
    description: 'National Pro-Life Scorecard; endorsements via Candidate Fund.',
  },
  {
    id: 'nrlc',
    name: 'NRLC',
    fullName: 'National Right to Life Committee',
    issue: 'pro_life',
    outputs: ['scorecard', 'endorsement', 'voter_guide'],
    scope: 'federal+state',
    url: 'https://www.nrlc.org',
    scale: '0-100',
    cadence: 'Per cycle',
    description: 'Congressional ratings, state-affiliate voter guides, and endorsements.',
  },
  {
    id: 'rtl_michigan',
    name: 'Right to Life of MI',
    fullName: 'Right to Life of Michigan',
    issue: 'pro_life',
    outputs: ['scorecard', 'endorsement'],
    scope: 'state',
    url: 'https://rtl.org',
    scale: '0-100',
    cadence: 'Per cycle',
    description: 'Michigan state affiliate of NRLC. Publishes state legislative scorecards and PAC endorsements.',
  },
  {
    id: 'students_for_life',
    name: 'Students for Life',
    fullName: 'Students for Life Action',
    issue: 'pro_life',
    outputs: ['scorecard'],
    scope: 'federal+state',
    url: 'https://studentsforlifeaction.org',
    scale: '0-100',
    cadence: 'Per cycle',
    description: 'Legislative scorecard and candidate ratings on life issues.',
  },
  {
    id: 'march_for_life',
    name: 'March for Life',
    fullName: 'March for Life Action',
    issue: 'pro_life',
    outputs: ['scorecard'],
    scope: 'federal',
    url: 'https://marchforlife.org',
    scale: '0-100',
    cadence: 'Periodic',
    description: 'Scores key congressional abortion-related votes.',
  },

  // ─── Marriage / family ───
  {
    id: 'frc_action',
    name: 'FRC Action',
    fullName: 'Family Research Council / FRC Action',
    issue: 'family_marriage',
    outputs: ['scorecard', 'award'],
    scope: 'federal',
    url: 'https://www.frcaction.org/scorecard',
    scale: '0-100',
    cadence: 'Per Congress',
    description: 'Congressional Vote Scorecard; "True Blue" award for perfect record.',
  },
  {
    id: 'family_policy_alliance',
    name: 'Family Policy Alliance',
    fullName: 'Family Policy Alliance',
    issue: 'family_marriage',
    outputs: ['voter_guide'],
    scope: 'federal+state',
    url: 'https://familypolicyalliance.com',
    cadence: 'Per cycle',
    description: 'National advocacy arm; coordinates state Family Policy Council network.',
  },
  {
    id: 'cwa',
    name: 'CWA',
    fullName: 'Concerned Women for America',
    issue: 'family_marriage',
    outputs: ['scorecard'],
    scope: 'federal+state',
    url: 'https://concernedwomen.org',
    cadence: 'Per session',
    description: 'Tracks and scores federal and state legislation on family, life, and religious liberty.',
  },
  {
    id: 'eagle_forum',
    name: 'Eagle Forum',
    fullName: 'Eagle Forum',
    issue: 'family_marriage',
    outputs: ['scorecard'],
    scope: 'federal',
    url: 'https://eagleforum.org',
    cadence: 'Per Congress',
    description: 'Congressional scorecards/ratings on social and constitutional issues.',
  },
  {
    id: 'christian_coalition',
    name: 'Christian Coalition',
    fullName: 'Christian Coalition of America',
    issue: 'family_marriage',
    outputs: ['voter_guide'],
    scope: 'federal+state',
    url: 'https://cc.org/voterguides',
    cadence: 'Per cycle',
    description: 'Voter guides comparing candidates on "pro-family" issues.',
  },
  {
    id: 'michigan_family_forum',
    name: 'MI Family Forum',
    fullName: 'Michigan Family Forum',
    issue: 'family_marriage',
    outputs: ['scorecard', 'voter_guide'],
    scope: 'state',
    url: 'https://michiganfamily.org',
    cadence: 'Per session',
    description: 'Michigan state Family Policy Council. State legislative scorecards and voter guides on life, marriage/family, and religious liberty.',
  },

  // ─── Second Amendment ───
  {
    id: 'nra_pvf',
    name: 'NRA',
    fullName: 'NRA Political Victory Fund',
    issue: 'second_amendment',
    outputs: ['scorecard', 'endorsement'],
    scope: 'federal+state',
    url: 'https://www.nrapvf.org/grades',
    scale: 'A+..F',
    cadence: 'Per cycle',
    description: 'Candidate grades A+ through F; endorsements; questionnaire-based.',
  },
  {
    id: 'goa',
    name: 'GOA',
    fullName: 'Gun Owners of America',
    issue: 'second_amendment',
    outputs: ['scorecard', 'voter_guide'],
    scope: 'federal+state',
    url: 'https://www.gunowners.org/grades',
    scale: 'A+..F',
    cadence: 'Per cycle',
    description: 'Candidate grades (start at A, downgraded per anti-gun vote); voter guide.',
  },
  {
    id: 'nagr',
    name: 'NAGR',
    fullName: 'National Association for Gun Rights',
    issue: 'second_amendment',
    outputs: ['scorecard', 'pledge'],
    scope: 'federal+state',
    url: 'https://www.nationalgunrights.org',
    cadence: 'Per cycle',
    description: 'Candidate surveys, ratings, and gun-rights pledge.',
  },
  {
    id: 'ccrkba',
    name: 'CCRKBA',
    fullName: 'Citizens Committee for the Right to Keep and Bear Arms',
    issue: 'second_amendment',
    outputs: ['scorecard', 'endorsement'],
    scope: 'federal+state',
    url: 'https://www.ccrkba.org',
    cadence: 'Per cycle',
    description: 'Candidate ratings and endorsements.',
  },

  // ─── Religious liberty ───
  {
    id: 'ivoterguide',
    name: 'iVoterGuide',
    fullName: 'iVoterGuide (AFA Action)',
    issue: 'religious_liberty',
    outputs: ['scorecard', 'voter_guide'],
    scope: 'federal+state+local',
    url: 'https://ivoterguide.com',
    cadence: 'Per cycle',
    isAggregator: true,
    description: 'Rates candidates Liberal→Conservative from records, statements, surveys, and endorsements. Compiles other groups\' scorecards.',
  },
  {
    id: 'faith_freedom',
    name: 'Faith & Freedom',
    fullName: 'Faith & Freedom Coalition',
    issue: 'religious_liberty',
    outputs: ['scorecard', 'voter_guide'],
    scope: 'federal+state',
    url: 'https://www.ffcoalition.com',
    cadence: 'Per cycle',
    description: 'Voter guides and congressional scorecard; large church distribution network.',
  },
  {
    id: 'catholicvote',
    name: 'CatholicVote',
    fullName: 'CatholicVote',
    issue: 'religious_liberty',
    outputs: ['scorecard', 'endorsement'],
    scope: 'federal+state',
    url: 'https://catholicvote.org',
    cadence: 'Per cycle',
    description: 'Candidate info, endorsements, and issue scorecards framed on Catholic teaching.',
  },
  {
    id: 'liberty_counsel',
    name: 'Liberty Counsel',
    fullName: 'Liberty Counsel Action',
    issue: 'religious_liberty',
    outputs: ['voter_guide'],
    scope: 'federal+state',
    url: 'https://lc.org',
    cadence: 'Per cycle',
    description: 'Voter guides and legislative alerts on religious liberty, life, and family.',
  },

  // ─── Fiscal ───
  {
    id: 'club_for_growth',
    name: 'Club for Growth',
    fullName: 'Club for Growth Foundation',
    issue: 'fiscal',
    outputs: ['scorecard', 'endorsement', 'award'],
    scope: 'federal',
    url: 'https://www.clubforgrowth.org/scorecards',
    scale: '0-100',
    cadence: 'Annual',
    description: 'Congressional Economic Scorecard; "Defender of Economic Freedom" award; PAC endorsements.',
  },
  {
    id: 'afp',
    name: 'AFP',
    fullName: 'Americans for Prosperity',
    issue: 'fiscal',
    outputs: ['scorecard'],
    scope: 'federal+state',
    url: 'https://americansforprosperity.org/national-scorecard',
    scale: '0-100',
    cadence: 'Annual',
    description: 'National scorecard on economic and limited-government votes.',
  },
  {
    id: 'ntu',
    name: 'NTU',
    fullName: 'National Taxpayers Union',
    issue: 'fiscal',
    outputs: ['scorecard'],
    scope: 'federal',
    url: 'https://www.ntu.org',
    scale: '0-100',
    cadence: 'Annual',
    description: 'Annual "Rating of Congress" on taxes and spending.',
  },
  {
    id: 'atr',
    name: 'ATR',
    fullName: 'Americans for Tax Reform',
    issue: 'fiscal',
    outputs: ['pledge', 'award'],
    scope: 'federal+state',
    url: 'https://www.atr.org',
    cadence: 'Per cycle',
    description: 'Taxpayer Protection Pledge signatory list; "Hero of the Taxpayer" award.',
  },
  {
    id: 'ccagw',
    name: 'CCAGW',
    fullName: 'Council for Citizens Against Government Waste',
    issue: 'fiscal',
    outputs: ['scorecard', 'award'],
    scope: 'federal',
    url: 'https://www.ccagw.org/legislation/ratings',
    scale: '0-100',
    cadence: 'Annual',
    description: 'Congressional ratings; "Taxpayer Super Hero / Hero / Friend" awards.',
  },
  {
    id: 'nfib',
    name: 'NFIB',
    fullName: 'National Federation of Independent Business',
    issue: 'fiscal',
    outputs: ['scorecard', 'award'],
    scope: 'federal+state',
    url: 'https://www.nfib.com',
    cadence: 'Per Congress',
    description: 'Small business voting records; "Guardian of Small Business" award.',
  },

  // ─── Immigration ───
  {
    id: 'numbersusa',
    name: 'NumbersUSA',
    fullName: 'NumbersUSA',
    issue: 'immigration',
    outputs: ['scorecard'],
    scope: 'federal',
    url: 'https://grades.numbersusa.com',
    scale: 'A+..F',
    cadence: 'Weekly in session',
    description: 'Immigration-reduction grade cards — every floor/committee/amendment vote and co-sponsorship.',
  },
  {
    id: 'fair',
    name: 'FAIR',
    fullName: 'Federation for American Immigration Reform',
    issue: 'immigration',
    outputs: ['scorecard', 'voter_guide'],
    scope: 'federal',
    url: 'https://www.fairus.org',
    cadence: 'Per Congress',
    description: 'Congressional voting reports and candidate position resources.',
  },

  // ─── Aggregators / Reference ───
  {
    id: 'vote_smart',
    name: 'Vote Smart',
    fullName: 'Vote Smart',
    issue: 'aggregator',
    outputs: ['scorecard'],
    scope: 'federal+state',
    url: 'https://justfacts.votesmart.org',
    cadence: 'Continuous',
    isAggregator: true,
    description: 'Aggregates interest group ratings per politician — pulls ACU, NRA, NRLC, NumbersUSA, and dozens more.',
  },
  {
    id: 'ballotpedia',
    name: 'Ballotpedia',
    fullName: 'Ballotpedia',
    issue: 'aggregator',
    outputs: ['scorecard', 'endorsement'],
    scope: 'federal+state',
    url: 'https://ballotpedia.org',
    cadence: 'Continuous',
    isAggregator: true,
    description: 'Catalog of scorecards, endorsement lists, and candidate profiles.',
  },
]

// ── Helpers ──

/** Get a source by its ID slug */
export function getSource(id) {
  return RATING_SOURCES.find(s => s.id === id) || null
}

/** Get all sources relevant to a given app issue key */
export function getSourcesForIssue(appIssueKey) {
  return RATING_SOURCES.filter(s => {
    const mapped = SOURCE_ISSUE_TO_APP_ISSUE[s.issue] || []
    return mapped.includes(appIssueKey)
  })
}

/** Get all sources grouped by issue area */
export function getSourcesByIssue() {
  const groups = {}
  for (const source of RATING_SOURCES) {
    if (!groups[source.issue]) groups[source.issue] = []
    groups[source.issue].push(source)
  }
  return groups
}

/** Human-readable label for an issue area */
export const ISSUE_AREA_LABELS = {
  general: 'General Conservative',
  pro_life: 'Pro-Life',
  family_marriage: 'Marriage & Family',
  second_amendment: 'Second Amendment',
  religious_liberty: 'Religious Liberty',
  fiscal: 'Fiscal Conservatism',
  immigration: 'Immigration',
  aggregator: 'Aggregator',
  reference: 'Reference Data',
}

/** Human-readable label for a rating type */
export const RATING_TYPE_LABELS = {
  scorecard: 'Scorecard',
  endorsement: 'Endorsement',
  voter_guide: 'Voter Guide',
  pledge: 'Pledge',
  award: 'Award',
}

/** Rating type descriptions for the methodology section */
export const RATING_TYPE_DESCRIPTIONS = {
  scorecard: 'A numeric or letter grade derived from actual recorded votes. Applies to incumbents only. Highest reliability — based on legislative behavior.',
  endorsement: 'A PAC or organization publicly backs a candidate. Applies to incumbents and challengers. Medium reliability — binary, no nuance.',
  voter_guide: 'Candidate questionnaire responses or position comparison. Applies to incumbents and challengers. Medium reliability — self-reported, pre-election.',
  pledge: 'Candidate signed a public pledge or received a recognition award. Supplementary signal.',
}
