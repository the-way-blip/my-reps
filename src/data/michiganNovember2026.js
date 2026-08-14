/**
 * Michigan November 2026 General Election — Local Races
 *
 * School boards, community college boards, library boards,
 * judicial races, and select municipal races that appear on the November ballot.
 *
 * School board elections: nonpartisan, 4-year terms, staggered.
 * Michigan has ~540 school districts; most hold elections in November of even years.
 *
 * Community college boards: nonpartisan, 6-year staggered terms.
 * Michigan has 28 community college districts.
 *
 * Note: ISD/RESA boards are NOT on the November ballot — they use a biennial
 * delegate election (one rep per local school board) on the first Monday in June
 * of odd years (next: June 2027).
 *
 * Circuit/Probate/District Courts: nonpartisan, 6-year terms.
 *
 * Data sources: MI SOS filings, local clerk offices, county election commissions.
 * Grades reflect constitutional and Christian values alignment where determinable.
 */

// ── School Board Races (November 2026) ──────────────────────────
// Keyed by school district name (matching Census geocoder schoolDistrict field)

export const SCHOOL_BOARD_RACES_2026 = {
  'Detroit City': {
    district: 'Detroit Public Schools Community District',
    seats: 4,
    description: 'Four seats on the seven-member board. Oversees DPSCD with 50,000+ students.',
    candidates: [
      { name: 'Angelique Peterson-Mayberry', description: 'Incumbent board member', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with no clear alignment signals' },
      { name: 'Sherry Gay-Dagnogo', description: 'Incumbent board member; former State Representative', status: 'incumbent', grade: 'C', gradeNote: 'Former state rep; no specific conservative/progressive indicators in description' },
      { name: 'Misha Stallworth', description: 'Incumbent board member', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with no clear alignment signals' },
      { name: 'Darryl Brown', description: 'Challenger', status: 'challenger', grade: 'C', gradeNote: 'Insufficient information to determine alignment' },
    ],
  },
  'Dearborn City': {
    district: 'Dearborn Public Schools',
    seats: 3,
    description: 'Three seats on the seven-member board. Michigan\'s third-largest district.',
    candidates: [],
  },
  'Ann Arbor': {
    district: 'Ann Arbor Public Schools',
    seats: 3,
    description: 'Three seats on the seven-member board. Serves 17,000+ students.',
    candidates: [
      { name: 'Susan Baskett', description: 'Incumbent trustee; education policy advocate', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with generic education policy focus; no clear alignment' },
      { name: 'Rebecca Lazarus', description: 'Incumbent trustee; focus on student mental health', status: 'incumbent', grade: 'C', gradeNote: 'Mental health focus is neutral; no clear conservative signals' },
      { name: 'Torchio Feaster', description: 'Challenger; community engagement focus', status: 'challenger', grade: 'D', gradeNote: 'Community engagement framing often signals progressive priorities' },
    ],
  },
  'Livonia': {
    district: 'Livonia Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Colleen Burton', description: 'Incumbent; former teacher, fiscal accountability focus', status: 'incumbent', grade: 'B', gradeNote: 'Fiscal accountability aligns with conservative values' },
      { name: 'Mark Johnson', description: 'Challenger; parent activist, curriculum transparency advocate', status: 'challenger', grade: 'B', gradeNote: 'Strong parental rights and transparency stance' },
    ],
  },
  'Troy': {
    district: 'Troy School District',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Karl Schmidt', description: 'Incumbent trustee; STEM education focus', status: 'incumbent', grade: 'C', gradeNote: 'STEM focus is neutral; no clear conservative alignment' },
      { name: 'Cindy Yang', description: 'Challenger; parental rights in education advocate', status: 'challenger', grade: 'A', gradeNote: 'Explicit parental rights advocacy signals strong conservative alignment' },
      { name: 'Dennis Abraham', description: 'Challenger; former teacher, back-to-basics approach', status: 'challenger', grade: 'B', gradeNote: 'Back-to-basics approach aligns with traditional education values' },
    ],
  },
  'Rochester Community': {
    district: 'Rochester Community Schools',
    seats: 3,
    description: 'Three seats on the seven-member board. Serves Rochester, Rochester Hills, and Oakland Township.',
    candidates: [
      { name: 'Andrea Berman', description: 'Incumbent trustee', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with no clear alignment signals' },
      { name: 'Scott Muska', description: 'Incumbent; budget and facilities focus', status: 'incumbent', grade: 'B', gradeNote: 'Budget focus suggests fiscal responsibility orientation' },
      { name: 'Jennifer Lewis', description: 'Challenger; transparency and parental involvement', status: 'challenger', grade: 'B', gradeNote: 'Transparency and parental involvement align with conservative values' },
      { name: 'Tim Smith', description: 'Challenger; school safety and traditional curriculum', status: 'challenger', grade: 'A', gradeNote: 'Traditional curriculum and school safety signal strong conservative alignment' },
    ],
  },
  'Utica Community': {
    district: 'Utica Community Schools',
    seats: 2,
    description: 'Two seats on the seven-member board. Largest district in Macomb County.',
    candidates: [
      { name: 'Kelli Rankin', description: 'Incumbent trustee', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with no clear alignment signals' },
      { name: 'Robert Bischer', description: 'Challenger; curriculum accountability', status: 'challenger', grade: 'B', gradeNote: 'Curriculum accountability aligns with parental rights values' },
    ],
  },
  'Chippewa Valley': {
    district: 'Chippewa Valley Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Frank Marella', description: 'Incumbent trustee; bond oversight', status: 'incumbent', grade: 'B', gradeNote: 'Bond oversight suggests fiscal responsibility' },
      { name: 'Laura Aldrich', description: 'Challenger; parental rights advocate', status: 'challenger', grade: 'A', gradeNote: 'Explicit parental rights advocacy signals strong conservative alignment' },
    ],
  },
  'L\'Anse Creuse': {
    district: 'L\'Anse Creuse Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Mary Cracchiolo', description: 'Incumbent trustee', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with no clear alignment signals' },
      { name: 'Kevin Breen', description: 'Challenger; fiscal responsibility focus', status: 'challenger', grade: 'B', gradeNote: 'Fiscal responsibility aligns with conservative values' },
    ],
  },
  'Grand Rapids': {
    district: 'Grand Rapids Public Schools',
    seats: 3,
    description: 'Three seats on the nine-member board. West Michigan\'s largest district.',
    candidates: [
      { name: 'Kristian Grant', description: 'Incumbent; community partnerships', status: 'incumbent', grade: 'C', gradeNote: 'Community partnerships is neutral; no clear alignment' },
      { name: 'Katherine Downes Lewis', description: 'Incumbent; equity and access', status: 'incumbent', grade: 'D', gradeNote: 'Equity and access framing signals progressive priorities' },
      { name: 'Jose Flores', description: 'Challenger; bilingual education advocate', status: 'challenger', grade: 'D', gradeNote: 'Bilingual education advocacy signals progressive education priorities' },
      { name: 'Michael DeVries', description: 'Challenger; back-to-basics, fiscal conservative', status: 'challenger', grade: 'A', gradeNote: 'Back-to-basics plus fiscal conservative signals strong alignment' },
    ],
  },
  'Kentwood': {
    district: 'Kentwood Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Marcia DeLange', description: 'Incumbent; career & tech education focus', status: 'incumbent', grade: 'C', gradeNote: 'Career/tech focus is neutral; no clear conservative signals' },
      { name: 'Brian Carter', description: 'Challenger; school safety advocate', status: 'challenger', grade: 'B', gradeNote: 'School safety advocacy leans conservative' },
    ],
  },
  'Forest Hills': {
    district: 'Forest Hills Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board. Serves Ada, Cascade, and Grand Rapids Township.',
    candidates: [
      { name: 'Sandra Feenstra', description: 'Incumbent; academic excellence advocate', status: 'incumbent', grade: 'B', gradeNote: 'Academic excellence focus aligns with traditional education values' },
      { name: 'Dan Greer', description: 'Incumbent; finance committee chair', status: 'incumbent', grade: 'B', gradeNote: 'Finance committee role suggests fiscal responsibility' },
      { name: 'Mike Hubbell', description: 'Challenger; parental transparency', status: 'challenger', grade: 'B', gradeNote: 'Parental transparency aligns with conservative education values' },
    ],
  },
  'Kalamazoo': {
    district: 'Kalamazoo Public Schools',
    seats: 3,
    description: 'Three seats on the seven-member board.',
    candidates: [
      { name: 'Jennie Hill', description: 'Incumbent; Kalamazoo Promise advocate', status: 'incumbent', grade: 'C', gradeNote: 'Kalamazoo Promise is a scholarship program; neutral alignment' },
      { name: 'Tandy Moore', description: 'Incumbent; community partnerships', status: 'incumbent', grade: 'C', gradeNote: 'Community partnerships is neutral; no clear alignment' },
      { name: 'Carl Anderson', description: 'Challenger; curriculum accountability', status: 'challenger', grade: 'B', gradeNote: 'Curriculum accountability aligns with parental rights values' },
    ],
  },
  'Portage': {
    district: 'Portage Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Melanie Kurdys', description: 'Incumbent; student achievement focus', status: 'incumbent', grade: 'C', gradeNote: 'Student achievement focus is neutral; no clear alignment' },
      { name: 'John Severson', description: 'Challenger; fiscal responsibility', status: 'challenger', grade: 'B', gradeNote: 'Fiscal responsibility aligns with conservative values' },
    ],
  },
  'Flint City': {
    district: 'Flint Community Schools',
    seats: 3,
    description: 'Three seats on the board.',
    candidates: [
      { name: 'Joyce Ellis-McNeal', description: 'Incumbent; school infrastructure advocate', status: 'incumbent', grade: 'C', gradeNote: 'Infrastructure focus is neutral; no clear alignment' },
      { name: 'Casey Lester', description: 'Incumbent; student services', status: 'incumbent', grade: 'C', gradeNote: 'Student services is neutral; no clear alignment' },
      { name: 'Danielle Green', description: 'Challenger; community partnership focus', status: 'challenger', grade: 'C', gradeNote: 'Community partnership focus is neutral; insufficient info' },
    ],
  },
  'Lansing': {
    district: 'Lansing School District',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Gabrielle Lawrence', description: 'Incumbent; literacy and early education', status: 'incumbent', grade: 'C', gradeNote: 'Literacy and early education is neutral; no clear alignment' },
      { name: 'Caitlin Cavanaugh', description: 'Challenger; teacher retention', status: 'challenger', grade: 'C', gradeNote: 'Teacher retention is neutral; no clear alignment' },
    ],
  },
  'East Lansing': {
    district: 'East Lansing Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Terah Chambers', description: 'Incumbent; MSU education professor', status: 'incumbent', grade: 'D', gradeNote: 'University education professors typically lean progressive' },
      { name: 'Nichole Martin', description: 'Challenger; parental involvement advocate', status: 'challenger', grade: 'B', gradeNote: 'Parental involvement advocacy aligns with conservative values' },
    ],
  },
  'Traverse City Area': {
    district: 'Traverse City Area Public Schools',
    seats: 3,
    description: 'Three seats on the seven-member board. Northern Michigan\'s largest district.',
    candidates: [
      { name: 'Scott Newman-Bale', description: 'Incumbent; open enrollment advocate', status: 'incumbent', grade: 'B', gradeNote: 'Open enrollment supports school choice values' },
      { name: 'Jeff Leonhardt', description: 'Incumbent; facilities management', status: 'incumbent', grade: 'C', gradeNote: 'Facilities management is neutral; no clear alignment' },
      { name: 'Chelsea Pasche', description: 'Challenger; curriculum transparency', status: 'challenger', grade: 'B', gradeNote: 'Curriculum transparency aligns with parental rights values' },
      { name: 'Dave Mengebier', description: 'Challenger; parental choice advocate', status: 'challenger', grade: 'A', gradeNote: 'Parental choice advocacy signals strong conservative alignment' },
    ],
  },
  'Midland City': {
    district: 'Midland Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Saginaw City': {
    district: 'Saginaw Public Schools',
    seats: 3,
    description: 'Three seats on the board.',
    candidates: [],
  },
  'Grosse Pointe': {
    district: 'Grosse Pointe Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Lisa Papas', description: 'Incumbent; finance and operations', status: 'incumbent', grade: 'B', gradeNote: 'Finance and operations focus suggests fiscal responsibility' },
      { name: 'David Brumbaugh', description: 'Challenger; academic standards advocate', status: 'challenger', grade: 'B', gradeNote: 'Academic standards advocacy aligns with traditional education values' },
    ],
  },
  'Birmingham': {
    district: 'Birmingham Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Nicole Shirilla', description: 'Incumbent; curriculum review focus', status: 'incumbent', grade: 'C', gradeNote: 'Curriculum review is neutral without more context on direction' },
      { name: 'Evan Driker', description: 'Challenger; STEM and career pathways', status: 'challenger', grade: 'C', gradeNote: 'STEM and career pathways is neutral; no clear alignment' },
    ],
  },
  'Bloomfield Hills': {
    district: 'Bloomfield Hills Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Paul Kolin', description: 'Incumbent; bond oversight', status: 'incumbent', grade: 'B', gradeNote: 'Bond oversight suggests fiscal responsibility' },
      { name: 'Shelley Signorelli', description: 'Challenger; parental transparency', status: 'challenger', grade: 'B', gradeNote: 'Parental transparency aligns with conservative education values' },
    ],
  },
  'Clarkston Community': {
    district: 'Clarkston Community Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Jeff Allsteadt', description: 'Incumbent; school safety focus', status: 'incumbent', grade: 'B', gradeNote: 'School safety focus leans conservative' },
      { name: 'Mary Beth Rogers', description: 'Challenger; traditional values in education', status: 'challenger', grade: 'A', gradeNote: 'Explicit traditional values signals strong conservative alignment' },
    ],
  },
  'Lake Orion Community': {
    district: 'Lake Orion Community Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Dana Mermell', description: 'Incumbent; special education advocate', status: 'incumbent', grade: 'C', gradeNote: 'Special education advocacy is neutral; no clear alignment' },
      { name: 'Steve McIsaac', description: 'Challenger; curriculum transparency', status: 'challenger', grade: 'B', gradeNote: 'Curriculum transparency aligns with parental rights values' },
    ],
  },
  'Oxford Community': {
    district: 'Oxford Community Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Korey Bailey', description: 'Incumbent; school security and student wellness', status: 'incumbent', grade: 'B', gradeNote: 'School security focus leans conservative' },
      { name: 'Dan D\'Alessandro', description: 'Incumbent; community engagement', status: 'incumbent', grade: 'C', gradeNote: 'Community engagement is neutral; no clear alignment' },
    ],
  },
  'Plymouth-Canton Community': {
    district: 'Plymouth-Canton Community Schools',
    seats: 3,
    description: 'Three seats on the seven-member board. Largest district in Wayne County (outside Detroit).',
    candidates: [
      { name: 'Patti McCoin', description: 'Incumbent; fiscal oversight and transparency', status: 'incumbent', grade: 'B', gradeNote: 'Fiscal oversight and transparency align with conservative values' },
      { name: 'Lauren Christenson', description: 'Incumbent; student achievement', status: 'incumbent', grade: 'C', gradeNote: 'Student achievement is neutral; no clear alignment' },
      { name: 'Jason Ewald', description: 'Challenger; parental rights, conservative values', status: 'challenger', grade: 'A', gradeNote: 'Explicitly identifies with parental rights and conservative values' },
      { name: 'Nancy Lin', description: 'Challenger; academic excellence', status: 'challenger', grade: 'B', gradeNote: 'Academic excellence focus aligns with traditional education values' },
    ],
  },
  'Northville': {
    district: 'Northville Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Sarah Prescott', description: 'Incumbent; gifted and talented programs', status: 'incumbent', grade: 'C', gradeNote: 'Gifted/talented focus is neutral; no clear alignment' },
      { name: 'Angela Saad', description: 'Challenger; parent engagement advocate', status: 'challenger', grade: 'B', gradeNote: 'Parent engagement advocacy aligns with parental rights values' },
    ],
  },
  'Novi Community': {
    district: 'Novi Community Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Willy Mena', description: 'Incumbent; finance and operations', status: 'incumbent', grade: 'B', gradeNote: 'Finance and operations focus suggests fiscal responsibility' },
      { name: 'Danielle Ruskin', description: 'Challenger; academic rigor and transparency', status: 'challenger', grade: 'B', gradeNote: 'Academic rigor and transparency align with conservative education values' },
    ],
  },
  'South Lyon Community': {
    district: 'South Lyon Community Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [
      { name: 'Craig Dashner', description: 'Incumbent; facilities and bond oversight', status: 'incumbent', grade: 'B', gradeNote: 'Bond oversight suggests fiscal responsibility' },
      { name: 'Jennifer Urtel', description: 'Challenger; parental involvement, traditional values', status: 'challenger', grade: 'A', gradeNote: 'Parental involvement plus traditional values signals strong conservative alignment' },
    ],
  },
  'Huron Valley': {
    district: 'Huron Valley Schools',
    seats: 2,
    description: 'Two seats on the seven-member board. Serves Milford, Highland, and White Lake.',
    candidates: [
      { name: 'MarkLessard', description: 'Incumbent; school choice supporter', status: 'incumbent', grade: 'A', gradeNote: 'School choice support signals strong conservative alignment' },
      { name: 'Sean Carlson', description: 'Incumbent; conservative fiscal approach', status: 'incumbent', grade: 'A', gradeNote: 'Explicitly conservative fiscal approach signals strong alignment' },
      { name: 'Amy Smith', description: 'Challenger; curriculum accountability', status: 'challenger', grade: 'B', gradeNote: 'Curriculum accountability aligns with parental rights values' },
    ],
  },
  'West Bloomfield': {
    district: 'West Bloomfield School District',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Walled Lake Consolidated': {
    district: 'Walled Lake Consolidated Schools',
    seats: 2,
    description: 'Two seats on the seven-member board. Serves Commerce, Walled Lake, Wixom, and Wolverine Lake.',
    candidates: [],
  },
  'Warren Consolidated': {
    district: 'Warren Consolidated Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Fitzgerald': {
    district: 'Fitzgerald Public Schools',
    seats: 2,
    description: 'Two seats on the board. Serves Warren area.',
    candidates: [],
  },
  'Fraser': {
    district: 'Fraser Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Anchor Bay': {
    district: 'Anchor Bay School District',
    seats: 2,
    description: 'Two seats on the seven-member board. Serves New Baltimore and surrounding areas.',
    candidates: [],
  },
  'Saline Area': {
    district: 'Saline Area Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Dexter Community': {
    district: 'Dexter Community Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Chelsea': {
    district: 'Chelsea School District',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Muskegon City': {
    district: 'Muskegon Public Schools',
    seats: 2,
    description: 'Two seats on the board.',
    candidates: [],
  },
  'Holland City': {
    district: 'Holland Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Battle Creek': {
    district: 'Battle Creek Public Schools',
    seats: 3,
    description: 'Three seats on the board.',
    candidates: [],
  },
  'Jackson': {
    district: 'Jackson Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Monroe': {
    district: 'Monroe Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Bay City': {
    district: 'Bay City Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Alpena': {
    district: 'Alpena Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board.',
    candidates: [],
  },
  'Marquette Area': {
    district: 'Marquette Area Public Schools',
    seats: 2,
    description: 'Two seats on the seven-member board. Upper Peninsula\'s largest district.',
    candidates: [],
  },
}

// ── Community College Board Races (November 2026) ───────────────
// Michigan has 28 community college districts. Board members serve 6-year terms.
// Keyed by county name — maps county to the community college district(s) that serve it.

export const COMMUNITY_COLLEGE_RACES_2026 = {
  // Southeast Michigan
  Wayne: {
    colleges: [
      {
        id: 'wcccd-2026',
        name: 'Wayne County Community College District',
        seats: 3,
        description: 'Three seats on the nine-member board. Serves all of Wayne County.',
        candidates: [
          { name: 'Denise Gray-Felder', description: 'Incumbent trustee', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent trustee with no clear ideological signal' },
          { name: 'Vernon Smith', description: 'Incumbent trustee; workforce development advocate', status: 'incumbent', grade: 'B', gradeNote: 'Workforce development focus aligns with practical, trades-oriented education priorities' },
          { name: 'Juanita Ford', description: 'Incumbent trustee', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent trustee with no clear ideological signal' },
        ],
      },
    ],
  },
  Oakland: {
    colleges: [
      {
        id: 'occ-2026',
        name: 'Oakland Community College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves all of Oakland County.',
        candidates: [
          { name: 'Pamela Jackson', description: 'Incumbent trustee; nursing program advocate', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent trustee; nursing program focus is neutral' },
          { name: 'Susan Gibson', description: 'Challenger; fiscal accountability focus', status: 'challenger', grade: 'B', gradeNote: 'Fiscal accountability focus aligns with conservative governance priorities' },
          { name: 'Michael LaPorte', description: 'Challenger; trades and apprenticeship advocate', status: 'challenger', grade: 'B', gradeNote: 'Trades and apprenticeship advocacy aligns with practical workforce priorities' },
        ],
      },
    ],
  },
  Macomb: {
    colleges: [
      {
        id: 'mcc-2026',
        name: 'Macomb Community College',
        seats: 2,
        description: 'Two seats on the eight-member board. Serves most of Macomb County.',
        candidates: [
          { name: 'Frank Cusumano', description: 'Incumbent trustee; career/tech focus', status: 'incumbent', grade: 'B', gradeNote: 'Career and technical education focus aligns with practical workforce priorities' },
          { name: 'Katherine Bracey', description: 'Challenger; student access advocate', status: 'challenger', grade: 'C', gradeNote: 'Student access advocacy is neutral; could signal equity-focused agenda' },
        ],
      },
    ],
  },
  Washtenaw: {
    colleges: [
      {
        id: 'wcc-2026',
        name: 'Washtenaw Community College',
        seats: 2,
        description: 'Two seats on the seven-member board.',
        candidates: [
          { name: 'Ruth Hatcher', description: 'Incumbent trustee', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent trustee with no clear ideological signal' },
          { name: 'David DeVarti', description: 'Incumbent trustee; sustainability focus', status: 'incumbent', grade: 'D', gradeNote: 'Sustainability focus typically signals progressive policy orientation' },
        ],
      },
    ],
  },
  // West Michigan
  Kent: {
    colleges: [
      {
        id: 'grcc-2026',
        name: 'Grand Rapids Community College',
        seats: 2,
        description: 'Two seats on the seven-member board.',
        candidates: [
          { name: 'Sheryl Siegel', description: 'Incumbent trustee', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent trustee with no clear ideological signal' },
          { name: 'Philip Skaggs', description: 'Challenger; workforce training advocate', status: 'challenger', grade: 'B', gradeNote: 'Workforce training advocacy aligns with practical education priorities' },
        ],
      },
    ],
  },
  Muskegon: {
    colleges: [
      {
        id: 'muskcc-2026',
        name: 'Muskegon Community College',
        seats: 2,
        description: 'Two seats on the seven-member board.',
        candidates: [],
      },
    ],
  },
  Kalamazoo: {
    colleges: [
      {
        id: 'kvcc-2026',
        name: 'Kalamazoo Valley Community College',
        seats: 2,
        description: 'Two seats on the seven-member board.',
        candidates: [],
      },
    ],
  },
  Ottawa: {
    colleges: [
      {
        id: 'grcc-ottawa-2026',
        name: 'Grand Rapids Community College',
        seats: 2,
        description: 'Two seats on the seven-member board. GRCC serves parts of Ottawa County.',
        candidates: [],
      },
    ],
  },
  // Central Michigan
  Genesee: {
    colleges: [
      {
        id: 'mcc-genesee-2026',
        name: 'Mott Community College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves Genesee County.',
        candidates: [],
      },
    ],
  },
  Ingham: {
    colleges: [
      {
        id: 'lcc-2026',
        name: 'Lansing Community College',
        seats: 3,
        description: 'Three seats on the board. Largest community college in Michigan.',
        candidates: [],
      },
    ],
  },
  Saginaw: {
    colleges: [
      {
        id: 'delta-2026',
        name: 'Delta College',
        seats: 2,
        description: 'Two seats on the nine-member board. Serves Bay, Midland, and Saginaw counties.',
        candidates: [],
      },
    ],
  },
  Bay: {
    colleges: [
      {
        id: 'delta-bay-2026',
        name: 'Delta College',
        seats: 2,
        description: 'Two seats on the nine-member board. Serves Bay, Midland, and Saginaw counties.',
        candidates: [],
      },
    ],
  },
  Midland: {
    colleges: [
      {
        id: 'delta-midland-2026',
        name: 'Delta College',
        seats: 2,
        description: 'Two seats on the nine-member board.',
        candidates: [],
      },
    ],
  },
  // Northern Michigan
  'Grand Traverse': {
    colleges: [
      {
        id: 'nmc-2026',
        name: 'Northwestern Michigan College',
        seats: 2,
        description: 'Two seats on the seven-member board. Traverse City.',
        candidates: [],
      },
    ],
  },
  // Upper Peninsula
  Marquette: {
    colleges: [
      {
        id: 'nmc-marquette-2026',
        name: 'Bay de Noc Community College',
        seats: 2,
        description: 'Two seats on the board.',
        candidates: [],
      },
    ],
  },
  Monroe: {
    colleges: [
      {
        id: 'mccc-2026',
        name: 'Monroe County Community College',
        seats: 2,
        description: 'Two seats on the seven-member board.',
        candidates: [],
      },
    ],
  },
  Jackson: {
    colleges: [
      {
        id: 'jcc-2026',
        name: 'Jackson College',
        seats: 2,
        description: 'Two seats on the seven-member board.',
        candidates: [],
      },
    ],
  },
  Alpena: {
    colleges: [
      {
        id: 'alpena-cc-2026',
        name: 'Alpena Community College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves Alpena County.',
        candidates: [
          { name: 'John Briggs', description: 'Board chair', status: 'incumbent', grade: null },
          { name: 'Joe Gentry', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  Delta: {
    colleges: [
      {
        id: 'bay-college-2026',
        name: 'Bay College (Bay de Noc Community College)',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves Delta County (Upper Peninsula).',
        candidates: [
          { name: 'Eric Lundin', description: 'Board chair', status: 'incumbent', grade: null },
          { name: 'Nick Chenier', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Terri Mileski', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  'St. Joseph': {
    colleges: [
      {
        id: 'glen-oaks-2026',
        name: 'Glen Oaks Community College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves St. Joseph County.',
        candidates: [
          { name: 'Bruce Gosling', description: 'Board chair', status: 'incumbent', grade: null },
          { name: 'Carol Higgins', description: 'Vice chair', status: 'incumbent', grade: null },
          { name: 'Kimberlee Bontrager', description: 'Treasurer', status: 'incumbent', grade: null },
          { name: 'Rod Lopez', description: 'Secretary', status: 'incumbent', grade: null },
          { name: 'Rick Cordes', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Elizabeth Datkovic', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'P. Joseph Haas', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  Gogebic: {
    colleges: [
      {
        id: 'gogebic-cc-2026',
        name: 'Gogebic Community College',
        seats: 2,
        description: 'Two seats on the seven-member board. Upper Peninsula, satellite in Houghton County.',
        candidates: [
          { name: 'Eve Komosa', description: 'Trustee (term expires Dec 2026)', status: 'incumbent', grade: null },
          { name: 'Susan Beals', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Michael McPherson', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'John Lupino', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  Calhoun: {
    colleges: [
      {
        id: 'kellogg-cc-2026',
        name: 'Kellogg Community College',
        seats: 3,
        description: 'Three seats on the seven-member board. Serves Calhoun County and portions of Barry, Branch, Hillsdale.',
        candidates: [
          { name: 'Darin Aldrich', description: 'Trustee (term expires Dec 2026)', status: 'incumbent', grade: null },
          { name: 'Patrick O\'Donnell', description: 'Trustee (term expires Dec 2026)', status: 'incumbent', grade: null },
          { name: 'Matthew Davis', description: 'Trustee (term expires Dec 2026)', status: 'incumbent', grade: null },
          { name: 'Steve Claywell', description: 'Board chair (term 2030)', status: 'incumbent', grade: null },
          { name: 'Lisa Mueller', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  Crawford: {
    colleges: [
      {
        id: 'kirtland-cc-2026',
        name: 'Kirtland Community College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves Crawford, Ogemaw, Oscoda, Roscommon counties.',
        candidates: [
          { name: 'MaryAnn Ferrigan', description: 'Board chair', status: 'incumbent', grade: null },
          { name: 'Jack Kramer', description: 'Vice chair', status: 'incumbent', grade: null },
          { name: 'Ed Pearen', description: 'Secretary/Treasurer', status: 'incumbent', grade: null },
          { name: 'Alan Bruder', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Amy Knepp', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Tom Ritter', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Roy Spangler', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  Berrien: {
    colleges: [
      {
        id: 'lmc-2026',
        name: 'Lake Michigan College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves Berrien County.',
        candidates: [
          { name: 'Jeff Curry', description: 'Board chair', status: 'incumbent', grade: null },
          { name: 'John Grover', description: 'Vice chair', status: 'incumbent', grade: null },
          { name: 'Mary Jo Tomasini', description: 'Secretary', status: 'incumbent', grade: null },
          { name: 'Joan Smith', description: 'Treasurer', status: 'incumbent', grade: null },
          { name: 'Debra Johnson', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Vicki Burghdoff', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Brian Dissette', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  Clare: {
    colleges: [
      {
        id: 'mid-mi-cc-2026',
        name: 'Mid Michigan College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves Clare, Gladwin, Isabella, Gratiot counties.',
        candidates: [
          { name: 'Thomas Metzger', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Richard Allen', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'George Gilmore', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Jane Zdrojewski', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Mike Jankoviak', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  Montcalm: {
    colleges: [
      {
        id: 'montcalm-cc-2026',
        name: 'Montcalm Community College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves Montcalm County.',
        candidates: [
          { name: 'Kurt Peterson', description: 'Board chair', status: 'incumbent', grade: null },
          { name: 'Carol Deuling-Ravell', description: 'Vice chair', status: 'incumbent', grade: null },
          { name: 'Esther Combs', description: 'Secretary', status: 'incumbent', grade: null },
          { name: 'Joshua Stump', description: 'Treasurer', status: 'incumbent', grade: null },
          { name: 'Joyce Kitchenmaster', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Robert Marston', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Robert Byram', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  Emmet: {
    colleges: [
      {
        id: 'ncmc-2026',
        name: 'North Central Michigan College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves Emmet County.',
        candidates: [
          { name: 'John Fought', description: 'Interim trustee (term through Dec 2026)', status: 'incumbent', grade: null },
          { name: 'Jason Kromm', description: 'Interim trustee (term through Dec 2026)', status: 'incumbent', grade: null },
          { name: 'Melissa Keiswetter', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  'Grand Traverse': {
    colleges: [
      {
        id: 'nmc-2026',
        name: 'Northwestern Michigan College',
        seats: 3,
        description: 'Three seats on the seven-member board. Serves Grand Traverse County.',
        candidates: [
          { name: 'Laura Oblinger', description: 'Board chair (term expires Dec 2026)', status: 'incumbent', grade: null },
          { name: 'Ken Warner', description: 'Trustee (term expires Dec 2026)', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  Cass: {
    colleges: [
      {
        id: 'smc-2026',
        name: 'Southwestern Michigan College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves Cass County.',
        candidates: [
          { name: 'Tom Jerdon', description: 'Board chair (trustee since 1991)', status: 'incumbent', grade: null },
          { name: 'Tracy Hertsel', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Becky Moore', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Elaine Foster', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Dwight Dyes', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Beth Cripe', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  'St. Clair': {
    colleges: [
      {
        id: 'sc4-2026',
        name: 'St. Clair County Community College (SC4)',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves St. Clair County.',
        candidates: [
          { name: 'Marcia Robbins', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Karen Niver-Raetzel', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Penelope Peck', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Kim Brown', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Robert Mitchell', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'John Lusk', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Robert Tansky', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
  Mason: {
    colleges: [
      {
        id: 'wscc-2026',
        name: 'West Shore Community College',
        seats: 2,
        description: 'Two seats on the seven-member board. Serves Mason, Manistee, and portions of Lake, Oceana, Newaygo counties.',
        candidates: [
          { name: 'Sherry Wyman', description: 'Board chair', status: 'incumbent', grade: null },
          { name: 'Richard Wilson Jr.', description: 'Vice chair (term expires Dec 2028)', status: 'incumbent', grade: null },
          { name: 'Tom Kaminski', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Anthony Fabaz', description: 'Trustee', status: 'incumbent', grade: null },
          { name: 'Randy Tomaszewski', description: 'Trustee', status: 'incumbent', grade: null },
        ],
      },
    ],
  },
}

// ── Circuit Court Judicial Races (November 2026) ────────────────
// Circuit court judges serve 6-year terms, nonpartisan.
// Races appear when an incumbent's term expires or a seat is vacant.

export const CIRCUIT_COURT_RACES_2026 = {
  Wayne: [
    { id: 'wayne-circuit-2026-1', office: '3rd Circuit Court — Wayne County', seats: 4,
      description: 'Circuit court judges hear felonies, major civil cases, and family matters. Nonpartisan — all voters can vote.',
      candidates: [
        { name: 'Edward Joseph', description: 'Incumbent; criminal division', status: 'incumbent', grade: 'B', gradeNote: 'Criminal division assignment suggests law-and-order orientation' },
        { name: 'Bridget Hathaway', description: 'Incumbent; family division', status: 'incumbent', grade: 'C', gradeNote: 'Family division is neutral; no clear judicial philosophy signal' },
        { name: 'Regina Thomas', description: 'Incumbent; civil division', status: 'incumbent', grade: 'C', gradeNote: 'Civil division incumbent with no clear ideological signal' },
        { name: 'Kevin Cox', description: 'Attorney; criminal defense experience', status: 'challenger', grade: 'C', gradeNote: 'Criminal defense background is neutral to slightly progressive' },
        { name: 'Shakira Hawkins', description: 'Attorney; former Wayne County APA', status: 'challenger', grade: 'B', gradeNote: 'Former assistant prosecuting attorney suggests law-and-order orientation' },
      ] },
  ],
  Oakland: [
    { id: 'oakland-circuit-2026-1', office: '6th Circuit Court — Oakland County', seats: 3,
      description: 'Circuit court judges hear felonies, major civil cases, and family matters. Nonpartisan.',
      candidates: [
        { name: 'Rae Lee Chabot', description: 'Incumbent; family division chief judge', status: 'incumbent', grade: 'C', gradeNote: 'Family division chief judge; no clear judicial philosophy signal' },
        { name: 'Martha Anderson', description: 'Incumbent; criminal division', status: 'incumbent', grade: 'B', gradeNote: 'Criminal division assignment suggests law-and-order orientation' },
        { name: 'Julie McDonald', description: 'Attorney; Oakland County prosecutor\'s office', status: 'challenger', grade: 'B', gradeNote: 'Prosecutorial background suggests law-and-order orientation' },
        { name: 'David Williams', description: 'Attorney; 25 years civil litigation', status: 'challenger', grade: 'C', gradeNote: 'Civil litigation background provides no clear ideological signal' },
      ] },
  ],
  Macomb: [
    { id: 'macomb-circuit-2026-1', office: '16th Circuit Court — Macomb County', seats: 2,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Richard Caretti', description: 'Incumbent; criminal division', status: 'incumbent', grade: 'B', gradeNote: 'Criminal division assignment suggests law-and-order orientation' },
        { name: 'Jennifer Faunce', description: 'Incumbent; family division', status: 'incumbent', grade: 'C', gradeNote: 'Family division is neutral; no clear judicial philosophy signal' },
        { name: 'Thomas Stocker', description: 'Attorney; former assistant prosecutor', status: 'challenger', grade: 'B', gradeNote: 'Prosecutorial background suggests law-and-order orientation' },
      ] },
  ],
  Kent: [
    { id: 'kent-circuit-2026-1', office: '17th Circuit Court — Kent County', seats: 2,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Curt Benson', description: 'Incumbent; criminal division', status: 'incumbent', grade: 'B', gradeNote: 'Criminal division assignment suggests law-and-order orientation' },
        { name: 'Alida Bryant', description: 'Incumbent; civil division', status: 'incumbent', grade: 'C', gradeNote: 'Civil division incumbent with no clear ideological signal' },
        { name: 'Brian Annis', description: 'Attorney; criminal defense', status: 'challenger', grade: 'C', gradeNote: 'Criminal defense background is neutral to slightly progressive' },
      ] },
  ],
  Washtenaw: [
    { id: 'washtenaw-circuit-2026-1', office: '22nd Circuit Court — Washtenaw County', seats: 1,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Patrick Conlin', description: 'Incumbent; general jurisdiction', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with no clear judicial philosophy signal' },
      ] },
  ],
  Genesee: [
    { id: 'genesee-circuit-2026-1', office: '7th Circuit Court — Genesee County', seats: 2,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Elizabeth Kelly', description: 'Incumbent; family division', status: 'incumbent', grade: 'C', gradeNote: 'Family division is neutral; no clear judicial philosophy signal' },
        { name: 'Brian Pickell', description: 'Attorney; former prosecutor', status: 'challenger', grade: 'B', gradeNote: 'Former prosecutor background suggests law-and-order orientation' },
      ] },
  ],
  Ingham: [
    { id: 'ingham-circuit-2026-1', office: '30th Circuit Court — Ingham County', seats: 1,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Wanda Stokes', description: 'Incumbent judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with insufficient information for nonpartisan judge' },
      ] },
  ],
  Kalamazoo: [
    { id: 'kalamazoo-circuit-2026-1', office: '9th Circuit Court — Kalamazoo County', seats: 1,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Alexander Lipsey', description: 'Incumbent judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with insufficient information for nonpartisan judge' },
      ] },
  ],
  Saginaw: [
    { id: 'saginaw-circuit-2026-1', office: '10th Circuit Court — Saginaw County', seats: 1,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Darnell Jackson', description: 'Incumbent judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with insufficient information for nonpartisan judge' },
      ] },
  ],
  Ottawa: [
    { id: 'ottawa-circuit-2026-1', office: '20th Circuit Court — Ottawa County', seats: 1,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Jon Hulsing', description: 'Incumbent; chief judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent chief judge with no clear ideological signal' },
      ] },
  ],
  'Grand Traverse': [
    { id: 'gt-circuit-2026-1', office: '13th Circuit Court — Grand Traverse County', seats: 1,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Kevin Elsenheimer', description: 'Incumbent; former state representative', status: 'incumbent', grade: 'B', gradeNote: 'Former Republican state representative suggests conservative judicial philosophy' },
      ] },
  ],
  Livingston: [
    { id: 'livingston-circuit-2026-1', office: '44th Circuit Court — Livingston County', seats: 1,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Michael Hatty', description: 'Incumbent judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with insufficient information for nonpartisan judge' },
      ] },
  ],
  Monroe: [
    { id: 'monroe-circuit-2026-1', office: '38th Circuit Court — Monroe County', seats: 1,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Michael Weipert', description: 'Incumbent judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with insufficient information for nonpartisan judge' },
      ] },
  ],
  St_Clair: [
    { id: 'stclair-circuit-2026-1', office: '31st Circuit Court — St. Clair County', seats: 1,
      description: 'Circuit court handles felony criminal, major civil, and family cases. Nonpartisan.',
      candidates: [
        { name: 'Cynthia Lane', description: 'Incumbent judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with insufficient information for nonpartisan judge' },
      ] },
  ],
}

// ── Probate Court Races (November 2026) ─────────────────────────
// Probate judges serve 6-year terms, nonpartisan.

export const PROBATE_COURT_RACES_2026 = {
  Wayne: [
    { id: 'wayne-probate-2026', office: 'Wayne County Probate Court', seats: 1,
      description: 'Handles estates, guardianships, conservatorships, and mental health commitments. Nonpartisan.',
      candidates: [] },
  ],
  Oakland: [
    { id: 'oakland-probate-2026', office: 'Oakland County Probate Court', seats: 1,
      description: 'Handles estates, guardianships, and mental health commitments. Nonpartisan.',
      candidates: [] },
  ],
  Kent: [
    { id: 'kent-probate-2026', office: 'Kent County Probate Court', seats: 1,
      description: 'Handles estates, guardianships, and mental health commitments. Nonpartisan.',
      candidates: [] },
  ],
  Genesee: [
    { id: 'genesee-probate-2026', office: 'Genesee County Probate Court', seats: 1,
      description: 'Handles estates, guardianships, and mental health commitments. Nonpartisan.',
      candidates: [] },
  ],
}

// ── District Court Races (November 2026) ────────────────────────
// District court judges serve 6-year terms, nonpartisan.
// District courts handle misdemeanors, small claims, landlord-tenant, and traffic.

export const DISTRICT_COURT_RACES_2026 = {
  Wayne: [
    { id: 'wayne-36th-district-2026', office: '36th District Court — Detroit', seats: 2,
      description: 'Handles misdemeanors, small claims, landlord-tenant, and traffic. Nonpartisan.',
      candidates: [
        { name: 'Alexis Krot', description: 'Incumbent; housing court focus', status: 'incumbent', grade: 'C', gradeNote: 'Housing court focus is neutral; no clear judicial philosophy signal' },
        { name: 'Kenneth King', description: 'Incumbent; traffic division', status: 'incumbent', grade: 'C', gradeNote: 'Traffic division incumbent with no clear ideological signal' },
        { name: 'LaDonna Sanders', description: 'Attorney; criminal defense', status: 'challenger', grade: 'C', gradeNote: 'Criminal defense background is neutral to slightly progressive' },
      ] },
  ],
  Oakland: [
    { id: 'oakland-52-1-district-2026', office: '52-1 District Court — Novi', seats: 1,
      description: 'Serves Novi, Walled Lake, Wixom, South Lyon, Milford, and surrounding areas. Nonpartisan.',
      candidates: [
        { name: 'Robert Bondy', description: 'Incumbent judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with insufficient information for nonpartisan judge' },
      ] },
    { id: 'oakland-52-2-district-2026', office: '52-2 District Court — Clarkston', seats: 1,
      description: 'Serves Clarkston, Lake Orion, Oxford, and surrounding areas. Nonpartisan.',
      candidates: [
        { name: 'Joseph Fabrizio', description: 'Incumbent judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with insufficient information for nonpartisan judge' },
        { name: 'Andrea Mancini', description: 'Attorney; former magistrate', status: 'challenger', grade: 'C', gradeNote: 'Former magistrate; judicial experience but no clear ideological signal' },
      ] },
  ],
  Macomb: [
    { id: 'macomb-42-1-district-2026', office: '42-1 District Court — Romeo', seats: 1,
      description: 'Serves Romeo, Washington Township, and surrounding areas. Nonpartisan.',
      candidates: [
        { name: 'Denis LeDuc', description: 'Incumbent judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with insufficient information for nonpartisan judge' },
      ] },
  ],
  Kent: [
    { id: 'kent-63-district-2026', office: '63rd District Court — Grand Rapids', seats: 1,
      description: 'Serves Grand Rapids and surrounding areas. Nonpartisan.',
      candidates: [
        { name: 'Jeffrey O\'Hara', description: 'Incumbent judge', status: 'incumbent', grade: 'C', gradeNote: 'Incumbent with insufficient information for nonpartisan judge' },
        { name: 'Tanya Darby', description: 'Attorney; legal aid background', status: 'challenger', grade: 'D', gradeNote: 'Legal aid background tends to signal progressive judicial philosophy' },
      ] },
  ],
}

// ── Library Board Races (November 2026) ─────────────────────────
// District library boards are elected, nonpartisan.
// Not all libraries are district libraries — many are municipal or township libraries
// with appointed boards.

export const LIBRARY_BOARD_RACES_2026 = {
  'Ann Arbor District Library': {
    id: 'aadl-2026',
    county: 'Washtenaw',
    seats: 3,
    description: '3 seats on the 7-member elected board. District library serving Ann Arbor. 4-year terms, at-large.',
    candidates: [
      { name: 'Aidan Sova', description: 'Incumbent President', status: 'incumbent' },
      { name: 'Catherine Hadley', description: 'Incumbent Trustee', status: 'incumbent' },
      { name: 'Cassie Haynes', description: 'Incumbent Trustee (appointed Feb 2026 to fill vacancy)', status: 'incumbent' },
    ],
  },
  'Ypsilanti District Library': {
    id: 'ydl-2026',
    county: 'Washtenaw',
    seats: 5,
    description: '5 seats on the 7-member elected board — the largest slate among Michigan library elections this cycle.',
    candidates: [
      { name: 'Kristy Cooper', description: 'Incumbent President', status: 'incumbent' },
      { name: 'Theresa Maddix', description: 'Incumbent Vice President', status: 'incumbent' },
      { name: 'Bethany Kennedy', description: 'Incumbent Secretary', status: 'incumbent' },
      { name: 'Patricia J. Horne McGee', description: 'Incumbent Trustee', status: 'incumbent' },
      { name: 'Paul Leighton', description: 'Incumbent Trustee', status: 'incumbent' },
    ],
  },
  'Northville District Library': {
    id: 'ndl-2026',
    county: 'Wayne',
    seats: 4,
    description: '4 seats (including all current officers) on the 7-member elected board. Serves Northville Township and City of Northville.',
    candidates: [
      { name: 'Carol Doyle', description: 'Incumbent Chair', status: 'incumbent' },
      { name: 'Deborah Stanifer', description: 'Incumbent Vice-Chair', status: 'incumbent' },
      { name: 'Alan Somershoe', description: 'Incumbent Secretary', status: 'incumbent' },
      { name: 'Karren Yurgalite', description: 'Incumbent Treasurer', status: 'incumbent' },
    ],
  },
  'Plymouth District Library': {
    id: 'pdl-2026',
    county: 'Wayne',
    seats: 4,
    description: '4 seats on the 7-member elected board. Serves Plymouth Township and City of Plymouth.',
    candidates: [
      { name: 'Yasir Khogali', description: 'Incumbent Vice-President', status: 'incumbent' },
      { name: 'Beth Sexton', description: 'Incumbent Treasurer', status: 'incumbent' },
      { name: 'Jessica Yaser', description: 'Incumbent Secretary', status: 'incumbent' },
      { name: 'Michael Pappas', description: 'Incumbent Trustee', status: 'incumbent' },
    ],
  },
  'Salem-South Lyon District Library': {
    id: 'ssldl-2026',
    county: 'Oakland',
    seats: 4,
    description: '4 seats on the 7-member elected board. Serves Salem Township and City of South Lyon.',
    candidates: [
      { name: 'Linda Hamilton', description: 'Incumbent Vice-President', status: 'incumbent' },
      { name: 'Hattie Maguire', description: 'Incumbent Secretary', status: 'incumbent' },
      { name: 'Russell Sims', description: 'Incumbent Trustee', status: 'incumbent' },
      { name: 'Erin Petricca', description: 'Incumbent Trustee', status: 'incumbent' },
    ],
  },
  'Cromaine District Library': {
    id: 'cromaine-2026',
    county: 'Livingston',
    seats: 3,
    description: '3 seats on the 7-member elected board. Contested race with both conservative and progressive slates running.',
    candidates: [
      { name: 'Holly Naylor', description: 'Incumbent Trustee (Dem-endorsed)', status: 'incumbent' },
      { name: 'Kim Armstrong', description: 'Incumbent Secretary (conservative-endorsed)', status: 'incumbent' },
      { name: 'William Bolin', description: 'Incumbent Trustee (conservative-endorsed)', status: 'incumbent' },
      { name: 'Mary Cafmeyer', description: 'Challenger (Dem-endorsed)', status: 'challenger' },
      { name: 'Rebecca Fedewa', description: 'Challenger (Dem-endorsed)', status: 'challenger' },
      { name: 'Julie Bellanti', description: 'Challenger (conservative-endorsed)', status: 'challenger' },
    ],
  },
  'Brighton District Library': {
    id: 'bdl-2026',
    county: 'Livingston',
    seats: 3,
    description: '3 seats on the 7-member elected board. Serves Brighton area.',
    candidates: [
      { name: 'Daniel Huth', description: 'Incumbent Vice President', status: 'incumbent' },
      { name: 'Lyndsay Wing', description: 'Incumbent Treasurer', status: 'incumbent' },
      { name: 'Jim Muzzin', description: 'Incumbent Trustee', status: 'incumbent' },
    ],
  },
  'Chesterfield Township Library': {
    id: 'ctl-2026',
    county: 'Macomb',
    seats: 2,
    description: '2 seats on the 6-member elected board. Serves Chesterfield Township.',
    candidates: [
      { name: 'Patricia Johnson', description: 'Incumbent Trustee', status: 'incumbent' },
      { name: 'Lisa Mannino', description: 'Incumbent Trustee', status: 'incumbent' },
    ],
  },
}

// ── City Municipal Races (November 2026) ─────────────────────
// Michigan cities on even-year election cycles. Most MI cities elect in odd years,
// but cities already on even-year/annual cycles as of Sept 1, 2004 may continue (MCL 168.642).
// Keyed by city name (matching Census place field).

export const CITY_MUNICIPAL_RACES_2026 = {
  'Ann Arbor': {
    county: 'Washtenaw',
    races: [
      {
        office: 'Mayor',
        candidates: [
          { name: 'Yousef Rabhi', party: 'Democratic', description: 'Washtenaw County Commissioner; won primary' },
        ],
      },
      {
        office: 'City Council Ward 1',
        candidates: [
          { name: 'Cynthia Harrison', party: 'Democratic', description: 'Incumbent', status: 'incumbent' },
          { name: 'Lucas King-Cochran', party: 'Independent' },
        ],
      },
      {
        office: 'City Council Ward 2',
        candidates: [
          { name: 'Sandy Aldrich', party: 'Democratic', description: 'Won primary' },
          { name: 'Jumanah Saadeh', party: 'Independent' },
        ],
      },
      {
        office: 'City Council Ward 3',
        candidates: [
          { name: 'Ryan Bartholomew', party: 'Democratic', description: 'Won primary' },
          { name: 'Kenneth Arthur Leicht Jr.', party: 'Independent' },
        ],
      },
      {
        office: 'City Council Ward 4',
        candidates: [
          { name: 'Aidan Sova', party: 'Democratic', description: 'Won primary' },
          { name: 'James Trost', party: 'Independent' },
        ],
      },
      {
        office: 'City Council Ward 5',
        candidates: [
          { name: 'Jenn Cornell', party: 'Democratic', description: 'Incumbent', status: 'incumbent' },
        ],
      },
    ],
  },
  'Grand Rapids': {
    county: 'Kent',
    races: [
      {
        office: 'City Commission Ward 1',
        candidates: [
          { name: 'Lindsey Perez-Plescher', party: 'Nonpartisan', description: 'Won primary (59.7%)' },
          { name: 'Steve Tibbe', party: 'Nonpartisan', description: 'Advanced from primary (25.5%)' },
        ],
      },
      {
        office: 'City Commission Ward 2',
        candidates: [
          { name: 'Lisa Knight', party: 'Nonpartisan', description: 'Incumbent', status: 'incumbent' },
          { name: 'Bryan Cody', party: 'Nonpartisan' },
        ],
      },
      {
        office: 'City Commission Ward 3',
        candidates: [
          { name: 'Kelsey Perdue', party: 'Nonpartisan', description: 'Incumbent (unopposed)', status: 'incumbent' },
        ],
      },
    ],
  },
  'Flint': {
    county: 'Genesee',
    races: [
      {
        office: 'Mayor',
        candidates: [
          { name: 'Sheldon A. Neeley', party: 'Nonpartisan', description: 'Incumbent (42.8%)', status: 'incumbent' },
          { name: 'Tonya Burns', party: 'Nonpartisan', description: 'City Councilwoman (32.6%)' },
        ],
      },
      {
        office: 'City Council Ward 1',
        candidates: [
          { name: 'Arthur Woodson', party: 'Nonpartisan' },
          { name: 'Debra J. Coleman', party: 'Nonpartisan' },
        ],
      },
      {
        office: 'City Council Ward 2',
        candidates: [
          { name: 'LaShawn Johnson', party: 'Nonpartisan' },
          { name: 'Ladel Lewis', party: 'Nonpartisan', description: 'Incumbent', status: 'incumbent' },
        ],
      },
      {
        office: 'City Council Ward 5',
        candidates: [
          { name: 'Joel Arnold', party: 'Nonpartisan' },
          { name: 'DeWaun E. Robinson', party: 'Nonpartisan' },
        ],
      },
      {
        office: 'City Council Ward 7',
        candidates: [
          { name: 'Candice Mushatt', party: 'Nonpartisan', description: 'City Council President (incumbent)', status: 'incumbent' },
          { name: 'Darell Brown', party: 'Nonpartisan' },
        ],
      },
      {
        office: 'City Council Ward 8',
        candidates: [
          { name: 'Ezekiel Harris', party: 'Nonpartisan', description: 'Won primary (57.8%)' },
          { name: 'Casey Lester', party: 'Nonpartisan' },
        ],
      },
    ],
  },
  'Marquette': {
    county: 'Marquette',
    races: [
      {
        office: 'City Commission (3 at-large seats)',
        candidates: [
          { name: 'Paul Schloegel', party: 'Nonpartisan', description: 'Current mayor (selected by commission)', status: 'incumbent' },
          { name: 'Fred Stonehouse', party: 'Nonpartisan', description: 'Incumbent', status: 'incumbent' },
        ],
      },
    ],
  },
  'Jackson': {
    county: 'Jackson',
    races: [
      {
        office: 'Mayor',
        candidates: [
          { name: 'Derek J. Dobies', party: 'Nonpartisan' },
          { name: 'Dena K. Morgan', party: 'Nonpartisan' },
        ],
      },
    ],
  },
}

// ── Village Council Races (November 2026) ──────────────────────
// Per MCL 168.642, regular village elections are held in November of even years.
// Village presidents serve 2-year terms; trustees serve 4-year staggered terms.
// Keyed by village name (matching Census countySubdivision or place fields).

export const VILLAGE_COUNCIL_RACES_2026 = {
  'Beverly Hills': {
    county: 'Oakland',
    seats: 3,
    description: 'Village president and two trustee seats. Nonpartisan. Governs zoning, roads, and public safety.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  Milford: {
    county: 'Oakland',
    seats: 3,
    description: 'Village president and two trustee seats. Population ~6,500.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  Oxford: {
    county: 'Oakland',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  'Lake Orion': {
    county: 'Oakland',
    seats: 3,
    description: 'Village president and two trustee seats. Population ~3,000.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  Clarkston: {
    county: 'Oakland',
    seats: 3,
    description: 'Village president and two trustee seats. Population ~900.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  'Holly': {
    county: 'Oakland',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  'Romeo': {
    county: 'Macomb',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  Dexter: {
    county: 'Washtenaw',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  Chelsea: {
    county: 'Washtenaw',
    seats: 3,
    description: 'Village president and two trustee seats. Population ~5,600.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  'Saline': {
    county: 'Washtenaw',
    seats: 3,
    description: 'Village council seats — actually a city since 2012.',
    offices: [],
    candidates: [],
    note: 'Saline is a city (odd-year elections). Not on 2026 ballot.',
    skip: true,
  },
  'Wolverine Lake': {
    county: 'Oakland',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  Edmore: {
    county: 'Montcalm',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  'Howard City': {
    county: 'Montcalm',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  Elk_Rapids: {
    county: 'Antrim',
    seats: 3,
    description: 'Village president and two trustee seats. Northern Michigan.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  Kingsley: {
    county: 'Grand Traverse',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  Stockbridge: {
    county: 'Ingham',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  'Spring Lake': {
    county: 'Ottawa',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  'Coopersville': {
    county: 'Ottawa',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  'Paw Paw': {
    county: 'Van Buren',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
  Quincy: {
    county: 'Branch',
    seats: 3,
    description: 'Village president and two trustee seats.',
    offices: ['Village President', 'Trustee (2 seats)'],
    candidates: [],
  },
}

// ── County Commissioner Races (November 2026) ─────────────────
// County commissioners serve 2-year terms, elected every even year.
// Partisan races — appear on the August primary and November general.
// Keyed by county name.

export const COUNTY_COMMISSIONER_RACES_2026 = {
  Wayne: {
    totalSeats: 15,
    seatsOnBallot: 15,
    description: 'All 15 county commission districts on the ballot. Commissioners set county budget and policy.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
      { district: 10, candidates: [] },
      { district: 11, candidates: [] },
      { district: 12, candidates: [] },
      { district: 13, candidates: [] },
      { district: 14, candidates: [] },
      { district: 15, candidates: [] },
    ],
  },
  Oakland: {
    totalSeats: 21,
    seatsOnBallot: 21,
    description: 'All 21 county commission districts on the ballot. Sets county budget, oversees departments.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
      { district: 10, candidates: [] },
      { district: 11, candidates: [] },
      { district: 12, candidates: [] },
      { district: 13, candidates: [] },
      { district: 14, candidates: [] },
      { district: 15, candidates: [] },
      { district: 16, candidates: [] },
      { district: 17, candidates: [] },
      { district: 18, candidates: [] },
      { district: 19, candidates: [] },
      { district: 20, candidates: [] },
      { district: 21, candidates: [] },
    ],
  },
  Macomb: {
    totalSeats: 13,
    seatsOnBallot: 13,
    description: 'All 13 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
      { district: 10, candidates: [] },
      { district: 11, candidates: [] },
      { district: 12, candidates: [] },
      { district: 13, candidates: [] },
    ],
  },
  Kent: {
    totalSeats: 19,
    seatsOnBallot: 19,
    description: 'All 19 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
      { district: 10, candidates: [] },
      { district: 11, candidates: [] },
      { district: 12, candidates: [] },
      { district: 13, candidates: [] },
      { district: 14, candidates: [] },
      { district: 15, candidates: [] },
      { district: 16, candidates: [] },
      { district: 17, candidates: [] },
      { district: 18, candidates: [] },
      { district: 19, candidates: [] },
    ],
  },
  Washtenaw: {
    totalSeats: 9,
    seatsOnBallot: 9,
    description: 'All 9 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
    ],
  },
  Genesee: {
    totalSeats: 9,
    seatsOnBallot: 9,
    description: 'All 9 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
    ],
  },
  Ingham: {
    totalSeats: 14,
    seatsOnBallot: 14,
    description: 'All 14 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
      { district: 10, candidates: [] },
      { district: 11, candidates: [] },
      { district: 12, candidates: [] },
      { district: 13, candidates: [] },
      { district: 14, candidates: [] },
    ],
  },
  Kalamazoo: {
    totalSeats: 11,
    seatsOnBallot: 11,
    description: 'All 11 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
      { district: 10, candidates: [] },
      { district: 11, candidates: [] },
    ],
  },
  Ottawa: {
    totalSeats: 11,
    seatsOnBallot: 11,
    description: 'All 11 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
      { district: 10, candidates: [] },
      { district: 11, candidates: [] },
    ],
  },
  Livingston: {
    totalSeats: 9,
    seatsOnBallot: 9,
    description: 'All 9 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
    ],
  },
  'Grand Traverse': {
    totalSeats: 9,
    seatsOnBallot: 9,
    description: 'All 9 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
    ],
  },
  Monroe: {
    totalSeats: 9,
    seatsOnBallot: 9,
    description: 'All 9 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
    ],
  },
  Saginaw: {
    totalSeats: 11,
    seatsOnBallot: 11,
    description: 'All 11 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
      { district: 8, candidates: [] },
      { district: 9, candidates: [] },
      { district: 10, candidates: [] },
      { district: 11, candidates: [] },
    ],
  },
  'St. Clair': {
    totalSeats: 7,
    seatsOnBallot: 7,
    description: 'All 7 county commission districts on the ballot.',
    districts: [
      { district: 1, candidates: [] },
      { district: 2, candidates: [] },
      { district: 3, candidates: [] },
      { district: 4, candidates: [] },
      { district: 5, candidates: [] },
      { district: 6, candidates: [] },
      { district: 7, candidates: [] },
    ],
  },
}

// ── County Officer Races (November 2026) ──────────────────────
// Sheriff, Prosecuting Attorney, Clerk, Treasurer, Register of Deeds, Drain Commissioner
// 4-year terms, partisan, elected in gubernatorial years (2022, 2026, 2030).
// These are some of the most impactful local races — county prosecutors decide
// which cases to charge, sheriffs set law enforcement priorities.

export const COUNTY_OFFICER_RACES_2026 = {
  Wayne: {
    officers: [
      {
        id: 'wayne-sheriff-2026', office: 'Wayne County Sheriff', type: 'partisan',
        description: 'Oversees county jail, court security, and law enforcement in unincorporated areas. 2,000+ employees.',
        candidates: [
          { name: 'Raphael Washington', description: 'Incumbent sheriff; appointed after Benny Napoleon\'s passing', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic sheriff; no strong law-and-order signaling beyond baseline duties' },
        ],
      },
      {
        id: 'wayne-prosecutor-2026', office: 'Wayne County Prosecuting Attorney', type: 'partisan',
        description: 'Chief law enforcement officer for Wayne County. Decides which criminal cases to prosecute.',
        candidates: [
          { name: 'Kym Worthy', description: 'Incumbent; nationally recognized for clearing rape kit backlog', party: 'Democratic', status: 'incumbent', grade: 'C', gradeNote: 'Democratic prosecutor but known for aggressive prosecution and clearing rape kit backlog; tougher than typical D prosecutor' },
        ],
      },
      {
        id: 'wayne-clerk-2026', office: 'Wayne County Clerk', type: 'partisan',
        description: 'Manages elections, vital records, and county documents.',
        candidates: [
          { name: 'Cathy Garrett', description: 'Incumbent county clerk', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic incumbent clerk' },
        ],
      },
      {
        id: 'wayne-treasurer-2026', office: 'Wayne County Treasurer', type: 'partisan',
        description: 'Collects property taxes, manages county investments, handles tax foreclosures.',
        candidates: [
          { name: 'Eric Sabree', description: 'Incumbent treasurer', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic incumbent treasurer' },
        ],
      },
    ],
  },
  Oakland: {
    officers: [
      {
        id: 'oakland-sheriff-2026', office: 'Oakland County Sheriff', type: 'partisan',
        description: 'Oversees county jail, marine patrol, and law enforcement. One of Michigan\'s largest sheriff departments.',
        candidates: [
          { name: 'Michael Bouchard', description: 'Incumbent; four-term sheriff, former state senator', party: 'Republican', status: 'incumbent', grade: 'B' },
        ],
      },
      {
        id: 'oakland-prosecutor-2026', office: 'Oakland County Prosecuting Attorney', type: 'partisan',
        description: 'Prosecutes felonies and oversees consumer protection, child support enforcement.',
        candidates: [
          { name: 'Karen McDonald', description: 'Incumbent; prosecuted Oxford school shooting case', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic prosecutor; Oxford prosecution was aggressive but overall progressive orientation' },
        ],
      },
      {
        id: 'oakland-clerk-2026', office: 'Oakland County Clerk / Register of Deeds', type: 'partisan',
        description: 'Manages elections, court records, vital records, and property deeds.',
        candidates: [
          { name: 'Lisa Brown', description: 'Incumbent clerk/register of deeds', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic incumbent clerk' },
        ],
      },
      {
        id: 'oakland-treasurer-2026', office: 'Oakland County Treasurer', type: 'partisan',
        description: 'Collects property taxes and manages county investments.',
        candidates: [
          { name: 'Robert Wittenberg', description: 'Incumbent treasurer; former state representative', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic incumbent treasurer; former state representative with progressive voting record' },
        ],
      },
    ],
  },
  Macomb: {
    officers: [
      {
        id: 'macomb-sheriff-2026', office: 'Macomb County Sheriff', type: 'partisan',
        description: 'Oversees county jail, patrol, and marine division.',
        candidates: [
          { name: 'Anthony Wickersham', description: 'Incumbent sheriff', party: 'Republican', status: 'incumbent', grade: 'B', gradeNote: 'Republican sheriff; law enforcement leadership aligns with conservative priorities' },
        ],
      },
      {
        id: 'macomb-prosecutor-2026', office: 'Macomb County Prosecuting Attorney', type: 'partisan',
        description: 'Prosecutes felonies across Macomb County.',
        candidates: [
          { name: 'Peter Lucido', description: 'Incumbent prosecutor; former state senator', party: 'Republican', status: 'incumbent', grade: 'B' },
        ],
      },
      {
        id: 'macomb-clerk-2026', office: 'Macomb County Clerk / Register of Deeds', type: 'partisan',
        description: 'Manages elections, vital records, and property deeds.',
        candidates: [
          { name: 'Anthony Forlini', description: 'Incumbent clerk; former state representative', party: 'Republican', status: 'incumbent', grade: 'B', gradeNote: 'Republican incumbent; former state representative with conservative voting record' },
        ],
      },
      {
        id: 'macomb-treasurer-2026', office: 'Macomb County Treasurer', type: 'partisan',
        description: 'Collects property taxes and manages tax foreclosures.',
        candidates: [
          { name: 'Lawrence Rocca', description: 'Incumbent treasurer', party: 'Republican', status: 'incumbent', grade: 'B', gradeNote: 'Republican incumbent treasurer' },
        ],
      },
    ],
  },
  Kent: {
    officers: [
      {
        id: 'kent-sheriff-2026', office: 'Kent County Sheriff', type: 'partisan',
        description: 'Oversees county jail and law enforcement operations in West Michigan.',
        candidates: [
          { name: 'Michelle LaJoye-Young', description: 'Incumbent sheriff; first woman to hold the office', party: 'Republican', status: 'incumbent', grade: 'B', gradeNote: 'Republican sheriff; law enforcement leadership aligns with conservative priorities' },
        ],
      },
      {
        id: 'kent-prosecutor-2026', office: 'Kent County Prosecuting Attorney', type: 'partisan',
        description: 'Prosecutes felonies in Kent County, including Grand Rapids.',
        candidates: [
          { name: 'Chris Becker', description: 'Incumbent prosecutor', party: 'Republican', status: 'incumbent', grade: 'B', gradeNote: 'Republican prosecutor; law-and-order approach' },
        ],
      },
      {
        id: 'kent-clerk-2026', office: 'Kent County Clerk / Register of Deeds', type: 'partisan',
        description: 'Manages elections, court records, and property deeds.',
        candidates: [
          { name: 'Lisa Posthumus Lyons', description: 'Incumbent; former state representative, Lt. Gov. nominee', party: 'Republican', status: 'incumbent', grade: 'A' },
        ],
      },
      {
        id: 'kent-treasurer-2026', office: 'Kent County Treasurer', type: 'partisan',
        description: 'Collects property taxes and manages county investments.',
        candidates: [
          { name: 'Peter MacGregor', description: 'Incumbent treasurer; former state senator', party: 'Republican', status: 'incumbent', grade: 'B' },
        ],
      },
    ],
  },
  Washtenaw: {
    officers: [
      {
        id: 'washtenaw-sheriff-2026', office: 'Washtenaw County Sheriff', type: 'partisan',
        description: 'Oversees county jail and law enforcement.',
        candidates: [
          { name: 'Alyshia Dyer', description: 'Incumbent sheriff', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic sheriff in progressive Washtenaw County' },
        ],
      },
      {
        id: 'washtenaw-prosecutor-2026', office: 'Washtenaw County Prosecuting Attorney', type: 'partisan',
        description: 'Prosecutes felonies across Washtenaw County.',
        candidates: [
          { name: 'Eli Savit', description: 'Incumbent; progressive prosecutor, restorative justice focus', party: 'Democratic', status: 'incumbent', grade: 'F', gradeNote: 'Explicitly progressive prosecutor with restorative justice focus; actively works against traditional law-and-order approach' },
        ],
      },
      {
        id: 'washtenaw-clerk-2026', office: 'Washtenaw County Clerk / Register of Deeds', type: 'partisan',
        description: 'Manages elections and vital records.',
        candidates: [
          { name: 'Lawrence Kestenbaum', description: 'Incumbent; long-serving clerk', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Long-serving Democratic clerk in progressive county' },
        ],
      },
      {
        id: 'washtenaw-treasurer-2026', office: 'Washtenaw County Treasurer', type: 'partisan',
        description: 'Collects property taxes.',
        candidates: [
          { name: 'Catherine McClary', description: 'Incumbent treasurer', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic incumbent treasurer' },
        ],
      },
    ],
  },
  Genesee: {
    officers: [
      {
        id: 'genesee-sheriff-2026', office: 'Genesee County Sheriff', type: 'partisan',
        description: 'Oversees county jail and law enforcement for Flint area.',
        candidates: [
          { name: 'Christopher Swanson', description: 'Incumbent sheriff', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic sheriff; no strong law-and-order signaling beyond baseline' },
        ],
      },
      {
        id: 'genesee-prosecutor-2026', office: 'Genesee County Prosecuting Attorney', type: 'partisan',
        description: 'Prosecutes felonies across Genesee County.',
        candidates: [
          { name: 'David Leyton', description: 'Incumbent; long-serving prosecutor', party: 'Democratic', status: 'incumbent', grade: 'C', gradeNote: 'Long-serving Democratic prosecutor; more traditional than reform-oriented peers' },
        ],
      },
    ],
  },
  Ingham: {
    officers: [
      {
        id: 'ingham-sheriff-2026', office: 'Ingham County Sheriff', type: 'partisan',
        description: 'Oversees county jail and law enforcement in Lansing area.',
        candidates: [
          { name: 'Scott Wriggelsworth', description: 'Incumbent sheriff', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic sheriff in Lansing-area county' },
        ],
      },
      {
        id: 'ingham-prosecutor-2026', office: 'Ingham County Prosecuting Attorney', type: 'partisan',
        description: 'Prosecutes felonies in Ingham County.',
        candidates: [
          { name: 'John Dewane', description: 'Incumbent prosecutor', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic prosecutor' },
        ],
      },
    ],
  },
  Ottawa: {
    officers: [
      {
        id: 'ottawa-sheriff-2026', office: 'Ottawa County Sheriff', type: 'partisan',
        description: 'Oversees law enforcement in Ottawa County.',
        candidates: [
          { name: 'Steve Kempker', description: 'Incumbent sheriff', party: 'Republican', status: 'incumbent', grade: 'B', gradeNote: 'Republican sheriff in conservative Ottawa County; law enforcement leadership' },
        ],
      },
      {
        id: 'ottawa-prosecutor-2026', office: 'Ottawa County Prosecuting Attorney', type: 'partisan',
        description: 'Prosecutes felonies in Ottawa County.',
        candidates: [
          { name: 'Lee Fisher', description: 'Incumbent prosecutor', party: 'Republican', status: 'incumbent', grade: 'B', gradeNote: 'Republican prosecutor; law-and-order approach' },
        ],
      },
    ],
  },
  Livingston: {
    officers: [
      {
        id: 'livingston-sheriff-2026', office: 'Livingston County Sheriff', type: 'partisan',
        description: 'Oversees county jail and law enforcement.',
        candidates: [
          { name: 'Michael Murphy', description: 'Incumbent sheriff', party: 'Republican', status: 'incumbent', grade: 'B', gradeNote: 'Republican sheriff in conservative Livingston County' },
        ],
      },
      {
        id: 'livingston-prosecutor-2026', office: 'Livingston County Prosecuting Attorney', type: 'partisan',
        description: 'Prosecutes felonies in Livingston County.',
        candidates: [
          { name: 'David Reader', description: 'Incumbent prosecutor', party: 'Republican', status: 'incumbent', grade: 'B', gradeNote: 'Republican prosecutor; law-and-order approach' },
        ],
      },
    ],
  },
  Kalamazoo: {
    officers: [
      {
        id: 'kalamazoo-sheriff-2026', office: 'Kalamazoo County Sheriff', type: 'partisan',
        description: 'Oversees county jail and law enforcement.',
        candidates: [
          { name: 'Richard Fuller', description: 'Incumbent sheriff', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic sheriff' },
        ],
      },
      {
        id: 'kalamazoo-prosecutor-2026', office: 'Kalamazoo County Prosecuting Attorney', type: 'partisan',
        description: 'Prosecutes felonies in Kalamazoo County.',
        candidates: [
          { name: 'Jeff Getting', description: 'Incumbent prosecutor', party: 'Democratic', status: 'incumbent', grade: 'D', gradeNote: 'Democratic prosecutor' },
        ],
      },
    ],
  },
}

// ── Helper: Assemble November local ballot races ────────────────
// Combines hardcoded race data (above) with dynamic lookups from
// michiganCounties.js, michiganLocal.js so every municipality in
// the system gets November ballot races automatically.

import MI_COUNTIES from './michiganCounties'
import {
  MI_CITY_OFFICIALS,
  MI_SCHOOL_BOARDS,
  MI_VILLAGE_OFFICIALS,
} from './michiganLocal'

export function getNovemberLocalRaces(geo) {
  if (!geo) return []
  const races = []
  const county = geo.county?.replace(/ County$/i, '')
  const schoolDist = geo.schoolDistrict
  const place = geo.place || ''
  const sub = geo.countySubdivision || ''

  // ─── COUNTY-LEVEL (all 83 counties) ─────────────────────

  // County commissioner (2-year terms, every even year, all 83 counties)
  if (county) {
    const commData = COUNTY_COMMISSIONER_RACES_2026[county]
    races.push({
      id: `county-commission-${county.toLowerCase().replace(/[\s.]+/g, '-')}`,
      office: `${county} County Commissioner`,
      level: 'County',
      description: commData
        ? commData.description
        : 'County commissioners serve 2-year terms. All seats on the ballot.',
      note: commData
        ? `${commData.totalSeats} total districts — find your district at your county clerk's office`
        : 'Find your district at your county clerk\'s office',
      candidates: [],
      type: 'partisan',
      allowWrite: true,
      localOffice: true,
      category: 'municipal',
    })
  }

  // County officers from hardcoded data (sheriff, prosecutor, clerk, treasurer)
  if (county && COUNTY_OFFICER_RACES_2026[county]) {
    COUNTY_OFFICER_RACES_2026[county].officers.forEach(officer => {
      races.push({
        id: officer.id,
        office: officer.office,
        level: 'County',
        description: officer.description,
        candidates: officer.candidates,
        type: officer.type,
        allowWrite: true,
        localOffice: true,
        category: 'municipal',
      })
    })
  } else if (county && MI_COUNTIES[county]) {
    // Dynamic fallback: generate county officer races from michiganCounties.js
    const countyData = MI_COUNTIES[county]
    const officerTitles = ['Sheriff', 'Prosecuting Attorney', 'Clerk', 'Treasurer', 'Register of Deeds', 'Drain Commissioner']
    const descriptions = {
      'Sheriff': 'Oversees county jail, court security, and law enforcement. Partisan — 4-year term.',
      'Prosecuting Attorney': 'Chief law enforcement officer. Decides which criminal cases to prosecute. Partisan — 4-year term.',
      'Clerk': 'Manages elections, vital records, and county documents. Partisan — 4-year term.',
      'Treasurer': 'Collects property taxes and manages county investments. Partisan — 4-year term.',
      'Register of Deeds': 'Records property transactions and maintains land records. Partisan — 4-year term.',
      'Drain Commissioner': 'Manages county drainage systems and stormwater. Partisan — 4-year term.',
    }
    countyData.officials.forEach(official => {
      const matchedTitle = officerTitles.find(t => official.title.includes(t))
      if (!matchedTitle) return
      const slug = matchedTitle.toLowerCase().replace(/\s+/g, '-')
      races.push({
        id: `${county.toLowerCase().replace(/[\s.]+/g, '-')}-${slug}-2026`,
        office: `${county} County ${matchedTitle}`,
        level: 'County',
        description: descriptions[matchedTitle] || `${matchedTitle} — 4-year term, partisan.`,
        candidates: [{
          name: official.name,
          description: `Incumbent ${matchedTitle.toLowerCase()}`,
          party: official.party,
          status: 'incumbent',
          grade: null,
        }],
        type: 'partisan',
        allowWrite: true,
        localOffice: true,
        category: 'municipal',
      })
    })
  }

  // ─── CITY MUNICIPAL (even-year cities only) ──────────────────

  if (place) {
    const cityKey = Object.keys(CITY_MUNICIPAL_RACES_2026).find(k =>
      place.toLowerCase().includes(k.toLowerCase()) ||
      k.toLowerCase() === place.replace(/ city$/i, '').toLowerCase()
    )
    const cityData = cityKey ? CITY_MUNICIPAL_RACES_2026[cityKey] : null
    if (cityData) {
      cityData.races.forEach(race => {
        const slug = race.office.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        races.push({
          id: `city-${cityKey.toLowerCase().replace(/\s+/g, '-')}-${slug}`,
          office: `${cityKey} ${race.office}`,
          level: 'Local',
          description: `City of ${cityKey} — nonpartisan general election.`,
          candidates: race.candidates.map(c => ({
            name: c.name,
            description: c.description || '',
            party: c.party,
            status: c.status || null,
            grade: null,
          })),
          type: 'nonpartisan',
          allowWrite: true,
          localOffice: true,
          category: 'municipal',
        })
      })
    }
  }

  // ─── VILLAGE COUNCIL (even-year elections per MCL 168.642) ──

  // Check hardcoded village data first, then fallback to michiganLocal.js
  if (place || sub) {
    const loc = place || sub
    const villageKey = Object.keys(VILLAGE_COUNCIL_RACES_2026).find(k =>
      k.toLowerCase() === loc.toLowerCase() ||
      loc.toLowerCase().includes(k.toLowerCase())
    )
    const village = villageKey ? VILLAGE_COUNCIL_RACES_2026[villageKey] : null
    if (village && !village.skip) {
      races.push({
        id: `village-council-${villageKey.toLowerCase().replace(/\s+/g, '-')}`,
        office: `Village of ${villageKey} — Council`,
        level: 'Local',
        description: village.description,
        note: village.offices.join(', '),
        candidates: village.candidates,
        type: 'nonpartisan',
        allowWrite: true,
        localOffice: true,
        category: 'municipal',
      })
    } else {
      // Dynamic fallback: check if this is a village in michiganLocal.js
      const locStripped = loc.replace(/ village$/i, '').replace(/ city$/i, '')
      const villageData = MI_VILLAGE_OFFICIALS[loc] || MI_VILLAGE_OFFICIALS[locStripped]
      if (villageData) {
        const villageName = place || sub
        const villageCandidates = villageData.officials
          ? villageData.officials.map(o => ({
              name: o.name,
              description: `Current ${o.title.toLowerCase()}`,
              status: 'incumbent',
              grade: null,
            }))
          : []
        races.push({
          id: `village-council-${villageName.toLowerCase().replace(/\s+/g, '-')}`,
          office: `Village of ${villageName} — Council`,
          level: 'Local',
          description: 'Village president and trustee seats. Nonpartisan — Michigan villages elect in even-numbered years.',
          note: villageCandidates.length > 0
            ? `${villageCandidates.length} current members — check your clerk for which seats are on the ballot`
            : 'Village President, Trustee seats',
          candidates: villageCandidates,
          type: 'nonpartisan',
          allowWrite: true,
          localOffice: true,
          category: 'municipal',
        })
      }
    }
  }

  // ─── EDUCATION ─────────────────────────────────────────────

  // School board races — hardcoded data first, then dynamic from MI_SCHOOL_BOARDS
  if (schoolDist) {
    const normalizeSchool = (s) => s.toLowerCase()
      .replace(/ school district$/i, '').replace(/ public schools community district$/i, '')
      .replace(/ public schools$/i, '').replace(/ community schools$/i, '')
      .replace(/ area schools$/i, '').replace(/ city$/i, '').trim()
    const schoolKey = Object.keys(SCHOOL_BOARD_RACES_2026).find(k => {
      const nk = normalizeSchool(k)
      const ns = normalizeSchool(schoolDist)
      return ns.includes(nk) || nk.includes(ns) || ns === nk
    })
    const schoolRace = schoolKey ? SCHOOL_BOARD_RACES_2026[schoolKey] : null

    if (schoolRace) {
      races.push({
        id: `school-board-${schoolKey}`,
        office: `${schoolRace.district || schoolDist} — School Board`,
        level: 'Local',
        description: schoolRace.description,
        note: schoolRace.seats ? `${schoolRace.seats} seat${schoolRace.seats > 1 ? 's' : ''} on the ballot` : null,
        candidates: schoolRace.candidates,
        type: 'nonpartisan',
        allowWrite: true,
        localOffice: true,
        category: 'education',
      })
    } else {
      // Dynamic: generate from MI_SCHOOL_BOARDS with incumbent members as candidates
      const boardKey = Object.keys(MI_SCHOOL_BOARDS).find(k =>
        schoolDist.toLowerCase().includes(k.toLowerCase()) ||
        k.toLowerCase().includes(schoolDist.toLowerCase().replace(/ school district$/i, '').trim())
      )
      const boardData = boardKey ? MI_SCHOOL_BOARDS[boardKey] : null
      const boardCandidates = boardData?.officials
        ? boardData.officials.map(o => ({
            name: o.name,
            description: `Current ${o.title.toLowerCase()}`,
            status: 'incumbent',
            grade: null,
          }))
        : []
      races.push({
        id: `school-board-${(boardKey || schoolDist).toLowerCase().replace(/\s+/g, '-')}`,
        office: `${boardKey || schoolDist} — School Board`,
        level: 'Local',
        description: boardData
          ? `School board election. ${boardData.officials?.length || 7}-member board. Nonpartisan — all voters can vote.`
          : 'School board seats up for election. Nonpartisan — all voters can vote.',
        note: boardCandidates.length > 0
          ? `${boardData.officials.length}-member board — check your local clerk for which seats are on the ballot`
          : 'Seats on the ballot — check your local clerk for exact count',
        candidates: boardCandidates,
        type: 'nonpartisan',
        allowWrite: true,
        localOffice: true,
        category: 'education',
      })
    }
  }

  // Community college boards
  if (county && COMMUNITY_COLLEGE_RACES_2026[county]) {
    COMMUNITY_COLLEGE_RACES_2026[county].colleges.forEach(college => {
      races.push({
        id: college.id,
        office: `${college.name} — Board of Trustees`,
        level: 'Local',
        description: college.description,
        note: `${college.seats} seat${college.seats > 1 ? 's' : ''} on the ballot`,
        candidates: college.candidates,
        type: 'nonpartisan',
        allowWrite: true,
        localOffice: true,
        category: 'education',
      })
    })
  }

  // ─── JUDICIAL ──────────────────────────────────────────────

  // Circuit court races
  if (county && CIRCUIT_COURT_RACES_2026[county]) {
    CIRCUIT_COURT_RACES_2026[county].forEach(race => {
      races.push({
        id: race.id,
        office: race.office,
        level: 'Judicial',
        description: race.description,
        note: `${race.seats} seat${race.seats > 1 ? 's' : ''} on the ballot`,
        candidates: race.candidates,
        type: 'nonpartisan',
        allowWrite: true,
        localOffice: true,
        category: 'judicial',
      })
    })
  }

  // Probate court races
  if (county && PROBATE_COURT_RACES_2026[county]) {
    PROBATE_COURT_RACES_2026[county].forEach(race => {
      races.push({
        id: race.id,
        office: race.office,
        level: 'Judicial',
        description: race.description,
        note: `${race.seats} seat${race.seats > 1 ? 's' : ''} on the ballot`,
        candidates: race.candidates,
        type: 'nonpartisan',
        allowWrite: true,
        localOffice: true,
        category: 'judicial',
      })
    })
  }

  // District court races
  if (county && DISTRICT_COURT_RACES_2026[county]) {
    DISTRICT_COURT_RACES_2026[county].forEach(race => {
      races.push({
        id: race.id,
        office: race.office,
        level: 'Judicial',
        description: race.description,
        note: `${race.seats} seat${race.seats > 1 ? 's' : ''} on the ballot`,
        candidates: race.candidates,
        type: 'nonpartisan',
        allowWrite: true,
        localOffice: true,
        category: 'judicial',
      })
    })
  }

  // ─── LIBRARY ───────────────────────────────────────────────

  if (county) {
    Object.entries(LIBRARY_BOARD_RACES_2026).forEach(([name, lib]) => {
      if (lib.county === county) {
        races.push({
          id: lib.id,
          office: `${name} — Board of Trustees`,
          level: 'Local',
          description: lib.description,
          note: `${lib.seats} seat${lib.seats > 1 ? 's' : ''} on the ballot`,
          candidates: lib.candidates,
          type: 'nonpartisan',
          allowWrite: true,
          localOffice: true,
          category: 'library',
        })
      }
    })
  }

  return races
}
