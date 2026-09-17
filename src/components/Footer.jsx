import { Link } from 'react-router-dom'
import Container from './Container.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { categories, categoryLabel } from '../data/categories'

export default function Footer() {
  const { t, lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-paper text-ink">
      <Container className="py-16 sm:py-20">
        <p className="font-display text-4xl leading-[1.05] tracking-tightest sm:text-6xl">
          {t.footer.tagline}
        </p>

        <div className="mt-16 grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink/40">{t.footer.linksHeading}</h4>
            <Link to="/heritage" className="text-sm text-ink/70 hover:text-ink">{t.nav.about}</Link>
            <Link to="/global-trade" className="text-sm text-ink/70 hover:text-ink">{t.nav.globalTrade}</Link>
            <Link to="/contact" className="text-sm text-ink/70 hover:text-ink">{t.nav.contact}</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink/40">{t.footer.productsHeading}</h4>
            {categories.slice(0, 4).map((c) => (
              <Link key={c.id} to={`/products?category=${c.id}`} className="text-sm text-ink/70 hover:text-ink">
                {categoryLabel(c.id, lang)}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink/40">{t.footer.contactHeading}</h4>
            <p className="text-sm text-ink/70">{t.footer.address}</p>
            <a href="mailto:trade@pouryazdi.com" className="text-sm text-ink/70 hover:text-ink">trade@pouryazdi.com</a>
            <a href="tel:+37400000000" className="text-sm text-ink/70 hover:text-ink">+374 00 000 000</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink/40">EN / RU / AR</h4>
            <p className="text-sm leading-relaxed text-ink/70">{t.footer.company}</p>
            <p className="text-sm leading-relaxed text-ink/50">pouryazdi.com</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-2 border-t border-ink/10 pt-6 text-xs text-ink/40 sm:flex-row sm:items-center">
          <span>© {year} {t.footer.company}. {t.footer.rights}</span>
          <span>{t.footer.address}</span>
        </div>
      </Container>
    </footer>
  )
}
