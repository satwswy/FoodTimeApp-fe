import React from "react"
import "./recent.css"
import useFetch from "../../../hooks/useFetch"

const Recent = () => {
    const { data, loading, error, } = useFetch("/restaurants")
    const recentData = data.slice(0,5)
    
  return (
    <>
      <section className='recent-div'>
            <div className='featured-heading'>
                <h1>Recently Added</h1>
                <p>Find Recently Added Restaurants</p>
            </div>
            <div className="restaurants">
                {recentData.map((restaurant) => {
                    return (
                        <div className="restaurant">
                            <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
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
