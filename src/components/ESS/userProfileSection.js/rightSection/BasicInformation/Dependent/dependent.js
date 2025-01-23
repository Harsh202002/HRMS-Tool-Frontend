import React, {useState, useEffect} from "react";
import employeeService from "../../../../../../services/employeeService";
import "./dependent.css"
const Dependent = ({ isVisible, onToggle }) =>{
  const [employeeData, setEmployeeData] = useState({});
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
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