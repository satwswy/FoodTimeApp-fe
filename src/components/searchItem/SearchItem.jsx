import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
 
  return (
    
    <div className="searchItem" >
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        
          <div className="rest-details-item"> <span className="rest-details-item-span">Restaurant Name :</span>  {item.name}</div>
          <div className="rest-details-item"> <span className="rest-details-item-span">City :</span>  {item.city}</div>
          <div className="rest-details-item"> <span className="rest-details-item-span">Type :</span>  {item.type.map(t=>t+ " "+",")}</div>
        
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <Link style={{textDecoration: 'none'}} to={`/restaurants/${item._id}`}>
          <button className="siCheckButton" role="button">Check Restaurant</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
