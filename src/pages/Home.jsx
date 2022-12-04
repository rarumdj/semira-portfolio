import React from 'react'
import Footer from '../components/Footer'
import Hero from '../containers/Home/Hero'
import Social from '../containers/Home/Social'
import Testimonial from '../containers/Home/Testimonial'
import Works from '../containers/Home/Works'

const Home = () => {
  return (
    <><Hero/>
    <Works/>
    <Testimonial />
    <Social/>
    <Footer/>
    </>
  )
}

export default Home