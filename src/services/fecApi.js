import { recordFetchTime } from '../utils/freshness';

const API_KEY = import.meta.env.VITE_FEC_API_KEY;
const BASE_URL = 'https://api.open.fec.gov/v1';
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

function getMostRecentEvenYear() {
  const year = new Date().getFullYear();
  return year % 2 === 0 ? year : year - 1;
}

/** Read from sessionStorage with TTL check */
function cacheGet(key) {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) {
      sessionStorage.removeItem(key);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

/** Write to sessionStorage with timestamp */
function cacheSet(key, data) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
  } catch {
    // storage full or unavailable — ignore
  }
}

export async function searchCandidate(name, state) {
  if (!API_KEY) return null;

  try {
    const lastName = name.includes(',')
      ? name.split(',')[0].trim()
      : name.split(' ').pop();

    const cacheKey = `fec_search_${lastName}_${state || ''}`;
    const cached = cacheGet(cacheKey);
    if (cached !== null) return cached;

    const params = new URLSearchParams({
      q: lastName,
      api_key: API_KEY,
    });
    if (state) params.set('state', state);

    const response = await fetch(`${BASE_URL}/names/candidates/?${params}`);
    if (!response.ok) return null;

    const data = await response.json();
    const results = data.results || [];
    const match = results.find(r =>
      r.name?.toLowerCase().includes(lastName.toLowerCase()) && r.office_sought === 'S'
    ) || results.find(r =>
      r.name?.toLowerCase().includes(lastName.toLowerCase())
    );

    const result = match
      ? { candidateId: match.id, name: match.name, office: match.office_sought }
      : null;

    cacheSet(cacheKey, result);
    recordFetchTime('fec-api');
    return result;
  } catch {
    return null;
  }
}

export async function getCandidateFinances(candidateId, cycle) {
  if (!API_KEY) return null;

  try {
    const effectiveCycle = cycle || getMostRecentEvenYear();
    const cacheKey = `fec_totals_${candidateId}_${effectiveCycle}`;
    const cached = cacheGet(cacheKey);
    if (cached !== null) return cached;

    const params = new URLSearchParams({
      cycle: String(effectiveCycle),
      api_key: API_KEY,
    });

    const response = await fetch(
      `${BASE_URL}/candidate/${candidateId}/totals/?${params}`
    );
    if (!response.ok) return null;

    const data = await response.json();
    const totals = data.results?.[0];
    if (!totals) {
      // Try previous cycle if current has no data
      if (!cycle) {
        const prevCycle = effectiveCycle - 2;
        const fallback = await getCandidateFinances(candidateId, prevCycle);
        if (fallback) {
          cacheSet(cacheKey, fallback);
          return fallback;
        }
      }
      cacheSet(cacheKey, null);
      return null;
    }

    const result = {
      candidateId,
      totalRaised: totals.receipts,
      totalSpent: totals.disbursements,
      cashOnHand: totals.cash_on_hand_end_period,
      debt: totals.debts_owed_by_committee,
      totalDisbursements: totals.disbursements,
      totalContributions: totals.contributions,
      individualContributions: totals.individual_contributions,
      pacContributions: totals.other_political_committee_contributions,
      cycle: totals.cycle || effectiveCycle,
    };

    cacheSet(cacheKey, result);
    return result;
  } catch {
    return null;
  }
}

export async function getTopDonors(candidateId, cycle) {
  if (!API_KEY) return null;

  try {
    const effectiveCycle = cycle || getMostRecentEvenYear();
    const cacheKey = `fec_donors_${candidateId}_${effectiveCycle}`;
    const cached = cacheGet(cacheKey);
    if (cached !== null) return cached;

    const params = new URLSearchParams({
      candidate_id: candidateId,
      cycle: String(effectiveCycle),
      per_page: '10',
      api_key: API_KEY,
    });

    const response = await fetch(
      `${BASE_URL}/schedules/schedule_a/by_size/by_candidate/?${params}`
    );
    if (!response.ok) return null;

    const data = await response.json();

    const result = {
      results: (data.results || []).map((item) => ({
        size: item.size,
        total: item.total,
        count: item.count,
      })),
    };

    cacheSet(cacheKey, result);
    return result;
  } catch {
    return null;
  }
}
