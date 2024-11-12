// LeavePeriodSidebarNew.js
import React, { useState } from 'react';
import './LeavePeriodSidebar.css';

const LeavePeriodSidebarNew = ({ onClose, onSave }) => {
  const [form, setForm] = useState({
    startDate: '',
    endDate: '',
    name: '',
    status: 'active'
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    onSave(form);
    setForm({ startDate: '', endDate: '', name: '', status: 'active' });
  };

  return (
    <div className="leave-period-sidebar-new">
        <div className="leave-period-sidebar-new-header">
      <h3>
        Add Leave Policy Period
        <button className="leave-period-new-close-button" onClick={onClose}>&times;</button>
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
          <button type="button" className="save-button" onClick={handleSave}>Save</button>
          <button type="button" className="reset-button" onClick={() => setForm({ startDate: '', endDate: '', name: '', status: 'active' })}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default LeavePeriodSidebarNew;
