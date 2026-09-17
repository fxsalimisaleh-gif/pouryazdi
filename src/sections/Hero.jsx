import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGsapContext } from '../hooks/useGsapContext.js'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Hero() {
  const { t, isRtl } = useLanguage()
  const imgRef = useRef(null)
  const lineRef = useRef(null)

  const scope = useGsapContext(({ reduced }) => {
    if (reduced) return
    gsap.fromTo(
      imgRef.current,
      { yPercent: -6 },
      { yPercent: 6, ease: 'none', scrollTrigger: { trigger: scope.current, start: 'top top', end: 'bottom top', scrub: true } }
    )
    const len = lineRef.current?.getTotalLength?.() ?? 0
    if (lineRef.current && len) {
      gsap.fromTo(
        lineRef.current,
        { strokeDashoffset: len, strokeDasharray: len },
        { strokeDashoffset: 0, duration: 1.8, ease: 'power2.out', delay: 0.4 }
      )
    }
  })

  return (
    <section ref={scope} className="relative overflow-hidden bg-forest-dark text-paper">
      {/* fine paper-grain / noise texture, extremely restrained */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[92vh] flex-col justify-between gap-16 pb-16 pt-28 sm:pt-32">
        <div className="flex items-start justify-between gap-8 border-b border-paper/15 pb-8">
          <p className="font-display text-sm text-cream">{t.hero.eyebrow}</p>
          <p className="hidden font-display text-sm text-paper/50 sm:block">{t.hero.based}</p>
        </div>

        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[13vw] leading-[0.94] tracking-tightest sm:text-[9vw] lg:text-[6.2vw]">
              {t.hero.title}
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-paper/70 sm:text-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              <Button to="/products" variant="solidLight">{t.hero.ctaPrimary}</Button>
              <Button to="/contact" variant="text" className="text-paper">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <img
                ref={imgRef}
                src="/images/products/coffee-ground-coffee.jpg"
                alt="Pour Yazdi organic ground coffee, part of the company's product range"
                className="h-[112%] w-full object-cover"
              />
              <svg
                className="pointer-events-none absolute -bottom-1 -start-1 h-24 w-24 text-gold"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <path ref={lineRef} d="M2 2 L2 60 Q2 98 40 98 L98 98" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="mt-6 flex items-end justify-between font-display text-xs text-paper/50">
              <span>{t.hero.since} 2001</span>
              <span className="text-gold">{isRtl ? '٢٥' : '25'}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl italic text-cream sm:text-3xl">{t.hero.route}</p>
          <p className="max-w-sm text-xs leading-relaxed text-paper/45">{t.hero.based}</p>
        </div>
      </Container>
    </section>
  )
}
