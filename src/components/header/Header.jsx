import React, { useContext, useState } from "react"
import "./header.css"
import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {

  const { user,loading, error, dispatch } = useContext(AuthContext);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
};

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
          {user && user.isAdmin && <div className="nav-item">
            <NavLink
              to="/admin"
              className="nav-links"
            >
              Management
            </NavLink>
          </div>}
          <div className="nav-item">
            <NavLink
              to="/"
              className="nav-links"
            >
              Contact Us
            </NavLink>
          </div>
          {!user && <> <div className="nav-item">
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
          {user && <> <div className="nav-item profile-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg> <span className="username-span">{user.username}</span>
            
          </div>
          <div className="nav-item logout" onClick={handleClick}>
              Logout
            </div>
          </>}
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
