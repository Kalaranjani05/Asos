import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleLogin = () => {
    if (email == "admin" && password == "admin") {
      alert("Successfully logged In");
      Navigate("/app");
    } else {
      alert("Enter valid inputs");
      email("");
      password("");
    }
  };

  return (
    <div id="container">
      <h2 id="login">Login</h2>
      <form onSubmit={handleLogin} id="form">
        <div className="input-container">
          <input
            id="input"
            type="text"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="fa-solid fa-envelope" id="icon"></i>
        </div>
        <div className="input-container">
          <input
            id="input"
            type="password"
            placeholder="Enter Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fa-solid fa-lock" id="icon"></i>
        </div>
        <button id="btn" type="submit">
          Login
        </button>
      </form>

      <Link to="/signup" id="signup">
        If you are new user <span> click here</span>{" "}
      </Link>
    </div>
  );
};

export default Login;
