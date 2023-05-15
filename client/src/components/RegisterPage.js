import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {message} from 'antd';
import axios from 'axios';
import "./RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  
  const handleRegister = async (values) => {
    try{
      const res = await axios.post('/api/v1/user/register', values)
      if(res.data.succes)
      {
        message.succes("Registered Successfully!")
        navigate("/login")
      }
    } catch(error)
    {
      console.log(error)
    }
  }


  return (
    <div className="bgg">
      <div className="container">
        <form className="register-form" onSubmit={handleRegister}>
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
            <label htmlFor="text">Name:</label>
            <input
              type="text"
              id="name"
              value={Name}
              onChange={handleNameChange}
            />
          </div>

          <button type="submit" onClick = {handleRegister}>Register</button>
          <p>
            Already have an account?{" "}
            <button type="button" onClick={()=>navigate("/login")}>
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
