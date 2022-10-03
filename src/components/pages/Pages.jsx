import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import LoginComponent from "../login/LoginComponent"
import RegisterComponent from "../register/RegisterComponent"
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/services' element={<Services/>} />
          <Route  path='/blog' element={<Blog/>} />
          <Route  path='/contact' element={<Contact/>} />
          <Route  path='/login' element={<LoginComponent/>} />
          <Route  path='/register' element={<RegisterComponent/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
