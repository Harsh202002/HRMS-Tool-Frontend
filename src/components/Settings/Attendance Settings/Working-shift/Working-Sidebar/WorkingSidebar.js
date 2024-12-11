import React, { useState } from "react";
import "./WorkingSidebar.css";

const WorkingSidebar = ({ onClose }) => {
  const initialFormData = {
    company: "",
    location: "",
    shiftName: "",
    shiftCode: "",
    standardHours: "",
    minHoursFullDay: "",
    minHoursHalfDay: "",
    startTime: "",
    endTime: "",
    lunchStartTime: "",
    lunchEndTime: "",
    beforePunchTime: "02:00",
    afterPunchTime: "02:00",
    isSplitShift: false,
    isNightShift: false,
    weekOffDay: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add API call or data submission logic here.
  };

  const handleSaveAndNew = () => {
    console.log("Form Data Saved:", formData);
    setFormData(initialFormData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="working-sidebar">
      <div className="working-sidebar-header">
        <h2>Add Working Shift</h2>
        <button className="close-sidebar-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form className="working-sidebar-form" onSubmit={handleSubmit}>
        {/* Dropdown Fields */}
        {[
          { label: "Company", name: "company", options: ["Netfotech Solutions"] },
          { label: "Location", name: "location", options: ["Pune", "Bangalore"] },
          { label: "Week Off Day", name: "weekOffDay", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
        ].map(({ label, name, options }) => (
          <div className="form-group" key={name}>
            <label>{label}</label>
            <select name={name} value={formData[name]} onChange={handleChange} required>
              <option value="">--Select {label}--</option>
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}

        {/* Text and Time Inputs */}
        {[
          { label: "Shift Name", name: "shiftName", type: "text" },
          { label: "Shift Code", name: "shiftCode", type: "text" },
          { label: "Standard Working Hours", name: "standardHours", type: "text" },
          { label: "Min Hours For Full Day", name: "minHoursFullDay", type: "text" },
          { label: "Min Hours For Half Day", name: "minHoursHalfDay", type: "text" },
          { label: "Shift Start Time", name: "startTime", type: "time" },
          { label: "Shift End Time", name: "endTime", type: "time" },
          { label: "Lunch Break Start Time", name: "lunchStartTime", type: "time" },
          { label: "Lunch Break End Time", name: "lunchEndTime", type: "time" },
        ].map(({ label, name, type }) => (
          <div className="form-group" key={name}>
            <label>{label}</label>
            <input type={type} name={name} value={formData[name]} onChange={handleChange} required />
          </div>
        ))}

        {/* Checkbox Fields */}
        {[
          { label: "Is Split Shift", name: "isSplitShift" },
          { label: "Is Night Shift", name: "isNightShift" },
        ].map(({ label, name }) => (
          <div className="form-group checkbox-group" key={name}>
            <input type="checkbox" name={name} checked={formData[name]} onChange={handleChange} />
            <label>{label}</label>
          </div>
        ))}

        {/* Buttons */}
        <div className="button-group">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" onClick={handleSaveAndNew} className="btn-save-new">Save & New</button>
          <button type="button" onClick={handleReset} className="btn-reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default WorkingSidebar;
