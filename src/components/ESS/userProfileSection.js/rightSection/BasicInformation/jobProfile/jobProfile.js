import React, { useState, useEffect } from "react";
import "./jobProfile.css";
import employeeService from "../../../../../../services/employeeService";

const JobProfile = ({ isVisible, onToggle }) => {
  const [employeeData, setEmployeeData] = useState(null);
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

  return (
    <div className="job-profile">
      <div className="btn-holder-job" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="j-profile-h3">Job Profile</h3>
        <button onClick={onToggle} className="toggle-button-j">
          {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
        </button>
      </div>
      {isVisible && (
        <div className="form">
          <div className="form-group">
            <label>About Me</label>
            <textarea value={employeeData.aboutMe || ""} readOnly />
          </div>
          <div className="form-group">
            <label>Previous Employer</label>
            <input type="text" value={employeeData.previousEmployer || ""} readOnly />
          </div>
          <div className="form-group">
            <label>Total Work Experience</label>
            <div className="work-experience">
              <input type="text" value={`${employeeData.totalWorkExperience || "0"} Years`} readOnly />
            </div>
          </div>
          <div className="form-group">
            <label>Probation Period</label>
            <input type="text" value={employeeData.probationPeriod || ""} readOnly />
          </div>
          <div className="form-group">
            <label>Probation End Date</label>
            <input type="text" value={new Date(employeeData.probationEndDate).toLocaleDateString() || ""} readOnly />
          </div>
          <div className="form-group">
            <label>Notice Period</label>
            <input type="text" value={employeeData.noticePeriod || ""} readOnly />
          </div>
        </div>
      )}
    </div>
  );
};

export default JobProfile;
