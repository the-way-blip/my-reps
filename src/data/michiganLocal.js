/**
 * Michigan local government officials data.
 *
 * Keyed by geography type, then by name (matching Census geocoder BASENAME).
 * Each entry contains an array of officials with name, title, party, district/ward.
 *
 * Sources: Official county/city websites, verified April 2026.
 */

/* ── County officials ── */

export const MI_COUNTY_OFFICIALS = {
  Washtenaw: {
    name: 'Washtenaw County',
    website: 'https://www.washtenaw.org',
    phone: '734-222-6730',
    officials: [
      { name: 'Katie Scott', title: 'Board Chair (District 9)', party: 'Democratic', district: 9, email: 'scottk@washtenaw.org' },
      { name: 'Jason Maciejewski', title: 'Commissioner (District 1)', party: 'Democratic', district: 1, email: 'maciejewskij@washtenaw.org' },
      { name: 'Crystal Lyte', title: 'Commissioner (District 2)', party: 'Democratic', district: 2, email: 'lytec@washtenaw.org' },
      { name: 'Shannon Beeman', title: 'Commissioner (District 3)', party: 'Democratic', district: 3, email: 'beemans@washtenaw.org' },
      { name: 'Caroline Sanders', title: 'Commissioner (District 4)', party: 'Democratic', district: 4, email: 'sandersc@washtenaw.org' },
      { name: 'Justin Hodge', title: 'Commissioner (District 5)', party: 'Democratic', district: 5, email: 'hodgej@washtenaw.org' },
      { name: 'Annie Somerville', title: 'Commissioner (District 6)', party: 'Democratic', district: 6, email: 'somervillea@washtenaw.org' },
      { name: 'Andy LaBarre', title: 'Commissioner (District 7)', party: 'Democratic', district: 7, email: 'labarrea@washtenaw.org' },
      { name: 'Yousef Rabhi', title: 'Commissioner (District 8)', party: 'Democratic', district: 8, email: 'rabhiy@washtenaw.org' },
    ],
  },

  Wayne: {
    name: 'Wayne County',
    website: 'https://www.waynecounty.com',
    phone: '313-224-0286',
    officials: [
      { name: 'Warren Evans', title: 'County Executive', party: 'Democratic', phone: '313-224-0286' },
      { name: 'Alisha Bell', title: 'Commission Chair (District 7)', party: 'Democratic', district: 7 },
      { name: 'Tim Killeen', title: 'Commissioner (District 1)', party: 'Democratic', district: 1 },
      { name: 'Jonathan Kinloch', title: 'Commissioner (District 2)', party: 'Democratic', district: 2 },
      { name: 'Martha Scott', title: 'Commissioner (District 3)', party: 'Democratic', district: 3 },
      { name: 'Cara Clemente', title: 'Commissioner (District 4)', party: 'Democratic', district: 4 },
      { name: 'Angelique Peterson-Mayberry', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
      { name: 'Monique Baker McCormick', title: 'Commissioner (District 6)', party: 'Democratic', district: 6 },
      { name: 'David Knezek', title: 'Commissioner (District 8)', party: 'Democratic', district: 8 },
      { name: 'Terry Marecki', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
      { name: 'Melissa Daub', title: 'Commissioner (District 10)', party: 'Democratic', district: 10 },
      { name: 'Allen Wilson', title: 'Commissioner (District 11)', party: 'Democratic', district: 11 },
      { name: 'Glenn Anderson', title: 'Commissioner (District 12)', party: 'Democratic', district: 12 },
      { name: 'Sam Baydoun', title: 'Commissioner (District 13)', party: 'Democratic', district: 13 },
      { name: 'Alex Garza', title: 'Commissioner (District 14)', party: 'Democratic', district: 14 },
      { name: 'Joseph Palamara', title: 'Vice Chair (District 15)', party: 'Democratic', district: 15 },
    ],
  },

  Oakland: {
    name: 'Oakland County',
    website: 'https://www.oakgov.com',
    phone: '248-858-0480',
    officials: [
      { name: 'David Coulter', title: 'County Executive', party: 'Democratic', phone: '248-858-0480' },
      { name: 'Karen McDonald', title: 'Prosecuting Attorney', party: 'Democratic' },
      { name: 'Michael Bouchard', title: 'Sheriff', party: 'Republican' },
      { name: 'Lisa Brown', title: 'Clerk/Register of Deeds', party: 'Democratic' },
      { name: 'Robert Wittenberg', title: 'Treasurer', party: 'Democratic' },
      { name: 'Penny Luebs', title: 'Board Chair (District 16)', party: 'Democratic', district: 16 },
      { name: 'Angela Powell', title: 'Vice Chair (District 17)', party: 'Democratic', district: 17 },
      { name: 'Brendan Johnson', title: 'Commissioner (District 1)', party: 'Republican', district: 1 },
      { name: 'Bob Hoffman', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Michael Gingell', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Christine Long', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Kristen Nelson', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
      { name: 'Michael Spisz', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Karen Joliat', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Phil Weipert', title: 'Commissioner (District 8)', party: 'Republican', district: 8 },
      { name: 'Adam Kochenderfer', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
      { name: 'William Miller', title: 'Commissioner (District 10)', party: 'Republican', district: 10 },
      { name: 'Marcia Gershenson', title: 'Commissioner (District 11)', party: 'Democratic', district: 11 },
      { name: 'Yolanda Smith Charles', title: 'Commissioner (District 12)', party: 'Democratic', district: 12 },
      { name: 'Charlie Cavell', title: 'Commissioner (District 13)', party: 'Democratic', district: 13 },
      { name: 'Ajay Raman', title: 'Commissioner (District 14)', party: 'Democratic', district: 14 },
      { name: 'Gwen Markham', title: 'Commissioner (District 15)', party: 'Democratic', district: 15 },
      { name: 'Janet Jackson', title: 'Commissioner (District 18)', party: 'Democratic', district: 18 },
      { name: 'David Woodward', title: 'Commissioner (District 19)', party: 'Democratic', district: 19 },
      { name: 'Gary McGillivray', title: 'Commissioner (District 20)', party: 'Democratic', district: 20 },
      { name: 'Linnie Taylor', title: 'Commissioner (District 21)', party: 'Democratic', district: 21 },
    ],
  },

  Macomb: {
    name: 'Macomb County',
    website: 'https://www.macombgov.org',
    phone: '586-469-5125',
    officials: [
      { name: 'Mark Hackel', title: 'County Executive', party: 'Democratic', phone: '586-469-5125' },
      { name: 'Peter Lucido', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Anthony Wickersham', title: 'Sheriff', party: 'Republican' },
      { name: 'Anthony Forlini', title: 'Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Lawrence Rocca', title: 'Treasurer', party: 'Republican' },
      { name: 'Don Brown', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Joseph Romano', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Jeff Farrington', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Joe Sabatini', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Robert Mijac', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
      { name: 'Sylvia Grot', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'James Carabelli', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Michelle Nard', title: 'Commissioner (District 8)', party: 'Democratic', district: 8 },
      { name: 'Richard Sauger', title: 'Commissioner (District 9)', party: 'Democratic', district: 9 },
      { name: 'Harold Haugh', title: 'Commissioner (District 10)', party: 'Democratic', district: 10 },
      { name: 'Veronica Klinefelt', title: 'Commissioner (District 11)', party: 'Democratic', district: 11 },
      { name: 'Leon Drolet', title: 'Commissioner (District 12)', party: 'Republican', district: 12 },
      { name: 'Mai Xiong', title: 'Commissioner (District 13)', party: 'Democratic', district: 13 },
    ],
  },

  Kent: {
    name: 'Kent County',
    website: 'https://www.accesskent.com',
    phone: '616-632-7500',
    officials: [
      { name: 'Al Vanderberg', title: 'County Administrator', party: null },
      { name: 'Chris Becker', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Lisa Posthumus Lyons', title: 'Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Peter MacGregor', title: 'County Treasurer', party: 'Republican' },
      { name: 'Michelle LaJoye-Young', title: 'Sheriff', party: 'Republican' },
      { name: 'Ben Greene', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Liz Morse', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Jennifer Merchant', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Katie DeBoer', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Dave Hildenbrand', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Stan Stek', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Stan Ponstein', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Dan Burrill', title: 'Commissioner (District 8)', party: 'Republican', district: 8 },
      { name: 'Matt Kallman', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
      { name: 'Robin Halsted', title: 'Commissioner (District 10)', party: 'Republican', district: 10 },
      { name: 'Lindsey Thiel', title: 'Vice Chair (District 11)', party: 'Republican', district: 11 },
      { name: 'Monica Sparks', title: 'Commissioner (District 12)', party: 'Democratic', district: 12 },
      { name: 'Michelle McCloud', title: 'Commissioner (District 13)', party: 'Democratic', district: 13 },
      { name: 'Carol Hennessy', title: 'Commissioner (District 14)', party: 'Democratic', district: 14 },
      { name: 'Lisa Oliver-King', title: 'Commissioner (District 15)', party: 'Democratic', district: 15 },
      { name: 'Melissa LaGrand', title: 'Commissioner (District 16)', party: 'Democratic', district: 16 },
      { name: 'Robert S. Womack', title: 'Commissioner (District 17)', party: 'Democratic', district: 17 },
      { name: 'Steve Faber', title: 'Commissioner (District 18)', party: 'Democratic', district: 18 },
      { name: 'Kris Pachla', title: 'Commissioner (District 19)', party: 'Democratic', district: 19 },
      { name: 'Nancy Morales', title: 'Commissioner (District 20)', party: 'Democratic', district: 20 },
      { name: 'Walter Bujak', title: 'Commissioner (District 21)', party: 'Republican', district: 21 },
    ],
  },

  Ingham: {
    name: 'Ingham County',
    website: 'https://www.ingham.org',
    phone: '517-676-7200',
    officials: [
      { name: 'Derrell Slaughter', title: 'Board Chair (District 2)', party: 'Democratic', district: 2 },
      { name: 'Ryan Sebolt', title: 'Vice Chair (District 4)', party: 'Democratic', district: 4 },
      { name: 'Todd Tennis', title: 'Commissioner (District 1)', party: 'Democratic', district: 1 },
      { name: 'Victor Celentino', title: 'Commissioner (District 3)', party: 'Democratic', district: 3 },
      { name: 'Carol Koenig', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
      { name: 'Mark Polsdofer', title: 'Commissioner (District 6)', party: 'Democratic', district: 6 },
      { name: 'Thomas Morgan', title: 'Commissioner (District 7)', party: 'Democratic', district: 7 },
      { name: 'Emily Stivers', title: 'Commissioner (District 8)', party: 'Democratic', district: 8 },
      { name: 'Erin Graham', title: 'Commissioner (District 9)', party: 'Democratic', district: 9 },
      { name: 'Andrea Cascarilla', title: 'Commissioner (District 10)', party: 'Democratic', district: 10 },
      { name: 'Irwin Lowenstein', title: 'Commissioner (District 11)', party: 'Democratic', district: 11 },
      { name: 'Monica Schafer', title: 'Commissioner (District 12)', party: 'Republican', district: 12 },
      { name: 'Randy Schafer', title: 'Commissioner (District 13)', party: 'Republican', district: 13 },
      { name: 'Robin Naeyaert', title: 'Commissioner (District 14)', party: 'Republican', district: 14 },
    ],
  },

  Genesee: {
    name: 'Genesee County',
    website: 'https://www.gc4me.com',
    phone: '810-257-3010',
    officials: [
      { name: 'Domonique Clemons', title: 'Board Chair (District 3)', party: 'Democratic', district: 3 },
      { name: 'Charles Winfrey', title: 'Vice Chair (District 5)', party: 'Democratic', district: 5 },
      { name: 'Meredith Davis', title: 'Commissioner (District 1)', party: 'Democratic', district: 1 },
      { name: 'Bryant Nolden', title: 'Commissioner (District 2)', party: 'Democratic', district: 2 },
      { name: 'Martin Cousineau', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Shaun Shumaker', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Mark Young', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Al Hardiman', title: 'Commissioner (District 8)', party: 'Republican', district: 8 },
      { name: 'Gary Peppin', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
    ],
  },

  Kalamazoo: {
    name: 'Kalamazoo County',
    website: 'https://www.kalcounty.com',
    phone: '269-384-8111',
    officials: [
      { name: 'Stephanie Moore', title: 'Board Chair (District 5)', party: 'Democratic', district: 5 },
      { name: 'Tami Rey', title: 'Vice Chair (District 4)', party: 'Democratic', district: 4 },
      { name: 'Tracy Hall', title: 'Commissioner (District 1)', party: 'Democratic', district: 1 },
      { name: 'Monteze Morales', title: 'Commissioner (District 2)', party: 'Democratic', district: 2 },
      { name: 'Meredith Place', title: 'Commissioner (District 3)', party: 'Democratic', district: 3 },
      { name: 'Ron Zarbo', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Dale Shugars', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Roger Tuinier', title: 'Commissioner (District 8)', party: 'Republican', district: 8 },
      { name: 'Christine Morse', title: 'Commissioner (District 9)', party: 'Democratic', district: 9 },
      { name: 'Jen Strebs', title: 'Commissioner (District 10)', party: 'Democratic', district: 10 },
      { name: 'Mike Quinn', title: 'Commissioner (District 11)', party: 'Republican', district: 11 },
    ],
  },

  Ottawa: {
    name: 'Ottawa County',
    website: 'https://www.miottawa.org',
    phone: '616-738-4000',
    officials: [
      { name: 'Roger Bergman', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Philip Kuyers', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Doug Zylstra', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Greg DeJong', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Joe Moss', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Matt Fenske', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Gail Bonnema', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Lucy Ebel', title: 'Commissioner (District 8)', party: 'Republican', district: 8 },
      { name: 'Rebekah Curran', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
      { name: 'Allison Miedema', title: 'Commissioner (District 10)', party: 'Republican', district: 10 },
      { name: 'Sylvia Rhodea', title: 'Commissioner (District 11)', party: 'Republican', district: 11 },
    ],
  },

  Saginaw: {
    name: 'Saginaw County',
    website: 'https://www.saginawcounty.com',
    phone: '989-790-5275',
    officials: [
      { name: 'Robert Belleman', title: 'County Controller/Administrator', party: null },
      { name: 'John McColgan Jr.', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'William Federspiel', title: 'Sheriff', party: 'Republican' },
      { name: 'Vanessa Guerra', title: 'County Clerk', party: 'Democratic' },
      { name: 'Timothy Novak', title: 'Treasurer', party: 'Democratic' },
      { name: 'Katie Albosta', title: 'Register of Deeds', party: 'Democratic' },
      { name: 'Sheldon Matthews', title: 'Board Chair', party: 'Democratic' },
      { name: 'Tarsha Chambers', title: 'Commissioner (District 1)', party: 'Democratic', district: 1 },
      { name: 'Carl Ruth', title: 'Commissioner (District 2)', party: 'Democratic', district: 2 },
      { name: 'James Theisen', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Cheryl Hadsall', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Dennis Krafft', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Muskegon: {
    name: 'Muskegon County',
    website: 'https://www.co.muskegon.mi.us',
    phone: '231-724-6520',
    officials: [
      { name: 'Mark Eisenbarth', title: 'County Administrator', party: null },
      { name: 'D.J. Hilson', title: 'Prosecuting Attorney', party: 'Democratic' },
      { name: 'Michael Poulin', title: 'Sheriff', party: 'Republican' },
      { name: 'Nancy Waters', title: 'County Clerk', party: 'Republican' },
      { name: 'Tony Moulatsiotis', title: 'Treasurer', party: 'Republican' },
      { name: 'Mark Platt', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Robert Scolnik', title: 'Board Chair', party: 'Republican' },
      { name: 'Charles Nash', title: 'Commissioner (District 1)', party: 'Democratic', district: 1 },
      { name: 'Rillastine Wilkins', title: 'Commissioner (District 2)', party: 'Democratic', district: 2 },
      { name: 'Kim Cyr', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Scott Plummer', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Susie Hughes', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Livingston: {
    name: 'Livingston County',
    website: 'https://www.livgov.com',
    phone: '517-546-0500',
    officials: [
      { name: 'Jay Drick', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Douglas Helzerman', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'William Green', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Brenda Plank', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Bob Bezotte', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Wes Nakagiri', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Jay Gross', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Kate Lawrence', title: 'Commissioner (District 8)', party: 'Republican', district: 8 },
      { name: 'Nick Fiani', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
    ],
  },

  Berrien: {
    name: 'Berrien County',
    website: 'https://www.berriencounty.org',
    phone: '269-983-7111',
    officials: [
      { name: 'Brian Dissette', title: 'County Administrator', party: null },
      { name: 'Steve Pierangeli', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Paul Bailey', title: 'Sheriff', party: 'Republican' },
      { name: 'Sharon Tyler', title: 'County Clerk', party: 'Republican' },
      { name: 'Bret Witkowski', title: 'Treasurer', party: 'Republican' },
      { name: 'Jill Adams', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Jim Curran', title: 'Board Chair', party: 'Republican' },
      { name: 'Ezra Scott', title: 'Commissioner (District 1)', party: 'Democratic', district: 1 },
      { name: 'Teri Sue Freehling', title: 'Commissioner (District 2)', party: 'Democratic', district: 2 },
      { name: 'Don Meeks', title: 'Commissioner (District 3)', party: 'Democratic', district: 3 },
      { name: 'R. McKinley Elliott', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Julie Wuerfel', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Eaton: {
    name: 'Eaton County',
    website: 'https://www.eatoncounty.org',
    phone: '517-543-7500',
    officials: [
      { name: 'John Fuentes', title: 'County Administrator', party: null },
      { name: 'Doug Lloyd', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Tom Reich', title: 'Sheriff', party: 'Republican' },
      { name: 'Diana Bosworth', title: 'County Clerk', party: 'Republican' },
      { name: 'Robert Robinson', title: 'Treasurer', party: 'Republican' },
      { name: 'Karen Kuhn', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Jim Mott', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Brian Droscha', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Blake Mulder', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Brandon Haskell', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Jane Whitacre', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Mark Mudry', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Terrance Augustine', title: 'Commissioner (District 7)', party: 'Democratic', district: 7 },
      { name: 'Joseph Brehler', title: 'Commissioner (District 8)', party: 'Republican', district: 8 },
      { name: 'Barbara Rogers', title: 'Commissioner (District 9)', party: 'Democratic', district: 9 },
    ],
  },

  Calhoun: {
    name: 'Calhoun County',
    website: 'https://www.calhouncountymi.gov',
    phone: '269-781-0730',
    officials: [
      { name: 'Kelli Scott', title: 'County Administrator', party: null },
      { name: 'David Gilbert', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Steve Hinkley', title: 'Sheriff', party: 'Republican' },
      { name: 'Kimberly Hinkley', title: 'Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Kelly Wickham', title: 'Treasurer', party: 'Republican' },
      { name: 'Steve Frisbie', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Gary Tompkins', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Kathy-Sue Vette', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Paul Zarbo', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Derek King', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
      { name: 'Monique French', title: 'Commissioner (District 6)', party: 'Democratic', district: 6 },
      { name: 'Rochelle Blair', title: 'Commissioner (District 7)', party: 'Democratic', district: 7 },
    ],
  },

  Jackson: {
    name: 'Jackson County',
    website: 'https://www.co.jackson.mi.us',
    phone: '517-788-4264',
    officials: [
      { name: 'Mike Overton', title: 'County Administrator', party: null },
      { name: 'Jerard Jarzynka', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Gary Schuette', title: 'Sheriff', party: 'Republican' },
      { name: 'Amanda Allen', title: 'County Clerk', party: 'Republican' },
      { name: 'Karen Coffman', title: 'Treasurer', party: 'Republican' },
      { name: 'Laurie Ferris', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Tony Bair', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Daniel Mahoney', title: 'Commissioner (District 2)', party: 'Democratic', district: 2 },
      { name: 'Darius Williams', title: 'Commissioner (District 3)', party: 'Democratic', district: 3 },
      { name: 'Steve Shotwell Jr.', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Philip Duckham III', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Earl Poleski', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'John Willis', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Ray Snell', title: 'Commissioner (District 8)', party: 'Republican', district: 8 },
      { name: 'Jim Shotwell', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
    ],
  },

  Allegan: {
    name: 'Allegan County',
    website: 'https://www.allegancounty.org',
    phone: '269-673-0200',
    officials: [
      { name: 'Robert Sarro', title: 'County Administrator', party: null },
      { name: 'Myrene Koch', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Frank Baker', title: 'Sheriff', party: 'Republican' },
      { name: 'Robert Genetski', title: 'County Clerk', party: 'Republican' },
      { name: 'Sally Brooks', title: 'Treasurer', party: 'Republican' },
      { name: 'Deb VanDuinen', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Jim Storey', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Gary Keller', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Gale Dugan', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Mark DeYoung', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Dean Kapenga', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Max Thiele', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Brad Lubben', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Barry: {
    name: 'Barry County',
    website: 'https://www.barrycounty.org',
    phone: '269-945-1285',
    officials: [
      { name: 'Kimberly Richards', title: 'County Clerk', party: 'Republican' },
      { name: 'Julie Walters', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Dar Leaf', title: 'Sheriff', party: 'Republican' },
      { name: 'Tami VanTol', title: 'Treasurer', party: 'Republican' },
      { name: 'Marie LaFave', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Ben Geiger', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'David Jackson', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Mike Glowicki', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Tamara Zarza-Reith', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Jon Smelker', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Roger Buell', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Amy Cater', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Ionia: {
    name: 'Ionia County',
    website: 'https://www.ioniacounty.org',
    phone: '616-527-5300',
    officials: [
      { name: 'Stephanie Fox', title: 'County Administrator', party: null },
      { name: 'Kyle Butler', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Charlie Noll', title: 'Sheriff', party: 'Republican' },
      { name: 'Greg Geiger', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Jim Banks', title: 'Treasurer', party: 'Republican' },
      { name: 'David Hodges', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Scott Wirtz', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Larry Tiejema', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Jack Shattuck', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Ally Cook', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Chris Bredice', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Georgia Sharp', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Montcalm: {
    name: 'Montcalm County',
    website: 'https://www.montcalm.org',
    phone: '989-831-7300',
    officials: [
      { name: 'Andrea Longnecker', title: 'County Administrator', party: null },
      { name: 'Andrea Krause', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Michael Williams', title: 'Sheriff', party: 'Republican' },
      { name: 'Kristen Millard', title: 'County Clerk', party: 'Republican' },
      { name: 'Shari Daniels', title: 'Treasurer', party: 'Republican' },
      { name: 'Joanne Wirth', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Patrick Carr', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Adam Petersen', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Jeremy Miller', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Michael Scott', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Robert Dole', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  'Grand Traverse': {
    name: 'Grand Traverse County',
    website: 'https://www.grandtraverse.org',
    phone: '231-922-4700',
    officials: [
      { name: 'Nate Alger', title: 'County Administrator', party: null },
      { name: 'Noelle Moeggenberg', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Tom Bensley', title: 'Sheriff', party: 'Republican' },
      { name: 'Bonnie Scheele', title: 'County Clerk', party: 'Republican' },
      { name: 'Heidi Scheppe', title: 'Treasurer', party: 'Republican' },
      { name: 'Josh Waterman', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Rob Hentschel', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Lance Oesterle', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Brad Jewett', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Bryce Hundley', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Betsy Coffia', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
      { name: 'Darryl Nelson', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Penny Morris', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Emmet: {
    name: 'Emmet County',
    website: 'https://www.emmetcounty.org',
    phone: '231-348-1702',
    officials: [
      { name: 'Jason Elmore', title: 'County Administrator', party: null },
      { name: 'James Linderman', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Pete Wallin', title: 'Sheriff', party: 'Republican' },
      { name: 'Suzanne Kanine', title: 'County Clerk', party: 'Republican' },
      { name: 'Mary Moe', title: 'Treasurer', party: 'Republican' },
      { name: 'Christine Schrader', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Rich Ginop', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Charlie MacInnis', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Matt Koontz', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Todd Northrop', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Brian Gutowski', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Marquette: {
    name: 'Marquette County',
    website: 'https://www.co.marquette.mi.us',
    phone: '906-225-8330',
    officials: [
      { name: 'Scott Erbisch', title: 'County Administrator', party: null },
      { name: 'Matt Wiese', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Greg Zyburt', title: 'Sheriff', party: 'Republican' },
      { name: 'Linda Talsma', title: 'County Clerk', party: 'Democratic' },
      { name: 'Jackie Solomon', title: 'Treasurer', party: 'Democratic' },
      { name: 'Mark Donoughe', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Karl Numinen', title: 'Commissioner (District 1)', party: null, district: 1 },
      { name: 'Joseph Derocha', title: 'Board Chair (District 2)', party: null, district: 2 },
      { name: 'Fred Benzie', title: 'Commissioner (District 3)', party: null, district: 3 },
      { name: 'Dana LaLonde', title: 'Commissioner (District 4)', party: null, district: 4 },
      { name: 'Bill Nordeen', title: 'Vice Chair (District 5)', party: null, district: 5 },
      { name: 'Karen Alholm', title: 'Commissioner (District 6)', party: null, district: 6 },
    ],
  },

  'St. Clair': {
    name: 'St. Clair County',
    website: 'https://www.stclaircounty.org',
    phone: '810-989-6900',
    officials: [
      { name: 'Karry Hepting', title: 'County Administrator', party: null },
      { name: 'Michael Wendling', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Mat King', title: 'Sheriff', party: 'Republican' },
      { name: 'Jay DeBoyer', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Kelly Roberts-Burnett', title: 'Treasurer', party: 'Republican' },
      { name: 'Jeff Bohm', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Jorja Baldwin', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Lisa Beedon', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Cliff Schrader', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Bill Gratopp', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'David Rushing', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Karl Tomion', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Monroe: {
    name: 'Monroe County',
    website: 'https://www.co.monroe.mi.us',
    phone: '734-240-7000',
    officials: [
      { name: 'Michael Bosanac', title: 'County Administrator', party: null },
      { name: 'Jeffrey Yorkey', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Troy Goodnough', title: 'Sheriff', party: 'Republican' },
      { name: 'Annamarie Osment', title: 'County Clerk', party: 'Republican' },
      { name: 'Kay Sisung', title: 'Treasurer', party: 'Republican' },
      { name: 'Sharon Lemasters', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Mark Brant', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Greg Moore Jr.', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Dawn Asper', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'J. Henry Lievens', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Jerry Oley', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'David Swartout', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Mike Bosanac', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
      { name: 'Jason Turner', title: 'Commissioner (District 8)', party: 'Republican', district: 8 },
      { name: 'George Jondahl', title: 'Commissioner (District 9)', party: 'Republican', district: 9 },
    ],
  },

  Lenawee: {
    name: 'Lenawee County',
    website: 'https://www.lenawee.mi.us',
    phone: '517-264-4508',
    officials: [
      { name: 'Martin Marshall', title: 'County Administrator', party: null },
      { name: 'Burke Castleberry', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Troy Bevier', title: 'Sheriff', party: 'Republican' },
      { name: 'Roxann Holloway', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Marilyn Woods', title: 'Treasurer', party: 'Republican' },
      { name: 'David Stimpson', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Terry Collins', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Jim Driskill', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Ralph Tillotson', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Karol "Kayi" Castleberry', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'James Van Doren', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Dawn Bales', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Midland: {
    name: 'Midland County',
    website: 'https://www.co.midland.mi.us',
    phone: '989-832-6739',
    officials: [
      { name: 'Bridgette Gransden', title: 'County Controller/Administrator', party: null },
      { name: 'J. Dee Brooks', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Myron Greene', title: 'Sheriff', party: 'Republican' },
      { name: 'Ann Manary', title: 'County Clerk', party: 'Republican' },
      { name: 'Cathy Lunsford', title: 'Treasurer', party: 'Republican' },
      { name: 'Jenny Anway', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Mark Bone', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Gaye Terwillegar', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Steve Glaser', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Jeanette Snyder', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'James Geisler', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Eric Dorrien', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Scott Noesen', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Bay: {
    name: 'Bay County',
    website: 'https://www.baycounty.net',
    phone: '989-895-4000',
    officials: [
      { name: 'Jim Barcia', title: 'County Executive', party: 'Democratic' },
      { name: 'Nancy Borushko', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Troy Cunningham', title: 'Sheriff', party: 'Republican' },
      { name: 'Cynthia Luczak', title: 'County Clerk', party: 'Democratic' },
      { name: 'Weston Prince', title: 'Treasurer', party: 'Republican' },
      { name: 'Brandon Krause', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Thomas Herek', title: 'Board Chair (District 1)', party: 'Democratic', district: 1 },
      { name: 'Michael Lutz', title: 'Commissioner (District 2)', party: 'Democratic', district: 2 },
      { name: 'Joe Davis', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Vaughn Begick', title: 'Commissioner (District 4)', party: 'Democratic', district: 4 },
      { name: 'Kim Coonan', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Jesse Dockett', title: 'Commissioner (District 6)', party: 'Democratic', district: 6 },
      { name: 'Mark Gannon', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Isabella: {
    name: 'Isabella County',
    website: 'https://www.isabellacounty.org',
    phone: '989-772-0911',
    officials: [
      { name: 'Margaret McAvoy', title: 'County Administrator', party: null },
      { name: 'David Barberi', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Michael Main', title: 'Sheriff', party: 'Republican' },
      { name: 'Minde Lux', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Steven Pickens', title: 'Treasurer', party: 'Republican' },
      { name: 'Jim Horton', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'George Green', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Steven Swaney', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Warren Swindlehurst', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Gerald Serna', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Dave Ling', title: 'Commissioner (District 6)', party: 'Democratic', district: 6 },
      { name: 'Tim Blodgett', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Mecosta: {
    name: 'Mecosta County',
    website: 'https://www.mecostacounty.org',
    phone: '231-592-0103',
    officials: [
      { name: 'Paul Zarella', title: 'County Administrator', party: null },
      { name: 'Brian Thiede', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Brian Miller', title: 'Sheriff', party: 'Republican' },
      { name: 'Marcee Purcell', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Janet Peeters', title: 'Treasurer', party: 'Republican' },
      { name: 'Bill Routley', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Jerry Eno', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Alan Miller', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Maribeth Picard', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Gary McBride', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Shiawassee: {
    name: 'Shiawassee County',
    website: 'https://www.shiawassee.net',
    phone: '989-743-2241',
    officials: [
      { name: 'Brian Beginor', title: 'County Administrator', party: null },
      { name: 'Scott Koerner', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Brian BeGole', title: 'Sheriff', party: 'Republican' },
      { name: 'Caroline Wilson', title: 'County Clerk', party: 'Republican' },
      { name: 'Julie Thompson', title: 'Treasurer', party: 'Republican' },
      { name: 'Lana Thelen', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Jeremy Root', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'John Plowman', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Cindy Garber', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Greg Brodeur', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Marlene Webster', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Brandon Marks', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Gary Holzhausen', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Lapeer: {
    name: 'Lapeer County',
    website: 'https://www.lapeercounty.org',
    phone: '810-667-0356',
    officials: [
      { name: 'Joe Suma', title: 'County Administrator', party: null },
      { name: 'John Miller', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Scott McKenna', title: 'Sheriff', party: 'Republican' },
      { name: 'Theresa Spencer', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Dana Miller', title: 'Treasurer', party: 'Republican' },
      { name: 'Gary Roy', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'C. Ian Kempf', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Greg Wise', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Dale Kerbyson', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Allen Roush', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Linda Jarvis', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Joe Lessard', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Tuscola: {
    name: 'Tuscola County',
    website: 'https://www.tuscolacounty.org',
    phone: '989-672-3700',
    officials: [
      { name: 'Clayette Zechmeister', title: 'County Controller/Administrator', party: null },
      { name: 'Mark Reene', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Glen Skrent', title: 'Sheriff', party: 'Republican' },
      { name: 'Jodi Fetting', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Pat Donovan', title: 'Treasurer', party: 'Republican' },
      { name: 'Tom Young', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Thom Bardwell', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Kim Vaughan', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Doug DeLong', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Dan Grimshaw', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Cass: {
    name: 'Cass County',
    website: 'https://www.casscountymi.org',
    phone: '269-445-4100',
    officials: [
      { name: 'Jeff Carmen', title: 'County Administrator', party: null },
      { name: 'Victor Fitz', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Richard Behnke', title: 'Sheriff', party: 'Republican' },
      { name: 'Monica McMichael', title: 'County Clerk', party: 'Republican' },
      { name: 'Hope Anderson', title: 'Treasurer', party: 'Republican' },
      { name: 'Annie File', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Michael Grice', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Clark Cobb', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Robert Benjamin', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Jeremiah Jones', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Ryan Laylin', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  'Van Buren': {
    name: 'Van Buren County',
    website: 'https://www.vbco.org',
    phone: '269-657-8218',
    officials: [
      { name: 'Susan Bupp', title: 'County Administrator', party: null },
      { name: 'Michael Bedford', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Daniel Abbott', title: 'Sheriff', party: 'Republican' },
      { name: 'Tina Leary', title: 'County Clerk', party: 'Republican' },
      { name: 'Deb Bartz-Gray', title: 'Treasurer', party: 'Republican' },
      { name: 'Emily Heisler', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Kurt Doroh', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Randall Peat', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Mike Chappell', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Paul Zarbo', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Tim Bupp', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Nancy Backas', title: 'Commissioner (District 6)', party: 'Democratic', district: 6 },
      { name: 'Richard Godfrey', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Branch: {
    name: 'Branch County',
    website: 'https://www.branchcounty.us',
    phone: '517-279-4301',
    officials: [
      { name: 'Bud Norman', title: 'County Administrator', party: null },
      { name: 'Zack Stempien', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'John Pollack', title: 'Sheriff', party: 'Republican' },
      { name: 'Terri Kubasiak', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Jill Eaton', title: 'Treasurer', party: 'Republican' },
      { name: 'Ted Gordon', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Jon Houtz', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Nate Rice', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Jeff Vetter', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Tom Matthew', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Hillsdale: {
    name: 'Hillsdale County',
    website: 'https://www.co.hillsdale.mi.us',
    phone: '517-437-3391',
    officials: [
      { name: 'Tim McGraw', title: 'County Administrator', party: null },
      { name: 'Neal Brady', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Scott Instruments', title: 'Sheriff', party: 'Republican' },
      { name: 'Marney Kast', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Stephenie Kyser', title: 'Treasurer', party: 'Republican' },
      { name: 'Mark Wiley', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Brent Leininger', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Brad Benzing', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Ruth Brown', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Doug Ingles', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Gratiot: {
    name: 'Gratiot County',
    website: 'https://www.gratiotmi.com',
    phone: '989-875-5215',
    officials: [
      { name: 'Deb Kissling', title: 'County Administrator', party: null },
      { name: 'Keith Kushion', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Michael Morris', title: 'Sheriff', party: 'Republican' },
      { name: 'Allison Darling', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Ronda Craig', title: 'Treasurer', party: 'Republican' },
      { name: 'Sam Smith', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Jan Bunce', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Tim Stehouwer', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'John Herkelrath', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Chuck Murphy', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Clinton: {
    name: 'Clinton County',
    website: 'https://www.clinton-county.org',
    phone: '989-224-5120',
    officials: [
      { name: 'Craig Thelen', title: 'County Administrator', party: null },
      { name: 'Tony Spagnuolo', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Larry Jerue', title: 'Sheriff', party: 'Republican' },
      { name: 'Diane Zuker', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Ken Lehman', title: 'Treasurer', party: 'Republican' },
      { name: 'Kam Washburn', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Dwight Washington', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Ken Mitchell', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Bruce DeLong', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Robert Showers', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Adam Stacey', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'David Pohl', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Wexford: {
    name: 'Wexford County',
    website: 'https://www.wexfordcounty.org',
    phone: '231-779-9450',
    officials: [
      { name: 'Janet Koch', title: 'County Administrator', party: null },
      { name: 'Corey Wiggins', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Trent Taylor', title: 'Sheriff', party: 'Republican' },
      { name: 'Alaina Nyman', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Tina Schrader', title: 'Treasurer', party: 'Republican' },
      { name: 'Gary Taylor', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Julie Theobald', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Mike Bush', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Jason Baggerman', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Ben Townsend', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Julie Crick', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Bill Benzie', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Manistee: {
    name: 'Manistee County',
    website: 'https://www.manisteecountymi.gov',
    phone: '231-723-3331',
    officials: [
      { name: 'Lisa Sagala', title: 'County Administrator', party: null },
      { name: 'Jason Elmore', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Brian Gutowski', title: 'Sheriff', party: 'Republican' },
      { name: 'Jill Sodman', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Rachel Nelson', title: 'Treasurer', party: 'Republican' },
      { name: 'Jeff Dontz', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Nikki Koons', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Eric Gustad', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Karen Goodman', title: 'Commissioner (District 4)', party: 'Democratic', district: 4 },
      { name: 'Margaret Batzer', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
    ],
  },

  Mason: {
    name: 'Mason County',
    website: 'https://www.masoncounty.net',
    phone: '231-843-8202',
    officials: [
      { name: 'Fabian Knizacky', title: 'County Administrator', party: null },
      { name: 'Paul Batzer', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Kim Cole', title: 'Sheriff', party: 'Republican' },
      { name: 'Cheryl Kelly', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Andrew Kmetz', title: 'Treasurer', party: 'Republican' },
      { name: 'Ron Bacon', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Janet Andersen', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Les Johnson', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Steve Hull', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Craig Stults', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Lewis Squires', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Willy Regan', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Leelanau: {
    name: 'Leelanau County',
    website: 'https://www.leelanau.gov',
    phone: '231-256-9824',
    officials: [
      { name: 'Chet Janik', title: 'County Administrator', party: null },
      { name: 'Joseph Hubbell', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Michael Borkovich', title: 'Sheriff', party: 'Republican' },
      { name: 'Michelle Crocker', title: 'County Clerk', party: 'Republican' },
      { name: 'John Gallagher', title: 'Treasurer', party: 'Republican' },
      { name: 'Michaelene Pawlak', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Rick Robbins', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Debra Rushton', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Lois Bahle', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Ty Wessell', title: 'Commissioner (District 4)', party: 'Democratic', district: 4 },
      { name: 'Patricia Soutas-Little', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
      { name: 'Gwenne Allgaier', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Melinda Lautner', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Luce: {
    name: 'Luce County',
    website: 'https://www.lucecountymi.com',
    phone: '906-293-5521',
    officials: [
      { name: 'Josh Freed', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'John Cischke', title: 'Sheriff', party: 'Republican' },
      { name: 'Sharon Price', title: 'County Clerk', party: 'Republican' },
      { name: 'Kari Korpi', title: 'Treasurer', party: 'Republican' },
      { name: 'Marty Lehto', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Kevin Erickson', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Michelle Clark', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Nancy Morrison', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Phil Nettleton', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Bill Henry', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Mackinac: {
    name: 'Mackinac County',
    website: 'https://www.mackinaccounty.net',
    phone: '906-643-7300',
    officials: [
      { name: 'Jayme Moran', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Edward Wilk', title: 'Sheriff', party: 'Republican' },
      { name: 'Lori Johnston', title: 'County Clerk', party: 'Republican' },
      { name: 'Kelly Kruse', title: 'Treasurer', party: 'Republican' },
      { name: 'Kathleen Malaski', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Scott Shackleton', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Jim Hill', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Karl Qualls', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Ken Kowalski', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'John French', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Menominee: {
    name: 'Menominee County',
    website: 'https://www.menomineecounty.com',
    phone: '906-863-2634',
    officials: [
      { name: 'Jeffrey Rogg', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Kenny Marks', title: 'Sheriff', party: 'Republican' },
      { name: 'Vicki Bingman', title: 'County Clerk', party: 'Republican' },
      { name: 'Leah Talbot', title: 'Treasurer', party: 'Republican' },
      { name: 'Chris Kubasiak', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Dan Lindemann', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'David Tebo', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Art Corradina', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Ronald Wils', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Gene Kierzek', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Missaukee: {
    name: 'Missaukee County',
    website: 'https://www.missaukee.org',
    phone: '231-839-4967',
    officials: [
      { name: 'David Thompson', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Matt Biers', title: 'Sheriff', party: 'Republican' },
      { name: 'Sherry Zollner', title: 'County Clerk', party: 'Republican' },
      { name: 'Lori Cox', title: 'Treasurer', party: 'Republican' },
      { name: 'Jan Michels', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Dean Smallegan', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Roger Ouwinga', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Hubert Minkema', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Star Hughston', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Les Horn', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Newaygo: {
    name: 'Newaygo County',
    website: 'https://www.countyofnewaygo.com',
    phone: '231-689-7200',
    officials: [
      { name: 'Worth Stay', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Bob Mendham', title: 'Sheriff', party: 'Republican' },
      { name: 'Jason VanderStelt', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Brenda DeVries', title: 'Treasurer', party: 'Republican' },
      { name: 'Charles Zarend', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Bryan Kolk', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'James Maike', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Ken DeLaat', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Brent DeVries', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Oceana: {
    name: 'Oceana County',
    website: 'https://www.oceana.mi.us',
    phone: '231-873-4328',
    officials: [
      { name: 'Joseph Bizon', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Craig Mast', title: 'Sheriff', party: 'Republican' },
      { name: 'Desiree Kreitner', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Kristin Wieghmink', title: 'Treasurer', party: 'Republican' },
      { name: 'Phil Morse', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Craig Hardy', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Tim Beggs', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Robert Walker', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Mary Lou Phillips', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Ogemaw: {
    name: 'Ogemaw County',
    website: 'https://www.ogemawcountymi.gov',
    phone: '989-345-0215',
    officials: [
      { name: 'LaDonna Andrew', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Brian Gilbert', title: 'Sheriff', party: 'Republican' },
      { name: 'Caren Pigliacampi', title: 'County Clerk', party: 'Republican' },
      { name: 'Gwen Sanborn', title: 'Treasurer', party: 'Republican' },
      { name: 'Denise Webster', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Scott Adair', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Kathy Stein', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Gary Eno', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Tim Roper', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Don Jay', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Ontonagon: {
    name: 'Ontonagon County',
    website: 'https://www.ontonagoncounty.org',
    phone: '906-884-4255',
    officials: [
      { name: 'Lauri Oswald', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Dale Rantala', title: 'Sheriff', party: 'Republican' },
      { name: 'Stacy Preiss', title: 'County Clerk', party: 'Republican' },
      { name: 'Anna Erickson', title: 'Treasurer', party: 'Republican' },
      { name: 'Roxanne Allen', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Jerry Nuti', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Walter Lindala', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'James Dillinger', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Charles Marczak', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Brian Mahoski', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Osceola: {
    name: 'Osceola County',
    website: 'https://www.osceolacountymi.com',
    phone: '231-832-3261',
    officials: [
      { name: 'Anthony Badovinac', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Jess Halladay', title: 'Sheriff', party: 'Republican' },
      { name: 'Karen Bluhm', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Marilee Swick', title: 'Treasurer', party: 'Republican' },
      { name: 'Tim Michell', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Mark Gregory', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Tom Draper', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Doug Damon', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Roger Elkins', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Oscoda: {
    name: 'Oscoda County',
    website: 'https://www.oscodacountymi.com',
    phone: '989-826-1110',
    officials: [
      { name: 'Kevin Hesselink', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Aaron Miller', title: 'Sheriff', party: 'Republican' },
      { name: 'Jeri Winton', title: 'County Clerk', party: 'Republican' },
      { name: 'Penny Teegardin', title: 'Treasurer', party: 'Republican' },
      { name: 'Nancy Swanson', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Tim Nowiski', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Mark Dore', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Sam McKean', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'David Stewart', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Lee Evans', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Otsego: {
    name: 'Otsego County',
    website: 'https://www.otsegocountymi.gov',
    phone: '989-731-0200',
    officials: [
      { name: 'Mike Rola', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Matt Salerno', title: 'Sheriff', party: 'Republican' },
      { name: 'Susan DeFeyter', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Terri Goss', title: 'Treasurer', party: 'Republican' },
      { name: 'Rob Sobottka', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Rick Wyman', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Gary Farley', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Jeff Kiessel', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Deb Waffle', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  'Presque Isle': {
    name: 'Presque Isle County',
    website: 'https://www.presqueislecounty.org',
    phone: '989-734-3288',
    officials: [
      { name: 'Kenneth Radzibon', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Joe Brewbaker', title: 'Sheriff', party: 'Republican' },
      { name: 'Ann Marie Main', title: 'County Clerk', party: 'Republican' },
      { name: 'Bridget LaLonde', title: 'Treasurer', party: 'Republican' },
      { name: 'Dawn Quaine', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Carl Altman', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Lee Gapczynski', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Michael Darga', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Bob Schell', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Paul Quaine', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Roscommon: {
    name: 'Roscommon County',
    website: 'https://www.roscommoncounty.net',
    phone: '989-275-5923',
    officials: [
      { name: 'Mark Jernigan', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Ed Stern', title: 'Sheriff', party: 'Republican' },
      { name: 'Michelle Stevenson', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Rogene Hendricks', title: 'Treasurer', party: 'Republican' },
      { name: 'Bob Schneider', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Dave Eno', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Tim Muckenthaler', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Ron King', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Pat Readmond', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Sanilac: {
    name: 'Sanilac County',
    website: 'https://www.sanilaccounty.net',
    phone: '810-648-2100',
    officials: [
      { name: 'Mark Reene', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Brad Roff', title: 'Sheriff', party: 'Republican' },
      { name: 'Denise McGuire', title: 'County Clerk', party: 'Republican' },
      { name: 'Trudy Nicol', title: 'Treasurer', party: 'Republican' },
      { name: 'Ann Hogan', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Gary Heberling', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Bill Mausolf', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Joe O\'Mara', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'John Hoffmann', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Dan Dean', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Schoolcraft: {
    name: 'Schoolcraft County',
    website: 'https://www.schoolcraftcounty.net',
    phone: '906-341-3618',
    officials: [
      { name: 'Robert Luce', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Grant Harris', title: 'Sheriff', party: 'Republican' },
      { name: 'Terri Sjoberg', title: 'County Clerk', party: 'Republican' },
      { name: 'Sarah Pleiness', title: 'Treasurer', party: 'Republican' },
      { name: 'Sandy MacLachlan', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Craig Wasen', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Gerald Zellar', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Charlie Bowerman', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Dennis Belan', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Alan Kilar', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  'St. Joseph': {
    name: 'St. Joseph County',
    website: 'https://www.stjosephcountymi.org',
    phone: '269-467-5500',
    officials: [
      { name: 'David Marvin', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Mark Lillywhite', title: 'Sheriff', party: 'Republican' },
      { name: 'Lindsay Oswald', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Kathy Humphreys', title: 'Treasurer', party: 'Republican' },
      { name: 'Dan Czarnecki', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Kathy Pangle', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Dennis Allen', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Rick Shaffer', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Ken Malone', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Alpena: {
    name: 'Alpena County',
    website: 'https://www.alpenacounty.org',
    phone: '989-354-9520',
    officials: [
      { name: 'Myles B. Baker', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Steve Willis', title: 'Sheriff', party: 'Republican' },
      { name: 'Bonnie Friedrichs', title: 'Clerk', party: 'Republican' },
      { name: 'Kim Ludlow', title: 'Treasurer', party: 'Republican' },
      { name: 'John Kozlowski', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Bill Peterson', title: 'Board Chair', party: 'Republican' },
    ],
  },

  Montmorency: {
    name: 'Montmorency County',
    website: 'https://www.montmorencycounty.us',
    phone: '989-785-8022',
    officials: [
      { name: 'Jeffrey Boals', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Don Howell', title: 'Sheriff', party: 'Republican' },
      { name: 'Cheryl Nielsen', title: 'Clerk', party: 'Republican' },
      { name: 'Kathy Bott', title: 'Treasurer', party: 'Republican' },
      { name: 'Karen Loper', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Albert LaFleche', title: 'Board Chair', party: 'Republican' },
    ],
  },

  Alcona: {
    name: 'Alcona County',
    website: 'https://www.alconacountymi.com',
    phone: '989-724-9410',
    officials: [
      { name: 'Thomas Weichel', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Scott Stephenson', title: 'Sheriff', party: 'Republican' },
      { name: 'Stephany Eller', title: 'County Clerk', party: 'Republican' },
      { name: 'Cheryl Franks', title: 'Treasurer', party: 'Republican' },
      { name: 'Melissa Cordes', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Craig Johnston', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Adam Brege', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Carolyn Brummund', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Dan Gauthier', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Kevin Boyat', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Alger: {
    name: 'Alger County',
    website: 'https://www.algercounty.com',
    phone: '906-387-2076',
    officials: [
      { name: 'Robert Steinhoff', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Todd Brock', title: 'Sheriff', party: 'Republican' },
      { name: 'Mary Ann Froberg', title: 'County Clerk', party: 'Republican' },
      { name: 'Lori Weise', title: 'Treasurer', party: 'Republican' },
      { name: 'Judy Reed', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Jerry Doucette', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Albert LaFreniere', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Ken Mattson', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Bill Doucette', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Darcy Long', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Antrim: {
    name: 'Antrim County',
    website: 'https://www.antrimcounty.org',
    phone: '231-533-6353',
    officials: [
      { name: 'James Rossiter', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Daniel Bean', title: 'Sheriff', party: 'Republican' },
      { name: 'Sheryl Guy', title: 'County Clerk', party: 'Republican' },
      { name: 'Kari Kortz', title: 'Treasurer', party: 'Republican' },
      { name: 'Patsy Nemeth', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Christian Marcus', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Jason Helwig', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Terry VanAlstine', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Ed Boettcher', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Dawn LaVanway', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Arenac: {
    name: 'Arenac County',
    website: 'https://www.arenaccountymi.gov',
    phone: '989-846-4626',
    officials: [
      { name: 'Matthew Quist', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Don McIntyre', title: 'Sheriff', party: 'Republican' },
      { name: 'Sandy Wisniewski', title: 'County Clerk', party: 'Republican' },
      { name: 'Ann Zwarensteyn', title: 'Treasurer', party: 'Republican' },
      { name: 'Mindy Kendziorski', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Adam Kroczaleski', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'John Shortman', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Harold Woolhiser', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Robert Draves', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Roger Klenk', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Baraga: {
    name: 'Baraga County',
    website: 'https://www.baragacounty.org',
    phone: '906-524-6183',
    officials: [
      { name: 'Joseph O\'Leary', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Joe Brogan', title: 'Sheriff', party: 'Republican' },
      { name: 'Wendy Goodreau', title: 'County Clerk', party: 'Republican' },
      { name: 'Suzanne Platt', title: 'Treasurer', party: 'Republican' },
      { name: 'Rose Holmquist', title: 'Register of Deeds', party: 'Republican' },
      { name: 'William Menge', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Gale Eilola', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Brad Dakota', title: 'Commissioner (District 3)', party: 'Democratic', district: 3 },
      { name: 'William Rolof', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Wendell Dompier', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Benzie: {
    name: 'Benzie County',
    website: 'https://www.benzieco.net',
    phone: '231-882-9671',
    officials: [
      { name: 'Sara Swanson', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Kyle Rosa', title: 'Sheriff', party: 'Republican' },
      { name: 'Dawn Olney', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Jennifer Hodges', title: 'Treasurer', party: 'Republican' },
      { name: 'Gary Sauer', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Evan Warsecke', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Art Jeannot', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Christina Sullivan', title: 'Commissioner (District 4)', party: 'Democratic', district: 4 },
      { name: 'Bob Roelofs', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Charlevoix: {
    name: 'Charlevoix County',
    website: 'https://www.charlevoixcounty.org',
    phone: '231-547-7200',
    officials: [
      { name: 'Allen Telgenhof', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Charles Vondra', title: 'Sheriff', party: 'Republican' },
      { name: 'Char Menos', title: 'County Clerk', party: 'Republican' },
      { name: 'Gail Meyers', title: 'Treasurer', party: 'Republican' },
      { name: 'Kari Korienek', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Ron Scott', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Chris Christensen', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'George Lasater', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Shirlene Tripp', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Robert Draves', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Aaron Reneger', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Scott Hankins', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Cheboygan: {
    name: 'Cheboygan County',
    website: 'https://www.cheboygancounty.net',
    phone: '231-627-8808',
    officials: [
      { name: 'Melissa Goodrich', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Dale Clarmont', title: 'Sheriff', party: 'Republican' },
      { name: 'Karen Brewster', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Buffy Weldon', title: 'Treasurer', party: 'Republican' },
      { name: 'John Wallace', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Richard Sangster', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Michael Newman', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Ron Williams', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Cal Gouine', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
      { name: 'Roberta Matelski', title: 'Commissioner (District 6)', party: 'Republican', district: 6 },
      { name: 'Steve Lang', title: 'Commissioner (District 7)', party: 'Republican', district: 7 },
    ],
  },

  Chippewa: {
    name: 'Chippewa County',
    website: 'https://www.chippewacountymi.gov',
    phone: '906-635-6300',
    officials: [
      { name: 'Robert Stratton', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Michael Bitnar', title: 'Sheriff', party: 'Republican' },
      { name: 'Catherine Maleport', title: 'County Clerk', party: 'Republican' },
      { name: 'Kelly Church', title: 'Treasurer', party: 'Republican' },
      { name: 'Sharon Kennedy', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Jim Martin', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Casey Izzard', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Scott Shackleton', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Don McLean', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Jim Moore', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Clare: {
    name: 'Clare County',
    website: 'https://www.clareco.net',
    phone: '989-539-7131',
    officials: [
      { name: 'Michelle Ambrozaitis', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'John Wilson', title: 'Sheriff', party: 'Republican' },
      { name: 'Lori Martin', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Jenny McConnell', title: 'Treasurer', party: 'Republican' },
      { name: 'Dale Majewski', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Ken Nestle', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Jeff Haskell', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Carl Littlefield', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Samantha Pung', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Crawford: {
    name: 'Crawford County',
    website: 'https://www.crawfordco.org',
    phone: '989-344-3200',
    officials: [
      { name: 'Katie Niblock', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Shawn Kraycs', title: 'Sheriff', party: 'Republican' },
      { name: 'Sandra Moore', title: 'County Clerk', party: 'Republican' },
      { name: 'Kaye Bertrand', title: 'Treasurer', party: 'Republican' },
      { name: 'Leigh Ann Theunick', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Sharon Priebe', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Ken Melvin', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Shelly Varney', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Lowell Zurek', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Harold Heine', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Delta: {
    name: 'Delta County',
    website: 'https://www.deltacountymi.org',
    phone: '906-789-5100',
    officials: [
      { name: 'Lauren Wickman', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Ed Oswald', title: 'Sheriff', party: 'Republican' },
      { name: 'Nancy Kolich', title: 'County Clerk', party: 'Republican' },
      { name: 'Cindy Anderson', title: 'Treasurer', party: 'Republican' },
      { name: 'Tracy Thomas', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Dave Moyle', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Robert Barron', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'David Rivard', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Myra Croasdell', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Randy Bjork', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Dickinson: {
    name: 'Dickinson County',
    website: 'https://www.dickinsoncountymi.gov',
    phone: '906-774-0988',
    officials: [
      { name: 'Lisa Richards', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Scott Instruments', title: 'Sheriff', party: 'Republican' },
      { name: 'Dolly Cook', title: 'County Clerk', party: 'Republican' },
      { name: 'Dawn Monette', title: 'Treasurer', party: 'Republican' },
      { name: 'Linda Willard', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Joe Stevens', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Henry Wender', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Barbara Kramer', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'John Bolo', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Joe Contratto', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Gladwin: {
    name: 'Gladwin County',
    website: 'https://www.gladwincounty-mi.gov',
    phone: '989-426-7351',
    officials: [
      { name: 'Aaron Miller', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Mike Shea', title: 'Sheriff', party: 'Republican' },
      { name: 'Laura Brandon-Maveal', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Jan Haulotte', title: 'Treasurer', party: 'Republican' },
      { name: 'Terry Walters', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Joel Vernier', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Mike Wisneski', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Thomas Winarski', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Karen Moore', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Gogebic: {
    name: 'Gogebic County',
    website: 'https://www.gogebiccountymi.gov',
    phone: '906-663-4518',
    officials: [
      { name: 'Nicholas Jacobs', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Dan Warchock', title: 'Sheriff', party: 'Republican' },
      { name: 'Gerry Pelissero', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Lorri Mikkola', title: 'Treasurer', party: 'Republican' },
      { name: 'Dan Siirila', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'James Lorenson', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'George Peterson', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Joe Bonovetz', title: 'Commissioner (District 4)', party: 'Democratic', district: 4 },
      { name: 'Robert Orlich', title: 'Commissioner (District 5)', party: 'Democratic', district: 5 },
    ],
  },

  Houghton: {
    name: 'Houghton County',
    website: 'https://www.houghtoncounty.net',
    phone: '906-482-1150',
    officials: [
      { name: 'Michael Makinen', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Joshua Saaranen', title: 'Sheriff', party: 'Republican' },
      { name: 'Jennifer Kelly', title: 'County Clerk', party: 'Republican' },
      { name: 'Lisa Mattila', title: 'Treasurer', party: 'Republican' },
      { name: 'Brooke Perala', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Tom Tikkanen', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Al Koskela', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Gretchen Janssen', title: 'Commissioner (District 3)', party: 'Democratic', district: 3 },
      { name: 'Roy Britz', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Glenn Anderson', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Huron: {
    name: 'Huron County',
    website: 'https://www.co.huron.mi.us',
    phone: '989-269-9942',
    officials: [
      { name: 'Timothy Rutkowski', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Kelly Hanson', title: 'Sheriff', party: 'Republican' },
      { name: 'Lori Neal', title: 'County Clerk', party: 'Republican' },
      { name: 'Becky Bechtel', title: 'Treasurer', party: 'Republican' },
      { name: 'Jamie Learman', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Sami Khoury', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Steve Vaughan', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Joe Murphy', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Todd Talaski', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'John Nugent', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Iosco: {
    name: 'Iosco County',
    website: 'https://www.ioscocountymi.gov',
    phone: '989-362-3497',
    officials: [
      { name: 'James Bacarella', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Scott Frank', title: 'Sheriff', party: 'Republican' },
      { name: 'Nancy Huebel', title: 'County Clerk', party: 'Republican' },
      { name: 'Holly Wight', title: 'Treasurer', party: 'Republican' },
      { name: 'Teri Wing', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Charles Finley', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'David Hershberger', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Terry Kelly', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Tina Allen', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Donald O\'Farrell', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Iron: {
    name: 'Iron County',
    website: 'https://www.iron.org',
    phone: '906-875-3221',
    officials: [
      { name: 'Melissa Powell', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Mark Valesano', title: 'Sheriff', party: 'Republican' },
      { name: 'Patricia Berk', title: 'County Clerk', party: 'Republican' },
      { name: 'Melanie Camps', title: 'Treasurer', party: 'Republican' },
      { name: 'Theresa Saari', title: 'Register of Deeds', party: 'Republican' },
      { name: 'Jim Brennan', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Patti Peretto', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Tim Hicks', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Raymond Coates', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'John Duebner', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Kalkaska: {
    name: 'Kalkaska County',
    website: 'https://www.kalkaskacounty.net',
    phone: '231-258-3300',
    officials: [
      { name: 'Mike Perreault', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Patrick Whiteford', title: 'Sheriff', party: 'Republican' },
      { name: 'Deborah Hill', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Patti Doverdier', title: 'Treasurer', party: 'Republican' },
      { name: 'Dave Comai', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Jim Sweet', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Michael Swanson', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Patty Cox', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Craig Crambell', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Keweenaw: {
    name: 'Keweenaw County',
    website: 'https://www.keweenawcountyonline.org',
    phone: '906-337-2229',
    officials: [
      { name: 'Charles Miller', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Kerry Stein', title: 'Sheriff', party: 'Republican' },
      { name: 'Julie Carlson', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Joann Rowe', title: 'Treasurer', party: 'Republican' },
      { name: 'Don Piche', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Bob DeMarois', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Randy Eckloff', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Del Rajala', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Brian Rajala', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },

  Lake: {
    name: 'Lake County',
    website: 'https://www.lakecounty-michigan.com',
    phone: '231-745-4641',
    officials: [
      { name: 'Craig Cooper', title: 'Prosecuting Attorney', party: 'Republican' },
      { name: 'Rich Martin', title: 'Sheriff', party: 'Republican' },
      { name: 'Ronda Wren', title: 'County Clerk/Register of Deeds', party: 'Republican' },
      { name: 'Rachel Hood', title: 'Treasurer', party: 'Republican' },
      { name: 'Steve Stambough', title: 'Board Chair (District 1)', party: 'Republican', district: 1 },
      { name: 'Don Rockwell', title: 'Commissioner (District 2)', party: 'Republican', district: 2 },
      { name: 'Howard Lodholtz', title: 'Commissioner (District 3)', party: 'Republican', district: 3 },
      { name: 'Paul Peterson', title: 'Commissioner (District 4)', party: 'Republican', district: 4 },
      { name: 'Tom Terpening', title: 'Commissioner (District 5)', party: 'Republican', district: 5 },
    ],
  },
}

/* ── City / municipal officials ── */

export const MI_CITY_OFFICIALS = {
  'Ann Arbor': {
    name: 'City of Ann Arbor',
    website: 'https://www.a2gov.org',
    phone: '734-794-6000',
    officials: [
      { name: 'Dharma Akmon', title: 'Mayor', party: 'Democratic', email: 'DAkmon@a2gov.org' },
      { name: 'Ayesha Ghazi Edwin', title: 'Council Member (Ward 1)', party: 'Democratic', ward: 1, email: 'AGhaziEdwin@a2gov.org' },
      { name: 'Cynthia Harrison', title: 'Council Member (Ward 1)', party: 'Democratic', ward: 1, email: 'CHarrison@a2gov.org' },
      { name: 'Erica Briggs', title: 'Council Member (Ward 2)', party: 'Democratic', ward: 2, email: 'EBriggs@a2gov.org' },
      { name: 'Travis Radina', title: 'Council Member (Ward 2)', party: 'Democratic', ward: 2, email: 'TRadina@a2gov.org' },
      { name: 'Christopher Taylor', title: 'Council Member (Ward 3)', party: 'Democratic', ward: 3, email: 'CTaylor@a2gov.org' },
      { name: 'Jen Eyer', title: 'Council Member (Ward 3)', party: 'Democratic', ward: 3, email: 'JEyer@a2gov.org' },
      { name: 'Jennifer Cornell', title: 'Council Member (Ward 4)', party: 'Democratic', ward: 4, email: 'JCornell@a2gov.org' },
      { name: 'Lisa Disch', title: 'Council Member (Ward 4)', party: 'Democratic', ward: 4, email: 'LDisch@a2gov.org' },
      { name: 'Chris Watson', title: 'Council Member (Ward 5)', party: 'Democratic', ward: 5, email: 'CWatson@a2gov.org' },
      { name: 'Jon Mallek', title: 'Council Member (Ward 5)', party: 'Democratic', ward: 5, email: 'JMallek@a2gov.org' },
    ],
  },

  Detroit: {
    name: 'City of Detroit',
    officials: [
      { name: 'Mary Sheffield', title: 'Mayor', party: 'Democratic' },
      { name: 'James Tate', title: 'Council President (District 1)', party: 'Democratic', district: 1 },
      { name: 'Angela Whitfield-Calloway', title: 'Council Member (District 2)', party: 'Democratic', district: 2 },
      { name: 'Scott Benson', title: 'Council Member (District 3)', party: 'Democratic', district: 3 },
      { name: 'Latisha Johnson', title: 'Council Member (District 4)', party: 'Democratic', district: 4 },
      { name: 'Renata Miller', title: 'Council Member (District 5)', party: 'Democratic', district: 5 },
      { name: 'Gabriela Santiago-Romero', title: 'Council Member (District 6)', party: 'Democratic', district: 6 },
      { name: 'Denzel Anton McCampbell', title: 'Council Member (District 7)', party: 'Democratic', district: 7 },
      { name: 'Coleman Young II', title: 'President Pro Tem (At-Large)', party: 'Democratic' },
      { name: 'Mary Waters', title: 'Council Member (At-Large)', party: 'Democratic' },
    ],
  },

  'Grand Rapids': {
    name: 'City of Grand Rapids',
    website: 'https://www.grandrapidsmi.gov',
    phone: '616-456-3000',
    officials: [
      { name: 'David LaGrand', title: 'Mayor', party: null },
      { name: 'Mark Washington', title: 'City Manager', party: null },
      { name: 'AliciaMarie Belchak', title: 'Commissioner (Ward 1)', party: null, ward: 1 },
      { name: 'Lisa Knight', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Milinda Ysasi', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Kelsey Perdue', title: 'Commissioner (Ward 3)', party: null, ward: 3 },
      { name: 'Marshall Kilgore', title: 'Commissioner (Ward 3)', party: null, ward: 3 },
    ],
  },

  Lansing: {
    name: 'City of Lansing',
    officials: [
      { name: 'Andy Schor', title: 'Mayor', party: 'Democratic', email: null, phone: '517-483-4141' },
      { name: 'Ryan Kost', title: 'Council Member (Ward 1)', party: null, ward: 1 },
      { name: 'Deyanira Nevarez Martinez', title: 'Council Member (Ward 2)', party: null, ward: 2 },
      { name: 'Adam Hussain', title: 'Council Member (Ward 3)', party: null, ward: 3 },
      { name: 'Peter Spadafore', title: 'Council Member (Ward 4)', party: null, ward: 4 },
      { name: 'Tamera Carter', title: 'Council Member (At-Large)', party: null },
      { name: 'Jeremy Garza', title: 'Council Member (At-Large)', party: null },
      { name: 'Trini Lopez Pehlivanoglu', title: 'Council Member (At-Large)', party: null },
      { name: 'Clara Martinez', title: 'Council Member (At-Large)', party: null },
    ],
  },

  Flint: {
    name: 'City of Flint',
    officials: [
      { name: 'Sheldon Neeley', title: 'Mayor', party: 'Democratic' },
      { name: 'Leon El-Alamin', title: 'Council Member (Ward 1)', party: null, ward: 1 },
      { name: 'Ladel Lewis', title: 'Council Member (Ward 2)', party: null, ward: 2 },
      { name: 'LaShawn Johnson', title: 'Council Member (Ward 3)', party: null, ward: 3 },
      { name: 'Judy Priestley', title: 'Council Member (Ward 4)', party: null, ward: 4 },
      { name: 'Jerri Winfrey-Carter', title: 'Council Member (Ward 5)', party: null, ward: 5 },
      { name: 'Tonya Burns', title: 'Council Member (Ward 6)', party: null, ward: 6 },
      { name: 'Candice Mushatt', title: 'Council President (Ward 7)', party: null, ward: 7 },
      { name: 'Dennis Pfeiffer', title: 'Council Member (Ward 8)', party: null, ward: 8 },
      { name: 'Jonathan Jarrett', title: 'Council Vice President (Ward 9)', party: null, ward: 9 },
    ],
  },

  Kalamazoo: {
    name: 'City of Kalamazoo',
    officials: [
      { name: 'David Anderson', title: 'Mayor', party: null },
      { name: 'Drew Duncan', title: 'Vice Mayor', party: null },
      { name: 'Jeanne Hess', title: 'Commissioner', party: null },
      { name: 'Chris Praedel', title: 'Commissioner', party: null },
      { name: 'Alonzo Wilson II', title: 'Commissioner', party: null },
      { name: 'Stephanie Hoffman', title: 'Commissioner', party: null },
      { name: 'Jacqueline Slaby', title: 'Commissioner', party: null },
    ],
  },

  Dearborn: {
    name: 'City of Dearborn',
    officials: [
      { name: 'Abdullah H. Hammoud', title: 'Mayor', party: 'Democratic' },
      { name: 'Michael T. Sareini', title: 'Council President', party: null, email: 'MSareini@Dearborn.gov' },
      { name: 'Leslie C. Herrick', title: 'Council President Pro Tem', party: null, email: 'LHerrick@Dearborn.gov' },
      { name: 'Kamal Alsawafy', title: 'Council Member', party: null, email: 'KAlsawafy@dearborn.gov' },
      { name: 'Ken Paris', title: 'Council Member', party: null, email: 'KParis@dearborn.gov' },
      { name: 'Robert Abraham', title: 'Council Member', party: null, email: 'RAbraham@dearborn.gov' },
      { name: 'Mustapha Hammoud', title: 'Council Member', party: null, email: 'MHammoud@dearborn.gov' },
      { name: 'Gary Enos', title: 'Council Member', party: null, email: 'GEnos@dearborn.gov' },
    ],
  },

  Ypsilanti: {
    name: 'City of Ypsilanti',
    officials: [
      { name: 'Nicole Brown', title: 'Mayor', party: 'Democratic', email: 'nbrown@cityofypsilanti.com', phone: '313-888-4044' },
      { name: "Me'Chelle King", title: 'Council Member (Ward 1)', party: null, ward: 1, email: 'mking@cityofypsilanti.com', phone: '734-657-1030' },
      { name: 'Roland Tooson', title: 'Council Member (Ward 1)', party: null, ward: 1, email: 'rtooson@cityofypsilanti.com', phone: '734-635-3605' },
      { name: 'Patrick McLean', title: 'Council Member (Ward 2)', party: null, ward: 2, email: 'pmclean@cityofypsilanti.com', phone: '614-395-0466' },
      { name: 'Steve Wilcoxen', title: 'Mayor Pro-Tem / Council Member (Ward 2)', party: null, ward: 2, email: 'swilcoxen@cityofypsilanti.com', phone: '734-657-1796' },
      { name: 'Desirae Simmons', title: 'Council Member (Ward 3)', party: null, ward: 3, email: 'dsimmons@cityofypsilanti.com', phone: '256-541-2347' },
      { name: 'Amber Fellows', title: 'Council Member (Ward 3)', party: null, ward: 3, email: 'afellows@cityofypsilanti.com', phone: '734-219-3798' },
    ],
  },

  'East Lansing': {
    name: 'City of East Lansing',
    officials: [
      { name: 'Erik Altmann', title: 'Mayor', party: null, email: 'Erik.altmann@cityofeastlansing.com', phone: '517-927-8589' },
      { name: 'Chuck Grigsby', title: 'Mayor Pro Tem', party: null, email: 'chuck.grigsby@cityofeastlansing.com', phone: '517-899-7277' },
      { name: 'Mark Meadows', title: 'Council Member', party: null, email: 'Mark.meadows@cityofeastlansing.com', phone: '517-319-6869' },
      { name: 'Kerry Ebersole Singh', title: 'Council Member', party: null, email: 'ksingh@cityofeastlansing.com', phone: '517-488-9029' },
      { name: 'Steven Whelan', title: 'Council Member', party: null, email: 'steve.whelan@cityofeastlansing.com', phone: '517-899-7906' },
    ],
  },

  'Traverse City': {
    name: 'City of Traverse City',
    county: 'Grand Traverse',
    website: 'https://www.traversecitymi.gov',
    phone: '231-922-4480',
    officials: [
      { name: 'Amy Shamroe', title: 'Mayor', party: null, email: 'ashamroe@traversecitymi.gov', phone: '231-715-1777' },
      { name: 'Laura Ness', title: 'Mayor Pro Tem', party: null, email: 'lness@traversecitymi.gov', phone: '231-409-5993' },
      { name: 'Jackie Anderson', title: 'Commissioner', party: null, email: 'janderson@traversecitymi.gov', phone: '231-649-7184' },
      { name: 'Lance Boehmer', title: 'Commissioner', party: null, email: 'lance@traversecitymi.gov', phone: '231-714-9622' },
      { name: 'Kenneth M. Funk', title: 'Commissioner', party: null, email: 'kenneth@traversecitymi.gov', phone: '517-673-2899' },
      { name: 'Heather Shaw', title: 'Commissioner', party: null, email: 'hshaw@traversecitymi.gov', phone: '231-883-3338' },
      { name: 'Mitchell Treadwell', title: 'Commissioner', party: null, email: 'mtreadwell@traversecitymi.gov', phone: '231-409-4819' },
      { name: 'Benjamin Marentette', title: 'City Manager', party: null, email: 'bmarentette@traversecitymi.gov', phone: '231-922-4440' },
    ],
  },

  Warren: {
    name: 'City of Warren',
    website: 'https://www.cityofwarren.org',
    phone: '586-258-2060',
    officials: [
      { name: 'Lori Stone', title: 'Mayor', party: 'Democratic', phone: '586-574-4520' },
      { name: 'Angela Rogensues', title: 'Council President (At-Large)', party: null, email: 'angela@cityofwarren.org', phone: '586-209-4964' },
      { name: 'Dave Dwyer', title: 'Mayor Pro Tem (At-Large)', party: null, email: 'ddwyer@cityofwarren.org', phone: '586-665-0705' },
      { name: 'Melody Magee', title: 'Council Vice President (District 1)', party: null, district: 1, email: 'mmagee@cityofwarren.org', phone: '586-275-7233' },
      { name: 'Jonathan Lafferty', title: 'Council Member (District 2)', party: null, district: 2, email: 'jlafferty@cityofwarren.org', phone: '586-804-9156' },
      { name: 'Mindy Moore', title: 'Council Secretary (District 3)', party: null, district: 3, email: 'mindy@cityofwarren.org', phone: '586-703-5177' },
      { name: 'Gary Boike', title: 'Council Member (District 4)', party: null, district: 4, email: 'gboike@cityofwarren.org', phone: '586-214-1653' },
      { name: 'Henry Newnan', title: 'Council Member (District 5)', party: null, district: 5, email: 'hnewnan@cityofwarren.org', phone: '586-360-4998' },
    ],
  },

  'Sterling Heights': {
    name: 'City of Sterling Heights',
    website: 'https://www.sterlingheights.gov',
    phone: '586-446-2489',
    officials: [
      { name: 'Michael Taylor', title: 'Mayor', party: null },
      { name: 'Liz Sierawski', title: 'Mayor Pro Tem', party: null },
      { name: 'Michael Radtke', title: 'Council Member', party: null },
      { name: 'Henry Yanez', title: 'Council Member', party: null },
      { name: 'Robert Mijac', title: 'Council Member', party: null },
      { name: 'Maria Schmidt', title: 'Council Member', party: null },
      { name: 'Barbara Ziarko', title: 'Council Member', party: null },
    ],
  },

  Livonia: {
    name: 'City of Livonia',
    website: 'https://livonia.gov',
    phone: '734-466-2200',
    officials: [
      { name: 'Maureen Miller Brosnan', title: 'Mayor', party: 'Democratic' },
      { name: 'Kayleigh Reid', title: 'Council President', party: null },
      { name: 'Patrick Brockway', title: 'Council Vice President', party: null },
      { name: 'Carrie Budzinski', title: 'Council Member', party: null },
      { name: 'Brandon McCullough', title: 'Council Member', party: null },
      { name: 'Eileen McDonnell', title: 'Council Member', party: null },
      { name: 'Robin Persiconi', title: 'Council Member', party: null },
      { name: 'Martha Ptashnik', title: 'Council Member', party: null },
    ],
  },

  Troy: {
    name: 'City of Troy',
    website: 'https://troymi.gov',
    phone: '248-524-3300',
    officials: [
      { name: 'Ethan Baker', title: 'Mayor', party: null },
      { name: 'Hirak Chanda', title: 'Mayor Pro Tem', party: null },
      { name: 'Annalisa Bluhm', title: 'Council Member', party: null },
      { name: 'Theresa Brooks', title: 'Council Member', party: null },
      { name: 'Rebecca Chamberlain', title: 'Council Member', party: null },
      { name: 'Mark Gunn', title: 'Council Member', party: null },
      { name: 'David Hamilton', title: 'Council Member', party: null },
    ],
  },

  'Battle Creek': {
    name: 'City of Battle Creek',
    website: 'https://www.battlecreekmi.gov',
    phone: '269-966-3348',
    officials: [
      { name: 'Mark Behnke', title: 'Mayor', party: null },
      { name: 'Sherry Sofia', title: 'Vice Mayor', party: null },
      { name: 'Jessica LaCosse', title: 'Commissioner', party: null },
      { name: 'Paige Katsarsky-Smith', title: 'Commissioner', party: null },
      { name: "Patrick O'Donnell", title: 'Commissioner', party: null },
      { name: 'Christopher Simmons', title: 'Commissioner', party: null },
      { name: 'Jim Lance', title: 'Commissioner', party: null },
      { name: 'Jenasia Morris', title: 'Commissioner', party: null },
      { name: 'Carla Reynolds', title: 'Commissioner', party: null },
    ],
  },

  Muskegon: {
    name: 'City of Muskegon',
    website: 'https://muskegon-mi.gov',
    phone: '231-724-6702',
    officials: [
      { name: 'Ken Johnson', title: 'Mayor', party: null },
      { name: 'Jonathan Seyferth', title: 'City Manager', party: null },
      { name: 'Rebecca St. Clair', title: 'Vice Mayor (At-Large)', party: null },
      { name: 'Kiley Jackson', title: 'Commissioner (At-Large)', party: null },
      { name: 'Jay Kilgo', title: 'Commissioner (Ward 1)', party: null, ward: 1 },
      { name: 'Willie German Jr.', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Destinee Keener', title: 'Commissioner (Ward 3)', party: null, ward: 3 },
      { name: 'Katrina Kochin', title: 'Commissioner (Ward 4)', party: null, ward: 4 },
    ],
  },

  'Muskegon Heights': {
    name: 'City of Muskegon Heights',
    website: 'https://muskegonheights.us',
    phone: '231-733-8820',
    officials: [
      { name: 'Bonnie McGlothin', title: 'Mayor', party: null },
      { name: 'Kellie Kitchen', title: 'Mayor Pro Tem', party: null },
      { name: 'Derrick Lamar Collins', title: 'Council Member', party: null },
      { name: 'Ronald Jenkins', title: 'Council Member', party: null },
      { name: 'Lashae Simmons', title: 'Council Member', party: null },
      { name: 'Kimberly Sims', title: 'Council Member', party: null },
      { name: 'Andre Williams', title: 'Council Member', party: null },
    ],
  },

  'Norton Shores': {
    name: 'City of Norton Shores',
    website: 'https://nortonshores.org',
    phone: '231-798-4391',
    officials: [
      { name: 'Gary Nelund', title: 'Mayor', party: null },
      { name: 'Anthony Chandler', title: 'City Administrator', party: null },
      { name: 'Elizabeth Fox', title: 'Council Member (At-Large)', party: null },
      { name: 'Michael Hylland', title: 'Council Member (At-Large)', party: null },
      { name: 'Christopher P. Halloran', title: 'Council Member (At-Large)', party: null },
      { name: 'Morgenstern', title: 'Council Member', party: null },
      { name: 'Sowa', title: 'Council Member', party: null },
      { name: 'Olson', title: 'Council Member', party: null },
      { name: 'Jurkas', title: 'Council Member', party: null },
      { name: 'Fisher', title: 'Council Member', party: null },
    ],
  },

  'North Muskegon': {
    name: 'City of North Muskegon',
    website: 'https://www.northmuskegon.org/',
    phone: '231-744-1616',
    officials: [
      { name: 'Chris Nance', title: 'Mayor', party: null },
      { name: "J'Nai Closz", title: 'Council Member', party: null },
      { name: 'Bill Mogren', title: 'Council Member', party: null },
      { name: 'Patricia McKibben', title: 'Council Member', party: null },
      { name: 'Lisa Schanhals', title: 'Council Member', party: null },
      { name: 'Adam Schultz', title: 'Council Member', party: null },
      { name: 'Chris Wilson', title: 'Council Member', party: null },
    ],
  },

  'Roosevelt Park': {
    name: 'City of Roosevelt Park',
    website: 'https://rooseveltpark.org',
    phone: '231-755-3761',
    officials: [
      { name: 'Aaron Langlois', title: 'Mayor', party: null },
      { name: 'Jared Olson', title: 'City Manager', party: null },
      { name: 'Ann Wisniewski', title: 'City Clerk', party: null },
      { name: 'Sutton', title: 'Mayor Pro Tem', party: null },
      { name: 'Nilson', title: 'Council Member', party: null },
      { name: 'Crossno', title: 'Council Member', party: null },
      { name: 'Burmeister', title: 'Council Member', party: null },
      { name: 'Goodman', title: 'Council Member', party: null },
      { name: 'Johnson', title: 'Council Member', party: null },
    ],
  },

  Whitehall: {
    name: 'City of Whitehall',
    website: 'https://cityofwhitehall.org',
    phone: '231-894-4048',
    officials: [
      { name: 'Tom Ziemer', title: 'Mayor', party: null },
      { name: 'Dan Tavernier', title: 'City Manager', party: null },
      { name: 'Jeff Holmstrom', title: 'Mayor Pro Tem', party: null },
      { name: 'Scott Brown', title: 'Council Member', party: null },
      { name: 'Tanya Cabala', title: 'Council Member', party: null },
      { name: 'Debi Hillebrand', title: 'Council Member', party: null },
      { name: 'Bryan Mahan', title: 'Council Member', party: null },
    ],
  },

  Montague: {
    name: 'City of Montague',
    website: 'https://cityofmontague.org',
    phone: '231-893-1155',
    officials: [
      { name: 'Tom Lohman', title: 'Mayor', party: null },
      { name: 'Jeff Auch', title: 'City Manager', party: null },
      { name: 'Ken Mahoney', title: 'Council Member', party: null },
      { name: 'Lisa Kiel', title: 'Council Member', party: null },
      { name: 'Susan Newhof', title: 'Council Member', party: null },
      { name: 'Bob Hires', title: 'Council Member', party: null },
      { name: 'Laura LaGuire', title: 'Council Member', party: null },
      { name: 'Paul Schultz', title: 'Council Member', party: null },
    ],
  },
  Holland: {
    name: 'City of Holland',
    website: 'https://www.cityofholland.com',
    phone: '616-355-1300',
    officials: [
      { name: 'Nathan Bocks', title: 'Mayor', party: null },
      { name: 'Tim Vreeman', title: 'Council Member (Ward 1)', party: null, ward: 1 },
      { name: 'Quincy Byrd', title: 'Council Member (At-Large)', party: null },
      { name: 'Belinda Sol', title: 'Council Member (Ward 3)', party: null, ward: 3 },
      { name: 'Kim Rowan', title: 'Council Member (Ward 4)', party: null, ward: 4 },
      { name: 'Scott Corbin', title: 'Council Member (Ward 5)', party: null, ward: 5 },
      { name: 'Michael Schultheis', title: 'Council Member (At-Large)', party: null },
    ],
  },

  Saginaw: {
    name: 'City of Saginaw',
    website: 'https://www.saginaw-mi.com',
    phone: '989-759-1400',
    officials: [
      { name: 'Brenda Moore', title: 'Mayor', party: null },
      { name: 'Jacinta Seals', title: 'Council Member', party: null },
      { name: 'Michael Balls', title: 'Council Member', party: null },
      { name: 'Priscilla Garcia', title: 'Council Member', party: null },
      { name: 'Bill Ostash', title: 'Council Member', party: null },
      { name: 'Eric Braddock Sr.', title: 'Council Member', party: null },
      { name: 'Heidi Wiggins', title: 'Council Member', party: null },
      { name: 'Carly Hammond', title: 'Council Member', party: null },
      { name: 'Tobias Young', title: 'Council Member', party: null },
    ],
  },

  Midland: {
    name: 'City of Midland',
    website: 'https://www.cityofmidlandmi.gov',
    phone: '989-837-3300',
    officials: [
      { name: 'Maureen Donker', title: 'Mayor (Ward 2)', party: null, ward: 2 },
      { name: 'Diane Brown Wilhelm', title: 'Mayor Pro Tem (Ward 4)', party: null, ward: 4 },
      { name: 'Tim Soler', title: 'Council Member (Ward 1)', party: null, ward: 1 },
      { name: 'Dave Pasek', title: 'Council Member (Ward 3)', party: null, ward: 3 },
      { name: 'Marty Wazbinski', title: 'Council Member (Ward 5)', party: null, ward: 5 },
    ],
  },

  Jackson: {
    name: 'City of Jackson',
    website: 'https://www.cityofjackson.org',
    phone: '517-768-6060',
    officials: [
      { name: 'Daniel Mahoney', title: 'Mayor', party: null, phone: '517-914-2706' },
      { name: 'Arlene Robinson', title: 'Council Member (Ward 1)', party: null, ward: 1, phone: '517-960-5866' },
      { name: 'Freddie Dancy', title: 'Council Member (Ward 2)', party: null, ward: 2, phone: '517-740-1250' },
      { name: 'Angelita V. Gunn', title: 'Council Member (Ward 3)', party: null, ward: 3, phone: '517-258-3455' },
      { name: 'Conner Wood', title: 'Council Member (Ward 4)', party: null, ward: 4, phone: '989-444-9151' },
      { name: 'Shalanda Hunt', title: 'Council Member (Ward 5)', party: null, ward: 5, phone: '517-315-7111' },
      { name: 'Will Forgrave', title: 'Council Member (Ward 6)', party: null, ward: 6, phone: '517-316-5750' },
    ],
  },

  /* ── West Michigan cities ── */

  Portage: {
    name: 'City of Portage',
    website: 'https://www.portagemi.gov',
    phone: '269-329-4511',
    officials: [
      { name: 'Patricia M. Randall', title: 'Mayor', party: null },
      { name: 'Jim Pearson', title: 'Mayor Pro Tem', party: null },
      { name: 'Chris Burns', title: 'Council Member', party: null },
      { name: 'Vic Ledbetter', title: 'Council Member', party: null },
      { name: 'Nicole Miller', title: 'Council Member', party: null },
      { name: 'Kathleen Olmsted', title: 'Council Member', party: null },
      { name: 'Jihan Ain Young', title: 'Council Member', party: null },
    ],
  },

  Wyoming: {
    name: 'City of Wyoming',
    website: 'https://www.wyomingmi.gov',
    phone: '616-530-7226',
    officials: [
      { name: 'Kent Vanderwood', title: 'Mayor', party: null },
      { name: 'Robert Postema', title: 'Mayor Pro Tem (Ward 3)', party: null, ward: 3 },
      { name: 'Kyle Brethauer', title: 'Council Member (Ward 1)', party: null, ward: 1 },
      { name: 'Marissa Postler', title: 'Council Member (Ward 2)', party: null, ward: 2 },
      { name: 'Sheldon DeKryger', title: 'Council Member (At-Large)', party: null },
      { name: 'Renee Hill', title: 'Council Member (At-Large)', party: null },
      { name: 'Robert Arnoys', title: 'Council Member (At-Large)', party: null },
    ],
  },

  Kentwood: {
    name: 'City of Kentwood',
    website: 'https://www.kentwood.us',
    phone: '616-698-9610',
    officials: [
      { name: 'Stephen Kepley', title: 'Mayor', party: null },
      { name: 'Robert Coughlin', title: 'Mayor Pro Tem (Ward 1)', party: null, ward: 1 },
      { name: 'Clarkston Morgan', title: 'Commissioner (Ward 1)', party: null, ward: 1 },
      { name: 'David Moore', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Jessica Ann Tyson', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Betsy Artz', title: 'Commissioner (At-Large)', party: null },
      { name: 'Dustin Moseley', title: 'Commissioner (At-Large)', party: null },
    ],
  },

  Walker: {
    name: 'City of Walker',
    website: 'https://www.walkermi.gov',
    phone: '616-453-6311',
    officials: [
      { name: 'Gary Carey Jr.', title: 'Mayor', party: null },
      { name: 'Elaina Huizenga-Chase', title: 'Mayor Pro Tem (Ward 3)', party: null, ward: 3 },
      { name: 'Steven Gilbert', title: 'Commissioner (Ward 1)', party: null, ward: 1 },
      { name: 'Mike Burde', title: 'Commissioner (Ward 1)', party: null, ward: 1 },
      { name: 'Roxanne Deschaine', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Jessica Babcock', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Melanie Grooters', title: 'Commissioner (Ward 3)', party: null, ward: 3 },
    ],
  },

  Grandville: {
    name: 'City of Grandville',
    website: 'https://www.cityofgrandville.com',
    phone: '616-531-3030',
    officials: [
      { name: 'Steve Maas', title: 'Mayor', party: null },
      { name: 'J.R. VanderWall', title: 'Mayor Pro Tem', party: null },
      { name: 'Jason Flanigan', title: 'Council Member', party: null },
      { name: 'Randy Gelderloos', title: 'Council Member', party: null },
      { name: 'Joshua Meringa', title: 'Council Member', party: null },
      { name: 'Tim Steenstra', title: 'Council Member', party: null },
      { name: 'Mike Sullivan', title: 'Council Member', party: null },
    ],
  },

  'East Grand Rapids': {
    name: 'City of East Grand Rapids',
    website: 'https://www.eastgrmi.gov',
    phone: '616-949-2110',
    officials: [
      { name: 'Katie Favale', title: 'Mayor', party: null },
      { name: 'Shea Charles', title: 'City Manager', party: null },
      { name: 'Ryan Burdick', title: 'Commissioner (Ward 1)', party: null, ward: 1 },
      { name: 'Kate Skaggs', title: 'Commissioner (Ward 1)', party: null, ward: 1 },
      { name: 'Chris Wessely', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Bradley Hunter', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Abbie Groff-Blaszak', title: 'Commissioner (Ward 3)', party: null, ward: 3 },
      { name: 'Laura Schwartz', title: 'Commissioner (Ward 3)', party: null, ward: 3 },
    ],
  },

  'Cedar Springs': {
    name: 'City of Cedar Springs',
    website: 'https://cityofcedarsprings.org',
    phone: '616-696-1330',
    officials: [
      { name: 'Lisa Atchison', title: 'Mayor', party: null },
      { name: 'Renee Race', title: 'Mayor Pro Tem', party: null },
      { name: 'Pamela Conley', title: 'Council Member', party: null },
      { name: 'Jerry Gross Sr.', title: 'Council Member', party: null },
      { name: 'Brayden Marvel', title: 'Council Member', party: null },
      { name: 'Michael Maxson', title: 'Council Member', party: null },
      { name: 'Rose Powell', title: 'Council Member', party: null },
    ],
  },

  Lowell: {
    name: 'City of Lowell',
    website: 'https://www.lowellmi.gov',
    phone: '616-897-8457',
    officials: [
      { name: 'Mike DeVore', title: 'Mayor', party: null },
      { name: 'Jim Salzwedel', title: 'Mayor Pro Tem', party: null },
      { name: 'Michael T. Burns', title: 'City Manager', party: null },
      { name: 'Mark Ritzema', title: 'Council Member', party: null },
      { name: 'Eric Bartkus', title: 'Council Member', party: null },
      { name: 'Beryl Bartkus', title: 'Council Member', party: null },
    ],
  },

  Rockford: {
    name: 'City of Rockford',
    website: 'https://www.rockford.mi.us',
    phone: '616-866-1537',
    officials: [
      { name: 'Tammy Bergstrom', title: 'Mayor', party: null },
      { name: 'Dale Dalman', title: 'Mayor Pro Tem', party: null },
      { name: 'Terry Konkle', title: 'Council Member', party: null },
      { name: 'Cheryl Scales', title: 'Council Member', party: null },
      { name: 'Charles Baker', title: 'Council Member', party: null },
    ],
  },

  /* ── Metro Detroit / Oakland County cities ── */

  Westland: {
    name: 'City of Westland',
    website: 'https://www.cityofwestland.com',
    phone: '734-467-3200',
    officials: [
      { name: 'Kevin Coleman', title: 'Mayor', party: null },
      { name: 'Mike McDermott', title: 'Council President', party: null },
      { name: 'LeKisha Maxwell', title: 'Council President Pro Tem', party: null },
      { name: 'Emily Bauman', title: 'Council Member', party: null },
      { name: 'Antoinette Martin', title: 'Council Member', party: null },
      { name: 'Melissa Sampey', title: 'Council Member', party: null },
      { name: 'Andrea Rutkowski', title: 'Council Member', party: null },
      { name: 'John Sullivan', title: 'Council Member', party: null },
    ],
  },

  Southfield: {
    name: 'City of Southfield',
    website: 'https://www.cityofsouthfield.com',
    phone: '248-796-5000',
    officials: [
      { name: 'Ken Siver', title: 'Mayor', party: null, phone: '248-796-5100' },
      { name: 'Tawnya Morris', title: 'Council President', party: null },
      { name: 'Lloyd Crews', title: 'Council President Pro Tem', party: null },
      { name: 'Tanesha Peeples', title: 'Council Member', party: null },
      { name: 'Jason Hoskins', title: 'Council Member', party: null },
      { name: 'Daniel Brightwell', title: 'Council Member', party: null },
      { name: 'Michael Mandelbaum', title: 'Council Member', party: null },
      { name: 'Tanya Markos-Vanno', title: 'Council Member', party: null },
    ],
  },

  'Royal Oak': {
    name: 'City of Royal Oak',
    website: 'https://www.romi.gov',
    phone: '248-246-3000',
    officials: [
      { name: 'Michael Fournier', title: 'Mayor', party: null },
      { name: 'Patricia Paruch', title: 'Mayor Pro Tem', party: null },
      { name: 'Melanie Macey', title: 'Commissioner', party: null },
      { name: 'Monica Hunt', title: 'Commissioner', party: null },
      { name: 'Sharlan Douglas', title: 'Commissioner', party: null },
      { name: 'Brandon Kolo', title: 'Commissioner', party: null },
      { name: 'Kyle DuBuc', title: 'Commissioner', party: null },
    ],
  },

  Pontiac: {
    name: 'City of Pontiac',
    website: 'https://www.pontiac.mi.us',
    phone: '248-758-3200',
    officials: [
      { name: 'Mike McGuinness', title: 'Mayor', party: null },
      { name: 'Chris Jackson', title: 'Council Member (District 1)', party: null, district: 1 },
      { name: 'Milana Jones', title: 'Council Member (District 2)', party: null, district: 2 },
      { name: 'Mikhail Goodman', title: 'Council Member (District 3)', party: null, district: 3 },
      { name: 'Kathalee James', title: 'Council Member (District 4)', party: null, district: 4 },
      { name: 'William Carrington', title: 'Council Member (District 5)', party: null, district: 5 },
      { name: 'Regina Campbell', title: 'Council Member (District 6)', party: null, district: 6 },
      { name: 'Adrian Austin', title: 'Council Member (At-Large)', party: null },
    ],
  },

  /* ── Upper Peninsula cities ── */

  Marquette: {
    name: 'City of Marquette',
    website: 'https://www.marquettemi.gov',
    phone: '906-228-0435',
    officials: [
      { name: 'Paul Schloegel', title: 'Mayor', party: null },
      { name: 'Jeremy Ottaway', title: 'Mayor Pro Tem', party: null },
      { name: 'Sally Davis', title: 'Commissioner', party: null },
      { name: 'Cary Gottlieb', title: 'Commissioner', party: null },
      { name: 'Jessica Hanley', title: 'Commissioner', party: null },
      { name: 'Michael Larson', title: 'Commissioner', party: null },
      { name: 'Cody Mayer', title: 'Commissioner', party: null },
      { name: 'Karen Kovacs', title: 'City Manager', party: null },
    ],
  },

  /* ── Northern Lower Michigan cities ── */

  Petoskey: {
    name: 'City of Petoskey',
    website: 'https://www.petoskey.us',
    phone: '231-347-2500',
    officials: [
      { name: 'John Murphy', title: 'Mayor', party: null },
      { name: 'Kate Marshall', title: 'Mayor Pro Tem', party: null },
      { name: 'Grant Dittmar', title: 'Council Member', party: null },
      { name: 'Derek Shiels', title: 'Council Member', party: null },
      { name: 'Cortland Davis', title: 'Council Member', party: null },
    ],
  },

  Cadillac: {
    name: 'City of Cadillac',
    website: 'https://www.cadillac-mi.net',
    phone: '231-775-0181',
    officials: [
      { name: 'David Powell', title: 'Mayor', party: null },
    ],
  },

  'Big Rapids': {
    name: 'City of Big Rapids',
    website: 'https://www.cityofbr.org',
    phone: '231-592-4020',
    officials: [
      { name: 'Fred Guenther', title: 'Mayor', party: null },
      { name: 'Amanda Johnson', title: 'Commissioner', party: null },
      { name: 'David Rhodes', title: 'Commissioner', party: null },
      { name: 'Karen Simmon', title: 'Commissioner', party: null },
      { name: 'Lorraine James', title: 'Commissioner', party: null },
    ],
  },

  'Mt. Pleasant': {
    name: 'City of Mt. Pleasant',
    website: 'https://www.mt-pleasant.org',
    phone: '989-779-5300',
    officials: [
      { name: 'Boomer Wingard', title: 'Mayor', party: null },
      { name: 'Maureen Eke', title: 'Vice Mayor', party: null },
      { name: 'Mary Alsager', title: 'Commissioner', party: null },
      { name: 'Elizabeth Busch', title: 'Commissioner', party: null },
      { name: 'Ryon Skalitzky', title: 'Commissioner', party: null },
      { name: 'Grace Rollins', title: 'Commissioner', party: null },
    ],
  },

  Alpena: {
    name: 'City of Alpena',
    website: 'https://www.alpena.mi.us',
    phone: '989-354-1700',
    officials: [
      { name: 'Cindy Johnson', title: 'Mayor', party: null },
      { name: 'Karol Walchak', title: 'Mayor Pro Tem', party: null },
    ],
  },

  Ludington: {
    name: 'City of Ludington',
    website: 'https://www.ludington.mi.us',
    phone: '231-845-6237',
    officials: [
      { name: 'Mark Barnett', title: 'Mayor', party: null },
      { name: 'Angela Serna', title: 'Mayor Pro Tem', party: null },
      { name: 'Kathy Winczewski', title: 'Council Member', party: null },
      { name: 'Steve Miller', title: 'Council Member', party: null },
      { name: 'Ted Rotta', title: 'Council Member', party: null },
    ],
  },

  Manistee: {
    name: 'City of Manistee',
    website: 'https://www.manisteemi.gov',
    phone: '231-723-2555',
    officials: [
      { name: 'Lynda Beaton', title: 'Mayor', party: null },
      { name: 'James Grabowski', title: 'Council Member', party: null },
      { name: 'Mike Strzalkowski', title: 'Council Member', party: null },
      { name: 'Jack Bialik', title: 'Council Member', party: null },
      { name: 'Megan Gielczyk', title: 'Council Member', party: null },
    ],
  },

  /* ── East Michigan cities ── */

  'Bay City': {
    name: 'City of Bay City',
    website: 'https://www.baycitymi.org',
    phone: '989-894-8147',
    officials: [
      { name: 'Christopher Girard', title: 'Mayor', party: null, email: 'girard@baycitymi.gov' },
      { name: 'Laura Kubit', title: 'Commissioner (Ward 1)', party: null, ward: 1, email: 'kubit@baycitymi.gov' },
      { name: 'Craig Kokaly', title: 'Commissioner (Ward 2)', party: null, ward: 2, email: 'kokaly@baycitymi.gov' },
      { name: 'Katie Doyle', title: 'Commissioner (Ward 3)', party: null, ward: 3, email: 'doyle@baycitymi.gov' },
      { name: 'Benjamin B. Tenney', title: 'Commissioner (Ward 4)', party: null, ward: 4, email: 'tenney@baycitymi.gov' },
      { name: 'Mark T. Zanotti', title: 'Commissioner (Ward 5)', party: null, ward: 5, email: 'zanotti@baycitymi.gov' },
      { name: 'Alexander Dewitt', title: 'Commissioner (Ward 6)', party: null, ward: 6, email: 'dewitt@baycitymi.gov' },
      { name: 'Christopher Runberg', title: 'Commissioner (Ward 7)', party: null, ward: 7, email: 'runberg@baycitymi.gov' },
      { name: 'Joseph Charlebois', title: 'Commissioner (Ward 8)', party: null, ward: 8, email: 'charlebois@baycitymi.gov' },
      { name: 'Cordal D. Morris', title: 'Commissioner (Ward 9)', party: null, ward: 9, email: 'morris@baycitymi.gov' },
    ],
  },

  'Port Huron': {
    name: 'City of Port Huron',
    website: 'https://www.porthuron.org',
    phone: '810-984-9700',
    officials: [
      { name: 'Pauline Repp', title: 'Mayor', party: null },
      { name: 'Lisa Beedon', title: 'Council Member (At-Large)', party: null },
      { name: 'Bob Kelley', title: 'Council Member (At-Large)', party: null },
      { name: 'Jeff Pemberton', title: 'Council Member (At-Large)', party: null },
      { name: 'Ryan Fisher', title: 'Council Member (At-Large)', party: null },
      { name: 'Scott Instruments', title: 'Council Member (At-Large)', party: null },
      { name: 'Anita Ashford', title: 'Council Member (At-Large)', party: null },
    ],
  },

  Lapeer: {
    name: 'City of Lapeer',
    website: 'https://www.ci.lapeer.mi.us',
    phone: '810-664-2510',
    officials: [
      { name: 'Debbie Marquardt', title: 'Mayor', party: null },
      { name: 'Scott Smith', title: 'Mayor Pro Tem', party: null },
      { name: 'Wayne Baker', title: 'Commissioner', party: null },
      { name: 'Brian Larkin', title: 'Commissioner', party: null },
      { name: 'Joe Maus', title: 'Commissioner', party: null },
      { name: 'Tim Nielsen', title: 'Commissioner', party: null },
      { name: 'Tammy Norris', title: 'Commissioner', party: null },
    ],
  },

  /* ── Southern Michigan cities ── */

  Monroe: {
    name: 'City of Monroe',
    website: 'https://www.monroemi.gov',
    phone: '734-243-0700',
    officials: [
      { name: 'Robert Clark', title: 'Mayor', party: null },
      { name: 'Andrew Felder', title: 'Council Member (Ward 1)', party: null, ward: 1 },
      { name: 'John Iacoangeli', title: 'Council Member (Ward 2)', party: null, ward: 2 },
      { name: 'Michelle LaVoy', title: 'Council Member (Ward 3)', party: null, ward: 3 },
      { name: 'Brian Lamour', title: 'Council Member (Ward 4)', party: null, ward: 4 },
      { name: 'Paula Whitman', title: 'Council Member (Ward 5)', party: null, ward: 5 },
      { name: 'Greg Swartz', title: 'Council Member (Ward 6)', party: null, ward: 6 },
    ],
  },

  Adrian: {
    name: 'City of Adrian',
    website: 'https://www.adriancity.com',
    phone: '517-264-4856',
    officials: [
      { name: 'Angie Sword Heath', title: 'Mayor', party: null },
      { name: 'Allen Heldt', title: 'Mayor Pro Tem', party: null },
      { name: 'Brad Watson', title: 'Commissioner', party: null },
      { name: 'Mary Roberts', title: 'Commissioner', party: null },
      { name: 'Gordon Gauss', title: 'Commissioner', party: null },
      { name: 'Lad Strayer', title: 'Commissioner', party: null },
      { name: 'Kirk Valentine', title: 'Commissioner', party: null },
    ],
  },

  Coldwater: {
    name: 'City of Coldwater',
    website: 'https://www.coldwater.org',
    phone: '517-279-9501',
    officials: [
      { name: 'Tom Kramer', title: 'Mayor', party: null },
      { name: 'Emily Rissman', title: 'Mayor Pro Tem', party: null },
      { name: 'Michael Beckwith', title: 'Council Member', party: null },
      { name: 'Brad Messer', title: 'Council Member', party: null },
      { name: 'Aaron Walters', title: 'Council Member', party: null },
    ],
  },

  Marshall: {
    name: 'City of Marshall',
    website: 'https://www.cityofmarshall.com',
    phone: '269-781-5183',
    officials: [
      { name: 'James Schwartz', title: 'Mayor', party: null },
      { name: 'Mike Gorman', title: 'Council Member (Ward 1)', party: null, ward: 1 },
      { name: 'Bill Bart', title: 'Council Member (Ward 2)', party: null, ward: 2 },
      { name: 'Nancy Carpenter', title: 'Council Member (Ward 3)', party: null, ward: 3 },
    ],
  },

  Sturgis: {
    name: 'City of Sturgis',
    website: 'https://www.sturgismi.gov',
    phone: '269-651-2321',
    officials: [
      { name: 'Robert Blanz', title: 'Mayor', party: null },
      { name: 'Aaron Miller', title: 'Mayor Pro Tem', party: null },
      { name: 'Jeffrey Mullins', title: 'Commissioner', party: null },
      { name: 'Jennifer Gordon', title: 'Commissioner', party: null },
      { name: 'Amanda Thomas', title: 'Commissioner', party: null },
    ],
  },

  /* ── Southwest Michigan cities ── */

  Niles: {
    name: 'City of Niles',
    website: 'https://www.nilesmi.org',
    phone: '269-683-4700',
    officials: [
      { name: 'Nick Shelton', title: 'Mayor', party: null },
      { name: 'Georgia Boggs', title: 'Council Member (Ward 1)', party: null, ward: 1 },
      { name: 'Gretchen Bertsche', title: 'Council Member (Ward 2)', party: null, ward: 2 },
      { name: 'John DiCostanzo', title: 'Council Member (Ward 3)', party: null, ward: 3 },
      { name: 'Jessica Nelson', title: 'Council Member (Ward 4)', party: null, ward: 4 },
    ],
  },

  'Benton Harbor': {
    name: 'City of Benton Harbor',
    website: 'https://www.bhcity.us',
    phone: '269-927-8400',
    officials: [
      { name: 'Marcus Muhammad', title: 'Mayor', party: null },
      { name: 'Duane Seats', title: 'Commissioner (District 1)', party: null, district: 1 },
      { name: 'Juanita Henry', title: 'Commissioner (District 2)', party: null, district: 2 },
      { name: 'Edward Isom', title: 'Commissioner (District 3)', party: null, district: 3 },
      { name: 'Dennis Gregg', title: 'Commissioner (District 4)', party: null, district: 4 },
      { name: 'Marvin Walker', title: 'Commissioner (At-Large)', party: null },
      { name: 'Sharon Henderson', title: 'Commissioner (At-Large)', party: null },
    ],
  },

  'St. Joseph': {
    name: 'City of St. Joseph',
    website: 'https://www.sjcity.com',
    phone: '269-983-6304',
    officials: [
      { name: 'Laura Goos', title: 'Mayor', party: null },
      { name: 'Lynn Todman', title: 'Commissioner', party: null },
      { name: 'Jeffrey Richards', title: 'Commissioner', party: null },
      { name: 'Michele Strefling', title: 'Commissioner', party: null },
      { name: 'Dan Engwall', title: 'Commissioner', party: null },
    ],
  },

  'South Haven': {
    name: 'City of South Haven',
    website: 'https://www.south-haven.com',
    phone: '269-637-0700',
    officials: [
      { name: 'Scott Smith', title: 'Mayor', party: null },
      { name: 'George Sleeman', title: 'Mayor Pro Tem', party: null },
      { name: 'Clark Gruber', title: 'Council Member', party: null },
      { name: 'Leticia Guevara-Salgado', title: 'Council Member', party: null },
      { name: 'David Stutzman', title: 'Council Member', party: null },
    ],
  },

  Zeeland: {
    name: 'City of Zeeland',
    website: 'https://www.cityofzeeland.com',
    phone: '616-772-6400',
    officials: [
      { name: 'Kevin Klynstra', title: 'Mayor', party: null },
      { name: 'Glenn Kass', title: 'Mayor Pro Tem', party: null },
      { name: 'Don Ellingboe', title: 'Council Member', party: null },
      { name: 'Kathy Gruppen', title: 'Council Member', party: null },
      { name: 'Rick Bierling', title: 'Council Member', party: null },
    ],
  },

  /* ── Ottawa County cities ── */

  'Grand Haven': {
    name: 'City of Grand Haven',
    website: 'https://grandhaven.org/',
    phone: '616-842-3210',
    officials: [
      { name: 'Bob Monetza', title: 'Mayor', party: null },
      { name: 'Mike Dora', title: 'Mayor Pro-Tem', party: null },
      { name: 'Michael D. Fritz', title: 'Council Member', party: null },
      { name: 'Sarah Kallio', title: 'Council Member', party: null },
      { name: 'Erin Lyon', title: 'Council Member', party: null },
    ],
  },

  Coopersville: {
    name: 'City of Coopersville',
    website: 'https://cityofcoopersville.com/',
    phone: '616-997-9731',
    officials: [
      { name: 'Brian Mooney', title: 'Mayor', party: null },
      { name: 'Renee Gavin', title: 'Mayor Pro Tem', party: null },
      { name: 'Daniel Bowman', title: 'Council Member', party: null },
      { name: 'Shane Gerard', title: 'Council Member', party: null },
      { name: 'Peter Weise', title: 'Council Member', party: null },
      { name: 'Tim Degeus', title: 'Council Member', party: null },
      { name: 'Jillian Poelma', title: 'Council Member', party: null },
    ],
  },

  Ferrysburg: {
    name: 'City of Ferrysburg',
    website: 'https://ferrysburg.org/',
    phone: '616-842-5803',
    officials: [
      { name: 'Richard Carlson', title: 'Mayor', party: null },
      { name: 'William Montgomery', title: 'Council Member', party: null },
      { name: 'Mike DeWitt', title: 'Council Member', party: null },
      { name: 'Jerry Sias', title: 'Council Member', party: null },
    ],
  },

  Hudsonville: {
    name: 'City of Hudsonville',
    website: 'https://www.hudsonville.org/',
    phone: '616-669-0200',
    officials: [
      { name: 'Mark Northrup', title: 'Mayor', party: null },
      { name: 'Toben DeVree', title: 'Commissioner (Ward 1)', party: null, ward: 1 },
      { name: 'Jack Groot', title: 'Commissioner (Ward 1)', party: null, ward: 1 },
      { name: 'Dan Bolhuis', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Dave Nyitray', title: 'Commissioner (Ward 2)', party: null, ward: 2 },
      { name: 'Jeremy Kamp', title: 'Commissioner (Ward 3)', party: null, ward: 3 },
      { name: 'Larry Brandsen', title: 'Commissioner (Ward 3)', party: null, ward: 3 },
    ],
  },

  /* ── Central Michigan cities ── */

  Alma: {
    name: 'City of Alma',
    website: 'https://www.myalma.org',
    phone: '989-463-8336',
    officials: [
      { name: 'Greg Mapes', title: 'Mayor', party: null },
      { name: 'Roxann Harrington', title: 'Vice Mayor', party: null },
      { name: 'Nick Piccolo', title: 'Commissioner', party: null },
      { name: 'Danny Wernette', title: 'Commissioner', party: null },
      { name: 'Roger Allman', title: 'Commissioner', party: null },
    ],
  },

  Owosso: {
    name: 'City of Owosso',
    website: 'https://www.ci.owosso.mi.us',
    phone: '989-725-0500',
    officials: [
      { name: 'Robert Teich Jr.', title: 'Mayor', party: null },
      { name: 'Susan J. Osika', title: 'Mayor Pro Tem', party: null },
      { name: 'Daniel Law', title: 'Council Member', party: null },
      { name: 'Nicholas Pidek', title: 'Council Member', party: null },
      { name: 'Janae Fear', title: 'Council Member', party: null },
      { name: 'Jerry Haber', title: 'Council Member', party: null },
    ],
  },

  Charlotte: {
    name: 'City of Charlotte',
    website: 'https://www.charlottemi.org',
    phone: '517-543-8843',
    officials: [
      { name: 'Tim Lewis', title: 'Mayor', party: null },
      { name: 'Michael Armitage', title: 'Mayor Pro Tem', party: null },
      { name: 'Greg Greening', title: 'Council Member', party: null },
      { name: 'Dennis Miller', title: 'Council Member', party: null },
      { name: 'Matthew Stewart', title: 'Council Member', party: null },
    ],
  },

  Ionia: {
    name: 'City of Ionia',
    website: 'https://www.ci.ionia.mi.us',
    phone: '616-527-4170',
    officials: [
      { name: 'Dan Balice', title: 'Mayor', party: null },
      { name: 'Rick Musselman', title: 'Mayor Pro Tem', party: null },
      { name: 'Gordon Kelley', title: 'Council Member', party: null },
      { name: 'Lynn Rutan', title: 'Council Member', party: null },
      { name: 'Bryce Garber', title: 'Council Member', party: null },
    ],
  },

  Hastings: {
    name: 'City of Hastings',
    county: 'Barry',
    website: 'https://www.hastingsmi.gov/',
    phone: '269-945-2468',
    officials: [
      { name: 'David J. Tossava', title: 'Mayor', party: null },
      { name: 'Jon Rocha', title: 'Council Member (1st Ward)', party: null },
      { name: 'Mike Bergeron', title: 'Council Member (1st Ward)', party: null },
      { name: 'John Resseguie', title: 'Council Member (2nd Ward)', party: null },
      { name: 'Terry Stenzelbarton', title: 'Council Member (2nd Ward)', party: null },
      { name: 'Ann Devroy', title: 'Council Member (3rd Ward)', party: null },
      { name: 'Norman Barlow', title: 'Council Member (3rd Ward)', party: null },
      { name: 'Jacquie McLean', title: 'Council Member (4th Ward)', party: null },
      { name: 'Jordan Brehm', title: 'Council Member (4th Ward)', party: null },
    ],
  },

  Greenville: {
    name: 'City of Greenville',
    website: 'https://www.greenvillemi.org',
    phone: '616-754-5645',
    officials: [
      { name: 'Carey Winters', title: 'Mayor', party: null },
      { name: 'Phil Reno', title: 'Mayor Pro Tem', party: null },
      { name: 'Norm Phelps', title: 'Council Member', party: null },
      { name: 'Nathan Bocks', title: 'Council Member', party: null },
      { name: 'Jason Prime', title: 'Council Member', party: null },
    ],
  },

  /* ── Montcalm County cities ── */

  Stanton: {
    name: 'City of Stanton',
    website: 'https://stantononline.com',
    phone: '989-831-4440',
    officials: [
      { name: 'Bill Ferguson', title: 'Mayor', party: null },
      { name: 'Jane Basom', title: 'Mayor Pro Tem', party: null },
      { name: 'Lewis Corwin', title: 'Commissioner', party: null },
      { name: 'Ray Holloway', title: 'Commissioner', party: null },
      { name: 'Tamara Kuhn', title: 'Commissioner', party: null },
      { name: 'Jacky McGill', title: 'Commissioner', party: null },
      { name: 'Charles Miel', title: 'Commissioner', party: null },
    ],
  },

  'Carson City': {
    name: 'City of Carson City',
    website: 'https://carsoncitymi.com',
    phone: '989-584-3515',
    officials: [
      { name: 'Neil Kapustka', title: 'Mayor', party: null },
      { name: 'Chad Parmenter', title: 'Mayor Pro Tem', party: null },
      { name: 'Kyle Miller', title: 'Council Member', party: null },
      { name: 'David Gage', title: 'Council Member', party: null },
      { name: 'Lezlie Hauck', title: 'Council Member', party: null },
      { name: 'Kurt Keiffer', title: 'Council Member', party: null },
      { name: 'Deb McCrackin', title: 'Council Member', party: null },
    ],
  },

  Evart: {
    name: 'City of Evart',
    website: 'https://www.evart.org',
    phone: '231-734-2181',
    officials: [
      { name: 'Roger Elkins', title: 'Mayor', party: null },
      { name: 'Sandra Szeliga', title: 'Mayor Pro Tem', party: null },
      { name: 'Ralph Carlson', title: 'Councilmember', party: null },
      { name: 'Mike Fulton', title: 'Councilmember', party: null },
      { name: 'Tina Young', title: 'Councilmember', party: null },
    ],
  },

  'Reed City': {
    name: 'City of Reed City',
    website: 'https://www.reedcity.org',
    phone: '231-832-2245',
    officials: [
      { name: 'Roger W. Meinert', title: 'Mayor', party: null },
      { name: 'Trevor Guiles', title: 'Mayor Pro Tem', party: null },
      { name: 'Nathan Bailey', title: 'Councilmember', party: null },
      { name: 'Charles Lupo', title: 'Councilmember', party: null },
      { name: 'Bradley Nixon', title: 'Councilmember', party: null },
      { name: 'Nicole Woodside', title: 'Councilmember', party: null },
      { name: 'James Anderlohr', title: 'Councilmember', party: null },
    ],
  },

  /* ── Cities with enriched council data ── */

  'Rochester Hills': {
    name: 'City of Rochester Hills',
    website: 'https://www.rochesterhills.org',
    phone: '248-656-4600',
    officials: [
      { name: 'Bryan K. Barnett', title: 'Mayor', party: 'Republican' },
      { name: 'Jason Carlock', title: 'Council President (District 3)', party: null, district: 3 },
      { name: 'Theresa Mungioli', title: 'Council Vice President (At-Large)', party: null },
      { name: 'Diana Mannino', title: 'Council Member (District 1)', party: null, district: 1 },
      { name: 'David J. Blair', title: 'Council Member (District 2)', party: null, district: 2 },
      { name: 'Bradley Limberg', title: 'Council Member (District 4)', party: null, district: 4 },
      { name: 'Marvie Neubauer', title: 'Council Member (At-Large)', party: null },
      { name: 'Mark Skelcy', title: 'Council Member (At-Large)', party: null },
    ],
  },

  Taylor: {
    name: 'City of Taylor',
    website: 'https://www.cityoftaylor.com',
    phone: '734-287-6550',
    officials: [
      { name: 'Tim Woolley', title: 'Mayor', party: null },
      { name: 'Charley Johnson', title: 'Council Member', party: null },
      { name: 'Ron Thiede', title: 'Council Member', party: null },
      { name: 'Christian Armstrong', title: 'Council Member', party: null },
      { name: 'Dan Wallace', title: 'Council Member', party: null },
      { name: 'Gerald Thomas', title: 'Council Member', party: null },
      { name: 'William Patts Jr.', title: 'Council Member', party: null },
      { name: 'Chris Clark', title: 'Council Member', party: null },
    ],
  },

  'St. Clair Shores': {
    name: 'City of St. Clair Shores',
    website: 'https://www.scsmi.net',
    phone: '586-447-3300',
    officials: [
      { name: 'Kip C. Walby', title: 'Mayor', party: null },
      { name: 'Ronald J. Frederick', title: 'Council Member', party: null },
      { name: 'Linda Bertges', title: 'Council Member', party: null },
      { name: 'John D. Caron', title: 'Council Member', party: null },
      { name: 'David J. Rubello', title: 'Council Member', party: null },
      { name: 'Candice B. Rusie', title: 'Council Member', party: null },
      { name: 'Chris M. Vitale', title: 'Council Member', party: null },
    ],
  },

  Novi: {
    name: 'City of Novi',
    website: 'https://www.cityofnovi.org',
    phone: '248-347-0460',
    officials: [
      { name: 'Justin Fischer', title: 'Mayor', party: null },
      { name: 'Laura Marie Casey', title: 'Mayor Pro Tem', party: null },
      { name: 'David Staudt', title: 'Council Member', party: null },
      { name: 'Brian Smith', title: 'Council Member', party: null },
      { name: 'Matt Heintz', title: 'Council Member', party: null },
      { name: 'Priya Gurumurthy', title: 'Council Member', party: null },
      { name: 'Aaron Martinez', title: 'Council Member', party: null },
    ],
  },

  'Dearborn Heights': {
    name: 'City of Dearborn Heights',
    website: 'https://www.dearbornheightsmi.gov',
    phone: '313-791-6000',
    officials: [
      { name: 'Mo Baydoun', title: 'Mayor', party: null },
      { name: 'Hassan Ahmad', title: 'Council Chair', party: null },
      { name: 'Hassan Saab', title: 'Council Chair Pro Tem', party: null },
      { name: 'Nancy Bryer', title: 'Council Member', party: null },
      { name: 'Bob Constan', title: 'Council Member', party: null },
      { name: 'Margaret King', title: 'Council Member', party: null },
      { name: 'Denise Malinowski Maxwell', title: 'Council Member', party: null },
      { name: 'Tom Wencel', title: 'Council Member', party: null },
    ],
  },

  'Lincoln Park': {
    name: 'City of Lincoln Park',
    website: 'https://www.citylp.com',
    phone: '313-386-1800',
    officials: [
      { name: 'Maureen Tobin', title: 'Mayor', party: null },
      { name: 'Carlos Salcido', title: 'Council President', party: null },
      { name: 'Jason Behr', title: 'Council Member', party: null },
      { name: 'Tracy Duprey', title: 'Council Member', party: null },
      { name: 'Jason Nichols', title: 'Council Member', party: null },
      { name: 'Lylian Ross', title: 'Council Member', party: null },
      { name: 'Eric Szor', title: 'Council Member', party: null },
    ],
  },

  Roseville: {
    name: 'City of Roseville',
    website: 'https://www.roseville-mi.gov',
    phone: '586-445-5400',
    officials: [
      { name: 'Robert Taylor', title: 'Mayor', party: null },
      { name: 'Catherine Haugh', title: 'Mayor Pro Tem', party: null },
      { name: 'Bill Shoemaker', title: 'Council Member', party: null },
      { name: 'James Hoover', title: 'Council Member', party: null },
      { name: 'Steven Wietecha', title: 'Council Member', party: null },
    ],
  },

  'Farmington Hills': {
    name: 'City of Farmington Hills',
    website: 'https://www.fhgov.com',
    phone: '248-871-2400',
    officials: [
      { name: 'Theresa Rich', title: 'Mayor', party: null },
      { name: 'Bill Dwyer', title: 'Mayor Pro Tem', party: null },
      { name: 'Jon Aldred', title: 'Council Member', party: null },
      { name: 'Jackie Boleware', title: 'Council Member', party: null },
      { name: 'Michael Bridges', title: 'Council Member', party: null },
      { name: 'Valerie Knol', title: 'Council Member', party: null },
      { name: 'Charlie Starkman', title: 'Council Member', party: null },
    ],
  },

  Escanaba: {
    name: 'City of Escanaba',
    county: 'Delta',
    website: 'https://www.escanaba.org',
    phone: '906-786-9402',
    officials: [
      { name: 'Mark Ammel', title: 'Mayor', party: null },
      { name: 'Tyler DuBord', title: 'Mayor Pro Tem', party: null },
      { name: 'Karen Moore', title: 'Council Member', party: null },
      { name: 'Todd Flath', title: 'Council Member', party: null },
      { name: 'Ronald J. Beauchamp', title: 'Council Member', party: null },
      { name: 'James McNeil', title: 'City Manager', party: null },
    ],
  },

  Gladstone: {
    name: 'City of Gladstone',
    county: 'Delta',
    website: 'https://www.gladstonemi.gov',
    phone: '906-428-2311',
    officials: [
      { name: 'Joe Thompson', title: 'Mayor', party: null },
      { name: 'Brad Mantela', title: 'Mayor Pro Tem', party: null },
      { name: 'Judy Akkala', title: 'Commissioner', party: null },
      { name: 'Steve O\'Driscoll', title: 'Commissioner', party: null },
      { name: 'Whitney Maloney', title: 'Commissioner', party: null },
      { name: 'Robert Spreitzer', title: 'Interim City Manager', party: null },
    ],
  },

  'Iron Mountain': {
    name: 'City of Iron Mountain',
    county: 'Dickinson',
    website: 'https://www.ironmountainmi.gov',
    phone: '906-774-8530',
    officials: [
      { name: 'Dale Alessandrini', title: 'Mayor (Ward 1)', party: null, ward: 1 },
      { name: 'Kyle Blomquist', title: 'Mayor Pro Tem (At-Large)', party: null },
      { name: 'David Farragh', title: 'Council Member (Ward 2)', party: null, ward: 2 },
      { name: 'Cathy Tomassoni', title: 'Council Member (Ward 3)', party: null, ward: 3 },
      { name: 'Mark Wickman', title: 'Council Member (At-Large)', party: null },
      { name: 'Ken Clawson', title: 'Council Member (At-Large)', party: null },
      { name: 'Pam Maule', title: 'Council Member (At-Large)', party: null },
      { name: 'Jordan Stanchina', title: 'City Manager', party: null },
    ],
  },

  Kingsford: {
    name: 'City of Kingsford',
    county: 'Dickinson',
    website: 'https://www.kingsfordmi.gov',
    phone: '906-774-2001',
    officials: [
      { name: 'Joseph Groeneveld', title: 'Mayor', party: null },
      { name: 'Daniel Freeman', title: 'Mayor Pro Tem', party: null },
      { name: 'Angela Olson', title: 'Council Member', party: null },
      { name: 'Cynthia Dixon-Miller', title: 'Council Member', party: null },
      { name: 'Michael Flaminio', title: 'Council Member', party: null },
      { name: 'Michael Stelmaszek', title: 'City Manager', party: null },
    ],
  },

  Norway: {
    name: 'City of Norway',
    county: 'Dickinson',
    website: 'https://www.norwaymi.gov',
    phone: '906-563-9961',
    officials: [
      { name: 'Candy Brew', title: 'Mayor', party: null },
      { name: 'Rico Meneghini', title: 'Council Member', party: null },
      { name: 'Jeff Muraro', title: 'Council Member', party: null },
      { name: 'Sarah Langlais', title: 'Council Member', party: null },
      { name: 'Ricarda Steigerwald', title: 'Council Member', party: null },
      { name: 'Dan Stoltman', title: 'City Manager', party: null },
    ],
  },

  'Sault Ste. Marie': {
    name: 'City of Sault Ste. Marie',
    website: 'https://www.saultcity.com',
    phone: '906-632-5709',
    officials: [
      { name: 'Steve Habusta', title: 'Commissioner', party: null },
    ],
  },

  Houghton: {
    name: 'City of Houghton',
    county: 'Houghton',
    website: 'https://www.cityofhoughton.com',
    phone: '906-482-1700',
    officials: [
      { name: 'Robert Megowen', title: 'Mayor', party: null },
      { name: 'Philip Buck Foltz', title: 'Mayor Pro Tem', party: null },
      { name: 'Mike Needham', title: 'Council Member', party: null },
      { name: 'Craig Waddell', title: 'Council Member', party: null },
      { name: 'Virginia Cole', title: 'Council Member', party: null },
      { name: 'Brian Irizarry', title: 'Council Member', party: null },
      { name: 'Eric Waara', title: 'City Manager', party: null },
    ],
  },

  Hancock: {
    name: 'City of Hancock',
    county: 'Houghton',
    website: 'https://www.cityofhancock.com',
    phone: '906-482-2720',
    officials: [
      { name: 'Kurt Rickard', title: 'Mayor (At-Large)', party: null },
      { name: 'Whitney Warstler', title: 'Mayor Pro Tem (At-Large)', party: null },
      { name: 'Ron Blau', title: 'Council Member (Ward I)', party: null, ward: 1 },
      { name: 'Dean Woodbeck', title: 'Council Member (Ward II)', party: null, ward: 2 },
      { name: 'Laura Givens', title: 'Council Member (Ward III)', party: null, ward: 3 },
      { name: 'Amanda Lounibos', title: 'Council Member (At-Large)', party: null },
      { name: 'Lisa McKenzie', title: 'Council Member (At-Large)', party: null },
      { name: 'Mary Babcock', title: 'City Manager', party: null },
    ],
  },

  Ishpeming: {
    name: 'City of Ishpeming',
    county: 'Marquette',
    website: 'https://ishpemingcity.org',
    phone: '906-486-4381',
    officials: [
      { name: 'Pat Scanlon', title: 'Mayor', party: null },
      { name: 'Kurt Kipling', title: 'Mayor Pro Tem', party: null },
      { name: 'Brett Argall', title: 'Council Member', party: null },
      { name: 'Jason Chapman', title: 'Council Member', party: null },
      { name: 'Randy Scholz', title: 'City Manager', party: null },
    ],
  },

  Negaunee: {
    name: 'City of Negaunee',
    county: 'Marquette',
    website: 'https://www.cityofnegaunee.com',
    phone: '906-475-7700',
    officials: [
      { name: 'Craig Ilmonen', title: 'Mayor', party: null },
      { name: 'David Kangas', title: 'Council Member', party: null },
      { name: 'Amanda Ghanavati', title: 'Council Member', party: null },
      { name: 'Traci Dietz', title: 'Council Member', party: null },
      { name: 'Jon Becker', title: 'Council Member', party: null },
      { name: 'Keith LaCosse', title: 'Council Member', party: null },
      { name: 'Nate Heffron', title: 'City Manager', party: null },
    ],
  },

  'Grosse Pointe': {
    name: 'City of Grosse Pointe',
    website: 'https://www.grossepointecity.org',
    phone: '313-885-5800',
    officials: [
      { name: 'Sheila Tomkowiak', title: 'Mayor', party: null },
    ],
  },

  /* ── Newaygo County cities ── */

  Newaygo: {
    name: 'City of Newaygo',
    website: 'https://newaygo.gov/',
    phone: '231-652-1657',
    officials: [
      { name: 'Ed Fedell', title: 'Mayor', party: null },
      { name: 'Lee Black', title: 'Mayor Pro-Tem', party: null },
      { name: 'Denise DeVries', title: 'Council Member', party: null },
      { name: 'Jim Engemann', title: 'Council Member', party: null },
      { name: 'Bob Walker', title: 'Council Member', party: null },
      { name: 'Erin Burns', title: 'Council Member', party: null },
      { name: 'Katie Walerczyk', title: 'Council Member', party: null },
    ],
  },

  'White Cloud': {
    name: 'City of White Cloud',
    website: 'https://www.cityofwhitecloud.org/',
    phone: '231-689-1194',
    officials: [
      { name: 'Brian J. Miller', title: 'Mayor', party: null },
      { name: 'Lori Shears', title: 'Mayor Pro Tem', party: null },
      { name: 'Candice Dault', title: 'Council Member', party: null },
      { name: 'Damon Anuci', title: 'Council Member', party: null },
      { name: 'Jeff Murchison', title: 'Council Member', party: null },
      { name: 'Herm Becker', title: 'Council Member', party: null },
      { name: 'Amy Barnhard', title: 'Council Member', party: null },
    ],
  },

  Fremont: {
    name: 'City of Fremont',
    website: 'https://www.cityoffremont.net/',
    phone: '231-924-2101',
    officials: [
      { name: 'James Rynberg', title: 'Mayor', party: null },
      { name: 'Sandy Siegel', title: 'Mayor Pro-Tem', party: null },
      { name: 'Lola Harmon-Ramsey', title: 'Council Member', party: null },
      { name: 'Eric Johnson', title: 'Council Member', party: null },
      { name: 'Brent Deur', title: 'Council Member', party: null },
    ],
  },

  Grant: {
    name: 'City of Grant',
    website: 'https://www.cityofgrantmi.com/',
    phone: '231-834-7904',
    officials: [
      { name: 'Julie Hallman', title: 'Mayor', party: null },
      { name: 'Kate Block', title: 'Mayor Pro-Tem', party: null },
      { name: 'Mark Dietz', title: 'Commissioner', party: null },
      { name: 'Brent Raterink', title: 'Commissioner', party: null },
      { name: 'Peter Pickard', title: 'Commissioner', party: null },
      { name: 'Katie Arens', title: 'Commissioner', party: null },
      { name: 'Gerard Williams', title: 'Commissioner', party: null },
    ],
  },

  /* ── Allegan County cities ── */

  Allegan: {
    name: 'City of Allegan',
    county: 'Allegan',
    website: 'https://www.cityofallegan.org/',
    officials: [
      { name: 'Traci Perrigo', title: 'Mayor', party: null },
      { name: 'Peter Hanse', title: 'Mayor Pro Tem', party: null },
      { name: 'Carl Canales', title: 'Council Member', party: null },
      { name: 'Melanie Hooker', title: 'Council Member', party: null },
      { name: 'Will Walker', title: 'Council Member', party: null },
      { name: 'Patrick Westover', title: 'Council Member', party: null },
      { name: 'Charles Clark II', title: 'Council Member', party: null },
    ],
  },

  Douglas: {
    name: 'City of the Village of Douglas',
    county: 'Allegan',
    website: 'https://www.douglasmi.gov/',
    officials: [
      { name: 'Cathy North', title: 'Mayor', party: null },
      { name: 'Randy Walker', title: 'Mayor Pro Tem', party: null },
      { name: 'Gregory Freeman', title: 'Council Member', party: null },
      { name: 'Neal Seabert', title: 'Council Member', party: null },
      { name: "John O'Malley", title: 'Council Member', party: null },
      { name: 'Matt Balmer', title: 'Council Member', party: null },
      { name: 'Jeff West', title: 'Council Member', party: null },
    ],
  },

  Otsego: {
    name: 'City of Otsego',
    county: 'Allegan',
    website: 'https://www.cityofotsego.org/',
    officials: [
      { name: 'Stacey Withee', title: 'Mayor', party: null },
      { name: 'Laurie Krueger', title: 'Mayor Pro Tem', party: null },
      { name: 'Wayne Rayburn', title: 'Commissioner', party: null },
      { name: 'Chuck Moore Jr.', title: 'Commissioner', party: null },
      { name: 'Jason Smith', title: 'Commissioner', party: null },
    ],
  },

  Plainwell: {
    name: 'City of Plainwell',
    county: 'Allegan',
    website: 'https://www.plainwell.org/',
    officials: [
      { name: 'Brad Keeler', title: 'Mayor', party: null },
      { name: 'Lori Steele', title: 'Mayor Pro Tem', party: null },
      { name: 'Roger Keeney', title: 'Council Member', party: null },
      { name: 'Randy Wisnaski', title: 'Council Member', party: null },
      { name: 'Cathy Green', title: 'Council Member', party: null },
    ],
  },

  Saugatuck: {
    name: 'City of Saugatuck',
    county: 'Allegan',
    website: 'https://www.saugatuckcity.com/',
    officials: [
      { name: 'Holly Anderson', title: 'Mayor', party: null },
      { name: 'Joe Clark', title: 'Mayor Pro Tem', party: null },
      { name: 'Lauren Stanton', title: 'Council Member', party: null },
      { name: 'Russ Gardner', title: 'Council Member', party: null },
      { name: 'Scott Dean', title: 'Council Member', party: null },
      { name: 'Gregory Muncey', title: 'Council Member', party: null },
      { name: 'Chris Peterson', title: 'Council Member', party: null },
    ],
  },

  Wayland: {
    name: 'City of Wayland',
    county: 'Allegan',
    website: 'https://www.cityofwayland.org/',
    officials: [
      { name: 'Jennifer Antel', title: 'Mayor', party: null },
      { name: 'Joe Kramer', title: 'Mayor Pro Tem', party: null },
      { name: 'Tracy Bivins', title: 'Council Member', party: null },
      { name: 'Norm Taylor', title: 'Council Member', party: null },
      { name: 'Megan Mickelson', title: 'Council Member', party: null },
      { name: 'Justin Osbon', title: 'Council Member', party: null },
    ],
  },

  // ── Ionia County cities ──

  Portland: {
    name: 'City of Portland',
    county: 'Ionia',
    website: 'https://www.portland-michigan.org/',
    officials: [
      { name: 'James E. Barnes', title: 'Mayor', party: null },
      { name: 'Joel VanSlambrouck', title: 'Mayor Pro-Tem', party: null },
      { name: 'Patrick Fitzsimmons', title: 'Council Member', party: null },
      { name: 'Cena Schneider', title: 'Council Member', party: null },
      { name: 'Barney Boyer', title: 'Council Member', party: null },
    ],
  },

  Belding: {
    name: 'City of Belding',
    county: 'Ionia',
    website: 'https://belding.mi.us/',
    officials: [
      { name: 'Jeannine Leary', title: 'Mayor', party: null },
      { name: 'Bonita Steele', title: 'Mayor Pro Tem', party: null },
      { name: 'Shelley Gladding', title: 'Council Member', party: null },
      { name: 'Linda Curtis', title: 'Council Member', party: null },
      { name: 'Nikolai Zerkle', title: 'Council Member', party: null },
    ],
  },

  // ── Mason County cities ──

  Scottville: {
    name: 'City of Scottville',
    county: 'Mason',
    website: 'https://cityofscottville.org/',
    officials: [
      { name: 'Dixie Spore', title: 'Mayor', party: null },
      { name: 'Randall Wyman', title: 'Mayor Pro Tem', party: null },
      { name: 'Darcy Copenhaver', title: 'Commissioner At-Large', party: null },
      { name: 'Bobbiann Wallager', title: 'Commissioner At-Large', party: null },
      { name: 'Marcy Spencer', title: 'Commissioner At-Large', party: null },
      { name: 'Jamie Daws', title: 'Commissioner At-Large', party: null },
      { name: 'Johnny Duncan', title: 'Commissioner At-Large', party: null },
    ],
  },

  // ── Oceana County cities ──

  Hart: {
    name: 'City of Hart',
    county: 'Oceana',
    website: 'https://cityofhart.org/',
    officials: [
      { name: 'Amanda Klotz', title: 'Mayor', party: null },
      { name: 'Jim Cunningham', title: 'Mayor Pro-Tem', party: null },
      { name: 'Catalina Burillo', title: 'Council Member', party: null },
      { name: 'Karen Thomson', title: 'Council Member', party: null },
      { name: 'Dean Hodges', title: 'Council Member', party: null },
      { name: 'Andrew Mullen', title: 'Council Member', party: null },
      { name: 'Betty Root', title: 'Council Member', party: null },
    ],
  },

  // ── Wexford County cities ──

  Manton: {
    name: 'City of Manton',
    county: 'Wexford',
    website: 'https://www.mantonmi.org/government.html',
    officials: [
      { name: 'Steve Sisco', title: 'Mayor', party: null },
      { name: 'Sue Fullerton', title: 'Commissioner', party: null },
      { name: 'Nichole Johnson', title: 'Commissioner', party: null },
      { name: 'Parker Siddall', title: 'Commissioner', party: null },
      { name: 'Lisa Gillett', title: 'Commissioner', party: null },
      { name: 'Rick Rayment', title: 'Commissioner', party: null },
      { name: 'Jessica Wilkins', title: 'Commissioner', party: null },
    ],
  },

  /* ── Missaukee County cities ── */

  'Lake City': {
    name: 'City of Lake City',
    county: 'Missaukee',
    website: 'https://cityoflakecity.com/mayor-city-council/',
    officials: [
      { name: 'Cheryl Sellers-Seger', title: 'Mayor', party: null },
      { name: 'Robert Pickford', title: 'Mayor Pro-Tem', party: null },
      { name: 'Arlo Bartholomew', title: 'Councilmember', party: null },
      { name: 'Kathleen Ostrander', title: 'Councilmember', party: null },
      { name: 'Barbara Elliott', title: 'Councilmember', party: null },
      { name: 'Brad Seger', title: 'Councilmember', party: null },
      { name: 'Pat Riley', title: 'Councilmember', party: null },
    ],
  },

  /* ── Montcalm County cities ── */

  'Greenville': {
    name: 'City of Greenville',
    county: 'Montcalm',
    website: 'https://greenvillemi.org',
    officials: [
      { name: 'Jeff Scoby', title: 'Mayor', party: null },
      { name: 'Claude Johnson', title: 'Mayor Pro-Tem', party: null },
      { name: 'James Barrus', title: 'Council Member', party: null },
      { name: 'Michael Mangus', title: 'Council Member', party: null },
      { name: 'Dave Seppala', title: 'Council Member', party: null },
      { name: 'Larry Moss', title: 'Council Member', party: null },
      { name: 'Jay McBride', title: 'Council Member', party: null },
    ],
  },

  'Stanton': {
    name: 'City of Stanton',
    county: 'Montcalm',
    website: 'https://stantononline.com',
    officials: [
      { name: 'Bill Ferguson', title: 'Mayor', party: null },
      { name: 'Jane Basom', title: 'Mayor Pro-Tem', party: null },
      { name: 'Lewis Corwin', title: 'Commissioner', party: null },
      { name: 'Ray Holloway', title: 'Commissioner', party: null },
      { name: 'Tamara Kuhn', title: 'Commissioner', party: null },
      { name: 'Jacky McGill', title: 'Commissioner', party: null },
      { name: 'Charles Miel', title: 'Commissioner', party: null },
    ],
  },

  'Carson City': {
    name: 'City of Carson City',
    county: 'Montcalm',
    website: 'https://carsoncitymi.com',
    officials: [
      { name: 'Neil Kapustka', title: 'Mayor', party: null },
      { name: 'Chad Parmenter', title: 'Mayor Pro-Tem', party: null },
      { name: 'Kyle Miller', title: 'Council Member', party: null },
      { name: 'David Gage', title: 'Council Member', party: null },
      { name: 'Lezlie Hauck', title: 'Council Member', party: null },
      { name: 'Kurt Keiffer', title: 'Council Member', party: null },
      { name: 'Deb McCrackin', title: 'Council Member', party: null },
    ],
  },

  /* ── Osceola County cities ── */

  'Reed City': {
    name: 'City of Reed City',
    county: 'Osceola',
    website: 'https://www.reedcity.org/mayor-and-city-council.php',
    officials: [
      { name: 'Roger W. Meinert', title: 'Mayor', party: null },
      { name: 'Trevor Guiles', title: 'Mayor Pro Tem', party: null },
      { name: 'Nathan Bailey', title: 'Councilor', party: null },
      { name: 'Charles Lupo', title: 'Councilor', party: null },
      { name: 'Bradley Nixon', title: 'Councilor', party: null },
      { name: 'Nicole Woodside', title: 'Councilor', party: null },
      { name: 'James Anderlohr', title: 'Councilor', party: null },
    ],
  },

  'Evart': {
    name: 'City of Evart',
    county: 'Osceola',
    website: 'https://www.evart.org/city_government/city_council_and_mayor.php',
    officials: [
      { name: 'Roger Elkins', title: 'Mayor', party: null },
      { name: 'Sandra Szeliga', title: 'Mayor Pro Tem', party: null },
      { name: 'Ralph Carlson', title: 'Council Member', party: null },
      { name: 'Mike Fulton', title: 'Council Member', party: null },
      { name: 'Tina Young', title: 'Council Member', party: null },
    ],
  },

  /* ── Mecosta County cities ── */

  'Big Rapids': {
    name: 'City of Big Rapids',
    county: 'Mecosta',
    website: 'https://www.cityofbr.org/government/boards_and_commission/city_commission.php',
    officials: [
      { name: 'Fred Guenther', title: 'Mayor', party: null },
      { name: 'Amanda Johnson', title: 'Commissioner', party: null },
      { name: 'David Rhodes', title: 'Commissioner', party: null },
      { name: 'Karen Simmon', title: 'Commissioner', party: null },
      { name: 'Lorraine James', title: 'Commissioner', party: null },
    ],
  },

  'McBain': {
    name: 'City of McBain',
    county: 'Missaukee',
    website: 'https://www.cityofmcbainmichigan.com/government/city_council.php',
    officials: [
      { name: 'Joey Roberts', title: 'Mayor', party: null },
      { name: 'Chuck Heethuis', title: 'Mayor Pro-Tem', party: null },
      { name: 'Mike Kubiak', title: 'Councilmember', party: null },
      { name: 'Don Heuker', title: 'Councilmember', party: null },
      { name: 'Darrell Kuiper', title: 'Councilmember', party: null },
      { name: 'Klint Weaver', title: 'Councilmember', party: null },
      { name: 'Lori Warren', title: 'Councilmember', party: null },
    ],
  },

  /* ── Crawford County cities ── */

  'Grayling': {
    name: 'City of Grayling',
    county: 'Crawford',
    website: 'https://www.cityofgrayling.org/',
    officials: [
      { name: 'Heather Forbes', title: 'Mayor', party: null },
      { name: 'Jack Pettyjohn', title: 'Mayor Pro-Tem', party: null },
      { name: 'William Dennis Sloan', title: 'Council Member', party: null },
      { name: 'Roger Moshier', title: 'Council Member', party: null },
      { name: 'McKenzie Nelson', title: 'Council Member', party: null },
    ],
  },

  /* ── Presque Isle County cities ── */

  'Rogers City': {
    name: 'City of Rogers City',
    county: 'Presque Isle',
    website: 'https://www.rogerscity.com',
    officials: [
      { name: 'Scott McLennan', title: 'Mayor', party: null },
      { name: 'Ken Bielas', title: 'Mayor Pro Tem', party: null },
      { name: 'Timeen Adair', title: 'Council Member', party: null },
      { name: 'Larry Fuhrman', title: 'Council Member', party: null },
      { name: 'Brittany VanderWall', title: 'Council Member', party: null },
      { name: 'Joseph Hefele', title: 'City Manager', party: null },
      { name: 'Terri L. Koss', title: 'City Clerk/Treasurer', party: null },
    ],
  },

  /* ── Midland County cities ── */

  'Midland': {
    name: 'City of Midland',
    county: 'Midland',
    website: 'https://www.cityofmidlandmi.gov',
    officials: [
      { name: 'Maureen Donker', title: 'Mayor (Ward 2)', party: null },
      { name: 'Diane Brown Wilhelm', title: 'Mayor Pro Tem (Ward 4)', party: null },
      { name: 'Tim Soler', title: 'Council Member (Ward 1)', party: null },
      { name: 'Dave Pasek', title: 'Council Member (Ward 3)', party: null },
      { name: 'Marty Wazbinski', title: 'Council Member (Ward 5)', party: null },
      { name: 'Brad Kaye', title: 'City Manager', party: null },
    ],
  },
  'Coleman': {
    name: 'City of Coleman',
    county: 'Midland',
    website: 'https://www.cityofcoleman.org',
    officials: [
      { name: 'Steve Miller', title: 'Mayor', party: null },
      { name: 'Frank Kroll', title: 'Mayor Pro Tem', party: null },
      { name: 'Corey Lewis', title: 'Council Member', party: null },
      { name: 'Ross Kent', title: 'Council Member', party: null },
      { name: 'Donald Jennings', title: 'Council Member', party: null },
      { name: 'JoMac Rydman', title: 'Council Member', party: null },
      { name: 'Jason Perkins', title: 'Council Member', party: null },
    ],
  },

  /* ── Cheboygan County cities ── */

  'Cheboygan': {
    name: 'City of Cheboygan',
    county: 'Cheboygan',
    website: 'https://www.cheboygan.org',
    officials: [
      { name: 'Brett A. Mallory', title: 'Mayor', party: null },
      { name: 'Adam Bedwin', title: 'Mayor Pro Tem', party: null },
      { name: 'Mary Darling', title: 'Council Member', party: null },
      { name: 'Hayley Dodd', title: 'Council Member', party: null },
      { name: 'David Martin', title: 'Council Member', party: null },
      { name: "LeRoy 'Buddy' Ormsbee", title: 'Council Member', party: null },
      { name: 'Brian Brandau', title: 'Council Member', party: null },
      { name: 'Daniel Sabolsky', title: 'City Manager', party: null },
    ],
  },

  /* ── Otsego County cities ── */

  'Gaylord': {
    name: 'City of Gaylord',
    county: 'Otsego',
    website: 'https://cityofgaylord.com',
    officials: [
      { name: 'Todd Sharrard', title: 'Mayor', party: null },
      { name: 'Jordan Awrey', title: 'Council Member', party: null },
      { name: 'Robert Wilson', title: 'Council Member', party: null },
      { name: 'Deb Jaques', title: 'Council Member', party: null },
      { name: 'Vic Ouellette', title: 'Council Member', party: null },
      { name: 'Hannah Techel', title: 'Council Member', party: null },
      { name: 'Ryan Kennedy', title: 'Council Member', party: null },
      { name: 'Kim Awrey', title: 'City Manager', party: null },
    ],
  },

  /* ── Gladwin County cities ── */

  'Gladwin': {
    name: 'City of Gladwin',
    county: 'Gladwin',
    website: 'https://www.gladwin.org',
    officials: [
      { name: 'Sarah Kile', title: 'Mayor', party: null },
      { name: 'Cristy Gutierrez', title: 'Mayor Pro Tem', party: null },
      { name: 'John Caffrey', title: 'Council Member', party: null },
      { name: 'Dave Crawford', title: 'Council Member', party: null },
      { name: 'Carol Darlington', title: 'Council Member', party: null },
      { name: 'Jaimie Esiline', title: 'Council Member', party: null },
      { name: 'Deb Platt', title: 'Council Member', party: null },
      { name: 'Mike Smith', title: 'Council Member', party: null },
      { name: 'Linda Winarski', title: 'Council Member', party: null },
      { name: 'Kimberly Hines', title: 'City Administrator (Interim)', party: null },
    ],
  },
  'Beaverton': {
    name: 'City of Beaverton',
    county: 'Gladwin',
    website: 'https://beavertonmi.org',
    officials: [
      { name: 'Ray Nau', title: 'Mayor', party: null },
      { name: 'Tiffany Burgess', title: 'Council Member', party: null },
      { name: 'Christine Gerace', title: 'Council Member', party: null },
      { name: 'Jennifer Harper', title: 'Council Member', party: null },
      { name: 'Nellie List', title: 'Council Member', party: null },
      { name: 'Colleen Reader', title: 'Council Member', party: null },
      { name: 'Missy Vulders', title: 'Council Member', party: null },
    ],
  },

  /* ── Alpena County cities ── */

  'Alpena': {
    name: 'City of Alpena',
    county: 'Alpena',
    website: 'https://www.alpena.mi.us',
    phone: '989-354-1720',
    officials: [
      { name: 'Cindy Johnson', title: 'Mayor', party: null },
      { name: 'Karol Walchak', title: 'Mayor Pro Tem', party: null },
      { name: 'Danny Mitchell', title: 'Council Member', party: null },
      { name: 'Bridget Hollinshead', title: 'Council Member', party: null },
      { name: 'Kevin Currier', title: 'Council Member', party: null },
      { name: 'Rachel Smolinski', title: 'City Manager', party: null },
    ],
  },

  /* ── Clare County cities ── */

  Clare: {
    name: 'City of Clare',
    county: 'Clare',
    website: 'https://cityofclare.gov',
    phone: '989-386-7541',
    officials: [
      { name: 'Pat Humphrey', title: 'Mayor', party: null },
      { name: 'Jeremy Howard', title: 'City Manager', party: null },
      { name: 'Bob Bonham', title: 'Commissioner', party: null },
      { name: 'Kim Bussell', title: 'Commissioner', party: null },
      { name: 'Maegan Jenkins', title: 'Commissioner', party: null },
      { name: 'Gus Murphy', title: 'Commissioner', party: null },
    ],
  },

  Harrison: {
    name: 'City of Harrison',
    county: 'Clare',
    website: 'https://cityofharrison-mi.gov',
    officials: [
      { name: 'Daniel F. Sullivan', title: 'Mayor', party: null },
      { name: 'Justin Cavanaugh', title: 'City Manager/Clerk', party: null },
      { name: 'Angela Kellogg-Henry', title: 'Council Member', party: null },
      { name: 'Connie Huffman', title: 'Council Member', party: null },
      { name: 'Phil Duggan', title: 'Council Member', party: null },
      { name: 'Garrett Wood', title: 'Council Member', party: null },
      { name: 'Dena Woods', title: 'Council Member', party: null },
      { name: 'Robert Stewart', title: 'Council Member', party: null },
    ],
  },

  /* ── Wayne County cities (Downriver + western Wayne) ── */

  Wyandotte: {
    name: 'City of Wyandotte',
    website: 'https://www.wyandotte.net',
    phone: '734-324-4500',
    officials: [
      { name: 'Robert DeSana', title: 'Mayor', party: null },
      { name: 'Robert Alderman', title: 'Council Member', party: null },
      { name: 'Sheri Sutherby Fricke', title: 'Council Member', party: null },
      { name: 'Christopher Calvin', title: 'Council Member', party: null },
      { name: 'Don Schultz', title: 'Council Member', party: null },
      { name: 'Todd Browning', title: 'Council Member', party: null },
      { name: 'James DeSana', title: 'Council Member', party: null },
      { name: 'Ted Galeski', title: 'Council Member', party: null },
    ],
  },

  Romulus: {
    name: 'City of Romulus',
    website: 'https://www.romulusgov.com',
    phone: '734-942-7540',
    officials: [
      { name: 'Robert McCraight', title: 'Mayor', party: 'Democratic' },
      { name: 'John Barden', title: 'Mayor Pro Tem / Council Member', party: null },
      { name: 'Tina Talley', title: 'Council Member', party: null },
      { name: 'Eva Webb', title: 'Council Member', party: null },
      { name: 'Virginia Williams', title: 'Council Member', party: null },
      { name: 'Linda Choate', title: 'Council Member', party: null },
      { name: 'Celeste Roscoe', title: 'Council Member', party: null },
    ],
  },

  Hamtramck: {
    name: 'City of Hamtramck',
    website: 'https://www.hamtramckcity.com',
    phone: '313-876-7700',
    officials: [
      { name: 'Amer Ghalib', title: 'Mayor', party: null, notes: 'First Yemeni-American mayor in the U.S.' },
      { name: 'Mohammed Hassan', title: 'Council Member', party: null },
      { name: 'Khalil Refai', title: 'Council Member', party: null },
      { name: 'Adam Albarmaki', title: 'Council Member', party: null },
      { name: 'Muhtasin Sadman', title: 'Council Member', party: null },
      { name: 'Lynn Blasey', title: 'Council Member', party: null },
      { name: 'Muhith Mahmood', title: 'Council Member', party: null },
    ],
  },

  Inkster: {
    name: 'City of Inkster',
    website: 'https://www.cityofinkster.com',
    phone: '313-563-9770',
    officials: [
      { name: 'Patrick Wimberley', title: 'Mayor', party: null },
      { name: 'Felicia Rutledge', title: 'Mayor Pro Tem', party: null },
      { name: 'Steven Chisholm', title: 'Council Member', party: null },
      { name: 'Jewell Jones', title: 'Council Member', party: null },
      { name: 'Kim Phillips-Knight', title: 'Council Member', party: null },
      { name: 'Stuart Lacy', title: 'Council Member', party: null },
      { name: 'Marcus Hendricks', title: 'Council Member', party: null },
    ],
  },

  'Allen Park': {
    name: 'City of Allen Park',
    website: 'https://www.cityofallenpark.org',
    phone: '313-928-1400',
    officials: [
      { name: 'Gail McLeod', title: 'Mayor', party: null },
      { name: 'Tina Gaworecki', title: 'Mayor Pro Tem / Council Member', party: null },
      { name: 'Bob Keenan', title: 'Council Member', party: null },
      { name: 'Larry Templin', title: 'Council Member', party: null },
      { name: 'Harry Sisko', title: 'Council Member', party: null },
      { name: 'Mike Mizzi', title: 'Council Member', party: null },
      { name: 'Karen Kershaw', title: 'Council Member', party: null },
    ],
  },

  Southgate: {
    name: 'City of Southgate',
    website: 'https://www.southgatemi.gov',
    phone: '734-258-3000',
    officials: [
      { name: 'Joseph Kuspa', title: 'Mayor', party: null },
      { name: 'Karen George', title: 'Mayor Pro Tem', party: null },
      { name: 'Bill Colovos', title: 'Council Member', party: null },
      { name: 'Phillip Rauch', title: 'Council Member', party: null },
      { name: 'Patricia Ganzberger', title: 'Council Member', party: null },
      { name: 'Dale Zamecki', title: 'Council Member', party: null },
      { name: 'Christopher Rollet', title: 'Council Member', party: null },
    ],
  },

  Trenton: {
    name: 'City of Trenton',
    website: 'https://www.trentonmi.org',
    phone: '734-675-6500',
    officials: [
      { name: 'Steven Rzeppa', title: 'Mayor', party: null },
      { name: 'Wendy Pate', title: 'Mayor Pro Tem', party: null },
      { name: 'Pat Lewis', title: 'Council Member', party: null },
      { name: 'Bonnie Mauer', title: 'Council Member', party: null },
      { name: 'Bill LeFevre', title: 'Council Member', party: null },
      { name: 'Ed Bourassa', title: 'Council Member', party: null },
    ],
  },

  'Garden City': {
    name: 'City of Garden City',
    website: 'https://www.gardencitymi.org',
    phone: '734-525-8800',
    officials: [
      { name: 'Brian Earle', title: 'Mayor', party: null },
      { name: 'Patricia Squires', title: 'Mayor Pro Tem', party: null },
      { name: 'Mark Jacobs', title: 'Council Member', party: null },
      { name: 'Mike Powers', title: 'Council Member', party: null },
      { name: 'Russell Walker', title: 'Council Member', party: null },
      { name: 'Jaylee Lynch', title: 'Council Member', party: null },
      { name: 'Margo Arnoske', title: 'Council Member', party: null },
    ],
  },

  Plymouth: {
    name: 'City of Plymouth',
    website: 'https://www.plymouthmi.gov',
    phone: '734-453-1234',
    officials: [
      { name: 'Nick Moroz', title: 'Mayor', party: null },
      { name: 'Suzi Deal', title: 'Mayor Pro Tem', party: null },
      { name: "Kelly O'Donnell", title: 'Commissioner', party: null },
      { name: 'Linda Filipczak', title: 'Commissioner', party: null },
      { name: 'Tony Bruscato', title: 'Commissioner', party: null },
      { name: 'Alanna Maguire', title: 'Commissioner', party: null },
      { name: 'Jennifer Kehoe', title: 'Commissioner', party: null },
    ],
  },

  Northville: {
    name: 'City of Northville',
    website: 'https://www.ci.northville.mi.us',
    phone: '248-349-1300',
    officials: [
      { name: 'Brian Turnbull', title: 'Mayor', party: null },
      { name: 'Barbara Moroski-Browne', title: 'Mayor Pro Tem', party: null },
      { name: 'John Carter', title: 'Council Member', party: null },
      { name: 'Andrew Krenz', title: 'Council Member', party: null },
      { name: 'Patrick Giesa', title: 'Council Member', party: null },
    ],
  },

  /* ── Oakland County cities ── */

  Birmingham: {
    name: 'City of Birmingham',
    website: 'https://www.bhamgov.org',
    phone: '248-530-1800',
    officials: [
      { name: 'Elaine McLain', title: 'Mayor', party: null },
      { name: 'Katie Schafer', title: 'Mayor Pro Tem', party: null },
      { name: 'Brad Host', title: 'Commissioner', party: null },
      { name: 'Andrew Haig', title: 'Commissioner', party: null },
      { name: 'Anthony Long', title: 'Commissioner', party: null },
      { name: 'David Bloom', title: 'Commissioner', party: null },
      { name: 'Clinton Baller', title: 'Commissioner', party: null },
    ],
  },

  Ferndale: {
    name: 'City of Ferndale',
    website: 'https://www.ferndalemi.gov',
    phone: '248-546-2525',
    officials: [
      { name: 'Raylon Leaks-May', title: 'Mayor', party: 'Democratic' },
      { name: 'Donni Steele', title: 'Mayor Pro Tem', party: null },
      { name: 'Laura Mitchell', title: 'Council Member', party: null },
      { name: 'Kat Bruner James', title: 'Council Member', party: null },
      { name: 'Greg Pawlica', title: 'Council Member', party: null },
    ],
  },

  'Oak Park': {
    name: 'City of Oak Park',
    website: 'https://www.oakparkmi.gov',
    phone: '248-691-7400',
    officials: [
      { name: 'Marian McClellan', title: 'Mayor', party: null },
      { name: 'Carolyn Burns', title: 'Mayor Pro Tem', party: null },
      { name: 'Solomon Radner', title: 'Council Member', party: null },
      { name: 'Regina Weiss', title: 'Council Member', party: null },
      { name: 'Erika Carter', title: 'Council Member', party: null },
    ],
  },

  'Madison Heights': {
    name: 'City of Madison Heights',
    website: 'https://www.madison-heights.org',
    phone: '248-583-0826',
    officials: [
      { name: 'Roslyn Grafstein', title: 'Mayor', party: null },
      { name: 'Mark Bliss', title: 'Mayor Pro Tem', party: null },
      { name: 'Quinn Wright', title: 'Council Member', party: null },
      { name: 'Robert Corbett', title: 'Council Member', party: null },
      { name: 'David Soltis', title: 'Council Member', party: null },
      { name: 'Sean Fleming', title: 'Council Member', party: null },
      { name: 'Emily Rohrbach', title: 'Council Member', party: null },
    ],
  },

  'Hazel Park': {
    name: 'City of Hazel Park',
    website: 'https://www.hazelpark.org',
    phone: '248-547-3000',
    officials: [
      { name: 'Mike Webb', title: 'Mayor', party: null },
      { name: 'Luke Londo', title: 'Mayor Pro Tem', party: null },
      { name: 'Andy LeCureaux', title: 'Council Member', party: null },
      { name: 'Andy Beras', title: 'Council Member', party: null },
      { name: 'Alissa Sullivan', title: 'Council Member', party: null },
    ],
  },

  Berkley: {
    name: 'City of Berkley',
    website: 'https://www.berkleymich.org',
    phone: '248-658-3300',
    officials: [
      { name: 'Daniel Terbrack', title: 'Mayor', party: null },
      { name: 'Natalie Price', title: 'Mayor Pro Tem', party: null },
      { name: 'Dennis Hennen', title: 'Council Member', party: null },
      { name: 'Jack Blanchard', title: 'Council Member', party: null },
      { name: 'Ross Gavin', title: 'Council Member', party: null },
      { name: 'Bridget Dean', title: 'Council Member', party: null },
      { name: 'Rebecca Levin', title: 'Council Member', party: null },
    ],
  },

  'Auburn Hills': {
    name: 'City of Auburn Hills',
    website: 'https://www.auburnhills.org',
    phone: '248-370-9402',
    officials: [
      { name: 'Kevin McDaniel', title: 'Mayor', party: null },
      { name: 'Brian Marzolf', title: 'Mayor Pro Tem', party: null },
      { name: 'Henry Knight', title: 'Council Member', party: null },
      { name: 'Veronica Whitehead', title: 'Council Member', party: null },
      { name: 'Tim Burke', title: 'Council Member', party: null },
      { name: 'Bob Kittle', title: 'Council Member', party: null },
      { name: 'Sue Casey', title: 'Council Member', party: null },
    ],
  },

  'Walled Lake': {
    name: 'City of Walled Lake',
    website: 'https://www.walledlake.com',
    phone: '248-624-4847',
    officials: [
      { name: 'Linda S. Ackley', title: 'Mayor', party: null },
      { name: 'Bill Roberts', title: 'Mayor Pro Tem', party: null },
      { name: 'Eric Stempien', title: 'Council Member', party: null },
      { name: 'Casey Ambrose', title: 'Council Member', party: null },
      { name: 'Tim Beauchamp', title: 'Council Member', party: null },
      { name: 'Susan Pawlowski', title: 'Council Member', party: null },
      { name: 'David Adams', title: 'Council Member', party: null },
    ],
  },

  /* ── Macomb County cities ── */

  'Mount Clemens': {
    name: 'City of Mount Clemens',
    website: 'https://www.cityofmountclemens.com',
    phone: '586-469-6818',
    officials: [
      { name: 'Laura Kropp', title: 'Mayor', party: null },
      { name: 'Ronald Campbell', title: 'Commissioner', party: null },
      { name: 'Erik Rick', title: 'Commissioner', party: null },
      { name: 'Denise Mentzer', title: 'Commissioner', party: null },
      { name: 'Karyn Sherry', title: 'Commissioner', party: null },
      { name: 'Linus Nicholas', title: 'Commissioner', party: null },
      { name: 'Patricia Owens', title: 'Commissioner', party: null },
    ],
  },

  Eastpointe: {
    name: 'City of Eastpointe',
    website: 'https://www.eastpointecity.org',
    phone: '586-445-5000',
    officials: [
      { name: 'Michael Klinefelt', title: 'Mayor', party: null },
      { name: 'Cardi DeMonaco Jr.', title: 'Mayor Pro Tem', party: null },
      { name: 'Margaret Podsiadlik', title: 'Council Member', party: null },
      { name: 'Rob Baker', title: 'Council Member', party: null },
      { name: 'Harvey Curley', title: 'Council Member', party: null },
    ],
  },

  Fraser: {
    name: 'City of Fraser',
    website: 'https://www.micityoffraser.com',
    phone: '586-293-3100',
    officials: [
      { name: 'Michael Lesich', title: 'Mayor', party: null },
      { name: 'Kathy Blanke', title: 'Mayor Pro Tem', party: null },
      { name: 'Patrice Schornak', title: 'Council Member', party: null },
      { name: 'Suzanne Kalka', title: 'Council Member', party: null },
      { name: 'Amy Baranski', title: 'Council Member', party: null },
      { name: 'David Winowiecki', title: 'Council Member', party: null },
    ],
  },

  'Center Line': {
    name: 'City of Center Line',
    website: 'https://www.centerline.gov',
    phone: '586-757-6800',
    officials: [
      { name: 'Robert Binson', title: 'Mayor', party: null },
      { name: 'Margie Manor', title: 'Mayor Pro Tem', party: null },
      { name: 'Lisa Cipriano', title: 'Council Member', party: null },
      { name: 'Brian Watt', title: 'Council Member', party: null },
      { name: 'Tonya Allen', title: 'Council Member', party: null },
    ],
  },

  /* ── Genesee County (Flint metro) ── */

  Burton: {
    name: 'City of Burton',
    website: 'https://www.burtonmi.com',
    phone: '810-743-1500',
    officials: [
      { name: 'Duane Haskins', title: 'Mayor', party: 'Republican' },
      { name: 'Steven Heffner', title: 'Council President (Ward 1)', party: null, ward: 1 },
      { name: 'Vaughn Smith', title: 'Council Member (Ward 2)', party: null, ward: 2 },
      { name: 'Tom Martinbianco', title: 'Council Member (Ward 3)', party: null, ward: 3 },
      { name: 'Greg Hull', title: 'Council Member (Ward 4)', party: null, ward: 4 },
      { name: "Dennis O'Keefe", title: 'Council Member (Ward 5)', party: null, ward: 5 },
      { name: 'Bryan Sano', title: 'Council Member (Ward 6)', party: null, ward: 6 },
      { name: 'Tina Conley', title: 'Council Member (Ward 7)', party: null, ward: 7 },
    ],
  },
}

/* ── Township officials ── */

export const MI_TOWNSHIP_OFFICIALS = {
  Georgetown: {
    name: 'Georgetown Township',
    website: 'https://www.gtwp.com',
    phone: '616-457-2340',
    officials: [
      { name: 'Jim Wierenga', title: 'Supervisor', party: 'Republican' },
      { name: 'Kelly Kuiper', title: 'Clerk', party: 'Republican' },
      { name: 'Gene DeWitt', title: 'Treasurer', party: 'Republican' },
      { name: 'Amy Grasman', title: 'Trustee', party: null },
      { name: 'John Schwalm', title: 'Trustee', party: null },
      { name: 'Kevin Kelly', title: 'Trustee', party: null },
      { name: 'Gary Veldink', title: 'Trustee', party: null },
    ],
  },

  Holland: {
    name: 'Holland Charter Township',
    website: 'https://hct.holland.mi.us',
    phone: '616-396-2345',
    officials: [
      { name: 'Russ TeSlaa', title: 'Supervisor', party: 'Republican' },
      { name: 'Michael Dalman', title: 'Clerk', party: 'Republican' },
      { name: 'Vince Bush', title: 'Treasurer', party: 'Republican' },
      { name: 'Elliott Church', title: 'Trustee', party: null },
      { name: 'Dave DeYoung', title: 'Trustee', party: null },
      { name: 'Gretchen Molotky', title: 'Trustee', party: null },
    ],
  },

  /* ── Ottawa County townships ── */

  'Allendale Charter': {
    name: 'Allendale Charter Township',
    county: 'Ottawa',
    website: 'https://allendalemi.gov/',
    phone: '616-892-5592',
    officials: [
      { name: 'Adam Elenbaas', title: 'Supervisor', party: null },
      { name: 'Jody L. Hansen', title: 'Clerk', party: null },
      { name: 'David Vander Wall', title: 'Treasurer', party: null },
      { name: 'Ken Smit', title: 'Trustee', party: null },
      { name: 'Mikal MacDonald', title: 'Trustee', party: null },
      { name: 'Kris Schuitema', title: 'Trustee', party: null },
      { name: 'Bruce Zeinstra', title: 'Trustee', party: null },
    ],
  },

  Blendon: {
    name: 'Blendon Township',
    county: 'Ottawa',
    website: 'https://www.blendontownship-mi.gov/',
    phone: '616-896-6525',
    officials: [
      { name: 'Don Vander Kuyl', title: 'Supervisor', party: null },
      { name: 'Robin Overway', title: 'Clerk', party: null },
      { name: "Steven O'Connell", title: 'Treasurer', party: null },
      { name: 'Jeff Meyer', title: 'Trustee', party: null },
      { name: 'Trisha Henderson', title: 'Trustee', party: null },
    ],
  },

  Chester: {
    name: 'Chester Township',
    county: 'Ottawa',
    website: 'https://www.chester-twp.org/',
    phone: '616-899-5544',
    officials: [
      { name: 'Troy Goodno', title: 'Supervisor', party: null },
      { name: 'Helen Dietrich', title: 'Clerk', party: null },
      { name: 'Lisa Denhof', title: 'Treasurer', party: null },
      { name: 'Mike Dunnuck', title: 'Trustee', party: null },
      { name: 'Dale Fedewa', title: 'Trustee', party: null },
    ],
  },

  Crockery: {
    name: 'Crockery Township',
    county: 'Ottawa',
    website: 'https://crockerytownship.gov/',
    phone: '616-842-8622',
    officials: [
      { name: 'Erik Erhorn', title: 'Supervisor', party: null },
      { name: 'Kathy Buchanan', title: 'Clerk', party: null },
      { name: 'Judy VanBemmelen', title: 'Treasurer', party: null },
      { name: 'Ryan Kelly', title: 'Trustee', party: null },
      { name: 'Richard Suchecki', title: 'Trustee', party: null },
    ],
  },

  'Grand Haven Charter': {
    name: 'Grand Haven Charter Township',
    county: 'Ottawa',
    website: 'https://ghtmi.gov/',
    phone: '616-842-5988',
    officials: [
      { name: 'Mark Reenders', title: 'Supervisor', party: null },
      { name: 'Laurie Larsen', title: 'Clerk', party: null },
      { name: 'William Kieft III', title: 'Treasurer', party: null },
      { name: 'Howard Behm', title: 'Trustee', party: null },
      { name: 'Andrea Dumbrell', title: 'Trustee', party: null },
      { name: 'Joy Gaasch', title: 'Trustee', party: null },
      { name: 'Bob Wagenmaker', title: 'Trustee', party: null },
    ],
  },

  'Jamestown Charter': {
    name: 'Jamestown Charter Township',
    county: 'Ottawa',
    website: 'https://twp.jamestown.mi.us/',
    phone: '616-896-8376',
    officials: [
      { name: 'Laurie VanHaitsma', title: 'Supervisor', party: null },
      { name: 'Candy DeHaan', title: 'Clerk', party: null },
      { name: 'Scott Brouwer', title: 'Treasurer', party: null },
      { name: 'Ben Miller', title: 'Trustee', party: null },
      { name: 'Tim Tacoma', title: 'Trustee', party: null },
      { name: 'Wade Windemuller', title: 'Trustee', party: null },
      { name: 'Tom Wolfert', title: 'Trustee', party: null },
    ],
  },

  Olive: {
    name: 'Olive Township',
    county: 'Ottawa',
    website: 'https://www.olivetownship.org/',
    phone: '616-786-9996',
    officials: [
      { name: 'Al Nienhuis', title: 'Supervisor', party: null },
      { name: 'Lona Bronkema', title: 'Clerk', party: null },
      { name: 'Randy Vander Zwaag', title: 'Treasurer', party: null },
      { name: 'Matt Nienhuis', title: 'Trustee', party: null },
      { name: 'Dan Raak', title: 'Trustee', party: null },
    ],
  },

  Park: {
    name: 'Park Township',
    county: 'Ottawa',
    website: 'https://parktownship.org/',
    phone: '616-399-4520',
    officials: [
      { name: 'Steve Spoelhof', title: 'Supervisor', party: null },
      { name: 'Joan Zeerip', title: 'Clerk', party: null },
      { name: 'Jan Steggerda', title: 'Treasurer', party: null },
      { name: 'Shar Clark', title: 'Trustee', party: null },
      { name: 'Jim Gerard', title: 'Trustee', party: null },
      { name: 'Bryan Jones', title: 'Trustee', party: null },
      { name: 'Loran Serne', title: 'Trustee', party: null },
    ],
  },

  'Polkton Charter': {
    name: 'Polkton Charter Township',
    county: 'Ottawa',
    website: 'https://polktontownship.com/',
    phone: '616-837-6876',
    officials: [
      { name: 'Ted Costigan', title: 'Supervisor', party: null },
      { name: 'Jamie TenBrink', title: 'Clerk', party: null },
      { name: 'Robin Liszewski', title: 'Treasurer', party: null },
    ],
  },

  'Port Sheldon': {
    name: 'Port Sheldon Township',
    county: 'Ottawa',
    website: 'https://www.portsheldontwp.org/',
    officials: [
      { name: 'Mike Sabatino', title: 'Supervisor', party: null },
      { name: 'Meredith Hemmeke', title: 'Clerk', party: null },
      { name: 'Rachel Frantom', title: 'Treasurer', party: null },
      { name: 'Luke DeVries', title: 'Trustee', party: null },
      { name: 'Bill Monhollon', title: 'Trustee', party: null },
    ],
  },

  Robinson: {
    name: 'Robinson Township',
    county: 'Ottawa',
    website: 'https://robinsontwpmi.gov/',
    phone: '616-846-2210',
    officials: [
      { name: 'Adam MacMillan', title: 'Supervisor', party: null },
      { name: 'Victoria Sund', title: 'Clerk', party: null },
      { name: 'Jamie Tubergen', title: 'Treasurer', party: null },
      { name: 'Steven Ambrose', title: 'Trustee', party: null },
      { name: 'Ben Ipema', title: 'Trustee', party: null },
    ],
  },

  'Spring Lake Twp': {
    name: 'Spring Lake Township',
    county: 'Ottawa',
    website: 'https://springlaketwp.org/',
    phone: '616-842-1340',
    officials: [
      { name: 'Jerry Rabideau', title: 'Supervisor', party: null },
      { name: 'H. Carolyn Boersma', title: 'Clerk', party: null },
      { name: 'Jim Koster', title: 'Treasurer', party: null },
      { name: 'Cathy Pavick', title: 'Trustee', party: null },
      { name: 'Ande Scherf', title: 'Trustee', party: null },
      { name: 'Jack Schroeder', title: 'Trustee', party: null },
      { name: 'Molly Ziegler', title: 'Trustee', party: null },
    ],
  },

  'Tallmadge Charter': {
    name: 'Tallmadge Charter Township',
    county: 'Ottawa',
    website: 'https://tallmadge.com/',
    phone: '616-994-4501',
    officials: [
      { name: 'Mark Bennett', title: 'Supervisor', party: null },
      { name: 'Karina Rollenhagen', title: 'Clerk', party: null },
      { name: 'Valdyne R. Schwallier', title: 'Treasurer', party: null },
      { name: 'Michael Eppink', title: 'Trustee', party: null },
      { name: 'Joel Terpstra', title: 'Trustee', party: null },
      { name: 'John Bronkema', title: 'Trustee', party: null },
      { name: 'Kent Bollinger', title: 'Trustee', party: null },
    ],
  },

  Wright: {
    name: 'Wright Township',
    county: 'Ottawa',
    website: 'https://wrighttownshipottawami.gov/',
    phone: '616-677-3048',
    officials: [
      { name: 'Steve VanTimmeren', title: 'Supervisor', party: null },
      { name: 'Theresa Frank', title: 'Clerk', party: null },
      { name: 'Sharyl Dietrich', title: 'Treasurer', party: null },
      { name: 'Brad Anderson', title: 'Trustee', party: null },
      { name: 'Rick Schoenborn', title: 'Trustee', party: null },
    ],
  },

  'Zeeland Charter': {
    name: 'Zeeland Charter Township',
    county: 'Ottawa',
    website: 'https://www.zeelandtwp.org/',
    phone: '616-772-6701',
    officials: [
      { name: 'Kerri Bosma', title: 'Supervisor', party: null },
      { name: 'Brian VanDussen', title: 'Clerk', party: null },
      { name: 'Melissa Veldheer', title: 'Treasurer', party: null },
      { name: 'Jeff Salisbury', title: 'Trustee', party: null },
      { name: 'Dave Barry', title: 'Trustee', party: null },
      { name: 'Scott Beute', title: 'Trustee', party: null },
    ],
  },

  /* ── Wayne County townships ── */

  Canton: {
    name: 'Canton Township',
    website: 'https://www.canton-mi.org',
    phone: '734-394-5100',
    officials: [
      { name: 'Anne Marie Graham-Hudak', title: 'Supervisor', party: 'Democratic', phone: '734-394-5185' },
      { name: 'Michael Siegrist', title: 'Clerk', party: 'Democratic', phone: '734-394-5120' },
      { name: 'Dian Slavens', title: 'Treasurer', party: 'Democratic', phone: '734-394-5130' },
      { name: 'Sommer Foster', title: 'Trustee', party: 'Democratic' },
      { name: 'Steven Sneideman', title: 'Trustee', party: 'Democratic' },
      { name: 'Kate Borninski', title: 'Trustee', party: 'Democratic' },
      { name: 'Tania Ganguly', title: 'Trustee', party: 'Democratic' },
    ],
  },

  Redford: {
    name: 'Redford Township',
    website: 'https://www.redfordtwp.com',
    phone: '313-387-2700',
    officials: [
      { name: 'Pat McRae', title: 'Supervisor', party: 'Republican', phone: '313-387-2761' },
      { name: 'Garth Christie', title: 'Clerk', party: 'Republican', phone: '313-387-2750' },
      { name: 'Lily Cavanagh', title: 'Treasurer', party: 'Republican', phone: '313-387-2780' },
      { name: 'Jerry Barterian', title: 'Trustee', party: null },
      { name: 'James R. Brown', title: 'Trustee', party: null },
      { name: 'Joanne McHale', title: 'Trustee', party: null },
      { name: 'Tracey Schultz Kobylarz', title: 'Trustee', party: null },
    ],
  },

  Plymouth: {
    name: 'Plymouth Township',
    website: 'https://www.plymouthtwp.org',
    phone: '734-354-3200',
    officials: [
      { name: 'Kurt Heise', title: 'Supervisor', party: 'Republican', phone: '734-354-3201' },
      { name: 'Jerry Vorva', title: 'Clerk', party: 'Republican', phone: '734-354-3224' },
      { name: 'Mark Clinton', title: 'Treasurer', party: 'Republican', phone: '734-354-3214' },
      { name: 'Gary Heitman', title: 'Trustee', party: null },
      { name: 'John Stewart', title: 'Trustee', party: null },
      { name: 'Paul Wojciechowski', title: 'Trustee', party: null },
      { name: 'Shannon Price', title: 'Trustee', party: null },
    ],
  },

  /* ── Macomb County townships ── */

  Clinton: {
    name: 'Clinton Township',
    website: 'https://www.clintontownship.com',
    phone: '586-286-9313',
    officials: [
      { name: 'Kim Meltzer', title: 'Supervisor', party: 'Democratic', phone: '586-286-9301' },
      { name: 'Jennifer Lilla', title: 'Clerk', party: 'Democratic', phone: '586-286-9313' },
      { name: 'Paul Gieleghem', title: 'Treasurer', party: 'Democratic', phone: '586-286-9390' },
      { name: 'Michael Keys', title: 'Trustee', party: null },
      { name: 'Larry Tocco', title: 'Trustee', party: null },
      { name: 'Mike Maitner', title: 'Trustee', party: null },
      { name: 'Dean Reynolds', title: 'Trustee', party: null },
    ],
  },

  Shelby: {
    name: 'Shelby Township',
    website: 'https://www.shelbytwp.org',
    phone: '586-731-5100',
    officials: [
      { name: 'Rick Stathakis', title: 'Supervisor', party: 'Republican', phone: '586-731-5101' },
      { name: 'Stanley Grot', title: 'Clerk', party: 'Republican', phone: '586-731-5102' },
      { name: 'Darlene Streicher', title: 'Treasurer', party: 'Republican', phone: '586-731-5103' },
      { name: 'David E. Larkin', title: 'Trustee', party: null },
      { name: 'John Vermeersch', title: 'Trustee', party: null },
      { name: 'Doug Wozniak', title: 'Trustee', party: null },
      { name: 'Michael Borg', title: 'Trustee', party: null },
    ],
  },

  Macomb: {
    name: 'Macomb Township',
    website: 'https://www.macomb-mi.gov',
    phone: '586-992-0710',
    officials: [
      { name: 'Frank Viviano', title: 'Supervisor', party: 'Republican', phone: '586-992-0710' },
      { name: 'Kristi Pozzi', title: 'Clerk', party: 'Republican', phone: '586-992-0712' },
      { name: 'Lauren Young', title: 'Treasurer', party: 'Republican', phone: '586-992-0720' },
      { name: 'Charles Oliver', title: 'Trustee', party: null },
      { name: 'Peter Lucido III', title: 'Trustee', party: null },
      { name: 'Janet Dunn', title: 'Trustee', party: null },
      { name: 'Joe Kowalski', title: 'Trustee', party: null },
    ],
  },

  /* ── Oakland County townships ── */

  Waterford: {
    name: 'Waterford Township',
    website: 'https://www.waterfordmi.gov',
    phone: '248-674-6211',
    officials: [
      { name: 'Gary Wall', title: 'Supervisor', party: 'Republican', phone: '248-674-6201' },
      { name: 'Margaret Birch', title: 'Clerk', party: 'Republican', phone: '248-674-6211' },
      { name: 'Margaret Holwell', title: 'Treasurer', party: 'Republican', phone: '248-674-6220' },
      { name: 'Anthony Bartolotta', title: 'Trustee', party: null },
      { name: 'Karen Joliat', title: 'Trustee', party: null },
      { name: 'Arthur Picard', title: 'Trustee', party: null },
      { name: 'Steve Thomas', title: 'Trustee', party: null },
    ],
  },

  'West Bloomfield': {
    name: 'West Bloomfield Township',
    website: 'https://www.wbtwp.com',
    phone: '248-451-4800',
    officials: [
      { name: 'Steve Kaplan', title: 'Supervisor', party: 'Democratic', phone: '248-451-4801' },
      { name: 'Debbie Binder', title: 'Clerk', party: 'Democratic', phone: '248-451-4848' },
      { name: 'Teri Weingarden', title: 'Treasurer', party: 'Democratic', phone: '248-451-4860' },
      { name: 'Terry Galvin', title: 'Trustee', party: null },
      { name: 'Sheilah Seaton McWatt', title: 'Trustee', party: null },
      { name: 'Howard Rosenberg', title: 'Trustee', party: null },
      { name: 'Steven Lindberg', title: 'Trustee', party: null },
    ],
  },

  /* ── Washtenaw County townships ── */

  Pittsfield: {
    name: 'Pittsfield Charter Township',
    website: 'https://www.pittsfield-mi.gov',
    phone: '734-822-3135',
    officials: [
      { name: 'Mandy Grewal', title: 'Supervisor', party: 'Democratic', email: 'mgrewal@pittsfield-mi.gov', phone: '734-822-3135' },
      { name: 'Michelle Anzaldi', title: 'Clerk', party: 'Democratic', email: 'manzaldi@pittsfield-mi.gov', phone: '734-822-3120' },
      { name: 'Patricia Tupacz Scribner', title: 'Treasurer', party: 'Democratic', email: 'ptscribner@pittsfield-mi.gov', phone: '734-822-3130' },
      { name: 'Yameen Jaffer', title: 'Trustee', party: 'Democratic' },
      { name: 'Gerald Krone', title: 'Trustee', party: 'Democratic' },
      { name: 'Linda Edwards-Brown', title: 'Trustee', party: 'Democratic' },
      { name: 'Matthew Hitchingham', title: 'Trustee', party: 'Democratic' },
    ],
  },

  Superior: {
    name: 'Superior Charter Township',
    website: 'https://www.superiortownship.org',
    phone: '734-482-6099',
    officials: [
      { name: 'Ken Schwartz', title: 'Supervisor', party: 'Democratic', phone: '734-482-6099' },
      { name: 'Lynette Findley', title: 'Clerk', party: 'Democratic', phone: '734-482-6099' },
      { name: 'Lisa Lewis', title: 'Treasurer', party: 'Democratic', phone: '734-482-6099' },
      { name: 'Rhonda McGill', title: 'Trustee', party: null },
      { name: 'Nancy Caviston', title: 'Trustee', party: null },
      { name: 'Bernice Lindke', title: 'Trustee', party: null },
      { name: 'Alex Williams', title: 'Trustee', party: null },
    ],
  },

  /* ── Ingham County townships ── */

  Meridian: {
    name: 'Meridian Charter Township',
    website: 'https://www.meridian.mi.us',
    phone: '517-853-4000',
    officials: [
      { name: 'Patricia Herring Jackson', title: 'Supervisor', party: 'Democratic', phone: '517-853-4560' },
      { name: 'Deborah Guthrie', title: 'Clerk', party: 'Democratic', phone: '517-853-4300' },
      { name: 'Julie Brixie', title: 'Treasurer', party: 'Democratic', phone: '517-853-4400' },
      { name: 'Dan Opsommer', title: 'Trustee', party: null },
      { name: 'Kathy Sundland', title: 'Trustee', party: null },
      { name: 'Phil Deschaine', title: 'Trustee', party: null },
      { name: 'Mary Helou', title: 'Trustee', party: null },
    ],
  },

  'Delhi Charter': {
    name: 'Delhi Charter Township',
    website: 'https://www.delhitownship.com',
    phone: '517-694-7760',
    officials: [
      { name: 'John Hayhoe', title: 'Supervisor', party: 'Democratic' },
      { name: 'Evan Hope', title: 'Clerk', party: 'Democratic' },
      { name: 'Andrew Arens', title: 'Treasurer', party: 'Democratic' },
      { name: 'Stuart Goodrich', title: 'Trustee', party: null },
      { name: 'Pat Brown', title: 'Trustee', party: null },
      { name: 'Marcy Bishop', title: 'Trustee', party: null },
      { name: 'Mary Vitale', title: 'Trustee', party: null },
    ],
  },

  'Lansing Charter': {
    name: 'Lansing Charter Township',
    website: 'https://www.lansingtownship.org',
    phone: '517-485-4063',
    officials: [
      { name: 'Maggie Sanders', title: 'Supervisor', party: 'Democratic' },
      { name: 'Susan Estes', title: 'Clerk', party: 'Democratic' },
      { name: 'Megan Cochran', title: 'Treasurer', party: 'Democratic' },
      { name: 'John Daher', title: 'Trustee', party: null },
      { name: 'Diontrae Hayes', title: 'Trustee', party: null },
      { name: 'Beth Rodgers', title: 'Trustee', party: null },
      { name: 'David Hines', title: 'Trustee', party: null },
    ],
  },

  /* ── Eaton County townships ── */

  'Delta Charter': {
    name: 'Delta Charter Township',
    website: 'https://www.deltami.gov',
    phone: '517-323-8590',
    officials: [
      { name: 'Ken Fletcher', title: 'Supervisor', party: 'Republican' },
      { name: 'Mary Clark', title: 'Clerk', party: 'Republican' },
      { name: 'Howard Pizzo', title: 'Treasurer', party: 'Republican' },
      { name: 'Fonda Brewer', title: 'Trustee', party: null },
      { name: 'Andrea Cascarilla', title: 'Trustee', party: null },
      { name: 'Dennis Fedewa', title: 'Trustee', party: null },
      { name: 'Karen Mojica', title: 'Trustee', party: null },
    ],
  },

  /* ── Genesee County townships ── */

  'Grand Blanc': {
    name: 'Grand Blanc Township',
    website: 'https://www.grandblanctwp.com',
    phone: '810-424-2600',
    officials: [
      { name: 'Scott Bennett', title: 'Supervisor', party: 'Republican' },
      { name: 'Cathy Lane', title: 'Clerk', party: 'Republican' },
      { name: 'Tonya Ketzler', title: 'Treasurer', party: 'Republican' },
      { name: 'Earl Wortley', title: 'Trustee', party: null },
      { name: 'Gary Going', title: 'Trustee', party: null },
      { name: 'Lonnie Adkins', title: 'Trustee', party: null },
      { name: 'James Wilkinson', title: 'Trustee', party: null },
    ],
  },

  'Flint': {
    name: 'Flint Township',
    website: 'https://www.flinttownship.org',
    phone: '810-732-5200',
    officials: [
      { name: 'Karyn Miller', title: 'Supervisor', party: 'Democratic' },
      { name: 'Kathy Funk', title: 'Clerk', party: 'Democratic' },
      { name: 'Tracey Tucker', title: 'Treasurer', party: 'Democratic' },
      { name: 'Tom & Cathy Wise', title: 'Trustee', party: null },
      { name: 'Mark Swartz', title: 'Trustee', party: null },
      { name: 'Frank Mardeusz', title: 'Trustee', party: null },
      { name: 'George Menoutes', title: 'Trustee', party: null },
    ],
  },

  /* ── Jackson County townships ── */

  Summit: {
    name: 'Summit Township',
    website: 'https://www.summittwp.com',
    phone: '517-782-5765',
    officials: [
      { name: 'James Dunn', title: 'Supervisor', party: 'Republican' },
      { name: 'Betty Morrissett', title: 'Clerk', party: 'Republican' },
      { name: 'Shelley Brasher', title: 'Treasurer', party: 'Republican' },
      { name: 'Sharon Kulenkamp', title: 'Trustee', party: null },
      { name: 'Jeff Delaney', title: 'Trustee', party: null },
      { name: 'Mark Owen', title: 'Trustee', party: null },
      { name: 'Mike Knott', title: 'Trustee', party: null },
    ],
  },

  /* ── Kalamazoo County townships ── */

  'Comstock Charter': {
    name: 'Comstock Charter Township',
    website: 'https://www.comstockmi.gov',
    phone: '269-381-2360',
    officials: [
      { name: 'Randy Thompson', title: 'Supervisor', party: 'Republican' },
      { name: 'Colleen Knight', title: 'Clerk', party: 'Republican' },
      { name: 'Bret Padgett', title: 'Treasurer', party: 'Republican' },
      { name: 'Jim Thomas', title: 'Trustee', party: null },
      { name: 'Russ DeYoung', title: 'Trustee', party: null },
      { name: 'Carl Engstrom', title: 'Trustee', party: null },
      { name: 'Judy Bisceglia', title: 'Trustee', party: null },
    ],
  },

  'Texas Charter': {
    name: 'Texas Charter Township',
    website: 'https://www.texastownship.org',
    phone: '269-375-1591',
    officials: [
      { name: 'Dave Gemmill', title: 'Supervisor', party: 'Republican' },
      { name: 'Joanna Boekeloo', title: 'Clerk', party: 'Republican' },
      { name: 'Nathan Mehney', title: 'Treasurer', party: 'Republican' },
      { name: 'Brian Ayers', title: 'Trustee', party: null },
      { name: 'Val Foster', title: 'Trustee', party: null },
      { name: 'Doug Stover', title: 'Trustee', party: null },
      { name: 'Greg Kamer', title: 'Trustee', party: null },
    ],
  },

  'Oshtemo Charter': {
    name: 'Oshtemo Charter Township',
    website: 'https://www.oshtemo.org',
    phone: '269-375-4260',
    officials: [
      { name: 'Libby Heiny-Cogswell', title: 'Supervisor', party: 'Democratic' },
      { name: 'Dusty Farmer', title: 'Clerk', party: 'Democratic' },
      { name: 'Clare Buszka', title: 'Treasurer', party: 'Democratic' },
      { name: 'Zak Ford', title: 'Trustee', party: null },
      { name: 'Kizzy Bradford', title: 'Trustee', party: null },
      { name: 'Neil Sikora', title: 'Trustee', party: null },
      { name: 'Cheri Bell', title: 'Trustee', party: null },
    ],
  },

  /* ── Kent County townships ── */

  Byron: {
    name: 'Byron Township',
    website: 'https://www.byrontownship.org',
    phone: '616-878-9104',
    officials: [
      { name: 'Audrey Damoose', title: 'Supervisor', party: 'Republican' },
      { name: 'Bob Dykstra', title: 'Clerk', party: 'Republican' },
      { name: 'Peter VanTuinen', title: 'Treasurer', party: 'Republican' },
      { name: 'Josh Grignon', title: 'Trustee', party: null },
      { name: 'Tammy Meyers', title: 'Trustee', party: null },
      { name: 'Adam DeVore', title: 'Trustee', party: null },
      { name: 'Chris Bloem', title: 'Trustee', party: null },
    ],
  },

  Alpine: {
    name: 'Alpine Township',
    website: 'https://www.alpinetwp.org',
    phone: '616-784-1262',
    officials: [
      { name: 'Alex Arends', title: 'Supervisor', party: 'Republican' },
      { name: 'Jean Hoffman', title: 'Clerk', party: 'Republican' },
      { name: 'William Schweitzer', title: 'Treasurer', party: 'Republican' },
      { name: 'Jim May', title: 'Trustee', party: null },
      { name: 'Ron Cordes', title: 'Trustee', party: null },
      { name: 'Gary DeJong', title: 'Trustee', party: null },
      { name: 'Todd Herweyer', title: 'Trustee', party: null },
    ],
  },

  'Cascade Charter': {
    name: 'Cascade Charter Township',
    website: 'https://www.cascadetwp.com',
    phone: '616-949-1500',
    officials: [
      { name: 'Harry Baergen', title: 'Supervisor', party: 'Republican' },
      { name: 'Jennifer Antel', title: 'Clerk', party: 'Republican' },
      { name: 'Sandra Korhorn', title: 'Treasurer', party: 'Republican' },
      { name: 'Tom McDonald', title: 'Trustee', party: null },
      { name: 'Pam Barrows', title: 'Trustee', party: null },
      { name: 'Jack Lewis', title: 'Trustee', party: null },
      { name: 'Rob Beahan', title: 'Trustee', party: null },
    ],
  },

  Ada: {
    name: 'Ada Township',
    website: 'https://www.adamichigan.org',
    phone: '616-676-9191',
    county: 'Kent',
    officials: [
      { name: 'Thomas Korth', title: 'Supervisor', party: 'Republican' },
      { name: 'Jo DeMarco', title: 'Clerk', party: 'Republican' },
      { name: 'Kevin Moran', title: 'Treasurer', party: 'Republican' },
    ],
  },

  Algoma: {
    name: 'Algoma Township',
    website: 'https://www.algomatwp.org',
    phone: '616-866-1583',
    county: 'Kent',
    officials: [
      { name: 'Kevin Green', title: 'Supervisor', party: 'Republican' },
      { name: 'Tim Spitler', title: 'Clerk', party: 'Republican' },
      { name: 'Eric Alderman', title: 'Treasurer', party: 'Republican' },
      { name: 'Elizabeth Johnson', title: 'Trustee', party: null },
      { name: 'Gordon Pickerd', title: 'Trustee', party: null },
      { name: 'James Powell', title: 'Trustee', party: null },
      { name: 'Steve Rikkers', title: 'Trustee', party: null },
    ],
  },

  Bowne: {
    name: 'Bowne Township',
    website: 'https://www.bownetwp.org',
    phone: '616-868-6846',
    county: 'Kent',
    officials: [
      { name: 'Randy Wilcox', title: 'Supervisor', party: 'Republican' },
      { name: 'Karen Hendrick', title: 'Clerk', party: 'Republican' },
      { name: 'Bonnie Lent-Davis', title: 'Treasurer', party: 'Republican' },
      { name: 'Leigh Chick', title: 'Trustee', party: 'Republican' },
      { name: 'Bob Flynn', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Caledonia Charter': {
    name: 'Caledonia Charter Township',
    website: 'https://www.caledoniatownship.org',
    phone: '616-891-0070',
    county: 'Kent',
    officials: [
      { name: 'Bryan Harrison', title: 'Supervisor', party: 'Republican' },
      { name: 'Joni Henry', title: 'Clerk', party: 'Republican' },
      { name: 'Richard Robertson', title: 'Treasurer', party: 'Republican' },
      { name: 'Tim Bradshaw', title: 'Trustee', party: 'Republican' },
      { name: 'Dale Hermenet', title: 'Trustee', party: 'Republican' },
      { name: 'Richard Snoeyink', title: 'Trustee', party: 'Republican' },
      { name: 'Greg Zoller', title: 'Trustee', party: 'Republican' },
    ],
  },

  Cannon: {
    name: 'Cannon Township',
    website: 'https://www.cannontwp.gov',
    phone: '616-874-6966',
    county: 'Kent',
    officials: [
      { name: 'Steve Grimm', title: 'Supervisor', party: 'Republican' },
      { name: 'Jim Alles', title: 'Clerk', party: 'Republican' },
      { name: 'David Spencer', title: 'Treasurer', party: 'Republican' },
      { name: 'Jessica Gutowski-Slaydon', title: 'Trustee', party: null },
      { name: 'Todd Olson', title: 'Trustee', party: null },
      { name: 'Henry Betten', title: 'Trustee', party: null },
      { name: 'Cy Balk', title: 'Trustee', party: null },
    ],
  },

  Courtland: {
    name: 'Courtland Township',
    website: 'https://www.courtlandtwpmi.gov',
    phone: '616-866-0622',
    county: 'Kent',
    officials: [
      { name: 'Matt McConnon', title: 'Supervisor', party: 'Republican' },
      { name: 'Susan Hartman', title: 'Clerk', party: 'Republican' },
      { name: 'Colleen Brown', title: 'Treasurer', party: 'Republican' },
      { name: 'Kimberly McIntyre', title: 'Trustee', party: 'Republican' },
      { name: 'Charles Porter', title: 'Trustee', party: 'Republican' },
      { name: 'David Thomas', title: 'Trustee', party: 'Republican' },
      { name: 'Rachel Crowther', title: 'Trustee', party: 'Democratic' },
    ],
  },

  'Gaines Charter': {
    name: 'Gaines Charter Township',
    website: 'https://www.gainestownship.org',
    phone: '616-698-6640',
    county: 'Kent',
    officials: [
      { name: 'Jenna Pilkington', title: 'Supervisor', party: 'Republican' },
      { name: 'Michael Brew', title: 'Clerk', party: 'Republican' },
      { name: 'Laurie Lemke', title: 'Treasurer', party: 'Republican' },
      { name: 'Robert DeWard', title: 'Trustee', party: 'Republican' },
      { name: 'Dan Fryling', title: 'Trustee', party: 'Republican' },
      { name: 'Tim Haagsma', title: 'Trustee', party: 'Republican' },
      { name: 'Kathy Vander Stel', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Grand Rapids Charter Twp': {
    name: 'Grand Rapids Charter Township',
    website: 'https://www.grandrapidstwp.org',
    phone: '616-361-7391',
    county: 'Kent',
    officials: [
      { name: 'Michael DeVries', title: 'Supervisor', party: 'Republican' },
      { name: 'Ed Robinette', title: 'Clerk', party: null },
      /* UNVERIFIED: treasurer not confirmed via web search — check grandrapidstwp.org/staff */
    ],
  },

  Grattan: {
    name: 'Grattan Township',
    website: 'https://www.grattantownship.org',
    phone: '616-691-8450',
    county: 'Kent',
    officials: [
      { name: 'Franklin Force', title: 'Supervisor', party: 'Republican' },
      { name: 'Michelle Alberts', title: 'Clerk', party: 'Republican' },
      { name: 'Sabrina Freeman', title: 'Treasurer', party: 'Republican' },
      { name: 'Dennis Heffron', title: 'Trustee', party: 'Republican' },
      { name: 'Paul Knoerl', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Lowell Charter': {
    name: 'Lowell Charter Township',
    website: 'https://www.lowelltwp.org',
    phone: '616-897-7600',
    county: 'Kent',
    officials: [
      { name: 'Jerry Hale', title: 'Supervisor', party: null },
      { name: 'Monica Burtt', title: 'Clerk', party: null },
      { name: 'Ronda Benedict', title: 'Treasurer', party: 'Republican' },
      { name: 'Mark Anderson', title: 'Trustee', party: 'Republican' },
      { name: 'Carlton Blough', title: 'Trustee', party: 'Republican' },
      { name: 'William Thompson', title: 'Trustee', party: 'Republican' },
      { name: 'Andy Vander Ziel', title: 'Trustee', party: 'Republican' },
    ],
  },

  Nelson: {
    name: 'Nelson Township',
    website: 'https://www.nelsontownship.org',
    phone: '616-636-5332',
    county: 'Kent',
    officials: [
      { name: 'Robyn Britton', title: 'Supervisor', party: 'Republican' },
      { name: 'Andrea Carr', title: 'Clerk', party: 'Republican' },
      { name: 'Katy Austin', title: 'Treasurer', party: 'Republican' },
      { name: 'Curtis DeJong', title: 'Trustee', party: 'Republican' },
      { name: 'Daniel George', title: 'Trustee', party: 'Republican' },
    ],
  },

  Oakfield: {
    name: 'Oakfield Township',
    website: 'https://www.oakfieldtwp.org',
    phone: '616-754-5679',
    county: 'Kent',
    officials: [
      { name: 'Darcia Kelley', title: 'Supervisor', party: null },
      { name: 'Sue Trainer', title: 'Clerk', party: null },
      { name: 'Betsy Koett', title: 'Treasurer', party: null },
      { name: 'David Howard', title: 'Trustee', party: 'Republican' },
      { name: 'Pamela Riker', title: 'Trustee', party: 'Republican' },
      { name: 'Kenneth Rittersdorf', title: 'Trustee', party: 'Republican' },
      { name: 'Chad Sowerby', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Plainfield Charter': {
    name: 'Plainfield Charter Township',
    website: 'https://www.plainfieldmi.org',
    county: 'Kent',
    officials: [
      { name: 'Thomas Coleman', title: 'Supervisor', party: 'Republican' },
      { name: 'Cathleen Postmus', title: 'Clerk', party: 'Republican' },
      { name: 'William Brinkman Jr.', title: 'Treasurer', party: 'Republican' },
      { name: 'Kathy Batey', title: 'Trustee', party: null },
      { name: 'Jack Hagedorn', title: 'Trustee', party: null },
      { name: 'Frank Pfaff', title: 'Trustee', party: null },
      { name: 'Susan Morrow', title: 'Trustee', party: null },
    ],
  },

  Solon: {
    name: 'Solon Township',
    website: 'https://www.solontwp.org',
    phone: '616-696-1718',
    county: 'Kent',
    officials: [
      { name: 'Robert Ellick', title: 'Supervisor', party: 'Republican' },
      { name: 'Dorothy Willoughby', title: 'Clerk', party: 'Republican' },
      { name: 'AJ Anielski', title: 'Treasurer', party: 'Republican' },
      { name: 'Mark Hoskins', title: 'Trustee', party: 'Republican' },
      { name: 'Jon Stout', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Sparta Twp': {
    name: 'Sparta Township',
    website: 'https://spartatownship.org',
    phone: '616-887-8863',
    county: 'Kent',
    officials: [
      { name: 'Dale Bergman', title: 'Supervisor', party: null },
      { name: 'Marcy Savage', title: 'Clerk', party: null },
      { name: 'Ashley Johnson', title: 'Treasurer', party: null },
      { name: 'Jason Bradford', title: 'Trustee', party: 'Republican' },
      { name: 'William Goodfellow', title: 'Trustee', party: 'Republican' },
      { name: 'Barbara Johnson', title: 'Trustee', party: 'Republican' },
      { name: 'Robert Steffens', title: 'Trustee', party: 'Republican' },
    ],
  },

  Spencer: {
    name: 'Spencer Township',
    website: 'https://spencertwpmi.gov',
    phone: '616-984-0035',
    county: 'Kent',
    officials: [
      { name: 'Jeff Knapp', title: 'Supervisor', party: null },
      { name: 'Lisa Wright', title: 'Clerk', party: null },
      { name: 'Scott Baas', title: 'Treasurer', party: null },
      { name: 'Chris Lange', title: 'Trustee', party: 'Republican' },
      { name: 'Andrea Roberts', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Tyrone Twp (Kent)': {
    name: 'Tyrone Township',
    website: 'https://www.tyronetownship.us',
    phone: '616-947-7818',
    county: 'Kent',
    officials: [
      { name: 'Greg Carnes', title: 'Supervisor', party: 'Republican' },
      { name: 'Pam Moughler', title: 'Clerk', party: 'Republican' },
      { name: 'Jennifer Eden', title: 'Treasurer', party: 'Republican' },
      { name: 'Herman Ferguson', title: 'Trustee', party: 'Republican' },
      { name: 'Dean Haas', title: 'Trustee', party: 'Republican' },
      { name: 'Chris Ropeta', title: 'Trustee', party: 'Republican' },
      { name: 'Zach Tucker', title: 'Trustee', party: 'Republican' },
    ],
  },

  Vergennes: {
    name: 'Vergennes Township',
    website: 'https://vergennestwpmi.gov',
    phone: '616-897-5671',
    county: 'Kent',
    officials: [
      { name: 'Tim Wittenbach', title: 'Supervisor', party: null },
      { name: 'Shantell Ford', title: 'Clerk', party: null },
      { name: 'Sherry Richmond', title: 'Treasurer', party: null },
    ],
  },

  /* ── Oakland County townships ── */

  'Springfield Charter': {
    name: 'Springfield Charter Township',
    website: 'https://www.springfield-twp.us',
    phone: '248-846-6510',
    officials: [
      { name: 'Laura Moreau', title: 'Supervisor', party: 'Republican' },
      { name: 'Jennifer Whitteaker', title: 'Clerk', party: 'Republican' },
      { name: 'Jamie Dubre', title: 'Treasurer', party: 'Republican' },
      { name: 'Judy Hensler', title: 'Trustee', party: null },
      { name: 'Dennis Vallad', title: 'Trustee', party: null },
      { name: 'David Hopper', title: 'Trustee', party: null },
      { name: 'Marc Cooper', title: 'Trustee', party: null },
    ],
  },

  Independence: {
    name: 'Independence Township',
    website: 'https://www.twp.independence.mi.us',
    phone: '248-625-5111',
    officials: [
      { name: 'Pat Kittle', title: 'Supervisor', party: 'Republican' },
      { name: 'Cari Neubeck', title: 'Clerk', party: 'Republican' },
      { name: 'Paul Brown', title: 'Treasurer', party: 'Republican' },
      { name: 'Ron Ritchie', title: 'Trustee', party: null },
      { name: 'Sam Moraco', title: 'Trustee', party: null },
      { name: 'Jose Aliaga', title: 'Trustee', party: null },
      { name: 'Terri Nallamothu', title: 'Trustee', party: null },
    ],
  },

  'Commerce Charter': {
    name: 'Commerce Charter Township',
    website: 'https://www.commercetwp.com',
    phone: '248-624-0110',
    officials: [
      { name: 'Scott Sadler', title: 'Supervisor', party: 'Republican' },
      { name: 'Mike Lasley', title: 'Clerk', party: 'Republican' },
      { name: 'Debbi Eimer', title: 'Treasurer', party: 'Republican' },
      { name: 'George Weber', title: 'Trustee', party: null },
      { name: 'Robert Long', title: 'Trustee', party: null },
      { name: 'Barbara Garland', title: 'Trustee', party: null },
      { name: 'Ron Dahlstrom', title: 'Trustee', party: null },
    ],
  },

  /* ── Wayne County townships ── */

  Northville: {
    name: 'Northville Township',
    website: 'https://www.northvillemich.com',
    phone: '248-348-5800',
    officials: [
      { name: 'Mark Abbo', title: 'Supervisor', party: 'Republican' },
      { name: 'Marjorie Banner', title: 'Clerk', party: 'Republican' },
      { name: 'Jason Rhines', title: 'Treasurer', party: 'Republican' },
      { name: 'Mindy Herrmann', title: 'Trustee', party: null },
      { name: 'Chris Roosen', title: 'Trustee', party: null },
      { name: 'Scott Instruments', title: 'Trustee', party: null },
      { name: 'Mary Gallagher', title: 'Trustee', party: null },
    ],
  },

  'Van Buren': {
    name: 'Van Buren Township',
    website: 'https://www.vanburen-mi.org',
    phone: '734-699-8900',
    officials: [
      { name: 'Kevin McNamara', title: 'Supervisor', party: 'Democratic' },
      { name: 'Leon Wright', title: 'Clerk', party: 'Democratic' },
      { name: 'Sharry Budd', title: 'Treasurer', party: 'Democratic' },
      { name: 'Paul White', title: 'Trustee', party: null },
      { name: 'Sherry Catallo', title: 'Trustee', party: null },
      { name: 'Reggie Miller', title: 'Trustee', party: null },
      { name: 'Kevin Martin', title: 'Trustee', party: null },
    ],
  },

  Brownstown: {
    name: 'Brownstown Township',
    website: 'https://www.brownstown-mi.org',
    phone: '734-675-0390',
    officials: [
      { name: 'Warren Pearl', title: 'Supervisor', party: 'Republican' },
      { name: 'Dennis Bortolotti', title: 'Clerk', party: 'Republican' },
      { name: 'Kelly Roberts', title: 'Treasurer', party: 'Republican' },
      { name: 'Brian Samulski', title: 'Trustee', party: null },
      { name: 'Christine Taylor', title: 'Trustee', party: null },
      { name: 'Ronald Anstead', title: 'Trustee', party: null },
      { name: 'Joanne Lee', title: 'Trustee', party: null },
    ],
  },

  /* ── Saginaw County townships ── */

  'Saginaw Charter': {
    name: 'Saginaw Charter Township',
    website: 'https://www.saginawtownship.org',
    phone: '989-791-9830',
    officials: [
      { name: 'Tim Braun', title: 'Supervisor', party: 'Republican' },
      { name: 'Amy Hahn', title: 'Clerk', party: 'Republican' },
      { name: 'Monica Price', title: 'Treasurer', party: 'Republican' },
      { name: 'Kyle Harris', title: 'Trustee', party: null },
      { name: 'Jim Graham', title: 'Trustee', party: null },
      { name: 'Phil Karwat', title: 'Trustee', party: null },
      { name: 'Bill Rienstra', title: 'Trustee', party: null },
    ],
  },

  Thomas: {
    name: 'Thomas Township',
    website: 'https://www.thomastwp.org',
    phone: '989-781-0150',
    officials: [
      { name: 'Steve Elkins', title: 'Supervisor', party: 'Republican' },
      { name: 'Linda Coombs', title: 'Clerk', party: 'Republican' },
      { name: 'Dawn Kelley', title: 'Treasurer', party: 'Republican' },
      { name: 'Andy Wenger', title: 'Trustee', party: null },
      { name: 'William Saxton', title: 'Trustee', party: null },
      { name: 'Larry Lee', title: 'Trustee', party: null },
      { name: 'Dave Sommers', title: 'Trustee', party: null },
    ],
  },

  /* ── Grand Traverse County townships ── */

  'Acme': {
    name: 'Acme Township',
    county: 'Grand Traverse',
    website: 'https://www.acmetownship.org/',
    officials: [
      { name: 'Doug White', title: 'Supervisor', party: null },
      { name: 'Lisa Swanson', title: 'Clerk', party: null },
      { name: 'Amy Jenema', title: 'Treasurer', party: null },
      { name: 'Aaron Wylie', title: 'Trustee', party: null },
      { name: 'Paul Scott', title: 'Trustee', party: null },
      { name: 'Dale Stevens', title: 'Trustee', party: null },
      { name: 'Dave Hoxsie', title: 'Trustee', party: null },
    ],
  },

  'Blair': {
    name: 'Blair Township',
    county: 'Grand Traverse',
    website: 'https://www.blairtownshipmi.gov/',
    officials: [
      { name: 'Nicole Blonshine', title: 'Supervisor', party: null },
      { name: 'Lynette Wolfgang', title: 'Clerk', party: null },
      { name: 'Tracie Campbell', title: 'Treasurer', party: null },
      { name: 'Andy Nickerson', title: 'Trustee', party: null },
      { name: 'Preston Taylor', title: 'Trustee', party: null },
      { name: 'Roger Zeits', title: 'Trustee', party: null },
      { name: 'Carl Kucera', title: 'Trustee', party: null },
    ],
  },

  'East Bay': {
    name: 'East Bay Township',
    county: 'Grand Traverse',
    website: 'https://www.eastbaytwp.org',
    officials: [
      { name: 'Beth Friend', title: 'Supervisor', party: null },
      { name: 'Susanne Courtade', title: 'Clerk', party: null },
      { name: 'Tracey Bartlett', title: 'Treasurer', party: null },
      { name: 'Mindy Walters', title: 'Trustee', party: null },
      { name: 'Glen Lile', title: 'Trustee', party: null },
      { name: 'Matt Courtade', title: 'Trustee', party: null },
      { name: 'Matt Cook', title: 'Trustee', party: null },
    ],
  },

  'Fife Lake': {
    name: 'Fife Lake Township',
    county: 'Grand Traverse',
    website: 'https://fifelaketwp.com/',
    officials: [
      { name: 'Lisa Radtke', title: 'Supervisor', party: null },
      { name: 'Annie Allen', title: 'Clerk', party: null },
      { name: 'Cathy Sorrow', title: 'Treasurer', party: null },
      { name: 'Dawn Zimmerman', title: 'Trustee', party: null },
      { name: 'Jayme Werner', title: 'Trustee', party: null },
    ],
  },

  'Garfield Twp (Grand Traverse)': {
    name: 'Garfield Township',
    county: 'Grand Traverse',
    website: 'https://www.garfield-twp.com',
    officials: [
      { name: 'Joe McManus', title: 'Supervisor', party: null },
      { name: 'Lanie McManus', title: 'Clerk', party: null },
      { name: 'Chloe Macomber', title: 'Treasurer', party: null },
      { name: 'Molly Agostinelli', title: 'Trustee', party: null },
      { name: 'Laurie Lapp', title: 'Trustee', party: null },
      { name: 'Denise Schmuckal', title: 'Trustee', party: null },
      { name: 'Chuck Korn', title: 'Trustee', party: null },
    ],
  },

  'Grant Twp (Grand Traverse)': {
    name: 'Grant Township',
    county: 'Grand Traverse',
    website: 'https://grant-grdtraverse.com/',
    officials: [
      { name: 'Crystal Breithaupt', title: 'Supervisor', party: null },
      { name: 'Lisa Willett', title: 'Clerk', party: null },
      { name: 'Beth Svec', title: 'Treasurer', party: null },
      { name: 'Kyle Rector', title: 'Trustee', party: null },
      { name: 'Doug Moyer', title: 'Trustee', party: null },
    ],
  },

  'Green Lake': {
    name: 'Green Lake Township',
    county: 'Grand Traverse',
    website: 'https://www.gogreenlake.org/',
    officials: [
      { name: 'Marvin Radtke Jr.', title: 'Supervisor', party: null },
      { name: 'Judith Kramer', title: 'Clerk', party: null },
      { name: 'Andy Marek', title: 'Treasurer', party: null },
      { name: 'Paul Biondo', title: 'Trustee', party: null },
      { name: 'David Bieganowski', title: 'Trustee', party: null },
      { name: 'Pat McDonald', title: 'Trustee', party: null },
      { name: 'Sherry West', title: 'Trustee', party: null },
    ],
  },

  'Long Lake': {
    name: 'Long Lake Township',
    county: 'Grand Traverse',
    website: 'https://longlaketownship.com/',
    officials: [
      { name: 'Ron Lemcool', title: 'Supervisor', party: null },
      { name: 'Ronda Robinson', title: 'Clerk', party: null },
      { name: 'Kendra Balderach', title: 'Treasurer', party: null },
      { name: 'Duane Schaub', title: 'Trustee', party: null },
      { name: 'Linda Wheelock', title: 'Trustee', party: null },
      { name: 'Dan Wagner', title: 'Trustee', party: null },
      { name: 'Kevin Severt', title: 'Trustee', party: null },
    ],
  },

  'Mayfield': {
    name: 'Mayfield Township',
    county: 'Grand Traverse',
    website: 'http://mayfieldtwp.com/',
    officials: [
      { name: 'Dan Engleman', title: 'Supervisor', party: null },
      { name: 'Julie Schlaud', title: 'Clerk', party: null },
      { name: 'Dan Frisch', title: 'Treasurer', party: null },
      { name: 'Cheryl Kile', title: 'Trustee', party: null },
      { name: 'Chris Maasch', title: 'Trustee', party: null },
    ],
  },

  'Paradise': {
    name: 'Paradise Township',
    county: 'Grand Traverse',
    website: 'https://www.paradisetwp.org/',
    officials: [
      { name: 'Rob Lajko', title: 'Supervisor', party: null },
      { name: 'Lisa Gulliver', title: 'Clerk', party: null },
      { name: 'Anne Smith', title: 'Treasurer', party: null },
      { name: 'Jennifer Graham', title: 'Trustee', party: null },
      { name: 'Jeff Wallace', title: 'Trustee', party: null },
    ],
  },

  'Peninsula': {
    name: 'Peninsula Township',
    county: 'Grand Traverse',
    website: 'https://www.peninsulatownship.com/',
    officials: [
      { name: 'Maura Sanders', title: 'Supervisor', party: null },
      { name: 'Becky Chown', title: 'Clerk', party: null },
      { name: 'Katie Clark', title: 'Treasurer', party: null },
      { name: 'Julie Alexander', title: 'Trustee', party: null },
      { name: 'J.P. Milliken', title: 'Trustee', party: null },
      { name: 'David Sanger', title: 'Trustee', party: null },
      { name: 'Isaiah Wunsch', title: 'Trustee', party: null },
    ],
  },

  'Union Twp (Grand Traverse)': {
    name: 'Union Township',
    county: 'Grand Traverse',
    website: 'https://uniontownshipgt.com/',
    officials: [
      { name: 'Doug Mansfield', title: 'Supervisor', party: null },
      { name: 'Sheryl Tillitson', title: 'Clerk', party: null },
      { name: 'Keri Boughner', title: 'Treasurer', party: null },
      { name: 'Kellie Fuelling', title: 'Trustee', party: null },
      { name: 'Janine Jung', title: 'Trustee', party: null },
    ],
  },

  'Whitewater': {
    name: 'Whitewater Township',
    county: 'Grand Traverse',
    website: 'https://www.whitewatertownshipmi.gov/',
    officials: [
      { name: 'Linda Slopsema', title: 'Supervisor', party: null },
      { name: 'Wendy Hoeksema', title: 'Clerk', party: null },
      { name: 'Jill Koester', title: 'Treasurer', party: null },
      { name: 'Tim Arends', title: 'Trustee', party: null },
      { name: 'Randy Mielnik', title: 'Trustee', party: null },
    ],
  },

  /* ── Wayne County townships ── */

  Redford: {
    name: 'Redford Township',
    website: 'https://www.redfordtwp.com',
    phone: '313-387-2700',
    officials: [
      { name: 'Pat McRae', title: 'Supervisor', party: 'Democratic' },
      { name: 'Garth Christie', title: 'Clerk', party: 'Democratic' },
      { name: 'Dawn Duff', title: 'Treasurer', party: 'Democratic' },
      { name: 'David Jordan', title: 'Trustee', party: null },
      { name: 'Tracey Schultz-Kobylarz', title: 'Trustee', party: null },
      { name: 'Jack Martin', title: 'Trustee', party: null },
      { name: 'Joanne McHugh', title: 'Trustee', party: null },
    ],
  },

  'Huron Charter': {
    name: 'Huron Charter Township',
    website: 'https://www.hurontwp.com',
    phone: '734-753-4070',
    officials: [
      { name: 'Everette Thomas', title: 'Supervisor', party: 'Democratic' },
      { name: 'Thomas & Associates', title: 'Clerk', party: null },
      { name: 'Christine Williamson', title: 'Treasurer', party: null },
    ],
  },

  Sumpter: {
    name: 'Sumpter Township',
    website: 'https://www.sumptertwp.com',
    phone: '734-461-6201',
    officials: [
      { name: 'John Morgan', title: 'Supervisor', party: null },
      { name: 'Esther Hurst', title: 'Clerk', party: null },
      { name: 'Peggy Bezy', title: 'Treasurer', party: null },
    ],
  },

  /* ── Oakland County townships ── */

  'West Bloomfield': {
    name: 'West Bloomfield Township',
    website: 'https://www.westbloomfieldtwp.com',
    phone: '248-451-4800',
    officials: [
      { name: 'Steve Kaplan', title: 'Supervisor', party: 'Democratic' },
      { name: 'Deborah Binder', title: 'Clerk', party: 'Democratic' },
      { name: 'Teri Weingarden', title: 'Treasurer', party: 'Democratic' },
    ],
  },

  'Waterford': {
    name: 'Waterford Township',
    website: 'https://www.waterfordmi.gov',
    phone: '248-674-5441',
    officials: [
      { name: 'Gary Wall', title: 'Supervisor', party: 'Republican' },
      { name: 'Margaret Birch', title: 'Clerk', party: 'Republican' },
      { name: 'Terri Bates', title: 'Treasurer', party: 'Republican' },
    ],
  },

  'Orion': {
    name: 'Orion Township',
    website: 'https://www.oriontownship.org',
    phone: '248-391-0304',
    officials: [
      { name: 'Chris Barnett', title: 'Supervisor', party: 'Republican' },
      { name: 'Penny Shults', title: 'Clerk', party: 'Republican' },
      { name: 'Donni Steele', title: 'Treasurer', party: 'Republican' },
    ],
  },

  'Commerce Charter': {
    name: 'Commerce Charter Township',
    website: 'https://www.commercetwp.com',
    phone: '248-624-0110',
    officials: [
      { name: 'Scott Philo', title: 'Supervisor', party: 'Republican' },
      { name: 'Mike Gehrls', title: 'Clerk', party: 'Republican' },
      { name: 'Natalie McCann', title: 'Treasurer', party: 'Republican' },
    ],
  },

  'Independence': {
    name: 'Independence Township',
    website: 'https://www.twp.independence.mi.us',
    phone: '248-625-5111',
    officials: [
      { name: 'Pat Kittle', title: 'Supervisor', party: 'Republican' },
      { name: 'Cari Neubeck', title: 'Clerk', party: 'Republican' },
      { name: 'Paul Brown', title: 'Treasurer', party: 'Republican' },
    ],
  },

  'White Lake': {
    name: 'White Lake Township',
    website: 'https://www.whitelaketwp.com',
    phone: '248-698-3300',
    officials: [
      { name: 'Rik Kowall', title: 'Supervisor', party: 'Republican' },
      { name: 'Anthony Noble', title: 'Clerk', party: 'Republican' },
      { name: 'Teresa Rutt', title: 'Treasurer', party: 'Republican' },
    ],
  },

  'Brandon': {
    name: 'Brandon Township',
    website: 'https://www.brandontownship.us',
    phone: '248-627-2851',
    officials: [
      { name: 'Jayson Rumball', title: 'Supervisor', party: 'Republican' },
      { name: 'Roselyn Blair', title: 'Clerk', party: 'Republican' },
      { name: 'Jenny Bland', title: 'Treasurer', party: 'Republican' },
    ],
  },

  /* ── Livingston County townships ── */

  'Genoa': {
    name: 'Genoa Township',
    website: 'https://www.genoa.org',
    phone: '517-546-7200',
    officials: [
      { name: 'Bill Rogers', title: 'Supervisor', party: 'Republican' },
      { name: 'Polly Skolarus', title: 'Clerk', party: 'Republican' },
      { name: 'Robin Hunt', title: 'Treasurer', party: 'Republican' },
    ],
  },

  'Brighton': {
    name: 'Brighton Township',
    website: 'https://www.brightontwp.com',
    phone: '810-229-0550',
    officials: [
      { name: 'Patrick Michel', title: 'Supervisor', party: 'Republican' },
      { name: 'Ann Bollin', title: 'Clerk', party: 'Republican' },
      { name: 'Teresa Morency', title: 'Treasurer', party: 'Republican' },
    ],
  },

  'Hamburg': {
    name: 'Hamburg Township',
    website: 'https://www.hamburg.mi.us',
    phone: '810-231-1000',
    officials: [
      { name: 'Pat Hohl', title: 'Supervisor', party: 'Republican' },
      { name: 'Jim Neilson', title: 'Clerk', party: 'Republican' },
      { name: 'Jason Negri', title: 'Treasurer', party: 'Republican' },
    ],
  },

  /* ── Monroe County townships ── */

  'Bedford': {
    name: 'Bedford Township',
    website: 'https://www.bedfordtwp.org',
    phone: '734-847-6791',
    officials: [
      { name: 'Paul Zarbaugh', title: 'Supervisor', party: 'Republican' },
      { name: 'Trudy Hershberger', title: 'Clerk', party: 'Republican' },
      { name: 'Krista Engelman', title: 'Treasurer', party: 'Republican' },
    ],
  },

  /* ── Berrien County townships ── */

  'St. Joseph Charter': {
    name: 'St. Joseph Charter Township',
    website: 'https://www.sjtwp.org',
    phone: '269-429-4517',
    officials: [
      { name: 'John Osiadacz', title: 'Supervisor', party: 'Republican' },
      { name: 'Carol Stibitz', title: 'Clerk', party: 'Republican' },
      { name: 'Jeff Frick', title: 'Treasurer', party: 'Republican' },
    ],
  },

  /* ── Calhoun County townships ── */

  'Emmett Charter': {
    name: 'Emmett Charter Township',
    website: 'https://www.emmettchartertownship.org',
    phone: '269-968-0581',
    officials: [
      { name: 'John Bippus', title: 'Supervisor', party: 'Republican' },
      { name: 'Virginia Beard', title: 'Clerk', party: 'Republican' },
      { name: 'Brittany Losey', title: 'Treasurer', party: 'Republican' },
    ],
  },

  /* ── Jackson County townships ── */

  'Summit': {
    name: 'Summit Township',
    website: 'https://www.summittwp.com',
    phone: '517-784-1025',
    officials: [
      { name: 'James Dunn', title: 'Supervisor', party: 'Republican' },
      { name: 'Victoria Hamlin', title: 'Clerk', party: 'Republican' },
      { name: 'Sandie Neumann', title: 'Treasurer', party: 'Republican' },
    ],
  },

  /* ── Genesee County townships ── */

  'Flushing': {
    name: 'Flushing Township',
    website: 'https://www.flushingtwp.com',
    phone: '810-659-0800',
    officials: [
      { name: 'Gary Deitering', title: 'Supervisor', party: 'Republican' },
      { name: 'Julia Morford', title: 'Clerk', party: 'Republican' },
      { name: 'Mark Purkey', title: 'Treasurer', party: 'Republican' },
    ],
  },

  'Grand Blanc Charter': {
    name: 'Grand Blanc Charter Township',
    website: 'https://www.grandblanctwp.com',
    phone: '810-424-2600',
    officials: [
      { name: 'Scott Bennett', title: 'Supervisor', party: 'Republican' },
      { name: 'Cathy Lane', title: 'Clerk', party: 'Republican' },
      { name: 'Mike Zack', title: 'Treasurer', party: 'Republican' },
    ],
  },

  'Mundy': {
    name: 'Mundy Township',
    website: 'https://www.mundytownship.org',
    phone: '810-744-1015',
    officials: [
      { name: 'Tonya Ketzler', title: 'Supervisor', party: 'Republican' },
      { name: 'Tina Gambino', title: 'Clerk', party: 'Republican' },
      { name: 'James Wojciechowski', title: 'Treasurer', party: 'Republican' },
    ],
  },

  /* ── Muskegon County townships ── */

  'Blue Lake Twp': {
    name: 'Blue Lake Township',
    website: 'https://www.bluelaketownship.org',
    phone: '231-894-6335',
    officials: [
      { name: 'Melonie Arbogast', title: 'Supervisor', party: null },
      { name: 'Jeff Abram', title: 'Clerk', party: null },
      { name: 'Debbie Therrian', title: 'Treasurer', party: null },
    ],
  },

  'Casnovia Twp': {
    name: 'Casnovia Township',
    website: 'https://casnoviatownshipmi.gov',
    phone: '616-675-4064',
    officials: [
      { name: 'Paul Black', title: 'Supervisor', party: null },
      { name: 'Carrie Marlatt', title: 'Clerk', party: null },
      { name: 'Penny Muma', title: 'Treasurer', party: null },
    ],
  },

  'Cedar Creek': {
    name: 'Cedar Creek Township',
    website: 'https://www.cedarcreektownship.org',
    phone: '231-821-0014',
    officials: [
      { name: 'Chuck Luttrull', title: 'Supervisor', party: null },
      { name: 'Heather Delimata', title: 'Clerk', party: null },
      { name: 'Heather Jarvis', title: 'Treasurer', party: null },
    ],
  },

  Dalton: {
    name: 'Dalton Township',
    website: 'https://daltonmi.gov',
    phone: '231-766-3043',
    officials: [
      { name: 'Heather Petrie-Cooley', title: 'Supervisor', party: 'Republican' },
      { name: 'Tracy L. DeMarse', title: 'Clerk', party: 'Democratic' },
      { name: 'Kristy Houseman-Miles', title: 'Treasurer', party: 'Republican' },
      { name: 'Michael Bennett', title: 'Trustee', party: 'Democratic' },
      { name: 'Daniel Hess', title: 'Trustee', party: 'Democratic' },
      { name: 'Eugene Kooi', title: 'Trustee', party: 'Republican' },
      { name: 'Nola Twining', title: 'Trustee', party: 'Republican' },
    ],
  },

  Egelston: {
    name: 'Egelston Township',
    website: 'https://www.egelstontwp.org',
    phone: '231-788-2531',
    officials: [
      { name: 'Amanda Faino', title: 'Supervisor', party: null },
      { name: 'Joan Raap', title: 'Clerk', party: null },
      { name: 'Trudy Rosema', title: 'Treasurer', party: null },
    ],
  },

  Fruitland: {
    name: 'Fruitland Township',
    website: 'https://fruitlandmi.gov',
    phone: '231-766-3208',
    officials: [
      { name: 'Jeff Marcinkowski', title: 'Supervisor', party: null },
      { name: 'Alexa Steffes', title: 'Clerk', party: null },
      { name: 'Justin Roggero', title: 'Treasurer', party: null },
      { name: 'Brent Brower', title: 'Trustee', party: null },
      { name: 'Sondra Cross', title: 'Trustee', party: null },
      { name: 'Mike Holman', title: 'Trustee', party: null },
      { name: 'Christopher VanOosterhout', title: 'Trustee', party: null },
    ],
  },

  'Fruitport Charter': {
    name: 'Fruitport Charter Township',
    website: 'https://fruitporttownship-mi.gov',
    phone: '231-865-3151',
    officials: [
      { name: 'Todd Dunham', title: 'Supervisor', party: null },
      { name: 'Andrea Anderson', title: 'Clerk', party: null },
      { name: 'Rose Dillon', title: 'Treasurer', party: null },
    ],
  },

  'Holton Twp': {
    name: 'Holton Township',
    website: 'https://holtontownship.com',
    phone: '231-821-2168',
    officials: [
      { name: 'Amy Brookhouse', title: 'Supervisor', party: 'Republican' },
      { name: 'Candy Murat', title: 'Clerk', party: 'Republican' },
      { name: 'William Halbower', title: 'Treasurer', party: 'Democratic' },
    ],
  },

  Laketon: {
    name: 'Laketon Township',
    website: 'https://laketontwpmi.gov',
    phone: '231-744-2454',
    officials: [
      { name: 'Kim Arter', title: 'Supervisor', party: null },
      { name: 'Christina Achterhoff', title: 'Clerk', party: null },
      { name: 'Veronica S. West', title: 'Treasurer', party: null },
    ],
  },

  'Montague Twp': {
    name: 'Montague Township',
    website: 'http://www.montaguetownship.com',
    phone: '231-894-4414',
    officials: [
      { name: 'Jeff King', title: 'Supervisor', party: null },
      { name: 'Drew Roesler', title: 'Clerk', party: null },
      { name: 'Tracy Korthase', title: 'Treasurer', party: null },
    ],
  },

  Moorland: {
    name: 'Moorland Township',
    website: 'https://moorlandtwp.com',
    phone: '231-861-6266',
    officials: [
      { name: 'Dan Nutt', title: 'Supervisor', party: null },
      { name: 'Rose Spoelman', title: 'Clerk', party: null },
      { name: 'Sabra Guy', title: 'Treasurer', party: null },
      { name: 'Jake Tyers', title: 'Trustee', party: null },
      { name: 'Anita Knapp', title: 'Trustee', party: null },
    ],
  },

  'Muskegon Charter': {
    name: 'Muskegon Charter Township',
    website: 'https://muskegontwpmi.gov',
    phone: '231-777-2555',
    officials: [
      { name: 'Jennifer Hodges', title: 'Supervisor', party: null },
      { name: 'Carrie Westbrook', title: 'Clerk', party: null },
      { name: 'Lindsay Theile', title: 'Treasurer', party: null },
      { name: 'Robert Grabinski', title: 'Trustee', party: null },
      { name: 'Carolyn Jurecki', title: 'Trustee', party: null },
      { name: 'Jenni Bowen', title: 'Trustee', party: null },
      { name: 'Steve Browers', title: 'Trustee', party: null },
    ],
  },

  'Ravenna Twp': {
    name: 'Ravenna Township',
    website: 'https://www.ravennatwp.com',
    phone: '231-853-6205',
    officials: [
      { name: 'Steven Patterson', title: 'Supervisor', party: 'Republican' },
      { name: 'Penny Sherman', title: 'Clerk', party: null },
      { name: 'Sonja K. Patterson', title: 'Treasurer', party: 'Republican' },
    ],
  },

  Sullivan: {
    name: 'Sullivan Township',
    website: 'https://sullivantownship.com',
    phone: '231-853-6900',
    officials: [
      { name: 'Courtney Glavich', title: 'Supervisor', party: null },
      { name: 'Heather Brown', title: 'Clerk', party: null },
      { name: 'Brooke VanHouten', title: 'Treasurer', party: null },
      { name: 'Angela Himber', title: 'Trustee', party: null },
      { name: 'Michael Hazekamp', title: 'Trustee', party: null },
    ],
  },

  'Whitehall Twp': {
    name: 'Whitehall Township',
    website: 'https://whitehalltwp.org',
    phone: '231-893-2095',
    officials: [
      { name: 'Rhonda Boyd', title: 'Treasurer', party: null },
    ],
  },

  'White River': {
    name: 'White River Township',
    website: 'https://whiterivertwp.com',
    phone: '231-894-6449',
    officials: [
      { name: 'Ron Bailey', title: 'Supervisor', party: null },
      { name: 'Julie Goericke', title: 'Clerk', party: null },
      { name: 'Mary Kriesel', title: 'Treasurer', party: null },
      { name: 'Deb Harris', title: 'Trustee', party: null },
      { name: 'Laura Anderson', title: 'Trustee', party: null },
    ],
  },

  /* ── Montcalm County townships ── */

  'Bloomer': {
    name: 'Bloomer Township',
    website: 'https://bloomertownship.org',
    phone: '989-533-1096',
    officials: [
      { name: 'Dan Ryan', title: 'Supervisor', party: 'Republican' },
      { name: 'Tara Chapko', title: 'Clerk', party: 'Republican' },
      { name: 'Colleen Schneider', title: 'Treasurer', party: 'Republican' },
      { name: 'Dana Gonzales', title: 'Trustee', party: 'Republican' },
      { name: 'Larry Hummel', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Bushnell': {
    name: 'Bushnell Township',
    website: 'https://bushnelltownship.com',
    phone: '989-248-3349',
    officials: [
      { name: 'Mike Fitzgerald', title: 'Supervisor', party: 'Democratic' },
      { name: 'Louise Belyou', title: 'Clerk', party: 'Republican' },
      { name: 'Karron Bliss', title: 'Treasurer', party: null },
      { name: 'Patrick Draper', title: 'Trustee', party: 'Republican' },
      { name: 'Lori Daly', title: 'Trustee', party: null },
    ],
  },

  'Cato': {
    name: 'Cato Township',
    website: 'https://villageoflakeview.org/cato-township-information.php',
    phone: '616-824-4568',
    officials: [
      { name: 'Brandi Clark-Hubbard', title: 'Supervisor', party: 'Republican' },
      { name: 'Ginger Imhoff', title: 'Clerk', party: 'Republican' },
      { name: 'Jamie Boehm', title: 'Treasurer', party: 'Republican' },
      { name: 'David G. Behrenwald', title: 'Trustee', party: 'Republican' },
      { name: 'Marcy Myers', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Crystal': {
    name: 'Crystal Township',
    website: 'https://crystal-township.com',
    phone: '989-235-4170',
    officials: [
      { name: 'Curt McCracken', title: 'Supervisor', party: 'Republican' },
      { name: 'Pat Baker-Marek', title: 'Clerk', party: 'Republican' },
      { name: 'Alisha Little', title: 'Treasurer', party: 'Republican' },
      { name: 'Vera Bogart', title: 'Trustee', party: 'Republican' },
      { name: 'David Wight', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Day': {
    name: 'Day Township',
    website: 'https://daytownship.com',
    phone: '989-304-0233',
    officials: [
      { name: 'Michael J. Rasmussen', title: 'Supervisor', party: 'Republican' },
      { name: 'Krysti B. Perkins', title: 'Clerk', party: 'Republican' },
      { name: 'Beth L. Bellows', title: 'Treasurer', party: 'Republican' },
      { name: 'Brandon M. Gibson', title: 'Trustee', party: 'Republican' },
      { name: 'Marcus Nelson', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Douglass': {
    name: 'Douglass Township',
    website: 'https://douglasstwp.org',
    phone: '989-762-8014',
    officials: [
      { name: 'Kathy Rasmussen', title: 'Supervisor', party: null }, /* appointed Aug 2025 after Cindy Shick resigned */
      { name: 'Holly Huff', title: 'Clerk', party: 'Republican' },
      { name: 'Kristi Cordray', title: 'Treasurer', party: 'Independent' },
      { name: 'Ken Bunting', title: 'Trustee', party: 'Republican' },
      { name: 'Eric Tester', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Eureka': {
    name: 'Eureka Charter Township',
    website: 'https://eurekatownshipmi.gov',
    phone: '616-754-5053',
    officials: [
      { name: 'Kristen Lower', title: 'Supervisor', party: 'Republican' },
      { name: 'Linda Ruwersma', title: 'Clerk', party: 'Republican' },
      { name: 'Cindy Hanson', title: 'Treasurer', party: 'Republican' },
      { name: 'Shayne Becher', title: 'Trustee', party: 'Republican' },
      { name: 'Paul Ruwersma', title: 'Trustee', party: null },
      { name: 'Tim Johnson', title: 'Trustee', party: 'Republican' },
      { name: 'Jeremy Austin', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Evergreen': {
    name: 'Evergreen Township',
    website: 'https://evergreen-township.com',
    phone: '989-831-9043',
    officials: [
      { name: 'Andy Ross', title: 'Supervisor', party: 'Republican' },
      { name: 'Kelli Greenhoe', title: 'Clerk', party: 'Republican' },
      { name: 'Annette Fountain', title: 'Treasurer', party: 'Republican' },
      { name: 'Mark Heintzelman', title: 'Trustee', party: 'Republican' },
      { name: 'Laura Baker', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Fairplain': {
    name: 'Fairplain Township',
    website: 'https://www.montcalm.us/390/Fairplains-Township',
    phone: '616-835-7677',
    officials: [
      { name: 'Thomas B. Sova', title: 'Supervisor', party: 'Republican' },
      { name: 'Stacie Pribble', title: 'Clerk', party: 'Republican' },
      { name: 'Randall Ross', title: 'Treasurer', party: 'Republican' },
      { name: 'Brenda Sova', title: 'Trustee', party: 'Republican' },
      { name: 'Gaylia Ross', title: 'Trustee', party: 'Democratic' },
    ],
  },

  'Ferris': {
    name: 'Ferris Township',
    website: 'https://www.montcalm.us/394/Ferris-Township',
    phone: '989-268-5313',
    officials: [
      { name: 'Randy Stearns', title: 'Supervisor', party: 'Republican' },
      { name: 'Tammy Carter', title: 'Clerk', party: 'Republican' },
      { name: 'Darrell Waldron', title: 'Treasurer', party: 'Republican' },
      { name: 'Dan Calverley', title: 'Trustee', party: 'Republican' },
      { name: 'Kevin Max Hills', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Home': {
    name: 'Home Township',
    website: 'https://hometownshipmontcalm.gov',
    phone: '989-427-3092',
    officials: [
      { name: 'Cindy Stratton', title: 'Supervisor', party: 'Republican' },
      { name: 'Kim Collins', title: 'Clerk', party: 'Republican' },
      { name: 'Karen Nesbitt', title: 'Treasurer', party: 'Republican' },
      { name: 'Chris Irwin', title: 'Trustee', party: 'Republican' },
      { name: 'Gale Nesbitt', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Maple Valley': {
    name: 'Maple Valley Township',
    website: 'https://maplevalleytwpmi.gov',
    phone: '231-354-6774',
    officials: [
      { name: 'Bruce Deur', title: 'Supervisor', party: null }, /* appointed interim after Dan Boes resigned Apr 2025 */
      { name: 'Andi Knapp', title: 'Clerk', party: null },
      { name: 'Meg Booth', title: 'Treasurer', party: null },
      { name: 'Lee Frandsen', title: 'Trustee', party: 'Republican' },
      { name: 'Tim Thornhill', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Montcalm Twp': {
    name: 'Montcalm Township',
    website: 'https://montcalmtownship.com',
    phone: '616-754-5133',
    officials: [
      { name: 'Brian Blomstrom', title: 'Supervisor', party: 'Republican' },
      { name: 'Christine Foley', title: 'Clerk', party: 'Republican' },
      { name: 'Rosemary Hyde', title: 'Treasurer', party: 'Republican' },
      { name: 'Brian Cousineau', title: 'Trustee', party: 'Republican' },
      { name: 'Edward Hansen', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Pierson Twp': {
    name: 'Pierson Township',
    website: 'https://piersontwp.org',
    phone: '616-636-8570',
    officials: [
      { name: 'Daniel J. Buyze', title: 'Supervisor', party: 'Republican' },
      { name: 'Sara Burkholder', title: 'Clerk', party: 'Republican' },
      { name: 'Lydia Orcutt', title: 'Treasurer', party: 'Republican' },
      { name: 'Jason Bergman', title: 'Trustee', party: 'Republican' },
      { name: 'Caleb Sower', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Pine': {
    name: 'Pine Township',
    website: 'https://pinetownship.net',
    phone: '989-831-8803',
    officials: [
      { name: 'William Drews', title: 'Supervisor', party: 'Republican' },
      { name: 'Marla Sprague', title: 'Clerk', party: 'Republican' },
      { name: 'Misty VanGessel', title: 'Treasurer', party: 'Republican' },
      { name: 'Darcy Krause', title: 'Trustee', party: 'Republican' },
      { name: 'Rodney Palmer', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Reynolds': {
    name: 'Reynolds Township',
    website: 'https://reynoldstwp.com',
    phone: '616-292-1859',
    officials: [
      { name: 'Aaron Kindel', title: 'Supervisor', party: 'Republican' },
      { name: 'Robin Sholty', title: 'Clerk', party: 'Republican' },
      { name: 'Roger Stedman', title: 'Treasurer', party: 'Republican' },
      { name: 'Robert Bergstrom', title: 'Trustee', party: 'Republican' },
      { name: 'David Saucier', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Richland': {
    name: 'Richland Township',
    website: 'https://richland-township.com',
    phone: '989-268-5286',
    officials: [
      { name: 'Jody Penrod', title: 'Supervisor', party: 'Republican' },
      { name: 'Laurie Darmody', title: 'Clerk', party: 'Republican' },
      { name: 'Connie Marshall', title: 'Treasurer', party: 'Republican' },
      { name: 'Scott Marshall', title: 'Trustee', party: 'Republican' },
      { name: 'Cal Callison', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Sidney': {
    name: 'Sidney Township',
    website: 'https://sidneymi.gov',
    phone: '989-328-3535',
    officials: [
      { name: 'Terry Peterman', title: 'Supervisor', party: 'Democratic' },
      { name: 'Carrie Wills', title: 'Clerk', party: 'Republican' },
      { name: 'Corinda Stover', title: 'Treasurer', party: 'Republican' },
      { name: 'Erik Benko', title: 'Trustee', party: 'Republican' },
      { name: 'Ray Leyrer', title: 'Trustee', party: 'Democratic' },
    ],
  },

  'Winfield': {
    name: 'Winfield Township',
    website: 'https://winfieldtownshipmi.gov',
    phone: '231-636-1401',
    officials: [
      { name: 'Ryan VanSolkema', title: 'Supervisor', party: 'Republican' },
      { name: 'CaroleSue Chase-Stout', title: 'Clerk', party: 'Independent' },
      { name: 'Susan Majinska', title: 'Treasurer', party: 'Independent' },
      { name: 'Kenneth Ek', title: 'Trustee', party: null },
      { name: 'Theresa Bennett-Stratton', title: 'Trustee', party: 'Republican' },
    ],
  },

  /* ── Mecosta County townships ── */

  'Aetna': {
    name: 'Aetna Township',
    website: 'https://www.aetnatownshipmecosta.com',
    phone: '231-856-4480',
    officials: [
      { name: 'Bruce Carey', title: 'Supervisor', party: 'Republican' },
      { name: 'Bev McLaughlin', title: 'Clerk', party: 'Republican' },
      { name: 'Amy Hillis-Ouellette', title: 'Treasurer', party: 'Republican' },
      { name: 'Barbie Cornell', title: 'Trustee', party: null },
      { name: 'Larry Platt', title: 'Trustee', party: null },
    ],
  },

  'Austin': {
    name: 'Austin Township',
    website: 'http://austintownship.org',
    phone: '231-823-9704',
    officials: [
      { name: 'Kenn Vredenburg', title: 'Supervisor', party: 'Republican' },
      { name: 'Billie Jean Barns', title: 'Clerk', party: 'Republican' },
      { name: 'Carolyn K. Towsley', title: 'Treasurer', party: 'Democratic' },
      { name: 'John Brockway', title: 'Trustee', party: null },
      { name: 'Charles Sheldon', title: 'Trustee', party: null },
    ],
  },

  'Big Rapids Charter': {
    name: 'Big Rapids Charter Township',
    website: 'https://bigrapidstownshipmi.gov',
    phone: '231-796-3603',
    officials: [
      { name: 'Bruce Borkovich', title: 'Supervisor', party: null },
      { name: 'Hannah Saez', title: 'Clerk', party: null },
      { name: 'Dena Marek', title: 'Treasurer', party: null },
      { name: 'Jerry Everett', title: 'Trustee', party: null },
      { name: 'Chris Teceno', title: 'Trustee', party: null },
      { name: 'Joe Bechaz', title: 'Trustee', party: null },
      { name: 'Ron Welch', title: 'Trustee', party: null },
    ],
  },

  'Chippewa': {
    name: 'Chippewa Township',
    website: 'https://www.chippewatwp.org',
    phone: '231-867-3777',
    officials: [
      { name: 'Shirley Hazen', title: 'Supervisor', party: null },
      { name: 'Kristin Lytle', title: 'Clerk', party: null },
      { name: 'Julie Austin', title: 'Treasurer', party: null },
      { name: 'Annette Walters', title: 'Trustee', party: null },
      { name: 'Debra Zielinski', title: 'Trustee', party: null },
    ],
  },

  'Colfax': {
    name: 'Colfax Township',
    website: 'https://www.colfaxtwpmecosta.gov',
    phone: '231-796-3122',
    officials: [
      { name: 'Nick Kaye', title: 'Supervisor', party: 'Republican' },
      { name: 'Susan J. Olson', title: 'Clerk', party: 'Republican' },
      { name: 'Julie L. Johansen', title: 'Treasurer', party: 'Republican' },
      { name: 'William Burmeister', title: 'Trustee', party: 'Democratic' },
      { name: 'Karen Morningstar', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Deerfield': {
    name: 'Deerfield Township',
    website: 'https://deerfieldmecosta.org',
    phone: '231-856-7008',
    officials: [
      { name: 'Phil Stier', title: 'Supervisor', party: null },
      { name: 'Michelle Lewis', title: 'Clerk', party: null },
      { name: 'Sheila Lingle', title: 'Treasurer', party: null },
      { name: 'Jamey Nelson', title: 'Trustee', party: null },
      { name: 'Brian Carey II', title: 'Trustee', party: null },
    ],
  },

  'Fork': {
    name: 'Fork Township',
    website: 'https://forktownshipmichigan.com',
    phone: '231-349-2803',
    officials: [
      { name: 'Lori Helmer', title: 'Supervisor', party: null },
      { name: 'Roberta Hazen', title: 'Clerk', party: null },
      { name: 'Patti McNeilly', title: 'Treasurer', party: null },
      { name: 'Mitch Mackersie', title: 'Trustee', party: null },
      { name: 'Dave Dowell', title: 'Trustee', party: null },
    ],
  },

  'Grant': {
    name: 'Grant Township',
    phone: '231-796-2106',
    officials: [
      { name: 'Cheryl Aris', title: 'Supervisor', party: 'Republican' },
      { name: 'Lisa Cranney', title: 'Clerk', party: 'Republican' },
      { name: 'Chuck Smalley', title: 'Treasurer', party: null },
      { name: 'Nicholas Bentley', title: 'Trustee', party: 'Republican' },
      { name: 'Travis Horstman', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Green Charter': {
    name: 'Green Charter Township',
    website: 'https://www.greentownship.org',
    phone: '231-796-6201',
    officials: [
      { name: 'Jason Kruse', title: 'Supervisor', party: 'Republican' },
      { name: 'Corri Riebow', title: 'Clerk', party: 'Republican' },
      { name: 'Jilliane Walsh', title: 'Treasurer', party: 'Republican' },
      { name: 'Kelly Cushway', title: 'Trustee', party: 'Republican' },
      { name: 'Jeffrey Thorne', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Hinton': {
    name: 'Hinton Township',
    website: 'https://hintontownship.gov',
    phone: '231-206-0350',
    officials: [
      { name: 'Wayne Sutherland', title: 'Supervisor', party: 'Republican' },
      { name: 'Ruth Petersen', title: 'Clerk', party: 'Republican' },
      { name: 'Jim Helms', title: 'Treasurer', party: 'Republican' },
      { name: 'Carl Thompson', title: 'Trustee', party: 'Republican' },
      { name: 'Brian Taylor', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Martiny': {
    name: 'Martiny Township',
    website: 'https://martinytownshipmi.gov',
    phone: '231-867-3387',
    officials: [
      { name: 'Barbara Hampel', title: 'Supervisor', party: 'Republican' },
      { name: 'Connie Grant', title: 'Clerk', party: 'Republican' },
      { name: 'Lois Schmidt', title: 'Treasurer', party: 'Republican' },
      { name: 'Cindy Lattimore', title: 'Trustee', party: null },
      { name: 'Dale Dosenberry', title: 'Trustee', party: null },
    ],
  },

  'Mecosta Twp': {
    name: 'Mecosta Township',
    website: 'https://www.mecostatwp.org',
    phone: '231-796-8935',
    officials: [
      { name: 'John A. Boyd', title: 'Supervisor', party: 'Republican' },
      { name: 'Stephanie McNeal', title: 'Clerk', party: 'Republican' },
      { name: 'Mary Quinlan', title: 'Treasurer', party: 'Republican' },
      { name: 'James Cain', title: 'Trustee', party: 'Republican' },
      { name: 'Tyler Huntey', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Millbrook': {
    name: 'Millbrook Township',
    phone: '989-561-2838',
    officials: [
      { name: 'Bruce Eldred', title: 'Supervisor', party: 'Republican' },
      { name: 'Kaye M. Wisner', title: 'Clerk', party: 'Republican' },
      { name: 'Tina Y. Murray', title: 'Treasurer', party: 'Republican' },
      { name: 'Randy Spayd', title: 'Trustee', party: 'Republican' },
      { name: 'Lenny Sorsen', title: 'Trustee', party: 'Democratic' },
    ],
  },

  'Morton': {
    name: 'Morton Township',
    website: 'https://mortontownship.org',
    phone: '231-972-7138',
    officials: [
      { name: 'Mark Klumpp', title: 'Supervisor', party: 'Republican' },
      { name: 'Stephanie McNeal', title: 'Clerk', party: 'Republican' },
      { name: 'Maureen Wolfe', title: 'Treasurer', party: null },
      { name: 'Jeff Ratledge', title: 'Trustee', party: null },
      { name: 'Yulanda Bellingar', title: 'Trustee', party: null },
    ],
  },

  'Sheridan Twp': {
    name: 'Sheridan Township',
    website: 'https://sheridantownship.com',
    phone: '231-924-2566',
    officials: [
      { name: 'Vern E. Young', title: 'Supervisor', party: 'Republican' },
      { name: 'Christina Martin', title: 'Clerk', party: 'Republican' },
      { name: 'Rachel Borders', title: 'Treasurer', party: 'Republican' },
      { name: 'Harry L. Hardenburgh', title: 'Trustee', party: 'Republican' },
      { name: 'Johanna Hopkins', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Wheatland': {
    name: 'Wheatland Township',
    website: 'https://www.remus.org/wheatland-township',
    phone: '989-967-8252',
    officials: [
      { name: 'Thomas L. Vansyckle', title: 'Supervisor', party: 'Republican' },
      { name: 'Kim Thiel', title: 'Clerk', party: 'Republican' },
      { name: 'Lee Carte', title: 'Trustee', party: 'Republican' },
      { name: 'Ethan McNeal', title: 'Trustee', party: 'Republican' },
    ],
  },

  /* ── Osceola County townships ── */

  'Burdell': {
    name: 'Burdell Township',
    phone: '231-829-4049',
    officials: [
      { name: 'Dean Molnar', title: 'Supervisor', party: 'Republican' },
      { name: 'Richard S. Dunlap', title: 'Clerk', party: 'Republican' },
      { name: 'Mary E. Holmes', title: 'Treasurer', party: 'Republican' },
      { name: 'Ted W. Mattson', title: 'Trustee', party: 'Republican' },
      { name: 'Donna Molnar', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Cedar': {
    name: 'Cedar Township',
    phone: '231-832-3470',
    officials: [
      { name: 'Cynthia Gadbois', title: 'Supervisor', party: 'Republican' },
      { name: 'Mary Clark', title: 'Clerk', party: 'Republican' },
      { name: 'Heather Battle', title: 'Treasurer', party: 'Republican' },
      { name: 'Kimberly Cool', title: 'Trustee', party: 'Republican' },
      { name: 'Edward Lundborg', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Evart Twp': {
    name: 'Evart Township',
    officials: [
      { name: 'Douglas Derscheid', title: 'Supervisor', party: 'Republican' },
      { name: 'Denise L. Custer', title: 'Clerk', party: 'Democratic' },
      { name: 'Martha Y. Hartman', title: 'Treasurer', party: 'Republican' },
      { name: 'Chad L. Booher', title: 'Trustee', party: 'Republican' },
      { name: 'Stephen Campbell', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Hartwick': {
    name: 'Hartwick Township',
    officials: [
      { name: 'Randal VanBuren', title: 'Supervisor', party: 'Democratic' },
      { name: 'Shelley Muczynski', title: 'Clerk', party: 'Republican' },
      { name: 'Michael J. Ritzer', title: 'Treasurer', party: 'Republican' },
      { name: 'Jeffrey Neuman', title: 'Trustee', party: 'Republican' },
      { name: 'Lawrence Reinardy', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Hersey Twp': {
    name: 'Hersey Township',
    officials: [
      { name: 'Jason Daday', title: 'Supervisor', party: 'Democratic' },
      { name: 'Jennifer Verdi-Stieg', title: 'Clerk', party: 'Republican' },
      { name: 'Mikhayla Black', title: 'Treasurer', party: 'Republican' },
      { name: 'Diane Leichty', title: 'Trustee', party: 'Republican' },
      { name: 'Rene L. Stieg', title: 'Trustee', party: 'Independent' },
    ],
  },

  'Highland': {
    name: 'Highland Township',
    officials: [
      { name: 'Derek Wing', title: 'Supervisor', party: 'Republican' },
      { name: 'Larissa Avery', title: 'Clerk', party: 'Republican' },
      { name: 'Tricia Wing', title: 'Treasurer', party: 'Independent' },
      { name: 'Jed Avery', title: 'Trustee', party: 'Republican' },
    ],
  },

  'LeRoy Twp': {
    name: 'LeRoy Township',
    website: 'https://leroytwposceola.org',
    phone: '231-580-7953',
    officials: [
      { name: 'Anja Wing', title: 'Supervisor', party: 'Republican' },
      { name: 'Stacie Crozier Dvonch', title: 'Clerk', party: 'Republican' },
      { name: 'Lori Leudeman', title: 'Treasurer', party: 'Republican' },
      { name: 'Dan Cool', title: 'Trustee', party: 'Republican' },
      { name: 'Dale Ruppert', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Lincoln Twp': {
    name: 'Lincoln Township',
    officials: [
      { name: 'Mark Brock', title: 'Supervisor', party: 'Republican' },
      { name: 'Sherry Blackrick', title: 'Clerk', party: 'Republican' },
      { name: 'Martha Modene', title: 'Treasurer', party: 'Republican' },
      { name: 'Rachel D. Killingbeck', title: 'Trustee', party: 'Republican' },
      { name: 'Kathy Yost', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Marion Twp': {
    name: 'Marion Township',
    officials: [
      { name: 'Doug Bontekoe', title: 'Supervisor', party: 'Republican' },
      { name: 'Connie Zuiderveen', title: 'Clerk', party: 'Republican' },
      { name: 'Joyce K. Mayle', title: 'Treasurer', party: 'Republican' },
      { name: 'Rose Ballew', title: 'Trustee', party: 'Republican' },
      { name: 'Shannon Carmody', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Middle Branch': {
    name: 'Middle Branch Township',
    officials: [
      { name: 'Glenn Wilson Jr.', title: 'Supervisor', party: 'Republican' },
      { name: 'Richielene Beebe', title: 'Clerk', party: 'Republican' },
      { name: 'Patricia R. Michell', title: 'Treasurer', party: 'Republican' },
      { name: 'Peggy Ann Hoard', title: 'Trustee', party: 'Republican' },
      { name: 'Bruce E. Tower', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Orient': {
    name: 'Orient Township',
    officials: [
      { name: 'Matthew Tiedt', title: 'Supervisor', party: 'Republican' },
      { name: 'Mark Sochocki', title: 'Clerk', party: 'Republican' },
      { name: 'Cindy Sue Morgan', title: 'Treasurer', party: 'Republican' },
      { name: 'Gary V. Earnest', title: 'Trustee', party: 'Republican' },
      { name: 'Ryan Keathley', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Osceola Twp': {
    name: 'Osceola Township',
    phone: '231-510-3476',
    officials: [
      { name: 'Timothy Ladd', title: 'Supervisor', party: 'Republican' },
      { name: 'Jennifer Rounds', title: 'Clerk', party: 'Republican' },
      { name: 'Martin E. Nieman', title: 'Treasurer', party: 'Republican' },
      { name: 'Sherri Bancroft', title: 'Trustee', party: 'Republican' },
      { name: 'Connie R. Holmes', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Richmond': {
    name: 'Richmond Township',
    officials: [
      { name: 'Maynard E. Bluhm', title: 'Supervisor', party: 'Republican' },
      { name: 'Linda K. Stieg', title: 'Clerk', party: 'Republican' },
      { name: 'Carrolin Ruppert', title: 'Treasurer', party: 'Republican' },
      { name: 'Edward Galloup', title: 'Trustee', party: 'Republican' },
      { name: 'John D. Woods', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Rose Lake': {
    name: 'Rose Lake Township',
    officials: [
      { name: 'Morris Langworthy Jr.', title: 'Supervisor', party: 'Republican' },
      { name: 'Vicky Schaefer', title: 'Clerk', party: 'Republican' },
      { name: 'Patricia Gregory', title: 'Treasurer', party: 'Republican' },
      { name: 'Karrie Maes', title: 'Trustee', party: 'Republican' },
      { name: 'Duey Proctor', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Sherman Twp': {
    name: 'Sherman Township',
    phone: '231-829-3611',
    officials: [
      { name: 'David Eggle', title: 'Supervisor', party: 'Republican' },
      { name: 'Bethany Bolduc', title: 'Clerk', party: 'Republican' },
      { name: 'Sharon L. Black', title: 'Treasurer', party: 'Republican' },
      { name: 'H. John Iler', title: 'Trustee', party: 'Democratic' },
      { name: 'Keith G. Calkins', title: 'Trustee', party: 'Republican' },
      { name: 'David P. Johns', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Sylvan': {
    name: 'Sylvan Township',
    officials: [
      { name: 'Angela Moore', title: 'Supervisor', party: 'Republican' },
      { name: 'Terry Pritchard', title: 'Clerk', party: 'Republican' },
      { name: 'Angela D. Reagan', title: 'Treasurer', party: 'Republican' },
      { name: 'Jeffrey J. Reagan', title: 'Trustee', party: 'Republican' },
      { name: 'Sheila M. Robinson', title: 'Trustee', party: 'Republican' },
    ],
  },

  /* ── Lake County townships ── */

  'Chase': {
    name: 'Chase Township',
    website: 'https://chasetownship.org',
    phone: '231-912-7212',
    officials: [
      { name: 'Phillip Lodholtz', title: 'Supervisor', party: 'Republican' },
      { name: 'Shelli Droke', title: 'Clerk', party: 'Republican' },
      { name: 'Janel Eichenberg', title: 'Treasurer', party: 'Republican' },
      { name: 'Joyce Beach', title: 'Trustee', party: 'Republican' },
      { name: 'Sarah Nyp', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Cherry Valley': {
    name: 'Cherry Valley Township',
    website: 'https://cherryvalleytwsp.org',
    officials: [
      { name: 'Robert S. Shepler', title: 'Supervisor', party: 'Republican' },
      { name: 'Angie Guynn', title: 'Clerk', party: null },
      { name: 'Lori A. Jeffrey', title: 'Treasurer', party: 'Republican' },
      { name: 'Connie D. Avery', title: 'Trustee', party: 'Democratic' },
      { name: 'Vicki Sherman', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Dover': {
    name: 'Dover Township',
    officials: [
      { name: 'Cathy May', title: 'Supervisor', party: 'Democratic' },
      { name: 'Courtney Houseman', title: 'Clerk', party: 'Republican' },
      { name: 'Amanda Bailor', title: 'Treasurer', party: 'Republican' },
      { name: 'Karin Goodlein', title: 'Trustee', party: 'Republican' },
      { name: 'Evan VanderHoof', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Eden': {
    name: 'Eden Township',
    website: 'https://edentownship-ironsmi.com',
    officials: [
      { name: 'Al Shaughnessy', title: 'Supervisor', party: 'Republican' },
      { name: 'Barbara Charnes', title: 'Clerk', party: 'Republican' },
      { name: 'Chris R. Oetman', title: 'Treasurer', party: 'Republican' },
      { name: 'Nancy Frazee', title: 'Trustee', party: 'Democratic' },
      { name: 'Gary John Oetman', title: 'Trustee', party: 'Republican' },
      { name: 'Maggie Shaughnessy', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Elk': {
    name: 'Elk Township',
    website: 'https://elk-township.org',
    officials: [
      { name: 'Louis Fitz', title: 'Supervisor', party: null },
      { name: 'Karen Fickies', title: 'Clerk', party: null },
      { name: 'Brandy Myers', title: 'Treasurer', party: null },
      { name: 'Jack Hankiewicz', title: 'Trustee', party: null },
      { name: 'Dave Bass', title: 'Trustee', party: null },
    ],
  },

  'Ellsworth': {
    name: 'Ellsworth Township',
    website: 'https://ellsworthtownship.com',
    officials: [
      { name: 'Todd Charles', title: 'Supervisor', party: 'Republican' },
      { name: 'Brittany Carlson', title: 'Clerk', party: 'Independent' },
      { name: 'Kimberly Rothig-Pendley', title: 'Treasurer', party: 'Independent' },
      { name: 'Patrick Chachulski', title: 'Trustee', party: 'Independent' },
    ],
  },

  'Lake Twp': {
    name: 'Lake Township',
    website: 'https://laketownshiplcmi.gov',
    phone: '231-898-3189',
    officials: [
      { name: 'Robert Mateja', title: 'Supervisor', party: 'Republican' },
      { name: 'Amy E. Rademaker', title: 'Clerk', party: 'Republican' },
      { name: 'Kathy VanDonkelaar', title: 'Treasurer', party: 'Republican' },
      { name: 'Tina Personette', title: 'Trustee', party: 'Republican' },
      { name: 'John LaPointe', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Newkirk': {
    name: 'Newkirk Township',
    website: 'https://newkirktownship.org',
    officials: [
      { name: 'Gretchen Allan', title: 'Supervisor', party: 'Republican' },
      { name: 'Cheryl Jayne Fullerton', title: 'Clerk', party: 'Republican' },
      { name: 'Sharon Gray', title: 'Treasurer', party: 'Republican' },
      { name: 'Marilyn Gray', title: 'Trustee', party: 'Republican' },
      { name: 'Richard Hall', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Peacock': {
    name: 'Peacock Township',
    website: 'https://peacocktownship.org',
    officials: [
      { name: 'Luann Parker', title: 'Supervisor', party: 'Republican' },
      { name: 'Ann Thomas', title: 'Clerk', party: 'Republican' },
      { name: 'Laura Hepler', title: 'Treasurer', party: 'Republican' },
      { name: 'Kim Plummer', title: 'Trustee', party: 'Democratic' },
      { name: 'Shirley Blackler', title: 'Trustee', party: 'Republican' },
      { name: 'Justine Schram', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Pinora': {
    name: 'Pinora Township',
    website: 'https://pinoratownshipmi.org',
    officials: [
      { name: 'Victoria Dennett', title: 'Supervisor', party: 'Republican' },
      { name: 'Ashley Visner', title: 'Clerk', party: 'Republican' },
      { name: 'Don Dvoracek', title: 'Treasurer', party: 'Republican' },
      { name: 'Kelly Weaver', title: 'Trustee', party: 'Democratic' },
      { name: 'Rob Visner', title: 'Trustee', party: 'Republican' },
      { name: 'Sidney G. Woods', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Pleasant Plains': {
    name: 'Pleasant Plains Township',
    website: 'https://pleasantplainstwp.org',
    officials: [
      { name: 'Kevin D. Braddy', title: 'Supervisor', party: 'Republican' },
      { name: 'Jessica Hanna', title: 'Clerk', party: 'Republican' },
      { name: 'Ronnette Hanna', title: 'Treasurer', party: 'Republican' },
      { name: 'Raymond Novakoskie', title: 'Trustee', party: null },
      { name: 'Sondra Lemm', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Sauble': {
    name: 'Sauble Township',
    website: 'https://saubletwp.org',
    officials: [
      { name: 'Mary Ann Nugent', title: 'Supervisor', party: 'Independent' },
      { name: 'Gail Raad', title: 'Clerk', party: 'Republican' },
      { name: 'Beth Acker', title: 'Treasurer', party: 'Independent' },
      { name: 'Tracy A. Baker', title: 'Trustee', party: 'Independent' },
      { name: 'Patricia Bishop', title: 'Trustee', party: 'Independent' },
      { name: 'Bill Rodgers', title: 'Trustee', party: 'Independent' },
    ],
  },

  'Webber': {
    name: 'Webber Township',
    website: 'https://webbertownship.org',
    officials: [
      { name: 'Shaun Munson', title: 'Supervisor', party: null },
      { name: 'Deborah L. Hanes', title: 'Clerk', party: 'Independent' },
      { name: 'Pat Williams', title: 'Treasurer', party: 'Democratic' },
      { name: 'Katherine Rose', title: 'Trustee', party: 'Democratic' },
      { name: 'Kathryn Young', title: 'Trustee', party: 'Democratic' },
      { name: 'Kelly McCune', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Yates': {
    name: 'Yates Township',
    website: 'https://yatestownship.com',
    officials: [
      { name: 'Christopher Grier', title: 'Supervisor', party: null },
      { name: 'Barbara McGregory', title: 'Clerk', party: 'Democratic' },
      { name: 'Jacqueline Patterson', title: 'Treasurer', party: 'Democratic' },
      { name: 'Shawn Coffey', title: 'Trustee', party: 'Democratic' },
      { name: 'Erica Tate', title: 'Trustee', party: 'Democratic' },
    ],
  },

  /* ── Newaygo County townships ── */

  Ashland: {
    name: 'Ashland Township',
    county: 'Newaygo',
    website: 'https://www.ashtwp.com/',
    phone: '231-834-7535',
    officials: [
      { name: 'Marvin Geers', title: 'Supervisor', party: 'Republican' },
      { name: 'Shelly Boerema', title: 'Clerk', party: 'Republican' },
      { name: 'Michelle McKinlay', title: 'Treasurer', party: 'Republican' },
      { name: 'William Butchart', title: 'Trustee', party: 'Republican' },
      { name: 'Gary Nelsen', title: 'Trustee', party: 'Republican' },
    ],
  },

  Barton: {
    name: 'Barton Township',
    county: 'Newaygo',
    website: 'https://bartontownship.org/',
    phone: '231-735-2136',
    officials: [
      { name: 'Kyle Luce', title: 'Supervisor', party: null },
      { name: 'Cheryl DuKavas', title: 'Clerk', party: null },
      { name: 'Joni Luce', title: 'Treasurer', party: null },
      { name: 'John Wright', title: 'Trustee', party: null },
      { name: 'David Lange', title: 'Trustee', party: null },
    ],
  },

  'Big Prairie': {
    name: 'Big Prairie Township',
    county: 'Newaygo',
    website: 'https://www.bigprairietownship.org/',
    officials: [
      { name: 'David Wright', title: 'Supervisor', party: null },
      { name: 'Judy Baker', title: 'Clerk', party: null },
      { name: 'Julie M. Scott', title: 'Treasurer', party: null },
    ],
  },

  Bridgeton: {
    name: 'Bridgeton Township',
    county: 'Newaygo',
    website: 'https://bridgetontownshipmi.gov/',
    phone: '231-282-3344',
    officials: [
      { name: 'Jason Mansfield', title: 'Supervisor', party: null },
    ],
  },

  Brooks: {
    name: 'Brooks Township',
    county: 'Newaygo',
    website: 'https://brookstownship.org/',
    phone: '231-652-6763',
    officials: [
      { name: 'Cory Nelson', title: 'Supervisor', party: null },
      { name: 'Jennifer Badgero', title: 'Clerk', party: null },
      { name: 'Vivian Miller', title: 'Treasurer', party: null },
      { name: 'Danielle Hummel', title: 'Trustee', party: null },
      { name: 'Ryan Schultz', title: 'Trustee', party: null },
    ],
  },

  Croton: {
    name: 'Croton Township',
    county: 'Newaygo',
    website: 'https://www.crotontownship.org/',
    officials: [
      { name: 'Morgan Heinzman', title: 'Supervisor', party: null },
      { name: 'Debbra Wright', title: 'Clerk', party: null },
      { name: 'Kim Edwards', title: 'Treasurer', party: null },
      { name: 'Andy Fias', title: 'Trustee', party: null },
      { name: 'John Shepherd', title: 'Trustee', party: null },
    ],
  },

  Dayton: {
    name: 'Dayton Township',
    county: 'Newaygo',
    website: 'https://www.daytontownship.com/',
    officials: [
      { name: 'Brian Frens', title: 'Supervisor', party: null },
      { name: 'Mary Jo Tibbe', title: 'Clerk', party: null },
      { name: 'William Kunnen', title: 'Treasurer', party: null },
      { name: 'Glen Sparks', title: 'Trustee', party: null },
      { name: 'Marva Zeldenrust', title: 'Trustee', party: null },
    ],
  },

  'Denver Twp (Newaygo)': {
    name: 'Denver Township',
    county: 'Newaygo',
    website: 'https://denvertownship.org/',
    officials: [
      { name: 'Mike Anderson', title: 'Supervisor', party: null },
      { name: 'Nicki McWilliams', title: 'Clerk', party: null },
      { name: 'Sherrilee Craner', title: 'Treasurer', party: null },
      { name: 'Jeff Rumsey', title: 'Trustee', party: null },
      { name: 'Tom Borgman', title: 'Trustee', party: null },
    ],
  },

  Ensley: {
    name: 'Ensley Township',
    county: 'Newaygo',
    website: 'https://www.ensleytownship.org/',
    phone: '231-689-1082',
    officials: [
      { name: 'Patrick Hills', title: 'Supervisor', party: 'Republican' },
      { name: 'Cindy Harwood', title: 'Clerk', party: 'Republican' },
      { name: 'Faye Folkema', title: 'Treasurer', party: 'Republican' },
      { name: 'Timothy Butler', title: 'Trustee', party: 'Republican' },
      { name: 'Tim Newton', title: 'Trustee', party: 'Republican' },
    ],
  },

  Everett: {
    name: 'Everett Township',
    county: 'Newaygo',
    website: 'http://www.everetttownship.com/',
    officials: [
      { name: 'Judy Maike', title: 'Supervisor', party: 'Republican' },
      { name: 'Pamela K. Chaffee', title: 'Clerk', party: null },
      { name: 'Brandy Fleming', title: 'Treasurer', party: 'Democratic' },
      { name: 'Richard Long', title: 'Trustee', party: null },
    ],
  },

  Garfield: {
    name: 'Garfield Township',
    county: 'Newaygo',
    website: 'https://www.garfieldtownship.org/',
    phone: '231-652-4251',
    officials: [
      { name: 'George Suchy', title: 'Supervisor', party: null },
      { name: 'Kristin Melvin', title: 'Clerk', party: null },
      { name: 'Ray Troyer', title: 'Treasurer', party: null },
      { name: 'Rob Kinniburgh', title: 'Trustee', party: null },
      { name: 'Amy Ekkel', title: 'Trustee', party: null },
    ],
  },

  Goodwell: {
    name: 'Goodwell Township',
    county: 'Newaygo',
    website: 'http://www.goodwelltownship.com/',
    phone: '231-923-3797',
    officials: [
      { name: 'Tim Maxson', title: 'Supervisor', party: null },
      { name: 'Jennifer Wozniak', title: 'Clerk', party: null },
      { name: 'Rachel Belcher', title: 'Treasurer', party: null },
      { name: 'Greg Olson', title: 'Trustee', party: null },
      { name: 'Robert Birr', title: 'Trustee', party: null },
    ],
  },

  'Grant Twp': {
    name: 'Grant Township',
    county: 'Newaygo',
    website: 'https://www.granttownship.org/',
    phone: '231-269-2102',
    officials: [
      { name: 'Crystal Breithaupt', title: 'Supervisor', party: null },
      { name: 'Lisa Willett', title: 'Clerk', party: null },
      { name: 'Beth Svec', title: 'Treasurer', party: null },
      { name: 'Kyle Rector', title: 'Trustee', party: null },
      { name: 'Doug Moyer', title: 'Trustee', party: null },
    ],
  },

  'Lincoln Twp (Newaygo)': {
    name: 'Lincoln Township',
    county: 'Newaygo',
    website: 'https://lincolntownship.net/',
    officials: [
      { name: 'Robin Rodarmer', title: 'Supervisor', party: 'Republican' },
      { name: 'Jackie Bulson', title: 'Clerk', party: 'Republican' },
      { name: 'Amy Stockwell', title: 'Treasurer', party: 'Republican' },
      { name: 'Josh Frantz', title: 'Trustee', party: 'Republican' },
      { name: 'Roger Ungrey', title: 'Trustee', party: 'Republican' },
    ],
  },

  Merrill: {
    name: 'Merrill Township',
    county: 'Newaygo',
    website: 'https://www.merrilltownship.com/',
    phone: '844-444-6828',
    officials: [
      { name: 'Pete Morgan', title: 'Supervisor', party: null },
      { name: 'Tabatha Glezman', title: 'Clerk', party: null },
      { name: 'Bonnie St. Amour', title: 'Treasurer', party: null },
      { name: 'David Miedema', title: 'Trustee', party: null },
    ],
  },

  Monroe: {
    name: 'Monroe Township',
    county: 'Newaygo',
    website: 'http://www.monroemitwp.com/',
    officials: [
      { name: 'Michelle Marie Mills', title: 'Supervisor', party: null },
      { name: 'Nancy Stone', title: 'Clerk', party: null },
      { name: 'Stephen Jones', title: 'Treasurer', party: null },
      { name: 'Mellissa Ann Manzagol', title: 'Trustee', party: null },
      { name: 'Gretchen Ochs', title: 'Trustee', party: null },
    ],
  },

  Norwich: {
    name: 'Norwich Township',
    county: 'Newaygo',
    website: 'https://norwichtwp.org/',
    phone: '231-629-1882',
    officials: [
      { name: 'Dan Wanink', title: 'Supervisor', party: null },
      { name: 'Stacie Langworthy', title: 'Clerk', party: null },
      { name: 'Phyllis Carlson', title: 'Treasurer', party: null },
      { name: 'Jennifer Kailing', title: 'Trustee', party: null },
      { name: 'Stephanie Morgan', title: 'Trustee', party: null },
    ],
  },

  'Sheridan Charter': {
    name: 'Sheridan Charter Township',
    county: 'Newaygo',
    website: 'http://www.sheridanchartertownship.com/',
    phone: '231-924-2566',
    officials: [
      { name: 'Peter L. Lance', title: 'Supervisor', party: 'Democratic' },
      { name: 'Maggie Kolk', title: 'Clerk', party: 'Republican' },
      { name: 'Jennifer Hollowell', title: 'Treasurer', party: 'Republican' },
      { name: 'Sue Auw', title: 'Trustee', party: 'Republican' },
      { name: 'Aaron Bennett', title: 'Trustee', party: 'Republican' },
      { name: 'Mark Robinson', title: 'Trustee', party: 'Republican' },
      { name: 'Jesse B. Wolfsen', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Sherman Twp (Newaygo)': {
    name: 'Sherman Township',
    county: 'Newaygo',
    website: 'https://shermantwp.org/',
    phone: '989-250-0263',
    officials: [
      { name: 'Ken Smalligan', title: 'Supervisor', party: null },
      { name: 'Jamie Kukal', title: 'Clerk', party: null },
      { name: 'Karen Berens', title: 'Treasurer', party: null },
      { name: 'Doug Berens', title: 'Trustee', party: null },
      { name: 'Stanley Stroven', title: 'Trustee', party: null },
    ],
  },

  Troy: {
    name: 'Troy Township',
    county: 'Newaygo',
    officials: [
      { name: 'Erica Quick', title: 'Supervisor', party: 'Republican' },
      { name: 'Michael Donald Lowery', title: 'Clerk', party: 'Republican' },
      { name: 'Stephanie Hawley', title: 'Treasurer', party: 'Republican' },
      { name: 'Tina M. Hill', title: 'Trustee', party: 'Democratic' },
    ],
  },

  Wilcox: {
    name: 'Wilcox Township',
    county: 'Newaygo',
    officials: [
      { name: 'Pamela A. Rolfe', title: 'Supervisor', party: 'Republican' },
      { name: 'Erica Pozas', title: 'Clerk', party: 'Republican' },
      { name: 'Melissa VerStrat-Jonaitis', title: 'Treasurer', party: 'Republican' },
      { name: 'Ronald Fowler', title: 'Trustee', party: 'Republican' },
      { name: 'Laurie Sytsma', title: 'Trustee', party: 'Republican' },
    ],
  },

  /* ── Isabella County townships ── */

  Broomfield: {
    name: 'Broomfield Township',
    county: 'Isabella',
    phone: '989-967-8839',
    officials: [
      { name: 'Neil Strong', title: 'Supervisor', party: null },
      { name: 'Patti Olson', title: 'Clerk', party: null },
      { name: 'Jackie Verbeke', title: 'Treasurer', party: null },
    ],
  },

  'Chippewa Twp (Isabella)': {
    name: 'Chippewa Township',
    county: 'Isabella',
    website: 'https://chippewatownship.com/',
    phone: '989-773-3600',
    officials: [
      { name: 'Don Lowery', title: 'Supervisor', party: null },
      { name: 'Frances B. Ash', title: 'Clerk', party: null },
      { name: 'Kathy VanderKolk', title: 'Treasurer', party: null },
    ],
  },

  Coe: {
    name: 'Coe Township',
    county: 'Isabella',
    website: 'https://coetownship.com/',
    phone: '989-828-5960',
    officials: [
      { name: 'Mary Kay Maas', title: 'Supervisor', party: null },
      { name: 'Riley Travis', title: 'Clerk', party: null },
      { name: 'Teresa Meyer', title: 'Treasurer', party: null },
    ],
  },

  Coldwater: {
    name: 'Coldwater Township',
    county: 'Isabella',
    officials: [
      { name: 'Randy Hall', title: 'Supervisor', party: null },
      { name: 'Corrine Tipton', title: 'Clerk', party: null },
      { name: 'Kathy Wyman', title: 'Treasurer', party: null },
      { name: 'Chris Wyman', title: 'Trustee', party: null },
      { name: 'Jason Barker', title: 'Trustee', party: null },
    ],
  },

  'Deerfield Twp (Isabella)': {
    name: 'Deerfield Township',
    county: 'Isabella',
    website: 'https://deerfieldtownship.net/',
    phone: '989-779-7557',
    officials: [
      { name: 'Timothy Murphy', title: 'Supervisor', party: null },
      { name: 'Walter Nelson', title: 'Clerk', party: null },
      { name: 'Connie Lynch', title: 'Treasurer', party: null },
    ],
  },

  Denver: {
    name: 'Denver Township',
    county: 'Isabella',
    phone: '989-621-3629',
    officials: [
      { name: 'John Pedjac', title: 'Supervisor', party: null },
      { name: 'Tammy L. Prout', title: 'Clerk', party: null },
      { name: 'Monica Kampf-Carroll', title: 'Treasurer', party: null },
    ],
  },

  'Fremont Twp': {
    name: 'Fremont Township',
    county: 'Isabella',
    website: 'https://fremonttwnshp.com/',
    officials: [
      { name: 'Gerad Himebaugh', title: 'Supervisor', party: null },
      { name: 'John Schimmelmann', title: 'Clerk', party: null },
      { name: 'Shirlee Van Bonn', title: 'Treasurer', party: null },
    ],
  },

  Gilmore: {
    name: 'Gilmore Township',
    county: 'Isabella',
    website: 'https://gilmoretwp.com/',
    officials: [
      { name: 'Robert Sibasch', title: 'Supervisor', party: null },
      { name: 'Lisa Graham', title: 'Clerk', party: null },
      { name: 'Patricia Marshall', title: 'Treasurer', party: null },
    ],
  },

  Isabella: {
    name: 'Isabella Township',
    county: 'Isabella',
    website: 'https://isabellatwp.com/',
    phone: '989-433-5413',
    officials: [
      { name: 'Rick Ervin', title: 'Supervisor', party: null },
      { name: 'Kristen Derby', title: 'Clerk', party: null },
      { name: 'Linda Bechtel', title: 'Treasurer', party: null },
    ],
  },

  'Lincoln Twp (Isabella)': {
    name: 'Lincoln Township',
    county: 'Isabella',
    phone: '989-828-6967',
    officials: [
      { name: 'Thomas L. Ramon', title: 'Supervisor', party: null },
      { name: 'Danielle Willoughby', title: 'Clerk', party: null },
      { name: 'Linda Vogel', title: 'Treasurer', party: null },
    ],
  },

  Nottawa: {
    name: 'Nottawa Township',
    county: 'Isabella',
    website: 'https://nottawatwpisabellami.gov/',
    phone: '989-644-1000',
    officials: [
      { name: 'Kory Mindel', title: 'Supervisor', party: null },
      { name: 'Heather A. Curtiss', title: 'Clerk', party: null },
      { name: 'Katie Galinski', title: 'Treasurer', party: null },
    ],
  },

  Rolland: {
    name: 'Rolland Township',
    county: 'Isabella',
    website: 'https://rollandtownship.org/',
    officials: [
      { name: 'Daniel Shaw', title: 'Supervisor', party: null },
      { name: 'Mary Ellen Butler', title: 'Clerk', party: null },
      { name: 'Javan Quackenbush', title: 'Treasurer', party: null },
    ],
  },

  'Sherman Twp (Isabella)': {
    name: 'Sherman Township',
    county: 'Isabella',
    website: 'https://shermantwp.com/',
    phone: '989-644-2666',
    officials: [
      { name: 'Tom Johnson', title: 'Supervisor', party: null },
      { name: 'Denise M. Livermore', title: 'Clerk', party: null },
      { name: 'Teresa Clark', title: 'Treasurer', party: null },
    ],
  },

  Union: {
    name: 'Union Township',
    county: 'Isabella',
    website: 'https://uniontownshipmi.com/',
    phone: '989-772-4600',
    officials: [
      { name: 'Bryan Mielke', title: 'Supervisor', party: null },
      { name: 'Lisa Cody', title: 'Clerk', party: null },
      { name: 'Kimberly Rice', title: 'Treasurer', party: null },
    ],
  },

  Vernon: {
    name: 'Vernon Township',
    county: 'Isabella',
    website: 'https://vernontownship.org/',
    phone: '989-751-6341',
    officials: [
      { name: 'Ben Browning', title: 'Supervisor', party: null },
      { name: 'Loren Cole', title: 'Clerk', party: null },
      { name: 'Stephanie Allen', title: 'Treasurer', party: null },
    ],
  },

  Wise: {
    name: 'Wise Township',
    county: 'Isabella',
    website: 'https://wisetownship.org/',
    phone: '989-386-7244',
    officials: [
      { name: 'Robert Moore', title: 'Supervisor', party: null },
      { name: 'Doris Methner', title: 'Clerk', party: null },
      { name: 'Shannon Penny', title: 'Treasurer', party: null },
    ],
  },

  /* ── Barry County townships ── */

  Assyria: {
    name: 'Assyria Township',
    county: 'Barry',
    website: 'https://assyriatwpmi.gov/',
    officials: [
      { name: 'Tom Wing', title: 'Supervisor', party: null },
      { name: 'Cheryl Thornton', title: 'Clerk', party: null },
      { name: 'Terry Ryder-Stephens', title: 'Treasurer', party: null },
      { name: 'Josh Miller', title: 'Trustee', party: null },
      { name: 'Zachary Haralson', title: 'Trustee', party: null },
    ],
  },

  Baltimore: {
    name: 'Baltimore Township',
    county: 'Barry',
    website: 'https://baltimoretwp.com/',
    officials: [
      { name: 'Chad VanSyckle', title: 'Supervisor', party: null },
      { name: 'Jana Bishop', title: 'Clerk', party: null },
      { name: 'Kelli Case', title: 'Treasurer', party: null },
      { name: 'April Krouse', title: 'Trustee', party: null },
      { name: 'Aaron VanSickle', title: 'Trustee', party: null },
    ],
  },

  'Barry Twp': {
    name: 'Barry Township',
    county: 'Barry',
    website: 'https://barrytownshipmi.com/',
    officials: [
      { name: 'Barry Bower', title: 'Supervisor', party: null },
      { name: 'Deb Knight', title: 'Clerk', party: null },
      { name: 'Judy Wooer', title: 'Treasurer', party: null },
      { name: 'Lee Campbell', title: 'Trustee', party: null },
      { name: 'Don White', title: 'Trustee', party: null },
    ],
  },

  Carlton: {
    name: 'Carlton Township',
    county: 'Barry',
    website: 'https://www.carltontownship.org/',
    officials: [
      { name: 'Brad Carpenter', title: 'Supervisor', party: null },
      { name: 'Amanda Duits', title: 'Clerk', party: null },
      { name: 'Terri Geiger', title: 'Treasurer', party: null },
      { name: 'Michelle Duits', title: 'Trustee', party: null },
      { name: 'Kevin Erb', title: 'Trustee', party: null },
    ],
  },

  Castleton: {
    name: 'Castleton Township',
    county: 'Barry',
    officials: [
      { name: 'Cheryl Hartwell', title: 'Supervisor', party: null },
      { name: 'Marcia Scramlin', title: 'Clerk', party: null },
      { name: 'Joy Mulder', title: 'Treasurer', party: null },
    ],
  },

  'Hastings Twp': {
    name: 'Hastings Charter Township',
    county: 'Barry',
    website: 'https://www.hastingstownship.com/',
    officials: [
      { name: 'Jim Partridge', title: 'Supervisor', party: null },
      { name: 'David Olson', title: 'Clerk', party: null },
      { name: 'Jenee Phillips', title: 'Treasurer', party: null },
      { name: 'Benjamin Westveer', title: 'Trustee', party: null },
      { name: 'Bruce Scheck', title: 'Trustee', party: null },
      { name: 'Don Eichholz', title: 'Trustee', party: null },
      { name: 'William Wetzel', title: 'Trustee', party: null },
    ],
  },

  Hope: {
    name: 'Hope Township',
    county: 'Barry',
    website: 'https://www.hopetwp.com/',
    officials: [
      { name: 'Doug Peck', title: 'Supervisor', party: null },
      { name: 'Debby Jackson', title: 'Clerk', party: null },
      { name: 'Arlene Tonkin', title: 'Treasurer', party: null },
      { name: 'Chris Lapins', title: 'Trustee', party: null },
      { name: 'Jr. Homister', title: 'Trustee', party: null },
    ],
  },

  Irving: {
    name: 'Irving Township',
    county: 'Barry',
    website: 'https://www.irvingtownship.org/',
    officials: [
      { name: 'Daniel Lydy', title: 'Supervisor', party: null },
      { name: 'Tessa Stout', title: 'Clerk', party: null },
      { name: 'Francie Nagel', title: 'Treasurer', party: null },
      { name: 'Mike Buehler', title: 'Trustee', party: null },
      { name: 'Larry Brummel Jr', title: 'Trustee', party: null },
    ],
  },

  Johnstown: {
    name: 'Johnstown Township',
    county: 'Barry',
    website: 'https://johnstowntwpmi.gov/',
    officials: [
      { name: 'Barbara Earl', title: 'Supervisor', party: null },
      { name: 'Sheri Babcock', title: 'Clerk', party: null },
      { name: 'Karmen Nickerson', title: 'Treasurer', party: null },
      { name: 'Deana Powell', title: 'Trustee', party: null },
      { name: 'Dolores Garland', title: 'Trustee', party: null },
    ],
  },

  'Maple Grove': {
    name: 'Maple Grove Township',
    county: 'Barry',
    website: 'https://www.maplegrovetownship.org/',
    officials: [
      { name: 'Wes Peterman', title: 'Supervisor', party: null },
      { name: 'Tish Yaros', title: 'Clerk', party: null },
      { name: 'Ron Jaster', title: 'Treasurer', party: null },
      { name: 'Joe Erhardt Jr.', title: 'Trustee', party: null },
      { name: 'Marc Ebenhoeh', title: 'Trustee', party: null },
    ],
  },

  Orangeville: {
    name: 'Orangeville Township',
    county: 'Barry',
    website: 'https://www.orangevilletownship.org/',
    officials: [
      { name: 'Vivian Conner', title: 'Supervisor', party: null },
      { name: 'Mel Risner', title: 'Clerk', party: null },
      { name: 'Michelle Ritchie', title: 'Treasurer', party: null },
      { name: 'Brittnee Risner', title: 'Trustee', party: null },
      { name: 'Corey Ribble', title: 'Trustee', party: null },
    ],
  },

  Prairieville: {
    name: 'Prairieville Township',
    county: 'Barry',
    website: 'https://prairievilletwp-mi.gov/',
    officials: [
      { name: 'Jim Stoneburner', title: 'Supervisor', party: null },
      { name: 'Rod Goebel', title: 'Clerk', party: null },
      { name: 'Judy Pence', title: 'Treasurer', party: null },
      { name: 'Ted DeVries', title: 'Trustee', party: null },
      { name: 'Mark D. Doster', title: 'Trustee', party: null },
    ],
  },

  Rutland: {
    name: 'Rutland Charter Township',
    county: 'Barry',
    website: 'https://www.rutlandtownship.org/',
    officials: [
      { name: 'Marti Mayack', title: 'Supervisor', party: null },
      { name: 'Robin Hawthorne', title: 'Clerk', party: null },
      { name: 'Sandy Greenfield', title: 'Treasurer', party: null },
      { name: 'Brenda Bellmore', title: 'Trustee', party: null },
      { name: 'Sandra James', title: 'Trustee', party: null },
      { name: 'Gene Hall', title: 'Trustee', party: null },
      { name: 'Jason Watson', title: 'Trustee', party: null },
    ],
  },

  Thornapple: {
    name: 'Thornapple Township',
    county: 'Barry',
    website: 'https://www.thornapple-twp.org/',
    officials: [
      { name: 'Eric Schaefer', title: 'Supervisor', party: null },
      { name: 'Cindy Ordway', title: 'Clerk', party: null },
      { name: 'Laura Bouchard', title: 'Treasurer', party: null },
      { name: 'Curtis Campbell', title: 'Trustee', party: null },
      { name: 'Ross DeMaagd', title: 'Trustee', party: null },
      { name: 'Sandra Rairigh', title: 'Trustee', party: null },
      { name: 'David Stanton', title: 'Trustee', party: null },
    ],
  },

  Woodland: {
    name: 'Woodland Township',
    county: 'Barry',
    website: 'https://www.woodlandtwp.com/',
    officials: [
      { name: 'Jeff Mackenzie', title: 'Supervisor', party: null },
      { name: 'Elizabeth Busk', title: 'Clerk', party: null },
      { name: 'Shawn Durkee', title: 'Treasurer', party: null },
      { name: 'Mike Slater', title: 'Trustee', party: null },
      { name: 'Gabe Steward', title: 'Trustee', party: null },
    ],
  },

  'Yankee Springs': {
    name: 'Yankee Springs Township',
    county: 'Barry',
    website: 'https://yankeespringstwp.org/',
    officials: [
      { name: 'Rob Heethuis', title: 'Supervisor', party: null },
      { name: 'Tom Hopkins', title: 'Clerk', party: null },
      { name: 'Deb Mousseau', title: 'Treasurer', party: null },
      { name: 'Dave VanHouten', title: 'Trustee', party: null },
      { name: 'Larry Knowles', title: 'Trustee', party: null },
    ],
  },

  /* ── Allegan County townships ── */

  'Allegan Twp': {
    name: 'Allegan Township',
    county: 'Allegan',
    website: 'https://allegantownship.org/',
    officials: [
      { name: 'Steve Schulz', title: 'Supervisor', party: null },
      { name: 'Michelle Waite', title: 'Clerk', party: null },
      { name: 'Laree Waanders', title: 'Treasurer', party: null },
      { name: 'Heather Knight', title: 'Trustee', party: null },
      { name: 'Jim Connell', title: 'Trustee', party: null },
    ],
  },

  Casco: {
    name: 'Casco Township',
    county: 'Allegan',
    website: 'https://www.cascotownship.info/',
    officials: [
      { name: 'Allan Overhiser', title: 'Supervisor', party: null },
      { name: 'Rachel Ridley', title: 'Clerk', party: null },
      { name: 'Kenny Clevenger', title: 'Treasurer', party: null },
      { name: 'Mary Campbell', title: 'Trustee', party: null },
      { name: 'Dan Fleming', title: 'Trustee', party: null },
    ],
  },

  Cheshire: {
    name: 'Cheshire Township',
    county: 'Allegan',
    website: 'https://www.cheshiretownship.org/',
    officials: [
      { name: 'Steve Revor', title: 'Supervisor', party: null },
      { name: 'Jodi Pinnell', title: 'Clerk', party: null },
      { name: 'Ron Hale', title: 'Treasurer', party: null },
      { name: 'Raymond Moored', title: 'Trustee', party: null },
      { name: 'Kenneth Horton', title: 'Trustee', party: null },
    ],
  },

  Clyde: {
    name: 'Clyde Township',
    county: 'Allegan',
    website: 'https://clydetwp.com/',
    officials: [
      { name: 'Tom Giles', title: 'Supervisor', party: null },
      { name: 'Pam Onken', title: 'Clerk', party: null },
      { name: 'Chris McKellips', title: 'Treasurer', party: null },
      { name: 'Bernard McLeod', title: 'Trustee', party: null },
      { name: 'Robert Larsen', title: 'Trustee', party: null },
    ],
  },

  Dorr: {
    name: 'Dorr Township',
    county: 'Allegan',
    website: 'https://www.dorrtownshipmi.gov/',
    officials: [
      { name: 'Jeff Miling', title: 'Supervisor', party: null },
      { name: 'Debbie Sewers', title: 'Clerk', party: null },
      { name: 'Sheila Reitz', title: 'Treasurer', party: null },
      { name: 'John Tuinstra', title: 'Trustee', party: null },
      { name: 'Patrick Champion', title: 'Trustee', party: null },
      { name: 'Dan Weber', title: 'Trustee', party: null },
    ],
  },

  Fillmore: {
    name: 'Fillmore Township',
    county: 'Allegan',
    website: 'https://fillmoretownship.org/',
    officials: [
      { name: 'John Yonker', title: 'Supervisor', party: null },
      { name: 'Elaine Mokma', title: 'Clerk', party: null },
      { name: 'Leah Folkert', title: 'Treasurer', party: null },
      { name: 'Robert Yonker', title: 'Trustee', party: null },
      { name: 'Chuck Schaap', title: 'Trustee', party: null },
    ],
  },

  Ganges: {
    name: 'Ganges Township',
    county: 'Allegan',
    website: 'https://gangestownship.org/',
    officials: [
      { name: 'John Hebert', title: 'Supervisor', party: null },
      { name: 'Robin Phelps', title: 'Clerk', party: null },
      { name: 'Cindy Reimink', title: 'Treasurer', party: null },
      { name: 'Dick Hutchins', title: 'Trustee', party: null },
      { name: 'George Thompson', title: 'Trustee', party: null },
    ],
  },

  'Gun Plain': {
    name: 'Gun Plain Charter Township',
    county: 'Allegan',
    website: 'https://www.gunplain.org/',
    officials: [
      { name: 'Michael VanDenBerg', title: 'Supervisor', party: null },
      { name: 'Martha Meert', title: 'Clerk', party: null },
      { name: 'Annette Horton', title: 'Treasurer', party: null },
      { name: 'Jenann Pearson', title: 'Trustee', party: null },
      { name: 'Kevin Meert', title: 'Trustee', party: null },
      { name: 'Christine VanDenBerg', title: 'Trustee', party: null },
      { name: 'Dana Albertson-Stowell', title: 'Trustee', party: null },
    ],
  },

  Heath: {
    name: 'Heath Township',
    county: 'Allegan',
    website: 'https://heathtownship.net/',
    officials: [
      { name: 'Ronald L. Jones', title: 'Supervisor', party: null },
      { name: 'Missy Harvey', title: 'Clerk', party: null },
      { name: 'Misti J. Lindholm', title: 'Treasurer', party: null },
      { name: 'Hildagarde Boerman', title: 'Trustee', party: null },
      { name: 'Bill Harvey', title: 'Trustee', party: null },
    ],
  },

  'Hopkins Twp': {
    name: 'Hopkins Township',
    county: 'Allegan',
    website: 'https://www.hopkinstownship.org/',
    officials: [
      { name: 'Cade Bolser', title: 'Supervisor', party: null },
      { name: 'Stacey Timmer', title: 'Clerk', party: null },
      { name: 'Eric Alberda', title: 'Treasurer', party: null },
      { name: 'Chuck Wamhoff', title: 'Trustee', party: null },
      { name: 'Bob Modreske', title: 'Trustee', party: null },
    ],
  },

  Laketown: {
    name: 'Laketown Township',
    county: 'Allegan',
    website: 'https://laketowntwp.org/',
    officials: [
      { name: 'Steven Ringelberg', title: 'Supervisor', party: 'Republican' },
      { name: 'Jim Delaney', title: 'Clerk', party: 'Republican' },
      { name: 'Jim Johnson', title: 'Treasurer', party: 'Republican' },
      { name: 'Michael Koeman', title: 'Trustee', party: 'Republican' },
      { name: 'Mark S. Timmerman', title: 'Trustee', party: 'Republican' },
    ],
  },

  Leighton: {
    name: 'Leighton Township',
    county: 'Allegan',
    website: 'https://leightontownship.org/',
    officials: [
      { name: 'Steve Wolbrink', title: 'Supervisor', party: 'Republican' },
      { name: 'Rachel Fennema', title: 'Clerk', party: 'Republican' },
      { name: 'Jacquelynn Bultsma', title: 'Treasurer', party: null },
      { name: 'Brian Bonnema', title: 'Trustee', party: 'Republican' },
      { name: 'John Hooker', title: 'Trustee', party: 'Republican' },
    ],
  },

  Manlius: {
    name: 'Manlius Township',
    county: 'Allegan',
    website: 'https://www.manliustwp.org/',
    officials: [
      { name: 'Barbara Van Gelderen', title: 'Supervisor', party: null },
      { name: 'Matthew Rooks', title: 'Clerk', party: null },
      { name: 'Troy Thompson', title: 'Treasurer', party: null },
      { name: 'David Kempker', title: 'Trustee', party: null },
      { name: 'Thomas Nolan', title: 'Trustee', party: null },
    ],
  },

  'Martin Twp': {
    name: 'Martin Township',
    county: 'Allegan',
    website: 'https://www.martintownship.org/',
    officials: [
      { name: 'Glenn Leep', title: 'Supervisor', party: null },
      { name: 'Jennifer Wharton', title: 'Clerk', party: null },
      { name: 'Maria Leep', title: 'Treasurer', party: null },
      { name: 'John Schipper', title: 'Trustee', party: null },
      { name: 'Jim DeYoung', title: 'Trustee', party: null },
    ],
  },

  Monterey: {
    name: 'Monterey Township',
    county: 'Allegan',
    website: 'https://www.montereytownship.org/',
    officials: [
      { name: 'Henry Reinart', title: 'Supervisor', party: 'Republican' },
      { name: 'Megan Frank', title: 'Clerk', party: 'Republican' },
      { name: 'Julie DeHaan', title: 'Treasurer', party: 'Republican' },
      { name: 'Eric Commons', title: 'Trustee', party: 'Republican' },
      { name: 'Jerry Williams', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Otsego Twp': {
    name: 'Otsego Township',
    county: 'Allegan',
    website: 'https://www.otsegotownship.org/',
    officials: [
      { name: 'Michael Gudith', title: 'Supervisor', party: null },
      { name: 'Jen Colin', title: 'Clerk', party: null },
      { name: 'Carrie Lunarde-Alexander', title: 'Treasurer', party: null },
      { name: 'Karen Burns', title: 'Trustee', party: null },
      { name: 'Rick Moll', title: 'Trustee', party: null },
      { name: 'Lori Bumgart', title: 'Trustee', party: null },
      { name: 'Ashlee Rose', title: 'Trustee', party: null },
    ],
  },

  Overisel: {
    name: 'Overisel Township',
    county: 'Allegan',
    website: 'https://overiseltownship.org/',
    officials: [
      { name: 'Lisa Russcher', title: 'Supervisor', party: null },
      { name: 'Lori Scholten', title: 'Clerk', party: null },
      { name: 'Rachel Hoeve', title: 'Treasurer', party: null },
      { name: 'Josh Groenheide', title: 'Trustee', party: null },
      { name: 'Ben Koopman', title: 'Trustee', party: null },
    ],
  },

  'Salem (Allegan)': {
    name: 'Salem Township',
    county: 'Allegan',
    website: 'https://salemtownship.org/',
    officials: [
      { name: 'James Pitsch', title: 'Supervisor', party: null },
      { name: 'Renee Busscher', title: 'Clerk', party: null },
      { name: 'Ashley Brower', title: 'Treasurer', party: null },
      { name: 'Dan Striegle', title: 'Trustee', party: null },
      { name: 'Don Sebright', title: 'Trustee', party: null },
    ],
  },

  'Saugatuck Twp': {
    name: 'Saugatuck Township',
    county: 'Allegan',
    website: 'https://saugatucktownshipmi.gov/',
    officials: [
      { name: 'Abby Bigford', title: 'Supervisor', party: null },
      { name: 'Cindy Osman', title: 'Clerk', party: null },
      { name: 'Jon Helmrich', title: 'Treasurer', party: null },
      { name: 'Stacey Aldrich', title: 'Trustee', party: null },
      { name: 'Brenda Marcy', title: 'Trustee', party: null },
    ],
  },

  Trowbridge: {
    name: 'Trowbridge Township',
    county: 'Allegan',
    website: 'https://trowbridgetownship.org/',
    officials: [
      { name: 'Jeff Kaylor', title: 'Supervisor', party: null },
      { name: 'Dave Smalla', title: 'Clerk', party: null },
      { name: 'Cindi Kurtz', title: 'Treasurer', party: null },
      { name: 'Tony Emmons Jr.', title: 'Trustee', party: null },
      { name: 'Lori Querback', title: 'Trustee', party: null },
    ],
  },

  'Valley (Allegan)': {
    name: 'Valley Township',
    county: 'Allegan',
    website: 'https://www.valleytwp.org/',
    officials: [
      { name: 'Mike Krcatovich', title: 'Supervisor', party: null },
      { name: 'Brandee Ellis', title: 'Clerk', party: null },
      { name: 'Christi Foster', title: 'Treasurer', party: null },
      { name: 'Mike Jensen', title: 'Trustee', party: null },
      { name: 'Tim Batchelor', title: 'Trustee', party: null },
    ],
  },

  Watson: {
    name: 'Watson Township',
    county: 'Allegan',
    website: 'https://watsontownshipmi.gov/',
    officials: [
      { name: 'Kevin Travis', title: 'Supervisor', party: null },
      { name: 'Mary Ann Baker', title: 'Clerk', party: null },
      { name: 'Tera Davis', title: 'Treasurer', party: null },
      { name: 'Michelle Harris', title: 'Trustee', party: null },
      { name: 'Joseph Yearous', title: 'Trustee', party: null },
    ],
  },

  'Wayland Twp': {
    name: 'Wayland Township',
    county: 'Allegan',
    website: 'https://waytwp.org/',
    officials: [
      { name: 'Roger VanVolkinburg', title: 'Supervisor', party: null },
      { name: 'Bob Fryling', title: 'Clerk', party: null },
      { name: 'Sue Kamyszek', title: 'Treasurer', party: null },
      { name: 'Matt Miner', title: 'Trustee', party: null },
      { name: 'Jim Stein', title: 'Trustee', party: null },
    ],
  },

  /* ── Ionia County townships ── */

  Berlin: {
    name: 'Berlin Township',
    county: 'Ionia',
    website: 'https://berlintwpioniami.gov/',
    officials: [
      { name: 'Robert Bennett', title: 'Supervisor', party: null },
      { name: 'Rachael Alexander', title: 'Clerk', party: null },
      { name: 'Marilyn Palmer', title: 'Treasurer', party: null },
      { name: 'Wanda Marcussen', title: 'Trustee', party: null },
      { name: 'William B. Vaarberg', title: 'Trustee', party: null },
    ],
  },

  Boston: {
    name: 'Boston Township',
    county: 'Ionia',
    website: 'https://www.bostontwp.org/',
    officials: [
      { name: 'Dennis Bowen', title: 'Supervisor', party: null },
      { name: 'Lynn Kaufman', title: 'Clerk', party: null },
      { name: 'Mary Lamphere', title: 'Treasurer', party: null },
      { name: 'Barbara Foster', title: 'Trustee', party: null },
      { name: 'Gary Martin', title: 'Trustee', party: null },
    ],
  },

  Campbell: {
    name: 'Campbell Township',
    county: 'Ionia',
    website: 'https://www.campbelltownship.org/',
    officials: [
      { name: 'Dennis Pepper', title: 'Supervisor', party: null },
      { name: 'Denise Newman', title: 'Clerk', party: null },
      { name: 'Nicole Klahn', title: 'Treasurer', party: null },
      { name: 'Adam McArthur', title: 'Trustee', party: null },
      { name: 'Dan Jackson', title: 'Trustee', party: null },
    ],
  },

  Danby: {
    name: 'Danby Township',
    county: 'Ionia',
    website: 'https://www.danbytownship.org/',
    officials: [
      { name: 'Daniel Platte', title: 'Supervisor', party: null },
      { name: 'Kristina Platte', title: 'Clerk', party: null },
      { name: 'Michele Hoppes', title: 'Treasurer', party: null },
      { name: 'Bill Nurenberg', title: 'Trustee', party: null },
      { name: 'Daniel Schafer', title: 'Trustee', party: null },
    ],
  },

  Easton: {
    name: 'Easton Township',
    county: 'Ionia',
    website: 'http://www.eastontownship.org/',
    officials: [
      { name: 'John Dinehart', title: 'Supervisor', party: null },
      { name: 'Breanne Rowley', title: 'Clerk', party: null },
      { name: 'Tracie Dinehart-Shindorf', title: 'Treasurer', party: null },
      { name: 'Don Rittersdorf', title: 'Trustee', party: null },
      { name: 'Cindy Cotter', title: 'Trustee', party: null },
    ],
  },

  'Ionia Twp': {
    name: 'Ionia Township',
    county: 'Ionia',
    website: 'https://ioniatownshipmi.gov/',
    officials: [
      { name: 'Jamie Stephens', title: 'Supervisor', party: null },
      { name: 'Sheri Lynn', title: 'Clerk', party: null },
      { name: 'Mackenzie Waters', title: 'Treasurer', party: null },
      { name: 'Susan McCoy', title: 'Trustee', party: null },
      { name: 'Aric Pitchford', title: 'Trustee', party: null },
    ],
  },

  Keene: {
    name: 'Keene Township',
    county: 'Ionia',
    website: 'https://keenetownshipmi.gov/',
    officials: [
      { name: 'Sandy Smiley', title: 'Supervisor', party: null },
      { name: 'Holli Melton', title: 'Clerk', party: null },
      { name: 'Christine Hendrick', title: 'Treasurer', party: null },
      { name: 'Nate Wolff', title: 'Trustee', party: null },
      { name: 'William Pflugradt', title: 'Trustee', party: null },
    ],
  },

  'Lyons (Ionia)': {
    name: 'Lyons Township',
    county: 'Ionia',
    website: 'https://www.lyonstownship.org/',
    officials: [
      { name: 'Charles Babcock', title: 'Supervisor', party: null },
      { name: 'Julie Heckman', title: 'Clerk', party: null },
      { name: 'Jill Thelen', title: 'Treasurer', party: null },
      { name: 'Kevin Gould', title: 'Trustee', party: null },
      { name: 'Andy Hengesbach', title: 'Trustee', party: null },
    ],
  },

  'North Plains': {
    name: 'North Plains Township',
    county: 'Ionia',
    officials: [
      { name: 'William Kruger', title: 'Supervisor', party: null },
      { name: 'Robert Fahey', title: 'Clerk', party: null },
      { name: 'Jennifer Stevenson', title: 'Treasurer', party: null },
      { name: 'William Cunningham', title: 'Trustee', party: null },
      { name: 'Timothy Schafer', title: 'Trustee', party: null },
    ],
  },

  Odessa: {
    name: 'Odessa Township',
    county: 'Ionia',
    website: 'https://www.odessatownship.org/',
    officials: [
      { name: 'Gary P. Secor', title: 'Supervisor', party: null },
      { name: 'Lisa Williams', title: 'Clerk', party: null },
      { name: 'Sharon Rohrbacher', title: 'Treasurer', party: null },
      { name: 'Brad Barrone', title: 'Trustee', party: null },
      { name: 'Allan Baron II', title: 'Trustee', party: null },
    ],
  },

  'Orange Twp (Ionia)': {
    name: 'Orange Township',
    county: 'Ionia',
    website: 'https://orangetownshipioniami.gov/',
    officials: [
      { name: 'Tom Green', title: 'Supervisor', party: null },
      { name: 'Wendy McBride', title: 'Clerk', party: null },
      { name: 'Karla Wittenbach', title: 'Treasurer', party: null },
      { name: 'Jeff Cody', title: 'Trustee', party: null },
      { name: 'Chris Fox', title: 'Trustee', party: null },
    ],
  },

  Orleans: {
    name: 'Orleans Township',
    county: 'Ionia',
    website: 'https://www.oleanstwp.com/',
    officials: [
      { name: 'Scott Rudlaff', title: 'Supervisor', party: null },
      { name: 'Melissa Harper', title: 'Clerk', party: null },
      { name: 'Barbara Colwell', title: 'Treasurer', party: null },
      { name: 'Albert Almy', title: 'Trustee', party: null },
      { name: 'Tonda Rich', title: 'Trustee', party: null },
    ],
  },

  Otisco: {
    name: 'Otisco Township',
    county: 'Ionia',
    website: 'https://www.otiscotwp.org/',
    officials: [
      { name: 'Bruce Feuerstein', title: 'Supervisor', party: null },
      { name: 'Lynda Sower', title: 'Clerk', party: null },
      { name: 'Paula Byrne', title: 'Treasurer', party: null },
      { name: 'Joseph Borek', title: 'Trustee', party: null },
      { name: 'Stephanie Wireman', title: 'Trustee', party: null },
    ],
  },

  'Portland Twp': {
    name: 'Portland Township',
    county: 'Ionia',
    website: 'https://www.portlandtownship.org/',
    officials: [
      { name: 'Chris Jensen', title: 'Supervisor', party: null },
      { name: 'Charlene Keilen', title: 'Clerk', party: null },
      { name: 'Melanie Schneider', title: 'Treasurer', party: null },
      { name: 'Mark Simon', title: 'Trustee', party: null },
      { name: 'Tim Kerekes', title: 'Trustee', party: null },
    ],
  },

  Ronald: {
    name: 'Ronald Township',
    county: 'Ionia',
    website: 'https://www.ronaldtownship.org/',
    officials: [
      { name: 'Tamara Edwards', title: 'Supervisor', party: null },
      { name: 'Sulyn Bettinghouse', title: 'Clerk', party: null },
      { name: 'Angela Lamphere', title: 'Treasurer', party: null },
      { name: 'Kathy Ainsworth', title: 'Trustee', party: null },
      { name: 'Sandra Thelen', title: 'Trustee', party: null },
    ],
  },

  Sebewa: {
    name: 'Sebewa Township',
    county: 'Ionia',
    officials: [
      { name: 'John Piercefield', title: 'Supervisor', party: null },
      { name: 'Marcia Lewis', title: 'Clerk', party: null },
      { name: 'Cynthia Piercefield', title: 'Treasurer', party: null },
      { name: 'Craig Brown', title: 'Trustee', party: null },
      { name: 'John Lich', title: 'Trustee', party: null },
    ],
  },

  /* ── Mason County townships ── */

  Amber: {
    name: 'Amber Township',
    county: 'Mason',
    website: 'https://ambertwpmi.gov/',
    officials: [
      { name: 'Thomas Alway', title: 'Supervisor', party: null },
      { name: 'Theresa Rohde', title: 'Clerk', party: null },
      { name: 'Jeanne Miller', title: 'Treasurer', party: null },
      { name: 'Rita Copenhaver', title: 'Trustee', party: null },
      { name: 'Noah VanDusen', title: 'Trustee', party: null },
    ],
  },

  Branch: {
    name: 'Branch Township',
    county: 'Mason',
    officials: [
      { name: 'Michael Shoup', title: 'Supervisor', party: null },
      { name: 'Kimberly Tenney', title: 'Clerk', party: null },
      { name: 'Ralph Razminas', title: 'Treasurer', party: null },
      { name: 'Shirley Brayton', title: 'Trustee', party: null },
      { name: 'Joseph Fiers', title: 'Trustee', party: null },
    ],
  },

  'Custer Twp': {
    name: 'Custer Township',
    county: 'Mason',
    website: 'https://www.custertownship.com/',
    officials: [
      { name: 'Thomas Trenner', title: 'Supervisor', party: null },
      { name: 'Stacy K. Wood', title: 'Clerk', party: null },
      { name: 'Carey M. Jolly', title: 'Treasurer', party: null },
      { name: 'George Allison', title: 'Trustee', party: null },
      { name: 'Susan Hansen', title: 'Trustee', party: null },
    ],
  },

  Eden: {
    name: 'Eden Township',
    county: 'Mason',
    website: 'https://edentownshipmi.org/',
    officials: [
      { name: 'Roger Nash', title: 'Supervisor', party: null },
      { name: 'Julie L. Van Dyke', title: 'Clerk', party: null },
      { name: 'Trudy L. McCumber', title: 'Treasurer', party: null },
      { name: 'Brenda S. Carr', title: 'Trustee', party: null },
      { name: 'Joseph D. Stickney', title: 'Trustee', party: null },
    ],
  },

  'Free Soil Twp': {
    name: 'Free Soil Township',
    county: 'Mason',
    website: 'https://freesoiltownship.org/',
    officials: [
      { name: 'Gregg Surma', title: 'Supervisor', party: null },
      { name: 'Lynda A. Papes', title: 'Clerk', party: null },
      { name: 'Lisa Marie Stankowski', title: 'Treasurer', party: null },
      { name: 'Philip Gajeski', title: 'Trustee', party: null },
      { name: 'Joseph J. Meyers', title: 'Trustee', party: null },
    ],
  },

  'Grant Twp (Mason)': {
    name: 'Grant Township',
    county: 'Mason',
    website: 'https://granttwpmi.org/',
    officials: [
      { name: 'Mary Jo Janowiak', title: 'Clerk', party: null },
      { name: 'Kris Brandt', title: 'Treasurer', party: null },
      { name: 'Allen Bufka', title: 'Trustee', party: null },
      { name: 'Seth Kelly', title: 'Trustee', party: null },
    ],
  },

  Hamlin: {
    name: 'Hamlin Township',
    county: 'Mason',
    website: 'https://www.hamlintownship.org/',
    officials: [
      { name: 'Marta C. Greenslait', title: 'Supervisor', party: null },
      { name: 'Shelia Genter', title: 'Clerk', party: null },
      { name: 'Susan Ptaszenski', title: 'Treasurer', party: null },
      { name: 'Christopher Cook', title: 'Trustee', party: null },
      { name: 'Johnaine Gurzynski', title: 'Trustee', party: null },
    ],
  },

  Logan: {
    name: 'Logan Township',
    county: 'Mason',
    officials: [
      { name: 'Bruce Burke', title: 'Supervisor', party: null },
      { name: 'John Kampfschulte', title: 'Clerk', party: null },
      { name: 'Tammy Bromley', title: 'Treasurer', party: null },
      { name: 'Robert Burke', title: 'Trustee', party: null },
      { name: 'Daniel R. Stewart', title: 'Trustee', party: null },
    ],
  },

  Meade: {
    name: 'Meade Township',
    county: 'Mason',
    officials: [
      { name: 'Harmon H. Schonfeld', title: 'Supervisor', party: null },
      { name: 'Kirstin VandeVoorde', title: 'Clerk', party: null },
      { name: 'Brian Jacobson', title: 'Treasurer', party: null },
      { name: 'Jim Metzger', title: 'Trustee', party: null },
      { name: 'William Keith Thomas', title: 'Trustee', party: null },
    ],
  },

  'Pere Marquette': {
    name: 'Pere Marquette Charter Township',
    county: 'Mason',
    website: 'https://www.pmtwp.org/',
    officials: [
      { name: 'Kelly D. Smith', title: 'Supervisor', party: null },
      { name: 'Rachelle D. Enbody', title: 'Clerk', party: null },
      { name: 'Sarah Iteen', title: 'Treasurer', party: null },
      { name: 'Andrew R. Kmetz III', title: 'Trustee', party: null },
      { name: 'James T. Nordlund', title: 'Trustee', party: null },
      { name: 'Henry E. Rasmussen', title: 'Trustee', party: null },
      { name: 'Megan Tresnak', title: 'Trustee', party: null },
    ],
  },

  Riverton: {
    name: 'Riverton Township',
    county: 'Mason',
    website: 'https://rivertontownship.org/',
    officials: [
      { name: 'Gary L. Dittmer', title: 'Supervisor', party: null },
      { name: 'Cynthia Gerbers', title: 'Clerk', party: null },
      { name: 'Kristi Rae Griffis', title: 'Treasurer', party: null },
      { name: 'Greg Thurow', title: 'Trustee', party: null },
      { name: 'Todd VanNortwick', title: 'Trustee', party: null },
    ],
  },

  'Sheridan Twp (Mason)': {
    name: 'Sheridan Township',
    county: 'Mason',
    website: 'https://sheridantwpmason.org/',
    officials: [
      { name: 'Kelly Crocker', title: 'Supervisor', party: null },
      { name: 'Marlynn E. Gulembo', title: 'Clerk', party: null },
      { name: 'Jennie L. Borema', title: 'Treasurer', party: null },
      { name: 'Rich Rouwhorst', title: 'Trustee', party: null },
      { name: 'Jennifer Tyndall', title: 'Trustee', party: null },
    ],
  },

  'Sherman Twp (Mason)': {
    name: 'Sherman Township',
    county: 'Mason',
    website: 'https://shermantwpmasonmi.gov/',
    officials: [
      { name: 'Joseph F. Mickevich', title: 'Supervisor', party: null },
      { name: 'Kurt D. Lubben', title: 'Clerk', party: null },
      { name: 'Kristina Randle', title: 'Treasurer', party: null },
      { name: 'Chelsea Miszewski', title: 'Trustee', party: null },
      { name: 'William Stakenas', title: 'Trustee', party: null },
    ],
  },

  'Summit Twp (Mason)': {
    name: 'Summit Township',
    county: 'Mason',
    website: 'https://summittownship.org/',
    officials: [
      { name: 'D. Wayne Kelly', title: 'Supervisor', party: null },
      { name: 'Kay Deanda', title: 'Clerk', party: null },
      { name: 'Mary Bedker', title: 'Treasurer', party: null },
      { name: 'Edward Chase', title: 'Trustee', party: null },
      { name: 'Todd Jorissen', title: 'Trustee', party: null },
    ],
  },

  Victory: {
    name: 'Victory Township',
    county: 'Mason',
    website: 'https://www.victorytownship.org/',
    officials: [
      { name: 'Robert W. Kesling', title: 'Supervisor', party: null },
      { name: 'Sarah L. Grabowski', title: 'Clerk', party: null },
      { name: 'Patricia A. Geers', title: 'Treasurer', party: null },
      { name: 'Jerome Papes', title: 'Trustee', party: null },
      { name: 'Wayne Andersen', title: 'Trustee', party: null },
    ],
  },

  /* ── Oceana County townships ── */

  Benona: {
    name: 'Benona Township',
    county: 'Oceana',
    website: 'http://www.benonatownship.org/',
    officials: [
      { name: 'Steven Fleming', title: 'Supervisor', party: null },
      { name: 'Margie Shaw', title: 'Clerk', party: null },
      { name: 'Brandi Neuman', title: 'Treasurer', party: null },
      { name: 'John Smith', title: 'Trustee', party: null },
      { name: 'Warren Overbeke', title: 'Trustee', party: null },
    ],
  },

  Claybanks: {
    name: 'Claybanks Township',
    county: 'Oceana',
    website: 'http://www.claybankstownship.org/',
    officials: [
      { name: 'Daniel Lombard', title: 'Supervisor', party: null },
      { name: 'Alice Holsomback Smith', title: 'Clerk', party: null },
      { name: 'Cheryl Rabe', title: 'Treasurer', party: null },
      { name: 'David Rabe', title: 'Trustee', party: null },
      { name: 'Peter Shlagor', title: 'Trustee', party: null },
    ],
  },

  'Colfax (Oceana)': {
    name: 'Colfax Township',
    county: 'Oceana',
    website: 'https://www.colfaxtownshipoceana.org/',
    officials: [
      { name: 'David Leonard', title: 'Supervisor', party: 'Democrat' },
      { name: 'Corrine Norton', title: 'Clerk', party: null },
      { name: 'Shelby Branch', title: 'Treasurer', party: null },
      { name: 'Stuart Overway', title: 'Trustee', party: null },
      { name: 'Bradley Norton', title: 'Trustee', party: null },
    ],
  },

  'Crystal Twp (Oceana)': {
    name: 'Crystal Township',
    county: 'Oceana',
    website: 'https://crystaltownship.org',
    officials: [
      { name: 'Lee Hyslop', title: 'Supervisor', party: null },
      { name: 'Bethany Seymour', title: 'Clerk', party: null },
      { name: 'Cathryn Walker', title: 'Treasurer', party: null },
      { name: 'Jon Stevenson', title: 'Trustee', party: null },
      { name: 'Kyle Oomen', title: 'Trustee', party: null },
    ],
  },

  Elbridge: {
    name: 'Elbridge Township',
    county: 'Oceana',
    website: 'http://elbridgetownship.org',
    officials: [
      { name: 'Lance VanSickle', title: 'Supervisor', party: null },
      { name: 'Stephanie VanSickle', title: 'Clerk', party: null },
      { name: 'Vicki Koch', title: 'Treasurer', party: null },
      { name: 'Eric Herrygers', title: 'Trustee', party: null },
      { name: 'Noah VandeZande', title: 'Trustee', party: null },
    ],
  },

  Ferry: {
    name: 'Ferry Township',
    county: 'Oceana',
    website: 'https://www.ferrytownship.org/',
    officials: [
      { name: 'David Schmieding', title: 'Supervisor', party: null },
      { name: 'William Jessup', title: 'Clerk', party: null },
      { name: 'Brenda Dickman', title: 'Treasurer', party: null },
      { name: 'Milton Kreigh', title: 'Trustee', party: null },
      { name: 'Jessica Woodworth', title: 'Trustee', party: null },
    ],
  },

  Golden: {
    name: 'Golden Township',
    county: 'Oceana',
    website: 'http://www.goldentownship.org/',
    officials: [
      { name: 'Robert Draper', title: 'Supervisor', party: null },
      { name: 'Rachel Iteen', title: 'Clerk', party: null },
      { name: 'Connie Cargill', title: 'Treasurer', party: null },
      { name: 'Doug Dykstra', title: 'Trustee', party: null },
      { name: 'Bill Kolenda', title: 'Trustee', party: null },
    ],
  },

  'Grant Twp (Oceana)': {
    name: 'Grant Township',
    county: 'Oceana',
    website: 'https://www.granttownshipoceana.com/',
    officials: [
      { name: 'Roger Schmidt', title: 'Supervisor', party: null },
      { name: 'Shannon Beizhuisen', title: 'Clerk', party: null },
      { name: 'Joanne Heck', title: 'Treasurer', party: null },
      { name: 'William Mischler', title: 'Trustee', party: null },
      { name: 'Joan Brooks', title: 'Trustee', party: null },
    ],
  },

  'Greenwood Twp (Oceana)': {
    name: 'Greenwood Township',
    county: 'Oceana',
    website: 'http://greenwood-township.com/',
    officials: [
      { name: 'Jeffrey Hunt', title: 'Supervisor', party: null },
      { name: 'Linda Hunt', title: 'Clerk', party: null },
      { name: 'Melissa Stroven', title: 'Treasurer', party: null },
      { name: 'Alan Deater', title: 'Trustee', party: null },
      { name: 'James Kibart', title: 'Trustee', party: null },
    ],
  },

  'Hart Twp': {
    name: 'Hart Township',
    county: 'Oceana',
    website: 'http://www.harttownship.org/',
    officials: [
      { name: 'Jay McGhan', title: 'Supervisor', party: null },
      { name: 'Steven Freed', title: 'Clerk', party: null },
      { name: 'Todd Metzler', title: 'Treasurer', party: null },
      { name: 'Douglas Fuehring', title: 'Trustee', party: null },
      { name: 'Lois Alvesteffer-Simmons', title: 'Trustee', party: null },
    ],
  },

  Leavitt: {
    name: 'Leavitt Township',
    county: 'Oceana',
    officials: [
      { name: 'Brooke Stapel', title: 'Supervisor', party: null },
      { name: 'Naomi Oomen', title: 'Clerk', party: null },
      { name: 'Matt Thompson', title: 'Treasurer', party: null },
      { name: 'Allen Purdy', title: 'Trustee', party: null },
    ],
  },

  Newfield: {
    name: 'Newfield Township',
    county: 'Oceana',
    website: 'http://www.newfieldtownship.org/',
    officials: [
      { name: 'Joan David', title: 'Supervisor', party: null },
      { name: 'Nancy Conley', title: 'Clerk', party: null },
      { name: 'Mary Martin-Hopkins', title: 'Treasurer', party: null },
      { name: 'Richard Roberson', title: 'Trustee', party: null },
      { name: 'Wayne Ferris', title: 'Trustee', party: null },
    ],
  },

  Otto: {
    name: 'Otto Township',
    county: 'Oceana',
    website: 'https://ottotownship.com/',
    officials: [
      { name: 'Todd Van Nett', title: 'Supervisor', party: null },
      { name: 'Pat Budde', title: 'Clerk', party: null },
      { name: 'Charlene Martin', title: 'Treasurer', party: null },
      { name: 'Kathy Eichenberg', title: 'Trustee', party: null },
      { name: 'Mary Justian-Murray', title: 'Trustee', party: null },
    ],
  },

  'Pentwater Twp': {
    name: 'Pentwater Township',
    county: 'Oceana',
    website: 'https://www.pentwatertownshipmi.gov/',
    officials: [
      { name: 'Lynette Cavazos', title: 'Supervisor', party: null },
      { name: 'Maureen Murphy', title: 'Clerk', party: null },
      { name: 'Heather Douglas', title: 'Treasurer', party: null },
      { name: 'Michael Flynn', title: 'Trustee', party: null },
      { name: 'Dean Holub', title: 'Trustee', party: null },
    ],
  },

  'Shelby Twp (Oceana)': {
    name: 'Shelby Township',
    county: 'Oceana',
    website: 'https://www.shelbytownshipoceana.com/',
    officials: [
      { name: 'Richard Raffaelli', title: 'Supervisor', party: null },
      { name: 'Cathy Anderson', title: 'Clerk', party: null },
      { name: 'Rebecca Griffin', title: 'Treasurer', party: null },
      { name: 'Scott Meyers', title: 'Trustee', party: null },
      { name: 'Scott Beishuizen', title: 'Trustee', party: null },
    ],
  },

  Weare: {
    name: 'Weare Township',
    county: 'Oceana',
    website: 'http://wearetownship.org/',
    officials: [
      { name: 'Larry Doran', title: 'Supervisor', party: null },
      { name: 'Melanie Sayles', title: 'Clerk', party: null },
      { name: 'Jill VanderZanden', title: 'Treasurer', party: null },
      { name: 'Byron Miller', title: 'Trustee', party: null },
      { name: 'Lane Stotler', title: 'Trustee', party: null },
    ],
  },

  /* ── Wexford County townships ── */

  Boon: {
    name: 'Boon Township',
    county: 'Wexford',
    website: 'https://boontownshipmichigan.gov/',
    officials: [
      { name: 'Matthew Beattie', title: 'Supervisor', party: null },
      { name: 'Sheila Pratt', title: 'Clerk', party: null },
      { name: 'Michelle Wing', title: 'Treasurer', party: null },
      { name: 'Beverly Brighton', title: 'Trustee', party: null },
      { name: 'Kenneth Schinke', title: 'Trustee', party: null },
    ],
  },

  Antioch: {
    name: 'Antioch Township',
    county: 'Wexford',
    website: 'https://wexfordcounty.org/?page_id=13710',
    officials: [
      { name: 'Thomas H. Williams', title: 'Supervisor', party: null },
      { name: 'Darby Terpstra', title: 'Clerk', party: null },
      { name: 'Tanja McCane-Clark', title: 'Treasurer', party: null },
      { name: 'Joseph Gardner', title: 'Trustee', party: null },
      { name: 'Bruce G. Jewett', title: 'Trustee', party: null },
    ],
  },

  'Cedar Creek': {
    name: 'Cedar Creek Township',
    county: 'Wexford',
    officials: [
      { name: 'Larry Paquette', title: 'Supervisor', party: null },
      { name: 'Elizabeth A. Edwards', title: 'Clerk', party: null },
      { name: 'Mary Hallett', title: 'Treasurer', party: null },
      { name: 'Scott Paddock', title: 'Trustee', party: null },
      { name: 'Jean Schnitker', title: 'Trustee', party: null },
    ],
  },

  'Cherry Grove': {
    name: 'Cherry Grove Township',
    county: 'Wexford',
    website: 'https://www.cherrygrovetwp.org/',
    officials: [
      { name: 'Ben Pearson', title: 'Supervisor', party: null },
      { name: 'Marcy Hall', title: 'Clerk', party: null },
      { name: 'Kari Hanus', title: 'Treasurer', party: null },
      { name: 'Kathy Adams', title: 'Trustee', party: null },
      { name: 'Chad Edwards', title: 'Trustee', party: null },
    ],
  },

  'Clam Lake': {
    name: 'Clam Lake Township',
    county: 'Wexford',
    website: 'https://clamlaketownship.org/',
    officials: [
      { name: 'Bill Benson', title: 'Supervisor', party: null },
      { name: 'Sara Hurley', title: 'Clerk', party: null },
      { name: 'Lesa Wade', title: 'Treasurer', party: null },
      { name: 'Steven Kitler', title: 'Trustee', party: null },
      { name: 'Linda Stahl', title: 'Trustee', party: null },
    ],
  },

  'Colfax (Wexford)': {
    name: 'Colfax Township',
    county: 'Wexford',
    website: 'https://ctwpwcm.org/',
    officials: [
      { name: 'Mike Mix', title: 'Supervisor', party: null },
      { name: 'Rebecca Stoddard', title: 'Clerk', party: null },
      { name: 'Ruth Reddy', title: 'Treasurer', party: null },
      { name: 'Jeanne Housler', title: 'Trustee', party: null },
      { name: 'Nancy Wood', title: 'Trustee', party: null },
    ],
  },

  'Greenwood Twp (Wexford)': {
    name: 'Greenwood Township',
    county: 'Wexford',
    website: 'https://www.gwtwp.org/',
    officials: [
      { name: 'Shelly Bigelow', title: 'Supervisor', party: null },
      { name: 'Nancy Mohler', title: 'Clerk', party: null },
      { name: 'Terry Vandercook', title: 'Treasurer', party: null },
      { name: 'Harold Swinehart', title: 'Trustee', party: null },
      { name: 'Melody Baker', title: 'Trustee', party: null },
    ],
  },

  'Hanover (Wexford)': {
    name: 'Hanover Township',
    county: 'Wexford',
    website: 'https://hanovertsp.com/',
    officials: [
      { name: 'Peter Hansen', title: 'Supervisor', party: null },
      { name: 'Terri Schichtel', title: 'Clerk', party: null },
      { name: 'Michele Beeman', title: 'Treasurer', party: null },
      { name: 'Peggy Benz', title: 'Trustee', party: null },
      { name: 'Kim Manuel', title: 'Trustee', party: null },
    ],
  },

  Haring: {
    name: 'Haring Charter Township',
    county: 'Wexford',
    website: 'https://haringtwpmi.gov/',
    officials: [
      { name: 'Robert Scarbrough', title: 'Supervisor', party: null },
      { name: 'Paula Dewey', title: 'Clerk', party: null },
      { name: 'Elizabeth McCain', title: 'Treasurer', party: null },
      { name: 'Susan Baldwin', title: 'Trustee', party: null },
      { name: 'Ted Dewey', title: 'Trustee', party: null },
      { name: 'Robert Suader', title: 'Trustee', party: null },
      { name: 'Molly Whetstone', title: 'Trustee', party: null },
    ],
  },

  Henderson: {
    name: 'Henderson Township',
    county: 'Wexford',
    website: 'https://hendersontwpmi.gov/',
    officials: [
      { name: 'Paul Wayrynen', title: 'Supervisor', party: null },
      { name: 'Linda Sours', title: 'Clerk', party: null },
      { name: 'Cathy Knight', title: 'Treasurer', party: null },
      { name: 'Sawyer Renwick', title: 'Trustee', party: null },
      { name: 'Eric Sours', title: 'Trustee', party: null },
    ],
  },

  'Liberty Twp (Wexford)': {
    name: 'Liberty Township',
    county: 'Wexford',
    website: 'https://www.libertytownshipwexfordmi.gov/',
    officials: [
      { name: 'Brad Swanson', title: 'Supervisor', party: null },
      { name: 'Amanda Kimbel-Sparks', title: 'Clerk', party: null },
      { name: 'Jennifer Moffit', title: 'Treasurer', party: null },
      { name: 'Jim Heady', title: 'Trustee', party: null },
      { name: 'Brian Neihardt', title: 'Trustee', party: null },
    ],
  },

  'Selma Twp (Wexford)': {
    name: 'Selma Township',
    county: 'Wexford',
    website: 'https://selmatownship-mi.gov/',
    officials: [
      { name: 'Mike Boyd', title: 'Supervisor', party: null },
      { name: 'Carol Perrin', title: 'Clerk', party: null },
      { name: 'Sara Hettich', title: 'Treasurer', party: null },
      { name: 'Lori Wetherell', title: 'Trustee', party: null },
      { name: 'David Kuyers', title: 'Trustee', party: null },
    ],
  },

  Slagle: {
    name: 'Slagle Township',
    county: 'Wexford',
    website: 'https://slagletownship.org/',
    officials: [
      { name: 'Phil Wendel', title: 'Supervisor', party: null },
      { name: 'Tammy Porterfield', title: 'Clerk', party: null },
      { name: 'Connie Roush', title: 'Treasurer', party: null },
      { name: 'Norma Kangas', title: 'Trustee', party: null },
      { name: "David O'Grady", title: 'Trustee', party: null },
    ],
  },

  'South Branch': {
    name: 'South Branch Township',
    county: 'Wexford',
    website: 'https://southbranchtownship.com/',
    officials: [
      { name: 'Anna Sylvester', title: 'Supervisor', party: null },
      { name: 'Brenda Nelson', title: 'Clerk', party: null },
      { name: 'Kate Barkley', title: 'Treasurer', party: null },
      { name: 'Michael Janisse', title: 'Trustee', party: null },
      { name: 'Scott Barritt', title: 'Trustee', party: null },
    ],
  },

  Springville: {
    name: 'Springville Township',
    county: 'Wexford',
    website: 'https://www.springvilletownship.net/',
    officials: [
      { name: 'Timothy Dzikowicz', title: 'Supervisor', party: null },
      { name: 'Stacy Brewer', title: 'Clerk', party: null },
      { name: 'Wendy Floury', title: 'Treasurer', party: null },
      { name: 'Rob McGregor', title: 'Trustee', party: null },
      { name: 'Charles Maidens', title: 'Trustee', party: null },
    ],
  },

  'Wexford Twp': {
    name: 'Wexford Township',
    county: 'Wexford',
    website: 'https://wexfordtsp.org/',
    officials: [
      { name: 'Dave Williams', title: 'Supervisor', party: null },
      { name: 'Kimberly Nyman', title: 'Clerk', party: null },
      { name: 'Christina Hansen', title: 'Treasurer', party: null },
      { name: 'Robert Kellogg', title: 'Trustee', party: null },
      { name: 'Paul Williams', title: 'Trustee', party: null },
    ],
  },

  /* ── Missaukee County townships ── */

  'Aetna Twp (Missaukee)': {
    name: 'Aetna Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/aetna_township/index.php',
    officials: [
      { name: 'Keith Dick', title: 'Supervisor', party: null },
      { name: 'Linda Brown', title: 'Clerk', party: null },
      { name: 'Mark Jenema', title: 'Treasurer', party: null },
      { name: 'Kimberly Richards', title: 'Trustee', party: null },
      { name: 'Steve Burkholder', title: 'Trustee', party: null },
    ],
  },

  'Bloomfield Twp (Missaukee)': {
    name: 'Bloomfield Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/bloomfield_township/index.php',
    officials: [
      { name: 'Tim Bridson', title: 'Supervisor', party: null },
      { name: 'Cherrie Park', title: 'Clerk', party: null },
      { name: 'Helen Potter', title: 'Treasurer', party: null },
      { name: 'Justin Stauffer', title: 'Trustee', party: null },
      { name: 'Clint Bridson', title: 'Trustee', party: null },
    ],
  },

  'Butterfield Twp (Missaukee)': {
    name: 'Butterfield Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/butterfield_township/index.php',
    officials: [
      { name: 'Mike Rockey', title: 'Supervisor', party: null },
      { name: 'Marilyn Myers', title: 'Clerk', party: null },
      { name: 'Carrie Creger', title: 'Treasurer', party: null },
      { name: 'Jan Hose', title: 'Trustee', party: null },
      { name: 'George Davis', title: 'Trustee', party: null },
    ],
  },

  'Caldwell Twp (Missaukee)': {
    name: 'Caldwell Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/caldwell_township/index.php',
    officials: [
      { name: 'Mike Lutke', title: 'Supervisor', party: null },
      { name: 'Shelley Sloat', title: 'Clerk', party: null },
      { name: 'Dani Lutke', title: 'Treasurer', party: null },
      { name: 'Clayton Paul Helsel Jr.', title: 'Trustee', party: null },
      { name: 'Brad Birgy', title: 'Trustee', party: null },
    ],
  },

  'Clam Union': {
    name: 'Clam Union Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/clam_union_township/index.php',
    officials: [
      { name: 'Mark DeZeeuw', title: 'Supervisor', party: null },
      { name: 'Steve Ebels', title: 'Clerk', party: null },
      { name: 'Bob Ebels', title: 'Treasurer', party: null },
      { name: 'Rich Herweyer', title: 'Trustee', party: null },
      { name: 'Judy Jenema', title: 'Trustee', party: null },
    ],
  },

  'Enterprise Twp (Missaukee)': {
    name: 'Enterprise Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/enterprise_township/index.php',
    officials: [
      { name: 'Wyatt Howey', title: 'Supervisor', party: null },
      { name: 'Lynn Pope', title: 'Clerk', party: null },
      { name: 'Carla Baumgardner', title: 'Treasurer', party: null },
      { name: 'Demi Westmaas', title: 'Trustee', party: null },
      { name: 'Kathy Hamel', title: 'Trustee', party: null },
    ],
  },

  'Forest Twp (Missaukee)': {
    name: 'Forest Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/forest_township/index.php',
    officials: [
      { name: 'Samantha Peery', title: 'Supervisor', party: null },
      { name: 'Leann Vokes', title: 'Clerk', party: null },
      { name: 'Jennifer Jones', title: 'Treasurer', party: null },
      { name: 'Duane Baldwin', title: 'Trustee', party: null },
      { name: 'Ryan Luhrs', title: 'Trustee', party: null },
    ],
  },

  'Holland Twp (Missaukee)': {
    name: 'Holland Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/holland_township/index.php',
    officials: [
      { name: 'Robert Warson', title: 'Supervisor', party: null },
      { name: 'Donna Bode', title: 'Clerk', party: null },
      { name: 'Madelaine Hunter', title: 'Treasurer', party: null },
      { name: 'Todd Wallington', title: 'Trustee', party: null },
      { name: 'Shirley Kregear', title: 'Trustee', party: null },
    ],
  },

  'Lake Twp (Missaukee)': {
    name: 'Lake Township',
    county: 'Missaukee',
    website: 'https://laketownshipmissaukee.com/',
    officials: [
      { name: 'Robert Hall', title: 'Supervisor', party: null },
      { name: 'Korinda Winkelmann', title: 'Clerk', party: null },
      { name: 'Rebecca Gaines', title: 'Treasurer', party: null },
      { name: 'Carol Bradley', title: 'Trustee', party: null },
      { name: 'Randy Norman', title: 'Trustee', party: null },
    ],
  },

  'Norwich Twp (Missaukee)': {
    name: 'Norwich Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/norwich_township/index.php',
    officials: [
      { name: 'Lois Whipple', title: 'Supervisor', party: null },
      { name: 'Heather Klein', title: 'Clerk', party: null },
      { name: 'Dawn Jones', title: 'Treasurer', party: null },
      { name: 'Jason McCoy', title: 'Trustee', party: null },
      { name: 'Susan Lehr', title: 'Trustee', party: null },
    ],
  },

  'Pioneer Twp (Missaukee)': {
    name: 'Pioneer Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/pioneer_township/index.php',
    officials: [
      { name: 'Emily Alexander', title: 'Supervisor', party: null },
      { name: 'Karen Emond', title: 'Clerk', party: null },
      { name: 'Anna Crane', title: 'Treasurer', party: null },
      { name: 'Carol Chaffee', title: 'Trustee', party: null },
      { name: 'Eric Wickstrom', title: 'Trustee', party: null },
    ],
  },

  'Reeder': {
    name: 'Reeder Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/reeder_township/index.php',
    officials: [
      { name: 'Joshua Pellow', title: 'Supervisor', party: null },
      { name: 'Ann Roberts', title: 'Clerk', party: null },
      { name: 'Elaine Gallop', title: 'Treasurer', party: null },
      { name: 'William Roberts', title: 'Trustee', party: null },
      { name: 'Marcia Rackov', title: 'Trustee', party: null },
    ],
  },

  'Richland Twp (Missaukee)': {
    name: 'Richland Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/richland_township/index.php',
    officials: [
      { name: 'Greg Buning', title: 'Supervisor', party: null },
      { name: 'Sarah Lutke', title: 'Clerk', party: null },
      { name: 'Darla Kars', title: 'Treasurer', party: null },
      { name: 'Douglas Benthem', title: 'Trustee', party: null },
      { name: 'Jonathon Schierbeek', title: 'Trustee', party: null },
    ],
  },

  'Riverside Twp (Missaukee)': {
    name: 'Riverside Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/riverside_township/index.php',
    officials: [
      { name: 'David Rozeveld', title: 'Supervisor', party: null },
      { name: 'Jill Geeseman', title: 'Clerk', party: null },
      { name: 'Barbara Henrickson', title: 'Treasurer', party: null },
      { name: 'Kenneth Heuker', title: 'Trustee', party: null },
      { name: 'Gordon Rozeveld', title: 'Trustee', party: null },
    ],
  },

  'West Branch Twp (Missaukee)': {
    name: 'West Branch Township',
    county: 'Missaukee',
    website: 'https://www.missaukee.org/government/local_governments/west_branch_township/index.php',
    officials: [
      { name: 'Kevin Travelbee', title: 'Supervisor', party: null },
      { name: 'Yvonne R. Ahrens', title: 'Clerk', party: null },
      { name: 'Karrie Loney', title: 'Treasurer', party: null },
      { name: 'Jeannie Wilton', title: 'Trustee', party: null },
      { name: 'Samantha Musselman', title: 'Trustee', party: null },
    ],
  },

  /* ── Clare County townships ── */

  Arthur: {
    name: 'Arthur Township',
    county: 'Clare',
    website: 'https://arthurtownshipmi.com',
    phone: '989-429-5525',
    officials: [
      { name: 'Matthew Bednorek', title: 'Supervisor', party: null },
      { name: 'Janice LaRose', title: 'Clerk', party: null },
      { name: 'Anna Sharp', title: 'Treasurer', party: null },
      { name: 'Joy Kleinhardt', title: 'Trustee', party: null },
      { name: 'Jerry Willford', title: 'Trustee', party: null },
    ],
  },

  Franklin: {
    name: 'Franklin Township',
    county: 'Clare',
    website: 'https://www.franklin-twp.com',
    phone: '989-429-9786',
    officials: [
      { name: 'Ed Erskine', title: 'Supervisor', party: null },
      { name: 'Shelly Schultz', title: 'Clerk', party: null },
      { name: 'Sandy Scherrer', title: 'Treasurer', party: null },
      { name: 'Therese Haley', title: 'Trustee', party: null },
      { name: 'Jackie Ecklin', title: 'Trustee', party: null },
    ],
  },

  Freeman: {
    name: 'Freeman Township',
    county: 'Clare',
    website: 'https://freemantwp.com',
    phone: '989-588-2752',
    officials: [
      { name: 'Doug Johnson', title: 'Supervisor', party: null },
      { name: 'Cindy LaFave', title: 'Clerk', party: null },
      { name: 'Janet Lackie', title: 'Treasurer', party: null },
      { name: 'Sheyla Young', title: 'Trustee', party: null },
      { name: 'Robert Eckardt', title: 'Trustee', party: null },
    ],
  },

  Frost: {
    name: 'Frost Township',
    county: 'Clare',
    website: 'https://www.frosttownship.com',
    phone: '989-630-9038',
    officials: [
      { name: 'Marion Coon', title: 'Supervisor', party: null },
      { name: 'Joan Rattray', title: 'Clerk', party: null },
      { name: 'Janet Spencer', title: 'Treasurer', party: null },
      { name: 'Virginia Hogan', title: 'Trustee', party: null },
      { name: 'Janae Veite', title: 'Trustee', party: null },
    ],
  },

  'Garfield Twp (Clare)': {
    name: 'Garfield Township',
    county: 'Clare',
    website: 'https://www.garfieldtownship-cc.com',
    phone: '989-544-2445',
    officials: [
      { name: 'David Byl', title: 'Supervisor', party: null },
      { name: 'Denise K. Hicks', title: 'Clerk', party: null },
      { name: 'Robin A. Yarhouse', title: 'Treasurer', party: null },
      { name: 'James Lard', title: 'Trustee', party: null },
      { name: 'Lisa Roland', title: 'Trustee', party: null },
    ],
  },

  'Grant Twp (Clare)': {
    name: 'Grant Township',
    county: 'Clare',
    website: 'https://grant-township.org',
    officials: [
      { name: 'John Lake', title: 'Supervisor', party: null },
      { name: 'Tammy Teall', title: 'Clerk', party: null },
      { name: 'Brendan Gregory', title: 'Treasurer', party: null },
      { name: 'Linda Gilmore', title: 'Trustee', party: null },
      { name: 'David Isaac', title: 'Trustee', party: null },
    ],
  },

  'Greenwood Twp (Clare)': {
    name: 'Greenwood Township',
    county: 'Clare',
    website: 'https://www.greenwoodtownship.org',
    officials: [
      { name: 'Jess McClaughry', title: 'Supervisor', party: null },
      { name: 'Rachel Mackson', title: 'Clerk', party: null },
      { name: 'Lorie Fliegel', title: 'Treasurer', party: null },
      { name: 'Gail Garrity', title: 'Trustee', party: null },
      { name: 'Bronwyn Asplund', title: 'Trustee', party: null },
    ],
  },

  Hamilton: {
    name: 'Hamilton Township',
    county: 'Clare',
    website: 'https://hamiltontwp.us',
    phone: '989-487-4164',
    officials: [
      { name: 'Tom Vaughn', title: 'Supervisor', party: null },
      { name: 'Andrea Wallace', title: 'Clerk', party: null },
      { name: 'Denise Goodenow', title: 'Treasurer', party: null },
      { name: 'Mike Conway', title: 'Trustee', party: null },
      { name: 'Mike Iutzi', title: 'Trustee', party: null },
    ],
  },

  Hatton: {
    name: 'Hatton Township',
    county: 'Clare',
    website: 'https://www.hattontownship.com',
    phone: '989-600-1495',
    officials: [
      { name: 'Bill Hileman', title: 'Supervisor', party: null },
      { name: 'Linda McClain', title: 'Clerk', party: null },
      { name: 'Molly Humphrey', title: 'Treasurer', party: null },
      { name: 'Nathanael Farrell', title: 'Trustee', party: null },
      { name: 'William Guiette', title: 'Trustee', party: null },
    ],
  },

  Hayes: {
    name: 'Hayes Township',
    county: 'Clare',
    website: 'https://hayestwpclaremi.gov',
    phone: '989-539-7128',
    officials: [
      { name: 'Brendan Powell', title: 'Supervisor', party: null },
      { name: 'Debra Hoyt', title: 'Clerk', party: null },
      { name: 'Savannah Cavanaugh', title: 'Treasurer', party: null },
      { name: 'Rob McKay', title: 'Trustee', party: null },
      { name: 'Robert Buckley', title: 'Trustee', party: null },
    ],
  },

  'Lincoln Twp (Clare)': {
    name: 'Lincoln Township',
    county: 'Clare',
    website: 'https://www.lincolntwp.com',
    phone: '989-588-9841',
    officials: [
      { name: 'Troy L. Kibbey', title: 'Supervisor', party: null },
      { name: 'Carol L. Majewski', title: 'Clerk', party: null },
      { name: 'Maggie Carey', title: 'Treasurer', party: null },
      { name: 'Jeff Simons', title: 'Trustee', party: null },
      { name: 'Mike Tobin', title: 'Trustee', party: null },
    ],
  },

  Redding: {
    name: 'Redding Township',
    county: 'Clare',
    website: 'https://reddingtownship.net',
    phone: '231-743-9525',
    officials: [
      { name: 'Billie Wrubel', title: 'Supervisor', party: null },
      { name: 'Brooke Daniels', title: 'Clerk (Deputy, acting)', party: null },
      /* Note: Clerk, Treasurer, and one Trustee positions vacated late 2025 due to mass resignations. Contact township for current status. */
    ],
  },

  'Sheridan Twp (Clare)': {
    name: 'Sheridan Township',
    county: 'Clare',
    website: 'https://www.sheridantwpclareco.com',
    officials: [
      { name: 'William Ray Strouse', title: 'Supervisor', party: 'Republican' },
      { name: 'Raquel Brown', title: 'Clerk', party: 'Republican' },
      { name: 'Jennifer L. Magnus', title: 'Treasurer', party: 'Republican' },
      { name: 'James Eberhart', title: 'Trustee', party: 'Republican' },
      { name: 'Brian J. Tomaski', title: 'Trustee', party: 'Republican' },
    ],
  },

  Summerfield: {
    name: 'Summerfield Township',
    county: 'Clare',
    website: 'https://summerfieldtwp.org',
    phone: '989-539-2501',
    officials: [
      { name: 'Dan Wilhelm', title: 'Supervisor', party: null },
      { name: 'Jaclyn Hall', title: 'Clerk', party: null },
      { name: 'Sheri Levy', title: 'Treasurer', party: null },
      { name: 'Scott Losey', title: 'Trustee', party: null },
      { name: 'James (Dean) Smith', title: 'Trustee', party: null },
    ],
  },

  Surrey: {
    name: 'Surrey Township',
    county: 'Clare',
    website: 'https://www.surreytownship.com',
    phone: '989-588-6691',
    officials: [
      { name: 'Mike Coon', title: 'Supervisor', party: null },
      { name: 'Glenna Bradbury', title: 'Clerk', party: null },
      { name: 'Mindy Campbell', title: 'Treasurer', party: null },
      { name: 'Dixie Adams', title: 'Trustee', party: null },
      { name: 'Paul Ghinelli', title: 'Trustee', party: null },
    ],
  },

  Winterfield: {
    name: 'Winterfield Township',
    county: 'Clare',
    website: 'https://www.winterfieldtownship.org',
    phone: '231-878-2745',
    officials: [
      { name: 'Shelly Laughlin', title: 'Supervisor', party: null },
      { name: 'Dianna Powell-Reid', title: 'Clerk', party: null },
      { name: 'Linda Peterson', title: 'Treasurer', party: null },
      { name: 'Fred Prielipp', title: 'Trustee', party: null },
      { name: 'Carl Traynor', title: 'Trustee', party: null },
    ],
  },

  /* ── Crawford County townships ── */

  'Beaver Creek': {
    name: 'Beaver Creek Township',
    county: 'Crawford',
    website: 'http://www.beavercreektownship.com/',
    officials: [
      { name: 'Kim VanNuck', title: 'Supervisor', party: null },
      { name: 'Jill Peacock', title: 'Clerk', party: null },
      { name: 'Hope Francis', title: 'Treasurer', party: null },
      { name: 'Mary Dent', title: 'Trustee', party: null },
      { name: 'Steve Nelson', title: 'Trustee', party: null },
    ],
  },

  'Frederic': {
    name: 'Frederic Township',
    county: 'Crawford',
    website: 'https://www.frederictownship.org/',
    officials: [
      { name: 'Brandon M. Gabriel', title: 'Supervisor', party: null },
      { name: 'Amanda L. Siwecki', title: 'Clerk', party: null },
      { name: 'Karen M. Dawson', title: 'Treasurer', party: null },
      { name: 'Randy Richardson', title: 'Trustee', party: null },
      { name: 'Donald Weaver', title: 'Trustee', party: null },
    ],
  },

  'Grayling Twp': {
    name: 'Grayling Charter Township',
    county: 'Crawford',
    website: 'https://twp.grayling.mi.us/',
    officials: [
      { name: 'Lacey D. Stephan III', title: 'Supervisor', party: null },
      { name: 'Diane Giska', title: 'Clerk', party: null },
      { name: 'Brenda Wargo', title: 'Treasurer', party: null },
      { name: 'Joe Smock', title: 'Trustee', party: null },
      { name: 'Shannon Sorenson', title: 'Trustee', party: null },
      { name: 'Jeri Seithoffer', title: 'Trustee', party: null },
      { name: 'JoAnn Michal', title: 'Trustee', party: null },
    ],
  },

  'Lovells': {
    name: 'Lovells Township',
    county: 'Crawford',
    website: 'https://lovellsmi.org/',
    officials: [
      { name: 'Richard Wright', title: 'Supervisor', party: null },
      { name: 'Janet Dunning', title: 'Clerk', party: null },
      { name: 'Tamara Kengel', title: 'Treasurer', party: null },
      { name: 'Cheryl Hopp', title: 'Trustee', party: null },
      { name: 'Gary Neumann', title: 'Trustee', party: null },
    ],
  },

  'Maple Forest': {
    name: 'Maple Forest Township',
    county: 'Crawford',
    website: 'http://www.mapleforest.org/',
    officials: [
      { name: 'Thomas L. Coors', title: 'Supervisor', party: null },
      { name: 'April Hehir', title: 'Clerk', party: null },
      { name: 'Denise M. Joseph', title: 'Treasurer', party: null },
      { name: 'Phyllis Desprez', title: 'Trustee', party: null },
      { name: 'Connie Meyer', title: 'Trustee', party: null },
    ],
  },

  'South Branch': {
    name: 'South Branch Township',
    county: 'Crawford',
    website: 'http://www.southbranchtownship.com/',
    officials: [
      { name: 'Anna Sylvester', title: 'Supervisor', party: null },
      { name: 'Brenda Nelson', title: 'Clerk', party: null },
      { name: 'Cathy Lewis', title: 'Treasurer', party: null },
      { name: 'Michael Janisse', title: 'Trustee', party: null },
      { name: 'Scott Barritt', title: 'Trustee', party: null },
    ],
  },

  /* ── Presque Isle County townships ── */

  'Allis': {
    name: 'Allis Township',
    county: 'Presque Isle',
    officials: [
      { name: 'Richard R. Nash', title: 'Supervisor', party: 'Republican' },
      { name: 'Teresa Splan', title: 'Clerk', party: 'Republican' },
      { name: 'David Schmoldt', title: 'Treasurer', party: 'Independent' },
      { name: 'Mark E. Dean', title: 'Trustee', party: 'Republican' },
      { name: 'Trevor Most', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Bearinger': {
    name: 'Bearinger Township',
    county: 'Presque Isle',
    website: 'https://bearingertownship.org',
    officials: [
      { name: 'Cheryl Watt', title: 'Supervisor', party: null },
      { name: 'Frances Kline', title: 'Clerk', party: null },
      { name: 'James Watt', title: 'Treasurer', party: 'Republican' },
      { name: 'Lee Stawiarski', title: 'Trustee', party: 'Republican' },
      { name: 'Emilie Stawiarski', title: 'Trustee', party: null },
    ],
  },
  'Belknap': {
    name: 'Belknap Township',
    county: 'Presque Isle',
    website: 'https://belknaptownship.org',
    officials: [
      { name: 'Toby Kuznicki', title: 'Supervisor', party: 'Independent' },
      { name: 'Danielle Wirgau', title: 'Clerk', party: 'Republican' },
      { name: 'Candy Peltz', title: 'Treasurer', party: 'Republican' },
      { name: 'Robert Hopp', title: 'Trustee', party: 'Republican' },
      { name: 'Justin Schalk', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Bismarck': {
    name: 'Bismarck Township',
    county: 'Presque Isle',
    officials: [
      { name: 'Lloyd T. Dullack', title: 'Supervisor', party: 'Republican' },
      { name: 'Shelby J. Schwiesow', title: 'Clerk', party: 'Democratic' },
      { name: 'Scott Cordes', title: 'Treasurer', party: 'Republican' },
      { name: 'Russell Martin', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Case': {
    name: 'Case Township',
    county: 'Presque Isle',
    website: 'https://casetownship.org',
    officials: [
      { name: 'Lisa Pochmara', title: 'Supervisor', party: null },
      { name: 'Erin Leach', title: 'Clerk', party: null },
      { name: 'Chuck Lewis', title: 'Treasurer', party: null },
      { name: 'Luke Ellenberger', title: 'Trustee', party: null },
      { name: 'Wendy Brooks', title: 'Trustee', party: null },
    ],
  },
  'Krakow': {
    name: 'Krakow Township',
    county: 'Presque Isle',
    website: 'https://krakowtownship.org',
    officials: [
      { name: 'Michael Grohowski', title: 'Supervisor', party: null },
      { name: 'Elaine M. Misiak', title: 'Clerk', party: null },
      { name: 'Diane Mucciante', title: 'Treasurer', party: null },
      { name: 'Mitchell Mulka', title: 'Trustee', party: null },
      { name: 'Michael T. Smith', title: 'Trustee', party: 'Democratic' },
    ],
  },
  'Metz': {
    name: 'Metz Township',
    county: 'Presque Isle',
    officials: [
      { name: 'Nyle R. Wickersham', title: 'Supervisor', party: 'Independent' },
      { name: 'Nancy Kandow', title: 'Clerk', party: 'Democratic' },
      { name: 'Andrea L. Konwinski', title: 'Treasurer', party: 'Republican' },
      { name: 'Thomas R. Hein', title: 'Trustee', party: 'Democratic' },
      { name: 'Louis J. Urban', title: 'Trustee', party: 'Democratic' },
    ],
  },
  'Moltke': {
    name: 'Moltke Township',
    county: 'Presque Isle',
    officials: [
      { name: 'Neil Sorgenfrei', title: 'Supervisor', party: 'Republican' },
      { name: 'Edith Kerr', title: 'Clerk', party: 'Independent' },
      { name: 'Christine Idalski', title: 'Treasurer', party: 'Republican' },
      { name: 'Andrew LaLonde', title: 'Trustee', party: 'Republican' },
      { name: 'Timothy Sorgenfrei', title: 'Trustee', party: 'Republican' },
    ],
  },
  'North Allis': {
    name: 'North Allis Township',
    county: 'Presque Isle',
    officials: [
      { name: 'Dean Tebo', title: 'Supervisor', party: 'Republican' },
      { name: 'Roberta Northcott', title: 'Clerk', party: 'Republican' },
      { name: 'Kristin Tebo', title: 'Treasurer', party: 'Independent' },
      { name: 'David Kolasa', title: 'Trustee', party: 'Republican' },
      { name: 'Timothy J. George', title: 'Trustee', party: 'Independent' },
    ],
  },
  'Ocqueoc': {
    name: 'Ocqueoc Township',
    county: 'Presque Isle',
    website: 'https://ocqueoctwpmi.gov',
    officials: [
      { name: 'Jerry Counterman', title: 'Supervisor', party: null },
      { name: 'Pamela S. Schaedig', title: 'Clerk', party: null },
      { name: 'Shari Pomranke', title: 'Treasurer', party: null },
      { name: 'Joel Jaroch', title: 'Trustee', party: null },
      { name: 'Jerome Isaacs', title: 'Trustee', party: null },
    ],
  },
  'Posen Twp': {
    name: 'Posen Township',
    county: 'Presque Isle',
    officials: [
      { name: 'James Zakshesky', title: 'Supervisor', party: 'Republican' },
      { name: 'Elizabeth Wozniak', title: 'Clerk', party: 'Republican' },
      { name: 'Lorraine Smigelski', title: 'Treasurer', party: 'Democratic' },
      { name: 'Terry Buczkowski', title: 'Trustee', party: 'Republican' },
      { name: 'Steven Hentkowski', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Presque Isle Twp': {
    name: 'Presque Isle Township',
    county: 'Presque Isle',
    website: 'https://presqueisletwp.org',
    officials: [
      { name: 'Stephen Lang', title: 'Supervisor', party: null },
      { name: 'Kate Szydlowski', title: 'Clerk', party: null },
      { name: 'Jennifer Wieczorkowski', title: 'Treasurer', party: null },
      { name: 'Mark Devers', title: 'Trustee', party: null },
      { name: "Mary O'Neill", title: 'Trustee', party: null },
    ],
  },
  'Pulawski': {
    name: 'Pulawski Township',
    county: 'Presque Isle',
    officials: [
      { name: 'Martha Roznowski', title: 'Supervisor', party: 'Democratic' },
      { name: 'Becky Strzelecki', title: 'Clerk', party: 'Republican' },
      { name: 'Carleen Darga', title: 'Treasurer', party: 'Democratic' },
      { name: 'Bonnie Strzelecki', title: 'Trustee', party: 'Republican' },
      { name: 'Allen Ciarkowski', title: 'Trustee', party: 'Independent' },
    ],
  },
  'Rogers Twp': {
    name: 'Rogers Township',
    county: 'Presque Isle',
    officials: [
      { name: 'Randall Smolinski', title: 'Supervisor', party: 'Democratic' },
      { name: 'Kari Ryan', title: 'Clerk', party: 'Republican' },
      { name: 'Jessica Peacock', title: 'Treasurer', party: 'Republican' },
      { name: 'David R. Grulke', title: 'Trustee', party: 'Republican' },
      { name: 'Malcolm F. Lamp', title: 'Trustee', party: 'Republican' },
    ],
  },

  /* ── Midland County townships ── */

  'Edenville Twp (Midland)': {
    name: 'Edenville Township',
    county: 'Midland',
    website: 'https://www.edenvilletwp.org',
    officials: [
      { name: 'Art Peters', title: 'Supervisor', party: null },
      { name: 'Tamie M. Luty', title: 'Clerk', party: null },
      { name: 'Kathy Peters', title: 'Treasurer', party: null },
      { name: 'Jim Sperling', title: 'Trustee', party: null },
      { name: 'Crystal Starkey', title: 'Trustee', party: null },
    ],
  },
  'Geneva Twp (Midland)': {
    name: 'Geneva Township',
    county: 'Midland',
    website: 'https://genevatwpmidlandcounty.com',
    officials: [
      { name: 'Joshua J. Murray', title: 'Supervisor', party: null },
      { name: 'Carla J. Murray', title: 'Clerk', party: null },
      { name: 'Nancy J. Robison', title: 'Treasurer', party: null },
      { name: 'Neil Berthume', title: 'Trustee', party: null },
      { name: 'Jeremy D. Longstreth', title: 'Trustee', party: null },
    ],
  },
  'Greendale Twp (Midland)': {
    name: 'Greendale Township',
    county: 'Midland',
    website: 'https://greendaletwpmidcomi.org',
    officials: [
      { name: 'Brian J. Knopp', title: 'Supervisor', party: null },
      { name: 'Ruth L. Knapp', title: 'Clerk', party: null },
      { name: 'Angela Brown', title: 'Treasurer', party: null },
      { name: 'Julia Ann Beach', title: 'Trustee', party: null },
      { name: 'Bridget Elkins', title: 'Trustee', party: null },
    ],
  },
  'Homer Twp (Midland)': {
    name: 'Homer Township',
    county: 'Midland',
    website: 'https://www.homertownship.org',
    officials: [
      { name: 'Russ Varner', title: 'Supervisor', party: null },
      { name: 'Todd A. Lee', title: 'Clerk', party: null },
      { name: 'Sandra K. Turk', title: 'Treasurer', party: null },
      { name: 'Keith Johnson', title: 'Trustee', party: null },
      { name: 'Craig Norton', title: 'Trustee', party: null },
      { name: 'John A. Pruiett', title: 'Trustee', party: null },
      { name: 'Brian VanWert', title: 'Trustee', party: null },
    ],
  },
  'Hope Twp (Midland)': {
    name: 'Hope Township',
    county: 'Midland',
    website: 'https://hopetwp.org',
    officials: [
      { name: 'Rita Goul', title: 'Supervisor', party: null },
      { name: 'Carol Coyle', title: 'Clerk', party: null },
      { name: 'Charles R. Hudler', title: 'Treasurer', party: null },
      { name: 'Wendy J. Faber', title: 'Trustee', party: null },
      { name: 'Dan Mieske', title: 'Trustee', party: null },
    ],
  },
  'Ingersoll Twp (Midland)': {
    name: 'Ingersoll Township',
    county: 'Midland',
    website: 'https://ingersolltwpmi.gov',
    officials: [
      { name: 'Kim D. Heisler', title: 'Supervisor', party: null },
      { name: 'Mary Ellen Keel', title: 'Clerk', party: null },
      { name: 'James R. Terwillegar', title: 'Treasurer', party: null },
      { name: 'Ron Garrett', title: 'Trustee', party: null },
      { name: 'Jacob Terwillegar', title: 'Trustee', party: null },
    ],
  },
  'Jasper Twp (Midland)': {
    name: 'Jasper Township',
    county: 'Midland',
    officials: [
      { name: 'Carmen Kay Bajena', title: 'Supervisor', party: null },
      { name: 'Kristina DeBolt', title: 'Clerk', party: null },
      { name: 'Katelynn Hernandez', title: 'Treasurer', party: null },
      { name: 'Roxanne R. Gibson', title: 'Trustee', party: null },
      { name: 'Deric Wright', title: 'Trustee', party: null },
    ],
  },
  'Jerome Twp (Midland)': {
    name: 'Jerome Township',
    county: 'Midland',
    website: 'https://www.jerometownship.org',
    officials: [
      { name: 'Steve Rice', title: 'Supervisor', party: null },
      { name: 'Gil Bernier', title: 'Clerk', party: null },
      { name: 'Jennifer Clever', title: 'Treasurer', party: null },
      { name: 'Mark Green', title: 'Trustee', party: null },
      { name: 'Carolyn Konechne', title: 'Trustee', party: null },
      { name: 'Laura Norcutt', title: 'Trustee', party: null },
      { name: 'Sarah Jo Rowley', title: 'Trustee', party: null },
    ],
  },
  'Larkin Twp (Midland)': {
    name: 'Charter Township of Larkin',
    county: 'Midland',
    website: 'https://www.larkintownship.org',
    officials: [
      { name: 'Maria Sandow', title: 'Supervisor', party: null },
      { name: 'Lisa Benter Rich', title: 'Clerk', party: null },
      { name: 'Mandy Archbold', title: 'Treasurer', party: null },
      { name: 'Todd Draves', title: 'Trustee', party: null },
      { name: 'Karen Hitchcock', title: 'Trustee', party: null },
    ],
  },
  'Lee Twp (Midland)': {
    name: 'Lee Township',
    county: 'Midland',
    website: 'https://leetownshipmidlandmi.gov',
    officials: [
      { name: 'Doug Kruger', title: 'Supervisor', party: null },
      { name: 'Laura Dawson', title: 'Clerk', party: null },
      { name: 'Heidi Pitt', title: 'Treasurer', party: null },
      { name: 'Mark List', title: 'Trustee', party: null },
      { name: 'Debra Reiber', title: 'Trustee', party: null },
    ],
  },
  'Lincoln Twp (Midland)': {
    name: 'Lincoln Township',
    county: 'Midland',
    website: 'https://www.lincoln-twp.org',
    officials: [
      { name: 'Brett Fales', title: 'Supervisor', party: null },
      { name: 'Barbara L. Wilson', title: 'Clerk', party: null },
      { name: 'Kimberly Oswald', title: 'Treasurer', party: null },
      { name: 'Nate Meredith', title: 'Trustee', party: null },
      { name: 'Brad Wirtz', title: 'Trustee', party: null },
    ],
  },
  'Midland Twp (Midland)': {
    name: 'Midland Township',
    county: 'Midland',
    website: 'https://midlandtownship.net',
    officials: [
      { name: 'Terry Holt', title: 'Supervisor', party: null },
      { name: 'Shelly Armstrong-Miller', title: 'Clerk', party: null },
      { name: 'Mark J. Radosa', title: 'Treasurer', party: null },
      { name: 'James R. Avery', title: 'Trustee', party: null },
      { name: 'Jeff Bourcier', title: 'Trustee', party: null },
      { name: 'Paul J. Heyse', title: 'Trustee', party: null },
      { name: 'Haley Wenzlick', title: 'Trustee', party: null },
    ],
  },
  'Mills Twp (Midland)': {
    name: 'Mills Township',
    county: 'Midland',
    website: 'https://millstownship.org',
    officials: [
      { name: 'Ron Kutchey', title: 'Supervisor', party: null },
      { name: 'Kim Sweet', title: 'Clerk', party: null },
      { name: 'Sara L. Pitch', title: 'Treasurer', party: null },
      { name: 'Amy Hoover', title: 'Trustee', party: null },
      { name: 'Alan L. Wendt', title: 'Trustee', party: null },
    ],
  },
  'Mount Haley Twp (Midland)': {
    name: 'Mount Haley Township',
    county: 'Midland',
    website: 'https://mthaleytwp.com',
    officials: [
      { name: 'Kennith D. Brown', title: 'Supervisor', party: null },
      { name: 'Karen L. Radosa', title: 'Clerk', party: null },
      { name: 'Leonard A. Breasbois', title: 'Treasurer', party: null },
      { name: 'Kevin Mudd', title: 'Trustee', party: null },
      { name: 'Nicholas Pelton', title: 'Trustee', party: null },
    ],
  },
  'Porter Twp (Midland)': {
    name: 'Porter Township',
    county: 'Midland',
    officials: [
      { name: 'Thomas J. Corbat', title: 'Supervisor', party: null },
      { name: 'Marianne L. Corbat', title: 'Clerk', party: null },
      { name: 'Pamela Garcia', title: 'Treasurer', party: null },
      { name: 'Correy Colthorp', title: 'Trustee', party: null },
      { name: 'Nancy McCallum', title: 'Trustee', party: null },
    ],
  },
  'Warren Twp (Midland)': {
    name: 'Warren Township',
    county: 'Midland',
    website: 'https://www.warrentownshipmi.com',
    officials: [
      { name: 'Emily Burgess', title: 'Supervisor', party: null },
      { name: 'Linda S. Anthony', title: 'Clerk', party: null },
      { name: 'Lyndsy Bock', title: 'Treasurer', party: null },
      { name: 'Bella Harsh', title: 'Trustee', party: null },
      { name: 'Blaine Yeager', title: 'Trustee', party: null },
    ],
  },

  /* ── Kalkaska County townships ── */

  'Bear Lake': {
    name: 'Bear Lake Township',
    county: 'Kalkaska',
    website: 'https://www.bearlaketownship.org',
    phone: '231-258-4871',
    officials: [
      { name: 'Bud Banker', title: 'Supervisor', party: null },
      { name: 'Dawn Dannenberg', title: 'Clerk', party: null },
      { name: 'Beth Redmond', title: 'Treasurer', party: null },
      { name: 'Jim Knight', title: 'Trustee', party: null },
      { name: 'Bob Dixon', title: 'Trustee', party: null },
    ],
  },
  'Blue Lake Twp (Kalkaska)': {
    name: 'Blue Lake Township',
    county: 'Kalkaska',
    website: 'https://www.bluelaketwpkalkaska.gov',
    phone: '231-587-8354',
    officials: [
      { name: 'Todd Fletemier', title: 'Supervisor', party: null },
      { name: 'Tracy Nichol', title: 'Clerk', party: null },
      { name: 'Christine Almose', title: 'Treasurer', party: null },
      { name: 'Todd Brozovich', title: 'Trustee', party: null },
      { name: 'Larry Shoemaker', title: 'Trustee', party: null },
    ],
  },
  'Boardman Twp (Kalkaska)': {
    name: 'Boardman Township',
    county: 'Kalkaska',
    website: 'https://boardmantownshipmi.net',
    phone: '231-369-2856',
    officials: [
      { name: 'Paul Erickson', title: 'Supervisor', party: null },
      { name: 'Tonya Hart', title: 'Clerk', party: null },
      { name: 'Kathleen Chaffee', title: 'Treasurer', party: null },
      { name: 'Holly Hart', title: 'Trustee', party: null },
      { name: 'Bryan Byrne', title: 'Trustee', party: null },
    ],
  },
  'Clearwater Twp (Kalkaska)': {
    name: 'Clearwater Township',
    county: 'Kalkaska',
    website: 'https://www.clearwatertwp.com',
    phone: '231-331-6249',
    officials: [
      { name: 'Jim Leffew', title: 'Supervisor', party: null },
      { name: 'Christine Johnson', title: 'Clerk', party: null },
      { name: 'Michelle Jackson', title: 'Treasurer', party: null },
    ],
  },
  'Coldsprings Twp (Kalkaska)': {
    name: 'Coldsprings Township',
    county: 'Kalkaska',
    website: 'https://www.coldspringstownshipmi.gov',
    phone: '231-587-8633',
    officials: [
      { name: 'Rick Delaney', title: 'Supervisor', party: null },
      { name: 'Danielle Stein-Seabolt', title: 'Clerk', party: null },
      { name: 'Dawn Moses', title: 'Treasurer', party: null },
      { name: 'Patrick Eavey', title: 'Trustee', party: null },
      { name: 'Gayenell Gentelia', title: 'Trustee', party: null },
    ],
  },
  'Excelsior Twp (Kalkaska)': {
    name: 'Excelsior Township',
    county: 'Kalkaska',
    website: 'https://www.excelsiortownship.org',
    phone: '231-258-6108',
    officials: [
      { name: 'Richard VanBeek', title: 'Supervisor', party: null },
      { name: 'Annie Wallace', title: 'Clerk', party: null },
      { name: 'Nina Cotton', title: 'Treasurer', party: null },
      { name: 'Norman Groner', title: 'Trustee', party: null },
      { name: 'Daniel Prokup', title: 'Trustee', party: null },
    ],
  },
  'Garfield Twp (Kalkaska)': {
    name: 'Garfield Township',
    county: 'Kalkaska',
    website: 'https://garfieldtwsp.com',
    phone: '231-369-2483',
    officials: [
      { name: 'Todd Jones', title: 'Supervisor', party: null },
      { name: 'Brett Southworth', title: 'Clerk', party: null },
      { name: 'Terri Sibole', title: 'Treasurer', party: null },
      { name: 'Bryan Moore', title: 'Trustee', party: null },
      { name: 'Eric Rohn', title: 'Trustee', party: null },
    ],
  },
  'Kalkaska Twp (Kalkaska)': {
    name: 'Kalkaska Township',
    county: 'Kalkaska',
    website: 'https://www.kalkaskatownship.net',
    phone: '231-258-3300',
    officials: [
      { name: 'John Arnold', title: 'Supervisor', party: null },
      { name: 'Kristina Swikoski', title: 'Clerk', party: null },
      { name: 'Dawn Kuhns', title: 'Treasurer', party: null },
      { name: 'Mike Fitch', title: 'Trustee', party: null },
      { name: 'Cari Jo Roberts', title: 'Trustee', party: null },
    ],
  },
  'Oliver Twp (Kalkaska)': {
    name: 'Oliver Township',
    county: 'Kalkaska',
    website: 'http://www.olivertwp.net',
    phone: '231-258-2711',
    officials: [
      { name: 'Mike Cox', title: 'Supervisor', party: null },
      { name: 'Alexa Szymchack', title: 'Clerk', party: null },
      { name: 'Debbie Bishop', title: 'Treasurer', party: null },
      { name: 'Janet Cox', title: 'Trustee', party: null },
      { name: 'Mike Fisher', title: 'Trustee', party: null },
    ],
  },
  'Orange Twp (Kalkaska)': {
    name: 'Orange Township',
    county: 'Kalkaska',
    phone: '231-369-3457',
    officials: [
      { name: 'Trevor Ball', title: 'Supervisor', party: null },
      { name: 'Eric Hendricks', title: 'Clerk', party: null },
      { name: 'Mary Hill', title: 'Treasurer', party: null },
      { name: 'Sue Ball', title: 'Trustee', party: null },
      { name: 'Scott Nelson', title: 'Trustee', party: null },
    ],
  },
  'Rapid River Twp (Kalkaska)': {
    name: 'Rapid River Township',
    county: 'Kalkaska',
    website: 'https://rapidrivertownship.org',
    phone: '231-258-2943',
    officials: [
      { name: 'Terry Williams', title: 'Supervisor', party: null },
      { name: 'Valerie Hansen', title: 'Clerk', party: null },
      { name: 'Rhonda Argyle', title: 'Treasurer', party: null },
      { name: 'Matthew Brenner', title: 'Trustee', party: null },
      { name: 'David McKinnon', title: 'Trustee', party: null },
    ],
  },
  'Springfield Twp (Kalkaska)': {
    name: 'Springfield Township',
    county: 'Kalkaska',
    website: 'https://www.springfieldtownship-kalkaskacounty.org',
    phone: '231-258-4428',
    officials: [
      { name: 'Timothy Birgy', title: 'Supervisor', party: null },
      { name: 'Jodi Thayer', title: 'Clerk', party: null },
      { name: 'Jessica Plude', title: 'Treasurer', party: null },
      { name: 'Charles Jones', title: 'Trustee', party: null },
      { name: 'Barrett Little', title: 'Trustee', party: null },
    ],
  },

  /* ── Cheboygan County townships ── */

  'Aloha': {
    name: 'Aloha Township',
    county: 'Cheboygan',
    website: 'https://www.alohatownship.org',
    officials: [
      { name: 'Charles Maziasz', title: 'Supervisor', party: 'Republican' },
      { name: 'Teresa Sullivan', title: 'Clerk', party: 'Republican' },
      { name: 'Dana Stempky', title: 'Treasurer', party: 'Republican' },
      { name: 'Scott Eno', title: 'Trustee', party: 'Republican' },
      { name: 'Steve Crusoe', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Beaugrand': {
    name: 'Beaugrand Township',
    county: 'Cheboygan',
    website: 'https://beaugrandtwp.org',
    officials: [
      { name: 'Marcia A. Rocheleau', title: 'Supervisor', party: 'Republican' },
      { name: 'Terri Sarrault', title: 'Clerk', party: 'Republican' },
      { name: 'Robin Westfall', title: 'Treasurer', party: 'Republican' },
      { name: 'Myles Fimbinger', title: 'Trustee', party: 'Republican' },
      { name: 'John Wanke', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Benton': {
    name: 'Benton Township',
    county: 'Cheboygan',
    website: 'https://www.bentontwp.org',
    officials: [
      { name: 'Bruce Brandt', title: 'Supervisor', party: 'Republican' },
      { name: 'Carol Neumann', title: 'Clerk', party: 'Independent' },
      { name: 'Jayne Passeno', title: 'Treasurer', party: 'Republican' },
      { name: 'Ron Fenlon', title: 'Trustee', party: 'Republican' },
      { name: 'Pete Redmond', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Burt': {
    name: 'Burt Township',
    county: 'Cheboygan',
    website: 'https://burtcheboyganmi.gov',
    officials: [
      { name: 'Eugene Hodulik', title: 'Supervisor', party: 'Republican' },
      { name: 'Christy Kozlowski', title: 'Clerk', party: 'Republican' },
      { name: 'Carol Reimann', title: 'Treasurer', party: 'Republican' },
      { name: 'Allen Kozlowski', title: 'Trustee', party: 'Republican' },
      { name: 'Katie Parker', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Ellis': {
    name: 'Ellis Township',
    county: 'Cheboygan',
    officials: [
      { name: 'Jim LaPeer', title: 'Supervisor', party: 'Democratic' },
      { name: 'Sheryl Hilliker', title: 'Clerk', party: 'Democratic' },
      { name: 'Carolyn Taglauer', title: 'Treasurer', party: 'Republican' },
      { name: 'Alison Studer', title: 'Trustee', party: 'Republican' },
      { name: 'Adam Taglauer', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Forest': {
    name: 'Forest Township',
    county: 'Cheboygan',
    website: 'https://www.foresttownship.net',
    officials: [
      { name: 'Harry Lee Waldie', title: 'Supervisor', party: 'Republican' },
      { name: 'Melinda Hambleton', title: 'Clerk', party: 'Republican' },
      { name: 'Gerald Hillis Jr.', title: 'Treasurer', party: 'Republican' },
      { name: 'Pam Crowe', title: 'Trustee', party: 'Democratic' },
      { name: 'Dawn Fenstermaker', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Grant Twp (Cheboygan)': {
    name: 'Grant Township',
    county: 'Cheboygan',
    website: 'https://www.granttwp.com',
    officials: [
      { name: 'Gil Archambo', title: 'Supervisor', party: 'Republican' },
      { name: 'Theresa Berden', title: 'Clerk', party: 'Democratic' },
      { name: 'Debi Kuczynski', title: 'Treasurer', party: null },
      { name: 'Eric Boyd', title: 'Trustee', party: 'Democratic' },
      { name: 'Shawna McManus', title: 'Trustee', party: 'Independent' },
    ],
  },
  'Hebron': {
    name: 'Hebron Township',
    county: 'Cheboygan',
    website: 'https://www.hebrontownship.org',
    officials: [
      { name: 'Andrew Beethem', title: 'Supervisor', party: 'Republican' },
      { name: 'Gary Douglas', title: 'Clerk', party: 'Democratic' },
      { name: 'John Douglas', title: 'Treasurer', party: 'Republican' },
      { name: 'Lisa Neelis', title: 'Trustee', party: 'Democratic' },
      { name: 'Judy Schmidt', title: 'Trustee', party: 'Democratic' },
    ],
  },
  'Inverness': {
    name: 'Inverness Township',
    county: 'Cheboygan',
    website: 'https://www.invernesstownship.com',
    officials: [
      { name: 'Todd LaRocque', title: 'Supervisor', party: 'Republican' },
      { name: 'Jennifer Beebe', title: 'Clerk', party: 'Republican' },
      { name: 'Laurie Merchant', title: 'Treasurer', party: 'Republican' },
      { name: 'Greg Borowicz Jr.', title: 'Trustee', party: 'Republican' },
      { name: 'Bernard Schramm Jr.', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Koehler': {
    name: 'Koehler Township',
    county: 'Cheboygan',
    website: 'https://www.koehlertownship.org',
    officials: [
      { name: 'Steven Dubois', title: 'Supervisor', party: null },
      { name: 'Renee Neri', title: 'Clerk', party: null },
      { name: 'Angie Everingham', title: 'Treasurer', party: 'Republican' },
      { name: 'Martha Ehrhardt', title: 'Trustee', party: 'Republican' },
      { name: 'Dana Nutt', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Mackinaw': {
    name: 'Mackinaw Township',
    county: 'Cheboygan',
    website: 'https://www.mackinawtownship.com',
    officials: [
      { name: 'Michael Smydra', title: 'Supervisor', party: 'Republican' },
      { name: 'Ashley Darrow', title: 'Clerk', party: 'Republican' },
      { name: 'Deborah Closs', title: 'Treasurer', party: 'Republican' },
      { name: 'Charles Brew', title: 'Trustee', party: 'Republican' },
      { name: 'Donna Falor', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Mentor': {
    name: 'Mentor Township',
    county: 'Cheboygan',
    website: 'https://mentortownship.org',
    officials: [
      { name: 'Gregory Whittaker', title: 'Supervisor', party: 'Republican' },
      { name: 'Adeena Stahlbuck-Whittaker', title: 'Clerk', party: 'Republican' },
      { name: 'Kathy Mattson', title: 'Treasurer', party: 'Republican' },
      { name: 'Wendy Courneya', title: 'Trustee', party: 'Republican' },
      { name: 'Timothy Torrice', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Mullett': {
    name: 'Mullett Township',
    county: 'Cheboygan',
    website: 'https://mullett-townshipmi.gov',
    officials: [
      { name: 'Laz Surabian', title: 'Supervisor', party: 'Republican' },
      { name: 'Denise Ackerman', title: 'Clerk', party: 'Republican' },
      { name: 'Bobbie Balazovic', title: 'Treasurer', party: 'Republican' },
      { name: 'Mike Goerke', title: 'Trustee', party: 'Republican' },
      { name: 'Brett Lindgren', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Munro': {
    name: 'Munro Township',
    county: 'Cheboygan',
    website: 'https://www.munrotownship.com',
    officials: [
      { name: 'Keith Ginop', title: 'Supervisor', party: 'Republican' },
      { name: 'Mary Bur', title: 'Clerk', party: 'Republican' },
      { name: 'Cheryl Dotski', title: 'Treasurer', party: 'Republican' },
      { name: 'Al Antkoviak', title: 'Trustee', party: 'Republican' },
      { name: 'Donald Tracey', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Nunda': {
    name: 'Nunda Township',
    county: 'Cheboygan',
    officials: [
      { name: 'John D. Moore', title: 'Supervisor', party: 'Republican' },
      { name: 'Gwen Sangeorzan', title: 'Clerk', party: 'Democratic' },
      { name: 'Craig Bridges', title: 'Treasurer', party: 'Republican' },
      { name: 'Wendy Loffer', title: 'Trustee', party: 'Republican' },
      { name: 'Sandra Lee Stafford', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Tuscarora': {
    name: 'Tuscarora Township',
    county: 'Cheboygan',
    website: 'https://www.tuscaroratwp.com',
    officials: [
      { name: 'Trudy Maves', title: 'Supervisor', party: 'Republican' },
      { name: 'Laura Decker', title: 'Clerk', party: 'Republican' },
      { name: 'Lori Smith', title: 'Treasurer', party: 'Republican' },
      { name: 'Jonathan Hutchison', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Walker': {
    name: 'Walker Township',
    county: 'Cheboygan',
    officials: [
      { name: 'Joshua Joseph', title: 'Supervisor', party: 'Republican' },
      { name: 'Julie Northrop', title: 'Clerk', party: 'Republican' },
      { name: 'Brenda Nash', title: 'Treasurer', party: 'Republican' },
      { name: 'Eli Hope', title: 'Trustee', party: 'Democratic' },
      { name: 'Peggy Dunham', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Waverly': {
    name: 'Waverly Township',
    county: 'Cheboygan',
    website: 'https://www.waverlytwp.com',
    officials: [
      { name: 'Kory Hyde', title: 'Supervisor', party: 'Republican' },
      { name: 'Rebecca Hyde', title: 'Clerk', party: 'Republican' },
      { name: 'Dawn Wregglesworth', title: 'Treasurer', party: 'Republican' },
      { name: 'Robert Decker', title: 'Trustee', party: 'Republican' },
      { name: 'Betty Sherburne', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Wilmot': {
    name: 'Wilmot Township',
    county: 'Cheboygan',
    officials: [
      { name: 'Tierney Farhat', title: 'Supervisor', party: 'Democratic' },
      { name: 'Cary Ford', title: 'Clerk', party: 'Republican' },
      { name: 'Stacie McCulley', title: 'Treasurer', party: 'Republican' },
      { name: 'Ralph Dubey', title: 'Trustee', party: 'Republican' },
      { name: 'John Ford', title: 'Trustee', party: 'Republican' },
    ],
  },

  /* ── Otsego County townships ── */

  'Bagley': {
    name: 'Bagley Township',
    county: 'Otsego',
    website: 'https://bagleytownshipmi.gov',
    officials: [
      { name: 'Michelle Noirot', title: 'Supervisor', party: 'Republican' },
      { name: 'James E. Szymanski', title: 'Clerk', party: 'Republican' },
      { name: 'Celeste Szymanski', title: 'Treasurer', party: 'Republican' },
      { name: 'Colleen Gelow', title: 'Trustee', party: 'Republican' },
      { name: 'John Hendrickson', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Charlton': {
    name: 'Charlton Township',
    county: 'Otsego',
    website: 'https://charltontownship.org',
    officials: [
      { name: 'Matthew Nowak', title: 'Supervisor', party: 'Republican' },
      { name: 'George Pewinski', title: 'Clerk', party: 'Republican' },
      { name: 'Kimberly Samkowiak', title: 'Treasurer', party: 'Republican' },
      { name: 'R. Keith Huff', title: 'Trustee', party: 'Republican' },
      { name: 'Michael McCarthy', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Chester': {
    name: 'Chester Township',
    county: 'Otsego',
    website: 'https://chester-township.com',
    officials: [
      { name: 'Bonny T. Miller', title: 'Supervisor', party: null },
      { name: 'Melissa L. Szymanski', title: 'Clerk', party: null },
      { name: 'Katherine C. Miller', title: 'Treasurer', party: null },
      { name: 'Preston Casselman', title: 'Trustee', party: null },
      { name: 'Elizabeth Smith', title: 'Trustee', party: null },
    ],
  },
  'Corwith': {
    name: 'Corwith Township',
    county: 'Otsego',
    website: 'https://www.corwith.net',
    officials: [
      { name: 'Vernon J. Kassuba', title: 'Supervisor', party: 'Republican' },
      { name: 'Debbie Whitman', title: 'Clerk', party: 'Democratic' },
      { name: 'Lori Lynn Bush', title: 'Treasurer', party: 'Republican' },
      { name: 'Patrick Coultes', title: 'Trustee', party: 'Democratic' },
      { name: 'Tom R. Kellogg', title: 'Trustee', party: 'Democratic' },
    ],
  },
  'Dover': {
    name: 'Dover Township',
    county: 'Otsego',
    website: 'https://www.dovertwp-otsegomi.gov',
    officials: [
      { name: 'Rudi D. Edel', title: 'Supervisor', party: 'Republican' },
      { name: 'Janet C. Kwapis', title: 'Clerk', party: 'Democratic' },
      { name: 'Theresa R. Taskey', title: 'Treasurer', party: 'Republican' },
      { name: 'Rebecca S. House', title: 'Trustee', party: 'Democratic' },
      { name: 'Trevor Boughner', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Elmira': {
    name: 'Elmira Township',
    county: 'Otsego',
    website: 'https://elmiratownship.com',
    officials: [
      { name: 'Diane Franckowiak', title: 'Supervisor', party: null },
      { name: 'Susan Schaedig', title: 'Clerk', party: null },
      { name: 'Diane Purgiel', title: 'Treasurer', party: null },
      { name: 'Dale Holzschu', title: 'Trustee', party: null },
      { name: 'Jessica Henke', title: 'Trustee', party: null },
    ],
  },
  'Hayes': {
    name: 'Hayes Township',
    county: 'Otsego',
    website: 'https://hayestwpotsegomi.gov',
    officials: [
      { name: 'Mary Sanders', title: 'Supervisor', party: null },
      { name: 'Richard Ross', title: 'Clerk', party: null },
      { name: 'Jessie Geiger', title: 'Treasurer', party: null },
      { name: 'Lisa Daly', title: 'Trustee', party: null },
      { name: 'Brad Kilbourn', title: 'Trustee', party: null },
    ],
  },
  'Livingston': {
    name: 'Livingston Township',
    county: 'Otsego',
    website: 'https://livingstontownshipmi.gov',
    officials: [
      { name: 'Norm Brecheisen', title: 'Supervisor', party: null },
      { name: 'Elizabeth Mench', title: 'Clerk', party: null },
      { name: 'Cheryl Prusakiewicz', title: 'Treasurer', party: null },
      { name: 'Steven Dipzinski', title: 'Trustee', party: null },
      { name: 'James Vanderveer', title: 'Trustee', party: null },
    ],
  },
  'Otsego Lake': {
    name: 'Otsego Lake Township',
    county: 'Otsego',
    website: 'https://otsegolaketownship.org',
    officials: [
      { name: 'Dave Matelski', title: 'Supervisor', party: null },
      { name: 'Mary Brown', title: 'Clerk', party: null },
      { name: 'Jerry Brown', title: 'Treasurer', party: null },
      { name: 'Denise Pallarito', title: 'Trustee', party: null },
      { name: 'Jeff Bergel', title: 'Trustee', party: null },
    ],
  },

  /* ── Roscommon County townships ── */

  'Au Sable Twp (Roscommon)': {
    name: 'Au Sable Township',
    county: 'Roscommon',
    website: 'https://ausabletownshipmi.com',
    officials: [
      { name: 'Kurtis Norton', title: 'Supervisor', party: 'Republican' },
      { name: 'Ron Watson', title: 'Clerk', party: 'Republican' },
      { name: 'Sarah Watson', title: 'Treasurer', party: 'Republican' },
      { name: 'Erica Wise', title: 'Trustee', party: 'Republican' },
      { name: 'Mike Carpenter', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Backus Twp (Roscommon)': {
    name: 'Backus Township',
    county: 'Roscommon',
    website: 'https://www.backusmi.gov',
    officials: [
      { name: 'Mike Orzechowski', title: 'Supervisor', party: 'Republican' },
      { name: 'Louise Marie Nagy', title: 'Clerk', party: 'Republican' },
      { name: 'Christine M. Tacey', title: 'Treasurer', party: 'Republican' },
      { name: 'Eldona L. Doll', title: 'Trustee', party: 'Democratic' },
      { name: 'Daniel A. Nagy', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Denton Twp (Roscommon)': {
    name: 'Denton Township',
    county: 'Roscommon',
    website: 'https://dentontownshipmi.gov',
    officials: [
      { name: 'Dave DenBoer', title: 'Supervisor', party: null },
      { name: 'Theresa M. Wagner', title: 'Clerk', party: null },
      { name: 'Susan S. Seaford', title: 'Treasurer', party: 'Republican' },
      { name: 'Paula Fuller', title: 'Trustee', party: 'Republican' },
      { name: 'Dick Pedersen', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Gerrish Twp (Roscommon)': {
    name: 'Gerrish Township',
    county: 'Roscommon',
    website: 'https://gerrishtownship.org',
    officials: [
      { name: 'Brian A. Hill', title: 'Supervisor', party: 'Republican' },
      { name: 'Michelle Squires', title: 'Clerk', party: 'Republican' },
      { name: 'James Anderson', title: 'Treasurer', party: 'Republican' },
      { name: 'James Ostling', title: 'Trustee', party: 'Republican' },
      { name: 'Mary Jo Oppy', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Higgins Twp (Roscommon)': {
    name: 'Higgins Township',
    county: 'Roscommon',
    website: 'https://higginstownship.com',
    officials: [
      { name: 'Steve Doggett', title: 'Supervisor', party: 'Republican' },
      { name: 'Maggie Borgula', title: 'Clerk', party: 'Democratic' },
      { name: 'Cheri Sullivan', title: 'Treasurer', party: 'Republican' },
      { name: 'Randy Hartman', title: 'Trustee', party: 'Republican' },
      { name: 'Tom Jennette', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Lake Twp (Roscommon)': {
    name: 'Lake Township',
    county: 'Roscommon',
    website: 'https://www.lake-township.com',
    officials: [
      { name: 'John Hibbard', title: 'Supervisor', party: 'Republican' },
      { name: 'Andrea Grabowski', title: 'Clerk', party: 'Republican' },
      { name: 'Harry Trier', title: 'Treasurer', party: 'Republican' },
      { name: 'Scott Hassler', title: 'Trustee', party: 'Republican' },
      { name: 'Pamela Surprenant', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Lyon Twp (Roscommon)': {
    name: 'Lyon Township',
    county: 'Roscommon',
    website: 'https://lyontwp-higginsmi.gov',
    officials: [
      { name: 'Paul Bertrand', title: 'Supervisor', party: 'Republican' },
      { name: 'Gregory Pearn', title: 'Clerk', party: 'Republican' },
      { name: 'Kevin Hopps', title: 'Treasurer', party: 'Republican' },
      { name: 'Steven Detmer', title: 'Trustee', party: 'Republican' },
      { name: 'Timothy Monet', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Markey Twp (Roscommon)': {
    name: 'Markey Township',
    county: 'Roscommon',
    website: 'https://markeytownship.org',
    officials: [
      { name: 'Stanley Gardner', title: 'Supervisor', party: 'Republican' },
      { name: 'Sheryl Tussey', title: 'Clerk', party: 'Republican' },
      { name: 'Wendy Engle', title: 'Treasurer', party: 'Republican' },
      { name: 'Loretta Bell', title: 'Trustee', party: 'Republican' },
      { name: 'Christopher DeBaeke', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Nester Twp (Roscommon)': {
    name: 'Nester Township',
    county: 'Roscommon',
    officials: [
      { name: 'Mark R. Kirby', title: 'Supervisor', party: 'Republican' },
      { name: 'Maryanne Wick', title: 'Clerk', party: 'Republican' },
      { name: 'Susan Newmyer', title: 'Treasurer', party: 'Republican' },
      { name: 'Ray Good', title: 'Trustee', party: 'Republican' },
      { name: 'Terry M. Muma', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Richfield Twp (Roscommon)': {
    name: 'Richfield Township',
    county: 'Roscommon',
    website: 'https://richfieldtownship.org',
    officials: [
      { name: 'Ray Wlosinski', title: 'Supervisor', party: 'Republican' },
      { name: 'Carolyn Minton', title: 'Clerk', party: null },
      { name: 'Terri Hidey', title: 'Treasurer', party: 'Republican' },
      { name: 'Veronica Bridson', title: 'Trustee', party: 'Republican' },
      { name: 'Greg Watt', title: 'Trustee', party: 'Republican' },
    ],
  },
  'Roscommon Twp (Roscommon)': {
    name: 'Roscommon Township',
    county: 'Roscommon',
    website: 'https://roscommontownshipmi.gov',
    officials: [
      { name: 'Diane F. Randall', title: 'Supervisor', party: 'Republican' },
      { name: 'Carie A. Milburn', title: 'Clerk', party: 'Republican' },
      { name: 'Mary Ann Hose', title: 'Treasurer', party: 'Republican' },
      { name: 'Rob Christian', title: 'Trustee', party: 'Republican' },
      { name: 'Ken Pickard', title: 'Trustee', party: 'Republican' },
    ],
  },
  'South Branch Twp (Roscommon)': {
    name: 'South Branch Township',
    county: 'Roscommon',
    website: 'https://southbranchtownship.com',
    officials: [
      { name: 'Anna Sylvester', title: 'Supervisor', party: 'Independent' },
      { name: 'Brenda Nelson', title: 'Clerk', party: null },
      { name: 'Cathy Lewis', title: 'Treasurer', party: null },
      { name: 'Michael Janisse', title: 'Trustee', party: null },
      { name: 'Scott Barritt', title: 'Trustee', party: null },
    ],
  },

  /* ── Gladwin County townships ── */

  'Beaverton Twp (Gladwin)': {
    name: 'Beaverton Township',
    county: 'Gladwin',
    website: 'https://beavertontownship.com',
    officials: [
      { name: 'Joseph Sprague', title: 'Supervisor', party: null },
      { name: 'Kelly Avila', title: 'Clerk', party: null },
      { name: 'Suzanne Sutton', title: 'Treasurer', party: null },
      { name: 'Tom Murry', title: 'Trustee', party: null },
      { name: 'Dawn Keller', title: 'Trustee', party: null },
    ],
  },
  'Bentley Twp (Gladwin)': {
    name: 'Bentley Township',
    county: 'Gladwin',
    officials: [
      { name: 'Justine Osborn', title: 'Supervisor', party: null },
      { name: 'Kristie Resmer', title: 'Clerk', party: null },
      { name: 'Sharon Roy-Krahner', title: 'Treasurer', party: null },
    ],
  },
  'Billings Twp (Gladwin)': {
    name: 'Billings Township',
    county: 'Gladwin',
    website: 'http://billingstownship.org',
    officials: [
      { name: 'Tim Mester', title: 'Supervisor', party: null },
      { name: 'Linda J. McSweyn', title: 'Clerk', party: null },
      { name: 'Len Pytlak', title: 'Treasurer', party: null },
      { name: 'Cindy Whittington', title: 'Trustee', party: null },
      { name: 'Brian Johnson', title: 'Trustee', party: null },
    ],
  },
  'Bourret Twp (Gladwin)': {
    name: 'Bourret Township',
    county: 'Gladwin',
    website: 'https://www.bourrettownship.com',
    officials: [
      { name: 'Susan M. Morgan', title: 'Supervisor', party: null },
      { name: 'Jeff Fournier', title: 'Clerk', party: null },
      { name: 'Ruth Fournier', title: 'Treasurer', party: null },
      { name: 'Cindy Pepin', title: 'Trustee', party: null },
      { name: 'Don Hunt', title: 'Trustee', party: null },
    ],
  },
  'Buckeye Twp (Gladwin)': {
    name: 'Buckeye Township',
    county: 'Gladwin',
    officials: [
      { name: 'Kevin VanTiem', title: 'Supervisor', party: null },
      { name: 'Sue Walker', title: 'Clerk', party: null },
      { name: 'Steve Broka', title: 'Treasurer', party: null },
      { name: 'Karen Csernyik', title: 'Trustee', party: null },
      { name: 'Edwin R. Schroeder', title: 'Trustee', party: null },
    ],
  },
  'Butman Twp (Gladwin)': {
    name: 'Butman Township',
    county: 'Gladwin',
    website: 'https://butmantwp.com',
    officials: [
      { name: 'Danny Gonzales', title: 'Supervisor', party: null },
      { name: 'Dianna Gonzales', title: 'Clerk', party: null },
      { name: 'Susie Ruppert', title: 'Treasurer', party: null },
      { name: 'Mike Mahaffy', title: 'Trustee', party: null },
      { name: 'Darleen Gauci', title: 'Trustee', party: null },
    ],
  },
  'Clement Twp (Gladwin)': {
    name: 'Clement Township',
    county: 'Gladwin',
    website: 'http://clementtwp.org',
    officials: [
      { name: 'Chuck Sikora', title: 'Supervisor', party: null },
      { name: 'Eric House', title: 'Clerk', party: null },
      { name: 'Carolyn Ochab', title: 'Treasurer', party: null },
      { name: 'Kim Davis', title: 'Trustee', party: null },
      { name: 'Albert Lee', title: 'Trustee', party: null },
    ],
  },
  'Gladwin Twp (Gladwin)': {
    name: 'Gladwin Township',
    county: 'Gladwin',
    website: 'https://gladwintownship.org',
    officials: [
      { name: 'Robert Weaver', title: 'Supervisor', party: null },
      { name: 'Kristie Simrau', title: 'Clerk', party: null },
      { name: 'Jodie Klamer', title: 'Treasurer', party: null },
      { name: 'Jennifer Slabic', title: 'Trustee', party: null },
      { name: 'Doug Ritchie', title: 'Trustee', party: null },
    ],
  },
  'Grim Twp (Gladwin)': {
    name: 'Grim Township',
    county: 'Gladwin',
    officials: [
      { name: 'Alan Piaskowski', title: 'Supervisor', party: null },
      { name: "Linda O'Dell", title: 'Clerk', party: null },
      { name: 'Renee Dunn Green', title: 'Treasurer', party: null },
      { name: 'Bernard Barber', title: 'Trustee', party: null },
      { name: 'Lonnie Pacholke', title: 'Trustee', party: null },
    ],
  },
  'Grout Twp (Gladwin)': {
    name: 'Grout Township',
    county: 'Gladwin',
    website: 'https://grouttownship.org',
    officials: [
      { name: 'James Shea', title: 'Supervisor', party: null },
      { name: 'Diana Fritzler', title: 'Clerk', party: null },
      { name: 'Melody A. Hill', title: 'Treasurer', party: null },
      { name: 'Richard Christie', title: 'Trustee', party: null },
      { name: 'Julie Beck', title: 'Trustee', party: null },
    ],
  },
  'Hay Twp (Gladwin)': {
    name: 'Hay Township',
    county: 'Gladwin',
    website: 'https://haytownship.org',
    officials: [
      { name: 'Peter Doyle', title: 'Supervisor', party: null },
      { name: 'Sandra Griffin', title: 'Clerk', party: null },
      { name: 'Diane Kludt', title: 'Treasurer', party: null },
      { name: 'Jason Becker', title: 'Trustee', party: null },
      { name: 'Steve Monaghan', title: 'Trustee', party: null },
    ],
  },
  'Sage Twp (Gladwin)': {
    name: 'Sage Township',
    county: 'Gladwin',
    website: 'https://www.sagetownship.org',
    officials: [
      { name: 'Renee Zelt', title: 'Supervisor', party: null },
      { name: 'Janet Smith', title: 'Clerk', party: null },
      { name: 'Laura Flach', title: 'Treasurer', party: null },
      { name: 'Kent A. Crawford', title: 'Trustee', party: null },
      { name: 'Jeff Swanstra', title: 'Trustee', party: null },
    ],
  },
  'Secord Twp (Gladwin)': {
    name: 'Secord Township',
    county: 'Gladwin',
    website: 'https://secordtwp.com',
    officials: [
      { name: 'Joel Vernier', title: 'Supervisor', party: null },
      { name: 'Kristine Panetta', title: 'Clerk', party: null },
      { name: 'Cheryl Stiehl', title: 'Treasurer', party: null },
      { name: 'Bill Bowman', title: 'Trustee', party: null },
      { name: 'Martin Holmes', title: 'Trustee', party: null },
    ],
  },
  'Sherman Twp (Gladwin)': {
    name: 'Sherman Township',
    county: 'Gladwin',
    website: 'https://shermantownshipgladwin.com',
    officials: [
      { name: 'John Jurgensen', title: 'Supervisor', party: null },
      { name: 'Kay Whelen', title: 'Clerk', party: null },
      { name: 'Nathan Paisley', title: 'Treasurer', party: null },
      { name: 'Keith Good', title: 'Trustee', party: null },
      { name: 'Sarah Paisley', title: 'Trustee', party: null },
    ],
  },
  'Tobacco Twp (Gladwin)': {
    name: 'Tobacco Township',
    county: 'Gladwin',
    website: 'https://tobaccotownship.org',
    officials: [
      { name: 'Craig Bergman', title: 'Supervisor', party: null },
      { name: 'Whitney King', title: 'Clerk', party: null },
      { name: 'Julie VanKuiken', title: 'Treasurer', party: null },
      { name: 'John Blades', title: 'Trustee', party: null },
      { name: 'BJ Oard', title: 'Trustee', party: null },
    ],
  },

  /* ── Alpena County townships ── */

  'Alpena Twp': {
    name: 'Charter Township of Alpena',
    county: 'Alpena',
    website: 'https://www.alpenatownship.com',
    officials: [
      { name: 'Abbi Kaszubowski', title: 'Supervisor', party: null },
      { name: 'Michele Palevich', title: 'Clerk', party: null },
      { name: 'Laura Ellery-Somers', title: 'Treasurer', party: null },
      { name: 'Norm Poli', title: 'Trustee', party: null },
      { name: 'Cash Kroll', title: 'Trustee', party: null },
      { name: 'Steve Lappan', title: 'Trustee', party: null },
      { name: 'Russ Rhynard', title: 'Trustee', party: null },
    ],
  },
  'Green': {
    name: 'Green Township',
    county: 'Alpena',
    website: 'https://greentownshipmi.org',
    officials: [
      { name: 'Eric Smith', title: 'Supervisor', party: null },
      { name: 'Melony Sumerix', title: 'Clerk', party: null },
      { name: 'Melanie Roznowski', title: 'Treasurer', party: null },
      { name: 'Kendall Sumerix', title: 'Trustee', party: null },
      { name: 'Herb Gamage', title: 'Trustee', party: null },
    ],
  },
  'Long Rapids': {
    name: 'Long Rapids Township',
    county: 'Alpena',
    website: 'https://longrapidstownship.org',
    officials: [
      { name: 'Todd Precord', title: 'Supervisor', party: null },
      { name: 'Mary Sue Thomson', title: 'Clerk', party: null },
      { name: 'Wendy Johnson', title: 'Treasurer', party: null },
      { name: 'Brad Styma', title: 'Trustee', party: null },
      { name: 'Vickie Ritter', title: 'Trustee', party: null },
    ],
  },
  'Maple Ridge': {
    name: 'Maple Ridge Township',
    county: 'Alpena',
    website: 'https://alpenacounty.org/435/Maple-Ridge-Township',
    officials: [
      { name: 'John Male Sr.', title: 'Supervisor', party: null },
      { name: 'Melissa Hoskinson', title: 'Clerk', party: null },
      { name: 'Krisi Hoppe', title: 'Treasurer', party: null },
      { name: 'Lenore Kasubowski', title: 'Trustee', party: null },
      { name: 'Robert Trelfa', title: 'Trustee', party: null },
    ],
  },
  'Ossineke': {
    name: 'Ossineke Township',
    county: 'Alpena',
    website: 'https://ossineketownship.com',
    officials: [
      { name: 'Kenneth Lobert', title: 'Supervisor', party: null },
      { name: "Jo'Lee Dorie", title: 'Clerk', party: null },
      { name: 'Denise Schultz', title: 'Treasurer', party: null },
      { name: 'Jerry Leschinger', title: 'Trustee', party: null },
      { name: 'Randy Fairbanks', title: 'Trustee', party: null },
    ],
  },
  'Sanborn': {
    name: 'Sanborn Township',
    county: 'Alpena',
    website: 'https://sanborntwp.com',
    officials: [
      { name: 'Kenneth Gauthier', title: 'Supervisor', party: null },
      { name: 'Peggy Ceslick', title: 'Clerk', party: null },
      { name: 'Mary Eaton', title: 'Treasurer', party: null },
      { name: 'Gary Stephan', title: 'Trustee', party: null },
      { name: 'Dale Hart Jr.', title: 'Trustee', party: null },
    ],
  },
  'Wellington': {
    name: 'Wellington Township',
    county: 'Alpena',
    website: 'https://www.alpenacounty.org/578/Wellington-Township',
    officials: [
      { name: 'Ron Lucas', title: 'Supervisor', party: null },
      { name: 'Pamela Madsen', title: 'Clerk', party: null },
      { name: 'Grace Lumsden', title: 'Treasurer', party: null },
    ],
  },
  'Wilson': {
    name: 'Wilson Township',
    county: 'Alpena',
    website: 'https://wilsontownshipalpena.com',
    officials: [
      { name: 'Dan Hibner', title: 'Supervisor', party: null },
      { name: 'Rhonda Ritthaler', title: 'Clerk', party: null },
      { name: 'Melissa Werth', title: 'Treasurer', party: null },
      { name: 'Mike Centala', title: 'Trustee', party: null },
      { name: 'Cody Werth', title: 'Trustee', party: null },
    ],
  },

  /* ── Montmorency County townships ── */

  'Albert': {
    name: 'Albert Township',
    county: 'Montmorency',
    website: 'https://alberttwpmi.gov/',
    officials: [
      { name: 'Michael Szukhent', title: 'Supervisor', party: null },
      { name: 'Sandra L. Raffin', title: 'Clerk', party: null },
      { name: 'John Righi', title: 'Treasurer', party: null },
      { name: 'Mark Bowser', title: 'Trustee', party: null },
      { name: 'Marsha McDonald', title: 'Trustee', party: null },
    ],
  },

  'Avery': {
    name: 'Avery Township',
    county: 'Montmorency',
    website: 'https://averytownship.com/',
    officials: [
      { name: 'Thomas Seymour', title: 'Supervisor', party: null },
      { name: 'Rebecca Smith', title: 'Clerk', party: null },
      { name: 'Elizabeth Culham', title: 'Treasurer', party: null },
      { name: 'Gary D. McMurphy', title: 'Trustee', party: null },
      { name: 'Bernard H. Yantz', title: 'Trustee', party: null },
    ],
  },

  'Briley': {
    name: 'Briley Township',
    county: 'Montmorency',
    website: 'https://brileytownshipmi.gov/',
    officials: [
      { name: 'Ken Werner', title: 'Supervisor', party: null },
      { name: 'Gordon Green', title: 'Clerk', party: null },
      { name: 'Vanessa Werner', title: 'Treasurer', party: null },
      { name: 'Dan Kent', title: 'Trustee', party: null },
      { name: 'Evelyn White', title: 'Trustee', party: null },
    ],
  },

  'Hillman Twp': {
    name: 'Hillman Township',
    county: 'Montmorency',
    website: 'https://hillmantownship.com/',
    officials: [
      { name: 'John Burr', title: 'Supervisor', party: null },
      { name: 'Kelli Ableidinger', title: 'Clerk', party: null },
      { name: 'Jody Vanderveer', title: 'Treasurer', party: null },
      { name: 'Steven Achatz', title: 'Trustee', party: null },
      { name: 'Daryl Peterson', title: 'Trustee', party: null },
    ],
  },

  'Loud': {
    name: 'Loud Township',
    county: 'Montmorency',
    officials: [
      { name: 'Beau Williams', title: 'Supervisor', party: null },
      { name: 'Robin Chinavare', title: 'Clerk', party: null },
      { name: 'Kimberly Ann Rippee', title: 'Treasurer', party: null },
      { name: 'Joel Bixel', title: 'Trustee', party: null },
      { name: 'Donna Stehle', title: 'Trustee', party: null },
    ],
  },

  'Montmorency Twp': {
    name: 'Montmorency Township',
    county: 'Montmorency',
    website: 'https://www.montmorencytownship.org/',
    officials: [
      { name: 'Kelly R. Bennett', title: 'Supervisor', party: null },
      { name: 'Connie Brandt', title: 'Clerk', party: null },
      { name: 'Paula M. Miller', title: 'Treasurer', party: null },
      { name: 'Dwight A. Hardies', title: 'Trustee', party: null },
      { name: 'Gerald Steinke', title: 'Trustee', party: null },
    ],
  },

  'Rust': {
    name: 'Rust Township',
    county: 'Montmorency',
    website: 'https://rusttownship.com/',
    officials: [
      { name: 'Jon Schulze', title: 'Supervisor', party: null },
      { name: 'Carleen Klein', title: 'Clerk', party: null },
      { name: 'Lisa Benac-Appelgren', title: 'Treasurer', party: null },
      { name: 'James Fifield', title: 'Trustee', party: null },
      { name: 'Janice L. Richiert', title: 'Trustee', party: null },
    ],
  },

  'Vienna': {
    name: 'Vienna Township',
    county: 'Montmorency',
    officials: [
      { name: 'Cheryl Klein', title: 'Supervisor', party: null },
      { name: 'Elaine Dixon', title: 'Clerk', party: null },
      { name: 'Peggy Bush', title: 'Treasurer', party: null },
      { name: 'Mayree Payne', title: 'Trustee', party: null },
      { name: 'Diane E. Webber', title: 'Trustee', party: null },
    ],
  },

  /* ── Delta County townships ── */

  'Baldwin Twp': {
    name: 'Baldwin Township',
    county: 'Delta',
    website: 'https://deltacountymi.gov/township-information/baldwin-township/',
    officials: [
      { name: 'Lisa K. Carlson', title: 'Supervisor', party: null },
      { name: 'Terre Anderson', title: 'Clerk', party: null },
      { name: 'Mark S. DePuydt', title: 'Treasurer', party: null },
      { name: 'Dale K. Schneider', title: 'Trustee', party: null },
      { name: 'Karen L. Van Damme', title: 'Trustee', party: null },
    ],
  },

  'Bay de Noc Twp': {
    name: 'Bay de Noc Township',
    county: 'Delta',
    website: 'https://deltacountymi.gov/township-information/bay-de-noc-township/',
    officials: [
      { name: 'Ginny Dahlin', title: 'Supervisor', party: null },
      { name: 'Maggie Anderson', title: 'Clerk', party: null },
      { name: 'Diane E. Wicklund', title: 'Treasurer', party: null },
      { name: 'Michael J. Balaskovitz', title: 'Trustee', party: null },
      { name: 'Jayne Peterson', title: 'Trustee', party: null },
    ],
  },

  'Brampton Twp': {
    name: 'Brampton Township',
    county: 'Delta',
    website: 'https://deltacountymi.gov/township-information/brampton-township/',
    officials: [
      { name: 'Dennis Maufort', title: 'Supervisor', party: null },
      { name: 'Debbie Edwardsen', title: 'Clerk', party: null },
      { name: 'Tonia S. Thull', title: 'Treasurer', party: null },
      { name: 'Gladys Elegeert', title: 'Trustee', party: null },
      { name: 'Robin Smauley', title: 'Trustee', party: null },
    ],
  },

  'Cornell Twp': {
    name: 'Cornell Township',
    county: 'Delta',
    website: 'https://deltacountymi.gov/township-information/cornell-township/',
    officials: [
      { name: 'Jerry J. Plourde', title: 'Supervisor', party: null },
      { name: 'Diana L. Clark', title: 'Clerk', party: null },
      { name: 'Sue Caron', title: 'Treasurer', party: null },
      { name: 'Edward L. Fleury', title: 'Trustee', party: null },
      { name: 'Gary J. Dubord', title: 'Trustee', party: null },
    ],
  },

  'Ensign Twp': {
    name: 'Ensign Township',
    county: 'Delta',
    website: 'https://deltacountymi.gov/township-information/ensign-township/',
    officials: [
      { name: 'John Wolf', title: 'Supervisor', party: null },
      { name: 'Mary Wilson', title: 'Clerk', party: null },
      { name: 'Sherri Pratt Parrett', title: 'Treasurer', party: null },
      { name: 'Darryl Lindquist', title: 'Trustee', party: null },
      { name: 'Becky O\'Brien', title: 'Trustee', party: null },
    ],
  },

  'Escanaba Twp': {
    name: 'Escanaba Township',
    county: 'Delta',
    website: 'https://escanabatownshipmi.gov',
    officials: [
      { name: 'Tom Rymkos', title: 'Supervisor', party: null },
      { name: 'Theresa Chenier', title: 'Clerk', party: null },
      { name: 'Kim Knauf-Wyckoff', title: 'Treasurer', party: null },
      { name: 'Al Gareau', title: 'Trustee', party: null },
      { name: 'Norman Fleury', title: 'Trustee', party: null },
    ],
  },

  'Ford River Twp': {
    name: 'Ford River Township',
    county: 'Delta',
    website: 'https://fordriver.org',
    officials: [
      { name: 'Stephen Nelson', title: 'Supervisor', party: 'Republican' },
      { name: 'Debbie Brown', title: 'Clerk', party: 'Republican' },
      { name: 'Amanda Wagner', title: 'Treasurer', party: 'Republican' },
      { name: 'Jayne Pendergraft-Church', title: 'Trustee', party: 'Democratic' },
      { name: 'Robert Valentine', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Garden Twp': {
    name: 'Garden Township',
    county: 'Delta',
    website: 'https://www.gardentwp.com',
    officials: [
      { name: 'Kathy Young', title: 'Supervisor', party: null },
      { name: 'Brenda Lester', title: 'Clerk', party: null },
      { name: 'Jenna Silkworth', title: 'Treasurer', party: null },
      { name: 'Craig Potvin', title: 'Trustee', party: null },
      { name: 'Susan Rochefort', title: 'Trustee', party: null },
    ],
  },

  'Maple Ridge Twp': {
    name: 'Maple Ridge Township',
    county: 'Delta',
    website: 'https://deltacountymi.gov/township-information/maple-ridge-township/',
    officials: [
      { name: 'Michael Lepisto', title: 'Supervisor', party: null },
      { name: 'Sue Sicotte', title: 'Clerk', party: null },
      { name: 'Barbara Nummilien', title: 'Treasurer', party: null },
    ],
  },

  'Masonville Twp': {
    name: 'Masonville Township',
    county: 'Delta',
    website: 'https://deltacountymi.gov/township-information/masonville-township/',
    officials: [
      { name: 'Wendy M. Holzenkamp', title: 'Supervisor', party: null },
      { name: 'Lynn M. Herzog', title: 'Clerk', party: null },
      { name: 'Esther M. Davis', title: 'Treasurer', party: null },
      { name: 'Karl Jaeger', title: 'Trustee', party: null },
      { name: 'Travis Cary', title: 'Trustee', party: null },
    ],
  },

  'Nahma Twp': {
    name: 'Nahma Township',
    county: 'Delta',
    website: 'https://www.nahmatownship.us',
    officials: [
      { name: 'Herbert Pomeroy', title: 'Supervisor', party: null },
      { name: 'Michelle Lass', title: 'Clerk', party: null },
      { name: 'Kathy Fries', title: 'Treasurer', party: null },
      { name: 'Suzanne Kacer', title: 'Trustee', party: null },
      { name: 'Mary LaVigne', title: 'Trustee', party: null },
    ],
  },

  'Wells Twp (Delta)': {
    name: 'Wells Township',
    county: 'Delta',
    website: 'https://www.wellsdeltami.net',
    officials: [
      { name: 'Tony Millette', title: 'Supervisor', party: null },
      { name: 'Tina Jensen', title: 'Clerk', party: null },
      { name: 'Karen Kobasic', title: 'Treasurer', party: null },
      { name: 'Brett Way', title: 'Trustee', party: null },
      { name: 'Shannon Dubord', title: 'Trustee', party: null },
      { name: 'Gloria F. Johnson', title: 'Trustee', party: null },
      { name: 'Vicki Kositzky', title: 'Trustee', party: null },
    ],
  },

  /* ── Dickinson County townships ── */

  'Breen Twp': {
    name: 'Breen Township',
    county: 'Dickinson',
    website: 'https://www.breentwp.gov',
    officials: [
      { name: 'Travis Woodward', title: 'Supervisor', party: 'Republican' },
      { name: 'Samantha Mattson', title: 'Clerk', party: null },
      { name: 'Katherine Dixon', title: 'Treasurer', party: null },
      { name: 'Robert Massie', title: 'Trustee', party: 'Republican' },
      { name: 'Mick Reynolds', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Breitung Charter Twp': {
    name: 'Breitung Charter Township',
    county: 'Dickinson',
    website: 'https://www.breitungtownshipmi.gov',
    officials: [
      { name: 'Denny Olson', title: 'Supervisor', party: 'Republican' },
      { name: 'Karie A. Taff', title: 'Clerk', party: null },
      { name: 'Heather Lieburn', title: 'Treasurer', party: 'Republican' },
      { name: 'Brent Johnson', title: 'Trustee', party: 'Republican' },
      { name: 'Ben Peterson', title: 'Trustee', party: 'Republican' },
      { name: 'Sharon Reuter', title: 'Trustee', party: 'Republican' },
      { name: 'Paul J. Taff', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Felch Twp': {
    name: 'Felch Township',
    county: 'Dickinson',
    website: 'https://felchtownship.gov',
    officials: [
      { name: 'Robert Mattson', title: 'Supervisor', party: 'Republican' },
      { name: 'Darrell J. Oman', title: 'Clerk', party: 'Republican' },
      { name: 'Marilyn Steinbrecher', title: 'Treasurer', party: 'Republican' },
      { name: 'Darwin Dixon', title: 'Trustee', party: 'Republican' },
      { name: 'Greg Wille', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Norway Twp': {
    name: 'Norway Township',
    county: 'Dickinson',
    website: 'https://norwaytwpmi.com',
    officials: [
      { name: 'Don Byczek', title: 'Supervisor', party: 'Democratic' },
      { name: 'Joyce Giuliani', title: 'Clerk', party: 'Republican' },
      { name: 'Jeffrey Edwards', title: 'Treasurer', party: 'Republican' },
      { name: 'Brian K. Pellegrini', title: 'Trustee', party: 'Republican' },
      { name: 'David B. Solda', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Sagola Twp': {
    name: 'Sagola Township',
    county: 'Dickinson',
    website: 'https://sagolatwp.com',
    officials: [
      { name: 'Ryan Mulder', title: 'Supervisor', party: 'Republican' },
      { name: 'Julie Roell', title: 'Clerk', party: 'Republican' },
      { name: 'Marissa Berg', title: 'Treasurer', party: 'Republican' },
      { name: 'Lucas Fleming', title: 'Trustee', party: 'Republican' },
      { name: 'David Roell', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Waucedah Twp': {
    name: 'Waucedah Township',
    county: 'Dickinson',
    website: 'https://www.waucedahtownship.com',
    officials: [
      { name: 'Louis A. Sturm', title: 'Supervisor', party: 'Republican' },
      { name: 'Lori Turri', title: 'Clerk', party: 'Republican' },
      { name: 'Amy Hebzynski', title: 'Treasurer', party: 'Republican' },
      { name: 'Chuck Adams', title: 'Trustee', party: 'Republican' },
      { name: 'Rick J. Smaniotti', title: 'Trustee', party: 'Democratic' },
    ],
  },

  'West Branch Twp (Dickinson)': {
    name: 'West Branch Township',
    county: 'Dickinson',
    officials: [
      { name: 'Penny S. Skogman', title: 'Supervisor', party: 'Republican' },
      { name: 'Lisa M. Jacobsen', title: 'Clerk', party: 'Republican' },
      { name: 'Kim M. Oman', title: 'Treasurer', party: 'Republican' },
      { name: 'Roger Hiironen', title: 'Trustee', party: null },
      { name: 'Cheryl Peacock', title: 'Trustee', party: null },
    ],
  },

  /* ── Houghton County townships ── */

  'Adams Twp': {
    name: 'Adams Township',
    county: 'Houghton',
    officials: [
      { name: 'Gerald Heikkinen', title: 'Supervisor', party: null },
      { name: 'Debra Pindral', title: 'Clerk', party: null },
      { name: 'Tracy Immonen', title: 'Treasurer', party: null },
      { name: 'Paul Eister', title: 'Trustee', party: 'Republican' },
      { name: 'Diane Keranen', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Calumet Charter Twp': {
    name: 'Calumet Charter Township',
    county: 'Houghton',
    officials: [
      { name: 'Tim Gasperich', title: 'Supervisor', party: null },
      { name: 'Robin Hicks', title: 'Clerk', party: null },
      { name: 'Lana Hyrkas', title: 'Treasurer', party: null },
      { name: 'Gary Lassila', title: 'Trustee', party: 'Republican' },
      { name: 'David Yeo', title: 'Trustee', party: 'Republican' },
      { name: 'Jeff West', title: 'Trustee', party: 'Republican' },
      { name: 'Tom Helppi', title: 'Trustee', party: null },
    ],
  },

  'Chassell Twp': {
    name: 'Chassell Township',
    county: 'Houghton',
    officials: [
      { name: 'Lynn Gierke', title: 'Supervisor', party: null },
      { name: 'Bethany Baetsen', title: 'Clerk', party: null },
      { name: 'Kelly Holmes', title: 'Treasurer', party: null },
      { name: 'Curt Judson', title: 'Trustee', party: null },
      { name: 'Dan Palosaari', title: 'Trustee', party: null },
    ],
  },

  'Duncan Twp': {
    name: 'Duncan Township',
    county: 'Houghton',
    officials: [
      { name: 'Laurie Houts', title: 'Supervisor', party: null },
      { name: 'Kathleen Allen', title: 'Clerk', party: null },
      { name: 'Sandra Pitkanen', title: 'Treasurer', party: null },
      { name: 'Lon Houts', title: 'Trustee', party: null },
      { name: 'Theodore Pitkanen', title: 'Trustee', party: null },
    ],
  },

  'Elm River Twp': {
    name: 'Elm River Township',
    county: 'Houghton',
    website: 'http://www.elmrivertownship.com',
    officials: [
      { name: 'John Reynolds', title: 'Supervisor', party: null },
      { name: 'Sherri Brandt', title: 'Clerk', party: null },
      { name: 'Cheryl Reynolds', title: 'Treasurer', party: null },
      { name: 'David Saari', title: 'Trustee', party: null },
      { name: 'Joe Romano', title: 'Trustee', party: null },
    ],
  },

  'Franklin Twp': {
    name: 'Franklin Township',
    county: 'Houghton',
    officials: [
      { name: 'Mary Sears', title: 'Supervisor', party: null },
      { name: 'Elizabeth Aho', title: 'Clerk', party: null },
      { name: 'Rachel Sears', title: 'Treasurer', party: null },
      { name: 'DJ Dulong', title: 'Trustee', party: 'Republican' },
      { name: 'Lawrence Julio', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Hancock Twp': {
    name: 'Hancock Township',
    county: 'Houghton',
    website: 'https://hancocktwp.org',
    officials: [
      { name: 'Mike Young', title: 'Supervisor', party: null },
      { name: 'Amy Jo Maki', title: 'Clerk', party: null },
      { name: 'James Moore', title: 'Treasurer', party: null },
      { name: 'Connie Pietila', title: 'Trustee', party: 'Republican' },
      { name: 'Ronald Racine Sr.', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Laird Twp': {
    name: 'Laird Township',
    county: 'Houghton',
    website: 'https://lairdtownship.org',
    officials: [
      { name: 'Patricia Spencer', title: 'Supervisor', party: null },
      { name: 'Robin Henry', title: 'Clerk', party: null },
      { name: 'Nicole Krajnak', title: 'Treasurer', party: null },
      { name: 'John Juntunen', title: 'Trustee', party: 'Republican' },
      { name: 'Ryan McGahan', title: 'Trustee', party: null },
    ],
  },

  'Osceola Twp (Houghton)': {
    name: 'Osceola Township',
    county: 'Houghton',
    website: 'https://www.osceolatownship.org',
    officials: [
      { name: 'Mark Halkola', title: 'Supervisor', party: null },
      { name: 'Christa Gardner', title: 'Clerk', party: null },
      { name: 'Christina Gardner', title: 'Treasurer', party: null },
      { name: 'Aaron Janke', title: 'Trustee', party: 'Republican' },
      { name: 'Donald Wareham', title: 'Trustee', party: 'Democratic' },
    ],
  },

  'Portage Charter Twp': {
    name: 'Portage Charter Township',
    county: 'Houghton',
    officials: [
      { name: 'Brandon Scholie', title: 'Supervisor', party: null },
      { name: 'Amy Skewes', title: 'Clerk', party: null },
      { name: 'Betsy Smith', title: 'Treasurer', party: null },
      { name: 'Dale Belanger', title: 'Trustee', party: 'Republican' },
      { name: 'Janelle Datto', title: 'Trustee', party: 'Republican' },
      { name: 'Nicholas Lanctot', title: 'Trustee', party: 'Republican' },
      { name: 'Amber Voght', title: 'Trustee', party: 'Democratic' },
    ],
  },

  'Quincy Twp': {
    name: 'Quincy Township',
    county: 'Houghton',
    officials: [
      { name: 'Dennis Raasio', title: 'Supervisor', party: null },
      { name: 'Beth Helminen', title: 'Clerk', party: null },
      { name: 'Cheri Raasio', title: 'Treasurer', party: null },
      { name: 'Chris Kangas', title: 'Trustee', party: 'Democratic' },
      { name: 'Michael Galetto', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Schoolcraft Twp': {
    name: 'Schoolcraft Township',
    county: 'Houghton',
    officials: [
      { name: 'Josh Loukus', title: 'Supervisor', party: null },
      { name: 'Betty Antilla', title: 'Clerk', party: null },
      { name: 'Robert Wareham', title: 'Treasurer', party: null },
      { name: 'Susan Marcotte', title: 'Trustee', party: 'Democratic' },
      { name: 'William Heide', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Stanton Twp': {
    name: 'Stanton Township',
    county: 'Houghton',
    website: 'https://www.stantontownship.com',
    officials: [
      { name: 'Marty Rajala', title: 'Supervisor', party: null },
      { name: 'Tina Hatman', title: 'Clerk', party: null },
      { name: 'Lori Anderson', title: 'Treasurer', party: null },
      { name: 'Jim Heinonen', title: 'Trustee', party: 'Republican' },
      { name: 'Mark Haataja', title: 'Trustee', party: 'Republican' },
    ],
  },

  'Torch Lake Twp': {
    name: 'Torch Lake Township',
    county: 'Houghton',
    website: 'https://www.torchlaketownship.com',
    officials: [
      { name: 'Brian Cadwell', title: 'Supervisor', party: null },
      { name: 'Lou Ambuehl', title: 'Clerk', party: null },
      { name: 'Kathryn Moore', title: 'Treasurer', party: null },
      { name: 'Scott Sapino', title: 'Trustee', party: 'Democratic' },
      { name: 'Tim Reitz', title: 'Trustee', party: null },
    ],
  },

  /* ── Marquette County townships ── */

  'Chocolay Charter Twp': {
    name: 'Chocolay Charter Township',
    county: 'Marquette',
    website: 'https://chocolay.gov',
    officials: [
      { name: 'David Lynch', title: 'Supervisor', party: null },
      { name: 'Max Engle', title: 'Clerk', party: null },
      { name: 'Ben Zyburt', title: 'Treasurer', party: null },
      { name: 'Linnea Wilson', title: 'Trustee', party: null },
      { name: 'Don Rhein', title: 'Trustee', party: null },
      { name: 'Jon LeGalley', title: 'Trustee', party: null },
      { name: 'Mark Stonerock', title: 'Trustee', party: null },
    ],
  },

  'Ely Twp': {
    name: 'Ely Township',
    county: 'Marquette',
    website: 'https://elytownship.com',
    officials: [
      { name: 'Jeremy Laakso', title: 'Supervisor', party: null },
      { name: 'Glenn Wing', title: 'Clerk', party: null },
      { name: 'Dawn Schuhknecht', title: 'Treasurer', party: null },
      { name: 'Andy Andrews', title: 'Trustee', party: null },
      { name: 'Julie Hosang', title: 'Trustee', party: null },
    ],
  },

  'Ewing Twp': {
    name: 'Ewing Township',
    county: 'Marquette',
    officials: [
      { name: 'Cynthia Haas', title: 'Clerk', party: null },
      { name: 'Jackie Albaugh', title: 'Treasurer', party: null },
      { name: 'Frank Haas', title: 'Trustee', party: null },
      { name: 'Ruth Lund', title: 'Trustee', party: null },
    ],
  },

  'Forsyth Twp': {
    name: 'Forsyth Township',
    county: 'Marquette',
    website: 'https://forsythtownship.org',
    officials: [
      { name: 'Steven Kevern', title: 'Supervisor', party: null },
      { name: 'Ronald Lauren', title: 'Clerk', party: null },
      { name: 'Ross Underwood', title: 'Treasurer', party: null },
      { name: 'Len Fowler', title: 'Trustee', party: null },
      { name: 'Larry Hammond', title: 'Trustee', party: null },
    ],
  },

  'Humboldt Twp': {
    name: 'Humboldt Township',
    county: 'Marquette',
    website: 'http://www.humboldt.town',
    officials: [
      { name: 'Jeff Ogea', title: 'Supervisor', party: null },
      { name: 'Sarah Etelamaki', title: 'Clerk', party: null },
      { name: 'Betty Grund', title: 'Treasurer', party: null },
      { name: 'Peter Koski', title: 'Trustee', party: null },
      { name: 'Chris Grund', title: 'Trustee', party: null },
    ],
  },

  'Ishpeming Twp': {
    name: 'Ishpeming Township',
    county: 'Marquette',
    website: 'https://ishpemingtownship.com',
    officials: [
      { name: 'James Nankervis', title: 'Supervisor', party: null },
      { name: 'Nicole Hyry', title: 'Clerk', party: null },
      { name: 'Kristin Thornton', title: 'Treasurer', party: null },
      { name: 'Curt Sjoholm', title: 'Trustee', party: null },
      { name: 'Dave Bosio', title: 'Trustee', party: null },
    ],
  },

  'Marquette Charter Twp': {
    name: 'Marquette Charter Township',
    county: 'Marquette',
    website: 'https://www.marquettetownship.org',
    officials: [
      { name: 'Lyn Durant', title: 'Supervisor', party: null },
      { name: 'Randy Ritari', title: 'Clerk', party: null },
      { name: 'Andrew Rickauer', title: 'Treasurer', party: null },
      { name: 'Linda Winslow', title: 'Trustee', party: 'Democratic' },
      { name: 'Dan Everson', title: 'Trustee', party: 'Republican' },
      { name: 'Karl Kytta', title: 'Trustee', party: 'Republican' },
      { name: 'John Markes', title: 'Trustee', party: null },
    ],
  },

  'Michigamme Twp': {
    name: 'Michigamme Township',
    county: 'Marquette',
    website: 'https://michigammetownship.com',
    officials: [
      { name: 'Julia M.A. Leake', title: 'Supervisor', party: null },
      { name: 'Tami Hillis', title: 'Clerk', party: null },
      { name: 'Marsha McBride', title: 'Treasurer', party: null },
      { name: 'Trudy Seppanen', title: 'Trustee', party: null },
      { name: 'John Gregg', title: 'Trustee', party: null },
    ],
  },

  'Negaunee Twp': {
    name: 'Negaunee Township',
    county: 'Marquette',
    website: 'https://www.negauneetownship.org',
    officials: [
      { name: 'Gary Lee Wommer', title: 'Supervisor', party: null },
      { name: 'Rachel Sertich', title: 'Clerk', party: null },
      { name: 'Kathleen Carlson', title: 'Treasurer', party: null },
      { name: 'Thyra Karlstrom', title: 'Trustee', party: null },
      { name: 'Patrick Moyle', title: 'Trustee', party: null },
    ],
  },

  'Powell Twp': {
    name: 'Powell Township',
    county: 'Marquette',
    website: 'https://powelltownship.org',
    officials: [
      { name: 'Levi Ellis', title: 'Supervisor', party: null },
      { name: 'Daryl Wilcox', title: 'Treasurer', party: null },
    ],
  },

  'Republic Twp': {
    name: 'Republic Township',
    county: 'Marquette',
    website: 'https://republicmichigan.com',
    officials: [
      { name: 'John Dulek', title: 'Supervisor', party: null },
      { name: 'Anna Griepentrog', title: 'Clerk', party: null },
      { name: 'Kristina Koski', title: 'Treasurer', party: null },
      { name: 'Duane Saari', title: 'Trustee', party: null },
    ],
  },

  'Richmond Twp': {
    name: 'Richmond Township',
    county: 'Marquette',
    website: 'https://www.richmondtwp.org',
    officials: [
      { name: 'Cindi Greenia', title: 'Supervisor', party: null },
      { name: 'Catherine LaFontaine', title: 'Clerk', party: null },
      { name: 'Chris Brickel', title: 'Treasurer', party: null },
      { name: 'Vern Kulman', title: 'Trustee', party: null },
      { name: 'Charles Cryderman', title: 'Trustee', party: null },
    ],
  },

  'Sands Twp': {
    name: 'Sands Township',
    county: 'Marquette',
    website: 'https://www.sandstownship.org',
    officials: [
      { name: 'Darlene Walch', title: 'Supervisor', party: null },
      { name: 'Carolyn Kerkela', title: 'Clerk', party: null },
      { name: 'Kent Koehn', title: 'Treasurer', party: null },
      { name: 'Justin Yelle', title: 'Trustee', party: null },
      { name: 'David Kallio', title: 'Trustee', party: null },
    ],
  },

  'Skandia Twp': {
    name: 'Skandia Township',
    county: 'Marquette',
    website: 'https://www.skandiatownship.org',
    officials: [
      { name: 'Anna Erickson', title: 'Supervisor', party: null },
      { name: 'Marilyn Keto', title: 'Clerk', party: null },
      { name: 'Judy McGuire', title: 'Treasurer', party: null },
      { name: 'Brandon Bray', title: 'Trustee', party: null },
      { name: 'Larry Linna', title: 'Trustee', party: null },
    ],
  },

  'Tilden Twp': {
    name: 'Tilden Township',
    county: 'Marquette',
    website: 'https://tildentwp.org',
    officials: [
      { name: 'Fred Van Luven', title: 'Supervisor', party: null },
      { name: 'Deborah Pellow', title: 'Clerk', party: null },
      { name: 'Julie Filbrandt', title: 'Treasurer', party: null },
      { name: 'Craig Marietti', title: 'Trustee', party: null },
      { name: 'Gary Thibeault', title: 'Trustee', party: null },
    ],
  },

  'Turin Twp': {
    name: 'Turin Township',
    county: 'Marquette',
    officials: [
      { name: 'Gary Brunngraeber', title: 'Supervisor', party: null },
      { name: 'Priscilla Brunngraeber', title: 'Clerk', party: null },
      { name: 'Jackie Kayser', title: 'Treasurer', party: null },
      { name: 'Lori Ledgerwood', title: 'Trustee', party: null },
      { name: 'Becky Roberts', title: 'Trustee', party: null },
    ],
  },

  'Wells Twp (Marquette)': {
    name: 'Wells Township',
    county: 'Marquette',
    website: 'https://www.wellstownshipmarquettecounty.com',
    officials: [
      { name: 'Robert Therrian', title: 'Supervisor', party: null },
      { name: 'Patti Manninen', title: 'Clerk', party: null },
      { name: 'Dawn Austin', title: 'Treasurer', party: null },
      { name: 'Josh Hardy', title: 'Trustee', party: null },
      { name: 'Steve Mileski', title: 'Trustee', party: null },
    ],
  },
}

/* ── School board officials ── */

export const MI_SCHOOL_BOARDS = {
  'Ann Arbor Public Schools': {
    name: 'Ann Arbor Public Schools Board of Education',
    website: 'https://www.a2schools.org',
    phone: '734-994-2200',
    officials: [
      { name: 'Torchio Feaster', title: 'President', party: null },
      { name: 'Susan Schmidt', title: 'Vice President', party: null },
      { name: 'Don Wilkerson', title: 'Treasurer', party: null },
      { name: 'Glynda Wilks', title: 'Secretary', party: null },
      { name: 'Leslie Wilkins', title: 'Parliamentarian', party: null },
      { name: 'Susan Baskett', title: 'Trustee', party: null },
      { name: 'Rima Mohammad', title: 'Trustee', party: null },
    ],
  },

  'Detroit Public Schools Community District': {
    name: 'Detroit Public Schools Community District Board of Education',
    website: 'https://www.detroitk12.org',
    phone: '313-873-7490',
    officials: [
      { name: 'Angelique Peterson-Mayberry', title: 'President', party: null },
      { name: 'Sherry Gay-Dagnogo', title: 'Vice President', party: null },
      { name: 'Misha Stallworth', title: 'Treasurer', party: null },
      { name: 'Georgia Lemmons', title: 'Secretary', party: null },
      { name: 'Corletta Vaughn', title: 'Trustee', party: null },
      { name: 'Darryl Brown', title: 'Trustee', party: null },
      { name: 'Lisa Johnson', title: 'Trustee', party: null },
    ],
  },

  'Grand Rapids Public Schools': {
    name: 'Grand Rapids Public Schools Board of Education',
    website: 'https://www.grps.org',
    phone: '616-819-2000',
    superintendent: 'Dr. Leadriane Roby',
    officials: [
      { name: 'Kymberlie Davis', title: 'President', party: null },
      { name: 'Jen Schottke', title: 'Vice President', party: null },
      { name: 'Tony Baker', title: 'Secretary', party: null },
      { name: 'Kimberley Williams', title: 'Treasurer', party: null },
      { name: 'Jose Flores', title: 'Trustee', party: null },
      { name: 'John Matias', title: 'Trustee', party: null },
      { name: 'Raynard Ross', title: 'Trustee', party: null },
      { name: 'Kristian Salgado-Grant', title: 'Trustee', party: null },
      { name: 'Katherine Schraven Lewis', title: 'Trustee', party: null },
    ],
  },

  'Lansing School District': {
    name: 'Lansing School District Board of Education',
    website: 'https://www.lansingschools.net',
    phone: '517-755-1000',
    officials: [
      { name: 'Gabrielle Lawrence', title: 'President', party: null },
      { name: 'Caitlin Cavanagh', title: 'Vice President', party: null },
      { name: 'Farhan Sheikh-Omar', title: 'Secretary', party: null },
      { name: 'Beth Soria', title: 'Treasurer', party: null },
      { name: 'Rachel Willis', title: 'Trustee', party: null },
      { name: 'Nathan Burl', title: 'Trustee', party: null },
      { name: 'Guillermo Lopez', title: 'Trustee', party: null },
    ],
  },

  'Flint Community Schools': {
    name: 'Flint Community Schools Board of Education',
    website: 'https://www.flintschools.org',
    phone: '810-760-1000',
    officials: [
      { name: 'Carol McIntosh', title: 'President', party: null },
      { name: 'Allen Gilbert', title: 'Vice President', party: null },
      { name: 'Danielle Green', title: 'Secretary', party: null },
      { name: 'Casey Lester', title: 'Treasurer', party: null },
      { name: 'Laura MacIntyre', title: 'Trustee', party: null },
      { name: 'Michael Clack', title: 'Trustee', party: null },
      { name: 'Joyce Ellis-McNeal', title: 'Trustee', party: null },
    ],
  },

  'Kalamazoo Public Schools': {
    name: 'Kalamazoo Public Schools Board of Education',
    website: 'https://www.kalamazoopublicschools.com',
    phone: '269-337-0100',
    officials: [
      { name: 'Patti Sholler-Barber', title: 'President', party: null },
      { name: 'Ken Greschak', title: 'Vice President', party: null },
      { name: 'Tandy Moore', title: 'Secretary', party: null },
      { name: 'Jermaine Jackson', title: 'Treasurer', party: null },
      { name: 'Megan Dykstra', title: 'Trustee', party: null },
      { name: 'Jason Bussler', title: 'Trustee', party: null },
      { name: 'TiAnna Harrison', title: 'Trustee', party: null },
    ],
  },

  'Dearborn City School District': {
    name: 'Dearborn Public Schools Board of Education',
    website: 'https://www.dearbornschools.org',
    phone: '313-827-3000',
    officials: [
      { name: 'Roxanne McDonald', title: 'President', party: null },
      { name: 'Pat D\'Ambrosio', title: 'Vice President', party: null },
      { name: 'Mary Petlichkoff', title: 'Secretary', party: null },
      { name: 'Jim Thorpe', title: 'Treasurer', party: null },
      { name: 'Adel Mozip', title: 'Trustee', party: null },
      { name: 'Hussein Berry', title: 'Trustee', party: null },
      { name: 'Irene Watts', title: 'Trustee', party: null },
    ],
  },

  /* ── West Michigan school boards ── */

  'Holland Public Schools': {
    name: 'Holland Public Schools Board of Education',
    website: 'https://www.hollandpublicschools.org',
    phone: '616-494-2005',
    officials: [
      { name: 'Liz Colburn', title: 'President', party: null },
      { name: 'Mark Woltman', title: 'Vice President', party: null },
      { name: 'Lois Mulder', title: 'Secretary', party: null },
      { name: 'Diane Ybarra', title: 'Treasurer', party: null },
      { name: 'Chris Arendshorst', title: 'Trustee', party: null },
      { name: 'Rebekah Schipper', title: 'Trustee', party: null },
      { name: 'Martin Veliz', title: 'Trustee', party: null },
    ],
  },

  'West Ottawa Public Schools': {
    name: 'West Ottawa Public Schools Board of Education',
    website: 'https://www.westottawa.net',
    phone: '616-786-2000',
    officials: [
      { name: 'C. Lebster', title: 'President', party: null },
      { name: 'J. Otteman', title: 'Vice President', party: null },
      { name: 'L. Rutan', title: 'Secretary', party: null },
      { name: 'M. Remenschneider', title: 'Treasurer', party: null },
      { name: 'D. Duistermars', title: 'Trustee', party: null },
      { name: 'C. Martinez', title: 'Trustee', party: null },
      { name: 'R. Schipper', title: 'Trustee', party: null },
    ],
  },

  'Forest Hills Public Schools': {
    name: 'Forest Hills Public Schools Board of Education',
    website: 'https://www.fhps.net',
    phone: '616-493-8800',
    superintendent: 'Ben Kirby',
    officials: [
      { name: 'Kristen Fauson', title: 'President', party: null },
      { name: 'Maggie Terryn', title: 'Vice President', party: null },
      { name: 'CJ Michaud', title: 'Treasurer', party: null },
      { name: 'Malorie Ninemeier', title: 'Secretary', party: null },
      { name: 'Shawn Colley', title: 'Trustee', party: null },
      { name: 'Kelly Kermode', title: 'Trustee', party: null },
      { name: 'Holly DeBoer', title: 'Trustee', party: null },
    ],
  },

  'Kentwood Public Schools': {
    name: 'Kentwood Public Schools Board of Education',
    website: 'https://www.kentwoodps.org',
    phone: '616-455-4400',
    superintendent: 'Kevin Polston',
    officials: [
      { name: 'Mimi Madden', title: 'President', party: null },
      { name: 'Sylvia James', title: 'Vice President', party: null },
      { name: 'Allen Young', title: 'Secretary', party: null },
      { name: 'Pete Battey', title: 'Treasurer', party: null },
      { name: 'Tanya Powell-May', title: 'Trustee', party: null },
      { name: 'Kim Taboada-Arzate', title: 'Trustee', party: null },
      { name: 'Marlon Brown', title: 'Trustee', party: null },
    ],
  },

  'Rockford Public Schools': {
    name: 'Rockford Public Schools Board of Education',
    website: 'https://www.rockfordschools.org',
    superintendent: 'Dr. Steve Matthews',
    officials: [
      { name: 'Jarrod Folsom', title: 'President', party: null },
      { name: 'Christie Ramsey', title: 'Vice President', party: null },
      { name: 'Andrea Jacobson', title: 'Secretary', party: null },
      { name: 'Jake Himmelspach', title: 'Treasurer', party: null },
      { name: 'Tricia Anderson', title: 'Trustee', party: null },
      { name: 'Kelley Freridge', title: 'Trustee', party: null },
      { name: 'Barbara Helms', title: 'Trustee', party: null },
    ],
  },

  'Caledonia Community Schools': {
    name: 'Caledonia Community Schools Board of Education',
    website: 'https://www.calschools.org',
    phone: '616-891-8185',
    superintendent: 'Dirk Weeldreyer',
    officials: [
      { name: 'Tim Morris', title: 'President', party: null },
      { name: 'John Brandow', title: 'Vice President', party: null },
      { name: 'Jessica Kohn', title: 'Secretary', party: null },
      { name: 'Brittany Barber Garcia', title: 'Treasurer', party: null },
      { name: 'Kyle Clement', title: 'Trustee', party: null },
      { name: 'Shawn Collins', title: 'Trustee', party: null },
      { name: 'Jennifer Nichols', title: 'Trustee', party: null },
    ],
  },

  'Byron Center Public Schools': {
    name: 'Byron Center Public Schools Board of Education',
    website: 'https://www.bcpsk12.net',
    phone: '616-878-6100',
    superintendent: 'Kevin Macina',
    officials: [
      { name: 'Brenda Hondorp', title: 'President', party: null },
      { name: 'Amber Swift', title: 'Vice President', party: null },
      { name: 'Thalia Tilma', title: 'Secretary', party: null },
      { name: 'Brad Wiechertjes', title: 'Treasurer', party: null },
      { name: 'Rob Hughes', title: 'Trustee', party: null },
      { name: 'Tom McCoy', title: 'Trustee', party: null },
      { name: 'Tim Oberst', title: 'Trustee', party: null },
    ],
  },

  'Kenowa Hills Public Schools': {
    name: 'Kenowa Hills Public Schools Board of Education',
    website: 'https://www.khps.org',
    superintendent: 'Gerald W. Hopkins Jr.',
    officials: [
      { name: 'Erin LaBotz', title: 'President', party: null },
      { name: 'Corey Turner', title: 'Vice President', party: null },
      { name: 'Melissa Courtade', title: 'Secretary', party: null },
      { name: 'Tracey Hart', title: 'Treasurer', party: null },
      { name: 'Danielle Roberts', title: 'Trustee', party: null },
      { name: 'Mark Robinson', title: 'Trustee', party: null },
      { name: 'Jeff Gustinis', title: 'Trustee', party: null },
    ],
  },

  'Godwin Heights Public Schools': {
    name: 'Godwin Heights Public Schools Board of Education',
    website: 'https://www.godwinschools.org',
    superintendent: 'Chad Conklin',
    officials: [
      /* UNVERIFIED: board member names not confirmed via web search -- check godwinschools.org */
    ],
  },

  'Grandville Public Schools': {
    name: 'Grandville Public Schools Board of Education',
    website: 'https://www.gpsbulldogs.org',
    superintendent: 'John Philo',
    officials: [
      { name: 'Jason Heyboer', title: 'President', party: null },
      { name: 'Amy Campbell', title: 'Vice President', party: null },
      { name: 'Sally VanEck', title: 'Secretary', party: null },
      { name: 'Amy Gardine', title: 'Treasurer', party: null },
      { name: 'Bob Wondergem', title: 'Trustee', party: null },
      { name: 'Joe Steffes', title: 'Trustee', party: null },
      { name: 'Brent DeHaan', title: 'Trustee', party: null },
    ],
  },

  'East Grand Rapids Public Schools': {
    name: 'East Grand Rapids Public Schools Board of Education',
    website: 'https://www.egrps.org',
    superintendent: 'Dr. Heidi S. Kattula',
    officials: [
      { name: 'Kerry Hegele', title: 'President', party: null },
      { name: 'Matt Richenthal', title: 'Vice President', party: null },
      { name: 'Bill Saxton', title: 'Secretary', party: null },
      { name: 'Layla Kuhl', title: 'Treasurer', party: null },
      { name: 'Mike Reid', title: 'Trustee', party: null },
      { name: 'Ben Smith', title: 'Trustee', party: null },
      { name: 'David Hall', title: 'Trustee', party: null },
    ],
  },

  'Wyoming Public Schools': {
    name: 'Wyoming Public Schools Board of Education',
    website: 'https://wyomingps.org',
    superintendent: 'Craig Hoekstra',
    officials: [
      { name: 'Craig Popma', title: 'Trustee', party: null },
      { name: 'Jeff Norton', title: 'Trustee', party: null },
      { name: 'Jennifer Lewis', title: 'Trustee', party: null },
      { name: 'Lisa Manley', title: 'Trustee', party: null },
      { name: 'Shannon Frick', title: 'Trustee', party: null },
      { name: 'Lisa DeKryger', title: 'Trustee', party: null },
      { name: 'Audrey Zapata', title: 'Trustee', party: null },
    ],
  },

  'Muskegon Public Schools': {
    name: 'Muskegon Public Schools Board of Education',
    website: 'https://muskegonpublicschools.org',
    phone: '231-720-2004',
    superintendent: 'Matthew Cortez',
    officials: [
      { name: 'Lynnette Marks', title: 'President', party: null },
      { name: 'Louis Churchwell', title: 'Vice President', party: null },
      { name: 'Christine Hamel', title: 'Secretary', party: null },
      { name: 'Kwame Kamau James', title: 'Treasurer', party: null },
      { name: 'Zachary Allen Anderson', title: 'Trustee', party: null },
      { name: 'Billie J. Bruce', title: 'Trustee', party: null },
      { name: 'Morgan Witmer', title: 'Trustee', party: null },
    ],
  },

  'Battle Creek Public Schools': {
    name: 'Battle Creek Public Schools Board of Education',
    website: 'https://www.battlecreekpublicschools.org',
    phone: '269-965-9400',
    officials: [
      { name: 'Jeremy Pochop', title: 'President', party: null },
      { name: 'Tammy Bierman', title: 'Vice President', party: null },
      { name: 'Tom Leathers', title: 'Trustee', party: null },
      { name: 'Bo Brummels', title: 'Trustee', party: null },
      { name: 'Toby Thompson', title: 'Trustee', party: null },
      { name: 'Paul Kuchar', title: 'Trustee', party: null },
    ],
  },

  /* ── Grand Traverse County school boards ── */
  'Traverse City Area Public Schools': {
    name: 'Traverse City Area Public Schools Board of Education',
    county: 'Grand Traverse',
    website: 'https://www.tcaps.net',
    phone: '231-933-1720',
    officials: [
      { name: 'Scott Newman-Bale', title: 'President', party: null },
      { name: 'Erica Moon Mohr', title: 'Vice President', party: null },
      { name: 'Jane Klegman', title: 'Secretary', party: null },
      { name: 'Jeff Leonhardt', title: 'Treasurer', party: null },
      { name: 'Scott Hardy', title: 'Trustee', party: null },
      { name: 'Sara Bageris', title: 'Trustee', party: null },
      { name: 'Flournoy Humphreys', title: 'Trustee', party: null },
    ],
  },
  'Kingsley Area Schools': {
    name: 'Kingsley Area Schools Board of Education',
    county: 'Grand Traverse',
    website: 'https://www.kingsleyareaschools.com',
    phone: '231-263-5261',
    officials: [
      { name: 'Robert Keith', title: 'President', party: null },
      { name: 'Michelle Furlong', title: 'Vice President', party: null },
      { name: 'Dana Esterline', title: 'Secretary', party: null },
      { name: 'Jodie Elzinga', title: 'Treasurer', party: null },
      { name: 'Jason Doherty', title: 'Trustee', party: null },
      { name: 'Mark Jankovic', title: 'Trustee', party: null },
      { name: 'Derek Kaeding', title: 'Trustee', party: null },
    ],
  },
  'Elk Rapids Schools': {
    name: 'Elk Rapids Schools Board of Education',
    county: 'Grand Traverse',
    website: 'https://www.elkrapids.org',
    phone: '231-264-6634',
    officials: [
      { name: 'Jennifer Brown', title: 'President', party: null },
      { name: 'Dan Risbridger', title: 'Vice President', party: null },
      { name: 'Bob Hentschel', title: 'Secretary', party: null },
      { name: 'Matt Buday', title: 'Treasurer', party: null },
      { name: 'Maura Sanders', title: 'Trustee', party: null },
      { name: 'Rachel Gokey', title: 'Trustee', party: null },
      { name: 'Nathan Milligan', title: 'Trustee', party: null },
    ],
  },

  'Portage Public Schools': {
    name: 'Portage Public Schools Board of Education',
    website: 'https://www.portageps.org',
    phone: '269-323-5000',
    officials: [],
  },

  /* ── Southeast Michigan (Macomb/Oakland/Wayne) school boards ── */

  'Warren Consolidated Schools': {
    name: 'Warren Consolidated Schools Board of Education',
    website: 'https://www.wcskids.net',
    phone: '586-825-2400',
    officials: [
      { name: 'Susan Jozwik', title: 'President', party: null },
      { name: 'Carl Weckerle', title: 'Vice President', party: null },
      { name: 'Megan Papasian-Broadwell', title: 'Secretary', party: null },
      { name: 'Brian White', title: 'Treasurer', party: null },
      { name: 'Leah Berdy', title: 'Trustee', party: null },
      { name: 'Chris Barnett', title: 'Trustee', party: null },
      { name: 'Kyle McCauley', title: 'Trustee', party: null },
    ],
  },

  'Utica Community Schools': {
    name: 'Utica Community Schools Board of Education',
    website: 'https://www.uticak12.org',
    phone: '586-797-1000',
    officials: [
      { name: 'Torri DiGiovanni', title: 'President', party: null },
      { name: 'Danielle Rusnak', title: 'Vice President', party: null },
      { name: 'Sharon Sabo', title: 'Secretary', party: null },
      { name: 'Richard Kinyon', title: 'Treasurer', party: null },
      { name: 'Laura Miller', title: 'Trustee', party: null },
      { name: 'Kelli Callender', title: 'Trustee', party: null },
      { name: 'Eric Jones', title: 'Trustee', party: null },
    ],
  },

  'Troy School District': {
    name: 'Troy School District Board of Education',
    website: 'https://www.troy.k12.mi.us',
    phone: '248-823-4000',
    officials: [
      { name: 'Karl Schmidt', title: 'President', party: null },
      { name: 'Kristy McDonald', title: 'Vice President', party: null },
      { name: 'Kevin Takyi', title: 'Secretary', party: null },
      { name: 'Bruce Martin', title: 'Treasurer', party: null },
      { name: 'Heather Hill', title: 'Trustee', party: null },
      { name: 'Saumil Maniar', title: 'Trustee', party: null },
      { name: 'Michael McElroy', title: 'Trustee', party: null },
    ],
  },

  'Rochester Community Schools': {
    name: 'Rochester Community Schools Board of Education',
    website: 'https://www.rochester.k12.mi.us',
    phone: '248-726-3000',
    officials: [
      { name: 'Michelle Bueltel', title: 'President', party: null },
      { name: 'Jessica Gupta', title: 'Vice President', party: null },
      { name: 'Scott Muska', title: 'Secretary', party: null },
      { name: 'Kristin Bull', title: 'Treasurer', party: null },
      { name: 'Andrea Blazak', title: 'Trustee', party: null },
      { name: 'Nathan Hughes', title: 'Trustee', party: null },
      { name: 'Samantha Wright', title: 'Trustee', party: null },
    ],
  },

  'Livonia Public Schools': {
    name: 'Livonia Public Schools Board of Education',
    website: 'https://www.livoniapublicschools.org',
    phone: '734-744-2500',
    officials: [
      { name: 'Colleen Burton', title: 'President', party: null },
      { name: 'Mark Johnson', title: 'Vice President', party: null },
      { name: 'Tammy Bonifield', title: 'Secretary', party: null },
      { name: 'Dan Centers', title: 'Treasurer', party: null },
      { name: 'Karen Bradford', title: 'Trustee', party: null },
      { name: 'Madeline Acosta', title: 'Trustee', party: null },
      { name: 'Liz Jarvis', title: 'Trustee', party: null },
    ],
  },

  'Plymouth-Canton Community Schools': {
    name: 'Plymouth-Canton Community Schools Board of Education',
    website: 'https://www.pccsk12.com',
    phone: '734-416-2700',
    officials: [
      { name: 'Lauren Christenson', title: 'President', party: null },
      { name: 'Patti McCoin', title: 'Vice President', party: null },
      { name: 'Anupam Sidhu', title: 'Secretary', party: null },
      { name: 'Chris Gatti', title: 'Treasurer', party: null },
      { name: 'Kate Borninski', title: 'Trustee', party: null },
      { name: 'Garrett Kolo', title: 'Trustee', party: null },
      { name: 'Mark Horvath', title: 'Trustee', party: null },
    ],
  },

  'Northville Public Schools': {
    name: 'Northville Public Schools Board of Education',
    website: 'https://www.northvilleschools.org',
    phone: '248-344-3500',
    officials: [
      { name: 'Matthew Wilk', title: 'President', party: null },
      { name: 'Sarah Prescott', title: 'Vice President', party: null },
      { name: 'Angela Jaafar', title: 'Secretary', party: null },
      { name: 'Scott Craig', title: 'Treasurer', party: null },
      { name: 'Nisa Raju', title: 'Trustee', party: null },
      { name: 'James Mazurek', title: 'Trustee', party: null },
      { name: 'Lori Longo', title: 'Trustee', party: null },
    ],
  },

  'Wayne-Westland Community Schools': {
    name: 'Wayne-Westland Community Schools Board of Education',
    website: 'https://www.wwcsd.net',
    phone: '734-419-2000',
    officials: [
      { name: 'David Cox', title: 'President', party: null },
      { name: 'Melandie Hines', title: 'Vice President', party: null },
      { name: 'Sally Madison', title: 'Secretary', party: null },
      { name: 'Daniel Bigelow', title: 'Treasurer', party: null },
      { name: 'Lisa Nocerini', title: 'Trustee', party: null },
      { name: 'Chris Barnett', title: 'Trustee', party: null },
      { name: 'Brenda Burks', title: 'Trustee', party: null },
    ],
  },

  'Garden City Public Schools': {
    name: 'Garden City Public Schools Board of Education',
    website: 'https://www.gardencityschools.com',
    phone: '734-762-8300',
    officials: [
      { name: 'Patrick Kelly', title: 'President', party: null },
      { name: 'Darlene Jablonowski', title: 'Vice President', party: null },
      { name: 'Jeff Dengel', title: 'Secretary', party: null },
      { name: 'Jennifer Coulter', title: 'Treasurer', party: null },
      { name: 'Keri Gidley', title: 'Trustee', party: null },
      { name: 'Tracy Reno', title: 'Trustee', party: null },
      { name: 'Robert Russ', title: 'Trustee', party: null },
    ],
  },

  'Southfield Public Schools': {
    name: 'Southfield Public Schools Board of Education',
    website: 'https://www.southfield.k12.mi.us',
    phone: '248-746-8500',
    officials: [
      { name: 'Rana Shariat', title: 'President', party: null },
      { name: 'Larry Hightower', title: 'Vice President', party: null },
      { name: 'Teri Banks', title: 'Secretary', party: null },
      { name: 'Yvette McIntosh', title: 'Treasurer', party: null },
      { name: 'Felicia Johnson', title: 'Trustee', party: null },
      { name: 'Sherika Hawkins', title: 'Trustee', party: null },
      { name: 'Kenneth Washington', title: 'Trustee', party: null },
    ],
  },

  'Pontiac School District': {
    name: 'Pontiac School District Board of Education',
    website: 'https://www.pontiacschools.org',
    phone: '248-451-6800',
    officials: [
      { name: 'Brenda Carter', title: 'President', party: null },
      { name: 'Michael Sharpe', title: 'Vice President', party: null },
      { name: 'Brenda Sims', title: 'Secretary', party: null },
      { name: 'Shirley Barnett', title: 'Treasurer', party: null },
      { name: 'Cathy Mitchell', title: 'Trustee', party: null },
      { name: 'Walter Moore', title: 'Trustee', party: null },
      { name: 'Anthony January', title: 'Trustee', party: null },
    ],
  },

  'Lake Orion Community Schools': {
    name: 'Lake Orion Community Schools Board of Education',
    website: 'https://www.lakeorion.k12.mi.us',
    phone: '248-693-5400',
    officials: [
      { name: 'Birgit McQuiston', title: 'President', party: null },
      { name: 'Matthew Maddock', title: 'Vice President', party: null },
      { name: 'Dana Mermell', title: 'Secretary', party: null },
      { name: 'Steve Drakos', title: 'Treasurer', party: null },
      { name: 'Heidi Mercer', title: 'Trustee', party: null },
      { name: 'Jake Singer', title: 'Trustee', party: null },
      { name: 'Angie Henderson', title: 'Trustee', party: null },
    ],
  },

  'Clarkston Community Schools': {
    name: 'Clarkston Community Schools Board of Education',
    website: 'https://www.clarkston.k12.mi.us',
    phone: '248-623-5400',
    officials: [
      { name: 'Elizabeth Needham', title: 'President', party: null },
      { name: 'Greg Need', title: 'Vice President', party: null },
      { name: 'Heather Regan', title: 'Secretary', party: null },
      { name: 'Peter Ramsey', title: 'Treasurer', party: null },
      { name: 'Jeff Allsteadt', title: 'Trustee', party: null },
      { name: 'Michael Blanchard', title: 'Trustee', party: null },
      { name: 'Kelli Horst', title: 'Trustee', party: null },
    ],
  },

  'Oxford Community Schools': {
    name: 'Oxford Community Schools Board of Education',
    website: 'https://www.oxfordschools.org',
    phone: '248-969-5000',
    officials: [
      { name: 'Tom Donnelly', title: 'President', party: null },
      { name: 'Korey Bailey', title: 'Vice President', party: null },
      { name: "Dan D'Alessandro", title: 'Secretary', party: null },
      { name: 'Heather Shafer', title: 'Treasurer', party: null },
      { name: 'Kelly Davio', title: 'Trustee', party: null },
      { name: 'Mary Hanser', title: 'Trustee', party: null },
      { name: 'Mike Schweig', title: 'Trustee', party: null },
    ],
  },

  'Chippewa Valley Schools': {
    name: 'Chippewa Valley Schools Board of Education',
    website: 'https://www.chippewavalleyschools.org',
    phone: '586-723-2000',
    officials: [
      { name: 'George Sobah', title: 'President', party: null },
      { name: 'Frank Markel', title: 'Vice President', party: null },
      { name: 'Denise Aquino', title: 'Secretary', party: null },
      { name: 'Beth Jones', title: 'Treasurer', party: null },
      { name: 'Andy Blondell', title: 'Trustee', party: null },
      { name: 'Laura Cardamone', title: 'Trustee', party: null },
      { name: 'Jeanette Grinvalsky', title: 'Trustee', party: null },
    ],
  },

  "L'Anse Creuse Public Schools": {
    name: "L'Anse Creuse Public Schools Board of Education",
    website: 'https://www.lc-ps.org',
    phone: '586-783-6300',
    officials: [
      { name: 'Jenifer Kuczajda', title: 'President', party: null },
      { name: 'Joe Doran', title: 'Vice President', party: null },
      { name: 'Joann Emmons', title: 'Secretary', party: null },
      { name: 'Corey Spiller', title: 'Treasurer', party: null },
      { name: 'Amy Ruggiero', title: 'Trustee', party: null },
      { name: 'Michael Loper', title: 'Trustee', party: null },
      { name: 'Cindy Ford', title: 'Trustee', party: null },
    ],
  },

  /* ── Mid-Michigan school boards ── */

  'East Lansing Public Schools': {
    name: 'East Lansing Public Schools Board of Education',
    website: 'https://www.elps.us',
    phone: '517-333-7420',
    officials: [
      { name: 'Erin Graham', title: 'President', party: null },
      { name: 'Kath Edsall', title: 'Vice President', party: null },
      { name: 'Sandy Banas', title: 'Secretary', party: null },
      { name: 'Terah Chambers', title: 'Treasurer', party: null },
      { name: 'Nichole Martin', title: 'Trustee', party: null },
      { name: 'Monica Fink', title: 'Trustee', party: null },
      { name: 'Chris Unger', title: 'Trustee', party: null },
    ],
  },

  'Jackson Public Schools': {
    name: 'Jackson Public Schools Board of Education',
    website: 'https://www.jpsk12.org',
    phone: '517-841-2149',
    officials: [
      { name: 'Angela Wilson', title: 'President', party: null },
      { name: 'Robert Patterson', title: 'Vice President', party: null },
      { name: 'Kesha Hamilton', title: 'Secretary', party: null },
      { name: 'Shelly Spicer', title: 'Treasurer', party: null },
      { name: 'Karl Carpenter', title: 'Trustee', party: null },
      { name: 'Andrew Gower', title: 'Trustee', party: null },
      { name: 'Tina Busch', title: 'Trustee', party: null },
    ],
  },

  'Bay City Public Schools': {
    name: 'Bay City Public Schools Board of Education',
    website: 'https://www.bcschools.net',
    phone: '989-893-5520',
    officials: [
      { name: 'Aaron Wyllie', title: 'President', party: null },
      { name: 'Tina Kubatzke', title: 'Vice President', party: null },
      { name: 'Christopher Connolly', title: 'Secretary', party: null },
      { name: 'Mark Sullivan', title: 'Treasurer', party: null },
      { name: 'Kama DuBois', title: 'Trustee', party: null },
      { name: 'Steve McDowell', title: 'Trustee', party: null },
      { name: 'Jason Van Duren', title: 'Trustee', party: null },
    ],
  },

  'Saginaw Township Community Schools': {
    name: 'Saginaw Township Community Schools Board of Education',
    website: 'https://www.stcs.org',
    phone: '989-797-1800',
    officials: [
      { name: 'Heather Reetz', title: 'President', party: null },
      { name: 'Lori McFarland', title: 'Vice President', party: null },
      { name: 'Paul Baxter', title: 'Secretary', party: null },
      { name: 'Nate Mihaly', title: 'Treasurer', party: null },
      { name: 'Emily Poggi', title: 'Trustee', party: null },
      { name: 'Ruth Ann Knapp', title: 'Trustee', party: null },
      { name: 'Chad Rajski', title: 'Trustee', party: null },
    ],
  },

  'Midland Public Schools': {
    name: 'Midland Public Schools Board of Education',
    website: 'https://www.midlandps.org',
    phone: '989-923-5001',
    officials: [
      { name: 'Jay Rapanos', title: 'President', party: null },
      { name: 'Pam Singer', title: 'Vice President', party: null },
      { name: 'Larry Hutchison', title: 'Secretary', party: null },
      { name: 'Cathy Shallal', title: 'Treasurer', party: null },
      { name: 'Scott McFarland', title: 'Trustee', party: null },
      { name: 'David Barker', title: 'Trustee', party: null },
      { name: 'Mary Beth Rhoads', title: 'Trustee', party: null },
    ],
  },

  'Mt. Pleasant Public Schools': {
    name: 'Mt. Pleasant Public Schools Board of Education',
    website: 'https://www.mtpleasantschools.net',
    phone: '989-775-2300',
    officials: [
      { name: 'Jennifer Verleger', title: 'President', party: null },
      { name: 'Mary Heaton', title: 'Vice President', party: null },
      { name: 'Brook Harris', title: 'Secretary', party: null },
      { name: 'Lesley Hoenig', title: 'Treasurer', party: null },
      { name: 'Jeff Lierman', title: 'Trustee', party: null },
      { name: 'Jim Wheeler', title: 'Trustee', party: null },
      { name: 'Tonya Griffith', title: 'Trustee', party: null },
    ],
  },

  /* ── Northern Michigan school boards ── */

  'Big Rapids Public Schools': {
    name: 'Big Rapids Public Schools Board of Education',
    website: 'https://www.brps.org',
    phone: '231-796-2627',
    officials: [
      { name: 'Tiffanie Murray-McFarlane', title: 'President', party: null },
      { name: 'Amy James', title: 'Vice President', party: null },
      { name: 'Jason Hafer', title: 'Secretary', party: null },
      { name: 'Matt Whitman', title: 'Treasurer', party: null },
      { name: 'Steve Grunert', title: 'Trustee', party: null },
      { name: 'Kelly Bowers', title: 'Trustee', party: null },
      { name: 'Tara Boes', title: 'Trustee', party: null },
    ],
  },

  'Marquette Area Public Schools': {
    name: 'Marquette Area Public Schools Board of Education',
    county: 'Marquette',
    website: 'https://www.mapsnet.org',
    phone: '906-225-4200',
    officials: [
      { name: 'Kristen Cambensy', title: 'President', party: null },
      { name: 'James Hewitt', title: 'Secretary/Treasurer', party: null },
      { name: 'Jennifer Klipp', title: 'Trustee', party: null },
      { name: 'Jennifer Ray', title: 'Trustee', party: null },
      { name: 'Cherryl Maddox-Smith', title: 'Trustee', party: null },
      { name: 'Jason Zdunek', title: 'Trustee', party: null },
      { name: 'Cassidy Thomas', title: 'Trustee', party: null },
    ],
  },

  'Petoskey Public Schools': {
    name: 'Petoskey Public Schools Board of Education',
    website: 'https://www.petoskeyschools.org',
    phone: '231-348-2100',
    officials: [
      { name: 'Troy Ingleright', title: 'President', party: null },
      { name: 'Michelle Alger', title: 'Vice President', party: null },
      { name: 'Pat Hooyman', title: 'Secretary', party: null },
      { name: 'Kathy Meyerson', title: 'Treasurer', party: null },
      { name: 'John Murphy', title: 'Trustee', party: null },
      { name: 'Ashley Cousens', title: 'Trustee', party: null },
      { name: 'Scott Gilmore', title: 'Trustee', party: null },
    ],
  },

  /* ── Muskegon / Ottawa County school boards ── */

  'Mona Shores Public Schools': {
    name: 'Mona Shores Public Schools Board of Education',
    website: 'https://www.monashores.net',
    phone: '231-780-4751',
    superintendent: 'Bill O\'Brien',
    officials: [
      { name: 'Christine Burnaw', title: 'President', party: null },
      { name: 'Jeanne Cooper-Kuiper', title: 'Vice President', party: null },
      { name: 'Kandace Boysen', title: 'Secretary', party: null },
      { name: 'Mary McClellan', title: 'Treasurer', party: null },
      { name: 'A.J. Eckert', title: 'Trustee', party: null },
      { name: 'Jay Keessen', title: 'Trustee', party: null },
      { name: 'Stan Miller', title: 'Trustee', party: null },
    ],
  },

  'Reeths-Puffer Schools': {
    name: 'Reeths-Puffer Schools Board of Education',
    website: 'https://www.reeths-puffer.org',
    phone: '231-744-4736',
    superintendent: 'Steve Edwards',
    officials: [
      { name: 'Kim Bramer', title: 'President', party: null },
      { name: 'Jennifer Romanosky', title: 'Vice President', party: null },
      { name: 'Susan Blackburn', title: 'Secretary', party: null },
      { name: 'Chris Brooks', title: 'Treasurer', party: null },
      { name: 'Sonya Hernandez', title: 'Trustee', party: null },
      { name: 'Tim Wheeler', title: 'Trustee', party: null },
      { name: 'Alex Keefe', title: 'Trustee', party: null },
    ],
  },

  'Orchard View Schools': {
    name: 'Orchard View Schools Board of Education',
    website: 'https://www.orchardview.org',
    phone: '231-760-1310',
    superintendent: 'Jim Nielsen',
    officials: [
      { name: 'Tom Joppie', title: 'President', party: null },
      { name: 'Janet Taylor', title: 'Vice President', party: null },
      { name: 'Cynthia Bankhead', title: 'Secretary', party: null },
      { name: 'Leslie Nelson', title: 'Treasurer', party: null },
      { name: 'Jeff Eggeman', title: 'Trustee', party: null },
      { name: 'Angela Brown', title: 'Trustee', party: null },
      { name: 'Sharon Horsly', title: 'Trustee', party: null },
    ],
  },

  'Oakridge Public Schools': {
    name: 'Oakridge Public Schools Board of Education',
    website: 'https://oakridgeschools.org',
    phone: '231-788-7100',
    superintendent: 'Tom Livezey',
    officials: [
      { name: 'Jeff Kartes', title: 'President', party: null },
      { name: 'Doug DeWitte', title: 'Vice President', party: null },
      { name: 'George Tindall', title: 'Secretary', party: null },
      { name: 'Tammy Stolberg', title: 'Treasurer', party: null },
      { name: 'Krista Ritchard', title: 'Trustee', party: null },
      { name: 'Craig Scott', title: 'Trustee', party: null },
      { name: 'Brandon VanDonkelaar', title: 'Trustee', party: null },
    ],
  },

  'Ravenna Public Schools': {
    name: 'Ravenna Public Schools Board of Education',
    website: 'https://www.ravennaschools.org',
    phone: '231-853-2231',
    superintendent: 'Greg Helmer',
    officials: [
      { name: 'Josh Emery', title: 'Trustee', party: null },
      { name: 'Fred Rosel', title: 'Trustee', party: null },
      { name: 'Mike Pierson', title: 'Trustee', party: null },
      { name: 'Ryan Jawor', title: 'Trustee', party: null },
      { name: 'Robert Becklin', title: 'Trustee', party: null },
      { name: 'Becki Deater', title: 'Trustee', party: null },
      { name: 'Mark Jacobs', title: 'Trustee', party: null },
    ],
  },

  'Whitehall District Schools': {
    name: 'Whitehall District Schools Board of Education',
    website: 'https://www.whitehallschools.net',
    phone: '231-893-1010',
    superintendent: 'CJ Van Wieren',
    officials: [
      { name: 'Rachel Fekken', title: 'President', party: null },
      { name: 'Chris Mahoney', title: 'Trustee', party: null },
      { name: 'Paula Martin', title: 'Trustee', party: null },
      { name: 'Jimmy TenBrink', title: 'Trustee', party: null },
      { name: 'Shannon McGoran', title: 'Trustee', party: null },
      { name: 'Tim Cross', title: 'Trustee', party: null },
      { name: 'Melissa Moore', title: 'Trustee', party: null },
    ],
  },

  'Montague Area Public Schools': {
    name: 'Montague Area Public Schools Board of Education',
    website: 'https://www.mapsk12.org',
    phone: '231-893-1515',
    superintendent: 'Jeffrey W. Johnson',
    officials: [
      { name: 'Brent Raeth', title: 'President', party: null },
      { name: 'Tom Johnson', title: 'Vice President', party: null },
      { name: 'Cindy Francis', title: 'Secretary', party: null },
      { name: 'Amanda Dahl', title: 'Treasurer', party: null },
      { name: 'Scott Beishuizen', title: 'Trustee', party: null },
      { name: 'Karen Neubauer', title: 'Trustee', party: null },
      { name: 'Joel Smith', title: 'Trustee', party: null },
    ],
  },

  'North Muskegon Public Schools': {
    name: 'North Muskegon Public Schools Board of Education',
    website: 'https://www.nmps.net',
    phone: '231-719-4100',
    superintendent: 'Curt Babcock',
    officials: [
      { name: 'Benjamin Scheerer', title: 'President', party: null },
      { name: 'Lisa Potts', title: 'Vice President', party: null },
      { name: 'Lisa Winter', title: 'Secretary', party: null },
      { name: 'Kimberly Senkow', title: 'Treasurer', party: null },
      { name: 'Steve Bliss', title: 'Trustee', party: null },
      { name: 'Susan Burmeister', title: 'Trustee', party: null },
      { name: 'Eric Peterson', title: 'Trustee', party: null },
    ],
  },

  'Fruitport Community Schools': {
    name: 'Fruitport Community Schools Board of Education',
    website: 'https://www.fruitportschools.net',
    phone: '231-865-4002',
    superintendent: 'Jason Kennedy',
    officials: [
      { name: 'Dave Hazekamp', title: 'President', party: null },
      { name: 'Tim Burgess', title: 'Trustee', party: null },
      { name: 'Kris Cole', title: 'Trustee', party: null },
      { name: 'Steve Kelly', title: 'Trustee', party: null },
      { name: 'JB Meeuwenberg', title: 'Trustee', party: null },
      { name: 'Josh Mueller', title: 'Trustee', party: null },
      { name: 'Kathy Six', title: 'Trustee', party: null },
    ],
  },

    'Jenison Public Schools': {
    name: 'Jenison Public Schools Board of Education',
    website: 'https://www.jpsonline.org',
    phone: '616-457-2400',
    officials: [
      { name: 'Brett VandenBerg', title: 'President', party: null },
      { name: 'Nathan Klein', title: 'Vice President', party: null },
      { name: 'Amanda Thomas', title: 'Secretary', party: null },
      { name: 'Kirk Lovelace', title: 'Treasurer', party: null },
      { name: 'Katie Hoffman', title: 'Trustee', party: null },
      { name: 'Jason Kelley', title: 'Trustee', party: null },
      { name: 'Mike Ruster', title: 'Trustee', party: null },
    ],
  },

  'Hudsonville Public Schools': {
    name: 'Hudsonville Public Schools Board of Education',
    website: 'https://www.hudsonvillepublicschools.org',
    phone: '616-669-1740',
    officials: [
      { name: 'Larry Kapenga', title: 'President', party: null },
      { name: 'Ben Essenburg', title: 'Vice President', party: null },
      { name: 'Katherine Grant', title: 'Secretary', party: null },
      { name: 'Randy Bosch', title: 'Treasurer', party: null },
      { name: 'Todd Herring', title: 'Trustee', party: null },
      { name: 'Tim Schottey', title: 'Trustee', party: null },
      { name: 'Misty Wing', title: 'Trustee', party: null },
    ],
  },

  'Zeeland Public Schools': {
    name: 'Zeeland Public Schools Board of Education',
    website: 'https://www.zps.org',
    phone: '616-748-3000',
    officials: [
      { name: 'Bryce Bernard', title: 'President', party: null },
      { name: 'Jill Bos', title: 'Vice President', party: null },
      { name: 'Michelle Brill', title: 'Secretary', party: null },
      { name: 'Ted Etheridge', title: 'Treasurer', party: null },
      { name: 'Jennifer Geerlings', title: 'Trustee', party: null },
      { name: 'Tim VanDyke', title: 'Trustee', party: null },
      { name: 'Sarah Steelberg', title: 'Trustee', party: null },
    ],
  },

  /* ── Ottawa County school districts ── */

  'Grand Haven Area Public Schools': {
    name: 'Grand Haven Area Public Schools',
    county: 'Ottawa',
    website: 'https://www.ghaps.org/',
    phone: '616-850-5000',
    officials: [
      { name: 'Chris Streng', title: 'President', party: null },
      { name: 'Marc Eickholt', title: 'Vice President', party: null },
      { name: 'Kristal Boyd', title: 'Secretary', party: null },
      { name: 'Seth Holt', title: 'Treasurer', party: null },
      { name: 'Cyndi Casemier', title: 'Trustee', party: null },
      { name: 'Heather Herrygers', title: 'Trustee', party: null },
      { name: 'Carl Treutler', title: 'Trustee', party: null },
    ],
  },

  'Coopersville Area Public Schools': {
    name: 'Coopersville Area Public Schools',
    county: 'Ottawa',
    website: 'https://coopersvillebroncos.org/',
    phone: '616-997-3200',
    officials: [
      { name: 'Michael Michalak', title: 'President', party: null },
      { name: 'Lynn VanSickle', title: 'Vice President', party: null },
      { name: 'Jill Buth', title: 'Secretary', party: null },
      { name: 'Alison Gillhespy', title: 'Treasurer', party: null },
      { name: 'Shaun Nelson', title: 'Trustee', party: null },
      { name: 'Ryan Post', title: 'Trustee', party: null },
      { name: 'Geoff Twietmeyer', title: 'Trustee', party: null },
    ],
  },

  'Spring Lake Public Schools': {
    name: 'Spring Lake Public Schools',
    county: 'Ottawa',
    website: 'https://www.springlakeschools.org/',
    phone: '616-846-5500',
    officials: [
      { name: 'Jennifer Nicles', title: 'President', party: null },
      { name: 'Kelly Vanderhoek', title: 'Vice President', party: null },
      { name: 'Curt Theune', title: 'Secretary', party: null },
      { name: 'Christopher Beck', title: 'Treasurer', party: null },
      { name: 'Paul Aldridge', title: 'Trustee', party: null },
      { name: 'Dustin Brown', title: 'Trustee', party: null },
      { name: 'Courtney Holmes', title: 'Trustee', party: null },
    ],
  },

  'Allendale Public Schools': {
    name: 'Allendale Public Schools',
    county: 'Ottawa',
    website: 'https://www.allendale.k12.mi.us/',
    phone: '616-892-5574',
    officials: [
      { name: 'Kevin Holstege', title: 'President', party: null },
      { name: 'Liz Ramey', title: 'Vice President', party: null },
      { name: 'Scott MacDonald', title: 'Secretary', party: null },
      { name: 'Ron Brouwer', title: 'Treasurer', party: null },
      { name: 'Christopher Breen', title: 'Trustee', party: null },
      { name: 'Meegan Zickus', title: 'Trustee', party: null },
      { name: 'Tonya Harris', title: 'Trustee', party: null },
    ],
  },

  'Holton Public Schools': {
    name: 'Holton Public Schools',
    county: 'Muskegon',
    website: 'https://www.holtonschools.org/',
    phone: '231-821-1700',
    officials: [
      { name: 'Amy Brookhouse', title: 'President', party: null },
      { name: 'Jack Vanderboegh', title: 'Vice President', party: null },
      { name: 'Sarah Hippler', title: 'Secretary', party: null },
      { name: 'Amber Slater', title: 'Treasurer', party: null },
      { name: 'Brian Byrnes', title: 'Trustee', party: null },
      { name: 'Beth Frey', title: 'Trustee', party: null },
      { name: "Andy O'Riley", title: 'Trustee', party: null },
    ],
  },

  /* ── Washtenaw County school boards ── */

  'Saline Area Schools': {
    name: 'Saline Area Schools Board of Education',
    website: 'https://www.salineschools.org',
    phone: '734-429-4831',
    officials: [
      { name: 'Jenny Miller', title: 'President', party: null },
      { name: 'Brad Gerbe', title: 'Vice President', party: null },
      { name: 'Susan Estep', title: 'Secretary', party: null },
      { name: 'Tim Austin', title: 'Treasurer', party: null },
      { name: 'Scott Hummel', title: 'Trustee', party: null },
      { name: 'Aramide Boatswain', title: 'Trustee', party: null },
      { name: 'Sharon Raschke', title: 'Trustee', party: null },
    ],
  },

  'Dexter Community Schools': {
    name: 'Dexter Community Schools Board of Education',
    website: 'https://www.dexterschools.org',
    phone: '734-424-4100',
    officials: [
      { name: 'Julie Schumaker', title: 'President', party: null },
      { name: 'Mara Greatorex', title: 'Vice President', party: null },
      { name: 'Rob Mitzel', title: 'Secretary', party: null },
      { name: 'Daryl Kipke', title: 'Treasurer', party: null },
      { name: 'Barbara Read', title: 'Trustee', party: null },
      { name: 'Jennifer McElrath', title: 'Trustee', party: null },
      { name: 'Dan Meehan', title: 'Trustee', party: null },
    ],
  },

  'Chelsea School District': {
    name: 'Chelsea School District Board of Education',
    website: 'https://www.chelsea.k12.mi.us',
    phone: '734-433-2200',
    officials: [
      { name: 'Anne Mann', title: 'President', party: null },
      { name: 'Jeff Haas', title: 'Vice President', party: null },
      { name: 'Kristin Van Reesema', title: 'Secretary', party: null },
      { name: 'Jon Bentley', title: 'Treasurer', party: null },
      { name: 'Joel Slezak', title: 'Trustee', party: null },
      { name: 'Michael Kapolka', title: 'Trustee', party: null },
      { name: 'Janice Ortbring', title: 'Trustee', party: null },
    ],
  },

  'Ypsilanti Community Schools': {
    name: 'Ypsilanti Community Schools Board of Education',
    website: 'https://www.ycschools.us',
    phone: '734-714-1200',
    officials: [
      { name: 'Maria Goodrich', title: 'President', party: null },
      { name: 'Aaron Quisenberry', title: 'Vice President', party: null },
      { name: 'Brenda Meadows', title: 'Secretary', party: null },
      { name: 'Celeste Hawkins', title: 'Treasurer', party: null },
      { name: 'Meredith Schindler', title: 'Trustee', party: null },
      { name: 'Jason Davis', title: 'Trustee', party: null },
      { name: 'Kira Berman', title: 'Trustee', party: null },
    ],
  },

  /* ── Montcalm County school districts ── */

  'Greenville Public Schools': {
    name: 'Greenville Public Schools Board of Education',
    website: 'https://www.gpsjackets.org',
    phone: '616-754-3686',
    officials: [
      { name: 'Charlie Mahar', title: 'Trustee', party: null },
      { name: 'Kire Wierda', title: 'Trustee', party: null },
      { name: 'Michael Huff', title: 'Trustee', party: null },
      { name: 'Richelle Lentz', title: 'Trustee', party: null },
      { name: 'Michelle Blaszczynski', title: 'Trustee', party: null },
      { name: 'Brian Gardner', title: 'Trustee', party: null },
      { name: 'Maureen Wolverton', title: 'Trustee', party: null },
    ],
  },

  'Montabella Community Schools': {
    name: 'Montabella Community Schools Board of Education',
    website: 'https://www.montabella.com',
    phone: '989-427-5148',
    officials: [
      { name: 'Eylie Foster', title: 'President', party: null },
      { name: 'Scott Parks', title: 'Vice President', party: null },
      { name: 'Ivan Renne', title: 'Secretary', party: null },
      { name: 'Erica Vincent', title: 'Treasurer', party: null },
      { name: 'Tim Eldred', title: 'Trustee', party: null },
      { name: 'Jeramee Gilman', title: 'Trustee', party: null },
      { name: 'Steve Sweet', title: 'Trustee', party: null },
    ],
  },

  'Central Montcalm Public Schools': {
    name: 'Central Montcalm Public Schools Board of Education',
    website: 'https://central-montcalm.org',
    phone: '989-831-5261',
    officials: [
      { name: 'Brennan Bowen', title: 'President', party: null },
      { name: 'William Simpson', title: 'Vice President', party: null },
      { name: 'Jamie Hansen-Hopkins', title: 'Secretary', party: null },
      { name: 'Rob Train', title: 'Treasurer', party: null },
      { name: 'Lisa Lund', title: 'Trustee', party: null },
      { name: 'Jim Lingeman', title: 'Trustee', party: null },
      { name: 'Betty Wakefield', title: 'Trustee', party: null },
    ],
  },

  'Tri County Area Schools': {
    name: 'Tri County Area Schools Board of Education',
    website: 'https://www.tricountyschools.com',
    phone: '616-636-5454',
    officials: [
      { name: 'Brian Campbell', title: 'President', party: null },
      { name: 'Jill Fennessy', title: 'Vice President', party: null },
      { name: 'Jessica Helfmann', title: 'Secretary', party: null },
      { name: 'MaDonna Princer', title: 'Treasurer', party: null },
      { name: 'Nick Hall', title: 'Trustee', party: null },
      { name: 'Brandon Monreal', title: 'Trustee', party: null },
      { name: 'Heather Shadley', title: 'Trustee', party: null },
    ],
  },

  'Lakeview Community Schools': {
    name: 'Lakeview Community Schools Board of Education',
    website: 'https://www.lakeviewschools.net',
    phone: '989-352-6226',
    officials: [
      { name: 'Ed Jonaitis', title: 'President', party: null },
      { name: 'Melissa Stevens', title: 'Vice President', party: null },
      { name: 'Todd Olson', title: 'Secretary', party: null },
      { name: 'Brad Peasley', title: 'Treasurer', party: null },
      { name: 'Tiffany Paden', title: 'Trustee', party: null },
      { name: 'Andy Powell', title: 'Trustee', party: null },
      { name: 'Jessica Rader', title: 'Trustee', party: null },
    ],
  },

  'Carson City-Crystal Area Schools': {
    name: 'Carson City-Crystal Area Schools Board of Education',
    website: 'https://www.carsoncity.k12.mi.us',
    phone: '989-584-3138',
    officials: [
      { name: 'Gregg McAlvey', title: 'Trustee', party: null },
      { name: 'Mark Jensen', title: 'Trustee', party: null },
      { name: 'Scott Fleisher', title: 'Trustee', party: null },
      { name: 'Stacey Springsteen', title: 'Trustee', party: null },
      { name: 'Matthew Barker', title: 'Trustee', party: null },
      { name: 'Ryan Lankford', title: 'Trustee', party: null },
      { name: 'Melissa Staff', title: 'Trustee', party: null },
    ],
  },

  'Vestaburg Community Schools': {
    name: 'Vestaburg Community Schools Board of Education',
    website: 'https://www.vcs-k12.net',
    phone: '989-268-5313',
    officials: [
      { name: 'Lynn VanSickler', title: 'President', party: null },
      { name: 'Joann Spry-Virgo', title: 'Vice President', party: null },
      { name: 'Renae Caudill', title: 'Secretary', party: null },
      { name: 'Brian Zinn', title: 'Treasurer', party: null },
      { name: 'Daryl Deverney', title: 'Trustee', party: null },
      { name: 'Carol Herman', title: 'Trustee', party: null },
      { name: 'Larry Koutz', title: 'Trustee', party: null },
    ],
  },

  /* ── Mecosta County school districts ── */

  'Chippewa Hills School District': {
    name: 'Chippewa Hills School District Board of Education',
    website: 'https://www.chsd.us',
    phone: '989-967-2000',
    officials: [
      { name: 'Brenda Donley', title: 'Trustee', party: null },
      { name: 'Julia Ezell', title: 'Trustee', party: null },
      { name: 'Brian Simon', title: 'Trustee', party: null },
      { name: 'Sherry Anderson', title: 'Trustee', party: null },
      { name: 'Amanda Cornell', title: 'Trustee', party: null },
      { name: 'Anthony Gibson', title: 'Trustee', party: null },
      { name: 'Lionel MacKenzie', title: 'Trustee', party: null },
    ],
  },

  'Crossroads Charter Academy': {
    name: 'Crossroads Charter Academy Board of Directors',
    website: 'https://www.ccabr.org',
    phone: '231-796-9041',
    officials: [
      { name: 'Dominic Pace', title: 'President', party: null },
      { name: 'Joseph Wendlowsky', title: 'Vice President', party: null },
      { name: 'Andrew Peterson', title: 'Treasurer', party: null },
      { name: 'Brandi Guttersohn-Brooks', title: 'Trustee', party: null },
    ],
  },

  'Morley Stanwood Community Schools': {
    name: 'Morley Stanwood Community Schools Board of Education',
    website: 'https://www.morleystanwood.org',
    phone: '231-856-4392',
    officials: [
      { name: 'Emily Bongard', title: 'President', party: null },
      { name: 'Greg Babbitt', title: 'Vice President', party: null },
      { name: 'Mary Engelsman', title: 'Secretary', party: null },
      { name: 'Michelle Frisbie', title: 'Treasurer', party: null },
      { name: 'Randall LaPreze', title: 'Trustee', party: null },
      { name: 'Brent Beemer', title: 'Trustee', party: null },
      { name: 'Edward Frisbie', title: 'Trustee', party: null },
    ],
  },

  'Reed City Area Public Schools': {
    name: 'Reed City Area Public Schools Board of Education',
    website: 'https://www.reedcityschools.org',
    phone: '231-832-2201',
    officials: [
      { name: 'Sherry Franklin', title: 'Trustee', party: null },
      { name: 'Nathaniel Vanderhoof', title: 'Trustee', party: null },
      { name: 'Spencer Mund', title: 'Trustee', party: null },
      { name: 'Nicole Quinn', title: 'Trustee', party: null },
      { name: 'Heidie Decker-Thomas', title: 'Trustee', party: null },
      { name: 'Jamie Eichenberg', title: 'Trustee', party: null },
      { name: 'Christine Mund', title: 'Trustee', party: null },
    ],
  },

  /* ── Osceola County school districts ── */

  'Evart Public Schools': {
    name: 'Evart Public Schools Board of Education',
    website: 'https://evartps.org',
    officials: [
      { name: 'Todd Bruggema', title: 'President', party: null },
      { name: 'Bre Grabill', title: 'Vice President', party: null },
      { name: 'Mark Moody', title: 'Secretary', party: null },
      { name: 'Eric Schmidt', title: 'Treasurer', party: null },
      { name: 'Jamie Hulliberger', title: 'Trustee', party: null },
      { name: 'Gerald Nichols', title: 'Trustee', party: null },
      { name: 'Ken Wirth', title: 'Trustee', party: null },
    ],
  },

  'Marion Public Schools': {
    name: 'Marion Public Schools Board of Education',
    website: 'https://www.marion.k12.mi.us',
    officials: [
      { name: 'Alicia Michell', title: 'President', party: null },
      { name: 'Ryan Raymond', title: 'Vice President', party: null },
      { name: 'Maggie Keller', title: 'Secretary', party: null },
      { name: 'Terry Kischnick', title: 'Treasurer', party: null },
      { name: 'Ryan Hoffman', title: 'Trustee', party: null },
      { name: 'Angela Ahrens', title: 'Trustee', party: null },
      { name: 'Thomas Krause', title: 'Trustee', party: null },
    ],
  },

  'Pine River Area Schools': {
    name: 'Pine River Area Schools Board of Education',
    website: 'https://www.pineriver.org',
    phone: '231-829-3841',
    officials: [
      { name: 'Kevin Delancey', title: 'President', party: null },
      { name: 'Heather Smith', title: 'Vice President', party: null },
      { name: 'Kim Dean', title: 'Trustee', party: null },
      { name: 'Katy Draper', title: 'Trustee', party: null },
      { name: 'Rob Kulpa', title: 'Trustee', party: null },
      { name: 'Susan Stoll', title: 'Trustee', party: null },
      { name: 'Wayne Tessman', title: 'Trustee', party: null },
    ],
  },

  /* ── Lake County school districts ── */

  'Baldwin Community Schools': {
    name: 'Baldwin Community Schools Board of Education',
    website: 'https://www.baldwin.k12.mi.us',
    phone: '231-745-4791',
    officials: [
      { name: 'Diamond Burrell', title: 'Trustee', party: null },
      { name: 'Marion Carter', title: 'Trustee', party: null },
      { name: 'Mary Martin', title: 'Trustee', party: null },
      { name: 'David Van Horn', title: 'Trustee', party: null },
      { name: 'Katena Abraham', title: 'Trustee', party: null },
      { name: 'Joseph Brooks Jr.', title: 'Trustee', party: null },
      { name: 'Mary Ann Pieske', title: 'Trustee', party: null },
    ],
  },

  /* ── Newaygo County school districts ── */

  'Newaygo Public Schools': {
    name: 'Newaygo Public Schools',
    county: 'Newaygo',
    website: 'https://www.newaygo.net/',
    officials: [
      { name: 'Vince Grodus', title: 'President', party: null },
      { name: 'Mary Spicer', title: 'Vice President', party: null },
      { name: 'Tom Frisbie', title: 'Treasurer', party: null },
      { name: 'Sara Rivera-Cronk', title: 'Secretary', party: null },
      { name: 'Jami Schultz', title: 'Trustee', party: null },
      { name: 'Bruce Gracik', title: 'Trustee', party: null },
    ],
  },

  'White Cloud Public Schools': {
    name: 'White Cloud Public Schools',
    county: 'Newaygo',
    website: 'https://www.whitecloud.net/',
    phone: '231-689-6591',
    officials: [
      { name: 'Megan Cruzan', title: 'Trustee', party: null },
      { name: 'Elaine Engel', title: 'Trustee', party: null },
      { name: 'Rhonda Hedlund', title: 'Trustee', party: null },
      { name: 'Jim Jones', title: 'Trustee', party: null },
      { name: 'Mindy Mench', title: 'Trustee', party: null },
      { name: 'Jeff Murchinson', title: 'Trustee', party: null },
      { name: 'Harry Stevens', title: 'Trustee', party: null },
    ],
  },

  'Fremont Public Schools': {
    name: 'Fremont Public Schools',
    county: 'Newaygo',
    website: 'https://www.fremont.net/',
    officials: [
      { name: 'Jennifer Scott', title: 'President', party: null },
      { name: 'Peter Slovinski', title: 'Vice President', party: null },
      { name: 'Steven Paulsen', title: 'Treasurer', party: null },
      { name: 'Kim Rasch', title: 'Secretary', party: null },
      { name: 'Carrie Crosley', title: 'Trustee', party: null },
      { name: 'Matt Goebel', title: 'Trustee', party: null },
      { name: 'Jared Hanna', title: 'Trustee', party: null },
    ],
  },

  'Grant Public Schools': {
    name: 'Grant Public Schools',
    county: 'Newaygo',
    website: 'https://www.grantps.net/',
    phone: '231-834-5621',
    officials: [
      { name: 'Ken Thorne', title: 'Trustee', party: null },
      { name: 'Rachal Gort', title: 'Trustee', party: null },
    ],
  },

  'Hesperia Community Schools': {
    name: 'Hesperia Community Schools',
    county: 'Newaygo',
    website: 'https://www.hesp.net/',
    phone: '231-854-6185',
    officials: [
      { name: 'Patrick Broton', title: 'Trustee', party: null },
      { name: 'Al Daniels', title: 'Trustee', party: null },
      { name: 'Jason Newman', title: 'Trustee', party: null },
      { name: 'Michelle Allen', title: 'Trustee', party: null },
      { name: 'Barbara Maynard', title: 'Trustee', party: null },
      { name: 'Scott Rumsey', title: 'Trustee', party: null },
      { name: 'Ryan Good', title: 'Trustee', party: null },
    ],
  },

  /* ── Isabella County school districts ── */

  'Shepherd Public Schools': {
    name: 'Shepherd Public Schools',
    county: 'Isabella',
    website: 'https://www.shepherdschools.net/',
    phone: '989-828-6601',
    officials: [
      { name: 'Rick Judge', title: 'Trustee', party: null },
      { name: 'Lindsey Read-Smith', title: 'Trustee', party: null },
      { name: 'Andrew Curtiss', title: 'Trustee', party: null },
      { name: 'Janet Willoughby', title: 'Trustee', party: null },
      { name: 'Katie Eisenberger', title: 'Trustee', party: null },
      { name: 'Tracey Galgoci', title: 'Trustee', party: null },
      { name: 'Katie Travis', title: 'Trustee', party: null },
    ],
  },

  'Beal City Public Schools': {
    name: 'Beal City Public Schools',
    county: 'Isabella',
    website: 'https://www.bealcityschools.net/',
    phone: '989-644-3901',
    officials: [
      { name: 'Curt Gottschalk', title: 'Trustee', party: null },
      { name: 'Denise McBride', title: 'Trustee', party: null },
      { name: 'Andy Reihl', title: 'Trustee', party: null },
      { name: 'Brian Locke', title: 'Trustee', party: null },
      { name: 'Tom Gross Jr.', title: 'Trustee', party: null },
      { name: 'Rod Cole', title: 'Trustee', party: null },
      { name: 'Bob Pasch', title: 'Trustee', party: null },
    ],
  },

  /* ── Kent County school districts ── */

  'Rockford Public Schools': {
    name: 'Rockford Public Schools Board of Education',
    county: 'Kent',
    website: 'https://www.rockfordschools.org',
    phone: '616-863-6300',
    officials: [
      { name: 'Jarrod Folsom', title: 'President', party: null },
      { name: 'Christie Ramsey', title: 'Vice President', party: null },
      { name: 'Andrea Jacobson', title: 'Secretary', party: null },
      { name: 'Jake Himmelspach', title: 'Treasurer', party: null },
      { name: 'Tricia Anderson', title: 'Trustee', party: null },
      { name: 'Kelley Freridge', title: 'Trustee', party: null },
      { name: 'Barbara Helms', title: 'Trustee', party: null },
    ],
  },

  'Caledonia Community Schools': {
    name: 'Caledonia Community Schools Board of Education',
    county: 'Kent',
    website: 'https://www.calschools.org',
    phone: '616-891-8185',
    officials: [
      { name: 'Tim Morris', title: 'President', party: null },
      { name: 'John Brandow', title: 'Vice President', party: null },
      { name: 'Brittany Barber Garcia', title: 'Treasurer', party: null },
      { name: 'Jessica Kohn', title: 'Secretary', party: null },
      { name: 'Kyle Clement', title: 'Trustee', party: null },
      { name: 'Shawn Collins', title: 'Trustee', party: null },
      { name: 'Jennifer Nichols', title: 'Trustee', party: null },
    ],
  },

  'Byron Center Public Schools': {
    name: 'Byron Center Public Schools Board of Education',
    county: 'Kent',
    website: 'https://www.bcpsk12.net',
    phone: '616-878-6111',
    officials: [
      { name: 'Brenda Hondorp', title: 'President', party: null },
      { name: 'Amber Swift', title: 'Vice President', party: null },
      { name: 'Thalia Tilma', title: 'Secretary', party: null },
      { name: 'Brad Wiechertjes', title: 'Treasurer', party: null },
      { name: 'Rob Hughes', title: 'Trustee', party: null },
      { name: 'Tom McCoy', title: 'Trustee', party: null },
      { name: 'Tim Oberst', title: 'Trustee', party: null },
    ],
  },

  'Lowell Area Schools': {
    name: 'Lowell Area Schools Board of Education',
    county: 'Kent',
    website: 'https://www.lowellschools.com',
    phone: '616-987-2500',
    officials: [
      { name: 'Brian Krajewski', title: 'President', party: null },
      { name: 'Laurie Kuna', title: 'Vice President', party: null },
      { name: 'Pat Nugent', title: 'Secretary', party: null },
      { name: 'Jennifer Dougherty', title: 'Treasurer', party: null },
      { name: 'Jared Blough', title: 'Trustee', party: null },
      { name: 'Jessica Curtis', title: 'Trustee', party: null },
      { name: 'Annie Whitlock', title: 'Trustee', party: null },
    ],
  },

  'Cedar Springs Public Schools': {
    name: 'Cedar Springs Public Schools Board of Education',
    county: 'Kent',
    website: 'https://www.csredhawks.org',
    phone: '616-696-1204',
    officials: [
      { name: 'Heidi Reed', title: 'President', party: null },
      { name: 'Mistie Bowser', title: 'Vice President', party: null },
      { name: 'April Patin', title: 'Secretary', party: null },
      { name: 'Trent Gilmore', title: 'Treasurer', party: null },
      { name: 'Matt Shoffner', title: 'Trustee', party: null },
      { name: 'Traci Slager', title: 'Trustee', party: null },
      { name: 'Brent Willett', title: 'Trustee', party: null },
    ],
  },

  'Sparta Area Schools': {
    name: 'Sparta Area Schools Board of Education',
    county: 'Kent',
    website: 'https://www.spartaschools.org',
    phone: '616-887-8253',
    officials: [
      { name: 'Andrew Jensen', title: 'President', party: null },
      { name: 'Amanda VanStrien', title: 'Vice President', party: null },
      { name: 'Mark Alster', title: 'Secretary', party: null },
      { name: 'Kim Eluskie', title: 'Treasurer', party: null },
      { name: 'Amber Bremer', title: 'Trustee', party: null },
      { name: 'Erin Bormes', title: 'Trustee', party: null },
      { name: 'Tim Driscoll', title: 'Trustee', party: null },
    ],
  },

  'Northview Public Schools': {
    name: 'Northview Public Schools Board of Education',
    county: 'Kent',
    website: 'https://www.nvps.net',
    phone: '616-365-6100',
    officials: [
      { name: 'Linda LaBerteaux', title: 'President', party: null },
      { name: 'Matthew Nibbelink', title: 'Vice President', party: null },
      { name: 'Emily Carpenter', title: 'Secretary', party: null },
      { name: 'Teresa Ramirez', title: 'Treasurer', party: null },
      { name: 'Jake Conway', title: 'Trustee', party: null },
      { name: 'Renee Montgomery', title: 'Trustee', party: null },
      { name: 'Jeremy Oliver', title: 'Trustee', party: null },
    ],
  },

  'Comstock Park Public Schools': {
    name: 'Comstock Park Public Schools Board of Education',
    county: 'Kent',
    website: 'https://www.cppschools.com',
    phone: '616-254-5000',
    officials: [
      { name: 'Christy Nowak', title: 'President', party: null },
      { name: 'Roman Rodriguez', title: 'Vice President', party: null },
      { name: 'Deidra Blazon', title: 'Secretary', party: null },
      { name: 'Kevin McLellan', title: 'Treasurer', party: null },
      { name: 'Mike Brown', title: 'Trustee', party: null },
      { name: 'David Hood', title: 'Trustee', party: null },
      { name: 'Jeremy Kelly', title: 'Trustee', party: null },
    ],
  },

  'Kelloggsville Public Schools': {
    name: 'Kelloggsville Public Schools Board of Education',
    county: 'Kent',
    website: 'https://www.kvilleps.org',
    phone: '616-538-7460',
    officials: [
      { name: 'Laura Tanis', title: 'President', party: null },
      { name: 'Marie Groters', title: 'Vice President', party: null },
      { name: 'Brittney Rocha', title: 'Secretary', party: null },
      { name: 'Crystal Reidzans', title: 'Treasurer', party: null },
      { name: 'Gladys Townsend', title: 'Trustee', party: null },
      { name: 'Ivan Flores-Garcia', title: 'Trustee', party: null },
      { name: 'Jane Ward', title: 'Trustee', party: null },
    ],
  },

  'East Grand Rapids Public Schools': {
    name: 'East Grand Rapids Public Schools Board of Education',
    county: 'Kent',
    website: 'https://www.egrps.org',
    phone: '616-235-3535',
    officials: [
      { name: 'Kerry Hegele', title: 'President', party: null },
      { name: 'Matt Richenthal', title: 'Vice President', party: null },
      { name: 'Layla Kuhl', title: 'Treasurer', party: null },
      { name: 'Bill Saxton', title: 'Secretary', party: null },
      { name: 'Mike Reid', title: 'Trustee', party: null },
      { name: 'Ben Smith', title: 'Trustee', party: null },
      { name: 'David Hall', title: 'Trustee', party: null },
    ],
  },

  /* ── Barry County school boards ── */

  'Hastings Area Schools': {
    name: 'Hastings Area Schools',
    county: 'Barry',
    website: 'https://hastingspublicschools.org/',
    officials: [
      { name: 'Becky Sullivan', title: 'Board President', party: null },
      { name: 'Jodi Graves', title: 'Vice President', party: null },
      { name: 'Andrew McCarty', title: 'Secretary/Treasurer', party: null },
      { name: 'Jim Boeve', title: 'Board Member', party: null },
      { name: 'Sharon Brooks', title: 'Board Member', party: null },
      { name: 'Erick Espinoza', title: 'Board Member', party: null },
      { name: 'Tamisha Rose-Osgood', title: 'Board Member', party: null },
      { name: 'Chris Shade', title: 'Board Member', party: null },
      { name: 'Stacie Widhelm', title: 'Board Member', party: null },
    ],
  },

  'Thornapple Kellogg Schools': {
    name: 'Thornapple Kellogg Schools',
    county: 'Barry',
    website: 'https://www.tkschools.org/',
    officials: [
      { name: 'Derrick Brock', title: 'Board President', party: null },
      { name: 'Tyler Wenger', title: 'Vice President', party: null },
      { name: 'Brenda Hess', title: 'Secretary', party: null },
      { name: 'Mark Price', title: 'Treasurer', party: null },
      { name: 'Jim Flikkema', title: 'Trustee', party: null },
      { name: 'Keara Hilton', title: 'Trustee', party: null },
      { name: 'Katie Stanton', title: 'Trustee', party: null },
    ],
  },

  'Delton Kellogg Schools': {
    name: 'Delton Kellogg Schools',
    county: 'Barry',
    website: 'https://www.dkschools.org/',
    officials: [
      { name: 'Kelli Martin', title: 'Board Member', party: null },
      { name: 'Jon Osborne', title: 'Board Member', party: null },
      { name: 'Jesse Shaver', title: 'Board Member', party: null },
      { name: 'Andy Stoneburner', title: 'Board Member', party: null },
      { name: 'Julie Aukerman', title: 'Board Member', party: null },
      { name: 'Jerred Dill', title: 'Board Member', party: null },
      { name: 'Kathy Forsyth', title: 'Board Member', party: null },
    ],
  },

  /* ── Allegan County school boards ── */

  'Allegan Public Schools': {
    name: 'Allegan Public Schools',
    county: 'Allegan',
    website: 'https://alleganps.org/',
    officials: [
      { name: 'Christopher Hodge', title: 'President', party: null },
      { name: 'Drew Isola', title: 'Vice President', party: null },
      { name: 'Mary Kasprzyk', title: 'Treasurer', party: null },
      { name: 'Amanda Nash', title: 'Secretary', party: null },
      { name: 'Vicki Knuckles', title: 'Trustee', party: null },
      { name: 'KD Lake', title: 'Trustee', party: null },
      { name: 'Brad van Melle', title: 'Trustee', party: null },
    ],
  },

  'Otsego Public Schools': {
    name: 'Otsego Public Schools',
    county: 'Allegan',
    website: 'https://www.otsegops.org/',
    officials: [
      { name: 'Amy Stender', title: 'President', party: null },
      { name: 'Shelly Jirgens', title: 'Vice President', party: null },
      { name: 'Shannon Goodwin', title: 'Secretary', party: null },
      { name: 'Todd Bentley', title: 'Treasurer', party: null },
      { name: 'Mike Keeler', title: 'Trustee', party: null },
      { name: 'Jason Davis', title: 'Trustee', party: null },
      { name: 'Jessica Hazelhoff', title: 'Trustee', party: null },
    ],
  },

  'Plainwell Community Schools': {
    name: 'Plainwell Community Schools',
    county: 'Allegan',
    website: 'https://www.plainwellschools.org/',
    officials: [
      { name: 'Andrea Barrows', title: 'Board Member', party: null },
      { name: 'Mike Hopson', title: 'Board Member', party: null },
      { name: 'Shannon Zabaldo', title: 'Board Member', party: null },
      { name: 'Derek Dunn', title: 'Board Member', party: null },
      { name: 'Rex Hall', title: 'Board Member', party: null },
      { name: 'Jill Dunham', title: 'Board Member', party: null },
      { name: 'Julli Bennett', title: 'Board Member', party: null },
    ],
  },

  'Wayland Union Schools': {
    name: 'Wayland Union Schools',
    county: 'Allegan',
    website: 'https://waylandunion.org/',
    officials: [
      { name: 'Jeff Koon', title: 'President', party: null },
      { name: 'Pete Zondervan', title: 'Vice President', party: null },
      { name: 'Becky Hohnke', title: 'Secretary', party: null },
      { name: 'Theresa Dobry', title: 'Treasurer', party: null },
      { name: 'Erin Stepek', title: 'Trustee', party: null },
      { name: 'Norman Taylor', title: 'Trustee', party: null },
      { name: 'Stephanie Tromp', title: 'Trustee', party: null },
    ],
  },

  'Saugatuck Public Schools': {
    name: 'Saugatuck Public Schools',
    county: 'Allegan',
    website: 'https://saugatuckpublicschools.com/',
    officials: [
      { name: 'Amanda Frank', title: 'President', party: null },
      { name: 'Nicole Lewis', title: 'Vice President', party: null },
      { name: 'Eric Birkholz', title: 'Treasurer', party: null },
      { name: 'Mary Ihle', title: 'Secretary', party: null },
      { name: 'Frank Marro III', title: 'Trustee', party: null },
      { name: 'James Woods', title: 'Trustee', party: null },
      { name: 'Lisa Greenwood', title: 'Trustee', party: null },
    ],
  },

  'Fennville Public Schools': {
    name: 'Fennville Public Schools',
    county: 'Allegan',
    website: 'https://www.fennville.org/',
    officials: [
      { name: 'Manuel Sanchez', title: 'President', party: null },
      { name: 'Ross Thiele', title: 'Vice President', party: null },
      { name: 'Angie Pena-Smith', title: 'Secretary', party: null },
      { name: 'Juliet Michele', title: 'Treasurer', party: null },
      { name: 'Paul Hapke', title: 'Trustee', party: null },
      { name: 'Natalie Bosby', title: 'Trustee', party: null },
      { name: 'Jayson Hicks', title: 'Trustee', party: null },
    ],
  },

  'Hamilton Community Schools': {
    name: 'Hamilton Community Schools',
    county: 'Allegan',
    website: 'https://www.hamiltonschools.us/',
    officials: [
      { name: 'Morgan Maul', title: 'President', party: null },
      { name: 'Deb Brower', title: 'Vice President', party: null },
      { name: 'Loren Joostberns', title: 'Secretary', party: null },
      { name: 'Candi Dykstra', title: 'Trustee', party: null },
      { name: 'Ross Miedema', title: 'Trustee', party: null },
      { name: 'Chris Poll', title: 'Trustee', party: null },
      { name: 'Lisa Theodore', title: 'Trustee', party: null },
    ],
  },

  // ── Ionia County school boards ──

  'Ionia Public Schools': {
    name: 'Ionia Public Schools',
    county: 'Ionia',
    website: 'https://www.ioniaschools.org/',
    officials: [
      { name: 'Danielle Yokom', title: 'President', party: null },
      { name: 'Ken Baker', title: 'Vice-President', party: null },
      { name: 'Robin Marhofer', title: 'Secretary', party: null },
      { name: 'Dayna Ellis', title: 'Treasurer', party: null },
      { name: 'Timothy Montgomery', title: 'Trustee', party: null },
      { name: 'Ray Shippey', title: 'Trustee', party: null },
      { name: 'Brian Siemen', title: 'Trustee', party: null },
    ],
  },

  'Portland Public Schools': {
    name: 'Portland Public Schools',
    county: 'Ionia',
    website: 'https://www.portlandk12.org/',
    officials: [
      { name: 'Angela Shinaver', title: 'Board Member', party: null },
      { name: 'Andrew Huhn', title: 'Board Member', party: null },
      { name: 'Brian Pohl', title: 'Board Member', party: null },
      { name: 'Patrick Duff', title: 'Board Member', party: null },
      { name: 'Kurt Sandborn', title: 'Board Member', party: null },
      { name: 'Susan Moyer', title: 'Board Member', party: null },
      { name: 'Doug Logel', title: 'Board Member', party: null },
    ],
  },

  'Belding Area Schools': {
    name: 'Belding Area Schools',
    county: 'Ionia',
    website: 'https://beldingschools.org/',
    officials: [
      { name: 'Michael Baker', title: 'Board Member', party: null },
      { name: 'Terry Boni', title: 'Board Member', party: null },
      { name: 'Shannon Hummel', title: 'Board Member', party: null },
      { name: 'Keven Krieger', title: 'Board Member', party: null },
      { name: 'Jennifer Lien', title: 'Board Member', party: null },
      { name: 'Doug Lamborne', title: 'Board Member', party: null },
      { name: 'Sarah Foss', title: 'Board Member', party: null },
    ],
  },

  'Saranac Community Schools': {
    name: 'Saranac Community Schools',
    county: 'Ionia',
    website: 'https://www.saranac.k12.mi.us/',
    officials: [
      { name: 'Kevin Courtnay', title: 'Board Member', party: null },
      { name: 'Sarah Doll', title: 'Board Member', party: null },
      { name: 'Chad Elliott', title: 'Board Member', party: null },
      { name: 'Roy Hawkins', title: 'Board Member', party: null },
      { name: 'Brad Hesche', title: 'Board Member', party: null },
      { name: 'David Price', title: 'Board Member', party: null },
      { name: 'Theodore VanKuiken', title: 'Board Member', party: null },
    ],
  },

  'Lakewood Public Schools': {
    name: 'Lakewood Public Schools',
    county: 'Ionia',
    website: 'https://www.lakewoodps.org/',
    officials: [
      { name: 'Ezekial Cappon', title: 'Board Member', party: null },
      { name: 'Adam McArthur', title: 'Board Member', party: null },
      { name: "Paige O'Mara", title: 'Board Member', party: null },
      { name: 'Wendy Behrenwald', title: 'Board Member', party: null },
      { name: 'Darin Weller', title: 'Board Member', party: null },
      { name: 'Kerry Possehn', title: 'Board Member', party: null },
      { name: 'Jamie Brodbeck-Krenz', title: 'Board Member', party: null },
    ],
  },

  // ── Mason County school boards ──

  'Ludington Area Schools': {
    name: 'Ludington Area Schools',
    county: 'Mason',
    website: 'https://www.lasdweb.org/',
    officials: [
      { name: 'Alan Neushwander', title: 'Board Member', party: null },
      { name: 'Mike Winczewski', title: 'Board Member', party: null },
      { name: 'Sarah Lowman', title: 'Board Member', party: null },
      { name: 'Stephanie Reed', title: 'Board Member', party: null },
      { name: 'Bret Autrey', title: 'Board Member', party: null },
      { name: 'Steven Carlson', title: 'Board Member', party: null },
      { name: 'Michael Nagle', title: 'Board Member', party: null },
    ],
  },

  'Mason County Central Schools': {
    name: 'Mason County Central Schools',
    county: 'Mason',
    website: 'https://www.mccschools.org/',
    officials: [
      { name: 'Oscar Davila', title: 'Board Member', party: null },
      { name: 'Nicole Birkett', title: 'Board Member', party: null },
      { name: 'Nicole Sherretz', title: 'Board Member', party: null },
      { name: 'Steve Griswold', title: 'Board Member', party: null },
      { name: 'Gena Nelson', title: 'Board Member', party: null },
      { name: 'Barry Pleiness', title: 'Board Member', party: null },
      { name: 'Darrell Storvik', title: 'Board Member', party: null },
    ],
  },

  'Mason County Eastern Schools': {
    name: 'Mason County Eastern Schools',
    county: 'Mason',
    website: 'https://www.mceschools.com/',
    officials: [
      { name: 'Jennifer Fisher', title: 'Board Member', party: null },
      { name: 'Ryan Howe', title: 'Board Member', party: null },
      { name: 'Sheryl Howe', title: 'Board Member', party: null },
      { name: 'Mark Mickevich', title: 'Board Member', party: null },
      { name: 'Edward Miller', title: 'Board Member', party: null },
      { name: 'Jake Smith', title: 'Board Member', party: null },
      { name: 'Curtis Stewart', title: 'Board Member', party: null },
    ],
  },

  // ── Oceana County school boards ──

  'Hart Public Schools': {
    name: 'Hart Public School District',
    county: 'Oceana',
    website: 'https://www.hartschools.net/',
    officials: [
      { name: 'Chad Coker', title: 'President', party: null },
      { name: 'Jeff Schaner', title: 'Vice President', party: null },
      { name: 'Steve Riley', title: 'Secretary', party: null },
      { name: 'Kayla Dennert', title: 'Treasurer', party: null },
      { name: 'Irma Hinojosa', title: 'Trustee', party: null },
      { name: 'Mike Barefoot', title: 'Trustee', party: null },
      { name: 'Andrew Carter', title: 'Trustee', party: null },
    ],
  },

  'Shelby Public Schools': {
    name: 'Shelby Public Schools',
    county: 'Oceana',
    website: 'https://www.shelbypublicschools.net/',
    officials: [
      { name: 'Jason Fleming', title: 'President', party: null },
      { name: 'Ruth Myers', title: 'Vice President', party: null },
      { name: 'Steve Vinke', title: 'Secretary', party: null },
      { name: 'Karen Rice', title: 'Treasurer', party: null },
      { name: 'Brian Hicks', title: 'Trustee', party: null },
      { name: 'Scott Stovall', title: 'Trustee', party: null },
      { name: 'Robert Rudat', title: 'Trustee', party: null },
    ],
  },

  'Pentwater Public Schools': {
    name: 'Pentwater Public School District',
    county: 'Oceana',
    website: 'https://www.pentwaterschools.net/',
    officials: [
      { name: 'Mark Shotwell', title: 'President', party: null },
      { name: 'Ryan Williams', title: 'Vice President', party: null },
      { name: 'Laura Nugent', title: 'Secretary', party: null },
      { name: 'Kelsey Prescott', title: 'Treasurer', party: null },
      { name: 'Vaughn Thurston-Cox', title: 'Trustee', party: null },
      { name: 'Adam Lamb', title: 'Trustee', party: null },
      { name: 'Amy Baker', title: 'Trustee', party: null },
    ],
  },

  'Hesperia Community Schools': {
    name: 'Hesperia Community Schools',
    county: 'Oceana',
    website: 'https://www.hesp.net/',
    officials: [
      { name: 'Al Daniels', title: 'President', party: null },
      { name: 'Ryan Good', title: 'Vice President', party: null },
      { name: 'Michelle Allen', title: 'Secretary', party: null },
      { name: 'Mike Kraus', title: 'Treasurer', party: null },
      { name: 'Barb Maynard', title: 'Trustee', party: null },
      { name: 'Scott Rumsey', title: 'Trustee', party: null },
      { name: 'Jason Newman', title: 'Trustee', party: null },
    ],
  },

  'Walkerville Public Schools': {
    name: 'Walkerville Public Schools',
    county: 'Oceana',
    website: 'https://walkervillewildcats.com/',
    officials: [
      { name: 'George Wolgamott', title: 'President', party: null },
      { name: 'Janaya Hood', title: 'Vice President', party: null },
      { name: 'Holly Flanery', title: 'Secretary', party: null },
      { name: 'John Kirwin', title: 'Treasurer', party: null },
      { name: 'Michelle Tanner', title: 'Trustee', party: null },
      { name: 'Mark Riggs', title: 'Trustee', party: null },
      { name: 'Albert Tanner', title: 'Trustee', party: null },
    ],
  },

  // ── Wexford County school boards ──

  'Manton Consolidated Schools': {
    name: 'Manton Consolidated Schools',
    county: 'Wexford',
    website: 'https://www.mantonschools.org/page/school-board',
    officials: [
      { name: 'Harold Kibbe', title: 'President', party: null },
      { name: 'Mark Powers', title: 'Vice President', party: null },
      { name: 'Randy Sucharski', title: 'Treasurer', party: null },
      { name: 'Candy Musselman', title: 'Secretary', party: null },
      { name: 'Travis Baker', title: 'Trustee', party: null },
      { name: 'Brandie Sigler', title: 'Trustee', party: null },
      { name: 'Matt Hicks', title: 'Trustee', party: null },
    ],
  },

  'Mesick Consolidated Schools': {
    name: 'Mesick Consolidated Schools',
    county: 'Wexford',
    website: 'https://www.mesick.org/page/school-board',
    officials: [
      { name: 'Sally Flatman', title: 'President', party: null },
      { name: 'Eric Spencer', title: 'Vice President', party: null },
      { name: 'Ashlee McCormick', title: 'Trustee', party: null },
      { name: 'Craig Gabier', title: 'Trustee', party: null },
      { name: 'Todd Altman', title: 'Trustee', party: null },
      { name: 'William Sexton', title: 'Trustee', party: null },
      { name: 'Amber Vranish', title: 'Trustee', party: null },
    ],
  },
  'Pine River Area Schools': {
    name: 'Pine River Area Schools',
    county: 'Wexford',
    website: 'https://www.pineriver.org/',
    officials: [
      { name: 'Kevin Delancey', title: 'President', party: null },
      { name: 'Heather Smith', title: 'Vice President', party: null },
      { name: 'Katy Draper', title: 'Secretary', party: null },
      { name: 'Rob Kulpa', title: 'Treasurer', party: null },
      { name: 'Kim Dean', title: 'Trustee', party: null },
      { name: 'Susan Stoll', title: 'Trustee', party: null },
      { name: 'Wayne Tessman', title: 'Trustee', party: null },
    ],
  },
  'Buckley Community Schools': {
    name: 'Buckley Community Schools',
    county: 'Wexford',
    website: 'https://www.buckleyschools.org/',
    officials: [
      { name: 'Jack Ocobock', title: 'Board Member', party: null },
      { name: 'Christina Matthews', title: 'Board Member', party: null },
      { name: 'Sara Snider', title: 'Board Member', party: null },
      { name: 'Micah Crumb', title: 'Board Member', party: null },
      { name: 'Jason Svec', title: 'Board Member', party: null },
      { name: 'Terry Wilson', title: 'Board Member', party: null },
      { name: 'Brielle Porter', title: 'Board Member', party: null },
    ],
  },
  'Cadillac Area Public Schools': {
    name: 'Cadillac Area Public Schools Board of Education',
    county: 'Wexford',
    website: 'https://www.cadillacschools.org',
    phone: '231-876-5000',
    officials: [
      { name: 'Scott Koenig', title: 'Board Member', party: null },
      { name: 'Candace Kuhn', title: 'Board Member', party: null },
      { name: 'Eric Baker', title: 'Board Member', party: null },
      { name: 'Elizabeth Rzepka-Alto', title: 'Board Member', party: null },
      { name: 'Zachary Anderson', title: 'Board Member', party: null },
      { name: 'Anne Engels', title: 'Board Member', party: null },
      { name: 'Nicole Schultz', title: 'Board Member', party: null },
    ],
  },

  /* ── Missaukee County school boards ── */

  'McBain Rural Agricultural Schools': {
    name: 'McBain Rural Agricultural Schools',
    county: 'Missaukee',
    website: 'https://www.mcbain.org/administration/',
    officials: [
      { name: 'Kevin Eisenga', title: 'President', party: null },
      { name: 'Ken Stahl', title: 'Vice President', party: null },
      { name: 'Matt Kline', title: 'Treasurer', party: null },
      { name: 'Karen Abrahamson', title: 'Secretary', party: null },
      { name: 'Dennis Heuker', title: 'Trustee', party: null },
      { name: 'Becky Voelker', title: 'Trustee', party: null },
      { name: 'Doug Mclain', title: 'Trustee', party: null },
    ],
  },

  'Lake City Area Schools': {
    name: 'Lake City Area Schools',
    county: 'Missaukee',
    website: 'https://www.lakecityschools.net/page/board-of-education',
    officials: [
      { name: 'Tamara McLeod Helsel', title: 'President', party: null },
      { name: 'Sam Ball', title: 'Board Member', party: null },
      { name: 'Ona Booms', title: 'Board Member', party: null },
      { name: 'Jodi Bridson', title: 'Board Member', party: null },
      { name: 'Darrel Thompson', title: 'Board Member', party: null },
      { name: 'Kate Cobb', title: 'Board Member', party: null },
      { name: 'Dale Rainier', title: 'Board Member', party: null },
    ],
  },

  /* ── Montcalm County school boards ── */

  'Greenville Public Schools': {
    name: 'Greenville Public Schools',
    county: 'Montcalm',
    website: 'https://www.gpsjackets.org/page/board-of-education/',
    officials: [
      { name: 'Kire Wierda', title: 'President', party: null },
      { name: 'Michael Huff', title: 'Vice President', party: null },
      { name: 'Maureen Wolverton', title: 'Secretary', party: null },
      { name: 'James Anderson', title: 'Treasurer', party: null },
      { name: 'Richelle Lentz', title: 'Trustee', party: null },
      { name: 'Brian Gardner', title: 'Trustee', party: null },
      { name: 'Charlie Mahar', title: 'Trustee', party: null },
    ],
  },

  'Montabella Community Schools': {
    name: 'Montabella Community Schools',
    county: 'Montcalm',
    website: 'https://www.montabella.com/district/board-of-education/',
    officials: [
      { name: 'Eylie Foster', title: 'President', party: null },
      { name: 'Scott Parks', title: 'Vice President', party: null },
      { name: 'Ivan Renne', title: 'Secretary', party: null },
      { name: 'Erica Vincent', title: 'Treasurer', party: null },
      { name: 'Tim Eldred', title: 'Trustee', party: null },
      { name: 'Jeramee Gilman', title: 'Trustee', party: null },
      { name: 'Steve Sweet', title: 'Trustee', party: null },
    ],
  },

  'Tri County Area Schools': {
    name: 'Tri County Area Schools',
    county: 'Montcalm',
    website: 'https://www.tricountyschools.com/ourdistrict/schoolboard/',
    officials: [
      { name: 'Brian Campbell', title: 'President', party: null },
      { name: 'Jill Fennessy', title: 'Vice President', party: null },
      { name: 'Jessica Helfmann', title: 'Secretary', party: null },
      { name: 'MaDonna Princer', title: 'Treasurer', party: null },
      { name: 'Nick Hall', title: 'Trustee', party: null },
      { name: 'Brandon Monreal', title: 'Trustee', party: null },
      { name: 'Heather Shadley', title: 'Trustee', party: null },
    ],
  },

  'Lakeview Community Schools': {
    name: 'Lakeview Community Schools',
    county: 'Montcalm',
    website: 'https://www.lakeviewschools.net',
    officials: [
      { name: 'Ed Jonaitis', title: 'President', party: null },
      { name: 'Melissa Stevens', title: 'Vice President', party: null },
      { name: 'Todd Olson', title: 'Secretary', party: null },
      { name: 'Brad Peasley', title: 'Treasurer', party: null },
      { name: 'Tiffany Paden', title: 'Trustee', party: null },
      { name: 'Andy Powell', title: 'Trustee', party: null },
      { name: 'Jessica Rader', title: 'Trustee', party: null },
    ],
  },

  'Central Montcalm Public Schools': {
    name: 'Central Montcalm Public Schools',
    county: 'Montcalm',
    website: 'https://central-montcalm.org/our-district/board-of-education/',
    officials: [
      { name: 'Brennan Bowen', title: 'President', party: null },
      { name: 'William Simpson', title: 'Vice President', party: null },
      { name: 'Jamie Hansen-Hopkins', title: 'Secretary', party: null },
      { name: 'Rob Train', title: 'Treasurer', party: null },
      { name: 'Lisa Lund', title: 'Trustee', party: null },
      { name: 'Jim Lingeman', title: 'Trustee', party: null },
      { name: 'Betty Wakefield', title: 'Trustee', party: null },
    ],
  },

  'Carson City-Crystal Area Schools': {
    name: 'Carson City-Crystal Area Schools',
    county: 'Montcalm',
    website: 'https://www.carsoncity.k12.mi.us/board-of-education/',
    officials: [
      { name: 'Mark Jensen', title: 'President', party: null },
      { name: 'Gregg McAlvey', title: 'Vice President', party: null },
      { name: 'Stacey Springsteen', title: 'Secretary', party: null },
      { name: 'Scott Fleisher', title: 'Treasurer', party: null },
      { name: 'Matthew Barker', title: 'Trustee', party: null },
      { name: 'Ryan Lankford', title: 'Trustee', party: null },
      { name: 'Melissa Staff', title: 'Trustee', party: null },
    ],
  },

  'Vestaburg Community Schools': {
    name: 'Vestaburg Community Schools',
    county: 'Montcalm',
    website: 'https://www.vcs-k12.net/our-district/board-of-education/',
    officials: [
      { name: 'Lynn VanSickler', title: 'President', party: null },
      { name: 'Joann Spry-Virgo', title: 'Vice President', party: null },
      { name: 'Renae Caudill', title: 'Secretary', party: null },
      { name: 'Brian Zinn', title: 'Treasurer', party: null },
      { name: 'Daryl Deverney', title: 'Trustee', party: null },
      { name: 'Carol Herman', title: 'Trustee', party: null },
      { name: 'Larry Koutz', title: 'Trustee', party: null },
    ],
  },

  /* ── Mecosta County school boards ── */

  'Big Rapids Public Schools': {
    name: 'Big Rapids Public Schools',
    county: 'Mecosta',
    website: 'https://www.brps.org/page/board-of-education',
    officials: [
      { name: 'Jeff Godfrey', title: 'Board Member', party: null },
      { name: 'Shavon Jane', title: 'Board Member', party: null },
      { name: 'Peter Kent', title: 'Board Member', party: null },
      { name: 'Jeremy Mishler', title: 'Board Member', party: null },
      { name: 'David Murray', title: 'Board Member', party: null },
      { name: 'Michelle Rasmussen', title: 'Board Member', party: null },
      { name: 'Christopher Vennix', title: 'Board Member', party: null },
    ],
  },

  'Chippewa Hills School District': {
    name: 'Chippewa Hills School District',
    county: 'Mecosta',
    website: 'https://www.chsd.us/page/board-of-education',
    officials: [
      { name: 'Anthony Gibson', title: 'President', party: null },
      { name: 'Brenda Donley', title: 'Board Member', party: null },
      { name: 'Julia Ezell', title: 'Board Member', party: null },
      { name: 'Brian Simon', title: 'Board Member', party: null },
      { name: 'Sherry Anderson', title: 'Board Member', party: null },
      { name: 'Amanda Cornell', title: 'Board Member', party: null },
      { name: 'Lionel MacKenzie', title: 'Board Member', party: null },
    ],
  },

  'Morley Stanwood Community Schools': {
    name: 'Morley Stanwood Community Schools',
    county: 'Mecosta',
    website: 'https://www.morleystanwood.org/districtinfo/boardofeducation/',
    officials: [
      { name: 'Emily Bongard', title: 'President', party: null },
      { name: 'Greg Babbitt', title: 'Vice President', party: null },
      { name: 'Mary Engelsman', title: 'Secretary', party: null },
      { name: 'Michelle Frisbie', title: 'Treasurer', party: null },
      { name: 'Randall LaPreze', title: 'Trustee', party: null },
      { name: 'Brent Beemer', title: 'Trustee', party: null },
      { name: 'Edward Frisbie', title: 'Trustee', party: null },
    ],
  },

  'Mecosta-Osceola ISD': {
    name: 'Mecosta-Osceola ISD',
    county: 'Mecosta',
    website: 'https://www.moisd.org/about/boardofed/',
    officials: [
      { name: 'Marie Wilkerson', title: 'President', party: null },
      { name: 'Michael Wyman', title: 'Vice President', party: null },
      { name: 'Larry Sredersas', title: 'Treasurer', party: null },
      { name: 'Wayne Stickler', title: 'Secretary', party: null },
      { name: 'Randy Ostrander', title: 'Trustee', party: null },
      { name: 'Heidi Speese', title: 'Trustee', party: null },
      { name: 'Patrick Tiedt', title: 'Trustee', party: null },
    ],
  },

  /* ── Osceola County school boards ── */

  'Evart Public Schools': {
    name: 'Evart Public Schools',
    county: 'Osceola',
    website: 'https://evartps.org/our-district/board-member-directory/',
    officials: [
      { name: 'Todd Bruggema', title: 'President', party: null },
      { name: 'Bre Grabill', title: 'Vice President', party: null },
      { name: 'Mark Moody', title: 'Secretary', party: null },
      { name: 'Eric Schmidt', title: 'Treasurer', party: null },
      { name: 'Jamie Hulliberger', title: 'Trustee', party: null },
      { name: 'Gerald Nichols', title: 'Trustee', party: null },
      { name: 'Ken Wirth', title: 'Trustee', party: null },
    ],
  },

  'Marion Public Schools': {
    name: 'Marion Public Schools',
    county: 'Osceola',
    website: 'https://www.marion.k12.mi.us/page/board-of-education',
    officials: [
      { name: 'Alicia Michell', title: 'President', party: null },
      { name: 'Ryan Raymond', title: 'Vice President', party: null },
      { name: 'Maggie Keller', title: 'Secretary', party: null },
      { name: 'Terry Kischnick', title: 'Treasurer', party: null },
      { name: 'Ryan Hoffman', title: 'Trustee', party: null },
      { name: 'Angela Ahrens', title: 'Trustee', party: null },
      { name: 'Thomas Krause', title: 'Trustee', party: null },
    ],
  },

  'Reed City Area Public Schools': {
    name: 'Reed City Area Public Schools',
    county: 'Osceola',
    website: 'https://www.reedcityschools.org/page/boe',
    officials: [
      { name: 'Sherry Franklin', title: 'Board Member', party: null },
      { name: 'Nathaniel Vanderhoof', title: 'Board Member', party: null },
      { name: 'Spencer Mund', title: 'Board Member', party: null },
      { name: 'Nicole Quinn', title: 'Board Member', party: null },
      { name: 'Heidie Decker-Thomas', title: 'Board Member', party: null },
      { name: 'Jamie Eichenberg', title: 'Board Member', party: null },
      { name: 'Christine Mund', title: 'Board Member', party: null },
    ],
  },

  /* ── Crawford County school boards ── */

  'Crawford AuSable Schools': {
    name: 'Crawford AuSable Schools',
    county: 'Crawford',
    website: 'https://www.casdk12.net/',
    officials: [
      { name: 'Lori Johnson', title: 'Board Member', party: null },
      { name: 'Wendy Kucharek', title: 'Board Member', party: null },
      { name: 'Pam LaGattuta', title: 'Board Member', party: null },
      { name: 'Nicole Persing-Wethington', title: 'Board Member', party: null },
      { name: 'Matt Cragg', title: 'Board Member', party: null },
      { name: 'Joshua Peters', title: 'Board Member', party: null },
      { name: 'Ryan Finstrom', title: 'Board Member', party: null },
    ],
  },

  /* ── Presque Isle County school boards ── */

  'Rogers City Area Schools': {
    name: 'Rogers City Area Schools Board of Education',
    county: 'Presque Isle',
    website: 'https://www.rcashurons.org',
    phone: '989-734-9100',
    officials: [
      { name: 'Andrew K. Grambau', title: 'President', party: null },
      { name: 'Diane F. Schultz', title: 'Vice President', party: null },
      { name: 'Shannon McKinstry', title: 'Secretary', party: null },
      { name: 'Ivy E. Bredow', title: 'Treasurer', party: null },
      { name: 'Darin J. Rabeau', title: 'Trustee', party: null },
      { name: 'Thomas B. Catalano', title: 'Trustee', party: null },
      { name: 'Scott M. Orr', title: 'Trustee', party: null },
    ],
  },
  'Posen Consolidated Schools': {
    name: 'Posen Consolidated Schools Board of Education',
    county: 'Presque Isle',
    officials: [
      { name: 'Dennis Budnick', title: 'Trustee', party: null },
      { name: 'Jesse Chappa', title: 'Trustee', party: null },
      { name: 'Brian Konieczny', title: 'Trustee', party: null },
      { name: 'Danielle Kowalski', title: 'Trustee', party: null },
      { name: 'Miranda Purol', title: 'Trustee', party: null },
      { name: 'Anna Soik', title: 'Trustee', party: null },
      { name: 'Angie Stazkowski', title: 'Trustee', party: null },
    ],
  },
  'Onaway Area Community Schools': {
    name: 'Onaway Area Community Schools Board of Education',
    county: 'Presque Isle',
    officials: [
      { name: 'Mike Hart', title: 'Trustee', party: null },
      { name: 'Tom Moran', title: 'Trustee', party: null },
      { name: 'Annette Porter', title: 'Trustee', party: null },
      { name: 'Stacey Porter', title: 'Trustee', party: null },
      { name: 'Taed Price', title: 'Trustee', party: null },
      { name: 'Lain Veihl', title: 'Trustee', party: null },
    ],
  },

  /* ── Midland County school boards ── */

  'Midland Public Schools': {
    name: 'Midland Public Schools Board of Education',
    county: 'Midland',
    website: 'https://www.midlandps.org',
    officials: [
      { name: 'Phillip Rausch', title: 'President', party: null },
      { name: 'Scott McFarland', title: 'Vice President', party: null },
      { name: 'Jennifer Ringgold', title: 'Secretary', party: null },
      { name: 'Jonathan Lauderbach', title: 'Treasurer', party: null },
      { name: 'Ann Horowitz', title: 'Trustee', party: null },
      { name: 'Meki Craig', title: 'Trustee', party: null },
      { name: 'Brad Blasy', title: 'Trustee', party: null },
    ],
  },
  'Bullock Creek School District': {
    name: 'Bullock Creek School District Board of Education',
    county: 'Midland',
    officials: [
      { name: 'Darin Dana', title: 'Trustee', party: null },
      { name: 'Jill Derry', title: 'Trustee', party: null },
      { name: 'Heidi Fransen', title: 'Trustee', party: null },
      { name: 'Michael Weideman', title: 'Trustee', party: null },
      { name: 'Deborah Wilson', title: 'Trustee', party: null },
      { name: 'Renee Waldie', title: 'Trustee', party: null },
      { name: 'Josh Wiggins', title: 'Trustee', party: null },
    ],
  },
  'Meridian Public Schools': {
    name: 'Meridian Public Schools Board of Education',
    county: 'Midland',
    officials: [
      { name: 'Kristina Brawt', title: 'Trustee', party: null },
      { name: 'Evan Burdick', title: 'Trustee', party: null },
      { name: 'Megan Clark', title: 'Trustee', party: null },
      { name: 'Dennis Cole', title: 'Trustee', party: null },
      { name: 'Stephen Grubaugh', title: 'Trustee', party: null },
      { name: 'Terrah Johnson', title: 'Trustee', party: null },
      { name: 'Heather Novak', title: 'Trustee', party: null },
    ],
  },
  'Coleman Community Schools': {
    name: 'Coleman Community Schools Board of Education',
    county: 'Midland',
    officials: [
      { name: 'Travis Aultman', title: 'Trustee', party: null },
      { name: 'Angela Brooks', title: 'Trustee', party: null },
      { name: 'Miles Cameron', title: 'Trustee', party: null },
      { name: 'Nathan Clarke', title: 'Trustee', party: null },
      { name: 'Lorie Fox', title: 'Trustee', party: null },
      { name: 'Sean Long', title: 'Trustee', party: null },
      { name: 'Jennifer Murray', title: 'Trustee', party: null },
    ],
  },

  /* ── Kalkaska County school boards ── */

  'Kalkaska Public Schools': {
    name: 'Kalkaska Public Schools Board of Education',
    county: 'Kalkaska',
    website: 'https://www.kpschools.com',
    phone: '231-258-9109',
    officials: [
      { name: 'Rachael Birgy', title: 'President', party: null },
      { name: 'Steve Ordway', title: 'Vice President', party: null },
      { name: 'Mary M. Scobey', title: 'Treasurer', party: null },
      { name: 'Wendy Watson', title: 'Secretary', party: null },
      { name: 'Dr. Richard Hodgman', title: 'Trustee', party: null },
      { name: 'Chase Stevenson', title: 'Trustee', party: null },
      { name: 'Mitch Saxton', title: 'Trustee', party: null },
    ],
  },
  'Forest Area Community Schools': {
    name: 'Forest Area Community Schools Board of Education',
    county: 'Kalkaska',
    website: 'https://forestarea.org',
    phone: '231-369-4191',
    officials: [
      { name: 'Dan Smith', title: 'President', party: null },
      { name: 'Chrissy Ingersoll', title: 'Vice President', party: null },
      { name: 'Travis Tracey', title: 'Secretary', party: null },
      { name: 'Joanna Durfee', title: 'Treasurer', party: null },
      { name: 'Adam Schaefer', title: 'Trustee', party: null },
      { name: 'Hannah Bird', title: 'Trustee', party: null },
      { name: 'Kari Morgan', title: 'Trustee', party: null },
    ],
  },

  /* ── Cheboygan County school boards ── */

  'Cheboygan Area Schools': {
    name: 'Cheboygan Area Schools Board of Education',
    county: 'Cheboygan',
    website: 'https://www.chebschools.org',
    officials: [
      { name: 'Julie Lohela', title: 'President', party: null },
      { name: 'Matt Mlynarchek', title: 'Treasurer', party: null },
      { name: 'Debra Buehner', title: 'Trustee', party: null },
      { name: 'Luke Kwiatkowski', title: 'Trustee', party: null },
      { name: 'Travis Neville', title: 'Trustee', party: null },
      { name: 'Richard Pilon', title: 'Trustee', party: null },
      { name: 'Tim Tarjeft', title: 'Trustee', party: null },
    ],
  },
  'Inland Lakes Schools': {
    name: 'Inland Lakes Schools Board of Education',
    county: 'Cheboygan',
    website: 'https://www.inlandlakes.org',
    officials: [
      { name: 'Timothy Burg', title: 'Trustee', party: null },
      { name: 'Erin DuBois', title: 'Trustee', party: null },
      { name: 'Kalie Kenville', title: 'Trustee', party: null },
      { name: 'Jeffrey Milner', title: 'Trustee', party: null },
      { name: 'Kristin Dudek', title: 'Trustee', party: null },
      { name: 'Jill Feagan', title: 'Trustee', party: null },
      { name: 'Dan Fletcher', title: 'Trustee', party: null },
    ],
  },
  'Wolverine Community Schools': {
    name: 'Wolverine Community Schools Board of Education',
    county: 'Cheboygan',
    website: 'https://www.wolverineschools.org',
    officials: [
      { name: 'Eric Brado', title: 'Trustee', party: null },
      { name: 'Katie Brazier', title: 'Trustee', party: null },
      { name: 'Diane Dunham', title: 'Trustee', party: null },
      { name: 'Tabitha Glazier', title: 'Trustee', party: null },
      { name: 'Collin Olds', title: 'Trustee', party: null },
      { name: 'Tansy Sloan', title: 'Trustee', party: null },
      { name: 'Garth Stafford II', title: 'Trustee', party: null },
    ],
  },

  /* ── Otsego County school boards ── */

  'Gaylord Community Schools': {
    name: 'Gaylord Community Schools Board of Education',
    county: 'Otsego',
    officials: [
      { name: 'Douglas Hempenstall', title: 'Trustee', party: null },
      { name: 'Lorelei Hewitt', title: 'Trustee', party: null },
      { name: 'Sara Gapinski', title: 'Trustee', party: null },
      { name: 'Rachel Davis', title: 'Trustee', party: null },
      { name: 'Kari Visser-Robel', title: 'Trustee', party: null },
      { name: 'Katie Drzewiecki', title: 'Trustee', party: null },
      { name: 'Jeff Wieber', title: 'Trustee', party: null },
    ],
  },
  'Johannesburg-Lewiston Area Schools': {
    name: 'Johannesburg-Lewiston Area Schools Board of Education',
    county: 'Otsego',
    officials: [
      { name: 'Scott Mathewson', title: 'Trustee', party: null },
      { name: 'Ursula Owens', title: 'Trustee', party: null },
      { name: 'Frank Claeys', title: 'Trustee', party: null },
      { name: 'Linc Campbell', title: 'Trustee', party: null },
      { name: 'Nancy Kussrow', title: 'Trustee', party: null },
      { name: 'Wendy Huston', title: 'Trustee', party: null },
      { name: 'Michael Vogt', title: 'Trustee', party: null },
    ],
  },
  'Vanderbilt Area Schools': {
    name: 'Vanderbilt Area Schools Board of Education',
    county: 'Otsego',
    officials: [
      { name: 'AnnaMarie Kathleen Deeter', title: 'Trustee', party: null },
      { name: 'Margaret Schweitzer', title: 'Trustee', party: null },
      { name: 'Mary Lynn Kinney', title: 'Trustee', party: null },
      { name: 'Kim Snyder', title: 'Trustee', party: null },
      { name: 'Jody Arit', title: 'Trustee', party: null },
    ],
  },

  /* ── Roscommon County school boards ── */

  'Houghton Lake Community Schools': {
    name: 'Houghton Lake Community Schools Board of Education',
    county: 'Roscommon',
    website: 'https://www.hlcsk12.net',
    officials: [
      { name: 'Bryan Jeske', title: 'President', party: null },
      { name: 'Kelly Christian', title: 'Vice President', party: null },
      { name: 'Paula Whittington', title: 'Secretary', party: null },
      { name: 'Mark Souder', title: 'Treasurer', party: null },
      { name: 'Chauncey Halliday', title: 'Trustee', party: null },
      { name: 'Ashley Boals', title: 'Trustee', party: null },
      { name: 'Jennifer Oster', title: 'Trustee', party: null },
    ],
  },
  'Roscommon Area Public Schools': {
    name: 'Roscommon Area Public Schools Board of Education',
    county: 'Roscommon',
    website: 'https://www.rapsk12.net',
    officials: [
      { name: 'Scott Hess', title: 'President', party: null },
      { name: 'Michael Purkey', title: 'Vice President', party: null },
      { name: 'Janae Ostling', title: 'Secretary', party: null },
      { name: 'Kurt Loll', title: 'Treasurer', party: null },
      { name: 'Jana Falsetta', title: 'Trustee', party: null },
      { name: 'Lauren Eva', title: 'Trustee', party: null },
      { name: 'Michael Bailey', title: 'Trustee', party: null },
    ],
  },

  /* ── Gladwin County school boards ── */

  'Gladwin Community Schools': {
    name: 'Gladwin Community Schools Board of Education',
    county: 'Gladwin',
    website: 'https://www.gladwinschools.net',
    officials: [
      { name: 'Brad Withrow', title: 'Trustee', party: null },
      { name: 'Anne Edick', title: 'Trustee', party: null },
      { name: 'Sherrie Graham', title: 'Trustee', party: null },
      { name: 'Sheila Tenwalde', title: 'Trustee', party: null },
      { name: 'Greg Alward', title: 'Trustee', party: null },
      { name: 'Dan Barren', title: 'Trustee', party: null },
      { name: 'Lacey Dennings', title: 'Trustee', party: null },
    ],
  },
  'Beaverton Rural Schools': {
    name: 'Beaverton Rural Schools Board of Education',
    county: 'Gladwin',
    website: 'https://www.beavertonschools.net',
    officials: [
      { name: 'Adam Zdrojewski', title: 'President', party: null },
      { name: 'Jason Pahl', title: 'Vice President', party: null },
      { name: 'Mark Hayes', title: 'Secretary', party: null },
      { name: 'Tammy Grove', title: 'Treasurer', party: null },
      { name: 'Dan Bennett', title: 'Trustee', party: null },
      { name: 'Michael Dodman', title: 'Trustee', party: null },
      { name: 'Amber Hubble', title: 'Trustee', party: null },
    ],
  },

  /* ── Alpena County school boards ── */

  'Alpena Public Schools': {
    name: 'Alpena Public Schools Board of Education',
    county: 'Alpena',
    website: 'https://www.alpenaschools.com',
    phone: '989-354-2083',
    officials: [
      { name: 'Eric Lawson', title: 'President', party: null },
      { name: 'Andrew MacArthur', title: 'Vice President', party: null },
      { name: 'Sarah Costain', title: 'Treasurer', party: null },
      { name: 'Anna Meinhardt', title: 'Trustee', party: null },
      { name: 'Eric Hansen', title: 'Trustee', party: null },
      { name: 'Sarah Fritz', title: 'Trustee', party: null },
      { name: 'Monica Dziesinski', title: 'Trustee', party: null },
    ],
  },

  /* ── Montmorency County school boards ── */

  'Atlanta Community Schools': {
    name: 'Atlanta Community Schools',
    county: 'Montmorency',
    website: 'https://www.atlantaschools.us/board-of-education/',
    officials: [
      { name: 'Amy Corbin', title: 'President', party: null },
      { name: 'Tom Morton', title: 'Vice President', party: null },
      { name: 'Doris Smith', title: 'Secretary', party: null },
      { name: 'Pam Parsons', title: 'Treasurer', party: null },
      { name: 'Ben Brinker', title: 'Trustee', party: null },
      { name: 'Cody Stevens', title: 'Trustee', party: null },
      { name: 'Kelly Karll', title: 'Trustee', party: null },
    ],
  },

  'Hillman Community Schools': {
    name: 'Hillman Community Schools',
    county: 'Montmorency',
    website: 'https://www.hillmanschools.com/district-office/board-of-education/',
    officials: [
      { name: 'Melissa Kennard', title: 'President', party: null },
      { name: 'Roxanne LaFleche', title: 'Vice President', party: null },
      { name: 'Brian Klein', title: 'Secretary', party: null },
      { name: 'Stewart Scramlin', title: 'Treasurer', party: null },
      { name: 'Laurie Nugent', title: 'Trustee', party: null },
      { name: 'David Pickelhaupt', title: 'Trustee', party: null },
      { name: 'George Kearns', title: 'Trustee', party: null },
    ],
  },

  'Johannesburg-Lewiston Area Schools': {
    name: 'Johannesburg-Lewiston Area Schools',
    county: 'Montmorency',
    website: 'https://www.jlas.org/',
    officials: [
      { name: 'Scott Mathewson', title: 'President', party: null },
      { name: 'Mike Vogt', title: 'Vice President', party: null },
      { name: 'Frank Claeys', title: 'Treasurer', party: null },
      { name: 'Wendy Huston', title: 'Secretary', party: null },
      { name: 'Linc Campbell', title: 'Trustee', party: null },
      { name: 'Ursula Owens', title: 'Trustee', party: null },
      { name: 'Nancy Kussrow', title: 'Trustee', party: null },
    ],
  },

  /* ── Clare County school boards ── */

  'Clare Public Schools': {
    name: 'Clare Public Schools Board of Education',
    county: 'Clare',
    website: 'https://www.clare.k12.mi.us/page/board-members',
    phone: '989-386-9945',
    officials: [
      { name: 'Susan Atwood', title: 'Board Member', party: null },
      { name: 'Loren Cole', title: 'Board Member', party: null },
      { name: 'Jennifer Dancer', title: 'Board Member', party: null },
      { name: 'Kelly Luplow', title: 'Board Member', party: null },
      { name: 'Jason MacDonald', title: 'Board Member', party: null },
      { name: 'John Miller', title: 'Board Member', party: null },
      { name: 'Samantha Sharp', title: 'Board Member', party: null },
    ],
  },

  'Harrison Community Schools': {
    name: 'Harrison Community Schools Board of Education',
    county: 'Clare',
    website: 'https://www.harrisonschools.com',
    phone: '989-539-7871',
    officials: [
      { name: 'Kendra Durga', title: 'President', party: null },
      { name: 'James Neff', title: 'Vice President', party: null },
      { name: 'Therese Haley', title: 'Secretary', party: null },
      { name: 'Betsy Ulicki', title: 'Trustee', party: null },
      { name: 'Mick Haley', title: 'Trustee', party: null },
      { name: 'Chelsea Roland', title: 'Trustee', party: null },
      { name: 'Carrie Whitaker', title: 'Trustee', party: null },
    ],
  },

  'Farwell Area Schools': {
    name: 'Farwell Area Schools Board of Education',
    county: 'Clare',
    website: 'https://www.farwellschools.net/page/board-of-education',
    phone: '989-588-9917',
    officials: [
      { name: 'Nathan Yarhouse', title: 'Board Member', party: null },
      { name: 'Jade Campbell', title: 'Board Member', party: null },
      { name: 'John Gross', title: 'Board Member', party: null },
      { name: 'Joe Maxey', title: 'Board Member', party: null },
      { name: 'John Pakledinaz', title: 'Board Member', party: null },
      { name: 'Kellee Robinson', title: 'Board Member', party: null },
      { name: 'Danielle Sholes', title: 'Board Member', party: null },
    ],
  },

  /* ── Lake County school boards ── */

  'Baldwin Community Schools': {
    name: 'Baldwin Community Schools',
    county: 'Lake',
    website: 'https://www.baldwin.k12.mi.us/page/board-of-education',
    officials: [
      { name: 'Mary Martin', title: 'President', party: null },
      { name: 'Mary Ann Pieske', title: 'Vice President', party: null },
      { name: 'Katena Abraham', title: 'Secretary', party: null },
      { name: 'Marion Carter', title: 'Treasurer', party: null },
      { name: 'Joseph Brooks Jr.', title: 'Trustee', party: null },
      { name: 'David VanHorn', title: 'Trustee', party: null },
      { name: 'Diamond Burrell', title: 'Trustee', party: null },
    ],
  },

  /* ── Delta County school boards ── */

  'Escanaba Area Public Schools': {
    name: 'Escanaba Area Public Schools Board of Education',
    county: 'Delta',
    website: 'https://www.eskymos.com',
    officials: [
      { name: 'Dan Flynn', title: 'President', party: null },
      { name: 'Steve Howes', title: 'Vice President', party: null },
      { name: 'JJ Johnson-Reeves', title: 'Secretary', party: null },
      { name: 'Todd Milkiewicz', title: 'Treasurer', party: null },
      { name: 'Jim Beauchamp', title: 'Trustee', party: null },
      { name: 'Sage Dubord', title: 'Trustee', party: null },
      { name: 'Angela Gardner', title: 'Trustee', party: null },
    ],
  },

  'Gladstone Area Schools': {
    name: 'Gladstone Area Schools Board of Education',
    county: 'Delta',
    website: 'https://www.gladstoneschools.com',
    officials: [
      { name: 'Steve Tackman', title: 'President', party: null },
      { name: 'Nathan Neumeier', title: 'Vice President', party: null },
      { name: 'Jesse Seger', title: 'Secretary', party: null },
      { name: 'Henry Knoch', title: 'Treasurer', party: null },
      { name: 'Andrew Sturdy', title: 'Trustee', party: null },
      { name: 'Joe Huber', title: 'Trustee', party: null },
      { name: 'Phil DeMay', title: 'Trustee', party: null },
    ],
  },

  'Rapid River Public Schools': {
    name: 'Rapid River Public Schools Board of Education',
    county: 'Delta',
    website: 'https://www.rapidriver.k12.mi.us',
    officials: [
      { name: 'Jake Denkins', title: 'President', party: null },
      { name: 'Lisa Hough', title: 'Vice President', party: null },
      { name: 'April Proehl', title: 'Secretary', party: null },
      { name: 'Travis Gustafson', title: 'Treasurer', party: null },
      { name: 'Matt Holmio', title: 'Trustee', party: null },
      { name: 'Robert Poma', title: 'Trustee', party: null },
      { name: 'Heidi Parsons', title: 'Trustee', party: null },
    ],
  },

  'Big Bay de Noc School District': {
    name: 'Big Bay de Noc School District Board of Education',
    county: 'Delta',
    officials: [
      { name: 'Lindsey Bleau', title: 'Trustee', party: null },
      { name: 'Ben Carley', title: 'Trustee', party: null },
      { name: 'Kathy Frankovich', title: 'Trustee', party: null },
      { name: 'Adam Gembel', title: 'Trustee', party: null },
      { name: 'Rachel Paulson', title: 'Trustee', party: null },
      { name: 'Heather Pederson', title: 'Trustee', party: null },
      { name: 'Jodi Williams', title: 'Trustee', party: null },
    ],
  },

  'Mid Peninsula School District': {
    name: 'Mid Peninsula School District Board of Education',
    county: 'Delta',
    website: 'https://www.mpswolverines.com',
    officials: [
      { name: 'Delores Englund', title: 'Trustee', party: null },
      { name: 'Mandi Lippens', title: 'Trustee', party: null },
      { name: 'Robert Van Damme', title: 'Trustee', party: null },
      { name: 'John Albertson', title: 'Trustee', party: null },
      { name: 'Gary Kivioja', title: 'Trustee', party: null },
      { name: 'Cheryl Patrick', title: 'Trustee', party: null },
      { name: 'Dale Kevin Schneider', title: 'Trustee', party: null },
    ],
  },

  'Bark River-Harris Schools': {
    name: 'Bark River-Harris Schools Board of Education',
    county: 'Delta',
    website: 'https://www.brhschools.org',
    officials: [
      { name: 'Mark Erickson', title: 'President', party: null },
      { name: 'Melissa Kemppainen', title: 'Vice President', party: null },
      { name: 'Mia Smith', title: 'Secretary', party: null },
      { name: 'Shellie Massie', title: 'Treasurer', party: null },
      { name: 'Sarah Hoffmeyer', title: 'Trustee', party: null },
      { name: 'Paul Stemick', title: 'Trustee', party: null },
      { name: 'Bill Schmitt', title: 'Trustee', party: null },
    ],
  },

  /* ── Dickinson County school boards ── */

  'Iron Mountain Public Schools': {
    name: 'Iron Mountain Public Schools Board of Education',
    county: 'Dickinson',
    website: 'https://imschools.org',
    officials: [
      { name: 'Shari Picucci-White', title: 'President', party: null },
      { name: 'Ben DeRidder', title: 'Vice President', party: null },
      { name: 'Darren Petschar', title: 'Secretary', party: null },
      { name: 'Jennifer Solka', title: 'Treasurer', party: null },
      { name: 'Lisa Carollo', title: 'Trustee', party: null },
      { name: 'James Carollo', title: 'Trustee', party: null },
      { name: 'Juan Saldana', title: 'Trustee', party: null },
    ],
  },

  'Breitung Township Schools': {
    name: 'Breitung Township Schools Board of Education',
    county: 'Dickinson',
    website: 'https://www.kingsford.org',
    officials: [
      { name: 'Angela Hall', title: 'President', party: null },
      { name: 'Joshua Edwards', title: 'Vice President', party: null },
      { name: 'Susan Smith', title: 'Secretary', party: null },
      { name: 'Valarie Andes', title: 'Treasurer', party: null },
      { name: 'Nick Dallapiazza', title: 'Trustee', party: null },
      { name: 'Jeff Harry', title: 'Trustee', party: null },
      { name: 'Joanne To', title: 'Trustee', party: null },
    ],
  },

  'Norway-Vulcan Area Schools': {
    name: 'Norway-Vulcan Area Schools Board of Education',
    county: 'Dickinson',
    officials: [
      { name: 'Kristen Ball', title: 'Trustee', party: null },
      { name: 'Jennifer DeDecker', title: 'Trustee', party: null },
      { name: 'Marybeth Langin', title: 'Trustee', party: null },
      { name: 'Joe Occhietti', title: 'Trustee', party: null },
      { name: 'Joey Pontbriand', title: 'Trustee', party: null },
      { name: 'April VanEynde', title: 'Trustee', party: null },
      { name: 'Jan VanGasse', title: 'Trustee', party: null },
    ],
  },

  'North Dickinson County Schools': {
    name: 'North Dickinson County Schools Board of Education',
    county: 'Dickinson',
    officials: [
      { name: 'Krystal Fayas', title: 'Trustee', party: null },
      { name: 'Alex Graham', title: 'Trustee', party: null },
      { name: 'Sara Grenier', title: 'Trustee', party: null },
      { name: 'Joseph Nurmi', title: 'Trustee', party: null },
      { name: 'Christopher Roell', title: 'Trustee', party: null },
      { name: 'Jacquelen Schemmel', title: 'Trustee', party: null },
      { name: 'Kris Steinbrecher', title: 'Trustee', party: null },
    ],
  },

  /* ── Houghton County school boards ── */

  'Houghton-Portage Township Schools': {
    name: 'Houghton-Portage Township Schools Board of Education',
    county: 'Houghton',
    website: 'https://www.hpts.us',
    officials: [
      { name: 'Amanda Massaway', title: 'President', party: null },
      { name: 'Brent Burns', title: 'Vice President', party: null },
      { name: 'Mike Salmi', title: 'Secretary', party: null },
      { name: 'Julie Cischke', title: 'Treasurer', party: null },
      { name: 'Brad Baltensperger', title: 'Trustee', party: null },
      { name: 'Philip Buck Foltz', title: 'Trustee', party: null },
      { name: 'Melissa Vertin', title: 'Trustee', party: null },
    ],
  },

  'Hancock Public Schools': {
    name: 'Hancock Public Schools Board of Education',
    county: 'Houghton',
    website: 'https://hancockpublicschools.org',
    officials: [
      { name: 'Michael Lancour', title: 'President', party: null },
      { name: 'Charles Klein', title: 'Vice President', party: null },
      { name: 'Emilie Lancour', title: 'Secretary', party: null },
      { name: 'Becky Ylitalo', title: 'Treasurer', party: null },
      { name: 'Catherine Jordan', title: 'Trustee', party: null },
      { name: 'Rod Paavola', title: 'Trustee', party: null },
      { name: 'Taylor Paul', title: 'Trustee', party: null },
    ],
  },

  'CLK Public Schools': {
    name: 'Calumet-Laurium-Keweenaw Public Schools Board of Education',
    county: 'Houghton',
    website: 'https://clkschools.org',
    officials: [
      { name: 'Phyllis M. Locatelli', title: 'President', party: null },
      { name: 'Jason Wickstrom', title: 'Vice President', party: null },
      { name: 'Melanie J. Parker', title: 'Secretary', party: null },
      { name: 'Daniel J. Zubiena', title: 'Treasurer', party: null },
      { name: 'Philip Halonen', title: 'Trustee', party: null },
      { name: 'Adam Loukus', title: 'Trustee', party: null },
      { name: 'James Vertin', title: 'Trustee', party: null },
    ],
  },

  'Lake Linden-Hubbell Public Schools': {
    name: 'Lake Linden-Hubbell Public Schools Board of Education',
    county: 'Houghton',
    website: 'https://www.lakelindenschools.org',
    officials: [
      { name: 'Patricia Burton', title: 'President', party: null },
      { name: 'Jeff Dennis', title: 'Vice President', party: null },
      { name: 'Lori Ambuehl', title: 'Secretary', party: null },
      { name: 'Jennifer Beaudette', title: 'Treasurer', party: null },
      { name: 'David Anderson', title: 'Trustee', party: null },
      { name: 'Melissa Corrigan', title: 'Trustee', party: null },
      { name: 'Courtney Holzberger', title: 'Trustee', party: null },
    ],
  },

  'Adams Township School District': {
    name: 'Adams Township School District Board of Education',
    county: 'Houghton',
    website: 'https://adamstownshipschools.org',
    officials: [
      { name: 'Darren Niemi', title: 'President', party: null },
      { name: 'Justin Marier', title: 'Vice President', party: null },
      { name: 'Kristen Archambeau', title: 'Secretary', party: null },
      { name: 'Eric Mattila', title: 'Treasurer', party: null },
      { name: 'George Eakin', title: 'Trustee', party: null },
      { name: 'Tyler Kinnunen', title: 'Trustee', party: null },
      { name: 'Ashley Sudderth', title: 'Trustee', party: null },
    ],
  },

  'Chassell Township Schools': {
    name: 'Chassell Township Schools Board of Education',
    county: 'Houghton',
    website: 'https://www.chassellschools.com',
    officials: [
      { name: 'Peter Torola', title: 'President', party: null },
      { name: 'Heather Murphy', title: 'Vice President', party: null },
      { name: 'Tanya Etelamaki', title: 'Secretary', party: null },
      { name: 'B.J. Tervo', title: 'Treasurer', party: null },
      { name: 'Randal Danison', title: 'Trustee', party: null },
      { name: 'Carl Olson', title: 'Trustee', party: null },
    ],
  },

  /* ── Marquette County school boards ── */

  'Negaunee Public Schools': {
    name: 'Negaunee Public Schools Board of Education',
    county: 'Marquette',
    website: 'https://www.negauneeschools.org',
    officials: [
      { name: 'Todd Saunders', title: 'President', party: null },
      { name: 'Dave Paananen', title: 'Vice President', party: null },
      { name: 'Amy Clickner', title: 'Secretary', party: null },
      { name: 'Fae Collins', title: 'Treasurer', party: null },
      { name: 'Martin Saari', title: 'Trustee', party: null },
      { name: 'Pat Thomson', title: 'Trustee', party: null },
      { name: 'Greg Toutant', title: 'Trustee', party: null },
    ],
  },

  'Ishpeming Public School District': {
    name: 'Ishpeming Public School District Board of Education',
    county: 'Marquette',
    website: 'https://www.ishpemingschools.org',
    officials: [
      { name: 'Joe Routhier', title: 'President', party: null },
      { name: 'Angela Kangas', title: 'Vice President', party: null },
      { name: 'Robert Nadeau', title: 'Secretary', party: null },
      { name: 'Darin Hooper', title: 'Treasurer', party: null },
      { name: 'Tim Hares', title: 'Trustee', party: null },
      { name: 'Jenna Luoma', title: 'Trustee', party: null },
      { name: 'Greg Maki', title: 'Trustee', party: null },
    ],
  },

  'NICE Community Schools': {
    name: 'NICE Community Schools Board of Education',
    county: 'Marquette',
    website: 'https://nice.k12.mi.us',
    officials: [
      { name: 'Crystal LaFreniere', title: 'President', party: null },
      { name: 'Scott Mann', title: 'Vice President', party: null },
      { name: 'Chad Korpi', title: 'Secretary', party: null },
      { name: 'James Gray', title: 'Treasurer', party: null },
      { name: 'Kathleen Carlson', title: 'Trustee', party: null },
      { name: 'John Grove', title: 'Trustee', party: null },
      { name: 'Derrick Magnuson', title: 'Trustee', party: null },
    ],
  },

  'Republic-Michigamme Schools': {
    name: 'Republic-Michigamme Schools Board of Education',
    county: 'Marquette',
    website: 'https://sites.google.com/r-mschool.org/r-mschool',
    officials: [
      { name: 'J. Spear', title: 'Trustee', party: null },
      { name: 'Carl Akso', title: 'Trustee', party: null },
      { name: 'W. Wheeler', title: 'Trustee', party: null },
      { name: 'Katrina Lowrey', title: 'Trustee', party: null },
      { name: 'Mark Antilla', title: 'Trustee', party: null },
      { name: 'David Holsworth', title: 'Trustee', party: null },
      { name: 'Alexander Ross', title: 'Trustee', party: null },
    ],
  },

  'Powell Township Schools': {
    name: 'Powell Township Schools Board of Education',
    county: 'Marquette',
    website: 'https://www.powellschool.com',
    officials: [
      { name: 'Richard Baker', title: 'President', party: null },
      { name: 'Matt Anderson', title: 'Vice President', party: null },
      { name: 'Bridget Moran', title: 'Secretary', party: null },
      { name: 'Anthony Fortunato', title: 'Treasurer', party: null },
      { name: 'Lora Barber', title: 'Trustee', party: null },
    ],
  },
}

/* ── Village officials ── */

export const MI_VILLAGE_OFFICIALS = {
  'Beverly Hills': {
    name: 'Village of Beverly Hills',
    website: 'https://www.villagebeverlyhills.com',
    phone: '248-646-6404',
    officials: [
      { name: 'Robert Novitsky', title: 'Village President', party: null, phone: '248-646-6404' },
      { name: 'John Nolan', title: 'Village President Pro Tem', party: null },
      { name: 'Bob Eger', title: 'Council Member', party: null },
      { name: 'George Cain', title: 'Council Member', party: null },
      { name: 'Jon Fult', title: 'Council Member', party: null },
      { name: 'Rachael Oleszko', title: 'Council Member', party: null },
    ],
  },

  Milford: {
    name: 'Village of Milford',
    website: 'https://www.villageofmilford.org',
    phone: '248-684-1515',
    officials: [
      { name: 'Jerry Aubry', title: 'Village President', party: null, phone: '248-684-1515' },
      { name: 'David Pehrson', title: 'Village President Pro Tem', party: null },
      { name: 'Mike Nolta', title: 'Council Member', party: null },
      { name: 'Rhonda Plachta', title: 'Council Member', party: null },
      { name: 'John Anderson', title: 'Council Member', party: null },
      { name: 'Sara Munaretto', title: 'Council Member', party: null },
    ],
  },

  /* ── Montcalm County villages ── */

  Edmore: {
    name: 'Village of Edmore',
    website: 'https://www.edmore.com',
    phone: '989-427-5641',
    officials: [
      { name: 'Chet Guild', title: 'Village President', party: null },
      { name: 'Tom Colburn', title: 'President Pro-Tem', party: null },
      { name: 'Kerri Peterson', title: 'Village Clerk', party: null },
      { name: 'Shirley Drain', title: 'Village Treasurer', party: null },
      { name: 'Stephanie Kanine', title: 'Trustee', party: null },
      { name: 'Ron Griswold', title: 'Trustee', party: null },
      { name: 'John Moore', title: 'Trustee', party: null },
      { name: 'Cristina Pierce', title: 'Trustee', party: null },
      { name: 'Carla McParland', title: 'Trustee', party: null },
    ],
  },

  'Howard City': {
    name: 'Village of Howard City',
    website: 'https://www.howardcity.org',
    phone: '231-937-4311',
    officials: [
      { name: 'Randy Heckman', title: 'Village President', party: null },
      { name: 'Jean Toner', title: 'Trustee', party: null },
      { name: 'Mallory Wert', title: 'Trustee', party: null },
      /* UNVERIFIED: remaining 4 trustees not confirmed via web search — check howardcity.org/village-council */
    ],
  },

  Lakeview: {
    name: 'Village of Lakeview',
    website: 'https://villageoflakeview.org',
    phone: '989-352-6322',
    officials: [
      { name: 'Emily Griffith', title: 'Village President', party: null },
      { name: 'Lane Leppink', title: 'Trustee', party: null },
      { name: 'Jyll Mitchell', title: 'Trustee', party: null },
      { name: 'Chris Fryover', title: 'Trustee', party: null },
      { name: 'Chad Carlson', title: 'Trustee', party: null },
      { name: 'Kate Behrenwald', title: 'Trustee', party: null },
      { name: 'Dominic Trevino', title: 'Trustee', party: null },
    ],
  },

  McBride: {
    name: 'Village of McBride',
    website: null,
    phone: '989-762-3022',
    officials: [
      { name: 'Kimberly Jenson', title: 'Village President', party: null },
      { name: 'Jacque Seidelman', title: 'Village Clerk', party: null },
      { name: 'Tracy Stratton', title: 'Village Treasurer', party: null },
      /* UNVERIFIED: trustees not confirmed via web search */
    ],
  },

  'Pierson Village': {
    name: 'Village of Pierson',
    website: null,
    phone: '616-636-5101',
    officials: [
      /* UNVERIFIED: no current officials found online. Contact villageofpierson@gmail.com */
    ],
  },

  Sheridan: {
    name: 'Village of Sheridan',
    website: 'https://villageofsheridan.com',
    phone: '989-291-3485',
    officials: [
      /* UNVERIFIED: no current officials found online. Contact Office@villageofsheridan.com */
    ],
  },

  /* ── Kent County villages ── */

  'Caledonia Village': {
    name: 'Village of Caledonia',
    website: 'https://www.villageofcaledonia.org',
    county: 'Kent',
    officials: [
      { name: 'Jennifer Lindsey', title: 'Village President', party: null },
      { name: 'Cheryl Miller', title: 'Trustee (Pro Tempore/Vice President)', party: null },
      { name: 'Dan Erskine', title: 'Trustee', party: null },
      { name: 'Nikki Daley', title: 'Trustee', party: null },
      { name: 'Jeff Niles', title: 'Trustee', party: null },
      { name: 'Gerrianne Schuler', title: 'Trustee', party: null },
      { name: 'Jean Soest', title: 'Trustee', party: null },
    ],
  },

  'Sand Lake': {
    name: 'Village of Sand Lake',
    website: 'https://villageofsandlake.org',
    phone: '616-636-8854',
    county: 'Kent',
    officials: [
      { name: 'Dan Hula', title: 'Village President', party: null }, /* appointed Mar 2026 after leadership changes */
      { name: 'Marcia Helton', title: 'Trustee', party: null },
      { name: 'Chris Stieg', title: 'Trustee', party: null },
      /* UNVERIFIED: remaining trustees changed in 2026. Contact village for current roster */
    ],
  },

  'Sparta Village': {
    name: 'Village of Sparta',
    website: 'https://spartami.org',
    county: 'Kent',
    officials: [
      { name: 'Robert Whalen', title: 'Village President', party: null },
      { name: 'Kristen Phelps', title: 'Village Clerk', party: null },
      { name: 'David G. Carpenter', title: 'Village Treasurer & Finance Director', party: null },
      { name: 'Brenda Braybrook', title: 'Council President Pro-Tempore', party: null },
      { name: 'Robert Carlstrom', title: 'Council Member', party: null },
      { name: 'Dave Cumings', title: 'Council Member', party: null },
      { name: 'Tom Peoples', title: 'Council Member', party: null },
      { name: 'Christina Owens', title: 'Council Member', party: null },
      { name: 'Bill Taylor', title: 'Council Member', party: null },
    ],
  },

  'Kent City': {
    name: 'Village of Kent City',
    website: 'https://www.kentcitymi.org',
    phone: '616-678-7232',
    county: 'Kent',
    officials: [
      { name: 'Bert Rose', title: 'Village President', party: null },
      /* UNVERIFIED: clerk, treasurer, and council members not confirmed via web search — check kentcitymi.org */
    ],
  },

  /* ── Ottawa County villages ── */

  'Spring Lake Village': {
    name: 'Village of Spring Lake',
    county: 'Ottawa',
    website: 'https://springlakevillage.org/',
    phone: '616-842-1393',
    officials: [
      { name: 'Mark Powers', title: 'Village President', party: null },
      { name: 'Joel TePastte', title: 'President Pro-Tem', party: null },
      { name: 'Dan Abbott', title: 'Council Member', party: null },
      { name: 'Jennifer Johnson', title: 'Council Member', party: null },
      { name: 'Patrick Roggenbau', title: 'Council Member', party: null },
      { name: 'Lesley Van Leeuwen-Vega', title: 'Council Member', party: null },
      { name: 'Michael Cadieux', title: 'Council Member', party: null },
    ],
  },

  /* ── Muskegon County villages ── */

  'Ravenna Village': {
    name: 'Village of Ravenna',
    website: 'https://ravennami.com',
    phone: '231-853-2360',
    officials: [
      { name: 'Steve Dodson', title: 'Village President', party: null },
      { name: 'Gary Marsman', title: 'Council Member', party: null },
      { name: 'Susan Bennett', title: 'Council Member', party: null },
      { name: 'Greg Grover', title: 'Council Member', party: null },
    ],
  },

  'Fruitport Village': {
    name: 'Village of Fruitport',
    website: 'https://www.fruitportvillage.com',
    phone: '231-865-3153',
    officials: [
      { name: 'Roger Vanderstelt', title: 'Village President', party: null },
      { name: 'Amy Haack', title: 'Village Clerk', party: null },
      { name: 'Jeffrey Guiles', title: 'Trustee', party: null },
      { name: 'Chris LeFaive', title: 'Trustee', party: null },
      { name: 'Bill Overkamp', title: 'Trustee', party: null },
    ],
  },

  'Lakewood Club': {
    name: 'Village of Lakewood Club',
    website: 'https://villageoflakewoodclub.org',
    phone: '231-894-8425',
    officials: [
      { name: 'Robert Sikkenga', title: 'Village President', party: null },
      { name: 'Susan West', title: 'Village Clerk', party: null },
      { name: 'Hannah Swanson', title: 'Village Treasurer', party: null },
      { name: 'Chad Greenert', title: 'Trustee', party: null },
      { name: 'Debbie Houtteman', title: 'Trustee', party: null },
      { name: 'Mark Spencer', title: 'Trustee', party: null },
      { name: 'Sarah Swanson', title: 'Trustee', party: null },
      { name: 'Tammy Verhoeven', title: 'Trustee', party: null },
      { name: 'David West', title: 'Trustee', party: null },
    ],
  },

  'Casnovia Village': {
    name: 'Village of Casnovia',
    website: 'https://villageofcasnovia.org',
    phone: '616-675-4636',
    officials: [
      /* UNVERIFIED: current officials not confirmed -- check villageofcasnovia.org/village-officials */
    ],
  },

    /* ── Mecosta County villages ── */

  Morley: {
    name: 'Village of Morley',
    website: 'http://villageofmorley.com',
    phone: '231-856-4582',
    officials: [
      { name: 'Austin Korpal', title: 'Village President', party: null },
      { name: 'Whitney Frisbie', title: 'Clerk', party: null },
      { name: 'Joseph Riddering', title: 'Treasurer', party: null },
      { name: 'Serine Petersen', title: 'Trustee', party: null },
      { name: 'Paul Block', title: 'Trustee', party: null },
      { name: 'Sandra Leal', title: 'Trustee', party: null },
    ],
  },

  Stanwood: {
    name: 'Village of Stanwood',
    phone: '231-679-0680',
    officials: [
      { name: 'Cody Stilson', title: 'Village President', party: null },
      { name: 'Michael Fish', title: 'Clerk', party: null },
      { name: 'William Routley', title: 'Treasurer', party: null },
      { name: 'Marvin C. Bell', title: 'Trustee', party: null },
      { name: 'James R. Lyons', title: 'Trustee', party: null },
      { name: 'Jessica Routley', title: 'Trustee', party: null },
    ],
  },

  Barryton: {
    name: 'Village of Barryton',
    website: 'https://villageofbarryton.com',
    phone: '989-382-7822',
    officials: [
      { name: 'Daniel Cook', title: 'Village President', party: null },
      { name: 'Melissa Lazzaro', title: 'Clerk', party: null },
      { name: 'Courtney Garchow', title: 'Treasurer', party: null },
      { name: 'Kathryn Kerr', title: 'Trustee (Pro Tempore)', party: null },
      { name: 'Michael Kundrat', title: 'Trustee', party: null },
      { name: 'Michelle Kundrat', title: 'Trustee', party: null },
      { name: 'Terah Eaton', title: 'Trustee', party: null },
    ],
  },

  'Mecosta Village': {
    name: 'Village of Mecosta',
    website: 'https://villageofmecosta.org',
    phone: '231-972-7614',
    officials: [
      { name: 'Ann Wrobbel', title: 'Village President', party: null },
      { name: 'Joy Moorman', title: 'Clerk', party: null },
      { name: 'Melissa Moorman', title: 'Treasurer', party: null },
      { name: 'Alice Ray', title: 'Trustee', party: null },
      { name: 'Katherine Snider', title: 'Trustee', party: null },
      { name: 'Pat Sundquist', title: 'Trustee', party: null },
      { name: 'Colleen Beemer', title: 'Trustee', party: null },
      { name: 'Kim Wernette', title: 'Trustee', party: null },
    ],
  },

  /* ── Osceola County villages ── */

  Tustin: {
    name: 'Village of Tustin',
    phone: '231-829-3598',
    officials: [
      { name: 'Ryan Erickson', title: 'Village President', party: null },
      { name: 'Sandra Leach', title: 'Clerk', party: null },
      { name: 'Teresa Raab', title: 'Treasurer', party: null },
    ],
  },

  'Hersey Village': {
    name: 'Village of Hersey',
    officials: [
      { name: 'Robin Marvel', title: 'Village President', party: null },
    ],
  },

  'LeRoy Village': {
    name: 'Village of LeRoy',
    website: 'https://www.leroymi.org',
    phone: '231-768-4414',
    officials: [],
  },

  Marion: {
    name: 'Village of Marion',
    website: 'https://marionmichigan.org',
    phone: '231-743-6801',
    officials: [
      { name: 'Flora A. Grundy', title: 'Village President', party: null },
      { name: 'Jack Nehmer', title: 'President Pro Tem', party: null },
      { name: 'Cal Ellens', title: 'Trustee', party: null },
      { name: 'Dave Swiler', title: 'Trustee', party: null },
      { name: 'Tony Maddox', title: 'Trustee', party: null },
      { name: 'Bonnie Tenney', title: 'Trustee', party: null },
      { name: 'Trent Mitchell', title: 'Trustee', party: null },
    ],
  },

  /* ── Lake County villages ── */

  Baldwin: {
    name: 'Village of Baldwin',
    website: 'https://villageofbaldwin.org',
    officials: [
      { name: 'Harold Nichols', title: 'Village President', party: null },
      { name: 'Theresa Lamb', title: 'Clerk', party: null },
      { name: 'Cassie Smith', title: 'Treasurer', party: null },
      { name: 'Kelly Zoellner', title: 'Trustee', party: null },
      { name: 'Curtis Miller', title: 'Trustee', party: null },
      { name: 'Pam Anderson', title: 'Trustee', party: null },
      { name: 'Tim Jannereth', title: 'Trustee', party: null },
    ],
  },

  Luther: {
    name: 'Village of Luther',
    website: 'https://luthermi.org',
    officials: [
      { name: 'Andy Treiber', title: 'Village President', party: null },
      { name: 'Carrie Fansler', title: 'Clerk', party: null },
      { name: 'Amy Jo DeJesus', title: 'Treasurer', party: null },
      { name: 'Connie Holmes', title: 'Trustee', party: null },
      { name: 'Brittany Carlson', title: 'Trustee', party: null },
      { name: 'Rose Wetherall', title: 'Trustee', party: null },
      { name: 'Tiffany Clark', title: 'Trustee', party: null },
      { name: 'James Bacon', title: 'Trustee', party: null },
      { name: 'Michelle Goodman', title: 'Trustee', party: null },
    ],
  },

  /* ── Isabella County villages ── */

  Shepherd: {
    name: 'Village of Shepherd',
    county: 'Isabella',
    website: 'https://villageofshepherd.org/',
    phone: '989-828-5278',
    officials: [
      { name: 'Michael Degraw', title: 'Village President', party: null },
      { name: 'Gina Gross', title: 'Clerk', party: null },
      { name: 'Carey Wilmot', title: 'Treasurer', party: null },
      { name: 'Sarah Bryant', title: 'Trustee', party: null },
      { name: 'Valerie A. Maloney', title: 'Trustee', party: null },
      { name: 'Douglas F. Mueller', title: 'Trustee', party: null },
      { name: 'Maureen VanHooser', title: 'Trustee', party: null },
    ],
  },

  Rosebush: {
    name: 'Village of Rosebush',
    county: 'Isabella',
    officials: [
      { name: 'Margaret Anderson', title: 'Village President', party: null },
      { name: 'Chris Braisington', title: 'Clerk', party: null },
      { name: 'Patty Stowell', title: 'Treasurer', party: null },
      { name: 'Julie Clark', title: 'Trustee', party: null },
      { name: 'Donald Holp', title: 'Trustee', party: null },
      { name: 'Frank Lynch', title: 'Trustee', party: null },
      { name: 'Charlene R. Mogg', title: 'Trustee', party: null },
    ],
  },

  /* ── Barry County villages ── */

  Middleville: {
    name: 'Village of Middleville',
    county: 'Barry',
    website: 'https://www.villageofmiddleville.org/',
    officials: [
      { name: 'Kevin R. Smith', title: 'Village President', party: null },
      { name: 'Steven Baldry', title: 'President Pro-Tempore', party: null },
      { name: 'Robert Bishop', title: 'Trustee', party: null },
      { name: 'John Osterbaan', title: 'Trustee', party: null },
      { name: 'Pat Hilton', title: 'Trustee', party: null },
      { name: 'Sue Shannon', title: 'Trustee', party: null },
      { name: 'Sandi Wake', title: 'Trustee', party: null },
    ],
  },

  Nashville: {
    name: 'Village of Nashville',
    county: 'Barry',
    website: 'https://nashvillemi.us/',
    officials: [
      { name: 'Mike Kenyon', title: 'President', party: null },
      { name: 'Johnny Harwell', title: 'President Pro-Tem', party: null },
      { name: 'Bonnie White', title: 'Trustee', party: null },
      { name: 'Sherry Hummel', title: 'Trustee', party: null },
      { name: 'Rick Argo', title: 'Trustee', party: null },
      { name: 'Lori Courtney', title: 'Trustee', party: null },
      { name: 'Ben Page', title: 'Trustee', party: null },
    ],
  },

  Freeport: {
    name: 'Village of Freeport',
    county: 'Barry',
    website: 'https://freeportmichigan.org/',
    officials: [
      { name: 'Bill Andrews', title: 'President', party: null },
      { name: 'Shari Clark', title: 'Clerk', party: null },
      { name: 'Joyce Callihan', title: 'Treasurer', party: null },
      { name: 'Lani Forbes', title: 'Trustee', party: null },
      { name: 'Hannah Clewell', title: 'Trustee', party: null },
      { name: 'Amanda Slagstad', title: 'Trustee', party: null },
      { name: 'Shane Faunce', title: 'Trustee', party: null },
    ],
  },

  /* ── Allegan County villages ── */

  Hopkins: {
    name: 'Village of Hopkins',
    county: 'Allegan',
    website: 'https://villageofhopkins.org/',
    officials: [
      { name: 'Nick Price', title: 'President', party: null },
      { name: 'Ben Williams', title: 'President Pro Tempore', party: null },
      { name: 'Mike Alberda', title: 'Clerk', party: null },
      { name: 'Tabitha Kennedy', title: 'Treasurer', party: null },
      { name: 'Dawn Buist', title: 'Trustee', party: null },
      { name: 'Danielle Westhouse', title: 'Trustee', party: null },
      { name: 'Dave Hyatt', title: 'Trustee', party: null },
      { name: 'Nick Pawloski', title: 'Trustee', party: null },
      { name: 'Eric Porter', title: 'Trustee', party: null },
    ],
  },

  'Martin (Allegan)': {
    name: 'Village of Martin',
    county: 'Allegan',
    website: 'https://villageofmartinmi.org/',
    officials: [
      { name: 'Gary Brinkhuis', title: 'Council Member', party: null },
      { name: 'Mike Smith', title: 'Council Member', party: null },
      { name: 'April Taylor', title: 'Council Member', party: null },
      { name: 'Jen Brinkhuis', title: 'Council Member', party: null },
      { name: 'Alice Kelsey', title: 'Council Member', party: null },
      { name: 'Rick Martin', title: 'Council Member', party: null },
      { name: 'Josh Visser', title: 'Council Member', party: null },
    ],
  },

  // ── Ionia County villages ──

  Saranac: {
    name: 'Village of Saranac',
    county: 'Ionia',
    website: 'https://www.villageofsaranacmi.org/',
    officials: [
      { name: 'Sharon Darby', title: 'President', party: null },
      { name: 'Norman Day', title: 'Trustee', party: null },
      { name: 'Adam Doll', title: 'Trustee', party: null },
      { name: 'Brandon Dean Mulnix', title: 'Trustee', party: null },
      { name: 'Mark Talcott', title: 'Trustee', party: null },
      { name: 'Jaye Whorley', title: 'Trustee', party: null },
    ],
  },

  'Lake Odessa': {
    name: 'Village of Lake Odessa',
    county: 'Ionia',
    website: 'https://www.lakeodessa.org/',
    officials: [
      { name: 'Karen Banks', title: 'President', party: null },
      { name: 'Michael Brighton', title: 'Trustee', party: null },
      { name: 'Terri Cappon', title: 'Trustee', party: null },
      { name: 'Benjamin DeJong', title: 'Trustee', party: null },
      { name: 'Robert Green', title: 'Trustee', party: null },
      { name: 'Roy Halfmann', title: 'Trustee', party: null },
      { name: 'Martha Yoder', title: 'Trustee', party: null },
    ],
  },

  Muir: {
    name: 'Village of Muir',
    county: 'Ionia',
    website: 'https://villageofmuirmi.gov/',
    officials: [
      { name: 'Doug Hyland', title: 'President', party: null },
      { name: 'Laura Stewart', title: 'President Pro-Tem', party: null },
      { name: 'Brent Piselli', title: 'Trustee', party: null },
      { name: 'Jacob Garber', title: 'Trustee', party: null },
      { name: 'Derek Kacos', title: 'Trustee', party: null },
      { name: 'Chris Ogden', title: 'Trustee', party: null },
      { name: 'Ron Vander Werff', title: 'Trustee', party: null },
    ],
  },

  Pewamo: {
    name: 'Village of Pewamo',
    county: 'Ionia',
    website: 'https://pewamo.gov/',
    officials: [
      { name: 'Randy Zenk', title: 'President', party: null },
      { name: 'Dan Heckman', title: 'Mayor Pro-Tem', party: null },
      { name: 'Tanner Roe', title: 'Trustee', party: null },
      { name: 'Jane Martin', title: 'Trustee', party: null },
      { name: 'Dale Winsor', title: 'Trustee', party: null },
      { name: 'Christie Antes', title: 'Trustee', party: null },
      { name: 'Jacob Wiggers', title: 'Trustee', party: null },
    ],
  },

  Clarksville: {
    name: 'Village of Clarksville',
    county: 'Ionia',
    website: 'https://clarksvillemi.org/',
    officials: [
      { name: 'Tristen Alderink', title: 'President', party: null },
      { name: 'Shari Clark', title: 'Clerk', party: null },
      { name: 'Rose Barratt', title: 'Treasurer', party: null },
      { name: 'Bonnie Main', title: 'Trustee', party: null },
      { name: 'Patricia Reser', title: 'Trustee', party: null },
      { name: 'Allen Sheldon', title: 'Trustee', party: null },
      { name: 'Debra Winkler', title: 'Trustee', party: null },
      { name: 'Brad Clark', title: 'Trustee', party: null },
      { name: 'Scott Briggs', title: 'Trustee', party: null },
    ],
  },

  Lyons: {
    name: 'Village of Lyons',
    county: 'Ionia',
    website: 'https://lyonsvillage.org/',
    officials: [
      { name: 'Joe Farrington', title: 'President', party: null },
      { name: 'Laura Schoenmehl', title: 'Clerk', party: null },
      { name: 'Jennifer Sims', title: 'Treasurer', party: null },
      { name: 'Jennifer Spearling', title: 'Trustee', party: null },
      { name: 'Chris Spearling', title: 'Trustee', party: null },
      { name: 'Erin Randall', title: 'Trustee', party: null },
      { name: 'Dan Scutt', title: 'Trustee', party: null },
      { name: 'Bernard Russell', title: 'Trustee', party: null },
      { name: 'Jon Houserman', title: 'Trustee', party: null },
    ],
  },

  // ── Mason County villages ──

  Custer: {
    name: 'Village of Custer',
    county: 'Mason',
    website: 'http://www.villageofcuster.org/',
    officials: [
      { name: 'David Sanders', title: 'Village President', party: null },
      { name: 'Cathy S. Sanders', title: 'Clerk', party: null },
      { name: 'Cassidy Kessel', title: 'Treasurer', party: null },
      { name: 'Ryan Howe', title: 'Trustee', party: null },
      { name: 'Lon A. Reader', title: 'Trustee', party: null },
      { name: 'Caleb J. Whitaker', title: 'Trustee', party: null },
    ],
  },

  'Free Soil': {
    name: 'Village of Free Soil',
    county: 'Mason',
    website: null,
    officials: [
      { name: 'David Morley', title: 'Village President', party: null },
      { name: 'Dylan Cash', title: 'Trustee', party: null },
      { name: 'Duane Haiss', title: 'Trustee', party: null },
    ],
  },

  Fountain: {
    name: 'Village of Fountain',
    county: 'Mason',
    website: null,
    officials: [
      { name: 'Terry J. Gonyon', title: 'Village President', party: null },
      { name: 'Scott A. Fenner', title: 'Trustee', party: null },
      { name: 'Kathleen I. Sorenson', title: 'Trustee', party: null },
    ],
  },

  // ── Oceana County villages ──

  Hesperia: {
    name: 'Village of Hesperia',
    county: 'Oceana',
    website: null,
    officials: [
      { name: 'Mike Farber', title: 'Village President', party: null },
      { name: 'Joyce McDonald', title: 'Mayor Pro Tem', party: null },
      { name: 'Stephanie Halverson', title: 'Trustee', party: null },
      { name: 'Sheri Hunt', title: 'Trustee', party: null },
      { name: 'Jackie Slocum', title: 'Trustee', party: null },
      { name: 'Donald Bostrom', title: 'Trustee', party: null },
    ],
  },

  'New Era': {
    name: 'Village of New Era',
    county: 'Oceana',
    website: 'https://neweramichigan.com/',
    officials: [
      { name: 'Roger Fessenden', title: 'Village President', party: null },
      { name: 'Gary Grinwis', title: 'Trustee', party: null },
      { name: 'Mark Kelly', title: 'Trustee', party: null },
      { name: 'Austin Cox', title: 'Trustee', party: null },
      { name: 'Michael Deblois', title: 'Trustee', party: null },
      { name: 'Gene Zainea', title: 'Trustee', party: null },
      { name: 'Annie Gale', title: 'Trustee', party: null },
    ],
  },

  Pentwater: {
    name: 'Village of Pentwater',
    county: 'Oceana',
    website: 'https://pentwatervillage.org/',
    officials: [
      { name: 'Mary Marshall', title: 'Village President', party: null },
      { name: 'Jared Griffis', title: 'President Pro-Tempore', party: null },
      { name: 'Don Palmer', title: 'Trustee', party: null },
      { name: 'Karl Schrumpf', title: 'Trustee', party: null },
      { name: 'Dan Nugent', title: 'Trustee', party: null },
      { name: "Kathy O'Connor", title: 'Trustee', party: null },
      { name: 'Dave Bluhm', title: 'Trustee', party: null },
    ],
  },

  Rothbury: {
    name: 'Village of Rothbury',
    county: 'Oceana',
    website: 'https://villageofrothbury.org/',
    officials: [
      { name: 'Vern Talmadge', title: 'Village President', party: null },
      { name: 'Autumn Drake', title: 'Trustee', party: null },
      { name: 'Jim Fekken', title: 'Trustee', party: null },
      { name: 'Mike Harris', title: 'Trustee', party: null },
      { name: 'Denise Kurdziel', title: 'Trustee', party: null },
      { name: 'Troy Voorhees', title: 'Trustee', party: null },
      { name: 'Dylan Zuniga', title: 'Trustee', party: null },
    ],
  },

  Shelby: {
    name: 'Village of Shelby',
    county: 'Oceana',
    website: 'https://shelbyvillage.com/',
    officials: [
      { name: 'John Sutton', title: 'Village President', party: null },
      { name: 'Crystal Heykoop', title: 'Trustee', party: null },
      { name: 'Dan Zaverl', title: 'Trustee', party: null },
      { name: 'Curt Trott', title: 'Trustee', party: null },
      { name: 'Samantha Gottschalk', title: 'Trustee', party: null },
      { name: 'Steve Crothers', title: 'Trustee', party: null },
      { name: 'Mike Termer', title: 'Trustee', party: null },
    ],
  },

  Walkerville: {
    name: 'Village of Walkerville',
    county: 'Oceana',
    website: null,
    officials: [
      { name: 'Mark Metts', title: 'Village President', party: null },
      { name: 'May Johnson', title: 'Trustee', party: null },
      { name: 'Jennifer Porter', title: 'Trustee', party: null },
    ],
  },

  // ── Wexford County villages ──

  Mesick: {
    name: 'Village of Mesick',
    county: 'Wexford',
    website: 'https://villageofmesick.com/',
    officials: [
      { name: 'David Clous', title: 'President', party: null },
      { name: 'Deb Stanton', title: 'Clerk', party: null },
      { name: 'Jack Smith', title: 'Treasurer', party: null },
      { name: 'Mike Abel', title: 'Trustee', party: null },
      { name: 'Sara Truog', title: 'Trustee', party: null },
      { name: 'Steven Reddy', title: 'Trustee', party: null },
      { name: 'Kelly Pearsen', title: 'Trustee', party: null },
    ],
  },

  Buckley: {
    name: 'Village of Buckley',
    county: 'Wexford',
    website: 'https://villageofbuckley.squarespace.com/',
    officials: [
      { name: 'Takis Pifer', title: 'President', party: null },
      { name: 'Dennis Kuhn II', title: 'Clerk', party: null },
      { name: 'Jacquie Cade', title: 'Treasurer', party: null },
      { name: 'Larry Cade', title: 'Trustee', party: null },
      { name: 'Cody Kuhn', title: 'Trustee', party: null },
      { name: 'Mike Anderson', title: 'Trustee', party: null },
      { name: 'Gary Griffin', title: 'Trustee', party: null },
      { name: 'Matt Kelley', title: 'Trustee', party: null },
      { name: 'Jeff Hall', title: 'Trustee', party: null },
    ],
  },
  'Harrietta': {
    name: 'Village of Harrietta',
    county: 'Wexford',
    website: null,
    officials: [
      { name: 'Jason Compton', title: 'President', party: null },
      { name: 'Ruth Mitchell', title: 'Treasurer', party: null },
      { name: 'Duane Rockwell', title: 'Trustee', party: null },
      { name: 'Jaqueline Sorensen', title: 'Trustee', party: null },
      { name: 'Serena Lloyd', title: 'Trustee', party: null },
    ],
  },

  /* ── Lake County villages ── */

  'Baldwin': {
    name: 'Village of Baldwin',
    county: 'Lake',
    website: 'https://villageofbaldwin.org/services/',
    officials: [
      { name: 'Harold Nichols', title: 'President', party: null },
      { name: 'Theresa Lamb', title: 'Clerk', party: null },
      { name: 'Cassie Smith', title: 'Treasurer', party: null },
      { name: 'Kelly Zoellner', title: 'Trustee', party: null },
      { name: 'Curtis Miller', title: 'Trustee', party: null },
      { name: 'Pam Anderson', title: 'Trustee', party: null },
      { name: 'Tim Jannereth', title: 'Trustee', party: null },
    ],
  },

  'Luther': {
    name: 'Village of Luther',
    county: 'Lake',
    website: 'https://luthermi.org/board-members/',
    officials: [
      { name: 'Andy Treiber', title: 'President', party: null },
      { name: 'Carrie Fansler', title: 'Clerk', party: null },
      { name: 'Amy Jo DeJesus', title: 'Treasurer', party: null },
      { name: 'Connie Holmes', title: 'Trustee', party: null },
      { name: 'Brittany Carlson', title: 'Trustee', party: null },
      { name: 'Rose Wetherall', title: 'Trustee', party: null },
      { name: 'Tiffany Clark', title: 'Trustee', party: null },
      { name: 'James Bacon', title: 'Trustee', party: null },
      { name: 'Michelle Goodman', title: 'Trustee', party: null },
    ],
  },

  /* ── Clare County villages ── */

  Farwell: {
    name: 'Village of Farwell',
    county: 'Clare',
    website: 'https://villageoffarwellmi.gov',
    phone: '989-588-9926',
    officials: [
      { name: 'Tracey Jackson', title: 'Village President', party: null },
      { name: 'Amanda Pfruender', title: 'President Pro-Tem', party: null },
      { name: 'Adrian Krawczynski', title: 'Clerk/Treasurer', party: null },
      { name: 'Marvin Frayer', title: 'Trustee', party: null },
      { name: 'Victoria Williams', title: 'Trustee', party: null },
      { name: 'Jeff Linton', title: 'Trustee', party: null },
      { name: 'Gina Hamilton', title: 'Trustee', party: null },
      { name: 'Shawn Burger', title: 'Trustee', party: null },
    ],
  },

  /* ── Presque Isle County villages ── */

  'Posen': {
    name: 'Village of Posen',
    county: 'Presque Isle',
    website: 'https://www.villageofposen.org',
    officials: [
      { name: 'Frank Podbielniak', title: 'President', party: null },
      { name: 'Melanie Myers', title: 'Clerk', party: null },
      { name: 'Phillip Novak', title: 'Trustee', party: null },
      { name: 'Yesenia Lopez', title: 'Trustee', party: null },
      { name: 'Elsa Velazquez', title: 'Trustee', party: null },
      { name: 'Aaron Wisniewski', title: 'Trustee', party: null },
      { name: 'Donald Schnering', title: 'Trustee', party: null },
      { name: 'Jeffery Casillas', title: 'Trustee', party: null },
    ],
  },
  'Millersburg': {
    name: 'Village of Millersburg',
    county: 'Presque Isle',
    officials: [
      { name: 'Brian J. Whitsitt', title: 'President', party: null },
    ],
  },

  /* ── Midland County villages ── */

  'Sanford': {
    name: 'Village of Sanford',
    county: 'Midland',
    website: 'https://villageofsanford.com',
    officials: [
      { name: 'Dolores Porte', title: 'President', party: null },
      { name: 'Janell Kopke', title: 'Clerk', party: null },
      { name: 'Travis Raymond', title: 'Treasurer', party: null },
      { name: 'Leah Ziems', title: 'Trustee', party: null },
      { name: 'Carl Hamann', title: 'Trustee', party: null },
      { name: 'Marcus Thrush', title: 'Trustee', party: null },
      { name: 'Don Whaley', title: 'Trustee', party: null },
    ],
  },

  /* ── Kalkaska County villages ── */

  'Kalkaska': {
    name: 'Village of Kalkaska',
    county: 'Kalkaska',
    website: 'https://kalkaskavillage.com',
    phone: '231-258-9191',
    officials: [
      { name: 'Jeff Sieting', title: 'President', party: null },
      { name: 'Angie Koon', title: 'Clerk', party: null },
      { name: 'Elizabeth Dagenhart', title: 'Treasurer', party: null },
      { name: 'Mason Moses', title: 'Trustee', party: null },
      { name: 'Trent Yanz', title: 'Trustee', party: null },
      { name: 'Michelle Miller', title: 'Trustee', party: null },
      { name: 'Diana Needham', title: 'Trustee', party: null },
      { name: 'Robert Bishop', title: 'Trustee', party: null },
      { name: 'Stephanie Wiley', title: 'Trustee', party: null },
    ],
  },

  /* ── Cheboygan County villages ── */

  'Mackinaw City': {
    name: 'Village of Mackinaw City',
    county: 'Cheboygan',
    website: 'https://www.mackinawcity.org',
    officials: [
      { name: 'Scott P. Newman', title: 'President', party: null },
      { name: 'George Ranville', title: 'Trustee Pro Tem', party: null },
      { name: 'John Lemanski', title: 'Trustee', party: null },
      { name: 'Enzo Lieghio', title: 'Trustee', party: null },
      { name: "Kash O'Brien", title: 'Trustee', party: null },
      { name: 'Kathy Paquet', title: 'Trustee', party: null },
      { name: 'Terry Peterson', title: 'Trustee', party: null },
      { name: 'Dean Martin', title: 'Village Manager', party: null },
    ],
  },
  'Wolverine': {
    name: 'Village of Wolverine',
    county: 'Cheboygan',
    website: 'https://villageofwolverine.com',
    officials: [
      { name: 'Ralph Ochs', title: 'President', party: null },
      { name: 'Deb Johnston', title: 'Clerk', party: null },
      { name: 'Laurie Holden', title: 'Treasurer', party: null },
      { name: 'Carla Devoll', title: 'Trustee', party: null },
      { name: 'Rick Johnston', title: 'Trustee', party: null },
      { name: 'Dennis Holden', title: 'Trustee', party: null },
      { name: 'Robert Wallin', title: 'Trustee', party: null },
      { name: 'Susan Beitel', title: 'Trustee', party: null },
      { name: 'Brent Hansut', title: 'Trustee', party: null },
    ],
  },

  /* ── Otsego County villages ── */

  'Vanderbilt': {
    name: 'Village of Vanderbilt',
    county: 'Otsego',
    website: 'https://www.vanderbiltvillage.com',
    officials: [
      { name: 'Christina Sayles', title: 'President', party: null },
      { name: 'Tom Heintz', title: 'President Pro Tem', party: null },
      { name: 'Teri Cherwinski', title: 'Treasurer', party: null },
      { name: 'Chuck Ormsbee', title: 'Trustee', party: null },
      { name: 'Ron Bush', title: 'Trustee', party: null },
      { name: 'Robert McMaster', title: 'Trustee', party: null },
      { name: 'Randy Cherwinski', title: 'Trustee', party: null },
    ],
  },

  /* ── Roscommon County villages ── */

  'Roscommon': {
    name: 'Village of Roscommon',
    county: 'Roscommon',
    website: 'https://www.roscommonvillage.com',
    officials: [
      { name: 'Mike Miller', title: 'President', party: null },
      { name: 'Frances Dawson', title: 'Clerk', party: null },
      { name: 'Jan Deloge', title: 'Treasurer', party: null },
      { name: 'Ron Alden', title: 'Village Manager', party: null },
      { name: 'Dan Fishel', title: 'Trustee', party: null },
      { name: 'Jennifer Smejkal', title: 'Trustee', party: null },
      { name: 'Kurt Kehoe', title: 'Trustee', party: null },
      { name: 'Maureen Ruddy', title: 'Trustee', party: null },
      { name: 'Dana Edwards', title: 'Trustee', party: null },
      { name: 'Brian Ludwig', title: 'Trustee', party: null },
    ],
  },

  /* ── Grand Traverse County villages ── */

  'Fife Lake': {
    name: 'Village of Fife Lake',
    county: 'Grand Traverse',
    website: 'https://www.fifelake.org',
    officials: [
      { name: 'Tawni Deike', title: 'President', party: null },
      { name: 'Lisa Sterkenburg', title: 'Clerk', party: null },
      { name: 'Mark Klumpp', title: 'Treasurer', party: null },
      { name: 'Todd Holton', title: 'Trustee', party: null },
      { name: 'Evan McCoy', title: 'Trustee', party: null },
      { name: 'Patrick Rush', title: 'Trustee', party: null },
      { name: 'Steve Halstead', title: 'Trustee', party: null },
    ],
  },
  'Kingsley': {
    name: 'Village of Kingsley',
    county: 'Grand Traverse',
    website: 'https://www.villageofkingsley.com',
    officials: [
      { name: 'Mary Lajko', title: 'President', party: null },
      { name: 'Mary DeCair', title: 'Clerk', party: null },
      { name: 'Megan Schmidt', title: 'Treasurer', party: null },
      { name: 'James Dean', title: 'Trustee', party: null },
      { name: 'Dustin Nilsen', title: 'Trustee', party: null },
      { name: 'Sarah Pfeifer', title: 'Trustee', party: null },
      { name: 'Ryan Cook', title: 'Trustee', party: null },
    ],
  },

  /* ── Montmorency County villages ── */

  'Hillman': {
    name: 'Village of Hillman',
    county: 'Montmorency',
    website: 'https://www.hillmanmichigan.org/',
    officials: [
      { name: 'Dave Hornbacher', title: 'President', party: null },
      { name: 'Ann Williams', title: 'Clerk/Treasurer', party: null },
      { name: 'Velma Brown', title: 'Trustee', party: null },
      { name: 'Thomas Bouchey', title: 'Trustee', party: null },
      { name: 'Steve Orlandi', title: 'Trustee', party: null },
      { name: 'Johnathon Smith', title: 'Trustee', party: null },
    ],
  },

  /* ── Mecosta County villages ── */

  'Barryton': {
    name: 'Village of Barryton',
    county: 'Mecosta',
    website: 'https://villageofbarryton.com/?page_id=125',
    officials: [
      { name: 'Daniel Cook', title: 'President', party: null },
      { name: 'Melissa Lazzaro', title: 'Clerk', party: null },
      { name: 'Courtney Garchow', title: 'Treasurer', party: null },
      { name: 'Kathryn Kerr', title: 'Trustee', party: null },
      { name: 'Michael Kundrat', title: 'Trustee', party: null },
      { name: 'Michelle Kundrat', title: 'Trustee', party: null },
      { name: 'Terah Eaton', title: 'Trustee', party: null },
    ],
  },

  'Mecosta Village': {
    name: 'Village of Mecosta',
    county: 'Mecosta',
    website: 'https://www.mecostacounty.org/visitors/villages.php',
    officials: [
      { name: 'Ann Wrobbel', title: 'President', party: null },
      { name: 'Joy Moorman', title: 'Clerk', party: null },
      { name: 'Melissa Moorman', title: 'Treasurer', party: null },
      { name: 'Alice Ray', title: 'Trustee', party: null },
      { name: 'Katherine Snider', title: 'Trustee', party: null },
      { name: 'Pat Sundquist', title: 'Trustee', party: null },
      { name: 'Colleen Beemer', title: 'Trustee', party: null },
      { name: 'Kim Wernette', title: 'Trustee', party: null },
    ],
  },

  'Morley': {
    name: 'Village of Morley',
    county: 'Mecosta',
    website: 'http://mobile.villageofmorley.com/village-council',
    officials: [
      { name: 'Austin Korpal', title: 'President', party: null },
      { name: 'Terry Stilson', title: 'Clerk', party: null },
      { name: 'Julie Berry', title: 'Treasurer', party: null },
      { name: 'Serine Petersen', title: 'Trustee', party: null },
      { name: 'Paul Block', title: 'Trustee', party: null },
      { name: 'Sandra Leal', title: 'Trustee', party: null },
    ],
  },

  'Stanwood': {
    name: 'Village of Stanwood',
    county: 'Mecosta',
    website: 'https://www.mecostacounty.org/visitors/villages.php',
    officials: [
      { name: 'Cody Stilson', title: 'President', party: null },
      { name: 'Michael Fish', title: 'Clerk', party: null },
      { name: 'William Routley', title: 'Treasurer', party: null },
      { name: 'Marvin C. Bell', title: 'Trustee', party: null },
      { name: 'James R. Lyons', title: 'Trustee', party: null },
      { name: 'Jessica Routley', title: 'Trustee', party: null },
    ],
  },

  /* ── Montcalm County villages ── */

  'Edmore': {
    name: 'Village of Edmore',
    county: 'Montcalm',
    website: 'https://www.edmore.com',
    officials: [
      { name: 'Chet Guild', title: 'President', party: null },
      { name: 'Tom Colburn', title: 'President Pro-Tem', party: null },
      { name: 'Kerri Peterson', title: 'Clerk', party: null },
      { name: 'Shirley Drain', title: 'Treasurer', party: null },
      { name: 'Stephanie Kanine', title: 'Trustee', party: null },
      { name: 'Ron Griswold', title: 'Trustee', party: null },
      { name: 'John Moore', title: 'Trustee', party: null },
      { name: 'Cristina Pierce', title: 'Trustee', party: null },
      { name: 'Carla McParland', title: 'Trustee', party: null },
    ],
  },

  'Howard City': {
    name: 'Village of Howard City',
    county: 'Montcalm',
    website: 'https://www.howardcity.org',
    officials: [
      { name: 'Randy Heckman', title: 'President', party: null },
      { name: 'Bruce MacTavish', title: 'Trustee', party: null },
      { name: 'Cheryl Smith', title: 'Trustee', party: null },
      { name: 'Janice Williams', title: 'Trustee', party: null },
      { name: 'Paula Hagstrom', title: 'Trustee', party: null },
      { name: 'Jean Toner', title: 'Trustee', party: null },
      { name: 'Mallory Wert', title: 'Trustee', party: null },
    ],
  },

  'Lakeview': {
    name: 'Village of Lakeview',
    county: 'Montcalm',
    website: 'https://villageoflakeview.org',
    officials: [
      { name: 'Emily Griffith', title: 'President', party: null },
      { name: 'Lisa Peasley', title: 'Clerk', party: null },
      { name: 'Dominic Trevino', title: 'Trustee', party: null },
      { name: 'Lane Leppink', title: 'Trustee', party: null },
      { name: 'Jyll Mitchell', title: 'Trustee', party: null },
      { name: 'Chris Fryover', title: 'Trustee', party: null },
      { name: 'Chad Carlson', title: 'Trustee', party: null },
      { name: 'Kate Behrenwald', title: 'Trustee', party: null },
    ],
  },

  'Sheridan': {
    name: 'Village of Sheridan',
    county: 'Montcalm',
    website: 'https://villageofsheridan.com',
    officials: [
      { name: 'Eric McKay', title: 'President', party: null },
      { name: 'Vladimir Edelman', title: 'President Pro-Tem', party: null },
      { name: 'Susan Wyckoff McFarland', title: 'Trustee', party: null },
      { name: 'Derek Wagner', title: 'Trustee', party: null },
      { name: 'Glenn L. Ritter', title: 'Trustee', party: null },
      { name: 'Ronald Pomranky', title: 'Trustee', party: null },
    ],
  },

  'Pierson': {
    name: 'Village of Pierson',
    county: 'Montcalm',
    website: 'https://www.montcalm.us/429/Village-of-Pierson',
    officials: [
      { name: 'Mollie Doerr', title: 'President', party: null },
    ],
  },

  'McBride': {
    name: 'Village of McBride',
    county: 'Montcalm',
    website: 'https://montcalm.us/426/Village-of-McBride',
    officials: [
      { name: 'Kimberly Jenson', title: 'President', party: null },
      { name: 'Jacque Seidelman', title: 'Clerk', party: null },
      { name: 'Tracy Stratton', title: 'Treasurer', party: null },
    ],
  },

  /* ── Osceola County villages ── */

  'Marion': {
    name: 'Village of Marion',
    county: 'Osceola',
    website: 'https://marionmichigan.org/government/village_council.php',
    officials: [
      { name: 'Flora A. Grundy', title: 'President', party: null },
      { name: 'Connie Zuiderveen', title: 'Clerk', party: null },
      { name: 'Christine Lee', title: 'Treasurer', party: null },
      { name: 'Jack Nehmer', title: 'Trustee', party: null },
      { name: 'Cal Ellens', title: 'Trustee', party: null },
      { name: 'Dave Swiler', title: 'Trustee', party: null },
      { name: 'Tony Maddox', title: 'Trustee', party: null },
      { name: 'Bonnie Tenney', title: 'Trustee', party: null },
      { name: 'Trent Mitchell', title: 'Trustee', party: null },
    ],
  },

  'Tustin': {
    name: 'Village of Tustin',
    county: 'Osceola',
    website: null,
    officials: [
      { name: 'Ryan Erickson', title: 'President', party: null },
      { name: 'Jessica Coykendall', title: 'Clerk', party: null },
      { name: 'Kayla Erickson', title: 'Treasurer', party: null },
      { name: 'Lou Ann Anderson', title: 'Trustee', party: null },
    ],
  },

  'LeRoy': {
    name: 'Village of LeRoy',
    county: 'Osceola',
    website: 'https://www.leroymi.org/',
    officials: [
      { name: 'Adam P. Johnson', title: 'President', party: null },
      { name: 'Kirk Edstrom', title: 'Trustee', party: null },
      { name: 'Diane Vandercook', title: 'Trustee', party: null },
    ],
  },

  /* ── Delta County villages ── */

  Garden: {
    name: 'Village of Garden',
    county: 'Delta',
    officials: [
      { name: 'Jeffrey Lefevre', title: 'President', party: null },
      { name: 'Colleen Winert', title: 'Clerk', party: null },
      { name: 'Susanna L. Lucas', title: 'Treasurer', party: null },
      { name: 'Karen Paulsen', title: 'Trustee', party: null },
      { name: 'Charles Paulsen', title: 'Trustee', party: null },
      { name: 'Kathryn Sporer', title: 'Trustee', party: null },
      { name: 'Gary Sporer', title: 'Trustee', party: null },
    ],
  },

  /* ── Houghton County villages ── */

  Calumet: {
    name: 'Village of Calumet',
    county: 'Houghton',
    website: 'https://www.villageofcalumet.com',
    officials: [
      { name: 'Rob Tarvis', title: 'President', party: null },
      { name: 'Pamela Que', title: 'President Pro Tem', party: null },
      { name: 'Lori Weir', title: 'Clerk', party: null },
      { name: 'Debra Aubin', title: 'Treasurer', party: null },
      { name: 'Bernice Smith', title: 'Trustee', party: null },
      { name: 'Kelly Ryan', title: 'Trustee', party: null },
      { name: 'Matt L\'Esperance', title: 'Trustee', party: null },
      { name: 'James Tercha', title: 'Trustee', party: null },
      { name: 'Ariel Pizzo', title: 'Trustee', party: null },
    ],
  },

  Laurium: {
    name: 'Village of Laurium',
    county: 'Houghton',
    website: 'https://www.laurium.net',
    officials: [
      { name: 'John Sullivan', title: 'President', party: null },
      { name: 'Jeff Erickson', title: 'President Pro Tem', party: null },
      { name: 'Ian Lewis', title: 'Village Manager', party: null },
      { name: 'John Galbraith', title: 'Trustee', party: null },
      { name: 'Krista Carlson', title: 'Trustee', party: null },
      { name: 'Wes Pietila', title: 'Trustee', party: null },
      { name: 'Jenn Jenich-Laplander', title: 'Trustee', party: null },
      { name: 'Andrew Erickson', title: 'Trustee', party: null },
    ],
  },

  'Lake Linden': {
    name: 'Village of Lake Linden',
    county: 'Houghton',
    website: 'http://www.lakelinden.net',
    officials: [
      { name: 'Glenn A. Schuldt', title: 'President', party: null },
      { name: 'John J. Codere', title: 'Trustee', party: null },
      { name: 'Allan F. Hoffman', title: 'Trustee', party: null },
      { name: 'Jason E. Reese', title: 'Trustee', party: null },
      { name: 'Dee LaCasse', title: 'Trustee', party: null },
      { name: 'Shanda Miller', title: 'Trustee', party: null },
      { name: 'Don Moyle', title: 'Trustee', party: null },
    ],
  },

  'South Range': {
    name: 'Village of South Range',
    county: 'Houghton',
    website: 'https://www.southrange.com',
    officials: [
      { name: 'George Eakin', title: 'President', party: null },
      { name: 'Steven Dorsey', title: 'Clerk', party: null },
      { name: 'Lindsay Balma', title: 'Treasurer', party: null },
      { name: 'Therese Parolini', title: 'Trustee', party: null },
      { name: 'Justin Marier', title: 'Trustee', party: null },
      { name: 'Tim Korby', title: 'Trustee', party: null },
      { name: 'Greg Harkonen', title: 'Trustee', party: null },
      { name: 'Mike Balma', title: 'Trustee', party: null },
    ],
  },
}

/**
 * Look up local officials for a geocoded Michigan address.
 *
 * @param {object} geo - geocoding result from geocodeToDistrict()
 * @returns {object} { county, city, township, village, schoolBoard } — each with { name, officials[] } or null
 */
/* ── Statewide officials ── */

export const MI_STATEWIDE_OFFICIALS = {
  name: 'State of Michigan',
  officials: [
    { name: 'Gretchen Whitmer', title: 'Governor', party: 'Democratic', website: 'https://www.michigan.gov/whitmer', phone: '517-373-3400' },
    { name: 'Garlin Gilchrist II', title: 'Lieutenant Governor', party: 'Democratic', website: 'https://www.michigan.gov/ltgovernor', phone: '517-373-6800' },
    { name: 'Dana Nessel', title: 'Attorney General', party: 'Democratic', website: 'https://www.michigan.gov/ag', phone: '517-335-7622' },
    { name: 'Jocelyn Benson', title: 'Secretary of State', party: 'Democratic', website: 'https://www.michigan.gov/sos', phone: '888-767-6424' },
    { name: 'Rachael Eubanks', title: 'State Treasurer', party: 'Democratic', website: 'https://www.michigan.gov/treasury', phone: '517-335-7508' },
    { name: 'Kyra Harris Bolden', title: 'Chief Justice, Supreme Court', party: 'Nonpartisan' },
    { name: 'Elizabeth T. Clement', title: 'Justice, Supreme Court', party: 'Nonpartisan' },
    { name: 'Richard Bernstein', title: 'Justice, Supreme Court', party: 'Nonpartisan' },
    { name: 'Megan K. Cavanagh', title: 'Justice, Supreme Court', party: 'Nonpartisan' },
    { name: 'Elizabeth M. Welch', title: 'Justice, Supreme Court', party: 'Nonpartisan' },
    { name: 'Kurtis T. Wilder', title: 'Justice, Supreme Court', party: 'Nonpartisan' },
    { name: 'Andrew Fink', title: 'Justice, Supreme Court', party: 'Nonpartisan' },
  ],
}

// Lazy-load the comprehensive county data (all 83 counties)
let _allCountiesPromise = null
function loadAllCounties() {
  if (!_allCountiesPromise) {
    _allCountiesPromise = import('./michiganCounties.js').then(m => m.default)
  }
  return _allCountiesPromise
}

export async function getMichiganLocalOfficials(geo) {
  if (!geo) return { county: null, city: null, township: null, village: null, schoolBoard: null }

  // Try detailed county data first, fall back to comprehensive county list
  let county = MI_COUNTY_OFFICIALS[geo.county] || null
  if (!county && geo.county) {
    const allCounties = await loadAllCounties()
    const countyData = allCounties[geo.county]
    if (countyData) {
      county = countyData
    }
  }

  // Try incorporated place first for city officials
  const city = (geo.place && MI_CITY_OFFICIALS[geo.place]) || null

  // Check county subdivision for township officials (or city if place was empty)
  let township = null
  if (geo.countySubdivision) {
    township = MI_TOWNSHIP_OFFICIALS[geo.countySubdivision] || null
    // If no city found, check if the subdivision name matches a city
    if (!city) {
      const cityFromSub = MI_CITY_OFFICIALS[geo.countySubdivision] || null
      if (cityFromSub) return { county, city: cityFromSub, township: null, village: null, schoolBoard: (geo.schoolDistrict && MI_SCHOOL_BOARDS[geo.schoolDistrict]) || null }
    }
  }

  // Check county subdivision for village officials (check both datasets)
  let village = null
  if (geo.countySubdivision) {
    village = MI_VILLAGE_OFFICIALS[geo.countySubdivision] || null
    // If not found in primary data, try the extended village dataset
    if (!village) {
      try {
        const { MI_VILLAGE_OFFICIALS_NEW } = await import('./villageData_new')
        village = MI_VILLAGE_OFFICIALS_NEW[geo.countySubdivision] || null
      } catch {
        // Extended village data not available
      }
    }
  }

  const schoolBoard = (geo.schoolDistrict && MI_SCHOOL_BOARDS[geo.schoolDistrict]) || null

  return { county, city, township, village, schoolBoard }
}
