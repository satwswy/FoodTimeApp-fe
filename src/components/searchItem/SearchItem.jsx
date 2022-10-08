import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Restaurants</h1>
        <span className="siFeatures">
        name
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <button className="siCheckButton">Check Restaurant</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
