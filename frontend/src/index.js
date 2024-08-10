import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import LogIn from "./views/LogIn/LogIn";
import SignUp from "./views/SignUp/SignUp";
import ShowLinks from "./views/ShowLinks/ShowLinks.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/showlinks",
    element: <ShowLinks />,
  },
  {
    path:"/navbar",
    element:<Navbar/>
  }
  ,
  {
    path:"/footer",
    element:<Footer/>
  }
]);
root.render(<RouterProvider router={router} />);
