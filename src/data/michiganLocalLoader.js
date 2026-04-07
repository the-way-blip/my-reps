/**
 * Lightweight loader for Michigan local data.
 *
 * Re-exports MI_STATEWIDE_OFFICIALS synchronously (small object).
 * All large data (counties, cities, townships, villages, school boards)
 * is loaded on demand via dynamic import to keep the initial bundle small.
 */

export { MI_STATEWIDE_OFFICIALS } from './michiganLocal'

/**
 * Dynamically imports the full Michigan local data module and calls
 * getMichiganLocalOfficials(geo).
 *
 * @param {object} geo - localGeo object from Census geocoder
 * @returns {Promise<{county, city, township, village, schoolBoard}>}
 */
export async function loadMichiganLocalOfficials(geo) {
  const { getMichiganLocalOfficials } = await import('./michiganLocal')
  return getMichiganLocalOfficials(geo)
}

// Cache for lazy-loaded search data
let _countyOfficials = null
let _cityOfficials = null
let _allCounties = null
let _loadPromise = null

/**
 * Lazily loads MI_COUNTY_OFFICIALS, MI_CITY_OFFICIALS, and the
 * comprehensive MI_COUNTIES data for search.
 * Caches the result so subsequent calls return immediately.
 *
 * @returns {Promise<{MI_COUNTY_OFFICIALS: object, MI_CITY_OFFICIALS: object, MI_COUNTIES: object}>}
 */
export async function loadSearchData() {
  if (_countyOfficials && _cityOfficials && _allCounties) {
    return { MI_COUNTY_OFFICIALS: _countyOfficials, MI_CITY_OFFICIALS: _cityOfficials, MI_COUNTIES: _allCounties }
  }
  if (!_loadPromise) {
    _loadPromise = Promise.all([
      import('./michiganLocal'),
      import('./michiganCounties'),
    ]).then(([mod, countiesMod]) => {
      _countyOfficials = mod.MI_COUNTY_OFFICIALS
      _cityOfficials = mod.MI_CITY_OFFICIALS
      _allCounties = countiesMod.default
      return { MI_COUNTY_OFFICIALS: _countyOfficials, MI_CITY_OFFICIALS: _cityOfficials, MI_COUNTIES: _allCounties }
    })
  }
  return _loadPromise
}
