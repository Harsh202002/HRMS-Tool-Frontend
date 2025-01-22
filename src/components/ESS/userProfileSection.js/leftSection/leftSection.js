import React, { useState, useEffect } from "react";
import employeeService from "../../../../services/employeeService"; 
import "./leftSection.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import profile from "../../../../Assets/ImageAvtar.jpg";

const Leftsection = () => {
  const [employeeData, setEmployeeData] = useState(null);
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

  return (
    <div className="left-section">
      <div className="left-panel-h">
        <div className="profile-header">
          <div>
            <img className="profile-pic" src={profile} alt="Profile" />
          </div>
          <h2>{`${employeeData.firstName || "N/A"} ${employeeData.lastName || "N/A"}`}</h2>
          <p>{employeeData.jobTitle || "Not Available"}</p>
          <div className="profile-completeness">
            <p>
              <i className="profile-completeness-icon fas fa-check"></i>
              Profile Completeness
            </p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "41%" }}></div>
            </div>
            <span className="progress-number">41%</span>
          </div>
        </div>
      </div>
      <div className="left-panel">
        <div className="info-section">
          <div className="info-box">
            <p className="title">Joining Date</p>
            <p>{employeeData.dateOfJoining || "Not Available"}</p>
          </div>
          <div className="info-box">
            <p className="title">Basic Information</p>
            <p><i className="side-icon fas fa-hourglass-1"></i> Full Time</p>
            <p><i className="side-icon fas fa-user-group"></i> {employeeData.department || "Not Available"}</p>
          </div>
          <div className="info-box">
            <p className="title">Company</p>
            <p>{employeeData.company || "Not Available"}</p>
          </div>
          <div className="info-box">
            <p className="title">Location</p>
            <p>{employeeData.location || "Not Available"}</p>
          </div>
        </div>
      </div>
      <div className="left-panel-l">
        <div className="info-box">
          <p className="title">Reporting Manager</p>
          <img className="left-img-icon" src={profile} alt="Manager" />
          <p>{employeeData.reportingManager || "Not Available"}</p>
        </div>
        <div className="info-box">
          <p className="title">Functional Manager</p>
          <img className="left-img-icon" src={profile} alt="Manager" />
          <p>{employeeData.functionalManager || "Not Available"}</p>
        </div>
        <div className="info-box">
          <p className="title">Reporting HR</p>
          <img className="left-img-icon" src={profile} alt="HR" />
          <p>{employeeData.reportingHR || "Not Available"}</p>
        </div>
      </div>
    </div>
  );
};

export default Leftsection;
