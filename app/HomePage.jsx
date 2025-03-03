import React from 'react'
import Hero from './(home-sections)/hero'
import "./(home-sections)/home.css"
import Header from '@/components/Header'
import About from './(home-sections)/about'
import Services from './(home-sections)/services'
import Numbers from './(home-sections)/numbers'
import EventAccess from './(home-sections)/event-access'
import Skills from './(home-sections)/skills'
import NewsLetter from './(home-sections)/news-letter'
import Footer from '@/components/Footer'

const HomePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Numbers />
        <Services />
        <EventAccess />
        <Skills />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default HomePage