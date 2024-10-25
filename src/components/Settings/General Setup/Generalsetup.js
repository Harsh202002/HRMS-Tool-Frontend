import React, { useState, useEffect } from "react";
import "./Generalsetup.css";
import Pagination from "../../../components/ESS/Attendance/Pagination/Pagination";


const Generalsetup = () => {
    const [generalData, setgeneralData] = useState([]);
    const [activeTab, setActiveTab] = useState("general"); // State to track the active tab
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
            setgeneralData(data);
        };

        fetchData();
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1); 
    };

    
    const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = generalData.slice(indexOfFirstEntry, indexOfLastEntry);


    return (
        <div className="generalsetup-list-container">
            <div className="generalsetup-list-header">
                <div className="generalsetup-list-heading">
                    <button className="back-button">←</button>

                    <h2>{activeTab === "general" ? "General" : activeTab === "locations" ? "Locations" : activeTab === "Department" ? "Department":activeTab === "jobtittle" ? "Job Tittle" : "Job Level" }</h2>
                </div>
                <div className="generalsetup-right-btn">
                <button className="filter-button">🔍</button>
                </div>
            </div>
            
            <div className="generalsetup-list-tabs">
                <div
                    className={`tab ${activeTab === "general" ? "active" : ""}`}
                    onClick={() => handleTabClick("general")}
                >
                    Company
                </div>
                <div
                    className={`tab ${activeTab === "locations" ? "active" : ""}`}
                    onClick={() => handleTabClick("locations")}
                >
                    Locations
                </div>
                <div
                    className={`tab ${activeTab === "Department" ? "active" : ""}`}
                    onClick={() => handleTabClick("Department")}
                >
                    Department
                </div>
                <div
                    className={`tab ${activeTab === "jobtittle" ? "active" : ""}`}
                    onClick={() => handleTabClick("jobtittle")}
                >
                    Job Tittle
                </div>
                <div
                    className={`tab ${activeTab === "joblevel" ? "active" : ""}`}
                    onClick={() => handleTabClick("joblevel")}
                >
                    Job Level
                </div>
            </div>
            {activeTab === "workflow" ? (
                <div>
                <div className="generalsetup-list-table-container">
                    <div>
                    <table className="generalsetup-list-table">
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
                                currentEntries.map((Workflow) => (
                                    <tr key={Workflow.id}>
                                        <td>
                                            <button>Edit</button>
                                        </td>
                                        <td>
                                            <button>View</button>
                                        </td>
                                        <td>{Workflow.Request}</td>
                                        <td>{Workflow.Requestid}</td>
                                        <td>{Workflow.Priority}</td>
                                        <td>{Workflow.Assignedto}</td>
                                        <td>{Workflow.Attachment}</td>
                                        <td>{Workflow.Requestdate}</td>
                                        <td>{Workflow.Status}</td>
                                        <td>
                                            {Workflow.cancelLeave === "Yes" && (
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
                        totalEntries={generalData.length}
                        entriesPerPage={entriesPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        onEntriesChange={setEntriesPerPage}
                    />
                </div>
            ) : (
                <div className="generalsetup-list-table-container">
                    <table className="generalsetup-list-table">
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


export default Generalsetup;
