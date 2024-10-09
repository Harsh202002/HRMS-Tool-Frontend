import React, {useState, useEffect} from "react";
import axios from 'axios'; // Import axios
import "./dependent.css"
const Dependent = ({ isVisible, onToggle }) =>{
  const [employeeData, setEmployeeData] = useState({});
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state

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
    return(
        <div className="Dependent-Profile">
        <div className="btn-holder-Dependent" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="D-profile-h3">Dependent</h3>
        <button onClick={onToggle} className="toggle-button-D">
       {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i>: <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
     {isVisible && (
      <div>
                  <div>
                  <table className="Dependent-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Mobile No.</th>
                        <th>Email Id</th>
                        <th>Relation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{employeeData.dependentName}</td>
                        <td>{employeeData.dependentAge}</td>
                        <td>{employeeData.dependentMobileNo}</td>
                        <td>{employeeData.dependentEmailId}</td>
                        <td>{employeeData.dependentRelation}</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                 <div className="rsidebar-btn-plus">
                 <button className="sidebar-button-Ed">
                   <i className="fa fa-plus"></i>
                 </button>
               </div>
               </div>
        )}
           
        </div>
    )
}
export default Dependent;