import React, { useState } from 'react';
import './ApplyLeave.css';
import leaveService from '../../../services/leaveService';

const ApplyLeave = () => {
  const [activeTab, setActiveTab] = useState('apply');
  const [leaveName, setLeaveName] = useState('');
  const [leaveFrom, setLeaveFrom] = useState('');
  const [leaveTo, setLeaveTo] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [duration, setDuration] = useState('');
  const [reason, setReason] = useState('');
  const [altComm, setAltComm] = useState('');
  const [document, setDocument] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a leaveData object
    const leaveData = {
      leaveName,
      leaveType,
      leaveFrom,
      leaveTo,
      duration,
      reason,
      altComm,
      ...(document && { document })
    };

    try {
      const result = await leaveService.applyLeave(leaveData);
      console.log("Leave applied successfully:", result);
    } catch (error) {
      console.error("Error applying leave:", error);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'apply':
        return (
          <form className="tab-content" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Leave Type</label>
              <select value={leaveName} onChange={(e) => setLeaveName(e.target.value)}>
                <option value="">--Select--</option>
                <option value="EL">Earned Leave</option>
                <option value="SL">Sick Leave</option>
                <option value="CL">Casual Leave</option>
                <option value="LOP">Loss of Pay</option>
              </select>
            </div>
            <div className="form-group">
              <label>From</label>
              <input
                type="date"
                value={leaveFrom}
                onChange={(e) => setLeaveFrom(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>To</label>
              <input
                type="date"
                value={leaveTo}
                onChange={(e) => setLeaveTo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Leave Consumption Type</label>
              <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
                <option value="">--Select--</option>
                <option value="Full day">Full Day</option>
                <option value="Half Day">Half Day</option>
              </select>
            </div>
            <div className="form-group">
              <label>Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Reason for leave</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Address For Communication</label>
              <textarea
                value={altComm}
                onChange={(e) => setAltComm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Upload Document</label>
              <input
                type="file"
                onChange={(e) => setDocument(e.target.files[0])}
              />
              <small>(Doc can be uploaded in Gif, Pdf, Jpg, Jpeg, Png, Doc, Docx file.)</small>
            </div>
            <div className="form-actions">
              <button type="submit" className="apply-save-button">Save</button>
              <button type="reset" className="apply-reset-button">Reset</button>
            </div>
          </form>
        );
      case 'shortLeave':
        return (
          <form className="tab-content">
            <div className="form-group">
              <label>Short Leave Reason</label>
              <textarea />
            </div>
            <div className="form-group">
              <label>Short Leave Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Duration</label>
              <input type="text" />
            </div>
            <div className="form-actions">
              <button type="submit" className="apply-save-button">Save</button>
              <button type="reset" className="apply-reset-button">Reset</button>
            </div>
          </form>
        );
      case 'feedback':
        return (
          <form className="tab-content">
            <div className="form-group">
              <label>Feedback</label>
              <textarea />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" />
            </div>
            <div className="form-actions">
              <button type="submit" className="apply-save-button">Save</button>
              <button type="reset" className="apply-reset-button">Reset</button>
            </div>
          </form>
        );
      case 'request':
        return (
          <form className="tab-content">
            <div className="form-group">
              <label>Request Type</label>
              <select>
                <option value="">--Select--</option>
                <option value="leave">Leave Request</option>
                <option value="other">Other Request</option>
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea />
            </div>
            <div className="form-actions">
              <button type="submit" className="apply-save-button">Submit</button>
              <button type="reset" className="apply-reset-button">Reset</button>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="apply-leave-container">
      <div className="tabs">
        <button className={activeTab === 'apply' ? 'active' : ''} onClick={() => setActiveTab('apply')}>
          Apply Leave
        </button>
        <button className={activeTab === 'shortLeave' ? 'active' : ''} onClick={() => setActiveTab('shortLeave')}>
          Short Leave
        </button>
        <button className={activeTab === 'feedback' ? 'active' : ''} onClick={() => setActiveTab('feedback')}>
          Feedback
        </button>
        <button className={activeTab === 'request' ? 'active' : ''} onClick={() => setActiveTab('request')}>
          Request
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default ApplyLeave;
