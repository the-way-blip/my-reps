import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { geoAlbersUsa, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import { STATE_BY_NAME } from '../data/states'
import { getDistrictsForState, getStateSenateDistricts, getStateHouseDistricts } from '../services/districtService'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'
const W = 960
const H = 600

const projection = geoAlbersUsa().scale(1300).translate([W / 2, H / 2])
const pathGen = geoPath().projection(projection)

/* ── Color schemes per district layer ── */

const LAYER_COLORS = {
  congressional: {
    base: '#93bbf0',
    hover: '#3b82f6',
    label: 'Congressional District',
  },
  stateSenate: {
    base: '#86d8a0',
    hover: '#16a34a',
    label: 'State Senate District',
  },
  stateHouse: {
    base: '#c4a5e0',
    hover: '#9333ea',
    label: 'State House District',
  },
}

function layerFillColor(layer, isHovered) {
  const scheme = LAYER_COLORS[layer] || LAYER_COLORS.congressional
  return isHovered ? scheme.hover : scheme.base
}

function partyColor(partyName) {
  if (!partyName) return '#94a3b8'
  const p = partyName.toLowerCase()
  if (p.includes('democrat')) return '#93bbf0'
  if (p.includes('republican')) return '#f0a0a0'
  return '#a0d8a0'
}

function partyColorHover(partyName) {
  if (!partyName) return '#64748b'
  const p = partyName.toLowerCase()
  if (p.includes('democrat')) return '#3b82f6'
  if (p.includes('republican')) return '#ef4444'
  return '#22c55e'
}

function computeZoom(geo) {
  const bounds = pathGen.bounds(geo)
  const [[x0, y0], [x1, y1]] = bounds
  const bw = x1 - x0
  const bh = y1 - y0
  const cx = (x0 + x1) / 2
  const cy = (y0 + y1) / 2
  const scale = Math.min(8, 0.85 / Math.max(bw / W, bh / H))
  const tx = W / 2 - scale * cx
  const ty = H / 2 - scale * cy
  return { x: tx, y: ty, scale }
}

const IDENTITY = { x: 0, y: 0, scale: 1 }
const MIN_ZOOM = 1
const MAX_ZOOM = 8

const LAYER_OPTIONS = [
  { key: 'congressional', label: 'Congressional' },
  { key: 'stateSenate', label: 'State Senate' },
  { key: 'stateHouse', label: 'State House' },
]

export default function StateMap({
  selectedState,
  onStateSelect,
  reps = [],
  highlightDistrict = null,
  onDistrictClick,
  onDistrictHover,
  districtLayer: externalLayer,
  onDistrictLayerChange,
}) {
  const [stateFeatures, setStateFeatures] = useState([])
  const [districtFeatures, setDistrictFeatures] = useState([])
  const [hovered, setHovered] = useState(null)
  const [hoveredDistrict, setHoveredDistrict] = useState(null)
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 })
  const [districtLoading, setDistrictLoading] = useState(false)
  const [districtError, setDistrictError] = useState(null)

  // Internal layer state; use external if provided, otherwise manage locally
  const [internalLayer, setInternalLayer] = useState('congressional')
  const districtLayer = externalLayer || internalLayer

  const setDistrictLayer = useCallback((layer) => {
    setInternalLayer(layer)
    if (onDistrictLayerChange) onDistrictLayerChange(layer)
  }, [onDistrictLayerChange])

  // Zoom/pan state
  const [transform, setTransform] = useState(IDENTITY)
  const [isPanning, setIsPanning] = useState(false)
  const panStart = useRef(null)
  const svgRef = useRef(null)
  const lastPinchDist = useRef(null)

  // Load state boundaries
  useEffect(() => {
    fetch(GEO_URL)
      .then(r => r.json())
      .then(us => setStateFeatures(feature(us, us.objects.states).features))
      .catch(console.error)
  }, [])

  // Load district boundaries when state or layer changes
  useEffect(() => {
    if (!selectedState) {
      setDistrictFeatures([])
      setDistrictError(null)
      return
    }

    const fetcher = districtLayer === 'stateSenate'
      ? getStateSenateDistricts
      : districtLayer === 'stateHouse'
        ? getStateHouseDistricts
        : getDistrictsForState

    setDistrictLoading(true)
    setDistrictError(null)

    fetcher(selectedState.code)
      .then(features => {
        setDistrictFeatures(features)
        setDistrictError(null)
      })
      .catch((err) => {
        console.error('Failed to load district data:', err)
        setDistrictError(`Could not load ${LAYER_COLORS[districtLayer]?.label || 'district'} data. TIGERweb may be unavailable.`)
        // Fall back to congressional if we failed on a legislative layer
        if (districtLayer !== 'congressional') {
          setDistrictLayer('congressional')
        } else {
          setDistrictFeatures([])
        }
      })
      .finally(() => setDistrictLoading(false))
  }, [selectedState, districtLayer, setDistrictLayer])

  // Auto-zoom to selected state
  useEffect(() => {
    if (!selectedState || stateFeatures.length === 0) {
      setTransform(IDENTITY)
      return
    }
    const geo = stateFeatures.find(f => f.properties.name === selectedState.name)
    if (geo) setTransform(computeZoom(geo))
  }, [selectedState, stateFeatures])

  // Attach wheel listener with { passive: false } so preventDefault works
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    function onWheel(e) {
      e.preventDefault()
      const rect = svg.getBoundingClientRect()
      const ptX = (e.clientX - rect.left) / rect.width * W
      const ptY = (e.clientY - rect.top) / rect.height * H
      const factor = e.deltaY < 0 ? 1.25 : 0.8
      setTransform(t => {
        const newScale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, t.scale * factor))
        const ratio = newScale / t.scale
        return {
          scale: newScale,
          x: ptX - ratio * (ptX - t.x),
          y: ptY - ratio * (ptY - t.y),
        }
      })
    }
    svg.addEventListener('wheel', onWheel, { passive: false })
    return () => svg.removeEventListener('wheel', onWheel)
  }, [])

  // Build a map: district number -> rep
  const districtToRep = useMemo(() => {
    const map = {}
    reps.forEach(r => {
      if (r.district != null) {
        const d = typeof r.district === 'string' ? parseInt(r.district, 10) : r.district
        map[d] = r
      }
    })
    return map
  }, [reps])

  // Determine fill color based on layer type and whether we have rep data
  const hasRepData = districtLayer === 'congressional' || reps.length > 0

  function getDistrictFill(distNum, rep, isHighlighted, isHovered) {
    if (hasRepData && rep) {
      const repParty = rep.partyName || rep.party
      return (isHighlighted || isHovered) ? partyColorHover(repParty) : partyColor(repParty)
    }
    // No rep data: use layer color scheme
    return layerFillColor(districtLayer, isHighlighted || isHovered)
  }

  function getStateColor(name) {
    if (name === selectedState?.name) return '#e2e8f0'
    if (name === hovered) return '#93c5fd'
    return '#cbd5e1'
  }

  // ── Zoom helpers ──
  function svgPoint(clientX, clientY) {
    const svg = svgRef.current
    if (!svg) return { x: 0, y: 0 }
    const rect = svg.getBoundingClientRect()
    return {
      x: (clientX - rect.left) / rect.width * W,
      y: (clientY - rect.top) / rect.height * H,
    }
  }

  function zoomAt(ptX, ptY, factor) {
    setTransform(t => {
      const newScale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, t.scale * factor))
      const ratio = newScale / t.scale
      return {
        scale: newScale,
        x: ptX - ratio * (ptX - t.x),
        y: ptY - ratio * (ptY - t.y),
      }
    })
  }

  function handlePointerDown(e) {
    if (e.pointerType === 'touch') return
    setIsPanning(true)
    panStart.current = { x: e.clientX, y: e.clientY, tx: transform.x, ty: transform.y }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function handlePointerMove(e) {
    if (!isPanning || !panStart.current) return
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const dx = (e.clientX - panStart.current.x) / rect.width * W
    const dy = (e.clientY - panStart.current.y) / rect.height * H
    setTransform(t => ({ ...t, x: panStart.current.tx + dx, y: panStart.current.ty + dy }))
  }

  function handlePointerUp() {
    setIsPanning(false)
    panStart.current = null
  }

  // Touch: pinch-to-zoom + one-finger pan
  function handleTouchStart(e) {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      lastPinchDist.current = Math.hypot(dx, dy)
    } else if (e.touches.length === 1) {
      panStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, tx: transform.x, ty: transform.y }
    }
  }

  function handleTouchMove(e) {
    if (e.touches.length === 2 && lastPinchDist.current) {
      e.preventDefault()
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const dist = Math.hypot(dx, dy)
      const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2
      const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2
      const pt = svgPoint(midX, midY)
      const factor = dist / lastPinchDist.current
      zoomAt(pt.x, pt.y, factor)
      lastPinchDist.current = dist
    } else if (e.touches.length === 1 && panStart.current) {
      const svg = svgRef.current
      if (!svg) return
      const rect = svg.getBoundingClientRect()
      const dx = (e.touches[0].clientX - panStart.current.x) / rect.width * W
      const dy = (e.touches[0].clientY - panStart.current.y) / rect.height * H
      setTransform(t => ({ ...t, x: panStart.current.tx + dx, y: panStart.current.ty + dy }))
    }
  }

  function handleTouchEnd() {
    lastPinchDist.current = null
    panStart.current = null
  }

  function resetZoom() {
    if (selectedState) {
      const geo = stateFeatures.find(f => f.properties.name === selectedState.name)
      if (geo) { setTransform(computeZoom(geo)); return }
    }
    setTransform(IDENTITY)
  }

  const transformStr = `translate(${transform.x},${transform.y}) scale(${transform.scale})`
  const isZoomed = transform.scale > 1.05

  const layerLabel = LAYER_COLORS[districtLayer]?.label || 'District'

  return (
    <div className="map-container">
      {/* District layer toggle -- only visible when a state is selected */}
      {selectedState && (
        <div className="map-layer-toggle">
          {LAYER_OPTIONS.map(opt => (
            <button
              key={opt.key}
              className={`map-layer-btn ${districtLayer === opt.key ? 'active' : ''}`}
              data-layer={opt.key}
              onClick={() => setDistrictLayer(opt.key)}
              disabled={districtLoading}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* Error banner */}
      {districtError && (
        <div className="map-error-banner" role="alert">
          {districtError}
        </div>
      )}

      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', height: 'auto', display: 'block', touchAction: 'none' }}
        role="img"
        aria-label={selectedState ? `Map of ${selectedState.name} ${layerLabel.toLowerCase()}s` : 'Interactive map of the United States'}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <g style={{ transition: isPanning ? 'none' : 'transform 0.35s ease' }} transform={transformStr}>
          {/* State boundaries */}
          {stateFeatures.map(geo => {
            const name = geo.properties.name
            const isSelected = name === selectedState?.name
            return (
              <path
                key={geo.id ?? name}
                d={pathGen(geo)}
                fill={getStateColor(name)}
                stroke="#ffffff"
                strokeWidth={(isSelected ? 1.5 : 0.8) / transform.scale}
                style={{ cursor: isPanning ? 'grabbing' : 'pointer', transition: 'fill 0.15s ease' }}
                onClick={() => {
                  if (isPanning) return
                  const state = STATE_BY_NAME[name]
                  if (state) onStateSelect(state)
                }}
                onMouseEnter={e => {
                  if (!isSelected) setHovered(name)
                  setTooltip({ visible: true, text: name, x: e.clientX, y: e.clientY })
                }}
                onMouseMove={e =>
                  setTooltip(t => ({ ...t, x: e.clientX, y: e.clientY }))
                }
                onMouseLeave={() => {
                  setHovered(null)
                  setTooltip(t => ({ ...t, visible: false }))
                }}
              />
            )
          })}

          {/* District overlays for selected state */}
          {selectedState && !districtLoading && districtFeatures.map(feat => {
            const distNum = feat.properties.district
            const rep = districtToRep[distNum]
            const isHighlighted = highlightDistrict === distNum
            const isHovered = hoveredDistrict === distNum
            const fill = getDistrictFill(distNum, rep, isHighlighted, isHovered)

            const d = pathGen(feat)
            if (!d) return null

            return (
              <path
                key={`dist-${districtLayer}-${distNum}`}
                d={d}
                fill={fill}
                stroke="#ffffff"
                strokeWidth={(isHighlighted ? 2.5 : 1) / transform.scale}
                fillOpacity={0.88}
                style={{ cursor: isPanning ? 'grabbing' : 'pointer', transition: 'fill 0.12s ease' }}
                onClick={e => {
                  if (isPanning) return
                  e.stopPropagation()
                  if (onDistrictClick) onDistrictClick(distNum, rep)
                }}
                onMouseEnter={e => {
                  setHoveredDistrict(distNum)
                  onDistrictHover?.(distNum)
                  const pName = rep?.partyName || rep?.party
                  const typeLabel = layerLabel
                  const text = rep
                    ? `${typeLabel} ${distNum} — ${rep.name} (${pName?.[0] || 'I'})`
                    : `${typeLabel} ${distNum}`
                  setTooltip({ visible: true, text, x: e.clientX, y: e.clientY })
                }}
                onMouseMove={e =>
                  setTooltip(t => ({ ...t, x: e.clientX, y: e.clientY }))
                }
                onMouseLeave={() => {
                  setHoveredDistrict(null)
                  onDistrictHover?.(null)
                  setTooltip(t => ({ ...t, visible: false }))
                }}
              />
            )
          })}
        </g>
      </svg>

      {/* Zoom controls */}
      <div className="map-zoom-controls">
        <button className="zoom-btn" onClick={() => zoomAt(W / 2, H / 2, 1.4)} aria-label="Zoom in">+</button>
        <button className="zoom-btn" onClick={() => zoomAt(W / 2, H / 2, 0.7)} aria-label="Zoom out">&minus;</button>
        {isZoomed && (
          <button className="zoom-btn zoom-reset" onClick={resetZoom} aria-label="Reset zoom">&#x21BA;</button>
        )}
      </div>

      {tooltip.visible && (
        <div
          className="map-tooltip"
          style={{ left: tooltip.x + 14, top: tooltip.y - 40 }}
          role="tooltip"
          aria-hidden="true"
        >
          {tooltip.text}
        </div>
      )}

      {stateFeatures.length === 0 && (
        <div className="map-loading" role="status" aria-live="polite">Loading map...</div>
      )}

      {/* Loading spinner for district data */}
      {selectedState && districtLoading && (
        <div className="map-district-loading" role="status" aria-live="polite">
          <div className="map-spinner" />
          <span>Loading {LAYER_COLORS[districtLayer]?.label?.toLowerCase() || 'district'} data...</span>
        </div>
      )}

      {!selectedState && stateFeatures.length > 0 && !isZoomed && (
        <div className="map-hint">Click any state to see its representatives</div>
      )}

      {selectedState && districtFeatures.length > 0 && !districtLoading && (
        <div className="map-legend">
          {hasRepData && reps.length > 0 ? (
            <>
              <span className="legend-item"><span className="legend-dot" style={{background:'#93bbf0'}}></span> Democrat</span>
              <span className="legend-item"><span className="legend-dot" style={{background:'#f0a0a0'}}></span> Republican</span>
              <span className="legend-item"><span className="legend-dot" style={{background:'#a0d8a0'}}></span> Other</span>
            </>
          ) : (
            <span className="legend-item">
              <span className="legend-dot" style={{background: LAYER_COLORS[districtLayer]?.base}}></span>
              {LAYER_COLORS[districtLayer]?.label}s
            </span>
          )}
        </div>
      )}
    </div>
  )
}
