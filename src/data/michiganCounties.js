/**
 * Michigan county elected officials — all 83 counties.
 *
 * Each county includes county-wide elected officials (Prosecutor, Sheriff,
 * Clerk, Treasurer, Drain/Water Resources Commissioner) plus Board of
 * Commissioners where available.
 *
 * Sources: PAAM directory, Michigan Sheriffs' Association, individual county
 * websites, verified April 2026.
 */

const MI_COUNTIES = {
  Alcona: {
    name: 'Alcona County',
    seat: 'Harrisville',
    website: 'https://www.alconacountymi.com',
    phone: '989-724-9410',
    officials: [
      { name: 'Elizabeth A. Reed', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Scott Stephenson', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Alger: {
    name: 'Alger County',
    seat: 'Munising',
    website: 'https://algercounty.gov',
    phone: '906-387-2076',
    officials: [
      { name: 'Robert T. Steinhoff', title: 'Prosecuting Attorney', party: null },
      { name: 'Todd Brock', title: 'Sheriff', party: null },
    ],
  },

  Allegan: {
    name: 'Allegan County',
    seat: 'Allegan',
    website: 'https://www.allegancounty.org',
    phone: '269-673-0450',
    officials: [
      { name: 'Michael Villar', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Frank Baker', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Alpena: {
    name: 'Alpena County',
    seat: 'Alpena',
    website: 'https://www.alpenacounty.org',
    phone: '989-354-9520',
    officials: [
      { name: 'Cynthia M. Muszynski', title: 'Prosecuting Attorney', party: null },
      { name: 'Erik Smith', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Antrim: {
    name: 'Antrim County',
    seat: 'Bellaire',
    website: 'https://www.antrimcountymi.gov',
    phone: '231-533-6353',
    officials: [
      { name: 'Wilson D. Brott', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Kevin Hoch', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Arenac: {
    name: 'Arenac County',
    seat: 'Standish',
    website: 'https://www.arenaccountymi.gov',
    phone: '989-846-4626',
    officials: [
      { name: 'Curtis G. Broughton', title: 'Prosecuting Attorney', party: null },
      { name: 'James Mosciski', title: 'Sheriff', party: null },
    ],
  },

  Baraga: {
    name: 'Baraga County',
    seat: "L'Anse",
    website: 'https://www.baragacounty.org',
    phone: '906-524-6183',
    officials: [
      { name: "Joseph P. O'Leary", title: 'Prosecuting Attorney', party: null },
      { name: 'Joe Brogan', title: 'Sheriff', party: null },
    ],
  },

  Barry: {
    name: 'Barry County',
    seat: 'Hastings',
    website: 'https://www.barrycounty.org',
    phone: '269-945-1290',
    officials: [
      { name: 'Julie A. Nakfoor Pratt', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Dar Leaf', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Bay: {
    name: 'Bay County',
    seat: 'Bay City',
    website: 'https://www.baycountymi.gov',
    phone: '989-895-4000',
    officials: [
      { name: 'Michael P. Kanuszewski', title: 'Prosecuting Attorney', party: null },
      { name: 'Troy Cunningham', title: 'Sheriff', party: null },
    ],
  },

  Benzie: {
    name: 'Benzie County',
    seat: 'Beulah',
    website: 'https://www.benzieco.net',
    phone: '231-882-9671',
    officials: [
      { name: 'Sara M. Swanson', title: 'Prosecuting Attorney', party: null },
      { name: 'Kyle Rosa', title: 'Sheriff', party: null },
    ],
  },

  Berrien: {
    name: 'Berrien County',
    seat: 'St. Joseph',
    website: 'https://www.berriencounty.org',
    phone: '269-983-7111',
    officials: [
      { name: 'Amy R. Byrd', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Charles Heit', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Branch: {
    name: 'Branch County',
    seat: 'Coldwater',
    website: 'https://branchcounty.gov',
    phone: '517-279-4301',
    officials: [
      { name: 'Zachary W. Stempien', title: 'Prosecuting Attorney', party: null },
      { name: 'Fred Blankenship', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Calhoun: {
    name: 'Calhoun County',
    seat: 'Marshall',
    website: 'https://www.calhouncountymi.gov',
    phone: '269-781-0730',
    officials: [
      { name: 'David E. Gilbert', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Steve Hinkley', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Cass: {
    name: 'Cass County',
    seat: 'Cassopolis',
    website: 'https://www.casscountymi.org',
    phone: '269-445-4454',
    officials: [
      { name: 'Victor A. Fitz', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Clinton D. Roach', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Charlevoix: {
    name: 'Charlevoix County',
    seat: 'Charlevoix',
    website: 'https://www.charlevoixcounty.org',
    phone: '231-547-7200',
    officials: [
      { name: 'Christopher D. Tholen', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Charles Vondra', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Cheboygan: {
    name: 'Cheboygan County',
    seat: 'Cheboygan',
    website: 'https://www.cheboygancounty.net',
    phone: '231-627-8808',
    officials: [
      { name: 'Melissa M. Goodrich', title: 'Prosecuting Attorney', party: null },
      { name: 'Todd Ross', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Chippewa: {
    name: 'Chippewa County',
    seat: 'Sault Ste. Marie',
    website: 'https://www.chippewacountymi.gov',
    phone: '906-635-6300',
    officials: [
      { name: 'Robert L. Stratton III', title: 'Prosecuting Attorney', party: null },
      { name: 'Michael D. Bitnar', title: 'Sheriff', party: null },
    ],
  },

  Clare: {
    name: 'Clare County',
    seat: 'Harrison',
    website: 'https://www.clareco.net',
    phone: '989-539-7131',
    officials: [
      { name: 'Andrew J. Santini', title: 'Prosecuting Attorney', party: null },
      { name: 'John Wilson', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Clinton: {
    name: 'Clinton County',
    seat: 'St. Johns',
    website: 'https://www.clinton-county.org',
    phone: '989-224-5120',
    officials: [
      { name: 'Anthony M. Spagnuolo', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Sean Dush', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Crawford: {
    name: 'Crawford County',
    seat: 'Grayling',
    website: 'https://www.crawfordco.org',
    phone: '989-344-3200',
    officials: [
      { name: 'Sierra R. Koch', title: 'Prosecuting Attorney', party: null },
      { name: 'Ryan Swope', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Delta: {
    name: 'Delta County',
    seat: 'Escanaba',
    website: 'https://www.deltacountymi.org',
    phone: '906-789-5100',
    officials: [
      { name: 'Lauren M. Wickman', title: 'Prosecuting Attorney', party: null },
      { name: 'Todd Tardiff', title: 'Sheriff', party: null },
    ],
  },

  Dickinson: {
    name: 'Dickinson County',
    seat: 'Iron Mountain',
    website: 'https://www.dickinsoncountymi.gov',
    phone: '906-774-0988',
    officials: [
      { name: 'Abbey Anderson', title: 'Prosecuting Attorney', party: null },
      { name: 'Aaron Rochon', title: 'Sheriff', party: null },
    ],
  },

  Eaton: {
    name: 'Eaton County',
    seat: 'Charlotte',
    website: 'https://www.eatoncounty.org',
    phone: '517-543-7500',
    officials: [
      { name: 'Douglas R. Lloyd', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Tom Reich', title: 'Sheriff', party: 'Republican' },
      // Board of Commissioners (15 districts)
      { name: 'Jim Mott', title: 'Board Chair (District 13)', party: null, district: 13 },
      { name: 'Brian Droscha', title: 'Vice Chair (District 9)', party: null, district: 9 },
      { name: 'Andy Shaver', title: 'Commissioner (District 1)', party: null, district: 1 },
      { name: 'Chris Arndt', title: 'Commissioner (District 2)', party: null, district: 2 },
      { name: 'Jason Peek', title: 'Commissioner (District 3)', party: null, district: 3 },
      { name: 'Brandon Haskell', title: 'Commissioner (District 4)', party: null, district: 4 },
      { name: 'Jeanne Pearl-Wright', title: 'Commissioner (District 5)', party: null, district: 5 },
      { name: 'Jane M. Whitacre', title: 'Commissioner (District 6)', party: null, district: 6 },
      { name: 'Mark Mudry', title: 'Commissioner (District 7)', party: null, district: 7 },
      { name: 'Kyle Jones', title: 'Commissioner (District 8)', party: null, district: 8 },
      { name: 'Jacob Toomey', title: 'Commissioner (District 10)', party: null, district: 10 },
      { name: 'Scott Hansen', title: 'Commissioner (District 11)', party: null, district: 11 },
      { name: 'Nicole Christensen', title: 'Commissioner (District 12)', party: null, district: 12 },
      { name: 'Frank Holmes', title: 'Commissioner (District 14)', party: null, district: 14 },
      { name: 'Keith Barber', title: 'Commissioner (District 15)', party: null, district: 15 },
    ],
  },

  Emmet: {
    name: 'Emmet County',
    seat: 'Petoskey',
    website: 'https://www.emmetcounty.org',
    phone: '231-348-1700',
    officials: [
      { name: 'Michael H. Schuitema', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Matt Leirstein', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Genesee: {
    name: 'Genesee County',
    seat: 'Flint',
    website: 'https://www.gc4me.com',
    phone: '810-257-3010',
    officials: [
      { name: 'David S. Leyton', title: 'Prosecuting Attorney', party: 'Democratic' },
      { name: 'Christopher Swanson', title: 'Sheriff', party: 'Democratic' },
      { name: 'Domonique Clemons', title: 'Clerk', party: 'Democratic' },
      { name: 'Sheldon Neeley', title: 'Treasurer', party: 'Democratic' },
      { name: 'Debra Newman', title: 'Drain Commissioner', party: 'Democratic' },
      // Board of Commissioners (9 districts)
      { name: 'Bryant Nolden', title: 'Board Chair (District 4)', party: 'Democratic', district: 4 },
      { name: 'Martin Cousineau', title: 'Commissioner (District 1)', party: 'Republican', district: 1 },
      { name: 'Charles Winfrey', title: 'Commissioner (District 2)', party: 'Democratic', district: 2 },
      { name: 'Shaun Shumaker', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'James Avery', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
      { name: 'Meredith Davis', title: 'Commissioner (District 6)', party: 'Democratic', district: 6 },
      { name: 'Ellen Ellenburg', title: 'Commissioner (District 7)', party: 'Democratic', district: 7 },
      { name: 'Brenda Clack', title: 'Commissioner (District 8)', party: 'Democratic', district: 8 },
      { name: 'Gary Peppin', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
    ],
  },

  Gladwin: {
    name: 'Gladwin County',
    seat: 'Gladwin',
    website: 'https://www.gladwinco.com',
    phone: '989-426-7351',
    officials: [
      { name: 'Mark A. Toaz', title: 'Prosecuting Attorney', party: null },
      { name: 'Mike Shea', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Gogebic: {
    name: 'Gogebic County',
    seat: 'Bessemer',
    website: 'https://www.gogebic.org',
    phone: '906-663-4518',
    officials: [
      { name: 'Nicholas J. Jacobs', title: 'Prosecuting Attorney', party: null },
      { name: 'Jorge Cruz', title: 'Sheriff', party: null },
    ],
  },

  'Grand Traverse': {
    name: 'Grand Traverse County',
    seat: 'Traverse City',
    website: 'https://www.grandtraverse.org',
    phone: '231-922-4500',
    officials: [
      { name: 'Noelle A. Moeggenberg', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Michael D. Shea', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Gratiot: {
    name: 'Gratiot County',
    seat: 'Ithaca',
    website: 'https://www.gratiotmi.com',
    phone: '989-875-5215',
    officials: [
      { name: 'Laura M. Bever', title: 'Prosecuting Attorney', party: null },
      { name: 'Michael Morris', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Hillsdale: {
    name: 'Hillsdale County',
    seat: 'Hillsdale',
    website: 'https://www.co.hillsdale.mi.us',
    phone: '517-437-3391',
    officials: [
      { name: 'Jamie J. Wisniewski', title: 'Prosecuting Attorney', party: null },
      { name: 'Scott B. Hodshire', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Houghton: {
    name: 'Houghton County',
    seat: 'Houghton',
    website: 'https://www.houghtoncounty.net',
    phone: '906-482-1150',
    officials: [
      { name: 'Daniel J. Helmer', title: 'Prosecuting Attorney', party: null },
      { name: 'Joshua Saaranen', title: 'Sheriff', party: null },
    ],
  },

  Huron: {
    name: 'Huron County',
    seat: 'Bad Axe',
    website: 'https://www.co.huron.mi.us',
    phone: '989-269-9944',
    officials: [
      { name: 'Timothy J. Rutkowski', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Kelly Hanson', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Ingham: {
    name: 'Ingham County',
    seat: 'Mason',
    website: 'https://www.ingham.org',
    phone: '517-676-7200',
    officials: [
      { name: 'John J. Dewane', title: 'Prosecuting Attorney', party: 'Democratic' },
      { name: 'Scott Wriggelsworth', title: 'Sheriff', party: 'Democratic' },
      { name: 'Barb Byrum', title: 'Clerk', party: 'Democratic' },
      { name: 'Alan Fox', title: 'Treasurer', party: 'Democratic' },
      { name: 'Patrick Lindemann', title: 'Drain Commissioner', party: 'Democratic' },
      // Board of Commissioners (14 districts)
      { name: 'Ryan Sebolt', title: 'Board Chair (District 4)', party: 'Democratic', district: 4 },
      { name: 'Chris Trubac', title: 'Vice Chair (District 1)', party: 'Democratic', district: 1 },
      { name: 'Randy Schafer', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Derrell Slaughter', title: 'Commissioner (District 3)', party: 'Democratic', district: 3 },
      { name: 'Todd Tennis', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
      { name: 'Victor Celentino', title: 'Commissioner (District 6)', party: 'Democratic', district: 6 },
      { name: 'Thomas Morgan', title: 'Commissioner (District 7)', party: 'Democratic', district: 7 },
      { name: 'Carol Koenig', title: 'Commissioner (District 8)', party: 'Democratic', district: 8 },
      { name: 'Robin Naeyaert', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
      { name: 'Mark Grebner', title: 'Commissioner (District 10)', party: 'Democratic', district: 10 },
      { name: 'Emily Stivers', title: 'Commissioner (District 11)', party: 'Democratic', district: 11 },
      { name: 'Mark Polsdofer', title: 'Commissioner (District 12)', party: 'Democratic', district: 12 },
      { name: 'Irwin Groh', title: 'Commissioner (District 13)', party: 'Republican', district: 13 },
      { name: 'Monica Schafer', title: 'Commissioner (District 14)', party: 'Republican', district: 14 },
    ],
  },

  Ionia: {
    name: 'Ionia County',
    seat: 'Ionia',
    website: 'https://www.ioniacounty.org',
    phone: '616-527-5322',
    officials: [
      { name: 'Kyle B. Butler', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Charlie Noll', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Iosco: {
    name: 'Iosco County',
    seat: 'Tawas City',
    website: 'https://www.ioscocountymi.gov',
    phone: '989-362-3497',
    officials: [
      { name: 'James A. Bacarella', title: 'Prosecuting Attorney', party: null },
      { name: 'Scott Frank', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Iron: {
    name: 'Iron County',
    seat: 'Crystal Falls',
    website: 'https://www.iron.org',
    phone: '906-875-3221',
    officials: [
      { name: 'Chad A. DeRouin', title: 'Prosecuting Attorney', party: null },
      { name: 'Ryan Boehmke', title: 'Sheriff', party: null },
    ],
  },

  Isabella: {
    name: 'Isabella County',
    seat: 'Mt. Pleasant',
    website: 'https://www.isabellacounty.org',
    phone: '989-772-0911',
    officials: [
      { name: 'Mark G. Kowalczyk', title: 'Prosecuting Attorney', party: null },
      { name: 'Michael Main', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Jackson: {
    name: 'Jackson County',
    seat: 'Jackson',
    website: 'https://www.co.jackson.mi.us',
    phone: '517-788-4264',
    officials: [
      { name: 'Kelsey A. Guernsey', title: 'Prosecuting Attorney', party: null },
      { name: 'Gary Schuette', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Kalamazoo: {
    name: 'Kalamazoo County',
    seat: 'Kalamazoo',
    website: 'https://www.kalcounty.gov',
    phone: '269-383-8840',
    officials: [
      { name: 'Jeffrey S. Getting', title: 'Prosecuting Attorney', party: 'Democratic' },
      { name: 'Richard Fuller', title: 'Sheriff', party: 'Democratic' },
      { name: 'Meredith Place', title: 'Clerk/Register of Deeds', party: 'Democratic' },
      { name: 'Thomas Whitener', title: 'Treasurer', party: 'Democratic' },
      // Board of Commissioners (9 districts)
      { name: 'Tracy Hall', title: 'Board Chair (District 5)', party: 'Democratic', district: 5 },
      { name: 'Stephanie Moore', title: 'Vice Chair (District 1)', party: 'Democratic', district: 1 },
      { name: 'Tami Rey', title: 'Commissioner (District 2)', party: 'Democratic', district: 2 },
      { name: 'Monteze Morales', title: 'Commissioner (District 3)', party: 'Democratic', district: 3 },
      { name: 'Jennifer Strebs', title: 'Commissioner (District 4)', party: 'Democratic', district: 4 },
      { name: 'Roger Tuinier', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Dale Shugars', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Christine Morse', title: 'Commissioner (District 8)', party: 'Democratic', district: 8 },
      { name: 'Mike Quinn', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
    ],
  },

  Kalkaska: {
    name: 'Kalkaska County',
    seat: 'Kalkaska',
    website: 'https://www.kalkaskacounty.net',
    phone: '231-258-3300',
    officials: [
      { name: 'Ryan S. Ziegler', title: 'Prosecuting Attorney', party: null },
      { name: 'Patrick Whiteford', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Kent: {
    name: 'Kent County',
    seat: 'Grand Rapids',
    website: 'https://www.kentcountymi.gov',
    phone: '616-632-7500',
    officials: [
      { name: 'Christopher R. Becker', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Michelle LaJoye-Young', title: 'Sheriff', party: 'Republican' },
      { name: 'Lisa Posthumus Lyons', title: 'Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Peter MacGregor', title: 'Treasurer', party: 'Republican' },
      { name: 'Ken Yonker', title: 'Drain Commissioner', party: 'Republican' },
    ],
  },

  Keweenaw: {
    name: 'Keweenaw County',
    seat: 'Eagle River',
    website: 'https://www.keweenawcountyonline.org',
    phone: '906-337-2229',
    officials: [
      { name: 'Charles W. Miller', title: 'Prosecuting Attorney', party: null },
      { name: 'Curt Pennala', title: 'Sheriff', party: null },
    ],
  },

  Lake: {
    name: 'Lake County',
    seat: 'Baldwin',
    website: 'https://www.lakecountymichigan.com',
    phone: '231-745-4641',
    officials: [
      { name: 'Thomas E. Evans', title: 'Prosecuting Attorney', party: null },
      { name: 'Rich Martin', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Lapeer: {
    name: 'Lapeer County',
    seat: 'Lapeer',
    website: 'https://www.lapeercountymi.gov',
    phone: '810-667-0381',
    officials: [
      { name: 'John D. Miller', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Scott McKenna', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Leelanau: {
    name: 'Leelanau County',
    seat: 'Suttons Bay',
    website: 'https://www.leelanau.gov',
    phone: '231-256-9824',
    officials: [
      { name: 'Joseph T. Hubbell', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Michael Borkovich', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Lenawee: {
    name: 'Lenawee County',
    seat: 'Adrian',
    website: 'https://www.lenawee.mi.us',
    phone: '517-264-4508',
    officials: [
      { name: 'Jacqueline V. Wyse', title: 'Prosecuting Attorney', party: null },
      { name: 'Troy Bevier', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Livingston: {
    name: 'Livingston County',
    seat: 'Howell',
    website: 'https://milivcounty.gov',
    phone: '517-546-0500',
    officials: [
      { name: 'Carolyn J. Henry', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Mike Murphy', title: 'Sheriff', party: 'Republican' },
      // Board of Commissioners (9 districts)
      { name: 'Nick Fiani', title: 'Board Chair (District 8)', party: 'Republican', district: 8 },
      { name: 'Jay Drick', title: 'Vice Chair (District 5)', party: 'Republican', district: 5 },
      { name: 'Douglas G. Helzerman', title: 'Commissioner (District 1)', party: 'Republican', district: 1 },
      { name: 'Dave Domas', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Frank Sample', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Wes Nakagiri', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Roger Deaton', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Melvin Paunovich', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Jerome Gross', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
    ],
  },

  Luce: {
    name: 'Luce County',
    seat: 'Newberry',
    website: 'https://www.lucecountymi.com',
    phone: '906-293-5521',
    officials: [
      { name: 'Lauren Dye Clark', title: 'Prosecuting Attorney', party: null },
      { name: 'Eric Gravelle', title: 'Sheriff', party: null },
    ],
  },

  Mackinac: {
    name: 'Mackinac County',
    seat: 'St. Ignace',
    website: 'https://www.mackinaccounty.net',
    phone: '906-643-7300',
    officials: [
      { name: 'J. Stuart Spencer', title: 'Prosecuting Attorney', party: null },
      { name: 'Edward Wilk', title: 'Sheriff', party: null },
    ],
  },

  Macomb: {
    name: 'Macomb County',
    seat: 'Mt. Clemens',
    website: 'https://www.macombgov.org',
    phone: '586-469-5125',
    officials: [
      { name: 'Peter J. Lucido', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Anthony Wickersham', title: 'Sheriff', party: 'Republican' },
      { name: 'Anthony Forlini', title: 'Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Lawrence Rocca', title: 'Treasurer', party: 'Republican' },
      { name: 'Mark Hackel', title: 'County Executive', party: 'Democratic' },
    ],
  },

  Manistee: {
    name: 'Manistee County',
    seat: 'Manistee',
    website: 'https://www.manisteecountymi.gov',
    phone: '231-723-6264',
    officials: [
      { name: 'Jonathon P. Hauswirth', title: 'Prosecuting Attorney', party: null },
      { name: 'Brian Gutowski', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Marquette: {
    name: 'Marquette County',
    seat: 'Marquette',
    website: 'https://www.marquettecountymi.gov',
    phone: '906-225-8330',
    officials: [
      { name: 'Jenna M. Nelson', title: 'Prosecuting Attorney', party: null },
      { name: 'Greg Zyburt', title: 'Sheriff', party: null },
    ],
  },

  Mason: {
    name: 'Mason County',
    seat: 'Ludington',
    website: 'https://www.masoncounty.net',
    phone: '231-843-8202',
    officials: [
      { name: 'Beth M. Hand', title: 'Prosecuting Attorney', party: null },
      { name: 'Kim Cole', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Mecosta: {
    name: 'Mecosta County',
    seat: 'Big Rapids',
    website: 'https://www.mecostacounty.org',
    phone: '231-592-0100',
    officials: [
      { name: 'Jonathan M. Peterson', title: 'Prosecuting Attorney', party: null },
      { name: 'Brian Miller', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Menominee: {
    name: 'Menominee County',
    seat: 'Menominee',
    website: 'https://www.menomineecounty.com',
    phone: '906-863-9968',
    officials: [
      { name: 'Jeffrey T. Rogg', title: 'Prosecuting Attorney', party: null },
      { name: 'Darrin Kudwa', title: 'Sheriff', party: null },
    ],
  },

  Midland: {
    name: 'Midland County',
    seat: 'Midland',
    website: 'https://www.co.midland.mi.us',
    phone: '989-832-6739',
    officials: [
      { name: 'J. Dee Brooks', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Scott Holzinger', title: 'Sheriff', party: 'Republican' },
      { name: 'Ann Manary', title: 'Clerk', party: 'Republican' },
      { name: 'Cathy Lunsford', title: 'Treasurer', party: 'Republican' },
    ],
  },

  Missaukee: {
    name: 'Missaukee County',
    seat: 'Lake City',
    website: 'https://www.missaukee.org',
    phone: '231-839-4967',
    officials: [
      { name: 'David A. DenHouten', title: 'Prosecuting Attorney', party: null },
      { name: 'Wil Yancer', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Monroe: {
    name: 'Monroe County',
    seat: 'Monroe',
    website: 'https://co.monroe.mi.us',
    phone: '734-240-7500',
    officials: [
      { name: 'Jeffery A. Yorkey', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Troy Goodnough', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Montcalm: {
    name: 'Montcalm County',
    seat: 'Stanton',
    website: 'https://www.montcalm.us',
    phone: '989-831-7339',
    officials: [
      { name: 'Thomas A. Ginster', title: 'Prosecuting Attorney', party: null },
      { name: 'Mike Williams', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Montmorency: {
    name: 'Montmorency County',
    seat: 'Atlanta',
    website: 'https://montmorencycounty.us',
    phone: '989-785-8022',
    officials: [
      { name: 'Vicki P. Kundinger', title: 'Prosecuting Attorney', party: null },
      { name: 'Chad Brown', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Muskegon: {
    name: 'Muskegon County',
    seat: 'Muskegon',
    website: 'https://www.co.muskegon.mi.us',
    phone: '231-724-6221',
    officials: [
      { name: 'D.J. Hilson', title: 'Prosecuting Attorney', party: 'Democratic' },
      { name: 'Michael Poulin', title: 'Sheriff', party: 'Democratic' },
    ],
  },

  Newaygo: {
    name: 'Newaygo County',
    seat: 'White Cloud',
    website: 'https://www.countyofnewaygo.com',
    phone: '231-689-7200',
    officials: [
      { name: 'Rachel F. Robinson', title: 'Prosecuting Attorney', party: null },
      { name: 'Bob Mendham', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Oakland: {
    name: 'Oakland County',
    seat: 'Pontiac',
    website: 'https://www.oakgov.com',
    phone: '248-858-0480',
    officials: [
      { name: 'Karen D. McDonald', title: 'Prosecuting Attorney', party: 'Democratic' },
      { name: 'Michael Bouchard', title: 'Sheriff', party: 'Republican' },
      { name: 'Lisa Brown', title: 'Clerk/Register of Deeds', party: 'Democratic' },
      { name: 'Robert Wittenberg', title: 'Treasurer', party: 'Democratic' },
      { name: 'David Coulter', title: 'County Executive', party: 'Democratic' },
    ],
  },

  Oceana: {
    name: 'Oceana County',
    seat: 'Hart',
    website: 'https://www.oceana.mi.us',
    phone: '231-873-4328',
    officials: [
      { name: 'Joseph J. Bizon', title: 'Prosecuting Attorney', party: null },
      { name: 'Craig Mast', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Ogemaw: {
    name: 'Ogemaw County',
    seat: 'West Branch',
    website: 'https://www.ogemawcountymi.gov',
    phone: '989-345-0215',
    officials: [
      { name: 'LaDonna A. Schultz', title: 'Prosecuting Attorney', party: null },
      { name: 'Brian Gilbert', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Ontonagon: {
    name: 'Ontonagon County',
    seat: 'Ontonagon',
    website: 'https://www.ontonagoncounty.org',
    phone: '906-884-4255',
    officials: [
      { name: 'Rudolph Perhalla', title: 'Prosecuting Attorney', party: null },
      { name: 'Dale Rantala', title: 'Sheriff', party: null },
    ],
  },

  Osceola: {
    name: 'Osceola County',
    seat: 'Reed City',
    website: 'https://www.osceola-county.org',
    phone: '231-832-3261',
    officials: [
      { name: 'Anthony J. Badovinac', title: 'Prosecuting Attorney', party: null },
      { name: 'Mark Cool', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Oscoda: {
    name: 'Oscoda County',
    seat: 'Mio',
    website: 'https://www.oscodacountymi.com',
    phone: '989-826-1130',
    officials: [
      { name: 'Kristi L. McGregor', title: 'Prosecuting Attorney', party: null },
      { name: 'Taylor D. Kann', title: 'Sheriff', party: null },
    ],
  },

  Otsego: {
    name: 'Otsego County',
    seat: 'Gaylord',
    website: 'https://www.otsegocountymi.gov',
    phone: '989-731-7500',
    officials: [
      { name: 'Michael A. Rola', title: 'Prosecuting Attorney', party: null },
      { name: 'Matthew Nowicki', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Ottawa: {
    name: 'Ottawa County',
    seat: 'Grand Haven',
    website: 'https://www.miottawa.org',
    phone: '616-846-8310',
    officials: [
      { name: 'Sarah F. Matwiejczyk', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Eric DeBoer', title: 'Sheriff', party: 'Republican' },
      { name: 'Justin F. Roebuck', title: 'Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Cheryl Clark', title: 'Treasurer', party: 'Republican' },
      { name: 'Joe Bush', title: 'Water Resources Commissioner', party: 'Republican' },
      // Board of Commissioners (11 districts)
      { name: 'John Teeples', title: 'Board Chair (District 7)', party: 'Republican', district: 7 },
      { name: 'Josh Brugger', title: 'Vice Chair (District 10)', party: 'Republican', district: 10 },
      { name: 'Jim Barry', title: 'Commissioner (District 1)', party: 'Republican', district: 1 },
      { name: 'Jordan Jorritsma', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Jacob Bonnema', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Joe Moss', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Kendra Wenzel', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Sylvia Rhodea', title: 'Commissioner (District 8)', party: 'Republican', district: 8 },
      { name: 'Phil Kuyers', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
      { name: 'Allison Miedema', title: 'Commissioner (District 11)', party: 'Republican', district: 11 },
    ],
  },

  'Presque Isle': {
    name: 'Presque Isle County',
    seat: 'Rogers City',
    website: 'https://www.presqueislecounty.org',
    phone: '989-734-3288',
    officials: [
      { name: 'Zakary S. McLennan', title: 'Prosecuting Attorney', party: null },
      { name: 'Joe Brewbaker', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Roscommon: {
    name: 'Roscommon County',
    seat: 'Roscommon',
    website: 'https://www.roscommoncounty.net',
    phone: '989-275-5923',
    officials: [
      { name: 'Susan M. Dillon', title: 'Prosecuting Attorney', party: null },
      { name: 'Ed Stern', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Saginaw: {
    name: 'Saginaw County',
    seat: 'Saginaw',
    website: 'https://www.saginawcounty.com',
    phone: '989-790-5261',
    officials: [
      { name: 'John A. McColgan Jr.', title: 'Prosecuting Attorney', party: 'Democratic' },
      { name: 'William Federspiel', title: 'Sheriff', party: 'Democratic' },
    ],
  },

  'St. Clair': {
    name: 'St. Clair County',
    seat: 'Port Huron',
    website: 'https://www.stclaircounty.org',
    phone: '810-989-6900',
    officials: [
      { name: 'Michael D. Wendling', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Mat King', title: 'Sheriff', party: 'Republican' },
      { name: 'Angie Waters', title: 'Clerk', party: 'Republican' },
      // Board of Commissioners (7 districts)
      { name: 'Steve Simasko', title: 'Commissioner (District 1)', party: null, district: 1 },
      { name: 'Kerry Ange', title: 'Commissioner (District 2)', party: null, district: 2 },
      { name: 'Lisa Beedon', title: 'Commissioner (District 3)', party: null, district: 3 },
      { name: 'Joi Torello', title: 'Commissioner (District 4)', party: null, district: 4 },
      { name: 'Paul Zeller', title: 'Commissioner (District 5)', party: null, district: 5 },
      { name: 'Dave Rushing', title: 'Commissioner (District 6)', party: null, district: 6 },
      { name: 'Dave Vandenbossche', title: 'Commissioner (District 7)', party: null, district: 7 },
    ],
  },

  'St. Joseph': {
    name: 'St. Joseph County',
    seat: 'Centreville',
    website: 'https://www.stjosephcountymi.org',
    phone: '269-467-5500',
    officials: [
      { name: 'Deborah J. Davis', title: 'Prosecuting Attorney', party: null },
      { name: 'Chad L. Spence', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Sanilac: {
    name: 'Sanilac County',
    seat: 'Sandusky',
    website: 'https://www.sanilaccounty.net',
    phone: '810-648-2100',
    officials: [
      { name: 'Mark E. Davidson', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Paul Rich', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Schoolcraft: {
    name: 'Schoolcraft County',
    seat: 'Manistique',
    website: 'https://www.schoolcraftcounty.net',
    phone: '906-341-3618',
    officials: [
      { name: 'Timothy R. Noble', title: 'Prosecuting Attorney', party: null },
      { name: 'Charlie Willour', title: 'Sheriff', party: null },
    ],
  },

  Shiawassee: {
    name: 'Shiawassee County',
    seat: 'Corunna',
    website: 'https://www.shiawassee.net',
    phone: '989-743-2242',
    officials: [
      { name: 'Scott A. Koerner', title: 'Prosecuting Attorney', party: null },
      { name: 'Douglas L. Chapman', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Tuscola: {
    name: 'Tuscola County',
    seat: 'Caro',
    website: 'https://www.tuscolacounty.org',
    phone: '989-672-3780',
    officials: [
      { name: 'Erica K. Walle', title: 'Prosecuting Attorney', party: null },
      { name: 'Ryan Robinson', title: 'Sheriff', party: 'Republican' },
    ],
  },

  'Van Buren': {
    name: 'Van Buren County',
    seat: 'Paw Paw',
    website: 'https://www.vbco.org',
    phone: '269-657-8218',
    officials: [
      { name: 'Susan K. Zuiderveen', title: 'Prosecuting Attorney', party: null },
      { name: 'Daniel Abbott', title: 'Sheriff', party: 'Republican' },
    ],
  },

  Washtenaw: {
    name: 'Washtenaw County',
    seat: 'Ann Arbor',
    website: 'https://www.washtenaw.org',
    phone: '734-222-6730',
    officials: [
      { name: 'Eli N. Savit', title: 'Prosecuting Attorney', party: 'Democratic' },
      { name: 'Alyshia M. Dyer', title: 'Sheriff', party: 'Democratic', phone: '734-971-8400' },
      { name: 'Lawrence Kestenbaum', title: 'Clerk/Register of Deeds', party: 'Democratic' },
      { name: 'Catherine McClary', title: 'Treasurer', party: 'Democratic' },
      { name: 'Evan Pratt', title: 'Water Resources Commissioner', party: 'Democratic' },
    ],
  },

  Wayne: {
    name: 'Wayne County',
    seat: 'Detroit',
    website: 'https://www.waynecounty.com',
    phone: '313-224-0286',
    officials: [
      { name: 'Kym L. Worthy', title: 'Prosecuting Attorney', party: 'Democratic' },
      { name: 'Raphael Washington', title: 'Sheriff', party: 'Democratic' },
      { name: 'Cathy Garrett', title: 'Clerk', party: 'Democratic' },
      { name: 'Eric Sabree', title: 'Treasurer', party: 'Democratic' },
      { name: 'Warren Evans', title: 'County Executive', party: 'Democratic' },
    ],
  },

  Wexford: {
    name: 'Wexford County',
    seat: 'Cadillac',
    website: 'https://www.wexfordcounty.org',
    phone: '231-779-9453',
    officials: [
      { name: 'Johanna Carey', title: 'Prosecuting Attorney', party: null },
      { name: 'Trent Taylor', title: 'Sheriff', party: 'Republican' },
    ],
  },
}

export default MI_COUNTIES
