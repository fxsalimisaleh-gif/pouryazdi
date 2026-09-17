import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { locales } from '../i18n'

const STORAGE_KEY = 'pouryazdi-lang'
const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && locales[stored]) return stored
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  const dict = locales[lang]
  const dir = dict.meta.dir

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang, dir])

  const value = useMemo(
    () => ({
      lang,
      dir,
      isRtl: dir === 'rtl',
      t: dict,
      setLang,
    }),
    [lang, dir, dict]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
