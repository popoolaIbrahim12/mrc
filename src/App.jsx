import React from 'react'
import Header from './components/Header'


import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Projects from './pages/Projects'
import Layout from './components/Layout'


const App = () => {
  return (
    <div className='w-full'>
      <Routes>
        <Route path='/' element = {<Layout/>}>
        <Route path='/services' element = {<Services/>}/>
        <Route path='/project' element = {<Projects/>}/>
        <Route path='career' element = {<Careers/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/about' element = {<About/>}/>
        </Route>
      </Routes>
      

      
    </div>
  )
}

export default App


  