import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditableLeftSection.css";
import profile from "../../../../../Assets/ImageAvtar.jpg";
import employeeService from "../../../../../services/employeeService";

const EditableLeftSection = () => {
  const { employeeId } = useParams();
  const [employeeData, setEmployeeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching employee data from the service
  useEffect(() => {
    if (!employeeId) {
      setError("No employee ID provided");
      setLoading(false);
      return;
    }

    const fetchEmployeeData = async () => {
      try {
        // Log the employeeId and data to debug
        console.log("Employee ID:", employeeId);
        
        const data = await employeeService.fetchEmployeeById(employeeId);
        
        
        console.log("Fetched Employee Data:", data);

        setEmployeeData(data.employee || {}); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchEmployeeData();
  }, [employeeId]);

  // Display loading or error messages if needed
  if (loading) return <p>Loading employee details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!employeeData || Object.keys(employeeData).length === 0) return <p>No employee data found</p>;

  return (
    <div className="editable-left-section">
      <div className="editable-left-panel-h">
        <div className="editable-profile-header">
          <div>
            <img className="editable-profile-pic" src={profile} alt="Employee Profile" />
          </div>
          <h2>
            {employeeData.firstName || "N/A"} {employeeData.lastName || ""}
          </h2>
          <p>{employeeData.jobTitle || "No job title available"}</p>

          <div className="editable-profile-completeness">
            <p>
              <i className="editable-profile-completeness-icon fas fa-check"></i>
              Profile Completeness
            </p>
            <div className="editable-progress-bar">
              <div
                className="editable-progress"
                style={{ width: `${employeeData.profileCompletion || 0}%` }}
              ></div>
            </div>
            <span className="editable-progress-number">
              {employeeData.profileCompletion || 0}%
            </span>
          </div>
        </div>
      </div>

      <div className="editable-left-panel">
        <div className="editable-info-section">
          <div className="editable-info-box">
            <p className="editable-title">Joining Date</p>
            <p>{employeeData.dateOfJoining || "Not available"}</p>
          </div>

          <div className="editable-info-box">
            <p className="editable-title">Basic Information</p>
            <p>
              <i className="editable-side-icon fas fa-hourglass-1"></i>
              {employeeData.typeOfEmployement || "Unknown"}
            </p>
            <p>
              <i className="editable-side-icon fas fa-user-group"></i>
              {employeeData.department || "No department"}
            </p>
          </div>

          <div className="editable-info-box">
            <p className="editable-title">Company</p>
            <p>{employeeData.company || "N/A"}</p>
          </div>

          <div className="editable-info-box">
            <p className="editable-title">Location</p>
            <p>{employeeData.location || "Unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableLeftSection;
