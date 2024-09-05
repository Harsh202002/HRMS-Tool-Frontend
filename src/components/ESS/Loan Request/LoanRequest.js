import React from 'react';
import './LoanRequest.css'; // Add your CSS file here
import backButtonImage from '../../../Assets/backButtonImage.jpg';

const LoanRequest = () => {
  return (
    <div className="main-container">
      <div className="loan-header">
        <img src={backButtonImage} alt="Back" className="back-button-image" />
        <h1>My Advance / Loan Request</h1>
      </div>

      <div className="loan-request-container">
        <table className="loan-request-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Request Type</th>
              <th>Loan Type</th>
              <th>Amount</th>
              <th>Reason</th>
              <th>Is Manager Approved</th>
              <th>Is HR Approved</th>
              <th>Is Finance Approved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8" className="no-records">No records Found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanRequest;