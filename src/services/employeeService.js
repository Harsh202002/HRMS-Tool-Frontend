import axios from "axios";
import authService from "./authService"; 

const API_URL = "http://localhost:4000/api/v1/employees"; 


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
  const url = `${API_URL}/${id}`;  
  console.log("Fetching from URL:", url);
  try {
    const response = await axios.get(url, getAuthHeaders()); 
    return response.data;
  } catch (error) {
    console.error("Error fetching employee by ID:", error.response?.data || error.message);
    throw new Error("Failed to fetch employee details.");
  }
};



export const createEmployee = async (employeeData) => {
    try {
      const headers = getAuthHeaders(); 
      
      console.log("Employee Data being sent:", employeeData);
  
     
      const response = await axios.post(API_URL, employeeData, headers);
      
      console.log("Backend Response:", response.data);
      return response.data; 
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
  
  


const updateEmployee = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error.response?.data || error.message);
    throw error;
  }
};


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

  
const addEducation = async (educationData) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/v1/education/`,
      educationData, // Contains fields like Standard, Course, etc.
      getAuthHeaders() // Includes the token for authentication
    );
    return response.data;
  } catch (error) {
    console.error("Error adding education details:", error.response?.data || error.message);
    throw error;
  }
};




  const employeeService = {
    fetchAllEmployees,
    fetchEmployeeById,
    fetchEducationById,  
    createEmployee,
    updateEmployee,
    deleteEmployee,
    addEducation,

  };
  

  
  export default employeeService;
  
