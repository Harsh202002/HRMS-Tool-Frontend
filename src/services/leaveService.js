import axios from "axios";
import authService from "./authService";

const apiUrl = "http://localhost:4000/api/v1/leaves"; 

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

const leaveService = {
  // Method to apply for leave
  applyLeave: async (leaveData) => {
    try {
      const response = await axios.post(`${apiUrl}`, leaveData , getAuthHeaders()); // Adjust the endpoint as needed
      return response.data;
    } catch (error) {
      console.error("Error applying leave:", error);
      throw error; // Rethrow the error to handle it in the component
    }
  },

  // Method to fetch all leaves (optional, for displaying leave details)
  getAllLeaves: async () => {
    try {
      const response = await axios.get(`${apiUrl}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all leaves:", error);
      throw error;
    }
  }
};

export default leaveService;
