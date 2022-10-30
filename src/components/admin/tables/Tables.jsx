import "./tables.scss";
import Sidebar from "../sidebar/Sidebar";
import { useContext } from "react";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import useFetch from "../../../hooks/useFetch";


const Tables = () => {

    const location = useLocation();
    const [restaurant, setRestaurant] = useState(location.state.restaurantId);
    const { user } = useContext(AuthContext);
    const id = user._id
    const { data, loading, error, reFetch } = useFetch(`restaurants/table/${restaurant}`)
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [address, setAddress] = useState("");
    const [desc, setDesc] = useState("");
    const [newid, setNewid] = useState("");
    const [show, setShow] = useState(false);
    const [tables, setTables] = useState([]);






    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="restaurants">
                <Sidebar />
                <div className="restaurantsContainer">
                    {data.map((table, index) => <>
                        <div className="top" key={index}>
                            <div className="left">
                                <div className="editTablesButton" onClick={event => {
                                    handleShow();
                                    setNewid(table._id);
                                }}>Edit</div>
                                <h1 className="title">Information</h1>
                                <div className="item">
                                    <img
                                        src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                        alt=""
                                        className="itemImg"
                                    />
                                    <div className="details">
                                        <h1 className="itemTitle">{table.title}</h1>
                                        <div className="detailItem">
                                            <span className="itemKey">Max People:</span>
                                            <span className="itemValue">{table.maxPeople}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Description:</span>
                                            <span className="itemValue">
                                                {table.desc}
                                            </span>
                                        </div>

                                        <div className="detailItem">
                                            <span className="itemKey">Table Numbers:</span>
                                            <span className="itemValue">
                                                <div className="tn-div">
                                                    {table.tableNumbers.map(current =>
                                                        <div >{current.number} ,</div>
                                                    )}
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="name *"
                                name="name"
                                required
                            />



                        </form>
                    </>
                    )}
                </div>

            </div>



        </>


    );
};

export default Tables;