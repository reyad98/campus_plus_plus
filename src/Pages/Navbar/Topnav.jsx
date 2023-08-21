// TopNav.js
import React from "react";
import { Link } from "react-router-dom";
import "./Topnav.css"; // CSS for styling

const Topnav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-logo">
              EIIN : 108162 | College Code : 1304 | School Code : 1216 |{" "}
              <i className="fas fa-phone"></i> (+088) 01317600166
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/login" className="navbar-logo_login">
            <i className="fas fa-sign-in-alt"> </i> Admin Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Topnav;
