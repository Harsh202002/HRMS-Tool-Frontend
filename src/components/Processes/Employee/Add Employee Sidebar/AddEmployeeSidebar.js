import React from 'react';
import './AddEmployeeSidebar.css';

const AddEmployeeSidebar = ({ onClose }) => {
  return (
    <div className="addemployee-r-sidebar-form">
        <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2>Add Employee</h2>
      <button className="addemployee-close-sidebar-button" onClick={onClose}>
        &times;
      </button>
      </div>
      <form className='addemployee-rsidebar-form'>
      <div className="addemployee-rsidebar-form-group">
          <label>Upload Document</label>
          <input type="file" />
          <small>(Doc can be uploaded in Gif, Pdf, Jpg, Jpeg, Png, Doc, Docx file.)</small>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Employee Code</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group" >
          <label>Employee Code</label>
          <select>
            <option>--Select--</option>
            <option>EL</option>
            <option>MR</option>
            <option>SL</option>
            <option>LOP</option>
          </select>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Salutation</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Middle Name</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Last Name</label>
        <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Company</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Location</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Department</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Job Tittle</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Date Of Birth</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Office Mail</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Date Of Joining</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Mobile Number</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Role</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Gender</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Martial Status</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Identification Type</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Id Code No.</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Type Of Employment</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-group">
          <label>Reporting Manager</label>
          <input type='text'/>
        </div>
        <div className="addemployee-rsidebar-form-actions">
          <button type="submit" className="addemployee-rsidebar-save-button">Save</button>
          <button type="button" className="addemployee-rsidebar-save-new-button">Save & New</button>
          <button type="reset" className="addemployee-rsidebar-reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeSidebar;
