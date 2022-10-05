import React from "react"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"
import Heading from "./Heading"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='featured-container'>
          <Heading title='Search By Category Types' subtitle='Find Restaurants by Category.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
