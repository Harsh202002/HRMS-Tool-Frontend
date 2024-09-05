import React from 'react';
import './leaveSidebarForm.css';

const Leavesidebarform = ({ onClose }) => {
  return (
    <div className="leave-r-sidebar-form">
        <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2>Apply Leave</h2>
      <button className="leave-close-sidebar-button" onClick={onClose}>
        &times;
      </button>
      </div>
      <div className='leaveform-list-table-container'>
        <table className='leaveform-list-table'>
            <thead>
                <tr>
                    <th>Leave Type</th>
                    <th>Entitled</th>
                    <th>Availed</th>
                    <th>Applied</th>
                    <th>Leave Adjust</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>EL</td>
                    <td>1.0 D</td>
                    <td>0.0 D</td>
                    <td>0.0 D</td>
                    <td>0.0 D</td>
                    <td>1.0 D</td>
                </tr>  
                <tr>
                    <td>MR</td>
                    <td>1.0 D</td>
                    <td>0.0 D</td>
                    <td>0.0 D</td>
                    <td>0.0 D</td>
                    <td>1.0 D</td>
                </tr> 
                <tr>
                    <td>SL</td>
                    <td>1.0 D</td>
                    <td>0.0 D</td>
                    <td>0.0 D</td>
                    <td>0.0 D</td>
                    <td>1.0 D</td>
                </tr>
                <tr>
                    <td>LOP</td>
                    <td>1.0 D</td>
                    <td>0.0 D</td>
                    <td>0.0 D</td>
                    <td>0.0 D</td>
                    <td>1.0 D</td>
                </tr>
            </tbody>
        </table>
      </div>
      <form className='leave-rsidebar-form'>
        <div className="leave-rsidebar-form-group">
          <label>Employee Code</label>
          <input type='text'/>
        </div>
        <div className="leave-rsidebar-form-group" >
          <label>Leave Name</label>
          <select>
            <option>--Select--</option>
            <option>EL</option>
            <option>MR</option>
            <option>SL</option>
            <option>LOP</option>
          </select>
        </div>
        <div className="leave-rsidebar-form-group">
          <label>From</label>
          <input type='date'/>
        </div>
        <div className="leave-rsidebar-form-group">
          <label>To</label>
          <input type="date" />
        </div>
        <div className="leave-rsidebar-form-group">
          <label>Leave Consumption Type</label>
          <select>
            <option>--Select--</option>
            <option>Full day</option>
            <option>Half Day</option>
          </select>
        </div>
        <div className="leave-rsidebar-form-group">
          <label>Duration</label>
        <input type='text'/>
        </div>
        <div className="leave-rsidebar-form-group">
          <label>Reason For Leave</label>
          <textarea rows={4}></textarea>
        </div>
        <div className="leave-rsidebar-form-group">
          <label>Alternate Communication</label>
          <textarea rows={4}></textarea>
        </div>
        <div className="leave-rsidebar-form-group">
          <label>Upload Document</label>
          <input type="file" />
          <small>(Doc can be uploaded in Gif, Pdf, Jpg, Jpeg, Png, Doc, Docx file.)</small>
        </div>
        <div className="leave-rsidebar-form-actions">
          <button type="submit" className="leave-rsidebar-save-button">Save</button>
          <button type="button" className="leave-rsidebar-save-new-button">Save & New</button>
          <button type="reset" className="leave-rsidebar-reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Leavesidebarform;
