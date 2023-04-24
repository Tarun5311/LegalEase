import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    navigate('/homepage')
    // e.preventDefault();
    // Your login logic goes here
  };

  const handleRegisterClick = () => {
    navigate("/register")
  };

  return (
    <div className="bgg">
      <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <button type="button" onClick={handleRegisterClick}>
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
