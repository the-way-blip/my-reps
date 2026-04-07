import { useState, useEffect } from 'react'
import { FOUNDERS_QUOTES } from '../../data/foundingValues'

export default function FounderQuoteBanner({ className = '', quotes }) {
  const pool = quotes || FOUNDERS_QUOTES
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * pool.length)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % pool.length)
    }, 30000)
    return () => clearInterval(timer)
  }, [pool.length])

  const quote = pool[index]

  return (
    <div className={`founder-quote-banner ${className}`}>
      <blockquote className="fqb-text">"{quote.quote}"</blockquote>
      <cite className="fqb-author">— {quote.author}</cite>
    </div>
  )
}
