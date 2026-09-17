import { useEffect, useRef } from 'react'

const W = 1000
const H = 620

/** Fine longitude/latitude style grid — the "digital atlas" texture. */
export function MapGrid() {
  const cols = 14
  const rows = 9
  return (
    <g className="pointer-events-none" aria-hidden="true">
      {Array.from({ length: cols + 1 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={(i * W) / cols}
          y1={0}
          x2={(i * W) / cols}
          y2={H}
          stroke="currentColor"
          strokeOpacity={0.06}
          strokeWidth={1}
        />
      ))}
      {Array.from({ length: rows + 1 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1={0}
          y1={(i * H) / rows}
          x2={W}
          y2={(i * H) / rows}
          stroke="currentColor"
          strokeOpacity={0.06}
          strokeWidth={1}
        />
      ))}
    </g>
  )
}

function curvePath(from, to, bend = -70) {
  const mx = (from.x + to.x) / 2
  const my = (from.y + to.y) / 2 + bend
  return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`
}

/**
 * A single animated trade route: draws itself in on scroll-into-view, then
 * runs a slow traveling pulse along the path. Fully respects reduced motion
 * (draws instantly, no traveling pulse).
 */
export function TradeRoute({ from, to, active, dimmed, reduced, visible, bend }) {
  const pathRef = useRef(null)
  const dotRef = useRef(null)
  const rafRef = useRef(null)
  const d = curvePath(from, to, bend)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return undefined
    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = reduced || !visible ? '0' : `${length}`

    if (reduced || !visible) return undefined

    let start = null
    const duration = 1400
    function drawFrame(ts) {
      if (start === null) start = ts
      const progress = Math.min(1, (ts - start) / duration)
      path.style.strokeDashoffset = `${length * (1 - progress)}`
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(drawFrame)
      } else {
        startPulse(path, dotRef.current, length)
      }
    }
    rafRef.current = requestAnimationFrame(drawFrame)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, reduced])

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  function startPulse(path, dot, length) {
    if (!dot) return
    let pulseStart = null
    const pulseDuration = 3200
    function pulseFrame(ts) {
      if (pulseStart === null) pulseStart = ts
      const t = ((ts - pulseStart) % pulseDuration) / pulseDuration
      const point = path.getPointAtLength(t * length)
      dot.setAttribute('cx', point.x)
      dot.setAttribute('cy', point.y)
      dot.style.opacity = t > 0.02 && t < 0.98 ? '1' : '0'
      rafRef.current = requestAnimationFrame(pulseFrame)
    }
    rafRef.current = requestAnimationFrame(pulseFrame)
  }

  return (
    <g>
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke={active ? '#D99A56' : '#F4E5BA'}
        strokeOpacity={dimmed ? 0.18 : active ? 0.95 : 0.4}
        strokeWidth={active ? 2 : 1.25}
        strokeLinecap="round"
      />
      {!reduced && (
        <circle ref={dotRef} r={active ? 4 : 2.5} fill="#D99A56" opacity={dimmed ? 0 : 1} />
      )}
    </g>
  )
}

export function TradeNode({ node, label, active, onActivate, onDeactivate, isHub }) {
  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={label}
      aria-pressed={active}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      onClick={onActivate}
      className="cursor-pointer outline-none"
    >
      <circle cx={node.x} cy={node.y} r={26} fill="transparent" />
      {active && (
        <circle cx={node.x} cy={node.y} r={14} fill="none" stroke="#D99A56" strokeOpacity={0.5}>
          <animate attributeName="r" values="10;18;10" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
        </circle>
      )}
      <circle
        cx={node.x}
        cy={node.y}
        r={isHub ? 6 : active ? 6 : 4.5}
        fill={isHub ? '#F4E5BA' : active ? '#D99A56' : '#99CC01'}
      />
      <text
        x={node.x}
        y={node.y - (isHub ? 18 : 16)}
        textAnchor="middle"
        fill="#FBF8F1"
        fontSize={isHub ? 15 : 13}
        fontFamily={isHub ? 'Fraunces, serif' : 'Manrope, sans-serif'}
        fontStyle={isHub ? 'italic' : 'normal'}
        fontWeight={isHub ? 400 : 600}
      >
        {label}
      </text>
    </g>
  )
}

export const VIEWBOX = `0 0 ${W} ${H}`
