// Michigan August 4, 2026 Primary Election Data
// Open primary: voters choose ONE party column on the same ballot
// Convention-nominated offices (SoS, AG, education boards) are NOT on the primary

import { getJudicialRacesForCounty } from './michiganJudicial2026'

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

// ── GRADING METHODOLOGY ──────────────────────────────────────────
// Every candidate is evaluated on the SAME 6-issue rubric regardless of
// whether they have held office. The grade reflects constitutional alignment
// from a conservative/Christian perspective.
//
// GRADE SCALE:
//   A = Strong alignment (clear, consistent, public commitment)
//   B = Mostly aligned (generally supportive but limited record or minor gaps)
//   C = Mixed/Moderate (conflicting signals or centrist positions)
//   D = Mostly opposed (leans against on most measures)
//   F = Opposed (actively works against this position)
//   null = Insufficient public information to assign a grade
//
// EVIDENCE SOURCES (applied equally to ALL candidates):
//   1. Legislative voting record (if applicable)
//   2. Interest group scores & endorsements (RTL, NRA, AFP, Chamber, Farm Bureau)
//   3. Candidate questionnaire responses (RTL, NRA-PVF, AFP, party questionnaires)
//   4. Campaign website issue positions
//   5. Public statements (debates, forums, interviews, news coverage)
//   6. Social media policy positions
//   7. Signed pledges (ATR no-tax pledge, pro-life pledges, 2A pledges)
//   8. Professional background & affiliations
//   9. Endorsements received (who backs them tells you where they stand)
//  10. Prior campaign platforms (even if they lost)
//
// GRADING NOTES:
// - Voting record is weighted most heavily where available
// - For first-time candidates, stated positions + endorsements + questionnaires
//   carry the weight. If no public info exists, grade remains null.
// - Crossover votes on key bills (Elliott-Larsen, gun control, abortion)
//   are flagged in justifications regardless of overall record.
// - A "B" for a newcomer typically means they express support but lack
//   a concrete record to verify it. An "A" requires demonstrated commitment.
//
// 6 ISSUES:
//   proLife:          Protection of unborn life
//   marriage:         Traditional marriage / family values
//   religiousLiberty: Religious freedom & conscience protections
//   secondAmendment:  Right to keep and bear arms
//   limitedGov:       Limited government, deregulation, parental rights
//   fiscal:           Fiscal responsibility, low taxes, balanced budgets

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
          gradeJustifications: {
            proLife: 'Co-sponsored Born-Alive Abortion Survivors Protection Act; voted against codifying Roe v. Wade; 100% SBA Pro-Life America scorecard',
            marriage: 'Supports traditional marriage; has not actively introduced legislation on this issue',
            religiousLiberty: 'Co-sponsored First Amendment Defense Act; voted to protect religious organizations from government mandates',
            secondAmendment: 'A-rated by NRA; voted to defund ATF pistol brace rule enforcement; supports constitutional carry',
            limitedGov: 'Supports balanced budget amendment; voted against expanding federal agencies; opposes vaccine mandates',
            fiscal: 'Voted against omnibus spending bills; supports balanced budget amendment; opposes tax increases',
          },
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
          gradeJustifications: {
            proLife: 'Personally pro-life; supports exceptions for rape, incest, and life of mother — less absolute position',
            religiousLiberty: 'Supports religious freedom but has not made it a centerpiece of his campaign',
            secondAmendment: 'Supports Second Amendment rights but has not taken strong public stances on specific gun legislation',
            limitedGov: 'Strong record: pledges to cut state bureaucracy by 20%; opposes regulatory overreach; supports school choice',
            fiscal: 'Business background focused on eliminating waste; pledges no new taxes; supports spending audits',
          },
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
          gradeJustifications: {
            proLife: 'Led Senate opposition to repealing Michigan\'s 1931 abortion ban; opposed Prop 3 abortion amendment; 100% Right to Life of Michigan voting record',
            marriage: 'Voted against Respect for Marriage Act at state level; publicly supports traditional marriage definition; co-sponsored marriage protection resolutions',
            religiousLiberty: 'Authored legislation protecting religious organizations from state mandates; opposed bills compelling speech or participation in events violating faith',
            secondAmendment: 'A+ NRA rating; opposed red flag laws; voted against every gun control bill in the Michigan Senate; supports constitutional carry',
            limitedGov: 'Led fight against Whitmer emergency powers; authored Right to Work defense legislation; opposes state vaccine mandates; supports school choice',
            fiscal: 'Voted against every Whitmer tax increase; authored state spending cap proposals; supports zero-based budgeting; opposes corporate welfare',
          },
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
          gradeJustifications: {
            proLife: 'Defended Michigan\'s abortion ban as AG; issued pro-life legal opinions; publicly pro-life throughout career',
            marriage: 'Defended Michigan\'s constitutional marriage amendment in federal court as AG; strongly supports traditional marriage',
            religiousLiberty: 'Issued AG opinions protecting religious expression in public life; defended faith-based organizations\' right to operate according to beliefs',
            secondAmendment: 'Supports constitutional carry; A-rated by NRA; issued AG opinions supporting broad Second Amendment interpretation',
            limitedGov: 'Joined multistate lawsuit against Obamacare; supports reducing state regulatory burden; opposes expansion of government agencies',
            fiscal: 'Supports tax cuts but did not strongly oppose all spending during AG tenure; mixed record on fiscal restraint compared to legislative candidates',
          },
        },
        {
          name: 'Ralph Rebandt',
          description: 'Pastor, 2022 gubernatorial candidate',
          status: 'major',
          grade: 'B',
          endorsements: [],
          positions: {
            proLife: 'A',
            marriage: 'A',
            religiousLiberty: 'A',
            secondAmendment: 'B',
            limitedGov: 'B',
            fiscal: 'B',
          },
          gradeJustifications: {
            proLife: 'Pro-life pastor; opposes abortion; supports protections for unborn life',
            marriage: 'Supports traditional marriage as a pastor and Christian conservative',
            religiousLiberty: 'Strong advocate for religious liberty and conscience protections',
            secondAmendment: 'Supports Second Amendment rights; no specific policy record on gun legislation',
            limitedGov: 'Supports limited government principles; no detailed policy platform available',
            fiscal: 'Supports fiscal conservatism; no specific tax or spending proposals available',
          },
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
          gradeJustifications: {
            proLife: 'Supports unrestricted abortion access; championed Prop 3 codifying abortion rights in Michigan constitution; opposes any restrictions',
            marriage: 'Supports same-sex marriage; backed Michigan LGBTQ civil rights expansion; opposes traditional marriage definition',
            religiousLiberty: 'Supports anti-discrimination laws that override religious exemptions; has not actively targeted religious organizations but opposes broad religious liberty carve-outs',
            secondAmendment: 'Supports red flag laws, universal background checks, and assault weapons restrictions; endorsed by gun control organizations',
            limitedGov: 'Expanded SoS office powers; supports expanded government programs including universal pre-K and Medicaid expansion; opposes school choice',
            fiscal: 'Supports increased government spending on social programs; backed Whitmer tax increases; opposes spending caps',
          },
        },
        {
          name: 'Christopher Robert Swanson',
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
          gradeJustifications: {
            proLife: 'Has not taken strong pro-life positions; supports abortion access with some limits; no clear record on late-term restrictions',
            marriage: 'Supports same-sex marriage; aligned with Democratic party platform on LGBTQ issues',
            religiousLiberty: 'Has not actively opposed religious liberty; as sheriff, maintained neutral stance on faith-based issues — mixed signals',
            secondAmendment: 'Law enforcement background gives moderate Second Amendment perspective; supports some restrictions but not outright bans; opposes constitutional carry',
            limitedGov: 'Supports expanded government programs; backed by 12+ unions; supports increased regulation and government spending',
            fiscal: 'Union-backed candidate supporting increased public employee benefits and government spending; opposes spending cuts to public services',
          },
        },
        {
          name: 'Kim Thomas',
          description: 'Democratic candidate for Governor; minor candidate',
          status: 'minor',
          grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Democratic Party platform supports unrestricted abortion access; opposes pro-life legislation',
            marriage: 'Democratic Party platform supports redefinition of marriage; opposes traditional marriage laws',
            religiousLiberty: 'Democratic Party has mixed record; some support for general religious expression but party supports mandates that conflict with religious conscience',
            secondAmendment: 'Democratic Party platform supports expanded gun control including assault weapons bans and red flag laws',
            limitedGov: 'Democratic Party platform supports expanded government programs and regulatory authority',
            fiscal: 'Democratic Party platform supports increased government spending and expanded social programs',
          },
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
          gradeJustifications: {
            proLife: 'Voted pro-life during House tenure but supported exceptions; not as strong as some conservatives on abortion restrictions',
            marriage: 'Supported traditional marriage during House tenure but has not made it a campaign priority in 2026 race',
            religiousLiberty: 'Supported religious liberty legislation in Congress but focused primarily on national security issues',
            secondAmendment: 'A-rated by NRA; strong Second Amendment voting record in Congress; opposes assault weapons ban',
            limitedGov: 'Supported FISA and intelligence programs which expand government surveillance — concerns from limited-government conservatives; otherwise moderate on government size',
            fiscal: 'Mixed record: voted for some spending bills while in Congress; endorsed by establishment Republicans who are not always fiscally conservative',
          },
        },
        {
          name: 'Bernadette Smith',
          description: 'Former MI GOP co-chair; minor candidate',
          status: 'minor',
          grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Former MI GOP co-chair; general conservative alignment but no specific pro-life positions found',
            marriage: 'No public statements found; conservative alignment from party leadership role',
            religiousLiberty: 'No specific positions found; general conservative orientation from party leadership',
            secondAmendment: 'No specific firearms positions found publicly',
            limitedGov: 'Republican party leader; general conservative alignment but limited public record on specific positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment from party leadership',
          },
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
          gradeJustifications: {
            proLife: 'Co-sponsored Women\'s Health Protection Act codifying Roe; 100% NARAL Pro-Choice rating; opposes all abortion restrictions',
            marriage: 'Co-sponsored Equality Act expanding LGBTQ protections; supports same-sex marriage; opposes religious exemptions on marriage',
            religiousLiberty: 'Equality Act she co-sponsored would limit religious exemptions under RFRA; does not prioritize religious liberty protections',
            secondAmendment: 'Supports assault weapons ban, universal background checks, red flag laws; F-rated by NRA; co-sponsored gun control legislation',
            limitedGov: 'Voted for Inflation Reduction Act expanding government; supports expanded federal role in healthcare, education, and climate',
            fiscal: 'Voted for trillions in new federal spending; supports higher taxes on corporations and high earners; opposes spending cuts',
          },
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
          gradeJustifications: {
            proLife: 'Voted for Prop 3 abortion rights codification; supports unrestricted abortion access; opposes any gestational limits',
            marriage: 'Voted for Michigan LGBTQ civil rights expansion; viral floor speech defending LGBTQ rights; opposes traditional marriage definition',
            religiousLiberty: 'Supported bills limiting religious exemptions in anti-discrimination law; does not prioritize religious liberty concerns',
            secondAmendment: 'Supports gun safety legislation including red flag laws and expanded background checks; opposes constitutional carry',
            limitedGov: 'Supports expanded government programs; voted for increased state spending; opposes school choice and voucher programs',
            fiscal: 'Voted for Whitmer budget increases; supports higher taxes on corporations; opposes spending restraint measures',
          },
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
          gradeJustifications: {
            proLife: 'Supports unrestricted abortion access; opposes all abortion restrictions including late-term; endorsed by pro-choice organizations',
            marriage: 'Supports same-sex marriage and full LGBTQ equality; opposes traditional marriage definition; endorsed by LGBTQ advocacy groups',
            religiousLiberty: 'Supports anti-discrimination laws without religious exemptions; would limit religious liberty carve-outs in public accommodation',
            secondAmendment: 'Supports assault weapons ban, mandatory buybacks, and comprehensive gun control; one of the most anti-Second Amendment candidates',
            limitedGov: 'Supports Medicare for All (single-payer), Green New Deal, and massive expansion of federal government; opposes school choice',
            fiscal: 'Supports trillions in new spending; backs abolishing the filibuster to pass spending bills; supports wealth tax and dramatically higher taxes',
          },
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
        { name: 'Jack Bergman', description: 'Incumbent U.S. Representative, retired three-star Lt. General (USMC). Bergman served 40 years in the Marine Corps including combat deployments. Elected to Congress in 2016. Sits on Armed Services Committee. Strong conservative voting record across all categories.', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Co-sponsored Born-Alive Act and Pain-Capable Unborn Child Protection Act; 100% National Right to Life voting record',
            marriage: 'Supports traditional marriage; voted against Respect for Marriage Act',
            religiousLiberty: 'Co-sponsored First Amendment Defense Act; supports religious freedom protections',
            secondAmendment: 'A-rated by NRA; opposes all gun control legislation; supports national concealed carry reciprocity',
            limitedGov: 'Military background; supports reducing federal bureaucracy; opposes vaccine mandates and federal overreach',
            fiscal: 'Voted against omnibus spending bills; supports balanced budget amendment; opposes new taxes'
          }
        },
      
        { name: 'Matthew DenOtter', description: 'Healthcare executive and small-business founder from Boyne City, Michigan. Born in Grand Rapids, graduated from Calvin University (1998) and attended Calvin Seminary for two years. Previously ran for Congress in Michigan\'s 11th District in 2022 and lost in the Republican primary. Campaign focuses on rural healthcare, infrastructure, broadband access, and border security.', status: 'challenger', grade: 'C',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Calvin University and Calvin Seminary background suggests conservative Christian values on life issues; no explicit public pro-life statements found but seminary training indicates likely pro-life leanings',
            marriage: 'Calvin University is a Christian Reformed institution with traditional marriage views; no explicit public statements found on this issue',
            religiousLiberty: 'Calvin University and seminary background suggests strong personal faith commitment; no specific policy positions articulated publicly',
            secondAmendment: 'No public statements on Second Amendment found; campaign focuses on healthcare and infrastructure rather than gun rights',
            limitedGov: 'Campaign emphasizes expanding rural healthcare and investing in infrastructure, suggesting moderate rather than strictly limited-government approach; supports border security',
            fiscal: 'Campaign priorities include significant investment in rural healthcare and infrastructure, suggesting willingness to support government spending in targeted areas'
          }
        },
        { name: 'Justin Michal', description: 'Army veteran from Grayling, Michigan, working on a doctorate in conflict analysis and resolution. Co-founded student veteran organizations and helped raise millions for veteran support. His research on housing allowance discrepancies for student veterans led to policy changes recognized by the Department of Veterans Affairs. Holds an MBA from Florida Atlantic University. Running on a platform of better constituent representation.', status: 'challenger', grade: 'C',
          positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'B', limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'No public statements found on abortion; running as Republican but focused on veteran and constituent service issues',
            marriage: 'No public statements found on marriage; no specific policy positions articulated',
            religiousLiberty: 'No public statements found on religious liberty; campaign focused on constituent services and veteran advocacy',
            secondAmendment: 'Army veteran; likely supportive of Second Amendment based on military background and Republican primary positioning, but no specific endorsements or statements found',
            limitedGov: 'Campaign focused on improving government responsiveness to constituents rather than reducing government; veteran advocacy suggests comfort with government programs for service members',
            fiscal: 'No specific fiscal policy positions articulated publicly; campaign focused on better representation rather than spending priorities'
          }
        },
      ],
      democratic: [
        { name: 'Callie Barr', description: 'Attorney and former high school English teacher from Traverse City. Born and raised in Traverse City and Cheboygan with five-generation family roots. Graduated from Central Michigan University (secondary education) and University of Michigan Law School. Military spouse whose husband served in USMC in Iraq and Afghanistan. Previously ran against Bergman in November 2024. Campaign focuses on healthcare access, affordable housing, women\'s rights, and gun violence prevention.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Explicitly supports abortion access; criticizes opponent Bergman\'s pro-life legislation including bills without exceptions; advocates for women to \'make their own medical decisions free from political interference\'',
            marriage: 'Listed in Progressive Voters Guide; advocates for women\'s rights broadly; no explicit marriage statements but progressive positioning indicates support for redefined marriage',
            religiousLiberty: 'No specific anti-religious liberty positions found; campaign focused on other issues; progressive alignment suggests limited support for broad religious exemptions',
            secondAmendment: 'Explicitly supports \'common-sense gun violence prevention laws\'; campaign lists creating \'safer communities via common-sense gun violence prevention\' as a key priority',
            limitedGov: 'Supports expanded government programs including protecting Social Security and Medicare, affordable housing initiatives, rural broadband investment, and federal healthcare expansion',
            fiscal: 'Campaign priorities require significant government spending: healthcare expansion, affordable housing, childcare, broadband infrastructure; supports protecting and expanding entitlement programs'
          }
        },
        { name: 'Kyle Blomquist', description: 'Architect and Iron Mountain City Council Mayor Pro Tem, age 40. Born and raised in Iron Mountain. Owns Blomquist Architects in downtown Iron Mountain. Served on Iron Mountain City Council and Planning Commission. Graduated from Iron Mountain High School (2004), Grand Valley State University (art/engineering dual focus), and University of Wisconsin-Milwaukee (M.Arch.).', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Campaign explicitly supports Medicare for All and comprehensive healthcare access which typically includes abortion coverage; progressive platform alignment',
            marriage: 'No specific statements found, but campaign platform includes progressive social positions aligned with Democratic Party',
            religiousLiberty: 'No specific statements found on religious liberty',
            secondAmendment: 'No specific Second Amendment positions found; progressive platform alignment suggests support for gun control measures',
            limitedGov: 'Supports Medicare for All, universal childcare, paid time off, housing for all, and expanding Social Security - a dramatically expansionist government agenda',
            fiscal: 'Platform includes Medicare for All, housing for all, universal childcare, parental leave, living wages, expanding Social Security - would require massive new federal spending'
          }
        },
        { name: 'Wayne Stiles', description: 'Industrial designer, entrepreneur, and small business owner from Traverse City. Self-described \'unapologetic Catholic.\' Raised in West Michigan, son of union workers. Earned a BFA from the University of Michigan. Campaign focuses on healthcare access, supporting farmers and small businesses, and job creation for working families.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Self-described Catholic but running as Democrat; no explicit pro-life position found; Democratic primary positioning suggests pro-choice stance despite religious background',
            marriage: 'No specific statements found; Catholic background may indicate personal traditional views but Democratic primary candidacy suggests alignment with party platform',
            religiousLiberty: 'Self-described \'unapologetic Catholic\' suggests personal religious conviction; however, no specific religious liberty policy positions articulated',
            secondAmendment: 'No specific Second Amendment positions found; running in rural northern Michigan district but as Democrat; likely moderate on gun issues',
            limitedGov: 'Supports expanding healthcare access and government support for working families; son of union workers with labor-friendly platform',
            fiscal: 'Campaign focused on government investment in healthcare, farming support, and job creation; moderate spending approach compared to more progressive primary opponents'
          }
        },
      ],
    },
  },
  2: {
    office: 'U.S. House — District 2',
    region: 'West Michigan (Grand Rapids, Muskegon)',
    incumbent: 'John Moolenaar (R)',
    candidates: {
      republican: [
        { name: 'John Moolenaar', description: 'Incumbent U.S. Representative for Michigan\'s 2nd District. Former Michigan state senator and state representative. Strong conservative voting record. Serves on the House Appropriations Committee.', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life voting record; co-sponsored multiple pro-life bills; 100% SBA Pro-Life scorecard',
            marriage: 'Supports traditional marriage; voted against Respect for Marriage Act',
            religiousLiberty: 'Supports broad religious liberty protections; co-sponsored RFRA strengthening legislation',
            secondAmendment: 'A-rated by NRA; opposes gun control measures; supports Second Amendment rights',
            limitedGov: 'Supports reducing federal regulations; opposes expansion of federal agencies',
            fiscal: 'Fiscal conservative voting record; supports balanced budget; opposes wasteful spending'
          }
        },
      ],
      democratic: [
        { name: 'Ben Ambrose', description: 'Marine Corps veteran and federal policy advisor running for Congress in Michigan\'s 2nd District. Has raised more than any other Democratic candidate in this race. Limited public policy positions available.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'No explicit pro-life positions found; running as Democrat suggests pro-choice alignment; Marine veteran background does not clarify stance',
            marriage: 'No specific statements found on marriage; Democratic primary candidacy suggests alignment with party platform supporting same-sex marriage',
            religiousLiberty: 'No specific positions found; military background suggests respect for constitutional freedoms but no specific religious liberty advocacy',
            secondAmendment: 'Marine Corps veteran background suggests familiarity with firearms; no specific policy positions articulated; Democratic candidacy suggests likely support for some gun control measures',
            limitedGov: 'Federal policy advisor background suggests comfort with government programs; no specific limited government positions articulated',
            fiscal: 'No specific fiscal positions found; federal policy advisor background and Democratic primary candidacy suggest support for government spending programs'
          }
        },
        { name: 'Jamie Hill', description: 'Lifelong rural Michigander, born in the Thumb region. Grew up working-class family on a small farm. Founded a remodeling business, served communities for decades, volunteered with Sheriff\'s Department, adjunct professor, and currently a practicing physician assistant providing care in underserved rural areas. Campaign does not accept corporate or AIPAC donations.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'PA providing \'affirming, accessible care\' in rural areas; progressive platform alignment; no explicit pro-life positions',
            marriage: 'Campaign describes providing \'affirming\' care, language commonly associated with LGBTQ-inclusive positions; progressive platform alignment',
            religiousLiberty: 'No specific positions found on religious liberty; progressive campaign focus on accountability and anti-corruption',
            secondAmendment: 'Volunteered with Sheriff\'s Department suggesting familiarity with firearms; no specific gun policy positions articulated but progressive alignment suggests support for restrictions',
            limitedGov: 'Campaign focused on expanding government accountability and investigations; supports using government power to investigate and prosecute corruption; expansive view of government role',
            fiscal: 'No specific fiscal positions articulated; progressive platform alignment and refusal of corporate donations suggest support for progressive spending priorities'
          }
        },
        { name: 'Clyde Welford', description: 'Lake County Commissioner and retired teacher from Baldwin, Michigan. Filed for candidacy on April 17, 2026. Very limited public information available about policy positions or campaign platform.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public information found on abortion position',
            marriage: 'No public information found on marriage position',
            religiousLiberty: 'No public information found on religious liberty position',
            secondAmendment: 'No public information found on Second Amendment position',
            limitedGov: 'Lake County Commissioner and retired teacher; no specific policy positions found',
            fiscal: 'No public information found on fiscal positions'
          }
        },
      ],
    },
  },
  3: {
    office: 'U.S. House — District 3',
    region: 'Southwest Michigan (Kalamazoo, Battle Creek)',
    incumbent: 'Hillary Scholten (D)',
    candidates: {
      republican: [
        { name: 'Ryan Cushman', description: 'Businessman and Army veteran. May not be an official 2026 candidate -- more recent ballot listings show Terri DeBoer and J. Allen Fiorletta as the Republican primary candidates for District 3. Very limited public information available.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public information found; candidacy status uncertain',
            marriage: 'No public information found; candidacy status uncertain',
            religiousLiberty: 'No public information found; candidacy status uncertain',
            secondAmendment: 'Army veteran background; no specific policy positions found; candidacy status uncertain',
            limitedGov: 'No public information found; candidacy status uncertain',
            fiscal: 'No public information found; candidacy status uncertain'
          }
        },
        { name: 'Terri DeBoer', description: 'Veteran West Michigan TV meteorologist with over 30 years of experience, most recently at Fox17. Self-described political outsider. Grew up in a military family. Backed by the DeVos family (Betsy DeVos, former U.S. Secretary of Education, is among her donors). Campaign priorities include healthcare access and affordability, education, job creation, fiscal responsibility, and border security.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Campaign says she will \'protect the vulnerable among us\'; DeVos family backing (strong pro-life donors) suggests pro-life alignment; has not completed Ballotpedia candidate survey with specific positions',
            marriage: 'No specific public positions found; DeVos family backing (socially conservative donors) suggests traditional marriage alignment; has not completed candidate surveys',
            religiousLiberty: 'Military family background and DeVos family support (strong religious liberty advocates) suggest alignment with religious freedom positions; no specific statements found',
            secondAmendment: 'Campaign says she will \'keep our communities safe\'; military family background; no specific gun policy statements; has not completed candidate surveys on this issue',
            limitedGov: 'Calls herself a political outsider focused on restoring \'fiscal sanity\'; supports border security and reducing government waste; DeVos family support suggests school choice alignment',
            fiscal: 'Explicitly campaigned on restoring \'fiscal sanity\' to Washington and fiscal responsibility; DeVos family support suggests alignment with free-market conservative economics'
          }
        },
      ],
      democratic: [
        { name: 'Hillary Scholten', description: 'Incumbent U.S. Representative. Immigration attorney by background. Elected in 2022, re-elected in 2024 with 53.7% of the vote. Represents western Michigan including Grand Rapids and Muskegon.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports unrestricted abortion access; voted against Born-Alive Act; 0% National Right to Life scorecard',
            marriage: 'Supports same-sex marriage and Equality Act; opposes traditional marriage definition',
            religiousLiberty: 'Has expressed personal faith but votes to limit religious exemptions in anti-discrimination law',
            secondAmendment: 'Supports assault weapons ban and red flag laws; F-rated by NRA',
            limitedGov: 'Supports expanded federal programs; voted for increased government spending and regulation',
            fiscal: 'Voted for major spending bills; supports higher taxes and expanded government programs'
          }
        },
      ],
    },
  },
  4: {
    office: 'U.S. House — District 4',
    region: 'Central Michigan (Midland, Mt. Pleasant)',
    incumbent: 'Bill Huizenga (R)',
    candidates: {
      republican: [
        { name: 'Bill Huizenga', description: 'Incumbent U.S. Representative. Serves on the House Financial Services Committee. Strong conservative voting record. Re-elected in 2024 with 55.1% of the vote.', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life record; 100% National Right to Life scorecard; co-sponsored pro-life legislation',
            marriage: 'Supports traditional marriage; voted against Respect for Marriage Act',
            religiousLiberty: 'Strong religious liberty record; supports RFRA protections; opposes government mandates on religious organizations',
            secondAmendment: 'A-rated by NRA; strong Second Amendment defender; opposes all gun control legislation',
            limitedGov: 'Supports reducing government size and regulation; Financial Services Committee member focused on deregulation',
            fiscal: 'Fiscal conservative; opposes omnibus spending; supports balanced budget amendment'
          }
        },
      
        { name: 'Philip Tanis', description: 'Former Mayor of Holland, Michigan, and College Historical Research Center Director. Challenging incumbent Bill Huizenga in the Republican primary. Limited public campaign information available for 2026 race.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Former Holland mayor -- Holland is a conservative Dutch Reformed community with strong pro-life culture; no explicit statements found but community context suggests pro-life alignment',
            marriage: 'Holland, Michigan has strong Dutch Reformed Christian heritage supporting traditional marriage; no explicit statements found but community context suggests traditional views',
            religiousLiberty: 'Holland is home to Hope College (Reformed Church); community strongly values religious liberty; no specific policy positions articulated',
            secondAmendment: 'No specific Second Amendment positions found; Republican candidate in conservative-leaning community',
            limitedGov: 'Former mayor suggesting executive governance experience; no specific limited government positions articulated for congressional race',
            fiscal: 'No specific fiscal positions found; Republican primary candidate challenging from within the party'
          }
        },
      ],
      democratic: [
        { name: 'Diop Harris II', description: 'Community leader, policy advocate, and former congressional staffer (legislative correspondent for U.S. Senator Sherrod Brown). Tribal citizen of the Nottawaseppi Huron Band of the Potawatomi. First candidate to submit signatures in the District 4 race. Campaign focused on universal healthcare, corporate accountability, and community investment.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Former staffer for Sen. Sherrod Brown (100% NARAL rating); campaign advocates for \'universal healthcare access\' which in progressive context includes abortion coverage',
            marriage: 'No specific statements found; worked for Sen. Sherrod Brown who strongly supports same-sex marriage and LGBTQ rights; progressive campaign positioning',
            religiousLiberty: 'No specific statements found on religious liberty; progressive policy platform does not emphasize religious exemptions',
            secondAmendment: 'No specific Second Amendment positions found; progressive Democratic candidate positioning suggests support for gun control measures',
            limitedGov: 'Advocates for universal healthcare access, corporate and utility accountability, and increased government investment in local communities -- expansive government role',
            fiscal: 'Campaign centered on \'people-powered movement\' with universal healthcare, increased community investment, and corporate accountability -- significant spending priorities'
          }
        },
        { name: 'Sean McCann', description: 'Michigan State Senator representing the Kalamazoo area (District 19). Previously served in Michigan House of Representatives (District 60, 2011-2015) and on Kalamazoo City Commission (1999-2008). Endorsed by Governor Gretchen Whitmer. Named to DCCC\'s \'Red to Blue\' program as a top Democratic recruit. Citizen of the Citizen Potawatomi Nation.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Campaign explicitly says he wants to \'protect women\'s right to choose\'; as state senator during 2023-2024 Democratic trifecta, voted with Whitmer\'s agenda which included repealing Michigan\'s 1931 abortion ban',
            marriage: 'Voted with Democratic majority in Michigan legislature which expanded LGBTQ civil rights protections including Elliott-Larsen Civil Rights Act expansion',
            religiousLiberty: 'No specific anti-religious liberty positions found, but voted with Democratic caucus that prioritized anti-discrimination measures over religious exemptions',
            secondAmendment: 'Voted with Democratic majority for Michigan gun control package in 2023 including red flag laws, universal background checks, and safe storage requirements',
            limitedGov: 'Endorsed by Whitmer; voted for expanded state government programs; supports federal tax relief and bringing \'good-paying jobs back\' through government action',
            fiscal: 'Campaign promises tax relief for Michigan families while supporting expanded government programs; as state senator voted for increased state spending under Whitmer administration'
          }
        },
      ],
    },
  },
  5: {
    office: 'U.S. House — District 5',
    region: 'Southeast Michigan (Monroe, Lenawee)',
    incumbent: 'Tim Walberg (R)',
    candidates: {
      republican: [
        { name: 'Tim Walberg', description: 'Incumbent U.S. Representative. Former pastor and ordained minister. Founding member of House Freedom Caucus. One of the most conservative members of Congress.', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Former pastor; 100% pro-life voting record; co-sponsored Heartbeat Protection Act and Born-Alive Act',
            marriage: 'Strongly supports traditional marriage; voted against Respect for Marriage Act; former pastor',
            religiousLiberty: 'Strong advocate; co-sponsored First Amendment Defense Act; ordained minister',
            secondAmendment: 'A-rated by NRA; opposes all gun control; supports constitutional carry',
            limitedGov: 'Founding member of House Freedom Caucus; opposes federal overreach; supports school choice',
            fiscal: 'One of the most fiscally conservative House members; opposes all spending increases; supports balanced budget'
          }
        },
      ],
      democratic: [
        { name: 'Christian Vukasovich', description: 'College professor and son of immigrant parents. Self-described expert in foreign policy, health communication, and extremist discourse. Running in a heavily Republican district (R+13 Cook PVI). Campaign focuses on immigration reform, congressional financial limitations, cost of living, public education, affordable housing, and constitutional rights.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'No specific abortion positions found; Democratic candidate running on progressive platform including \'safeguarding constitutional rights\' which in Democratic context includes abortion rights',
            marriage: 'No specific marriage positions found; Democratic primary candidacy suggests alignment with party platform',
            religiousLiberty: 'No specific positions found; campaign mentions \'safeguarding constitutional rights of the people\' which could include religious liberty',
            secondAmendment: 'No specific Second Amendment positions found; Democratic candidacy suggests likely support for gun control measures',
            limitedGov: 'Supports investing in public education, affordable housing, and government action on cost of living -- expanded government role',
            fiscal: 'Supports government investment in education, housing, and immigration reform; no specific fiscal restraint positions found'
          }
        },
      ],
    },
  },
  6: {
    office: 'U.S. House — District 6',
    region: 'Ann Arbor & Washtenaw',
    incumbent: 'Debbie Dingell (D)',
    candidates: {
      republican: [
        { name: 'Heather Smiley', description: 'Former Ford Motor Company employee (1990-2022) working in Data Insights and Analytics, Customer Service, and Product Development. B.A. from Central Michigan University (1985), M.A. in Administration from CMU (2001). Previously ran against Dingell in 2024 general election and lost. Note: may not be an official 2026 candidate -- more recent Ballotpedia listings do not include her in the 2026 Republican primary.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican candidate in 2024 who ran against Debbie Dingell; no specific pro-life policy positions publicly articulated; 30+ year Ford career in private sector suggests independence from party orthodoxy on social issues',
            marriage: 'No specific statements found on marriage; 2024 Republican candidacy in heavily Democratic Ann Arbor district suggests willingness to run on conservative values but no marriage-specific positions documented',
            religiousLiberty: 'No specific religious liberty positions found; Republican candidate positioning suggests general support',
            secondAmendment: 'No specific Second Amendment positions found; Republican primary candidate alignment suggests general support for gun rights',
            limitedGov: '30+ year career in private sector at Ford Motor Company suggests appreciation for free enterprise; no specific policy positions articulated',
            fiscal: 'No specific fiscal positions found; long private sector career at Ford and Republican candidacy suggest fiscal conservative leanings'
          }
        },
      ],
      democratic: [
        { name: 'Debbie Dingell', description: 'Incumbent U.S. Representative since 2015, succeeding her late husband John Dingell. Represents Ann Arbor and Washtenaw County. One of the most liberal members of Congress. Leading advocate for gun control, expanded healthcare, and climate policy.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports unrestricted abortion access; co-sponsored Women\'s Health Protection Act; 0% Right to Life scorecard',
            marriage: 'Co-sponsored Equality Act; supports same-sex marriage; opposes traditional marriage definition',
            religiousLiberty: 'Votes to limit religious exemptions in anti-discrimination law; does not prioritize religious liberty',
            secondAmendment: 'Leading gun control advocate in Congress; supports assault weapons ban, red flag laws, universal background checks',
            limitedGov: 'Supports expanded federal programs; backs major government expansion in healthcare and climate',
            fiscal: 'Votes for all major spending bills; supports higher taxes; opposes spending restraint'
          }
        },
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
        { name: 'Tom Barrett', description: 'Incumbent U.S. Representative, former Michigan State Senator. Army veteran with combat service. Flipped this Lansing-area swing district for Republicans in 2024. Strong conservative record in both state and federal office.', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life record in both state senate and Congress; opposes all abortion except to save mother\'s life',
            marriage: 'Supports traditional marriage; voted against Respect for Marriage Act',
            religiousLiberty: 'Supports religious freedom protections; opposes government mandates violating religious conscience',
            secondAmendment: 'A-rated by NRA; Army veteran; strong Second Amendment record in both state and federal office',
            limitedGov: 'Opposes federal overreach; supports reducing regulations; Army veteran focused on limited government',
            fiscal: 'Fiscal conservative; opposes wasteful spending; supports balanced budget amendment'
          }
        },
      ],
      democratic: [
        { name: 'Bridget Brink', description: 'Former U.S. Ambassador to Ukraine (2022-2025) who resigned over policy differences with Trump administration regarding Ukraine. First woman to serve as U.S. ambassador in a war zone. Grew up in Grand Rapids area, attended Michigan public schools, B.A. from Kenyon College, two master\'s degrees from London School of Economics. Career diplomat since 1996. Endorsed by EMILYs List and Michigan Education Association.', status: 'challenger', grade: 'D',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Endorsed by EMILYs List, which exclusively supports pro-choice Democratic women candidates; this endorsement confirms a strong pro-choice position',
            marriage: 'No specific statements found; EMILYs List endorsement and Democratic primary positioning indicate support for same-sex marriage',
            religiousLiberty: 'No specific positions found on religious liberty; diplomatic career and moderate Democratic positioning suggest limited emphasis on religious exemptions',
            secondAmendment: 'No specific gun policy positions found; Democratic candidate in moderate swing district; likely supports some gun control measures but may be more moderate than progressive opponents',
            limitedGov: 'Career government diplomat (30 years in Foreign Service); supports robust American global engagement and government institutions; opposes Trump\'s reduction of federal agencies',
            fiscal: 'No specific fiscal positions found; career in federal government and Democratic candidacy suggest support for government spending, particularly on defense and foreign affairs'
          }
        },
        { name: 'William Lawrence', description: 'Progressive activist and co-founder of the Sunrise Movement (climate action organization). Raised in East Lansing, graduated from Swarthmore College (2013). Founded Mid-Michigan Tenant Resource Center (2020). Coordinator for Michigan Rent Is Too Damn High coalition. Endorsed by Rashida Tlaib, Working Families Party, Sunrise Movement, National Nurses United, and U.S. Rep. Ro Khanna. Parents were Constitutional Law professors at Michigan State University.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Endorsed by Rashida Tlaib who supports unrestricted abortion access; progressive platform with Working Families Party endorsement; no pro-life positions whatsoever',
            marriage: 'Endorsed by progressive organizations that strongly support LGBTQ rights including Working Families Party; progressive platform alignment',
            religiousLiberty: 'Progressive activist endorsed by organizations that typically oppose broad religious exemptions; Tlaib endorsement (F-rated on religious liberty) indicates similar positioning',
            secondAmendment: 'Progressive activist platform; endorsed by organizations advocating gun control; no pro-Second Amendment positions found',
            limitedGov: 'Co-founded Sunrise Movement advocating for Green New Deal -- one of the most expansive government programs ever proposed; supports Medicare for All, social housing, massive government expansion',
            fiscal: 'Advocates for Green New Deal, Medicare for All, social housing, and major government investment programs; one of the most fiscally progressive candidates in any Michigan race'
          }
        },
        { name: 'Matt Maasdam', description: 'Retired Navy SEAL from Brighton, Michigan. Deployed to Iraq, Afghanistan, Africa, and Pacific during 20-year Navy career. Served as President Obama\'s military aide carrying the nuclear football starting in 2010. University of Michigan graduate. Post-military career as executive at Under Armour and e-commerce startups. Endorsed by End Citizens United and former U.S. Rep. Mark Schauer.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'No specific abortion positions found; Democratic candidate but with military background; moderate Democrat positioning in swing district does not clarify specific stance',
            marriage: 'No specific marriage positions found; Democratic candidacy suggests alignment with party platform supporting same-sex marriage',
            religiousLiberty: 'No specific positions found; military background suggests respect for constitutional freedoms including religious liberty',
            secondAmendment: 'Navy SEAL with extensive firearms experience; no specific gun policy positions articulated; running as Democrat but military background may indicate moderate stance on gun issues compared to party',
            limitedGov: 'Opposes Medicaid cuts; campaign focused on affordability and reshoring manufacturing jobs through government action; moderate Democrat approach to government role',
            fiscal: 'Opposes tariffs that hurt Michigan workers; opposes Medicaid cuts; supports government investment in manufacturing; moderate spending approach for a Democrat'
          }
        },
        { name: 'Muhammad Salman Rais', description: 'Family medicine physician who completed residency training in Saint Louis, Missouri. Holds Master in Health Services Administration from Central Michigan University. First-time candidate running in the Democratic primary for MI-7.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'No specific abortion positions found; Democratic primary candidate; physician background does not clarify stance but party alignment suggests pro-choice',
            marriage: 'No specific marriage positions found; Democratic candidacy suggests alignment with party platform supporting same-sex marriage',
            religiousLiberty: 'No specific positions found; physician and health services background does not indicate strong position either way',
            secondAmendment: 'No specific gun policy positions found; Democratic candidate in swing district; likely supports some gun control measures',
            limitedGov: 'Health services administration background suggests comfort with government healthcare systems; Democratic positioning indicates support for government programs',
            fiscal: 'No specific fiscal positions found; healthcare administration background and Democratic candidacy suggest support for government healthcare spending'
          }
        },
      ],
    },
  },
  8: {
    office: 'U.S. House — District 8',
    region: 'Flint / Tri-Cities / Bay City / Saginaw',
    incumbent: 'Kristen McDonald Rivet (D)',
    note: 'Competitive swing district. Top Republican target.',
    candidates: {
      republican: [
        { name: 'Amir Hassan', description: 'U.S. Navy veteran from Flint, Michigan. Served at Guantanamo Bay base and prison facility. Former federal law enforcement officer and former security detail for the Secretary of Transportation. Black and Muslim. Self-described \'America First\' Republican and \'pragmagatist.\' Endorsed by the Guardian Fund PAC. Campaign focuses on restoring jobs to the Saginaw Valley and supporting Trump\'s agenda.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'No explicit pro-life statements found; \'America First\' Republican alignment and Guardian Fund PAC endorsement suggest pro-life positioning; specific stance not publicly articulated',
            marriage: 'No specific marriage positions found; \'America First\' conservative alignment suggests traditional marriage support; Muslim faith background does not clarify political stance',
            religiousLiberty: 'Muslim and America First Republican -- interesting combination suggesting personal appreciation for religious freedom; fully supports U.S. aid and defense of Israel; no specific religious liberty legislation positions',
            secondAmendment: 'Navy veteran and former federal law enforcement officer; America First alignment strongly supports gun rights; law enforcement background indicates strong Second Amendment support',
            limitedGov: 'Supports Trump agenda including reducing government bureaucracy; proposes cutting income taxes for first responders; \'America First\' positioning suggests limited government approach with exceptions for defense and law enforcement',
            fiscal: 'Proposes cutting income taxes for first responders; supports Trump\'s economic agenda; criticizes Democratic spending; specific fiscal positions limited but conservative alignment clear'
          }
        },
        { name: 'Al Lemmo', description: 'Retired mechanical engineer who spent 30+ years at the U.S. Army\'s Tank-Automotive Research, Development and Engineering Center (TARDEC) in Warren. Distinguished graduate of Union College with two degrees with honors (1974). Served on the board of Wayne County West Right to Life/Lifespan of Metro Detroit for over a decade. Helped lead Dearborn\'s successful effort to pass the 1988 statewide referendum ending taxpayer-funded abortions. Previous 2020 congressional candidate.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'B', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Over a decade on the board of Wayne County West Right to Life/Lifespan of Metro Detroit; helped lead the 1988 statewide referendum to end taxpayer-funded abortions; pro-life activism is central to his political identity',
            marriage: 'Strong pro-life activist background and conservative Republican positioning strongly suggest traditional marriage support; no specific statements found but Right to Life board service indicates social conservatism',
            religiousLiberty: 'Pro-life activism rooted in religious conviction; Right to Life involvement suggests strong religious liberty advocacy; conservative social positions align with religious freedom protections',
            secondAmendment: 'No specific Second Amendment positions found; military-adjacent career at Army TARDEC and conservative Republican alignment suggest support for gun rights',
            limitedGov: '30+ year career in defense engineering at Army TARDEC; conservative Republican positioning; opposes taxpayer funding of programs he considers immoral',
            fiscal: 'Led effort to end taxpayer-funded abortions; conservative Republican positioning; specific fiscal positions beyond pro-life spending concerns not articulated but party alignment is clear'
          }
        },
        { name: 'Thomas J. Smith', description: 'Republican candidate in Michigan\'s 8th Congressional District for 2026. Very limited public information available about background, campaign platform, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public information found on abortion position',
            marriage: 'No public information found on marriage position',
            religiousLiberty: 'No public information found on religious liberty position',
            secondAmendment: 'No public information found on Second Amendment position',
            limitedGov: 'No public information found on government size position',
            fiscal: 'No public information found on fiscal positions'
          }
        },
      ],
      democratic: [
        { name: 'Kristen McDonald Rivet', description: 'Incumbent U.S. Representative. Former Michigan State Senator. Won the seat in 2024 with 51.3% in a competitive swing district. Previously voted for Whitmer\'s agenda in the state senate including gun control and abortion rights expansion.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports abortion rights; voted for Prop 3 codification in state senate before winning House seat',
            marriage: 'Supports same-sex marriage; voted for Michigan LGBTQ civil rights expansion as state senator',
            religiousLiberty: 'Votes to limit religious exemptions; does not prioritize religious liberty in legislation',
            secondAmendment: 'Supports gun control legislation including red flag laws and universal background checks',
            limitedGov: 'Supports expanded government programs and regulation; former state senator who voted for Whitmer agenda',
            fiscal: 'Supported Whitmer tax increases as state senator; votes for expanded spending as congresswoman'
          }
        },
      ],
    },
  },
  9: {
    office: 'U.S. House — District 9',
    region: 'Macomb County / Northern Oakland',
    incumbent: 'Lisa McClain (R)',
    candidates: {
      republican: [
        { name: 'Lisa McClain', description: 'Incumbent U.S. Representative. House Republican Conference Vice Chair. Strong conservative voting record. Re-elected in 2024 with 66.8% of the vote in a safely Republican district (R+16 Cook PVI).', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: '100% pro-life voting record; co-sponsored multiple pro-life bills; endorsed by Right to Life of Michigan',
            marriage: 'Supports traditional marriage; voted against Respect for Marriage Act',
            religiousLiberty: 'Strong religious liberty advocate; supports RFRA protections for faith-based organizations',
            secondAmendment: 'A-rated by NRA; opposes all gun control; supports Second Amendment rights',
            limitedGov: 'House Republican Conference Vice Chair; supports reducing government size and overreach',
            fiscal: 'Fiscal conservative; opposes wasteful spending and new taxes; supports balanced budget'
          }
        },
      ],
      democratic: [
        { name: 'Ray Pooley', description: 'Machinist and computer programmer running in a heavily Republican district (R+16 Cook PVI). Very limited public information available about policy positions or campaign platform.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public information found on abortion position',
            marriage: 'No public information found on marriage position',
            religiousLiberty: 'No public information found on religious liberty position',
            secondAmendment: 'No public information found on Second Amendment position',
            limitedGov: 'Machinist and computer programmer; no specific policy positions found',
            fiscal: 'No public information found on fiscal positions'
          }
        },
      ],
    },
  },
  10: {
    office: 'U.S. House — District 10',
    region: 'Southern Macomb / Oakland County',
    incumbent: 'Open (John James running for Governor)',
    note: 'Open seat — swing district. Highly competitive.',
    candidates: {
      republican: [
        { name: 'Michael Bouchard', description: 'Son of Oakland County Sheriff Mike Bouchard. Army captain and paratrooper with nearly 10 years of military service including nine months deployed to Iraq. Age 32. Raised $427,000 in Q1 2026 with ~$847,000 cash on hand. Campaign emphasizes restoring safety and security, rebuilding Michigan manufacturing, supporting Trump\'s agenda, border security, parental control of schools, and defending those who serve.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'No explicit pro-life statements found for this campaign; Trump-aligned Republican positioning and father\'s conservative record suggest pro-life leanings; has not completed candidate surveys',
            marriage: 'No specific statements found; conservative Republican family background and Trump alignment suggest traditional views; has not completed candidate surveys',
            religiousLiberty: 'Supports parental control of schools which often intersects with religious liberty; conservative positioning suggests general support; no specific policy articulated',
            secondAmendment: 'Army paratrooper with combat experience; father is a sheriff; campaign emphasizes \'restoring safety and security\'; strong law enforcement family background indicates robust Second Amendment support',
            limitedGov: 'Supports Trump\'s agenda on cutting red tape; wants to protect Michigan manufacturing and defend American jobs; military and law enforcement family background',
            fiscal: 'Supports economic protectionism for Michigan manufacturing; Trump-aligned fiscal approach; opposes excessive regulation; specific fiscal positions limited'
          }
        },
        { name: 'Steffan Demetropoulos', description: 'Army veteran, construction project manager, husband and father of four from Macomb, Michigan. Enlisted at 17 and served on active duty including combat deployment to Afghanistan and tactical training in Romania (10 years total military service). B.S. in Civil Engineering from Milwaukee School of Engineering, M.S. in Project Management from Louisiana State University. Works in construction management delivering K-12 school facilities and public-sector projects.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'No specific pro-life statements found; conservative Republican positioning in Macomb County suggests pro-life alignment; family-values messaging (\'husband and father of four\')',
            marriage: 'No specific statements found; family-focused campaign messaging and conservative community suggest traditional marriage support',
            religiousLiberty: 'No specific positions found; conservative Republican positioning suggests general support for religious freedom',
            secondAmendment: '10-year Army veteran with combat deployment to Afghanistan; military service strongly suggests robust Second Amendment support',
            limitedGov: 'Construction project manager focused on efficiency; military background; conservative positioning suggests limited government approach but works on public-sector projects',
            fiscal: 'Construction management career suggests practical fiscal approach; no specific fiscal policy positions articulated; Republican alignment indicates fiscal conservatism'
          }
        },
        { name: 'Justin Kirk', description: 'Attorney from Macomb County. Born and raised in Macomb County. University of Michigan graduate. Worked alongside the late Congressman Paul Mitchell. Built a legal career helping job creators, tradesmen, and small businesses. Campaign focused on bringing \'Macomb County values\' to Washington and standing up for working families.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'No specific pro-life statements found; worked with late Rep. Paul Mitchell who had a pro-life voting record; Macomb County conservative positioning suggests alignment',
            marriage: 'No specific statements found; conservative Macomb County community and Republican positioning suggest traditional marriage support',
            religiousLiberty: 'No specific positions found; conservative Republican positioning suggests general support for religious freedom',
            secondAmendment: 'No specific statements found; legal career helping \'tradesmen\' and Macomb County conservative culture suggest Second Amendment support; worked with Rep. Mitchell who was NRA-endorsed',
            limitedGov: 'Legal career helping small businesses and job creators \'level the playing field\' against large corporations; suggests some regulatory skepticism; Paul Mitchell mentorship indicates limited government leanings',
            fiscal: 'Career focused on helping small businesses; Republican positioning suggests fiscal conservatism; no specific fiscal policy positions articulated'
          }
        },
        { name: 'Robert Lulgjuraj', description: 'Former Macomb County Assistant Prosecuting Attorney. Native of Sterling Heights, grandson of Albanian immigrants who fled communism and religious persecution. Son of a maintenance worker and waitress. Graduated from Brother Rice High School, B.A. from Holy Cross College at Notre Dame (elected Student Body President), J.D. from University of Detroit Mercy School of Law (President of Federalist Society). Created the Digital Evidence Optimization Unit in Macomb County. Prosecuted 2,000+ cases. Facing ballot eligibility challenge. Raised $650,000+.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Family fled religious persecution; attended Brother Rice (Catholic) and Holy Cross at Notre Dame (Catholic institutions); President of Federalist Society (conservative legal organization that generally supports pro-life jurisprudence); strong pro-life institutional alignment',
            marriage: 'Catholic education (Brother Rice, Holy Cross at Notre Dame) and Federalist Society leadership strongly suggest traditional marriage views; conservative institutional background',
            religiousLiberty: 'Family literally fled communism and religious persecution; Catholic education background; Federalist Society president -- organization that strongly advocates for religious liberty in constitutional law',
            secondAmendment: 'Law enforcement career prosecuting violent crime; tough-on-crime platform; Federalist Society membership (supports individual right interpretation of 2A); conservative positioning in Macomb County',
            limitedGov: 'Federalist Society president (advocates for originalist, limited government jurisprudence); campaign emphasizes American values and border security; family background escaping communist government overreach',
            fiscal: 'Federalist Society membership and conservative legal background suggest fiscal conservatism; campaign emphasizes economic protectionism for working class; specific fiscal platform positions align with conservative economics'
          }
        },
      ],
      democratic: [
        { name: 'Eric Chung', description: 'Former U.S. Department of Commerce lawyer who worked on implementing the CHIPS and Science Act. From Sterling Heights. Son of Vietnamese immigrants; father was an auto worker in Macomb County. Graduate of Lamphere High School, Harvard College, and Yale Law School. Campaign focused on restoring the American Dream and holding Trump administration accountable.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'No specific abortion positions found; Democratic candidate positioning and opposition to Trump suggests pro-choice alignment; no explicit statements',
            marriage: 'No specific marriage positions found; Democratic candidacy suggests alignment with party platform supporting same-sex marriage',
            religiousLiberty: 'No specific positions found; Harvard/Yale legal background and Democratic positioning; son of immigrants may appreciate religious freedom protections',
            secondAmendment: 'No specific gun policy positions found; Democratic candidate in competitive swing district; likely moderate on gun issues for the party',
            limitedGov: 'Worked on implementing CHIPS Act (major federal industrial policy); supports active government role in manufacturing and economic development',
            fiscal: 'Implemented CHIPS Act which involves significant government spending on semiconductor manufacturing; Democratic positioning suggests support for government investment programs'
          }
        },
        { name: 'Tim Greimel', description: 'Mayor of Pontiac (2022-present, elected with 60%+ of the vote). Former Michigan State Representative (2012-2018) who served as House Democratic Minority Leader (2013-2016). Led efforts to establish Healthy Michigan, expand Medicaid to 650,000+ people, and raise Michigan\'s minimum wage. Campaign emphasizes economy, affordable healthcare, and opposing Trump\'s education and trade policies.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'House Democratic Minority Leader who led caucus aligned with pro-choice positions; Voices for Progress endorsement (progressive organization); no pro-life positions in legislative record',
            marriage: 'Led House Democratic caucus that supported LGBTQ rights expansion; progressive organizational endorsements; no traditional marriage positions in record',
            religiousLiberty: 'No specific anti-religious liberty positions found but House Democratic leadership aligned with limiting religious exemptions in anti-discrimination law',
            secondAmendment: 'House Democratic leader who would have supported Democratic gun control agenda; progressive platform alignment; no pro-gun positions in record',
            limitedGov: 'Established Healthy Michigan expanding Medicaid to 650,000 people; raised minimum wage; opposes elimination of Department of Education; strongly supports expanded government role',
            fiscal: 'Led expansion of Medicaid coverage; supports higher minimum wage; opposes spending cuts; progressive fiscal record as both state representative and mayor'
          }
        },
        { name: 'Christina Bertrand Hines', description: 'Prosecutor, mother, and lifelong Macomb County resident. Graduate of University of Michigan and Wayne State Law School. Has prosecuted homicides, human trafficking, sexual assault, and hate crimes. Ran for Macomb County Prosecutor in 2024, receiving 43% against incumbent Peter Lucido. Endorsed by EMILYs List. Over a decade fighting for women, children, and vulnerable communities.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Endorsed by EMILYs List, which exclusively supports pro-choice Democratic women candidates; this endorsement confirms a strong pro-choice position on abortion',
            marriage: 'EMILYs List endorsement and Democratic positioning indicate support for same-sex marriage; campaign focused on \'fighting for women, children, and vulnerable communities\'',
            religiousLiberty: 'No specific positions found on religious liberty; prosecutorial background focused on hate crimes may indicate emphasis on anti-discrimination over religious exemptions',
            secondAmendment: 'No specific gun policy positions found; Democratic candidate and prosecutor; likely supports gun control measures given law enforcement and Democratic positioning',
            limitedGov: 'Prosecutorial career in government service; Democratic positioning suggests support for expanded government programs; no specific limited government positions',
            fiscal: 'No specific fiscal positions articulated; Democratic candidacy and EMILYs List endorsement suggest progressive fiscal alignment'
          }
        },
      ],
    },
  },
  11: {
    office: 'U.S. House — District 11',
    region: 'Oakland County / Western Detroit Suburbs',
    incumbent: 'Haley Stevens (D)',
    note: 'Stevens may vacate if she wins Senate primary.',
    candidates: {
      republican: [
        { name: 'Ethan Baker', description: 'Republican candidate from Troy. Born and raised in California, moved to Michigan about 16 years ago after meeting his wife Bethany, moved permanently 5 years ago. Previous candidate for Michigan House District 41 (lost 2018 Republican primary) and Michigan State Senate District 13 (2014 Republican candidate). Current or former mayor of Troy. Limited public policy information available for 2026 congressional race.', status: 'challenger', grade: 'C',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Multiple-time Republican candidate suggesting consistent conservative alignment; no specific pro-life statements found for 2026 race; prior state-level candidacies in conservative districts',
            marriage: 'No specific statements found; has run multiple times as Republican in Oakland County (2014 state senate, 2018 state house); no marriage-specific positions documented in any campaign',
            religiousLiberty: 'No specific positions found; Republican candidate alignment suggests general support for religious freedom',
            secondAmendment: 'No specific statements found; repeated Republican candidacies suggest alignment with party\'s pro-Second Amendment positions',
            limitedGov: 'No specific positions articulated for congressional race; prior state-level campaigns suggest some level of limited government philosophy but no detailed platform available',
            fiscal: 'No specific fiscal positions found; Republican alignment suggests fiscal conservatism but no detailed platform available'
          }
        },
        { name: 'Tony J. Prieto', description: 'Battle-tested businessman and proud America First advocate. Son of 1960s legal immigrants who fled Communist Cuba. 35 years of professional bilingual experience across the U.S. and Latin America. Signed the U.S. Term Limits pledge to support a constitutional amendment for congressional term limits.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'America First conservative platform; strong traditional values emphasis consistent with pro-life positioning',
            marriage: 'Emphasizes traditional values and conservative social positions aligned with traditional marriage definition',
            religiousLiberty: 'America First conservative positioning includes strong support for religious freedom and conscience protections',
            secondAmendment: 'America First platform includes strong Second Amendment support; conservative positioning consistent with gun rights advocacy',
            limitedGov: 'Signed congressional term limits pledge; businessman background; America First platform focused on reducing government overreach; opposes globalization and government expansion',
            fiscal: 'Businessman with 35 years experience; term limits advocate; fiscally conservative America First platform focused on economic prosperity'
          }
        },
        { name: 'Anthony Paesano', description: 'Small business owner and attorney. Bachelor\'s degree from Purdue University (1994), law degree from University of Detroit Mercy School of Law (1999). Has been counseling small businesses on financial and growth issues for 23 years. Previously ran for Michigan House District 19 in 2022 (lost in general election). Self-described voice for small business.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Republican candidate with prior state house candidacy; no specific pro-life statements found but consistent conservative alignment',
            marriage: 'No specific statements found; Republican candidate who ran for state house in 2022 suggesting conservative social values',
            religiousLiberty: 'No specific positions found; Republican alignment suggests general support for religious freedom',
            secondAmendment: 'No specific statements found; Republican candidate alignment and prior state house candidacy suggest pro-2A positioning',
            limitedGov: 'Small business owner and attorney focused on reducing government burden on businesses; 23 years counseling small businesses on growth; strong limited government orientation',
            fiscal: 'Small business advocate; attorney focused on business growth and financial issues; fiscally conservative approach consistent with business background'
          }
        },
        { name: 'Michael Steger', description: 'Conservative activist dedicated to rebuilding American industry since 9/11. Opposes endless wars, globalization, and offshoring of American industry. Advocates for reviving American manufacturing, farming, scientific research, and education. Long-time opponent of Federal Reserve bailouts.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Conservative activist; no specific pro-life statements found but consistent conservative positioning since 2002',
            marriage: 'No specific statements found; conservative activist background suggests traditional marriage support',
            religiousLiberty: 'No specific positions found; conservative activism suggests support for religious liberty',
            secondAmendment: 'No specific gun positions found; long-time conservative activist alignment suggests pro-2A stance',
            limitedGov: 'Opposes globalization, government bailouts, and Federal Reserve overreach; advocates rebuilding American industry through reduced government interference; strong anti-establishment conservative',
            fiscal: 'Opposes Fed bailouts and government spending on foreign wars; advocates reinvestment in domestic industry and farming; fiscally conservative anti-establishment position'
          }
        },
      ],
      democratic: [
        { name: 'Stu Baker', description: 'Working-class candidate from Oakland County. Has worked retail, restaurant back-of-house, at billion-dollar corporations, for the government, and currently parks cars at a hospital cancer ward. Running to protect and represent workers of the 11th District. Focuses on standing up to corporations and fighting for fair pay and worker respect.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'No specific abortion positions found; Democratic primary candidate with progressive working-class platform suggests pro-choice alignment',
            marriage: 'No specific marriage positions found; Democratic candidacy suggests alignment with party platform supporting same-sex marriage',
            religiousLiberty: 'No specific positions found; working-class populist platform does not address religious liberty directly',
            secondAmendment: 'No specific gun policy positions found; Democratic candidate in Oakland County; likely supports gun control measures',
            limitedGov: 'Platform focused on government standing up to corporations and protecting workers; supports expanded government role in regulating business and ensuring worker protections',
            fiscal: 'Working-class populist platform focused on fair pay and worker protections; supports government intervention in labor markets and corporate regulation; expansive fiscal approach'
          }
        },
        { name: 'Aisha Farooqi', description: 'Attorney and former prosecutor from Sterling Heights. Lifelong Michigander. B.A. from University of Michigan-Dearborn (2006), J.D. from University of Detroit Mercy (2012). Raised $87,200 in Q1 2026. Campaign focused on affordability crisis, guaranteeing healthcare for all, fully funding public education, and ending the genocide in Gaza.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Campaign promises to \'guarantee healthcare for all\' which in progressive Democratic context includes abortion coverage; endorsed by progressive organizations; no pro-life positions',
            marriage: 'No specific marriage statements but progressive Democratic positioning and organizational endorsements indicate support for same-sex marriage',
            religiousLiberty: 'No specific positions found; campaign focused on ending Gaza conflict and opposing current Middle East policy may intersect with religious liberty issues but no explicit positions',
            secondAmendment: 'No specific gun policy positions found; Democratic candidate and former prosecutor; progressive alignment suggests support for gun control measures',
            limitedGov: 'Wants to guarantee healthcare for all, fully fund public education, tackle affordability crisis through government action -- significantly expanded government role',
            fiscal: 'Guaranteeing healthcare for all and fully funding public education would require massive new spending; progressive fiscal platform'
          }
        },
        { name: 'Jeremy Moss', description: 'Michigan State Senator and first openly gay state senator in Michigan history. Served as State Senate President Pro Tempore (2023-2024). Former State Representative (District 35, 2015-2019). Previously served on Southfield City Council. B.A. in journalism from Michigan State University. Endorsed by Governor Whitmer and Michigan Democratic Jewish Caucus. Led fundraising in MI-11 primary with over $1 million raised.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted to repeal Michigan\'s 1931 abortion ban; actively pushed to end the abortion felony law; strong pro-choice legislative record as Senate President Pro Tem',
            marriage: 'First openly gay state senator in Michigan; led expansion of Elliott-Larsen Civil Rights Act to add sexual orientation and gender identity protections; co-chair of LGBTQ Legislative Caucus; strongly opposes traditional marriage definition',
            religiousLiberty: 'Sponsored legislation expanding anti-discrimination protections that limit religious exemptions; prioritizes LGBTQ anti-discrimination over religious exemptions; Elliott-Larsen Act expansion reduces religious liberty carve-outs',
            secondAmendment: 'Founding member of Gun Violence Prevention Caucus; introduced universal background checks, safe storage requirements, reduced magazine capacity, and red flag laws; among the most anti-gun legislators in Michigan',
            limitedGov: 'Senate President Pro Tempore during 2023-2024 Democratic trifecta that passed sweeping new government programs and regulations; supports extensive government expansion',
            fiscal: 'Led Michigan Senate during period of significant new spending under Whitmer administration; supports expanded government programs requiring substantial new funding'
          }
        },
        { name: 'Michelle Mary Murphy', description: 'Born and raised in Detroit, has lived in Oakland County for nearly 40 years including 28 years in Michigan\'s 11th Congressional District. Proud mother of five college graduates and two-time college graduate herself. Cancer survivor. Bachelor\'s degree from University of Michigan-Dearborn (2010), graduate degree from University of Michigan (2012). Community advocate.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'No specific abortion positions found; Democratic primary candidate; community advocate background does not clarify stance but party alignment suggests pro-choice',
            marriage: 'No specific marriage positions found; Democratic candidacy suggests alignment with party platform supporting same-sex marriage',
            religiousLiberty: 'No specific positions found; community advocacy background does not indicate strong position either way',
            secondAmendment: 'No specific gun policy positions found; Democratic candidate in Oakland County; likely supports gun control measures',
            limitedGov: 'Community advocate running as Democrat; platform likely supports government programs for community development and social services',
            fiscal: 'No specific fiscal positions found; community advocacy background and Democratic candidacy suggest support for government spending on social services and education'
          }
        },
        { name: 'John Paul Torres', description: 'Waterford School Board Trustee. Lifelong resident of Michigan\'s 11th Congressional District. Career in Michigan judicial system including Probation Officer in Detroit Mental Health Court, Juvenile Court Administrator for Michigan Circuit Court, and Juvenile Drug Treatment Court Program Manager. Working-class background.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'No specific abortion positions found; Democratic primary candidate positioning suggests pro-choice alignment; school board and judicial background does not clarify stance',
            marriage: 'No specific marriage positions found; Democratic candidacy suggests alignment with party platform supporting same-sex marriage',
            religiousLiberty: 'No specific positions found; judicial system and school board background does not indicate strong position either way',
            secondAmendment: 'No specific gun policy positions found; Democratic candidate in Oakland County; judicial system background may indicate support for gun control measures',
            limitedGov: 'Career in government judicial system including probation, juvenile courts; school board trustee; comfortable with government institutions and programs',
            fiscal: 'School board trustee; career in government service; Democratic positioning suggests support for public spending on education and social services'
          }
        },
        { name: 'Don Ufford', description: 'Former Ford Motor Company executive (Director of Global Vehicle Engineering during Ford Escape, Mustang, F-150 development). Later worked in U.S. Department of Commerce and Office of Management and Budget (2020-2025), helping bring manufacturing jobs back to U.S. Rejoined NIST in 2024 and stayed through early Trump administration before quitting over tariff policy disagreements. From Bloomfield Village. Led all MI-11 candidates in third-quarter fundraising.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'No specific abortion positions found; previously identified as Republican before running as Democrat; moderate positioning but no clear stance on life issues',
            marriage: 'No specific marriage positions found; formerly identified as Republican; running as Democrat which suggests evolution on social issues',
            religiousLiberty: 'No specific positions found; previously identified as Republican suggesting possible moderate religious liberty views; no explicit statements',
            secondAmendment: 'No specific gun policy positions found; formerly Republican-identifying; manufacturing executive background does not clarify stance',
            limitedGov: 'Career spanning both private sector (Ford executive) and government (Commerce Department, OMB, NIST); believes in active government role in manufacturing policy; quit Trump administration over tariff disagreements',
            fiscal: 'Worked at OMB suggesting fiscal policy awareness; opposes Trump tariffs; supports government investment in manufacturing; moderate fiscal approach for a Democrat but still pro-government spending'
          }
        },
      ],
    },
  },
  12: {
    office: 'U.S. House — District 12',
    region: 'Downriver / Monroe / Western Wayne',
    incumbent: 'Rashida Tlaib (D)',
    candidates: {
      republican: [
        { name: 'James D. Hooper', description: 'Blue-collar Republican from Detroit\'s east side with a building trades background. Ran for this seat in 2022 (lost Republican primary) and 2024 (won primary, lost general to Tlaib). Passionate about American energy independence, lowering taxes, and eliminating the U.S. Department of Education. May or may not be officially filed for 2026.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'No specific pro-life statements found but repeated Republican candidacy and conservative platform suggest alignment; blue-collar conservative positioning',
            marriage: 'No specific statements found; conservative Republican candidate in multiple cycles suggests traditional marriage support',
            religiousLiberty: 'No specific statements found; conservative Republican positioning suggests general support for religious freedom',
            secondAmendment: 'No specific statements found; blue-collar Republican from Detroit trades background likely supports gun rights; no specific endorsements or ratings available',
            limitedGov: 'Explicitly supports eliminating the U.S. Department of Education; supports American energy independence (reducing government regulation of energy); strong limited government positioning',
            fiscal: 'Explicitly supports lowering taxes; supports American energy independence; wants to reduce government spending by eliminating Department of Education; fiscally conservative platform'
          }
        },
      ],
      democratic: [
        { name: 'Rashida Tlaib', description: 'Incumbent U.S. Representative. Member of \'The Squad\' progressive caucus. Re-elected in 2024 with 69.7% of the vote. One of the most progressive members of Congress. Supports Medicare for All, Green New Deal, and democratic socialism.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports unrestricted abortion access; co-sponsored bills removing all abortion restrictions',
            marriage: 'Co-sponsored Equality Act; strong supporter of LGBTQ rights; opposes traditional marriage definition',
            religiousLiberty: 'Actively opposes religious exemptions in anti-discrimination law; supports bills limiting religious liberty protections',
            secondAmendment: 'Supports comprehensive gun bans; co-sponsored assault weapons ban; one of the most anti-gun members of Congress',
            limitedGov: 'Democratic Socialist; supports massive government expansion including Green New Deal and Medicare for All',
            fiscal: 'Supports trillions in new spending; backs wealth tax; one of the most fiscally liberal members of Congress'
          }
        },
      
        { name: 'Shanelle Jackson', description: 'Former Michigan State Representative (District 9, 2007-2013). B.A. in political science from University of Michigan-Dearborn, M.A. in social justice from Marygrove College in Detroit. Has run for Congress multiple times: challenged John Conyers in 2012 (District 13), ran for this seat in 2022 (lost in Democratic primary).', status: 'challenger', grade: 'D',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Former state representative who voted with Democratic caucus on social issues; M.A. in social justice from Marygrove College; progressive Democratic positioning indicates pro-choice stance',
            marriage: 'M.A. in social justice; progressive Democratic positioning and state legislative record suggest support for same-sex marriage',
            religiousLiberty: 'No specific positions found; social justice degree and Democratic legislative record suggest limited support for broad religious exemptions',
            secondAmendment: 'No specific gun policy positions found from state legislative career; Democratic candidate in urban Detroit district; likely supports gun control measures',
            limitedGov: 'State legislative career and social justice academic background suggest support for expanded government programs; no specific limited government positions',
            fiscal: 'No specific fiscal positions found; progressive Democratic orientation and social justice background suggest support for government spending on social programs'
          }
        },
        { name: 'Byron H. Nolen', description: 'Mayor of Inkster, Michigan. Labor attorney and small business owner. Led Inkster out of a severe financial crisis as mayor. Campaign focused on protecting civil rights and constitutional freedoms. Announced congressional candidacy on March 11, 2026. Challenging incumbent Tlaib from a more moderate Democratic position.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'No specific abortion positions found; Democratic candidate but challenging Tlaib from a more moderate position; campaign focuses on civil rights and constitutional freedoms without specifying abortion',
            marriage: 'No specific marriage positions found; Democratic primary candidate likely supports same-sex marriage but may be more moderate than Tlaib',
            religiousLiberty: 'Campaign focused on \'protecting civil rights and constitutional freedoms\' which could include religious liberty; no specific anti-religious liberty positions; more moderate than Tlaib',
            secondAmendment: 'No specific gun policy positions found; Democratic candidate in urban district; likely supports gun control but may be more moderate than Tlaib',
            limitedGov: 'Successfully led Inkster out of financial crisis as mayor suggesting fiscal discipline; labor attorney background; supports government programs but demonstrated fiscal management ability',
            fiscal: 'Led city out of severe financial crisis demonstrating fiscal responsibility; labor attorney and small business owner; likely more fiscally moderate than incumbent Tlaib'
          }
        },
      ],
    },
  },
  13: {
    office: 'U.S. House — District 13',
    region: 'Detroit & Grosse Pointe',
    incumbent: 'Shri Thanedar (D)',
    candidates: {
      republican: [
        { name: 'Martell D. Bivings', description: 'Policy analyst and Detroit native. Attended Howard University. Career experience as advisor and policy analyst for Detroit City Council and business liaison with Detroit Economic Growth Corporation. Perennial candidate who ran for this seat in 2022 and 2024 (lost general election in 2024). May or may not be officially filed for 2026 -- recent Ballotpedia listings show different Republican primary candidates.', status: 'challenger', grade: 'C',
          positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'No specific pro-life positions found; Republican candidate in heavily Democratic Detroit district; iVoterGuide profile exists but specific policy details not available from search results',
            marriage: 'No specific statements found; Republican candidate but running in Detroit which has a diverse electorate; positions unclear',
            religiousLiberty: 'No specific positions found; Republican positioning in Detroit district makes specific stance unclear',
            secondAmendment: 'No specific Second Amendment positions found; Republican candidate in urban Detroit district; policy positions unclear',
            limitedGov: 'Policy analyst for Detroit City Council and business liaison for Detroit Economic Growth Corporation suggests comfort with government programs while also working with private sector; mixed signals',
            fiscal: 'Career in government policy analysis and economic development; Republican alignment suggests some fiscal conservatism but urban Detroit policy background complicates assessment'
          }
        },
        { name: 'Raphiel King', description: 'Republican candidate listed for Michigan\'s 13th District. May not be officially filed for the 2026 primary -- recent Ballotpedia listings show Articia Bomer and Andrew Lorenz as the official Republican primary candidates, not King. Very limited public information available.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public information found; candidacy status for 2026 uncertain',
            marriage: 'No public information found; candidacy status for 2026 uncertain',
            religiousLiberty: 'No public information found; candidacy status for 2026 uncertain',
            secondAmendment: 'No public information found; candidacy status for 2026 uncertain',
            limitedGov: 'No public information found; candidacy status for 2026 uncertain',
            fiscal: 'No public information found; candidacy status for 2026 uncertain'
          }
        },
        { name: 'T.P. Nykoriak', description: 'Full name Taras \'TP\' Nykoriak. Perennial candidate and convicted felon -- sentenced to 16 months in federal prison for stealing U.S. savings bonds from a church approximately 10 years ago. Claimed in 2014 to have fought with Ukraine against Russia. May not be officially filed for the 2026 primary -- recent Ballotpedia listings show different Republican primary candidates.', status: 'challenger', grade: 'F',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No policy positions found; convicted felon and perennial candidate with no substantive campaign platform',
            marriage: 'No policy positions found; no substantive campaign platform',
            religiousLiberty: 'Convicted of stealing savings bonds from a church; no substantive religious liberty positions',
            secondAmendment: 'No policy positions found; federal felony conviction may legally restrict firearm ownership',
            limitedGov: 'No substantive policy positions found; perennial candidate without serious campaign infrastructure',
            fiscal: 'No substantive policy positions found; perennial candidate without serious campaign infrastructure'
          }
        },
      ],
      democratic: [
        { name: 'Shri Thanedar', description: 'Incumbent U.S. Representative. Businessman and scientist. Re-elected in 2024 with 68.6% of the vote. Formerly self-described Democratic Socialist. Represents most of Detroit, Taylor, and Romulus.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports abortion rights; opposes restrictions on abortion access',
            marriage: 'Supports same-sex marriage; backs LGBTQ rights legislation',
            religiousLiberty: 'Has not actively targeted religious liberty but votes for bills limiting religious exemptions',
            secondAmendment: 'Supports gun control including assault weapons ban and red flag laws',
            limitedGov: 'Supports expanded government programs and federal involvement in housing and healthcare',
            fiscal: 'Votes for major spending bills; supports higher taxes on wealthy; formerly a self-described Democratic Socialist'
          }
        },
      
        { name: 'John Goci', description: 'Realtor and businessman who emigrated from Kosovo at age 9. Later served as a linguistic specialist for U.S. Army forces during the 1999 Kosovo war. Former vice president of the Wayne-Westland Board of Education. Ran for this district in 2012. May or may not be officially filed for 2026 -- recent Ballotpedia sources list different Democratic primary candidates.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No specific policy positions found; candidacy status for 2026 primary uncertain',
            marriage: 'No specific policy positions found; candidacy status for 2026 primary uncertain',
            religiousLiberty: 'Immigrant from Kosovo (fled persecution); Army linguistic specialist; no specific religious liberty policy positions found',
            secondAmendment: 'Army veteran (linguistic specialist); no specific gun policy positions found',
            limitedGov: 'School board and business background; no specific positions found; candidacy status uncertain',
            fiscal: 'Realtor and businessman; no specific fiscal positions found; candidacy status uncertain'
          }
        },
        { name: 'Donavan McKinney', description: 'Michigan State Representative (District 11) since 2023. Born and raised in northeast Detroit, attended Renaissance High School. B.A. in public policy from University of Michigan (2014). Former SEIU member and organizer. Endorsed by Rashida Tlaib, Bernie Sanders, Justice Democrats, Working Families Party, Planned Parenthood Advocates of Michigan, SEIU Michigan, Michigan AFL-CIO, MEA, Sierra Club Michigan, and Equality Michigan. Running as a progressive challenger to incumbent Thanedar.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Endorsed by Planned Parenthood Advocates of Michigan, confirming strong pro-choice position; Justice Democrats and Bernie Sanders endorsements indicate support for unrestricted abortion access',
            marriage: 'Endorsed by Equality Michigan Action Network; progressive platform fully supports LGBTQ rights and same-sex marriage',
            religiousLiberty: 'No specific anti-religious liberty positions found but progressive organizational endorsements (Equality Michigan, Justice Democrats) suggest prioritizing anti-discrimination over religious exemptions',
            secondAmendment: 'Progressive endorsements from organizations that support gun control; Justice Democrats and Working Families Party both advocate strict gun control measures; no pro-Second Amendment positions',
            limitedGov: 'Endorsed by Justice Democrats and Bernie Sanders who advocate massive government expansion; supports expanding Medicare and Medicaid, SNAP benefits, affordable housing, clean water programs; won $10M+ in government community violence intervention funding',
            fiscal: 'Supports expanding Medicare/Medicaid, SNAP benefits, parental leave, affordable childcare, earned paid sick leave; endorsed by Bernie Sanders who supports major new federal spending; secured $600M+ in federal funds for lead pipe replacement in Detroit'
          }
        },
        { name: 'Mary Waters', description: 'Detroit City Council at-large member since 2022. Former Michigan State Representative (2001-2007), first Black woman to serve as Democratic Floor Leader in Michigan House (2003-2006). University of Michigan graduate. Past president of Sisters Network Greater Metropolitan Detroit (Black breast cancer survivors). Ran against Thanedar in 2024, receiving 34% of the vote despite being heavily outspent. Maintained perfect attendance record as state representative.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Former state representative and Democratic Floor Leader; voted with Democratic caucus on social issues; no explicit pro-life positions in legislative record; breast cancer advocacy shows healthcare focus',
            marriage: 'No specific marriage positions found; Democratic Floor Leader background suggests alignment with party platform supporting same-sex marriage',
            religiousLiberty: 'No specific positions found; long Democratic legislative career suggests limited emphasis on religious exemptions but no explicit anti-religious liberty record found',
            secondAmendment: 'No specific gun policy positions found from state legislative career; Democratic candidate in urban Detroit district; likely supports gun control measures',
            limitedGov: 'Long career in government (state representative, city council); secured millions in government funding for Detroit and Wayne County; supports active government role',
            fiscal: 'Career focused on securing government funding for Detroit and Wayne County; City Council member; supports government spending on community programs'
          }
        },
      ],
    },
  },
}

