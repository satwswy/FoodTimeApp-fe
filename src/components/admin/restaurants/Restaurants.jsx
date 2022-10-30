import "./restaurants.scss";
import Sidebar from "../sidebar/Sidebar";
import { useContext } from "react";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { AuthContext } from "../../../context/AuthContext";


const Restaurants = () => {

    const { user } = useContext(AuthContext);
    const id = user._id
    const { data, loading, error, reFetch } = useFetch(`/users/rest/${id}`)
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [address, setAddress] = useState("");
    const [desc, setDesc] = useState("");
    const [newid, setNewid] = useState("");
    const [show, setShow] = useState(false);
    const [tables, setTables] = useState([]);


    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleType(e) {
        setType(e.target.value)
    }

    function handleAddress(e) {
        setAddress(e.target.value)
    }
    function handleDesc(e) {
        setDesc(e.target.value)
    }

    const update = async () => {
        try {
            const id = newid
            const data = {};
            if (name) data.name = name;
            if (type) data.type = type;
            if (address) data.address = address
            if (desc) data.desc = desc
            await axios.put(`/restaurants/${id}`, data);
        } catch (error) {
            console.log(error)
        }
        handleClose()
    }


    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="restaurants">
                <Sidebar />
                <div className="restaurantsContainer">
                    {data.map((restaurant, index) => <>
                        <div className="top" key={index}>
                            <div className="left">
                                <div className="buttons">
                                    <div className="tablesButton" onClick={() => {
                                        navigate("/tables", { state: { restaurantId: restaurant._id } })
                                    }}  > Tables </div>
                                    <div className="reservationsButton" onClick={() => {
                                        navigate("/reservations", { state: { restaurantId: restaurant._id } })
                                    }}  > Reservations </div>
                                    <div className="editButton" onClick={event => {
                                        handleShow();
                                        setNewid(restaurant._id);
                                    }}>Edit</div>
                                </div>

                                <h1 className="title">Information</h1>
                                <div className="item">
                                    <img
                                        src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                        alt=""
                                        className="itemImg"
                                    />
                                    <div className="details">
                                        <h1 className="itemTitle">{restaurant.name}</h1>
                                        <div className="detailItem">
                                            <span className="itemKey">Type:</span>
                                            <span className="itemValue">{restaurant.type}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">City:</span>
                                            <span className="itemValue">
                                                {restaurant.city}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Address:</span>
                                            <span className="itemValue">
                                                {restaurant.address}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Description:</span>
                                            <span className="itemValue">
                                                {restaurant.desc}
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Role:</span>
                                            <span className="itemValue">Restaurant Owner</span>
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
                                value={name}
                                onChange={handleNameChange}
                                required
                            />


                            <label>Type</label>
                            <input
                                type="text"
                                placeholder="Type *"
                                name="Type"
                                value={type}
                                onChange={handleType}
                                required
                            />


                            <label>Address</label>
                            <input
                                type="text"
                                placeholder="Address *"
                                name="Address"
                                value={address}
                                onChange={handleAddress}
                                min="18" max="100"
                                required
                            />


                            <label>Description</label>
                            <input
                                type="text"
                                placeholder="Desc *"
                                name="Desc"
                                value={desc}
                                onChange={handleDesc}
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

export default Restaurants;