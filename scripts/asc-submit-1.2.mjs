// Submit version 1.2 (build 9) of Of For & By The People for App Store review.
import { readFileSync } from 'fs'
import { createSign } from 'crypto'
const KEY_ID = 'LBW9GHQKX7', ISSUER_ID = 'eac6d3b0-9d24-4876-a49e-2ca3b9b8c4f3', APP_ID = '6802903783'
const VERSION = '1.2', BUILD = '9'
const key = readFileSync(`${process.env.HOME}/.appstoreconnect/private_keys/AuthKey_${KEY_ID}.p8`, 'utf8')
function jwt() {
  const now = Math.floor(Date.now() / 1000)
  const b64 = o => Buffer.from(JSON.stringify(o)).toString('base64url')
  const h = b64({ alg: 'ES256', kid: KEY_ID, typ: 'JWT' }), p = b64({ iss: ISSUER_ID, iat: now, exp: now + 600, aud: 'appstoreconnect-v1' })
  return `${h}.${p}.${createSign('sha256').update(`${h}.${p}`).sign({ key, dsaEncoding: 'ieee-p1363' }, 'base64url')}`
}
async function asc(path, method = 'GET', body) {
  const r = await fetch(`https://api.appstoreconnect.apple.com${path}`, { method, headers: { Authorization: `Bearer ${jwt()}`, 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined })
  const t = await r.text(); let j = {}; try { j = JSON.parse(t) } catch { j = { raw: t } }
  return { status: r.status, ...j }
}
const sleep = ms => new Promise(r => setTimeout(r, ms))

// 1. wait for build 9
let build
for (let i = 0; i < 40; i++) {
  const b = await asc(`/v1/builds?filter[app]=${APP_ID}&filter[version]=${BUILD}&limit=1`)
  build = b.data?.[0]
  console.log(`build ${BUILD}: ${build ? build.attributes.processingState : 'not visible yet'} (${i + 1}/40)`)
  if (build?.attributes.processingState === 'VALID') break
  await sleep(20000)
}
if (build?.attributes.processingState !== 'VALID') { console.error('build not processed'); process.exit(1) }
// 2. export compliance
const comp = await asc(`/v1/builds/${build.id}`, 'PATCH', { data: { type: 'builds', id: build.id, attributes: { usesNonExemptEncryption: false } } })
console.log('export compliance:', comp.status)
// 3. find or create version 1.2
let ver = (await asc(`/v1/apps/${APP_ID}/appStoreVersions?filter[versionString]=${VERSION}&filter[platform]=IOS`)).data?.[0]
if (!ver) {
  const c = await asc('/v1/appStoreVersions', 'POST', { data: { type: 'appStoreVersions', attributes: { platform: 'IOS', versionString: VERSION, releaseType: 'AFTER_APPROVAL' }, relationships: { app: { data: { type: 'apps', id: APP_ID } } } } })
  console.log('create version:', c.status, c.errors ? JSON.stringify(c.errors) : '')
  ver = c.data
}
console.log('version', VERSION, ver.id, ver.attributes.appStoreState)
// 4. attach build
const att = await asc(`/v1/appStoreVersions/${ver.id}/relationships/build`, 'PATCH', { data: { type: 'builds', id: build.id } })
console.log('attach build:', att.status, att.errors ? JSON.stringify(att.errors) : '')
// 5. what's new
const locs = await asc(`/v1/appStoreVersions/${ver.id}/appStoreVersionLocalizations`)
const whatsNew = `Indiana is here, plus election-week fixes:
• Full Indiana ballots for all 92 counties — U.S. House, statewide offices, state legislature, county, township, town and school board races, plus Public Questions 1 and 2 and judge retention questions, from the Indiana Election Division.
• Candidate grades for Indiana's statewide, U.S. House and state legislative races.
• Address search now finds Michigan and Indiana addresses as you type.
• Ballot grouped into Federal, Statewide, Legislature, County, Township, City and School sections.
• Fixed address lookup inside the app, larger and easier-to-read candidate text, and header spacing on newer iPhones.`
for (const l of locs.data || []) {
  const u = await asc(`/v1/appStoreVersionLocalizations/${l.id}`, 'PATCH', { data: { type: 'appStoreVersionLocalizations', id: l.id, attributes: { whatsNew } } })
  console.log('whatsNew', l.attributes.locale, u.status, u.errors ? JSON.stringify(u.errors) : '')
}
// 6. review details (demo account)
const notes = `Demo account: review@offorandbythepeople.com / AppleReview2026!
Account deletion: Settings (gear icon) → Account → Delete Account, or Profile → Data & Privacy → Delete Account.
No sign-in is needed to build a ballot: tap Ballot and enter any Michigan or Indiana address (e.g. 211 S Williams St, Royal Oak, MI 48067 or 30 W Main St, Carmel, IN 46032). Ballot data loads from www.offorandbythepeople.com/data/.`
// copy the reviewer contact info from the approved 1.0 version rather than inventing it
const prevVer = (await asc(`/v1/apps/${APP_ID}/appStoreVersions?filter[versionString]=1.0&filter[platform]=IOS`)).data?.[0]
const prevRd = prevVer ? (await asc(`/v1/appStoreVersions/${prevVer.id}/appStoreReviewDetail`)).data : null
const contact = prevRd ? { contactFirstName: prevRd.attributes.contactFirstName, contactLastName: prevRd.attributes.contactLastName, contactEmail: prevRd.attributes.contactEmail, contactPhone: prevRd.attributes.contactPhone } : {}
console.log('prior contact found:', !!prevRd)
let rd = (await asc(`/v1/appStoreVersions/${ver.id}/appStoreReviewDetail`)).data
if (rd) {
  const u = await asc(`/v1/appStoreReviewDetails/${rd.id}`, 'PATCH', { data: { type: 'appStoreReviewDetails', id: rd.id, attributes: { demoAccountName: 'review@offorandbythepeople.com', demoAccountPassword: 'AppleReview2026!', demoAccountRequired: true, notes, ...contact } } })
  console.log('review details update:', u.status, u.errors ? JSON.stringify(u.errors) : '')
} else {
  const c = await asc('/v1/appStoreReviewDetails', 'POST', { data: { type: 'appStoreReviewDetails', attributes: { demoAccountName: 'review@offorandbythepeople.com', demoAccountPassword: 'AppleReview2026!', demoAccountRequired: true, notes, ...contact }, relationships: { appStoreVersion: { data: { type: 'appStoreVersions', id: ver.id } } } } })
  console.log('review details create:', c.status, c.errors ? JSON.stringify(c.errors) : '')
}
// 7. review submission
let sub = (await asc(`/v1/reviewSubmissions?filter[app]=${APP_ID}&filter[state]=READY_FOR_REVIEW`)).data?.[0]
if (!sub) {
  const c = await asc('/v1/reviewSubmissions', 'POST', { data: { type: 'reviewSubmissions', attributes: { platform: 'IOS' }, relationships: { app: { data: { type: 'apps', id: APP_ID } } } } })
  console.log('create submission:', c.status, c.errors ? JSON.stringify(c.errors) : '')
  sub = c.data
}
const items = await asc(`/v1/reviewSubmissions/${sub.id}/items`)
if (!(items.data || []).length) {
  const it = await asc('/v1/reviewSubmissionItems', 'POST', { data: { type: 'reviewSubmissionItems', relationships: { reviewSubmission: { data: { type: 'reviewSubmissions', id: sub.id } }, appStoreVersion: { data: { type: 'appStoreVersions', id: ver.id } } } } })
  console.log('add item:', it.status, it.errors ? JSON.stringify(it.errors) : '')
}
const go = await asc(`/v1/reviewSubmissions/${sub.id}`, 'PATCH', { data: { type: 'reviewSubmissions', id: sub.id, attributes: { submitted: true } } })
console.log('SUBMIT:', go.status, go.data?.attributes?.state, go.errors ? JSON.stringify(go.errors) : '')
