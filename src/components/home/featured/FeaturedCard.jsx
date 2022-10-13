import React from "react"
import { useNavigate } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import { featured } from "../../data/Data"
import './Featured.css'
const FeaturedCard = () => {
  const navigate = useNavigate();
  const { data, loading, error, } = useFetch("/restaurants/countByType")
  const images = [
    "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    "https://cdn.iconscout.com/icon/premium/png-256-thumb/food-time-3970087-3282549.png",
    "https://iconarchive.com/download/i99095/icons-land/3d-food/Dish-Pasta-Spaghetti.ico",
    "https://cdn-icons-png.flaticon.com/128/3106/3106126.png",
    "https://t4.ftcdn.net/jpg/03/67/35/85/360_F_367358597_A0GR2r5h4tw4JD40XmdxcVmGaNf3t8Ru.jpg",
  ];
  return (
    <div className="content grid5 mtop">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div onClick={() => {
                navigate("/searchList", { state: { type: data[i]?.type } })
            }} className="box" key={i}>
                <img
                  src={img}
                  alt=""
                  className="f-img"
                />
                <h4 className="f-h4">{data[i]?.type}</h4>
                <label>Restaurants: {data[i]?.count}</label>

              </div>
            ))}
        </>
      )}
    </div>
  )
}

export default FeaturedCard
