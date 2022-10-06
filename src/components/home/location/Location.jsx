import React from 'react'
import { location } from "../../data/Data"
import './Location.css'

function Location() {
    return (
        <section className='location-div'>
            <div className='featured-heading'>
                <h1>Search By Location</h1>
                <p>Find Restaurants in your local City</p>
            </div>
            <div className="destinations">
                {location.map((destination) => {
                    return (
                        <div className="destination">
                            <img src={destination.image} alt="" />
                            <h3>{destination.title}</h3>
                            <p>{destination.duration}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Location