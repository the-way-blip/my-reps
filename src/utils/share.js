export async function shareEntity({ title, text, url }) {
  const data = { title, text, url: url || window.location.href }
  if (navigator.share) {
    try {
      await navigator.share(data)
      return 'shared'
    } catch (e) {
      if (e.name === 'AbortError') return 'cancelled'
    }
  }
  // Fallback: copy to clipboard
  try {
    await navigator.clipboard.writeText(`${data.title}\n${data.text}\n${data.url}`)
    return 'copied'
  } catch {
    return 'failed'
  }
}
