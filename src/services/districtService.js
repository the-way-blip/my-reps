import { STATE_FIPS, FIPS_TO_STATE } from '../data/stateFips'
import { recordFetchTime } from '../utils/freshness'

// TIGERweb Legislative MapServer layers
const TIGER_LAYERS = {
  congressional: 0,  // 119th Congressional Districts
  stateSenate: 1,    // State Senate (upper chamber)
  stateHouse: 2,     // State House (lower chamber)
}

const TIGER_BASE = 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Legislative/MapServer'

// Cache district GeoJSON by state code + layer
const _districtCache = {}

function fixWindingOrder(features) {
  // TIGERweb uses clockwise exterior rings, but d3-geo expects counterclockwise
  // (RFC 7946). Reversing all rings fixes the "world with hole" rendering bug.
  features.forEach(f => {
    if (f.geometry?.type === 'Polygon') {
      f.geometry.coordinates = f.geometry.coordinates.map(ring => ring.slice().reverse())
    } else if (f.geometry?.type === 'MultiPolygon') {
      f.geometry.coordinates = f.geometry.coordinates.map(
        polygon => polygon.map(ring => ring.slice().reverse())
      )
    }
  })
}

// Layer-specific field names
const LAYER_FIELDS = {
  congressional: { outFields: 'NAME,BASENAME,CD119', distField: f => f.CD119 || f.BASENAME },
  stateSenate: { outFields: 'NAME,BASENAME,SLDU', distField: f => f.SLDU || f.BASENAME },
  stateHouse: { outFields: 'NAME,BASENAME,SLDL', distField: f => f.SLDL || f.BASENAME },
}

async function fetchTigerLayer(stateCode, layerType) {
  const cacheKey = `${stateCode}_${layerType}`
  if (_districtCache[cacheKey]) return _districtCache[cacheKey]

  const fips = STATE_FIPS[stateCode]
  if (!fips) return []

  const layerNum = TIGER_LAYERS[layerType]
  const layerConfig = LAYER_FIELDS[layerType]
  const url = new URL(`${TIGER_BASE}/${layerNum}/query`)
  url.searchParams.set('where', `STATE='${fips}'`)
  url.searchParams.set('outFields', layerConfig.outFields)
  url.searchParams.set('outSR', '4326')
  url.searchParams.set('f', 'geojson')
  url.searchParams.set('returnGeometry', 'true')
  url.searchParams.set('geometryPrecision', '5')

  const res = await fetch(url)
  if (!res.ok) throw new Error(`TIGERweb ${res.status}`)

  const data = await res.json()
  if (data.error) throw new Error(data.error.message || 'TIGERweb query failed')
  const features = data.features ?? []

  features.forEach(f => {
    const p = f.properties
    p.district = parseInt(layerConfig.distField(p) || '0', 10)
  })

  fixWindingOrder(features)
  _districtCache[cacheKey] = features
  recordFetchTime('district-api')
  return features
}

// Fetch congressional district boundaries for a state (returns GeoJSON features)
export async function getDistrictsForState(stateCode) {
  return fetchTigerLayer(stateCode, 'congressional')
}

// Fetch state senate district boundaries
export async function getStateSenateDistricts(stateCode) {
  return fetchTigerLayer(stateCode, 'stateSenate')
}

// Fetch state house district boundaries
export async function getStateHouseDistricts(stateCode) {
  return fetchTigerLayer(stateCode, 'stateHouse')
}

// Geocode an address/zip and return the congressional district
// Census one-line geocoder (via our proxy) → { geos, stateAbbr, matchedAddress, coordinates } or null
async function censusGeocode(query) {
  const url = new URL('/api/census/geocoder/geographies/onelineaddress', window.location.origin)
  url.searchParams.set('address', query)
  url.searchParams.set('benchmark', 'Public_AR_Current')
  url.searchParams.set('vintage', 'Current_Current')
  url.searchParams.set('layers', 'all')
  url.searchParams.set('format', 'json')
  // The Census geocoder sometimes hangs or returns 502s; give up quickly and use the fallback
  const res = await fetch(url, { signal: AbortSignal.timeout?.(8000) }).catch(() => null)
  if (!res?.ok) return null
  const match = (await res.json().catch(() => null))?.result?.addressMatches?.[0]
  if (!match) return null
  return { geos: match.geographies || {}, stateAbbr: match.addressComponents?.state, matchedAddress: match.matchedAddress, coordinates: match.coordinates }
}

