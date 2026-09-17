export function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function localize(field, lang) {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[lang] || field.en || ''
}
