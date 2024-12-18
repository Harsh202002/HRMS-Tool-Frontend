// LeavePolicy.js
import React, { useState } from 'react';
import './AddEmployee.css';
import AddEmployeeSidebar from './Add Employee Sidebar/AddEmployeeSidebar';
import Pagination from '../../ESS/Attendance/Pagination/Pagination'

const AddEmployee = () => {
    const addemployee = [{
        Employee_Code: "E001",
        Company_Name: "Tech Solutions",
        Employee_Name: "John Doe",
        Location: "New York",
        Reporting_Manager: "Jane Smith",
        Department_Name: "Engineering",
        Job_Title: "Software Engineer",
        Status: "Active"
    },

   ]

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const totalEntries = addemployee.length;
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentItems = addemployee.slice(startIndex, startIndex + entriesPerPage);

    const handlePageChange = (page) => setCurrentPage(page);
    const handleEntriesChange = (newEntriesPerPage) => {
        setEntriesPerPage(newEntriesPerPage);
        setCurrentPage(1);
    };

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="addemployee-container">
            <div className="addemployee-header">
                <button className="addemployee-back-button">←</button>
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
                            <th>View</th>
                            <th>Employee Code</th>
                            <th>Company Name</th>
                            <th>Employee Name</th>
                            <th>Location</th>
                            <th>Reporting Manager</th>
                            <th>Department Name</th>
                            <th>Job tittle</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((addemployee) => (
                                <tr key={addemployee.id}>
                                    <td><button className="addemployee-action-button">⋮</button></td>
                                    <td><button className="view-button">👁️</button></td>
                                    <td>{addemployee.Employee_Code}</td>
                                    <td>{addemployee.Company_Name}</td>
                                    <td>{addemployee.Employee_Name}</td>
                                    <td>{addemployee.Location}</td>
                                    <td>{addemployee.Reporting_Manager}</td>
                                    <td>{addemployee.Department_Name}</td>
                                    <td>{addemployee.Job_Title}</td>
                                    <td>
                                        <span className={`status-label ${addemployee.Status.toLowerCase()}`}>
                                            {addemployee.Status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="no-records">
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

            {isSidebarOpen && <AddEmployeeSidebar onClose={closeSidebar} />}
        </div>
    );
};

export default AddEmployee;
