import React from 'react'
import MainContainer from './landing-components/MainContainer'
import Features2 from './landing-components/Features2'
import About from './landing-components/About'
import Features from './landing-components/Features'
import PopularCourses from './landing-components/PopularCourses'
import UpcomingEvents from './landing-components/UpcomingEvents'
import Testimonials from './landing-components/Testimonials'
import Contact from './landing-components/Contact'

const Landing = () => {
  return (
    <div>
      <MainContainer />
      <Features />
      <PopularCourses />
      <Testimonials />
      <About />
      <Features2 />
      <UpcomingEvents />
      <Contact />
    </div>
  )
}

export default Landing