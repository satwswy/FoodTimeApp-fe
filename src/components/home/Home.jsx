import React from "react"
import Hero from "./hero/Hero"
import Featured from "./featured/Featured"
import Location from "./location/Location"
import Recent from './recent/Recent'
import Footer from "./footer/Footer"



const Home = () => {
  return (
    <>
      <Hero />
     <Featured/>
     <Location/>
   <Recent />
   <Footer/>
    </>
  )
}

export default Home
