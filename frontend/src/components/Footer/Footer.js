import React from "react";
import "./Footer.css";
import LogoImg from "./../../assets/logo.png";
import LoctionsImg from "./../../assets/loction.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div>
      <div className="footer-main-container">
        <div className="footer-logo-item-container">
          <img src={LogoImg} className="logo-icon" />
          <h2 className="logo-text">Shortify</h2>
        </div>

        <div className="footer-item">
          <Link to={""}>
            <img src={LoctionsImg} className="loction-icon" />
            <p className="footer-text">
              Address:
              <br />
              Office No. 3, Sai Complex, 2nd floor, Fergusson College Rd,
              opposite Roopali Hotel, Shivajinagar, Pune, Maharashtra 411004
            </p>
          </Link>
        </div>

        <div className="footer-item">
          <Link to={"tel:+919284528848"}>
            <p className="footer-text">📞+91 9284528848</p>
          </Link>
          <Link to={"mailto:Shortify912@gmail.com"}>
            <p className="footer-text"> ✉️ Shortify912@gmail.com</p>
          </Link>
         
        </div>

        <div className="footer-item">
          <Link to={"/policy"} className="footer-text">
            Privacy Policy
          </Link>
          <Link to={"/policy"}>
            <p className="footer-text">Terms and Condition</p>
          </Link>
          <Link to={"/contact"}>
            <p className="footer-text">Contact Us</p>
          </Link>
        </div>
        
     
      </div>
      <h3 className="copy-right-text-container footer-text "> 
          © 2024 Shortifylink. All rights reserved.</h3>
     
     
          </div>
    </>
  );
}

export default Footer;
