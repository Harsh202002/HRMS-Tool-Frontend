import React from 'react';
import './RequestSidebarForm.css';

const RequestSidebar = ({ onClose }) => {
  return (
    <div className="request-sidebar-form">
      <div className="request-sidebar-header">
        <h2>Add Request Reason</h2>
        <button className="request-close-sidebar-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form className="request-sidebar-form-content">
        <div className="request-sidebar-form-group">
          <label>Company</label>
          <select>
            <option>--Select--</option>
            {/* Options */}
          </select>
        </div>
        <div className="request-sidebar-form-group">
          <label>Location</label>
          <select>
            <option>--Select--</option>
            {/* Options */}
          </select>
        </div>
        <div className="request-sidebar-form-group">
          <label>Department</label>
          <select>
            <option>--Select--</option>
            {/* Options */}
          </select>
        </div>
        <div className="request-sidebar-form-group">
          <label>Request Reason</label>
          <input type="text" />
        </div>
        <div className="request-sidebar-form-group">
          <label>Turnaround Time (In Hours)</label>
          <input type="number" />
        </div>
        <div className="request-sidebar-form-group">
          <label>Status</label>
          <select>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <div className="request-sidebar-form-group">
          <label>
            <input type="checkbox" /> Escalate Request
          </label>
        </div>
        <div className="request-sidebar-form-actions">
          <button type="submit" className="request-sidebar-save-button">Save</button>
          <button type="button" className="request-sidebar-save-new-button">Save & New</button>
          <button type="reset" className="request-sidebar-reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default RequestSidebar;
