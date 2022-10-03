import React from "react"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
