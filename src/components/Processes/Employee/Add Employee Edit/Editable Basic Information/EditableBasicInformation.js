import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import employeeService from "../../../../../services/employeeService"; // Ensure correct path
import "./EditableBasicInformation.css"; 

const EditableBasicInformation = ({ isVisible, onToggle }) => {
  const { employeeId } = useParams();
  const [employeeData, setEmployeeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch employee data
  useEffect(() => {
    if (!employeeId) {
      setError("No employee ID provided");
      setLoading(false);
      return;
    }

    const fetchEmployeeData = async () => {
      try {
        const data = await employeeService.fetchEmployeeById(employeeId);
        setEmployeeData(data.employee || {});
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, [employeeId]);

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  // Handle update employee function
  const handleUpdate = async () => {
    try {
      const { id, ...updatedData } = employeeData; 
      await employeeService.updateEmployee(employeeId, updatedData); 
      alert("Employee data updated successfully!");
    } catch (err) {
      setError("Failed to update employee data");
      console.error(err);
    }
  };
  

  // Display loading, error, or data
  if (loading) return <p>Loading employee details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!employeeData || Object.keys(employeeData).length === 0) return <p>No employee data found</p>;

  return (
    <div className="editable-basic-information">
      <div className="editable-basicinformation-btn-holder">
        <h3>Basic Information</h3>
        <button onClick={onToggle} className="editable-basicinformation-toggle-button">
          {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa-solid fa-circle-chevron-down"></i>}
        </button>
      </div>

      {isVisible && (
        <div className="editable-basicinformation-form">
          <div className="editable-basicinformation-form-group">
            <label>Employment Source</label>
            <input
              type="text"
              name="employmentSource"
              value={employeeData.employmentSource || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={employeeData.company || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={employeeData.location || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={employeeData.department || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={employeeData.jobTitle || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Job Level</label>
            <input
              type="text"
              name="jobLevel"
              value={employeeData.jobLevel || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Employee Code</label>
            <input
              type="text"
              name="employeeCode"
              value={employeeData.employeeCode || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Salutation</label>
            <input
              type="text"
              name="salutation"
              value={employeeData.salutation || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={employeeData.firstName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={employeeData.middleName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={employeeData.lastName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Date Of Birth</label>
            <input
              type="text"
              name="dateOfBirth"
              value={employeeData.dateOfBirth || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Date Of Joining</label>
            <input
              type="text"
              name="dateOfJoining"
              value={employeeData.dateOfJoining || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Mobile No</label>
            <input
              type="text"
              name="mobileNo"
              value={employeeData.mobileNo || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Extn No</label>
            <input
              type="text"
              name="extnNo"
              value={employeeData.extnNo || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Marital Status</label>
            <input
              type="text"
              name="maritalStatus"
              value={employeeData.maritalStatus || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Father Name</label>
            <input
              type="text"
              name="fatherName"
              value={employeeData.fatherName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={employeeData.age || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Home Phone No</label>
            <input
              type="text"
              name="homePhoneNo"
              value={employeeData.homePhoneNo || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Office Phone</label>
            <input
              type="text"
              name="officePhone"
              value={employeeData.officePhone || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Official Email</label>
            <input
              type="text"
              name="officialEmail"
              value={employeeData.officialEmail || ""}
              onChange={handleChange}
            />
          </div>

          <div className="editable-basicinformation-form-group">
            <label>Nationality</label>
            <input
              type="text"
              name="nationality"
              value={employeeData.nationality || ""}
              onChange={handleChange}
            />
          </div>

          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
};

export default EditableBasicInformation;
