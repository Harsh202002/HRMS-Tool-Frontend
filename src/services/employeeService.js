import axios from "axios";
import authService from "./authService"; // Assuming authService is already set up

const API_URL = "http://localhost:4000/api/v1/employees"; // Backend employee route

// Set headers with Authorization token
const getAuthHeaders = () => {
    const user = authService.getCurrentUser();
    if (!user?.token) {
      throw new Error("Authentication token is missing. Please log in again.");
    }
    return {
      headers: {
        Authorization: `Bearer ${user.token}`, // Include the token from the current user
        "Content-Type": "application/json", // Ensure the payload is sent as JSON
      },
    };
  };

// Fetch all employees (Admin only)
const fetchAllEmployees = async () => {
  try {
    const response = await axios.get(API_URL, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error fetching all employees:", error.response?.data || error.message);
    throw error;
  }
};

const fetchEmployeeById = async (id) => {
  const url = `${API_URL}/${id}`;  // Use the correct URL with the id
  console.log("Fetching from URL:", url);
  try {
    const response = await axios.get(url, getAuthHeaders()); // Use getAuthHeaders() to get the token
    return response.data;
  } catch (error) {
    console.error("Error fetching employee by ID:", error.response?.data || error.message);
    throw new Error("Failed to fetch employee details.");
  }
};


// Create a new employee with FormData (Admin only)
export const createEmployee = async (employeeData) => {
    try {
      const headers = getAuthHeaders(); // Get headers with token from authService
      
      console.log("Employee Data being sent:", employeeData);
  
      // Send the POST request to create a new employee
      const response = await axios.post(API_URL, employeeData, headers);
      
      console.log("Backend Response:", response.data);
      return response.data; // Return the response data (employee details)
    } catch (error) {
      console.error("Full error object:", error);
  
      if (error.response) {
        console.error("Backend Error:", error.response.data);
        throw new Error(error.response.data?.error || "Error creating employee");
      } else {
        console.error("Unexpected Error:", error.message);
        throw new Error("Unexpected error occurred while creating employee");
      }
    }
  };
  
  

// Update an employee (Admin only)
const updateEmployee = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error.response?.data || error.message);
    throw error;
  }
};

// Delete an employee (Admin only)
const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error deleting employee:", error.response?.data || error.message);
    throw error;
  }
};

const fetchEducationById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/auth/${id}`, getAuthHeaders());
      return response.data;
    } catch (error) {
      console.error("Error fetching education details:", error.response?.data || error.message);
      throw error;
    }
};


  
  
  const employeeService = {
    fetchAllEmployees,
    fetchEmployeeById,
    fetchEducationById,  // Add the new function here
    createEmployee,
    updateEmployee,
    deleteEmployee,
  };
  

  
  export default employeeService;
  
