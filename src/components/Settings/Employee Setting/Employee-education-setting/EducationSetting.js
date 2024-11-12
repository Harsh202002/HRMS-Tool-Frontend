import React, { useState, useEffect } from "react";
import "./EducationSetting.css"; // Create this CSS file for styling
import Pagination from "../../../ESS/Attendance/Pagination/Pagination"; // Use your existing Pagination component

const EducationSetting = () => {
    const [educationData, setEducationData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10); // Default number of entries per page

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
            const data = [
                { id: 1, standard: "Higher Secondary", courseName: "Arts", status: "Active" },
                { id: 2, standard: "Graduation", courseName: "B Com", status: "Active" },
                { id: 3, standard: "Graduation", courseName: "B Sc", status: "Active" },
                { id: 4, standard: "Graduation", courseName: "B Tech", status: "Active" },
                { id: 5, standard: "Graduation", courseName: "B.A", status: "Active" },
                { id: 6, standard: "Graduation", courseName: "BCA", status: "Active" },
                { id: 7, standard: "Higher Secondary", courseName: "Commerce", status: "Active" },
                { id: 8, standard: "Secondary", courseName: "General", status: "Active" },
              
            ];
            setEducationData(data);
        };

        fetchData();
    }, []);

    // Calculate indices for current page data
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = educationData.slice(indexOfFirstEntry, indexOfLastEntry);

    return (
        <div className="educationSetting-container">
            <div className="educationSetting-header">
                <button className="educationSetting-back-button">←</button>
                <h2>Employee Education Setting</h2>
            </div>
            <div className="educationSetting-table-container">
                <table className="educationSetting-table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Standard</th>
                            <th>Course Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.length > 0 ? (
                            currentEntries.map((education) => (
                                <tr key={education.id}>
                                    <td>
                                        <button className="action-button">view</button>
                                    </td>
                                    <td>{education.standard}</td>
                                    <td>{education.courseName}</td>
                                    <td>
                                        <span className={`status-label ${education.status === "Active" ? "active" : "inactive"}`}>
                                            {education.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="no-records">
                                    No records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Pagination
                totalEntries={educationData.length}
                entriesPerPage={entriesPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onEntriesChange={setEntriesPerPage}
            />
        </div>
    );
};

export default EducationSetting;
