// LeavePolicyPeriod.js
import React, { useState } from 'react';
import './LeavePolicyPeriod.css';
import Pagination from '../../../ESS/Attendance/Pagination/Pagination';
import LeavePeriodSidebarNew from './Leave-Period-Sidebar/LeavePeriodSidebarNew';
import LeavePeriodSidebarEdit from './Leave-Period-Sidebar/LeavePeriodsidebarEdit';


const LeavePolicyPeriod = () => {
    const [leavePeriods, setLeavePeriods] = useState([
        {
            id: 1,
            name: 'LP-24',
            startDate: '01/01/2024',
            endDate: '31/12/2024',
            status: 'Active'
        }
        // Add more sample data as needed
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [isSidebarNewOpen, setIsSidebarNewOpen] = useState(false);
    const [isSidebarEditOpen, setIsSidebarEditOpen] = useState(false);
    const [editPeriod, setEditPeriod] = useState(null);

    const totalEntries = leavePeriods.length;
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentItems = leavePeriods.slice(startIndex, startIndex + entriesPerPage);

    const handlePageChange = (page) => setCurrentPage(page);
    const handleEntriesChange = (newEntriesPerPage) => {
        setEntriesPerPage(newEntriesPerPage);
        setCurrentPage(1);
    };

    const openNewSidebar = () => setIsSidebarNewOpen(true);
    const closeNewSidebar = () => setIsSidebarNewOpen(false);

    const openEditSidebar = (period) => {
        setEditPeriod(period);
        setIsSidebarEditOpen(true);
    };
    const closeEditSidebar = () => setIsSidebarEditOpen(false);

    const handleSaveNewPeriod = (newPeriod) => {
        setLeavePeriods([...leavePeriods, { id: leavePeriods.length + 1, ...newPeriod }]);
        closeNewSidebar();
    };

    const handleUpdatePeriod = (updatedPeriod) => {
        setLeavePeriods(
            leavePeriods.map(period => 
                period.id === updatedPeriod.id ? updatedPeriod : period
            )
        );
        closeEditSidebar();
    };

    return (
        <div className="leave-policy-period-container">
            <div className="leave-policy-period-header">
                <button className="leave-policy-period-back-button">←</button>
                <h2>Leave Policy Period</h2>
                <button className="request-reason-filter-button" onClick={openNewSidebar}>
                    <i className="fa fa-filter"></i>
                </button>  
            </div>

            <div className="leave-policy-period-table-container">
                <table className="leave-policy-period-table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>View</th>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((period) => (
                                <tr key={period.id}>
                                    <td>
                                        <button className="edit-button" onClick={() => openEditSidebar(period)}>Edit</button>
                                    </td>
                                    <td><button className="view-button">👁️</button></td>
                                    <td>{period.name}</td>
                                    <td>{period.startDate}</td>
                                    <td>{period.endDate}</td>
                                    <td>
                                        <span className={`status-label ${period.status.toLowerCase()}`}>
                                            {period.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="no-records">
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

            {isSidebarNewOpen && <LeavePeriodSidebarNew onClose={closeNewSidebar} onSave={handleSaveNewPeriod} />}
            {isSidebarEditOpen && editPeriod && <LeavePeriodSidebarEdit onClose={closeEditSidebar} period={editPeriod} onUpdate={handleUpdatePeriod} />}
        </div>
    );
};

export default LeavePolicyPeriod;
