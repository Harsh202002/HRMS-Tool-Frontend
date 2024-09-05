import React, { useState, useEffect } from "react";
import "./MyRequest.css";
import Pagination from "../Attendance/Pagination/Pagination";


const Myrequest = () => {
    const [MyrequestData, setMyrequestData] = useState([]);
    const [activeTab, setActiveTab] = useState("myrequest"); // State to track the active tab
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page
     const [entriesPerPage, setEntriesPerPage] = useState(5); // State to define items per page

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const data = [
                // Your data here

                    {
                        id: 1,
                        Request: "Annual Leave",
                        Requestid: "None",
                        Priority: "2024-08-01",
                        Assignedto: "2024-08-05",
                        Attachment: 5,
                        Requestdate: "No",
                        Status: "Vacation",
                    },
            ];
            setMyrequestData(data);
        };

        fetchData();
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1); 
    };

    
    const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = MyrequestData.slice(indexOfFirstEntry, indexOfLastEntry);


    return (
        <div className="myrequest-list-container">
            <div className="myrequest-list-header">
                <div className="myrequest-list-heading">
                    <button className="back-button">←</button>

                    <h2>{activeTab === "myrequest" ? "My Requests" : "Employee Requests"}</h2>
                </div>
                <div className="myrequest-right-btn">
                <button className="filter-button">🔍</button>
                </div>
            </div>
            
            <div className="myrequest-list-tabs">
                <div
                    className={`tab ${activeTab === "myrequest" ? "active" : ""}`}
                    onClick={() => handleTabClick("myrequest")}
                >
                    My Request
                </div>
                <div
                    className={`tab ${activeTab === "myrequestCreditRequest" ? "active" : ""}`}
                    onClick={() => handleTabClick("myrequestCreditRequest")}
                >
                    Employee Requests
                </div>
            </div>
            {activeTab === "myrequest" ? (
                <div>
                <div className="myrequest-list-table-container">
                    <div>
                    <table className="myrequest-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>View</th>
                                <th>Request</th>
                                <th>Request Id</th>
                                <th>Priority</th>
                                <th>Assigned To</th>
                                <th>Attachment</th>
                                <th>Request Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.length > 0 ? (
                                currentEntries.map((Myrequest) => (
                                    <tr key={Myrequest.id}>
                                        <td>
                                            <button>Edit</button>
                                        </td>
                                        <td>
                                            <button>View</button>
                                        </td>
                                        <td>{Myrequest.Request}</td>
                                        <td>{Myrequest.Requestid}</td>
                                        <td>{Myrequest.Priority}</td>
                                        <td>{Myrequest.Assignedto}</td>
                                        <td>{Myrequest.Attachment}</td>
                                        <td>{Myrequest.Requestdate}</td>
                                        <td>{Myrequest.Status}</td>
                                        <td>
                                            {Myrequest.cancelLeave === "Yes" && (
                                                <button>Cancel</button>
                                            )}
                                        </td>
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
                        totalEntries={MyrequestData.length}
                        entriesPerPage={entriesPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        onEntriesChange={setEntriesPerPage}
                    />
                </div>
            ) : (
                <div className="myrequest-list-table-container">
                    <table className="myrequest-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>View</th>
                                <th>Request</th>
                                <th>Request Id</th>
                                <th>Priority</th>
                                <th>Assignedto</th>
                                <th>Attachment</th>
                                <th>Request Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Your leave credit request data rendering here */}
                            <tr>
                                <td colSpan="9" className="no-records">
                                    No records found
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};


export default Myrequest;
