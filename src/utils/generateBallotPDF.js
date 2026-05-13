import { jsPDF } from 'jspdf'

const GOLD = [201, 169, 110]      // #c9a96e
const NAVY = [0, 40, 104]         // #002868
const DARK = [30, 30, 30]
const GRAY = [120, 120, 120]
const LIGHT_GRAY = [220, 220, 220]
const WHITE = [255, 255, 255]
const GOLD_BG = [252, 247, 237]   // very light gold for selected rows
const PAGE_WIDTH = 210            // A4 mm
const MARGIN = 20
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2

/**
 * Generate a professional ballot plan PDF.
 *
 * @param {Object} options
 * @param {string} options.party - 'republican' | 'democratic'
 * @param {Array}  options.races - array of race objects from getPrimaryBallot
 * @param {Object} options.choices - { [raceId]: { name, description } }
 * @param {string} options.address - voter's address string
 */
export default function generateBallotPDF({ party, races, choices, address }) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  let y = MARGIN

  // ── Helper: check page break ──
  function checkPage(needed = 20) {
    if (y + needed > 280) {
      doc.addPage()
      y = MARGIN
      return true
    }
    return false
  }

  // ── Header band ──
  doc.setFillColor(...NAVY)
  doc.rect(0, 0, PAGE_WIDTH, 38, 'F')

  // Gold accent line
  doc.setFillColor(...GOLD)
  doc.rect(0, 38, PAGE_WIDTH, 2, 'F')

  // Title text
  doc.setTextColor(...WHITE)
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.text('My Ballot Plan', MARGIN, 16)

  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.text('Michigan August 2026 Primary', MARGIN, 24)

  // Party label on the right
  const partyLabel = party === 'republican' ? 'Republican Primary' : 'Democratic Primary'
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text(partyLabel, PAGE_WIDTH - MARGIN, 16, { align: 'right' })

  // Date on the right
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.text('August 4, 2026', PAGE_WIDTH - MARGIN, 24, { align: 'right' })

  y = 48

  // ── Address line ──
  if (address) {
    doc.setTextColor(...GRAY)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text('Voting Address:', MARGIN, y)
    doc.setTextColor(...DARK)
    doc.setFont('helvetica', 'bold')
    doc.text(address, MARGIN + 28, y)
    y += 8
  }

  // ── Summary stats ──
  const decidedCount = Object.keys(choices).filter(k => choices[k]?.name).length
  const totalRaces = races.length

  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...GRAY)
  doc.text(`${decidedCount} of ${totalRaces} races decided`, MARGIN, y)
  y += 4

  // Thin separator
  doc.setDrawColor(...LIGHT_GRAY)
  doc.setLineWidth(0.3)
  doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y)
  y += 8

  // ── Races ──
  // Group races by level
  const levelOrder = ['Federal', 'State', 'County', 'Local', 'Nonpartisan']
  const grouped = {}
  races.forEach(race => {
    const lvl = race.level || 'Other'
    if (!grouped[lvl]) grouped[lvl] = []
    grouped[lvl].push(race)
  })

  const orderedLevels = levelOrder.filter(l => grouped[l])
  // Add any levels not in the predefined order
  Object.keys(grouped).forEach(l => {
    if (!orderedLevels.includes(l)) orderedLevels.push(l)
  })

  orderedLevels.forEach(level => {
    checkPage(25)

    // Section header
    doc.setFillColor(...NAVY)
    doc.roundedRect(MARGIN, y, CONTENT_WIDTH, 8, 1, 1, 'F')
    doc.setTextColor(...WHITE)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(level.toUpperCase() + ' RACES', MARGIN + 4, y + 5.5)
    y += 12

    grouped[level].forEach((race, raceIdx) => {
      checkPage(22)

      const choice = choices[race.id]
      const hasChoice = choice && choice.name

      // Race office name
      doc.setTextColor(...DARK)
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.text(race.office, MARGIN, y)
      y += 5

      // Description if present
      if (race.description) {
        doc.setTextColor(...GRAY)
        doc.setFontSize(8)
        doc.setFont('helvetica', 'italic')
        const descLines = doc.splitTextToSize(race.description, CONTENT_WIDTH)
        doc.text(descLines, MARGIN, y)
        y += descLines.length * 3.5
        y += 1
      }

      // Candidates
      if (race.candidates && race.candidates.length > 0) {
        race.candidates.forEach(candidate => {
          checkPage(8)
          const isSelected = hasChoice && choice.name === candidate.name

          if (isSelected) {
            // Highlighted row
            doc.setFillColor(...GOLD_BG)
            doc.roundedRect(MARGIN, y - 3, CONTENT_WIDTH, 7, 1, 1, 'F')

            // Gold check circle
            doc.setFillColor(...GOLD)
            doc.circle(MARGIN + 3, y, 2, 'F')
            doc.setTextColor(...WHITE)
            doc.setFontSize(7)
            doc.setFont('helvetica', 'bold')
            doc.text('✓', MARGIN + 1.7, y + 1)

            // Candidate name in bold
            doc.setTextColor(...DARK)
            doc.setFontSize(9)
            doc.setFont('helvetica', 'bold')
            doc.text(candidate.name, MARGIN + 8, y + 0.5)

            // YOUR CHOICE label
            doc.setFillColor(...GOLD)
            const nameWidth = doc.getTextWidth(candidate.name)
            const labelX = MARGIN + 8 + nameWidth + 3
            doc.roundedRect(labelX, y - 2.5, 19, 5, 1, 1, 'F')
            doc.setTextColor(...WHITE)
            doc.setFontSize(6)
            doc.setFont('helvetica', 'bold')
            doc.text('YOUR CHOICE', labelX + 1.5, y + 1)
          } else {
            // Empty radio circle
            doc.setDrawColor(...LIGHT_GRAY)
            doc.setLineWidth(0.3)
            doc.circle(MARGIN + 3, y, 2)

            // Candidate name
            doc.setTextColor(...DARK)
            doc.setFontSize(9)
            doc.setFont('helvetica', 'normal')
            doc.text(candidate.name, MARGIN + 8, y + 0.5)
          }

          // Candidate description to the right
          if (candidate.description) {
            const candNameWidth = doc.getTextWidth(candidate.name)
            let descX = MARGIN + 8 + candNameWidth + 3
            if (isSelected) descX += 22 // account for YOUR CHOICE label
            const maxDescWidth = PAGE_WIDTH - MARGIN - descX
            if (maxDescWidth > 15) {
              doc.setTextColor(...GRAY)
              doc.setFontSize(7)
              doc.setFont('helvetica', 'normal')
              const truncated = candidate.description.length > 50
                ? candidate.description.substring(0, 47) + '...'
                : candidate.description
              doc.text(truncated, descX, y + 0.5)
            }
          }

          y += 6
        })
      }

      // Write-in choice (not in candidate list)
      if (hasChoice && !race.candidates?.find(c => c.name === choice.name)) {
        checkPage(8)
        doc.setFillColor(...GOLD_BG)
        doc.roundedRect(MARGIN, y - 3, CONTENT_WIDTH, 7, 1, 1, 'F')
        doc.setFillColor(...GOLD)
        doc.circle(MARGIN + 3, y, 2, 'F')
        doc.setTextColor(...WHITE)
        doc.setFontSize(7)
        doc.setFont('helvetica', 'bold')
        doc.text('✓', MARGIN + 1.7, y + 1)
        doc.setTextColor(...DARK)
        doc.setFontSize(9)
        doc.setFont('helvetica', 'bold')
        doc.text(choice.name + ' (Write-in)', MARGIN + 8, y + 0.5)

        const wiNameWidth = doc.getTextWidth(choice.name + ' (Write-in)')
        const wiLabelX = MARGIN + 8 + wiNameWidth + 3
        doc.setFillColor(...GOLD)
        doc.roundedRect(wiLabelX, y - 2.5, 19, 5, 1, 1, 'F')
        doc.setTextColor(...WHITE)
        doc.setFontSize(6)
        doc.setFont('helvetica', 'bold')
        doc.text('YOUR CHOICE', wiLabelX + 1.5, y + 1)

        y += 6
      }

      // No choice made indicator
      if (!hasChoice && race.candidates && race.candidates.length > 0) {
        doc.setTextColor(180, 140, 60)
        doc.setFontSize(7)
        doc.setFont('helvetica', 'italic')
        doc.text('No selection made', MARGIN + 8, y + 0.5)
        y += 5
      }

      // No candidates available
      if (!race.candidates || race.candidates.length === 0) {
        doc.setTextColor(...GRAY)
        doc.setFontSize(8)
        doc.setFont('helvetica', 'italic')
        doc.text('Candidate filings not yet available', MARGIN + 4, y + 0.5)
        y += 5
      }

      // Separator between races
      if (raceIdx < grouped[level].length - 1) {
        y += 2
        doc.setDrawColor(...LIGHT_GRAY)
        doc.setLineWidth(0.15)
        doc.line(MARGIN + 4, y, PAGE_WIDTH - MARGIN - 4, y)
        y += 4
      } else {
        y += 6
      }
    })
  })

  // ── Footer ──
  checkPage(20)
  y += 4

  // Gold accent line
  doc.setFillColor(...GOLD)
  doc.rect(MARGIN, y, CONTENT_WIDTH, 0.8, 'F')
  y += 6

  doc.setTextColor(...GRAY)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('Created with MyReps — myrepsapp.com', MARGIN, y)

  const now = new Date()
  const dateStr = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  doc.text(`Generated on ${dateStr}`, PAGE_WIDTH - MARGIN, y, { align: 'right' })

  y += 5
  doc.setFontSize(7)
  doc.text(
    'Candidate data is sourced from public filings and may change before election day.',
    MARGIN,
    y
  )

  // Add page numbers to all pages
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setTextColor(...GRAY)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'normal')
    doc.text(`Page ${i} of ${pageCount}`, PAGE_WIDTH / 2, 290, { align: 'center' })
  }

  // Save
  doc.save('MyBallotPlan-Michigan-2026.pdf')
}
