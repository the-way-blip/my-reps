import { useState, useCallback } from 'react'
import { SCORECARD_ISSUES, gradeColor } from '../../data/foundingValues'

const GRADE_HEX = {
  A: '#22c55e', B: '#84cc16', C: '#eab308', D: '#f97316', F: '#ef4444',
}

function drawScorecard(canvas, member, alignment, photoUrl) {
  const ctx = canvas.getContext('2d')
  const W = 600, H = 400
  canvas.width = W
  canvas.height = H

  // Background
  ctx.fillStyle = '#0f172a'
  ctx.fillRect(0, 0, W, H)

  // Header bar
  ctx.fillStyle = '#1e293b'
  ctx.fillRect(0, 0, W, 80)

  // App name
  ctx.fillStyle = '#94a3b8'
  ctx.font = '600 13px system-ui, sans-serif'
  ctx.fillText('Of For & By The People — Scorecard', 20, 30)

  // Member name
  ctx.fillStyle = '#f8fafc'
  ctx.font = '700 22px system-ui, sans-serif'
  ctx.fillText(member.name, 20, 60)

  // Party + role
  ctx.fillStyle = '#94a3b8'
  ctx.font = '400 13px system-ui, sans-serif'
  const role = member.district ? `District ${member.district} — House` : 'U.S. Senator'
  const partyText = member.partyName || member.party || ''
  ctx.fillText(`${partyText} · ${role} · ${member.state}`, 20, 75)

  // Overall grade circle
  const overallColor = GRADE_HEX[alignment.overall] || '#64748b'
  ctx.beginPath()
  ctx.arc(540, 48, 28, 0, Math.PI * 2)
  ctx.fillStyle = overallColor
  ctx.fill()
  ctx.fillStyle = '#fff'
  ctx.font = '800 24px system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(alignment.overall, 540, 57)
  ctx.textAlign = 'left'

  // Overall label
  const overallLabel = alignment.overall === 'A' ? 'Strongly Aligned'
    : alignment.overall === 'B' ? 'Mostly Aligned'
    : alignment.overall === 'C' ? 'Mixed Record'
    : alignment.overall === 'D' ? 'Mostly Opposed'
    : 'Strongly Opposed'
  ctx.fillStyle = '#94a3b8'
  ctx.font = '500 10px system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(overallLabel, 540, 80)
  ctx.textAlign = 'left'

  // Issue grades grid (2 columns, 3 rows)
  const startY = 105
  const colW = 280
  SCORECARD_ISSUES.forEach((issue, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const x = 20 + col * colW
    const y = startY + row * 80

    // Card bg
    ctx.fillStyle = '#1e293b'
    const cardW = 260, cardH = 65
    ctx.beginPath()
    ctx.roundRect(x, y, cardW, cardH, 8)
    ctx.fill()

    // Grade badge
    const grade = alignment[issue.id] || '?'
    const gColor = GRADE_HEX[grade] || '#64748b'
    ctx.beginPath()
    ctx.roundRect(x + 12, y + 14, 36, 36, 6)
    ctx.fillStyle = gColor
    ctx.fill()
    ctx.fillStyle = '#fff'
    ctx.font = '800 18px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(grade, x + 30, y + 38)
    ctx.textAlign = 'left'

    // Issue label
    ctx.fillStyle = '#f8fafc'
    ctx.font = '600 14px system-ui, sans-serif'
    ctx.fillText(issue.label, x + 60, y + 30)

    // Short description
    ctx.fillStyle = '#94a3b8'
    ctx.font = '400 11px system-ui, sans-serif'
    ctx.fillText(issue.shortLabel, x + 60, y + 46)
  })

  // Sources footer
  ctx.fillStyle = '#475569'
  ctx.font = '400 10px system-ui, sans-serif'
  const sources = (alignment.sources || []).join('  ·  ')
  ctx.fillText(sources, 20, H - 20)

  // Branding
  ctx.fillStyle = '#475569'
  ctx.textAlign = 'right'
  ctx.fillText('buildmyballot.com', W - 20, H - 20)
  ctx.textAlign = 'left'
}

export default function ScorecardShare({ member, alignment }) {
  const [generating, setGenerating] = useState(false)

  const handleShare = useCallback(async () => {
    setGenerating(true)
    try {
      const canvas = document.createElement('canvas')
      drawScorecard(canvas, member, alignment)

      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'))
      const file = new File([blob], `${member.name.replace(/[^a-zA-Z]/g, '_')}_scorecard.png`, { type: 'image/png' })

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: `${member.name} — Constitutional Scorecard`,
          text: `${member.name} received an overall grade of ${alignment.overall} on constitutional & Christian values.`,
          files: [file],
        })
      } else {
        // Fallback: download the image
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = file.name
        a.click()
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      if (err.name !== 'AbortError') console.error('Share failed:', err)
    } finally {
      setGenerating(false)
    }
  }, [member, alignment])

  return (
    <button
      className="scorecard-share-btn"
      onClick={handleShare}
      disabled={generating}
      aria-label="Share scorecard as image"
    >
      {generating ? 'Creating…' : 'Share Scorecard'}
    </button>
  )
}
