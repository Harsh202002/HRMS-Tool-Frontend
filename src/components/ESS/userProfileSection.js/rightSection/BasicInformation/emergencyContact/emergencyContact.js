import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./emergencyContact.css";
import EmergencyContactSidebar from "./Emergency contact editable btn/EmergencyContactSidebar";

const Emergencycontact = ({ isVisible, onToggle }) => {
  const [employeeData, setEmployeeData] = useState({});
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const storedEmployeeCode = localStorage.getItem('employeeCode');
    if (storedEmployeeCode) {
      fetchEmployeeData(storedEmployeeCode);
    }
  }, []);

  const fetchEmployeeData = async (employeeCode) => {
    try {
      const response = await axios.get(`http://localhost:8080/employee/${employeeCode}`);
      const data = response.data;
      setEmployeeData(data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

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
