// LeavePolicySidebar.js
import React from 'react';
import './LeavePolicySidebar.css';

const LeavePolicySidebar = ({ onClose }) => {
  return (
    <div className="leave-policy-sidebar">
      <div className="leave-policy-sidebar-header">
        <h2>Leave Policy Configuration</h2>
        <button className="leave-policy-close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form className="leave-policy-sidebar-content">
        <div className="leave-policy-form-group">
          <label>Leave Policy Name</label>
          <select>
            <option>--Select--</option>
            <option>Leave Policy_General</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="leave-policy-form-group">
          <label>Leave Name</label>
          <select>
            <option>--Select--</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="leave-policy-form-group">
          <label>Marital Status</label>
          <select>
            <option>--Select--</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="leave-policy-form-group">
          <label>Employee Type</label>
          <select>
            <option>--Select--</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="leave-policy-form-checkbox">
          <label><input type="checkbox" /> Is Accrual</label>
          <label><input type="checkbox" /> Is Pro-rata</label>
          <label><input type="checkbox" /> Carry Forward</label>
          <label><input type="checkbox" /> Paid Leave</label>
        </div>
        <div className="leave-policy-form-group">
          <label>Minimum Avail Days</label>
          <input type="number" />
        </div>
        <div className="leave-policy-form-group">
          <label>Maximum Avail Days</label>
          <input type="number" />
        </div>
        <div className="leave-policy-form-group">
          <label>Minimum Avail Hours</label>
          <input type="number" />
        </div>
        <div className="leave-policy-form-group">
          <label>Maximum Avail Hours</label>
          <input type="number" />
        </div>
        <div className="leave-policy-form-group">
          <label>Maximum application per year</label>
          <input type="number" />
        </div>
        <div className="leave-policy-form-group">
          <label>Leave Per Year</label>
          <input type="number" />
        </div>
        <div className="leave-policy-form-group">
          <label>Applicable For</label>
          <input type="text" />
        </div>
        <div className="leave-policy-form-actions">
          <button type="submit" className="leave-policy-save-button">Save</button>
          <button type="reset" className="leave-policy-reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default LeavePolicySidebar;
