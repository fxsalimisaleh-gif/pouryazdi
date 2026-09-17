import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Runs `setup(ctx, scope)` inside a gsap.context() scoped to the returned ref.
 * All tweens/ScrollTriggers created inside are automatically reverted on
 * unmount. When the user prefers reduced motion, setup still runs but the
 * `reduced` flag is passed so callers can skip scroll-scrubbed motion and
 * fall back to simple opacity reveals.
 */
export function useGsapContext(setup, deps = []) {
  const scope = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!scope.current) return undefined
    const ctx = gsap.context(() => setup({ gsap, ScrollTrigger, reduced }), scope)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, ...deps])

  return scope
}
