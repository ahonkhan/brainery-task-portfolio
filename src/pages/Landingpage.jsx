import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Header/Header'
import Skills from '../components/Skills/Skills'
import About from '../components/About/About'
import Blog from '../components/Blog/Blog'
import Testimonial from '../components/Testimonial/Testimonial'
import Contact from '../components/Contact/Contact'
import FooterSection from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'

const Landingpage = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <About />
            <Blog />
            <Testimonial />
            <Contact />
            <FooterSection />
            <Sidebar />

        </>
    )
}

export default Landingpage