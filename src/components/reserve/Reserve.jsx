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
  const { data, loading, error } = useFetch(`https://foodtime-api.onrender.com/api/restaurants/table/${restaurantId}`);
  const { dates } = useContext(SearchContext);

console.log('DATE SEARCHED: ', typeof dates)

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
          const res = axios.put(`https://foodtime-api.onrender.com/api/tables/availability/${tableId}`, {
            dates: dates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) { }
  };

  const formatDateToString = (dateObject) => {
    let newDate = dateObject.toString().split(' ')
    newDate.pop()
    newDate.pop()
    newDate.pop()
    newDate.pop()
    newDate.pop()
    newDate.pop()
    let searchedDateString = newDate.join(' ')
    return searchedDateString
  }

  const returnTrue = (tableNumber) => {
    console.log(tableNumber)
    console.log(new Date(tableNumber.unavailableDates[0]?.split('T')[0]))

    let searchedDate = formatDateToString(dates)
    let found = false

    tableNumber.unavailableDates.forEach(unDate => {
      let unDateToRightDate = new Date(unDate.split('T')[0])  
      let unDateToRightString = formatDateToString(unDateToRightDate)
      if(searchedDate === unDateToRightString) {
        found = true
      }
    })

    return found

  }

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
              {/* <div className="rDesc">{item.desc}</div> */}
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
            </div>
            <div className="rSelectTables">
              {item.tableNumbers.map((tableNumber) => (
                //unavailableDates
                <div className="table">
                  <label>{tableNumber.number}</label>
                  <input
                    type="checkbox"
                    value={tableNumber._id}
                    onChange={handleSelect}
                    disabled={returnTrue(tableNumber)}
                    // disabled={() => {
                    //   let searchedDateArray = dates.split(' ')
                    //   searchedDateArray.pop()
                    //   searchedDateArray.pop()
                    //   let searchedDateString = searchedDateArray.join(' ')
                    //   console.log(searchedDateString)
                    //   return true
                    // }}
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
