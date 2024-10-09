import React, { useState } from 'react';
import LoanRequestSidebar from './LoanRequestSidebar/LoanRequestSidebar'; // Import the sidebar component
import './LoanRequest.css';

const LoanRequest = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loanRequests, setLoanRequests] = useState([
    {
      action: 'View',
      requestType: 'Advance',
      loanType: 'Personal Loan',
      amount: '$3,000',
      reason: 'Medical Emergency',
      isManagerApproved: 'Yes',
      isHRApproved: 'Pending',
      isFinanceApproved: 'Pending',
    },
    // ... other requests
  ]);

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleSidebarSubmit = (newRequest) => {
    setLoanRequests([...loanRequests, newRequest]);
  };

  return (
    <div className="loan-request-main-container">
      <div className="loan-header">
        <button className="back-button">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <h1>My Advance / Loan Request</h1>
        <button className="loan-add-button" onClick={() => setIsSidebarOpen(true)}>
          <i className="fa fa-plus"></i>
        </button>
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
            {loanRequests.length > 0 ? (
              loanRequests.map((request, index) => (
                <tr key={index}>
                  <td><button>View</button></td>
                  <td>{request.requestType}</td>
                  <td>{request.loanType}</td>
                  <td>{request.amount}</td>
                  <td>{request.reason}</td>
                  <td>{request.isManagerApproved}</td>
                  <td>{request.isHRApproved}</td>
                  <td>{request.isFinanceApproved}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-records">No records Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isSidebarOpen && (
        <LoanRequestSidebar
          onClose={handleSidebarClose}
          onSubmit={handleSidebarSubmit}
        />
      )}
    </div>
  );
};

export default LoanRequest;
