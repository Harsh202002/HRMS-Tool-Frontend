import React, { useState } from 'react';
import './AddEmployeeSidebar.css';
import employeeService from '../../../../services/employeeService';

const AddEmployeeSidebar = ({ onClose, onEmployeeAdded }) => {
  const [formData, setFormData] = useState({
    employeeCode: '',
    salutation: '',
    firstName: '',
    middleName: '',
    lastName: '',
    company: '',
    location: '',
    department: '',
    jobTitle: '',
    dateOfBirth: '',
    officialEmail: '',
    dateOfJoining: '',
    mobileNumber: '',
    role: '',
    gender: '',
    maritalStatus: '',
    identificationType: '',
    uniqueIdentificationNumber: '',
    typeOfEmployement: '',
    reportingManager: '',
  });

  const [documentFile, setDocumentFile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const requiredFields = [
    'employeeCode',
    'firstName',
    'lastName',
    'company',
    'location',
    'department',
    'jobTitle',
    'officialEmail',
    'gender',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setDocumentFile(e.target.files[0]);
  };

  const resetForm = () => {
    setFormData({
      employeeCode: '',
      salutation: '',
      firstName: '',
      middleName: '',
      lastName: '',
      company: '',
      location: '',
      department: '',
      jobTitle: '',
      dateOfBirth: '',
      officialEmail: '',
      dateOfJoining: '',
      mobileNumber: '',
      role: '',
      gender: '',
      maritalStatus: '',
      identificationType: '',
      uniqueIdentificationNumber: '',
      typeOfEmployement: '',
      reportingManager: '',
    });
    setDocumentFile(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
    
      for (const field of requiredFields) {
        if (!formData[field]) {
          setError(`Field "${field}" is required.`);
          setLoading(false);
          return;
        }
      }

      // Get the current date and time (ISO format)
      const currentDate = new Date().toISOString();

      
      const formattedData = {
        ...formData,
        dateOfBirth: formData.dateOfBirth
          ? new Date(formData.dateOfBirth).toISOString()
          : currentDate,
        dateOfJoining: formData.dateOfJoining
          ? new Date(formData.dateOfJoining).toISOString()
          : currentDate, 
      };

     
      const formDataToSend = new FormData();
      Object.entries(formattedData).forEach(([key, value]) => {
        if (value) formDataToSend.append(key, value);
      });
      if (documentFile) {
        formDataToSend.append('document', documentFile);
      }

   
      const response = await employeeService.createEmployee(formDataToSend);
      console.log('Employee created successfully:', response);

      // Notify parent component
      if (onEmployeeAdded) {
        onEmployeeAdded(response);
      }

      resetForm();
      setLoading(false);
    } catch (error) {
      console.error('Error adding employee:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Failed to add employee. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="addemployee-r-sidebar-form">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Add Employee</h2>
        <button className="addemployee-close-sidebar-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form className="addemployee-rsidebar-form" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}

        <div className="addemployee-rsidebar-form-group">
          <label>Upload Document</label>
          <input type="file" onChange={handleFileChange} />
          <small>(Allowed formats: Gif, Pdf, Jpg, Jpeg, Png, Doc, Docx)</small>
        </div>

        {[ 
          { label: 'Employee Code', name: 'employeeCode' },
          { label: 'Salutation', name: 'salutation' },
          { label: 'First Name', name: 'firstName' },
          { label: 'Middle Name', name: 'middleName' },
          { label: 'Last Name', name: 'lastName' },
          { label: 'Company', name: 'company' },
          { label: 'Location', name: 'location' },
          { label: 'Department', name: 'department' },
          { label: 'Job Title', name: 'jobTitle' },
          { label: 'Date of Birth', name: 'dateOfBirth', type: 'date' },
          { label: 'Office Mail', name: 'officialEmail', type: 'email' },
          { label: 'Date of Joining', name: 'dateOfJoining', type: 'date' },
          { label: 'Mobile Number', name: 'mobileNumber', type: 'tel' },
          { label: 'Role', name: 'role' },
          { label: 'Gender', name: 'gender' },
          { label: 'Marital Status', name: 'maritalStatus' },
          { label: 'Identification Type', name: 'identificationType' },
          { label: 'Unique ID Code', name: 'uniqueIdentificationNumber' },
          { label: 'Type of Employment', name: 'typeOfEmployement' },
          { label: 'Reporting Manager', name: 'reportingManager' },
        ].map(({ label, name, type = 'text' }) => (
          <div className="addemployee-rsidebar-form-group" key={name}>
            <label>{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              required={requiredFields.includes(name)}
            />
          </div>
        ))}

        <div className="addemployee-rsidebar-form-actions">
          <button type="submit" className="addemployee-rsidebar-save-button" disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </button>
          <button
            type="button"
            className="addemployee-rsidebar-save-new-button"
            onClick={() => {
              handleSubmit();
              resetForm();
            }}
            disabled={loading}
          >
            Save & New
          </button>
          <button
            type="reset"
            className="addemployee-rsidebar-reset-button"
            onClick={resetForm}
            disabled={loading}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeSidebar;
