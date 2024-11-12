import React, { useState } from 'react';
import './Policy.css'; // Use a separate CSS file for Policy
import PolicySidebarForm from './PolicySidebarForm/PolicySidebarForm';
import Pagination from '../../ESS/Attendance/Pagination/Pagination';

const Policy = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5); // You can adjust this as needed

  // Dummy data for the Policy Table
  const policyData = [
    {
      id: 1,
      action: 'View',
      company: 'Netfotech Solutions',
      documentName: 'Leave Policy 2024',
      approvalStatus: 'Declined',
      status: 'In-Active',
      download: 'Download'
    },
    {
      id: 2,
      action: 'View',
      company: 'Tech Corp',
      documentName: 'Work Policy 2024',
      approvalStatus: 'Approved',
      status: 'Active',
      download: 'Download'
    },
    {
      id: 3,
      action: 'View',
      company: 'Innovate Solutions',
      documentName: 'Security Policy 2024',
      approvalStatus: 'Pending',
      status: 'In-Active',
      download: 'Download'
    },
    // Add more dummy data if needed
  ];

  const totalEntries = policyData.length;

  // Get the current data to display in the table
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = policyData.slice(indexOfFirstEntry, indexOfLastEntry);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleEntriesChange = (newEntriesPerPage) => {
    setEntriesPerPage(newEntriesPerPage);
    setCurrentPage(1); // Reset to the first page when entries per page changes
  };

  return (
    <div className="policy-main-container">
      <div className="policy-header">
        <button className="back-button">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <h1>Policies</h1>
        <button className="policy-add-button" onClick={handleOpenSidebar}>
          <i className="fa fa-plus"></i>
        </button>
      </div>

      <div className="policy-table-container">
        <table className="policy-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Company</th>
              <th>Document Name</th>
              <th>Approval Status</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.length > 0 ? (
              currentEntries.map((item) => (
                <tr key={item.id}>
                  <td><button>{item.action}</button></td>
                  <td>{item.company}</td>
                  <td>{item.documentName}</td>
                  <td>{item.approvalStatus}</td>
                  <td>
                    <span className={`status-label ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                  <td><button>{item.download}</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="policy-no-records">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination component */}
      <Pagination
        totalEntries={totalEntries}
        entriesPerPage={entriesPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onEntriesChange={handleEntriesChange}
      />

      {isSidebarOpen && (
        <PolicySidebarForm onClose={handleCloseSidebar} />
      )}
    </div>
  );
};

export default Policy;
