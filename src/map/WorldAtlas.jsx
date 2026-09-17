import { useEffect, useRef, useState } from 'react'
import { MapGrid, TradeRoute, TradeNode, VIEWBOX } from './MapPrimitives.jsx'
import { hub, origin, destinations } from './tradeData.js'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion.js'
import { cx } from '../lib/utils'

export default function WorldAtlas({ regionCopy, heritageLabel }) {
  const [active, setActive] = useState(null)
  const [visible, setVisible] = useState(false)
  const containerRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = containerRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col gap-8">
      <div className="relative">
        <svg viewBox={VIEWBOX} className="w-full text-paper" role="img" aria-label={regionCopy.armenia.name}>
          <MapGrid />

          {/* Heritage line: origin (Kerman) into the trading hub */}
          <TradeRoute
            from={origin}
            to={hub}
            active={active === 'kerman'}
            dimmed={active && active !== 'kerman'}
            reduced={reduced}
            visible={visible}
            bend={40}
          />

          {destinations.map((d) => (
            <TradeRoute
              key={d.id}
              from={hub}
              to={d}
              active={active === d.id}
              dimmed={active && active !== d.id}
              reduced={reduced}
              visible={visible}
              bend={-70}
            />
          ))}

          <TradeNode
            node={origin}
            label={heritageLabel}
            active={active === 'kerman'}
            isHub={false}
            onActivate={() => setActive('kerman')}
            onDeactivate={() => setActive(null)}
          />

          <TradeNode
            node={hub}
            label={regionCopy.armenia.name}
            active={active === null || active === 'armenia'}
            isHub
            onActivate={() => setActive('armenia')}
            onDeactivate={() => setActive(null)}
          />

          {destinations.map((d) => (
            <TradeNode
              key={d.id}
              node={d}
              label={regionCopy[d.id].name}
              active={active === d.id}
              isHub={false}
              onActivate={() => setActive(d.id)}
              onDeactivate={() => setActive(null)}
            />
          ))}
        </svg>
      </div>

      <div className="grid gap-px overflow-hidden bg-paper/10 sm:grid-cols-3" role="list">
        {destinations.map((d) => (
          <button
            key={d.id}
            type="button"
            role="listitem"
            onMouseEnter={() => setActive(d.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(d.id)}
            onBlur={() => setActive(null)}
            onClick={() => setActive((cur) => (cur === d.id ? null : d.id))}
            className={cx(
              'flex flex-col gap-2 bg-forest-dark px-6 py-6 text-start transition-colors duration-300 ease-editorial',
              active === d.id && 'bg-forest'
            )}
          >
            <p className="font-display text-lg text-cream">{regionCopy[d.id].name}</p>
            <p className="text-xs uppercase tracking-wide text-gold">{regionCopy[d.id].role}</p>
            <p className="text-sm leading-relaxed text-paper/65">{regionCopy[d.id].note}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
