# Ohio + Illinois feasibility: Nov 3, 2026 general ballots

Research only, done 2026-10-28. Nothing was built.
Everything marked VERIFIED was fetched during this session, either with curl or in the built-in browser. Ohio SOS, Chicago BOE and lakecountyil.gov return HTTP 403 to curl, so those were read in the browser. Anything not fetched directly is marked UNVERIFIED.

**Bottom line**
- **Neither state has one official machine-readable source that includes county races.**
- **Both have a clean statewide source for everything above county level.** Ohio's is the best of any state so far: a JSON API with candidates already loaded, plus a statewide spreadsheet of local issues.
- **County races in both states are spread across county PDFs.** Ohio has 88 county boards. Illinois has 102 counties plus a few city boards.
- **Illinois has an easy partial option.** Suburban Cook is one HTML page, Chicago is one PDF with extractable text, and DuPage is one PDF with extractable text. Together that covers roughly half the state's voters with full county-level ballots.

---

## OHIO: difficulty 3/5 → BUILD PARTIAL now (state + legislative + judicial + statewide issue + local issues); add county races later only if worth ~88 PDF parsers

### VERIFIED sources

1. **Ohio SOS election-night reporting (ENR) system, already loaded for Nov 3, 2026.** URL: `https://liveresults.ohiosos.gov/` ("Ohio Decides 2026").
   - The site's banner says the totals shown come from mock elections run "in preparation for the November 3, 2026 General Election". That means the 2026 general contests and candidates are loaded now, before Election Day. This is the same kind of setup as Indiana's ENR.
   - It has a JSON API with no authentication. All endpoints are under `https://liveresults.ohiosos.gov/Api/v1/Contest/`:
     - `getTabs`: the tab and category tree.
     - `getContestList`: **162 contests.**
     - `getCountyList`: 88 counties, each with an object ID.
     - `GetContestsByCounty?countyId=<id>`: the contests on the ballot in that county.
     - `GetContestDetailsObject?contestName=..&contestObjectId=..&resultsLevel=Summary`: candidates, running mates and party codes, broken out by county.
     - `getStatistics`: 8,834 Election Day precincts and 7,971,297 registered voters.
   - Contest breakdown:

     | Contests | Count |
     |---|---|
     | Governor/Lt Gov, AG, Auditor, SoS, Treasurer | 5 |
     | Supreme Court (terms starting 1/1/2027 and 1/2/2027) | 2 |
     | U.S. Senate (unexpired term ending 1/3/2029) | 1 |
     | U.S. House | 15 |
     | Ohio Senate | 17 |
     | Ohio House | 99 |
     | Court of Appeals | 22 |
     | State Issue 3 (photo ID amendment) | 1 |

   - Sample check: the Governor contest returns Acton/Pepper (D), Ramaswamy/McColley (R), Kissick/Mills (L), and 3 write-in tickets.
   - There is also an all-results XLSX at `https://liveresults.ohiosos.gov/Api/v1/download?filename=GeneralElectionXlsFile` (191 KB). Sheets: Master, Statewide Offices, Supreme Court, U.S. Congress, Court of Appeals, General Assembly. Each has 92 rows: 88 counties plus header and total rows.
   - **No county contests.** `GetContestsByCounty` for Franklin County returns only state, federal, legislative and appeals contests plus Issue 3. The page template itself says "For local results, visit [County]'s website."

2. **Statewide spreadsheet of local questions and issues.** URL: `https://www.ohiosos.gov/assets/2026-11-general-qandi.xlsx`. It is linked from ohiosos.gov/elections. File details: 1.5 MB, Last-Modified 18 Sep 2026.
   - The "Issues Summary" sheet has **1,485 local issues across all 88 counties**. Columns: County, Subdivision Type, Subdivision Name, Question Type, Purpose, Description, Millage, Percent, Dollar Amount, Length, Commencing Year, and Overlap counties. The sheet has 1,973 rows in total; the rest are blank.
   - By question type:

     | Question type | Count |
     |---|---|
     | Tax Levy | 901 |
     | Liquor Option | 253 |
     | Miscellaneous | 242 |
     | Income Tax | 71 |
     | Combination | 7 |
     | Bond | 6 |
     | Sales & Use Tax | 5 |

   - By subdivision type:

     | Subdivision type | Count |
     |---|---|
     | Township | 436 |
     | Village | 274 |
     | Precinct (liquor options) | 255 |
     | City | 222 |
     | School District | 139 |
     | County | 87 |
     | Districts of other kinds | ~70 |

   - These are structured summaries ("Renewal, 0.4 mill, 5 yrs, maintain cemeteries"), not the full ballot wording. That is enough for a voter guide.

