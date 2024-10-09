import React, { useState } from 'react';
import './LoanRequestSidebar.css';

const LoanRequestSidebar = ({ onClose, onSubmit }) => {
  const [requestType, setRequestType] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    onSubmit({ requestType, amount, reason });
    onClose(); // Close the sidebar after submission
  };

  return (
    <div className="loan-request-sidebar">
      <div className="loan-request-sidebar-header">
        <h2>My Advance / Loan Request</h2>
        <button className="close-button" onClick={onClose}>
          <i className="fa fa-times"></i>
        </button>
      </div>
      <div className="loan-request-sidebar-content">
        <label>Request Type</label>
        <select value={requestType} onChange={(e) => setRequestType(e.target.value)}>
          <option value="">Select</option>
          <option value="Advance">Advance</option>
          <option value="Loan">Loan</option>
        </select>
        <label>Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Reason</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        ></textarea>
      </div>
      <div className="loan-request-sidebar-footer">
        <button className="loan-save-button" onClick={handleSubmit}>
          Save
        </button>
        <button className="loan-reset-button" onClick={() => { setRequestType(''); setAmount(''); setReason(''); }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default LoanRequestSidebar;
