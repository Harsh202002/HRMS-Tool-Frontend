import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./addressInformation.css";
import AddressSidebar from './Address Sidebar/AddressSidebar'; // Import AddressSidebar

const Addressinformation = ({ isVisible, onToggle }) => {
  const [employeeData, setEmployeeData] = useState({});
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state

  useEffect(() => {
    const storedEmployeeCode = localStorage.getItem('employeeCode');
    if (storedEmployeeCode) {
      fetchEmployeeData(storedEmployeeCode); // Fetch employee data
    }
  }, []);

  const fetchEmployeeData = async (employeeCode) => {
    try {
      const response = await axios.get(`http://localhost:8080/employee/${employeeCode}`);
      const data = response.data;
      setEmployeeData(data); // Set the employee data
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleUpdateAddressData = (newData) => {
    setEmployeeData((prevData) => ({
      ...prevData,
      addressType: newData.addressType,
      address: newData.address,
      city: newData.city,
      telephone: newData.telephone,
      zipCode: newData.zipCode,
      country: newData.country,
      state: newData.state,
    }));
  };

  return (
    <div className="AddressInformation-Profile">
      <div className="btn-holder-AddressInformation" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="AI-profile-h3">Address Information</h3>
        <button onClick={onToggle} className="toggle-button-A">
          {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa-solid fa-circle-chevron-down"></i>}
        </button>
      </div>
      {isVisible && (
        <div>
          <div>
            <table className="Address-table">
              <thead>
                <tr>
                  <th>Address Type</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Telephone</th>
                  <th>Zip Code</th>
                  <th>Country</th>
                  <th>Parish</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{employeeData.addressType}</td>
                  <td>{employeeData.address}</td>
                  <td>{employeeData.city}</td>
                  <td>{employeeData.telephone}</td>
                  <td>{employeeData.zipCode}</td>
                  <td>{employeeData.country}</td>
                  <td>{employeeData.state}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rsidebar-btn-plus">
            <button className="sidebar-button-Ed" onClick={handleSidebarToggle}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      )}

      <AddressSidebar 
        isOpen={isSidebarOpen} 
        onClose={handleSidebarToggle} 
        onSubmit={handleUpdateAddressData} // Pass the update function to the sidebar
      />
    </div>
  );
};

export default Addressinformation;
