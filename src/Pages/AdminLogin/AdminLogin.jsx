import React, { useState } from "react";
import login2 from "../images/log4.jpg";
import login1 from "../images/log5.jpg";

import "./AdminLogin.css"; // Create this CSS file for styling
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
    <div className="admin-login-container">
      <div className="inner-container left">
        <img src={login1} alt="Image 1" />
      </div>
      <div className="inner-container_middle">
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="inner-container right">
        <img src={login2} />
      </div>
    </div>
  );
};

export default AdminLogin;
