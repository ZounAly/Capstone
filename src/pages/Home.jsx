import React from 'react'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import Banner from '../components/sections/Banner'
import WeeksSpecials from '../components/sections/WeeksSpecials'
import Testimonials from '../components/sections/Testimonials'
import About from '../components/sections/About'


const Home = () => {
  return (
   <>
        <Header/>
        <Banner/>
        <WeeksSpecials cta={true}/>
        <Testimonials/>
        <About/>
        <Footer/>
    </>
  )
}

export default Home