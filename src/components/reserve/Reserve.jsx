import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, restaurantId }) => {
  const [selectedTables, setSelectedTables] = useState([]);
  const { data, loading, error } = useFetch(`/restaurants/table/${restaurantId}`);
  const { dates } = useContext(SearchContext);



  console.log(dates)
  const isAvailable = (tableNumber) => {
    const isFound = tableNumber.unavailableDates;
    console.log(isFound)

    
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedTables(
      checked
        ? [...selectedTables, value]
        : selectedTables.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedTables.map((tableId) => {
          const res = axios.put(`/tables/availability/${tableId}`, {
            dates: dates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) { }
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your tables:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
            </div>
            <div className="rSelectTables">
              {item.tableNumbers.map((tableNumber) => (
                <div className="table">
                  <label>{tableNumber.number}</label>
                  <input
                    type="checkbox"
                    value={tableNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(tableNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
