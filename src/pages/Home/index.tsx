import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Benefits from '../../containers/Benefits'
import Categories from '../../containers/Categories'
import ProductSection from '../../containers/ProductSection'
import ComingSoon from '../../containers/ComingSoon'
import Testimonials from '../../containers/Testimonials'
import Newsletter from '../../containers/Newsletter'
import Footer from '../../containers/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      {/* <Categories /> */}
      <ProductSection background="secondary" title="Mais Vendidos" />
      <ComingSoon />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
