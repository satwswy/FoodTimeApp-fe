import React, { useContext, useState } from "react"
import "./header.css"
import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {

  const { user } = useContext(AuthContext);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container" ref={navRef}>
          <div className="nav-logo">
          <NavLink
              to="/"
              className="nav-links"
            >
              Food Time
            </NavLink> 
          </div>
          <div className="nav-item">
            <NavLink
              to="/"
              className="nav-links"
            >
              Home
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/"
              className="nav-links"
            >
              About
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/"
              className="nav-links"
            >
              Blog
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/"
              className="nav-links"
            >
              Contact Us
            </NavLink>
          </div>
         {!user &&<> <div className="nav-item">
            <NavLink
              to="/register"
              className="nav-links"
            >
              Register
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/login"
              className="nav-links"
            >
              Login
            </NavLink>
          </div></>}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </>
  );
}

export default Header
