// Michigan 2026 Primary Election - Judicial Candidates
// Primary Date: August 4, 2026
// Source: Michigan Bureau of Elections Unofficial Candidate Listing
//   https://mi-boe.entellitrak.com/etk-mi-boe-prod/page.request.do?page=page.miboePublicReport&electionType=PRI&electionYear=2026
// Cross-referenced with: Michigan Secretary of State, Ballotpedia, MichWomen voter guide
// Last updated: May 18, 2026
//
// NOTE: Judicial races are NONPARTISAN and appear on ALL voters' primary ballots.
// Filing deadline was April 21, 2026.
// Total: ~272 candidates across 170 race sections
//
// Incumbent vs Non-Incumbent designation:
//   "Incumbent" races = seats where an incumbent filed an affidavit of candidacy
//   "Non-Incumbent" races = open seats where no incumbent filed (may be retiring/new seat)
//   In incumbent races, additional non-incumbent challengers may also be running
//   Candidates in "Incumbent" race sections without the incumbent flag are challengers

// ============================================================================
// COURT OF APPEALS CANDIDATES
// ============================================================================

export const courtOfAppeals2026 = {

  // -------------------------------------------------------------------------
  // 1st District - Covers Wayne County
  // -------------------------------------------------------------------------
  "1st": {
    district: "1st",
    coverage: "Wayne County",
    races: [
      {
        term: "Partial Term ending 01/01/2031",
        seats: 1,
        candidates: [
          { name: "Andrew J. Lievense", incumbent: true, grade: 'C', description: 'Appointed by Gov. Whitmer (D) in March 2026; former Assistant U.S. Attorney and litigation associate at Honigman LLP; clerked for U.S. District Judge Avern Cohn; U of M Law grad; WLAM \'Outstanding\' rating', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No specific rulings or public statements found on abortion; Whitmer (D) appointment is a progressive signal but career as federal prosecutor is a neutral indicator',

              marriage: 'No rulings or public statements on marriage or LGBTQ issues found; insufficient data to determine position',

              religiousLiberty: 'No rulings or public statements on religious liberty found; career background does not provide strong signals either direction',

              secondAmendment: 'No specific rulings on gun rights; federal prosecutor background could signal law-and-order orientation but no clear 2A advocacy',

              limitedGov: 'Very recently appointed (March 2026) with no appellate judicial record to evaluate; Whitmer appointee suggests moderate-to-progressive judicial philosophy but no direct evidence of judicial activism',

              fiscal: 'No rulings on property rights, taxation, or regulation found; corporate litigation background at Honigman could signal moderate views'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 3,
        candidates: [
          { name: "Mariam Saad Bazzi", incumbent: true, grade: 'C', description: 'Originally appointed to Wayne County Circuit Court by Gov. Snyder (R) in 2017; elevated to Court of Appeals by Gov. Whitmer (D) in 2025; first Arab and Muslim American appellate judge in Michigan; former assistant prosecuting attorney; Dearborn Board of Education president', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No specific rulings or public statements on abortion found; bipartisan appointment history (Snyder then Whitmer) makes position unclear; Muslim faith background could signal socially conservative personal views',

              marriage: 'No specific rulings on marriage or LGBTQ issues found; Dearborn community context and faith background could suggest traditional values but no direct evidence',

              religiousLiberty: 'No specific rulings on religious liberty found; as a Muslim American judge, may have personal interest in religious freedom but no judicial record to evaluate',

              secondAmendment: 'No rulings or public statements on gun rights found; prosecutorial background is ambiguous signal',

              limitedGov: 'Bipartisan appointment history (Snyder R, then Whitmer D) suggests genuine moderate; no strong signals of judicial activism or originalist philosophy',

              fiscal: 'Prosecutorial background in deed and mortgage fraud suggests law enforcement orientation; no specific rulings on taxation or regulation found'

            } },
          { name: "Anica Letica", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2018; career prosecutor and appellate attorney in AG\'s office Criminal Division; supervised criminal appeals for 56 county prosecutors; Oakland County Prosecutor\'s Office veteran; elected 2020', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'No specific rulings or public statements on abortion found; Snyder (R) appointee is a moderate conservative signal but Snyder was not strongly pro-life',

              marriage: 'No rulings or statements on marriage or LGBTQ issues found; insufficient data to determine position',

              religiousLiberty: 'No specific rulings on religious liberty found; joined with Boonstra and Cameron (both Snyder appointees) in pipeline tunnel ruling showing deference to legislative action',

              secondAmendment: 'Extensive career as criminal prosecutor suggests law-and-order orientation that generally aligns with conservative views on criminal justice; Snyder (R) appointment is supportive signal',

              limitedGov: 'Joined majority in 2020 ruling upholding constitutionality of Enbridge pipeline tunnel legislation, showing deference to legislative authority; Snyder (R) appointee with prosecutorial background suggests judicial restraint',

              fiscal: 'Ruled with conservative panel upholding pipeline tunnel deal as constitutional, showing deference to business-friendly legislation; prosecutorial career suggests law-and-order judicial philosophy'

            } },
          { name: "Christopher M. Murray", incumbent: true, grade: 'A', description: 'Appointed by Gov. Engler (R) in 2002; Hillsdale College graduate; co-founded Federalist Society chapter at U of D Law; former deputy legal counsel to Gov. Engler; Board of Advisors for Michigan Lawyers Division of Federalist Society; former Chief Judge of Court of Appeals (2018-2021)', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'A', secondAmendment: 'B', limitedGov: 'A', fiscal: 'A' }, gradeJustifications: {

              proLife: 'No specific abortion rulings identified, but Hillsdale College education, Federalist Society leadership, and Engler (R) appointment strongly signal conservative alignment on social issues',

              marriage: 'No specific marriage or LGBTQ rulings found, but Hillsdale College background and deep Federalist Society ties strongly suggest traditional values alignment',

              religiousLiberty: 'Hillsdale College is known for its strong religious liberty advocacy; Federalist Society membership and board advisory role signal strong support for religious freedom; Engler administration background aligns with religious liberty protections',

              secondAmendment: 'No specific 2A rulings identified, but Federalist Society involvement and strong conservative credentials suggest pro-Second Amendment judicial philosophy',

              limitedGov: 'Co-founded Federalist Society chapter at U of D Law; serves on Board of Advisors for Michigan Lawyers Division of Federalist Society; Hillsdale College education emphasizes originalism and limited government; strong originalist/textualist judicial philosophy',

              fiscal: 'Served as deputy legal counsel to Gov. Engler, who pursued pro-business, limited government policies; Federalist Society affiliation strongly signals support for property rights and skepticism of overregulation; longest-serving conservative on the Court of Appeals'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 2nd District - Covers Berrien, Cass, St. Joseph, Van Buren, Kalamazoo,
  //   Calhoun, Branch, Hillsdale, Lenawee, Monroe, Washtenaw, Jackson
  // -------------------------------------------------------------------------
  "2nd": {
    district: "2nd",
    coverage: "Southwest / Southeast Michigan",
    races: [
      {
        term: "6 Year Term",
        seats: 2,
        candidates: [
          { name: "Sima G. Patel", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in 2022; former senior appellate attorney at Fieger Law representing plaintiffs in personal injury and civil rights cases; endorsed by Michigan AFL-CIO, Michigan Association for Justice, Michigan Education Association PAC, and Michigan League of Conservation Voters', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'F' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee with endorsements from progressive organizations (AFL-CIO, MEA); no specific abortion rulings found but overall profile strongly signals progressive alignment',

              marriage: 'No specific rulings found, but endorsement portfolio from progressive organizations (AFL-CIO, MEA PAC) and Whitmer appointment signal progressive alignment on social issues',

              religiousLiberty: 'No specific rulings or statements on religious liberty found; insufficient direct evidence to grade lower than C despite progressive appointment signals',

              secondAmendment: 'Endorsed by Michigan AFL-CIO and other progressive organizations that generally support gun control; Whitmer appointee and plaintiffs\' attorney background signal progressive alignment',

              limitedGov: 'Career as plaintiffs\' personal injury attorney at Fieger Law (known for aggressive litigation against corporations and government) signals support for expansive judicial remedies; Whitmer (D) appointment suggests progressive judicial philosophy',

              fiscal: 'Career dedicated to plaintiffs\' personal injury and civil rights litigation against businesses and insurers at Fieger Law; endorsed by trial lawyers association (MAJ); this background strongly signals support for expanded liability, larger damages, and pro-plaintiff judicial philosophy that opposes conservative fiscal/business interests'

            } },
          { name: "Christopher M. Trebilcock", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in April 2025; served as legal counsel for Whitmer\'s gubernatorial campaign and transition team; former senior principal at Clark Hill PLC in employment and labor law; first Court of Appeals judge born and raised in Michigan\'s Upper Peninsula', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Served as personal legal counsel to Gov. Whitmer, who is strongly pro-choice; this close political relationship strongly signals alignment with Whitmer\'s progressive positions on reproductive rights',

              marriage: 'Close political relationship with Whitmer administration (legal counsel for campaign and transition) signals progressive alignment; no specific rulings or statements found but appointment context is clear',

              religiousLiberty: 'No specific rulings or statements on religious liberty; labor law background does not provide strong signal either direction',

              secondAmendment: 'No specific rulings or statements on gun rights found; insufficient direct evidence to determine position',

              limitedGov: 'Served as legal counsel for Whitmer\'s campaign committee and transition operation; labor law background at Clark Hill PLC generally aligns with employee/union-side interests; appointment directly tied to political relationship with Democratic governor',

              fiscal: 'Employment litigation and labor law background suggests alignment with employee and union interests rather than employer/business interests; close political ties to Whitmer administration signal progressive approach to regulation and business law'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 3rd District - Covers Livingston, Oakland, Macomb, etc.
  // -------------------------------------------------------------------------
  "3rd": {
    district: "3rd",
    coverage: "Oakland / Macomb / Livingston area",
    races: [
      {
        term: "6 Year Term",
        seats: 2,
        candidates: [
          { name: "Mark T. Boonstra", incumbent: true, grade: 'A', description: 'Appointed by Gov. Snyder (R) in 2012; Federalist Society member; received Trump endorsement for 2024 Supreme Court race; Western Michigan Christian High School graduate; openly opposes abortion; argued against strict church-state separation; penned strong dissent against Whitmer COVID lockdowns; refused to use preferred pronouns citing opposition to \'wokeness\'; speaker at Michigan Christian Homeschool Network conferences', positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' }, gradeJustifications: {

              proLife: 'Publicly stated he opposes abortion and suggested \'creative lawyering\' to work around Michigan\'s constitutional amendment protecting abortion access; endorsed by Trump who cited his conservative values; clear and strong pro-life position',

              marriage: 'Refused to use preferred pronouns in People v. Gobrick, writing he would not conform to the \'wokeness of the day\'; drew rebuke from 19 LGBTQ+ organizations; strong traditional values signal on gender/marriage issues',

              religiousLiberty: 'Argued against strict separation of church and state, stating \'our rights come from God\' and criticized \'secularists\' who have \'banished God\'; speaks at Michigan Christian Homeschool Network (INCH) conferences on topics like \'Today\'s Godless America...What Would Our Founding Fathers Think?\'; Christian school graduate; strong pro-religious liberty record',

              secondAmendment: 'Trump endorsement specifically cited protecting \'our always under siege Second Amendment\'; Federalist Society member; overall strong conservative profile signals pro-2A alignment',

              limitedGov: 'Wrote 13-page polemic against Whitmer COVID lockdown orders calling them totalitarian; Federalist Society member; described himself as \'a consistent and reliable judicial conservative\'; endorsed by four former Michigan Supreme Court chief justices; originalist judicial philosophy',

              fiscal: '27 years as senior principal at Miller Canfield (major corporate law firm); ruled to uphold Enbridge pipeline tunnel deal as constitutional; corporate law background and conservative judicial philosophy signal strong pro-business, pro-property rights orientation'

            } },
          { name: "Daniel S. Korobkin", incumbent: true, grade: 'F', description: 'Appointed by Gov. Whitmer (D) in April 2025; served 16+ years as ACLU of Michigan legal director; Yale Law School graduate; led ACLU litigation on LGBTQ+ rights, juvenile justice reform, free speech, prisoners\' rights, and police misconduct; previously worked at NAACP Legal Defense Fund and DOJ Civil Rights Division', positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'F' }, gradeJustifications: {

              proLife: 'As ACLU legal director, led organization that actively litigates to protect and expand abortion access; ACLU is one of the most prominent pro-choice legal organizations in the country; Whitmer (D) appointee',

              marriage: 'Led ACLU litigation on LGBTQ+ rights; was on legal team representing Aimee Stephens in landmark Supreme Court transgender employment discrimination case (Bostock v. Clayton County); career devoted to advancing progressive positions on marriage and gender identity',

              religiousLiberty: 'As ACLU legal director, led organization that frequently litigates against religious exemptions and for strict church-state separation; the ACLU challenged religious refusals and religious exemptions from anti-discrimination laws; directly opposes conservative religious liberty framework',

              secondAmendment: 'ACLU generally supports gun control measures; as legal director of ACLU Michigan, was part of an organization that has advocated for firearms restrictions; no personal pro-2A advocacy found',

              limitedGov: 'Entire career devoted to expanding government power to enforce civil rights and limiting government power in criminal justice/policing; ACLU legal philosophy is antithetical to originalism/textualism; career at NAACP Legal Defense Fund and DOJ Civil Rights Division; represents progressive judicial activism from conservative perspective',

              fiscal: 'Career fighting to expand government regulatory authority through ACLU litigation; successfully litigated to expand special education services, prisoners\' rights, and government accountability; legal philosophy supports expanded government programs and regulatory authority'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 4th District - Covers remaining counties (Northern/Central Michigan)
  // -------------------------------------------------------------------------
  "4th": {
    district: "4th",
    coverage: "Northern / Central Michigan",
    races: [
      {
        term: "6 Year Term",
        seats: 3,
        candidates: [
          { name: "Michael J. Kelly", incumbent: true, grade: 'C', description: 'Elected (not appointed) in 2008; 20 years as trial lawyer in private practice before joining bench; ruled that Whitmer\'s COVID stay-at-home orders were constitutional in 2020; re-elected in 2014 and 2020; University of Michigan-Flint graduate', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No specific rulings or public statements on abortion found; elected rather than appointed so no gubernatorial signal; insufficient data to determine position',

              marriage: 'No specific rulings or public statements on marriage or LGBTQ issues found; insufficient data to determine position',

              religiousLiberty: 'No specific rulings or public statements on religious liberty found; insufficient data to determine position',

              secondAmendment: 'No specific rulings on gun rights found; private practice trial lawyer background does not provide clear signal',

              limitedGov: 'Ruled in May 2020 that Whitmer\'s COVID stay-at-home orders were constitutional, upholding broad executive emergency powers - a ruling that contrasts sharply with conservative judges who opposed the lockdowns; this is the strongest signal available on his judicial philosophy regarding government power',

              fiscal: 'No specific rulings on taxation, property rights, or business regulation found beyond the COVID order ruling; trial lawyer background is a neutral signal'

            } },
          { name: "Allie Greenleaf Maldonado", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in December 2022; first tribal citizen on Michigan Court of Appeals; former chief judge of Little Traverse Bay Bands of Odawa Indians Trial Court; nationally recognized expert on Indian Child Welfare Act; drafted Michigan Indian Family Preservation Act; University of Michigan Law School graduate', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'No specific rulings or public statements on abortion found; Whitmer (D) appointment is a progressive signal but tribal law background does not directly address this issue',

              marriage: 'No specific rulings or public statements on marriage or LGBTQ issues found; insufficient direct evidence to determine position',

              religiousLiberty: 'No specific rulings on religious liberty found; tribal sovereignty expertise could cut either way on church-state issues',

              secondAmendment: 'No specific rulings or statements on gun rights found; tribal law background does not provide clear signal on 2A issues',

              limitedGov: 'Whitmer (D) appointee; career focused on expanding tribal sovereignty and government authority in child welfare (ICWA/MIFPA); drafted Michigan Indian Family Preservation Act which expands government regulatory framework; legal philosophy appears to favor expanded government protective authority',

              fiscal: 'Background in tribal governance and child welfare law suggests comfort with government regulatory authority; expertise in ICWA/MIFPA involves expanding state and federal regulatory frameworks; Whitmer appointment signals progressive approach to regulation'

            } },
          { name: "Michelle M. Rick", incumbent: true, grade: 'D', description: 'Elected to Court of Appeals in 2020; previously appointed to 29th Circuit Court by Gov. Granholm (D) in 2007; served as deputy legal counsel to Gov. Granholm; former senior assistant attorney general; created problem-solving courts including women\'s drug treatment court and traveling expungement clinics; University of Detroit Mercy School of Law graduate', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Served as deputy legal counsel to Gov. Granholm (D), who was pro-choice; original judicial appointment from Granholm strongly signals progressive alignment on reproductive rights',

              marriage: 'Granholm (D) appointee and member of National Association of Women Judges; progressive appointment history signals progressive alignment on marriage and gender issues',

              religiousLiberty: 'No specific rulings or statements on religious liberty found; insufficient direct evidence to determine position beyond appointment signals',

              secondAmendment: 'No specific rulings on gun rights found; prosecutorial background could signal law-and-order orientation but Granholm appointment context is ambiguous',

              limitedGov: 'Created multiple problem-solving courts (women\'s drug treatment court, high-risk felony court) and traveling expungement clinics - initiatives that expand the judicial role beyond traditional adjudication; deputy legal counsel to Granholm signals progressive judicial philosophy favoring active government',

              fiscal: 'Created \'Project Access\' traveling expungement clinics and problem-solving courts that expand government services; career in public service under Democratic administration suggests comfort with expanded government role; progressive approach to criminal justice reform'

            } }
        ]
      }
    ]
  }
};


// ============================================================================
// CIRCUIT COURT CANDIDATES
// ============================================================================

export const circuitCourt2026 = {

  // -------------------------------------------------------------------------
  // 1st Circuit - Hillsdale County
  // -------------------------------------------------------------------------
  1: {
    circuit: 1,
    county: "Hillsdale",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Sara S. Lisznyai", incumbent: true, grade: 'C', description: 'Elected 2014; private practice attorney in Jonesville before election. No strong partisan signals. Rural conservative county.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record on abortion-related rulings or positions',

              marriage: 'No public record on marriage or family values positions',

              religiousLiberty: 'No public record on religious liberty cases',

              secondAmendment: 'No public record on firearms rulings',

              limitedGov: 'Elected in conservative Hillsdale County; private practice background suggests moderate judicial philosophy',

              fiscal: 'No public record on taxation or property rights rulings'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 2nd Circuit - Berrien County
  // -------------------------------------------------------------------------
  2: {
    circuit: 2,
    county: "Berrien",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jennifer L. Smith-DenDooven", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2018; 21-year career as Berrien County assistant prosecutor. Prosecution background in conservative-leaning county.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no specific record but appointment signal leans conservative',

              marriage: 'Snyder (R) appointee; no specific positions found',

              religiousLiberty: 'Snyder (R) appointee; no specific positions found',

              secondAmendment: '21-year prosecutor career suggests law-and-order approach; Snyder appointee',

              limitedGov: 'Appointed by Republican governor; prosecutor background suggests judicial restraint',

              fiscal: 'Snyder (R) appointee; no specific positions found'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 3rd Circuit - Wayne County
  // -------------------------------------------------------------------------
  3: {
    circuit: 3,
    county: "Wayne",
    races: [
      {
        term: "6 Year Term",
        seats: 16,
        type: "incumbent",
        candidates: [
          { name: "David J. Allen", incumbent: true, grade: 'D', description: 'Appointed by Gov. Granholm (D) in 2003. Served in felony criminal, civil, and business court divisions. Wayne County bench.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Granholm (D) appointee; no specific record but appointment signal leans progressive',

              marriage: 'Granholm (D) appointee; Wayne County context leans progressive',

              religiousLiberty: 'Granholm (D) appointee; no specific positions found',

              secondAmendment: 'Granholm (D) appointee; Wayne County context',

              limitedGov: 'Appointed by Democratic governor to heavily Democratic county bench',

              fiscal: 'Granholm (D) appointee; no specific positions found'

            } },
          { name: "Chandra W. Baker-Robinson", incumbent: true, grade: 'D', description: 'Elected 2020; former Wayne County assistant prosecutor in Arson Unit. Wayne County Democratic context.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Elected in heavily Democratic Wayne County; no specific record',

              marriage: 'Wayne County Democratic context; no specific positions',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Wayne County context leans anti-2A',

              limitedGov: 'Elected in Democratic stronghold; prosecution background provides some moderate signal',

              fiscal: 'No specific positions found; Wayne County context'

            } },
          { name: "Christopher M. Blount", incumbent: true, grade: 'C', description: 'Originally appointed to 36th District Court by Snyder (R), then appointed to 3rd Circuit by Whitmer (D) in 2022. Mixed appointment signals. Background in legal aid and criminal defense.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'Mixed signals: Snyder appointee to district court, Whitmer appointee to circuit court',

              marriage: 'Mixed appointment signals; no specific positions',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Defense attorney background; mixed appointment signals',

              limitedGov: 'Cross-party appointee suggests moderate judicial philosophy',

              fiscal: 'No specific positions found'

            } },
          { name: "Nicole L. Castka", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2025. Criminal defense sole practitioner since 2003. Member of criminal defense associations.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; no specific record',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Criminal defense background and Whitmer appointee',

              limitedGov: 'Appointed by Democratic governor; defense attorney background',

              fiscal: 'Whitmer (D) appointee; no specific positions found'

            } },
          { name: "Bradley L. Cobb", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2022. Former Wayne County assistant prosecutor for 25+ years. Prosecution background but Democratic appointment.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; no specific record',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions found; long prosecution career provides some moderate signal',

              secondAmendment: '25+ year prosecutor career suggests law-and-order approach, but Democratic appointment',

              limitedGov: 'Whitmer (D) appointee; prosecution background provides moderate counterweight',

              fiscal: 'Whitmer (D) appointee; no specific positions'

            } },
          { name: "Chris Dingell", incumbent: true, grade: 'F', description: 'Former Democratic state senator (1987-2003). Member of the Dingell political dynasty (father John Dingell Jr., stepmother Debbie Dingell - both Democratic U.S. representatives). Elected to circuit court 2002.', positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'F', fiscal: 'F' }, gradeJustifications: {

              proLife: 'Former Democratic state senator from prominent Democratic family; strong progressive political background',

              marriage: 'Democratic political background; awarded by AADC for civil rights work',

              religiousLiberty: 'No specific positions but Democratic political career',

              secondAmendment: 'Democratic political background; Dingell family has mixed gun positions',

              limitedGov: 'Career Democratic politician turned judge; likely activist judicial philosophy',

              fiscal: 'Democratic state senator background; progressive fiscal views expected'

            } },
          { name: "Charlene M. Elder", incumbent: true, grade: 'D', description: 'Appointed by Gov. Granholm (D) in 2005. First Arab-American female judge on 3rd Circuit. Private practice in consumer protection before appointment.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Granholm (D) appointee; no specific record',

              marriage: 'Granholm (D) appointee; no specific positions',

              religiousLiberty: 'Granholm (D) appointee; no specific positions',

              secondAmendment: 'Granholm (D) appointee; Wayne County context',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Granholm (D) appointee; consumer protection background'

            } },
          { name: "Helal A. Farhat", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2019. Private practice attorney, former 19th District Court magistrate. Now Chief Judge Pro Tem.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; no specific record',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'Whitmer (D) appointee; no specific positions',

              secondAmendment: 'Whitmer (D) appointee; Wayne County context',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Whitmer (D) appointee; no specific positions'

            } },
          { name: "Nicole N. Goodson", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2022. Wayne County bench.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; no specific record',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Whitmer (D) appointee; Wayne County context',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Whitmer (D) appointee; no specific positions'

            } },
          { name: "Edward J. Joseph", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2014. Former private practice attorney and special assistant attorney general. U of M and Wayne State Law.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no specific record but appointment signal leans conservative',

              marriage: 'Snyder (R) appointee; no specific positions found',

              religiousLiberty: 'Snyder (R) appointee; served as special assistant AG',

              secondAmendment: 'Snyder (R) appointee; no specific positions',

              limitedGov: 'Appointed by Republican governor; private practice and AG background',

              fiscal: 'Snyder (R) appointee; business administration degree'

            } },
          { name: "Mary Beth Kelly", incumbent: true, grade: 'A', description: 'Former Michigan Supreme Court Justice (2011-2015), nominated by Republican Party. First woman chief judge of Wayne Circuit Court. Appointed by Gov. Engler (R) in 1999. Federalist Society member. Strong conservative judicial record.', positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' }, gradeJustifications: {

              proLife: 'Republican-nominated Supreme Court justice; conservative judicial philosophy',

              marriage: 'Conservative judicial record on Michigan Supreme Court',

              religiousLiberty: 'Federalist Society member; strong religious liberty record expected',

              secondAmendment: 'Conservative judicial philosophy as Supreme Court justice',

              limitedGov: 'Originalist/textualist approach demonstrated on Michigan Supreme Court; Engler appointee',

              fiscal: 'Conservative judicial approach to regulatory and property issues on Supreme Court'

            } },
          { name: "Don Knapp", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2018. Former Livonia city attorney and council member. Clerked for presiding judge Tim Kenny, worked as legislative aide to state Sen. Thad McCotter (R).', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; worked for Republican Sen. McCotter',

              marriage: 'Republican political connections; no specific positions',

              religiousLiberty: 'Snyder appointee with Republican political background',

              secondAmendment: 'Republican political connections; Livonia city attorney',

              limitedGov: 'Snyder appointee; municipal law background; McCotter aide',

              fiscal: 'Municipal attorney background; Republican political connections'

            } },
          { name: "Cylenthia LaToye Miller", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2019. Wayne County bench.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; no specific record',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Whitmer (D) appointee; Wayne County context',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Whitmer (D) appointee; no specific positions'

            } },
          { name: "Carla G. Testani", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2018. Wayne County 3rd Circuit Court.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no specific record but appointment signal leans conservative',

              marriage: 'Snyder (R) appointee; no specific positions',

              religiousLiberty: 'Snyder (R) appointee; no specific positions',

              secondAmendment: 'Snyder (R) appointee',

              limitedGov: 'Appointed by Republican governor',

              fiscal: 'Snyder (R) appointee; no specific positions'

            } },
          { name: "Margaret M. Van Houten", incumbent: true, grade: 'C', description: 'Wayne County 3rd Circuit Court judge. No clear appointment or partisan signals found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public record found on abortion-related positions',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'No clear appointment or partisan background found',

              fiscal: 'No public record found'

            } },
          { name: "Shannon Nicol Walker", incumbent: true, grade: 'D', description: 'Elected 2014 in Wayne County. Former assistant prosecutor and public defender with Legal Aid & Defenders Association. Mixed prosecution/defense background in Democratic county.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Elected in heavily Democratic Wayne County; no specific record',

              marriage: 'Wayne County Democratic context; no specific positions',

              religiousLiberty: 'No specific positions; prosecution experience provides moderate signal',

              secondAmendment: 'Wayne County context; public defender background',

              limitedGov: 'Elected in Democratic stronghold; mixed prosecution/defense career',

              fiscal: 'Wayne County Democratic context'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Shakira Lynn Hawkins", incumbent: false, grade: 'D', description: 'Non-incumbent candidate for open Wayne County 3rd Circuit Court seat. Running in heavily Democratic county. Limited public information available.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'D', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Running in heavily Democratic Wayne County; Wayne County judicial candidates typically lean progressive',

              fiscal: 'No public record found'

            } }
        ]
      },
      {
        term: "Partial Term ending 01/01/2031",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Aliyah S. Sabree", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2025 to 3rd Circuit; previously appointed to 36th District Court in 2017. Former assistant Wayne County prosecutor, Detroit government attorney.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; Detroit government background',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Whitmer (D) appointee; Wayne County context',

              limitedGov: 'Appointed by Democratic governor; Detroit city government background',

              fiscal: 'Whitmer (D) appointee; government service career'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 4th Circuit - Jackson County
  // -------------------------------------------------------------------------
  4: {
    circuit: 4,
    county: "Jackson",
    races: [
      {
        term: "Partial Term ending 01/01/2031",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Allison L. Bates", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in April 2026 to circuit court. Previously served as 12th District Court judge (appointed 2021). Former judicial juvenile referee.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; no specific record',

              marriage: 'Whitmer (D) appointee; family division background',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Whitmer (D) appointee',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Whitmer (D) appointee; no specific positions'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "John G. McBain Jr.", incumbent: true, grade: 'B', description: 'Elected 2002; former Jackson County prosecuting attorney (elected 1996). 5-year career as Florida assistant state attorney. Extensive prosecution background. Elected in moderate county.', positions: { proLife: 'B', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Long prosecutor career; elected in moderate-conservative Jackson County',

              marriage: 'No specific positions found; moderate county context',

              religiousLiberty: 'No specific positions; prosecutor background',

              secondAmendment: 'Prosecutor career suggests law-and-order approach favorable to 2A',

              limitedGov: 'Elected prosecutor and judge; career suggests judicial restraint',

              fiscal: 'No specific positions; moderate county elected official'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 5th Circuit - Barry County
  // -------------------------------------------------------------------------
  5: {
    circuit: 5,
    county: "Barry",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Vicky L. Alspaugh", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2019. Former assistant prosecutor and court referee/magistrate. Barry County is conservative but appointment was Democratic.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee, but prosecution background in conservative county provides moderate signal',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions; prosecution background',

              secondAmendment: 'Prosecutor experience in rural conservative county; Whitmer appointee',

              limitedGov: 'Appointed by Democratic governor despite serving in conservative county',

              fiscal: 'Whitmer (D) appointee; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 6th Circuit - Oakland County
  // -------------------------------------------------------------------------
  6: {
    circuit: 6,
    county: "Oakland",
    races: [
      {
        term: "6 Year Term",
        seats: 6,
        type: "incumbent",
        candidates: [
          { name: "Mary Ellen T. Brennan", incumbent: true, grade: 'C', description: 'Oakland County 6th Circuit Court judge. No clear gubernatorial appointment signal found. Oakland County is politically purple.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Oakland County context is politically mixed; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "David M. Cohen", incumbent: true, grade: 'C', description: 'Oakland County 6th Circuit Court judge. No clear gubernatorial appointment signal found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Oakland County context; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Lisa Gorcyca", incumbent: true, grade: 'C', description: 'Oakland County 6th Circuit Court judge. No clear gubernatorial appointment signal found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Oakland County context; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Nanci Grant", incumbent: true, grade: 'C', description: 'Oakland County 6th Circuit Court judge. Serves on Michigan Judicial Tenure Commission.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Oakland County context; serves on Judicial Tenure Commission',

              fiscal: 'No public record found'

            } },
          { name: "Jeffery S. Matis", incumbent: true, grade: 'C', description: 'Oakland County 6th Circuit Court judge. Civil/criminal division.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Oakland County context; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Lorie N. Savin", incumbent: true, grade: 'C', description: 'Oakland County 6th Circuit Court judge. No clear partisan signals found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Oakland County context; no clear partisan signal',

              fiscal: 'No public record found'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Scott L. Farida", incumbent: false, grade: 'B', description: 'Former Oakland County assistant prosecutor (2017-2023). Ran for Oakland County Prosecutor in 2024 (Republican-leaning candidacy). Detroit Catholic Central graduate. Chaldean-American. Strong prosecution background.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Catholic school education (Detroit Catholic Central, St. Hugo); prosecution background',

              marriage: 'Catholic education background suggests traditional values',

              religiousLiberty: 'Catholic school background; Chaldean-American community involvement',

              secondAmendment: 'Prosecutor career; law-and-order orientation',

              limitedGov: 'Prosecutor background suggests judicial restraint; ran as reform prosecutor candidate',

              fiscal: 'Small business family background'

            } },
          { name: "Nadine Renee Hatten", incumbent: false, grade: 'D', description: 'Hazel Park Magistrate. Former teacher turned attorney. Criminal defense board member (CDAM). Previous write-in candidate in 2020. Defense-oriented background.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No specific record; defense attorney orientation suggests progressive',

              marriage: 'No specific positions; magistrate in progressive-leaning area',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Criminal defense background; board member of Criminal Defense Attorneys of Michigan',

              limitedGov: 'Criminal defense orientation; education/social work background suggests activist approach',

              fiscal: 'No specific positions found'

            } },
          { name: "Victoria King", incumbent: false, grade: 'C', description: 'Advises circuit judges on complex cases. Family division experience. Legal analyst role. Limited partisan signals available.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found on positions',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Court research/advisory role; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Lisa Marie Neilson", incumbent: false, grade: 'C', description: 'Oakland County Probate Court staff attorney. JD from Thomas Cooley, MSW from University of Michigan. Previously attempted Court of Appeals run in 2024 (disqualified).', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Social work degree combined with law degree; mixed signals; probate court staff attorney',

              fiscal: 'No public record found'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 7th Circuit - Genesee County
  // -------------------------------------------------------------------------
  7: {
    circuit: 7,
    county: "Genesee",
    races: [
      {
        term: "6 Year Term",
        seats: 3,
        type: "incumbent",
        candidates: [
          { name: "Chris Christenson", incumbent: true, grade: 'C', description: 'Joined 7th Circuit as Family Division judge in January 2021. Genesee County (Flint area) bench.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Genesee County context leans Democratic; no clear appointment signal found',

              fiscal: 'No public record found'

            } },
          { name: "Mark W. Latchana", incumbent: true, grade: 'C', description: 'Genesee County 7th Circuit Court judge. No clear appointment or partisan signals found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Genesee County context; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Anthony J. McDowell", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2024. Former Friend of the Court director for Genesee County since 2014. Family court administrative background.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; no specific record',

              marriage: 'Whitmer (D) appointee; family court administration background',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Whitmer (D) appointee',

              limitedGov: 'Appointed by Democratic governor; government administration career',

              fiscal: 'Whitmer (D) appointee; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 8th Circuit - Ionia / Montcalm Counties
  // -------------------------------------------------------------------------
  8: {
    circuit: 8,
    county: "Ionia / Montcalm",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Lori J. Shearer", incumbent: false, grade: 'C', description: 'Belding attorney with career rooted in local private practice. Running for open seat (Judge Kreeger retiring). Limited partisan signals.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Private practice attorney in rural conservative area; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Ed Sternisha", incumbent: false, grade: 'B', description: 'Belding attorney whose career spans law enforcement and the courtroom. Law enforcement background in rural conservative area is a positive signal.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'B', limitedGov: 'B', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No specific record; law enforcement background in conservative area',

              marriage: 'No specific positions; rural conservative area',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Law enforcement career background strongly suggests pro-2A',

              limitedGov: 'Law enforcement and courtroom experience suggests restraint-oriented approach',

              fiscal: 'No specific positions; conservative area'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 9th Circuit - Kalamazoo County
  // -------------------------------------------------------------------------
  9: {
    circuit: 9,
    county: "Kalamazoo",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Gary C. Giguere Jr.", incumbent: true, grade: 'D', description: 'Appointed by Gov. Granholm (D) in 2007. Former private practice attorney and adjunct professor. Long-serving judge in Kalamazoo County.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Granholm (D) appointee; no specific record',

              marriage: 'Granholm (D) appointee; Kalamazoo is college town leaning progressive',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Granholm (D) appointee',

              limitedGov: 'Appointed by Democratic governor; academic background',

              fiscal: 'Granholm (D) appointee'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 10th Circuit - Saginaw County
  // -------------------------------------------------------------------------
  10: {
    circuit: 10,
    county: "Saginaw",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Manvel Trice III", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2017 to circuit court (and 2016 to district court). Former federal assistant U.S. attorney and Saginaw County assistant prosecutor. Strong prosecution background.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee (twice); no specific record but strong appointment signal',

              marriage: 'Snyder (R) appointee; no specific positions',

              religiousLiberty: 'Snyder (R) appointee; federal prosecution background',

              secondAmendment: 'Former federal and county prosecutor; Snyder appointee; law-and-order',

              limitedGov: 'Appointed twice by Republican governor; prosecution career suggests restraint',

              fiscal: 'Snyder (R) appointee; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 11th Circuit - Alger / Luce / Schoolcraft Counties
  // -------------------------------------------------------------------------
  11: {
    circuit: 11,
    county: "Alger / Luce / Schoolcraft",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Brian D. Rahilly", incumbent: true, grade: 'F', description: 'Incumbent under controversy: disqualified from criminal cases in Mackinac County due to judicial misconduct allegations. Prosecutors in multiple counties sought removal citing bias and impropriety. Text message scandal. Extremely problematic judicial record.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: 'F', limitedGov: 'F', fiscal: null }, gradeJustifications: {

              proLife: 'No specific record on this issue',

              marriage: 'No specific record on this issue',

              religiousLiberty: 'No specific record on this issue',

              secondAmendment: 'Disqualified from criminal cases due to bias toward defendants; undermines public safety',

              limitedGov: 'Multiple judicial misconduct findings; disqualified from cases due to impropriety and bias; activist conduct',

              fiscal: 'No specific record on this issue'

            } },
          { name: "Robert T. Steinhoff", incumbent: false, grade: 'B', description: 'Alger County Prosecutor since 2019 (appointed by Judge Carmody, elected 2020). Former criminal defense attorney, DHS attorney, Wisconsin military affairs. Runs on \'accountability and restored integrity\' platform against troubled incumbent.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'B', limitedGov: 'B', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No specific record; prosecutor in conservative UP area',

              marriage: 'No specific positions; rural conservative context',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Elected prosecutor in rural UP; law enforcement/DHS background strongly pro-2A',

              limitedGov: 'Prosecutor running on accountability and rule of law; restrained judicial approach expected',

              fiscal: 'No specific positions; conservative area'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 12th Circuit - Baraga / Houghton / Keweenaw Counties
  // -------------------------------------------------------------------------
  12: {
    circuit: 12,
    county: "Baraga / Houghton / Keweenaw",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Brittany A. Bulleit", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2023. Former Houghton County prosecutor (2019) and chief assistant prosecutor (10 years). Prosecution background but Democratic appointment.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee but long prosecutor career provides moderate signal',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions; prosecutor background',

              secondAmendment: 'Long prosecutor career in rural UP; law-and-order counterweight to Democratic appointment',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Whitmer (D) appointee'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 13th Circuit - Antrim / Grand Traverse / Leelanau Counties
  // -------------------------------------------------------------------------
  13: {
    circuit: 13,
    county: "Antrim / Grand Traverse / Leelanau",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Kevin A. Elsenheimer", incumbent: true, grade: 'A', description: 'Appointed by Gov. Snyder (R) in 2017. Former Republican state representative and House Minority Leader (2005-2011). Strong conservative Republican political background.', positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' }, gradeJustifications: {

              proLife: 'Republican state representative and House leader; strong conservative voting record',

              marriage: 'Republican House leader during period of traditional marriage advocacy',

              religiousLiberty: 'Republican legislator; strong conservative record',

              secondAmendment: 'Republican legislator from rural northern Michigan; pro-2A expected',

              limitedGov: 'Snyder appointee; former Republican House Minority Leader demonstrates restraint philosophy',

              fiscal: 'Republican legislator; conservative fiscal voting record'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 14th Circuit - Muskegon County
  // -------------------------------------------------------------------------
  14: {
    circuit: 14,
    county: "Muskegon",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Kathy Hoogstra", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2013. Calvin College graduate. Former probate court administrator and family court referee. Prosecution/judicial administration background.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; Calvin College (Christian Reformed) graduate',

              marriage: 'Calvin College graduate; conservative Reformed tradition',

              religiousLiberty: 'Calvin College graduate; Christian Reformed background strongly supports religious liberty',

              secondAmendment: 'Snyder (R) appointee; no specific positions',

              limitedGov: 'Appointed by Republican governor; court administration background',

              fiscal: 'Snyder (R) appointee; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 15th Circuit - Branch County
  // -------------------------------------------------------------------------
  15: {
    circuit: 15,
    county: "Branch",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Zachary William Stempien", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in April 2026. Former Branch County prosecuting attorney (elected 2020). Lifelong Coldwater resident. Prosecutor background but very recent Democratic appointment.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; prosecutor background in conservative county provides moderate signal',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions; prosecutor background',

              secondAmendment: 'Elected prosecutor in rural county; law-and-order background',

              limitedGov: 'Appointed by Democratic governor despite serving conservative county',

              fiscal: 'Whitmer (D) appointee'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 16th Circuit - Macomb County
  // -------------------------------------------------------------------------
  16: {
    circuit: 16,
    county: "Macomb",
    races: [
      {
        term: "6 Year Term",
        seats: 4,
        type: "incumbent",
        candidates: [
          { name: "Julie Gatti", incumbent: true, grade: 'C', description: 'Elected to Macomb County circuit bench in 2018. Civil/criminal division. Macomb County is politically purple/swing.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Elected in swing-county Macomb; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Tanya A. Grillo", incumbent: true, grade: 'D', description: 'Appointed January 2026 (Whitmer administration period). Criminal defense practice founder (Grillo Law PLLC). Defense-oriented background.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Appointed during Whitmer administration; criminal defense background',

              marriage: 'No specific positions; recent Whitmer-era appointment',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Criminal defense practice; Whitmer-era appointment',

              limitedGov: 'Appointed during Democratic administration; defense attorney background',

              fiscal: 'No specific positions; Whitmer-era appointment'

            } },
          { name: "James M. Maceroni", incumbent: true, grade: 'C', description: 'Macomb County 16th Circuit Court judge. Criminal/civil division. No clear appointment or partisan signals found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Macomb County context; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Matthew S. Switalski", incumbent: true, grade: 'C', description: 'Chief Judge Family Division, Macomb County 16th Circuit Court. No clear appointment signal found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Macomb County swing context; family division chief judge',

              fiscal: 'No public record found'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Jeremy F. Fisher", incumbent: false, grade: 'D', description: 'Macomb County assistant prosecutor for 7 years. Former labor/employment attorney representing unions. Uses ActBlue for fundraising (Democratic platform). Progressive legal career.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Uses ActBlue (Democratic fundraising); labor union attorney background',

              marriage: 'Progressive fundraising platform; labor law background',

              religiousLiberty: 'No specific positions; progressive orientation',

              secondAmendment: 'Prosecutor experience provides moderate signal despite progressive orientation',

              limitedGov: 'Labor union representation; progressive fundraising; likely activist judicial approach',

              fiscal: 'Labor/employment law representing unions; progressive orientation'

            } },
          { name: "Mariell Lehman", incumbent: false, grade: 'C', description: 'Trial attorney with 14+ years experience across Macomb County. Emphasizes constitutional rights, fairness, and dignity. Private practice.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Emphasis on constitutional rights; 14 years trial experience; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "James L. Spagnuolo", incumbent: false, grade: 'B', description: 'Marine Corps veteran. 20+ year trial attorney in personal injury, wrongful death. Founder of Macomb Law Group. VP of Chippewa Valley Educational Foundation. Community-oriented conservative profile.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Marine veteran; no specific record but military background correlates with conservative values',

              marriage: 'No specific positions; military/community background',

              religiousLiberty: 'No specific positions; military service and community involvement suggest traditional values',

              secondAmendment: 'Marine Corps veteran; military background very strongly pro-2A',

              limitedGov: 'Marine veteran; \'discipline\' messaging suggests judicial restraint; private practice background',

              fiscal: 'Private practice attorney and small business founder; pro-property rights expected'

            } },
          { name: "Genevieve L. Taylor", incumbent: false, grade: 'C', description: '40th District Court magistrate (appointed 2021). Criminal defense and driver\'s license restoration practice. Interned at Macomb County Prosecutor\'s Office. Indigent defense research.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: 'C', limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'Mixed: prosecution intern but primarily criminal defense practice',

              limitedGov: 'Defense attorney background; indigent defense research; moderate magistrate experience',

              fiscal: 'No public record found'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 17th Circuit - Kent County
  // -------------------------------------------------------------------------
  17: {
    circuit: 17,
    county: "Kent",
    races: [
      {
        term: "6 Year Term",
        seats: 3,
        type: "incumbent",
        candidates: [
          { name: "Maureen A. Gottlieb", incumbent: true, grade: 'C', description: 'Kent County 17th Circuit Court judge. Current term ends January 2027. No clear appointment or partisan signals found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Kent County (Grand Rapids) context; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Scott A. Noto", incumbent: true, grade: 'C', description: 'Kent County 17th Circuit Court judge. No clear appointment or partisan signals found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Kent County context; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Clay M. West", incumbent: true, grade: 'C', description: 'Kent County 17th Circuit Court judge. No clear appointment or partisan signals found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Kent County context; no clear partisan signal',

              fiscal: 'No public record found'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 18th Circuit - Bay County
  // -------------------------------------------------------------------------
  18: {
    circuit: 18,
    county: "Bay",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Michael Huber", incumbent: false, grade: 'C', description: 'Non-incumbent candidate for open Bay County 18th Circuit Court seat. Limited public information available.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'No public record found',

              fiscal: 'No public record found'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 19th Circuit - Manistee / Benzie Counties
  // -------------------------------------------------------------------------
  19: {
    circuit: 19,
    county: "Manistee / Benzie",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "David A. Thompson", incumbent: true, grade: 'B', description: 'Elected 2014. Former Manistee County chief assistant prosecutor and Family Division director. Appointed Chief Judge by Michigan Supreme Court in 2016. Law-and-order background in rural conservative area.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Elected in conservative rural area; prosecutor background',

              marriage: 'Family Division director; conservative area context',

              religiousLiberty: 'No specific positions; conservative rural context',

              secondAmendment: 'Prosecutor in rural northern Michigan; law-and-order orientation',

              limitedGov: 'Elected (not appointed); prosecutor career suggests judicial restraint',

              fiscal: 'Conservative rural area; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 20th Circuit - Ottawa County
  // -------------------------------------------------------------------------
  20: {
    circuit: 20,
    county: "Ottawa",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jon Hulsing", incumbent: true, grade: 'C', description: 'Appointed by Gov. Granholm (D) in 2006. Former Ottawa County assistant prosecutor (1995-2006). Ottawa County is strongly conservative/Republican, creating a mixed signal with Democratic appointment.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'Granholm (D) appointee in strongly conservative Ottawa County; mixed signals',

              marriage: 'Mixed: Democratic appointment but conservative county context',

              religiousLiberty: 'Mixed signals; conservative county',

              secondAmendment: 'Prosecutor background in conservative county; Democratic appointment',

              limitedGov: 'Democratic appointee but has served 18+ years in conservative county without controversy',

              fiscal: 'Mixed signals; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 22nd Circuit - Washtenaw County
  // -------------------------------------------------------------------------
  22: {
    circuit: 22,
    county: "Washtenaw",
    races: [
      {
        term: "6 Year Term",
        seats: 2,
        type: "incumbent",
        candidates: [
          { name: "Patrick J. Conlin Jr.", incumbent: true, grade: 'D', description: 'Elected 2014 in very progressive Washtenaw County (Ann Arbor). Chief Judge. Washtenaw is one of Michigan\'s most liberal counties.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Elected in very progressive Washtenaw County',

              marriage: 'Very progressive county context',

              religiousLiberty: 'Very progressive county; no specific positions',

              secondAmendment: 'Washtenaw County strongly anti-gun context',

              limitedGov: 'Elected in one of Michigan\'s most liberal counties',

              fiscal: 'Progressive county; no specific positions'

            } },
          { name: "Tracy E. Van den Bergh", incumbent: true, grade: 'D', description: 'Washtenaw County 22nd Circuit Court judge. Very progressive county (Ann Arbor).', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Washtenaw County (Ann Arbor) very progressive context',

              marriage: 'Very progressive county',

              religiousLiberty: 'No specific positions; progressive county',

              secondAmendment: 'Very progressive county context',

              limitedGov: 'Elected/serving in one of Michigan\'s most liberal counties',

              fiscal: 'Progressive county context'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 24th Circuit - Sanilac County
  // -------------------------------------------------------------------------
  24: {
    circuit: 24,
    county: "Sanilac",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Timothy C. Wrathell", incumbent: true, grade: 'B', description: 'Elected 2020. Born and raised in Sanilac County. Engineering degree (Purdue) and law degree. Private practice attorney for 10+ years in rural conservative Thumb region.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Elected in very conservative Thumb region of Michigan',

              marriage: 'Conservative rural area; no specific positions',

              religiousLiberty: 'No specific positions; conservative context',

              secondAmendment: 'Elected in rural conservative Sanilac County; pro-2A area',

              limitedGov: 'Elected in conservative county; engineering background suggests analytical approach',

              fiscal: 'Private practice in conservative rural area; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 25th Circuit - Marquette County
  // -------------------------------------------------------------------------
  25: {
    circuit: 25,
    county: "Marquette",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Matt Wiese", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2023. Former Marquette County prosecutor (30+ years). President of Prosecutors Association of Michigan. Long prosecution career but Democratic appointment.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; 30+ year prosecutor provides moderate signal',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions; prosecution career',

              secondAmendment: '30+ year prosecutor career; law-and-order background provides moderate counterweight',

              limitedGov: 'Appointed by Democratic governor; former Battered Women\'s Justice Project staff attorney',

              fiscal: 'Whitmer (D) appointee'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 26th Circuit - Alpena / Montmorency Counties
  // -------------------------------------------------------------------------
  26: {
    circuit: 26,
    county: "Alpena / Montmorency",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "K. Edward Black", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D). Former prosecutor in Alpena/Montmorency counties since 2009. Rural conservative area but Democratic appointment. Now Chief Judge.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; prosecutor background in conservative area provides moderate signal',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions; rural conservative context',

              secondAmendment: 'Prosecutor in rural northern Michigan; but Democratic appointee',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Whitmer (D) appointee'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 28th Circuit - Missaukee / Wexford Counties
  // -------------------------------------------------------------------------
  28: {
    circuit: 28,
    county: "Missaukee / Wexford",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jason J. Elmore", incumbent: true, grade: 'B', description: 'Elected 2020. 22-year U.S. Army JAG Corps veteran (including deployment as prosecutor, 3 years as military judge). Former Wexford County prosecutor. Strong military and law enforcement background.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Military veteran; elected in conservative rural area',

              marriage: 'Military career; conservative rural context',

              religiousLiberty: 'No specific positions; military background',

              secondAmendment: '22-year Army JAG veteran; military background very strongly pro-2A',

              limitedGov: 'Elected (not appointed); military judicial experience; prosecutor career',

              fiscal: 'Conservative rural area; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 29th Circuit - Clinton / Gratiot Counties
  // -------------------------------------------------------------------------
  29: {
    circuit: 29,
    county: "Clinton / Gratiot",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Shannon L.W. Schlegel", incumbent: true, grade: 'C', description: 'Elected 2020 unopposed. Private practice attorney for 12+ years. Former special prosecutor for DHHS in child welfare. Clinton County Planning Commission chair. Community involvement in conservative-leaning area.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No specific record; moderate-conservative area',

              marriage: 'Family law practitioner; no specific positions',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'No specific positions; rural area context',

              limitedGov: 'Private practice background; served on zoning and planning boards; moderate',

              fiscal: 'Small business owner; community involvement in conservative area'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 30th Circuit - Ingham County
  // -------------------------------------------------------------------------
  30: {
    circuit: 30,
    county: "Ingham",
    races: [
      {
        term: "6 Year Term",
        seats: 3,
        type: "incumbent",
        candidates: [
          { name: "Rosemarie Elizabeth Aquilina", incumbent: true, grade: 'D', description: 'Elected 2008. Famous for Larry Nassar sentencing. Background as Democratic campaign manager for state Sen. John Kelly. Former Democratic lobbyist. Self-described \'raised a Democrat.\'', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'F', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Democratic political background; worked for Democratic senator and lobby firm',

              marriage: 'Democratic political career; progressive orientation',

              religiousLiberty: 'No specific positions; mixed signals',

              secondAmendment: 'Democratic political background; Ingham County progressive context',

              limitedGov: 'Known for activist judicial style in Nassar case; Democrats recruited her for Supreme Court run; campaign manager/lobbyist turned judge',

              fiscal: 'Democratic lobbyist background; Ingham County progressive context'

            } },
          { name: "Carol N. Koenig", incumbent: true, grade: 'D', description: 'Elected 2020 in progressive Ingham County (Lansing). Family Division judge. Progressive county context.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Elected in progressive Ingham County (state capital)',

              marriage: 'Progressive county context',

              religiousLiberty: 'No specific positions; progressive county',

              secondAmendment: 'Progressive Ingham County context',

              limitedGov: 'Elected in progressive county',

              fiscal: 'Progressive county context'

            } },
          { name: "Wanda M. Stokes", incumbent: true, grade: 'D', description: 'Ingham County 30th Circuit Court judge. Progressive county (Lansing).', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Progressive Ingham County context',

              marriage: 'Progressive county',

              religiousLiberty: 'No specific positions; progressive county',

              secondAmendment: 'Progressive county context',

              limitedGov: 'Ingham County context leans progressive',

              fiscal: 'Progressive county context'

            } }
        ]
      },
      {
        term: "Partial Term ending 01/01/2029",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Patricia Tremblay", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in March 2025. Over two decades of public service in Michigan government. Family Division judge.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; career in Michigan government',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions',

              secondAmendment: 'Whitmer (D) appointee',

              limitedGov: 'Appointed by Democratic governor; career government service',

              fiscal: 'Whitmer (D) appointee; government career'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 31st Circuit - St. Clair County
  // -------------------------------------------------------------------------
  31: {
    circuit: 31,
    county: "St. Clair",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Daniel A. Damman", incumbent: true, grade: 'B', description: 'Former three-term mayor of Marysville. Private practice attorney. St. Clair County is conservative-leaning. Community service background.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Conservative-leaning St. Clair County; former Republican-area mayor',

              marriage: 'Conservative county context; no specific positions',

              religiousLiberty: 'No specific positions; conservative area',

              secondAmendment: 'Conservative county; no specific positions',

              limitedGov: 'Private practice and municipal government background; conservative area',

              fiscal: 'Former mayor; private practice; conservative county context'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 32nd Circuit - Gogebic / Ontonagon Counties
  // -------------------------------------------------------------------------
  32: {
    circuit: 32,
    county: "Gogebic / Ontonagon",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Michael K. Pope", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2016. Private practice attorney (Dean and Pope). Biology and history degree from Alma College. Criminal law adjunct professor at Gogebic Community College.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no specific record',

              marriage: 'Snyder (R) appointee; no specific positions',

              religiousLiberty: 'Snyder (R) appointee; no specific positions',

              secondAmendment: 'Snyder appointee; rural UP context; private practice',

              limitedGov: 'Appointed by Republican governor; private practice background',

              fiscal: 'Snyder (R) appointee; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 33rd Circuit - Charlevoix County
  // -------------------------------------------------------------------------
  33: {
    circuit: 33,
    county: "Charlevoix",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Roy Charles Hayes III", incumbent: true, grade: 'B', description: 'Elected 2014. University of Notre Dame graduate, Washington & Lee Law School. Former private practice attorney (Hayes Law Firm). Conservative-leaning Charlevoix County.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Notre Dame graduate (Catholic university); conservative northern Michigan county',

              marriage: 'Catholic education background; conservative area',

              religiousLiberty: 'Notre Dame background; no specific positions',

              secondAmendment: 'Rural northern Michigan; conservative county',

              limitedGov: 'Private practice background; elected in conservative county',

              fiscal: 'Private practice; conservative county context'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 35th Circuit - Shiawassee County
  // -------------------------------------------------------------------------
  35: {
    circuit: 35,
    county: "Shiawassee",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Matthew J. Stewart", incumbent: true, grade: 'B', description: 'Elected 2014. U.S. Navy veteran (Operation Desert Shield/Storm). Thomas Cooley Law School. Military service and rural county election are conservative signals.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Navy veteran; elected in conservative Shiawassee County',

              marriage: 'Military veteran; conservative county',

              religiousLiberty: 'No specific positions; conservative context',

              secondAmendment: 'U.S. Navy veteran; Operation Desert Shield/Storm; strongly pro-2A expected',

              limitedGov: 'Military veteran; elected in conservative county; judicial restraint expected',

              fiscal: 'Conservative county; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 36th Circuit - Van Buren County
  // -------------------------------------------------------------------------
  36: {
    circuit: 36,
    county: "Van Buren",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Kelly Ward", incumbent: false, grade: 'C', description: 'Judicial officer/attorney referee in Van Buren County Family Court since 2021. Presides over domestic relations and juvenile matters. Running for open seat.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Family court referee experience; no clear partisan signal',

              fiscal: 'No public record found'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 37th Circuit - Calhoun County
  // -------------------------------------------------------------------------
  37: {
    circuit: 37,
    county: "Calhoun",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Sarah S. Lincoln", incumbent: true, grade: 'C', description: 'Elected 2014, reelected 2020. First female circuit judge in Calhoun County history. Former assistant prosecutor for 13 years. Prosecution background but no clear partisan alignment.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No specific record; prosecutor background',

              marriage: 'No specific positions found',

              religiousLiberty: 'No specific positions found',

              secondAmendment: '13-year prosecutor career; law-and-order background',

              limitedGov: 'Elected twice; prosecutor background; no clear partisan signal',

              fiscal: 'No specific positions found'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 38th Circuit - Monroe County
  // -------------------------------------------------------------------------
  38: {
    circuit: 38,
    county: "Monroe",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Lauren K. Beaudry", incumbent: false, grade: 'C', description: 'Non-incumbent candidate for open Monroe County 38th Circuit Court seat. Limited public information available.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'No public record found',

              fiscal: 'No public record found'

            } },
          { name: "Maria Zagorski", incumbent: false, grade: 'C', description: 'Monroe County attorney. Has run for district court judge previously. Limited public information on political orientation.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'No public record found',

              fiscal: 'No public record found'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 39th Circuit - Lenawee County
  // -------------------------------------------------------------------------
  39: {
    circuit: 39,
    county: "Lenawee",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Michael R. Olsaver", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2019. Private practice attorney prior to appointment.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; no specific record',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Whitmer (D) appointee',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Whitmer (D) appointee'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 40th Circuit - Lapeer County
  // -------------------------------------------------------------------------
  40: {
    circuit: 40,
    county: "Lapeer",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Mike Hodges", incumbent: true, grade: 'B', description: 'Elected 2020 (defeated incumbent). Former Lapeer County chief assistant prosecutor with 80+ jury trials. Friend of the Court experience. Law-and-order candidate in conservative county.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Elected in conservative Lapeer County',

              marriage: 'Conservative county; no specific positions',

              religiousLiberty: 'No specific positions; conservative county',

              secondAmendment: 'Extensive prosecutor career; 80+ jury trials; law-and-order',

              limitedGov: 'Elected by defeating incumbent; prosecutor background suggests restraint',

              fiscal: 'Conservative county; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 41st Circuit - Iron / Dickinson / Menominee Counties
  // -------------------------------------------------------------------------
  41: {
    circuit: 41,
    county: "Iron / Dickinson / Menominee",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Christopher S. Ninomiya", incumbent: true, grade: 'A', description: 'Appointed by Gov. Snyder (R) in 2018. Former elected Dickinson County prosecuting attorney (since 1993). Former 95-B District Court judge (elected 2008). MSU and Wayne State Law. Long conservative prosecution career in UP.', positions: { proLife: 'A', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'A', limitedGov: 'A', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; elected prosecutor since 1993 in conservative UP',

              marriage: 'Conservative UP context; no specific positions',

              religiousLiberty: 'No specific positions; conservative context',

              secondAmendment: 'Long-serving prosecutor in rural UP; Snyder appointee; strongly pro-2A expected',

              limitedGov: 'Snyder appointee; decades as elected prosecutor; strong rule-of-law philosophy',

              fiscal: 'Snyder appointee; conservative area; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 42nd Circuit - Midland County
  // -------------------------------------------------------------------------
  42: {
    circuit: 42,
    county: "Midland",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Michael J. Beale", incumbent: true, grade: 'C', description: 'Appointed by Gov. Granholm (D) in 2007. Declined to perform same-sex marriages in 2015 (stopped performing all marriages). Private practice attorney. Midland County is conservative.', positions: { proLife: 'C', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'Granholm (D) appointee but in conservative Midland County; mixed signals',

              marriage: 'Stopped performing all marriages rather than perform same-sex marriages in 2015; signals traditional values',

              religiousLiberty: 'Marriage decision suggests strong religious conscience; conservative personal values',

              secondAmendment: 'Mixed: Democratic appointee in conservative county',

              limitedGov: 'Granholm appointee but marriage stance shows independent/conservative judicial outlook',

              fiscal: 'Private practice; conservative county; Democratic appointee'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 44th Circuit - Livingston County
  // -------------------------------------------------------------------------
  44: {
    circuit: 44,
    county: "Livingston",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Andrea Banfield", incumbent: false, grade: 'C', description: 'Brighton attorney. \'Outstanding\' rating from Women Lawyers Association of Michigan. Family law focus. Fourth candidate in crowded 44th Circuit race.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found; family law focus',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'Women Lawyers Association recognition; no clear partisan signal; Livingston County is conservative',

              fiscal: 'No public record found'

            } },
          { name: "Christopher Candela", incumbent: false, grade: 'A', description: 'Senior Assistant Prosecuting Attorney in Eaton County. Explicitly states he will \'apply the law as written, respect the separate roles of government, and put public safety and accountability first.\' Originalist/textualist messaging. MSU College of Law. Age 30.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'A', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Prosecutor; conservative judicial messaging; Livingston County conservative context',

              marriage: 'No specific positions but conservative judicial philosophy stated',

              religiousLiberty: 'Conservative judicial philosophy; \'separate roles of government\'',

              secondAmendment: 'Prosecutor career; public safety first messaging',

              limitedGov: 'Explicitly textualist/originalist: \'apply the law as written, respect the separate roles of government\'; strong judicial restraint signal',

              fiscal: 'Conservative judicial philosophy; prosecutor background'

            } },
          { name: "Mark Gatesman", incumbent: false, grade: 'C', description: 'Howell attorney with 25+ years in criminal law. Works with 44th Circuit specialty courts (addiction/mental health). Experienced local practitioner.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'Criminal law practice; no clear signal',

              limitedGov: '25+ years criminal law; specialty court involvement; no clear partisan signal',

              fiscal: 'No public record found'

            } },
          { name: "Mary Ellen Hayes", incumbent: false, grade: 'C', description: 'Howell attorney. Filed for 44th Circuit Court race. Limited public information available on political orientation.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'No public record found',

              fiscal: 'No public record found'

            } },
          { name: "Kristina S. Lyke", incumbent: false, grade: 'A', description: 'Pinckney native. Ran in 2020 Republican congressional primary (8th District) and 2024 Republican primary (50th state House). 20 years circuit court experience. Youngest-ever Pinckney Board of Trustees member. Clear Republican/conservative identity.', positions: { proLife: 'A', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'A', limitedGov: 'A', fiscal: 'A' }, gradeJustifications: {

              proLife: 'Ran in Republican primaries for Congress and state House; Republican political identity',

              marriage: 'Republican primary candidate; conservative values platform',

              religiousLiberty: 'Republican political identity; campaign website references constitutional commitment',

              secondAmendment: 'Republican primary candidate; conservative platform',

              limitedGov: '\'Committed to the Constitution\' campaign messaging; Republican political identity; judicial restraint expected',

              fiscal: 'Republican primary candidate; conservative fiscal orientation'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 46th Circuit - Kalkaska / Crawford / Otsego Counties
  // -------------------------------------------------------------------------
  46: {
    circuit: 46,
    county: "Kalkaska / Crawford / Otsego",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "George J. Mertz", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2013. MSU and Detroit College of Law. Former judicial law clerk for 46th Circuit and AG\'s office clerk. Elected 2014.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no specific record',

              marriage: 'Snyder (R) appointee; no specific positions',

              religiousLiberty: 'Snyder (R) appointee; no specific positions',

              secondAmendment: 'Snyder appointee; rural northern Michigan; conservative area',

              limitedGov: 'Appointed by Republican governor; AG office background',

              fiscal: 'Snyder (R) appointee; no specific positions'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 48th Circuit - Allegan County
  // -------------------------------------------------------------------------
  48: {
    circuit: 48,
    county: "Allegan",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Matt Antkoviak", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2023. Criminal defense attorney and partner at Antkoviak and Antkoviak, PC. DUI/DWI defense focus. Chief Judge since 2026.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; no specific record',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions',

              secondAmendment: 'Criminal defense practice; Whitmer appointee',

              limitedGov: 'Appointed by Democratic governor; defense attorney background',

              fiscal: 'Whitmer (D) appointee'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 49th Circuit - Mecosta / Osceola Counties
  // -------------------------------------------------------------------------
  49: {
    circuit: 49,
    county: "Mecosta / Osceola",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Dennis L. Duvall Jr.", incumbent: false, grade: 'C', description: 'Non-incumbent candidate for open Mecosta/Osceola 49th Circuit Court seat. Limited public information available. Running unopposed.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public record found',

              marriage: 'No public record found',

              religiousLiberty: 'No public record found',

              secondAmendment: 'No public record found',

              limitedGov: 'No public record found; running in conservative rural area',

              fiscal: 'No public record found'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 51st Circuit - Mason County
  // -------------------------------------------------------------------------
  51: {
    circuit: 51,
    county: "Mason",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Susan Kasley Sniegowski", incumbent: true, grade: 'C', description: 'Elected 2014. First female circuit judge in 51st Circuit history. Former Mason County prosecutor. MSU journalism degree, University of Denver law degree.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No specific record; prosecutor background in rural area',

              marriage: 'No specific positions; moderate-conservative area',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Prosecutor in rural Michigan; no specific positions',

              limitedGov: 'Elected prosecutor turned judge; no clear partisan signal',

              fiscal: 'No specific positions found'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 52nd Circuit - Huron County
  // -------------------------------------------------------------------------
  52: {
    circuit: 52,
    county: "Huron",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Gerald M. Prill", incumbent: true, grade: 'B', description: 'Elected 2014 in very conservative Huron County (Thumb region). MSU and Thomas Cooley Law. President of Huron County Bar Association. Community involvement.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Elected in very conservative Huron County in Thumb region',

              marriage: 'Very conservative county context',

              religiousLiberty: 'Conservative county context; no specific positions',

              secondAmendment: 'Very conservative rural Thumb region',

              limitedGov: 'Elected in strongly conservative county; private practice background',

              fiscal: 'Conservative county; community involvement'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 55th Circuit - Clare / Gladwin Counties
  // -------------------------------------------------------------------------
  55: {
    circuit: 55,
    county: "Clare / Gladwin",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Tara S. Hovey", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in 2022. Private practice attorney since 1996, representing local governments. CMU and Ohio Northern Law. Rural area but Democratic appointment.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; private practice in rural area provides some moderate signal',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions; local government representation',

              secondAmendment: 'Rural area practice; but Democratic appointee',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Whitmer (D) appointee; represented local governments'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 56th Circuit - Eaton County
  // -------------------------------------------------------------------------
  56: {
    circuit: 56,
    county: "Eaton",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Kelly E. Morton", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in July 2024. Former 56A District Court judge. 18-year career as assistant prosecutor in Eaton and Alpena counties. Oakland Community College, Oakland University, MSU College of Law.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; 18-year prosecution career provides moderate signal',

              marriage: 'Whitmer (D) appointee; no specific positions',

              religiousLiberty: 'No specific positions; prosecutor background',

              secondAmendment: 'Long prosecution career; but Democratic appointee',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Whitmer (D) appointee'

            } }
        ]
      }
    ]
  }
};


// ============================================================================
// PROBATE COURT CANDIDATES
// ============================================================================

export const probateCourt2026 = {

  // -------------------------------------------------------------------------
  // Berrien County
  // -------------------------------------------------------------------------
  BERRIEN: {
    county: "Berrien",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Mabel Johnson Mayfield", incumbent: true, grade: 'B', description: 'Appointed by Republican Governor John Engler in January 2000. Has served continuously since, winning multiple elections. Previously served as a Juvenile Court Attorney Referee for 7 years and worked at Berrien County Legal Services for 10 years. Currently serves as Chief Judge of the Berrien County Trial Court. Named Fellow of the Michigan State Bar Foundation.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Appointed by pro-life Republican Governor Engler. No public statements found on life issues.',

              marriage: 'Appointed by Republican governor who supported traditional marriage. No public statements found.',

              religiousLiberty: 'No public record on religious liberty issues. Default based on Republican appointment.',

              secondAmendment: 'No public record on Second Amendment issues. Default based on Republican appointment.',

              limitedGov: 'Long tenure as probate judge suggests institutional stability. Appointed by governor who favored judicial restraint.',

              fiscal: 'No public record on property rights or fiscal rulings. Default based on Republican appointment.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Chippewa County
  // -------------------------------------------------------------------------
  CHIPPEWA: {
    county: "Chippewa",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Eric G. Blubaugh", incumbent: true, grade: 'B', description: 'Appointed by Republican Governor Rick Snyder on May 8, 2017. Former assistant prosecutor for Chippewa County, chief prosecutor for Bay Mills Indian Community, magistrate for 91st District Court, juvenile referee for Chippewa County Family Court, and adjunct professor at Lake Superior State University. Has won election to keep the seat.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Appointed by Republican Governor Snyder. No public statements found on life issues.',

              marriage: 'No public statements found. Default based on Republican governor appointment.',

              religiousLiberty: 'No public record on religious liberty issues. Default based on Republican appointment.',

              secondAmendment: 'No public record on Second Amendment issues. Rural UP district. Default based on Republican appointment.',

              limitedGov: 'Prosecutorial background suggests law-and-order orientation. Appointed by governor who favored moderate judicial restraint.',

              fiscal: 'No public record on property rights or fiscal rulings. Default based on Republican appointment.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Genesee County
  // -------------------------------------------------------------------------
  GENESEE: {
    county: "Genesee",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Andrea L. LeGendre", incumbent: false, grade: null, description: 'Assistant County Prosecutor and Bureau Chief in Genesee County with 25 years of experience in county courts. Has overseen probate, family, and felony matters including guardianships, child protection, elder abuse, and mental health proceedings. Lifelong Genesee County resident. No political affiliation information found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Prosecutorial background but no information on judicial philosophy.',

              fiscal: 'No public record on property rights or fiscal issues.'

            } },
          { name: "Ashley Prew", incumbent: false, grade: null, description: 'Senior Assistant Prosecuting Attorney in Genesee County. Also served as Senior Assistant Corporation Counsel. Prior to government service, practiced at Casey D Conklin with experience in estate planning, probate, business law, real estate, intellectual property, and civil litigation. J.D. from Michigan State University College of Law. No political affiliation information found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Prosecutorial background but no information on judicial philosophy.',

              fiscal: 'No public record on property rights or fiscal issues.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Huron County
  // -------------------------------------------------------------------------
  HURON: {
    county: "Huron",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Julienne M. Ferris", incumbent: true, grade: 'D', description: 'Appointed by Democrat Governor Gretchen Whitmer in September 2025 to the Huron County Probate Court, also serving as 73-B District Court judge. First female judge in Huron County history. Previously a partner at Ferris, Schwedler & O\'Mara, P.C. in Bad Axe, specializing in family and probate law. B.S. in early childhood education from University of Georgia; J.D. from Florida Coastal School of Law.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Appointed by pro-choice Governor Whitmer. No personal public statements found.',

              marriage: 'Appointed by Governor Whitmer who supports progressive marriage policies. No personal statements found.',

              religiousLiberty: 'No public record on religious liberty issues. Default based on Democrat governor appointment.',

              secondAmendment: 'No public record on Second Amendment issues. Default based on Democrat governor appointment.',

              limitedGov: 'Appointed by Democrat governor. No information on judicial philosophy available.',

              fiscal: 'No public record on property rights or fiscal rulings. Default based on Democrat governor appointment.'

            } },
          { name: "Jessica Leigh Testolin-Reinke", incumbent: false, grade: null, description: 'Attorney magistrate for the 73-B District Court in Huron County. Oversees all magistrate matters and serves as an attorney referee. Challenging incumbent Judge Ferris. No political affiliation information found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'No information on judicial philosophy.',

              fiscal: 'No public record on property rights or fiscal issues.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Ingham County
  // -------------------------------------------------------------------------
  INGHAM: {
    county: "Ingham",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Richard J. Garcia", incumbent: true, grade: 'B', description: 'Appointed by Republican Governor John Engler in February 2000. Elected in November 2000 and re-elected for full terms in 2002, 2008, and 2014. Appointed Chief Judge of Ingham County Probate Court by Michigan Supreme Court in 2013. B.A. from University of Notre Dame (1983); J.D. from University of Michigan (1985). Over 25 years of service on the bench.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Appointed by pro-life Republican Governor Engler. No public statements found on life issues.',

              marriage: 'Appointed by Republican governor who supported traditional marriage. No personal statements found.',

              religiousLiberty: 'No public record on religious liberty issues. Default based on Republican appointment.',

              secondAmendment: 'No public record on Second Amendment issues. Default based on Republican appointment.',

              limitedGov: 'Long-serving judge appointed by Republican governor. University of Michigan law education. No evidence of activist rulings.',

              fiscal: 'No public record on property rights or fiscal rulings. Default based on Republican appointment.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Kalamazoo County
  // -------------------------------------------------------------------------
  KALAMAZOO: {
    county: "Kalamazoo",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Tiffany A. Ankley", incumbent: true, grade: 'C', description: 'Elected to probate court seat in 2014, defeating opponent with 55.9% of the vote, but was reassigned to 8th District Court by the Kalamazoo County Executive Judicial Council. Previously served as a family court attorney-referee for the 9th Circuit Court for ten years. President of the Kalamazoo County Bar Association. Not appointed by any governor -- won election outright. No political affiliation information found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Elected rather than appointed, so no governor signal. Family court background. No clear ideological indicators.',

              fiscal: 'No public record on property rights or fiscal issues.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Kent County
  // -------------------------------------------------------------------------
  KENT: {
    county: "Kent",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "David M. Murkowski", incumbent: true, grade: 'D', description: 'Appointed by Democrat Governor Jennifer Granholm on August 4, 2006. Subsequently appointed chief judge by Michigan Supreme Court in December 2007. B.A. from Marquette University (1979); J.D. from Thomas M. Cooley Law School (1983). Was a solo practitioner from 1983-1993 and managing partner at Dilley, Dilley, Murkowski & Goller, PLLC before appointment. Has served continuously since 2006.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Appointed by pro-choice Governor Granholm. No personal public statements found.',

              marriage: 'Appointed by Governor Granholm. No personal statements found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues. Default based on Democrat governor appointment.',

              secondAmendment: 'No public record on Second Amendment issues. Default based on Democrat governor appointment.',

              limitedGov: 'Appointed by Democrat governor. Long tenure but no information on judicial philosophy specifics.',

              fiscal: 'No public record on property rights or fiscal rulings. Default based on Democrat governor appointment.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Macomb County
  // -------------------------------------------------------------------------
  MACOMB: {
    county: "Macomb",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Sara A. Schimke", incumbent: true, grade: 'D', description: 'Appointed by Democrat Governor Gretchen Whitmer in April 2022. Previously an attorney at Chalgian & Tripp, PLLC, specializing in probate law, estate planning, and advocacy. Won election in November 2022 to keep the seat. Career devoted exclusively to probate and estate planning matters.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Appointed by pro-choice Governor Whitmer. No personal public statements found.',

              marriage: 'Appointed by Governor Whitmer. No personal statements found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues. Default based on Democrat governor appointment.',

              secondAmendment: 'No public record on Second Amendment issues. Default based on Democrat governor appointment.',

              limitedGov: 'Appointed by Democrat governor. Probate practice background. No information on judicial philosophy.',

              fiscal: 'No public record on property rights or fiscal rulings. Default based on Democrat governor appointment.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Monroe County
  // -------------------------------------------------------------------------
  MONROE: {
    county: "Monroe",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Cheryl R. Sweeney", incumbent: true, grade: 'D', description: 'Appointed by Democrat Governor Gretchen Whitmer on November 6, 2025. Previously served as chief juvenile court referee for the 38th Judicial Circuit Court Family Division and deputy probate register for the Monroe County Probate Court. Also previously solo practitioner at Law Offices of Cheryl Sweeney. Filling partial term following resignation of Judge Frank Arnold.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Appointed by pro-choice Governor Whitmer. No personal public statements found.',

              marriage: 'Appointed by Governor Whitmer. No personal statements found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues. Default based on Democrat governor appointment.',

              secondAmendment: 'No public record on Second Amendment issues. Default based on Democrat governor appointment.',

              limitedGov: 'Appointed by Democrat governor. Juvenile court referee background. No information on judicial philosophy.',

              fiscal: 'No public record on property rights or fiscal rulings. Default based on Democrat governor appointment.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Oakland County
  // -------------------------------------------------------------------------
  OAKLAND: {
    county: "Oakland",
    races: [
      {
        term: "Partial Term ending 01/01/2029",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Nicole S. Huddleston", incumbent: true, grade: 'D', description: 'Appointed by Democrat Governor Gretchen Whitmer on April 1, 2026. Owner of Huddleston Law, PLLC, specializing in probate, family, and civil law. Previously served as managing director at Detroit Justice Center, and as staff attorney at Detroit Justice Center, Lakeshore Legal Aid, and Legal Aid and Defender. Filling partial term following resignation of Judge Kathleen Ryan.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Appointed by pro-choice Governor Whitmer. No personal public statements found.',

              marriage: 'Appointed by Governor Whitmer. No personal statements found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues. Default based on Democrat governor appointment.',

              secondAmendment: 'No public record on Second Amendment issues. Default based on Democrat governor appointment.',

              limitedGov: 'Very recent Whitmer appointee (April 2026). Background at Detroit Justice Center and legal aid organizations suggests progressive legal orientation.',

              fiscal: 'No public record on property rights or fiscal rulings. Default based on Democrat governor appointment.'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Elisabeth Dery", incumbent: false, grade: 'D', description: 'Partner at Yun, Dery & Morgan, P.C. in Clarkston, managing a 16-member legal team focused on probate clients. Chair of the Oakland County Bar Association\'s Probate, Estate, and Trust Committee. Elected to the Board of the Michigan Guardianship Association. Member of State Bar of Michigan LGBTQA Committee. Co-authored legal articles supporting second-parent adoption and LGBTQ+ families post-DOMA. J.D. from Western Michigan University-Cooley Law School (2012).', positions: { proLife: 'D', marriage: 'F', religiousLiberty: 'D', secondAmendment: null, limitedGov: 'D', fiscal: null }, gradeJustifications: {

              proLife: 'No direct statements on life issues. LGBTQA committee involvement and progressive legal advocacy suggest liberal alignment.',

              marriage: 'Active member of State Bar of Michigan LGBTQA Committee. Co-authored legal articles supporting second-parent adoption and LGBTQ+ families, indicating strong progressive stance on family/marriage issues.',

              religiousLiberty: 'Progressive stance on LGBTQ+ family matters may indicate tension with traditional religious liberty frameworks.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Advocacy-oriented legal background suggests activist judicial philosophy.',

              fiscal: 'No public record on property rights or fiscal issues.'

            } },
          { name: "Ariel Drissman", incumbent: false, grade: null, description: 'Estate planner and probate attorney at Drissman Law, PLLC in West Bloomfield. B.A. from Wayne State University; J.D. from University of Detroit Mercy School of Law. Admitted to practice in Michigan since 2014. Member of Oakland County Bar Association. Campaign emphasizes nonpartisan approach: \'firmly committed to following the law without politics or ideology influencing outcomes.\' No political affiliation information found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Campaign language about following law without ideology could indicate judicial restraint, but insufficient information to grade.',

              fiscal: 'No public record on property rights or fiscal issues.'

            } },
          { name: "Jessica Ann Hallmark", incumbent: false, grade: null, description: 'Attorney at Adkison Need Allen & Rentrop in Bloomfield Hills since 2017, practicing commercial real estate, liquor licensing, and business formation. Previously served as law clerk for Oakland Circuit Judge Wendy Potts and spent seven years at a Birmingham boutique law firm. Resides in Clarkston. No political affiliation information found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Business law and commercial real estate background. No information on judicial philosophy.',

              fiscal: 'Business law background may indicate familiarity with property rights, but insufficient information to grade.'

            } },
          { name: "Sheila Calvary Worthy-Williams", incumbent: false, grade: null, description: 'Candidate for Oakland County Probate Court open seat. Very limited public information available. No background details, political affiliations, or endorsements found through research.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information found.',

              marriage: 'No public information found.',

              religiousLiberty: 'No public information found.',

              secondAmendment: 'No public information found.',

              limitedGov: 'No public information found.',

              fiscal: 'No public information found.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Saginaw County
  // -------------------------------------------------------------------------
  SAGINAW: {
    county: "Saginaw",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Barbara L. Meter", incumbent: true, grade: 'C', description: 'Elected to Saginaw County Probate Court on November 4, 2014, winning a five-candidate primary and then the general election with 56.6% of the vote. Not appointed by any governor. B.S. in elementary education from Michigan State University (1984); J.D. from University of New Hampshire (1990). Served as assistant prosecutor in Saginaw County for 19 years before election.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Elected rather than appointed, so no governor signal. Long prosecutorial background. No clear ideological indicators.',

              fiscal: 'No public record on property rights or fiscal issues.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // St. Clair County
  // -------------------------------------------------------------------------
  "ST. CLAIR": {
    county: "St. Clair",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jennifer Deegan", incumbent: true, grade: 'D', description: 'Appointed by Democrat Governor Gretchen Whitmer on March 19, 2024. Previously served as senior assistant prosecuting attorney in the St. Clair County Prosecuting Attorney\'s Office since 1999. B.A. in International Business and French from Alma College; J.D. from Wayne State University School of Law. Filling vacancy created by retirement of Judge Elwood L. Brown.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Appointed by pro-choice Governor Whitmer. No personal public statements found.',

              marriage: 'Appointed by Governor Whitmer. No personal statements found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues. Default based on Democrat governor appointment.',

              secondAmendment: 'No public record on Second Amendment issues. Default based on Democrat governor appointment.',

              limitedGov: 'Appointed by Democrat governor. Prosecutorial background. No information on judicial philosophy.',

              fiscal: 'No public record on property rights or fiscal rulings. Default based on Democrat governor appointment.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Sanilac County
  // -------------------------------------------------------------------------
  SANILAC: {
    county: "Sanilac",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Sara L. Grout", incumbent: false, grade: null, description: 'Candidate for Sanilac County Probate Court open seat (non-incumbent race with single candidate). Very limited public information available. No background details, political affiliations, or endorsements found through research.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information found.',

              marriage: 'No public information found.',

              religiousLiberty: 'No public information found.',

              secondAmendment: 'No public information found.',

              limitedGov: 'No public information found.',

              fiscal: 'No public information found.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Washtenaw County
  // -------------------------------------------------------------------------
  WASHTENAW: {
    county: "Washtenaw",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Alethia Jean Battles", incumbent: false, grade: 'D', description: 'Associate General Counsel and Licensed Clinical Social Worker at the University of Michigan. Attorney with over a decade of experience in probate matters across multiple counties in Michigan and Ohio. Works at the intersection of law, medicine, and social services managing cases involving guardianship, capacity determinations, surrogate decision-making, and complex disposition issues. Running in heavily Democratic Washtenaw County for open seat vacated by retiring Judge Julia Owdziej.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'University of Michigan institutional affiliation in heavily progressive Washtenaw County. No direct statements but environment strongly suggests progressive alignment.',

              marriage: 'No direct statements, but Washtenaw County / University of Michigan context strongly suggests progressive alignment.',

              religiousLiberty: 'No public record. Environmental context of deeply liberal Washtenaw County suggests progressive stance.',

              secondAmendment: 'No public record. Washtenaw County context suggests progressive alignment.',

              limitedGov: 'Social work background combined with legal practice at U of M suggests activist/interventionist judicial philosophy.',

              fiscal: 'No public record on property rights or fiscal issues. Institutional environment suggests progressive orientation.'

            } },
          { name: "Jennifer Lawrence", incumbent: false, grade: 'D', description: 'Ann Arbor attorney born and raised in the community. Practices in estate planning, general civil litigation, real estate, and criminal matters. Past president of Women Lawyers Association of Michigan Washtenaw Chapter. Served on Washtenaw County Bar Association Board of Directors. J.D. from Thomas M. Cooley Law School (2008); B.S. magna cum laude (2001). Running in heavily Democratic Washtenaw County.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'No direct statements but running in heavily progressive Washtenaw County suggests liberal alignment.',

              marriage: 'No direct statements but Washtenaw County / Ann Arbor context strongly suggests progressive alignment.',

              religiousLiberty: 'No public record. Environmental context of deeply liberal Washtenaw County suggests progressive stance.',

              secondAmendment: 'No public record. Washtenaw County context suggests progressive alignment.',

              limitedGov: 'No specific information on judicial philosophy. Ann Arbor environment suggests progressive orientation.',

              fiscal: 'Estate planning and real estate background may indicate respect for property rights, but Washtenaw County context suggests progressive orientation overall.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Wayne County
  // -------------------------------------------------------------------------
  WAYNE: {
    county: "Wayne",
    races: [
      {
        term: "6 Year Term",
        seats: 3,
        type: "non-incumbent",
        candidates: [
          { name: "Sarah Colegrove", incumbent: false, grade: null, description: 'Partner at Briggs Colegrove, P.C. in downtown Detroit (First National Building). B.A. in political science from Kalamazoo College; J.D. from Michigan State University School of Law. Firm specializes in litigation, estate and probate matters. Certified mediator serving as mediator for U.S. Postal Service and arbitrator for Better Business Bureau. Previously ran for Grosse Pointe City Municipal Judge in 2023. No political affiliation information found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Mediation and arbitration background may suggest preference for dispute resolution over judicial activism, but insufficient information.',

              fiscal: 'Estate and probate practice background but no public record on fiscal issues.'

            } },
          { name: "Suzanne Fanning", incumbent: false, grade: null, description: 'Probate and estate attorney based in Ann Arbor. Founder of Suzanne R. Fanning, PLLC. B.A. with honors in History from University of Bristol, England (1991); J.D. from Wayne State Law School (1996). 25+ years of legal experience concentrating exclusively in probate, trusts, and estates. Co-chair of Washtenaw County Bar Association Probate and Estate Section. Frequently appointed Guardian Ad Litem by Washtenaw County Probate Court. No political affiliation information found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Deep probate practice expertise. No information on judicial philosophy.',

              fiscal: 'Extensive estate and trust practice suggests familiarity with property rights issues, but insufficient information to grade.'

            } },
          { name: "Susan L. Hubbard", incumbent: false, grade: 'F', description: 'Current Wayne County Circuit Court Judge since 2010. Nominated by the Green Party of Michigan for Michigan Supreme Court in 2020. Previously served on Wayne County Commission from 1989-2004 and Dearborn City Council from 1985-1989. B.A. in print journalism from Wayne State University (1985); J.D. from Detroit College of Law (1991). Campaign emphasizes stopping \'insider favoritism\' and restoring transparency at Wayne County Probate Court. Created first instructional video for self-represented litigants.', positions: { proLife: 'F', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'F', limitedGov: 'F', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Nominated by Green Party of Michigan for Supreme Court in 2020. Green Party platform is strongly pro-choice. Long career in Wayne County Democratic political establishment.',

              marriage: 'Green Party nominee. Green Party platform supports expansive LGBTQ+ rights and progressive family law positions.',

              religiousLiberty: 'Green Party affiliation and long career in progressive Wayne County politics suggest opposition to religious liberty carve-outs.',

              secondAmendment: 'Green Party platform explicitly supports strict gun control measures. Green Party Supreme Court nominee.',

              limitedGov: 'Green Party nominee for Supreme Court indicates activist judicial philosophy. Long political career on Wayne County Commission suggests government interventionism.',

              fiscal: 'Long government career and Green Party affiliation suggest progressive fiscal orientation, though her ethics ordinance work and anti-corruption stance show some institutional reform instincts.'

            } },
          { name: "Shalanda C. Leggs", incumbent: false, grade: null, description: 'Principal and Founder of The C. Smith Law Group, PLLC in the Metropolitan Detroit area. B.B.A. in Finance from Eastern Michigan University; J.D. from University of Detroit School of Law. Primary practice areas include probate (guardianship, conservatorship, estate administration), estate planning, and business law. Had a 20-year career in Finance and Accounting prior to becoming an attorney. No political affiliation information found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Business and finance background prior to law career. No information on judicial philosophy.',

              fiscal: 'Strong finance and accounting background (20 years) plus business law practice may indicate respect for property rights and fiscal responsibility, but insufficient information to grade.'

            } },
          { name: "Vanessa M. Moss", incumbent: false, grade: null, description: 'Solo practitioner since 2002 with expertise in criminal, family, probate, neglect and abuse, and delinquency law. Raised in Detroit, graduated from DPS and Wayne State University. Active in community through voter registration drives, church work, and extensive pro bono work. Board member of Downtown Detroit YMCA and Rho Sigma Foundation of Sigma Gamma Rho Sorority. Previously ran for 36th District Court Judge in 2024 (lost as write-in). No political affiliation information found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public statements or affiliations found on life issues.',

              marriage: 'No public statements or affiliations found on marriage issues.',

              religiousLiberty: 'Church involvement noted in community work, but no specific statements on religious liberty.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'No information on judicial philosophy. Community-oriented background.',

              fiscal: 'No public record on property rights or fiscal issues.'

            } }
        ]
      }
    ]
  }
};


// ============================================================================
// DISTRICT COURT CANDIDATES
// ============================================================================
// TODO: District court geographic mapping — these 88 districts cover specific
// cities/townships within counties. A full county-to-district mapping is needed
// for precise ballot lookup. For now, all data is exported for future use.

export const districtCourt2026 = {

  // -------------------------------------------------------------------------
  // 1st District - Monroe County
  // -------------------------------------------------------------------------
  "1st": {
    district: "1st",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Michael Brown", incumbent: true, grade: 'C', description: 'Chief Judge of 1st District Court in Monroe County. Limited public record on political leanings. Elected, not appointed.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues.',

              marriage: 'No public record on marriage/family issues.',

              religiousLiberty: 'No public record on religious liberty issues.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Insufficient information to determine judicial philosophy; default C.',

              fiscal: 'No specific record on property rights or regulatory rulings.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 2A District - Lenawee County
  // -------------------------------------------------------------------------
  "2A": {
    district: "2A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Todd M. Morgan", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in 2022. Former Lenawee County public defender. Background in defense work and government service, including U.S. Navy veteran.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Appointed by Democrat governor; no public pro-life stance.',

              marriage: 'Whitmer appointee; no traditional marriage advocacy known.',

              religiousLiberty: 'No public record supporting religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Public defender background; Whitmer appointee suggests progressive judicial philosophy.',

              fiscal: 'No record on property rights; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 2B District - Lenawee County
  // -------------------------------------------------------------------------
  "2B": {
    district: "2B",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Megan R.M. Stiverson", incumbent: true, grade: 'C', description: 'Elected in 2020 to 2B District Court in Hillsdale County. Graduate of Hope College and MSU-Detroit College of Law. Not appointed by a governor.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Elected in conservative Hillsdale County, but insufficient info on judicial philosophy.',

              fiscal: 'No specific record on property/regulatory issues.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 3A District - Branch County
  // -------------------------------------------------------------------------
  "3A": {
    district: "3A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Brent R. Weigle", incumbent: true, grade: 'B', description: 'Serving since 2009; former assistant prosecuting attorney and magistrate in Branch County. Four decades of legal career in Branch County. Seeking fourth term.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Prosecutor background in conservative rural county; no contrary signals.',

              marriage: 'Long tenure in conservative Branch County; no contrary signals.',

              religiousLiberty: 'No negative signals on religious liberty.',

              secondAmendment: 'Rural conservative county; prosecutor background favorable.',

              limitedGov: 'Prosecutor background suggests law-and-order judicial restraint.',

              fiscal: 'Long service in rural Michigan; no adverse signals on property rights.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 3B District - Branch County
  // -------------------------------------------------------------------------
  "3B": {
    district: "3B",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Tim George", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 3B District Court seat in Branch County. No public record found on background or positions.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 4th District - Berrien / Cass Counties
  // -------------------------------------------------------------------------
  "4th": {
    district: "4th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Stacey A. Rentfrow", incumbent: true, grade: 'C', description: 'Serving since 2009 in Cass County. Former Legal Aid attorney and Friend of the Court referee. Background in public interest law and civil litigation.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues; legal aid background is neutral to mildly progressive signal.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment issues.',

              limitedGov: 'Legal aid background suggests moderate-to-progressive philosophy, but rural county context.',

              fiscal: 'Handles landlord-tenant disputes; legal aid background may lean tenant-favorable.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 5th District - Berrien County
  // -------------------------------------------------------------------------
  "5th": {
    district: "5th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Jennifer E. Fields", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 5th District Court seat in Berrien County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Myrene Kay Koch", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 5th District Court seat in Berrien County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Gordon Gary Hosbein", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in August 2018. Former Macomb County assistant prosecuting attorney. Handled felony cases including child abuse/neglect. St. Joseph native.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; prosecutor background in child abuse cases favorable signal.',

              marriage: 'Republican governor appointee; no contrary signals.',

              religiousLiberty: 'No negative signals; Snyder appointee.',

              secondAmendment: 'Prosecutor background; Snyder appointee.',

              limitedGov: 'Prosecutor-to-judge pipeline suggests law-and-order judicial restraint.',

              fiscal: 'No specific record; Snyder appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 7th District - Van Buren County
  // -------------------------------------------------------------------------
  "7th": {
    district: "7th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Rachel Keeley", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 7th District Court seat in Van Buren County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 8th District - Kalamazoo County
  // -------------------------------------------------------------------------
  "8th": {
    district: "8th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Kathleen P. Hemingway", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2017. Former Kalamazoo County assistant prosecuting attorney (2007-2017). Hope College graduate.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; prosecutor background.',

              marriage: 'Republican governor appointee; no contrary signals.',

              religiousLiberty: 'Hope College (Christian college) graduate; no negative signals.',

              secondAmendment: 'Prosecutor background; Snyder appointee.',

              limitedGov: 'Prosecutor background suggests judicial restraint; Snyder appointee.',

              fiscal: 'No specific record; Snyder appointee default.'

            } },
          { name: "Namita Sharma", incumbent: false, grade: null, description: 'Challenger to incumbent Hemingway in 8th District Court (Kalamazoo County). No detailed public record found on positions.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 2,
        type: "non-incumbent",
        candidates: [
          { name: "Mark A. Holsomback", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 8th District Court seat in Kalamazoo County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Rachel Vinales", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 8th District Court seat in Kalamazoo County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 10th District - Calhoun County
  // -------------------------------------------------------------------------
  "10th": {
    district: "10th",
    races: [
      {
        term: "6 Year Term",
        seats: 2,
        type: "incumbent",
        candidates: [
          { name: "Paul K. Beardslee", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in 2016. Former city attorney for Marshall. Previously served on Marshall city council and school board.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no contrary signals.',

              marriage: 'Republican governor appointee; school board service suggests community values.',

              religiousLiberty: 'No negative signals; Snyder appointee.',

              secondAmendment: 'No specific record; Snyder appointee default.',

              limitedGov: 'City attorney and local government background; Snyder appointee suggests restraint.',

              fiscal: 'City attorney background suggests respect for municipal governance and property rights.'

            } },
          { name: "Michelle L. Richardson", incumbent: true, grade: 'C', description: '10th District Court judge in Calhoun County. Limited public information on appointment or political background.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Insufficient information to assess judicial philosophy.',

              fiscal: 'No specific record on property rights or regulatory rulings.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 12th District - Jackson County
  // -------------------------------------------------------------------------
  "12th": {
    district: "12th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Allison L. Bates", incumbent: true, grade: 'D', description: 'Appointed by Whitmer (D) in April 2026 to circuit court. Previously served as 12th District Court judge (appointed 2021). Former judicial juvenile referee.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer (D) appointee; no specific record',

              marriage: 'Whitmer (D) appointee; family division background',

              religiousLiberty: 'No specific positions found',

              secondAmendment: 'Whitmer (D) appointee',

              limitedGov: 'Appointed by Democratic governor',

              fiscal: 'Whitmer (D) appointee; no specific positions'

            } },
          { name: "Nicole Hughes", incumbent: false, grade: null, description: 'Challenger in 12th District Court race in Jackson County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "George D. Lyons", incumbent: false, grade: null, description: 'Challenger in 12th District Court race in Jackson County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Jared L. Hopkins", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 12th District Court seat in Jackson County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Stormie Rae McGee", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 12th District Court seat in Jackson County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 14A District - Washtenaw County
  // -------------------------------------------------------------------------
  "14A": {
    district: "14A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Anna Maria Frushour", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in 2019. Former criminal defense attorney and assigned counsel for specialty courts. Wayne State Law graduate.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; no pro-life signals.',

              marriage: 'Whitmer appointee in Washtenaw County (very progressive area).',

              religiousLiberty: 'No public record supporting religious liberty.',

              secondAmendment: 'No public record on Second Amendment; Washtenaw County context.',

              limitedGov: 'Defense attorney background; Whitmer appointee in progressive jurisdiction.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 14B District - Washtenaw County
  // -------------------------------------------------------------------------
  "14B": {
    district: "14B",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Erane C. Washington", incumbent: true, grade: 'D', description: 'Elected in 2020 to 14B District Court (Ypsilanti Township). Former assistant public defender and private practice attorney. MSU and U of M Law graduate.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Washtenaw County context; public defender background suggests progressive leanings.',

              marriage: 'Washtenaw County (heavily progressive); no traditional marriage signals.',

              religiousLiberty: 'No public record supporting religious liberty.',

              secondAmendment: 'No public record on Second Amendment; progressive county context.',

              limitedGov: 'Public defender background in progressive jurisdiction suggests activist tendencies.',

              fiscal: 'No specific record; progressive jurisdiction default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 15th District - Washtenaw County (Ann Arbor)
  // -------------------------------------------------------------------------
  "15th": {
    district: "15th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Tamara Garwood", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in January 2026. Former magistrate of 15th District Court since 2016. Previously in private practice for 17 years. MSU-Detroit College of Law graduate.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee in Ann Arbor (extremely progressive area).',

              marriage: 'Whitmer appointee in Ann Arbor; no traditional marriage signals.',

              religiousLiberty: 'No public record supporting religious liberty.',

              secondAmendment: 'No public record on Second Amendment; Ann Arbor context.',

              limitedGov: 'Whitmer appointee in progressive jurisdiction.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 16th District - Livingston County
  // -------------------------------------------------------------------------
  "16th": {
    district: "16th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Sean Patrick Kavanagh", incumbent: true, grade: 'C', description: 'Elected in 2008; Chief Judge of 16th District Court in Livonia (Wayne County). Former city attorney of Livonia (1995-2008). MSU graduate for both undergrad and J.D.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues; elected, not appointed by governor.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'City attorney background; Livonia is moderate-conservative suburb.',

              fiscal: 'City attorney background suggests understanding of municipal governance and property rights.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 17th District - Redford Township
  // -------------------------------------------------------------------------
  "17th": {
    district: "17th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Krista Haroutunian", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in October 2018. Former private practice attorney and special assistant attorney general. U of M and MSU-Detroit College of Law graduate.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no contrary signals.',

              marriage: 'Republican governor appointee; no contrary signals.',

              religiousLiberty: 'No negative signals; Snyder appointee.',

              secondAmendment: 'No specific record; Snyder appointee default.',

              limitedGov: 'Attorney general office experience; Snyder appointee suggests judicial restraint.',

              fiscal: 'Private practice background; Snyder appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 18th District - City of Westland
  // -------------------------------------------------------------------------
  "18th": {
    district: "18th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Mark A. McConnell", incumbent: true, grade: 'C', description: 'Presiding since 2007, elected in 2008. Former assistant city attorney and prosecutor for Westland. MSU graduate for undergrad and law school.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues; elected, not appointed.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Prosecutor background is positive signal; suburban Wayne County is moderate.',

              fiscal: 'No specific record on property rights.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 19th District - City of Dearborn
  // -------------------------------------------------------------------------
  "19th": {
    district: "19th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Mark W. Somers", incumbent: true, grade: 'C', description: 'Elected in 2002; serving since January 2003. Nearly 20 years of general practice before bench. MSU and Wayne State Law graduate. Four consecutive terms.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues; long-serving elected judge.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Long tenure; treatment court focus suggests rehabilitative philosophy.',

              fiscal: 'General practice background; no specific property rights record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 20th District - Dearborn Heights
  // -------------------------------------------------------------------------
  "20th": {
    district: "20th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Mark J. Plawecki", incumbent: true, grade: 'C', description: 'Elected in 1994; serving sixth term as Chief Judge of 20th District Court (Dearborn Heights). Former prosecutor for Hazel Park. MSU and Cooley Law School graduate.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues; long-serving elected judge.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Former prosecutor; long tenure suggests institutional respect but uncertain philosophy.',

              fiscal: 'No specific record on property rights.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 21st District - Garden City
  // -------------------------------------------------------------------------
  "21st": {
    district: "21st",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Nicholas Opalewski", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 21st District Court seat in Garden City. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 23rd District - Taylor / Brownstown Township
  // -------------------------------------------------------------------------
  "23rd": {
    district: "23rd",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Brittany A. Johnson", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in March 2026. Former Wayne County assistant prosecuting attorney. MSU College of Law, MSW, and GVSU graduate. ACLU extern.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; ACLU connection is strong progressive signal.',

              marriage: 'Whitmer appointee; ACLU extern background.',

              religiousLiberty: 'ACLU connection is adverse signal for religious liberty.',

              secondAmendment: 'ACLU connection; Whitmer appointee.',

              limitedGov: 'ACLU extern and Whitmer appointee suggest progressive judicial philosophy.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 24th District - Allen Park / Melvindale
  // -------------------------------------------------------------------------
  "24th": {
    district: "24th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "John T. Courtright", incumbent: true, grade: 'C', description: 'Incumbent judge of 24th District Court in Allen Park/Melvindale. Limited public information on appointment or political background.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Insufficient information to assess judicial philosophy.',

              fiscal: 'No specific record on property rights.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 25th District - Lincoln Park
  // -------------------------------------------------------------------------
  "25th": {
    district: "25th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "David M. Loeckner", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 25th District Court seat in Lincoln Park. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Krystle-Marie Medina", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 25th District Court seat in Lincoln Park. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 28th District - Southgate
  // -------------------------------------------------------------------------
  "28th": {
    district: "28th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Elisabeth M. Mullins", incumbent: true, grade: 'C', description: 'Incumbent judge of 28th District Court in Southgate. Limited public information on appointment or political background.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Insufficient information to assess judicial philosophy.',

              fiscal: 'No specific record on property rights.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 31st District - Hamtramck
  // -------------------------------------------------------------------------
  "31st": {
    district: "31st",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Mark Michael Koroi", incumbent: true, grade: 'C', description: 'Incumbent judge of 31st District Court in Hamtramck. Limited public information found on background.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Insufficient information to assess judicial philosophy.',

              fiscal: 'No specific record on property rights.'

            } },
          { name: "Alexis Grace Krot", incumbent: false, grade: 'B', description: 'Former 31st District Court judge appointed by Gov. Snyder (R) in 2016. Now challenger. Former magistrate and assistant city attorney. Tulane, UDM MBA, Loyola J.D.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no contrary signals.',

              marriage: 'Republican governor appointee; no contrary signals.',

              religiousLiberty: 'No negative signals; Snyder appointee.',

              secondAmendment: 'No specific record; Snyder appointee default.',

              limitedGov: 'Strict judicial style noted; Snyder appointee suggests restraint.',

              fiscal: 'Strict on code enforcement (blight cases); property maintenance focus.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 32A District - Harper Woods
  // -------------------------------------------------------------------------
  "32A": {
    district: "32A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Rebekah Ruth Coleman", incumbent: true, grade: 'C', description: 'Incumbent judge of 32A District Court in Harper Woods. Limited public information on appointment or political background.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 34th District - Romulus
  // -------------------------------------------------------------------------
  "34th": {
    district: "34th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Lisa Martin", incumbent: true, grade: 'C', description: 'Incumbent judge of 34th District Court in Romulus. Limited public information on appointment or political background.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 35th District - Plymouth / Northville
  // -------------------------------------------------------------------------
  "35th": {
    district: "35th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jim Plakas", incumbent: true, grade: 'C', description: 'Elected in 2008; serving as Chief Judge of 35th District Court (Plymouth/Northville/Canton). Former prosecutor, criminal defense attorney, and civil litigator. CMU and U of Detroit Law graduate.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'B', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on life issues.',

              marriage: 'No public record on marriage issues.',

              religiousLiberty: 'No public record on religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Balanced prosecutor and defense background; four terms as chief judge in suburban community.',

              fiscal: 'No specific record; Plymouth/Northville area is moderate-conservative.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 36th District - City of Detroit
  // -------------------------------------------------------------------------
  "36th": {
    district: "36th",
    races: [
      {
        term: "6 Year Term",
        seats: 6,
        type: "incumbent",
        candidates: [
          { name: "Demetria Brue", incumbent: true, grade: 'D', description: 'Incumbent judge of 36th District Court in Detroit. Detroit is overwhelmingly progressive jurisdiction.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Detroit jurisdiction; no pro-life signals.',

              marriage: 'Progressive jurisdiction; no traditional marriage signals.',

              religiousLiberty: 'No record supporting religious liberty.',

              secondAmendment: 'Detroit context; likely unfavorable.',

              limitedGov: 'Progressive jurisdiction.',

              fiscal: 'No specific record.'

            } },
          { name: "E. Lynise Bryant", incumbent: true, grade: 'D', description: 'Incumbent judge of 36th District Court in Detroit.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Detroit jurisdiction; no pro-life signals.',

              marriage: 'Progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Detroit context.',

              limitedGov: 'Progressive jurisdiction.',

              fiscal: 'No specific record.'

            } },
          { name: "Adrienne Hinnant-Johnson", incumbent: true, grade: 'D', description: 'Incumbent judge of 36th District Court in Detroit.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Detroit jurisdiction; no pro-life signals.',

              marriage: 'Progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Detroit context.',

              limitedGov: 'Progressive jurisdiction.',

              fiscal: 'No specific record.'

            } },
          { name: "Shannon A. Holmes", incumbent: true, grade: 'D', description: 'Incumbent judge of 36th District Court in Detroit.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Detroit jurisdiction.',

              marriage: 'Progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Detroit context.',

              limitedGov: 'Progressive jurisdiction.',

              fiscal: 'No specific record.'

            } },
          { name: "Kenneth J. King", incumbent: true, grade: 'D', description: 'Incumbent judge of 36th District Court in Detroit.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Detroit jurisdiction.',

              marriage: 'Progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Detroit context.',

              limitedGov: 'Progressive jurisdiction.',

              fiscal: 'No specific record.'

            } },
          { name: "Millicent D. Sherman", incumbent: true, grade: 'D', description: 'Incumbent judge of 36th District Court in Detroit.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Detroit jurisdiction.',

              marriage: 'Progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Detroit context.',

              limitedGov: 'Progressive jurisdiction.',

              fiscal: 'No specific record.'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 3,
        type: "non-incumbent",
        candidates: [
          { name: "William Burton Jr.", incumbent: false, grade: 'D', description: 'Non-incumbent candidate for open 36th District Court seat in Detroit.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Detroit jurisdiction.',

              marriage: 'Progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Detroit context.',

              limitedGov: 'Progressive jurisdiction.',

              fiscal: 'No specific record.'

            } },
          { name: "Delphia J. Burton", incumbent: false, grade: 'D', description: 'Non-incumbent candidate for open 36th District Court seat in Detroit.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Detroit jurisdiction.',

              marriage: 'Progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Detroit context.',

              limitedGov: 'Progressive jurisdiction.',

              fiscal: 'No specific record.'

            } },
          { name: "Kahlilia Yvette Davis", incumbent: false, grade: 'D', description: 'Non-incumbent candidate for open 36th District Court seat in Detroit.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Detroit jurisdiction.',

              marriage: 'Progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Detroit context.',

              limitedGov: 'Progressive jurisdiction.',

              fiscal: 'No specific record.'

            } },
          { name: "Jo A. Irby", incumbent: false, grade: 'D', description: 'Non-incumbent candidate for open 36th District Court seat in Detroit.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Detroit jurisdiction.',

              marriage: 'Progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Detroit context.',

              limitedGov: 'Progressive jurisdiction.',

              fiscal: 'No specific record.'

            } }
        ]
      },
      {
        term: "Partial Term ending 01/01/2031",
        seats: 3,
        type: "incumbent",
        candidates: [
          { name: "Ponce D. Clay", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in 2025. Former 20-year U.S. naval officer and managing attorney at Clay Law in Detroit. Wayne County Veterans Court mentor.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; Detroit jurisdiction.',

              marriage: 'Whitmer appointee; progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Whitmer appointee; Detroit context.',

              limitedGov: 'Whitmer appointee.',

              fiscal: 'No specific record.'

            } },
          { name: "Herman Griffin IV", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in 2025. Deputy director at Regional Managed Assigned Counsel Office. Former mental health specialty court defense attorney at 36th District Court.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; defense attorney background.',

              marriage: 'Whitmer appointee; progressive jurisdiction.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Whitmer appointee; Detroit context.',

              limitedGov: 'Defense attorney background; Whitmer appointee.',

              fiscal: 'No specific record.'

            } },
          { name: "Chastity A. Youngblood", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in 2025. Assistant prosecuting attorney at Wayne County Prosecutor\'s Office for 15+ years.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; Detroit jurisdiction.',

              marriage: 'Whitmer appointee; progressive jurisdiction.',

              religiousLiberty: 'Prosecutor background is slightly favorable signal, but still Whitmer appointee.',

              secondAmendment: 'Whitmer appointee; Detroit context.',

              limitedGov: 'Prosecutor background is positive, but Whitmer appointee.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 37th District - Warren / Centerline
  // -------------------------------------------------------------------------
  "37th": {
    district: "37th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Michael C. Chupa", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in December 2013. Former criminal defense attorney and city prosecutor for Warren. Wayne State and Detroit College of Law graduate.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no contrary signals.',

              marriage: 'Republican governor appointee; no contrary signals.',

              religiousLiberty: 'No negative signals; Snyder appointee.',

              secondAmendment: 'Prosecutor background; Snyder appointee.',

              limitedGov: 'Combined prosecutor and defense background; Snyder appointee suggests judicial restraint.',

              fiscal: 'No specific record; Snyder appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 38th District - Eastpointe / Roseville
  // -------------------------------------------------------------------------
  "38th": {
    district: "38th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Kathleen G. Galen", incumbent: true, grade: 'C', description: 'Elected in 2020 to 38th District Court (Eastpointe). Former private practice attorney specializing in family and criminal law. Former assistant city attorney for Warren.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; elected, not appointed.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'General practice background; no strong signals.',

              fiscal: 'No specific record.'

            } },
          { name: "Richard W. Goodman", incumbent: false, grade: null, description: 'Challenger in 38th District Court race. No detailed public record found on positions.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 39th District - Fraser / Roseville
  // -------------------------------------------------------------------------
  "39th": {
    district: "39th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Derek G. Boedeker", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 39th District Court seat (Fraser/Roseville). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Dana C. Freers", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 39th District Court seat (Fraser/Roseville). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 40th District - St. Clair Shores
  // -------------------------------------------------------------------------
  "40th": {
    district: "40th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Joseph Craigen Oster", incumbent: true, grade: 'C', description: 'Incumbent judge of 40th District Court in St. Clair Shores. Limited public information on appointment or political background.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 41A District - Sterling Heights / Shelby Township
  // -------------------------------------------------------------------------
  "41A": {
    district: "41A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Annemarie Marino Lepore", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in December 2018. Former private practice attorney. Oakland University and UDM Law graduate. Active in Families Against Narcotics.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no contrary signals.',

              marriage: 'Republican governor appointee; Italian American Bar Association member.',

              religiousLiberty: 'No negative signals; Snyder appointee.',

              secondAmendment: 'No specific record; Snyder appointee default.',

              limitedGov: 'Snyder appointee; community service suggests responsible governance.',

              fiscal: 'No specific record; Snyder appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 41B District - Clinton Township / Mt. Clemens
  // -------------------------------------------------------------------------
  "41B": {
    district: "41B",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jacob Michael Femminineo Jr.", incumbent: true, grade: 'C', description: 'Incumbent judge of 41B District Court in Clinton Township/Mt. Clemens. Limited public information on appointment.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 42nd District - 1st Division - Romeo / Washington Township
  // -------------------------------------------------------------------------
  "42-1": {
    district: "42nd - 1st Division",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jennifer Andary", incumbent: true, grade: 'C', description: 'Incumbent judge of 42nd District Court - 1st Division (Romeo/Washington Township). Limited public information.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 43rd District - Hazel Park / Madison Heights / Ferndale
  // -------------------------------------------------------------------------
  "43rd": {
    district: "43rd",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Brian Christian Hartwell", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in 2020. Former private practice attorney and Mayor of Madison Heights. WMU and UDM Law graduate.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; no pro-life signals.',

              marriage: 'Whitmer appointee; no traditional marriage signals.',

              religiousLiberty: 'No public record supporting religious liberty.',

              secondAmendment: 'No public record on Second Amendment.',

              limitedGov: 'Whitmer appointee; general practice background.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 45th District - Oak Park / Huntington Woods
  // -------------------------------------------------------------------------
  "45th": {
    district: "45th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jaimie Powell Horowitz", incumbent: true, grade: 'F', description: 'Elected in 2020. Former Wayne County assistant prosecutor (Homicide Unit). Special prosecutor for Fair Michigan Justice Project prosecuting LGBTQ hate crimes. UDM Law graduate.', positions: { proLife: 'D', marriage: 'F', religiousLiberty: 'F', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'No pro-life signals; progressive endorsements.',

              marriage: 'Active LGBTQ advocacy through Fair Michigan Justice Project; refused GOP calls to resign after posting progressive content.',

              religiousLiberty: 'LGBTQ hate crime prosecution may conflict with religious liberty claims.',

              secondAmendment: 'No public record; progressive endorsement pattern.',

              limitedGov: 'Progressive judicial activism signals.',

              fiscal: 'No specific record; progressive political orientation.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 46th District - Southfield
  // -------------------------------------------------------------------------
  "46th": {
    district: "46th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Shelia Johnson", incumbent: true, grade: 'D', description: 'Elected in 2002; first African American judge in 46th District Court (Southfield). Dartmouth and U of M Law graduate. Michigan Democratic Party award recipient.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Michigan Democratic Party award recipient; progressive signals.',

              marriage: 'Democratic Party recognition suggests progressive position.',

              religiousLiberty: 'No record supporting religious liberty.',

              secondAmendment: 'No record; progressive political affiliation.',

              limitedGov: 'Democratic Party alignment suggests progressive judicial philosophy.',

              fiscal: 'No specific record; progressive affiliation.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 47th District - Farmington / Farmington Hills
  // -------------------------------------------------------------------------
  "47th": {
    district: "47th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Anthony Bordoley", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 47th District Court seat (Farmington/Farmington Hills). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Shelley Drain", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 47th District Court seat (Farmington/Farmington Hills). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Moneka Sanford", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 47th District Court seat (Farmington/Farmington Hills). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Michael Sawicky", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 47th District Court seat (Farmington/Farmington Hills). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 48th District - Bloomfield Hills / Birmingham
  // -------------------------------------------------------------------------
  "48th": {
    district: "48th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Kimberly Small", incumbent: true, grade: 'C', description: 'Serving since 1996; longest-tenured judge on 48th District Court (Bloomfield Hills/Birmingham). U of M and MSU College of Law graduate. Known for strict sentencing.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'B', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; long tenure in affluent suburban court.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Known for strict sentencing; suggests law-and-order judicial philosophy.',

              fiscal: 'Affluent suburban district; no specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 50th District - Pontiac
  // -------------------------------------------------------------------------
  "50th": {
    district: "50th",
    races: [
      {
        term: "6 Year Term",
        seats: 2,
        type: "incumbent",
        candidates: [
          { name: "Jeremy Darnell Bowie", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in December 2022. Former Wayne County prosecutor (domestic violence cases) then private practice. WMU-Cooley Law graduate.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Whitmer appointee.',

              limitedGov: 'Whitmer appointee; prosecutor background is somewhat positive.',

              fiscal: 'No specific record.'

            } },
          { name: "Cynthia T. Walker", incumbent: true, grade: 'D', description: 'Appointed by Gov. Granholm (D) in September 2003 to 50th District Court (Pontiac). Former city attorney for Pontiac, court administrator, and legal services attorney.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Granholm (D) appointee.',

              marriage: 'Democrat governor appointee.',

              religiousLiberty: 'No record; legal services background.',

              secondAmendment: 'No record; Granholm appointee.',

              limitedGov: 'Legal services and public defender background; Granholm appointee.',

              fiscal: 'No specific record; Granholm appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 51st District - Waterford Township
  // -------------------------------------------------------------------------
  "51st": {
    district: "51st",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Carmen J. DeFranco", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 51st District Court seat (Waterford Township). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Pamela J. Monville", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 51st District Court seat (Waterford Township). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 52nd District - 1st Division - Novi
  // -------------------------------------------------------------------------
  "52-1": {
    district: "52nd - 1st Division",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Travis M. Reeds", incumbent: true, grade: 'C', description: 'Elected in 2014; Chief Judge of all 52nd District Court divisions. Former private practice attorney (Reeds & Reeds). Wayne State Law and CMU graduate. Super Lawyer and Top 100 Trial Lawyer.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; elected, not appointed.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Private practice background; no strong signals either direction.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 52nd District - 2nd Division - Clarkston
  // -------------------------------------------------------------------------
  "52-2": {
    district: "52nd - 2nd Division",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Joseph G. Fabrizio", incumbent: true, grade: 'C', description: 'Elected in 2008; Chief Judge for 52nd District Courts in 2018. Former managing partner at Fabrizio & Brook. Brother Rice HS, MSU, and UDM Law graduate. Focus on rehabilitation.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; Catholic school background (Brother Rice) is mildly favorable.',

              marriage: 'No public record; Catholic education background.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Rehabilitative focus; balanced approach.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 52nd District - 3rd Division - Rochester
  // -------------------------------------------------------------------------
  "52-3": {
    district: "52nd - 3rd Division",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Laura E. Polizzi", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in May 2024. Former partner at Polizzi & Medley Law. Oakland University and WMU-Cooley Law graduate. Joan Young Judicial Excellence Award.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Whitmer appointee.',

              limitedGov: 'Whitmer appointee.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 52nd District - 4th Division - Troy
  // -------------------------------------------------------------------------
  "52-4": {
    district: "52nd - 4th Division",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Maureen M. McGinnis", incumbent: true, grade: 'C', description: 'Elected in 2014. Former family and criminal law attorney. Troy City Council member and Mayor Pro Tem. Troy HS, CU-Boulder, and MSU-Detroit College of Law graduate.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; elected in suburban Troy.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'City council/mayor pro tem experience; practical governance background.',

              fiscal: 'No specific record; suburban municipal governance background.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 53rd District - Howell
  // -------------------------------------------------------------------------
  "53rd": {
    district: "53rd",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Daniel Bain", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in September 2019. General practice attorney (Bain & Bain P.C.). MSU and Cooley Law graduate. Hartland HS graduate. Handles civil and criminal cases.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; Livingston County context is conservative but appointment is key signal.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Whitmer appointee; Livingston County is pro-2A but appointment signal overrides.',

              limitedGov: 'Whitmer appointee.',

              fiscal: 'General practice background; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 54A District - Lansing
  // -------------------------------------------------------------------------
  "54A": {
    district: "54A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Stacia Buchanan", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in August 2017. Chief Judge of 54A District Court in Lansing. Replaced retiring Judge Patrick Cherry.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee; no contrary signals.',

              marriage: 'Republican governor appointee.',

              religiousLiberty: 'No negative signals; Snyder appointee.',

              secondAmendment: 'No specific record; Snyder appointee default.',

              limitedGov: 'Snyder appointee suggests judicial restraint.',

              fiscal: 'No specific record; Snyder appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 55th District - Mason / Ingham County
  // -------------------------------------------------------------------------
  "55th": {
    district: "55th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Richard L. Hillman", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in April 2020. Former shareholder at Foster Swift (32 years private practice). Lansing Catholic Central HS, MSU, and Marquette Law graduate.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'D', limitedGov: 'D', fiscal: 'C' }, gradeJustifications: {

              proLife: 'Whitmer appointee but Catholic education background (Lansing Catholic Central, Marquette Law).',

              marriage: 'Catholic education; but Whitmer appointee.',

              religiousLiberty: 'Catholic education is mildly favorable; Whitmer appointee.',

              secondAmendment: 'No record; Whitmer appointee.',

              limitedGov: 'Whitmer appointee; municipal law background.',

              fiscal: 'Municipal representation suggests property rights awareness; private practice background.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 56A District - Eaton County
  // -------------------------------------------------------------------------
  "56A": {
    district: "56A",
    races: [
      {
        term: "Partial Term ending 01/01/2029",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Reid S. Felsing", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in December 2024. Former magistrate at 56A District Court, MAACS roster attorney representing indigent clients, and adjunct professor. Saginaw native.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; indigent defense background.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; Whitmer appointee.',

              limitedGov: 'Indigent defense and public interest background; Whitmer appointee.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Adrianne K. Van Langevelde", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in July 2024. Former Michigan Parole Board member and former assistant prosecuting attorney in Mecosta and Eaton counties.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; Whitmer appointee.',

              limitedGov: 'Whitmer appointee; Parole Board service and prosecutor background.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 57th District - Allegan County
  // -------------------------------------------------------------------------
  "57th": {
    district: "57th",
    races: [
      {
        term: "Partial Term ending 01/01/2031",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Christopher E. Burnett", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in July 2025. Former co-partner at Burnett and Kastran law firm in Allegan (20 years). MSU and MSU College of Law graduate.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; Whitmer appointee.',

              limitedGov: 'Whitmer appointee; private practice background in conservative county.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } },
          { name: "Tom Siver", incumbent: false, grade: null, description: 'Challenger to incumbent Burnett in 57th District Court (Allegan County). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Timothy Slais", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 57th District Court seat in Allegan County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Heidi L. Wolf", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 57th District Court seat in Allegan County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 58th District - Ottawa County
  // -------------------------------------------------------------------------
  "58th": {
    district: "58th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Juanita F. Bocanegra", incumbent: true, grade: 'C', description: 'Elected in 2020 (54% of vote). First Latina judge in Ottawa County. Former assistant prosecuting attorney in Ottawa County for nearly 10 years.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'Elected, not appointed; prosecutor background in conservative Ottawa County.',

              marriage: 'No public record; Ottawa County is conservative.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; prosecutor background.',

              limitedGov: 'Prosecutor background in conservative county; moderate signals.',

              fiscal: 'No specific record.'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Paul Ledford", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 58th District Court seat in Ottawa County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Anna White", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 58th District Court seat in Ottawa County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 60th District - Muskegon County
  // -------------------------------------------------------------------------
  "60th": {
    district: "60th",
    races: [
      {
        term: "6 Year Term",
        seats: 2,
        type: "incumbent",
        candidates: [
          { name: "Maria Ladas Hoopes", incumbent: true, grade: 'C', description: 'Incumbent judge of 60th District Court in Muskegon County. Limited public information on appointment.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } },
          { name: "Paula Baker Mathes", incumbent: true, grade: 'C', description: 'Incumbent judge of 60th District Court in Muskegon County. Limited public information on appointment.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 61st District - Kent County (Grand Rapids)
  // -------------------------------------------------------------------------
  "61st": {
    district: "61st",
    races: [
      {
        term: "6 Year Term",
        seats: 2,
        type: "incumbent",
        candidates: [
          { name: "Kellen A. Dotson", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D). Former public defender (Kent County and Hennepin County, MN). EMU and Cooley Law graduate. Second Black man to hold seat.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; public defender background.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Public defender background; Whitmer appointee.',

              limitedGov: 'Public defender background suggests defense-oriented judicial philosophy.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } },
          { name: "Angela T. Ross", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in March 2022. Former director of enforcement and criminal prosecution for City of Grand Rapids. DePaul Law and U of M graduate. Chief Judge.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Whitmer appointee.',

              limitedGov: 'Whitmer appointee; enforcement background is somewhat favorable.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 62A District - Kent County
  // -------------------------------------------------------------------------
  "62A": {
    district: "62A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Pablo Cortes", incumbent: true, grade: 'C', description: 'Appointed by Gov. Granholm (D) in October 2005. Former Kent County assistant prosecuting attorney (1995-2005). U of M and Wayne State Law graduate.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'Granholm (D) appointee but prosecutor background.',

              marriage: 'Granholm appointee; mixed signals.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; prosecutor background is somewhat favorable.',

              limitedGov: 'Prosecutor background suggests law-and-order approach despite Granholm appointment.',

              fiscal: 'No specific record; mixed signals from Granholm appointment and prosecutor background.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 62B District - Kent County
  // -------------------------------------------------------------------------
  "62B": {
    district: "62B",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Amanda H. Sterkenburg", incumbent: true, grade: 'C', description: 'Elected in 2020 to 62B District Court (Kentwood). Former solo attorney in criminal/civil defense and mediation. Franklin College and WMU-Cooley Law graduate.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; elected, not appointed.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Defense and mediation background; rehabilitative focus.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 63rd District - Kent County (Grand Rapids)
  // -------------------------------------------------------------------------
  "63rd": {
    district: "63rd",
    races: [
      {
        term: "Partial Term ending 01/01/2029",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Kirsten L. Holz", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in August 2024. Former assistant public defender and Kent County Indigent Defense Program attorney. Cornell and American University Law graduate.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; public defender background.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Whitmer appointee; defense-oriented background.',

              limitedGov: 'Public defender and indigent defense background; Whitmer appointee.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      },
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jeffrey J. O'Hara", incumbent: true, grade: 'C', description: 'Elected in 2014; Chief Judge of 63rd District Court (Kent County). Former private practice trial attorney. MSU and Cooley Law graduate. Started Recovery Court in 2019.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; elected, not appointed.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Private practice trial attorney; recovery court focus.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 64A District - Ionia County
  // -------------------------------------------------------------------------
  "64A": {
    district: "64A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Raymond Peter Voet", incumbent: true, grade: 'B', description: 'Serving since 1999 in 64A District Court (Ionia County). Aquinas College and U of Detroit Mercy Law graduate. Chief Judge for Ionia/Montcalm courts since 2014.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Catholic education background (Aquinas College, U of Detroit Mercy); rural conservative county.',

              marriage: 'Catholic education; conservative Ionia County.',

              religiousLiberty: 'Catholic education background favorable.',

              secondAmendment: 'Rural conservative county.',

              limitedGov: 'Long tenure in conservative jurisdiction; attempted Court of Appeals run.',

              fiscal: 'No adverse signals; conservative county context.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 64B District - Montcalm County
  // -------------------------------------------------------------------------
  "64B": {
    district: "64B",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Adam James Eggleston", incumbent: true, grade: 'C', description: 'Elected in 2020 to 64B District Court (Montcalm County). Former attorney-magistrate and assistant city attorney for Greenville. Montcalm Community College alumnus.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; rural conservative county but limited info.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; rural county.',

              limitedGov: 'Magistrate and city attorney background; elected in rural county.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 65A District - Clinton County
  // -------------------------------------------------------------------------
  "65A": {
    district: "65A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Andrew M. Stevens", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in April 2025. Former assistant prosecutor in Ingham County. MSU Law graduate. WLAM \'Outstanding\' rating.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; Whitmer appointee.',

              limitedGov: 'Whitmer appointee; prosecutor background is somewhat positive.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 65B District - Gratiot County
  // -------------------------------------------------------------------------
  "65B": {
    district: "65B",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Laura M. Bever", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 65B District Court seat in Gratiot County. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 67th District - 1st Division - Genesee County (Flint)
  // -------------------------------------------------------------------------
  "67-1": {
    district: "67th - 1st Division",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "David J. Goggins", incumbent: true, grade: 'C', description: 'Incumbent judge of 67th District Court - 1st Division (Flint, Genesee County). Limited public information.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Flint area is progressive; insufficient individual info.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 67th District - 2nd Division - Genesee County
  // -------------------------------------------------------------------------
  "67-2": {
    district: "67th - 2nd Division",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jennifer Manley", incumbent: true, grade: 'C', description: 'Incumbent judge of 67th District Court - 2nd Division (Genesee County). Limited public information.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 67th District - 3rd Division - Genesee County
  // -------------------------------------------------------------------------
  "67-3": {
    district: "67th - 3rd Division",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Vikki Bayeh Haley", incumbent: true, grade: 'C', description: 'Incumbent judge of 67th District Court - 3rd Division (Genesee County). Limited public information.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 67th District - 4th Division - Genesee County
  // -------------------------------------------------------------------------
  "67-4": {
    district: "67th - 4th Division",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "K.C. Baran", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 67th-4th Division District Court seat (Genesee County). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Cheryl A. Lopez", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 67th-4th Division seat. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Lina Stamos", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 67th-4th Division seat. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Brooke Tucker", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 67th-4th Division seat. No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 67th District - 5th Division - Genesee County
  // -------------------------------------------------------------------------
  "67-5": {
    district: "67th - 5th Division",
    races: [
      {
        term: "6 Year Term",
        seats: 2,
        type: "incumbent",
        candidates: [
          { name: "David Guinn", incumbent: true, grade: 'C', description: 'Incumbent judge of 67th District Court - 5th Division (Genesee County). Limited public information.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } },
          { name: "Tabitha M. Marsh", incumbent: true, grade: 'C', description: 'Incumbent judge of 67th District Court - 5th Division (Genesee County). Limited public information.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 70th District - 2nd Division - Saginaw County
  // -------------------------------------------------------------------------
  "70-2": {
    district: "70th - 2nd Division",
    races: [
      {
        term: "6 Year Term",
        seats: 2,
        type: "incumbent",
        candidates: [
          { name: "Elian E.H. Fichtner", incumbent: true, grade: 'C', description: 'Incumbent judge of 70th District Court - 2nd Division (Saginaw County). Limited public information.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } },
          { name: "A.T. Frank", incumbent: true, grade: 'C', description: 'Incumbent judge of 70th District Court - 2nd Division (Saginaw County). Limited public information.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Insufficient information.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 71A District - Lapeer County
  // -------------------------------------------------------------------------
  "71A": {
    district: "71A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "David N. Richardson", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 71A District Court seat (Lapeer County). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Maureen Flanigan Salayko", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 71A District Court seat (Lapeer County). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 71B District - Tuscola County
  // -------------------------------------------------------------------------
  "71B": {
    district: "71B",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Jason E. Bitzer", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in 2019. Former partner at Biddinger, Bitzer & Estelle. EMU and Cooley Law graduate. Caro HS graduate. Presides over Mental Health Court.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; Whitmer appointee.',

              limitedGov: 'Whitmer appointee; defense/general practice background.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } },
          { name: "Craig S. Datz", incumbent: false, grade: null, description: 'Challenger to incumbent Bitzer in 71B District Court (Tuscola County). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 72nd District - St. Clair County
  // -------------------------------------------------------------------------
  "72nd": {
    district: "72nd",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Mona S. Armstrong", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in March 2020. Former senior assistant prosecuting attorney in St. Clair County (25 years). Handled homicides and high-profile cases. MSU and Wayne State Law graduate.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'C', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee but 25-year prosecutor is positive signal.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; Whitmer appointee.',

              limitedGov: '25-year prosecutor background is positive; Whitmer appointee is negative.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 74th District - Bay County
  // -------------------------------------------------------------------------
  "74th": {
    district: "74th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Brian H. Jean", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 74th District Court seat (Bay County). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "James A. Perry", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 74th District Court seat (Bay County). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 75th District - Midland County
  // -------------------------------------------------------------------------
  "75th": {
    district: "75th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Michael D. Carpenter", incumbent: true, grade: 'A', description: 'Appointed by Gov. Snyder (R) in December 2013. Former Midland County prosecutor since 2005. WMU and Cooley Law graduate. Stopped performing marriages after same-sex marriage ruling.', positions: { proLife: 'B', marriage: 'A', religiousLiberty: 'A', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder appointee; prosecutor background; conservative signals.',

              marriage: 'Stopped performing marriages after Obergefell ruling -- strong traditional marriage signal.',

              religiousLiberty: 'Marriage stance indicates strong religious liberty convictions.',

              secondAmendment: 'Prosecutor in rural Michigan; Snyder appointee.',

              limitedGov: 'Prosecutor background and Snyder appointee suggest judicial restraint.',

              fiscal: 'No specific record; Snyder appointee in conservative county.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 76th District - Isabella County
  // -------------------------------------------------------------------------
  "76th": {
    district: "76th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Eric R. Janes", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in November 2013. Former private practice attorney (Janes, Backus and Janes since 1991). MSU and Cooley Law graduate.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee.',

              marriage: 'Republican governor appointee.',

              religiousLiberty: 'No negative signals.',

              secondAmendment: 'No record; Snyder appointee.',

              limitedGov: 'Private practice background; Snyder appointee.',

              fiscal: 'No specific record; Snyder appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 77th District - Mecosta / Osceola Counties
  // -------------------------------------------------------------------------
  "77th": {
    district: "77th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Peter Michael Jaklevic", incumbent: true, grade: 'B', description: 'Elected in 2014 to 77th District Court (Mecosta/Osceola). Former chief prosecuting attorney for Mecosta County (1998-2014). MSU and MSU College of Law graduate.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Long-serving prosecutor in conservative rural counties.',

              marriage: 'Conservative rural Michigan; no contrary signals.',

              religiousLiberty: 'No negative signals.',

              secondAmendment: 'Rural Michigan; prosecutor background.',

              limitedGov: '16-year prosecutor career suggests strong law-and-order judicial philosophy.',

              fiscal: 'Rural conservative jurisdiction; no adverse signals.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 78th District - Newaygo County
  // -------------------------------------------------------------------------
  "78th": {
    district: "78th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Ellsworth J. Stay Jr.", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in February 2024. Elected Newaygo County prosecuting attorney since 2017. U of Virginia and Indiana University Maurer Law graduate. Board of PAAM.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'C', limitedGov: 'C', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee but elected prosecutor -- mixed signals.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Elected prosecutor in rural county is positive; Whitmer appointment is negative.',

              limitedGov: 'Prosecutor background is positive but Whitmer appointment is concerning.',

              fiscal: 'No specific record; Whitmer appointee.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 79th District - Mason County
  // -------------------------------------------------------------------------
  "79th": {
    district: "79th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "John D. Middlebrook", incumbent: true, grade: 'C', description: 'Elected in 2020 to 79th District Court (Mason/Lake Counties). Former assistant prosecuting attorney. Albion College and Wake Forest Law graduate. 150+ jury trials including 16 murders.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'B', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; elected in rural Michigan.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Rural Michigan; no record.',

              limitedGov: 'Extensive prosecutor experience; 150+ jury trials suggests strong law-and-order approach.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 80th District - Clare / Gladwin Counties
  // -------------------------------------------------------------------------
  "80th": {
    district: "80th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Joshua M. Farrell", incumbent: true, grade: 'C', description: 'Elected in 2008 to 80th District Court (Clare/Gladwin Counties). Chief Judge. Long-serving in rural Michigan.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; elected in rural conservative counties.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Rural Michigan.',

              limitedGov: 'Long tenure; elected in conservative area.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 82nd District - Ogemaw County
  // -------------------------------------------------------------------------
  "82nd": {
    district: "82nd",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Mary A. Beebe", incumbent: true, grade: 'C', description: 'Judge of 82nd District Court. Former Roscommon County prosecutor before being elected. Rural northern Michigan.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'B', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; prosecutor background in rural county.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Rural Michigan.',

              limitedGov: 'Prosecutor background suggests law-and-order judicial philosophy.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 84th District - Wexford / Missaukee Counties
  // -------------------------------------------------------------------------
  "84th": {
    district: "84th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Corey J. Wiggins", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in January 2025. Former Wexford County prosecuting attorney (elected 2020, re-elected 2024). Former chief assistant prosecutor. Ferris State and Cooley Law graduate.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'C', limitedGov: 'C', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee but elected prosecutor is positive signal.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Elected prosecutor in rural county; Whitmer appointee.',

              limitedGov: 'Elected prosecutor suggests law-and-order approach; Whitmer appointment concerning.',

              fiscal: 'No specific record; Whitmer appointee.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 89th District - Cheboygan / Presque Isle Counties
  // -------------------------------------------------------------------------
  "89th": {
    district: "89th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Michael J. Ekdahl", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in February 2024. Solo practitioner in criminal defense, civil litigation, divorce, estate planning. U of M and Wayne State Law graduate. Cheboygan HS graduate.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; Whitmer appointee.',

              limitedGov: 'Defense attorney background; Whitmer appointee.',

              fiscal: 'No specific record; Whitmer appointee.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 90th District - Emmet County
  // -------------------------------------------------------------------------
  "90th": {
    district: "90th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Angela L. Lasher", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D) in January 2020. Former Emmet County assistant prosecuting attorney (15 years). Specializes in juvenile and child abuse/neglect cases. Cooley Law and Purdue graduate.', positions: { proLife: 'C', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'C', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee but 15-year prosecutor with child abuse focus is positive.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; Whitmer appointee.',

              limitedGov: 'Prosecutor background is positive; Whitmer appointment is negative.',

              fiscal: 'No specific record; Whitmer appointee.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 92nd District - Luce / Mackinac / Schoolcraft Counties
  // -------------------------------------------------------------------------
  "92nd": {
    district: "92nd",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Beth Ann Gibson", incumbent: true, grade: 'C', description: 'Elected in 2004 to 92nd District Court (Luce/Mackinac Counties). Former criminal defense attorney. U of M and Cooley Law graduate. Chief Judge for multiple courts in eastern UP.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record; elected in rural UP.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'Rural UP context.',

              limitedGov: 'Defense attorney background; long tenure in rural UP.',

              fiscal: 'No specific record.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 94th District - Marquette County
  // -------------------------------------------------------------------------
  "94th": {
    district: "94th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Andrew Hayse", incumbent: false, grade: 'B', description: 'Candidate for open 94th District Court seat (Delta County). Current domestic relations referee and district court magistrate. Former assistant prosecuting attorney for Delta County. Wayne State Law graduate.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Prosecutor background; referee/magistrate experience.',

              marriage: 'Family court experience through domestic relations work.',

              religiousLiberty: 'No negative signals.',

              secondAmendment: 'Prosecutor background in rural UP county.',

              limitedGov: 'Prosecutor and magistrate experience suggests judicial restraint.',

              fiscal: 'No specific record; conservative rural UP.'

            } },
          { name: "Trent Stupak", incumbent: false, grade: 'C', description: 'Candidate for open 94th District Court seat (Delta County). 24-year attorney in Delta County courts. MSU and MSU-Detroit College of Law graduate. Broad trial experience.', positions: { proLife: 'C', marriage: 'C', religiousLiberty: 'C', secondAmendment: 'C', limitedGov: 'C', fiscal: 'C' }, gradeJustifications: {

              proLife: 'No public record on positions; defense-oriented practice.',

              marriage: 'No public record.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record.',

              limitedGov: 'Mixed practice including criminal defense and civil litigation.',

              fiscal: 'Real estate and property rights experience noted.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 95A District - Menominee County
  // -------------------------------------------------------------------------
  "95A": {
    district: "95A",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Jeffrey T. Rogg", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 95A District Court seat (Menominee County). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Alexander Sieminski", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 95A District Court seat (Menominee County). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 95B District - Dickinson County
  // -------------------------------------------------------------------------
  "95B": {
    district: "95B",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Julie Ann LaCost", incumbent: true, grade: 'B', description: 'Appointed by Gov. Snyder (R) in February 2018. First female judge in 95B District Court (Dickinson County). Former deputy public defender in San Diego (1988-1995), then 23 years in UP private practice. U of M and Cooley Law graduate.', positions: { proLife: 'B', marriage: 'B', religiousLiberty: 'B', secondAmendment: 'B', limitedGov: 'B', fiscal: 'B' }, gradeJustifications: {

              proLife: 'Snyder (R) appointee.',

              marriage: 'Republican governor appointee.',

              religiousLiberty: 'No negative signals.',

              secondAmendment: 'Rural UP; Snyder appointee.',

              limitedGov: 'Snyder appointee; long legal career.',

              fiscal: 'No specific record; Snyder appointee default.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 96th District - Baraga / Houghton / Keweenaw Counties
  // -------------------------------------------------------------------------
  "96th": {
    district: "96th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "non-incumbent",
        candidates: [
          { name: "Patrick J. Crowley", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 96th District Court seat (Baraga/Houghton/Keweenaw). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Bill Nordeen", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 96th District Court seat (Baraga/Houghton/Keweenaw). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } },
          { name: "Derek G. Swajanen", incumbent: false, grade: null, description: 'Non-incumbent candidate for open 96th District Court seat (Baraga/Houghton/Keweenaw). No detailed public record found.', positions: { proLife: null, marriage: null, religiousLiberty: null, secondAmendment: null, limitedGov: null, fiscal: null }, gradeJustifications: {

              proLife: 'No public information available.',

              marriage: 'No public information available.',

              religiousLiberty: 'No public information available.',

              secondAmendment: 'No public information available.',

              limitedGov: 'No public information available.',

              fiscal: 'No public information available.'

            } }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 97th District - Chippewa / Delta Counties
  // -------------------------------------------------------------------------
  "97th": {
    district: "97th",
    races: [
      {
        term: "6 Year Term",
        seats: 1,
        type: "incumbent",
        candidates: [
          { name: "Nicholas J. Daavettila", incumbent: true, grade: 'D', description: 'Appointed by Gov. Whitmer (D). Former private practice attorney and director/secretary of Tri-County Public Defenders. Michigan Tech and Marquette Law graduate.', positions: { proLife: 'D', marriage: 'D', religiousLiberty: 'D', secondAmendment: 'D', limitedGov: 'D', fiscal: 'D' }, gradeJustifications: {

              proLife: 'Whitmer appointee; public defender background.',

              marriage: 'Whitmer appointee.',

              religiousLiberty: 'No record.',

              secondAmendment: 'No record; Whitmer appointee.',

              limitedGov: 'Public defender background; Whitmer appointee.',

              fiscal: 'No specific record; Whitmer appointee default.'

            } }
        ]
      }
    ]
  }
};


// ============================================================================
// GEOGRAPHIC MAPPING
// ============================================================================

// Maps each county to its circuit court number.
// Derived from the county field in circuitCourt2026 data.
export const COUNTY_TO_CIRCUIT = {
  "Alger": 11,
  "Allegan": 48,
  "Alpena": 26,
  "Antrim": 13,
  "Baraga": 12,
  "Barry": 5,
  "Bay": 18,
  "Benzie": 19,
  "Berrien": 2,
  "Branch": 15,
  "Calhoun": 37,
  "Charlevoix": 33,
  "Clare": 55,
  "Clinton": 29,
  "Crawford": 46,
  "Dickinson": 41,
  "Eaton": 56,
  "Genesee": 7,
  "Gladwin": 55,
  "Gogebic": 32,
  "Grand Traverse": 13,
  "Gratiot": 29,
  "Hillsdale": 1,
  "Houghton": 12,
  "Huron": 52,
  "Ingham": 30,
  "Ionia": 8,
  "Iron": 41,
  "Jackson": 4,
  "Kalamazoo": 9,
  "Kalkaska": 46,
  "Kent": 17,
  "Keweenaw": 12,
  "Lapeer": 40,
  "Leelanau": 13,
  "Lenawee": 39,
  "Livingston": 44,
  "Luce": 11,
  "Macomb": 16,
  "Manistee": 19,
  "Marquette": 25,
  "Mason": 51,
  "Mecosta": 49,
  "Menominee": 41,
  "Midland": 42,
  "Missaukee": 28,
  "Monroe": 38,
  "Montcalm": 8,
  "Montmorency": 26,
  "Muskegon": 14,
  "Oakland": 6,
  "Ontonagon": 32,
  "Osceola": 49,
  "Otsego": 46,
  "Ottawa": 20,
  "Saginaw": 10,
  "Sanilac": 24,
  "Schoolcraft": 11,
  "Shiawassee": 35,
  "St. Clair": 31,
  "Van Buren": 36,
  "Washtenaw": 22,
  "Wayne": 3,
  "Wexford": 28,
};

// Maps each county to its Court of Appeals district.
// 1st District: Wayne County
// 2nd District: Southwest / Southeast Michigan
// 3rd District: Oakland / Macomb / Livingston
// 4th District: All remaining counties (Northern / Central Michigan)
export const COUNTY_TO_APPEALS_DISTRICT = {
  // 1st District
  "Wayne": "1st",

  // 2nd District
  "Berrien": "2nd",
  "Cass": "2nd",
  "St. Joseph": "2nd",
  "Van Buren": "2nd",
  "Kalamazoo": "2nd",
  "Calhoun": "2nd",
  "Branch": "2nd",
  "Hillsdale": "2nd",
  "Lenawee": "2nd",
  "Monroe": "2nd",
  "Washtenaw": "2nd",
  "Jackson": "2nd",

  // 3rd District
  "Livingston": "3rd",
  "Oakland": "3rd",
  "Macomb": "3rd",

  // 4th District - all remaining counties
  "Alcona": "4th",
  "Alger": "4th",
  "Allegan": "4th",
  "Alpena": "4th",
  "Antrim": "4th",
  "Arenac": "4th",
  "Baraga": "4th",
  "Barry": "4th",
  "Bay": "4th",
  "Benzie": "4th",
  "Charlevoix": "4th",
  "Cheboygan": "4th",
  "Chippewa": "4th",
  "Clare": "4th",
  "Clinton": "4th",
  "Crawford": "4th",
  "Delta": "4th",
  "Dickinson": "4th",
  "Eaton": "4th",
  "Emmet": "4th",
  "Genesee": "4th",
  "Gladwin": "4th",
  "Gogebic": "4th",
  "Grand Traverse": "4th",
  "Gratiot": "4th",
  "Houghton": "4th",
  "Huron": "4th",
  "Ingham": "4th",
  "Ionia": "4th",
  "Iosco": "4th",
  "Iron": "4th",
  "Isabella": "4th",
  "Kalkaska": "4th",
  "Kent": "4th",
  "Keweenaw": "4th",
  "Lake": "4th",
  "Lapeer": "4th",
  "Leelanau": "4th",
  "Luce": "4th",
  "Mackinac": "4th",
  "Manistee": "4th",
  "Marquette": "4th",
  "Mason": "4th",
  "Mecosta": "4th",
  "Menominee": "4th",
  "Midland": "4th",
  "Missaukee": "4th",
  "Montcalm": "4th",
  "Montmorency": "4th",
  "Muskegon": "4th",
  "Newaygo": "4th",
  "Oceana": "4th",
  "Ogemaw": "4th",
  "Ontonagon": "4th",
  "Osceola": "4th",
  "Oscoda": "4th",
  "Otsego": "4th",
  "Ottawa": "4th",
  "Presque Isle": "4th",
  "Roscommon": "4th",
  "Saginaw": "4th",
  "Sanilac": "4th",
  "Schoolcraft": "4th",
  "Shiawassee": "4th",
  "St. Clair": "4th",
  "Tuscola": "4th",
  "Wexford": "4th",
};


// ============================================================================
// LOOKUP FUNCTION
// ============================================================================

/**
 * Returns all judicial races (Court of Appeals, Circuit Court, Probate Court)
 * relevant to a given county. District courts are NOT yet included because
 * they require city/township-level geographic mapping.
 *
 * @param {string} countyName - e.g. "Wayne", "Oakland", "St. Clair"
 * @returns {Array} Array of race objects formatted for ballot display
 */
// Helper: generate a voter-facing note explaining what the vote means for this judicial race
function judicialVoteNote(candidates, seats) {
  const count = candidates.length
  const incumbentCount = candidates.filter(c => c.incumbent).length
  const challengerCount = count - incumbentCount

  if (count === 1 && seats === 1) {
    // Single candidate, single seat — retention-style
    return candidates[0].incumbent
      ? 'Uncontested — this incumbent is the only candidate. Vote to retain or write in an alternative.'
      : 'Uncontested — this is the only candidate. Vote to support or write in an alternative.'
  }
  if (count <= seats) {
    // Fewer or equal candidates to seats — all will advance
    return `${count} candidate${count > 1 ? 's' : ''} for ${seats} seat${seats > 1 ? 's' : ''} — all advance to November. Your vote is a show of support.`
  }
  if (seats === 1 && count === 2) {
    // Classic head-to-head
    return 'Two candidates for one seat — both advance to the November general election. Your vote helps gauge support.'
  }
  if (count > seats * 2) {
    // Contested primary — vote actually narrows the field
    return `${count} candidates competing for ${seats} seat${seats > 1 ? 's' : ''} — your vote narrows the field. The top ${seats * 2} advance to November.`
  }
  // More candidates than seats but ≤ 2x seats — all advance
  return `${count} candidates for ${seats} seat${seats > 1 ? 's' : ''}. All advance to November — the final election is in the general.${seats > 1 ? ` You may vote for up to ${seats}.` : ''}`
}

export function getJudicialRacesForCounty(countyName) {
  const races = []

  // Court of Appeals
  const appealsDistrict = COUNTY_TO_APPEALS_DISTRICT[countyName]
  if (appealsDistrict && courtOfAppeals2026[appealsDistrict]) {
    const appeals = courtOfAppeals2026[appealsDistrict]
    appeals.races.forEach((race, i) => {
      races.push({
        id: `appeals-${appealsDistrict}-${i}`,
        office: `Court of Appeals – ${appealsDistrict} District`,
        level: 'Judicial',
        description: `${race.term}. ${race.seats} seat${race.seats > 1 ? 's' : ''}. Coverage: ${appeals.coverage}`,
        note: judicialVoteNote(race.candidates, race.seats),
        candidates: race.candidates.map(c => ({
          name: c.name,
          description: c.description || (c.incumbent ? 'Incumbent judge' : 'Challenger'),
          status: c.incumbent ? 'incumbent' : 'challenger',
          grade: c.grade || null,
          positions: c.positions || null,
          gradeJustifications: c.gradeJustifications || null,
        })),
        type: 'nonpartisan',
        seats: race.seats,
        allowWrite: true,
      })
    })
  }

  // Circuit Court
  const circuit = COUNTY_TO_CIRCUIT[countyName]
  if (circuit) {
    const circuitKey = String(circuit)
    const circuitData = circuitCourt2026[circuitKey]
    if (circuitData) {
      circuitData.races.forEach((race, i) => {
        races.push({
          id: `circuit-${circuit}-${i}`,
          office: `${ordinal(circuit)} Circuit Court – ${countyName} County`,
          level: 'Judicial',
          description: `${race.term}. ${race.seats} seat${race.seats > 1 ? 's' : ''}.${race.type === 'non-incumbent' ? ' Open seat (no incumbent filed).' : ''}`,
          note: judicialVoteNote(race.candidates, race.seats),
          candidates: race.candidates.map(c => ({
            name: c.name,
            description: c.description || (c.incumbent ? 'Incumbent judge' : 'Candidate'),
            status: c.incumbent ? 'incumbent' : 'challenger',
            grade: c.grade || null,
            positions: c.positions || null,
            gradeJustifications: c.gradeJustifications || null,
          })),
          type: 'nonpartisan',
          seats: race.seats,
          allowWrite: true,
        })
      })
    }
  }

  // Probate Court (keyed by UPPERCASE county name)
  const probateKey = countyName.toUpperCase()
  const probateData = probateCourt2026[probateKey]
  if (probateData) {
    probateData.races.forEach((race, i) => {
      races.push({
        id: `probate-${countyName}-${i}`,
        office: `${countyName} County Probate Court`,
        level: 'Judicial',
        description: `${race.term}. ${race.seats} seat${race.seats > 1 ? 's' : ''}.${race.type === 'non-incumbent' ? ' Open seat.' : ''}`,
        note: judicialVoteNote(race.candidates, race.seats),
        candidates: race.candidates.map(c => ({
          name: c.name,
          description: c.description || (c.incumbent ? 'Incumbent judge' : 'Candidate'),
          status: c.incumbent ? 'incumbent' : 'challenger',
          grade: c.grade || null,
          positions: c.positions || null,
          gradeJustifications: c.gradeJustifications || null,
        })),
        type: 'nonpartisan',
        seats: race.seats,
        allowWrite: true,
      })
    })
  }

  // District Court — NOT YET INCLUDED
  // District courts cover sub-county areas (specific cities/townships).
  // A full city/township-to-district mapping is needed for accurate results.
  // TODO: District court geographic mapping

  return races
}

function ordinal(n) {
  const s = ['th','st','nd','rd']
  const v = n % 100
  return n + (s[(v-20)%10] || s[v] || s[0])
}
