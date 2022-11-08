import React from "react"
import "./recent.css"
import useFetch from "../../../hooks/useFetch"

const Recent = () => {
    const { data, loading, error, } = useFetch("/restaurants")
    const recentData = data.slice(0, 5)

    return (
        <>
            <section className='recent-div'>
                {loading ? "Loading" : <>
                    <div className='featured-heading'>
                        <h1>Recently Added</h1>
                        <p>Find Recently Added Restaurants</p>
                    </div>
                    <div className="restaurants">
                        {recentData.map((restaurant,index) => {
                            return (
                                <div className="restaurant" key={index}>
                                    {/* restaurant.photos[0] */}
                                    <img src={restaurant.photos[0]} alt="" />
                                    <h3>{restaurant.name}</h3>
                                    <p>{restaurant.city}</p>
                                </div>
                            );
                        })}
                    </div>
                </>}
            </section>
        </>
    )
}

export default Recent
