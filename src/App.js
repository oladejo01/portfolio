import React from 'react'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Project from './Component/Project'
import Contact from './Component/Contact';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
        <div>
        <Navbar/>
        <Routes>
        <Route path='/About' element = {<About/>}/>
        <Route path = '/Project' element = {<Project/>}/>
        <Route path = '/Contact' element = {<Contact/>}/>
        </Routes>
        <About/>
        <Project/>
        <Contact/>
        </div>
  )
}

export default App

