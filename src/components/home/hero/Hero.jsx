import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Restaurant ' subtitle='Find new & featured restaurants located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Category</span>
              <input type='text' placeholder='Category' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
