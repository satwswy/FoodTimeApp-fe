import "./single.scss";
import Sidebar from "../sidebar/Sidebar";
import { useContext } from "react";

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { AuthContext } from "../../../context/AuthContext";



const Single = () => {
  const { user } = useContext(AuthContext);
  const id = user._id
  const { data, loading, error, reFetch } = useFetch(`/users/${id}`)

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  function handleUserNameChange(e) {
    setUsername(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handleAgeChange(e) {
    setAge(e.target.value)
  }

  const update = async () => {
    try {
      const id = user._id
      const data = {};
      if (username) data.username = username;
      if (email) data.email = email;
      if (age) data.age = age
      await axios.put(`/users/${id}`, data);
    } catch (error) {
      console.log(error)
    }
    handleClose()
  }



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <div className="top">
            <div className="left">
              <div className="editSingleButton" onClick={handleShow}>Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">{data.username}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{data.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">age:</span>
                    <span className="itemValue">
                      {data.age}
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
          {show && <div className="create">
            <h2>Edit User</h2>
            <form>
              <label>Username:</label>
              <input
                type="text"
                required
                value={username}
                onChange={handleUserNameChange}
              />
              <label>Email:</label>
              <input
                required
                value={email}
                onChange={handleEmail}
              />
              <label>Age:</label>
              <input
                type="number"
                min="0"
                required
                value={age}
                onChange={handleAgeChange}
              />
              <button onClick={update}>Update</button>
              <button onClick={handleClose}>Close</button>
            </form>
          </div>}
        </div>
      </div>

    </>

  );
};

export default Single;
