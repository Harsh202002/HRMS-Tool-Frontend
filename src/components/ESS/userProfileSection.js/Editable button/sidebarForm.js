import React from 'react';
import './SidebarForm.css';

const SidebarForm = ({ onClose }) => {
  return (
    <div className="r-sidebar-form">
      <button className="close-sidebar-button" onClick={onClose}>
        &times;
      </button>
      <h2>Add Academic Detail</h2>
      <form>
        <div className="rsidebar-form-group">
          <label>Standard/Degree</label>
          <select>
          <option>--Select--</option>
            <option>Graduation</option>
            <option>Higher Secondary</option>
            <option>Post Graduation</option>
            <option>Secondary</option>
          </select>
        </div>
        <div className="rsidebar-form-group">
          <label>Course</label>
          <select>
            <option>--Select--</option>
            <option>MTECH</option>
            <option>MBA</option>
            <option>MSc</option>
            <option>M.A</option>
            <option>M.Com</option>
            <option>Other</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="rsidebar-form-group">
          <label>Name of Board/University</label>
          <select>
            <option>--Select--</option>
            <option>WBUT</option>
            <option>Burdwan University</option>
            <option>MAKAUT</option>
            <option>CBSE</option>
            <option>Amity University</option>
            <option>ICSE</option>
            <option>ADAMAS</option>
            <option>NWSE</option>
          </select>
          <button className="rsidebar-add-button">+</button>
        </div>
        <div className="rsidebar-form-group">
          <label>College/Institute</label>
          <input type="text" />
        </div>
        <div className="rsidebar-form-group">
          <label>Specialization</label>
          <input type="text" />
        </div>
        <div className="rsidebar-form-group">
          <label>Year</label>
          <select>
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
          <input type="text" />
        </div>
        <div className="rsidebar-form-group">
          <label>Grade</label>
          <select>
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
          <input type="file" />
          <small>(Doc can be uploaded in Gif, Pdf, Jpg, Jpeg, Png, Doc, Docx file.)</small>
        </div>
        <div className="rsidebar-form-group">
          <label>Description</label>
          <textarea rows="3"></textarea>
        </div>
        <div className="rsidebar-form-group">
          <label>Documents</label>
          {/* Additional documents section */}
        </div>
        <div className="rsidebar-form-actions">
          <button type="submit" className="rsidebar-save-button">Save</button>
          <button type="button" className="rsidebar-save-new-button">Save & New</button>
          <button type="reset" className="rsidebar-reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default SidebarForm;
