import React, { useState, useEffect } from "react";
import employeeService from "../../../../../../services/employeeService";
import "./addressInformation.css";
import AddressSidebar from './Address Sidebar/AddressSidebar'; // Import AddressSidebar

const Addressinformation = ({ isVisible, onToggle }) => {
  const [employeeData, setEmployeeData] = useState({});
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user?.user?.employeeId) {
          throw new Error("Employee ID is missing. Please log in again.");
        }

        const response = await employeeService.fetchEmployeeById(user.user.employeeId);
        if (response && response.success && response.employee) {
          setEmployeeData(response.employee);
        } else {
          throw new Error("No employee data found.");
        }
      } catch (err) {
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
