// Replace build 9 with build 10 on version 1.2 of Of For & By The People and resubmit for App Store review.
// Version 1.2 is unreleased (WAITING_FOR_REVIEW), so its train is still open; withdraw the pending
// submission, attach the new build, refresh What's New + reviewer notes, submit again.
import { readFileSync } from 'fs'
import { createSign } from 'crypto'
const KEY_ID = 'LBW9GHQKX7', ISSUER_ID = 'eac6d3b0-9d24-4876-a49e-2ca3b9b8c4f3', APP_ID = '6802903783'
const VERSION = '1.2', BUILD = '10'
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
const err = r => (r.errors ? ' ' + JSON.stringify(r.errors.map(e => e.detail || e.title)) : '')

// 1. wait for build 10 to finish processing
let build
for (let i = 0; i < 60; i++) {
  const b = await asc(`/v1/builds?filter[app]=${APP_ID}&filter[version]=${BUILD}&limit=1`)
  build = b.data?.[0]
  console.log(`build ${BUILD}: ${build ? build.attributes.processingState : 'not visible yet'} (${i + 1}/60)`)
  if (build?.attributes.processingState === 'VALID') break
  await sleep(20000)
}
if (build?.attributes.processingState !== 'VALID') { console.error('build not processed'); process.exit(1) }
const comp = await asc(`/v1/builds/${build.id}`, 'PATCH', { data: { type: 'builds', id: build.id, attributes: { usesNonExemptEncryption: false } } })
console.log('export compliance:', comp.status + err(comp))

// 2. withdraw any pending submission so the version becomes editable again
for (const state of ['WAITING_FOR_REVIEW', 'IN_REVIEW', 'READY_FOR_REVIEW']) {
  for (const s of (await asc(`/v1/reviewSubmissions?filter[app]=${APP_ID}&filter[state]=${state}`)).data || []) {
    const c = await asc(`/v1/reviewSubmissions/${s.id}`, 'PATCH', { data: { type: 'reviewSubmissions', id: s.id, attributes: { canceled: true } } })
    console.log(`cancel submission ${s.id} (${state}):`, c.status + err(c))
  }
}
for (let i = 0; i < 15; i++) {
  const v = (await asc(`/v1/apps/${APP_ID}/appStoreVersions?filter[versionString]=${VERSION}&filter[platform]=IOS`)).data?.[0]
  console.log('version state:', v?.attributes.appStoreState)
  if (v && !/WAITING_FOR_REVIEW|IN_REVIEW/.test(v.attributes.appStoreState)) break
  await sleep(10000)
}

// 3. attach build 10 to version 1.2
const ver = (await asc(`/v1/apps/${APP_ID}/appStoreVersions?filter[versionString]=${VERSION}&filter[platform]=IOS`)).data?.[0]
if (!ver) { console.error('version 1.2 not found'); process.exit(1) }
const att = await asc(`/v1/appStoreVersions/${ver.id}/relationships/build`, 'PATCH', { data: { type: 'builds', id: build.id } })
console.log('attach build:', att.status + err(att))

// 4. What's New
const whatsNew = `Six states, plus election-week fixes:
• Ballots for Michigan, Indiana, Iowa, Wisconsin, Minnesota and Ohio — federal, statewide, legislative, county, township, city and school board races, constitutional amendments and local questions, from each state's official election source.
• Candidate grades for every state, each with the evidence behind it. Grades that rest mostly on a candidate's party are labeled so you can see where the record is thin.
• Where to Vote now shows your polling place, early-voting sites and ballot drop boxes where they're published.
• Address search finds addresses in all six states as you type, and lookups keep working when the Census geocoder is down.`
for (const l of (await asc(`/v1/appStoreVersions/${ver.id}/appStoreVersionLocalizations`)).data || []) {
  const u = await asc(`/v1/appStoreVersionLocalizations/${l.id}`, 'PATCH', { data: { type: 'appStoreVersionLocalizations', id: l.id, attributes: { whatsNew } } })
  console.log('whatsNew', l.attributes.locale, u.status + err(u))
}

// 5. reviewer notes (demo account + contact already on the version from 1.2's first submission; only refresh the notes)
const rd = (await asc(`/v1/appStoreVersions/${ver.id}/appStoreReviewDetail`)).data
if (rd) {
  const notes = `Account deletion: Settings (gear icon) → Account → Delete Account, or Profile → Data & Privacy → Delete Account.
No sign-in is needed to build a ballot: tap Ballot and enter any address in Michigan, Indiana, Iowa, Wisconsin, Minnesota or Ohio (e.g. 211 S Williams St, Royal Oak, MI 48067 or 1 W Broad St, Columbus, OH 43215). Ballot data loads from www.offorandbythepeople.com/data/.`
  const u = await asc(`/v1/appStoreReviewDetails/${rd.id}`, 'PATCH', { data: { type: 'appStoreReviewDetails', id: rd.id, attributes: { notes } } })
  console.log('review notes:', u.status + err(u))
}

// 6. new review submission
const c = await asc('/v1/reviewSubmissions', 'POST', { data: { type: 'reviewSubmissions', attributes: { platform: 'IOS' }, relationships: { app: { data: { type: 'apps', id: APP_ID } } } } })
console.log('create submission:', c.status + err(c))
const sub = c.data || (await asc(`/v1/reviewSubmissions?filter[app]=${APP_ID}&filter[state]=READY_FOR_REVIEW`)).data?.[0]
const items = (await asc(`/v1/reviewSubmissions/${sub.id}/items`)).data || []
if (!items.length) {
  const it = await asc('/v1/reviewSubmissionItems', 'POST', { data: { type: 'reviewSubmissionItems', relationships: { reviewSubmission: { data: { type: 'reviewSubmissions', id: sub.id } }, appStoreVersion: { data: { type: 'appStoreVersions', id: ver.id } } } } })
  console.log('add item:', it.status + err(it))
}
const done = await asc(`/v1/reviewSubmissions/${sub.id}`, 'PATCH', { data: { type: 'reviewSubmissions', id: sub.id, attributes: { submitted: true } } })
console.log('submit:', done.status + err(done), done.data?.attributes?.state)
