import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import hrmsMain from '../../../Assets/login-info.png';
// import background from '../../Assets/background.jpg';
import logo from '../../../Assets/netfotechlogo.png';
import B_img from '../../../Assets/background.jpg';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      {/* <div>
        <img src={B_img} alt='b-image' className='b-gimg'/>
      </div> */}
        <div className="login-logo-container">
        <img src={logo} alt="Logo" className="login-logo" />
        </div>
      <div className="login-left-side">
        <img src={hrmsMain} alt="HRMS Main" />
      </div>
      <div className="login-right-side">
        <div className="login-box">
          <h2>LOGIN</h2>
          <form >
            <div className="login-input-group">
              <input
                type="text"
                placeholder="Enter Username"
                required
                
                // onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-input-group">
              <input
                type="password"
                placeholder="Enter Password"
                required
               
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="login-forgot-password">
              <button type="button" className="login-forgot-password-button">Forgot Password?</button>
            </div>
            <button type="submit" onClick={() => navigate('/dashboardlayout/dashboard')} className='login-submit-button'>Login</button>
            {/* {error && <p className="error">{error}</p>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
