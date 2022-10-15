import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import LoginComponent from "../login/LoginComponent"
import RegisterComponent from "../register/RegisterComponent"
import Header from "../header/Header"
import List from "../list/List"
import Restaurant from "../restaurant/Restaurant"
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/login' element={<LoginComponent/>} />
          <Route  path='/register' element={<RegisterComponent/>} />
          <Route  path='/searchList' element={<List/>} />
          <Route  path='/restaurants/:id' element={<Restaurant/>} />
        </Routes>
      </Router>
    </>
  )
}

export default Pages
