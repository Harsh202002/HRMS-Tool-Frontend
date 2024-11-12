import React, { useState, useEffect } from "react";
import "./TypeOfEmployment.css"; // You will need a separate CSS file for unique styling
import Pagination from "../../../ESS/Attendance/Pagination/Pagination";

const TypeOfEmployment = () => {
    const [employmentData, setEmploymentData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10); // Set default per page

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
            const data = [
                { id: 1, statusName: "Contractual", status: "Active" },
                { id: 2, statusName: "Intern", status: "Active" },
                { id: 3, statusName: "Permanent", status: "Active" }
            ];
            setEmploymentData(data);
        };

        fetchData();
    }, []);

    // Calculate indices for current page data
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = employmentData.slice(indexOfFirstEntry, indexOfLastEntry);

    return (
        <div className="typeOfEmployment-container">
            <div className="typeOfEmployment-header">
                <button className="typeOfEmployment-back-button">←</button>
                <h2>Type Of Employment</h2>
            </div>
            <div className="typeOfEmployment-table-container">
                <table className="typeOfEmployment-table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Status Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.length > 0 ? (
                            currentEntries.map((employment) => (
                                <tr key={employment.id}>
                                    <td>
                                        <button className="action-button">view</button>
                                    </td>
                                    <td>{employment.statusName}</td>
                                    <td>
                                        <span className="status-label">{employment.status}</span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="no-records">
                                    No records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Pagination
                totalEntries={employmentData.length}
                entriesPerPage={entriesPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onEntriesChange={setEntriesPerPage}
            />
        </div>
    );
};

export default TypeOfEmployment;
