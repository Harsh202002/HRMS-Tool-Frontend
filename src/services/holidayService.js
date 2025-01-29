import axios from "axios";
import authService from "./authService";

const API_URL = "http://localhost:4000/api/v1/holidays";

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

const holidayService = {
  getHolidays: async () => {
    const response = await axios.get(API_URL, getAuthHeaders());
    return response.data;
  },
};

export default holidayService;
