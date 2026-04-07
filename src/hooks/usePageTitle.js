import { useEffect } from 'react'

const BASE = 'MyReps'
const DEFAULT_DESCRIPTION =
  'Your guide to federal, state, and local representatives. Track elections, plan your ballot, and hold officials accountable.'

function setMetaTag(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (el) {
    el.setAttribute('content', content)
  }
}

export default function usePageTitle(page, description) {
  useEffect(() => {
    const title = page ? `${page} | ${BASE}` : `${BASE} — Know Your Government Representatives`
    const desc = description || DEFAULT_DESCRIPTION

    document.title = title
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', desc)
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', desc)
    setMetaTag('name', 'description', desc)
  }, [page, description])
}
