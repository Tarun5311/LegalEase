import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleRegister = (event) => {
    event.preventDefault();
    // handle registration logic here'
    navigate('/homepage')
  }


  return (
    <div className="container">
      <form className="login-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">First Name:</label>
          <input
            type="text"
            id="first name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Last Name:</label>
          <input
            type="text"
            id="last name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <button type="submit">Register</button>
        <p>
          Already have an account?{" "}
          <button type="button" onClick={()=>navigate("/login")}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
