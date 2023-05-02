import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Header/Header'
import Skills from '../components/Skills/Skills'
import About from '../components/About/About'
import Blog from '../components/Blog/Blog'

const Landingpage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <About />
            <Blog/>
        </>
    )
}

export default Landingpage