// ApprovalSidebar.js

import React, { useState } from 'react';
import './ApprovalSidebar.css';


const ApprovalSidebar = ({ onClose }) => {
  const [formData, setFormData] = useState({
    module: '',
    levels: Array(4).fill({ approver: '', approved: false, escalate: false }),
    exceptionEmployee: '',
    approvalManager: '',
  });

  const handleInputChange = (e, levelIndex = null, field = null) => {
    const { name, value, checked, type } = e.target;

    if (levelIndex !== null && field) {
      const updatedLevels = formData.levels.map((level, idx) =>
        idx === levelIndex ? { ...level, [field]: type === 'checkbox' ? checked : value } : level
      );
      setFormData({ ...formData, levels: updatedLevels });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="approval-sidebar">
      <div className="approval-sidebar-header">
        <h2>Approval Setting</h2>
        <button className="leave-approval-close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group module-select">
          <label htmlFor="module">Module</label>
          <select
            name="module"
            id="module"
            value={formData.module}
            onChange={handleInputChange}
          >
            <option value="">Select an Option</option>
            {/* Add module options here */}
          </select>
        </div>

        {formData.levels.map((level, index) => (
          <div key={index} className={`form-group level-group level-${index + 1}`}>
            <label>Level {index + 1}</label>
            <select
              value={level.approver}
              onChange={(e) => handleInputChange(e, index, 'approver')}
            >
              <option value="">--Select--</option>
              {/* Add approver options here */}
            </select>
            <label>
              <input
                type="checkbox"
                checked={level.approved}
                onChange={(e) => handleInputChange(e, index, 'approved')}
              />
              If approved by Level {index + 1}
            </label>
            <label>
              <input
                type="checkbox"
                checked={level.escalate}
                onChange={(e) => handleInputChange(e, index, 'escalate')}
              />
              Escalation
            </label>
          </div>
        ))}

        <div className="form-group exceptions">
          <h3>Exceptions</h3>
          <label htmlFor="exceptionEmployee">Employee</label>
          <select
            name="exceptionEmployee"
            id="exceptionEmployee"
            value={formData.exceptionEmployee}
            onChange={handleInputChange}
          >
            <option value="">--Select--</option>
            {/* Add employee options here */}
          </select>

          <label htmlFor="approvalManager">Approved Manager</label>
          <select
            name="approvalManager"
            id="approvalManager"
            value={formData.approvalManager}
            onChange={handleInputChange}
          >
            <option value="">--Select--</option>
            {/* Add manager options here */}
          </select>
        </div>

        <div className="form-group buttons">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" className="btn-save-new">Save & New</button>
          <button type="reset" className="btn-reset" onClick={() => setFormData({
            module: '',
            levels: Array(4).fill({ approver: '', approved: false, escalate: false }),
            exceptionEmployee: '',
            approvalManager: '',
          })}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ApprovalSidebar;
