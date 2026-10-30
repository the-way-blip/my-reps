# Kentucky county judicial map: sources and notes

Built 2026-10-30 for the Nov 3, 2026 general election. The data is in `/tmp/claude-0/ky/judicial-map.tsv`: 120 counties, columns county, supreme_district, appeals_district, appeals_division, circuit, district_court.

## Sources I actually read

FireCrawl was out of credits and the sandbox proxy blocked direct curl, so I read every page below with WebFetch. WebFetch returns the page as read by a summarizing model, not the raw text. For the entries that look odd (listed below), I asked it to quote the statute text word for word to double-check them.

| Statute / page | URL | Version used |
|---|---|---|
| KRS 21A.010, Supreme Court districts | https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=51896 | Effective Jan 18, 2022 (2022 Ky. Acts ch. 5) |
| KRS 22A.010, Court of Appeals judges and districts | https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=20560 | Effective Mar 23, 1976. Two judges from each of the 7 districts, which "correspond in geographical dimensions to" the Supreme Court districts |
| KRS ch. 22A index | https://apps.legislature.ky.gov/law/statutes/chapter.aspx?id=37149 | Section list |
| KRS 23A.020, Judicial circuits | https://apps.legislature.ky.gov/LAW/STATUTES/statute.aspx?id=53357 | Effective Jan 2, 2023 (2022 Ky. Acts ch. 129). The only version listed in the chapter |
| KRS ch. 23A index | https://apps.legislature.ky.gov/LAW/STATUTES/chapter.aspx?id=37151 | Section list |
| KRS 24A.030, Judicial districts, **version in force now** | https://apps.legislature.ky.gov/LAW/STATUTES/statute.aspx?id=48467 | "Effective until January 1, 2031". Effective Jan 2, 2023 (2018 Ky. Acts ch. 57). **This is the version used** |
| KRS 24A.030, future version | https://apps.legislature.ky.gov/Law/statutes/statute.aspx?id=53396 | Effective Jan 1, 2031 (2022 Ky. Acts ch. 129, sec. 7). NOT used. It has 58 districts |
| KRS ch. 24A index | https://apps.legislature.ky.gov/LAW/STATUTES/chapter.aspx?id=37154 | Shows both versions of 24A.030 |
| 2022 Ky. Acts ch. 5 (HB 179, Supreme Court redistricting) | https://apps.legislature.ky.gov/law/acts/22RS/documents/0005.pdf | Does not define any Court of Appeals divisions by geography |
| KY Court of Justice, 1st Appellate District Division 1 | https://kycourts.gov/Courts/Court-of-Appeals/Pages/1st-Appellate-District-Division-1.aspx | Lists all 23 counties of the 1st District for that one division seat |
| KY Court of Justice circuit judges map (rev. Apr 25, 2023) | https://www.kycourts.gov/Courts/Documents/P-14%20Judicial%20Circuits%20Face%20Map042523web.pdf | Confirms there are 57 circuits. It gives no county lists |

## Checks (all passed)
- Each of the three lists (Supreme Court, circuits, districts) covers exactly the same 120 counties, with no county listed twice.
- Supreme Court district sizes: 23 + 17 + 25 + 1 + 8 + 13 + 33 = 120.
- Every circuit from 1 to 57 appears.
- Every district from 1 to 59 appears. See the note on district 60 below.
- County spellings follow the statute: Larue, McCracken, McCreary, McLean.

## Doubts and things I couldn't verify
1. **There are 59 district-court districts, not 60.** The current KRS 24A.030 ends at the Fifty-ninth Judicial District (Cumberland and Monroe), and the page confirms there is no sixtieth. The future version effective in 2031 has 58.
2. **Court of Appeals divisions are seats, not areas.** KRS 22A.020 covers jurisdiction and appeals, not districts. No statute I read splits any appellate district or county into divisions. The 4th District (Jefferson) is just Jefferson County. Divisions 1 and 2 appear to be numbered seats, each elected by the whole district: the kycourts page for 1st District Division 1 lists all 23 counties. So `appeals_division` is "both (1 and 2, districtwide)" for every county. Which division seat, if any, is on the 2026 ballot in a given district has to come from the 2026 candidate list.
3. **Districts and circuits don't line up in three places** until the 2031 realignment:
   - Lincoln is in circuit 28 but district 13.
   - Edmonson is in circuit 8 but district 38.
   - Russell and Wayne are in circuit 57 but district 40, which they share with Clinton (circuit 40).

   This is what the statutes say. I quoted the entries word for word to confirm them.
4. **The table maps counties to areas only.** It does not say which offices are actually on the ballot. District judges are up statewide in 2026 because their 4-year terms run 2027 to 2030, so the current 24A.030 is the right version to use. Supreme Court, Court of Appeals and circuit judges serve 8-year terms, so only some of those seats (regular seats, unexpired terms, or new judgeships) are on the 2026 ballot. The guide should check each race against the Secretary of State's 2026 candidate list (elect.ky.gov / web.sos.ky.gov). I did not read that list.
5. I did not compare the circuit/district data against a second, independent county list (for example a county-by-county page on kycourts.gov). The only check came from the statute text itself.
