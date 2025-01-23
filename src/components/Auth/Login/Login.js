import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import hrmsMain from '../../../Assets/6343825.jpg';
import logo from '../../../Assets/netfotechlogo.png';
import authService from "../../../services/authService";
 
const Login = (  ) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error , setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
 
 
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(username, password);
     
      console.log("Login successful:", response);
      console.log("Stored Role:", localStorage.getItem("role"));
      console.log("Stored EmployeeId:", localStorage.getItem("employeeId"));
 
      navigate("/dashboardlayout/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid username or password");
    }
  };
 
 
  const handleForgotPassword = () => {
 
    console.log('Forgot Password clicked');
  };
 
  return (
    <div className="login-container">
      <div className="login-logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="login-left-side">
        <img src={hrmsMain} alt="HRMS Main" />
      </div>
      <div className="login-right-side">
        <div className="login-box">
          <h2>LOGIN</h2>
       
          {error && <p className="error-message">{error}</p>}
         
         
          <form onSubmit={handleLogin}>
            <div className="login-input-group">
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="login-input-group">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
           
         
            <div className="login-remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
 
           
            <div className="login-forgot-password">
              <button type="button" className="login-forgot-password-button" onClick={handleForgotPassword}>
                Forgot Password?
              </button>
            </div>
 
         
            <button type="submit" className='login-submit-button'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default Login;