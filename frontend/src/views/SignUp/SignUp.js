import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function SignUp() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const signup = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`,
      {
        fullName: user.fullName,
        email: user.email,
        password: user.password,
      }
    );
    if (response.data.success) {
      toast.success(response.data.message);
      
      setUser({
        fullName: "",
        email: "",
        password: "",
      });
      setTimeout(()=>{
        window.location.href ="/login"
      })
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <>
    <Navbar/>
    <div className="signup-main-container">
      <h1 className="app-title"> User SignUp </h1>
      <form className="user-input-form">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="user-signup-input"
          value={user.fullName}
          onChange={(e) => {
            setUser({ ...user, fullName: e.target.value });
          }}
        />
        <input
          type="Email"
          placeholder="Enter Your Email"
          className="user-signup-input"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          type="Password"
          placeholder="Enter Your Password"
          className="user-signup-input"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button type="button" onClick={signup} className="register-button">
          Register
        </button>
      </form>
      <Link to="/login" className='login-link'>Already have an account? Login</Link>
     
      <Toaster />
    </div>
    <Footer/>
    </>);
}

export default SignUp;
