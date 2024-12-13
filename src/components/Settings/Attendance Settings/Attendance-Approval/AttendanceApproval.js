import React, { useState } from 'react';
import './AttendanceApproval.css';

const AttendanceApproval = () => {
    const [approvers, setApprovers] = useState([]);
    const [selectedApprover, setSelectedApprover] = useState('');

    const addApprover = () => {
        if (selectedApprover && !approvers.includes(selectedApprover)) {
            setApprovers([...approvers, selectedApprover]);
            setSelectedApprover('');
        }
    };

    const removeApprover = (approver) => {
        setApprovers(approvers.filter((item) => item !== approver));
    };

    return (
        <div className="attendance-approval-container">
            <div className="attendance-approval-header">
            <button className="working-shift-back-button">←</button>
            <h2>Attendance Approver Setting</h2>
            </div>
            <div className="approval-form">
                <label htmlFor="approver-input">Attendance Approver</label>
                <div className="approver-input-wrapper">
                    <input
                        id="approver-input"
                        type="text"
                        value={selectedApprover}
                        onChange={(e) => setSelectedApprover(e.target.value)}
                        placeholder="Enter Approver Name"
                    />
                    <button onClick={addApprover} className="add-approver-btn">
                        Add
                    </button>
                </div>
            </div>
            <div className="approvers-list">
                {approvers.length > 0 ? (
                    approvers.map((approver, index) => (
                        <div key={index} className="approver-item">
                            <span>{approver}</span>
                            <button
                                className="remove-approver-btn"
                                onClick={() => removeApprover(approver)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-approvers">No Approvers Added</p>
                )}
            </div>
            <p className="info-text">
                Organization Level Approval - Will apply for all the Attendance Approvers.
            </p>
        </div>
    );
};

export default AttendanceApproval;
