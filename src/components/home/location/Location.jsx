import React from 'react'
import { location } from "../../data/Data"
import './Location.css'
import { useNavigate } from "react-router-dom";
const Location =()=> {
    const navigate = useNavigate();

    return (
        <section className='location-div'>
            <div className='featured-heading'>
                <h1>Search By Location</h1>
                <p>Find Restaurants in your local City</p>
            </div>
            <div className="destinations">
                {location.map((location) => {
                    return (
                        <div className="destination" onClick={() => {
                            navigate("/searchList", { state: { city: location.title } })
                        }}>
                            <img src={location.image} alt="" />
                            <h3>{location.title}</h3>
                            <p>{location.number}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Location