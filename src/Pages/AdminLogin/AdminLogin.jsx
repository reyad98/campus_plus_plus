import React, { useState } from "react";
import { Link } from "react-router-dom";
import trans3 from "../images/trans3.jpg";
import "./AdminLogin.css"; // You can define your styles in a separate CSS file

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your login logic, e.g., API call, authentication, etc.
    console.log("Login button clicked!");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="image-container">
          <img
            src={trans3}
            alt="Login Background"
            className="background-image"
          />
          <div className="image-overlay_login">
            <p>ADMIN LOGIN</p>
          </div>
        </div>
        <div className="card-content">
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to="/dashboard">
              <button className="login-button" type="submit">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
