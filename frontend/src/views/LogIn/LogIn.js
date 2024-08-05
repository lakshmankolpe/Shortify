import React, { useState } from "react";
import "./LogIn.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      {
        email: email,
        password: password,
      }
    );
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div>
      <h1 className="app-title">User LogIn</h1>

      <form className="user-input-form">
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
      </form>
      <Toaster />
    </div>
  );
}

export default LogIn;
