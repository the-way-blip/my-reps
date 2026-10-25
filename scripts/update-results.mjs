#!/usr/bin/env node
// Election-night helper: writes public/data/results.json for the /results page.
// Usage:
//   node scripts/update-results.mjs fetch            # try to scrape mielections.us statewide results
//   node scripts/update-results.mjs set <file.json>  # replace results.json with a hand-edited file
// results.json shape:
// { updatedAt, status: 'pre-election'|'counting'|'final', note, sources:[{label,url}],
//   races:[{ office, reporting:'62% of precincts', candidates:[{ name, party, votes, winner }] }],
//   proposals:[{ name, yes, no, reporting, result:'passed'|'failed'|null }] }
import { readFileSync, writeFileSync } from 'fs'
const OUT = 'public/data/results.json'
const SOS = 'https://mielections.us/election/results/2026GEN_CENR.html'
const [, , cmd, arg] = process.argv
const current = JSON.parse(readFileSync(OUT, 'utf8'))

if (cmd === 'set') {
  const next = JSON.parse(readFileSync(arg, 'utf8'))
  next.updatedAt = new Date().toISOString()
  writeFileSync(OUT, JSON.stringify(next, null, 2) + '\n')
  console.log('results.json replaced; commit + push to publish')
} else if (cmd === 'fetch') {
  const html = await (await fetch(SOS, { headers: { 'User-Agent': 'Mozilla/5.0' } })).text()
  // The SOS page is server-rendered tables: office header rows followed by candidate rows (name, party, votes, %).
  const text = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, '\n').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').split('\n').map(s => s.trim()).filter(Boolean)
  const races = []
  let cur = null
  for (let i = 0; i < text.length; i++) {
    const line = text[i]
    if (/^(Governor|United States Senator|Secretary of State|Attorney General|Member of the State Board|Regent|Trustee|Governor of Wayne|Justice of Supreme Court|Representative in Congress)/i.test(line)) { cur = { office: line, candidates: [] }; races.push(cur); continue }
    if (cur && /^[A-Z][A-Za-z.'\- ]+$/.test(line) && /^(Democratic|Republican|Libertarian|Green|U\.S\. Taxpayers|Working Class|Natural Law|No Party Affiliation)$/i.test(text[i + 1] || '') && /^[\d,]+$/.test(text[i + 2] || '')) {
      cur.candidates.push({ name: line, party: text[i + 1], votes: Number(text[i + 2].replace(/,/g, '')) })
    }
  }
  if (!races.length) { console.error('No races parsed — page format differs; use `set` with a hand-edited file.'); process.exit(1) }
  for (const r of races) { const top = [...r.candidates].sort((a, b) => b.votes - a.votes)[0]; if (top && r.candidates.length > 1) top.winner = false }
  writeFileSync(OUT, JSON.stringify({ ...current, updatedAt: new Date().toISOString(), status: 'counting', note: 'Unofficial results from the Michigan Secretary of State; updated as counties report.', races, proposals: current.proposals }, null, 2) + '\n')
  console.log(`parsed ${races.length} races; commit + push to publish (or wire this into a cron)`)
} else {
  console.log('usage: update-results.mjs fetch | set <file.json>')
}
