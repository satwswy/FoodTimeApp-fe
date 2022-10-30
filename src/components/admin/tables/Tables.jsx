import "./tables.scss";
import Sidebar from "../sidebar/Sidebar";
import { useContext } from "react";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import useFetch from "../../../hooks/useFetch";



const Tables = () => {

    const location = useLocation();
    //  const [restaurant, setRestaurant] = useState(location.state.restaurantId);
    const { user } = useContext(AuthContext);
    const userId = user._id
    // const { data, loading, error, reFetch } = useFetch(`restaurants/table/${restaurant}`)
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [maxPeople, setMaxPeople] = useState("");
    const [desc, setDesc] = useState("");
    const [newid, setNewid] = useState("");
    const [show, setShow] = useState(false);
    const [tables, setTables] = useState([]);
    const [data, setData]= useState([]);
    const navigate = useNavigate();

    const params = useParams();


    useEffect(() => {

        fetchUsers()

    }, [])
    const fetchUsers = async () => {
        try {
            const response =
                await fetch(`http://localhost:8800/api/restaurants/table/${params.id}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
            if (response.ok) {
                const tablesList = await response.json()
                setData(tablesList)
            } else {
                console.log('Error in fetching')
            }
        } catch (error) {
            console.log(error)
        }
    }


    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handlemaxPeople(e) {
        setMaxPeople(e.target.value)
    }
    function handleDesc(e) {
        setDesc(e.target.value)
    }
    const update = async () => {
        try {
            const id2 = newid
            const data = {};
            if (title) data.title = title;
            if (maxPeople) data.maxPeople = maxPeople;
            if (desc) data.desc = desc
            await axios.put(`/tables/${id2}`, data);
        } catch (error) {
            console.log(error)
        }
        handleClose()
    }



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

                        {table._id===newid && show && <div className="create">
                            <h2>Edit Table</h2>
                            <form>
                                <label>Title:</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={handleTitle}
                                />
                                <label>Description:</label>
                                <input
                                    type="text"
                                    value={desc}
                                    onChange={handleDesc}
                                />
                                <label>maxPeople:</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="20"
                                    value={maxPeople}
                                    onChange={handlemaxPeople}
                                />
                                <button onClick={update}>Update</button>
                                <button onClick={handleClose}>Close</button>
                            </form>
                        </div>}
                    </>
                    )}
                </div>

            </div>



        </>


    );
};

export default Tables;