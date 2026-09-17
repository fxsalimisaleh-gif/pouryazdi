// Structured product data. Real photography is used where the client supplied it;
// everything else uses the shared default product graphic until real assets exist.
// Specifications are left as clearly marked placeholders rather than invented.

export const DEFAULT_PRODUCT_IMAGE = '/images/products/default-product.svg'

export const products = [
  {
    id: 'makan-fortified-full-cream-milk-powder',
    category: 'infant-nutrition',
    image: '/images/products/infant-formula-makan.jpg',
    hasRealImage: true,
    name: {
      en: 'Makan Fortified Full Cream Milk Powder',
      ru: 'Makan — обогащённое цельное сухое молоко',
      ar: 'ماكان حليب كامل الدسم المجفف والمدعّم',
    },
    descriptor: {
      en: 'Fortified full cream milk powder for infant and family nutrition.',
      ru: 'Обогащённое цельное сухое молоко для детского и семейного питания.',
      ar: 'حليب كامل الدسم مجفف ومدعّم لتغذية الأطفال والعائلات.',
    },
    overview: {
      en: 'A fortified full cream milk powder supplied in retail tins, suited to pharmacy and family nutrition channels across our trading markets.',
      ru: 'Обогащённое цельное сухое молоко в розничных банках, подходит для аптечных и семейных каналов сбыта на наших рынках.',
      ar: 'حليب كامل الدسم مدعّم يُورَّد في علب تجزئة، مناسب لقنوات الصيدليات والتغذية العائلية في أسواقنا.',
    },
    specifications: {
      en: [
        { label: 'Package type', value: 'Tin' },
        { label: 'Net amount', value: '400 g' },
        { label: 'Pieces per box', value: '12' },
        { label: 'Shelf life', value: '18 months' },
      ],
      ru: [
        { label: 'Тип упаковки', value: 'Банка' },
        { label: 'Вес нетто', value: '400 г' },
        { label: 'Штук в коробке', value: '12' },
        { label: 'Срок годности', value: '18 месяцев' },
      ],
      ar: [
        { label: 'نوع العبوة', value: 'علبة معدنية' },
        { label: 'الوزن الصافي', value: '٤٠٠ غ' },
        { label: 'القطع في الكرتون', value: '١٢' },
        { label: 'مدة الصلاحية', value: '١٨ شهرًا' },
      ],
    },
    packaging: {
      en: 'Tin, 12 pieces per export carton.',
      ru: 'Металлическая банка, 12 штук в экспортной коробке.',
      ar: 'علبة معدنية، ١٢ قطعة في كل كرتون تصدير.',
    },
    applications: {
      en: ['Pharmacy retail', 'Family nutrition', 'Distributor resale'],
      ru: ['Розница в аптеках', 'Семейное питание', 'Перепродажа дистрибьютором'],
      ar: ['بيع بالتجزئة في الصيدليات', 'تغذية عائلية', 'إعادة بيع عبر الموزعين'],
    },
    availability: 'in-stock',
  },
  {
    id: 'pour-yazdi-organic-ground-coffee',
    category: 'coffee',
    image: '/images/products/coffee-ground-coffee.jpg',
    hasRealImage: true,
    name: {
      en: 'Pour Yazdi Organic Ground Coffee',
      ru: 'Молотый органический кофе Pour Yazdi',
      ar: 'قهوة Pour Yazdi العضوية المطحونة',
    },
    descriptor: {
      en: 'House-brand organic ground coffee for retail and horeca.',
      ru: 'Собственный бренд органического молотого кофе для розницы и HoReCa.',
      ar: 'قهوة مطحونة عضوية من علامتنا الخاصة للتجزئة وقطاع الضيافة.',
    },
    overview: {
      en: 'Our house-brand ground coffee, positioned for retail shelves and horeca partners who want a private-label option with consistent sourcing.',
      ru: 'Молотый кофе собственного бренда для розничных полок и партнёров HoReCa, которым нужна стабильная закупка под собственной маркой.',
      ar: 'قهوة مطحونة من علامتنا الخاصة، مناسبة لرفوف التجزئة وشركاء قطاع الضيافة الباحثين عن توريد ثابت بعلامة خاصة.',
    },
    specifications: {
      en: [
        { label: 'Format', value: 'Ground' },
        { label: 'Packaging', value: 'Stand-up pouch' },
        { label: 'Net weight', value: 'To be confirmed with buyer' },
        { label: 'Origin', value: 'To be confirmed with buyer' },
      ],
      ru: [
        { label: 'Формат', value: 'Молотый' },
        { label: 'Упаковка', value: 'Дой-пак' },
        { label: 'Вес нетто', value: 'Уточняется с покупателем' },
        { label: 'Происхождение', value: 'Уточняется с покупателем' },
      ],
      ar: [
        { label: 'الشكل', value: 'مطحون' },
        { label: 'العبوة', value: 'كيس واقف' },
        { label: 'الوزن الصافي', value: 'يُحدَّد مع المشتري' },
        { label: 'المنشأ', value: 'يُحدَّد مع المشتري' },
      ],
    },
    packaging: {
      en: 'Stand-up pouch, private-label ready.',
      ru: 'Дой-пак, готов под собственную марку.',
      ar: 'كيس واقف، جاهز للعلامة الخاصة.',
    },
    applications: {
      en: ['Retail shelf', 'Horeca', 'Private label programs'],
      ru: ['Розничные полки', 'HoReCa', 'Программы под собственной маркой'],
      ar: ['رفوف التجزئة', 'قطاع الضيافة', 'برامج العلامة الخاصة'],
    },
    availability: 'in-stock',
  },
  {
    id: 'khosh-ava-pineapple-juice',
    category: 'juices-beverages',
    image: '/images/products/juice-pineapple-khoshava.jpg',
    hasRealImage: true,
    name: {
      en: 'Khosh Ava Pineapple Juice',
      ru: 'Ананасовый сок Khosh Ava',
      ar: 'عصير الأناناس Khosh Ava',
    },
    descriptor: {
      en: 'Pineapple juice available in tetra pack and can formats.',
      ru: 'Ананасовый сок в форматах тетра-пак и жестяной банки.',
      ar: 'عصير أناناس متوفر بعبوات تترا باك وعلب معدنية.',
    },
    overview: {
      en: 'Khosh Ava pineapple juice, supplied in both tetra pack and can formats for retail and distribution partners.',
      ru: 'Ананасовый сок Khosh Ava поставляется в тетра-паках и жестяных банках для розницы и дистрибьюторов.',
      ar: 'عصير أناناس Khosh Ava متوفر بعبوات تترا باك وعلب معدنية لشركاء التجزئة والتوزيع.',
    },
    specifications: {
      en: [
        { label: 'Formats', value: 'Tetra pack, can' },
        { label: 'Flavor', value: 'Pineapple' },
        { label: 'Shelf life', value: 'To be confirmed with buyer' },
      ],
      ru: [
        { label: 'Форматы', value: 'Тетра-пак, банка' },
        { label: 'Вкус', value: 'Ананас' },
        { label: 'Срок годности', value: 'Уточняется с покупателем' },
      ],
      ar: [
        { label: 'العبوات', value: 'تترا باك، علبة' },
        { label: 'النكهة', value: 'أناناس' },
        { label: 'مدة الصلاحية', value: 'يُحدَّد مع المشتري' },
      ],
    },
    packaging: {
      en: 'Tetra pack and can, export cartons available.',
      ru: 'Тетра-пак и банка, доступны экспортные коробки.',
      ar: 'تترا باك وعلب، تتوفر كراتين تصدير.',
    },
    applications: {
      en: ['Retail beverage aisle', 'Distribution', 'Horeca'],
      ru: ['Розничные полки напитков', 'Дистрибуция', 'HoReCa'],
      ar: ['رفوف المشروبات بالتجزئة', 'التوزيع', 'قطاع الضيافة'],
    },
    availability: 'in-stock',
  },
  {
    id: 'industrial-full-cream-milk-powder',
    category: 'industrial-dairy',
    image: DEFAULT_PRODUCT_IMAGE,
    hasRealImage: false,
    name: {
      en: 'Industrial Full Cream Milk Powder',
      ru: 'Промышленное цельное сухое молоко',
      ar: 'حليب كامل الدسم مجفف للاستخدام الصناعي',
    },
    descriptor: {
      en: 'Bulk milk powder for food manufacturing and reprocessing.',
      ru: 'Сухое молоко для промышленного использования и переработки.',
      ar: 'حليب مجفف بالجملة للتصنيع الغذائي وإعادة التصنيع.',
    },
    overview: {
      en: 'Bulk-format milk powder intended for manufacturers reprocessing into finished dairy and bakery goods.',
      ru: 'Сухое молоко в промышленной фасовке для производителей, перерабатывающих его в готовые молочные и кондитерские изделия.',
      ar: 'حليب مجفف بتعبئة صناعية موجّه للمصنّعين الذين يعيدون تصنيعه إلى منتجات ألبان ومخبوزات نهائية.',
    },
    specifications: {
      en: [
        { label: 'Format', value: 'Bulk powder' },
        { label: 'Packaging', value: 'To be confirmed with buyer' },
        { label: 'Fat content', value: 'To be confirmed with buyer' },
      ],
      ru: [
        { label: 'Формат', value: 'Промышленная фасовка' },
        { label: 'Упаковка', value: 'Уточняется с покупателем' },
        { label: 'Жирность', value: 'Уточняется с покупателем' },
      ],
      ar: [
        { label: 'الشكل', value: 'مسحوق بالجملة' },
        { label: 'العبوة', value: 'يُحدَّد مع المشتري' },
        { label: 'نسبة الدسم', value: 'يُحدَّد مع المشتري' },
      ],
    },
    packaging: {
      en: 'Bulk export packaging, specification confirmed per order.',
      ru: 'Промышленная экспортная упаковка, спецификация уточняется по заказу.',
      ar: 'تعبئة تصدير بالجملة، تُحدَّد المواصفات حسب الطلب.',
    },
    applications: {
      en: ['Food manufacturing', 'Bakery', 'Reprocessing'],
      ru: ['Пищевое производство', 'Хлебопечение', 'Переработка'],
      ar: ['التصنيع الغذائي', 'المخابز', 'إعادة التصنيع'],
    },
    availability: 'on-request',
  },
  {
    id: 'coffee-powder-bulk-ingredient',
    category: 'coffee',
    image: DEFAULT_PRODUCT_IMAGE,
    hasRealImage: false,
    name: {
      en: 'Coffee Powder — Bulk Ingredient',
      ru: 'Кофейный порошок — сырьё для промышленности',
      ar: 'مسحوق القهوة — مكوّن بالجملة',
    },
    descriptor: {
      en: 'Bulk coffee powder for manufacturers and blenders.',
      ru: 'Кофейный порошок в промышленной фасовке для производителей и блендеров.',
      ar: 'مسحوق قهوة بالجملة للمصنّعين وشركات الخلط.',
    },
    overview: {
      en: 'Bulk-format coffee powder supplied as an ingredient to manufacturers and beverage blenders.',
      ru: 'Кофейный порошок в промышленной фасовке, поставляется как сырьё производителям и блендерам напитков.',
      ar: 'مسحوق قهوة بتعبئة صناعية يُورَّد كمكوّن للمصنّعين وشركات خلط المشروبات.',
    },
    specifications: {
      en: [
        { label: 'Format', value: 'Bulk powder' },
        { label: 'Packaging', value: 'To be confirmed with buyer' },
      ],
      ru: [
        { label: 'Формат', value: 'Промышленная фасовка' },
        { label: 'Упаковка', value: 'Уточняется с покупателем' },
      ],
      ar: [
        { label: 'الشكل', value: 'مسحوق بالجملة' },
        { label: 'العبوة', value: 'يُحدَّد مع المشتري' },
      ],
    },
    packaging: {
      en: 'Bulk export packaging.',
      ru: 'Промышленная экспортная упаковка.',
      ar: 'تعبئة تصدير بالجملة.',
    },
    applications: {
      en: ['Beverage manufacturing', 'Blending', 'Food manufacturing'],
      ru: ['Производство напитков', 'Блендинг', 'Пищевое производство'],
      ar: ['تصنيع المشروبات', 'الخلط', 'التصنيع الغذائي'],
    },
    availability: 'on-request',
  },
  {
    id: 'whey-powder-ingredient',
    category: 'whey-ingredients',
    image: DEFAULT_PRODUCT_IMAGE,
    hasRealImage: false,
    name: {
      en: 'Whey Powder',
      ru: 'Сывороточный порошок',
      ar: 'مسحوق مصل اللبن',
    },
    descriptor: {
      en: 'Whey powder ingredient for dairy and nutrition manufacturers.',
      ru: 'Сывороточный порошок для производителей молочной продукции и питания.',
      ar: 'مكوّن مصل اللبن المجفف لمصنّعي منتجات الألبان والتغذية.',
    },
    overview: {
      en: 'A whey powder ingredient supplied to dairy processors and nutrition manufacturers as a formulation component.',
      ru: 'Сывороточный порошок, поставляемый переработчикам молочной продукции и производителям питания как компонент рецептуры.',
      ar: 'مكوّن مصل لبن مجفف يُورَّد لمصنّعي الألبان ومنتجات التغذية كعنصر في التركيبة.',
    },
    specifications: {
      en: [
        { label: 'Format', value: 'Bulk powder' },
        { label: 'Protein content', value: 'To be confirmed with buyer' },
      ],
      ru: [
        { label: 'Формат', value: 'Промышленная фасовка' },
        { label: 'Содержание белка', value: 'Уточняется с покупателем' },
      ],
      ar: [
        { label: 'الشكل', value: 'مسحوق بالجملة' },
        { label: 'نسبة البروتين', value: 'يُحدَّد مع المشتري' },
      ],
    },
    packaging: {
      en: 'Bulk export packaging.',
      ru: 'Промышленная экспортная упаковка.',
      ar: 'تعبئة تصدير بالجملة.',
    },
    applications: {
      en: ['Dairy formulation', 'Nutrition manufacturing', 'Food industry'],
      ru: ['Молочные рецептуры', 'Производство питания', 'Пищевая промышленность'],
      ar: ['تركيبات الألبان', 'تصنيع منتجات التغذية', 'الصناعات الغذائية'],
    },
    availability: 'on-request',
  },
  {
    id: 'other-products-by-request',
    category: 'other',
    image: DEFAULT_PRODUCT_IMAGE,
    hasRealImage: false,
    name: {
      en: 'Other Products by Request',
      ru: 'Другая продукция по запросу',
      ar: 'منتجات أخرى عند الطلب',
    },
    descriptor: {
      en: 'Additional products sourced case-by-case for trade partners.',
      ru: 'Дополнительная продукция, подбирается индивидуально для торговых партнёров.',
      ar: 'منتجات إضافية تُورَّد حسب الطلب لشركائنا التجاريين.',
    },
    overview: {
      en: 'Beyond our core categories, Pour Yazdi sources additional products for trade partners on a case-by-case basis. Contact our trade team with your requirement.',
      ru: 'Помимо основных категорий, Pour Yazdi подбирает дополнительную продукцию для партнёров индивидуально. Свяжитесь с нашей торговой командой с вашим запросом.',
      ar: 'إلى جانب فئاتنا الأساسية، توفّر Pour Yazdi منتجات إضافية لشركائها التجاريين حسب كل حالة. تواصل مع فريقنا التجاري بطلبك.',
    },
    specifications: {
      en: [{ label: 'Scope', value: 'To be confirmed with buyer' }],
      ru: [{ label: 'Объём', value: 'Уточняется с покупателем' }],
      ar: [{ label: 'النطاق', value: 'يُحدَّد مع المشتري' }],
    },
    packaging: {
      en: 'Confirmed per order.',
      ru: 'Уточняется по заказу.',
      ar: 'تُحدَّد حسب الطلب.',
    },
    applications: {
      en: ['Case-by-case sourcing'],
      ru: ['Индивидуальный подбор'],
      ar: ['توريد حسب الطلب'],
    },
    availability: 'on-request',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(product, limit = 3) {
  return products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, limit)
}
