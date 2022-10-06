import React from "react"
import Hero from "./hero/Hero"
import Featured from "./featured/Featured"
import Location from "./location/Location"
import Recent from './recent/Recent'



const Home = () => {
  return (
    <>
      <Hero />
     <Featured/>
     <Location/>
   <Recent />
    </>
  )
}

export default Home
