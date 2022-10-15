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
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Restaurant = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const {data, loading, error, reFetch} = useFetch(`/restaurants/find/${id}`)

  const {dates, options} = useContext(SearchContext)
 
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="restaurantWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="restaurantTitle">{data.name}</h1>
          <div className="restaurantAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
          <span className="restaurantDistance">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <span className="restaurantPriceHighlight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <div className="restaurantImages">
            {photos.map((photo, i) => (
              <div className="restaurantImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
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
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Restaurant;
