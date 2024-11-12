// LeavePolicy.js
import React, { useState } from 'react';
import './LeavePolicy.css';
import LeavePolicySidebar from './Leave-Policy-Sidebar/LeavePolicySidebar';
import Pagination from '../../../ESS/Attendance/Pagination/Pagination';

const LeavePolicy = () => {
    const leavePolicies = [
        {
            id: 1,
            company: 'Nettech Solutions',
            name: 'Leave Policy_General',
            code: 'LPGEN',
            type: 'SL, EL, PL, ML, LOP, BR, MR',
            status: 'Active',
            configStatus: 'Allocated'
        },
        {
            id: 2,
            company: 'Nettech Solutions',
            name: 'Leave Policy_KOL',
            code: 'LP2024',
            type: 'EL',
            status: 'Active',
            configStatus: 'Allocated'
        },
        {
            id: 3,
            company: 'Nettech Solutions',
            name: 'LP-2024',
            code: 'LP2024',
            type: 'EL',
            status: 'Inactive',
            configStatus: 'Allocated'
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const totalEntries = leavePolicies.length;
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentItems = leavePolicies.slice(startIndex, startIndex + entriesPerPage);

    const handlePageChange = (page) => setCurrentPage(page);
    const handleEntriesChange = (newEntriesPerPage) => {
        setEntriesPerPage(newEntriesPerPage);
        setCurrentPage(1);
    };

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="leave-policy-container">
            <div className="leave-policy-header">
                <button className="leave-policy-back-button">←</button>
                <h2>Leave Policy</h2>
                <button className="request-reason-filter-button" onClick={openSidebar}>
                    <i className="fa fa-filter"></i>
                </button>  
            </div>

            <div className="leave-policy-table-container">
                <table className="leave-policy-table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>View</th>
                            <th>Company</th>
                            <th>Leave Policy Name</th>
                            <th>Leave Policy Code</th>
                            <th>Leave Type</th>
                            <th>Leave Policy Status</th>
                            <th>Configuration Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((policy) => (
                                <tr key={policy.id}>
                                    <td><button className="action-button">⋮</button></td>
                                    <td><button className="view-button">👁️</button></td>
                                    <td>{policy.company}</td>
                                    <td>{policy.name}</td>
                                    <td>{policy.code}</td>
                                    <td>{policy.type}</td>
                                    <td>
                                        <span className={`status-label ${policy.status.toLowerCase()}`}>
                                            {policy.status}
                                        </span>
                                    </td>
                                    <td>{policy.configStatus}</td>
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

            {isSidebarOpen && <LeavePolicySidebar onClose={closeSidebar} />}
        </div>
    );
};

export default LeavePolicy;
