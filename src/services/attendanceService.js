import axios from "axios";
import authService from "./authService"; 

const API_URL = "http://localhost:4000/api/v1/attendance"; 


const getAuthHeaders = () => {
  const user = authService.getCurrentUser();
  if (!user?.token) {
    throw new Error("Authentication token is missing. Please log in again.");
  }
  return {
    headers: {
      Authorization: `Bearer ${user.token}`, 
      "Content-Type": "application/json", 
    },
  };
};


const checkIn = async () => {
  try {
    const response = await axios.post(`${API_URL}/check-in`, {}, getAuthHeaders());
    console.log("Check-in successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during check-in:", error.response?.data || error.message);
    throw error.response?.data || new Error("Check-in failed");
  }
};


const checkOut = async () => {
  try {
    const response = await axios.post(`${API_URL}/check-out`, {}, getAuthHeaders());
    console.log("Check-out successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during check-out:", error.response?.data || error.message);
    throw error.response?.data || new Error("Check-out failed");
  }
};


const getAttendanceRecords = async () => {
  try {
    const response = await axios.get(`${API_URL}/records`, getAuthHeaders());
    console.log("Fetched attendance records:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching attendance records:", error.response?.data || error.message);
    throw error.response?.data || new Error("Fetching attendance records failed");
  }
};


const fetchAttendanceById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/auth/${id}`, getAuthHeaders());
    console.log("Fetched attendance record by ID:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching attendance by ID:", error.response?.data || error.message);
    throw error.response?.data || new Error("Fetching attendance by ID failed");
  }
};


const deleteAttendanceRecord = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
    console.log("Attendance record deleted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting attendance record:", error.response?.data || error.message);
    throw error.response?.data || new Error("Deleting attendance record failed");
  }
};


const updateAttendanceRecord = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData, getAuthHeaders());
    console.log("Updated attendance record:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating attendance record:", error.response?.data || error.message);
    throw error.response?.data || new Error("Updating attendance record failed");
  }
};


const attendanceService = {
  checkIn,
  checkOut,
  getAttendanceRecords,
  fetchAttendanceById,
  deleteAttendanceRecord,
  updateAttendanceRecord,
};

export default attendanceService;
