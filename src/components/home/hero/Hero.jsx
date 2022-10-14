import React from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import "./hero.css"
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [city, setCity] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    people: 1,
    tables: 1,
  });
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/searchList", { state: { city, selectedDate, options } });
  };
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <>
      <section className="section-div">
        <div className="hero-background">
          <img src="https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </div>
        <div className="hero-content">
          <div className="title">
            <h1>Search Your Next Restaurant Reservation</h1>
            <p>
            Find new and featured restaurants located in your city.
            </p>
          </div>
          <div className="search">
            <div className="container">
              <label htmlFor="">Location</label>
              <input
               type="text"
               placeholder="Select City"
               onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className="container">
              <label htmlFor="">Date</label>
              <DatePicker
              className="select-date"
              onChange={date => setSelectedDate(date)}
              selected={selectedDate}
              minDate={new Date()}
              showTimeSelect
              dateFormat= 'dd/MM/yy hh:mm aa'
              />
            </div>
            <div className="headerSearchItem">
                
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.people} people ·  ${options.tables} tables`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">People</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.people <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("people", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.people}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("people", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Tables</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.tables <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("tables", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.tables}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("tables", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            <button 
            className="explore-btn"
            onClick={handleSearch}
            >
              Explore Now
           </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
