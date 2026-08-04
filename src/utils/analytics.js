function gtag() {
  if (window.gtag) window.gtag(...arguments)
}

export function trackEvent(name, params = {}) {
  gtag('event', name, params)
}

export function trackSignUp(method) {
  trackEvent('sign_up', { method })
}

export function trackAddressEntered() {
  trackEvent('address_entered')
}

export function trackPartySelected(party) {
  trackEvent('party_selected', { party })
}

export function trackCandidateSelected(race, candidate) {
  trackEvent('candidate_selected', { race, candidate })
}

export function trackBallotComplete(totalRaces) {
  trackEvent('ballot_complete', { total_races: totalRaces })
}

export function trackProposalVoted(proposal, vote) {
  trackEvent('proposal_voted', { proposal, vote })
}

export function trackChecklistItem(item) {
  trackEvent('checklist_item', { item })
}

export function trackShareTool() {
  trackEvent('share', { content_type: 'tool' })
}

export function trackShareBallot() {
  trackEvent('share', { content_type: 'ballot' })
}
