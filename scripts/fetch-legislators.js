#!/usr/bin/env node
/**
 * Fetches all state legislators from OpenStates GraphQL API and saves as static JSON.
 * Run: node scripts/fetch-legislators.js
 *
 * Uses the GraphQL endpoint which has separate rate limits from the REST API.
 * Output: src/data/stateLegislators.json
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT = path.join(__dirname, '..', 'src', 'data', 'stateLegislators.json')

// Load API key from .env file
const envPath = path.join(__dirname, '..', '.env')
const envContent = fs.readFileSync(envPath, 'utf-8')
const API_KEY = envContent.match(/VITE_OPENSTATES_API_KEY=(.+)/)?.[1]?.trim()

if (!API_KEY) {
  console.error('Missing VITE_OPENSTATES_API_KEY in .env')
  process.exit(1)
}

const GRAPHQL_URL = 'https://openstates.org/graphql'

const STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
]

const STATE_ABBREVS = {
  'Alabama':'al','Alaska':'ak','Arizona':'az','Arkansas':'ar','California':'ca',
  'Colorado':'co','Connecticut':'ct','Delaware':'de','Florida':'fl','Georgia':'ga',
  'Hawaii':'hi','Idaho':'id','Illinois':'il','Indiana':'in','Iowa':'ia',
  'Kansas':'ks','Kentucky':'ky','Louisiana':'la','Maine':'me','Maryland':'md',
  'Massachusetts':'ma','Michigan':'mi','Minnesota':'mn','Mississippi':'ms',
  'Missouri':'mo','Montana':'mt','Nebraska':'ne','Nevada':'nv','New Hampshire':'nh',
  'New Jersey':'nj','New Mexico':'nm','New York':'ny','North Carolina':'nc',
  'North Dakota':'nd','Ohio':'oh','Oklahoma':'ok','Oregon':'or','Pennsylvania':'pa',
  'Rhode Island':'ri','South Carolina':'sc','South Dakota':'sd','Tennessee':'tn',
  'Texas':'tx','Utah':'ut','Vermont':'vt','Virginia':'va','Washington':'wa',
  'West Virginia':'wv','Wisconsin':'wi','Wyoming':'wy',
}

async function graphqlFetch(query) {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY,
    },
    body: JSON.stringify({ query }),
  })

  if (res.status === 429) {
    console.error('  Rate limited! Waiting 60s...')
    await sleep(60000)
    return graphqlFetch(query)
  }

  // Handle redirects (openstates.org sometimes 307s)
  if (res.status === 307) {
    const location = res.headers.get('location')
    const res2 = await fetch(location, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY,
      },
      body: JSON.stringify({ query }),
    })
    if (!res2.ok) throw new Error(`GraphQL ${res2.status}: ${await res2.text()}`)
    return res2.json()
  }

  if (!res.ok) throw new Error(`GraphQL ${res.status}: ${(await res.text()).slice(0, 200)}`)
  return res.json()
}

// Step 1: Get org IDs for upper and lower chambers
async function getOrgIds(stateName) {
  const query = `{
    jurisdiction(name: "${stateName}") {
      organizations(classification: "upper", first: 1) {
        edges { node { id name } }
      }
    }
  }`
  const query2 = `{
    jurisdiction(name: "${stateName}") {
      organizations(classification: "lower", first: 1) {
        edges { node { id name } }
      }
    }
  }`

  const [upperRes, lowerRes] = await Promise.all([
    graphqlFetch(query),
    graphqlFetch(query2),
  ])

  const upperOrg = upperRes.data?.jurisdiction?.organizations?.edges?.[0]?.node
  const lowerOrg = lowerRes.data?.jurisdiction?.organizations?.edges?.[0]?.node

  return { upperOrg, lowerOrg }
}

// Step 2: Fetch all people for an org, paginating via cursor
async function fetchPeopleForOrg(orgId, orgClassification) {
  const allPeople = []
  let cursor = null

  while (true) {
    const afterClause = cursor ? `, after: "${cursor}"` : ''
    const query = `{
      people(memberOf: "${orgId}", first: 100${afterClause}) {
        edges {
          cursor
          node {
            id
            name
            image
            primaryParty
            email
            currentMemberships {
              organization { classification name }
              post { label }
            }
            links { url }
            sources { url }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }`

    const res = await graphqlFetch(query)
    const edges = res.data?.people?.edges || []
    const pageInfo = res.data?.people?.pageInfo

    for (const edge of edges) {
      const p = edge.node
      // Find the district from the chamber membership
      const chamberMembership = p.currentMemberships?.find(
        m => m.organization?.classification === orgClassification
      )
      const district = chamberMembership?.post?.label || ''

      allPeople.push({
        id: p.id,
        name: p.name,
        photoUrl: p.image || null,
        party: p.primaryParty || 'Unknown',
        chamber: orgClassification === 'upper' ? 'State Senate' : 'State House',
        district,
        state: '',  // filled in later
        contacts: {
          email: p.email || null,
          links: (p.links || []).map(l => l.url),
          offices: [],
        },
        source: 'openstates',
        sourceId: p.id,
      })
    }

    if (!pageInfo?.hasNextPage) break
    cursor = pageInfo.endCursor
  }

  return allPeople
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
  console.log(`Fetching legislators for ${STATES.length} states via GraphQL...`)
  console.log(`Output: ${OUTPUT}\n`)

  const data = {}
  let totalSenators = 0
  let totalReps = 0

  for (const stateName of STATES) {
    const abbrev = STATE_ABBREVS[stateName]
    process.stdout.write(`${abbrev.toUpperCase()}: `)

    try {
      const { upperOrg, lowerOrg } = await getOrgIds(stateName)

      let stateSenators = []
      let stateReps = []

      if (upperOrg) {
        stateSenators = await fetchPeopleForOrg(upperOrg.id, 'upper')
        stateSenators.forEach(s => { s.state = stateName })
      }
      if (lowerOrg) {
        stateReps = await fetchPeopleForOrg(lowerOrg.id, 'lower')
        stateReps.forEach(r => { r.state = stateName })
      }

      data[abbrev] = { stateSenators, stateReps }
      totalSenators += stateSenators.length
      totalReps += stateReps.length

      console.log(`${stateSenators.length} senators, ${stateReps.length} reps`)

      // Be nice to the API
      await sleep(300)
    } catch (err) {
      console.log(`ERROR: ${err.message}`)
      data[abbrev] = { stateSenators: [], stateReps: [] }
    }
  }

  const output = {
    _meta: {
      fetchedAt: new Date().toISOString(),
      stateCount: STATES.length,
      totalSenators,
      totalReps,
      totalLegislators: totalSenators + totalReps,
    },
    states: data,
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(output))

  const prettySize = (JSON.stringify(output).length / 1024).toFixed(0)

  console.log(`\nDone!`)
  console.log(`  ${totalSenators} senators + ${totalReps} reps = ${totalSenators + totalReps} total`)
  console.log(`  Output size: ~${prettySize} KB`)
  console.log(`  Saved to: ${OUTPUT}`)
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
