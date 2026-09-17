import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from './Container.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { cx } from '../lib/utils'

export default function Navbar() {
  const { t } = useLanguage()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const links = [
    { to: '/products', label: t.nav.products },
    { to: '/global-trade', label: t.nav.globalTrade },
    { to: '/heritage', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <header
      className={cx(
        'sticky top-0 z-50 transition-[background-color,border-color,padding] duration-500 ease-editorial',
        transparent ? 'bg-transparent' : 'border-b border-ink/10 bg-paper/95 backdrop-blur'
      )}
    >
      <Container className={cx('flex items-center justify-between transition-all duration-500', scrolled ? 'h-16' : 'h-24')}>
        <Link to="/" className="flex items-baseline gap-2" aria-label="Pour Yazdi home">
          <span className={cx('font-display text-xl tracking-tightest', transparent ? 'text-paper' : 'text-ink')}>
            Pour Yazdi
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cx(
                  'relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1 after:start-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full',
                  transparent ? 'text-paper/85 hover:text-paper' : 'text-ink/70 hover:text-ink',
                  isActive && (transparent ? 'text-paper after:w-full' : 'text-ink after:w-full')
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher variant={transparent ? 'dark' : 'light'} />
          <Link
            to="/contact"
            className={cx(
              'group relative text-sm font-semibold transition-colors duration-200',
              transparent ? 'text-paper' : 'text-ink'
            )}
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-no-repeat bg-bottom pb-0.5">
              {t.nav.cta}
            </span>
          </Link>
        </div>

        <button
          type="button"
          className={cx('inline-flex items-center lg:hidden', transparent ? 'text-paper' : 'text-ink')}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-forest-dark text-paper lg:hidden"
          >
            <Container className="flex h-full flex-col justify-between py-10">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {links.map((link, i) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="flex items-baseline gap-4 border-b border-paper/10 py-5 font-display text-3xl"
                  >
                    <span className="text-sm text-gold">{String(i + 1).padStart(2, '0')}</span>
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <div className="flex items-center justify-between gap-4 pt-8">
                <LanguageSwitcher variant="dark" />
                <Link
                  to="/contact"
                  className="text-sm font-semibold underline decoration-gold underline-offset-4"
                >
                  {t.nav.cta}
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
