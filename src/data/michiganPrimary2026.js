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
// All 38 seats are on the 2026 ballot (new maps from 2024 redistricting)
// Only districts with confirmed primary challengers are listed

export const STATE_SENATE_RACES = {
  // ── Oakland County area ──
  6: {
    office: 'State Senate — District 6',
    region: 'Bloomfield Hills, Birmingham, Troy (S)',
    incumbent: 'Dayna Polehanki (D)',
    candidates: {
      republican: [
        { name: 'Write-in or TBD', description: 'No Republican filed yet', status: 'open', grade: null },
      ],
      democratic: [
        { name: 'Dayna Polehanki', description: 'Incumbent State Senator', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  12: {
    office: 'State Senate — District 12',
    region: 'Rochester Hills, Auburn Hills, Lake Orion',
    incumbent: 'Michael Webber (R)',
    candidates: {
      republican: [
        { name: 'Michael Webber', description: 'Incumbent State Senator', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life voting record; opposed repeal of Michigan\'s 1931 abortion ban',
            marriage: 'Supports traditional marriage; voted against LGBTQ civil rights expansion',
            religiousLiberty: 'Supports religious liberty protections; opposed mandates on faith-based organizations',
            secondAmendment: 'A-rated by NRA; opposed red flag laws and safe storage mandates',
            limitedGov: 'Opposes expansion of state government; supports school choice; opposed Whitmer emergency powers',
            fiscal: 'Voted against every Whitmer tax increase; supports spending caps',
          },
        },
      ],
      democratic: [],
    },
  },
  14: {
    office: 'State Senate — District 14',
    region: 'West Bloomfield, Farmington Hills, Novi',
    incumbent: 'Rosemary Bayer (D)',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Rosemary Bayer', description: 'Incumbent State Senator', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  16: {
    office: 'State Senate — District 16',
    region: 'Waterford, White Lake, Highland, Milford',
    incumbent: 'Open',
    candidates: {
      republican: [
        { name: 'Donni Steele', description: 'State Representative, HD-51', status: 'major', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life record as state representative; opposes all abortion expansion',
            marriage: 'Supports traditional marriage; voted against LGBTQ mandate bills',
            religiousLiberty: 'Vocal advocate for religious freedom; opposes government mandates on faith organizations',
            secondAmendment: 'A-rated by NRA; opposes red flag laws; supports constitutional carry',
            limitedGov: 'Opposes state government expansion; supports school choice and parental rights',
            fiscal: 'Voted against all Whitmer tax increases; supports zero-based budgeting',
          },
        },
      ],
      democratic: [],
    },
  },
  26: {
    office: 'State Senate — District 26',
    region: 'Clarkston, Ortonville, Brandon, Oxford (N Oakland)',
    incumbent: 'Open',
    candidates: {
      republican: [],
      democratic: [],
    },
  },
  // ── Macomb County ──
  10: {
    office: 'State Senate — District 10',
    region: 'Shelby Twp, Utica, Washington Twp',
    incumbent: 'Ruth Johnson (R)',
    candidates: {
      republican: [
        { name: 'Ruth Johnson', description: 'Incumbent State Senator, former SoS', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life voting record throughout career; opposed Prop 3',
            marriage: 'Supports traditional marriage; opposed Respect for Marriage Act',
            religiousLiberty: 'Advocates religious liberty protections; former Secretary of State who defended faith-based initiatives',
            secondAmendment: 'A-rated by NRA; opposes gun control legislation',
            limitedGov: 'Former SoS focused on government efficiency; opposes expanding state bureaucracy',
            fiscal: 'Strong fiscal conservative; opposes tax increases; supports balanced budgets',
          },
        },
      ],
      democratic: [],
    },
  },
  // ── Grand Rapids / West MI ──
  29: {
    office: 'State Senate — District 29',
    region: 'Grand Rapids (E), Kentwood',
    incumbent: 'Mark Huizenga (R)',
    candidates: {
      republican: [
        { name: 'Mark Huizenga', description: 'Incumbent State Senator', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life record; opposed abortion rights expansion in Michigan',
            marriage: 'Supports traditional marriage; voted against LGBTQ civil rights expansion',
            religiousLiberty: 'Supports religious liberty protections in legislation',
            secondAmendment: 'Supports Second Amendment rights; opposed gun control bills',
            limitedGov: 'Supports limited government; opposes state overreach',
            fiscal: 'Fiscal conservative; opposed Whitmer spending increases',
          },
        },
      ],
      democratic: [],
    },
  },
  30: {
    office: 'State Senate — District 30',
    region: 'Grand Rapids (W), Wyoming, Grandville',
    incumbent: 'Winnie Brinks (D)',
    note: 'Senate Majority Leader',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Winnie Brinks', description: 'Senate Majority Leader', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  // ── Competitive suburban districts ──
  8: {
    office: 'State Senate — District 8',
    region: 'Lansing, East Lansing, Meridian Twp',
    incumbent: 'Sam Singh (D)',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Sam Singh', description: 'Incumbent State Senator', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  13: {
    office: 'State Senate — District 13',
    region: 'Ann Arbor, Ypsilanti',
    incumbent: 'Sue Shink (D)',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Sue Shink', description: 'Incumbent State Senator', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  // ── Northern MI / Rural ──
  35: {
    office: 'State Senate — District 35',
    region: 'Traverse City, Petoskey, Gaylord',
    incumbent: 'John Damoose (R)',
    candidates: {
      republican: [
        { name: 'John Damoose', description: 'Incumbent State Senator', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'B', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Strong pro-life voting record; opposed all abortion expansion legislation',
            marriage: 'Generally supports traditional marriage but has not been as vocal on this issue',
            religiousLiberty: 'Supports religious liberty protections; opposes government mandates on faith organizations',
            secondAmendment: 'Strong Second Amendment record; opposes all gun control measures',
            limitedGov: 'Supports reducing government size; opposes state overreach into local affairs',
            fiscal: 'Fiscal conservative; opposes tax increases and wasteful spending',
          },
        },
      ],
      democratic: [],
    },
  },
  36: {
    office: 'State Senate — District 36',
    region: 'Midland, Bay City, Saginaw (W)',
    incumbent: 'Kevin Hertel (D)',
    note: 'Competitive swing district',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Kevin Hertel', description: 'Incumbent State Senator', status: 'incumbent', grade: 'F' },
      ],
    },
  },
}

