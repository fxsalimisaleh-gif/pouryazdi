import { useState, useRef, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { localeList } from '../i18n'
import { cx } from '../lib/utils'

export default function LanguageSwitcher({ variant = 'light' }) {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const textClass = variant === 'light' ? 'text-ink' : 'text-paper'

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cx(
          'flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-200 ease-editorial',
          variant === 'light'
            ? 'border-ink/15 text-ink hover:border-ink/40'
            : 'border-paper/25 text-paper hover:border-paper/60'
        )}
      >
        <Globe size={14} aria-hidden="true" />
        <span>{lang.toUpperCase()}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute end-0 z-50 mt-2 w-32 overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-lg"
        >
          {localeList.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
                className={cx(
                  'flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-forest/5',
                  l.code === lang ? 'font-semibold text-forest' : 'text-ink/80'
                )}
              >
                <span>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
