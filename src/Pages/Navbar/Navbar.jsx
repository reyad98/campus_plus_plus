// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/green_logo.jpg";
import "./Navbar.css"; // CSS for styling

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleDropdownToggle = (link) => {
    setActiveDropdown((prevDropdown) => (prevDropdown === link ? null : link));
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuActive((prevValue) => !prevValue);
  };

  return (
    <div className={`main-nav ${mobileMenuActive ? "mobile-active" : ""}`}>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="left-section">
          <img src={logo} alt="" />
          <small>CODING ACADEMY</small>
        </div>
      </Link>
      <div className="right-section">
        <div
          className={`hamburger-icon ${mobileMenuActive ? "active" : ""}`}
          onClick={handleMobileMenuToggle}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul
          className={`nav-links ${
            mobileMenuActive ? "mobile-menu-active" : ""
          }`}
        >
          <li>
            <span>
              <i className="fas fa-info-circle"></i>
              <Link to="/about">ABOUT</Link>
            </span>
          </li>
          <li
            className={`dropdown ${
              activeDropdown === "ADMINISTRATION" ? "hovered" : ""
            }`}
            onMouseEnter={() => handleDropdownToggle("ADMINISTRATION")}
            onMouseLeave={() => handleDropdownToggle("ADMINISTRATION")}
          >
            <span>
              <i className="fas fa-university"></i> ADMINISTRATION
            </span>
            <div
              className={`dropdown-content ${
                activeDropdown === "ADMINISTRATION" ? "open" : ""
              }`}
            >
              <Link to="/administration/governing_body">
                <i className="fas fa-users"></i> Governing Body
              </Link>
              <Link to="/administration/principalmessage">
                <i className="fas fa-user"></i> Principal Message
              </Link>
              <Link to="/administration/disipline">
                <i className="fas fa-user-tie"></i> Discipline Team
              </Link>
              <Link to="/administration/teachers">
                <i className="fas fa-chalkboard-teacher"></i> Teachers
              </Link>
              <Link to="/administration/staff">
                <i className="fas fa-user-friends"></i> Staff
              </Link>
            </div>
          </li>
          <li
            className={`dropdown ${
              activeDropdown === "ACADEMIC" ? "hovered" : ""
            }`}
            onMouseEnter={() => handleDropdownToggle("ACADEMIC")}
            onMouseLeave={() => handleDropdownToggle("ACADEMIC")}
          >
            <span>
              {" "}
              <i className="fas fa-graduation-cap"></i>ACADEMIC
            </span>
            <div
              className={`dropdown-content ${
                activeDropdown === "ACADEMIC" ? "open" : ""
              }`}
            >
              <Link to="/academic/option1">Option 1</Link>
              <Link to="/academic/resultcard">Result Card</Link>
              <Link to="/academic/publicexamresult">Public Exam Result</Link>
              <Link to="/academic/latestnews">Latest News & Events</Link>
            </div>
          </li>
          {/* Other links with dropdowns */}
          <li
            className={`dropdown ${
              activeDropdown === "ADMISSION" ? "hovered" : ""
            }`}
            onMouseEnter={() => handleDropdownToggle("ADMISSION")}
            onMouseLeave={() => handleDropdownToggle("ADMISSION")}
          >
            <span>
              {" "}
              <i className="fas fa-user-graduate"></i> ADMISSION
            </span>
            <div
              className={`dropdown-content ${
                activeDropdown === "ADMISSION" ? "open" : ""
              }`}
            >
              <Link to="/admission/applynow">Apply Now</Link>
              <Link to="/admission/option2">Option 2</Link>
              <Link to="/admission/option3">Option 3</Link>
              <Link to="/admission/option4">Option 4</Link>
            </div>
          </li>
          {/* Other links with dropdowns */}
          <li
            className={`dropdown ${
              activeDropdown === "CLUBES" ? "hovered" : ""
            }`}
            onMouseEnter={() => handleDropdownToggle("CLUBES")}
            onMouseLeave={() => handleDropdownToggle("CLUBES")}
          >
            <span>
              <i className="fas fa-user-friends"></i> CLUBES
            </span>
            <div
              className={`dropdown-content ${
                activeDropdown === "CLUBES" ? "open" : ""
              }`}
            >
              <Link to="/clubes/option1">Option 1</Link>
              <Link to="/clubes/option2">Option 2</Link>
              <Link to="/clubes/option3">Option 3</Link>
              <Link to="/clubes/option4">Option 4</Link>
            </div>
          </li>
          {/* Other links with dropdowns */}
          <li>
            <span>
              <Link to="/notice">
                {" "}
                <i className="fas fa-bell"></i> NOTICE
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/transports">
                <i className="fas fa-bus"></i> TRANSPORTS
              </Link>
            </span>
          </li>
          <li>
            <span>
              {" "}
              <Link to="/gallery">
                <i className="fas fa-images"></i> GALLERY
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
