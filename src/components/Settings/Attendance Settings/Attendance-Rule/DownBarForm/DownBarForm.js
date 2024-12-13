import React, { useState } from "react";
import "./DownBarForm.css";

const DownBarForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    attendanceRuleName: "",
    status: "Active",
    attendanceCycle: "1",
    flexibleWorkingHours: false,
    company: "",
    location: "",
    attendanceLock: "",
    spentTimeCalculation: "",
    permissibleGraceTime: "",
    noOfInstancesRelaxation: "",
    relaxationOption: "",
    relaxationDeduction: false,
    deductionOption: "",
    hoursForFullDay: "",
    processShortLeave: false,
    graceTimeShortLeave: "",
    noOfInstancesShortLeave: "",
    markWeekOffHolidayAbsent: false,
    absentOnPreviousDay: false,
    absentOnNextDay: false,
    editDaysLimit: "",
    editInstancesLimit: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form Submitted!");
    onClose(); // Close the form after submission
  };

  // Handle Reset
  const handleReset = () => {
    setFormData({
      attendanceRuleName: "",
      status: "Active",
      attendanceCycle: "1",
      flexibleWorkingHours: false,
      company: "",
      location: "",
      attendanceLock: "",
      spentTimeCalculation: "",
      permissibleGraceTime: "",
      noOfInstancesRelaxation: "",
      relaxationOption: "",
      relaxationDeduction: false,
      deductionOption: "",
      hoursForFullDay: "",
      processShortLeave: false,
      graceTimeShortLeave: "",
      noOfInstancesShortLeave: "",
      markWeekOffHolidayAbsent: false,
      absentOnPreviousDay: false,
      absentOnNextDay: false,
      editDaysLimit: "",
      editInstancesLimit: "",
    });
  };

  return (
    <div className="downbar-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h3>Attendance Rule Setup</h3>
          <button type="button" className="close-button" onClick={onClose}>
            ✖
          </button>
        </div>
        {/* Form Fields */}
        <div className="form-group">
          <label>Attendance Rule Name:</label>
          <input
            type="text"
            name="attendanceRuleName"
            value={formData.attendanceRuleName}
            onChange={handleInputChange}
            placeholder="Enter Rule Name"
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleInputChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="form-group">
          <label>Attendance Cycle:</label>
          <select name="attendanceCycle" value={formData.attendanceCycle} onChange={handleInputChange}>
            <option value="1">1</option>
            <option value="End of Month">End of Month</option>
          </select>
        </div>
        <div className="form-group">
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Enter Company"
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter Location"
          />
        </div>
        <div className="form-group">
          <label>Attendance Lock:</label>
          <input
            type="text"
            name="attendanceLock"
            value={formData.attendanceLock}
            onChange={handleInputChange}
            placeholder="Days After Attendance Cycle"
          />
        </div>
        <div className="form-group">
          <label>Spent Time Calculation:</label>
          <input
            type="text"
            name="spentTimeCalculation"
            value={formData.spentTimeCalculation}
            onChange={handleInputChange}
            placeholder="e.g., Punch In Time"
          />
        </div>
        <div className="section-header">Relaxation Rule</div>
        <div className="form-group">
          <label>Permissible Grace Time:</label>
          <input
            type="text"
            name="permissibleGraceTime"
            value={formData.permissibleGraceTime}
            onChange={handleInputChange}
            placeholder="e.g., 00:30"
          />
        </div>
        <div className="form-group">
          <label>Number of Instances:</label>
          <input
            type="text"
            name="noOfInstancesRelaxation"
            value={formData.noOfInstancesRelaxation}
            onChange={handleInputChange}
            placeholder="Enter Number of Instances"
          />
        </div>
        <div className="form-group">
          <label>Relaxation Option:</label>
          <input
            type="text"
            name="relaxationOption"
            value={formData.relaxationOption}
            onChange={handleInputChange}
            placeholder="e.g., Late Coming"
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="relaxationDeduction"
              checked={formData.relaxationDeduction}
              onChange={handleInputChange}
            />
            Relaxation Deduction
          </label>
        </div>
        <div className="form-group">
          <label>Deduction Option:</label>
          <input
            type="text"
            name="deductionOption"
            value={formData.deductionOption}
            onChange={handleInputChange}
            placeholder="Enter Deduction Option"
          />
        </div>
        <div className="form-group">
          <label>Hours for Full Day:</label>
          <input
            type="text"
            name="hoursForFullDay"
            value={formData.hoursForFullDay}
            onChange={handleInputChange}
            placeholder="e.g., 08:00"
          />
        </div>
        <div className="section-header">Short Leave</div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="processShortLeave"
              checked={formData.processShortLeave}
              onChange={handleInputChange}
            />
            Process Short Leave
          </label>
        </div>
        <div className="form-group">
          <label>Grace Time:</label>
          <input
            type="text"
            name="graceTimeShortLeave"
            value={formData.graceTimeShortLeave}
            onChange={handleInputChange}
            placeholder="e.g., 00:15"
          />
        </div>
        <div className="form-group">
          <label>Number of Instances:</label>
          <input
            type="text"
            name="noOfInstancesShortLeave"
            value={formData.noOfInstancesShortLeave}
            onChange={handleInputChange}
            placeholder="Enter Number of Instances"
          />
        </div>
        <div className="form-group">
          <label>Week & Holiday Rule:</label>
          <input
            type="text"
            name="weekHolidayRule"
            value={formData.weekHolidayRule}
            onChange={handleInputChange}
            placeholder="Enter Rules"
          />
        </div>

        <div className="section-header">Edit Attendance Rule</div>
        <div className="form-section">
          <div className="form-group">
            <label>Edit Rule Option:</label>
            <input
              type="text"
              name="editRuleOption"
              value={formData.editRuleOption}
              onChange={handleInputChange}
              placeholder="Enter Rule Option"
            />
          </div>
          <div className="form-group">
            <label>Edit Rule Description:</label>
            <textarea
              name="editRuleDescription"
              value={formData.editRuleDescription}
              onChange={handleInputChange}
              placeholder="Enter Rule Description"
            />
          </div>
          <div className="form-group">
            <label>Number of Edit Days:</label>
            <input
              type="text"
              name="editDaysLimit"
              value={formData.editDaysLimit}
              onChange={handleInputChange}
              placeholder="Enter Limit (in Days)"
            />
          </div>
          <div className="form-group">
            <label>Number of Edit Instances:</label>
            <input
              type="text"
              name="editInstancesLimit"
              value={formData.editInstancesLimit}
              onChange={handleInputChange}
              placeholder="Enter Limit (in Instances)"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default DownBarForm;
