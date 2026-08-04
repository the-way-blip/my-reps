// Michigan August 4, 2026 Primary — Local Ballot Proposals & Millages
//
// Sources: County clerk offices, MI SOS, Ballotpedia, news coverage.
// Proposals vary by jurisdiction — users see only proposals for their location.
//
// STRUCTURE:
//   match.county      → geo.county (e.g. "Oakland")
//   match.place        → geo.place (city, e.g. "Royal Oak")
//   match.township     → geo.countySubdivision (e.g. "Augusta Township")
//   match.schoolDistrict → geo.schoolDistrict (e.g. "Royal Oak School District")
//   match.countywide   → true means everyone in that county sees it
//
// Each proposal has:
//   yesVote / noVote  — plain-English one-liner for what each vote means
//   taxImpact         — what it costs a typical homeowner
//   conservativeView / progressiveView — perspective analysis
//   recommendation    — optional editorial note

const PROPOSALS = [

  // ═══════════════════════════════════════════════════════════════
  //  COUNTYWIDE PROPOSALS
  // ═══════════════════════════════════════════════════════════════

  // ── Oakland County ──
  {
    id: 'oakland-enhancement-millage',
    name: 'Oakland County Regional Enhancement Millage',
    jurisdiction: 'Oakland County',
    match: { county: 'Oakland', countywide: true },
    type: 'New Millage',
    category: 'schools',
    mills: 1.5,
    duration: '6 years (2026–2032)',
    status: 'confirmed',
    description: 'Levies 1.5 mills countywide to fund all public school districts and eligible public school academies in Oakland County. Every penny goes directly to local districts — Oakland Schools (the ISD) receives nothing. Each district\'s board decides how to spend the funds.',
    yesVote: 'A YES vote raises your property taxes by 1.5 mills to provide about $781 per student per year to Oakland County public schools for teacher pay, safety, mental health, and classroom needs.',
    noVote: 'A NO vote keeps your current tax rate. Schools would not receive the additional $125 million per year in countywide funding.',
    taxImpact: 'A home with $250,000 taxable value would pay about $375/year ($31/month).',
    estimatedRevenue: '$125 million/year',
    conservativeView: 'New tax on all property owners — including those without children in public schools. Districts can spend it however they want with no specific accountability measures. Property tax burden in Oakland County is already significant.',
    progressiveView: 'Invests directly in local schools to recruit teachers, expand mental health services, and improve safety. Every district benefits, including underfunded ones. Per-pupil distribution is equitable.',
    recommendation: 'This is a NEW millage, not a renewal — it increases your taxes. Research how your specific district plans to use the funds.',
  },

  // ── Benzie County ──
  {
    id: 'benzie-operating-millage',
    name: 'Benzie County General Operating Millage Restoration',
    jurisdiction: 'Benzie County',
    match: { county: 'Benzie', countywide: true },
    type: 'Millage Restoration (Headlee Override)',
    category: 'county-operations',
    mills: 5.29,
    duration: 'Restores to original authorized rate',
    status: 'confirmed',
    description: 'Restores the county operating millage to its original authorized rate of 5.29 mills, which has been reduced over time by the Headlee Amendment to approximately 3.24 mills. Funds essential county services including courts, prosecutor, sheriff road patrol, 911 dispatch, animal control, and township services like fire protection and parks.',
    yesVote: 'A YES vote restores the county operating millage to 5.29 mills (an increase of about 2 mills over the current Headlee-reduced rate) to fund county and township services.',
    noVote: 'A NO vote keeps the current reduced rate of approximately 3.24 mills. County services may face continued budget pressure.',
    taxImpact: 'Approximately $200/year increase for a home with $100,000 taxable value.',
    conservativeView: 'This reverses the Headlee Amendment\'s taxpayer protections. The Headlee rollback was designed to keep government growth in check — voting yes effectively raises taxes above what the constitution allows.',
    progressiveView: 'Essential county services like sheriff patrol and courts have been underfunded for decades as Headlee eroded the tax base. This restores the rate voters originally approved.',
    recommendation: 'Headlee overrides are common across Michigan — 92 of 133 August proposals statewide are renewals or restorations. Understand whether your county is facing actual service cuts.',
  },

  // ── Ingham County ──
  {
    id: 'ingham-cadl-library',
    name: 'Capital Area District Libraries Operating Millage Renewal',
    jurisdiction: 'Ingham County (CADL service area)',
    match: { county: 'Ingham', countywide: true },
    type: 'Millage Renewal',
    category: 'library',
    mills: null,
    duration: '4 years',
    status: 'confirmed',
    description: 'Renews the existing operating millage for the Capital Area District Libraries (CADL) without increasing the current tax rate. Approximately 90% of CADL\'s operating budget comes from this voter-approved millage. Funds 13 branch libraries, the Mid-Michigan Local History Center, mobile libraries, outreach services, technology resources, and community programs.',
    yesVote: 'A YES vote renews the existing library millage at the same rate — no tax increase. CADL\'s 13 branches continue operating as they do today.',
    noVote: 'A NO vote eliminates 90% of CADL\'s operating budget. Most or all branches would likely close.',
    taxImpact: 'No change from current rate — this is a renewal, not a new tax.',
    conservativeView: 'Renewals maintain the status quo. Libraries provide community value but should demonstrate fiscal responsibility with existing funds.',
    progressiveView: 'Libraries are essential community infrastructure. Losing this funding would be devastating to underserved populations.',
    recommendation: 'This is a renewal at the same rate — your taxes do not change regardless of the outcome.',
  },

  // ═══════════════════════════════════════════════════════════════
  //  TOWNSHIP / CITY PROPOSALS
  // ═══════════════════════════════════════════════════════════════

  // ── Augusta Charter Township (Washtenaw) ──
  {
    id: 'augusta-farmland-millage',
    name: 'Farmland and Open Space Land Preservation Millage',
    jurisdiction: 'Augusta Charter Township',
    match: { county: 'Washtenaw', township: 'Augusta' },
    type: 'New Millage',
    category: 'land-preservation',
    mills: 0.2,
    duration: '10 years (2026–2035)',
    status: 'confirmed',
    description: 'Levies 0.2 mills to purchase development rights on farmland and open space to preserve rural character and prevent overdevelopment in Augusta Charter Township.',
    yesVote: 'A YES vote adds 0.2 mills to your property taxes to fund the purchase of development rights on local farmland and open space, preserving rural land.',
    noVote: 'A NO vote means no new millage. Farmland preservation would rely on other funding sources or private action.',
    taxImpact: 'About $20/year for a home with $100,000 taxable value.',
    conservativeView: 'Government using tax dollars to restrict private property rights and interfere with the land market. Landowners who want to preserve their land can do so voluntarily.',
    progressiveView: 'Protects farmland and green space from sprawl development, preserves the township\'s rural character, and supports local agriculture.',
    recommendation: null,
  },
  {
    id: 'augusta-fire-renewal',
    name: 'Fire Protection and Prevention Millage Renewal',
    jurisdiction: 'Augusta Charter Township',
    match: { county: 'Washtenaw', township: 'Augusta' },
    type: 'Millage Renewal',
    category: 'fire',
    mills: 2.0,
    duration: '4 years (2027–2030)',
    status: 'confirmed',
    estimatedRevenue: '$793,221 in first year',
    description: 'Renews the existing 2.0 mill fire protection and prevention millage for Augusta Charter Township for four years.',
    yesVote: 'A YES vote renews fire protection funding at the same rate. Your local fire department continues operating with current staffing and equipment.',
    noVote: 'A NO vote eliminates dedicated fire protection funding. The township would need to find alternative funding or reduce fire services.',
    taxImpact: 'No change — renewal of existing rate.',
    conservativeView: 'Fire protection is a core government function. Renewals maintain existing services at existing rates.',
    progressiveView: 'Essential public safety service that protects lives and property.',
    recommendation: 'This is a renewal — your taxes stay the same either way.',
  },

  // ── Grass Lake Charter Township (Jackson) ──
  {
    id: 'grass-lake-twp-fire',
    name: 'Fire Protection Millage Renewal',
    jurisdiction: 'Grass Lake Charter Township',
    match: { county: 'Jackson', township: 'Grass Lake' },
    type: 'Millage Renewal',
    category: 'fire',
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Renews the existing fire protection millage for Grass Lake Charter Township.',
    yesVote: 'A YES vote renews fire protection funding at the current rate. Fire services continue as-is.',
    noVote: 'A NO vote ends dedicated fire protection funding for the township.',
    taxImpact: 'No change — renewal of existing rate.',
    conservativeView: 'Core government service. Renewals maintain the status quo.',
    progressiveView: 'Essential public safety that protects residents and property.',
    recommendation: null,
  },

  // ── Pulaski Township (Jackson) ──
  {
    id: 'pulaski-fire',
    name: 'Fire Department Millage',
    jurisdiction: 'Pulaski Township',
    match: { county: 'Jackson', township: 'Pulaski' },
    type: 'Millage',
    category: 'fire',
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Fire department millage for Pulaski Township.',
    yesVote: 'A YES vote provides millage funding for the Pulaski Township fire department.',
    noVote: 'A NO vote rejects fire department millage funding.',
    taxImpact: null,
    conservativeView: 'Fire protection is a core government function.',
    progressiveView: 'Essential public safety service.',
    recommendation: null,
  },

  // ── Sandstone Charter Township (Jackson) ──
  {
    id: 'sandstone-fire-renewal',
    name: 'Fire Protection Millage Renewal',
    jurisdiction: 'Sandstone Charter Township',
    match: { county: 'Jackson', township: 'Sandstone' },
    type: 'Millage Renewal',
    category: 'fire',
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Renews fire protection millage for Sandstone Charter Township.',
    yesVote: 'A YES vote continues fire protection at the current rate.',
    noVote: 'A NO vote ends dedicated fire protection funding.',
    taxImpact: 'No change — renewal.',
    conservativeView: 'Core service renewal.',
    progressiveView: 'Essential safety funding.',
    recommendation: null,
  },

  // ── Summit Township (Jackson) ──
  {
    id: 'summit-fire-police-renewal',
    name: 'Fire and Police Service Millage Renewal',
    jurisdiction: 'Summit Township',
    match: { county: 'Jackson', township: 'Summit' },
    type: 'Millage Renewal',
    category: 'public-safety',
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Renews the existing fire and police service millage for Summit Township.',
    yesVote: 'A YES vote continues fire and police services at the current millage rate.',
    noVote: 'A NO vote ends dedicated public safety funding.',
    taxImpact: 'No change — renewal.',
    conservativeView: 'Public safety is core government. Renewals maintain the status quo.',
    progressiveView: 'Essential community safety services.',
    recommendation: null,
  },
  {
    id: 'summit-fire-police-increase',
    name: 'Fire and Police Service Millage Increase',
    jurisdiction: 'Summit Township',
    match: { county: 'Jackson', township: 'Summit' },
    type: 'Millage Increase',
    category: 'public-safety',
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Requests an additional millage increase for fire and police services in Summit Township, beyond the existing renewal.',
    yesVote: 'A YES vote increases your property taxes to expand fire and police services beyond current levels.',
    noVote: 'A NO vote keeps fire and police funding at the current level (if the renewal also passes).',
    taxImpact: 'Tax increase above current rate.',
    conservativeView: 'Already paying for public safety — increases should be scrutinized carefully. Are current services truly inadequate?',
    progressiveView: 'Growing communities need growing services. Investing in public safety protects residents.',
    recommendation: 'This is separate from the renewal — you can vote YES on the renewal and NO on the increase.',
  },

  // ═══════════════════════════════════════════════════════════════
  //  SCHOOL DISTRICT PROPOSALS
  // ═══════════════════════════════════════════════════════════════

  // ── Royal Oak Schools (Oakland) ──
  {
    id: 'royal-oak-bond',
    name: 'Royal Oak Schools Capital Improvement Bond',
    jurisdiction: 'Royal Oak School District',
    match: { county: 'Oakland', schoolDistrict: 'Royal Oak' },
    type: 'Bond Proposal',
    category: 'schools',
    bondAmount: '$165 million',
    mills: 2.2,
    duration: null,
    status: 'confirmed',
    description: 'Authorizes $165 million in bonds for capital improvements to Royal Oak Schools facilities. Maintains the current debt millage rate of 2.20 mills — this is a no-tax-rate-increase bond. Funds building repairs, technology upgrades, and facility improvements across the district.',
    yesVote: 'A YES vote authorizes $165M in bonds for school building improvements. Your tax rate stays the same — 2.20 mills — because existing bonds are being paid off.',
    noVote: 'A NO vote rejects the bond. Current facilities would not receive the planned upgrades. Your tax rate may actually decrease as existing bonds retire.',
    taxImpact: 'No change in millage rate (maintains 2.20 mills). However, this extends debt payments that would otherwise expire.',
    conservativeView: '"No tax increase" is technically true on the rate, but you\'re extending long-term debt that would otherwise expire. That\'s money you\'d otherwise get back.',
    progressiveView: 'Smart financial timing — refinancing expiring debt at the same rate to make critical facility investments. The rate stays flat.',
    recommendation: 'Understand the difference: the RATE stays the same, but you\'re authorizing new long-term debt.',
  },

  // ── Brighton Area Schools (Livingston) ──
  {
    id: 'brighton-bond',
    name: 'Brighton Area Schools Bond Proposal',
    jurisdiction: 'Brighton Area School District',
    match: { county: 'Livingston', schoolDistrict: 'Brighton' },
    type: 'Bond Proposal',
    category: 'schools',
    bondAmount: '$156.3 million',
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Authorizes $156.3 million in bonds for building improvements, athletic facilities, and parking across Brighton Area Schools.',
    yesVote: 'A YES vote authorizes $156.3M in bonds for school building upgrades, athletic facilities, and parking improvements.',
    noVote: 'A NO vote rejects the bond. Planned facility improvements would not proceed.',
    taxImpact: 'Check district materials for specific millage impact.',
    conservativeView: 'Large bond for a school district. Athletic facilities and parking are debatable priorities when academic needs should come first. Long-term debt burden on taxpayers.',
    progressiveView: 'Aging facilities need investment to provide quality learning environments. Comprehensive improvements serve the whole community.',
    recommendation: null,
  },

  // ── Chelsea School District (Washtenaw) ──
  {
    id: 'chelsea-sinking-fund',
    name: 'Chelsea School District Sinking Fund Millage',
    jurisdiction: 'Chelsea School District',
    match: { county: 'Washtenaw', schoolDistrict: 'Chelsea' },
    type: 'Sinking Fund Millage',
    category: 'schools',
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Sinking fund millage for Chelsea School District to fund building repairs and improvements on a pay-as-you-go basis (no borrowing).',
    yesVote: 'A YES vote levies a sinking fund millage for building maintenance and repairs without taking on debt.',
    noVote: 'A NO vote rejects the sinking fund. Building repairs would need to come from the general fund or a future bond.',
    taxImpact: null,
    conservativeView: 'Sinking funds are the fiscally responsible way to handle building maintenance — pay-as-you-go, no interest costs.',
    progressiveView: 'Maintains school facilities without the interest burden of bonds.',
    recommendation: 'Sinking funds are generally the most cost-effective way to maintain buildings — no interest payments.',
  },
  {
    id: 'chelsea-operating-renewal',
    name: 'Chelsea School District Operating Millage Renewal',
    jurisdiction: 'Chelsea School District',
    match: { county: 'Washtenaw', schoolDistrict: 'Chelsea' },
    type: 'Millage Renewal',
    category: 'schools',
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Renews the existing non-homestead operating millage for Chelsea School District. This millage is levied on commercial and industrial property, not on primary residences.',
    yesVote: 'A YES vote renews operating funds for schools — levied on businesses and rental properties, NOT your primary home.',
    noVote: 'A NO vote cuts school operating revenue. State funding is reduced dollar-for-dollar if this fails.',
    taxImpact: 'No impact on homeowners — this is levied on non-homestead (business/rental) property only.',
    conservativeView: 'Non-homestead operating millages are required by state law for schools to receive full state funding. Not renewing hurts the district with no benefit to homeowners.',
    progressiveView: 'Essential school funding renewal.',
    recommendation: 'Non-homestead operating millages do NOT tax your primary home. If this fails, the school district loses state matching funds.',
  },

  // ── Homer Community Schools (Jackson) ──
  {
    id: 'homer-bond',
    name: 'Homer Community School District Bond Proposal',
    jurisdiction: 'Homer Community School District',
    match: { county: 'Jackson', schoolDistrict: 'Homer' },
    type: 'Bond Proposal',
    category: 'schools',
    bondAmount: null,
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Bond proposal for Homer Community School District capital improvements.',
    yesVote: 'A YES vote authorizes bonds for school facility improvements. Property taxes would increase to repay the debt.',
    noVote: 'A NO vote rejects the bond. No new debt is issued and taxes stay the same.',
    taxImpact: 'Tax increase — check district materials for specific millage.',
    conservativeView: 'New debt means higher taxes. Evaluate whether the improvements are truly necessary.',
    progressiveView: 'Investment in school infrastructure benefits students and the community long-term.',
    recommendation: null,
  },

  // ── Litchfield Community Schools (Jackson) ──
  {
    id: 'litchfield-sinking-fund',
    name: 'Litchfield Community Schools Sinking Fund Millage Renewal',
    jurisdiction: 'Litchfield Community Schools',
    match: { county: 'Jackson', schoolDistrict: 'Litchfield' },
    type: 'Sinking Fund Renewal',
    category: 'schools',
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Renews the existing sinking fund millage for building repairs and maintenance at Litchfield Community Schools.',
    yesVote: 'A YES vote renews the sinking fund for school building maintenance at the current rate.',
    noVote: 'A NO vote eliminates pay-as-you-go building maintenance funding.',
    taxImpact: 'No change — renewal.',
    conservativeView: 'Fiscally responsible maintenance funding. Renewals keep rates stable.',
    progressiveView: 'Continues essential building upkeep.',
    recommendation: null,
  },
  {
    id: 'litchfield-operating-renewal',
    name: 'Litchfield Community Schools Operating Millage Renewal',
    jurisdiction: 'Litchfield Community Schools',
    match: { county: 'Jackson', schoolDistrict: 'Litchfield' },
    type: 'Millage Renewal',
    category: 'schools',
    mills: null,
    duration: null,
    status: 'confirmed',
    description: 'Renews the non-homestead operating millage for Litchfield Community Schools. Levied on commercial/industrial/rental property only.',
    yesVote: 'A YES vote renews school operating funds — levied on businesses and rental properties, NOT your home.',
    noVote: 'A NO vote reduces school funding. State aid is cut if this fails.',
    taxImpact: 'No impact on homeowners.',
    conservativeView: 'Required for full state funding. Homeowners aren\'t affected.',
    progressiveView: 'Essential school revenue.',
    recommendation: 'Non-homestead millages don\'t affect homeowners. Rejecting them costs the district state funding.',
  },

  // ── Plainwell Community Schools (Kalamazoo) ──
  {
    id: 'plainwell-operating-renewal',
    name: 'Plainwell Community Schools Operating Millage Renewal',
    jurisdiction: 'Plainwell Community Schools',
    match: { county: 'Kalamazoo', schoolDistrict: 'Plainwell' },
    type: 'Millage Renewal',
    category: 'schools',
    mills: 19.6352,
    duration: null,
    status: 'confirmed',
    description: 'Renews the non-homestead operating millage of 19.6352 mills for Plainwell Community Schools.',
    yesVote: 'A YES vote renews the non-homestead operating millage — does NOT affect primary homeowners.',
    noVote: 'A NO vote cuts school operating revenue and state aid.',
    taxImpact: 'No impact on homeowners — non-homestead only.',
    conservativeView: 'Standard renewal. No homeowner impact.',
    progressiveView: 'Maintains school funding.',
    recommendation: 'Non-homestead millage — does not tax your home.',
  },

  // ── Otsego District Public Library (Kalamazoo/Allegan) ──
  {
    id: 'otsego-library',
    name: 'Otsego District Public Library Millage',
    jurisdiction: 'Otsego District Library Service Area',
    match: { county: 'Kalamazoo', place: 'Otsego' },
    type: 'Millage',
    category: 'library',
    mills: 1.0,
    duration: null,
    status: 'confirmed',
    description: 'Library millage of up to 1.0 mill for the Otsego District Public Library.',
    yesVote: 'A YES vote funds the Otsego District Public Library at up to 1.0 mill.',
    noVote: 'A NO vote rejects library funding.',
    taxImpact: 'Up to $100/year for a home with $100,000 taxable value.',
    conservativeView: 'Libraries are a local choice. Evaluate whether existing resources meet community needs.',
    progressiveView: 'Libraries provide essential community services including internet access, children\'s programs, and job resources.',
    recommendation: null,
  },
]

