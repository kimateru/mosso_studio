import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faq from './components/Faq'
import Projects from './components/Projects'
import Footer from './components/Footer'
const App = () => {
  return (
    <main>
      <div className='container mx-auto'>
        <Navbar />
        <Hero />
        <Faq />
      </div>
      <Projects />
      <Footer />
    </main>
  )
}

export default App