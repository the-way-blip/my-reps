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
          gradeJustifications: {
            secondAmendment: 'Strong Second Amendment advocate; supports constitutional carry and opposes all gun restrictions',
            limitedGov: 'Supports reducing government overreach but limited legislative track record to verify positions',
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
        {
          name: 'Jack Bergman',
          description: 'Incumbent, retired Lt. General',
          status: 'incumbent',
          grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Co-sponsored Born-Alive Act and Pain-Capable Unborn Child Protection Act; 100% National Right to Life voting record',
            marriage: 'Supports traditional marriage; voted against Respect for Marriage Act',
            religiousLiberty: 'Co-sponsored First Amendment Defense Act; supports religious freedom protections',
            secondAmendment: 'A-rated by NRA; opposes all gun control legislation; supports national concealed carry reciprocity',
            limitedGov: 'Military background; supports reducing federal bureaucracy; opposes vaccine mandates and federal overreach',
            fiscal: 'Voted against omnibus spending bills; supports balanced budget amendment; opposes new taxes',
          },
        },
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
        {
          name: 'John Moolenaar',
          description: 'Incumbent',
          status: 'incumbent',
          grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life voting record; co-sponsored multiple pro-life bills; 100% SBA Pro-Life scorecard',
            marriage: 'Supports traditional marriage; voted against Respect for Marriage Act',
            religiousLiberty: 'Supports broad religious liberty protections; co-sponsored RFRA strengthening legislation',
            secondAmendment: 'A-rated by NRA; opposes gun control measures; supports Second Amendment rights',
            limitedGov: 'Supports reducing federal regulations; opposes expansion of federal agencies',
            fiscal: 'Fiscal conservative voting record; supports balanced budget; opposes wasteful spending',
          },
        },
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
        {
          name: 'Hillary Scholten',
          description: 'Incumbent',
          status: 'incumbent',
          grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports unrestricted abortion access; voted against Born-Alive Act; 0% National Right to Life scorecard',
            marriage: 'Supports same-sex marriage and Equality Act; opposes traditional marriage definition',
            religiousLiberty: 'Has expressed personal faith but votes to limit religious exemptions in anti-discrimination law',
            secondAmendment: 'Supports assault weapons ban and red flag laws; F-rated by NRA',
            limitedGov: 'Supports expanded federal programs; voted for increased government spending and regulation',
            fiscal: 'Voted for major spending bills; supports higher taxes and expanded government programs',
          },
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
        {
          name: 'Bill Huizenga',
          description: 'Incumbent',
          status: 'incumbent',
          grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life record; 100% National Right to Life scorecard; co-sponsored pro-life legislation',
            marriage: 'Supports traditional marriage; voted against Respect for Marriage Act',
            religiousLiberty: 'Strong religious liberty record; supports RFRA protections; opposes government mandates on religious organizations',
            secondAmendment: 'A-rated by NRA; strong Second Amendment defender; opposes all gun control legislation',
            limitedGov: 'Supports reducing government size and regulation; Financial Services Committee member focused on deregulation',
            fiscal: 'Fiscal conservative; opposes omnibus spending; supports balanced budget amendment',
          },
        },
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
        {
          name: 'Tim Walberg',
          description: 'Incumbent',
          status: 'incumbent',
          grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Former pastor; 100% pro-life voting record; co-sponsored Heartbeat Protection Act and Born-Alive Act',
            marriage: 'Strongly supports traditional marriage; voted against Respect for Marriage Act; former pastor',
            religiousLiberty: 'Strong advocate; co-sponsored First Amendment Defense Act; ordained minister',
            secondAmendment: 'A-rated by NRA; opposes all gun control; supports constitutional carry',
            limitedGov: 'Founding member of House Freedom Caucus; opposes federal overreach; supports school choice',
            fiscal: 'One of the most fiscally conservative House members; opposes all spending increases; supports balanced budget',
          },
        },
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
        {
          name: 'Debbie Dingell',
          description: 'Incumbent',
          status: 'incumbent',
          grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports unrestricted abortion access; co-sponsored Women\'s Health Protection Act; 0% Right to Life scorecard',
            marriage: 'Co-sponsored Equality Act; supports same-sex marriage; opposes traditional marriage definition',
            religiousLiberty: 'Votes to limit religious exemptions in anti-discrimination law; does not prioritize religious liberty',
            secondAmendment: 'Leading gun control advocate in Congress; supports assault weapons ban, red flag laws, universal background checks',
            limitedGov: 'Supports expanded federal programs; backs major government expansion in healthcare and climate',
            fiscal: 'Votes for all major spending bills; supports higher taxes; opposes spending restraint',
          },
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
        {
          name: 'Tom Barrett',
          description: 'Incumbent, former State Senator',
          status: 'incumbent',
          grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life record in both state senate and Congress; opposes all abortion except to save mother\'s life',
            marriage: 'Supports traditional marriage; voted against Respect for Marriage Act',
            religiousLiberty: 'Supports religious freedom protections; opposes government mandates violating religious conscience',
            secondAmendment: 'A-rated by NRA; Army veteran; strong Second Amendment record in both state and federal office',
            limitedGov: 'Opposes federal overreach; supports reducing regulations; Army veteran focused on limited government',
            fiscal: 'Fiscal conservative; opposes wasteful spending; supports balanced budget amendment',
          },
        },
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
        {
          name: 'Kristen McDonald Rivet',
          description: 'Incumbent',
          status: 'incumbent',
          grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports abortion rights; voted for Prop 3 codification in state senate before winning House seat',
            marriage: 'Supports same-sex marriage; voted for Michigan LGBTQ civil rights expansion as state senator',
            religiousLiberty: 'Votes to limit religious exemptions; does not prioritize religious liberty in legislation',
            secondAmendment: 'Supports gun control legislation including red flag laws and universal background checks',
            limitedGov: 'Supports expanded government programs and regulation; former state senator who voted for Whitmer agenda',
            fiscal: 'Supported Whitmer tax increases as state senator; votes for expanded spending as congresswoman',
          },
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
        {
          name: 'Lisa McClain',
          description: 'Incumbent',
          status: 'incumbent',
          grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: '100% pro-life voting record; co-sponsored multiple pro-life bills; endorsed by Right to Life of Michigan',
            marriage: 'Supports traditional marriage; voted against Respect for Marriage Act',
            religiousLiberty: 'Strong religious liberty advocate; supports RFRA protections for faith-based organizations',
            secondAmendment: 'A-rated by NRA; opposes all gun control; supports Second Amendment rights',
            limitedGov: 'House Republican Conference Vice Chair; supports reducing government size and overreach',
            fiscal: 'Fiscal conservative; opposes wasteful spending and new taxes; supports balanced budget',
          },
        },
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
        {
          name: 'Haley Stevens',
          description: 'Incumbent (also running for U.S. Senate)',
          status: 'incumbent',
          grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Co-sponsored Women\'s Health Protection Act; 100% NARAL scorecard; opposes all abortion restrictions',
            marriage: 'Co-sponsored Equality Act; supports same-sex marriage',
            religiousLiberty: 'Equality Act she co-sponsored limits religious exemptions under RFRA',
            secondAmendment: 'Supports assault weapons ban and red flag laws; F-rated by NRA',
            limitedGov: 'Supports expanded federal role in manufacturing, education, and climate',
            fiscal: 'Voted for trillions in new spending; supports higher taxes on corporations',
          },
        },
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
        {
          name: 'Rashida Tlaib',
          description: 'Incumbent',
          status: 'incumbent',
          grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports unrestricted abortion access; co-sponsored bills removing all abortion restrictions',
            marriage: 'Co-sponsored Equality Act; strong supporter of LGBTQ rights; opposes traditional marriage definition',
            religiousLiberty: 'Actively opposes religious exemptions in anti-discrimination law; supports bills limiting religious liberty protections',
            secondAmendment: 'Supports comprehensive gun bans; co-sponsored assault weapons ban; one of the most anti-gun members of Congress',
            limitedGov: 'Democratic Socialist; supports massive government expansion including Green New Deal and Medicare for All',
            fiscal: 'Supports trillions in new spending; backs wealth tax; one of the most fiscally liberal members of Congress',
          },
        },
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
        {
          name: 'Shri Thanedar',
          description: 'Incumbent',
          status: 'incumbent',
          grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Supports abortion rights; opposes restrictions on abortion access',
            marriage: 'Supports same-sex marriage; backs LGBTQ rights legislation',
            religiousLiberty: 'Has not actively targeted religious liberty but votes for bills limiting religious exemptions',
            secondAmendment: 'Supports gun control including assault weapons ban and red flag laws',
            limitedGov: 'Supports expanded government programs and federal involvement in housing and healthcare',
            fiscal: 'Votes for major spending bills; supports higher taxes on wealthy; formerly a self-described Democratic Socialist',
          },
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
        { name: "Patrick O'Connell", description: "Republican candidate for SD-1", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Abraham Aiyash", description: "State Representative, running for Senate", status: "challenger", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to codify abortion rights in Michigan',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions; prioritizes anti-discrimination over religious liberty',
            secondAmendment: 'Voted for 2023 gun control package; supports comprehensive gun reform',
            limitedGov: 'Supports expanded government programs and regulations',
            fiscal: 'Voted for major budget increases; supports progressive taxation and spending',
          },
        },
        { name: "Justin Onwenu", description: "Democratic candidate for SD-1", status: "challenger", grade: null },
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
        { name: "Harry Sawicki", description: "Republican candidate for SD-2", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Abbas Alawieh", description: "Democratic candidate for SD-2", status: "challenger", grade: null },
        { name: "Erin Byrnes", description: "State Representative, retiring from House to run for Senate", status: "challenger", grade: null },
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
        { name: "Mark Ashley Price", description: "Republican candidate for SD-3", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Mohammad Alam", description: "Democratic candidate for SD-3", status: "challenger", grade: null },
        { name: "John Conyers III", description: "Entrepreneur and political organizer; son of late Congressman John Conyers Jr.", status: "challenger", grade: null },
        { name: "LeJuan Council", description: "Democratic candidate for SD-3", status: "challenger", grade: null },
        { name: "LaTanya Garrett", description: "Former three-term State Representative (2015-2020); EMT, small-business owner", status: "challenger", grade: null },
        { name: "Korey Hall", description: "Former regional director in Gov. Whitmer's office; prior regional manager for Sen. Debbie Stabenow", status: "challenger", grade: null },
        { name: "Kimberly Hill Knott", description: "Democratic candidate for SD-3", status: "challenger", grade: null },
        { name: "Adam Hollier", description: "Former State Senator (District 2, 2018-2023); U.S. Army paratrooper; dropped SOS bid to run here", status: "challenger", grade: null },
        { name: "Gary Hunter", description: "Democratic candidate for SD-3", status: "challenger", grade: null },
        { name: "Toinu Reeves", description: "Democratic candidate for SD-3", status: "challenger", grade: null },
        { name: "Abraham Shaw", description: "Democratic candidate for SD-3", status: "challenger", grade: null },
        { name: "Eboni Taylor", description: "First-time candidate; leadership roles at Higher Heights and Mothering Justice", status: "challenger", grade: null },
      ],
    },
  },
  4: {
    office: "State Senate — District 4",
    region: "Wayne County - Downriver",
    incumbent: "Darrin Camilleri (D)",
    candidates: {
      republican: [
        { name: "Marcie Grzywacz", description: "Republican candidate for SD-4", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Darrin Camilleri", description: "Incumbent State Senator", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Voted to codify abortion rights; supported Prop 3; 0% Michigan Right to Life scorecard',
            marriage: 'Voted to expand LGBTQ protections in Elliott-Larsen Civil Rights Act; opposes traditional marriage definition',
            religiousLiberty: 'Voted for Elliott-Larsen expansion without religious exemptions; limited support for faith-based carveouts',
            secondAmendment: 'Voted for 2023 gun control package including red flag law, safe storage, and universal background checks',
            limitedGov: 'Supports expanded government programs and regulations; voted for government mandates',
            fiscal: 'Voted for Whitmer budget expansions and new spending programs; supports tax increases',
          },
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
        { name: "Estelle Oliansky", description: "Republican candidate for SD-5", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Matt Koleszar", description: "Fourth-term State Rep (District 22); former middle/high school teacher; House Education Committee chair", status: "challenger", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted to codify abortion rights; supports reproductive rights legislation',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions; education focus on progressive curriculum',
            secondAmendment: 'Voted for 2023 gun control package; supports school safety through gun regulation',
            limitedGov: 'Supports expanded government role in education; advocates for more school funding and mandates',
            fiscal: 'Voted for Whitmer budget increases; supports higher education spending',
          },
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
        { name: "Joi Pokerwinski", description: "Republican candidate for SD-6", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Mary Cavanagh", description: "Incumbent State Senator since 2023; elected in 2022 with 68.01%", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to codify abortion rights post-Dobbs; supported Prop 3',
            marriage: 'Voted to expand Elliott-Larsen Civil Rights Act to include sexual orientation and gender identity',
            religiousLiberty: 'Voted for Elliott-Larsen expansion without strong religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package; supports red flag laws and safe storage mandates',
            limitedGov: 'Supports government expansion; voted for new state programs and mandates',
            fiscal: 'Voted for large budget increases; supports expanding state spending',
          },
        },
        { name: "Stephen Jensen", description: "Democratic challenger for SD-6", status: "challenger", grade: null },
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
        { name: "Anthony Paesano", description: "Republican candidate for SD-7", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Jason Hoskins", description: "State Rep (District 18); attorney; former Southfield City Council member; House Economic Development Committee chair", status: "challenger", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted to codify abortion rights in Michigan',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions in civil rights legislation',
            secondAmendment: 'Voted for 2023 gun control package; supports comprehensive gun reform',
            limitedGov: 'Supports expanded government economic development programs',
            fiscal: 'Voted for Whitmer budget increases; supports progressive economic policies',
          },
        },
        { name: "Shadia Martini", description: "Architect, entrepreneur; Syrian immigrant; MBA from U of M; Oakland County business owner; 2022/2024 nominee for HD-54", status: "challenger", grade: null },
        { name: "Rakesh Ramakrishnan", description: "Spine surgeon; son of immigrant parents", status: "challenger", grade: null },
      ],
    },
  },
  8: {
    office: "State Senate — District 8",
    region: "Wayne/Washtenaw - Dearborn Heights, Taylor, Flat Rock area",
    incumbent: "Dayna Polehanki (D)",
    candidates: {
      republican: [
        { name: "Kenneth D. Massey", description: "Republican candidate for SD-8", status: "challenger", grade: null },
        { name: "Jody White", description: "Republican candidate for SD-8", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Dayna Polehanki", description: "Incumbent State Senator; redistricted from former SD-7; elected 2022 with 61.07%", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to protect and expand abortion access; supported Prop 3',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights including same-sex marriage',
            religiousLiberty: 'Voted for Elliott-Larsen without strong religious exemptions; limited faith-based protections',
            secondAmendment: 'Voted for 2023 gun control package; infamously displayed AR-15 sign on Senate desk to push gun control',
            limitedGov: 'Supports expanded government role in education, healthcare, and regulation',
            fiscal: 'Voted for all major Whitmer spending increases; supports expanded state programs',
          },
        },
        { name: "Dean Raymond Wojtowicz", description: "Democratic challenger for SD-8", status: "challenger", grade: null },
      ],
    },
  },
  9: {
    office: "State Senate — District 9",
    region: "Oakland/Macomb - Rochester, Rochester Hills, Troy, Utica, Shelby Twp, Sterling Heights",
    incumbent: "Michael Webber (R)",
    candidates: {
      republican: [
        { name: "Michael Webber", description: "Incumbent State Senator; elected 2022 with 50.35% in competitive race", status: "incumbent", grade: 'B',
          positions: { proLife: 'A', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Right to Life of Michigan PAC endorsed; consistent pro-life voting record',
            marriage: 'Was one of three Republicans who voted YES on Elliott-Larsen LGBTQ expansion — significant break from conservative position',
            religiousLiberty: 'Americans for Prosperity and Freedom Network endorsed, but Elliott-Larsen vote lacked religious liberty protections',
            secondAmendment: 'Strong 2A record; voted against 2023 red flag laws, safe storage, and universal background checks',
            limitedGov: 'AFP, Michigan Chamber, Freedom Network endorsed; solid conservative on regulation',
            fiscal: 'Michigan Chamber endorsed; consistent fiscal conservative votes; perfect 365/365 attendance record',
          },
        },
      ],
      democratic: [
        { name: "Theresa Brooks", description: "Democratic candidate for SD-9", status: "challenger", grade: null },
        { name: "Brendan Johnson", description: "Democratic candidate for SD-9", status: "challenger", grade: null },
        { name: "Ren Nushaj", description: "Democratic candidate for SD-9", status: "challenger", grade: null },
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
        { name: "Michelle Nard", description: "Republican candidate for SD-10", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Mark Anthony Murphy Jr.", description: "Democratic candidate for SD-10", status: "challenger", grade: null },
        { name: "Natalie Price", description: "Democratic candidate for SD-10", status: "challenger", grade: null },
        { name: "Amanda Treppa", description: "Democratic candidate for SD-10", status: "challenger", grade: null },
      ],
    },
  },
  11: {
    office: "State Senate — District 11",
    region: "Macomb County",
    incumbent: "Veronica Klinefelt (D)",
    candidates: {
      republican: [
        { name: "Johnnie S. Townsend", description: "Republican candidate for SD-11", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Joseph Michael Hunt", description: "Democratic challenger for SD-11", status: "challenger", grade: null },
        { name: "Alysha Johnson", description: "Democratic challenger for SD-11", status: "challenger", grade: null },
        { name: "Veronica Klinefelt", description: "Incumbent State Senator", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'D' },
          gradeJustifications: {
            proLife: 'Pro-choice voting record; voted to expand abortion access in Michigan',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Voted for Elliott-Larsen without strong religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package including red flag laws',
            limitedGov: 'Supports government programs and expanded state services',
            fiscal: 'Generally supports Whitmer budgets; Macomb County moderate on some fiscal issues',
          },
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
        { name: "Joseph A. Backus", description: "Republican candidate for SD-12", status: "challenger", grade: null },
        { name: "Patrick Shawn Biange", description: "Republican candidate for SD-12", status: "challenger", grade: null },
        { name: "John Goldwater", description: "Republican candidate for SD-12", status: "challenger", grade: null },
        { name: "Eileen Tesch", description: "Republican candidate for SD-12", status: "challenger", grade: null },
        { name: "Shelley Wright", description: "Republican candidate for SD-12", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Kevin Hertel", description: "Democratic candidate for SD-12; likely former State Rep", status: "challenger", grade: null },
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
        { name: "Ryan Berman", description: "Former two-term State Representative; attorney from Union Lake; 2025 'Leader in the Law' honoree; UNOPPOSED in R primary", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life as State Rep; voted against every pro-abortion measure; co-sponsored heartbeat bill',
            marriage: 'Openly supports traditional marriage; voted against legislation undermining religious views on marriage',
            religiousLiberty: 'Championed religious liberty legislation; voted to protect faith-based adoption agencies from discrimination mandates',
            secondAmendment: 'A-rated by NRA; voted against all 2023 gun control bills including red flag law and storage mandates',
            limitedGov: 'Conservative attorney; voted against expanding government programs; supports deregulation and parental rights in education',
            fiscal: 'Voted against Whitmer budgets; supports tax cuts; opposed corporate welfare spending',
          },
        },
      ],
      democratic: [
        { name: "DC Anderson", description: "Commerce Township resident", status: "challenger", grade: null },
        { name: "Sean Carlson", description: "Oakland County Deputy Executive; former longtime Huron Valley Schools trustee", status: "challenger", grade: null },
        { name: "Cecil D. George", description: "New Hudson resident", status: "challenger", grade: null },
      ],
    },
  },
  14: {
    office: "State Senate — District 14",
    region: "Washtenaw/Jackson - North Ann Arbor, Jackson, rural areas",
    incumbent: "Sue Shink (D)",
    candidates: {
      republican: [
        { name: "Tawn Shawnelle Beliger", description: "Republican candidate for SD-14", status: "challenger", grade: null },
        { name: "Brandon Bradley", description: "Republican candidate for SD-14", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Sue Shink", description: "Incumbent State Senator; conservationist, farmer; former Washtenaw County Board of Commissioners chair; elected 2022 with 55.80%", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to expand abortion access; supported Prop 3',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions in civil rights legislation',
            secondAmendment: 'Voted for 2023 gun control package; supports expanded background checks',
            limitedGov: 'Supports environmental regulations and expanded government role in conservation',
            fiscal: 'Voted for Whitmer budget expansions; supports increased state spending on environmental programs',
          },
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
        { name: "Jason Rogers", description: "Republican candidate for SD-15", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Felicia Brabec", description: "Incumbent State Senator", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; supports expanded abortion access',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights and same-sex marriage',
            religiousLiberty: 'Limited support for religious exemptions in expanding civil rights legislation',
            secondAmendment: 'Voted for 2023 gun control package; supports red flag laws and universal background checks',
            limitedGov: 'Supports government expansion in education, healthcare, and environmental regulation',
            fiscal: 'Voted for Whitmer budget increases; supports expanded state spending',
          },
        },
        { name: "Michael White", description: "Democratic challenger for SD-15", status: "challenger", grade: null },
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
        { name: "Deandre Barnes", description: "Democratic candidate for SD-16", status: "challenger", grade: null },
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
        { name: "Jonathan Lindsey", description: "Republican candidate for SD-17", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Ashleigh Baker", description: "Democratic candidate for SD-17", status: "challenger", grade: null },
        { name: "Mike D. Jones", description: "Democratic candidate for SD-17", status: "challenger", grade: null },
        { name: "Brett Muchow", description: "Democratic candidate for SD-17", status: "challenger", grade: null },
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
        { name: "Anthony Pennock", description: "Democratic candidate for SD-18", status: "challenger", grade: null },
      ],
    },
  },
  19: {
    office: "State Senate — District 19",
    region: "Kalamazoo area",
    incumbent: "Julie M. Rogers (D)",
    candidates: {
      republican: [
        { name: "Shaun Young", description: "Republican candidate for SD-19", status: "challenger", grade: null },
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
        { name: "Curtis Clark", description: "Republican candidate for SD-20", status: "challenger", grade: null },
        { name: "Kenny Clevenger", description: "Casco Township Treasurer (2021-present); former Allegan County Republican Party chairman (2022-2025)", status: "challenger", grade: null },
        { name: "Chris Moraitis", description: "Republican candidate for SD-20", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Dale Murney", description: "Democratic candidate for SD-20", status: "challenger", grade: null },
      ],
    },
  },
  21: {
    office: "State Senate — District 21",
    region: "Ingham County - Lansing area",
    incumbent: "Sarah Anthony (D)",
    candidates: {
      republican: [
        { name: "Josh Burns", description: "Republican candidate for SD-21", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Sarah Anthony", description: "Incumbent State Senator", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; voted to codify abortion rights; championed reproductive rights legislation',
            marriage: 'Voted for Elliott-Larsen expansion; supports LGBTQ rights',
            religiousLiberty: 'Limited support for religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package; supports comprehensive gun reform',
            limitedGov: 'Supports expanded government programs; former county commissioner who grew county services',
            fiscal: 'Senate Appropriations Committee; voted for major budget expansions; supports new spending',
          },
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
        { name: "Mike Murphy", description: "Incumbent State Senator", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Consistent pro-life record; voted against all pro-abortion measures in the Michigan Senate',
            marriage: 'Supports traditional marriage; conservative social values throughout legislative career',
            religiousLiberty: 'Voted to protect religious organizations from state mandates; supports First Amendment protections',
            secondAmendment: 'Strong 2A record; voted against 2023 gun control package; supports gun owners\' rights',
            limitedGov: 'Opposes government overreach; voted against expanding state regulatory authority',
            fiscal: 'Fiscal conservative; voted against budget increases; supports reducing state spending',
          },
        },
      ],
      democratic: [
        { name: "Robert Hower", description: "Democratic candidate for SD-22", status: "challenger", grade: null },
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
        { name: "Daniel Lawless", description: "White Lake resident; Republican candidate for SD-23", status: "challenger", grade: null },
        { name: "Donni Steele", description: "Current State Rep (HD-54, Lake Orion); owns Coldwell Banker Shooltz Realty; BA Business Mgmt from WMU; realtor/property manager/associate broker", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'B', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record as State Rep; voted against pro-abortion legislation',
            marriage: 'Supports traditional values; has not been outspoken on marriage-specific legislation',
            religiousLiberty: 'Voted to protect religious liberty and conscience protections in the legislature',
            secondAmendment: 'Strong 2A supporter; voted against 2023 gun control bills; supports gun owners\' rights',
            limitedGov: 'Business owner who opposes excessive regulation; supports reducing government bureaucracy',
            fiscal: 'Fiscal conservative; business background; voted against budget expansions and tax increases',
          },
        },
      ],
      democratic: [
        { name: "Margarette Gupta", description: "Oakland Township resident", status: "challenger", grade: null },
        { name: "Greg Hill", description: "Oxford resident", status: "challenger", grade: null },
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
        { name: "Terence H. Mekoski", description: "Republican candidate for SD-24", status: "challenger", grade: null },
        { name: "Douglas Chester Wozniak", description: "Small-business owner, practicing attorney; served in House 2018; special election to Senate 2021; returned to House 2024", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Consistently pro-life in both House and Senate; voted against all pro-abortion measures',
            marriage: 'Strong traditional marriage supporter; voted to protect marriage definition',
            religiousLiberty: 'Championed religious liberty as both State Rep and Senator; voted for conscience protections',
            secondAmendment: 'Strong 2A record across both chambers; voted against gun control bills; NRA-supported',
            limitedGov: 'Attorney and small-business owner; opposes government overreach; supports deregulation',
            fiscal: 'Fiscal hawk; voted against Whitmer budget increases in both House and Senate; supports tax cuts',
          },
        },
      ],
      democratic: [
        { name: "Frank Borsellino", description: "Democratic candidate for SD-24", status: "challenger", grade: null },
        { name: "Edlira Sako", description: "Democratic candidate for SD-24", status: "challenger", grade: null },
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
        { name: "Andrew Beeler", description: "Port Huron resident; Republican candidate for SD-25", status: "challenger", grade: null },
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
        { name: "John W. Mahaney", description: "Port Huron resident", status: "challenger", grade: null },
        { name: "Randy Schultz", description: "Mussey resident", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "April L. Osentoski", description: "Bad Axe resident; unopposed in D primary", status: "challenger", grade: null },
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
        { name: "Daltson Atwell", description: "Republican candidate for SD-26", status: "challenger", grade: null },
        { name: "Matthew Bierlein", description: "Former State Representative; reelected 2024 with 70.36%; retiring from House to run for Senate", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life voting record as State Rep; co-sponsored pro-life legislation',
            marriage: 'Supports traditional marriage; conservative social values in rural Tuscola/Lapeer district',
            religiousLiberty: 'Voted to protect religious organizations from government mandates',
            secondAmendment: 'Strong 2A supporter; voted against all 2023 gun control bills; rural district with strong gun culture',
            limitedGov: 'Conservative voting record opposing government expansion; supports limited regulation',
            fiscal: 'Fiscal conservative; won reelection with 70%+ showing broad support for his spending restraint positions',
          },
        },
        { name: "James M. Graham", description: "Republican candidate for SD-26", status: "challenger", grade: null },
        { name: "Gabriel Lossing", description: "Republican candidate for SD-26", status: "challenger", grade: null },
        { name: "Candice Miller", description: "Republican candidate for SD-26", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Martin L. Cousineau", description: "Democratic candidate for SD-26", status: "challenger", grade: null },
        { name: "John Hall", description: "Democratic candidate for SD-26", status: "challenger", grade: null },
        { name: "Brendan J. Johnson", description: "Democratic candidate for SD-26", status: "challenger", grade: null },
      ],
    },
  },
  27: {
    office: "State Senate — District 27",
    region: "Genesee County - Flint area",
    incumbent: "John D. Cherry (D)",
    candidates: {
      republican: [
        { name: "Bill Bain", description: "Republican candidate for SD-27", status: "challenger", grade: null },
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
        { name: "Julie L. DeRose", description: "Republican candidate for SD-28", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Rashida Harrison", description: "Democratic candidate for SD-28", status: "challenger", grade: null },
        { name: "Ted Kilvington", description: "Democratic candidate for SD-28", status: "challenger", grade: null },
        { name: "Robert Orlando Pena", description: "Democratic candidate for SD-28", status: "challenger", grade: null },
        { name: "Mark Polsdofer", description: "Democratic candidate for SD-28", status: "challenger", grade: null },
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
        { name: "Brady A. Middleton", description: "Republican candidate for SD-29", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Ivan Diaz", description: "Democratic candidate for SD-29", status: "challenger", grade: null },
        { name: "Abbie Groff-Blaszak", description: "Democratic candidate for SD-29", status: "challenger", grade: null },
        { name: "Phil Skaggs", description: "Democratic candidate for SD-29", status: "challenger", grade: null },
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
        { name: "Carol Glanville", description: "Democratic candidate for SD-30", status: "challenger", grade: null },
        { name: "Rickie Kreuzer", description: "Democratic candidate for SD-30", status: "challenger", grade: null },
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
        { name: "Kevin J. Maas", description: "Republican candidate for SD-31", status: "challenger", grade: null },
        { name: "Michael J. Markey Jr.", description: "Businessman; 2022 disqualified gubernatorial candidate; 2024 congressional candidate", status: "challenger", grade: null },
        { name: "John Wetzel", description: "Republican candidate for SD-31", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Keagan Host", description: "Democratic candidate for SD-31", status: "challenger", grade: null },
        { name: "Chris Kleinjans", description: "Democratic candidate for SD-31", status: "challenger", grade: null },
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
        { name: "Kim Cole", description: "Republican candidate for SD-32", status: "challenger", grade: null },
        { name: "Max Riekse", description: "Republican candidate for SD-32", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Rebecca Amidon", description: "Democratic candidate for SD-32", status: "challenger", grade: null },
        { name: "Jay Kilgo", description: "Democratic candidate for SD-32", status: "challenger", grade: null },
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
        { name: "Katie DeBoer", description: "Kent County Commissioner", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Generally pro-life; county commissioner role limits direct voting record on this issue',
            marriage: 'Supports traditional values; limited direct record on marriage legislation as county commissioner',
            religiousLiberty: 'Supports religious liberty; West Michigan Republican with faith-based values',
            secondAmendment: 'Supports 2A rights; limited direct voting record as county commissioner',
            limitedGov: 'County commissioner focused on efficient local government; supports responsible governance',
            fiscal: 'County-level fiscal experience; supports responsible spending at the county level',
          },
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
        { name: "Gina Johnsen", description: "Current State Representative from Portland", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record in the Michigan House; consistently votes to protect unborn life',
            marriage: 'Supports traditional marriage; conservative on social issues',
            religiousLiberty: 'Supports religious freedom protections; voted for conscience clause legislation',
            secondAmendment: 'Strong 2A record; voted against gun control measures',
            limitedGov: 'Supports limited government and reducing regulations',
            fiscal: 'Voted against expanded state spending; supports balanced budgets',
          },
        },
        { name: "Thomas J. Norton", description: "Rockford resident", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Stan Opal", description: "Democratic candidate for SD-33", status: "challenger", grade: null },
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
        { name: "Roger Hauck", description: "Former State Representative; strong conservative record", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life as State Rep; voted against all pro-abortion measures; 100% Michigan Right to Life',
            marriage: 'Strong traditional marriage supporter; conservative social values',
            religiousLiberty: 'Championed religious liberty protections as State Rep; voted for conscience protections',
            secondAmendment: 'A-rated by NRA; voted against all gun control measures; strong rural 2A advocate',
            limitedGov: 'Opposed government overreach; voted against expanding state regulatory authority',
            fiscal: 'Fiscal conservative; voted against budget increases; supports reducing state spending',
          },
        },
        { name: "Rhonda L. Lange", description: "Republican candidate for SD-34", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Tyler Landgraf", description: "Democratic candidate for SD-34", status: "challenger", grade: null },
      ],
    },
  },
  35: {
    office: "State Senate — District 35",
    region: "Genesee/Saginaw area",
    incumbent: "Chedrick Greene (D)",
    candidates: {
      republican: [
        { name: "Jason Tunney", description: "Republican candidate; ran in May 2026 special election", status: "challenger", grade: null },
        { name: "Chadwick Twillman", description: "Republican candidate for SD-35", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Brandell Adams", description: "Democratic candidate for SD-35", status: "challenger", grade: null },
        { name: "Chedrick Greene", description: "Won May 2026 special election to fill Kristen McDonald Rivet's vacancy", status: "incumbent", grade: null },
        { name: "Serenity Hope Salak", description: "Democratic candidate for SD-35", status: "challenger", grade: null },
      ],
    },
  },
  36: {
    office: "State Senate — District 36",
    region: "NW Lower Peninsula - Cadillac, Lake City area",
    incumbent: "Michele Hoitenga (R)",
    candidates: {
      republican: [
        { name: "Michele Hoitenga", description: "Incumbent State Senator", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life throughout legislative career; voted against all pro-abortion measures; 100% Michigan Right to Life scorecard',
            marriage: 'Strong supporter of traditional marriage; outspoken on social conservative values',
            religiousLiberty: 'Championed religious liberty protections; introduced bills to protect faith-based organizations',
            secondAmendment: 'A-rated by NRA; voted against 2023 gun control package; strong rural 2A advocate',
            limitedGov: 'Known for opposing government overreach; introduced bills to reduce regulations; homeschool champion',
            fiscal: 'Fiscal conservative; voted against every Whitmer budget increase; supports tax cuts and spending restraint',
          },
        },
      ],
      democratic: [
        { name: "Mark W. Yonkman", description: "Democratic candidate for SD-36", status: "challenger", grade: null },
      ],
    },
  },
  37: {
    office: "State Senate — District 37",
    region: "NE Lower Peninsula - Cheboygan, Petoskey, Mackinaw area",
    incumbent: "John Damoose (R)",
    candidates: {
      republican: [
        { name: "John Damoose", description: "Incumbent State Senator", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life; consistent voting record against abortion expansion in Michigan',
            marriage: 'Supports traditional marriage; Northern Michigan conservative values',
            religiousLiberty: 'Voted to protect religious organizations from government mandates; supports conscience protections',
            secondAmendment: 'Strong 2A supporter; voted against 2023 gun control package; represents rural Northern Michigan',
            limitedGov: 'Opposes government overreach; supports reducing state bureaucracy and regulations',
            fiscal: 'Fiscal conservative; voted against Whitmer budget expansions; supports balanced budgets',
          },
        },
      ],
      democratic: [
        { name: "Kate Gallup", description: "Democratic candidate for SD-37", status: "challenger", grade: null },
        { name: "Mitchell Treadwell", description: "Democratic candidate for SD-37", status: "challenger", grade: null },
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
        { name: "Beau Matthew LaFave", description: "Former State Rep (2017-2022); pro-open carry conservative firebrand; endorsed by Rep. Jack Bergman; tried to bring AR-style rifle to Whitmer State of the State", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life throughout House career; co-sponsored multiple pro-life bills',
            marriage: 'Strong traditional marriage supporter; outspoken conservative on social issues',
            religiousLiberty: 'Championed religious liberty and First Amendment protections as State Rep',
            secondAmendment: 'One of the strongest 2A advocates in the legislature; attempted to open carry in State Capitol; A+ NRA rating',
            limitedGov: 'Liberty-focused conservative; opposes government overreach; supports constitutional limits on government',
            fiscal: 'Fiscal hawk; voted against state spending increases; supports tax elimination',
          },
        },
        { name: "David Prestin", description: "Current State Rep (HD-108, elected 2022, reelected 2024); endorsed by outgoing Sen. Ed McBroom, Reps. Greg Markkanen and Karl Bohnak", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record in the House; voted against all pro-abortion legislation',
            marriage: 'Supports traditional marriage; Upper Peninsula conservative values',
            religiousLiberty: 'Supports religious freedom protections; voted for conscience clause legislation',
            secondAmendment: 'Strong 2A record; voted against 2023 gun control bills; represents rural UP district',
            limitedGov: 'Endorsed by outgoing Sen. McBroom for limited-government credentials; opposes state overreach',
            fiscal: 'Fiscal conservative; voted against Whitmer budget expansions; supports responsible spending',
          },
        },
        { name: "Christopher J. Reynolds", description: "Republican candidate for SD-38", status: "challenger", grade: null },
        { name: "Kayla Wikstrom", description: "Republican candidate for SD-38", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Jacob P. La Jeunesse", description: "Democratic candidate for SD-38", status: "challenger", grade: null },
        { name: "Chris Mapps", description: "Democratic candidate for SD-38", status: "challenger", grade: null },
        { name: "Kelli J. Van Ginhoven", description: "Democratic candidate for SD-38", status: "challenger", grade: null },
      ],
    },
  },
}

// ── State House Races (by district) ──────────────────────────────
// All 110 seats on the 2026 ballot
// Only districts with confirmed candidates listed (34 of 110)

export const STATE_HOUSE_RACES = {
  2: {
    office: "State House — District 2",
    region: "Wayne County - Taylor, Romulus area",
    incumbent: "Tullio Liberati Jr. (D)",
    note: "Open seat",
    candidates: {
      republican: [
        { name: "Ron Kokinda", description: "Republican candidate for HD-2", status: "challenger", grade: null },
        { name: "Zacharia Ortiz", description: "Republican candidate for HD-2", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Frank A. Liberati", description: "Democratic candidate for HD-2", status: "challenger", grade: null },
        { name: "Gary Schlack", description: "Democratic candidate for HD-2", status: "challenger", grade: null },
        { name: "Joanna Whaley", description: "Democratic candidate for HD-2", status: "challenger", grade: null },
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
        { name: "Michele Lundgren", description: "Republican candidate for HD-9", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Willie Burton", description: "Democratic candidate for HD-9", status: "challenger", grade: null },
        { name: "Bobby Christian Sr.", description: "Democratic candidate for HD-9", status: "challenger", grade: null },
        { name: "Anthony Eid", description: "Former MICRC (redistricting commission) member", status: "challenger", grade: null },
        { name: "Darryl J. Ervin", description: "Democratic candidate for HD-9", status: "challenger", grade: null },
        { name: "Arthur Harrington", description: "Democratic candidate for HD-9", status: "challenger", grade: null },
        { name: "Bryant Hepp", description: "Democratic candidate for HD-9", status: "challenger", grade: null },
        { name: "Karriem Holman", description: "Democratic candidate for HD-9", status: "challenger", grade: null },
        { name: "Patricia Hurt", description: "Democratic candidate for HD-9", status: "challenger", grade: null },
        { name: "Toni Mua", description: "Democratic candidate for HD-9", status: "challenger", grade: null },
        { name: "Eldridge Ross", description: "Democratic candidate for HD-9", status: "challenger", grade: null },
        { name: "Rick Silva", description: "Democratic candidate for HD-9", status: "challenger", grade: null },
      ],
    },
  },
  13: {
    office: "State House — District 13",
    region: "Macomb County",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: "Casey Armitage", description: "Republican candidate for HD-13", status: "challenger", grade: null },
        { name: "Mark Thomas Foster", description: "Republican candidate for HD-13", status: "challenger", grade: null },
        { name: "Julie Leonardi", description: "Republican candidate for HD-13", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Mai Xiong", description: "Democratic candidate for HD-13", status: "challenger", grade: null },
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
        { name: "Ryan Foster", description: "Southfield resident", status: "challenger", grade: null },
        { name: "Ronald Ulmer-Paul", description: "Farmington Hills resident", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Kelly Garrett", description: "Lathrup Village resident; UNOPPOSED in D primary", status: "challenger", grade: null },
      ],
    },
  },
  19: {
    office: "State House — District 19",
    region: "Oakland County - Farmington Hills",
    incumbent: "Samantha Steckloff (D)",
    candidates: {
      republican: [
        { name: "Kevin J. Hammer", description: "Farmington Hills resident", status: "challenger", grade: null },
        { name: "Mitch Swoboda", description: "Farmington Hills resident", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Samantha Steckloff", description: "Incumbent State Rep; Farmington Hills", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted to codify abortion rights; Planned Parenthood endorsed',
            marriage: 'Voted for Elliott-Larsen LGBTQ expansion',
            religiousLiberty: 'Limited support for religious exemptions in civil rights legislation',
            secondAmendment: 'Voted for 2023 gun control package; supports expanded gun regulations',
            limitedGov: 'Supports expanded government programs and regulations',
            fiscal: 'Voted for Whitmer budget expansions; supports increased state spending',
          },
        },
        { name: "Brandon Young", description: "Southfield resident", status: "challenger", grade: null },
      ],
    },
  },
  20: {
    office: "State House — District 20",
    region: "Oakland County - West Bloomfield, Bloomfield Twp",
    incumbent: "Noah Arbit (D)",
    candidates: {
      republican: [
        { name: "Hermon Barbe", description: "Republican candidate for HD-20", status: "challenger", grade: null },
        { name: "S. David Sullivan", description: "Republican candidate for HD-20", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Noah Arbit", description: "Incumbent State Rep; UNOPPOSED in D primary", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; supports expanded abortion access',
            marriage: 'LGBTQ Caucus member; strongly supports LGBTQ rights including same-sex marriage',
            religiousLiberty: 'Actively opposed religious exemptions in anti-discrimination legislation',
            secondAmendment: 'Voted for 2023 gun control package; supports comprehensive gun reform',
            limitedGov: 'Supports expanded government role in civil rights, education, and social services',
            fiscal: 'Voted for Whitmer budget expansions; progressive on spending',
          },
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
        { name: "Steve Carra", description: "Former State Representative; strong conservative record", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life as State Rep; voted against all pro-abortion measures',
            marriage: 'Strong traditional marriage supporter; conservative social values',
            religiousLiberty: 'Championed religious liberty protections; voted for conscience clause legislation',
            secondAmendment: 'Strong 2A advocate; voted against all gun control measures; Trump-endorsed in prior race',
            limitedGov: 'Known as one of the most conservative House members; opposed government overreach on COVID and regulations',
            fiscal: 'Fiscal hawk; voted against all spending increases; supports eliminating income tax',
          },
        },
        { name: "Max Coon", description: "Republican candidate for HD-36", status: "challenger", grade: null },
        { name: "Luke Lori", description: "Republican candidate for HD-36", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Cole Slaski", description: "Democratic candidate for HD-36", status: "challenger", grade: null },
      ],
    },
  },
  51: {
    office: "State House — District 51",
    region: "Oakland County - Highland Twp, Milford, White Lake",
    incumbent: "Matt Maddock (R)",
    candidates: {
      republican: [
        { name: "Matt Maddock", description: "Incumbent State Rep since 2019; represents Milford area; UNOPPOSED in R primary", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life; voted against all pro-abortion measures; 100% Michigan Right to Life',
            marriage: 'Outspoken supporter of traditional marriage; strong social conservative',
            religiousLiberty: 'Champions religious liberty; opposes government mandates on faith-based organizations',
            secondAmendment: 'A-rated by NRA; voted against all 2023 gun control bills; strong 2A advocate',
            limitedGov: 'Known for challenging government overreach; vocal critic of COVID lockdown measures; MAGA-aligned',
            fiscal: 'Fiscal hawk; votes against spending increases; supports eliminating income tax',
          },
        },
      ],
      democratic: [
        { name: "Stacey McDuffie", description: "White Lake resident", status: "challenger", grade: null },
        { name: "Gary Murrell", description: "Westland resident", status: "challenger", grade: null },
      ],
    },
  },
  52: {
    office: "State House — District 52",
    region: "Oakland County - Waterford, Commerce Twp area",
    incumbent: "Mike Harris (R)",
    candidates: {
      republican: [
        { name: "Mike Harris", description: "Incumbent State Rep; UNOPPOSED in R primary", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'B', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record; voted against pro-abortion legislation in the House',
            marriage: 'Supports traditional values; not outspoken on marriage-specific legislation',
            religiousLiberty: 'Voted to protect religious liberty and conscience protections',
            secondAmendment: 'Strong 2A record; voted against 2023 gun control package; NRA-supported',
            limitedGov: 'Supports reducing government regulations; opposes state overreach in local affairs',
            fiscal: 'Fiscal conservative; voted against budget increases; supports tax relief',
          },
        },
      ],
      democratic: [
        { name: "Brendan P. Leddy", description: "Democratic candidate for HD-52", status: "challenger", grade: null },
        { name: "Tom Owensby", description: "Democratic candidate for HD-52", status: "challenger", grade: null },
      ],
    },
  },
  53: {
    office: "State House — District 53",
    region: "Oakland County - Pontiac, Auburn Hills area",
    incumbent: "Brenda Carter (D)",
    candidates: {
      republican: [
        { name: "Melissa Schultz", description: "Republican candidate for HD-53", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Robert L. Anderlie", description: "Democratic challenger for HD-53", status: "challenger", grade: null },
        { name: "Brenda Carter", description: "Incumbent State Rep; reelected 2024 with 65.85%", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted to codify abortion rights',
            marriage: 'Voted for Elliott-Larsen LGBTQ expansion',
            religiousLiberty: 'Limited support for religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package; Oakland County Democrat',
            limitedGov: 'Supports expanded government programs and social services',
            fiscal: 'Voted for Whitmer budget expansions',
          },
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
        { name: "Roman Gaskey", description: "Republican candidate for HD-54", status: "challenger", grade: null },
        { name: "Jeffrey M. Omtvedt", description: "Republican candidate for HD-54", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Sarah Pounds", description: "Lake Orion resident; Democratic candidate for HD-54", status: "challenger", grade: null },
      ],
    },
  },
  55: {
    office: "State House — District 55",
    region: "Oakland County - Rochester Hills area",
    incumbent: "Mark Tisdel (R)",
    candidates: {
      republican: [
        { name: "Mark Tisdel", description: "Incumbent State Rep; UNOPPOSED in R primary", status: "incumbent", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Generally pro-life; represents swing Rochester Hills district; moderates messaging',
            marriage: 'Supports traditional values but represents moderate suburban district',
            religiousLiberty: 'Supports religious liberty protections; moderate on implementation',
            secondAmendment: 'Strong 2A record; voted against 2023 gun control package; NRA-backed',
            limitedGov: 'Supports limited government; moderate suburban approach to regulation',
            fiscal: 'Fiscal conservative; former Rochester Hills mayor with focus on efficient government spending',
          },
        },
      ],
      democratic: [
        { name: "Alex Hawkins", description: "Democratic candidate for HD-55", status: "challenger", grade: null },
        { name: "Jim McMahon", description: "Democratic candidate for HD-55", status: "challenger", grade: null },
        { name: "Rhonda Yates", description: "Democratic candidate for HD-55", status: "challenger", grade: null },
      ],
    },
  },
  56: {
    office: "State House — District 56",
    region: "Oakland County - Madison Heights, Hazel Park area",
    incumbent: "Sharon MacDonell (D)",
    candidates: {
      republican: [
        { name: "Ashok Baddi", description: "Republican candidate for HD-56", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Sharon MacDonell", description: "Incumbent State Rep; UNOPPOSED in D primary", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted to codify abortion rights in Michigan',
            marriage: 'Voted for Elliott-Larsen LGBTQ expansion',
            religiousLiberty: 'Limited support for religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package',
            limitedGov: 'Supports expanded government programs',
            fiscal: 'Voted for Whitmer budget expansions',
          },
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
        { name: "Thomas E. Kuhn", description: "Incumbent State Rep; UNOPPOSED in R primary", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record; voted against all pro-abortion measures in the House',
            marriage: 'Supports traditional marriage and family values',
            religiousLiberty: 'Voted to protect religious liberty and conscience protections',
            secondAmendment: 'Strong 2A supporter; voted against 2023 gun control package',
            limitedGov: 'Opposes government overreach; supports reducing regulatory burden',
            fiscal: 'Fiscal conservative; voted against budget expansions; supports balanced budgets',
          },
        },
      ],
      democratic: [
        { name: "Jerilynn M. Chambliss", description: "Democratic candidate for HD-57", status: "challenger", grade: null },
        { name: "Tom Turner", description: "Democratic candidate for HD-57", status: "challenger", grade: null },
      ],
    },
  },
  58: {
    office: "State House — District 58",
    region: "Macomb County - majority of Sterling Heights",
    incumbent: "Ron Robinson (R)",
    candidates: {
      republican: [
        { name: "Ron Robinson", description: "Incumbent State Rep; UNOPPOSED in R primary", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record; voted against pro-abortion legislation',
            marriage: 'Supports traditional marriage and family values',
            religiousLiberty: 'Voted to protect religious organizations from government mandates',
            secondAmendment: 'Strong 2A record; voted against 2023 gun control bills',
            limitedGov: 'Supports limited government; opposes state overreach',
            fiscal: 'Fiscal conservative; voted against Whitmer budget expansions',
          },
        },
      ],
      democratic: [
        { name: "Tabu M. Gantt II", description: "Democratic candidate for HD-58", status: "challenger", grade: null },
        { name: "Katrina Manetta", description: "Democratic candidate for HD-58", status: "challenger", grade: null },
      ],
    },
  },
  59: {
    office: "State House — District 59",
    region: "Macomb County",
    incumbent: "Sylvia Grot (R)",
    candidates: {
      republican: [
        { name: "Sylvia Grot", description: "Incumbent State Rep", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record; voted against all pro-abortion legislation',
            marriage: 'Supports traditional marriage and family values',
            religiousLiberty: 'Voted to protect religious liberty and conscience protections',
            secondAmendment: 'Strong 2A supporter; voted against 2023 gun control package',
            limitedGov: 'Supports limited government; opposes overregulation',
            fiscal: 'Fiscal conservative; voted against budget expansions',
          },
        },
        { name: "Matt Grubb", description: "Republican challenger for HD-59", status: "challenger", grade: null },
        { name: "Jean Zott", description: "Republican challenger for HD-59", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Jason Robbins", description: "Democratic candidate for HD-59", status: "challenger", grade: null },
      ],
    },
  },
  60: {
    office: "State House — District 60",
    region: "Macomb County",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: "Joseph Aragona", description: "Republican candidate for HD-60", status: "challenger", grade: null },
        { name: "Tom Sokol", description: "Republican candidate for HD-60", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Amy Gray", description: "Democratic candidate for HD-60", status: "challenger", grade: null },
        { name: "Kenneth Paul Jenkins", description: "Democratic candidate for HD-60", status: "challenger", grade: null },
      ],
    },
  },
  61: {
    office: "State House — District 61",
    region: "Macomb - SE Sterling Heights, Clinton Twp, Mt Clemens",
    incumbent: "Denise Mentzer (D)",
    candidates: {
      republican: [
        { name: "John Grossenbacher", description: "Republican candidate for HD-61", status: "challenger", grade: null },
        { name: "James Perry", description: "Republican candidate for HD-61", status: "challenger", grade: null },
        { name: "Robert Wojtowicz", description: "Republican candidate for HD-61", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Mahbube Khan", description: "Democratic challenger for HD-61", status: "challenger", grade: null },
        { name: "Denise Mentzer", description: "Incumbent State Rep", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted for abortion rights legislation',
            marriage: 'Voted for LGBTQ civil rights expansion',
            religiousLiberty: 'Limited support for religious exemptions in legislation',
            secondAmendment: 'Voted for 2023 gun control package',
            limitedGov: 'Supports expanded government programs',
            fiscal: 'Voted for budget expansions',
          },
        },
      ],
    },
  },
  66: {
    office: "State House — District 66",
    region: "Livingston/Wayne area",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: "Catherine Colvin", description: "Republican candidate for HD-66", status: "challenger", grade: null },
        { name: "Josh Schriver", description: "Republican incumbent; known for controversial social media posts; censured by House in 2024", status: "challenger", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strongly pro-life; among most conservative House members on social issues',
            marriage: 'Strong traditional marriage supporter; outspoken social conservative',
            religiousLiberty: 'Champions religious liberty; opposes government mandates on faith',
            secondAmendment: 'Strong 2A advocate; voted against all gun control measures',
            limitedGov: 'One of the most anti-government members in the House; censured for extreme rhetoric but consistently votes for limited government',
            fiscal: 'Ultra-fiscal conservative; opposes virtually all government spending increases',
          },
        },
      ],
      democratic: [
        { name: "Ned Zimmer", description: "Democratic candidate for HD-66", status: "challenger", grade: null },
      ],
    },
  },
  73: {
    office: "State House — District 73",
    region: "Ingham County - East Lansing area",
    incumbent: "Julie Brixie (D)",
    candidates: {
      republican: [
        { name: "Daniel L. Ewart", description: "Republican candidate for HD-73", status: "challenger", grade: null },
        { name: "Norm Grant", description: "Republican candidate for HD-73", status: "challenger", grade: null },
        { name: "Joshua Jon Rockey", description: "Republican candidate for HD-73", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Julie Brixie", description: "Incumbent State Rep; UNOPPOSED in D primary", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Strongly pro-choice; supports expanded abortion access',
            marriage: 'Voted for LGBTQ civil rights expansion',
            religiousLiberty: 'Limited support for religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package; East Lansing progressive',
            limitedGov: 'Supports expanded government programs; education focus',
            fiscal: 'Voted for Whitmer budget expansions',
          },
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
        { name: "Clinton Tarver", description: "Republican candidate for HD-74", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Aaron Iturralde", description: "Democratic candidate for HD-74", status: "challenger", grade: null },
        { name: "Robert L. Kosowski", description: "Democratic candidate for HD-74", status: "challenger", grade: null },
        { name: "Aaron Nowland", description: "Democratic candidate for HD-74", status: "challenger", grade: null },
        { name: "Harold A. Pope", description: "Democratic candidate for HD-74", status: "challenger", grade: null },
        { name: "Erin Schor", description: "Democratic candidate for HD-74", status: "challenger", grade: null },
        { name: "TyJuan Thirdgill", description: "Democratic candidate for HD-74", status: "challenger", grade: null },
      ],
    },
  },
  78: {
    office: "State House — District 78",
    region: "Eaton/Barry area",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: "Terence M. Frewen", description: "Republican candidate for HD-78", status: "challenger", grade: null },
        { name: "Kaleb M. Hudson", description: "Republican candidate for HD-78", status: "challenger", grade: null },
        { name: "Miguel Pilar", description: "Republican candidate for HD-78", status: "challenger", grade: null },
        { name: "Brandon L. Strong", description: "Republican candidate for HD-78", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Rachel Gross", description: "Democratic candidate for HD-78", status: "challenger", grade: null },
      ],
    },
  },
  85: {
    office: "State House — District 85",
    region: "Ottawa County",
    incumbent: "Open",
    candidates: {
      republican: [
        { name: "Jason Ickes", description: "Republican candidate for HD-85", status: "challenger", grade: null },
        { name: "John C. O'Brien", description: "Republican candidate for HD-85", status: "challenger", grade: null },
        { name: "Bradley Slagh", description: "Republican candidate for HD-85", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Richard Abraham", description: "Democratic candidate for HD-85", status: "challenger", grade: null },
      ],
    },
  },
  88: {
    office: "State House — District 88",
    region: "Ottawa/Muskegon area",
    incumbent: "Greg VanWoerkom (R)",
    candidates: {
      republican: [
        { name: "Ethan Frasier", description: "Republican challenger for HD-88", status: "challenger", grade: null },
        { name: "Greg VanWoerkom", description: "Incumbent State Rep", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record; voted against all pro-abortion measures',
            marriage: 'Supports traditional values; West Michigan conservative district',
            religiousLiberty: 'Voted for religious liberty protections in the House',
            secondAmendment: 'Strong 2A supporter; voted against 2023 gun control package',
            limitedGov: 'Supports limited government; opposes excessive regulation',
            fiscal: 'Fiscal conservative; voted against budget expansions',
          },
        },
      ],
      democratic: [
        { name: "Kiel Reid", description: "Democratic candidate for HD-88", status: "challenger", grade: null },
      ],
    },
  },
  89: {
    office: "State House — District 89",
    region: "Ottawa/Allegan area",
    incumbent: "Luke Meerman (R)",
    candidates: {
      republican: [
        { name: "Patrick Kapenga", description: "Republican candidate for HD-89", status: "challenger", grade: null },
        { name: "Joe Moss", description: "Republican candidate for HD-89", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Meegan Zickus", description: "Democratic candidate for HD-89", status: "challenger", grade: null },
      ],
    },
  },
  90: {
    office: "State House — District 90",
    region: "Kent County - Rockford, Ada area",
    incumbent: "Bryan Posthumus (R)",
    candidates: {
      republican: [
        { name: "Lynn Afendoulis", description: "Former State Rep (HD-73, 2019-2021); filed April 17, 2026; Rockford resident", status: "challenger", grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' },
          gradeJustifications: {
            proLife: 'Generally pro-life; Kent County Republican with moderate suburban sensibilities',
            marriage: 'Supports traditional values; not outspoken on marriage issues',
            religiousLiberty: 'Supports religious liberty; mainstream Republican position',
            secondAmendment: 'Supports 2A rights; moderate suburban approach',
            limitedGov: 'Supports limited government; moderate West Michigan Republican',
            fiscal: 'Fiscal conservative; supports responsible spending; establishment Republican',
          },
        },
        { name: "Susannah Watts", description: "Republican candidate; filed January 15, 2026", status: "challenger", grade: null },
        { name: "Andrew Jackson Willis", description: "Republican candidate; filed January 20, 2026", status: "challenger", grade: null },
        { name: "Jordan Youngquist", description: "Republican candidate; filed January 16, 2026", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Rachel Crowther", description: "Democratic candidate for HD-90", status: "challenger", grade: null },
      ],
    },
  },
  91: {
    office: "State House — District 91",
    region: "Montcalm/Ionia area",
    incumbent: "Pat Outman (R)",
    candidates: {
      republican: [
        { name: "Pat Outman", description: "Incumbent State Rep; UNOPPOSED in R primary", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record; voted against pro-abortion legislation',
            marriage: 'Supports traditional marriage; conservative Montcalm/Ionia district',
            religiousLiberty: 'Voted for religious liberty and conscience protections',
            secondAmendment: 'Strong 2A record; voted against 2023 gun control bills; rural district',
            limitedGov: 'Supports limited government; agricultural community values',
            fiscal: 'Fiscal conservative; voted against budget expansions',
          },
        },
      ],
      democratic: [
        { name: "Frank Lafata", description: "Democratic candidate for HD-91", status: "challenger", grade: null },
      ],
    },
  },
  92: {
    office: "State House — District 92",
    region: "Isabella/Clare area",
    incumbent: "Jerry Neyer (R)",
    candidates: {
      republican: [
        { name: "Jerry Neyer", description: "Incumbent State Rep; UNOPPOSED in R primary", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record; consistent Republican votes on abortion issues',
            marriage: 'Supports traditional values; conservative Isabella/Clare district',
            religiousLiberty: 'Voted for religious liberty protections',
            secondAmendment: 'Strong 2A supporter; voted against gun control bills; rural district',
            limitedGov: 'Opposes government overreach; supports limited regulation',
            fiscal: 'Fiscal conservative; voted against spending increases',
          },
        },
      ],
      democratic: [
        { name: "Aaron Bailey", description: "Democratic candidate for HD-92", status: "challenger", grade: null },
        { name: "Luke Del Castillo", description: "Democratic candidate for HD-92", status: "challenger", grade: null },
      ],
    },
  },
  93: {
    office: "State House — District 93",
    region: "Saginaw area",
    incumbent: "Tim Kelly (R)",
    candidates: {
      republican: [
        { name: "Tim Kelly", description: "Incumbent State Rep; UNOPPOSED in R primary", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record; consistent conservative on abortion issues',
            marriage: 'Supports traditional marriage and family values',
            religiousLiberty: 'Voted for religious liberty protections',
            secondAmendment: 'Strong 2A supporter; voted against 2023 gun control package',
            limitedGov: 'Supports limited government; opposes excessive regulation',
            fiscal: 'Fiscal conservative; voted against budget expansions',
          },
        },
      ],
      democratic: [
        { name: "Serenity Hope Salak", description: "Democratic candidate for HD-93", status: "challenger", grade: null },
      ],
    },
  },
  94: {
    office: "State House — District 94",
    region: "Saginaw County",
    incumbent: "Amos O'Neal (D)",
    candidates: {
      republican: [
        { name: "Don Sugg", description: "Republican candidate for HD-94", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Amos O'Neal", description: "Incumbent State Rep; UNOPPOSED in D primary", status: "incumbent", grade: 'F',
          positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' },
          gradeJustifications: {
            proLife: 'Pro-choice; voted for abortion rights',
            marriage: 'Voted for LGBTQ expansion',
            religiousLiberty: 'Limited support for religious exemptions',
            secondAmendment: 'Voted for 2023 gun control package',
            limitedGov: 'Supports expanded government social services',
            fiscal: 'Voted for budget expansions; Saginaw progressive',
          },
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
        { name: "Bill G. Schuette", description: "Incumbent State Rep; UNOPPOSED in R primary", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life; son of former AG Bill Schuette who was a strong pro-life champion',
            marriage: 'Supports traditional marriage; conservative Midland-area district',
            religiousLiberty: 'Voted for religious liberty protections',
            secondAmendment: 'Strong 2A supporter; voted against gun control bills',
            limitedGov: 'Supports limited government; Schuette family legacy of conservative governance',
            fiscal: 'Fiscal conservative; voted against spending increases',
          },
        },
      ],
      democratic: [
        { name: "AnnMarie Horseman", description: "Democratic candidate for HD-95", status: "challenger", grade: null },
        { name: "Gary VanBlaricum", description: "Democratic candidate for HD-95", status: "challenger", grade: null },
      ],
    },
  },
  96: {
    office: "State House — District 96",
    region: "Bay County",
    incumbent: "Timothy Beson (R)",
    candidates: {
      republican: [
        { name: "Timothy Beson", description: "Incumbent State Rep; UNOPPOSED in R primary", status: "incumbent", grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record; consistent conservative on social issues',
            marriage: 'Supports traditional marriage and family values',
            religiousLiberty: 'Voted for religious liberty protections in the House',
            secondAmendment: 'Strong 2A record; voted against 2023 gun control package',
            limitedGov: 'Supports limited government; Bay County conservative',
            fiscal: 'Fiscal conservative; voted against budget expansions',
          },
        },
      ],
      democratic: [
        { name: "Christopher R. Girard", description: "Democratic candidate for HD-96", status: "challenger", grade: null },
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
        { name: "Gary Anderson", description: "Republican candidate for HD-101", status: "challenger", grade: null },
        { name: "Jaxon Deur", description: "Republican candidate for HD-101", status: "challenger", grade: null },
        { name: "Luke Eising", description: "Republican candidate for HD-101", status: "challenger", grade: null },
        { name: "Ben Townsend", description: "Republican candidate for HD-101", status: "challenger", grade: null },
        { name: "Natacha Valmont", description: "Republican candidate for HD-101", status: "challenger", grade: null },
        { name: "Rich Vance", description: "Republican candidate for HD-101", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Christopher R. Crain", description: "Democratic candidate for HD-101", status: "challenger", grade: null },
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
        { name: "Casey Hoffman", description: "Republican candidate for HD-108", status: "challenger", grade: null },
        { name: "Larry Johnson", description: "Republican candidate for HD-108", status: "challenger", grade: null },
        { name: "Kurt Perron", description: "Republican candidate for HD-108", status: "challenger", grade: null },
        { name: "Christopher J. Reynolds", description: "Rock resident; switched from Senate race to House race in January 2026", status: "challenger", grade: null },
        { name: "Daryl Schroeder", description: "Engadine resident", status: "challenger", grade: null },
        { name: "Steven Viau", description: "Republican candidate for HD-108", status: "challenger", grade: null },
      ],
      democratic: [
        { name: "Rachel M. Keys", description: "Democratic candidate for HD-108", status: "challenger", grade: null },
      ],
    },
  },
}

