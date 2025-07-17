import React from 'react'
import Narbar from './components/Narbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Contact from './sections/Contact'
import About from './sections/About' // Assuming you have an About component
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeProvider'

const App = () =>{
  return (
    <ThemeProvider>
      <div className='min-h-screen'>
        <Narbar />
        <main className='pt-16'>
          <Hero />
          <About/>
          <Services />
          <Contact />
          <Footer/>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App