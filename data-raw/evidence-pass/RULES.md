# Evidence pass — shared rules (every batch uses these exactly)

Build My Ballot grades candidates on six values: proLife, marriage, religiousLiberty, secondAmendment,
limitedGov, fiscal. The candidates in your batch file currently have four or more sub-grades filled in by
the party default ("No specific position found; <party>..."). Your job: find real, documented evidence for
those defaulted values and replace defaults where evidence exists. Leave a default in place when you find nothing.

## Input / output
- Input: `data-raw/evidence-pass/batch-N-<st>.json` (current entries, same schema as data-raw/grades-<st>/*.json).
- Output: `data-raw/evidence-pass/out-N-<st>.json` — a JSON array with ONE entry per input candidate, same
  schema and same `office` + `name` strings, every field kept, with updated positions / gradeJustifications /
  sources / gradeNote and a recomputed `grade`. Write nothing else; no git commands.
- Keep every existing non-default sub-grade exactly as is (roll-call and group grades already scored).

## Allowed evidence (cite a URL for every changed sub-grade, add it to `sources`)
1. Endorsement or rating lists published by these groups for the 2026 general (or the candidate's most recent race):
   - proLife A: state right-to-life PAC endorsement (MCCL / Minnesota Citizens Concerned for Life; Wisconsin Right to Life PAC
     or Pro-Life Wisconsin; Ohio Right to Life PAC), Susan B. Anthony Pro-Life America endorsement.
     A "100% pro-life" questionnaire answer set counts as A; a mixed questionnaire = C.
   - proLife F: Planned Parenthood (any state affiliate) or Pro-Choice Minnesota / Abortion Forward / Reproductive Freedom for All endorsement.
   - marriage + religiousLiberty A: state family-policy PAC endorsement (Minnesota Family Council / MN Family Action, Wisconsin Family
     Action, Ohio Value Voters / Citizens for Community Values / Center for Christian Virtue). Endorsement by OutFront Minnesota,
     Fair Wisconsin or Equality Ohio PAC → marriage F (not religiousLiberty).
   - secondAmendment: NRA-PVF A/A+/AQ → A; other NRA letter grades used as given; Minnesota Gun Owners Caucus / Wisconsin Firearm Owners /
     Buckeye Firearms PAC endorsement → A; Moms Demand Action "Gun Sense Candidate", Protect Minnesota or Giffords endorsement → F.
   - limitedGov + fiscal A: Americans for Prosperity (state chapter) endorsement. Taxpayers League of Minnesota / NFIB endorsement → fiscal A only.
2. iVoterGuide questionnaire ANSWERS (not the overall "Conservative/Liberal" label, which is already in the default text): grade each value
   from the candidate's own answers on that topic — all conservative A, mostly B, split C, mostly opposed D, all opposed F.
3. The candidate's own campaign site, official social account or a news interview, stating a clear position on that value:
   clearly conservative position → A; clearly opposed → F; nuanced/mixed → C. Quote or closely paraphrase it in the justification.

NOT scored: teachers' unions, chambers of commerce, labor, party endorsements, newspaper endorsements, primary-only lists,
iVoterGuide overall label alone, anything you can't link to. If two signals conflict on one value, use the lower grade.
Never infer a position from party, a photo, or a vague slogan ("I'll fight for families" is not evidence).

## Writing justifications
Factual and neutral, same tone as the existing files, e.g.
"Endorsed by MCCL PAC (2026)." / "Campaign site: 'I will always protect the Second Amendment.'" /
"Answered iVoterGuide questionnaire: opposed 3 of 3 abortion restrictions."
If a value stays default, keep its existing default text unchanged.
Update `gradeNote` to summarize what evidence the grade rests on.

## Overall grade (compute in code, never by hand)
A = at least four A sub-grades AND none below B. Otherwise average A=4 B=3 C=2 D=1 F=0: ≥2.75 B, ≥1.75 C, ≥0.75 D, else F.
Libertarian / independent / no-party candidates keep grade null unless at least four of six values have real evidence.

## Validate before finishing
JSON parses; same count and same office+name pairs as the input; every overall grade matches the rule; every changed
sub-grade has a URL in sources. Report: count, how many sub-grades moved from default to evidence, grade changes
(old → new overall, by candidate), and any judgment calls the rules didn't cover.
