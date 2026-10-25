import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { STATEWIDE_RACES, BALLOT_PROPOSALS, CONVENTION_NOMINEES } from '../data/michiganPrimary2026'

const REFRESH_MS = 120000

function pct(n, total) {
  if (!total) return ''
  return `${((n / total) * 100).toFixed(1)}%`
}

function RaceResult({ race }) {
  const total = race.candidates.reduce((a, c) => a + (c.votes || 0), 0)
  const sorted = [...race.candidates].sort((a, b) => (b.votes || 0) - (a.votes || 0))
  return (
    <div className="results-race">
      <div className="results-race-head">
        <h3>{race.office}</h3>
        <span className="results-reporting">{race.reporting ? `${race.reporting} reporting` : total ? 'counting' : 'awaiting results'}</span>
      </div>
      <ul className="results-cands">
        {sorted.map((c, i) => (
          <li key={i} className={`results-cand ${c.winner ? 'results-winner' : ''}`}>
            <span className="results-cand-name">
              {c.winner && <span className="results-check" aria-label="Winner">✓</span>}
              {c.name}{c.party ? <span className="results-party"> ({c.party})</span> : null}
            </span>
            <span className="results-cand-num">{c.votes != null ? `${c.votes.toLocaleString()} · ${pct(c.votes, total)}` : '—'}</span>
            <span className="results-bar" style={{ width: total ? `${(c.votes || 0) / total * 100}%` : 0 }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProposalResult({ p }) {
  const total = (p.yes || 0) + (p.no || 0)
  return (
    <div className="results-race">
      <div className="results-race-head">
        <h3>{p.name}</h3>
        <span className="results-reporting">{p.reporting ? `${p.reporting} reporting` : total ? 'counting' : 'awaiting results'}</span>
      </div>
      <ul className="results-cands">
        <li className={`results-cand ${p.result === 'passed' ? 'results-winner' : ''}`}><span className="results-cand-name">{p.result === 'passed' && <span className="results-check">✓</span>}YES</span><span className="results-cand-num">{total ? `${p.yes.toLocaleString()} · ${pct(p.yes, total)}` : '—'}</span><span className="results-bar" style={{ width: total ? `${p.yes / total * 100}%` : 0 }} /></li>
        <li className={`results-cand ${p.result === 'failed' ? 'results-winner' : ''}`}><span className="results-cand-name">{p.result === 'failed' && <span className="results-check">✓</span>}NO</span><span className="results-cand-num">{total ? `${p.no.toLocaleString()} · ${pct(p.no, total)}` : '—'}</span><span className="results-bar" style={{ width: total ? `${p.no / total * 100}%` : 0 }} /></li>
      </ul>
    </div>
  )
}

// Pre-results skeleton built from the ballot data so the page is useful before polls close.
function placeholderRaces() {
  const out = STATEWIDE_RACES.map(r => ({ office: r.office, candidates: [] }))
  const cn = CONVENTION_NOMINEES || {}
  for (const k of ['secretaryOfState', 'attorneyGeneral', 'supremeCourt']) if (cn[k]?.office) out.push({ office: cn[k].office, candidates: [] })
  return out
}

export default function ResultsView() {
  usePageTitle('Election Results — Michigan November 3, 2026', 'Live results for Michigan statewide races and ballot proposals')
  const [data, setData] = useState(null)
  const [err, setErr] = useState(false)
  useEffect(() => {
    let alive = true
    const load = () => fetch(`/data/results.json?t=${Date.now()}`).then(r => r.json()).then(d => { if (alive) { setData(d); setErr(false) } }).catch(() => alive && setErr(true))
    load()
    const id = setInterval(load, REFRESH_MS)
    return () => { alive = false; clearInterval(id) }
  }, [])
  const live = data?.races?.length > 0 || data?.proposals?.length > 0
  const races = live ? data.races : placeholderRaces()
  const proposals = live ? data.proposals : BALLOT_PROPOSALS.map(p => ({ name: p.name }))

  return (
    <div className="page results-page">
      <div className="page-header">
        <h2 className="page-title">Michigan Election Results</h2>
        <p className="results-sub">
          General Election · November 3, 2026
          {data?.updatedAt ? ` · Updated ${new Date(data.updatedAt).toLocaleString('en-US', { timeZone: 'America/Detroit', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })} ET` : ''}
        </p>
      </div>

      {!live && (
        <div className="results-banner">
          <strong>{data?.status === 'counting' ? 'Counting underway' : 'Polls close at 8 p.m. on Tuesday, November 3.'}</strong>
          <span> {data?.note || 'Results appear here as counties report. This page refreshes every two minutes.'}</span>
          <span> Haven&apos;t voted? <Link to="/ballot">Open your ballot plan</Link>.</span>
        </div>
      )}
      {err && <p className="results-error">Couldn&apos;t load results — retrying.</p>}

      <section className="results-section">
        <h3 className="section-heading">Statewide &amp; federal</h3>
        {races.map((r, i) => <RaceResult key={i} race={r} />)}
      </section>

      <section className="results-section">
        <h3 className="section-heading">Ballot proposals</h3>
        {proposals.map((p, i) => <ProposalResult key={i} p={p} />)}
      </section>

      <section className="results-section results-sources">
        <h3 className="section-heading">Official sources</h3>
        <ul>
          {(data?.sources || []).map((s, i) => <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
        </ul>
        <p className="results-disclaimer">Unofficial results as reported by the Michigan Secretary of State and county clerks. Local race results are published by each county clerk. Of For &amp; By The People is independent and personally funded, with no party or candidate affiliation.</p>
      </section>
    </div>
  )
}
