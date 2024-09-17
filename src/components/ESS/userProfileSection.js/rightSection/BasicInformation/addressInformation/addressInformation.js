import React, {useState, useEffect} from "react";
import axios from 'axios'; // Import axios
import "./addressInformation.css"
const Addressinformation = ({ isVisible, onToggle }) =>{
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
        <div  className="AddressInformation-Profile">
        <div className="btn-holder-AddressInformation" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="AI-profile-h3">Address Information</h3>
        <button onClick={onToggle} className="toggle-button-A">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i class="fa-solid fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="Address-table">
                    <thead>
                      <tr>
                        <th>Address Type</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Telephone</th>
                        <th>Zip code</th>
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
        )}
           
        </div>
    )
}
export default Addressinformation;