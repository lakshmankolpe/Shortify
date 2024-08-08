import React, { useEffect, useState } from "react";
import "./Navbar.css";
import LinkImg from "../../assets/link1.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
  return (
    <div className="navbar-main-container">
      <div className="logo-container">
        <img src={LinkImg} className="logo-icon" />
        <span className="log-name">Shortify </span>
      </div>

      <div className="search-item-container">
        <Link to="/" className="search-item">
          Home
        </Link>
        {/* <Link to="/" className="search-item">
          generate
        </Link> */}
        <Link to="/showlinks" className="search-item">
          my Links
        </Link>
        <span className="search-item-username">{user.fullName}</span>
        <span className="search-item-logout" onClick={()=>{
          localStorage.clear()
          toast.success("User Logout successfully")
          setTimeout(() => {
            window.location.href="/login"
          }, 2000);
        }}>Logout</span>
        </div>
    </div>
  );
}

export default Navbar;
