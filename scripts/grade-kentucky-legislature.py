#!/usr/bin/env python3
# Six-value grades for Kentucky's 2026 legislative candidates, computed from the shared evidence files under
# data-raw/grades-ky/ by the rules in data-raw/grades-ky/RULES.md (same method as Ohio, Wisconsin and Minnesota):
#   _ky-evidence.json  2023-26 Kentucky General Assembly floor roll calls + who voted how
#   _ky-lists.json     2026 endorsement / rating lists (KRTL, Planned Parenthood, C-FAIR, NRA-PVF, Moms Demand) + iVoterGuide
#   _ky-ivg-scores.json  iVoterGuide questionnaire answers scored per value (optional)
# Writes data-raw/grades-ky/sixvalue-legislature.json, read by scripts/build-kentucky.mjs.
#   python3 scripts/grade-kentucky-legislature.py
import json, os, re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
D = os.path.join(ROOT, 'data-raw/grades-ky')
load = lambda f: json.load(open(os.path.join(D, f)))
cands = [c for c in load('_candidates.json') if c['office'].startswith('State ')]
ev, lists = load('_ky-evidence.json'), load('_ky-lists.json')
ivg = load('_ky-ivg-scores.json') if os.path.exists(os.path.join(D, '_ky-ivg-scores.json')) else {}
rc = ev['rollCalls']
VALUES = ['proLife', 'marriage', 'religiousLiberty', 'secondAmendment', 'limitedGov', 'fiscal']
PTS = {'A': 4, 'B': 3, 'C': 2, 'D': 1, 'F': 0}
PARTY = {'republican': 'Republican', 'democratic': 'Democrat', 'independent': 'Independent', 'Libertarian': 'Libertarian', 'Kentucky Party': 'Kentucky Party'}
DEFAULT = {'republican': dict.fromkeys(VALUES, 'B'),
           'democratic': {**dict.fromkeys(VALUES, 'D'), 'religiousLiberty': 'C'}}

ACT = {'passage': 'passage', 'override': 'veto override', 'concur': 'concurrence', 'final': 'final passage'}

def bills(rids):
    # "HB 1 (2023, income tax cut to 4.5% and 4%: passage)", one entry per bill with every action listed
    by = {}
    for rid in rids:
        b, yr, act = rid.split('_')[0], rid.split('_')[1], rid.split('_')[-1]
        by.setdefault((b, yr), []).append(ACT.get(act, act))
    out = []
    for (b, yr), acts in by.items():
        num = re.sub(r'^([A-Z]+)(\d+)$', r'\1 \2', b)
        t = TITLE.get(f'{b}_{yr}', '')
        out.append(f"{num} ({yr}{', ' + t if t else ''}: {' and '.join(acts)})")
    return '; '.join(out)

TITLE = {
    'HB1_2023': 'income tax cut to 4.5% and 4%', 'HB1_2025': 'income tax cut to 3.5%', 'SB150_2023': 'bans gender-transition treatment for minors',
    'HB547_2023': 'religious expression in public schools', 'SB7_2023': 'ends payroll deduction of public-employee union dues',
    'HB357_2024': 'Second Amendment Privacy Act', 'HB2_2024': 'school-choice constitutional amendment', 'SB19_2025': 'moment of silence and released-time instruction in schools',
    'SB60_2025': 'state religious-freedom law', 'HB495_2025': 'no Medicaid money for gender transition', 'HB4_2025': 'bans DEI offices at public colleges',
    'HB90_2025': 'lists the medical care that is not an abortion under the ban', 'HB312_2026': 'concealed carry at ages 18 to 20',
    'SB72_2026': 'health-care conscience rights', 'HB2_2026': 'Medicaid work requirements', 'HB78_2026': 'liability shield for gun makers',
}
# list signals: {name: {value: [(grade, text, url)]}}
sig = {}
def add(name, value, grade, text, url):
    sig.setdefault(name, {}).setdefault(value, []).append((grade, text, url))
for lid, L in lists['lists'].items():
    src = L['source']
    for n in L['names']:
        who, d = n.get('candidate'), str(n.get('detail') or '')
        if not who or 'not on the' in d:
            continue
        if lid == 'KRTL_2026_GENERAL':
            if 'ENDORSED' in d and 'PENDING' not in d:
                add(who, 'proLife', 'A', 'Endorsed by Kentucky Right to Life Victory PAC for the 2026 general election.', src)
            elif d.startswith('RECOMMENDED'):
                add(who, 'proLife', 'B', 'Recommended (not endorsed) by Kentucky Right to Life Victory PAC for 2026.', src)
            elif d.startswith('PREFERRED'):
                add(who, 'proLife', 'B', 'Listed as the preferred candidate (not endorsed) by Kentucky Right to Life Victory PAC for 2026.', src)
            elif d.startswith('OPPOSED'):
                add(who, 'proLife', 'D', 'Opposed by Kentucky Right to Life Victory PAC in 2026.', src)
        elif lid == 'PP_KY_2026' and d.startswith('Endorsed'):
            add(who, 'proLife', 'F', 'Endorsed by Planned Parenthood Alliance Advocates Kentucky (2026).', src)
        elif lid == 'CFAIR_2026_GENERAL':
            add(who, 'marriage', 'F', 'Endorsed by the Fairness Campaign PAC (C-FAIR), Kentucky\'s LGBTQ-rights PAC (2026).', src)
        elif lid == 'NRA_PVF_KY_2026':
            g = d.split()[0] if d else ''
            g = 'A' if g in ('A+', 'AQ') else g
            if g in PTS:
                add(who, 'secondAmendment', g, f"NRA-PVF 2026 grade {d.split()[0]}{' (endorsed)' if 'Endorsed' in d else ''}.", src)
        elif lid == 'MDA_GUNSENSE_KY_2026':
            add(who, 'secondAmendment', 'F', 'Named a Moms Demand Action Gun Sense Candidate (2026).', src)
