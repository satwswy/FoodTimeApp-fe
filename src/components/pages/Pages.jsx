import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "../home/Home"
import LoginComponent from "../login/LoginComponent"
import RegisterComponent from "../register/RegisterComponent"
import Header from "../header/Header"
import List from "../list/List"
import Restaurant from "../restaurant/Restaurant"
import Admin from "../admin/home/Admin"
import { DarkModeContext } from "../../context/darkModeContext"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"
import Single from "../../components/admin/single/Single";
import Restaurants from "../../components/admin/restaurants/Restaurants";
import Tables from "../../components/admin/tables/Tables";
import Reservations from "../../components/admin/reservations/Reservations";
const Pages = () => {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/register' element={<RegisterComponent />} />
            <Route path='/searchList' element={<List />} />
            <Route path='/restaurants/:id' element={<Restaurant />} />


            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              }
            />
            <Route
              path="/restaurants"
              element={
                <ProtectedRoute>
                  <Restaurants />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tables"
              element={
                <ProtectedRoute>
                  <Tables />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reservations"
              element={
                <ProtectedRoute>
                  <Reservations />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default Pages
