import React, {useState, useEffect} from "react";
import axios from 'axios'; // Import axios
import "./emergencyContact.css"
const Emergencycontact = ({ isVisible, onToggle }) =>{
  const [employeeData, setEmployeeData] = useState({});
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
      setEmployeeData(data); // Set the employee data, including the name
  } catch (error) {
      console.error('Error fetching employee data:', error);
  }
};


  
    return(
        <div className="emergencyContact-Profile">
        <div className="btn-holder-emergencyContact" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="E-profile-h3">Emergency Contact</h3>
        <button onClick={onToggle} className="toggle-button-Em">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
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
                </div>
        )}
           
        </div>
    )
}
export default Emergencycontact;