// ── Category display labels ──
const CATEGORY_LABELS = {
  'schools': 'Schools',
  'fire': 'Fire Protection',
  'public-safety': 'Public Safety',
  'library': 'Library',
  'county-operations': 'County Services',
  'land-preservation': 'Land Preservation',
  'roads': 'Roads',
  'parks': 'Parks & Recreation',
  'senior-services': 'Senior Services',
  'mental-health': 'Mental Health',
}

const CATEGORY_ICONS = {
  'schools': '🏫',
  'fire': '🚒',
  'public-safety': '🚔',
  'library': '📚',
  'county-operations': '🏛️',
  'land-preservation': '🌾',
  'roads': '🛣️',
  'parks': '🌲',
  'senior-services': '👴',
  'mental-health': '🧠',
}

export function getCategoryLabel(category) {
  return CATEGORY_LABELS[category] || category
}

export function getCategoryIcon(category) {
  return CATEGORY_ICONS[category] || '📋'
}

function normalize(str) {
  if (!str) return ''
  return str.toLowerCase()
    .replace(/\s+(charter\s+)?township$/i, '')
    .replace(/\s+city$/i, '')
    .replace(/\s+county$/i, '')
    .replace(/\s+school\s+district$/i, '')
    .replace(/\s+community\s+schools?$/i, '')
    .replace(/\s+public\s+schools?$/i, '')
    .replace(/\s+area\s+schools?$/i, '')
    .replace(/[^a-z0-9]/g, '')
}

export function getProposalsForLocation(geo) {
  if (!geo) return []

  const county = normalize(geo.county)
  const place = normalize(geo.place)
  const township = normalize(geo.countySubdivision)
  const school = normalize(geo.schoolDistrict)

  return PROPOSALS.filter(p => {
    const m = p.match
    if (!m) return false

    const matchCounty = normalize(m.county) === county

    if (m.countywide && matchCounty) return true

    if (m.township && matchCounty && normalize(m.township) === township) return true

    if (m.place && matchCounty && normalize(m.place) === place) return true

    if (m.schoolDistrict) {
      const mSchool = normalize(m.schoolDistrict)
      if (mSchool === school) return true
      if (school && school.includes(mSchool)) return true
      if (mSchool && county && normalize(m.county) === county && school && school.includes(mSchool)) return true
    }

    return false
  })
}

export { PROPOSALS }
