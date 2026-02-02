import React from 'react'
import Header from './components/Header'
import Hero from './components/hero'
import Section1 from './components/section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <hr className='mt-20 w-[85%] ml-24'/>
      <Footer/>
    </div>
  )
}

export default App