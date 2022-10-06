import React from "react"
import "./recent.css"
import { list } from "../../data/Data"

const Recent = () => {
  return (
    <>
      <section className='recent-div'>
            <div className='featured-heading'>
                <h1>Recently Added</h1>
                <p>Find Recently Added Restaurants</p>
            </div>
            <div className="restaurants">
                {list.map((restaurant) => {
                    return (
                        <div className="restaurant">
                            <img src={restaurant.image} alt="" />
                            <h3>{restaurant.name}</h3>
                            <p>{restaurant.city}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    </>
  )
}

export default Recent
