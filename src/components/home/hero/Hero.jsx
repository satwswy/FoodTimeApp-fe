import React from "react"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className="section-div">
        <div className="background">
          <img src="https://www.aafoodservice.com/wp-content/themes/custom-theme/img/slider-v1704.jpg" alt="background-image" />
        </div>
        <div className="hero-content">
          <div className="title">
            <h1>Search Your Next Restaurant Reservation</h1>
            <p>
            Find new and featured restaurants located in your city.
            </p>
          </div>
          <div className="search">
            <div className="container">
              <label htmlFor="">Where you want to go</label>
              <input type="text" placeholder="Search Your location" />
            </div>
            <div className="container">
              <label htmlFor="">Check-in</label>
              <input type="date" />
            </div>
            <div className="container">
              <label htmlFor="">Check-out</label>
              <input type="date" />
            </div>
            <button>Explore Now</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
