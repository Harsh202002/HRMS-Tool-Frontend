// LeaveApproval.js

import React, { useState } from 'react';
import './LeaveApproval.css';
import ApprovalSidebar from './Leave-Approval-Sidebar/ApprovalSidebar';

function LeaveApproval() {
    const [showApprovalSidebar, setShowApprovalSidebar] = useState(false);

    // Toggle sidebar visibility
    const toggleApprovalSidebar = () => {
        setShowApprovalSidebar(!showApprovalSidebar);
    };

    return (
        <div className="leave-approval-container">
            <div className="leave-approval-header">
                <button className="leave-approval-back-button">←</button>
                <h1>Approval</h1>
                <button className="leave-approval-add-button" onClick={toggleApprovalSidebar}>+</button>
            </div>

            {/* Approval Table */}
            <div className="approval-table-section">
                <table className="approval-table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>View</th>
                            <th>Module</th>
                            <th>Level 1</th>
                            <th>Level 2</th>
                            <th>Level 3</th>
                            <th>Level 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className="action-button" onClick={toggleApprovalSidebar}>...</button></td>
                            <td><button className="view-button">👁️</button></td>
                            <td>Leave Approval</td>
                            <td>Manager</td>
                            <td>HR Manager</td>
                            <td></td>
                            <td></td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

            {/* Exceptions Section */}
            <div className="exceptions-section">
                <p>Record Found :</p>
                <h2>Exceptions Employee</h2>
                <table className="exceptions-table">
                    <thead>
                        <tr>
                            <th>Module Name</th>
                            <th>Employee Name</th>
                            <th>Reporting Emp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Leave Approval</td>
                            <td>Aditya Raj</td>
                            <td>Sananda Dutta</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

            {/* Conditionally Render ApprovalSidebar */}
            {showApprovalSidebar && (
                <div className="sidebar-overlay">
                    <ApprovalSidebar onClose={toggleApprovalSidebar} />
                </div>
            )}
        </div>
    );
}

export default LeaveApproval;
