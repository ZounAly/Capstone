import './App.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import Banner from './components//sections/Banner'
import WeeksSpecials from './components//sections/WeeksSpecials'
import Testimonials from './components//sections/Testimonials'
import About from './components//sections/About'

function App() {

  return (
    <>
        <Header/>
        <Banner/>
        <WeeksSpecials/>
        <Testimonials/>
        <About/>
        <Footer/>
    </>
  )
}

export default App
