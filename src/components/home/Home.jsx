import React from "react"
import Footer from "../footer/Footer"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"



const Home = () => {
  return (
    <>
      <Hero />
       <Featured />
      <Location /> 
      <Footer />
    </>
  )
}

export default Home
