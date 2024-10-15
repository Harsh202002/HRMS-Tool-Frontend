import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth"; // Replace with your backend URL

const authService = {
  async login(username, password) {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });

      // Check if the response contains an access token
      if (response.data.accessToken) {
        localStorage.setItem('token', response.data.accessToken); // Store token
      }
      return response.data; // Return user data (including token)
    } catch (error) {
      // Handle error: log it and throw a user-friendly message
      console.error("Login error:", error.response ? error.response.data : error);
      throw new Error('Login failed. Please check your credentials and try again.');
    }
  },

  logout() {
    localStorage.removeItem('token'); // Clear the token
  },

  getCurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      // Decode the token's payload
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload; // Return user info (after decoding)
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  },
};

export default authService;
