import React from 'react'
import './Location.css'
import { useNavigate } from "react-router-dom";
import useFetch from '../../../hooks/useFetch';
const Location = () => {

    const { data, loading, error, } = useFetch("/restaurants/countByCity?cities=athens,thessaloniki,patra,xanthi,veria")

    const navigate = useNavigate();

    return (
        <section className='location-div'>
            {loading ? ("Loading please wait") : (<> <div className='featured-heading'>
                <h1>Search By Location</h1>
                <p>Find Restaurants in your local City</p>
            </div>
                <div className="destinations">
                    <div className="destination" onClick={() => {
                        navigate("/searchList", { state: { city: "Athens" } })
                    }}>
                        <img src="https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1193397715.jpg" alt="" />
                        <h3>Athens</h3>
                        <p>Restaurants: {data[0]}</p>
                    </div>
                    <div className="destination" onClick={() => {
                        navigate("/searchList", { state: { city: "Thessaloniki" } })
                    }}>
                        <img src="https://www.hellascar.com/wp-content/uploads/2020/02/thessaloniki-rent-a-car.jpg" alt="" />
                        <h3>Thessaloniki</h3>
                        <p>Restaurants: {data[1]}</p>
                    </div>
                    <div className="destination" onClick={() => {
                        navigate("/searchList", { state: { city: "Patra" } })
                    }}>
                        <img src="https://explore.patras.gr/wp-content/uploads/2021/02/plateiaYpsilonAlonion-3-1024x682.jpg" alt="" />
                        <h3>Patra</h3>
                        <p>Restaurants: {data[2]}</p>
                    </div>
                    <div className="destination" onClick={() => {
                        navigate("/searchList", { state: { city: "Xanthi" } })
                    }}>
                        <img src="https://www.visitgreece.gr/files/merakos_001_xanthi-oldcity_1310x769.jpg" alt="" />
                        <h3>Xanthi</h3>
                        <p>Restaurants: {data[3]}</p>
                    </div>
                    <div className="destination" onClick={() => {
                        navigate("/searchList", { state: { city: "Veria" } })
                    }}>
                        <img src="https://www.ertnews.gr/wp-content/uploads/2022/09/veroia-geniki-1-2048x1365-1.jpg" alt="" />
                        <h3>Veria</h3>
                        <p>Restaurants: {data[4]}</p>
                    </div>


                </div></>)}
        </section>
    )
}

export default Location