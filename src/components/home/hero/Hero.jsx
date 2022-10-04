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
            <h1>TRAVEL TO EXPLORE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
              tenetur!
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