3. **State Issue 3 report (PDF).** URL: `https://www.ohiosos.gov/assets/2026-11-statewide-issue-3-report.pdf`. File details: 987 KB, Last-Modified 18 Sep 2026.
   - I confirmed the file exists and downloaded it, but I did not extract its text.
   - The ENR contest title is "State Issue 3 To require voters to present photo identification in order to vote."
   - It is the only statewide issue. This is confirmed by the ENR, which has 1 Statewide Issues contest, and by the CSG Midwest Oct 2026 PDF.

4. **Sample-ballot directory (not usable as a data source).** URL: `https://www.ohiosos.gov/directories/sample-ballot`.
   - 72 counties link to the shared vendor lookup `lookup.boe.ohio.gov/vtrapp/<county>/vtrlookup.aspx`. The other 16 link to their own voterview or electionlink sites (Franklin, Hamilton, Cuyahoga, Stark, Butler and others).
   - Every lookup asks for a voter's name. There is no bulk or district-level export, so it can't be used to build ballots.

5. **County board candidate lists (PDF, format differs by county).** I checked two:
   - Hamilton: `https://votehamiltoncountyohio.gov/wp-content/uploads/2026/08/November-2026-Candidate-Profile-1-3.pdf`. 3 pages, text extractable. Includes Common Pleas judges.
   - Lake: `https://wpassets.lakecountyohio.gov/wp-content/uploads/sites/12/2026/08/25154551/2026-Candidate-Filings-3.pdf`. 4 pages, text extractable. Includes County Commissioner and Common Pleas judges (General, Domestic Relations, Juvenile, Probate).
   - The two layouts are completely different. Expect 88 one-off parsers, or extraction by an LLM.
   - Lorain County's PDFs showed up in search but are UNVERIFIED.

### Missing for Ohio
- **County offices.** In 2026 these are: 1 county commissioner seat per county, county auditor, and Common Pleas judges (general, probate, juvenile and domestic relations divisions). No statewide official file has any of them. The SOS data portal's "Local Election Results" (`/directories/local-election-results`) is just a list of links to county sites.
- **Full ballot text** for the 1,485 local issues. Only the summaries are in the spreadsheet.

### Recommendation for Ohio: BUILD PARTIAL
- **What partial means:**
  - Statewide offices, U.S. Senate and House, Ohio Senate and House, Supreme Court, Court of Appeals, and Issue 3, all from the ENR API. Districts are already mapped to counties through `GetContestsByCounty`.
  - All 1,485 local levies and issues from the Q&I spreadsheet.
- That is about 1–2 days of work. It is roughly the depth of the Indiana build, but without county officers.
- Adding county commissioner, auditor and judges means 88 PDFs, which could be done one county at a time. A sensible order is the biggest counties first: Franklin, Cuyahoga, Hamilton, Summit, Montgomery, Lucas, Butler, Stark. Those 8 cover about 50% of voters.

---

## ILLINOIS: difficulty 4/5 statewide → BUILD PARTIAL (statewide/legislative/judicial for all + full county ballots for Chicago + suburban Cook + DuPage); SKIP full-state county coverage

### VERIFIED sources

