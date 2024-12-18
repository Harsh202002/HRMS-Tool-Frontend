// LeavePolicySidebar.js
import React from 'react';
import './AddEmployeeSidebar.css';

const AddEmployeeSidebar = ({ onClose }) => {
  return (
    <div className="addemployeesidebar-sidebar">
      <div className="addemployeesidebar-sidebar-header">
        <h2>Add Employee</h2>
        <button className="addemployeesidebar-close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form className="addemployeesidebar-sidebar-content">
        <div className="addemployeesidebar-form-group">
          <label>Leave Policy Name</label>
          <select>
            <option>--Select--</option>
            <option>Leave Policy_General</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="addemployeesidebar-form-group">
          <label>Leave Name</label>
          <select>
            <option>--Select--</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="addemployeesidebar-form-group">
          <label>Marital Status</label>
          <select>
            <option>--Select--</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="addemployeesidebar-form-group">
          <label>Employee Type</label>
          <select>
            <option>--Select--</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="addemployeesidebar-form-checkbox">
          <label><input type="checkbox" /> Is Accrual</label>
          <label><input type="checkbox" /> Is Pro-rata</label>
          <label><input type="checkbox" /> Carry Forward</label>
          <label><input type="checkbox" /> Paid Leave</label>
        </div>
        <div className="addemployeesidebar-form-group">
          <label>Minimum Avail Days</label>
          <input type="number" />
        </div>
        <div className="addemployeesidebar-form-group">
          <label>Maximum Avail Days</label>
          <input type="number" />
        </div>
        <div className="addemployeesidebar-form-group">
          <label>Minimum Avail Hours</label>
          <input type="number" />
        </div>
        <div className="addemployeesidebar-form-group">
          <label>Maximum Avail Hours</label>
          <input type="number" />
        </div>
        <div className="addemployeesidebar-form-group">
          <label>Maximum application per year</label>
          <input type="number" />
        </div>
        <div className="addemployeesidebar-form-group">
          <label>Leave Per Year</label>
          <input type="number" />
        </div>
        <div className="addemployeesidebar-form-group">
          <label>Applicable For</label>
          <input type="text" />
        </div>
        <div className="addemployeesidebar-form-actions">
          <button type="submit" className="addemployeesidebar-save-button">Save</button>
          <button type="reset" className="addemployeesidebar-reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeSidebar;
