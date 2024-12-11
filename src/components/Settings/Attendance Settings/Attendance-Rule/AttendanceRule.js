import React, { useState } from 'react';
import './AttendanceRule.css';
import DownBarForm from './DownBarForm/DownBarForm'; // Placeholder for the next component

// Dummy Data
const attendanceRuleData = [
    {
        id: 1,
        ruleName: "AR-1",
        company: "Netfotech Solutions",
        defaultRule: true,
        location: "Bangalore",
        attendanceLockDay: 1,
        status: "Active",
    },
    {
        id: 2,
        ruleName: "AR-2",
        company: "TechPro Services",
        defaultRule: false,
        location: "Chennai",
        attendanceLockDay: 3,
        status: "Inactive",
    },
    {
        id: 3,
        ruleName: "AR-3",
        company: "Innovate Corp",
        defaultRule: false,
        location: "Mumbai",
        attendanceLockDay: 5,
        status: "Active",
    },
    {
        id: 4,
        ruleName: "AR-4",
        company: "Delta Technologies",
        defaultRule: false,
        location: "Pune",
        attendanceLockDay: 2,
        status: "Inactive",
    },
    {
        id: 5,
        ruleName: "AR-5",
        company: "Global Systems",
        defaultRule: true,
        location: "Kolkata",
        attendanceLockDay: 7,
        status: "Active",
    },
    {
        id: 6,
        ruleName: "AR-6",
        company: "NextGen Solutions",
        defaultRule: false,
        location: "Hyderabad",
        attendanceLockDay: 6,
        status: "Inactive",
    },
    {
        id: 7,
        ruleName: "AR-7",
        company: "Cloudify Tech",
        defaultRule: true,
        location: "Noida",
        attendanceLockDay: 4,
        status: "Active",
    },
    {
        id: 8,
        ruleName: "AR-8",
        company: "BlueSky Ventures",
        defaultRule: false,
        location: "Gurgaon",
        attendanceLockDay: 10,
        status: "Inactive",
    },
];

function AttendanceRule() {
    const [showDownBarForm, setShowDownBarForm] = useState(false);

    // Toggle DownBarForm visibility
    const toggleDownBarForm = () => {
        setShowDownBarForm(!showDownBarForm);
    };

    return (
        <div className="attendance-rule-container">
            {/* Attendance Rule Header */}
            <div className="attendance-rule-header">
                <button className="attendance-rule-back-button">←</button>
                <h1>Attendance Rule Setup</h1>
            </div>

            <div className="attendance-rule-sub-header">
                <h2>Attendance Rule</h2>
                <button
                    className="attendance-rule-toggle-button"
                    onClick={toggleDownBarForm}
                >
                    ↓
                </button>
            </div>

            {/* Attendance Rule Table */}
            <div className="attendance-rule-table-container">
                <table className="attendance-rule-table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>View</th>
                            <th>Rule Name</th>
                            <th>Company</th>
                            <th>Default Rule</th>
                            <th>Location</th>
                            <th>Attendance Lock Day</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceRuleData.map((rule) => (
                            <tr key={rule.id}>
                                <td>
                                    <button className="action-button">...</button>
                                </td>
                                <td>
                                    <button className="view-button">👁️</button>
                                </td>
                                <td>{rule.ruleName}</td>
                                <td>{rule.company}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        defaultChecked={rule.defaultRule}
                                    />
                                </td>
                                <td>{rule.location}</td>
                                <td>{rule.attendanceLockDay}</td>
                                <td>
                                    <span
                                        className={
                                            rule.status === "Active"
                                                ? "status-active"
                                                : "status-inactive"
                                        }
                                    >
                                        {rule.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showDownBarForm && (
                <div className="downbar-form-overlay">
                    <DownBarForm onClose={() => setShowDownBarForm(false)} />
                </div>
            )}
        </div>
    );
}

export default AttendanceRule;
