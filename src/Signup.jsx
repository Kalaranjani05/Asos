import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/Login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (
      email === "admin" &&
      password === "admin" &&
      confirmPassword === "admin"
    ) {
      alert("Profile created successfully");
      navigate("/login");
    } else {
      alert("Enter valid inputs");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
    console.log("email:", email, "password:", password);
  };

  return (
    <div id="container">
      <h2 id="login">SignUp</h2>
      <form onSubmit={handleSignup} id="form">
        <div className="input-container">
          <input
            id="input"
            type="text"
            value={email}
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="fa-solid fa-envelope" id="icon"></i>
        </div>
        <div className="input-container">
          <input
            id="input"
            type="password"
            value={password}
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fa-solid fa-lock" id="icon"></i>
        </div>
        <div className="input-container">
          <input
            id="input"
            type="password"
            value={confirmPassword}
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <i className="fa-solid fa-lock" id="icon"></i>
        </div>
        <button id="btn" type="submit">
          SignUp
        </button>
      </form>
      <Link to="/login" id="signup">
        If you are already logged in <span>click here</span>
      </Link>
    </div>
  );
};

export default Signup;
