import React, { useState } from 'react';
import './ApplyLeave.css';

const ApplyLeave = () => {
  const [activeTab, setActiveTab] = useState('apply');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'apply':
        return (
          <form className="tab-content">
            <div className="form-group">
              <label>Employee Code</label>
              <input type="text" placeholder="109" />
            </div>
            <div className="form-group">
              <label>Leave Type</label>
              <select>
                <option value="">--Select--</option>
                <option value="sick">Sick Leave</option>
                <option value="casual">Casual Leave</option>
                
              </select>
            </div>
            <div className="form-group">
              <label>Attach Document</label>
              <input type="file" />
            </div>
            <div className="form-group">
              <label>From</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>To</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Duration</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Reason for leave</label>
              <textarea />
            </div>
            <div className="form-group">
              <label>Address For Communication</label>
              <textarea />
            </div>
            <div className="form-group">
              <label>Leave Consumption Type</label>
              <select>
                <option value="full">Full Day</option>
                <option value="half">Half Day</option>
                {/* Add more options as needed */}
              </select>
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
            {/* Short Leave form fields */}
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
            {/* Feedback form fields */}
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
            {/* Request form fields */}
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