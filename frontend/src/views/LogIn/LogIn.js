import React, { useState } from "react";
import "./LogIn.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const login = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`,
      {
        email: email,
        password: password,
      }
    );
    if (response.data.success) {
      toast.success(response.data.message);
      
      localStorage.setItem('currentUser', JSON.stringify(response.data.data))
      toast.loading("Redirecting to dashboard");
      setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <>
    <Navbar/>
    <div className="login-main-container">
      <h1 className="app-title">User LogIn</h1>

      <form className="user-login-input-form">
        <input
          type="Email"
          placeholder="Enter Your Email"
          className="user-login-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          className="user-login-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="button" className="login-button" onClick={login}>
          LogIn
        </button>
        <Link to="/signup" className="signup-text">Don't have an account? Signup</Link>
      </form>
      <Toaster />
    </div>
    </>);
}

export default LogIn;
