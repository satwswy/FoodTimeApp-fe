import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    
    <div className="searchItem" >
      <img
        src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Restaurant</h1>
        <div className="rest-details">
          <div className="rest-details-item"> <span className="rest-details-item-span">Restaurant Name :</span>  {item.name}</div>
          <div className="rest-details-item"> <span className="rest-details-item-span">City :</span>  {item.city}</div>
          <div className="rest-details-item"> <span className="rest-details-item-span">Type :</span>  {item.type}</div>
        </div>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <Link to={`/restaurants/${item._id}`}>
          <button className="siCheckButton">Check Restaurant</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
