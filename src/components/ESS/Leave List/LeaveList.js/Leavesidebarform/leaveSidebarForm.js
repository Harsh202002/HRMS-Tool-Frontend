import React , { useState }  from 'react';
import './leaveSidebarForm.css';
import leaveService from '../../../../../services/leaveService';

const Leavesidebarform = ({ onClose }) => {
    const [leaveName, setLeaveName] = useState('');
    const [leaveFrom, setLeaveFrom] = useState('');
    const [leaveTo, setLeaveTo] = useState('');
    const [leaveType, setLeaveType] = useState('');
    const [duration, setDuration] = useState('');
    const [reason, setReason] = useState('');
    const [altComm, setAltComm] = useState('');
    const [document, setDocument] = useState(null);
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Create a leaveData object
      const leaveData = {
        leaveName,
        leaveType,
        leaveFrom,
        leaveTo,
        duration,
        reason,
        altComm,
        ...(document && { document })
      };
  
      try {
        const result = await leaveService.applyLeave(leaveData);
        console.log("Leave applied successfully:", result);
        onClose(); // Close the sidebar on success
      } catch (error) {
        console.error("Error applying leave:", error);
      }
    };
  

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
      <form className="leave-rsidebar-form" onSubmit={handleSubmit}>
       
        {/* Leave Name */}
        <div className="leave-rsidebar-form-group">
          <label>Leave Name</label>
          <select value={leaveName} onChange={(e) => setLeaveName(e.target.value)}>
            <option>--Select--</option>
            <option>EL</option>
            <option>MR</option>
            <option>SL</option>
            <option>LOP</option>
          </select>
        </div>
        {/* From */}
        <div className="leave-rsidebar-form-group">
          <label>From</label>
          <input
            type="date"
            value={leaveFrom}
            onChange={(e) => setLeaveFrom(e.target.value)}
          />
        </div>
        {/* To */}
        <div className="leave-rsidebar-form-group">
          <label>To</label>
          <input
            type="date"
            value={leaveTo}
            onChange={(e) => setLeaveTo(e.target.value)}
          />
        </div>
        {/* Leave Consumption Type */}
        <div className="leave-rsidebar-form-group">
          <label>Leave Consumption Type</label>
          <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
            <option>--Select--</option>
            <option>Full day</option>
            <option>Half Day</option>
          </select>
        </div>
        {/* Duration */}
        <div className="leave-rsidebar-form-group">
          <label>Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        {/* Reason */}
        <div className="leave-rsidebar-form-group">
          <label>Reason For Leave</label>
          <textarea
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>
        {/* Alternate Communication */}
        <div className="leave-rsidebar-form-group">
          <label>Alternate Communication</label>
          <textarea
            rows={4}
            value={altComm}
            onChange={(e) => setAltComm(e.target.value)}
          ></textarea>
        </div>
        {/* Upload Document */}
        <div className="leave-rsidebar-form-group">
          <label>Upload Document</label>
          <input
            type="file"
            onChange={(e) => setDocument(e.target.files[0])}
          />
          <small>(Doc can be uploaded in Gif, Pdf, Jpg, Jpeg, Png, Doc, Docx file.)</small>
        </div>
        {/* Action buttons */}
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
