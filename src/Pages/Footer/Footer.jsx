import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // CSS for styling

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer-columns">
        <div className="footer-column">
          <h3>Important Links</h3>
          <ul>
            <li>
              <Link to="/academics">Academics</Link>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Academics</h3>
          <ul>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Information</h3>
          <ul>
            <li>Address: 123 Main Street, City</li>
            <li>Email: info@example.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-icons">
        <Link
          to="https://web.facebook.com/kftcollegiateschool"
          className="social-icon"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link
          to="https://www.twitter.com"
          className="social-icon"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </Link>
        <Link
          to="https://www.instagram.com"
          className="social-icon"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </Link>
        <Link
          to="https://www.linkedin.com"
          className="social-icon"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </div>
      <div className="copy-right">
        &copy; {new Date().getFullYear()} Anisur Rahman
      </div>
    </footer>
  );
};

export default Footer;
