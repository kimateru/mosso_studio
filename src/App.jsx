import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faq from './components/Faq'
import Projects from './components/Projects'
const App = () => {
  return (
    <main className='container mx-auto'>
      <Navbar />
      <Hero />
      <Faq />
      <Projects />
    </main>
  )
}

export default App