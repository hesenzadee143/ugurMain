import React,{Fragment} from 'react'
import AboutUs from '../Components/About-us/AboutUs'
import ChooseUs from '../Components/Choose-Us/ChooseUs'
import Communications from '../Components/Communications/Communications'
import Courses from '../Components/Courses-Section/Courses'
import FeatureSection from '../Components/Feature-Section/FeatureSection'
import Footer from '../Components/Footer/Footer'
import FreeCourse from '../Components/Free-Course-Section/FreeCourse'
import Header from '../Components/Header/Header'
import HeroSection from '../Components/Hero-Section/HeroSection'
//import { Hero } from '../Components/Hero/Hero'
import NewSletter from '../Components/NewSletter/NewSletter'
import "./Home.css"


const Home = () => {

  return (
    <Fragment>
          <Header/>
          <HeroSection/>
          <AboutUs/>
          <Courses/>
          <ChooseUs/>
          <FeatureSection/>
          <FreeCourse/>
          <NewSletter/>
          <Footer/>
          <Communications/>
          {/* <Hero/>   */}
    </Fragment>
  )
}

export default Home