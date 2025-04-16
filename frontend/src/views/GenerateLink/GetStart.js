import React from 'react'
import '.GetStart.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

function GetStart() {
    return (
        <div>
          <Navbar />
          <div className="home">
            <div className="home-left">
            <img src={logo} className='website-logo' alt=''/>
            </div>
            <div className="home__container">
              <h1 className="home__title">Discover the Best with Us!</h1>
              <p className="home__description">
                Explore a world of creativity, inspiration, and endless possibilities.
                Let us guide you on an amazing journey through the art of modern home design.
              </p>
              <Link to="/generate" style={{textDecoration : "none"}}>
              <button className="auth-btn">Get Started</button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

export default GetStart