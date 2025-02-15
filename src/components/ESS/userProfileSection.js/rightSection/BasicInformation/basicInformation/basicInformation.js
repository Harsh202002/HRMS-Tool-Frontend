import React, { useState, useEffect } from 'react';
//import axios from 'axios'; // Import axios
import employeeService from '../../../../../../services/employeeService';
import "./basicInformation.css"


const Basicinformation = ({ isVisible, onToggle }) => {
  const [employeeData, setEmployeeData] = useState({});
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
    <div>
      <div className='btn-holder' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
        <h3 className='basic-i-h3'>Basic Information</h3>
        <button onClick={onToggle} className="toggle-button">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i class="fa-solid fa-circle-chevron-down"></i>}
        </button>
      </div>
      {isVisible && (
        <div className="form">
          <div className="form-group">
            <label>Employment Source</label>
            <input type="text" value={employeeData.employmentSource} readOnly />
          </div>
          <div className="form-group">
            <label>Company</label>
            <select>
              <option>{employeeData.company || ''}</option>
            </select>
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" value={employeeData.location || ''} readOnly />
          </div>
          <div className="form-group">
            <label>Department</label>
            <select>
              <option>{employeeData.department || ''}</option>
            </select>
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <select>
              <option>{employeeData.jobTitle || ''}</option>
            </select>
          </div>
          <div className="form-group">
            <label>Job Level</label>
            <select>
              <option>{employeeData.jobLevel || ''}</option>
            </select>
          </div>
          <div className="form-group">
            <label>Employee Code</label>
            <input type="text" value={employeeData.employeeCode || ''} readOnly />
          </div>
          <div className="form-group">
            <label>Salutation</label>
            <select>
              <option>{employeeData.salutation || ''}</option>
              {/* <option>Ms.</option>
              <option>Mrs.</option> */}
            </select>
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" value={employeeData.firstName || ''} readOnly />
          </div>
          <div className="form-group">
            <label>Middle Name</label>
            <input type="text" value={employeeData.middleName || ''} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" value={employeeData.lastName || ''} readOnly />
          </div>
          <div className="form-group">
            <label>Date Of Birth</label>
            <input type="text" value={employeeData.dateOfBirth || ''} readOnly />
          </div>
          <div className="form-group">
            <label>Date Of Joining</label>
            <input type="text" value={employeeData.dateOfJoining || ''} readOnly />
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <div style={{ display: 'flex' }}>
              <input type="text" value={employeeData.mobileNumber || ''} readOnly />
              {/* <i className="eye-icon fas fa-eye"></i> */}
            </div>
          </div>
          <div className="form-group">
            <label>Extn No</label>
            <input type="text" value="" />
          </div>
          <div className="form-group">
            <label>Marital Status</label>
            <select>
              <option>{employeeData.maritalStatus || ''}</option>
            </select>
          </div>
          <div className="form-group">
            <label>Father Name</label>
            <input type="text" value={employeeData.fatherName || ''} />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="text" value={employeeData.age || ''} readOnly />
          </div>
          <div className="form-group">
            <label>Home Phone No</label>
            <input type="text" value={employeeData.homePhone || ''} />
          </div>
          <div className="form-group">
            <label>Office Phone</label>
            <input type="text" value={employeeData.officePhone || ''} />
          </div>
          <div className="form-group">
            <label>Official Email</label>
            <div style={{ display: 'flex' }}>
              <input type="text" value={employeeData.officialEmail || ''} readOnly />
              {/* <i className="eye-icon fas fa-eye"></i> */}
            </div>
          </div>
          <div className="form-group">
            <label>Nationality</label>
            <input type="text" value={employeeData.nationality|| ''} readOnly />
          </div>
        </div>
      )}
    </div>
  )
}
export default Basicinformation