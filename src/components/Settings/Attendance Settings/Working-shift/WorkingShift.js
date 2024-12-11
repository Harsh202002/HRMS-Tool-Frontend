import React, { useState } from 'react';
import './WorkingShift.css';
import WorkingSidebar from './Working-Sidebar/WorkingSidebar';
import Pagination from '../../../ESS/Attendance/Pagination/Pagination'; // Import Pagination component

const WorkingShift = () => {
    const [shiftDetails] = useState([
        {
            id: 1,
            company: 'Netfotech Solutions',
            location: 'Pune',
            shift: 'General',
            shiftCode: 'GEN',
            stdWorkingHour: '09:00',
            minHrFullDay: '09:00',
            minHrHalfDay: '04:30',
            startTime: '10:00',
            endTime: '19:00',
            lunchStart: '13:00',
            lunchEnd: '14:00',
            shiftBreakStart: '00:00'
        },
        // Add more dummy data as needed
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const totalEntries = shiftDetails.length;

    // Calculate the current items based on pagination
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentItems = shiftDetails.slice(startIndex, startIndex + entriesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEntriesChange = (newEntriesPerPage) => {
        setEntriesPerPage(newEntriesPerPage);
        setCurrentPage(1); // Reset to the first page when entries per page change
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="working-shift-container">
            <div className="working-shift-header">
            <button className="working-shift-back-button">←</button>
                <h2>Working Shift And Week Off Details</h2>
                <button className="working-shift-filter-button" onClick={openSidebar}>
                    <i className="fa fa-filter"></i>
                </button>
            </div>

            <div className="working-shift-table-container">
                <table className="working-shift-table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Shift</th>
                            <th>Shift Code</th>
                            <th>Std Working Hour</th>
                            <th>Min Hr Full Day</th>
                            <th>Min Hr Half Day</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Lunch Start</th>
                            <th>Lunch End</th>
                            <th>Shift Break Start</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <button className="action-button">View</button>
                                    </td>
                                    <td>{item.company}</td>
                                    <td>{item.location}</td>
                                    <td>{item.shift}</td>
                                    <td>{item.shiftCode}</td>
                                    <td>{item.stdWorkingHour}</td>
                                    <td>{item.minHrFullDay}</td>
                                    <td>{item.minHrHalfDay}</td>
                                    <td>{item.startTime}</td>
                                    <td>{item.endTime}</td>
                                    <td>{item.lunchStart}</td>
                                    <td>{item.lunchEnd}</td>
                                    <td>{item.shiftBreakStart}</td>
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

            {/* Pagination Component */}
            <Pagination
                totalEntries={totalEntries}
                entriesPerPage={entriesPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                onEntriesChange={handleEntriesChange}
            />
            {isSidebarOpen && <WorkingSidebar onClose={closeSidebar} />}
            
        </div>
    );
};

export default WorkingShift;
