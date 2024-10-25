import React, { useState, useEffect } from "react";
import "./Userroles.css";
import Pagination from "../../../components/ESS/Attendance/Pagination/Pagination";


const User = () => {
    const [userrolesData, setuserrolesData] = useState([]);
    const [activeTab, setActiveTab] = useState("users"); // State to track the active tab
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page
     const [entriesPerPage, setEntriesPerPage] = useState(5); // State to define items per page

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const data = [
                // Your data here

                    {
                        id: 1,
                        Username: "1",
                        Email: "harshitc417@gmail.com",
                        Full_Name: "Harshit",
                        Employee_code: "1",
                        Role: "Admin",
                        WFH_sync: "WFH Sync",
                        Status: "Active",
                        Blocked:"Unblocked"
                    },

                    {
                        id: 2,
                        Username: "2",
                        Email: "Nandini@gmail.com",
                        Full_Name: "Nandini",
                        Employee_code: "002",
                        Role: "Employee",
                        WFH_sync: "WFH Sync",
                        Status: "Active",
                        Blocked:"Unblocked"
                    },
                    {
                        id: 3,
                        Username: "3",
                        Email: "harshitc417@gmail.com",
                        Full_Name: "Harshit",
                        Employee_code: "003",
                        Role: "Super Admin",
                        WFH_sync: "WFH Sync",
                        Status: "Active",
                        Blocked:"Unblocked"
                    },
                    {
                        id: 4,
                        Username: "4",
                        Email: "harshitc417@gmail.com",
                        Full_Name: "Harshit",
                        Employee_code: "004",
                        Role: "Employee",
                        WFH_sync: "WFH Sync",
                        Status: "Active",
                        Blocked:"Unblocked"
                    },
                    {
                        id: 5,
                        Username: "5",
                        Email: "harshitc417@gmail.com",
                        Full_Name: "Harshit",
                        Employee_code: "005",
                        Role: "Manager",
                        WFH_sync: "WFH Sync",
                        Status: "Active",
                        Blocked:"Unblocked"
                    },
            ];
            setuserrolesData(data);
        };

        fetchData();
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1); 
    };

    
    const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = userrolesData.slice(indexOfFirstEntry, indexOfLastEntry);


    return (
        <div className="userroles-list-container">
            <div className="userroles-list-header">
                <div className="userroles-list-heading">
                    <button className="back-button">←</button>

                    <h2>Users</h2>
                </div>
                <div className="userroles-right-btn">
                <button className="filter-button">🔍</button>
                </div>
            </div>
            
            <div className="userroles-list-tabs">
                <div
                    className={`tab ${activeTab === "users" ? "active" : ""}`}
                    onClick={() => handleTabClick("users")}
                >
                    User
                </div>
            </div>
            
                <div>
                <div className="userroles-list-table-container">
                    <div>
                    <table className="userroles-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Full Name</th>
                                <th>Employee Code</th>
                                <th>Role</th>
                                <th>WFH Sync</th>
                                <th>Status</th>
                                <th>Blocked</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.length > 0 ? (
                                currentEntries.map((userroles) => (
                                    <tr key={userroles.id}>
                                        <td>
                                            <button>Edit</button>
                                        </td>
                                        <td>{userroles.Username}</td>
                                        <td>{userroles.Email}</td>
                                        <td>{userroles.Full_Name}</td>
                                        <td>{userroles.Employee_code}</td>
                                        <td>{userroles.Role}</td>
                                        <td>{userroles.WFH_sync}</td>
                                        <td>{userroles.Status}</td>
                                        <td>{userroles.Blocked}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="13" className="no-records">
                                        No records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                   
                    </div>
            
                </div>
                <Pagination
                        totalEntries={userrolesData.length}
                        entriesPerPage={entriesPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        onEntriesChange={setEntriesPerPage}
                    />
                </div>
        </div>
    );
};


export default User;