// ── State House Races (by district) ──────────────────────────────
// All 110 seats are on the 2026 ballot
// Only districts with confirmed candidates or in key areas are listed

export const STATE_HOUSE_RACES = {
  // ── Oakland County area ──
  51: {
    office: 'State House — District 51',
    region: 'Waterford, White Lake',
    incumbent: 'Donni Steele (R)',
    note: 'Steele may vacate if running for State Senate.',
    candidates: {
      republican: [
        { name: 'Donni Steele', description: 'Incumbent (may run for Senate)', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  52: {
    office: 'State House — District 52',
    region: 'Commerce Twp, Walled Lake, Wixom',
    incumbent: 'Mike Harris (R)',
    candidates: {
      republican: [
        { name: 'Mike Harris', description: 'Incumbent State Rep', status: 'incumbent', grade: 'A',
          positions: { proLife: 'A', marriage: 'B', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life voting record; opposed abortion rights expansion',
            marriage: 'Generally supportive of traditional marriage; moderate public stance',
            religiousLiberty: 'Supports religious liberty protections',
            secondAmendment: 'Supports Second Amendment rights; opposed gun control legislation',
            limitedGov: 'Opposes government overreach; supports parental rights in education',
            fiscal: 'Voted against Whitmer tax increases; supports fiscal restraint',
          },
        },
      ],
      democratic: [],
    },
  },
  54: {
    office: 'State House — District 54',
    region: 'Rochester Hills, Rochester',
    incumbent: 'Mark Tisdel (R)',
    candidates: {
      republican: [
        { name: 'Mark Tisdel', description: 'Incumbent State Rep, former Rochester Hills mayor', status: 'incumbent', grade: 'B',
          positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'A' },
          gradeJustifications: {
            proLife: 'Pro-life but supports some exceptions; moderate approach',
            marriage: 'Has not been vocal on marriage issues; moderate suburban stance',
            religiousLiberty: 'Supports religious liberty but not a primary legislative focus',
            secondAmendment: 'Strong Second Amendment supporter; opposed gun control measures',
            limitedGov: 'Former mayor focused on local control; moderate on government size',
            fiscal: 'Strong fiscal record; business background; opposes tax increases',
          },
        },
      ],
      democratic: [],
    },
  },
  55: {
    office: 'State House — District 55',
    region: 'Troy, Clawson',
    incumbent: 'Aisha Farooqi (D)',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Aisha Farooqi', description: 'Incumbent State Rep', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  56: {
    office: 'State House — District 56',
    region: 'Auburn Hills, Pontiac, Orion Twp',
    incumbent: 'Sharon MacDonell (D)',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Sharon MacDonell', description: 'Incumbent State Rep', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  88: {
    office: 'State House — District 88',
    region: 'Holly, Groveland, Rose, Springfield Twp',
    incumbent: 'Open',
    candidates: {
      republican: [],
      democratic: [],
    },
  },
  94: {
    office: 'State House — District 94',
    region: 'Clarkston, Independence Twp, Brandon Twp, Oxford',
    incumbent: 'Open',
    candidates: {
      republican: [],
      democratic: [],
    },
  },
  // ── Macomb County ──
  57: {
    office: 'State House — District 57',
    region: 'Shelby Twp (N), Washington Twp',
    incumbent: 'Jay DeBoyer (R)',
    candidates: {
      republican: [
        { name: 'Jay DeBoyer', description: 'Incumbent State Rep', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  58: {
    office: 'State House — District 58',
    region: 'Sterling Heights (N), Utica',
    incumbent: 'Nate Shannon (D)',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Nate Shannon', description: 'Incumbent State Rep', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  // ── West Michigan ──
  80: {
    office: 'State House — District 80',
    region: 'Grand Rapids (NE), Plainfield Twp',
    incumbent: 'Phil Green (R)',
    candidates: {
      republican: [
        { name: 'Phil Green', description: 'Incumbent State Rep', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  84: {
    office: 'State House — District 84',
    region: 'Holland, Zeeland, West Ottawa',
    incumbent: 'Luke Meerman (R)',
    candidates: {
      republican: [
        { name: 'Luke Meerman', description: 'Incumbent State Rep', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  // ── Swing / competitive districts ──
  22: {
    office: 'State House — District 22',
    region: 'Livonia (N), Redford Twp',
    incumbent: 'Matt Koleszar (D)',
    note: 'Competitive swing district',
    candidates: {
      republican: [],
      democratic: [
        { name: 'Matt Koleszar', description: 'Incumbent State Rep', status: 'incumbent', grade: 'F' },
      ],
    },
  },
  62: {
    office: 'State House — District 62',
    region: 'Midland, Gladwin',
    incumbent: 'Annette Glenn (R)',
    candidates: {
      republican: [
        { name: 'Annette Glenn', description: 'Incumbent State Rep', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  // ── Northern Michigan ──
  105: {
    office: 'State House — District 105',
    region: 'Traverse City, Leelanau County',
    incumbent: 'Curt VanderWall (R)',
    candidates: {
      republican: [
        { name: 'Curt VanderWall', description: 'Incumbent State Rep, former State Senator', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
  106: {
    office: 'State House — District 106',
    region: 'Petoskey, Charlevoix, Cheboygan',
    incumbent: 'Cam Cavitt (R)',
    candidates: {
      republican: [
        { name: 'Cam Cavitt', description: 'Incumbent State Rep', status: 'incumbent', grade: 'A' },
      ],
      democratic: [],
    },
  },
}

// ── County-Level Offices on the Primary Ballot ──────────────────
// Michigan partisan county offices appear on the August primary
// These are the offices voters will see; candidates vary by county

export const COUNTY_BALLOT_OFFICES = [
  { id: 'sheriff', office: 'Sheriff', partisan: true, term: 4, seats: 1,
    description: 'Chief law enforcement officer of the county. Manages the county jail, serves court orders, and oversees deputies.' },
  { id: 'prosecutor', office: 'Prosecuting Attorney', partisan: true, term: 4, seats: 1,
    description: 'Chief legal officer of the county. Decides which criminal cases to prosecute and represents the county in court.' },
  { id: 'clerk', office: 'Clerk / Register of Deeds', partisan: true, term: 4, seats: 1,
    description: 'Manages county records, elections, vital records (birth/death certificates), and property deed recordings.' },
  { id: 'treasurer', office: 'Treasurer', partisan: true, term: 4, seats: 1,
    description: 'Manages county finances, collects property taxes, and oversees county investments.' },
  { id: 'drain', office: 'Drain Commissioner', partisan: true, term: 4, seats: 1,
    description: 'Manages county drainage infrastructure, stormwater, and flood prevention. Some counties title this "Water Resources Commissioner."' },
  { id: 'commissioner', office: 'Commissioner', partisan: true, term: 2, seats: 1,
    description: 'Your representative on the county board. Sets county budget, policies, and approves county contracts. Districts vary by county.' },
]

// Township offices are also on the August primary ballot in Michigan
export const TOWNSHIP_BALLOT_OFFICES = [
  { id: 'twp-supervisor', office: 'Township Supervisor', partisan: true, term: 4, seats: 1,
    description: 'Chief executive of the township. Chairs the township board, oversees assessments, and represents the township.' },
  { id: 'twp-clerk', office: 'Township Clerk', partisan: true, term: 4, seats: 1,
    description: 'Manages township records, elections, and meeting minutes. Deputy to the supervisor.' },
  { id: 'twp-treasurer', office: 'Township Treasurer', partisan: true, term: 4, seats: 1,
    description: 'Manages township finances, collects property taxes, and handles township banking.' },
  { id: 'twp-trustees', office: 'Township Trustees', partisan: true, term: 4, seats: 4,
    description: 'Members of the township board who vote on local ordinances, budgets, and policy. Four trustees are elected.' },
]

// Village offices — typically on the November ballot or village elections, NOT August primary
// City offices — some cities have August primaries, but many use odd-year elections
// School board — typically November ballot, nonpartisan

// ── Helper: Get local ballot races based on geography ──

export function getLocalBallotRaces(party, geo) {
  if (!geo || !party) return []
  const partyKey = party === 'republican' ? 'republican' : 'democratic'
  const races = []

  // County-level offices
  if (geo.county) {
    const countyName = geo.county.replace(/ County$/i, '')

    COUNTY_BALLOT_OFFICES.forEach(office => {
      races.push({
        id: `county-${office.id}-${countyName}`,
        office: `${countyName} County ${office.office}`,
        level: 'County',
        description: office.description,
        candidates: [],
        type: 'partisan',
        allowWrite: true,
        localOffice: true,
      })
    })
  }

  // Township offices (only if user is in a township, not a city)
  if (geo.countySubdivision) {
    const subName = geo.countySubdivision
    // Check if it's a township (name contains "township" or is in unincorporated area)
    const isTownship = /township|twp/i.test(subName) ||
      (!geo.place && !subName.match(/^(Detroit|Grand Rapids|Lansing|Ann Arbor|Flint|Warren|Sterling Heights|Kalamazoo|Wyoming|Dearborn|Livonia|Troy|Farmington Hills|Southfield|Pontiac|Saginaw|Muskegon|Battle Creek|Bay City|Midland|Holland|Jackson|Portage|East Lansing|Novi|Rochester Hills|Royal Oak)/i))

    if (isTownship) {
      const twpName = subName.replace(/ township$/i, '')
      TOWNSHIP_BALLOT_OFFICES.forEach(office => {
        races.push({
          id: `twp-${office.id}-${twpName}`,
          office: `${twpName} Twp ${office.office.replace('Township ', '')}`,
          level: 'Township',
          description: office.description,
          seats: office.seats,
          candidates: [],
          type: 'partisan',
          allowWrite: true,
          localOffice: true,
        })
      })
    }
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
