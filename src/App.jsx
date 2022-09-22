import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contacts from './components/contacs/Contacts'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'


const app = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
      
    </>
  )
}

export default app