1. **ISBE candidate filing search for the 11/3/2026 General Election.** URL: `https://www.elections.il.gov/ElectionOperations/CandidateFilingSearch.aspx?ID=sejIrI%2bQmww%3d`. The election index page `CandidateOfficeFilingSearch.aspx` shows 528 candidates filed for this election.
   - **Tab-delimited export.** Use the "Download Candidate Data Files" button, which leads to `DownloadCandidates.aspx?ID=sejIrI%2bQmww%3d`. It is an ASP.NET postback, so it needs the page's VIEWSTATE form fields; I did it by fetching the form in the browser. The file comes back as `GE20261103.txt`: 79 KB, **528 rows**.
     - Columns: CandidateID, LastName, FirstName, Address, City, Zip, FileDate, CandidateStatus, PartyName, OfficeName, BallotGroup, OfficeSequence, Email, WebSite, and others.
     - Status: 504 Active, 15 Removed, 9 Withdrawn.
     - Party: 196 D, 176 R, 11 Independent, 5 Green, and others. The 133 rows with a blank party are judicial retention entries.
   - **It includes the D and R primary nominees** as well as independents and new-party candidates. For example, Pritzker/Mitchell vs Bailey/Del Mar, Stratton vs Tracy for Senate, and Raoul vs Fioretti for AG are all in it.
   - It has 393 office options:
     - **133 judicial retentions** ("1ST CIRCUIT - RETAIN THURSTON", etc.)
     - 89 Cook circuit and subcircuit vacancies
     - Downstate circuit judges and Appellate Court
     - 24 Regional Superintendents of Schools
     - State House (179 candidate rows), State Senate (64), Congress (38)
     - Statewide executive offices and U.S. Senate
   - **No county offices at all.** County clerk, county treasurer, sheriff, county board, Cook Assessor, Board of Review, MWRD, forest preserve and school boards are all filed with county clerks, not ISBE.
2. **No statewide election-night results feed.** ISBE's "Downloadable Vote Totals" page (`/ElectionOperations/DownloadVoteTotals.aspx`, year set to 2026) offers only `2026GPOfficialVote.pdf`, the official canvass of the primary as a PDF. Each election authority runs its own results site.
3. **No statewide question on the 2026 ballot.**
   - The CSG Midwest Oct 2026 PDF (`https://csgmidwest.org/wp-content/uploads/2026/10/state-elections-ballot-2026.pdf`) lists Ohio's photo ID measure and no Illinois measure.
   - A third-party guide (civic-command.com, which says it checked ISBE on 9/24/2026) says ISBE lists no statewide questions. It also says the millionaire-tax amendment missed the May 3 deadline and the Senate shelved the redistricting amendment in April.
   - I did not find an ISBE page that states "none" directly, so treat this as strongly indicated rather than confirmed from the official source.
   - Note: Cook County has a **county-wide advisory** question on the "Millionaire Amendment for Property Tax Relief and Education". It is on the Chicago list, and it is not a statewide question.
4. **Suburban Cook (Cook County Clerk).** URL: `https://www.cookcountyclerkil.gov/elections/current-elections/view-all-candidates` (Nov 3, 2026 selected).
   - One HTML page with **159 contests and 298 candidates**, including ballot numbers and parties.
   - It covers US/state offices, Congress, the legislature, MWRD (regular and unexpired terms), Cook Board President, Clerk, Sheriff, Treasurer, **Assessor**, all **17 county board districts**, Board of Review districts 1–2, 29 judicial contests, regional superintendents, and sanitary districts.
   - **Judicial retentions do not appear on this page.** They are in the ISBE file.
   - Easy to scrape: one GET, with a "Candidate Name / Political Party / Ballot #" pattern repeated for each candidate.
5. **City of Chicago (Chicago Board of Elections).** List PDF: `https://cboeprod.blob.core.usgovcloudapi.net/prod/2026-10/Candidate%20List_20261027-1.pdf`. It is linked from `chicagoelections.gov/getting-ballot/candidates`.
   - File details: 28 pages, 2.0 MB, text extractable, "Status as of 10/27/2026", in ballot order with ballot numbers.
   - It has 131 "Vote for" contests, retention items with Yes/No ballot numbers (about 61 retention mentions), the 21-seat elected **Board of Education** plus its president, MWRD, and Assessor.
   - The **Referenda** section has the Cook advisory question, two CPS advisory questions, two Expanded Mental Health Services program questions, and a 4th Ward question.
   - The ballot placement lottery PDF is in the same blob container.
