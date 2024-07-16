import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faq from './components/Faq'
const App = () => {
  return (
    <main className='container mx-auto'>
      <Navbar />
      <Hero />
      <Faq />
    </main>
  )
}

export default App