// ── State Senate Races (by district) ─────────────────────────────
// All 38 seats on the 2026 ballot (post-redistricting, new maps)
// Source: Michigan Bureau of Elections Official Candidate Listing
// Filing deadline: April 21, 2026

export const STATE_SENATE_RACES = {
  1: {
    office: "State Senate — District 1",
    region: "Wayne County - Detroit",
    incumbent: "Erika Geiss (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Patrick O\'Connell', description: 'Republican candidate for SD-1; previously ran for Wayne County Commission District 15 in 2020 (lost); ran as Democrat for HD-6 in 2014; party-switcher now running as Republican in deep-blue Detroit district', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Party-switcher (formerly Democrat) now running as Republican; willingness to run as R in deep-blue district signals some conservative alignment but prior Democratic affiliation raises questions about depth of pro-life commitment',
            marriage: 'Prior Democratic affiliation (HD-6 in 2014) complicates conservative credentialing; no public statements found on marriage issues',
            religiousLiberty: 'No specific religious liberty positions found; running as Republican signals general support but prior party history suggests moderation',
            secondAmendment: 'No specific firearms positions found publicly; Republican affiliation in Wayne County suggests willingness to identify with 2A party',
            limitedGov: 'Previously ran as Democrat in 2014 then switched to Republican; limited public record on governance philosophy',
            fiscal: 'No specific fiscal policy positions found; party-switch history complicates assessment of fiscal conservatism'
          }
        },
      ],
      democratic: [
        { name: 'Abraham Aiyash', description: 'Current State Representative (HD-9, Hamtramck); son of Yemeni immigrants; progressive champion; running for open SD-1 seat against Justin Onwenu', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to codify abortion rights in Michigan after Prop 3',
            marriage: 'Voted for Elliott-Larsen Civil Rights Act expansion adding sexual orientation and gender identity protections',
            religiousLiberty: 'Voted for Elliott-Larsen expansion without meaningful religious exemptions; limited support for faith-based carveouts',
            secondAmendment: 'Voted for 2023 gun control package including red flag law, safe storage mandate, and universal background checks',
            limitedGov: 'Supports expanded government programs and regulations; progressive on regulatory authority',
            fiscal: 'Voted for major budget increases under Whitmer; supports progressive taxation and expanded social spending'
          }
        },
        { name: 'Justin Onwenu', description: 'Detroit\'s first Director of Entrepreneurship and Economic Opportunity; attorney; adjunct professor at University of Detroit Mercy School of Law; appointee to Whitmer\'s Black Leadership Council; endorsed by majority of Detroit City Council; age 29', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Whitmer appointee and progressive Democrat; aligned with administration\'s strong pro-choice agenda; no pro-life signals',
            marriage: 'Progressive Democratic candidate endorsed by Detroit City Council members who support LGBTQ rights expansion',
            religiousLiberty: 'Progressive alignment suggests opposition to broad religious exemptions; Whitmer appointee aligned with administration pushing Elliott-Larsen without religious carveouts',
            secondAmendment: 'Progressive Democrat in deep-blue Detroit; endorsed by Democratic establishment which supports comprehensive gun control',
            limitedGov: 'City government official who created new government office for entrepreneurship; supports expanded government role in economic development',
            fiscal: 'Supports expanded government spending on economic development programs; Whitmer administration appointee aligned with progressive fiscal agenda'
          }
        },
      ],
    },
  },
  2: {
    office: "State Senate — District 2",
    region: "Wayne County - Dearborn",
    incumbent: "Sylvia Santana (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Harry Sawicki', description: 'Republican candidate for SD-2; repeat R candidate in deep-blue Detroit area; ran in 2022 post-Dobbs signaling willingness to identify with pro-life party', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Repeat R candidate in deep-blue Detroit area; ran in 2022 post-Dobbs signaling willingness to identify with pro-life party; no specific policy statements found',
            marriage: 'Consistent Republican party affiliation suggests traditional values alignment; no specific statements on marriage',
            religiousLiberty: 'Republican party affiliation signals support for religious liberty; limited public record on specific positions',
            secondAmendment: 'Republican party affiliation signals 2A support; no specific policy statements found',
            limitedGov: 'Consistent R party affiliation in deep-blue district; limited public record on governance positions',
            fiscal: 'Republican party affiliation signals fiscal conservatism; limited public record on specific fiscal positions'
          }
        },
      ],
      democratic: [
        { name: 'Abbas Alawieh', description: 'Leader of \'Uncommitted\' movement; progressive activist; Rashida Tlaib ally; running for SD-2 Dearborn seat', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; progressive activist aligned with the most left-wing members of the Democratic caucus',
            marriage: 'Supports LGBTQ agenda; allied with Rashida Tlaib who champions progressive social positions',
            religiousLiberty: 'Progressive activist; opposes religious exemptions from anti-discrimination laws',
            secondAmendment: 'Supports strict gun control measures; aligned with progressive gun-control advocacy',
            limitedGov: 'Led the Uncommitted movement; progressive activist who supports expanded government programs and regulation',
            fiscal: 'Supports progressive fiscal policies including expanded social spending and government programs'
          }
        },
        { name: 'Erin Byrnes', description: 'State Representative retiring from House to run for Senate; strong progressive voting record in Michigan House', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted to codify abortion rights; supports full reproductive rights agenda',
            marriage: 'Voted for Elliott-Larsen LGBTQ expansion; opposes traditional marriage definition',
            religiousLiberty: 'Voted for Elliott-Larsen expansion without meaningful religious exemptions; limited support for faith-based carveouts',
            secondAmendment: 'Voted for 2023 gun control package including red flag law, safe storage, and universal background checks',
            limitedGov: 'Voted with Democratic caucus on expanding government programs and mandates',
            fiscal: 'Voted for Whitmer budget increases and expanded government spending'
          }
        },
      ],
    },
  },
  3: {
    office: "State Senate — District 3",
    region: "Wayne County - Detroit east side, Hamtramck, Highland Park, parts of Sterling Heights/Warren",
    incumbent: "Stephanie Chang (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Mark Ashley Price', description: 'Former Libertarian who switched to Republican in April 2024; elected to Highland Park School District Board of Education in 2020; sole Republican candidate in deep-blue SD-3', status: 'challenger', grade: 'C',
          positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Former Libertarian (switched to Republican 2024); Libertarian background suggests personal-liberty approach to abortion rather than strong pro-life stance',
            marriage: 'Former Libertarian party affiliation suggests libertarian view on marriage (government should stay out); not necessarily traditional marriage supporter',
            religiousLiberty: 'Former Libertarian background supports individual liberty broadly but may not emphasize religious liberty specifically; now Republican',
            secondAmendment: 'Libertarian background strongly supports 2A rights; party switch to Republican maintains this alignment',
            limitedGov: 'Strong limited government credentials from Libertarian background; school board experience suggests engagement with local governance',
            fiscal: 'Libertarian-to-Republican switch suggests strong fiscal conservatism; school board service in Highland Park shows hands-on fiscal experience'
          }
        },
      ],
      democratic: [
        { name: 'Mohammad Alam', description: 'Democratic candidate for SD-3; previously disqualified from 2024 Democratic primary for U.S. House MI-13; limited public policy record', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Previously ran in Democratic primary for U.S. House MI-13; Democratic party alignment in deep-blue Detroit signals strong pro-choice position',
            marriage: 'Democratic party affiliation in progressive Detroit district signals support for LGBTQ rights expansion',
            religiousLiberty: 'No specific positions found; Muslim-American candidate may have more nuanced views on religious liberty than typical progressive Democrat',
            secondAmendment: 'Democratic party affiliation in Detroit signals support for gun control measures',
            limitedGov: 'Democratic party platform in Detroit signals support for expanded government programs',
            fiscal: 'Democratic party alignment signals support for increased government spending and social programs'
          }
        },
        { name: 'John Conyers III', description: 'Entrepreneur and political organizer; son of late Congressman John Conyers Jr.; hedge fund manager with business pragmatism', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: null, secondAmendment: 'D', limitedGov: 'D', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Running as Democrat in deep-blue Detroit district; no explicit pro-life statements; party affiliation signals pro-choice lean',
            marriage: 'Democratic party affiliation signals support for LGBTQ agenda; no specific statements found',
            religiousLiberty: 'No public statements found on religious liberty issues',
            secondAmendment: 'Democratic party affiliation in Detroit signals support for gun control; no specific statements found',
            limitedGov: 'Democratic party platform supports expanded government; hedge fund background may moderate somewhat',
            fiscal: 'More centrist messaging focused on competence, stability, and measurable results; business pragmatism from hedge fund background tempers standard Democratic fiscal positions'
          }
        },
        { name: 'LeJuan Council', description: 'Detroit Community Advisory Council member (District 4, 2025 write-in candidate); community organizer in Detroit; limited public policy record for state-level issues', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Community advisory council member running in deep-blue Detroit; Democratic party affiliation signals strong pro-choice position',
            marriage: 'Democratic party affiliation in progressive Detroit signals support for LGBTQ rights agenda',
            religiousLiberty: 'No specific positions found; Democratic party alignment in Detroit suggests limited support for broad religious exemptions',
            secondAmendment: 'Democratic party affiliation in Detroit where gun violence is a major issue signals support for gun control',
            limitedGov: 'Community organizer background suggests support for government social programs and community investment',
            fiscal: 'Democratic party alignment in Detroit signals support for expanded government spending on social services'
          }
        },
        { name: 'LaTanya Garrett', description: 'Former three-term State Representative (2015-2020); EMT, small-business owner; extensive legislative voting record', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted with Democratic caucus on reproductive rights issues during three terms in the House',
            marriage: 'Supported LGBTQ legislation; voted with Democratic caucus on social issues',
            religiousLiberty: 'Voted with Democratic caucus; limited support for religious exemptions from anti-discrimination laws',
            secondAmendment: 'Supported gun control measures; voted with Democratic caucus on firearms restrictions',
            limitedGov: 'Voted for expanded government programs and regulation during three terms in the House',
            fiscal: 'Supported Democratic spending priorities and budget expansions during tenure'
          }
        },
        { name: 'Korey Hall', description: 'Former regional director in Gov. Whitmer\'s office; prior regional manager for Sen. Debbie Stabenow; career government official', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Whitmer administration official; supports the governor\'s pro-choice agenda',
            marriage: 'Supports the Whitmer/Stabenow progressive social agenda including LGBTQ rights expansion',
            religiousLiberty: 'Aligned with Whitmer administration which pushed Elliott-Larsen expansion without religious exemptions',
            secondAmendment: 'Supports the Whitmer/Stabenow agenda including the 2023 gun control package',
            limitedGov: 'Career government official; supports expanded government programs and regulatory agenda',
            fiscal: 'Supports Whitmer budget expansions and Stabenow\'s federal spending priorities'
          }
        },
        { name: 'Kimberly Hill Knott', description: 'Civic engagement strategist and environmental policy leader; led Detroit\'s first comprehensive Climate Action Plan as Policy Director at Detroiters Working for Environmental Justice; Congressional staff experience; founder of Christian Political Leadership Institute; CEO of Future Insight Consulting; Detroiter for nearly 30 years', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Progressive Democratic candidate; environmental justice background signals alignment with full progressive platform including pro-choice positions',
            marriage: 'Progressive platform signals support for LGBTQ rights; no specific statements but clear ideological alignment',
            religiousLiberty: 'Founded Christian Political Leadership Institute which may suggest some personal faith engagement; however progressive policy platform suggests limited support for broad religious exemptions',
            secondAmendment: 'Progressive Democratic platform in Detroit signals support for comprehensive gun control',
            limitedGov: 'Led government climate action plan; environmental policy director role signals support for expanded government environmental regulation',
            fiscal: 'Supports expanded government investment in climate resilience and environmental justice programs'
          }
        },
        { name: 'Adam Hollier', description: 'Former State Senator (District 2, 2018-2023); U.S. Army paratrooper; dropped Secretary of State bid to run here; more centrist than typical Detroit Democrat', status: 'challenger', grade: 'D',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Voted to codify abortion rights; supports reproductive rights legislation',
            marriage: 'Voted for Elliott-Larsen LGBTQ expansion; opposes traditional marriage definition',
            religiousLiberty: 'Voted for Elliott-Larsen expansion; limited support for religious exemptions but slightly more moderate than caucus',
            secondAmendment: 'Voted for gun control measures; some moderation on enforcement-related firearms issues but still supported the package',
            limitedGov: 'More centrist than caucus on some fiscal and law enforcement matters; military background brings some restraint on government overreach',
            fiscal: 'More moderate than Democratic caucus on some fiscal issues; centrist tendencies on spending but still supported most Democratic budgets'
          }
        },
        { name: 'Gary Hunter', description: 'Democratic candidate for SD-3; no public policy positions, campaign website, or prior political record found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Toinu Reeves', description: 'Dartmouth College graduate (philosophy and economics); studied graduate mathematics at Wayne State; pursuing PhD in economics at University of Michigan; previously ran for SD-3 in 2022 losing to Stephanie Chang; 2025 write-in candidate for Detroit Community Advisory Council District 4', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Repeat Democratic candidate in deep-blue Detroit; previously ran against Stephanie Chang who is strongly pro-choice; no pro-life signals',
            marriage: 'Democratic candidate in progressive Detroit district; academic background at liberal universities signals progressive social views',
            religiousLiberty: 'No specific religious liberty positions found; progressive Democratic alignment suggests limited support for broad exemptions',
            secondAmendment: 'Democratic candidate in Detroit where gun violence is a central issue; party alignment signals support for gun control',
            limitedGov: 'Economics PhD candidate whose academic work likely favors government intervention models; Democratic party alignment supports expanded programs',
            fiscal: 'Progressive Democratic candidate; economics background may inform fiscal views but party alignment signals support for expanded spending'
          }
        },
        { name: 'Abraham Shaw', description: 'Master automotive technician from Detroit; Kettering High School graduate; attended Wayne County Community College; previously ran for Michigan House District 7 in 2024 (lost in Democratic primary)', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Previously ran in Democratic primary for HD-7; Democratic party alignment in Detroit signals pro-choice position',
            marriage: 'Democratic party affiliation in progressive Detroit signals support for LGBTQ rights',
            religiousLiberty: 'No specific religious liberty positions found; blue-collar Democratic candidate may have more traditional personal views but party alignment is clear',
            secondAmendment: 'Democratic party affiliation in Detroit signals support for gun control measures',
            limitedGov: 'Democratic party alignment supports expanded government programs; working-class background may favor government worker protections',
            fiscal: 'Democratic party alignment signals support for increased government spending; blue-collar background suggests pro-union fiscal priorities'
          }
        },
        { name: 'Eboni Taylor', description: 'First-time candidate; leadership roles at Higher Heights and Mothering Justice; progressive advocacy organizations focused on women of color in politics and family policy', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Leadership at Mothering Justice which advocates for progressive family policies; strongly pro-choice',
            marriage: 'Leadership at Higher Heights (progressive women of color political org); supports full LGBTQ rights agenda',
            religiousLiberty: 'Progressive organizational background; opposes religious exemptions from anti-discrimination laws',
            secondAmendment: 'Strongly progressive on all issues including gun control; organizational affiliations support firearms restrictions',
            limitedGov: 'Advocates for expanded government social programs through Mothering Justice; supports progressive regulatory agenda',
            fiscal: 'Supports expanded social services spending and progressive fiscal policies through organizational advocacy'
          }
        },
      ],
    },
  },
  4: {
    office: "State Senate — District 4",
    region: "Wayne County - Downriver",
    incumbent: "Darrin Camilleri (D)",
    candidates: {
      republican: [
        { name: 'Marcie Grzywacz', description: 'Rockwood City Councilwoman; critical care nurse; homeschool mom; references defending God-given freedoms', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Homeschool mom with faith-based values; references defending God-given freedoms; no explicit pro-life statement but strong signals',
            marriage: 'Faith-based values and homeschool background signal traditional marriage support; no specific statements found',
            religiousLiberty: 'References defending God-given freedoms; faith-based values indicate strong religious liberty support',
            secondAmendment: 'No specific 2A statement but law enforcement supporter; Republican party affiliation signals support',
            limitedGov: 'Explicitly states more freedom, less government overreach; Rockwood City Councilwoman with hands-on local governance experience',
            fiscal: 'Critical care nurse and small-government advocate; opposes government overreach which signals fiscal restraint'
          }
        },
      ],
      democratic: [
        { name: 'Darrin Camilleri', description: 'Incumbent State Senator; strong progressive voting record; elected 2022', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted to codify abortion rights; supported Prop 3; 0% Michigan Right to Life scorecard',
            marriage: 'Voted to expand LGBTQ protections in Elliott-Larsen Civil Rights Act; opposes traditional marriage definition',
            religiousLiberty: 'Voted for Elliott-Larsen expansion without religious exemptions; limited support for faith-based carveouts',
            secondAmendment: 'Voted for 2023 gun control package including red flag law, safe storage, and universal background checks',
            limitedGov: 'Supports expanded government programs and regulations; voted for government mandates',
            fiscal: 'Voted for Whitmer budget expansions and new spending programs; supports tax increases'
          }
        },
      ],
    },
  },
  5: {
    office: "State Senate — District 5",
    region: "Wayne County - Canton, Plymouth, Westland area",
    incumbent: "Dayna Polehanki (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Estelle Oliansky', description: 'Republican candidate for SD-5; previously ran for Plymouth-Canton Board of Education in 2014 (lost); minimal public policy record for state-level office', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'Previously ran for school board in 2014; no public statements found on life issues; insufficient information to grade',
            marriage: 'No public statements found; insufficient information for individual assessment',
            religiousLiberty: 'No specific positions found; insufficient information for individual assessment',
            secondAmendment: 'No specific firearms positions found; insufficient information for individual assessment',
            limitedGov: 'School board candidate background; no specific governance philosophy statements found',
            fiscal: 'No specific fiscal policy positions found; insufficient information for individual assessment'
          }
        },
      ],
      democratic: [
        { name: 'Matt Koleszar', description: 'Fourth-term State Rep (District 22); former middle/high school teacher; House Education Committee chair', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted to codify abortion rights; supports reproductive rights legislation',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions; education focus on progressive curriculum',
            secondAmendment: 'Voted for 2023 gun control package; supports school safety through gun regulation',
            limitedGov: 'Supports expanded government role in education; advocates for more school funding and mandates',
            fiscal: 'Voted for Whitmer budget increases; supports higher education spending'
          }
        },
      ],
    },
  },
  6: {
    office: "State Senate — District 6",
    region: "Wayne/Oakland County - Detroit, Farmington, Farmington Hills, Livonia, Redford",
    incumbent: "Mary Cavanagh (D)",
    candidates: {
      republican: [
        { name: 'Joi Pokerwinski', description: 'Republican candidate for SD-6; no campaign website, policy positions, or prior political record found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
      ],
      democratic: [
        { name: 'Mary Cavanagh', description: 'Incumbent State Senator since 2023; elected in 2022 with 68.01%; strong progressive voting record', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to codify abortion rights post-Dobbs; supported Prop 3',
            marriage: 'Voted to expand Elliott-Larsen Civil Rights Act to include sexual orientation and gender identity',
            religiousLiberty: 'Voted for Elliott-Larsen expansion without strong religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package; supports red flag laws and safe storage mandates',
            limitedGov: 'Supports government expansion; voted for new state programs and mandates',
            fiscal: 'Voted for large budget increases; supports expanding state spending'
          }
        },
        { name: 'Stephen Jensen', description: 'Democratic challenger for SD-6; no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
      ],
    },
  },
  7: {
    office: "State Senate — District 7",
    region: "Oakland County - Southfield, Royal Oak, Ferndale, Berkley, Oak Park",
    incumbent: "Mallory McMorrow (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Anthony Paesano', description: 'Attorney and small business owner; Catholic background (Brother Rice); committed to lowering taxes and voter ID; previously ran for HD-19 in 2022', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Catholic background (Brother Rice); limited social issue statements but faith signals pro-life alignment',
            marriage: 'Catholic education background signals traditional marriage support; no specific statements found',
            religiousLiberty: 'Catholic background and Republican affiliation signal religious liberty support; limited public statements',
            secondAmendment: 'Republican party affiliation signals 2A support; no specific firearms statements found',
            limitedGov: 'Attorney and small business owner; committed to voter ID; previously ran for HD-19 (2022); strong limited government signals',
            fiscal: 'Committed to lowering taxes; supports small business; strong fiscal conservative signals from business background and tax-cut advocacy'
          }
        },
      ],
      democratic: [
        { name: 'Jason Hoskins', description: 'State Rep (District 18); attorney; former Southfield City Council member; House Economic Development Committee chair', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted to codify abortion rights in Michigan',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions in civil rights legislation',
            secondAmendment: 'Voted for 2023 gun control package; supports comprehensive gun reform',
            limitedGov: 'Supports expanded government economic development programs',
            fiscal: 'Voted for Whitmer budget increases; supports progressive economic policies'
          }
        },
        { name: 'Shadia Martini', description: 'Architect, entrepreneur; Syrian immigrant; MBA from U of M; Oakland County business owner; 2022/2024 nominee for HD-54; DLCC endorsed', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Explicitly stated the right to choose is a human right; strongly pro-choice',
            marriage: 'Democratic party affiliation and progressive platform signal opposition to traditional marriage; no specific statements found',
            religiousLiberty: 'Progressive Democratic candidate; no specific religious liberty positions but party alignment signals opposition to broad exemptions',
            secondAmendment: 'Actively supports common-sense gun legislation; strongly opposes Second Amendment absolutism',
            limitedGov: 'DLCC endorsed; supports expanded government programs; small business background may slightly moderate',
            fiscal: 'Democratic party platform and DLCC endorsement signal support for expanded government spending; small business owner background'
          }
        },
        { name: 'Rakesh Ramakrishnan', description: 'Spine surgeon; son of immigrant parents; active local Democratic leader and precinct delegate', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Active Democratic leader and precinct delegate; party affiliation signals pro-choice position; no specific statements found',
            marriage: 'Democratic party affiliation signals support for LGBTQ agenda; no specific statements found',
            religiousLiberty: 'Democratic party affiliation signals limited support for broad religious exemptions; no specific statements found',
            secondAmendment: 'Democratic party affiliation signals support for gun control; no specific statements found',
            limitedGov: 'Supports expanded government role in healthcare and education; active Democratic precinct delegate',
            fiscal: 'Supports expanded government role in healthcare which signals increased spending; limited specific fiscal positions'
          }
        },
      ],
    },
  },
  8: {
    office: "State Senate — District 8",
    region: "Wayne/Washtenaw - Dearborn Heights, Taylor, Flat Rock area",
    incumbent: "Dayna Polehanki (D)",
    candidates: {
      republican: [
        { name: "Kenneth D. Massey", description: "Republican candidate for SD-8", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican candidate; no specific pro-life positions found publicly',
            marriage: 'No public statements found; general conservative alignment from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found publicly',
            limitedGov: 'Republican candidate; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment',
          },
        },
        // Jody White — disqualified by MI BOE (removed from active candidate list)
      ],
      democratic: [
        { name: 'Dayna Polehanki', description: 'Incumbent State Senator; redistricted from former SD-7; elected 2022 with 61.07%; known for displaying AR-15 sign on Senate desk', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to protect and expand abortion access; supported Prop 3',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights including same-sex marriage',
            religiousLiberty: 'Voted for Elliott-Larsen without strong religious exemptions; limited faith-based protections',
            secondAmendment: 'Voted for 2023 gun control package; infamously displayed AR-15 sign on Senate desk to push gun control',
            limitedGov: 'Supports expanded government role in education, healthcare, and regulation',
            fiscal: 'Voted for all major Whitmer spending increases; supports expanded state programs'
          }
        },
        { name: 'Dean Raymond Wojtowicz', description: 'Democratic challenger for SD-8; no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
      ],
    },
  },
  9: {
    office: "State Senate — District 9",
    region: "Oakland/Macomb - Rochester, Rochester Hills, Troy, Utica, Shelby Twp, Sterling Heights",
    incumbent: "Michael Webber (R)",
    candidates: {
      republican: [
        { name: 'Michael Webber', description: 'Incumbent State Senator; elected 2022 with 50.35% in competitive race; perfect 365/365 attendance record', status: 'incumbent', grade: 'B',
          positions: { proLife: 'A', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Right to Life of Michigan PAC endorsed; consistent pro-life voting record',
            marriage: 'Was one of three Republicans who voted YES on Elliott-Larsen LGBTQ expansion — significant break from conservative position',
            religiousLiberty: 'Americans for Prosperity and Freedom Network endorsed, but Elliott-Larsen vote lacked religious liberty protections',
            secondAmendment: 'Strong 2A record; voted against 2023 red flag laws, safe storage, and universal background checks',
            limitedGov: 'AFP, Michigan Chamber, Freedom Network endorsed; solid conservative on regulation',
            fiscal: 'Michigan Chamber endorsed; consistent fiscal conservative votes; perfect 365/365 attendance record'
          }
        },
      ],
      democratic: [
        { name: 'Theresa Brooks', description: 'Dr. Theresa Brooks; running in SD-9 covering Rochester, Troy, Sterling Heights area; active campaign seeking campaign manager through progressive job boards', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Democratic candidate recruiting through progressive job boards; party alignment in suburban Oakland/Macomb district signals pro-choice position',
            marriage: 'Democratic party affiliation signals support for LGBTQ rights expansion',
            religiousLiberty: 'No specific religious liberty positions found; Democratic party alignment suggests limited support for broad exemptions',
            secondAmendment: 'Democratic party affiliation signals support for gun control measures',
            limitedGov: 'Democratic party platform supports expanded government programs',
            fiscal: 'Democratic party alignment signals support for increased government spending'
          }
        },
        { name: 'Brendan Johnson', description: 'Democratic candidate for SD-9 covering Rochester, Troy, Sterling Heights, and Utica; has active campaign website (brendanformichigan.com)', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Democratic candidate running in competitive suburban district; party alignment signals pro-choice position',
            marriage: 'Democratic party affiliation signals support for LGBTQ rights agenda',
            religiousLiberty: 'No specific religious liberty positions found; Democratic party alignment suggests limited support for broad exemptions',
            secondAmendment: 'Democratic party affiliation signals support for gun control; running in district where gun policy is competitive issue',
            limitedGov: 'Democratic party platform supports expanded government programs and regulatory authority',
            fiscal: 'Democratic party alignment signals support for increased government spending and social programs'
          }
        },
        { name: 'Ren Nushaj', description: 'Municipal attorney; Clawson City Attorney with 15+ years legal experience; Albanian-American; author; focuses on social justice, equality, and opportunity; active campaign (ren4misenate.com)', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Progressive Democratic candidate focused on social justice and equality; signals strong pro-choice alignment',
            marriage: 'Campaign emphasis on equality signals support for LGBTQ rights; progressive Democratic platform',
            religiousLiberty: 'Social justice focus suggests prioritizing anti-discrimination over religious exemptions; no specific positions found',
            secondAmendment: 'Democratic candidate endorsed by progressive groups; party alignment signals support for gun control',
            limitedGov: 'Municipal government attorney whose career involves government operations; social justice platform signals support for expanded programs',
            fiscal: 'Progressive platform signals support for increased government spending on social services and community programs'
          }
        },
      ],
    },
  },
  10: {
    office: "State Senate — District 10",
    region: "Macomb - Sterling Heights, Warren, Center Line, Detroit",
    incumbent: "Paul Wojno (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Michelle Nard', description: 'Lone Republican candidate for SD-10 (Sterling Heights, parts of Warren, Center Line, Detroit); no campaign website or policy positions found', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
      ],
      democratic: [
        { name: 'Mark Anthony Murphy Jr.', description: 'Democratic candidate for SD-10 (Sterling Heights, Warren, Center Line, Detroit); no campaign website, policy positions, or background information found', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No public statements or campaign materials found; insufficient information to grade', marriage: 'No public statements or campaign materials found; insufficient information to grade', religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade', secondAmendment: 'No public statements or campaign materials found; insufficient information to grade', limitedGov: 'No public statements or campaign materials found; insufficient information to grade', fiscal: 'No public statements or campaign materials found; insufficient information to grade' } },
        { name: 'Natalie Price', description: 'Current State Rep HD-6; endorsed by Planned Parenthood, Equality Michigan, UAW; former teacher; 100% LCV score', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Endorsed by Planned Parenthood; strongly pro-choice voting record as State Rep',
            marriage: 'Endorsed by Equality Michigan; actively supports LGBTQ rights expansion; opposes traditional marriage definition',
            religiousLiberty: 'Progressive voting record; supports anti-discrimination laws without broad religious exemptions',
            secondAmendment: 'Explicitly fights for common-sense gun laws; endorsed by gun control advocacy groups',
            limitedGov: 'Endorsed by UAW; 100% LCV score; supports expanded government programs, regulations, and mandates',
            fiscal: 'Supports expanded government spending on education and social programs; UAW-endorsed with pro-worker spending agenda'
          }
        },
        { name: 'Amanda Treppa', description: 'Democratic candidate for SD-10; endorsed by LPAC (LGBTQ PAC); community advocate; business leader; housing/affordability focus', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Democratic party affiliation signals pro-choice position; no explicit statements but party alignment clear',
            marriage: 'Endorsed by LPAC (LGBTQ PAC); actively supports LGBTQ rights agenda; opposes traditional marriage definition',
            religiousLiberty: 'LPAC endorsement and progressive platform signal opposition to broad religious exemptions',
            secondAmendment: 'Democratic party affiliation signals support for gun control; no specific statements found',
            limitedGov: 'Supports expanded government role in housing, tenant protections, and corporate landlord regulation',
            fiscal: 'Supports expanded government spending on housing and tenant protections; progressive fiscal approach to affordability'
          }
        },
      ],
    },
  },
  11: {
    office: "State Senate — District 11",
    region: "Macomb County",
    incumbent: "Veronica Klinefelt (D)",
    candidates: {
      republican: [
        { name: "Johnnie S. Townsend", description: "Republican candidate for SD-11", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican candidate; no specific pro-life positions found publicly',
            marriage: 'No public statements found; general conservative alignment from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found publicly',
            limitedGov: 'Republican candidate; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment',
          },
        },
      ],
      democratic: [
        { name: 'Joseph Michael Hunt', description: 'Democratic challenger for SD-11; no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Alysha Johnson', description: 'Democratic challenger for SD-11; no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Veronica Klinefelt', description: 'Incumbent State Senator; Macomb County moderate Democrat; elected 2022', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Pro-choice voting record; voted to expand abortion access in Michigan',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Voted for Elliott-Larsen without strong religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package including red flag laws',
            limitedGov: 'Supports government programs and expanded state services',
            fiscal: 'Generally supports Whitmer budgets; Macomb County moderate on some fiscal issues'
          }
        },
      ],
    },
  },
  12: {
    office: "State Senate — District 12",
    region: "Oakland/Macomb - parts of Oakland and Macomb counties",
    incumbent: "Rosemary Bayer (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: "Joseph A. Backus", description: "Republican candidate for SD-12", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican candidate; no specific pro-life positions found publicly',
            marriage: 'No public statements found; general conservative alignment from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found publicly',
            limitedGov: 'Republican candidate; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment',
          },
        },
        { name: 'Patrick Shawn Biange', description: 'Republican candidate for SD-12; previously ran as Democrat for Michigan House District 12 in 2024 (lost in primary); party-switcher raises questions about ideological commitment', status: 'challenger', grade: 'C',
          positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Ran as Democrat in 2024 then switched to Republican; party-switch raises serious questions about depth of conservative convictions on life issues',
            marriage: 'Previously ran as Democrat which signals progressive social views; recent Republican switch does not erase prior party alignment',
            religiousLiberty: 'Party-switcher from Democrat to Republican; ideological consistency unclear',
            secondAmendment: 'Previously ran as Democrat; recent Republican switch does not demonstrate consistent 2A advocacy',
            limitedGov: 'Party-switch from Democrat to Republican raises questions about governance philosophy consistency',
            fiscal: 'Party-switcher; unclear whether fiscal views align with Republican platform or previous Democratic alignment'
          }
        },
        { name: 'John Goldwater', description: 'Republican candidate for SD-12; no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Eileen Tesch', description: 'Republican candidate for SD-12; community activist in Oakland/Macomb area', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican primary candidate; no explicit pro-life endorsements found; running in conservative-leaning district signals alignment',
            marriage: 'No public statements found; conservative alignment assumed from party affiliation in conservative district',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found; Republican in pro-2A district',
            limitedGov: 'Running as Republican in conservative district; community activist background',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment in district'
          }
        },
        { name: 'Shelley Wright', description: 'Republican candidate for SD-12; community leader in Oakland/Macomb area', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican primary candidate; no explicit pro-life statements found; general conservative alignment',
            marriage: 'No public statements found; conservative alignment assumed from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found; Republican in pro-2A district',
            limitedGov: 'Running as Republican in conservative district; community leadership background',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment'
          }
        },
      ],
      democratic: [
        { name: 'Kevin Hertel', description: 'Former State Representative; progressive voting record in Michigan House', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted to codify abortion rights as State Representative',
            marriage: 'Voted for Elliott-Larsen LGBTQ expansion; opposes traditional marriage definition',
            religiousLiberty: 'Voted for Elliott-Larsen expansion without meaningful religious exemptions; limited support for faith-based carveouts',
            secondAmendment: 'Voted for 2023 gun control package including red flag law, safe storage, and universal background checks',
            limitedGov: 'Voted with Democratic caucus on expanding government programs and mandates',
            fiscal: 'Voted for Whitmer budget increases and expanded government spending programs'
          }
        },
      ],
    },
  },
  13: {
    office: "State Senate — District 13",
    region: "Oakland County - West Bloomfield, Wixom, Novi, Milford, Lyon Twp, Waterford",
    incumbent: "Rosemary Bayer (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Ryan Berman', description: 'Former two-term State Representative; attorney from Union Lake; 2025 \'Leader in the Law\' honoree; UNOPPOSED in R primary', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life as State Rep; voted against every pro-abortion measure; co-sponsored heartbeat bill',
            marriage: 'Openly supports traditional marriage; voted against legislation undermining religious views on marriage',
            religiousLiberty: 'Championed religious liberty legislation; voted to protect faith-based adoption agencies from discrimination mandates',
            secondAmendment: 'A-rated by NRA; voted against all 2023 gun control bills including red flag law and storage mandates',
            limitedGov: 'Conservative attorney; voted against expanding government programs; supports deregulation and parental rights in education',
            fiscal: 'Voted against Whitmer budgets; supports tax cuts; opposed corporate welfare spending'
          }
        },
      ],
      democratic: [
        { name: 'DC Anderson', description: 'Commerce Township resident; Democratic candidate for SD-13; no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Sean Carlson', description: 'Oakland County Deputy Executive; retired U.S. Air Force Lieutenant Colonel (20 years active/guard); MSU graduate (BA business, MA labor relations/HR, JD); former Executive Director Michigan Defense Center; former VP International Trade at MEDC; former Senior Deputy Director Michigan Dept of Management & Budget; endorsed by outgoing Sen. Rosemary Bayer', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Running as Democrat with Bayer endorsement (strong progressive); Oakland County Democratic establishment candidate signals pro-choice alignment',
            marriage: 'Endorsed by Rosemary Bayer who championed LGBTQ protections; Democratic establishment candidate signals support for progressive social agenda',
            religiousLiberty: 'No specific positions found; military veteran background may suggest moderate views but Democratic establishment alignment limits religious liberty support',
            secondAmendment: 'Military veteran with firearms experience; however Democratic party alignment and Oakland County progressive base signal support for gun control measures',
            limitedGov: 'Career government official across multiple state agencies; former MEDC VP and DMB Senior Deputy Director — extensive big-government career',
            fiscal: 'Led reforms saving $250M in government contracts at DMB showing fiscal management ability; however career spent expanding government programs signals progressive fiscal approach'
          }
        },
        { name: 'Cecil D. George', description: 'New Hudson resident; landscaping company owner; first-time candidate with no prior political experience; running for SD-13', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'Small business owner and first-time candidate; no public policy positions found; insufficient information to grade', marriage: 'No public statements or campaign materials found; insufficient information to grade', religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade', secondAmendment: 'No public statements or campaign materials found; insufficient information to grade', limitedGov: 'Small business owner which may signal some limited-government orientation; but running as Democrat; insufficient specific information', fiscal: 'Small business owner background; no specific fiscal positions found; insufficient information to grade' } },
      ],
    },
  },
  14: {
    office: "State Senate — District 14",
    region: "Washtenaw/Jackson - North Ann Arbor, Jackson, rural areas",
    incumbent: "Sue Shink (D)",
    candidates: {
      republican: [
        { name: 'Tawn Shawnelle Beliger', description: 'Republican who filed for SD-14 on 9/30/2025 but has since withdrawn from the race', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'Withdrew from race; insufficient information to grade',
            marriage: 'Withdrew from race; insufficient information to grade',
            religiousLiberty: 'Withdrew from race; insufficient information to grade',
            secondAmendment: 'Withdrew from race; insufficient information to grade',
            limitedGov: 'Withdrew from race; insufficient information to grade',
            fiscal: 'Withdrew from race; insufficient information to grade'
          }
        },
      ],
      democratic: [
        { name: 'Sue Shink', description: 'Incumbent State Senator; conservationist, farmer; former Washtenaw County Board of Commissioners chair; elected 2022 with 55.80%', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to expand abortion access; supported Prop 3',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions in civil rights legislation',
            secondAmendment: 'Voted for 2023 gun control package; supports expanded background checks',
            limitedGov: 'Supports environmental regulations and expanded government role in conservation',
            fiscal: 'Voted for Whitmer budget expansions; supports increased state spending on environmental programs'
          }
        },
      ],
    },
  },
  15: {
    office: "State Senate — District 15",
    region: "Washtenaw/Lenawee",
    incumbent: "Felicia Brabec (D)",
    candidates: {
      republican: [
        { name: 'Jason Rogers', description: 'Republican candidate for SD-15; previously ran for Michigan House District 33 in 2024 (lost in general election); consistent Republican candidate', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Repeat Republican candidate (ran for HD-33 in 2024); willingness to run as Republican in competitive districts signals conservative alignment',
            marriage: 'Republican party affiliation signals traditional values; no specific marriage statements found',
            religiousLiberty: 'No specific positions found; Republican party affiliation signals general support',
            secondAmendment: 'No specific firearms positions found; Republican party affiliation signals 2A support',
            limitedGov: 'Repeat Republican candidate showing consistent party commitment; limited specific governance positions',
            fiscal: 'No specific fiscal positions found; consistent Republican candidate in Washtenaw/Lenawee area'
          }
        },
      ],
      democratic: [
        { name: 'Felicia Brabec', description: 'Incumbent State Senator; strong progressive voting record in Michigan Senate', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; supports expanded abortion access',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights and same-sex marriage',
            religiousLiberty: 'Limited support for religious exemptions in expanding civil rights legislation',
            secondAmendment: 'Voted for 2023 gun control package; supports red flag laws and universal background checks',
            limitedGov: 'Supports government expansion in education, healthcare, and environmental regulation',
            fiscal: 'Voted for Whitmer budget increases; supports expanded state spending'
          }
        },
        { name: 'Michael White', description: 'Army veteran; former union worker and AT&T leader; nonprofit founder; community leader in Washtenaw, Lenawee, and Monroe counties; lifelong advocate for working families', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Democratic candidate running on progressive platform; party alignment signals pro-choice position',
            marriage: 'Democratic party affiliation and progressive platform signal support for LGBTQ rights agenda',
            religiousLiberty: 'No specific religious liberty positions; veteran background may suggest respect for individual rights but progressive platform limits scope',
            secondAmendment: 'Army veteran with military firearms experience; however Democratic party alignment signals support for gun control measures; veteran status may moderate somewhat',
            limitedGov: 'Union worker background and nonprofit founder; supports expanded government role in worker protections and social services',
            fiscal: 'Union and working-family advocacy background signals support for expanded government spending on labor protections and social programs'
          }
        },
      ],
    },
  },
  16: {
    office: "State Senate — District 16",
    region: "Monroe/Lenawee/Hillsdale Counties",
    incumbent: "Joseph Bellino Jr. (R)",
    candidates: {
      republican: [
        { name: "Joseph Bellino Jr.", description: "Incumbent State Senator; business owner (Broadway Market, Monroe); elected 2022 with 65.01%; former Monroe County Community College Board", status: "incumbent", grade: 'B',
          positions: { proLife: 'A', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life; consistent pro-life voting record; 100% Michigan Right to Life scorecard',
            marriage: 'Was one of three Republicans who voted YES on Elliott-Larsen LGBTQ civil rights expansion — significant break from conservative position',
            religiousLiberty: 'Elliott-Larsen vote raises concern since the bill lacked strong religious liberty protections; otherwise supports conscience protections',
            secondAmendment: 'NRA A-rated; voted against 2023 gun control package including red flag law and universal background checks',
            limitedGov: 'Small business owner; 96% conservative rating (MIRS 2025); opposes excessive regulation',
            fiscal: 'Voted against Whitmer budget increases; supports balanced budgets and opposes tax hikes; business-first approach',
          },
        },
      ],
      democratic: [
        { name: 'Deandre Barnes', description: 'Democrat from Newport, MI (4814 Sycamore Rd); filed for SD-16; no campaign website, policy positions, or background information found beyond filing record', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
      ],
    },
  },
  17: {
    office: "State Senate — District 17",
    region: "Calhoun/Branch/St. Joseph Counties",
    incumbent: "Open",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Jonathan Lindsey', description: 'Attorney; constitutional conservative; strong pro-life and pro-2A advocate; endorsed by Right to Life of Michigan PAC', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Explicitly pro-life; endorsed by Right to Life of Michigan PAC; attorney who has advocated for pro-life legal positions',
            marriage: 'Strong traditional values; Christian conservative; supports traditional marriage definition',
            religiousLiberty: 'Constitutional attorney; strong advocate for First Amendment protections and religious liberty',
            secondAmendment: 'Strong 2A supporter; endorsed by pro-gun organizations; opposes red flag laws',
            limitedGov: 'Constitutional conservative; advocates for reduced government overreach; opposes regulatory expansion',
            fiscal: 'Supports lower taxes and reduced government spending; fiscally conservative platform'
          }
        },
      ],
      democratic: [
        { name: 'Ashleigh Baker', description: 'Democratic candidate for SD-17 (Calhoun/Branch/St. Joseph Counties); no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Mike D. Jones', description: 'Democratic candidate for SD-17; no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No public statements or campaign materials found; insufficient information to grade', marriage: 'No public statements or campaign materials found; insufficient information to grade', religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade', secondAmendment: 'No public statements or campaign materials found; insufficient information to grade', limitedGov: 'No public statements or campaign materials found; insufficient information to grade', fiscal: 'No public statements or campaign materials found; insufficient information to grade' } },
        { name: 'Brett Muchow', description: 'Democratic candidate for SD-17; no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
      ],
    },
  },
  18: {
    office: "State Senate — District 18",
    region: "Ionia/Montcalm/Gratiot area",
    incumbent: "Thomas A. Albert (R)",
    candidates: {
      republican: [
        { name: "Thomas A. Albert", description: "Incumbent State Senator; former State Representative and House Appropriations chair", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life throughout career; co-sponsored multiple pro-life bills as House Rep and Senator',
            marriage: 'Consistent supporter of traditional marriage; voted against progressive family law changes',
            religiousLiberty: 'Championed religious liberty protections; voted against mandates on faith-based organizations',
            secondAmendment: 'Strong 2A supporter; voted against all 2023 gun control bills; supported constitutional carry',
            limitedGov: 'Former House Appropriations chair; deeply committed to limiting government spending and overreach',
            fiscal: 'Led budget fights as Appropriations chair; fiscal hawk who opposed Whitmer spending increases; supports tax reform',
          },
        },
      ],
      democratic: [
        { name: 'Anthony Pennock', description: 'Educator from Battle Creek; researcher, special educator, and union leader; filed May 2025 to run against Thomas Albert in SD-18', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Public school educator and union leader running as Democrat; party alignment signals pro-choice position',
            marriage: 'Democratic party affiliation and progressive education background signal support for LGBTQ rights',
            religiousLiberty: 'Public educator background; Democratic alignment suggests limited support for broad religious exemptions in education and policy',
            secondAmendment: 'Democratic party affiliation and union background signal support for gun control measures',
            limitedGov: 'Special educator and union leader; supports expanded government role in education, union protections, and social programs',
            fiscal: 'Union leader who advocates for increased education funding; Democratic alignment signals support for expanded government spending'
          }
        },
      ],
    },
  },
  19: {
    office: "State Senate — District 19",
    region: "Kalamazoo area",
    incumbent: "Julie M. Rogers (D)",
    candidates: {
      republican: [
        { name: 'Shaun Young', description: 'Republican candidate for SD-19 (Kalamazoo area); no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
      ],
      democratic: [
        { name: "Julie M. Rogers", description: "Incumbent State Senator", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to expand abortion access',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions in civil rights legislation',
            secondAmendment: 'Voted for 2023 gun control package; supports expanded gun regulations',
            limitedGov: 'Supports expanded government role in healthcare and social services',
            fiscal: 'Voted for Whitmer budget expansions; supports increased state spending',
          },
        },
      ],
    },
  },
  20: {
    office: "State Senate — District 20",
    region: "Allegan/Van Buren area",
    incumbent: "Aric Nesbitt (R)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Curtis Clark', description: 'Holland, MI native; U.S. Army veteran (1983-2006); previously ran for U.S. House MI-4 as U.S. Taxpayers Party candidate in 2024 (lost); third-party-to-Republican candidate', status: 'challenger', grade: 'B',
          positions: { proLife: 'A', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'U.S. Taxpayers Party (Constitution Party affiliate) background is strongly pro-life; party platform opposes all abortion',
            marriage: 'Constitution Party affiliate background supports traditional marriage; no specific individual statements found',
            religiousLiberty: 'Constitution Party affiliate background strongly supports religious liberty; no specific individual statements found',
            secondAmendment: 'Military veteran (23 years Army) and Constitution Party affiliate strongly supports 2A; no specific statements but strong signals',
            limitedGov: 'Constitution Party/U.S. Taxpayers Party affiliation is strongest limited-government party; 23-year military veteran',
            fiscal: 'Constitution Party affiliate background supports minimal government spending and taxation; strong fiscal conservative credentials'
          }
        },
        { name: 'Kenny Clevenger', description: 'Casco Township Treasurer (2021-present); former Allegan County Republican Party chairman (2022-2025); local government fiscal experience', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Conservative Republican; former county party chairman; general pro-life alignment but no explicit endorsements found',
            marriage: 'Conservative county party leader; no explicit statements but strong party alignment',
            religiousLiberty: 'Republican party leader in conservative Allegan County; general conservative orientation',
            secondAmendment: 'Rural SW Michigan Republican; general 2A support expected but no specific endorsements found',
            limitedGov: 'Township treasurer; local government experience suggests understanding of limited government principles',
            fiscal: 'Township treasurer with fiscal management experience; conservative fiscal orientation'
          }
        },
        { name: 'Chris Moraitis', description: 'Republican candidate for SD-20; SW Michigan conservative; limited public record', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican primary candidate in conservative district; no explicit pro-life statements found publicly',
            marriage: 'No public statements found; conservative alignment assumed from party affiliation in conservative SW Michigan',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found; Republican in pro-2A rural district',
            limitedGov: 'Running as Republican in conservative SW Michigan; limited public record',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment'
          }
        },
      ],
      democratic: [
        { name: 'Dale Murney', description: 'Democratic candidate for SD-20; has campaign website (murney4senate.com) but limited policy detail available through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'Has active campaign but no specific policy positions found; insufficient information to grade',
            marriage: 'No specific policy positions found; insufficient information to grade',
            religiousLiberty: 'No specific policy positions found; insufficient information to grade',
            secondAmendment: 'No specific policy positions found; insufficient information to grade',
            limitedGov: 'No specific policy positions found; insufficient information to grade',
            fiscal: 'No specific policy positions found; insufficient information to grade'
          }
        },
      ],
    },
  },
  21: {
    office: "State Senate — District 21",
    region: "Ingham County - Lansing area",
    incumbent: "Sarah Anthony (D)",
    candidates: {
      republican: [
        { name: 'Josh Burns', description: 'Husband and father; runs on \'Life. Land. Liberty.\' platform; opposes government overreach including Flock cameras, radical school ideology, and foreign farmland purchases; supports school vouchers and Educational Savings Accounts', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Explicitly states every life begins at conception and every child is made in the image of God; committed to protecting the innocent',
            marriage: 'Strong faith-based values evident in campaign messaging; \'made in the image of God\' language signals traditional marriage support',
            religiousLiberty: 'Explicitly opposes government overreach; supports parental control of education including homeschooling; strong religious liberty signals',
            secondAmendment: 'Liberty-focused platform opposing government overreach; opposes government surveillance (Flock cameras); strong individual rights orientation signals 2A support',
            limitedGov: 'Central campaign theme is opposing government that has grown too powerful, too expensive, and too intrusive; supports full school vouchers and ESAs; opposes Flock cameras and foreign farmland purchases',
            fiscal: 'Committed to cutting wasteful spending, eliminating fraud, reducing bureaucracy, and lowering the tax burden on working people'
          }
        },
      ],
      democratic: [
        { name: 'Sarah Anthony', description: 'Incumbent State Senator; Senate Appropriations Committee; former Ingham County commissioner; strong progressive', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to codify abortion rights; championed reproductive rights legislation',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package; supports comprehensive gun reform',
            limitedGov: 'Supports expanded government programs; former county commissioner who grew county services',
            fiscal: 'Senate Appropriations Committee; voted for major budget expansions; supports new spending'
          }
        },
      ],
    },
  },
  22: {
    office: "State Senate — District 22",
    region: "Shiawassee/Clinton area",
    incumbent: "Mike Murphy (R)",
    candidates: {
      republican: [
        { name: 'Mike Murphy', description: 'Incumbent State Senator (Livingston County Sheriff); strong conservative record across all issues', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Consistent pro-life record; voted against all pro-abortion measures in the Michigan Senate',
            marriage: 'Supports traditional marriage; conservative social values throughout legislative career',
            religiousLiberty: 'Voted to protect religious organizations from state mandates; supports First Amendment protections',
            secondAmendment: 'Strong 2A record; voted against 2023 gun control package; supports gun owners\' rights',
            limitedGov: 'Opposes government overreach; voted against expanding state regulatory authority',
            fiscal: 'Fiscal conservative; voted against budget increases; supports reducing state spending'
          }
        },
      ],
      democratic: [
        { name: 'Robert Hower', description: 'CEO of Numed Technologies (Ann Arbor medical device company); part-time engineering professor at Wayne State University; Livingston County small business owner; Green Oak Township resident; first Democrat to declare for SD-22', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Democratic candidate; no specific statements but party alignment signals pro-choice position',
            marriage: 'Democratic party affiliation signals support for LGBTQ rights; no specific statements found',
            religiousLiberty: 'No specific religious liberty positions; small business owner and professor background may moderate views somewhat',
            secondAmendment: 'Democratic candidate; no specific firearms positions but party alignment signals support for gun control',
            limitedGov: 'Small business CEO brings private-sector perspective; however Democratic party alignment signals support for government programs in education and healthcare',
            fiscal: 'Small business owner and CEO which may moderate fiscal views; prioritizes education funding and community college investment'
          }
        },
      ],
    },
  },
  23: {
    office: "State Senate — District 23",
    region: "Oakland County - White Lake, Orion, Oxford, Clarkston area",
    incumbent: "Ruth Johnson (R)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Daniel Lawless', description: 'White Lake resident; Republican candidate for SD-23; community advocate; limited public record', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican primary candidate; no explicit pro-life endorsements found; general conservative alignment',
            marriage: 'No public statements found; conservative alignment assumed from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found; Republican in Oakland County suburban district',
            limitedGov: 'Running as Republican; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment'
          }
        },
        { name: 'Donni Steele', description: 'Current State Rep (HD-54, Lake Orion); owns Coldwell Banker Shooltz Realty; BA Business Mgmt from WMU; realtor/property manager/associate broker', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'B', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record as State Rep; voted against pro-abortion legislation',
            marriage: 'Supports traditional values; has not been outspoken on marriage-specific legislation',
            religiousLiberty: 'Voted to protect religious liberty and conscience protections in the legislature',
            secondAmendment: 'Strong 2A supporter; voted against 2023 gun control bills; supports gun owners\' rights',
            limitedGov: 'Business owner who opposes excessive regulation; supports reducing government bureaucracy',
            fiscal: 'Fiscal conservative; business background; voted against budget expansions and tax increases'
          }
        },
      ],
      democratic: [
        { name: 'Margarette Gupta', description: 'Oakland Township resident; Democratic candidate for SD-23; no campaign website, policy positions, or background information found beyond filing record', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Greg Hill', description: 'Oxford resident; dad, coach, and small business owner; has campaign website (greghillformichigan.com) but limited specific policy positions available', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'Small business owner running as Democrat; no specific positions found; insufficient information to grade',
            marriage: 'No specific positions found; insufficient information to grade',
            religiousLiberty: 'No specific positions found; insufficient information to grade',
            secondAmendment: 'No specific positions found; insufficient information to grade',
            limitedGov: 'Small business owner which may signal some private-sector orientation; running as Democrat in traditionally Republican district',
            fiscal: 'No specific fiscal positions found; insufficient information to grade'
          }
        },
      ],
    },
  },
  24: {
    office: "State Senate — District 24",
    region: "Macomb County",
    incumbent: "Open",
    note: "Open seat",
    candidates: {
      republican: [
        { name: "Terence H. Mekoski", description: "Republican candidate for SD-24; Macomb County conservative", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican primary candidate in Macomb County; no explicit pro-life statements found publicly',
            marriage: 'No public statements found; conservative alignment assumed from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found; Republican in blue-collar Macomb County',
            limitedGov: 'Running as Republican; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment',
          },
        },
        { name: 'Douglas Chester Wozniak', description: 'Small-business owner and practicing attorney; served in House 2018; special election to Senate 2021; returned to House 2024; strong conservative record across both chambers', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Consistently pro-life in both House and Senate; voted against all pro-abortion measures',
            marriage: 'Strong traditional marriage supporter; voted to protect marriage definition',
            religiousLiberty: 'Championed religious liberty as both State Rep and Senator; voted for conscience protections',
            secondAmendment: 'Strong 2A record across both chambers; voted against gun control bills; NRA-supported',
            limitedGov: 'Attorney and small-business owner; opposes government overreach; supports deregulation',
            fiscal: 'Fiscal hawk; voted against Whitmer budget increases in both House and Senate; supports tax cuts'
          }
        },
      ],
      democratic: [
        { name: 'Frank Borsellino', description: 'Previously ran for Macomb County Board of Commissioners 7th District in 2024; Democratic candidate for SD-24; limited public policy record for state-level office', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'Previously ran for county commission; no state-level policy positions found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Edlira Sako', description: 'Lead teacher at Macomb Montessori Academy; pursuing master\'s in counseling at Wayne State University; Albanian immigrant who moved to Clinton Township in 2012; 2024 nominee for Macomb County Board of Commissioners 7th District', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'Educator and counseling student; no specific policy positions found on life issues; insufficient information to grade',
            marriage: 'No specific positions found; insufficient information to grade',
            religiousLiberty: 'No specific positions found; insufficient information to grade',
            secondAmendment: 'No specific positions found; insufficient information to grade',
            limitedGov: 'Teacher and county commission candidate background; no specific governance philosophy found',
            fiscal: 'No specific fiscal positions found; insufficient information to grade'
          }
        },
      ],
    },
  },
  25: {
    office: "State Senate — District 25",
    region: "Huron/Sanilac/Tuscola/St. Clair Counties (Thumb area)",
    incumbent: "Dan Lauwers (R)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Andrew Beeler', description: 'Port Huron resident; strong constitutional conservative; pro-life advocate; 2A supporter; endorsed by Right to Life of Michigan PAC', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Explicitly pro-life; endorsed by Right to Life of Michigan PAC; advocates for protection of unborn life',
            marriage: 'Strong traditional values; Christian conservative; supports biblical definition of marriage',
            religiousLiberty: 'Strong advocate for First Amendment protections; opposes government overreach into religious practice',
            secondAmendment: 'Strong 2A supporter; endorsed by gun rights organizations; opposes gun control measures',
            limitedGov: 'Constitutional conservative; advocates for reduced government regulation and individual liberty',
            fiscal: 'Supports lower taxes and reduced government spending; fiscally conservative platform'
          }
        },
        { name: "Gary R. Eisen", description: "St. Clair resident; former State Representative", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life as State Rep; voted against all pro-abortion measures',
            marriage: 'Strong traditional marriage supporter; outspoken conservative',
            religiousLiberty: 'Championed religious liberty protections in the House',
            secondAmendment: 'Strong 2A advocate; voted against all gun control measures; open carry supporter',
            limitedGov: 'Known for opposing government overreach; refused to certify 2020 election results (Board of Canvassers)',
            fiscal: 'Fiscal conservative; voted against budget increases; supports spending cuts',
          },
        },
        { name: "John W. Mahaney", description: "Port Huron resident", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican candidate; no specific pro-life positions found publicly',
            marriage: 'No public statements found; general conservative alignment from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found publicly',
            limitedGov: 'Republican candidate; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment',
          },
        },
        { name: 'Randy Schultz', description: 'Mussey Township resident; ran for Mussey Township Supervisor in 2024; local government experience in rural St. Clair County', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican candidate with local government background in conservative Thumb area; no specific positions found but strong conservative alignment',
            marriage: 'No specific statements found; rural conservative area signals traditional values',
            religiousLiberty: 'No specific positions found; general conservative orientation in rural Michigan',
            secondAmendment: 'No specific firearms positions found; rural Michigan Republican signals strong 2A alignment',
            limitedGov: 'Township supervisor candidate; local government experience in rural area signals understanding of limited government',
            fiscal: 'Township-level government experience suggests fiscal management orientation; no specific state-level fiscal positions found'
          }
        },
      ],
      democratic: [
        { name: 'April L. Osentoski', description: 'Bad Axe resident and lifelong Michigan resident; culinary professional with 25+ years experience; 1992 Bad Axe HS grad; ran for Michigan House District 98 in 2024 (lost general); Vice Chair Huron County Democratic Party; unopposed in D primary for SD-25', status: 'challenger', grade: 'F', endorsements: [], positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' }, gradeJustifications: { proLife: 'Democratic party alignment signals pro-choice position; previously ran on Democratic ticket in rural Thumb area', marriage: 'Democratic party affiliation signals support for LGBTQ rights; no specific statements found', religiousLiberty: 'No specific positions found; rural Democrat may have more moderate views than urban counterparts but party alignment limits support for broad exemptions', secondAmendment: 'Rural Thumb area Democrat; may have more moderate gun views than urban Democrats given constituency; however party alignment still signals gun control support', limitedGov: 'Michigan Democratic Party Rural Caucus leadership; supports expanded government programs in rural communities', fiscal: 'Democratic party alignment signals support for increased government spending; focus on rural community investment' } },
      ],
    },
  },
  26: {
    office: "State Senate — District 26",
    region: "Tuscola/Lapeer/Genesee area",
    incumbent: "Kevin Daley (R)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Daltson Atwell', description: 'Republican candidate for SD-26; community conservative in Tuscola/Lapeer/Genesee area; limited public record', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican primary candidate; no explicit pro-life statements found; general conservative alignment in rural district',
            marriage: 'No public statements found; conservative alignment assumed from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found; Republican in rural district',
            limitedGov: 'Running as Republican; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment'
          }
        },
        { name: 'Matthew Bierlein', description: 'Former State Representative; reelected 2024 with 70.36%; retiring from House to run for Senate; strong conservative voting record', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life voting record as State Rep; co-sponsored pro-life legislation',
            marriage: 'Supports traditional marriage; conservative social values in rural Tuscola/Lapeer district',
            religiousLiberty: 'Voted to protect religious organizations from government mandates',
            secondAmendment: 'Strong 2A supporter; voted against all 2023 gun control bills; rural district with strong gun culture',
            limitedGov: 'Conservative voting record opposing government expansion; supports limited regulation',
            fiscal: 'Fiscal conservative; won reelection with 70%+ showing broad support for his spending restraint positions'
          }
        },
        { name: "James M. Graham", description: "Republican candidate for SD-26", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican candidate; no specific pro-life positions found publicly',
            marriage: 'No public statements found; general conservative alignment from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found publicly',
            limitedGov: 'Republican candidate; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment',
          },
        },
        { name: 'Gabriel Lossing', description: 'Otter Lake resident; combat veteran; first-generation farmer; Republican candidate for SD-26 (Genesee/Lapeer/Saginaw/Tuscola area); has active campaign (lossing4senate.com)', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican candidate in conservative district; combat veteran and farmer signals traditional values; no explicit pro-life endorsements found',
            marriage: 'No public statements found; military veteran and farmer background in conservative area signals traditional values',
            religiousLiberty: 'No specific positions found; general conservative orientation from military and agricultural background',
            secondAmendment: 'Combat veteran with military firearms experience; Republican in rural Michigan; strong 2A alignment expected',
            limitedGov: 'First-generation farmer and combat veteran; independent/self-reliant background signals limited government orientation',
            fiscal: 'Farmer and veteran background suggests fiscal responsibility; no specific policy positions documented'
          }
        },
        { name: 'Candice Miller', description: 'Retired businesswoman from Burton; 2022 candidate for Michigan House of Representatives; Republican candidate for SD-26; not the former U.S. Rep Candice Miller', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'Retired businesswoman and previous House candidate; no specific policy positions found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'Business background; no specific governance positions found; insufficient information to grade',
            fiscal: 'No specific fiscal positions found; insufficient information to grade'
          }
        },
      ],
      democratic: [
        { name: 'Martin L. Cousineau', description: 'Democratic candidate for SD-26; previously ran for Michigan House District 48 in 2022 (did not appear on ballot); limited public record', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'Previous House candidate who did not make ballot; no policy positions found; insufficient information to grade', marriage: 'No public statements or campaign materials found; insufficient information to grade', religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade', secondAmendment: 'No public statements or campaign materials found; insufficient information to grade', limitedGov: 'No public statements or campaign materials found; insufficient information to grade', fiscal: 'No public statements or campaign materials found; insufficient information to grade' } },
        { name: "Brendan J. Johnson", description: "Democratic candidate for SD-26; Georgetown grad; former State Department analyst; former Elissa Slotkin staff", status: "challenger", grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: null, secondAmendment: 'D', limitedGov: 'D', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Democratic party affiliation signals pro-choice position; no specific statements found',
            marriage: 'Democratic party affiliation signals support for LGBTQ agenda; no specific statements found',
            religiousLiberty: 'No public statements found on religious liberty issues',
            secondAmendment: 'Democratic party affiliation and Slotkin staff background signal support for gun control measures',
            limitedGov: 'Former State Department analyst; Democratic party affiliation signals support for expanded government; Slotkin staff background',
            fiscal: 'Supports reducing burdensome red tape for small business which is a mixed signal; more centrist than typical progressive Democrat on fiscal matters',
          },
        },
      ],
    },
  },
  27: {
    office: "State Senate — District 27",
    region: "Genesee County - Flint area",
    incumbent: "John D. Cherry (D)",
    candidates: {
      republican: [
        { name: 'Bill Bain', description: 'Flushing Township Trustee (2 terms); former UAW executive board officer; blue-collar Republican with union background', status: 'challenger', grade: 'C',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'No public statements found on life issues; UAW background and worker-focused messaging suggest centrist-to-moderate Republican',
            marriage: 'No public statements found on marriage issues',
            religiousLiberty: 'No public statements found on religious liberty issues',
            secondAmendment: 'No public statements found on Second Amendment issues',
            limitedGov: 'Believes in common-sense governance; Flushing Township Trustee with local government experience; UAW background complicates limited-gov signals',
            fiscal: 'Advocates cutting wasteful spending; Flushing Township Trustee focused on fiscal responsibility; UAW executive board background may moderate fiscal conservatism'
          }
        },
      ],
      democratic: [
        { name: "John D. Cherry", description: "Incumbent State Senator", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice voting record; supports abortion access',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions in expanding civil rights law',
            secondAmendment: 'Voted for some gun control measures; Flint-area Democrat moderate on some 2A issues',
            limitedGov: 'Supports expanded government programs; focuses on urban revitalization through state investment',
            fiscal: 'Voted for Whitmer budget increases; supports state spending on Flint recovery',
          },
        },
      ],
    },
  },
  28: {
    office: "State Senate — District 28",
    region: "Saginaw/Bay area",
    incumbent: "Open",
    note: "Open seat",
    candidates: {
      republican: [
        { name: "Julie L. DeRose", description: "Republican candidate for SD-28; previously ran in 2024 Republican primary for HD-77; insurance and education background", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Previously ran in 2024 Republican primary for HD-77; Republican affiliation in conservative-leaning DeWitt area signals pro-life alignment',
            marriage: 'Republican party affiliation in conservative-leaning district signals traditional marriage support; limited public statements',
            religiousLiberty: 'Republican party affiliation signals religious liberty support; limited public statements on specific issues',
            secondAmendment: 'Republican party affiliation signals 2A support; limited public statements on firearms',
            limitedGov: 'Background in insurance and education in conservative-leaning DeWitt area; limited public statements on governance',
            fiscal: 'Republican party affiliation in conservative-leaning district signals fiscal conservatism; limited public statements',
          },
        },
      ],
      democratic: [
        { name: 'Rashida Harrison', description: 'Lansing resident; Democratic candidate for SD-28; running in primary alongside Kilvington, Pena, and Polsdofer for Sam Singh\'s open seat; limited public policy record found', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Ted Kilvington', description: 'Democratic candidate for SD-28; running for Sam Singh\'s open seat; no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Robert Orlando Pena', description: 'Democratic candidate for SD-28; running for Sam Singh\'s open seat; no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Mark Polsdofer', description: 'Ingham County Commissioner (14th District, 2019-present) representing southern Meridian Township; former Deputy Director of Legislative Affairs for Gov. Granholm; worked in both chambers of legislature; currently at Michigan DOT; Okemos resident', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Career Democratic government official and Granholm administration appointee; progressive alignment signals strong pro-choice position',
            marriage: 'Progressive Democratic official; Granholm administration background signals support for LGBTQ rights',
            religiousLiberty: 'No specific positions found; career in Democratic government suggests limited support for broad religious exemptions',
            secondAmendment: 'Democratic party official; Granholm administration and Ingham County progressive base signal support for gun control',
            limitedGov: 'Career government official spanning county commission, both legislative chambers, governor\'s office, and MDOT; quintessential big-government background',
            fiscal: 'Granholm administration appointee; career in government spending agencies signals support for expanded state spending'
          }
        },
      ],
    },
  },
  29: {
    office: "State Senate — District 29",
    region: "Kent County - Grand Rapids area",
    incumbent: "Open",
    note: "Open seat",
    candidates: {
      republican: [
        { name: "Brady A. Middleton", description: "Republican candidate for SD-29; previous R candidate (2014 HD-73); entrepreneur and fiscal conservative", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Previous Republican candidate (2014 HD-73); consistent R party affiliation signals pro-life alignment; limited specific statements',
            marriage: 'Republican party affiliation signals traditional marriage support; no specific statements found',
            religiousLiberty: 'Republican party affiliation signals religious liberty support; no specific statements found',
            secondAmendment: 'Republican party affiliation signals 2A support; no specific firearms statements found',
            limitedGov: 'Stated jobs are created in the minds, hearts, and hands of entrepreneurs; strongly supports private sector over government solutions',
            fiscal: 'Opposed raising taxes; noted Michigan has 6th highest gas tax but poor roads showing fiscal accountability focus; clear fiscal conservative credentials',
          },
        },
      ],
      democratic: [
        { name: 'Ivan Diaz', description: 'Former Kent County Commissioner (2023-2025); GVSU student; SEIU union representative; young progressive candidate', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Young progressive candidate; Democratic party affiliation signals pro-choice position; SEIU alignment',
            marriage: 'Democratic party affiliation and progressive platform signal support for LGBTQ agenda',
            religiousLiberty: 'Progressive Democratic candidate; party alignment signals opposition to broad religious exemptions',
            secondAmendment: 'Democratic party affiliation signals support for gun control; no specific statements found',
            limitedGov: 'Former Kent County Commissioner; SEIU union rep; government-expansion approach to policy',
            fiscal: 'SEIU union representative; young progressive candidate; supports expanded government spending programs'
          }
        },
        { name: 'Abbie Groff-Blaszak', description: 'East Grand Rapids City Commissioner; Harvard MEd; most progressive policy platform in SD-29 including single-payer healthcare, universal childcare, ending cash bail', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports single-payer healthcare and universal childcare; progressive platform strongly opposed to pro-life positions',
            marriage: 'Progressive Democratic platform signals support for LGBTQ agenda; no specific statements but clear ideological alignment',
            religiousLiberty: 'Progressive platform signals opposition to broad religious exemptions; government-expansion approach to social policy',
            secondAmendment: 'Explicitly supports gun violence mitigation; strongly opposes Second Amendment absolutism',
            limitedGov: 'Supports single-payer healthcare, universal childcare, paid family leave, ending cash bail; maximalist government expansion platform',
            fiscal: 'Supports progressive tax structure, raising minimum wage, single-payer healthcare, universal childcare; most fiscally progressive candidate in SD-29'
          }
        },
        { name: 'Phil Skaggs', description: 'Current State Rep HD-80; passed Kent County first LGBTQ non-discrimination ordinance; strong progressive voting record', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Explicitly supports repealing 1931 abortion ban; strongly pro-choice voting record as State Rep',
            marriage: 'Passed Kent County first LGBTQ non-discrimination ordinance; actively opposes traditional marriage definition',
            religiousLiberty: 'Supports LGBTQ non-discrimination without broad religious exemptions; progressive social agenda',
            secondAmendment: 'Voted for universal background checks, safe storage, and red flag laws; strongly supports gun control',
            limitedGov: '100% support for expanded government programs; actively pushes government expansion in social services and regulation',
            fiscal: 'Supports expanded government spending programs; progressive fiscal approach as State Rep'
          }
        },
      ],
    },
  },
  30: {
    office: "State Senate — District 30",
    region: "Ottawa/Muskegon area",
    incumbent: "Mark E. Huizenga (R)",
    candidates: {
      republican: [
        { name: "Mark E. Huizenga", description: "Incumbent State Senator; Christian Reformed, Calvin University graduate", status: "incumbent", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Generally pro-life but less vocal than peers; self-described "free market conservative"',
            marriage: 'Explicitly supports traditional marriage ("one man and one woman") but was sole Republican to vote for conversion therapy ban — mixed signal',
            religiousLiberty: 'States religious liberty "deserves highest protection" but conversion therapy ban vote undercuts this position',
            secondAmendment: 'Voted against all 2023 gun control package; strong 2A record',
            limitedGov: '"Free market conservative" but praised government renewable energy policy; mixed on regulation',
            fiscal: 'Generally fiscal conservative; some departures on energy policy spending',
          },
        },
      ],
      democratic: [
        { name: 'Carol Glanville', description: 'Current State Rep (HD-84); BA from Western Michigan University; MA from University of Phoenix; former consultant and program manager at Johnson Center for Philanthropy; adjunct faculty at Aquinas College; running to flip SD-30 seat; DLCC endorsed', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted to codify abortion rights as State Representative; strongly pro-choice',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Voted for Elliott-Larsen expansion; limited support for religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package; supports expanded gun regulations as State Rep',
            limitedGov: 'Supports expanded government role in education and social services; progressive regulatory platform',
            fiscal: 'Voted for Whitmer budget increases as State Rep; supports expanded state spending'
          }
        },
        { name: 'Rickie Kreuzer', description: 'Founding Executive Director of Chosen Family of Michigan (statewide LGBTQ civil rights nonprofit); serves on Michigan State Board of Nursing; background in LGBTQ and voter advocacy with HRC, LCV, Michigan United, and OutFront Kalamazoo', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Progressive activist with strong LGBTQ advocacy background; party alignment signals strong pro-choice position',
            marriage: 'Founded Chosen Family of Michigan (LGBTQ civil rights org); actively champions LGBTQ rights and opposes traditional marriage definition',
            religiousLiberty: 'LGBTQ rights activist; strongly opposes religious exemptions from anti-discrimination laws; advocacy career centered on expanding protections over religious liberty',
            secondAmendment: 'Progressive activist aligned with gun control advocacy organizations; supports expanded firearms restrictions',
            limitedGov: 'Founded nonprofit focused on government-mandated civil rights protections; supports expanded government social programs and regulation',
            fiscal: 'Supports expanded government investment in affordable housing, education, healthcare, and infrastructure; progressive fiscal platform'
          }
        },
      ],
    },
  },
  31: {
    office: "State Senate — District 31",
    region: "Ottawa/Allegan - Hudsonville, Holland area",
    incumbent: "Roger Victory (R)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Kevin J. Maas', description: 'Republican candidate for SD-31; limited public information available', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No public statements or campaign materials found; insufficient information to grade', marriage: 'No public statements or campaign materials found; insufficient information to grade', religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade', secondAmendment: 'No public statements or campaign materials found; insufficient information to grade', limitedGov: 'No public statements or campaign materials found; insufficient information to grade', fiscal: 'No public statements or campaign materials found; insufficient information to grade' } },
        { name: "Michael J. Markey Jr.", description: "Businessman; 2022 disqualified gubernatorial candidate; 2024 congressional candidate; strong conservative", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life; ran gubernatorial and congressional campaigns on explicit pro-life platform',
            marriage: 'Conservative Christian; supports traditional marriage; consistent traditional values messaging',
            religiousLiberty: 'Strong advocate for religious freedom and conscience protections; Christian conservative platform',
            secondAmendment: 'Strong 2A supporter; opposes gun control measures; ran on pro-gun platform',
            limitedGov: 'Consistent limited government messaging across multiple campaigns; anti-establishment conservative',
            fiscal: 'Businessman; advocates lower taxes and reduced government spending; fiscal conservative platform',
          },
        },
        { name: 'John Wetzel', description: 'Conservative businessman; strong pro-life and pro-2A advocate in Ottawa/Allegan area', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Explicitly pro-life; strong advocacy for protection of unborn life',
            marriage: 'Strong traditional values; supports traditional marriage definition',
            religiousLiberty: 'Advocates for First Amendment protections and religious liberty',
            secondAmendment: 'Strong 2A supporter; opposes gun control measures',
            limitedGov: 'Constitutional conservative; advocates for reduced government regulation',
            fiscal: 'Supports lower taxes and reduced government spending; fiscally conservative'
          }
        },
      ],
      democratic: [
        { name: 'Keagan Host', description: 'Democratic candidate for SD-31 (Ottawa/Allegan area); no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Chris Kleinjans', description: 'Former Ottawa County Commissioner; US Navy veteran; nonprofit sector employee; husband, father, grandfather; previously won county seat as Democrat in heavily Republican Ottawa County; noted Ottawa County shifted 2 points left in 2024', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Democratic candidate in conservative Ottawa County; party alignment signals pro-choice position despite potentially moderate personal views',
            marriage: 'Democratic party affiliation signals support for LGBTQ rights; running in county that had contentious conservative-progressive school board fights',
            religiousLiberty: 'Navy veteran which may suggest moderate views on individual liberty; however Democratic alignment in Ottawa County limits support for broad religious exemptions',
            secondAmendment: 'Navy veteran with military firearms experience; Democratic alignment signals some gun control support but veteran status may moderate views',
            limitedGov: 'Former county commissioner and nonprofit employee; Democratic platform supports expanded government programs',
            fiscal: 'Democratic alignment and nonprofit background signal support for expanded government spending'
          }
        },
      ],
    },
  },
  32: {
    office: "State Senate — District 32",
    region: "Newaygo/Oceana/Mason/Lake area",
    incumbent: "Open",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Kim Cole', description: 'Mason County Sheriff since 2012; 40 years in law enforcement; fifth-generation Mason County resident; second-generation sheriff (great-great-grandfather served 1899-1902); seeking Republican nomination for open SD-32 seat', status: 'challenger', grade: 'A',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Long-serving Republican sheriff in conservative rural Michigan; party alignment signals pro-life but no specific endorsements found',
            marriage: 'No specific statements found; law enforcement background in conservative rural Michigan signals traditional values',
            religiousLiberty: 'No specific positions found; Republican in conservative rural district signals general support',
            secondAmendment: '40-year law enforcement career and county sheriff; strong understanding of firearms; Republican in rural gun-culture area signals strong 2A support',
            limitedGov: 'Law enforcement career represents government authority but constitutional oath-based; Republican alignment signals limited government orientation',
            fiscal: 'County-level budget management experience as sheriff; no specific state fiscal positions found'
          }
        },
        { name: 'Max Riekse', description: 'Veteran and teacher; 2016 Libertarian nominee for state house; 2018 Libertarian candidate for State Senate District 34; 2020 Libertarian candidate for U.S. House MI-2; 2024 Muskegon County sheriff candidate; now running as Republican for SD-32', status: 'challenger', grade: 'B',
          positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Former Libertarian with multiple campaigns; Libertarian party typically takes personal-liberty approach to abortion rather than strong pro-life stance',
            marriage: 'Libertarian background typically favors government staying out of marriage; not specifically traditional marriage advocacy',
            religiousLiberty: 'Libertarian background strongly supports individual liberty including religious freedom; now Republican which maintains this alignment',
            secondAmendment: 'Libertarian-to-Republican candidate with strong individual rights orientation; veteran with military experience; strong 2A credentials',
            limitedGov: 'Multiple campaigns as Libertarian demonstrate deep commitment to limited government; veteran and teacher background',
            fiscal: 'Libertarian background demonstrates strongest possible fiscal conservative credentials; opposes government spending expansion'
          }
        },
      ],
      democratic: [
        { name: 'Rebecca Amidon', description: 'Adjunct communication professor at Mid Michigan College; lives in Manistee National Forest area with family; Vice Chair of Manistee County Democratic Party (2021-2024); VP of children\'s nonprofit; over 10 years in higher education', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Democratic party official (Vice Chair Manistee County Dems); party alignment signals pro-choice position',
            marriage: 'Democratic party leadership signals support for LGBTQ rights agenda',
            religiousLiberty: 'No specific positions found; Democratic party alignment suggests limited support for broad religious exemptions',
            secondAmendment: 'Rural Michigan Democrat; may have more moderate gun views than urban counterparts given rural constituency; however party alignment signals gun control support',
            limitedGov: 'Supports expanded government investment in education, healthcare, and rural communities; progressive platform',
            fiscal: 'Supports expanded government spending on public education, healthcare access, and rural community investment'
          }
        },
      ],
    },
  },
  33: {
    office: "State Senate — District 33",
    region: "Kent/Ionia/Montcalm area",
    incumbent: "Rick Outman (R)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Katie DeBoer', description: 'Kent County Commissioner; West Michigan Republican with faith-based values and local government experience', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Generally pro-life; county commissioner role limits direct voting record on this issue',
            marriage: 'Supports traditional values; limited direct record on marriage legislation as county commissioner',
            religiousLiberty: 'Supports religious liberty; West Michigan Republican with faith-based values',
            secondAmendment: 'Supports 2A rights; limited direct voting record as county commissioner',
            limitedGov: 'County commissioner focused on efficient local government; supports responsible governance',
            fiscal: 'County-level fiscal experience; supports responsible spending at the county level'
          }
        },
        { name: "Joseph D. Fox", description: "Current State Representative from Fremont", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record in the Michigan House; voted against pro-abortion legislation',
            marriage: 'Supports traditional marriage; conservative social values',
            religiousLiberty: 'Voted to protect religious liberty and conscience protections',
            secondAmendment: 'Strong 2A supporter; voted against 2023 gun control bills',
            limitedGov: 'Conservative voting record; opposes government expansion',
            fiscal: 'Fiscal conservative; voted against budget increases',
          },
        },
        { name: 'Gina Johnsen', description: 'Current State Representative from Portland; strong conservative voting record including pro-life, pro-2A, and fiscal restraint', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record in the Michigan House; consistently votes to protect unborn life',
            marriage: 'Supports traditional marriage; conservative on social issues',
            religiousLiberty: 'Supports religious freedom protections; voted for conscience clause legislation',
            secondAmendment: 'Strong 2A record; voted against gun control measures',
            limitedGov: 'Supports limited government and reducing regulations',
            fiscal: 'Voted against expanded state spending; supports balanced budgets'
          }
        },
        { name: "Thomas J. Norton", description: "Rockford resident", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican candidate; no specific pro-life positions found publicly',
            marriage: 'No public statements found; general conservative alignment from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found publicly',
            limitedGov: 'Republican candidate; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment',
          },
        },
      ],
      democratic: [
        { name: 'Stan Opal', description: 'White Cloud resident (233 N Pine Ave); Democratic candidate for SD-33; filed 2/19/2026; no campaign website, policy positions, or background information found', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
      ],
    },
  },
  34: {
    office: "State Senate — District 34",
    region: "Midland/Clare/Gladwin area",
    incumbent: "Open",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Roger Hauck', description: 'Former State Representative; strong conservative record; 100% Michigan Right to Life; A-rated by NRA', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life as State Rep; voted against all pro-abortion measures; 100% Michigan Right to Life',
            marriage: 'Strong traditional marriage supporter; conservative social values',
            religiousLiberty: 'Championed religious liberty protections as State Rep; voted for conscience protections',
            secondAmendment: 'A-rated by NRA; voted against all gun control measures; strong rural 2A advocate',
            limitedGov: 'Opposed government overreach; voted against expanding state regulatory authority',
            fiscal: 'Fiscal conservative; voted against budget increases; supports reducing state spending'
          }
        },
        { name: "Rhonda L. Lange", description: "Republican candidate for SD-34; limited public information", status: "challenger", grade: 'C',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'No public position found',
            marriage: 'No public position found',
            religiousLiberty: 'No public position found',
            secondAmendment: 'No public position found',
            limitedGov: 'Republican candidate in northern Michigan; limited public record; C grade reflects party affiliation without documented policy positions',
            fiscal: 'No specific fiscal policy positions found; C grade reflects lack of documented positions',
          },
        },
      ],
      democratic: [
        { name: 'Tyler Landgraf', description: 'Chippewa Lake resident; Democratic candidate for SD-34; previously ran for same seat (lost); limited current policy information found', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'Repeat Democratic candidate in conservative rural district; no specific positions found; insufficient information to grade individually',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
      ],
    },
  },
  35: {
    office: "State Senate — District 35",
    region: "Genesee/Saginaw area",
    incumbent: "Chedrick Greene (D)",
    candidates: {
      republican: [
        { name: 'Jason Tunney', description: 'Republican candidate for SD-35; ran in May 2026 special election; limited public policy record', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican primary candidate; no explicit pro-life endorsements found; general conservative alignment',
            marriage: 'No public statements found; conservative alignment assumed from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found; Republican in northern Michigan',
            limitedGov: 'Running as Republican; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment'
          }
        },
        { name: 'Chadwick Twillman', description: 'Republican candidate for SD-35; community conservative; limited public record', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican primary candidate; no explicit pro-life statements found; general conservative alignment',
            marriage: 'No public statements found; conservative alignment assumed from party affiliation',
            religiousLiberty: 'No specific positions found; general conservative orientation',
            secondAmendment: 'No specific firearms positions found; Republican in rural northern Michigan',
            limitedGov: 'Running as Republican; limited public record on specific policy positions',
            fiscal: 'No specific fiscal policy positions found; general conservative alignment'
          }
        },
      ],
      democratic: [
        { name: 'Chedrick Greene', description: 'Won May 2026 special election to fill Kristen McDonald Rivet\'s vacancy; ran on progressive platform in Flint/Saginaw area', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Ran on progressive platform supporting abortion access; pro-choice',
            marriage: 'Progressive Democrat from Flint area; supports LGBTQ rights agenda',
            religiousLiberty: 'Progressive platform; opposes religious exemptions from anti-discrimination laws',
            secondAmendment: 'Ran on platform supporting gun control measures; progressive on firearms restrictions',
            limitedGov: 'Supports expanded social services and government programs; progressive regulatory agenda',
            fiscal: 'Ran on expanded social services spending; supports progressive fiscal policies'
          }
        },
      ],
    },
  },
  36: {
    office: "State Senate — District 36",
    region: "NW Lower Peninsula - Cadillac, Lake City area",
    incumbent: "Michele Hoitenga (R)",
    candidates: {
      republican: [
        { name: 'Michele Hoitenga', description: 'Incumbent State Senator; strong conservative record; 100% Michigan Right to Life; A-rated by NRA; homeschool champion; unopposed', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life throughout legislative career; voted against all pro-abortion measures; 100% Michigan Right to Life scorecard',
            marriage: 'Strong supporter of traditional marriage; outspoken on social conservative values',
            religiousLiberty: 'Championed religious liberty protections; introduced bills to protect faith-based organizations',
            secondAmendment: 'A-rated by NRA; voted against 2023 gun control package; strong rural 2A advocate',
            limitedGov: 'Known for opposing government overreach; introduced bills to reduce regulations; homeschool champion',
            fiscal: 'Fiscal conservative; voted against every Whitmer budget increase; supports tax cuts and spending restraint'
          }
        },
      ],
      democratic: [
      ],
    },
  },
  37: {
    office: "State Senate — District 37",
    region: "NE Lower Peninsula - Cheboygan, Petoskey, Mackinaw area",
    incumbent: "John Damoose (R)",
    candidates: {
      republican: [
        { name: 'John Damoose', description: 'Incumbent State Senator; Northern Michigan conservative; strong record on all issues', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life; consistent voting record against abortion expansion in Michigan',
            marriage: 'Supports traditional marriage; Northern Michigan conservative values',
            religiousLiberty: 'Voted to protect religious organizations from government mandates; supports conscience protections',
            secondAmendment: 'Strong 2A supporter; voted against 2023 gun control package; represents rural Northern Michigan',
            limitedGov: 'Opposes government overreach; supports reducing state bureaucracy and regulations',
            fiscal: 'Fiscal conservative; voted against Whitmer budget expansions; supports balanced budgets'
          }
        },
      ],
      democratic: [
        { name: 'Kate Gallup', description: 'Democratic candidate for SD-37 (NE Lower Peninsula); no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
        { name: 'Mitchell Treadwell', description: 'Democratic candidate for SD-37 (NE Lower Peninsula); no campaign website, policy positions, or background information found through research', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No public statements or campaign materials found; insufficient information to grade',
            marriage: 'No public statements or campaign materials found; insufficient information to grade',
            religiousLiberty: 'No public statements or campaign materials found; insufficient information to grade',
            secondAmendment: 'No public statements or campaign materials found; insufficient information to grade',
            limitedGov: 'No public statements or campaign materials found; insufficient information to grade',
            fiscal: 'No public statements or campaign materials found; insufficient information to grade'
          }
        },
      ],
    },
  },
  38: {
    office: "State Senate — District 38",
    region: "Upper Peninsula",
    incumbent: "Ed McBroom (R)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Beau Matthew LaFave', description: 'Former State Rep (2017-2022); pro-open carry conservative firebrand; endorsed by Rep. Jack Bergman; tried to bring AR-style rifle to Whitmer State of the State; A+ NRA rating', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life throughout House career; co-sponsored multiple pro-life bills',
            marriage: 'Strong traditional marriage supporter; outspoken conservative on social issues',
            religiousLiberty: 'Championed religious liberty and First Amendment protections as State Rep',
            secondAmendment: 'One of the strongest 2A advocates in the legislature; attempted to open carry in State Capitol; A+ NRA rating',
            limitedGov: 'Liberty-focused conservative; opposes government overreach; supports constitutional limits on government',
            fiscal: 'Fiscal hawk; voted against state spending increases; supports tax elimination'
          }
        },
        { name: 'David Prestin', description: 'Current State Rep (HD-108, elected 2022, reelected 2024); endorsed by outgoing Sen. Ed McBroom, Reps. Greg Markkanen and Karl Bohnak; UP representative', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record in the House; voted against all pro-abortion legislation',
            marriage: 'Supports traditional marriage; Upper Peninsula conservative values',
            religiousLiberty: 'Supports religious freedom protections; voted for conscience clause legislation',
            secondAmendment: 'Strong 2A record; voted against 2023 gun control bills; represents rural UP district',
            limitedGov: 'Endorsed by outgoing Sen. McBroom for limited-government credentials; opposes state overreach',
            fiscal: 'Fiscal conservative; voted against Whitmer budget expansions; supports responsible spending'
          }
        },
      ],
      democratic: [
        { name: 'Kelli J. Van Ginhoven', description: 'Delta County Commissioner (Vice Chair); won seat via May 2024 recall election, re-elected Nov 2024; 1998 Escanaba HS graduate; former preschool teacher and credit union worker; small business owner (For The Love of Cupcakes bakery in downtown Escanaba); claims SD-38 is flippable', status: 'challenger', grade: 'F', endorsements: [], positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' }, gradeJustifications: { proLife: 'Democratic county commissioner; party alignment signals pro-choice position; running on progressive platform', marriage: 'Democratic party affiliation signals support for LGBTQ rights agenda', religiousLiberty: 'No specific positions found; small-town UP background may suggest moderate personal views but Democratic alignment limits broad religious exemption support', secondAmendment: 'Rural UP Democrat; may have more moderate gun views than downstate Democrats given rural constituency and hunting culture; party alignment still signals some gun control support', limitedGov: 'County commissioner who supports expanded government investment in UP communities; Democratic platform supports expanded programs', fiscal: 'Small business owner who supports expanded government investment; Democratic alignment signals support for increased spending' } },
      ],
    },
  },
}

