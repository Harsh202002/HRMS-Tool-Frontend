import React, { useState } from 'react';
import './StandardSetting.css';
import Pagination from '../../../ESS/Attendance/Pagination/Pagination';

const StandardSetting = () => {
    const standards = [
        { id: 1, standard: 'Graduation', status: 'Active' },
        { id: 2, standard: 'Higher Secondary', status: 'Active' },
        { id: 3, standard: 'Post Graduation', status: 'InActive' },
        { id: 4, standard: 'Secondary', status: 'Active' },
        // Add more data if needed
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(4);
    const totalEntries = standards.length;

    // Calculate the current items based on pagination
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentItems = standards.slice(startIndex, startIndex + entriesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEntriesChange = (newEntriesPerPage) => {
        setEntriesPerPage(newEntriesPerPage);
        setCurrentPage(1); // Reset to the first page when entries per page change
    };

    return (
        <div className="standard-setting-container">
            <div className="standard-setting-header">
                <button className="standard-setting-back-button">←</button>
                <h2>Education Standards</h2>
            </div>

            <div className="standard-setting-table-container">
                <table className="standard-setting-table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Education Standards</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <button className="action-button">⋮</button>
                                    </td>
                                    <td>{item.standard}</td>
                                    <td>
                                        <span className={`status-label ${item.status.toLowerCase()}`}>
                                            {item.status}
                                        </span>
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

            {/* Pagination Component */}
            <Pagination 
                totalEntries={totalEntries}
                entriesPerPage={entriesPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                onEntriesChange={handleEntriesChange}
            />
        </div>
    );
};

export default StandardSetting;
