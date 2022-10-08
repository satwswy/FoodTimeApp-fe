import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import DatePicker from 'react-datepicker'
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [city, setCity] = useState(location.state.city);
  const [date, setDate] = useState(location.state.selectedDate);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>city</label>
              <input placeholder={city} type="text" onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <DatePicker
              className="select-date2"
              selected={date}
              onChange={date => setDate(date)}
              minDate={new Date()}
              />
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">People</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.people}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Tables</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.tables}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
