import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import hrmsMain from '../../../Assets/6343825.jpg';
import logo from '../../../Assets/netfotechlogo.png';
import authService from "../../../services/authService";

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error handling
  const [rememberMe, setRememberMe] = useState(false); // State for 'Remember Me'

  // Handle login function
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Perform login using the authService
      const user = await authService.login(username, password);
      onLoginSuccess(user); // Pass the user back to the App component

      // If "Remember me" is checked, store credentials in local storage
      if (rememberMe) {
        localStorage.setItem('rememberMe', JSON.stringify({ username, password }));
      } else {
        localStorage.removeItem('rememberMe'); // Clear stored credentials if not checked
      }

      // Redirect to the dashboard
      navigate(`/dashboardlayout/dashboard`);
    } catch (error) {
      console.error("Login failed", error);
      setError('Invalid username or password. Please try again.'); // Display error message
    }
  };

  // Handle forgot password (Placeholder for now)
  const handleForgotPassword = () => {
    // Placeholder action for forgot password functionality
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
          {/* Display error message if login fails */}
          {error && <p className="error-message">{error}</p>}
          
          {/* Login Form */}
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
            
            {/* Remember Me */}
            <div className="login-remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

            {/* Forgot Password Button */}
            <div className="login-forgot-password">
              <button type="button" className="login-forgot-password-button" onClick={handleForgotPassword}>
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button type="submit" className='login-submit-button'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
