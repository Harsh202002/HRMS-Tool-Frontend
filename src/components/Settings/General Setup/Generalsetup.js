import React, { useState, useEffect } from "react";
import "./Generalsetup.css";
import Pagination from "../../../components/ESS/Attendance/Pagination/Pagination";

const Generalsetup = () => {
    const [generalData, setgeneralData] = useState([]);
    const [activeTab, setActiveTab] = useState("general"); // Track active tab
    const [currentPage, setCurrentPage] = useState(1); // Manage current page
    const [entriesPerPage, setEntriesPerPage] = useState(5); // Items per page

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const data = [
                {
                    id: 1,
                    companyname: "Annual Leave",
                    companycode: "None",
                    address: "2024-08-01",
                    website: "2024-08-05",
                    telephone: 5,
                    email: "No",
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
                    <h2>
                        {activeTab === "general"
                            ? "General"
                            : activeTab === "locations"
                            ? "Locations"
                            : activeTab === "department"
                            ? "Department"
                            : activeTab === "jobtittle"
                            ? "Job Title"
                            : "Job Level"}
                    </h2>
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
                    className={`tab ${activeTab === "department" ? "active" : ""}`}
                    onClick={() => handleTabClick("department")}
                >
                    Department
                </div>
                <div
                    className={`tab ${activeTab === "jobtittle" ? "active" : ""}`}
                    onClick={() => handleTabClick("jobtittle")}
                >
                    Job Title
                </div>
                <div
                    className={`tab ${activeTab === "joblevel" ? "active" : ""}`}
                    onClick={() => handleTabClick("joblevel")}
                >
                    Job Level
                </div>
            </div>

            {/* Render sections based on activeTab */}
            {activeTab === "general" && (
                <div>
                <div className="generalsetup-list-table-container">
                    <table className="generalsetup-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Company Name</th>
                                <th>Company Code</th>
                                <th>Address</th>
                                <th>Website</th>
                                <th>Telephone</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.length > 0 ? (
                                currentEntries.map((general) => (
                                    <tr key={general.id}>
                                        <td><button>Edit</button></td>
                                        <td>{general.companyname}</td>
                                        <td>{general.companycode}</td>
                                        <td>{general.address}</td>
                                        <td>{general.website}</td>
                                        <td>{general.telephone}</td>
                                        <td>{general.email}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="no-records">
                                        No records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Pagination
                        totalEntries={generalData.length}
                        entriesPerPage={entriesPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        onEntriesChange={setEntriesPerPage}
                    />
                </div>
            )}

            {activeTab === "locations" && (
                <div className="generalsetup-list-table-container">
                    <table className="generalsetup-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Location Name</th>
                                <th>Address</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="4" className="no-records">
                                    No records found
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "department" && (
                <div className="generalsetup-list-table-container">
                    <table className="generalsetup-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Department Name</th>
                                <th>Head</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="4" className="no-records">
                                    No records found
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            {activeTab === "jobtittle" && (
                <div className="generalsetup-list-table-container">
                    <table className="generalsetup-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Jobtittle Name</th>
                                <th>Head</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="4" className="no-records">
                                    No records found
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
             {activeTab === "joblevel" && (
                <div className="generalsetup-list-table-container">
                    <table className="generalsetup-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Joblevel Name</th>
                                <th>Head</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="4" className="no-records">
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
