# Pour Yazdi — pouryazdi.com

Premium international B2B trading website for Pour Yazdi (infant nutrition, coffee,
industrial dairy, juices, whey and other product supply), built as a portfolio-quality
frontend implementation.

## Stack

- React 18 + Vite
- Tailwind CSS (custom brand tokens in `tailwind.config.js`)
- Framer Motion (section reveals, the animated Global Trade route diagram)
- React Router (`/`, `/products`, `/products/:id`, `/heritage`, `/global-trade`, `/contact`)
- Lucide React icons

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Structure

```
src/
  components/   Reusable UI: Navbar, Footer, ProductCard, ProductExplorer, etc.
  sections/     Homepage narrative sections (Hero, GlobalTrade, Heritage, ...)
  pages/        Route-level pages
  data/         Structured product + category data (products.js, categories.js)
  i18n/         en.js / ru.js / ar.js content dictionaries
  context/      LanguageContext — drives <html lang> / dir, persists choice
  lib/          Small utilities (localize, cx)
public/images/  hero/ company/ heritage/ origin/ logistics/ trade/ products/ catalogs/
```

## Content & data notes

- Product data lives in `src/data/products.js` as plain objects
  (`id, category, image, name, descriptor, overview, specifications, packaging,
  applications, availability`) — a backend can replace this file directly.
- Where the client did not supply a real specification, the field is explicitly
  labeled "To be confirmed with buyer" rather than invented.
- Real product photography supplied by the client is used for the three products
  that had it (Makan milk powder, Pour Yazdi ground coffee, Khosh Ava pineapple
  juice). Every other product uses the shared placeholder graphic at
  `/public/images/products/default-product.svg` until real photography exists —
  swap that file (or the per-product `image` path) when it's ready.
- Warehouse/logistics photography and the heritage still-life photo supplied by
  the client are used in the Quality/Delivery and Heritage sections.

## Language / RTL

Switching to Arabic sets `dir="rtl"` on `<html>` and swaps the display typeface to
Noto Naskh Arabic (`Tajawal` for body text). Layout uses logical properties
(`ps-`, `pe-`, `start-`, `end-`) throughout so spacing and icons mirror correctly
instead of just flipping text direction.

## What's intentionally not built yet

- No backend: the Business Inquiry form is UI-only and does not transmit data.
  A submit handler is isolated in `src/sections/BusinessInquiry.jsx` ready for a
  POST call.
- No real PDFs: the Catalogs section and product "Download Product Sheet" button
  are wired up but marked "Coming soon" rather than linking to placeholder files.
- No payment/cart: architecture (product data shape, routes) is ready to extend
  into ecommerce later, per the brief, but no cart/checkout UI was built.
