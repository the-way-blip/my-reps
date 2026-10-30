# Kentucky 2026 general — six-value grading rules (every batch uses these exactly)

Same method as Ohio, Wisconsin and Minnesota (data-raw/grades-oh, data-raw/evidence-pass/RULES.md).
Scope matches those states: U.S. Senate, U.S. House, Kentucky Senate and House, and the Kentucky Supreme Court.
Lower-court judges and Commonwealth's Attorneys stay ungraded, as in every other state.

## Values
proLife, marriage (marriage and family, incl. gender policy for minors and school sports), religiousLiberty,
secondAmendment, limitedGov, fiscal. Sub-grades are A–F or null.

## Evidence, strongest first (cite a URL for every sub-grade that isn't a default, and list it in `sources`)
1. Roll-call votes of sitting legislators (2023–2026 Kentucky General Assembly, or Congress for federal incumbents),
   from data-raw/grades-ky/_ky-evidence.json. Voted the conservative side on all topical votes for a value → A;
   most → B; split → C; mostly opposed → D; all opposed → F. Name the bills in the justification.
2. Endorsement or rating lists for the 2026 general (or the candidate's most recent race):
   - proLife A: Kentucky Right to Life PAC endorsement, Susan B. Anthony Pro-Life America endorsement.
     proLife F: Planned Parenthood (any affiliate) or Reproductive Freedom for All endorsement.
   - marriage + religiousLiberty A: a Kentucky family-policy PAC endorsement (if one publishes one).
     Fairness Campaign / Kentucky Fairness or HRC endorsement → marriage F (not religiousLiberty).
   - secondAmendment: NRA-PVF A/A+/AQ → A; other NRA letters as given; a Kentucky gun-rights PAC endorsement → A;
     Moms Demand Action "Gun Sense Candidate" or Giffords endorsement → F.
   - limitedGov + fiscal A: Americans for Prosperity-Kentucky endorsement. NFIB endorsement → fiscal A only.
3. iVoterGuide questionnaire ANSWERS (not the overall label): all conservative A, mostly B, split C, mostly opposed D, all opposed F.
4. The candidate's own campaign site, official social account or a news interview stating a clear position:
   clearly conservative → A; clearly opposed → F; nuanced → C. Quote or closely paraphrase it.

NOT scored: unions, chambers of commerce, labor, party endorsements, newspaper endorsements, primary-only lists,
the iVoterGuide overall label alone, anything you can't link to. Two signals that conflict on one value → the lower grade.
Never infer a position from a photo or a vague slogan.

## Party defaults (only when a value has no evidence above)
- Republican: B, text "No specific position found; Republican; iVoterGuide rates <label or 'lists no rating'>."
- Democrat: D for proLife, marriage, secondAmendment, limitedGov, fiscal; C for religiousLiberty;
  text "No specific position found; Democrat; iVoterGuide rates <label or 'lists no rating'>."
- Independent, Libertarian, Kentucky Party, nonpartisan: null, text "No specific position found; <affiliation>."
- Kentucky Supreme Court (nonpartisan): no party default. Use evidence only; otherwise null "No specific position found."

## Overall grade (compute in code, never by hand)
A = at least four A sub-grades AND none below B. Otherwise average of non-null sub-grades A=4 B=3 C=2 D=1 F=0:
≥2.75 B, ≥1.75 C, ≥0.75 D, else F. Candidates without a party default (independent, Libertarian, Kentucky Party,
nonpartisan) keep grade null unless at least four of six values have real evidence.

## Entry format (one JSON array per batch file, same as data-raw/grades-oh/sixvalue-*.json)
{ "office": exact office string from _candidates.json, "name": exact name string, "grade", "gradeNote" (one or two
sentences on what the grade rests on), "description" (one neutral line: current/former office or occupation, party),
"website": campaign site or null, "sources": [urls], "positions": {six values}, "gradeJustifications": {six strings} }

Justifications are factual and neutral, e.g. "Endorsed by Kentucky Right to Life PAC (2026)." /
"Voted yes on HB 1 (2025, income tax cut to 3.5%)." / "Campaign site: 'I will always protect the Second Amendment.'"

## Kentucky specifics (decided while grading)
- Kentucky Right to Life Victory PAC tiers: ENDORSED / PROLIFE CHAMPION → proLife A; RECOMMENDED or PREFERRED CANDIDATE → B
  (support short of an endorsement); OPPOSED → D. "Unopposed, no designation" and "pending" carry no signal.
- A no vote on HB 90 (2025) carries no proLife signal for a candidate KRTL endorses in 2026: KRTL backed HB 90 and
  still endorses them, so that no wasn't an anti-life vote.
- NRA-PVF "?" (refused questionnaire / inconsistent record) carries no signal.
- Roll calls per value: share of the member's yes/no votes on the conservative side — all → A, more than half → B,
  exactly half → C, less than half → D, none → F. Not-voting is ignored.
- Legislative grades are computed by scripts/grade-kentucky-legislature.py from _ky-evidence.json, _ky-lists.json and
  _ky-ivg-scores.json; federal and Supreme Court grades are hand-researched in sixvalue-federal.json.
