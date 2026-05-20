import { useEffect } from 'react'

const BASE = 'Of For & By The People'
const DEFAULT_DESCRIPTION =
  'Walk into the voting booth prepared. Research every race on your ballot and build a personalized plan before election day.'

function setMetaTag(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (el) {
    el.setAttribute('content', content)
  }
}

export default function usePageTitle(page, description) {
  useEffect(() => {
    const title = page ? `${page} | ${BASE}` : `${BASE} — Know Your Representatives`
    const desc = description || DEFAULT_DESCRIPTION

    document.title = title
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', desc)
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', desc)
    setMetaTag('name', 'description', desc)
  }, [page, description])
}
