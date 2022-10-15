import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import DatePicker from 'react-datepicker'
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch.js"

const List = () => {
  const location = useLocation();
  const [city, setCity] = useState(location.state.city);
  const [type, setType] = useState([location.state.type]);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);

  const {data, loading, error, reFetch} = useFetch(`/restaurants`)
  const handleClick = () =>{
    reFetch();
  }
  console.log(dates)

  const toggleType = (singleType) => {
    const singleTypeIndex = type.findIndex(t => t === singleType) // this is giving me the position of the element I clicked on
    let copyOfType = [...type]
    if(singleTypeIndex >= 0) { // this means the element has been found
      copyOfType.splice(singleTypeIndex, 1)
    } else {
      copyOfType.push(singleType)
    }
    setType(copyOfType)
  }

  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>city</label>
              <input placeholder={city || 'Add a city'} type="text" onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <DatePicker
              className="select-date2"
              selected={dates || new Date()}
              onChange={dates => setDates(dates)}
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
                    placeholder={options ? options.people : 1}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Tables</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options ? options.tables : 1}
                  />
                </div>
              </div>
            </div>
            <div className="lsItem">
              <label>Categories</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Pizza</span>
                  <input
                    type="checkbox"
                    className="lsOptionInput"
                    checked={type.includes("pizza") ? true : false}
                    onChange={e => toggleType('pizza')}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Burgers</span>
                  <input
                    type="checkbox"
                    className="lsOptionInput"
                    checked={type.includes("burgers") ? true : false} 
                    onChange={e => toggleType('burgers')}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Pasta</span>
                  <input
                    type="checkbox"
                    className="lsOptionInput"
                    checked={type.includes("pasta") ? true : false}
                    onChange={e => toggleType('pasta')}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Grill</span>
                  <input
                    type="checkbox"
                    className="lsOptionInput"
                    checked={type.includes("grill") ? true : false}
                    onChange={e => toggleType('grill')}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">SeaFood</span>
                  <input
                    type="checkbox"
                    className="lsOptionInput"
                    checked={type.includes("seaFood") ? true : false}
                    onChange={e => toggleType('seaFood')}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
            {data.map(item=>(
            <SearchItem item={item} key={item._id}/>
            ))}
            </>}       
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