for who, vals in ivg.items():
    url = (lists['ivoterguide'].get(who) or {}).get('url')
    for v, s in vals.items():
        if v in VALUES and s.get('grade') in PTS and url:
            add(who, v, s['grade'], s['justification'], url)

def roll_grade(frac):
    return 'A' if frac == 1 else 'F' if frac == 0 else 'B' if frac > .5 else 'C' if frac == .5 else 'D'

def overall(pos, has_default):
    g = [pos[v] for v in VALUES if pos[v]]
    if not has_default and sum(1 for v in VALUES if pos[v] and not pos.get('_default_' + v)) < 4:
        return None
    if not g:
        return None
    if sum(1 for x in g if x == 'A') >= 4 and all(PTS[x] >= 3 for x in g):
        return 'A'
    avg = sum(PTS[x] for x in g) / len(g)
    return 'B' if avg >= 2.75 else 'C' if avg >= 1.75 else 'D' if avg >= .75 else 'F'

out = []
for c in cands:
    name, party = c['name'], c['party']
    m = ev['members'].get(name, {})
    label = (lists['ivoterguide'].get(name) or {}).get('label') or 'no rating'
    lab = 'lists no rating' if label in ('no rating', 'Insufficient Information') else f'rates {label}'
    pos, why, sources, basis = {}, {}, [], []
    for v in VALUES:
        cands_v = []
        # roll calls
        votes = [(rid, x) for rid, x in (m.get('votes') or {}).items() if v in rc[rid]['values'] and x in ('Y', 'N')]
        # A no on HB 90 (2025) carries no signal for a candidate Kentucky Right to Life endorses in 2026: KRTL backed the bill
        # and still endorses them, so the no wasn't an anti-life vote (RULES.md)
        if v == 'proLife' and any(g == 'A' and 'Right to Life' in t for g, t, _ in sig.get(name, {}).get('proLife', [])):
            votes = [(rid, x) for rid, x in votes if not (rid.startswith('HB90_') and x == 'N')]
        if votes:
            yes = [rid for rid, x in votes if x == rc[rid]['conservativeSide']]
            frac = len(yes) / len(votes)
            no = [rid for rid, x in votes if rid not in yes]
            parts = []
            if yes: parts.append('voted for ' + bills(yes))
            if no: parts.append('voted against ' + bills(no))
            txt = ('Kentucky General Assembly floor votes: ' + ' and '.join(parts) + '.')
            cands_v.append((roll_grade(frac), txt, [rc[r]['source'] for r, _ in votes]))
            basis.append('votes')
        for g, t, u in sig.get(name, {}).get(v, []):
            cands_v.append((g, t, [u]))
        if cands_v:
            low = min(PTS[g] for g, _, _ in cands_v)
            pos[v] = next(g for g, _, _ in cands_v if PTS[g] == low)
            why[v] = ' '.join(t for _, t, _ in cands_v)
            for _, _, us in cands_v:
                for u in us:
                    if u not in sources: sources.append(u)
        elif party in DEFAULT:
            pos[v], pos['_default_' + v] = DEFAULT[party][v], True
            why[v] = f"No specific position found; {PARTY[party]}; iVoterGuide {lab}."
        else:
            pos[v] = None
            why[v] = f"No specific position found; {PARTY.get(party, 'no party affiliation')}."
    grade = overall(pos, party in DEFAULT)
    defaults = sum(1 for v in VALUES if pos.get('_default_' + v))
    seat = 'Incumbent ' + ('senator' if 'Senator' in c['office'] else 'representative') if m.get('incumbent') else ('Former representative' if m.get('votes') else 'Non-incumbent')
    lists_hit = [n for n, k in [('Kentucky Right to Life', 'Right to Life'), ('Planned Parenthood', 'Planned Parenthood'), ('NRA-PVF', 'NRA-PVF'),
                                 ('Moms Demand Action', 'Moms Demand'), ('C-FAIR', 'C-FAIR'), ('iVoterGuide answers', 'Answered iVoterGuide')] if any(k in w for w in why.values())]
    rests = (['2023–2026 floor votes'] if 'votes' in basis else []) + lists_hit
    note = f"{seat} ({PARTY.get(party, 'no party')})." + (f" Grades rest on {', '.join(rests[:-1]) + ' and ' + rests[-1] if len(rests) > 1 else rests[0]}." if rests else '')
    if defaults >= 4:
        note += f" {defaults} of six values have no candidate-specific evidence and use the {PARTY[party]} default."
    elif defaults:
        note += f" {defaults} value{'s' if defaults > 1 else ''} use{'' if defaults > 1 else 's'} the {PARTY[party]} default."
    out.append({
        'office': c['office'], 'name': name, 'grade': grade, 'gradeNote': note.replace('  ', ' '),
        'description': f"{'Incumbent' if m.get('incumbent') else 'Candidate'} for {c['office'].replace(', District', ' District')} ({PARTY.get(party, 'no party')}).",
        'website': None, 'sources': sources,
        'positions': {v: pos[v] for v in VALUES}, 'gradeJustifications': why,
    })

json.dump(out, open(os.path.join(D, 'sixvalue-legislature.json'), 'w'), indent=1, ensure_ascii=False)
from collections import Counter
print(len(out), 'graded', sum(1 for o in out if o['grade']), Counter(o['grade'] for o in out))
dflt = sum(1 for o in out for v in VALUES if o['gradeJustifications'][v].startswith('No specific position found;') and o['positions'][v])
print('sub-grades on evidence', sum(1 for o in out for v in VALUES if not o['gradeJustifications'][v].startswith('No specific')), 'defaults', dflt)
