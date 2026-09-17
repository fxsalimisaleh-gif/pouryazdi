// Category taxonomy for product discovery, filtering and the guided finder.
// Kept as structured data so a backend can replace this later without touching UI code.

export const categories = [
  {
    id: 'infant-nutrition',
    labels: {
      en: 'Infant Nutrition',
      ru: 'Детское питание',
      ar: 'تغذية الأطفال',
    },
  },
  {
    id: 'coffee',
    labels: {
      en: 'Coffee & Coffee Products',
      ru: 'Кофе и кофейная продукция',
      ar: 'القهوة ومنتجاتها',
    },
  },
  {
    id: 'industrial-dairy',
    labels: {
      en: 'Industrial Dairy Ingredients',
      ru: 'Промышленные молочные ингредиенты',
      ar: 'مكونات الألبان الصناعية',
    },
  },
  {
    id: 'juices-beverages',
    labels: {
      en: 'Juices & Beverages',
      ru: 'Соки и напитки',
      ar: 'العصائر والمشروبات',
    },
  },
  {
    id: 'whey-ingredients',
    labels: {
      en: 'Whey & Ingredients',
      ru: 'Сыворотка и ингредиенты',
      ar: 'مصل اللبن والمكونات',
    },
  },
  {
    id: 'other',
    labels: {
      en: 'Other Products',
      ru: 'Другая продукция',
      ar: 'منتجات أخرى',
    },
  },
]

export function categoryLabel(id, lang) {
  const cat = categories.find((c) => c.id === id)
  if (!cat) return id
  return cat.labels[lang] || cat.labels.en
}

// Buyer industries used by the guided Product Finder
export const industries = [
  { id: 'pharmacy', categories: ['infant-nutrition', 'whey-ingredients'] },
  { id: 'food', categories: ['industrial-dairy', 'whey-ingredients', 'coffee'] },
  { id: 'beverage', categories: ['coffee', 'juices-beverages'] },
  { id: 'distribution', categories: ['infant-nutrition', 'coffee', 'juices-beverages', 'industrial-dairy'] },
  { id: 'retail', categories: ['infant-nutrition', 'coffee', 'juices-beverages'] },
  { id: 'trade', categories: ['infant-nutrition', 'coffee', 'industrial-dairy', 'juices-beverages', 'whey-ingredients', 'other'] },
]