// Fallback: OpenStreetMap finds the point, TIGERweb returns the same Census layers for it
async function pointGeocode(query) {
  const params = new URLSearchParams({ q: query, format: 'json', countrycodes: 'us', limit: '1' })
  const hits = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, { headers: { Accept: 'application/json' } })
    .then(r => (r.ok ? r.json() : [])).catch(() => [])
  const hit = hits[0]
  if (!hit) return null
  const x = Number(hit.lon), y = Number(hit.lat)
  const idParams = new URLSearchParams({
    geometry: `${x},${y}`, geometryType: 'esriGeometryPoint', sr: '4326', layers: 'all', tolerance: '0',
    mapExtent: `${x - 0.01},${y - 0.01},${x + 0.01},${y + 0.01}`, imageDisplay: '100,100,96', returnGeometry: 'false', f: 'json',
  })
  const data = await fetch(`https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/identify?${idParams}`)
    .then(r => (r.ok ? r.json() : null)).catch(() => null)
  if (!data?.results?.length) return null
  const geos = {}
  for (const r of data.results) if (!/Labels$/.test(r.layerName)) (geos[r.layerName] ||= []).push(r.attributes)
  const fips = geos.States?.[0]?.STATE
  return { geos, stateAbbr: FIPS_TO_STATE[fips] || null, matchedAddress: hit.display_name, coordinates: { x, y } }
}

export async function geocodeToDistrict(query) {
  const found = (await censusGeocode(query)) || (await pointGeocode(query))
  if (!found) return null
  const { geos, stateAbbr } = found
  const match = { matchedAddress: found.matchedAddress, coordinates: found.coordinates }

  // Find congressional district
  let cdInfo = null
  for (const [key, val] of Object.entries(geos)) {
    if (key.toLowerCase().includes('congressional')) {
      cdInfo = val?.[0]
      break
    }
  }

  const district = cdInfo
    ? parseInt(cdInfo.BASENAME || cdInfo.CD119 || cdInfo.DISTRICT || '0', 10)
    : null

  // Find state legislative districts (upper = state senate, lower = state house)
  let stateUpperDistrict = null
  let stateLowerDistrict = null
  for (const [key, val] of Object.entries(geos)) {
    const lower = key.toLowerCase()
    if (lower.includes('state legislative') && lower.includes('upper') && val?.[0]) {
      stateUpperDistrict = val[0].BASENAME || val[0].SLDU || null
    }
    if (lower.includes('state legislative') && lower.includes('lower') && val?.[0]) {
      stateLowerDistrict = val[0].BASENAME || val[0].SLDL || null
    }
  }

  // Extract local geographies: county, city/place, county subdivision, school district
  let county = null
  let countyFips = null
  let place = null
  let placeFips = null
  let countySubdivision = null
  let countySubFips = null
  let schoolDistrict = null
  let schoolDistrictId = null

  for (const [key, val] of Object.entries(geos)) {
    const lower = key.toLowerCase()
    if (lower === 'counties' && val?.[0]) {
      county = val[0].BASENAME || val[0].NAME || null
      countyFips = val[0].COUNTY || null
    }
    if (lower === 'incorporated places' && val?.[0]) {
      place = val[0].BASENAME || val[0].NAME || null
      placeFips = val[0].PLACEFP || null
    }
    if (lower === 'county subdivisions' && val?.[0]) {
      countySubdivision = val[0].BASENAME || val[0].NAME || null
      countySubFips = val[0].COUSUB || val[0].COUSUBFP || null
    }
    if (lower.includes('school district') && val?.[0]) {
      schoolDistrict = val[0].BASENAME || val[0].NAME || null
      schoolDistrictId = val[0].SDUNI || val[0].SDELM || val[0].SDSEC || null
    }
  }

  if (!district && !stateUpperDistrict && !stateLowerDistrict && !county) return null

  return {
    stateCode: stateAbbr,
    district,
    stateUpperDistrict,
    stateLowerDistrict,
    matchedAddress: match.matchedAddress,
    coordinates: match.coordinates,
    // Local geographies
    county,
    countyFips,
    place,
    placeFips,
    countySubdivision,
    countySubFips,
    schoolDistrict,
    schoolDistrictId,
  }
}
