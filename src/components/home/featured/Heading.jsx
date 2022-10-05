import React from "react"
import './Featured.css'

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='featured-heading'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
