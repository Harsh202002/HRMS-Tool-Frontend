import React from 'react';
import './AllocationWfhSidebar.css';

const AllocationWfhSidebar = ({ onClose }) => {
  return (
    <div className="allocationwfh-r-sidebar-form">
        <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2>Wfh Allocation</h2>
      <button className="allocationwfh-close-sidebar-button" onClick={onClose}>
        &times;
      </button>
      </div>
      <form className='allocationwfh-rsidebar-form'>
        <div className="allocationwfh-rsidebar-form-group">
          <label>Employee Code</label>
          <input type='text'/>
        </div>
        <div className="allocationwfh-rsidebar-form-group" >
          <label>Leave Name</label>
          <select>
            <option>--Select--</option>
            <option>EL</option>
            <option>MR</option>
            <option>SL</option>
            <option>LOP</option>
          </select>
        </div>
        <div className="allocationwfh-rsidebar-form-group">
          <label>From</label>
          <input type='date'/>
        </div>
        <div className="allocationwfh-rsidebar-form-group">
          <label>To</label>
          <input type="date" />
        </div>
        <div className="allocationwfh-rsidebar-form-group">
          <label>Leave Consumption Type</label>
          <select>
            <option>--Select--</option>
            <option>Full day</option>
            <option>Half Day</option>
          </select>
        </div>
        <div className="allocationwfh-rsidebar-form-group">
          <label>Duration</label>
        <input type='text'/>
        </div>
        <div className="allocationwfh-rsidebar-form-group">
          <label>Reason For Leave</label>
          <textarea rows={4}></textarea>
        </div>
        <div className="allocationwfh-rsidebar-form-group">
          <label>Alternate Communication</label>
          <textarea rows={4}></textarea>
        </div>
        <div className="allocationwfh-rsidebar-form-group">
          <label>Upload Document</label>
          <input type="file" />
          <small>(Doc can be uploaded in Gif, Pdf, Jpg, Jpeg, Png, Doc, Docx file.)</small>
        </div>
        <div className="allocationwfh-rsidebar-form-actions">
          <button type="submit" className="allocationwfh-rsidebar-save-button">Save</button>
          <button type="button" className="allocationwfh-rsidebar-save-new-button">Save & New</button>
          <button type="reset" className="allocationwfh-rsidebar-reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default AllocationWfhSidebar;
