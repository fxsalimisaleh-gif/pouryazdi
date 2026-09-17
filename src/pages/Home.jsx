import Hero from '../sections/Hero.jsx'
import TrustHeritage from '../sections/TrustHeritage.jsx'
import ProductAtlas from '../sections/ProductAtlas.jsx'
import ProductFinder from '../sections/ProductFinder.jsx'
import OriginToWorld from '../sections/OriginToWorld.jsx'
import GlobalTrade from '../sections/GlobalTrade.jsx'
import QualityDelivery from '../sections/QualityDelivery.jsx'
import Catalogs from '../sections/Catalogs.jsx'
import BusinessInquiry from '../sections/BusinessInquiry.jsx'
import FinalStatement from '../sections/FinalStatement.jsx'

// 01 Opening -> 02 25 Years -> 03 The Range -> 04 Origin/Product/World
// -> 05 Global Trade -> 06 Quality/Speed -> 07 Catalog -> 08 Inquiry -> 09 Final statement
export default function Home() {
  return (
    <>
      <Hero />
      <TrustHeritage sectionNumber="02" />
      <ProductAtlas sectionNumber="03" />
      <ProductFinder />
      <OriginToWorld sectionNumber="04" />
      <GlobalTrade sectionNumber="05" />
      <QualityDelivery sectionNumber="06" />
      <Catalogs sectionNumber="07" />
      <BusinessInquiry sectionNumber="08" />
      <FinalStatement sectionNumber="09" />
    </>
  )
}