// ── State House Races (by district) ──────────────────────────────
// All 110 seats on the 2026 ballot
// Only districts with confirmed candidates listed (34 of 110)

export const STATE_HOUSE_RACES = {
  1: {
    office: "State House — District 1",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Valerie Whittaker', description: 'Republican candidate who ran against incumbent Tyrone Carter in the 2024 general election and lost. Previously ran for the same HD-1 seat. No detailed policy positions or background information publicly available.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found on her position regarding abortion or pro-life issues.',
            marriage: 'No information found on her position regarding marriage.',
            religiousLiberty: 'No information found on her position regarding religious liberty.',
            secondAmendment: 'No information found on her position regarding the Second Amendment.',
            limitedGov: 'No information found on her position regarding the size and scope of government.',
            fiscal: 'No information found on her fiscal policy positions.'
          }
        },
      ],
      democratic: [
        { name: 'Tyrone Carter', description: 'Incumbent Democratic State Representative serving his fourth term in HD-1, which covers a portion of Detroit, Ecorse, and River Rouge. Former law enforcement officer born May 24, 1962. Served on Criminal Justice, Judiciary, Military/Veterans, and Regulatory Reform committees (chair). Part of the Democratic majority that passed the Reproductive Health Act and gun violence prevention measures. Now running for this seat while also exploring Detroit City Council.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted with Democratic majority to pass the Reproductive Health Act, which codified abortion rights and repealed Michigan\'s 1931 abortion ban.',
            marriage: 'Aligned with Democratic caucus that supports LGBTQ+ rights and marriage redefinition in Michigan.',
            religiousLiberty: 'Voted with Democratic majority on Elliott-Larsen Civil Rights Act expansion; no record of championing religious exemptions.',
            secondAmendment: 'Supported and voted for gun violence prevention measures including red flag laws, universal background checks, and secure storage requirements.',
            limitedGov: 'Supports expanded government programs including Medicaid expansion, increased state spending, and new regulatory frameworks.',
            fiscal: 'Voted for significant increases in state spending including record education budgets and expanded social programs.'
          }
        },
        { name: 'Teddy Dorsette III', description: 'Award-winning filmmaker and Detroit-based social entrepreneur and disability advocate with over 20 years of public service. Multigenerational Deaf leader who champions disability justice, anti-ableism, and inclusion. Degree in Screen Arts and Cultures from the University of Michigan. Co-founded several minority and disability-owned businesses. Founded non-profit Reel Def Entertainment. Previously ran unsuccessfully as a write-in at-large candidate for Detroit City Council.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Running as a progressive Democrat in a deep-blue Detroit district; aligned with party platform supporting abortion rights.',
            marriage: 'Advocacy for LGBTQ+ and disability justice communities indicates strong support for same-sex marriage.',
            religiousLiberty: 'No specific position found; progressive alignment suggests limited support for broad religious exemptions.',
            secondAmendment: 'No specific position found; running in a Democratic primary in Detroit where gun control is standard platform.',
            limitedGov: 'Advocacy work centered on expanding government programs and services for disabled communities.',
            fiscal: 'Platform focuses on expanded social services and government programs for underserved communities.'
          }
        },
        { name: 'Jermaine Tobey', description: 'Born in Detroit. Associate degree from Wayne County Community College (2016). Professional experience as a gig worker and independent contractor. Previously ran for Michigan House District 1 in 2022, losing in the Democratic primary to Tyrone Carter. Passionate about reducing gun violence and improving public education.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: null, religiousLiberty: null, secondAmendment: 'F', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Running as a Democrat in Detroit; aligned with pro-choice party platform.',
            marriage: 'No specific information found on his position regarding marriage.',
            religiousLiberty: 'No specific information found on his position regarding religious liberty.',
            secondAmendment: 'Explicitly passionate about reducing gun violence; supports gun safety measures at the state level, citing lives lost in Detroit due to gun proliferation.',
            limitedGov: 'Advocates for expanded government role in public education and gun regulation.',
            fiscal: 'Supports increased funding for public education; no detailed fiscal policy positions available.'
          }
        },
      ],
    },
  },
  2: {
    office: "State House — District 2",
    region: "Wayne County - Taylor, Romulus area",
    incumbent: "Tullio Liberati Jr. (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Ron Kokinda', description: 'Born in Troy, New York. Bachelor\'s degree from SUNY Stony Brook (1971). Small business owner and business consultant. Ran for HD-2 in 2024 and lost the general election. Running again in 2026. Listed on Freedom Voter Guide as a conservative candidate.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Listed on Freedom Voter Guide as a conservative; specific pro-life positions not detailed but Republican platform alignment.',
            marriage: 'No specific statement found but aligned with conservative Republican platform.',
            religiousLiberty: 'No specific statement found but aligned with conservative Republican platform.',
            secondAmendment: 'No specific statement found but aligned with conservative Republican platform.',
            limitedGov: 'Small business owner and consultant; aligns with limited government principles as a Republican.',
            fiscal: 'Business background suggests fiscal conservatism; listed on Freedom Voter Guide.'
          }
        },
        { name: 'Zacharia Ortiz', description: 'Republican candidate for Michigan State House District 2 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Frank A. Liberati', description: 'Former Michigan State Representative who served three terms (2015-2020) representing the old 13th District (Allen Park, Southgate, part of Dearborn Heights). Term-limited out but now eligible again after term limit law changes. Brother of current HD-2 Rep. Tullio Liberati. Long political career in Downriver Wayne County. Filed a challenge to remove primary opponent Joanna Whaley from the ballot over her name change, which was denied by the Wayne County Clerk.', status: 'challenger', grade: 'D', endorsements: [], positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: { proLife: 'Served as a Democrat in the Michigan House; voted with party on reproductive health issues.', marriage: 'Attempted to disqualify a transgender primary opponent, which may indicate some social conservative leanings, but overall Democratic voting record.', religiousLiberty: 'No specific record found on religious liberty issues; mixed signals from ballot challenge against transgender candidate.', secondAmendment: 'Voted with Democratic caucus on gun legislation during his previous terms in the House.', limitedGov: 'Democratic voting record during previous House service suggests support for expanded government programs.', fiscal: 'Voted with Democratic caucus on spending measures during previous terms.' } },
        { name: 'Gary Schlack', description: 'Second-term Allen Park City Councilmember and U.S. Army National Guard veteran. Born and raised in Detroit\'s Mexicantown. First in his family to graduate college, earning his degree from Michigan State University where he served as president of Theta Chi Fraternity. Served in the Army National Guard. Built career in logistics. Earned a Master\'s in Public Leadership from University of San Francisco.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Running as a Democrat; aligned with party platform supporting abortion rights.',
            marriage: 'Democratic platform alignment supports same-sex marriage.',
            religiousLiberty: 'No specific position found; Democratic platform alignment.',
            secondAmendment: 'No specific position found; Democratic platform alignment suggests support for gun regulations.',
            limitedGov: 'Campaign focused on expanded government services and infrastructure investment.',
            fiscal: 'Campaign priorities suggest support for increased government spending on infrastructure and services.'
          }
        },
        { name: 'Joanna Whaley', description: 'Transgender woman and clinical spiritual care provider in local hospitals. Survived 15 years of conversion therapy in a high-control religious setting. Endorsed by LGBTQ+ Victory Fund. Successfully defended her right to appear on the ballot after opponent Frank Liberati challenged her name change; Wayne County Clerk denied the challenge. If elected, would be one of the first transgender state legislators in Michigan.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'LGBTQ+ Victory Fund endorsement indicates strong pro-choice alignment.',
            marriage: 'As a transgender rights advocate endorsed by LGBTQ+ Victory Fund, strongly supports marriage redefinition.',
            religiousLiberty: 'Survivor of conversion therapy; likely opposes broad religious exemptions that could be used against LGBTQ+ individuals.',
            secondAmendment: 'No specific position found; progressive Democratic alignment suggests support for gun control.',
            limitedGov: 'Progressive platform focused on expanded protections and government services.',
            fiscal: 'Progressive Democratic alignment suggests support for expanded government spending.'
          }
        },
      ],
    },
  },
  3: {
    office: "State House — District 3",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Gus Tarraf', description: 'Media professional and community member with a long career in journalism, media production, and non-profit work since the early 1990s. Based in Dearborn. Notably switched from running as a Democrat in 2024 (lost to incumbent Alabas Farhat in the primary) to running as a Republican in 2026 for the same District 3 seat. Will not face a Republican primary challenge.', status: 'challenger', grade: 'C',
          positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Party-switched from Democrat to Republican; specific pro-life positions unclear. Arab American community in Dearborn tends to be socially conservative.',
            marriage: 'No specific position found; party switch and Arab American community context suggest moderate-to-conservative leanings.',
            religiousLiberty: 'Arab American community member in Dearborn; likely sympathetic to religious liberty concerns.',
            secondAmendment: 'No specific position found; recent party switch makes positions uncertain.',
            limitedGov: 'Recently switched parties; positions on government size unclear.',
            fiscal: 'No specific fiscal positions found; party switch suggests possible fiscal moderate-to-conservative shift.'
          }
        },
      ],
      democratic: [
        { name: 'Othman Ali Alaansi', description: 'Lifelong Dearborn resident. Graduate of University of Michigan-Dearborn with a bachelor\'s in computer science. Works in the tech industry. Ran for Dearborn City Council at-large in 2025. Actively involved with Islamic Center of Detroit, Masjid Al-Huda, and American Moslem Society. Priorities include fiscal efficiency, no new taxes, public safety, clean neighborhoods, and youth engagement.', status: 'challenger', grade: 'D',
          positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Running as Democrat but from conservative Muslim community in Dearborn; emphasizes fiscal efficiency over social issues. Position unclear.',
            marriage: 'Active in Islamic community organizations; may hold traditional views but running as a Democrat.',
            religiousLiberty: 'Deeply involved in religious community organizations; likely supports religious liberty.',
            secondAmendment: 'Prioritizes public safety but no specific gun policy positions found.',
            limitedGov: 'Campaign explicitly prioritizes \'no new taxes\' and fiscal efficiency, unusually conservative for a Democrat.',
            fiscal: 'Explicitly campaigns on fiscal efficiency and no new taxes, suggesting fiscal conservatism.'
          }
        },
        { name: 'Hussein Berry', description: 'Age 62, longtime real estate agent with over three decades of experience. Former Dearborn Board of Education member, elected in 2009, 2016, and 2022. Previously launched a campaign for Michigan Senate District 2 before switching to challenge incumbent Rep. Alabas Farhat in HD-3. Abruptly resigned from school board in August 2025 without explanation.', status: 'challenger', grade: 'D',
          positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Running as Democrat but from conservative Arab American community in Dearborn; specific position unclear.',
            marriage: 'Active in Arab American community; may hold traditional views but running as Democrat.',
            religiousLiberty: 'Arab American community leader in Dearborn; likely sympathetic to religious liberty concerns.',
            secondAmendment: 'No specific position found on Second Amendment issues.',
            limitedGov: 'Long career in real estate and business; may lean moderate on government scope.',
            fiscal: 'Business background in real estate suggests moderate fiscal positions.'
          }
        },
        { name: 'Alabas Farhat', description: 'Incumbent Democratic State Representative serving since 2023, representing HD-3 (most of Dearborn and parts of Detroit). Raised in Dearborn. BS in public health from UM-Dearborn (2021), MPA from Gerald R. Ford School of Public Policy (2023). Previously worked for State Rep. Abdullah Hammoud and Wayne County Commissioner Sam Baydoun. Sponsored HB 5716 protecting religious liberty during booking/searches. Removed from Appropriations Committee vice chair by Speaker Hall after voting against a life-without-parole bill.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'B', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Voted with Democratic majority on reproductive health issues; however, representing conservative Arab American district may temper some positions.',
            marriage: 'Democratic caucus member who voted with party on LGBTQ+ legislation.',
            religiousLiberty: 'Notably sponsored HB 5716 protecting religious garments during booking and requiring same-sex officers for searches - one of the stronger religious liberty positions among Democrats.',
            secondAmendment: 'Voted with Democratic caucus on gun violence prevention measures.',
            limitedGov: 'Voted with Democratic majority on expanding government programs and regulations.',
            fiscal: 'Served on Appropriations Committee; voted with Democratic majority on spending increases.'
          }
        },
      ],
    },
  },
  4: {
    office: "State House — District 4",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Everett Davis', description: 'Republican candidate for Michigan State House District 4 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Krystal Larsosa', description: 'Born in Detroit. Bachelor\'s degree from Eastern University (2003). Artist, community organizer, and child and youth development professional. Previously ran for Detroit City Council District 1 in 2021 and lost in the general election.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Running as Democrat in deep-blue Detroit district; aligned with pro-choice party platform.',
            marriage: 'Democratic platform alignment in Detroit supports same-sex marriage.',
            religiousLiberty: 'No specific position found; Democratic alignment in urban Detroit.',
            secondAmendment: 'No specific position found; Detroit Democratic candidates typically support gun control measures.',
            limitedGov: 'Community organizer background suggests support for expanded government programs.',
            fiscal: 'No specific fiscal positions found; aligned with Democratic spending priorities.'
          }
        },
        { name: 'Anthony Stafford McDonald', description: 'Democratic candidate for Michigan State House District 4 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Tyus Monroe', description: 'Democratic candidate for Michigan State House District 4 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Roslyn M. Ogburn', description: 'Democratic candidate for Michigan State House District 4 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Regina Ross', description: 'Democratic candidate for Michigan State House District 4 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  5: {
    office: "State House — District 5",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Chris Venable', description: 'Republican candidate for Michigan State House District 5 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Crystal Bailey', description: 'Democratic candidate for Michigan State House District 5 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Candace Calloway', description: 'Democratic candidate for Michigan State House District 5 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Soummer Moore-Crawford', description: 'Democratic candidate for Michigan State House District 5 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  6: {
    office: "State House — District 6",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Mike Steger', description: 'Republican candidate for Michigan State House District 6 in the 2026 primary. Note: A Michael Steger is also running for U.S. House in Michigan\'s 11th Congressional District as a Republican, described as a political intelligence operative from Kalamazoo who earned a bachelor\'s from UC Santa Barbara (1999). It is unclear if this is the same individual.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found specific to State House candidacy.',
            marriage: 'No information found specific to State House candidacy.',
            religiousLiberty: 'No information found specific to State House candidacy.',
            secondAmendment: 'No information found specific to State House candidacy.',
            limitedGov: 'No information found specific to State House candidacy.',
            fiscal: 'No information found specific to State House candidacy.'
          }
        },
      ],
      democratic: [
        { name: 'Charlie Gandy-Thompson', description: 'Democratic candidate for Michigan State House District 6 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'David Lauer', description: 'Democratic candidate for Michigan State House District 6 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Melanie Macey', description: 'Democratic candidate for Michigan State House District 6 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  7: {
    office: "State House — District 7",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Reginald Moorer', description: 'Republican candidate for Michigan State House District 7 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Seema Ahmad', description: 'Democratic candidate for Michigan State House District 7 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Oliver Gantt', description: 'Democratic candidate for Michigan State House District 7 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Tonya Myers Phillips', description: 'Democratic candidate for Michigan State House District 7 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  8: {
    office: "State House — District 8",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Bruce P. Langran', description: 'Republican candidate for Michigan State House District 8 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Tonya Renay Wells', description: 'Republican candidate for Michigan State House District 8 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Deanne Austin', description: 'Democratic candidate for Michigan State House District 8 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Chris Gilmer-Hill', description: 'Democratic candidate for Michigan State House District 8 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Fedor Kinaya', description: 'Democratic candidate for Michigan State House District 8 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Helena Scott', description: 'Incumbent Democratic State Representative serving since 2021, currently representing HD-8 (NW Detroit, Ferndale, Pleasant Ridge). Bachelor\'s degree in psychology from Marygrove College. Former organizer for Southeast Michigan Jobs with Justice and training coordinator for League of Women Voters of Detroit. Chair of Energy, Communications & Technology Committee. Member of Insurance & Financial Services, Regulatory Reform, Higher Education, and Housing committees.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted with Democratic majority to pass Reproductive Health Act codifying abortion rights.',
            marriage: 'Voted with Democratic caucus supporting LGBTQ+ rights legislation including Elliott-Larsen Civil Rights Act expansion.',
            religiousLiberty: 'No record of championing religious liberty protections; voted with Democratic caucus on civil rights expansion.',
            secondAmendment: 'Voted with Democratic majority on gun violence prevention legislation including red flag laws and storage requirements.',
            limitedGov: 'Labor organizer background; supports expanded government role in energy, housing, and social services.',
            fiscal: 'Voted with Democratic majority on significant spending increases across state programs.'
          }
        },
      ],
    },
  },
  9: {
    office: "State House — District 9",
    region: "Wayne County - Detroit",
    incumbent: "Joe Tate (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Michele Lundgren', description: 'Republican candidate for Michigan State House District 9 (Detroit) in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Willie Burton', description: 'Lifelong Detroiter and public servant. Made history as the youngest Police Commissioner in the United States, serving on the Detroit Board of Police Commissioners representing District 5 until January 2026. Led efforts to implement body cameras, expand Project Green Light, raise officer pay, support small businesses, and promote youth employment. Ran for Detroit City Council District 5 in 2025 and lost. Previously ran for State House District 4 in 2010, losing the Democratic primary.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Running as Democrat in deep-blue Detroit; aligned with pro-choice party platform.',
            marriage: 'Democratic platform alignment supports same-sex marriage.',
            religiousLiberty: 'No specific position found; aligned with Democratic platform.',
            secondAmendment: 'As former Police Commissioner, supported public safety measures but also law enforcement empowerment; mixed signals.',
            limitedGov: 'Supports expanded government programs for public safety, youth employment, and small business support.',
            fiscal: 'Focused on government investment in public safety infrastructure and community programs.'
          }
        },
        { name: 'Anthony Eid', description: 'Chaldean and Lebanese American raised in Southeast Michigan. Served as an Independent on the Michigan Independent Citizens Redistricting Commission (MICRC). Two bachelor\'s degrees from Wayne State University (2015), master\'s degree (2017), and completed two years of medical school. Grew up in Orchard Lake before moving to Detroit for higher education.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Running as Democrat; identified as Independent on redistricting commission but now running in Democratic primary.',
            marriage: 'Running as Democrat; aligned with party platform on marriage.',
            religiousLiberty: 'No specific position found; Chaldean Christian background may indicate some sympathy for religious liberty.',
            secondAmendment: 'No specific position found on Second Amendment issues.',
            limitedGov: 'No specific position found; redistricting commission service does not indicate clear position on government size.',
            fiscal: 'No specific fiscal positions found.'
          }
        },
        { name: 'Darryl J. Ervin', description: 'Democratic candidate for Michigan State House District 9 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Arthur Harrington', description: 'Democratic candidate for Michigan State House District 9 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Bryant Hepp', description: 'Democratic candidate for Michigan State House District 9 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Karriem Holman', description: 'Democratic candidate for Michigan State House District 9 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Patricia Hurt', description: 'Democratic candidate for Michigan State House District 9 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Toni Mua', description: 'Democratic candidate for Michigan State House District 9 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Rick Silva', description: 'Democratic candidate for Michigan State House District 9 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  10: {
    office: "State House — District 10",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Peter Ochs', description: 'Republican candidate for Michigan State House District 10 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Andrew Cyburt', description: 'Democratic candidate for Michigan State House District 10 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Ryan Nelson', description: 'Democratic candidate for Michigan State House District 10 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Veronica Paiz', description: 'Democratic candidate for Michigan State House District 10 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  11: {
    office: "State House — District 11",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Eddie Kabacinski', description: 'Former Warren City Council member (5th District). Ran for Michigan House District 14 in 2022 but was disqualified from the Republican primary. Ran for Macomb County Sheriff in 2024. Named in 2020 criminal warrants for allegedly assaulting a woman who put BLM stickers on a Trump sign and charged with impersonating a police officer. Strongly conservative, pro-Trump activist.', status: 'challenger', grade: 'B',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Strong Trump supporter and conservative activist; aligned with pro-life movement.',
            marriage: 'Strongly conservative; supports traditional marriage.',
            religiousLiberty: 'Conservative activist who supports broad religious liberty protections.',
            secondAmendment: 'Charged in an incident involving a firearm; strong pro-gun advocate and conservative activist.',
            limitedGov: 'Conservative Republican but involvement in government roles suggests moderate limited-government advocacy.',
            fiscal: 'Conservative Republican alignment suggests fiscal conservatism.'
          }
        },
        { name: 'Matthew Stafford', description: 'Republican candidate for Michigan State House District 11 in the 2026 primary. No detailed public information found about background, career, or policy positions.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Dale J. Walker', description: 'Republican candidate for Michigan State House District 11 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Cranstana Gina Brown Anderson', description: 'Democratic candidate for Michigan State House District 11 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Kimberly Fisher', description: 'Democratic candidate for Michigan State House District 11 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Michael Howard', description: 'Democratic candidate for Michigan State House District 11 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  12: {
    office: "State House — District 12",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Brian K. Hakola', description: 'Republican candidate for Michigan State House District 12 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Randell J. Shafer', description: 'Republican candidate for Michigan State House District 12 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Kimberly L. Edwards', description: 'Democratic candidate for Michigan State House District 12 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  13: {
    office: "State House — District 13",
    region: "Macomb County",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: 'Casey Armitage', description: 'Gun-rights activist from Macomb County. Also running for U.S. House in Michigan\'s 10th Congressional District as a Republican. Active in Republican politics in southeastern Michigan\'s Macomb County area.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican candidate; specific pro-life positions not detailed but aligned with conservative Republican platform.',
            marriage: 'No specific position found; aligned with conservative Republican platform.',
            religiousLiberty: 'No specific position found; aligned with conservative Republican platform.',
            secondAmendment: 'Described as a gun-rights activist; strongly supports Second Amendment.',
            limitedGov: 'Conservative Republican alignment suggests support for limited government.',
            fiscal: 'Conservative Republican alignment suggests fiscal conservatism.'
          }
        },
        { name: 'Mark Thomas Foster', description: 'Republican candidate for Michigan State House District 13 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Julie Leonardi', description: 'Republican candidate for Michigan State House District 13 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Mai Xiong', description: 'Democratic candidate for Michigan State House District 13 (Macomb County) in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  14: {
    office: "State House — District 14",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Larry Szyska', description: 'Republican candidate for Michigan State House District 14 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Minhaj Chowdhury', description: 'Democratic candidate for Michigan State House District 14 in the 2026 primary, challenging incumbent Mike McFall. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Mike McFall', description: 'Incumbent Democratic State Representative serving his second term in HD-14, covering parts of Oakland and Macomb Counties including Center Line, Madison Heights, Hazel Park, and part of Warren. Voted to repeal Michigan\'s 1931 abortion ban, pass gun violence prevention laws (red flag, universal background checks, secure storage), restore prevailing wage laws, and increase per-pupil education funding to $9,608 (record high). Focuses on mental health care, equality, and community building.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted to repeal Michigan\'s 1931 abortion ban following Proposal 3.',
            marriage: 'Voted with Democratic majority on LGBTQ+ rights legislation.',
            religiousLiberty: 'No record of championing religious liberty; voted with Democratic caucus on civil rights expansion.',
            secondAmendment: 'Authored and passed gun violence prevention laws including red flag laws, universal background checks, and secure storage requirements.',
            limitedGov: 'Restored prevailing wage laws; expanded government regulation and programs across multiple sectors.',
            fiscal: 'Voted for historic increases in state spending including record per-pupil education funding.'
          }
        },
      ],
    },
  },
  15: {
    office: "State House — District 15",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Hassan H Nehme', description: 'Republican candidate for Michigan State House District 15 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Jalal Abdallah', description: 'Democratic candidate for Michigan State House District 15 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Leslie C. Herrick', description: 'Democratic candidate for Michigan State House District 15 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Gary Woronchak', description: 'Experienced Democratic politician and former newspaper editor. Born in Detroit. Graduate of University of Michigan-Dearborn. Former editor of Dearborn Press & Guide and managing editor of Daily Tribune (Royal Oak). Served in Michigan House of Representatives from 1999 to 2004. Served on Wayne County Board of Commissioners from 2005 to 2018, including as Chairman from 2011 to 2018. Ran unsuccessfully for Michigan Senate District 3 in 2018 and for Mayor of Dearborn in 2021.', status: 'challenger', grade: 'D',
          positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Long-serving Democrat who voted with party during previous House tenure (1999-2004).',
            marriage: 'Democratic voting record during previous House and county commission service.',
            religiousLiberty: 'No specific position found; moderate Democrat from Dearborn area.',
            secondAmendment: 'Voted with Democratic caucus during previous legislative service.',
            limitedGov: 'Career government official; supports expanded government services and programs.',
            fiscal: 'Long tenure as Wayne County Commission Chairman managing county budgets; moderate Democrat on fiscal issues.'
          }
        },
      ],
    },
  },
  16: {
    office: "State House — District 16",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Brian M. Duggan', description: 'Republican candidate for Michigan State House District 16 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Stephanie A. Young', description: 'Incumbent Democratic State Representative serving her third term in HD-16 (northwest Detroit, southern portions of Livonia and Redford Charter Township). 93% environmental voting record from Michigan LCV. Tied for most bills signed into law in her second term with seven public acts. Serves as chair of the Detroit Caucus, chair of House Democratic Caucus, and chaplain for Michigan Legislative Black Caucus. Has cast 2,433 votes with 95 sponsorships.', status: 'challenger', grade: 'F', endorsements: [], positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' }, gradeJustifications: { proLife: 'Voted with Democratic majority on reproductive health legislation codifying abortion rights.', marriage: 'Voted with Democratic caucus supporting LGBTQ+ rights legislation.', religiousLiberty: 'No record of championing religious liberty; voted with Democratic caucus.', secondAmendment: 'Voted with Democratic majority on gun violence prevention legislation.', limitedGov: 'Strong environmentalist (93% LCV score); supports expanded government regulation and programs.', fiscal: 'Voted with Democratic majority on significant spending increases; prolific legislator on government programs.' } },
      ],
    },
  },
  17: {
    office: "State House — District 17",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Ken Crider', description: 'Republican candidate for Michigan State House District 17 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Laurie Pohutsky', description: 'Incumbent Democratic State Representative serving since 2019, currently representing HD-17. Bachelor\'s in microbiology from Michigan State University (2010). Former laboratory technician and quality control technician. Former speaker pro tempore of the Michigan House. 100% environmental voting record (Michigan LCV). Endorsed by Planned Parenthood Advocates of Michigan, Reproductive Freedom for All, AFL-CIO Michigan, UAW, and Michigan LCV. Serves on Oversight Committee.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Endorsed by Planned Parenthood Advocates and Reproductive Freedom for All; voted to codify abortion rights.',
            marriage: 'Voted with Democratic caucus on LGBTQ+ rights expansion; endorsed by equality organizations.',
            religiousLiberty: 'No record of supporting religious exemptions; strong advocate for LGBTQ+ civil rights expansion.',
            secondAmendment: 'Voted with Democratic majority on comprehensive gun violence prevention package.',
            limitedGov: '100% environmental voting record; supports extensive government regulation and social programs.',
            fiscal: 'Voted for record spending increases; endorsed by labor unions supporting expanded government spending.'
          }
        },
      ],
    },
  },
  18: {
    office: "State House — District 18",
    region: "Oakland County - Southfield, Lathrup Village, Farmington Hills",
    incumbent: "Jason Hoskins (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Ryan Foster', description: 'Republican candidate for Michigan State House District 18 (Oakland County - Southfield, Lathrup Village, Farmington Hills) in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Ronald Ulmer-Paul', description: 'Republican candidate for Michigan State House District 18 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Kelly Garrett', description: 'Democratic candidate for Michigan State House District 18 (Oakland County) in the 2026 primary. Open seat vacated by term-limited Jason Hoskins. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  19: {
    office: "State House — District 19",
    region: "Oakland County - Farmington Hills",
    incumbent: "Samantha Steckloff (D)",
    candidates: {
      republican: [
        { name: 'Kevin J. Hammer', description: 'Republican candidate for Michigan State House District 19 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Mitch Swoboda', description: 'Republican candidate for Michigan State House District 19 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Samantha Steckloff', description: 'Incumbent Democratic State Representative for HD-19 (Farmington Hills area, Oakland County). Previously served on Farmington Hills City Council (2013-2021). Created the first Commission on Community Health in the state. Authored a Human Rights Ordinance. Worked to expand green energy and sustainable buildings. Serves on Appropriations Committee and five subcommittees including Higher Education (Chair).', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted with Democratic majority to codify reproductive rights.',
            marriage: 'Authored Human Rights Ordinance on Farmington Hills City Council; strong LGBTQ+ rights supporter.',
            religiousLiberty: 'Human Rights Ordinance may limit religious exemptions; no record of championing religious liberty.',
            secondAmendment: 'Voted with Democratic majority on comprehensive gun control legislation.',
            limitedGov: 'Created new government commission; supports expanded government role in health, energy, and housing.',
            fiscal: 'Serves on Appropriations Committee; voted for significant spending increases.'
          }
        },
        { name: 'Brandon Young', description: 'Democratic candidate for Michigan State House District 19 in the 2026 primary, challenging incumbent Samantha Steckloff. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  20: {
    office: "State House — District 20",
    region: "Oakland County - West Bloomfield, Bloomfield Twp",
    incumbent: "Noah Arbit (D)",
    candidates: {
      republican: [
        { name: 'Hermon Barbe', description: 'Republican candidate for Michigan State House District 20 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'S. David Sullivan', description: 'Republican candidate for Michigan State House District 20 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Noah Arbit', description: 'Incumbent Democratic State Representative serving his second term in HD-20 (West Bloomfield, eastern Commerce Township, Keego Harbor, Orchard Lake, Sylvan Lake, NW Bloomfield Township, Oakland County). Champion on gun violence prevention, reproductive rights, LGBTQ+ rights, and voting rights. Introduced legislation to further gun violence prevention efforts. Joined Democratic colleagues on firearm safety measures.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strong defender of reproductive rights; voted to codify abortion access.',
            marriage: 'Passionate champion of LGBTQ+ rights including marriage equality.',
            religiousLiberty: 'Strong LGBTQ+ advocacy suggests opposition to broad religious exemptions that could affect LGBTQ+ rights.',
            secondAmendment: 'Leading voice on gun violence prevention; introduced legislation to expand firearm restrictions.',
            limitedGov: 'Supports expanded government role in healthcare, civil rights enforcement, and gun regulation.',
            fiscal: 'Voted with Democratic majority on significant spending increases.'
          }
        },
      ],
    },
  },
  21: {
    office: "State House — District 21",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Ross Barranco', description: 'Republican candidate for Michigan State House District 21 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Kelly Breen', description: 'Incumbent Democratic State Representative serving her third term in HD-21 (Farmington, Farmington Hills, Northville, Novi, South Lyon, Oakland County). JD from Wayne State University (1999-2002), BS in Social Relations from Michigan State University (1995-1999). Chair of House Judiciary Committee. Helped shepherd bills codifying reproductive freedom, ensuring LGBTQ+ rights, and wrote and passed firearm legislation.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'As Judiciary Committee Chair, shepherded reproductive freedom legislation through the House.',
            marriage: 'Key leader in ensuring LGBTQ+ rights legislation passed through Judiciary Committee.',
            religiousLiberty: 'Led passage of civil rights expansion that limits religious exemptions.',
            secondAmendment: 'Personally authored and passed firearm safety legislation including restrictions on gun ownership.',
            limitedGov: 'Supports expanded government regulation through judiciary and civil rights frameworks.',
            fiscal: 'Voted with Democratic majority on all major spending increases.'
          }
        },
      ],
    },
  },
  22: {
    office: "State House — District 22",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Casey J. Noce', description: 'Republican candidate for Michigan State House District 22 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Lisa McIntyre', description: 'Past President of the Northville Board of Education, currently Treasurer. Mother of three. Lifetime of experience in mental health. Led efforts to stabilize the school district after the pandemic, led school safety initiatives and away-for-the-day personal device policy for K-8, and kept the budget strong while improving educator work experience.', status: 'challenger', grade: 'D',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'Running as Democrat; aligned with party platform supporting abortion rights.',
            marriage: 'Democratic platform alignment supports same-sex marriage.',
            religiousLiberty: 'No specific position found; Democratic alignment.',
            secondAmendment: 'School safety advocate; likely supports gun control measures in line with Democratic platform.',
            limitedGov: 'School board experience focused on maintaining services; Democratic platform alignment.',
            fiscal: 'Record of keeping school budgets strong suggests some fiscal responsibility, but Democratic alignment on state spending.'
          }
        },
      ],
    },
  },
  23: {
    office: "State House — District 23",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Miriam Corvino', description: 'Republican candidate for Michigan State House District 23 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Jason Morgan', description: 'Incumbent Democratic State Representative for HD-23 (Ann Arbor area, Washtenaw County). Former Washtenaw County Commission Chair. Instructor at Washtenaw Community College. Former director of constituent services for Michigan Department of State and transition director for Congresswoman Elissa Slotkin. Founded bipartisan Public Transit Caucus. Priorities include public schools, natural resources, healthcare, infrastructure, and voting rights.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted with Democratic majority on reproductive health legislation.',
            marriage: 'Represents deep-blue Ann Arbor; strong supporter of LGBTQ+ rights.',
            religiousLiberty: 'No specific record on religious liberty; Ann Arbor progressive alignment.',
            secondAmendment: 'Voted with Democratic majority on gun violence prevention measures.',
            limitedGov: 'Supports expanded public transit, infrastructure spending, and government healthcare programs.',
            fiscal: 'Voted for significant spending increases; strong advocate for public education and infrastructure investment.'
          }
        },
      ],
    },
  },
  24: {
    office: "State House — District 24",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Allison Kay Fuller', description: 'Republican candidate for Michigan State House District 24 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Ranjeev Puri', description: 'Incumbent Democratic State Representative and House Minority Leader for HD-24 (Canton, Belleville, Van Buren Twp, Wayne County). Highest ranking Asian-American, Indian-American, and Sikh-American elected official in state legislative politics nationally. Former House Majority Whip (2023-2024). Led on gun violence prevention legislation following the MSU shooting. Sponsored law preventing HOAs from blocking solar panels and EV chargers (signed by Gov. Whitmer).', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted with Democratic majority on reproductive health legislation.',
            marriage: 'Democratic leadership; voted for LGBTQ+ rights legislation.',
            religiousLiberty: 'No specific record; Democratic leadership alignment.',
            secondAmendment: 'Specifically tapped to lead on gun violence prevention legislation after MSU shooting; key architect of Michigan\'s gun control package.',
            limitedGov: 'Sponsored regulations on HOAs; supports expanded government role in energy and gun policy.',
            fiscal: 'Democratic leadership; voted for all major spending increases.'
          }
        },
      ],
    },
  },
  25: {
    office: "State House — District 25",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Dawn Udell', description: 'Republican candidate for Michigan State House District 25 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Peter Herzberg', description: 'Incumbent Democratic State Representative for HD-25 (Wayne, portions of Canton, Dearborn Heights, Westland, Wayne County). Assumed office April 30, 2024. Graduated from John Glenn High School. BS in Finance from Wayne State University. Previously served on Westland City Council. Committed to school funding, reproductive health freedom, and advocating for working people.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Committed to protecting reproductive health decisions; aligned with Democratic platform.',
            marriage: 'Democratic caucus member; aligned with party on LGBTQ+ rights.',
            religiousLiberty: 'No specific position found; Democratic alignment.',
            secondAmendment: 'No specific position found; assumed Democratic alignment on gun policy.',
            limitedGov: 'Supports expanded school funding and government services; Democratic alignment.',
            fiscal: 'Supports increased education funding; assumed Democratic alignment on spending.'
          }
        },
      ],
    },
  },
  26: {
    office: "State House — District 26",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Chris Dobis', description: 'Republican candidate for Michigan State House District 26 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Dylan Wegela', description: 'Incumbent Democratic State Representative for HD-26 (Garden City area, Wayne County). Grew up in Livonia. Graduate of Eastern Michigan University. Former teacher and union organizer. Spent 7 years teaching, organizing, and advocating for education in South Korea, Arizona, and Michigan. Founded Arizona Educators United during the Red for Ed teacher strikes, securing over $400 million for public education. Organized for Bernie Sanders 2016. Member of the Democratic Socialists of America.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'DSA member and progressive Democrat; strongly supports abortion rights.',
            marriage: 'DSA member; strongly supports LGBTQ+ rights and marriage equality.',
            religiousLiberty: 'DSA member and progressive; unlikely to support broad religious exemptions.',
            secondAmendment: 'Voted with Democratic majority on comprehensive gun control package.',
            limitedGov: 'DSA member and union organizer; advocates for significantly expanded government role in education, labor, and social services.',
            fiscal: 'DSA member who secured $400M in education spending in Arizona; supports major government spending increases.'
          }
        },
      ],
    },
  },
  27: {
    office: "State House — District 27",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Rylee Linting', description: 'Republican candidate for Michigan State House District 27 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Jaime Churches', description: 'Former Democratic State Representative for HD-27 (2023-2025, Downriver area). Lost reelection in 2024. BS in integrated science/elementary education and MA in educational administration from Madonna University. Former 5th grade teacher in Grosse Ile and Woodhaven-Brownstown schools. Advocated for education support, infrastructure investment, Great Lakes protection, and expanding hate crime definitions to cover sexual orientation and gender identity.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted with Democratic majority on reproductive health legislation during her term.',
            marriage: 'Supported legislation expanding hate crime protections for sexual orientation and gender identity.',
            religiousLiberty: 'No record of championing religious liberty; supported civil rights expansion.',
            secondAmendment: 'Voted with Democratic majority on gun violence prevention measures during her term.',
            limitedGov: 'Supports expanded government investment in infrastructure, education, and environmental protection.',
            fiscal: 'Voted for spending increases during her term; supports infrastructure and education investment.'
          }
        },
      ],
    },
  },
  28: {
    office: "State House — District 28",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Jamie Thompson', description: 'Republican candidate for Michigan State House District 28 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Sherry A. Berecz', description: 'Democratic candidate for Michigan State House District 28 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  29: {
    office: "State House — District 29",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'James DeSana', description: 'Incumbent Republican State Representative for HD-29 (Monroe County area). Assumed office January 1, 2023; won reelection in 2024. Serves on House Appropriations Committee and Agriculture/Natural Resources subcommittee. 10% environmental voting record (Michigan LCV). Voted against MDHHS budget citing Medicaid fraud. Testified in support of repealing Michigan\'s red flag law. Co-sponsored resolution supporting 287g immigration enforcement program. Strong conservative legislator.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life Republican; votes consistently with pro-life caucus.',
            marriage: 'Conservative Republican who supports traditional marriage.',
            religiousLiberty: 'Strong conservative values; supports broad religious liberty protections.',
            secondAmendment: 'Testified before House Judiciary Committee in support of repealing Michigan\'s red flag law; strong 2A defender.',
            limitedGov: 'Voted against expanded government spending citing fraud concerns; supports 287g enforcement; 10% LCV score shows opposition to environmental regulation.',
            fiscal: 'Voted against MDHHS budget and other spending measures; consistently opposes government spending increases.'
          }
        },
      ],
      democratic: [
        { name: 'Darian Counts', description: 'Democratic candidate for Michigan State House District 29 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Rich Li', description: 'Democratic candidate for Michigan State House District 29 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  30: {
    office: "State House — District 30",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'William Bruck', description: 'Republican candidate for Michigan State House District 30 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Omar G. Ferdin', description: 'Democratic candidate for Michigan State House District 30 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  31: {
    office: "State House — District 31",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Laura M. Perry', description: 'Republican candidate for Michigan State House District 31 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Shannon Dare Wayne', description: 'Democratic candidate for Michigan State House District 31 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  32: {
    office: "State House — District 32",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Martin A. Church', description: 'Republican candidate for Michigan State House District 32 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Mike Eller', description: 'Republican candidate for Michigan State House District 32 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'William C. Riney', description: 'Democratic candidate for Michigan State House District 32 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Jimmie Wilson Jr.', description: 'Democratic candidate for Michigan State House District 32 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  33: {
    office: "State House — District 33",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Catherine Rogers', description: 'Republican candidate for Michigan State House District 33 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Morgan Foreman', description: 'Democratic candidate for Michigan State House District 33 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  34: {
    office: "State House — District 34",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Nancy Jenkins-Arno', description: 'Incumbent Republican State Representative elected to her fourth non-consecutive term in HD-34 (Lenawee County including Adrian, Morenci, Tecumseh). Previously served in the Michigan House 2011-2016 and as Lenawee County Commissioner 2018-2024 (three terms). Graduated from Evangel University (1986), master\'s in political science from University of Toledo (1991). Chairs Joint Capital Outlay Committee and Appropriations Subcommittee on Labor/Economic Opportunity.', status: 'challenger', grade: 'B',
          positions: { proLife: 'A', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Evangel University graduate (Assemblies of God affiliated); long-serving Republican with conservative social values.',
            marriage: 'Conservative Republican; expected to support traditional marriage based on party and background.',
            religiousLiberty: 'Christian university graduate; expected to support religious liberty based on background.',
            secondAmendment: 'Conservative Republican from rural Lenawee County; expected to support Second Amendment rights.',
            limitedGov: 'Chairs capital outlay committee focused on fiscally responsible government spending.',
            fiscal: 'Former county commissioner focused on fiscally responsible practices; chairs appropriations subcommittee.'
          }
        },
      ],
      democratic: [
        { name: 'John E. Dahlgren', description: 'Democratic candidate for Michigan State House District 34 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  35: {
    office: "State House — District 35",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Jennifer Wortz', description: 'Republican candidate for Michigan State House District 35 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Jeff Cooley', description: 'Democratic candidate for Michigan State House District 35 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  36: {
    office: "State House — District 36",
    region: "Kalamazoo/Cass/Van Buren",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: 'Steve Carra', description: 'Incumbent Republican State Representative for HD-36 (Kalamazoo/Cass/Van Buren Counties). Assumed office January 1, 2023; reelected 2024. Ranked most conservative state representative in the legislature. 7% environmental voting record (Michigan LCV). Endorsed by NRA PVF and Right to Life of Michigan. Supports lower taxes, fewer regulations, opposes biological males in women\'s sports. Voted \'no\' more than any other legislator in the chamber.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Endorsed by Right to Life of Michigan PAC; consistently pro-life voting record.',
            marriage: 'Opposes transgender policies in women\'s sports/spaces; supports traditional marriage and gender norms.',
            religiousLiberty: 'Most conservative member of the legislature; strong supporter of religious liberty.',
            secondAmendment: 'Endorsed by NRA PVF; strong Second Amendment supporter.',
            limitedGov: 'Ranked most conservative representative; supports lower taxes, fewer regulations, fines, and fees across the board.',
            fiscal: 'Voted \'no\' on more spending bills than any other legislator; consistent fiscal hawk.'
          }
        },
        { name: 'Max Coon', description: 'Republican candidate for Michigan State House District 36 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Luke Lori', description: 'Republican candidate for Michigan State House District 36 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Cole Slaski', description: 'Democratic candidate for Michigan State House District 36 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  37: {
    office: "State House — District 37",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Steve Bury', description: 'Republican candidate for Michigan State House District 37 in the 2026 primary, challenging incumbent Brad Paquette. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Brad Paquette', description: 'Incumbent Republican State Representative serving his fourth term in HD-37 (portions of Berrien and Cass Counties, including Niles, Buchanan, Dowagiac). Born in Marquette, MI (1987). BA in political science/pre-law from Northern Michigan University (2009), master\'s in teaching from Andrews University (2012). Former public school teacher at Niles New Tech Entrepreneurial Academy. Former Niles Planning Commissioner. Serves on Education/Workforce and Oversight committees. Won reelection by a wide margin.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent; expected to hold pro-life positions based on party alignment and district.',
            marriage: 'Conservative Republican from rural district; expected to support traditional marriage.',
            religiousLiberty: 'Andrews University graduate (Seventh-day Adventist institution); expected to support religious liberty.',
            secondAmendment: 'Conservative Republican from rural SW Michigan; expected to support Second Amendment.',
            limitedGov: 'Republican incumbent in rural district; serves on oversight committees focused on government accountability.',
            fiscal: 'Four-term Republican; expected to support fiscal conservatism based on party and district.'
          }
        },
      ],
      democratic: [
        { name: 'Angela M. Jones', description: 'Democratic candidate for Michigan State House District 37 in the 2026 primary. Lost to Brad Paquette in 2024 general election by a significant margin (30,018-16,189). No detailed policy positions found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  38: {
    office: "State House — District 38",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Mark Krieger', description: 'Republican candidate for Michigan State House District 38 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Joey Andrews', description: 'Incumbent Democratic State Representative serving his second term in HD-38 (parts of Allegan, Berrien, and Van Buren Counties). Born in St. Joseph, MI. BA from Carson-Newman University (2013), JD from Wayne State University (2016). Licensed attorney, former organizer and policy analyst with Michigan AFL-CIO, former small business owner.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Democratic incumbent; voted with party on reproductive health legislation.',
            marriage: 'Democratic incumbent; voted with party on LGBTQ+ rights.',
            religiousLiberty: 'No specific position found; Democratic alignment.',
            secondAmendment: 'No specific position found; assumed Democratic alignment on gun policy.',
            limitedGov: 'Former AFL-CIO organizer; supports labor protections and expanded government regulation.',
            fiscal: 'Supports increased government spending on social programs and labor protections.'
          }
        },
      ],
    },
  },
  39: {
    office: "State House — District 39",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Bill Sage', description: 'Republican candidate for Michigan State House District 39 in the 2026 primary, challenging incumbent Pauline Wendzel. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Pauline Wendzel', description: 'Incumbent Republican State Representative for HD-39 (Berrien County area). Assumed office January 1, 2023; reelected 2024. BA in anthropology and food industry marketing from Michigan State University. Former product brand development manager with Coloma Frozen Foods, programs director at North Berrien Historical Museum, and camp counselor. 32% environmental voting record (Michigan LCV). Endorsed by Right to Life of Michigan PAC, Michigan Chamber of Commerce, and other business organizations.', status: 'challenger', grade: 'B',
          positions: { proLife: 'A', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Endorsed by Right to Life of Michigan PAC; consistent pro-life voting record.',
            marriage: 'Conservative Republican; expected to support traditional marriage based on party and endorsements.',
            religiousLiberty: 'Conservative Republican with business and faith-based organization endorsements.',
            secondAmendment: 'Conservative Republican from rural Berrien County; expected strong 2A support.',
            limitedGov: '32% LCV score shows opposition to environmental regulation; endorsed by Michigan Chamber of Commerce.',
            fiscal: 'Endorsed by business organizations including Michigan Chamber of Commerce; supports lower taxes and fewer regulations.'
          }
        },
      ],
      democratic: [
        { name: 'Zachary Shinabargar', description: 'Democratic candidate for Michigan State House District 39 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Kerry Tapper', description: 'Democratic candidate for Michigan State House District 39 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  40: {
    office: "State House — District 40",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Robert M. Sitarski', description: 'Republican candidate for Michigan State House District 40 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Matt Longjohn', description: 'Incumbent Democratic State Representative for HD-40 (Kalamazoo, Portage, Oshtemo, Texas Township area). BA from Kalamazoo College (1993), MD from Tulane University (1999), graduate degree from Tulane School of Public Health (2003). Only physician currently serving in the Michigan Legislature. 25 years developing community health coalitions and expanding healthcare access. Won 2024 general election with 57.5%. Previously ran for U.S. House in 2018.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Public health physician and Democrat; strongly supports reproductive healthcare access.',
            marriage: 'Democratic incumbent; aligned with party on LGBTQ+ rights.',
            religiousLiberty: 'No specific position found; Democratic alignment.',
            secondAmendment: 'No specific position found; assumed Democratic alignment on gun policy.',
            limitedGov: 'Public health professional who supports expanded government role in healthcare delivery and access.',
            fiscal: 'Supports expanded healthcare spending and government health programs.'
          }
        },
      ],
    },
  },
  41: {
    office: "State House — District 41",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Nicole C. Sabel', description: 'Republican candidate for Michigan State House District 41 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Jen Strebs', description: 'Kalamazoo County Commission Chair running for Michigan State House District 41. Active in Kalamazoo County Democratic Party. Seeking the Democratic nomination in the August 2026 primary.', status: 'challenger', grade: 'D',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Kalamazoo County Democratic leader; aligned with party platform on abortion rights.',
            marriage: 'Democratic party leader; supports same-sex marriage.',
            religiousLiberty: 'No specific position found; Democratic alignment.',
            secondAmendment: 'No specific position found; assumed Democratic alignment.',
            limitedGov: 'County Commission Chair; experienced in government administration.',
            fiscal: 'County commission experience suggests familiarity with budgets; Democratic alignment on spending.'
          }
        },
        { name: 'Jessica Swartz', description: 'Democratic candidate for Michigan State House District 41 in the 2026 primary. BA from Michigan State University, JD from American University Washington College of Law. Previously ran for Michigan\'s 4th Congressional District before dropping out of that race.', status: 'challenger', grade: 'D',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Running as Democrat; aligned with party platform on abortion rights.',
            marriage: 'Democratic candidate; supports same-sex marriage.',
            religiousLiberty: 'No specific position found; Democratic alignment.',
            secondAmendment: 'No specific position found; assumed Democratic alignment.',
            limitedGov: 'No specific position found; Democratic alignment.',
            fiscal: 'No specific fiscal positions found; Democratic alignment.'
          }
        },
      ],
    },
  },
  42: {
    office: "State House — District 42",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Matt Hall', description: 'Incumbent Republican State Representative and current Speaker of the Michigan House (79th Speaker). Serving since 2019 in HD-42. Former House Minority Leader (2023-2025). American lawyer and politician. Perfect voting attendance for three consecutive years (640+ roll call votes per session). 37% environmental voting record (Michigan LCV). Campaigns on lowering auto insurance, cutting taxes, and reducing Medicare premiums. Endorsed by conservative and business organizations.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Speaker of the House leading the Republican majority; consistent pro-life voting record.',
            marriage: 'Conservative Republican House Speaker; supports traditional marriage.',
            religiousLiberty: 'Conservative Republican leader who supports broad religious liberty protections.',
            secondAmendment: 'Republican House Speaker who opposed Democratic gun control legislation.',
            limitedGov: 'Campaigns on cutting taxes, reducing regulations, and putting money back in people\'s pockets.',
            fiscal: 'Campaigns on lowering auto insurance and cutting taxes; led Republican opposition to spending increases.'
          }
        },
      ],
      democratic: [
        { name: 'Bill Korb', description: 'Democratic candidate for Michigan State House District 42 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Nick Rowe', description: 'Democratic candidate for Michigan State House District 42 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  43: {
    office: "State House — District 43",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Rachelle Smit', description: 'Incumbent Republican State Representative for HD-43 (Shelbyville area, Allegan/Barry Counties). Assumed office January 1, 2023; reelected 2024. Speaker Pro Tempore (second in House leadership). Born in Grand Rapids. Christian with strong conservative values. Dairy farmer with her husband Dave. Former Martin Township Clerk for seven years focused on election integrity. Affiliated with Right to Life, NRA, and Farm Bureau. Chair of House Election Integrity Committee. Member of Legislative Council.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Affiliated with Right to Life; strong pro-life advocate as a self-described Christian conservative.',
            marriage: 'Christian conservative who supports traditional marriage.',
            religiousLiberty: 'Christian conservative who strongly supports religious liberty protections.',
            secondAmendment: 'Affiliated with the NRA; strong Second Amendment supporter.',
            limitedGov: 'Former township clerk focused on limited government; Farm Bureau affiliated; chairs Election Integrity Committee.',
            fiscal: 'Dairy farmer and small business owner; fiscally conservative Republican in House leadership.'
          }
        },
      ],
      democratic: [
        { name: 'Alan Swank', description: 'Democratic candidate for Michigan State House District 43 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  44: {
    office: "State House — District 44",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Steve Frisbie', description: 'Incumbent Republican State Representative for HD-44 (Calhoun County, Battle Creek area). Serving since January 2025. Businessman, paramedic, and vice-president of LifeCare Ambulance from Pennfield Township. Served 13 years as Calhoun County Commissioner, including as chairman (2019-2023). Vice chair of House Finance Committee. Serves on Transportation & Infrastructure, Energy, and Health Policy committees. Defeated incumbent Democrat Jim Haadsma in 2024.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent; expected pro-life position based on party alignment.',
            marriage: 'Conservative Republican; expected to support traditional marriage.',
            religiousLiberty: 'No specific position found; Republican alignment suggests support.',
            secondAmendment: 'No specific position found; Republican from rural county expected to support 2A.',
            limitedGov: 'Supports energy independence including natural gas, nuclear, coal; opposes excessive environmental regulation.',
            fiscal: '13-year county commissioner; business owner; expected fiscal conservative.'
          }
        },
      ],
      democratic: [
        { name: 'Jim Haadsma', description: 'Former Democratic State Representative for HD-44 (Calhoun County, Battle Creek area) who served 2019-2024. Lost 2024 reelection by just 79 votes to Steve Frisbie. Running again in 2026. Campaign focused on restoring competent leadership, standing up for workers, reinvesting in public education, fixing roads and infrastructure, protecting reproductive freedom, and delivering results for Calhoun County.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Explicitly campaigns on \'protecting reproductive freedom\'; voted with Democratic majority on abortion legislation.',
            marriage: 'Voted with Democratic caucus on LGBTQ+ rights legislation during previous terms.',
            religiousLiberty: 'No specific position found; voted with Democratic caucus.',
            secondAmendment: 'No specific position found; assumed Democratic alignment on gun policy.',
            limitedGov: 'Supports expanded government investment in education, infrastructure, and healthcare.',
            fiscal: 'Supports increased spending on public education, roads, and government services.'
          }
        },
      ],
    },
  },
  45: {
    office: "State House — District 45",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Sarah Lightner', description: 'Incumbent Republican State Representative for HD-45 (portions of Calhoun, Jackson, and Kalamazoo Counties). Serving since 2019. Attended Springport High School and Lansing Community College. Paralegal specializing in criminal defense and family law. Operates a small crop farm and custom hay operation with her husband. Former Jackson County Commissioner (1st District). Chair of House Judiciary Committee. Serves on Agriculture, Insurance, and Finance committees.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Long-serving Republican from rural district; expected pro-life position.',
            marriage: 'Conservative Republican; expected to support traditional marriage.',
            religiousLiberty: 'Conservative Republican from rural area; expected to support religious liberty.',
            secondAmendment: 'Farmer and paralegal in criminal defense from rural Michigan; strong 2A district and expected strong support.',
            limitedGov: 'Former county commissioner, farmer, and small business owner; supports limited government.',
            fiscal: 'Farmer and small business owner; chairs Judiciary and serves on Finance committee.'
          }
        },
      ],
      democratic: [
        { name: 'Randy Davis', description: 'Democratic candidate for Michigan State House District 45 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  46: {
    office: "State House — District 46",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Kathy Schmaltz', description: 'Incumbent Republican State Representative for HD-46 (parts of Jackson and Washtenaw Counties). Assumed office January 1, 2023; reelected 2024. Born in Birmingham, MI. Michigan State University graduate. Former news anchor at Lansing\'s WILX-TV for 14 years. Serves on Energy, Communications & Technology and Health Policy committees (Behavioral Health Subcommittee Minority Vice Chair).', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent; expected pro-life position based on party alignment.',
            marriage: 'Republican incumbent; expected to support traditional marriage.',
            religiousLiberty: 'No specific position found; Republican alignment suggests support.',
            secondAmendment: 'No specific position found; Republican alignment suggests support.',
            limitedGov: 'Serves on Energy committee with focus on balanced regulation; Republican alignment.',
            fiscal: 'Republican incumbent; expected fiscal conservative based on party alignment.'
          }
        },
      ],
      democratic: [
        { name: 'Jan Maino', description: 'Democratic candidate for Michigan State House District 46 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  47: {
    office: "State House — District 47",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Justin Griffis', description: 'Republican candidate for Michigan State House District 47 in the 2026 primary. No detailed public information found specific to Michigan State House candidacy.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Carrie A. Rheingans', description: 'Incumbent Democratic State Representative for HD-47 (parts of Jackson and Washtenaw Counties including portions of Ann Arbor, Dexter, Scio Township). BS, MPH, and MSW from University of Michigan. Health policy expert and unionized instructor at UM School of Social Work. Former project director at Michigan Public Health Institute. All five laws she sponsored were bipartisan. Established first-in-the-nation Office of Tribal Legislative Liaison.', status: 'challenger', grade: 'F', endorsements: [], positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' }, gradeJustifications: { proLife: 'Democratic incumbent from Ann Arbor area; voted with party on reproductive health legislation.', marriage: 'Democratic incumbent; aligned with party on LGBTQ+ rights.', religiousLiberty: 'No specific position found; Democratic alignment.', secondAmendment: 'No specific position found; assumed Democratic alignment.', limitedGov: 'Public health expert who supports expanded government role in health and tribal affairs.', fiscal: 'Supports expanded government spending on health and social programs.' } },
      ],
    },
  },
  48: {
    office: "State House — District 48",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Brian Ignatowski', description: 'Republican candidate for HD-48 (Livingston County area). Age 42, small business owner in the water filtration industry from Pinckney, MI (Hamburg Township). Won 2024 Republican primary but lost general election to incumbent Jennifer Conlin. Running again in 2026. Goals include creating fair legislation, fixing roads, funding police and fire, securing borders, and ensuring unbiased education.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Republican candidate; expected pro-life based on party alignment and conservative platform.',
            marriage: 'Conservative Republican; expected to support traditional marriage.',
            religiousLiberty: 'Conservative Republican; expected to support religious liberty.',
            secondAmendment: 'Supports funding police; conservative Republican alignment suggests 2A support.',
            limitedGov: 'Small business owner who campaigns on fair legislation and unbiased education; strongly limited-government focused.',
            fiscal: 'Small business owner who campaigns on fiscal responsibility and fixing roads without excessive spending.'
          }
        },
      ],
      democratic: [
        { name: 'Jennifer A. Conlin', description: 'Incumbent Democratic State Representative for HD-48 (Livingston County area). Won reelection in 2024. Chairs Military, Veterans & Homeland Security committee. Member of Education, Health Policy, and Transportation committees. Endorsed by Planned Parenthood Advocates, Sierra Club Michigan, Michigan AFL-CIO, AFT Michigan, MEA, SEIU Michigan, and Equality Michigan Action Network. Focuses on infrastructure, natural resources, healthcare, school safety, and teacher recruitment.', status: 'challenger', grade: 'F', endorsements: [], positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' }, gradeJustifications: { proLife: 'Endorsed by Planned Parenthood Advocates of Michigan; supports reproductive freedom.', marriage: 'Endorsed by Equality Michigan Action Network; supports LGBTQ+ rights.', religiousLiberty: 'No record of championing religious liberty; endorsed by equality organizations.', secondAmendment: 'Focuses on gun safety and school safety; supported gun violence prevention legislation.', limitedGov: 'Endorsed by Sierra Club, multiple unions; supports expanded government regulation and programs.', fiscal: 'Endorsed by labor unions; supports increased government spending on education, healthcare, and infrastructure.' } },
      ],
    },
  },
  49: {
    office: "State House — District 49",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Ann M. Bollin', description: 'Incumbent Republican State Representative for HD-49 (Livingston and western Oakland Counties including Brighton, Walled Lake, Wixom, portions of Novi). First elected 2019. Chair of House Appropriations Committee (handles state budget). Endorsed by Right to Life of Michigan PAC, Michigan Freedom Network, Michigan Chamber of Commerce, Michigan Farm Bureau AgriPAC, and NFIB-Michigan. 33% environmental voting record (Michigan LCV) with 13 pro-environment and 26 anti-environment votes.', status: 'challenger', grade: 'A', endorsements: [], positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' }, gradeJustifications: { proLife: 'Endorsed by Right to Life of Michigan PAC; consistent pro-life voting record.', marriage: 'Conservative Republican with Christian conservative endorsements; supports traditional marriage.', religiousLiberty: 'Endorsed by Michigan Freedom Network; supports religious liberty.', secondAmendment: 'Conservative Republican; opposed Democratic gun control legislation.', limitedGov: '33% LCV score shows strong opposition to environmental regulation; endorsed by business groups advocating limited regulation.', fiscal: 'Chairs Appropriations Committee; endorsed by Michigan Chamber of Commerce, NFIB, Farm Bureau for fiscal conservatism.' } },
      ],
      democratic: [
        { name: 'Dan Pelchat', description: 'Democratic candidate for Michigan State House District 49 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  50: {
    office: "State House — District 50",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Jason Woolford', description: 'Incumbent Republican State Representative for HD-50 (Livingston County, Howell area). Assumed office January 1, 2025. Born in Howell, MI. U.S. Marine Corps veteran (1992-1995). CEO and business executive. Won 2024 Republican primary defeating incumbent Robert Bezotte and two other challengers. Won 2024 general election. Chairs House Oversight Subcommittee on State and Local Assistance Programs. Serves on Families and Veterans Committee and Oversight Subcommittee on Weaponization of State Government.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'A', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent; expected pro-life based on party alignment and conservative district.',
            marriage: 'Conservative Republican; expected to support traditional marriage.',
            religiousLiberty: 'Conservative Republican; expected to support religious liberty.',
            secondAmendment: 'Marine Corps veteran; serves on Weaponization of Government subcommittee; expected strong 2A support.',
            limitedGov: 'Business CEO and Marine vet who serves on oversight committees focused on government accountability; strong limited-government credentials.',
            fiscal: 'Business executive background suggests fiscal conservatism; chairs assistance programs oversight.'
          }
        },
      ],
      democratic: [
        { name: 'Cassie Canedo', description: 'Democratic candidate for Michigan State House District 50 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  51: {
    office: "State House — District 51",
    region: "Oakland County - Highland Twp, Milford, White Lake",
    incumbent: "Matt Maddock (R)",
    candidates: {
      republican: [
        { name: 'Matt Maddock', description: 'Incumbent Republican State Representative for HD-51 (Oakland County - Highland Twp, Milford, White Lake). Serving since 2019. Born December 10, 1965. Christian, private investigator, bail bondsman, and small business owner with 28 years of experience. Founder of Michigan Conservative Coalition. Introduced resolution to impeach Gov. Whitmer over COVID-19 shutdowns. Promoted claims about 2020 election fraud and protested at TCF Center. Present at January 5, 2021 rallies. Wife Meshawn Maddock is co-chair of Michigan Republican Party.', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Self-described Christian and founder of Michigan Conservative Coalition; strongly pro-life.',
            marriage: 'Christian conservative activist; strongly supports traditional marriage.',
            religiousLiberty: 'Christian conservative who founded Michigan Conservative Coalition; strongly supports religious liberty.',
            secondAmendment: 'Private investigator and bail bondsman; strongly supports Second Amendment rights.',
            limitedGov: 'Introduced impeachment resolution against governor over COVID lockdowns; founder of conservative coalition opposing government overreach.',
            fiscal: 'Founder of Michigan Conservative Coalition; opposes government spending expansion; small business owner for 28 years.'
          }
        },
      ],
      democratic: [
        { name: 'Stacey McDuffie', description: 'Democratic candidate for Michigan State House District 51 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Gary Murrell', description: 'Democratic candidate for Michigan State House District 51 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  52: {
    office: "State House — District 52",
    region: "Oakland County - Waterford, Commerce Twp area",
    incumbent: "Mike Harris (R)",
    candidates: {
      republican: [
        { name: 'Mike Harris', description: 'Incumbent Republican State Representative for HD-52 (Oakland County - Waterford, Commerce Twp, Lake Angelus, Clarkston, Independence Twp, portions of Springfield Twp). Serving since 2023; reelected 2024. 14% environmental voting record (Michigan LCV). Chairs House Insurance Committee, vice chairs Government Operations. Member of Economic Competitiveness and Judiciary committees. Majority Caucus Whip in House leadership. Voted against Elliott-Larsen Civil Rights Act expansion (HB 4003) despite supporting same-sex marriage personally.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent; expected pro-life based on party alignment and voting record.',
            marriage: 'Personally supports same-sex marriage but voted against HB 4003 (gender identity/sexual orientation nondiscrimination); mixed signals. Supported ban on trans students in university bathrooms.',
            religiousLiberty: 'Voted against Elliott-Larsen expansion which suggests support for religious exemptions; Republican alignment.',
            secondAmendment: 'Republican from suburban Oakland County; expected 2A support.',
            limitedGov: '14% LCV score shows strong opposition to environmental regulation; chairs Insurance Committee.',
            fiscal: 'Republican in House leadership (Majority Caucus Whip); expected fiscal conservative.'
          }
        },
      ],
      democratic: [
        { name: 'Brendan P. Leddy', description: 'Democratic candidate for Michigan State House District 52 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Tom Owensby', description: 'Democratic candidate for Michigan State House District 52 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  53: {
    office: "State House — District 53",
    region: "Oakland County - Pontiac, Auburn Hills area",
    incumbent: "Brenda Carter (D)",
    candidates: {
      republican: [
        { name: 'Melissa Schultz', description: 'Republican candidate for Michigan State House District 53 (Oakland County - Pontiac, Auburn Hills) in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Robert L. Anderlie', description: 'Democratic candidate for Michigan State House District 53 in the 2026 primary, challenging incumbent Brenda Carter. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Brenda Carter', description: 'Incumbent Democratic State Representative serving her fourth term in HD-53 (Pontiac, portions of Waterford and Auburn Hills, Oakland County). First woman to hold this seat. Previously served on Pontiac School Board. Resides in Pontiac with husband Randy. Established five district task force groups on veterans, poverty/homelessness, minority maternal health, and criminal justice reform. Chair and co-founder of bipartisan Poverty and Homelessness Caucus.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Four-term Democrat; voted with party on reproductive health legislation.',
            marriage: 'Democratic incumbent; voted with party on LGBTQ+ rights expansion.',
            religiousLiberty: 'No record of championing religious liberty; voted with Democratic caucus.',
            secondAmendment: 'Voted with Democratic majority on gun violence prevention legislation.',
            limitedGov: 'Created multiple government task forces; co-founded Poverty and Homelessness Caucus; supports expanded government role.',
            fiscal: 'Advocates for expanded government programs addressing poverty, homelessness, and maternal health.'
          }
        },
      ],
    },
  },
  54: {
    office: "State House — District 54",
    region: "Oakland County - Lake Orion, Bloomfield, Auburn Hills area",
    incumbent: "Donni Steele (R)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Roman Gaskey', description: 'Republican candidate for Michigan State House District 54 (Oakland County - Lake Orion, Bloomfield, Auburn Hills area) in the 2026 primary. Open seat as Donni Steele is running for State Senate. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Jeffrey M. Omtvedt', description: 'Republican candidate for Michigan State House District 54 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Sarah Pounds', description: 'Democratic candidate for Michigan State House District 54 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  55: {
    office: "State House — District 55",
    region: "Oakland County - Rochester Hills area",
    incumbent: "Mark Tisdel (R)",
    candidates: {
      republican: [
        { name: 'Mark Tisdel', description: 'Incumbent Republican State Representative for HD-55 (Oakland County - Rochester Hills area). Assumed office January 1, 2023. 21% environmental voting record (Michigan LCV). Bipartisan legislator with several bipartisan bills signed into law, including a law to protect online shoppers from scammers and legislation to get cellphones out of classrooms (passed with 99 yes votes). Tax Policy Committee work providing tax savings for small businesses. Chairs House Finance Committee, vice chairs Insurance Committee. Member of Health Policy and Regulatory Reform committees.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent; expected pro-life based on party alignment.',
            marriage: 'Moderate Republican from suburban Oakland County; expected to lean traditional but may be moderate.',
            religiousLiberty: 'No specific position found; Republican alignment suggests support.',
            secondAmendment: 'No specific position found; Republican alignment suggests support.',
            limitedGov: 'Sponsored tax savings for small businesses; 21% LCV score shows opposition to environmental regulation.',
            fiscal: 'Chairs Finance Committee; sponsored tax simplification and small business tax savings.'
          }
        },
      ],
      democratic: [
        { name: 'Alex Hawkins', description: 'Democratic candidate for Michigan State House District 55 in the 2026 primary. No detailed public information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  56: {
    office: "State House — District 56",
    region: "Oakland County - Madison Heights, Hazel Park area",
    incumbent: "Sharon MacDonell (D)",
    candidates: {
      republican: [
        { name: 'Ashok Baddi', description: 'Democrat-turned-Republican candidate for HD-56. Indian American community leader and longtime resident of Troy. Switched parties citing alignment with Republican values on education and gender issues. Immigrated from Hyderabad in 2005. Focuses on education reform, opposing efforts to scale back honors programs. Supports legal immigration pathways. Previously supported Democratic incumbent Sharon MacDonell.', status: 'challenger', grade: 'C',
          positions: { proLife: null, marriage: 'C', religiousLiberty: 'C', secondAmendment: null, limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'No public statements found on abortion or pro-life issues.',
            marriage: 'Switched to Republican Party citing alignment on gender issues, suggesting moderate traditional values; limited specific statements.',
            religiousLiberty: 'No specific statements found; party switch suggests some sympathy with religious liberty positions but unclear specifics.',
            secondAmendment: 'No public statements found on Second Amendment issues.',
            limitedGov: 'Former Democratic activist turned Republican; education-focused platform suggests moderate limited government views rather than strong convictions.',
            fiscal: 'No specific fiscal policy statements found; party switch to Republican suggests moderate fiscal conservative leanings.'
          }
        },
      ],
      democratic: [
        { name: 'Sharon MacDonell', description: 'Incumbent Democratic representative for HD-56. Represents SW Bloomfield Township, Troy, Birmingham, Clawson, and Royal Oak areas. Won 2024 re-election with 57% of the vote. 95% environmental voting record with Michigan LCV. Serves on Appropriations, Oversight, Administrative Rules, and Tax Policy committees. Has supported repealing abortion restrictions, expanding government programs, and progressive environmental policies.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supported repealing Michigan\'s abortion ban as part of the Democratic majority\'s historic reforms in 2023-2024. Consistently votes with pro-choice Democratic caucus.',
            marriage: 'Votes consistently with Democratic caucus on LGBTQ+ issues including marriage redefinition.',
            religiousLiberty: 'No specific religious liberty defense record found; votes with Democratic caucus which has generally opposed religious exemptions.',
            secondAmendment: 'Votes with Democratic caucus on gun control measures passed in 2023-2024 including red flag laws and universal background checks.',
            limitedGov: '95% LCV score indicates support for extensive environmental regulation. Supports expanded government programs and services.',
            fiscal: 'Supports repealing pension tax (reducing revenue), expanding free school meals, and other increased spending programs.'
          }
        },
      ],
    },
  },
  57: {
    office: "State House — District 57",
    region: "Oakland/Macomb - Sterling Heights, Troy, Madison Heights",
    incumbent: "Thomas E. Kuhn (R)",
    candidates: {
      republican: [
        { name: 'Thomas E. Kuhn', description: 'Incumbent Republican representative for HD-57 covering Sterling Heights, Troy, and Madison Heights. Lawyer with degrees from University of Detroit Mercy School of Law and Wayne State University. Won 2024 election with 50.3% in competitive swing district. 14% LCV environmental score indicating conservative voting record. Serves on Insurance and Financial Services, Judiciary, and Tax Policy committees.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Votes with Republican caucus; 14% LCV score suggests conservative voting pattern across issues. No specific pro-life endorsements documented.',
            marriage: 'Republican representative in swing district; votes with caucus on social issues but limited specific statements on marriage.',
            religiousLiberty: 'Votes with Republican caucus; no specific religious liberty legislation highlighted.',
            secondAmendment: 'Votes with Republican caucus opposing Democratic gun control measures; no specific 2A endorsements found.',
            limitedGov: '14% environmental score indicates opposition to regulatory expansion. Votes against Democratic spending proposals.',
            fiscal: 'Votes with Republican caucus against Democratic budget proposals; limited specific fiscal policy positions beyond party-line votes.'
          }
        },
      ],
      democratic: [
        { name: 'Tom Turner', description: 'Democratic challenger for HD-57. No significant public information found on policy positions or background.', status: 'challenger', grade: 'F',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  58: {
    office: "State House — District 58",
    region: "Macomb County - majority of Sterling Heights",
    incumbent: "Ron Robinson (R)",
    candidates: {
      republican: [
        { name: 'Ron Robinson', description: 'Incumbent Republican representative for HD-58, covering most of Sterling Heights in Macomb County. First elected in 2024, defeating incumbent Democrat Nate Shannon. Chairs the House Appropriations Subcommittee on Military and Veterans Affairs. 0% LCV environmental score in 2025. Supports voter ID requirements, full funding for law enforcement, and anti-opioid legislation.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican caucus member; 0% LCV score suggests consistent conservative voting. No specific pro-life endorsements found.',
            marriage: 'Votes with Republican caucus; limited specific statements on marriage issues.',
            religiousLiberty: 'No specific statements found; votes consistently with conservative Republican caucus.',
            secondAmendment: 'Supports law enforcement legislation; votes with Republican caucus opposing gun control. No specific 2A endorsements found.',
            limitedGov: '0% LCV environmental score indicates strong opposition to regulatory expansion. Supports voter ID and law enforcement funding.',
            fiscal: 'Freshman Republican with conservative fiscal leanings; chairs Military and Veterans Affairs appropriations subcommittee.'
          }
        },
      ],
      democratic: [
        { name: 'Katrina Manetta', description: 'Democratic challenger for HD-58. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  59: {
    office: "State House — District 59",
    region: "Macomb County",
    incumbent: "Sylvia Grot (R)",
    candidates: {
      republican: [
        { name: 'Sylvia Grot', description: 'Macomb County Commissioner (District 3) since 2022 representing Shelby Township and Utica. Running for State House HD-59. Self-described \'common sense conservative\' who believes government should not spend money it does not have. Pledged no new taxes or fees. Married to Shelby Township Clerk Stanley Grot. Active Republican precinct delegate for 16 years, served on 10th Congressional District Executive Committee and Michigan Republican Party State Committee. Chair of Macomb Orchard Trail Commission.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Conservative Republican in Macomb County; no specific pro-life endorsements found but party alignment suggests pro-life leanings.',
            marriage: 'Conservative Republican activist for 16+ years; limited specific statements but party involvement suggests traditional marriage support.',
            religiousLiberty: 'Long-time Republican activist; no specific religious liberty statements found.',
            secondAmendment: 'Conservative Republican in Macomb County; no specific 2A endorsements found.',
            limitedGov: 'Core philosophy is that \'government should not spend money that it does not have.\' Pledged no new taxes or fees. Strong limited government credentials.',
            fiscal: 'Explicit pledge of no new taxes or fees. Conservative fiscal philosophy is central to her governing approach.'
          }
        },
        { name: 'Matt Grubb', description: 'Republican challenger for HD-59 primary. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Jean Zott', description: 'Republican challenger for HD-59. Retired controller, CPA, and small business owner. Worked for Joe Randazzo\'s Fruit & Vegetable, Inc. for 30 years as controller. Currently owns an accounting and tax practice. 26-year resident of Shelby Township. Previously ran in 2024 Republican primary but lost.', status: 'challenger', grade: 'B',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'B', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'No specific statements found on pro-life issues.',
            marriage: 'No specific statements found.',
            religiousLiberty: 'No specific statements found.',
            secondAmendment: 'No specific statements found.',
            limitedGov: 'Small business owner and CPA background suggests limited government philosophy; running as Republican in conservative Macomb County district.',
            fiscal: 'CPA and controller with 30 years of financial management experience. Small business owner with strong fiscal management background.'
          }
        },
      ],
      democratic: [
        { name: 'Jason Robbins', description: 'Democratic challenger for HD-59. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  60: {
    office: "State House — District 60",
    region: "Macomb County",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: 'Joseph Aragona', description: 'Incumbent Republican representative for HD-60 covering northern Clinton Township and Macomb Township. First elected in 2022. Lifelong Macomb County resident. BS in Biomedical Diagnostics from Oakland University, Executive MBA from Michigan State University. Served on Clinton Township Board of Trustees 2016-2020. Potential candidate for US House MI-10 in 2026.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent in conservative Macomb County; votes with Republican caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements on marriage issues.',
            religiousLiberty: 'No specific religious liberty statements found; votes with Republican caucus.',
            secondAmendment: 'Votes with Republican caucus opposing gun control; no specific 2A endorsements found.',
            limitedGov: 'Republican representative with business background (MBA); supports limited government as part of caucus positions.',
            fiscal: 'Business-oriented Republican with MBA from MSU; votes with caucus on fiscal issues.'
          }
        },
      ],
      democratic: [
        { name: 'Amy Gray', description: 'Democratic challenger for HD-60. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  61: {
    office: "State House — District 61",
    region: "Macomb - SE Sterling Heights, Clinton Twp, Mt Clemens",
    incumbent: "Denise Mentzer (D)",
    candidates: {
      republican: [
        { name: 'John Grossenbacher', description: 'Republican challenger for HD-61. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Robert Wojtowicz', description: 'Republican challenger for HD-61. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Mahbube Khan', description: 'Democratic challenger for HD-61. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Denise Mentzer', description: 'Incumbent Democratic representative for HD-61 covering SE Sterling Heights, Clinton Twp, and Mt. Clemens. 25 years of employment with Macomb County. Born in Mt. Clemens. Education: L\'Anse Creuse High School, Macomb Community College (AA), Baker College (BA), Grand Valley University. 94% LCV environmental score. Won re-election in 2024.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: '94% LCV score indicates consistent progressive voting. Votes with Democratic caucus which supported repealing abortion restrictions.',
            marriage: 'Votes consistently with Democratic caucus on social issues including LGBTQ+ legislation.',
            religiousLiberty: 'No specific religious liberty statements; votes with Democratic caucus which has generally not prioritized religious exemptions.',
            secondAmendment: 'Votes with Democratic caucus supporting gun control legislation including red flag laws and universal background checks.',
            limitedGov: '94% LCV environmental score indicates support for extensive government regulation. Supports expanded government programs.',
            fiscal: 'Votes with Democratic caucus on expanded spending programs; supports increased government services.'
          }
        },
      ],
    },
  },
  62: {
    office: "State House — District 62",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Alicia St. Germaine', description: 'Incumbent Republican representative for HD-62 covering Fraser, portions of Chesterfield and Clinton townships, Roseville, and Mount Clemens. Won 2024 re-election with 52.9% of the vote. Previously served on the Sterling Heights City Council (2021-2024). 25 years as a small business consultant helping companies improve operations and profitability. Serves on Commerce and Tourism, Government Operations, and Housing committees.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent; votes with conservative caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements on marriage issues.',
            religiousLiberty: 'No specific religious liberty statements found; votes with Republican caucus.',
            secondAmendment: 'Votes with Republican caucus opposing gun control measures. No specific 2A endorsements found.',
            limitedGov: '25 years as small business consultant; supports limited government policies through Republican caucus votes.',
            fiscal: 'Small business background; votes with Republican caucus on fiscal issues.'
          }
        },
      ],
      democratic: [
        { name: 'Phil Anosike', description: 'Democratic challenger for HD-62. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Craig Plesco', description: 'Democratic challenger for HD-62. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Matthew Smith', description: 'Democratic challenger for HD-62. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  63: {
    office: "State House — District 63",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Jay DeBoyer', description: 'Incumbent Republican representative for HD-63, in his second term. District encompasses southern St. Clair County and northern Macomb County. From Clay Township. Elected by House Republicans as Associate Speaker Pro-Tempore for 2025-26 term. Graduated Algonac High School 1988. Owns an engineered lumber business. Formerly served as St. Clair County Clerk and Register of Deeds, and Clay Township Trustee and Supervisor.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican caucus leader (Associate Speaker Pro-Tempore); votes with conservative caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements on marriage issues.',
            religiousLiberty: 'No specific religious liberty statements found; votes with Republican caucus.',
            secondAmendment: 'Votes with Republican caucus opposing gun control; no specific 2A endorsements found.',
            limitedGov: 'Small business owner; elected to Republican leadership position indicating conservative credentials within caucus.',
            fiscal: 'Business owner background; selected for leadership by Republican colleagues suggesting fiscal conservative alignment.'
          }
        },
      ],
      democratic: [
        { name: 'Robert Kelly McFarland', description: 'Democratic challenger for HD-63. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Jamie Sonneberger', description: 'Democratic challenger for HD-63. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  64: {
    office: "State House — District 64",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Joseph G. Pavlov', description: 'Republican representative for HD-64 covering Port Huron and St. Clair County areas. First elected November 2024, defeating incumbent Democrat Nate Shannon by 450 votes. Served 12 years as president of Right to Life of St. Clair County. Also serves as executive board member of the People\'s Political Action Committee for the Election of Responsible Representatives. On the House Election Integrity committee and Commerce and Tourism committee. Career public school teacher with nearly 50 years of marriage.', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Served 12 years as president of Right to Life of St. Clair County. This is the strongest pro-life credential among HD-64 candidates.',
            marriage: 'Long-time Right to Life leader married 50+ years; strong traditional family values background. Serves on People\'s PAC executive board.',
            religiousLiberty: 'Right to Life leader for 12 years; serves on Election Integrity committee. Strong values-based credentials.',
            secondAmendment: 'Republican representative in conservative St. Clair County district; no specific 2A endorsements documented but caucus votes support gun rights.',
            limitedGov: 'Serves on Election Integrity committee suggesting concern about government accountability; limited specific limited government statements.',
            fiscal: 'Long career as public school teacher; limited specific fiscal conservative statements but Republican caucus member.'
          }
        },
      ],
      democratic: [
        { name: 'Ken Heuvelman', description: 'Democratic challenger for HD-64. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  65: {
    office: "State House — District 65",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Jaime Greene', description: 'Incumbent Republican representative for HD-65 covering eastern Lapeer, western St. Clair, and northern Macomb counties. First elected 2022, re-elected 2024. From Richmond. U.S. Navy veteran (1996-1999). BA Communications from Oakland University, MA Human Services from Liberty University. Chairs House Communications and Technology Committee. Serves on Oversight Committee including Vice Chair of Corporate Subsidies subcommittee.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent; votes with conservative caucus. Liberty University graduate suggests traditional values alignment.',
            marriage: 'Liberty University graduate; votes with Republican caucus. Limited specific statements on marriage issues.',
            religiousLiberty: 'Liberty University MA degree indicates strong faith-based values; votes with Republican caucus on religious liberty issues.',
            secondAmendment: 'Navy veteran; votes with Republican caucus opposing gun control. Military background provides strong 2A signal.',
            limitedGov: 'Vice Chair of Corporate Subsidies and State Investments subcommittee suggesting interest in government accountability. Votes with Republican caucus.',
            fiscal: 'Serves on Oversight committee; Republican caucus member voting against Democratic spending proposals.'
          }
        },
      ],
      democratic: [
        { name: 'James Andonoff', description: 'Democratic challenger for HD-65. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: "James M. O'Brien", description: 'Democratic challenger for HD-65. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  66: {
    office: "State House — District 66",
    region: "Livingston/Wayne area",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: 'Josh Schriver', description: 'Incumbent Republican representative for HD-66 covering Bruce and Washington townships in Macomb County and Addison, Brandon, Oakland, and Oxford townships in Oakland County. From Oxford. Born in Warren. Kindergarten teacher who designs programs for children with Autism. BS Michigan State University 2015, MA in Psychology. Endorsed by Right to Life of Michigan PAC. Re-elected in 2024. Strongly pro-life: supports criminal penalties for partial birth abortion, abstinence education, defunding Planned Parenthood, pregnancy center grants, and freedom of conscience protections.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Right to Life of Michigan PAC endorsed. Supports criminalizing partial birth abortion, defunding Planned Parenthood, abstinence education, pregnancy center grants, and freedom of conscience protections for employers.',
            marriage: 'Supports protecting integrity of women\'s sports and prohibiting boys from entering girls\' restrooms, indicating strong traditional values on gender issues.',
            religiousLiberty: 'Explicitly supports \'restoring freedom of conscience protections for employers.\' Strong religious liberty advocate.',
            secondAmendment: 'Conservative Republican with strong stance on school safety (supports SRO funding). Votes with Republican caucus opposing gun control.',
            limitedGov: 'Opposes critical race theory in schools, supports parental rights. Strong limited government conservative.',
            fiscal: 'No specific fiscal policy statements beyond general Republican caucus alignment.'
          }
        },
      ],
      democratic: [
        { name: 'Ned Zimmer', description: 'Democratic challenger for HD-66. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  67: {
    office: "State House — District 67",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Phil Green', description: 'Incumbent Republican representative for HD-67 covering Lapeer and Genesee County areas. Born in Millington. BA in Youth Ministries and MA in Biblical Expositions from Pensacola Christian College. Career minister. Board member of Michigan Coalition for Responsible Gun Owners and served as Chair of 2nd Amendment Caucus in the Legislature. Chair of ALEC Energy, Environment and Agriculture Committee. Re-elected 2024.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Minister with degrees from Pensacola Christian College; strong faith-based values indicate strong pro-life stance.',
            marriage: 'Minister with theological education from Pensacola Christian College; strong traditional values background.',
            religiousLiberty: 'Career minister with theological degrees; serves as ALEC committee chair. Strong religious liberty credentials.',
            secondAmendment: 'Board member of Michigan Coalition for Responsible Gun Owners. Chair of 2nd Amendment Caucus in the Legislature. Strongest 2A credentials among all candidates.',
            limitedGov: 'Chair of ALEC Energy, Environment and Agriculture Committee. ALEC membership indicates strong limited government philosophy.',
            fiscal: 'ALEC committee chair suggests fiscal conservative orientation; limited specific fiscal statements found.'
          }
        },
      ],
      democratic: [
        { name: 'Leslie Getz', description: 'Democratic challenger for HD-67. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  68: {
    office: "State House — District 68",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'David W. Martin', description: 'Incumbent Republican representative for HD-68 covering portions of Genesee and Oakland counties. Born May 12, 1961. U.S. Air Force veteran with 20 years of service. Previously served as Davison Township Supervisor and on Genesee County Board of Commissioners (District 3). Won 2024 re-election with 59% of the vote. Serves on Energy, Communications, and Technology committee and Health Policy committee.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican representative; votes with conservative caucus. Limited specific pro-life statements found.',
            marriage: 'Votes with Republican caucus; limited specific statements on marriage issues.',
            religiousLiberty: 'No specific religious liberty statements found; votes with Republican caucus.',
            secondAmendment: '20-year Air Force veteran; military background provides strong 2A signal. Votes with Republican caucus opposing gun control.',
            limitedGov: 'Former County Commissioner and City Council member; Republican caucus member but limited specific limited government statements.',
            fiscal: 'Local government experience; votes with Republican caucus on fiscal issues.'
          }
        },
      ],
      democratic: [
        { name: 'Isaiah Grays', description: 'Democratic challenger for HD-68. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Matt Schlinker', description: 'Democratic challenger for HD-68. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  69: {
    office: "State House — District 69",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Patrick Duvendeck', description: 'Republican challenger for HD-69 in West Central Genesee County. Ran in 2024 general election, losing to incumbent Democrat Jasper Martus 44-56%. Running again in 2026. Limited public policy positions available.', status: 'challenger', grade: 'C',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No specific statements found; Republican candidate in Genesee County district.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Jasper Ryan Martus', description: 'Incumbent Democratic representative for HD-69 in West Central Genesee County including Clio, Flushing, Montrose, Mount Morris, and Swartz Creek. Won re-election in 2024 with 56% of the vote. Votes with Democratic caucus.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Votes with Democratic caucus which supported repealing abortion restrictions in 2023-2024.',
            marriage: 'Votes consistently with Democratic caucus on LGBTQ+ legislation.',
            religiousLiberty: 'No specific statements; votes with Democratic caucus which has generally not supported religious exemptions.',
            secondAmendment: 'Votes with Democratic caucus supporting gun control legislation.',
            limitedGov: 'Votes with Democratic caucus supporting expanded government regulation and programs.',
            fiscal: 'Votes with Democratic caucus on increased spending programs.'
          }
        },
      ],
    },
  },
  70: {
    office: "State House — District 70",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Larry Hutchinson', description: 'Republican challenger for HD-70. Has previously run for various offices in Michigan including Governor (2018). Limited specific policy information available for this race.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No specific information found for this race.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Cynthia R. Neeley', description: 'Incumbent Democratic representative for HD-70 covering Flint area. Wife of Flint Mayor Sheldon Neeley. Won 2024 re-election with 75% of the vote in heavily Democratic district. 87% LCV environmental score. Campaigned on supporting schools, promoting gun safety, rebuilding Michigan\'s infrastructure, fighting for clean water, expanding healthcare access, and ensuring fair wages. Serves on Health Policy and Regulatory Reform committees.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Votes with Democratic caucus which supported repealing abortion restrictions. 87% LCV score indicates progressive voting record.',
            marriage: 'Votes consistently with Democratic caucus on social issues.',
            religiousLiberty: 'No specific statements; votes with Democratic caucus.',
            secondAmendment: 'Explicitly supports \'gun safety\' and \'crime prevention\' legislation, indicating support for gun control measures.',
            limitedGov: '87% LCV score. Supports expanded government programs for healthcare, education, and water infrastructure.',
            fiscal: 'Supports increased government spending on schools, healthcare, infrastructure, and fair wage mandates.'
          }
        },
      ],
    },
  },
  71: {
    office: "State House — District 71",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Brian BeGole', description: 'Incumbent Republican representative for HD-71 covering Shiawassee County including Corunna, Durand, Owosso, and Perry. In second term, first elected 2022. Former Shiawassee County Sheriff with 32 years in law enforcement, including 6 as Sheriff. Chairs House Government Operations Committee. Vice Chair of House Judiciary Committee. Also serves on Economic Competitiveness and Energy committees. 14% LCV environmental score.', status: 'challenger', grade: 'A',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'A', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Conservative Republican incumbent; votes with caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements.',
            religiousLiberty: 'No specific religious liberty statements found; votes with conservative Republican caucus.',
            secondAmendment: '32-year law enforcement veteran and former Sheriff. Strong pro-law enforcement and pro-2A credentials based on career.',
            limitedGov: 'Chairs Government Operations Committee. 14% LCV environmental score indicating strong opposition to regulatory expansion. Former Sheriff with government accountability focus.',
            fiscal: 'Republican caucus member voting against Democratic spending; limited specific fiscal statements.'
          }
        },
      ],
      democratic: [
        { name: 'Stephen Schlaack', description: 'Democratic challenger for HD-71. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  72: {
    office: "State House — District 72",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Mike Mueller', description: 'Incumbent Republican representative for HD-72 covering Fenton, Linden, portions of Grand Blanc and Mundy townships in Genesee County, Holly area in Oakland County, and Tyrone Township in Livingston County. First elected 2022, re-elected 2024. Linden High School graduate (1992). U.S. Navy veteran. Degree in Criminology and Criminal Justice from Eastern Michigan University. Operates Mueller\'s Orchard and Cider Mill, owns wedding venue. Former road patrol deputy and SWAT team member. Chairs House Appropriations Subcommittee on Michigan State Police.', status: 'challenger', grade: 'A',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Conservative Republican incumbent; votes with caucus. Limited specific pro-life statements.',
            marriage: 'Votes with Republican caucus; limited specific statements.',
            religiousLiberty: 'No specific religious liberty statements found; votes with Republican caucus.',
            secondAmendment: 'Navy veteran, former road patrol deputy and SWAT team member. Strong law enforcement and military background provides excellent 2A credentials.',
            limitedGov: 'Small business owner (orchard, wedding venue); chairs Michigan State Police appropriations subcommittee.',
            fiscal: 'Business owner and appropriations committee member; votes with Republican caucus on fiscal issues.'
          }
        },
      ],
      democratic: [
        { name: 'Thomas Ryan', description: 'Democratic challenger for HD-72. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  73: {
    office: "State House — District 73",
    region: "Ingham County - East Lansing area",
    incumbent: "Julie Brixie (D)",
    candidates: {
      republican: [
        { name: 'Daniel L. Ewart', description: 'Republican challenger for HD-73. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Norm Grant', description: 'Republican challenger for HD-73. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Joshua Jon Rockey', description: 'Republican challenger for HD-73. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Julie Brixie', description: 'Incumbent Democratic representative for HD-73 covering East Lansing area in Ingham County. Won re-election 2024. 87% LCV environmental score (2019-2026). 18 years in local government before state legislature. Serves on Appropriations, Oversight, Administrative Rules, and Tax Policy committees. Opposes school vouchers, advocates for free school meals, repealed pension tax, supported repealing abortion ban. Touts MSU research and agricultural diversity.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Explicitly supported repealing Michigan\'s abortion ban as part of Democrats\' \'historic reforms.\' Strongly pro-choice.',
            marriage: 'Votes consistently with progressive Democratic caucus on LGBTQ+ and social issues.',
            religiousLiberty: 'Opposes school vouchers for private (including religious) schools. Not a supporter of DeVos education agenda. No religious liberty advocacy found.',
            secondAmendment: 'Votes with Democratic caucus on gun control measures including red flag laws and universal background checks.',
            limitedGov: '87% LCV score. Criticizes \'Republican control\' for underfunding education and infrastructure, advocates for increased government spending and programs.',
            fiscal: 'Supports free school breakfast and lunch, repealing pension tax (reducing revenue), increased education spending, and expanded government programs.'
          }
        },
      ],
    },
  },
  74: {
    office: "State House — District 74",
    region: "Ingham County - Lansing",
    incumbent: "Open",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Clinton Tarver', description: 'Republican challenger for HD-74 in Lansing area. No significant public policy information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Aaron Iturralde', description: 'Democratic challenger for HD-74. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Harold A. Pope', description: 'Democratic challenger for HD-74. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'TyJuan Thirdgill', description: 'Democratic challenger for HD-74. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  75: {
    office: "State House — District 75",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Frank Lambert', description: 'Republican challenger for HD-75. Age 58, graduated Haslett High School 1984. Has worked at General Motors Lansing Delta Township plant for 22 years in quality control. Most passionate about education reform, calling for an entire redesign of the K-12 education system. Ran in 2024, lost to incumbent Tsernoglou.', status: 'challenger', grade: 'C',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null },
          gradeJustifications: {
            proLife: 'No specific statements found on abortion issues.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'Advocates education system redesign suggesting desire for reform but from a blue-collar working perspective rather than ideological limited government stance.',
            fiscal: 'No specific fiscal policy statements found.'
          }
        },
      ],
      democratic: [
        { name: 'Penelope Tsernoglou', description: 'Incumbent Democratic representative for HD-75. First elected 2022, re-elected 2024. 95% LCV environmental score. Serves on various committees. Votes consistently with progressive Democratic caucus.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: '95% LCV score indicates consistent progressive voting. Votes with Democratic caucus which repealed abortion restrictions.',
            marriage: 'Votes consistently with Democratic caucus on LGBTQ+ legislation.',
            religiousLiberty: 'No specific statements; votes with Democratic caucus which has not prioritized religious exemptions.',
            secondAmendment: 'Votes with Democratic caucus supporting gun control legislation.',
            limitedGov: '95% LCV score indicates support for extensive environmental regulation and government programs.',
            fiscal: 'Votes with Democratic caucus on increased spending programs.'
          }
        },
      ],
    },
  },
  76: {
    office: "State House — District 76",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Bill Kaiser', description: 'Republican challenger for HD-76. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'John P. Ludtke', description: 'Republican challenger for HD-76. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Angela Witwer', description: 'Incumbent Democratic representative for HD-76 since 2023. 77% LCV environmental score (2019-2026). 22 years in clinical healthcare at Sparrow Hospital including burn unit and pediatric rehabilitation. Later became manager of Sparrow Hospital community relations. Has cast 3,800 votes, sponsored 89 bills. Serves on Health Policy, Regulatory Reform, Rules committees.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: '77% LCV score. Votes with Democratic caucus which repealed abortion restrictions.',
            marriage: 'Votes consistently with Democratic caucus on social issues.',
            religiousLiberty: 'No specific statements; votes with Democratic caucus.',
            secondAmendment: 'Votes with Democratic caucus supporting gun control measures.',
            limitedGov: '77% LCV score indicating support for regulatory expansion. Healthcare background may inform support for government health programs.',
            fiscal: 'Slightly lower LCV score than most Democrats (77%) suggests moderate fiscal positions within the caucus, but still votes for increased spending.'
          }
        },
      ],
    },
  },
  77: {
    office: "State House — District 77",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Sally Jo Nelton', description: 'Republican challenger for HD-77. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Emily Dievendorf', description: 'Incumbent Democratic representative for HD-77. First elected 2022, re-elected 2024. First openly nonbinary Michigan state representative. Bisexual. 100% LCV environmental score with 22 pro-environment votes and zero anti-environment votes. 20+ years of advocacy on LGBTQIA equality, racial justice, sexual/domestic violence, women\'s rights, immigration, voting rights, and HIV/AIDS. Supports gun control including pushing back against \'irresponsible gun sales\' and community programs to prevent gun violence. Took pledge not to accept utility company donations.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: '100% LCV score. Strong LGBTQIA and women\'s rights advocate. Votes with progressive Democratic caucus on all reproductive issues.',
            marriage: 'First openly nonbinary state representative. 20+ years of LGBTQIA equality advocacy. Strongly supports marriage redefinition.',
            religiousLiberty: 'Strong advocate for LGBTQ+ rights which often conflicts with religious liberty exemptions. No religious liberty advocacy found.',
            secondAmendment: 'Explicitly supports \'responsible gun ownership and reforms that push back against irresponsible gun sales and ownership practices.\' Supports community gun violence prevention programs.',
            limitedGov: '100% LCV environmental score. Advocates for extensive government action on racial justice, immigration, voting rights, domestic violence, and HIV/AIDS.',
            fiscal: 'Supports extensive government programs across many policy areas. Progressive spending priorities.'
          }
        },
      ],
    },
  },
  78: {
    office: "State House — District 78",
    region: "Eaton/Barry area",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: 'Terence M. Frewen', description: 'Republican candidate for HD-78 in open seat race (Eaton/Barry area). Ionia County Commissioner. Running in competitive Republican primary. Limited public information on specific policy positions beyond county government experience.', status: 'challenger', grade: 'B',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'No specific statements found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'County commissioner experience; running as Republican in conservative rural district.',
            fiscal: 'County government experience suggests fiscal awareness; running as Republican in rural district.'
          }
        },
        { name: 'Kaleb M. Hudson', description: 'Republican candidate for HD-78. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Miguel Pilar', description: 'Republican candidate for HD-78. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Brandon L. Strong', description: 'Republican candidate for HD-78. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Rachel Gross', description: 'Democratic challenger for HD-78. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  79: {
    office: "State House — District 79",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Angela Rigas', description: 'Incumbent Republican representative for HD-79 covering portions of Allegan, Barry, and Kent counties. First elected 2022. 2023 CPAC Foundation Conservative Excellence Award with 96% conservative rating. 10% LCV environmental score. Long-time grassroots advocate for Second Amendment, Parental, and Voting rights. Chairs Oversight Subcommittee on Weaponization of State Government. Vice Chair of Oversight Subcommittee on Child Welfare System. Serves on Regulatory Reform committee.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: '96% CPAC conservative rating. Chairs Child Welfare subcommittee indicating family values focus. Strong conservative credentials across the board.',
            marriage: '96% CPAC conservative rating. Family values conservative; parental rights advocate.',
            religiousLiberty: '96% CPAC conservative rating. Chairs Subcommittee on Weaponization of State Government, indicating concern about government overreach including against religious institutions.',
            secondAmendment: 'Self-described \'long-time grassroots advocate for Second Amendment rights.\' Explicit 2A defender.',
            limitedGov: '96% CPAC rating, 10% LCV score. Chairs Subcommittee on Weaponization of State Government. Strong limited government advocate.',
            fiscal: '96% CPAC conservative rating across all issues including fiscal policy. Serves on Regulatory Reform committee.'
          }
        },
      ],
      democratic: [
        { name: 'Zach Abbott', description: 'Democratic challenger for HD-79. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  80: {
    office: "State House — District 80",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Doug Lee', description: 'Republican challenger for HD-80. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Lily Cheng-Schulting', description: 'Democratic challenger for HD-80. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Kristen Fauson', description: 'Democratic challenger for HD-80. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Kris Pachla', description: 'Democratic challenger for HD-80. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  81: {
    office: "State House — District 81",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Holly DeBoer', description: 'Republican challenger for HD-81. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Stephen Wooden', description: 'Democratic challenger for HD-81. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  82: {
    office: "State House — District 82",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Ryan Malinoski', description: 'Republican challenger for HD-82 in Calhoun County including Battle Creek, Springfield, and Albion. Ran in 2024, lost to incumbent Kristian Grant with only 25% of the vote. Limited policy positions available.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Kristian C. Grant', description: 'Incumbent Democratic representative for HD-82 in Calhoun County (Battle Creek). Won re-election in 2024 with 75% of the vote. Votes consistently with Democratic caucus on all major issues. Limited specific policy statements available beyond party-line voting record.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Votes with Democratic caucus which repealed abortion restrictions.',
            marriage: 'Votes consistently with Democratic caucus on social issues.',
            religiousLiberty: 'Votes with Democratic caucus; no religious liberty advocacy found.',
            secondAmendment: 'Votes with Democratic caucus supporting gun control measures.',
            limitedGov: 'Votes with Democratic caucus supporting expanded government programs.',
            fiscal: 'Votes with Democratic caucus on increased spending.'
          }
        },
        { name: 'Robert Womack', description: 'Democratic challenger for HD-82. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  83: {
    office: "State House — District 83",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Cindy Ramirez', description: 'Republican candidate for HD-83 in southwestern Kent County (Wyoming, Grand Rapids). Proud West Michigan native, GRCC alumni, daughter of a migrant worker. Business owner. Focuses on supporting local businesses, good-paying jobs, investing in schools and education, and infrastructure (roads, broadband, clean water).', status: 'challenger', grade: 'C',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' },
          gradeJustifications: {
            proLife: 'No specific statements found on abortion issues.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'Platform focuses on infrastructure investment and school funding which suggests moderate approach to government spending rather than strict limited government philosophy.',
            fiscal: 'Business owner but platform emphasizes government investment in education, infrastructure, and broadband rather than tax cuts or spending reduction.'
          }
        },
      ],
      democratic: [
        { name: 'John Fitzgerald', description: 'Democratic challenger for HD-83. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  84: {
    office: "State House — District 84",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Drew Jake Robbins', description: 'Republican candidate for HD-84. First Ward Commissioner in Grand Rapids. Limited specific state-level policy positions available but holds local government experience.', status: 'challenger', grade: 'B',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'No specific statements found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'Republican city commissioner in Grand Rapids; local government experience.',
            fiscal: 'Local government experience as city commissioner; running as Republican.'
          }
        },
      ],
      democratic: [
        { name: 'Justin L. Rackham', description: 'Democratic challenger for HD-84. Ran in 2024 Democratic primary, receiving only 6.5% of the vote.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Khristian Silvis', description: 'Democratic challenger for HD-84. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  85: {
    office: "State House — District 85",
    region: "Ottawa County",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: 'Jason Ickes', description: 'Republican candidate for HD-85 but WITHDREW on 4/21/2026. Combat veteran, Green Beret. Father of four. Self-described Christian, Constitutional Conservative, and Fair Elections Advocate. From Jenison. After leaving Army in 2017, completed BS in Cyber Security. Also has trade skills in carpentry, electrical, and plumbing. Previously ran for US House MI-3.', status: 'challenger', grade: 'B',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Self-described Christian and Constitutional Conservative. Strong values-based credentials.',
            marriage: 'Christian conservative with traditional family values (father of four).',
            religiousLiberty: 'Self-described Christian and Constitutional Conservative; likely strong religious liberty supporter.',
            secondAmendment: 'Combat veteran and Green Beret. Military special forces background provides strongest possible 2A credentials.',
            limitedGov: 'Self-described Constitutional Conservative and Fair Elections Advocate. Strong limited government philosophy.',
            fiscal: 'No specific fiscal statements found; constitutional conservative orientation suggests fiscal conservatism.'
          }
        },
        { name: "John C. O'Brien", description: 'Republican candidate for HD-85. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Bradley Slagh', description: 'Incumbent Republican representative for HD-85 covering parts of Ottawa County including Georgetown, Zeeland Township, Hudsonville, and Zeeland. First elected 2018, re-elected 2024. Former Zeeland Township Supervisor (5+ years) and Ottawa County Treasurer (11 years). 18 years in financial services at First Michigan Bank and Byron Center State Bank. Licensed realtor and supervising partner of family property management business. Married 37 years.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Republican in deeply conservative Ottawa County; votes with Republican caucus. No specific pro-life endorsements documented.',
            marriage: 'Married 37 years; conservative Republican in Ottawa County. Traditional values expected.',
            religiousLiberty: 'Conservative Republican in deeply religious Ottawa County (Dutch Reformed heritage); votes with caucus.',
            secondAmendment: 'Votes with Republican caucus opposing gun control; no specific 2A endorsements found.',
            limitedGov: 'Former Township Supervisor and County Treasurer with extensive local government experience; Republican caucus member.',
            fiscal: '11 years as Ottawa County Treasurer and 18 years in financial services. Strong fiscal management credentials. Family business owner.'
          }
        },
      ],
      democratic: [
        { name: 'Richard Abraham', description: 'Democratic challenger for HD-85. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  86: {
    office: "State House — District 86",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Nancy DeBoer', description: 'Incumbent Republican representative for HD-86 covering greater Holland area in Allegan and Ottawa counties. First elected 2022, re-elected 2024 with 56%. Former middle and high school English teacher. First woman elected mayor of Holland in 2015, serving two terms. Holland City Council member since 2005. Co-founded West Michigan Character Council in 2002, served as executive director 17 years. Chairs House Education and Workforce Committee. Also serves on Energy, Health Policy, and Rules committees.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Conservative Republican in deeply conservative Holland/Ottawa County area. Character Council co-founder suggesting strong values orientation. Dutch Reformed community.',
            marriage: 'Co-founded West Michigan Character Council (17 years as ED). Strong traditional values and character education background in conservative Holland community.',
            religiousLiberty: 'Holland, Michigan has strong Dutch Reformed heritage. Character Council co-founder. Conservative Republican in religious community.',
            secondAmendment: 'Votes with Republican caucus opposing gun control; no specific 2A endorsements found.',
            limitedGov: 'Former mayor and city council member with local government experience. Chairs Education and Workforce committee.',
            fiscal: 'Local government experience as mayor; votes with Republican caucus on fiscal issues.'
          }
        },
      ],
      democratic: [
        { name: 'Joseph McClusky', description: 'Democratic challenger for HD-86. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  87: {
    office: "State House — District 87",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Cody A. Chipman', description: 'Republican challenger for HD-87 in Muskegon County. Michigan Republican Party State Committeeman. Data Collection Specialist at State of Michigan. Former National Guard Infantryman. Graduate of Muskegon Community College and Davenport University. Limited specific policy statements available beyond Republican party involvement.', status: 'challenger', grade: 'C',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: 'A', limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No specific statements found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'Former National Guard Infantryman with military firearms training and experience. Strong 2A credentials from military service.',
            limitedGov: 'No specific statements found beyond Republican party affiliation.',
            fiscal: 'No specific fiscal policy statements found.'
          }
        },
      ],
      democratic: [
        { name: 'Will Snyder', description: 'Incumbent Democratic representative for HD-87 in Muskegon County. First elected 2022, re-elected 2024. 89% LCV environmental score. Former legislative aide and district director for Rep. Terry Sabo. Has cast 1,531 votes with 55 bill sponsorships. Chairs Labor, Economic Development, and Lifelong Learning committee. Also serves on Health and Human Services, Appropriations, and Regulatory Reform committees.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: '89% LCV score indicates consistent progressive voting. Votes with Democratic caucus on reproductive issues.',
            marriage: 'Votes consistently with Democratic caucus on social issues.',
            religiousLiberty: 'No specific statements; votes with Democratic caucus.',
            secondAmendment: 'Votes with Democratic caucus supporting gun control legislation.',
            limitedGov: '89% LCV score. Chairs Labor committee suggesting support for labor regulations and government intervention.',
            fiscal: 'Votes with Democratic caucus on increased government spending programs.'
          }
        },
      ],
    },
  },
  88: {
    office: "State House — District 88",
    region: "Ottawa/Muskegon area",
    incumbent: "Greg VanWoerkom (R)",
    candidates: {
      republican: [
        { name: 'Ethan Frasier', description: 'Republican primary challenger in HD-88 against incumbent VanWoerkom. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Greg VanWoerkom', description: 'Incumbent Republican representative for HD-88 covering parts of Muskegon and Ottawa counties including Grand Haven, Spring Lake, Norton Shores. Serving since 2019. BA from Calvin College, MA in Political Leadership from George Washington University. Former district director for US Rep. Bill Huizenga and senior policy adviser to US Rep. Pete Hoekstra. 30% LCV environmental score (2019-2026). Member of House Appropriations Committee. Chairs Medicaid and Behavioral Health subcommittee. Vice chairs General Government subcommittee. Voted against Democratic state budget.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican in conservative Ottawa County district; votes with caucus. No specific pro-life endorsements documented.',
            marriage: 'Calvin College graduate (Christian Reformed institution); votes with Republican caucus.',
            religiousLiberty: 'Calvin College graduate; conservative Ottawa County Republican. Christian education background supports religious liberty.',
            secondAmendment: 'Votes with Republican caucus opposing gun control; no specific 2A endorsements found.',
            limitedGov: 'Voted against Democratic state budget. 30% LCV score (slightly higher than most Rs) but still conservative. Appropriations committee focus on fiscal oversight.',
            fiscal: 'Criticized Democratic budget for not supporting \'real families, prioritizing local infrastructure, or respecting taxpayers.\' Fiscal conservative on budget matters.'
          }
        },
      ],
      democratic: [
        { name: 'Kiel Reid', description: 'Democratic challenger for HD-88. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  89: {
    office: "State House — District 89",
    region: "Ottawa/Allegan area",
    incumbent: "Luke Meerman (R)",
    candidates: {
      republican: [
        { name: 'Patrick Kapenga', description: 'Republican primary candidate for HD-89. Businessman from Coopersville. Filed 2/11/2026. Limited public policy information available.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Joe Moss', description: 'Republican primary candidate for HD-89. Co-founder of Ottawa Impact with Sylvia Rhodea in 2021. Ottawa County Commissioner (District 5) since January 2023. Businessman with web design and phone sales companies. Immediately upon taking office as commissioner, abolished county DEI Department, fired county administrator and lawyer, changed county motto to \'Where Freedom Rings.\' Campaign focuses on protecting children and families, defending local communities, reducing taxes, strengthening economy, and eliminating government waste, fraud, and abuse.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Ottawa Impact leader focused on protecting children and families. Conservative activist in deeply conservative Ottawa County.',
            marriage: 'Ottawa Impact mission includes defending traditional American values. Focus on protecting children and families.',
            religiousLiberty: 'Co-founded Ottawa Impact to fight government overreach and preserve American values. Changed county motto to \'Where Freedom Rings.\'',
            secondAmendment: 'Strong conservative activist; Ottawa Impact platform includes defending constitutional rights. Conservative Ottawa County base.',
            limitedGov: 'Abolished county DEI Department, fired administrators, focused on eliminating government waste. Strongest limited government action among all candidates.',
            fiscal: 'Focuses on reducing taxes and eliminating waste, fraud, and abuse in government. Businessman with fiscal conservative track record.'
          }
        },
      ],
      democratic: [
        { name: 'Meegan Zickus', description: 'Democratic challenger for HD-89. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  90: {
    office: "State House — District 90",
    region: "Kent County - Rockford, Ada area",
    incumbent: "Bryan Posthumus (R)",
    candidates: {
      republican: [
        { name: 'Lynn Afendoulis', description: 'Republican primary candidate for HD-90 (Kent County - Rockford, Ada area). Former State Representative for HD-73 (2019-2021). Born in Grand Rapids, BS from Michigan State University 1981. Former reporter, director of corporate communications for Universal Forest Products, VP of charitable giving foundation. Served on Michigan Transportation Commission (appointed by Gov. Snyder). Board member of Grand Rapids Chamber of Commerce, GR Public Schools foundation. Ran for US House MI-3 in 2020, lost primary to Peter Meijer. Lost HD-81 race in 2022.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Former Republican state representative; voting record during 2019-2021 term would reflect caucus alignment. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements.',
            religiousLiberty: 'No specific religious liberty statements found; voted with Republican caucus during prior term.',
            secondAmendment: 'Voted with Republican caucus during 2019-2021 term; no specific 2A endorsements found.',
            limitedGov: 'Corporate background; appointed to Transportation Commission by Gov. Snyder. Moderate Republican profile.',
            fiscal: 'Corporate VP and foundation leader; Republican with business community ties. Moderate fiscal conservative.'
          }
        },
        { name: 'Susannah Watts', description: 'Republican primary candidate for HD-90 from Rockford. Filed 1/15/2026. No significant public policy information found.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Andrew Jackson Willis', description: 'Republican primary candidate for HD-90. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Jordan Youngquist', description: 'Republican primary candidate for HD-90 from Kent City. Filed 1/16/2026. Previously ran for HD-81 in 2024, lost in general election. Limited policy information available.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Rachel Crowther', description: 'Democratic challenger for HD-90. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  91: {
    office: "State House — District 91",
    region: "Montcalm/Ionia area",
    incumbent: "Pat Outman (R)",
    candidates: {
      republican: [
        { name: 'Pat Outman', description: 'Incumbent Republican representative for HD-91 covering Montcalm/Ionia area. From Six Lakes. First elected in prior term, currently serving second stint. Supports \'practical conservative policies.\' Committed to lowering taxes, improving infrastructure, strengthening workforce, and ensuring affordable energy. 25% LCV environmental score. Sponsored resolution accusing public schools of \'radical politics\' and \'political indoctrination.\' Co-sponsored Fact Checker Registration Act in 2021. Voted against bipartisan ethics package.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Conservative Republican; votes with caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements.',
            religiousLiberty: 'Sponsored resolution against \'radical politics\' in schools; strong parental rights and free speech advocate.',
            secondAmendment: 'Votes with Republican caucus opposing gun control; no specific 2A endorsements found.',
            limitedGov: 'Committed to lowering taxes. Sponsored resolution against political indoctrination in schools. Co-sponsored Fact Checker Registration Act showing distrust of institutional power. Voted against bipartisan ethics package showing anti-establishment bent.',
            fiscal: 'Explicitly committed to lowering taxes and improving infrastructure. Practical conservative on fiscal issues.'
          }
        },
      ],
      democratic: [
        { name: 'Frank Lafata', description: 'Democratic challenger for HD-91. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  92: {
    office: "State House — District 92",
    region: "Isabella/Clare area",
    incumbent: "Jerry Neyer (R)",
    candidates: {
      republican: [
        { name: 'Jerry Neyer', description: 'Incumbent Republican representative for HD-92 covering portions of Gratiot and Isabella counties. Born in Isabella County, lives in Shepherd. First elected 2022, re-elected 2024. Chairs House Agriculture Committee. Serves on Insurance, Regulatory Reform, and Transportation & Infrastructure committees. 14% LCV environmental score.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent in rural conservative district; votes with caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements.',
            religiousLiberty: 'No specific statements found; votes with Republican caucus.',
            secondAmendment: 'Rural district representative; votes with Republican caucus opposing gun control. No specific 2A endorsements found.',
            limitedGov: '14% LCV score indicating conservative environmental/regulatory voting. Chairs Agriculture Committee. Serves on Regulatory Reform.',
            fiscal: 'Votes with Republican caucus on fiscal issues; serves on regulatory reform suggesting concern about business regulation costs.'
          }
        },
      ],
      democratic: [
        { name: 'Luke Del Castillo', description: 'Democratic challenger for HD-92. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  93: {
    office: "State House — District 93",
    region: "Saginaw area",
    incumbent: "Tim Kelly (R)",
    candidates: {
      republican: [
        { name: 'Tim Kelly', description: 'Incumbent Republican representative for HD-93 covering portions of Clinton, Gratiot, Ionia, Montcalm, and Saginaw counties. First elected to current seat 2024. Previously served HD-94 in Saginaw County from 2013-2018, chairing Appropriations Subcommittee on School Aid and Education Reform committee. Former education policy advisor to Gov. John Engler. Also served in Indiana Bayh administration in economic/workforce development. Conservative views on government intervention in healthcare and limiting government.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Conservative Republican with long legislative career; votes with caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements.',
            religiousLiberty: 'No specific religious liberty statements found; conservative Republican.',
            secondAmendment: 'Votes with Republican caucus opposing gun control; no specific 2A endorsements found.',
            limitedGov: 'Explicitly supports \'limiting government to roles that make sense for taxpayers.\' Opposes government intervention in healthcare. Strong limited government credentials.',
            fiscal: 'Former education policy advisor focused on school funding efficiency. Supports transparent government and fiscal accountability.'
          }
        },
      ],
      democratic: [
        { name: 'Serenity Hope Salak', description: 'Democratic challenger for HD-93. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  94: {
    office: "State House — District 94",
    region: "Saginaw County",
    incumbent: "Amos O'Neal (D)",
    candidates: {
      republican: [
        { name: 'Don Sugg', description: 'Republican challenger for HD-94. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Amos O\'Neal', description: 'Incumbent Democratic representative for HD-94 in Saginaw County. Served since 2016. Former House Majority Caucus Chair (2023-2024). Previously served on Saginaw City Council (2003-2016) and Saginaw County Board of Commissioners (2016-present). Won re-election 2024. Long-serving Democratic legislator with deep roots in Saginaw community.', status: 'incumbent', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Long-serving Democrat; served as House Majority Caucus Chair during period when Democrats repealed abortion restrictions.',
            marriage: 'Votes consistently with Democratic caucus; served in Democratic leadership.',
            religiousLiberty: 'No specific statements; Democrat caucus leadership role during period of progressive social legislation.',
            secondAmendment: 'Votes with Democratic caucus on gun control measures; served in Democratic leadership.',
            limitedGov: 'Long government career spanning city council, county commission, and state house. Democrat leadership member supporting expanded government.',
            fiscal: 'Democratic caucus leadership supporting expanded government spending programs.'
          }
        },
      ],
    },
  },
  95: {
    office: "State House — District 95",
    region: "Midland/Gladwin area",
    incumbent: "Bill G. Schuette (R)",
    candidates: {
      republican: [
        { name: 'Bill G. Schuette', description: 'Incumbent Republican representative for HD-95 covering Midland/Gladwin area. Born July 21, 1995 in Midland. BS and MA from University of Michigan. Former Defense Intelligence Agency officer. Worked at Dow Inc. in public and government affairs. NRA and Right to Life of Michigan affiliated. Michigan Farm Bureau and Midland Business Alliance affiliated. 14% LCV environmental score indicating strong conservative voting record.', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Affiliated with Right to Life of Michigan. Strong pro-life credentials explicitly stated.',
            marriage: 'Conservative Republican in Midland County; limited specific statements but Right to Life affiliation suggests traditional marriage support.',
            religiousLiberty: 'Right to Life of Michigan affiliated; conservative in Midland community. No specific religious liberty legislation highlighted.',
            secondAmendment: 'NRA affiliated. Former Defense Intelligence Agency officer with intelligence and security background.',
            limitedGov: '14% LCV score. Former DIA intelligence officer and Dow Inc. public policy professional. Business community ties suggest strong limited government philosophy.',
            fiscal: 'Michigan Farm Bureau and Midland Business Alliance affiliated. Dow Inc. background. Strong business-friendly fiscal conservative credentials.'
          }
        },
      ],
      democratic: [
        { name: 'AnnMarie Horseman', description: 'Democratic challenger for HD-95. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Gary VanBlaricum', description: 'Democratic challenger for HD-95. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  96: {
    office: "State House — District 96",
    region: "Bay County",
    incumbent: "Timothy Beson (R)",
    candidates: {
      republican: [
        { name: 'Timothy Beson', description: 'Incumbent Republican representative for HD-96 in Bay County. Born March 4, 1974 in Bay City. Owner of Beson\'s Market. BA in Business Management from Saginaw Valley State University. Serving since January 2021. 27% LCV environmental score (2021-2026). Serves on Appropriations Committee and subcommittees including Licensing and Regulatory Affairs, Corrections and Judiciary, Human Services, and School Aid & Education.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent in Bay County; votes with caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements.',
            religiousLiberty: 'No specific religious liberty statements found; votes with Republican caucus.',
            secondAmendment: 'Votes with Republican caucus opposing gun control; no specific 2A endorsements found.',
            limitedGov: '27% LCV score (slightly higher than most Rs at 14%). Small business owner. Serves on regulatory affairs subcommittee.',
            fiscal: 'Small business owner (Beson\'s Market). Business management degree. Serves on multiple appropriations subcommittees.'
          }
        },
      ],
      democratic: [
        { name: 'Christopher R. Girard', description: 'Democratic challenger for HD-96. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  97: {
    office: "State House — District 97",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Briar Bearss', description: 'Republican candidate for HD-97. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Mark Piotrowski', description: 'Republican candidate for HD-97. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Jack Bader', description: 'Democratic candidate for HD-97. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Kandie Sherman', description: 'Democratic candidate for HD-97. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  98: {
    office: "State House — District 98",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Gregory L. Alexander', description: 'Republican candidate for HD-98. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Keith Brusseau', description: 'Democratic candidate for HD-98. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  99: {
    office: "State House — District 99",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Mike Hoadley', description: 'Republican candidate for HD-99. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'David Forgione', description: 'Democratic candidate for HD-99. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  100: {
    office: "State House — District 100",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Tom Kunse', description: 'Republican candidate for HD-100. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Tracy Ruell', description: 'Democratic candidate for HD-100. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  101: {
    office: "State House — District 101",
    region: "Mecosta/Osceola/Wexford area",
    incumbent: "Joseph Fox (R)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Gary Anderson', description: 'Republican primary candidate for HD-101 (Mecosta/Osceola/Wexford area). Open seat. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Jaxon Deur', description: 'Republican primary candidate for HD-101. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Luke Eising', description: 'Republican primary candidate for HD-101. Farmer. Running for portions of Mason and Oceana counties, most of Lake and Wexford counties, and all of Newaygo County.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Ben Townsend', description: 'Republican primary candidate for HD-101. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Rich Vance', description: 'Republican primary candidate for HD-101. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Christopher R. Crain', description: 'Democratic candidate for HD-101. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  102: {
    office: "State House — District 102",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Curt Vanderwall', description: 'Incumbent Republican representative for HD-102 covering parts of Oceana, Manistee, Mason, and Muskegon counties. Second term in House, elected 2022 and re-elected 2024. Previously served in Michigan State Senate representing 12 Northern Michigan counties (2018-2022). Former commissioner and chairman of Mason County Board of Commissioners.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican with extensive legislative career (Senate and House); votes with conservative caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements.',
            religiousLiberty: 'No specific religious liberty statements found; votes with Republican caucus.',
            secondAmendment: 'Rural Northern Michigan representative; votes with Republican caucus opposing gun control.',
            limitedGov: 'Former county commissioner and chairman; fights against \'growth of government.\' Defends UP way of life from \'misguided policies.\'',
            fiscal: 'Experienced legislator (Senate and House) with county government background; votes with Republican caucus on fiscal issues.'
          }
        },
      ],
      democratic: [
        { name: 'Angel Coon', description: 'Democratic candidate for HD-102. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  103: {
    office: "State House — District 103",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Edwin B. Dean', description: 'Republican candidate for HD-103 challenging incumbent Betsy Coffia. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
      democratic: [
        { name: 'Betsy Coffia', description: 'Incumbent Democratic representative for HD-103 covering Leelanau, Grand Traverse, and Benzie counties. In second term. Former newspaper reporter and weekly editor. AA from Northwestern Michigan College, BA in Social Work from Ferris State University. First Democrat to win the seat, defeating Republican Jack O\'Malley in 2022. Re-elected 2024 (53-47%). 100% LCV environmental score. Supports LGBTQ+ equality, gun violence prevention, workers\' rights. Endorsed by Clean Water Action, Michigan LCV, Sierra Club.', status: 'challenger', grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: '100% LCV score indicates fully progressive voting. Votes with Democratic caucus which repealed abortion restrictions.',
            marriage: 'Explicitly supports LGBTQ+ equality. Progressive on social issues.',
            religiousLiberty: 'No specific religious liberty statements; progressive positions on LGBTQ+ issues may conflict with religious exemptions.',
            secondAmendment: 'Explicitly supports \'common sense gun violence prevention laws.\' Voted for gun control legislation.',
            limitedGov: '100% LCV score. Social worker background. Supports expanded government programs including rural internet access, healthcare access, workers\' rights.',
            fiscal: 'Supports increased government spending on infrastructure, healthcare, internet access, and social services.'
          }
        },
      ],
    },
  },
  104: {
    office: "State House — District 104",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'John R. Roth', description: 'Incumbent Republican representative for HD-104 from Traverse City. Serving since January 2021. Re-elected 2024. 26% LCV environmental score. Serves on Appropriations committee and chairs Human Services appropriations subcommittee. Vice chairs Higher Education and Community Colleges appropriations subcommittee. Budget-focused legislator with oversight of state spending.', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican incumbent; votes with caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements.',
            religiousLiberty: 'No specific religious liberty statements found; votes with Republican caucus.',
            secondAmendment: 'Votes with Republican caucus opposing gun control; no specific 2A endorsements found.',
            limitedGov: '26% LCV score (slightly above average for Republicans). Serves on appropriations subcommittees overseeing spending.',
            fiscal: 'Chairs Human Services appropriations subcommittee; vice chairs Higher Education subcommittee. Budget oversight focus.'
          }
        },
      ],
      democratic: [
        { name: 'Mitchell Ryan Distin', description: 'Democratic candidate for HD-104. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  105: {
    office: "State House — District 105",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Ken Borton', description: 'Incumbent Republican representative for HD-105 covering Crawford, Missaukee, Otsego, and Roscommon counties and parts of Antrim, Kalkaska, and Oscoda counties. Lives in Gaylord. Serving since 2021. Self-described \'Christian Constitutional Conservative.\' Lifetime NRA member. Member of Right to Life. Pro-2nd Amendment. Former Otsego County Commissioner (10 years). House Republican Caucus Chair. Serves on Appropriations Committee. Chairs Agriculture and Rural Development subcommittee. Vice chairs EGLE subcommittee. 24% LCV environmental score.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Member of Right to Life. Self-described \'Christian Constitutional Conservative.\' Explicit pro-life credentials.',
            marriage: 'Self-described \'Christian Constitutional Conservative.\' Traditional values background.',
            religiousLiberty: 'Self-described Christian Constitutional Conservative; strong faith-based values orientation. Republican caucus leader.',
            secondAmendment: 'Lifetime NRA member. Self-described pro-2nd Amendment. Among the strongest 2A credentials in this group.',
            limitedGov: '24% LCV score. Christian Constitutional Conservative. House Republican Caucus Chair indicating conservative leadership role.',
            fiscal: 'Serves on Appropriations Committee with agriculture and natural resources subcommittee roles. County commissioner experience.'
          }
        },
      ],
      democratic: [
        { name: 'Rachel Longendyke Teeter', description: 'Democratic candidate for HD-105. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  106: {
    office: "State House — District 106",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Cam Cavitt', description: 'Incumbent Republican representative for HD-106 covering Alcona, Alpena, Montmorency, Presque Isle, and portions of Oscoda and Cheboygan counties. First elected 2022. Father, Husband, Christian, Conservative, Businessman, Realtor. Former Cheboygan County Drain Commissioner. 2020 Republican National Convention delegate, endorsed by then-President Trump\'s campaign and Congressman Jack Bergman. Serves on Appropriations Committee. Republican vice chair on Military and Veterans Affairs and State Police subcommittee. Also on EGLE and Judiciary Appropriations subcommittees.', status: 'challenger', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Self-described Christian Conservative. Trump-endorsed Republican in conservative Northern Michigan. Strong traditional values credentials.',
            marriage: 'Self-described as Father, Husband, Christian, Conservative. Strong family values orientation.',
            religiousLiberty: 'Self-described Christian Conservative. Trump delegate and campaign endorsed. Strong values-based credentials.',
            secondAmendment: 'Conservative Northern Michigan Republican. Trump-endorsed. Vice chair of Military/Veterans/State Police subcommittee. Strong 2A expected.',
            limitedGov: 'Businessman and realtor. Fights for \'Northern Michigan way of life.\' Conservative Republican with Trump endorsement indicating strong limited government stance.',
            fiscal: 'Serves on Appropriations Committee for budget oversight. Businessman background.'
          }
        },
      ],
      democratic: [
        { name: 'Phillip Aderhold', description: 'Democratic candidate for HD-106. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Mary Lucille Hamilton', description: 'Democratic candidate for HD-106. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  107: {
    office: "State House — District 107",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Parker Fairbairn', description: 'Incumbent Republican representative for HD-107. First elected 2024, defeating incumbent Neil Friske in Republican primary. Born in Petoskey, fifth-generation Northern Michigan resident. BA and MBA from Northwood University. 0% LCV environmental score in 2025. Vice chair of Regulatory Reform Committee. Serves on Natural Resources and Tourism, Communication and Technology, and Energy committees.', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Republican in conservative Northern Michigan; votes with caucus. No specific pro-life endorsements documented.',
            marriage: 'Votes with Republican caucus; limited specific statements.',
            religiousLiberty: 'No specific religious liberty statements found; votes with Republican caucus.',
            secondAmendment: 'Northern Michigan Republican; votes with caucus opposing gun control. No specific 2A endorsements found.',
            limitedGov: '0% LCV environmental score indicating opposition to regulatory expansion. Vice chairs Regulatory Reform. Northwood University (business-oriented) education.',
            fiscal: 'MBA from Northwood University (known for free-market economics focus). Business administration education.'
          }
        },
      ],
      democratic: [
        { name: 'Melissa Perron', description: 'Democratic candidate for HD-107. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Brendan E. Ryan', description: 'Democratic candidate for HD-107. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  108: {
    office: "State House — District 108",
    region: "Upper Peninsula - Delta, Luce, Menominee, Schoolcraft, parts of Chippewa/Mackinac",
    incumbent: "David Prestin (R)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: 'Casey Hoffman', description: 'Republican primary candidate for HD-108 (Upper Peninsula open seat). Current Mayor of Menominee. Previously ran for this seat in 2022. Open seat as incumbent Dave Prestin is running for State Senate.', status: 'challenger', grade: 'B',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'No specific statements found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'Current mayor experience in local government; Republican in rural UP district.',
            fiscal: 'Local government experience as mayor provides fiscal management background.'
          }
        },
        { name: 'Larry Johnson', description: 'Republican primary candidate for HD-108. Menominee County Commissioner. Limited policy information available.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Kurt Perron', description: 'Republican primary candidate for HD-108. Previously ran in 2022. Limited policy information available.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Christopher J. Reynolds', description: 'Republican primary candidate for HD-108. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
        { name: 'Daryl Schroeder', description: 'Republican primary candidate for HD-108. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
        { name: 'Steven Viau', description: 'Republican primary candidate for HD-108. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
      democratic: [
        { name: 'Rachel M. Keys', description: 'Democratic candidate for HD-108. No significant public information found on policy positions or background.', status: 'challenger', grade: null, endorsements: [], positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: { proLife: 'No information found.', marriage: 'No information found.', religiousLiberty: 'No information found.', secondAmendment: 'No information found.', limitedGov: 'No information found.', fiscal: 'No information found.' } },
      ],
    },
  },
  109: {
    office: "State House — District 109",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Karl Bohnak', description: 'Incumbent Republican representative for HD-109 covering Alger, Baraga, Marquette, and portions of Dickinson counties in the Upper Peninsula. First elected November 2024, becoming first Republican to represent Marquette County since 1955. Former chief meteorologist at WLUC-TV6 in Marquette for nearly 40 years. Holds American Meteorological Society Broadcast Seal of Approval. Self-described as \'fiscal conservative.\' Climate change skeptic. Still broadcasts daily radio weather updates.', status: 'challenger', grade: 'B',
          positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Self-described \'social liberal\' in 2014 interview; may have evolved since then given Republican party shift. Uncertain current position.',
            marriage: 'Self-described \'social liberal\' in 2014, though his political evolution toward conservatism may have changed this. Uncertain.',
            religiousLiberty: 'Conservative Republican but self-described former social liberal. Likely supports religious liberty as part of general freedom philosophy.',
            secondAmendment: 'Upper Peninsula Republican; strong gun culture in district. Likely pro-2A but no specific endorsements found.',
            limitedGov: 'Climate change skeptic opposing environmental regulations. Conservative shift driven by opposition to government climate policy mandates.',
            fiscal: 'Self-described \'fiscal conservative.\' This was his original political identity before becoming more broadly conservative.'
          }
        },
      ],
      democratic: [
        { name: 'Anna Aho Rink', description: 'Democratic candidate for HD-109. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
  110: {
    office: "State House — District 110",
    region: "Michigan",
    incumbent: "TBD",
    candidates: {
      republican: [
        { name: 'Gregory Markkanen', description: 'Incumbent Republican representative for HD-110 covering Gogebic, Houghton, Iron, Keweenaw, and Ontonagon counties plus parts of Dickinson County in the Upper Peninsula. Serving since 2019, re-elected in 2020, 2022, and 2024. Endowed Life Member of the National Rifle Association. Former Army medical Corpsman with 82nd Airborne Division, 452nd Combat Support Hospital US Army Reserve, and 107th Engineer Battalion Michigan Army National Guard. Former high school civics, history, and geography teacher at Baraga Area Schools. Former Hancock City Council Ward II representative. Endorsed Donald Trump for president.', status: 'challenger', grade: 'A',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Conservative Republican; votes with caucus. No specific pro-life endorsements documented but longtime conservative voting record.',
            marriage: 'Votes with Republican caucus; limited specific statements. Conservative voting record across multiple terms.',
            religiousLiberty: 'No specific religious liberty statements found; votes with Republican caucus consistently.',
            secondAmendment: 'NRA Endowed Life Member. Army veteran with multiple military units. Strongest 2A credential in the UP delegation.',
            limitedGov: 'Four-term Republican representative; Trump endorser. Conservative voting record but limited specific limited government statements.',
            fiscal: 'Long-serving Republican representative; votes with caucus on fiscal issues. Former civics teacher and city council member.'
          }
        },
      ],
      democratic: [
        { name: 'Brian Irizarry', description: 'Democratic candidate for HD-110. No significant public information found on policy positions or background.', status: 'challenger', grade: null,
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null },
          gradeJustifications: {
            proLife: 'No information found.',
            marriage: 'No information found.',
            religiousLiberty: 'No information found.',
            secondAmendment: 'No information found.',
            limitedGov: 'No information found.',
            fiscal: 'No information found.'
          }
        },
      ],
    },
  },
}
export const COUNTY_EXECUTIVE_RACES_2026 = {
  Macomb: {
    office: 'County Executive',
    partisan: true,
    candidates: {
      republican: [
        { name: 'Richard Moore', description: 'Republican challenger for County Executive; Army veteran (10.5 years, 3 Iraq tours); Controls Design Engineer', status: 'challenger', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Running as R challenger in Trump +10 Macomb County; military veteran background signals traditional values; limited specific statements',
            marriage: 'Republican party affiliation in conservative Macomb County signals traditional marriage support; limited specific statements',
            religiousLiberty: 'Republican party affiliation signals religious liberty support; military service background; limited specific statements',
            secondAmendment: 'Army veteran with 10.5 years of service and 3 Iraq tours; strong military and firearms background provides strongest 2A signal',
            limitedGov: 'Controls Design Engineer with problem-solving approach; Republican challenger in Macomb County signals limited government support',
            fiscal: 'Engineering background and Republican affiliation in Trump +10 Macomb County signal fiscal conservatism; limited specific fiscal statements',
          },
        },
      ],
      democratic: [
        { name: 'Mark A. Hackel', description: 'Incumbent County Executive', status: 'incumbent', grade: 'F',
          positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'D', fiscal: 'D' },
          gradeJustifications: {
            limitedGov: 'Long-serving county executive; expanded county government programs',
            fiscal: 'Presided over significant county budget growth',
          },
        },
      ],
    },
  },
  Wayne: {
    office: 'County Executive',
    partisan: true,
    candidates: {
      republican: [],
      democratic: [
        { name: 'Warren Evans', description: 'Incumbent County Executive', status: 'incumbent', grade: 'F' },
      ],
    },
  },
}

// Judicial races — comprehensive data now in michiganJudicial2026.js
// 170 races, 272 candidates across Court of Appeals, Circuit Court, Probate Court, District Court
// See getJudicialRacesForCounty() for geographic lookup by county

// NOTE: County row officers (Sheriff, Prosecutor, Clerk, Treasurer, Drain Commissioner)
// were elected in 2024 for 4-year terms. NOT on the 2026 ballot. Next: 2028.
// County Commissioners were changed to 4-year terms via 2021 PA 122
// (MCL 46.410(2)). All elected in 2024, next regular election 2028.
// Exception: special elections to fill mid-term vacancies (e.g., Macomb Dist 1).
// Township officers similarly on presidential-year cycles (2024, 2028).
// City offices are mostly on odd-year cycles. Village offices are November-only.
// School board races are November-only, nonpartisan.

// ── Helper: Get local ballot races based on geography ──
// In 2026, county offices are NOT on the ballot: sheriff, clerk,
// treasurer, prosecutor, drain commissioner = 4-year presidential cycle.
// County COMMISSIONERS were changed to 4-year terms via 2021 PA 122
// (MCL 46.410(2)) — all elected in 2024, next election 2028.
// What IS on the 2026 local ballot: county executive (Macomb, Wayne),
// judicial races, and ballot proposals.

export function getLocalBallotRaces(party, geo) {
  if (!geo || !party) return []
  const partyKey = party === 'republican' ? 'republican' : 'democratic'
  const races = []

  if (!geo.county) return races
  const countyName = geo.county.replace(/ County$/i, '')

  // County Executive (only certain counties have this in 2026)
  const execRace = COUNTY_EXECUTIVE_RACES_2026[countyName]
  if (execRace) {
    races.push({
      id: `county-exec-${countyName}`,
      office: `${countyName} County Executive`,
      level: 'County',
      description: 'Chief executive of the county government. Sets budget priorities, manages county departments, and represents the county.',
      candidates: execRace.candidates[partyKey] || [],
      type: 'partisan',
      allowWrite: true,
      localOffice: true,
    })
  }

  // Judicial races (nonpartisan section — these appear regardless of party column)
  // Uses comprehensive judicial data from michiganJudicial2026.js
  const judicialRaces = getJudicialRacesForCounty(countyName)
  if (judicialRaces && judicialRaces.length > 0) {
    judicialRaces.forEach(race => {
      races.push({
        ...race,
        localOffice: true,
      })
    })
  }

  return races
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
    const termLimit = race.office === 'Governor'
      ? { maxTerms: 2, termLength: 4, totalYears: 8, label: '2 terms (8 yrs)' }
      : race.office === 'U.S. Senate'
      ? { maxTerms: null, termLength: 6, totalYears: null, label: 'No term limit' }
      : null
    ballot.push({
      id: race.id,
      office: race.office,
      level: race.level,
      description: race.description,
      note: race.note,
      candidates,
      type: 'partisan',
      termLimit,
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
      termLimit: { maxTerms: null, termLength: 2, totalYears: null, label: 'No term limit' },
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
  if (sd && STATE_SENATE_RACES[sd]) {
    const race = STATE_SENATE_RACES[sd]
    ballot.push({
      id: `state-senate-${sd}`,
      office: race.office,
      level: 'State',
      description: race.region || 'All 38 state senate seats are on the ballot.',
      note: race.note,
      candidates: race.candidates[partyKey] || [],
      type: 'partisan',
      allowWrite: true,
      termLimit: { maxTerms: 2, termLength: 4, totalYears: 8, label: '2 terms (8 yrs)' },
    })
  } else {
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
  }

  // State House
  const hd = districts.stateHouse
  if (hd && STATE_HOUSE_RACES[hd]) {
    const race = STATE_HOUSE_RACES[hd]
    ballot.push({
      id: `state-house-${hd}`,
      office: race.office,
      level: 'State',
      description: race.region || 'All 110 state house seats are on the ballot.',
      note: race.note,
      candidates: race.candidates[partyKey] || [],
      type: 'partisan',
      allowWrite: true,
      termLimit: { maxTerms: 3, termLength: 2, totalYears: 6, label: '3 terms (6 yrs)' },
    })
  } else {
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
  }

  return ballot
}
