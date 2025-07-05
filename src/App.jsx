import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './pages/Projects'
import Skills from './components/Skills'
import ExperienceEducation from './components/ExperienceEducation'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen font-sans">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <ExperienceEducation />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
