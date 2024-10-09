import React from 'react';
import './ResignationSidebar.css';

const ResignationSidebarForm = ({ onClose }) => {
  return (
    <div className="resignation-sidebar-form">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Add Resignation Form</h2>
        <button className="resignation-close-sidebar-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form className='resignation-rsidebar-form'>
        <div className="resignation-rsidebar-form-group">
          <label>Resignation Date</label>
          <input type='date' />
        </div>
        <div className="resignation-rsidebar-form-group">
          <label>Reason for Leaving</label>
          <select>
            <option>--Select--</option>
            <option>Personal Reasons</option>
            <option>Professional Reasons</option>
            <option>Health Reasons</option>
          </select>
        </div>
        <div className="resignation-rsidebar-form-group">
          <label>Notice Period (In days)</label>
          <input type='number' />
        </div>
        <div className="resignation-rsidebar-form-group">
          <label>Last Working Day</label>
          <input type="date" />
        </div>
        <div className="resignation-rsidebar-form-group">
          <label>Notice Period (In days) (Employee's Choice)</label>
          <input type='number' />
        </div>
        <div className="resignation-rsidebar-form-group">
          <label>Last Working Day (Employee's Choice)</label>
          <input type="date" />
        </div>
        <div className="resignation-rsidebar-form-actions">
          <button type="submit" className="resignation-rsidebar-save-button">Save</button>
          <button type="reset" className="resignation-rsidebar-reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ResignationSidebarForm;
