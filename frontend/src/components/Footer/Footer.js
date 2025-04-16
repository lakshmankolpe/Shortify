import React from "react";
import "./Footer.css";
import LogoImg from "./../../assets/link1.png";
import LoctionsImg from "./../../assets/loction.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-main-container">
        <div className="footer-logo-item-container">
          <img src={LogoImg} className="logo-icon" />
          <h2 className="logo-text">Shortify</h2>
        </div>

        <div className="footer-item">
          <Link to={""}>
            <img src={LoctionsImg} className="loction-icon" />
            <h3 className="footer-text">
              Address:
              <br />
              Office No. 3, Sai Complex, 2nd floor, Fergusson College Rd,
              opposite Roopali Hotel, Shivajinagar, Pune, Maharashtra 411004
            </h3>
          </Link>
        </div>

        <div className="footer-item">
          <Link to={"tel:+919284528848"}>
            <h3 className="footer-text">📞+91 9284528848</h3>
          </Link>
          <Link to={"mailto:Shortify912@gmail.com"}>
            <h3 className="footer-text"> ✉️ Shortify912@gmail.com</h3>{" "}
          </Link>
          <h3 className="footer-text">
            {" "}
            © 2024 Shortifylink. All rights reserved.
          </h3>
        </div>
        <div className="footer-item">
          <Link to={"/policy"} className="footer-text">
            Privacy Policy
          </Link>
          <Link to={"/policy"}>
            {" "}
            <h3 className="footer-text">Terms and Condition</h3>
          </Link>
          <Link to={"/contact"}>
            {" "}
            <h3 className="footer-text">Contact Us</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
