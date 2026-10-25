// App Store Connect status check for Of For & By The People (app 6802903783).
// Uses the API key at ~/.appstoreconnect/private_keys/AuthKey_LBW9GHQKX7.p8 (never print it).
import { readFileSync } from 'fs'
import { createSign } from 'crypto'
const KEY_ID = 'LBW9GHQKX7', ISSUER_ID = 'eac6d3b0-9d24-4876-a49e-2ca3b9b8c4f3', APP_ID = '6802903783'
const key = readFileSync(`${process.env.HOME}/.appstoreconnect/private_keys/AuthKey_${KEY_ID}.p8`, 'utf8')
const now = Math.floor(Date.now() / 1000)
const b64 = o => Buffer.from(JSON.stringify(o)).toString('base64url')
const h = b64({ alg: 'ES256', kid: KEY_ID, typ: 'JWT' }), p = b64({ iss: ISSUER_ID, iat: now, exp: now + 600, aud: 'appstoreconnect-v1' })
const token = `${h}.${p}.${createSign('sha256').update(`${h}.${p}`).sign({ key, dsaEncoding: 'ieee-p1363' }, 'base64url')}`
const asc = async path => (await fetch(`https://api.appstoreconnect.apple.com${path}`, { headers: { Authorization: `Bearer ${token}` } })).json()
const v = await asc(`/v1/apps/${APP_ID}/appStoreVersions?limit=3`)
for (const x of v.data || []) console.log(`version ${x.attributes.versionString}: ${x.attributes.appStoreState} / ${x.attributes.appVersionState || ''}`)
const s = await asc(`/v1/reviewSubmissions?filter[app]=${APP_ID}&limit=3`)
for (const x of s.data || []) console.log(`submission ${x.id.slice(0, 8)}: ${x.attributes.state} (${x.attributes.submittedDate || 'not submitted'})`)
const b = await asc(`/v1/builds?filter[app]=${APP_ID}&sort=-uploadedDate&limit=2`)
for (const x of b.data || []) console.log(`build ${x.attributes.version}: ${x.attributes.processingState} uploaded ${x.attributes.uploadedDate}`)
