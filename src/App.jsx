import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Heroimg from './assets/hero_img.png'
import Services from './components/Services'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='z-0 '>
        
        <img src={Heroimg} alt='Hero image' className='w-full h-auto'/>
        
      </div>
      <Hero/>
    <Services/>
    <Footer/>
    </div>
  )
}

export default App
