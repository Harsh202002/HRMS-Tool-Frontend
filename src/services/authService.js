import axios from "axios";
 
const API_URL = "http://localhost:4000/api/v1/auth"; 
 
const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
 
    if (response.data && response.data.user) {
      
      localStorage.setItem("user", JSON.stringify(response.data));
 
      const { user } = response.data;
 
     
      const userId = user.id;
      const role = user.role;
      const employeeId = user.employee?.id || null;  
      const employeeCode = user.employee?.employeeCode || null;
 
     
      localStorage.setItem("userId", userId || "");
      localStorage.setItem("role", role || "");
      localStorage.setItem("employeeId", employeeId || "");
      localStorage.setItem("employeeCode", employeeCode || "");
 
      console.log("Stored userId:", userId);
      console.log("Stored role:", role);
      console.log("Stored employeeId:", employeeId);
      console.log("Stored employeeCode:", employeeCode);
    }
 
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};
 
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("role");
  localStorage.removeItem("employeeId");
  localStorage.removeItem("userId");
  localStorage.removeItem("employeeCode");
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
 
const getUserId = () => {
  return localStorage.getItem("userId");
};

const getEmployeeCode = () => {
  return localStorage.getItem("employeeCode");
};
 
const authService = {
  login,
  logout,
  getCurrentUser,
  getRole,
  getEmployeeId,
  getUserId,
  getEmployeeCode,
};
 
export default authService;