// LeavePeriodSidebarEdit.js
import React, { useState, useEffect } from 'react';
import './LeavePeriodSidebar.css';

const LeavePeriodSidebarEdit = ({ onClose, onUpdate, period }) => {
  const [form, setForm] = useState(period);

  useEffect(() => {
    setForm(period);
  }, [period]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = () => {
    onUpdate(form);
  };

  return (
    <div className="leave-period-sidebar-edit">
        <div className="leave-period-sidebar-edit-header">
      <h3>
        Edit Leave Policy Period
        <button className="leave-period-edit-close-button" onClick={onClose}>&times;</button>
      </h3>
      </div>
      <form>
        <label>Start Date</label>
        <input type="date" name="startDate" value={form.startDate} onChange={handleChange} />

        <label>End Date</label>
        <input type="date" name="endDate" value={form.endDate} onChange={handleChange} />

        <label>Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />

        <label>Status</label>
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <div className="sidebar-buttons">
          <button type="button" className="update-button" onClick={handleUpdate}>Update</button>
        </div>
      </form>
    </div>
  );
};

export default LeavePeriodSidebarEdit;
