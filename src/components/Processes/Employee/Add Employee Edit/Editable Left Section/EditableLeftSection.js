import React, { useState, useEffect } from 'react';
import "./EditableLeftSection.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import profile from "../../../../../Assets/ImageAvtar.jpg"
const EditableLeftSection = () => {
//   const [employeeData, setEmployeeData] = useState({});


//   useEffect(() => {
//     const storedEmployeeCode = localStorage.getItem('employeeCode');


//     if (storedEmployeeCode) {
//         fetchEmployeeData(storedEmployeeCode); // Fetch employee data
//     }
// }, []);

// const fetchEmployeeData = async (employeeCode) => {
//     try {
//         const response = await axios.get(`http://localhost:8080/employee/${employeeCode}`);
//         const data = response.data;
//         setEmployeeData(data); // Set the employee data, including the name
//     } catch (error) {
//         console.error('Error fetching employee data:', error);
//     }
// };

  
    return(
        <div className="editable-left-section">
        <div className="editable-left-panel-h">
          <div className="editable-profile-header">
            <div><img className="editable-profile-pic" src={profile} alt="editable-Profile" /></div>
            <h2>Hard</h2>
            <p>Software Engineer</p>
            <div className="editable-profile-completeness">
              <p><i className="editable-profile-completeness-icon fas fa-check" ></i>Profile Completeness</p>
              <div className="editable-progress-bar">
                <div className="editable-progress" style={{ width: '41%' }}></div>
              </div>
              <span className='editable-progress-number'>41%</span>
            </div>
          </div>
        </div>
        <div className="editable-left-panel">
          <div className="editable-info-section">
            <div className="editable-info-box">
              <p className="editable-title">Joining Date</p>
              <p>12/02/2002</p>
              <p className="editable-subtitle">(0 Year 4 Months 30 Days)</p>
            </div>
            <div className="editable-info-box">
              <p className="editable-title">Basic Information</p>
              <p><i className="editable-side-icon fas fa-hourglass-1" ></i>Full Time</p>
              <p><i className="editable-side-icon fas fa-user-group" ></i>Product Engineering & Innovations</p>
            </div>
            <div className="editable-info-box">
              <p className="editable-title">Company</p>
              <p>Netfotech</p>
            </div>
            <div className="editable-info-box">
              <p className="editable-title">Location</p>
              <p>Titagarh</p>
            </div>
          </div>
        </div>
        <div className='editable-left-panel-l'>
          <div className="editable-info-box">
            <p className="editable-title">Reporting Manager</p>
            <img className='editable-left-img-icon' src={profile} alt="Manager" />
            <p>Rajdip Banerjee</p>
            <p className="editable-contact"><i className="editable-side-icon fas fa-phone" ></i>9831072104</p>
          </div>
          <div className="editable-info-box">
            <p className="editable-title">Functional Manager</p>
            <img className='editable-left-img-icon' src={profile} alt="Manager" />
            <p>Anyone</p>
            <p className="editable-contact"><i className="editable-side-icon fas fa-phone" ></i>9831072104</p>
            <p className="editable-title">Reporting HR</p>
            <img className='editable-left-img-icon' src={profile} alt="HR" />
            <p>Nandini Choudhary</p>
            <p className="editable-contact"><i className="editable-side-icon fas fa-phone" ></i>7003586596</p>
          </div>
          <div className="editable-info-box">
            <p className="editable-title">Direct Reportees</p>
          </div>
        </div>
      </div>
    )
}
export default EditableLeftSection