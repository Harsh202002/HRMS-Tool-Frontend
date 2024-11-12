import React, { useState } from 'react';
import './PolicySidebarForm.css';

const PolicySidebarForm = ({ onClose }) => { // Pass the onClose prop to handle the closing functionality
  const [formData, setFormData] = useState({
    company: '',
    location: '',
    department: '',
    jobTitle: '',
    name: '',
    status: 'Active',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Form Data Submitted: ', formData);
  };

  const handleReset = () => {
    setFormData({
      company: '',
      location: '',
      department: '',
      jobTitle: '',
      name: '',
      status: 'Active',
      description: '',
      file: null,
    });
  };

  return (
    <div className="policy-form-container">
      <div className="policy-form-header">
        <h2>Add Policy</h2>
        <button className="policy-close-sidebar-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit} className="policy-form">
        <div className="form-group">
          <label>Company</label>
          <select name="company" value={formData.company} onChange={handleChange}>
            <option value="">--Select--</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Location</label>
          <select name="location" value={formData.location} onChange={handleChange}>
            <option value="">--Select--</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Department</label>
          <select name="department" value={formData.department} onChange={handleChange}>
            <option value="">--Select--</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <select name="jobTitle" value={formData.jobTitle} onChange={handleChange}>
            <option value="">--Select--</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="form-group">
          <label>Upload Document</label>
          <input type="file" onChange={handleFileChange} />
          <small>(Please upload .pdf file less than 5 MB only)</small>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button">Save</button>
          <button type="button" className="save-new-button" onClick={handleSubmit}>Save & New</button>
          <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default PolicySidebarForm;
