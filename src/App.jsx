import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import Map from './Components/Map/Map'
import Footer from './Components/Footer/Footer'
import DualImageSection from './Components/DualImageSection/DualImageSection'
import OverlaySection from './Components/OverlaySection/OverlaySection'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <OverlaySection/>
    <Products/>
    <DualImageSection/>
    <Map/>
    <Footer/>
    </>
  )
}

export default App
