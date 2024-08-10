import React from "react";
import "./Footer.css";
import LogoImg from "./../../assets/link1.png";

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-logo-item-container">
        <img src={LogoImg} className="logo-icon" />
        <h2 className="logo-text">Shortify</h2>
      </div>

      <div className="footer-item">
        <h3 className="footer-text">
          Address:
          <br />
          Office No. 3, Sai Complex, 2nd floor, Fergusson College Rd, opposite
          Roopali Hotel, Shivajinagar, Pune, Maharashtra 411004
        </h3>
      </div>
      
      <div className="footer-item">
        <h3 className="footer-text">+91 9284528848</h3>
        <h3 className="footer-text"> Shortify912@gmail.com</h3>
        <h3 className="footer-text">
          © 2024 Shortifylink. All rights reserved.
        </h3>
      </div>
      <div className="footer-item">
        <h3 className="footer-text">Privacy Policy</h3>
        <h3 className="footer-text">Terms and Condition</h3>
        <h3 className="footer-text">Contact Us</h3>
      </div>
    </div>
  );
}

export default Footer;
