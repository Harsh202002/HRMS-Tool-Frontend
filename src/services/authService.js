import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/auth"; // Replace with your backend URL

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });

    if (response.data.token) {
      // Store the entire user object
      localStorage.setItem("user", JSON.stringify(response.data));

      // Store role and employeeId separately for quick access
      const { role, employeeId , userId } = response.data.user;
      localStorage.setItem("role", role);
      localStorage.setItem("employeeId", employeeId);
      localStorage.setItem("userId", userId);
      
    }

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("role");
  localStorage.removeItem("employeeId");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getRole = () => {
  return localStorage.getItem("role");
};

const getEmployeeId = () => {
  return localStorage.getItem("employeeId");
};

const authService = {
  login,
  logout,
  getCurrentUser,
  getRole,
  getEmployeeId,
};

export default authService;
