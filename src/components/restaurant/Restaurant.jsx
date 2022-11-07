import "./restaurant.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../reserve/Reserve";

const Restaurant = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const {data, loading, error, reFetch} = useFetch(`/restaurants/find/${id}`)

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {dates, options} = useContext(SearchContext)
 console.log(data.photos)
  const photos = [
    {
      src: "https://www.dome-restaurant.com/gallery/Images/gallery/gal4.jpg",
    },
    {
      src: "https://www.augoutdemma.be/wp-content/uploads/2013/10/thehotel-3.jpg",
    },
    {
      src: "https://www.daioscovecrete.com/wp-content/uploads/2019/01/dc_ocean_restaurant_terrace_01-1305x870.jpg",
    },
    {
      src: "https://www.daioscovecrete.com/wp-content/uploads/2019/01/dc_pangea_restaurant_indoor_patio_01-1-1570x870.jpg",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/57aaa5b2e6f2e16320ac4aca/1651452848925-OZQ6KXVRUTBQXZ97OR4F/image-asset.jpeg?format=1500w",
    },
    {
      src: "https://cdn.vox-cdn.com/thumbor/ZJMJWfA4wr2KVp9AMCOUjH5OlsI=/0x0:1200x801/1200x800/filters:focal(504x305:696x497)/cdn.vox-cdn.com/uploads/chorus_image/image/52383559/2016_09_14_michaels_001.0.0.jpeg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      {loading?"loading" : <div className="restaurantContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="restaurantWrapper">
          <h1 className="restaurantTitle">{data.name}</h1>
          <div className="restaurantAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="restaurantDistance">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <span className="restaurantPriceHighlight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <div className="restaurantImages">
            {data.photos && data.photos.map((photo, i) => (
              <div className="restaurantImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="restaurantImg"
                />
              </div>
            ))}
          </div>
          <div className="restaurantDetails">
            <div className="restaurantDetailsTexts">
              <h1 className="restaurantTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
              <p className="restaurantDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, qui tempora neque, quia aut repellendus amet natus ab impedit quasi esse ut, quod sapiente? Minus voluptates molestias corporis provident beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rerum id ab magnam pariatur corporis? Vitae fugiat eaque neque ex aperiam voluptatum. Fuga, maxime. A voluptatibus cupiditate ut fugiat iste.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis mollitia accusamus, unde suscipit, ipsam laudantium laboriosam minus, ea deserunt aliquid maxime vel explicabo? Eaque sunt fugit veniam, accusantium cum fuga.
              </p>
            </div>
            <div className="restaurantDetailsPrice">
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>}
      {openModal && <Reserve setOpen={setOpenModal} restaurantId={id}/>}
    </div>
  );
};

export default Restaurant;
