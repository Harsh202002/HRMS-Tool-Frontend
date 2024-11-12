import React, { useState } from 'react';
import './RequestReason.css';
import RequestSidebar from './RequestSidebarForm/RequestSidebarForm'; // Ensure RequestSidebar is imported
import Pagination from '../../../ESS/Attendance/Pagination/Pagination'; // Import your Pagination component

const RequestReason = () => {
    const [requestReasons] = useState([
      { id: 1, type: 'Leave', reason: 'Medical Emergency', status: 'Active' },
      { id: 2, type: 'Leave', reason: 'Vacation', status: 'Inactive' },
      { id: 3, type: 'Leave', reason: 'Sick Leave', status: 'Active' },
      { id: 4, type: 'Leave', reason: 'Personal', status: 'Active' },
      // Add more dummy data as needed
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const totalEntries = requestReasons.length;

    // Calculate the current items based on pagination
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentItems = requestReasons.slice(startIndex, startIndex + entriesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEntriesChange = (newEntriesPerPage) => {
        setEntriesPerPage(newEntriesPerPage);
        setCurrentPage(1); // Reset to the first page when entries per page change
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const openSidebar = () => {
      setIsSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };
    
    return (
      <div className="request-reason-container">
        <div className="request-reason-header">
          <button className="request-reason-back-button">←</button>
          <h2>Request Reason</h2>
          <button className="request-reason-filter-button" onClick={openSidebar}>
            <i className="fa fa-filter"></i>
          </button>
        </div>

        <div className="request-reason-table-container">
          <table className="request-reason-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Type</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <button className="action-button">View</button>
                    </td>
                    <td>{item.type}</td>
                    <td>{item.reason}</td>
                    <td>
                      <span className={`status-label ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-records">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Component */}
        <Pagination 
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onEntriesChange={handleEntriesChange}
        />

        {isSidebarOpen && <RequestSidebar onClose={closeSidebar} />}
      </div>
    );
};

export default RequestReason;