// ── County & Township Office Cycles ─────────────────────────────
// Michigan county row officers (Sheriff, Prosecutor, Clerk, Treasurer, Drain
// Commissioner, Register of Deeds) and county commissioners are elected on
// 4-year presidential-year cycles: 2024, 2028, etc. (MCL 168.200, MCL 46.410)
// Township officers (Supervisor, Clerk, Treasurer, Trustees) are also on
// presidential-year 4-year cycles: 2024, 2028, etc. (MCL 168.362)
//
// Therefore: County and township offices are NOT on the 2026 ballot.
// They were last elected in 2024 and will next be elected in 2028.
//
// What IS on the 2026 local ballot:
// - Judicial races (nonpartisan, if > 2x candidates per seat)
// - Some county executive races (Macomb, Wayne — but NOT Oakland)
// - Ballot proposals / millages
// - Community college trustee races (nonpartisan, if contested)

// County executive races — only certain counties have these, on varying cycles
export const COUNTY_EXECUTIVE_RACES_2026 = {
  Macomb: {
    office: 'County Executive',
    partisan: true,
    candidates: {
      republican: [
        { name: 'Richard Moore', description: 'Republican challenger for County Executive', status: 'challenger', grade: null },
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

// Judicial races potentially on the August 2026 ballot (nonpartisan)
// These appear on the nonpartisan section — voters can vote regardless of party column
export const JUDICIAL_RACES_2026 = {
  // Oakland County judicial seats up in 2026 (6-year staggered terms)
  Oakland: [
    { id: 'oakland-circuit-1', office: 'Oakland County Circuit Court', seats: 1, type: 'nonpartisan',
      description: 'Circuit court judges hear major civil and criminal cases. Nonpartisan — all voters can vote in this race.' },
    { id: 'oakland-probate-1', office: 'Oakland County Probate Court', seats: 1, type: 'nonpartisan',
      description: 'Probate court handles estates, guardianships, and mental health commitments. Nonpartisan.' },
  ],
  Macomb: [
    { id: 'macomb-circuit-1', office: 'Macomb County Circuit Court', seats: 1, type: 'nonpartisan',
      description: 'Circuit court judges hear major civil and criminal cases. Nonpartisan.' },
  ],
  Kent: [
    { id: 'kent-circuit-1', office: 'Kent County Circuit Court', seats: 1, type: 'nonpartisan',
      description: 'Circuit court judges hear major civil and criminal cases. Nonpartisan.' },
  ],
}

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
  const judicialRaces = JUDICIAL_RACES_2026[countyName]
  if (judicialRaces && judicialRaces.length > 0) {
    judicialRaces.forEach(race => {
      races.push({
        id: race.id,
        office: race.office,
        level: 'Judicial',
        description: race.description,
        candidates: [], // Judicial candidates aren't in party columns
        type: 'nonpartisan',
        allowWrite: true,
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
