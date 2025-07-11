import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './conponents/Experience'


const App = () => {
  return (
    <div>
     <main className='max-w-7xl mx-auto  '>
     <Navbar />
     <Hero />
     <About />
     <Projects />
     <Experience />
     <Contact />
     {/* <Footer /> */}
     </main>
    </div>
  )
}

export default App
