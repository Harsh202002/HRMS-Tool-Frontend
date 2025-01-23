import React, { useState, useEffect } from "react";
import employeeService from "../../../../../../services/employeeService";
import "./emergencyContact.css";
import EmergencyContactSidebar from "./Emergency contact editable btn/EmergencyContactSidebar";

const Emergencycontact = ({ isVisible, onToggle }) => {
  const [employeeData, setEmployeeData] = useState({});
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        // Get user data from localStorage
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("LocalStorage User:", user);

        // Validate if employeeId exists
        const employeeId = user?.user?.employeeId;
        if (!employeeId) {
          throw new Error("Employee ID is missing. Please log in again.");
        }

        // Fetch employee details by employeeId
        const response = await employeeService.fetchEmployeeById(employeeId);
        console.log("Fetched Employee Data:", response);

        if (response && response.success && response.employee) {
          setEmployeeData(response.employee);
        } else {
          throw new Error("No employee data found.");
        }
      } catch (err) {
        console.error("Error fetching employee data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!employeeData) return <p>No data available</p>;


  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // New function to handle updating employee data
  const handleUpdateEmployeeData = (newData) => {
    setEmployeeData((prevData) => ({
      ...prevData,
      emergencyFirstName: newData.firstName,
      emergencyLastName: newData.lastName,
      emergencyAddress: newData.address,
      emergencyMobileNumber: newData.mobileNo,
      emergencyAlternateMobileNumber: newData.altMobileNo,
      emergencyCountryName: newData.country,
      emergencyEmailId: newData.emailId,
      emergencyAlternateEmailId: newData.altEmailId,
      // Add any other fields you need to update...
    }));
  };

  return (
    <div className="emergencyContact-Profile">
      <div className="btn-holder-emergencyContact" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="E-profile-h3">Emergency Contact</h3>
        <button onClick={onToggle} className="toggle-button-Em">
          {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
        </button>
      </div>
      {isVisible && (
        <div>
          <table className="emergency-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Mobile No.</th>
                <th>Alt. Mobile No.</th>
                <th>Country Name</th>
                <th>Email Id</th>
                <th>Alt.Email Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{employeeData.emergencyFirstName}</td>
                <td>{employeeData.emergencyLastName}</td>
                <td>{employeeData.emergencyAddress}</td>
                <td>{employeeData.emergencyMobileNumber}</td>
                <td>{employeeData.emergencyAlternateMobileNumber}</td>
                <td>{employeeData.emergencyCountryName}</td>
                <td>{employeeData.emergencyEmailId}</td>
                <td>{employeeData.emergencyAlternateEmailId}</td>
              </tr>
            </tbody>
          </table>

          <div className="rsidebar-btn-plus">
            <button className="sidebar-button-Ed" onClick={handleSidebarToggle}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      )}

      <EmergencyContactSidebar 
        isOpen={isSidebarOpen} 
        onClose={handleSidebarToggle} 
        onSubmit={handleUpdateEmployeeData} // Pass the update function to the sidebar
      />
    </div>
  );
};

export default Emergencycontact;
