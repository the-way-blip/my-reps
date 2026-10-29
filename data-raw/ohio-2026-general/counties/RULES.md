# Ohio county ballots — shared rules (every agent follows these exactly)

Goal: for each assigned county, collect every contest and ballot issue on the **November 3, 2026 general election**
ballot that is run by the **county board of elections** — i.e. everything that is NOT already in our statewide file.
Already covered (do NOT include): Governor/Lt. Governor, Attorney General, Auditor of State, Secretary of State,
Treasurer of State, Supreme Court justices, U.S. Senator, U.S. Representative, State Senator, State Representative,
Court of Appeals judges, and State Issue 3.

## Source
The county board of elections' own published material for the Nov 3, 2026 general election: the certified candidate
list, the certified issues list, or the sample ballot (PDF or web page). Cite the exact URL(s) you used in `sources`.
If the board's site blocks automated fetching or sits behind a CAPTCHA, do not try to get around it — fall back to the
Ohio Secretary of State's county pages or a local newspaper's published "what's on the ballot" list, and say so.
Never invent a race, candidate or issue; if a part of the ballot can't be found, set `partial: true` and explain in `notes`.
Firecrawl is out of credits; use WebFetch / curl / the built-in browser tools you have.

## Output — ONE file per county
`data-raw/ohio-2026-general/counties/<county-slug>.json` (lowercase, e.g. `franklin.json`, `cuyahoga.json`). Schema:

```json
{
  "county": "Franklin",
  "found": true,
  "partial": false,
  "sources": ["https://..."],
  "notes": "anything the merge step should know",
  "races": [
    { "office": "County Commissioner", "scope": "county", "seats": 1,
      "candidates": [ { "name": "Jane Doe", "party": "democratic" }, { "name": "John Roe", "party": "republican" } ] },
    { "office": "Judge of the Court of Common Pleas, General Division (term commencing 1-1-2027)", "scope": "county", "seats": 1,
      "candidates": [ { "name": "...", "party": null } ] },
    { "office": "Member of Council", "scope": "city", "area": "Columbus", "seats": 3, "candidates": [ ... ] },
    { "office": "Township Trustee", "scope": "township", "area": "Washington", "seats": 2, "candidates": [ ... ] },
    { "office": "Member of Board of Education", "scope": "school", "area": "Hilliard City School District", "seats": 2, "candidates": [ ... ] }
  ],
  "issues": [
    { "name": "Issue 5 — Franklin County Children Services renewal levy", "scope": "county", "area": null,
      "ballotLanguage": "verbatim or close paraphrase of the ballot text, or a one-sentence description if the text isn't published" },
    { "name": "Issue 12 — City of Dublin charter amendment", "scope": "city", "area": "Dublin", "ballotLanguage": "..." },
    { "name": "Issue 20 — Plain Township fire levy (additional, 2.5 mills)", "scope": "township", "area": "Plain", "ballotLanguage": "..." },
    { "name": "Issue 31 — Worthington City Schools bond issue", "scope": "school", "area": "Worthington City School District", "ballotLanguage": "..." }
  ]
}
```

Rules for the fields:
- `scope`: `county` (whole county votes), `city` (a city or village; `area` = its name without "City of"/"Village of"),
  `township` (`area` = township name without "Township"), `school` (`area` = the district's full name).
  Use `county` for county offices even when the office name doesn't say "County".
- Races with multiple seats where the same office appears once: one race, `seats` = number elected.
  Judges: one race per seat; put the term-commencing date or division in the office name exactly as the board lists it.
- `party`: `republican`, `democratic`, `libertarian`, `green`, `independent`, or `null` for nonpartisan (judges, school boards,
  most municipal races). Candidate names as printed on the ballot; drop "Jr."/suffix only if the board does.
- Unopposed races still count — list the single candidate.
- Write-in-only races: include with an empty `candidates` array and `"writeInOnly": true`.
- Local liquor options: include as issues with scope `city`/`township` and the precinct in `name`.
- Issue numbers: keep the board's numbering in `name` ("Issue 7 — ...").
- Keep offices and areas in Title Case; keep everything else as the board prints it.

## Validate before finishing
JSON parses; every race has `office`, `scope`, `seats`, `candidates`; every non-county race/issue has `area`; every
issue has `name` and `scope`. Then report, per county: counts of county / city / township / school races and of issues,
the source URLs, and anything you could not find (and set `partial` accordingly). No git commands; edit no other files.
Use a private scratch subfolder (e.g. `<scratchpad>/oh-<county>/`) — the scratchpad is shared with the other agents.
