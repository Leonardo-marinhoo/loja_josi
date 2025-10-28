import Header from '../../components/Header'
import Footer from '../../containers/Footer'
import ProductSection from '../../containers/ProductSection'

const Categories = () => {
  return (
    <>
      <Header />
      <ProductSection background="secondary" category="RPG" />
      <ProductSection background="primary" category="Ação" />
      <ProductSection background="secondary" category="Aventura" />
      <ProductSection background="primary" category="FPS" />
      <Footer />
    </>
  )
}

export default Categories
