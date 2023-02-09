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
//import QR from "../Assests/Images/QR.jpeg"
//import QrWp from "../Assests/Images/qr-code.png"
import "./Home.css"


const Home = () => {

  return (
      <Fragment>
            <Header/>
           {/* <HeroSection/>*/}
            <ChooseUs/>
            <AboutUs/>
            <Courses/>
            <FeatureSection/>
            <FreeCourse/>
            {/* <NewSletter/> */}
            <Footer/>
            <Communications/>
             {/* <Hero/> */}
      </Fragment>
    // <Fragment>
    // <meElement>
    //   <h1>Müvəqqəti olaraq saytın  istifadəsi dayandırılmışdır!</h1>
    //   <h3>
    //     Əlavə məlumat üçün aşağıdaklarla əlaqə  saxlaya bilərsiniz.
    //   </h3>
    //   <h6>
    //       <div> 
    //         <h6>
    //         <a href="https://wa.me/994515101108">Watsapp üçün buraya klikləyin.</a>
    //           Və ya aşağıdakı QR kodunu skan edərək bir başa Watsappa keçid edə bilərsiniz.
    //         </h6>
    //         <img src={QrWp} alt="" />
    //       </div>
    //       <div> 
    //         <h6>
    //           <a href="https://www.instagram.com/hesenzadee143/">Instagram üçün buraya klikləyin.</a>
    //           Və ya aşağıdakı QR kodunu skan edərək bir başa instagrama keçid edə bilərsiniz.
    //         </h6>
    //         <img src={QR} alt="" />
    //       </div>
    //   </h6>
    // </meElement>
    // </Fragment>
  )
}

export default Home