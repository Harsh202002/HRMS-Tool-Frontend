import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import employeeService from "../../../services/employeeService"; 
import "./AddEmployee.css";
import AddEmployeeSidebar from "./Add Employee Sidebar/AddEmployeeSidebar";
import Pagination from "../../ESS/Attendance/Pagination/Pagination";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownOpenFor, setDropdownOpenFor] = useState(null);

  const jwtToken = localStorage.getItem("jwtToken"); 

  
  const fetchEmployees = useCallback(async () => {
    try {
      const data = await employeeService.fetchAllEmployees(jwtToken);
      console.log("Fetched employees:", data);
      setEmployees(data.employees || []); 
    } catch (error) {
      if (error.response?.status === 403) {
        console.error("Access denied. Admin role required.");
        navigate("/unauthorized"); 
      } else {
        console.error("Error fetching employees:", error.message);
      }
    }
  }, [jwtToken, navigate]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleEmployeeAdded = async (employeeData) => {
    try {
      await employeeService.createEmployee(employeeData, jwtToken); // Pass the token
      fetchEmployees(); 
    } catch (error) {
      console.error("Error adding employee:", error.message);
    }
  };


  const totalEntries = employees.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentItems = employees.slice(startIndex, startIndex + entriesPerPage);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleEntriesChange = (newEntriesPerPage) => {
    setEntriesPerPage(newEntriesPerPage);
    setCurrentPage(1);
  };

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const toggleDropdown = (employeeId) => {
    setDropdownOpenFor((prev) => (prev === employeeId ? null : employeeId));
  };

  
  const deleteEmployee = async (id) => {
    try {
      await employeeService.deleteEmployee(id, jwtToken); 
     
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error.message);
    }
  };

  return (
    <div className="addemployee-container">
      <div className="addemployee-header">
        <button className="addemployee-back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2>Add Employee</h2>
        <button className="request-reason-filter-button" onClick={openSidebar}>
          <i className="fa fa-filter"></i>
        </button>
      </div>

      <div className="addemployee-table-container">
        <table className="addemployee-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Employee Code</th>
              <th>Company</th>
              <th>Name</th>
              <th>Location</th>
              <th>Reporting Manager</th>
              <th>Department</th>
              <th>Job Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((employee) => (
                <tr key={employee.id }>
                  <td>
                    <button
                      onClick={() => toggleDropdown(employee.id )}
                      className="addemployee-action-button"
                    >
                      ⋮
                    </button>
                    {dropdownOpenFor === (employee.id ) && (
                      <ul className="addemployee_dropdown-menu">
                        <li>
                          <button onClick={() => navigate(`/dashboardlayout/addemployeeedit/${employee.id}`)}>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button onClick={() => deleteEmployee(employee.id )}>
                            Delete
                          </button>
                        </li>
                      </ul>
                    )}
                  </td>
                  <td>{employee.employeeCode || "N/A"}</td>
                  <td>{employee.company || "N/A"}</td>
                  <td>{`${employee.salutation || ""} ${employee.firstName || ""} ${employee.lastName || ""}`}</td>
                  <td>{employee.location || "N/A"}</td>
                  <td>{employee.reportingManager || "N/A"}</td>
                  <td>{employee.department || "N/A"}</td>
                  <td>{employee.jobTitle || "N/A"}</td>
                  <td>{employee.status || "Active"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="no-records">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        totalEntries={totalEntries}
        entriesPerPage={entriesPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onEntriesChange={handleEntriesChange}
      />

      {isSidebarOpen && (
        <AddEmployeeSidebar
          onClose={closeSidebar}
          onEmployeeAdded={handleEmployeeAdded} // Correct prop name
        />
      )}
    </div>
  );
};

export default AddEmployee;