6. **DuPage County Clerk.** URL: `https://cms5.revize.com/revize/dupage/Election/Documents/Candidate%20Information/WebsiteListingsByElection/2026GE/2026GE%20Candidate%20Listing.pdf`.
   - "Official Candidate Listing", updated 9/28/2026. 4 pages, text extractable.
   - Includes County Board Chair, Sheriff, County Clerk, County Treasurer, County Board districts, Forest Preserve, regional superintendents, Appellate (McDade) and 18th Circuit subcircuits.
7. **Lake County (IL) Clerk.** Page: `https://www.lakecountyil.gov/4138/November-3-2026-General-Election`.
   - Candidate List PDF at `/DocumentCenter/View/13059/Candidate-List` (796 KB) and Referenda PDF at `/DocumentCenter/View/21161/Referenda` (280 KB). Both returned HTTP 200 in the browser.
   - **I did not extract their text.** The site returns 403 to curl, so scraping it will need browser-style requests.

### UNVERIFIED
- **Will, Kane and McHenry 2026 general candidate lists.** I didn't fetch these. Search found only news coverage and an older-cycle Kane printable list at `applications.kanecountyil.gov/ElectionWebsite/.../Candidates/PrintableList/<id>`. Each county clerk likely publishes a PDF, but I didn't confirm that.
- **The rest of the 102 counties.** Each county clerk publishes its own list, almost always as a PDF in that county's own format.

### Missing for Illinois
- **No statewide source for county offices.** Statewide, that would mean county clerk, treasurer, sheriff, county board, assessor/supervisor of assessments, forest preserve, and similar offices.
- **No statewide ENR feed.**
- **Downstate.** Of the ~96 counties outside the Cook and collar area, each would need its own PDF parse. Many are small (under 20k voters), so each one adds little coverage for the effort.

### Recommendation for Illinois: BUILD PARTIAL
- **What partial means:**
  - **(a) Statewide for every Illinois voter**, from the ISBE TXT export: statewide executive offices, U.S. Senate, Congress, State Senate and House, judicial vacancies and **all 133 retentions**, and regional superintendents.
  - **(b) Full county-level ballots for Chicago, suburban Cook and DuPage**: Cook Clerk HTML, Chicago BOE PDF and DuPage PDF. That is roughly 45–50% of Illinois voters, about 3.6M of ~8M registered: Chicago about 1.5M, suburban Cook about 1.4M, DuPage about 0.65M. These voter counts are rough estimates and UNVERIFIED.
  - **(c) Optionally Lake, Will, Kane and McHenry** next, for about 1.5M more voters. Lake's PDFs are confirmed to exist. Will, Kane and McHenry are UNVERIFIED.
- **Mapping risk:** Illinois has no district lookup like Ohio's county→contest API. County board, subcircuit and MWRD districts would need shapefiles or a precinct crosswalk. That mapping is the real cost, more than the candidate data.
- **SKIP** county races for the ~96 downstate counties.

---

## Score summary
| | Statewide/leg/judicial source | County races | Local issues | Score | Call |
|---|---|---|---|---|---|
| Ohio | ENR JSON API, loaded for Nov 3 (162 contests) | 88 county PDFs, no statewide file | **Statewide XLSX, 1,485 issues** | 3/5 | BUILD PARTIAL (all of the above except county officers), then add top-8 counties if wanted |
| Illinois | ISBE TXT export (528 rows, incl. 133 retentions) | Cook HTML + Chicago PDF + DuPage PDF easy; 99 others PDFs | Per authority (Chicago PDF has its referenda) | 4/5 | BUILD PARTIAL: statewide for everyone, full ballots for Chicago, suburban Cook and DuPage |

Raw files from this check are in the session scratchpad and were not copied into the project: `/private/tmp/claude-502/-Users-dillonmccurdy1-Desktop-Claude-Code/35ac2c78-6ac2-4f1e-9057-e7679965b3d6/scratchpad/ohil/`. It holds `tabs.json`, `cl.json`, `fr.json`, `allres.xlsx`, `chi.pdf`, `ham.pdf` and `lakeoh.pdf`. The DuPage PDF was saved there under the generic name `t.bin`.
