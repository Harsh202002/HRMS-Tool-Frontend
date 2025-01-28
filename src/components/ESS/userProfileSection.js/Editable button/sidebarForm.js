import React, { useState } from 'react';
import employeeService from '../../../../services/employeeService';
import './SidebarForm.css';

const SidebarForm = ({ onClose }) => {
  const [educationData, setEducationData] = useState({
    Standard: '',
    Course: '',
    boardUniversity: '',
    collegeInstitution: '',
    passingYear: '',
    percentage: '',
    grade: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData({ ...educationData, [name]: value });
  };

  const handleFileChange = (e) => {
    setEducationData({ ...educationData, document: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(educationData).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      await employeeService.addEducation(formData);
      alert("Education details added successfully!");
      onClose();
    } catch (error) {
      alert("Failed to add education details.");
      console.error(error);
    }
  };
  

  return (
    <div className="r-sidebar-form">
      <button className="close-sidebar-button" onClick={onClose}>
        &times;
      </button>
      <h2>Add Academic Detail</h2>
      <form onSubmit={handleSubmit}>
        <div className="rsidebar-form-group">
          <label>Standard/Degree</label>
          <select name="Standard" onChange={handleChange} required>
            <option>--Select--</option>
            <option>Graduation</option>
            <option>Higher Secondary</option>
            <option>Post Graduation</option>
            <option>Secondary</option>
          </select>
        </div>
        <div className="rsidebar-form-group">
          <label>Course</label>
          <select name="Course" onChange={handleChange} required>
            <option>--Select--</option>
            <option>MTECH</option>
            <option>MBA</option>
            <option>MSc</option>
            <option>M.A</option>
            <option>M.Com</option>
            <option>Other</option>
          </select>
        </div>
        <div className="rsidebar-form-group">
          <label>Name of Board/University</label>
          <input type="text" name="boardUniversity" onChange={handleChange} required />
        </div>
        <div className="rsidebar-form-group">
          <label>College/Institute</label>
          <input type="text" name="collegeInstitution" onChange={handleChange} required />
        </div>
        <div className="rsidebar-form-group">
          <label>Year</label>
          <select name="passingYear" onChange={handleChange} required>
            <option>--Select--</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </select>
        </div>
        <div className="rsidebar-form-group">
          <label>Marks(%)</label>
          <input type="text" name="percentage" onChange={handleChange} required />
        </div>
        <div className="rsidebar-form-group">
          <label>Grade</label>
          <select name="grade" onChange={handleChange} required>
            <option>--Select--</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
        </div>
        <div className="rsidebar-form-group">
          <label>Upload Document</label>
          <input type="file" onChange={handleFileChange} />
          <small>(Gif, Pdf, Jpg, Jpeg, Png, Doc, Docx files allowed.)</small>
        </div>
        <div className="rsidebar-form-group">
          <label>Description</label>
          <textarea rows="3" name="description" onChange={handleChange}></textarea>
        </div>
        <div className="rsidebar-form-actions">
          <button type="submit" className="rsidebar-save-button">Save</button>
          <button type="reset" className="rsidebar-reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default SidebarForm;
