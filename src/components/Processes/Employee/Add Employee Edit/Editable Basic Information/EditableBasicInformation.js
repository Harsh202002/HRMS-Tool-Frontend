import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import "./EditableBasicInformation.css"
const EditableBasicInformation = ({ isVisible, onToggle }) => {
  // const [employeeData, setEmployeeData] = useState({});
//   useEffect(() => {
//     const storedEmployeeCode = localStorage.getItem('employeeCode');
//     if (storedEmployeeCode) {
//         fetchEmployeeData(storedEmployeeCode); // Fetch employee data
//     }
// }, []);
// const fetchEmployeeData = async (employeeCode) => {
//   try {
//       const response = await axios.get(`http://localhost:8080/employee/${employeeCode}`);
//       const data = response.data;
//       setEmployeeData(data); // Set the employee data, including the name
//   } catch (error) {
//       console.error('Error fetching employee data:', error);
//   }
// };


  return (
    <div>
      <div className='editable-basicinformation-btn-holder' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
        <h3 className='editable-basicinformation-basic-i-h3'>Basic Information</h3>
        <button onClick={onToggle} className="editable-basicinformation-toggle-button">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i class="fa-solid fa-circle-chevron-down"></i>}
        </button>
      </div>
      {isVisible && (
        <div className="editable-basicinformation-form">
          <div className="editable-basicinformation-form-group">
            <label>Employment Source</label>
            <input type="text" />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Company</label>
            <select>
              <option></option>
            </select>
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Location</label>
            <input type="text" />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Department</label>
            <select>
              <option></option>
            </select>
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Job Title</label>
            <select>
              <option></option>
            </select>
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Job Level</label>
            <select>
              <option></option>
            </select>
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Employee Code</label>
            <input type="text" />
          </div>
          <div className="editable-basicinformation-form-group">       
            <label>Salutation</label>
            <select>
              <option></option>
              {/* <option>Ms.</option>
              <option>Mrs.</option> */}
            </select>
          </div>
          <div className="editable-basicinformation-form-group">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Middle Name</label>
            <input type="text"  />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Date Of Birth</label>
            <input type="text" />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Date Of Joining</label>
            <input type="text" />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Mobile No</label>
            <div style={{ display: 'flex' }}>
              <input type="text" />
              {/* <i className="eye-icon fas fa-eye"></i> */}
            </div>
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Extn No</label>
            <input type="text" value="" />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Marital Status</label>
            <select>
              <option></option>
            </select>
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Father Name</label>
            <input type="text"  />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Age</label>
            <input type="text" />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Home Phone No</label>
            <input type="text"  />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Office Phone</label>
            <input type="text"  />
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Official Email</label>
            <div style={{ display: 'flex' }}>
              <input type="text" />
              {/* <i className="eye-icon fas fa-eye"></i> */}
            </div>
          </div>
          <div className="editable-basicinformation-form-group">
            <label>Nationality</label>
            <input type="text" />
          </div>
        </div>
      )}
    </div>
  )
}
export default EditableBasicInformation