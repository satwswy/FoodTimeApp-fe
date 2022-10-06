import React from "react"
import "./Footer.css"
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <>


      <div className="footer">
        
          <div className="brand container">
            <img src="https://img.freepik.com/premium-vector/food-time-logo-template-design_20029-676.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
              repudiandae.
            </p>
            <ul>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <GrLinkedinOption />
              </li>
              <li>
                <BsTwitter />
              </li>
            </ul>
          </div>
          <div className="about container">
            <div className="title">
              <h3>About Us</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              eligendi repellat laudantium blanditiis iure nulla, ut aliquam
              itaque unde nesciunt cum veritatis perferendis vel expedita! Nam
            </p>
          </div>
          <div className="contact container">
            <div className="title">
              <h3>Contact Us</h3>
            </div>
            <p>1231231231</p>
            <p>FoodTime@</p>
            <p>@FoodTime</p>
          </div>
      
        <div className="lower__footer">
          <h2>
            Copyright &copy; 2022 <span>Food Time</span>
          </h2>
        </div>
      </div>

    </>
  )
}

export default Footer
