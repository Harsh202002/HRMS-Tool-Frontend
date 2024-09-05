import React, { useState } from 'react';
import './PerformanceReview.css'; 
import Pagination from './Pagination/Pagination'; 
import backButtonImage from '../../../Assets/backButtonImage.jpg';

const PerformanceReview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  
  // Assuming no data for now
  const data = [];

  const totalEntries = data.length;

  // Calculate the displayed data based on pagination
  const displayedData = data.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesChange = (entries) => {
    setEntriesPerPage(entries);
    setCurrentPage(1); // Reset to first page when entries per page change
  };

  return (
    <div className="main-container">
      <div className="performnace-header">
        <img src={backButtonImage} alt="Back" className="back-button-image" />
        <h1>Performance Review</h1>
      </div>
      <div className="performance-review-container">
        <div className="review-table-container">
          <table className="review-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Assessment Year</th>
                <th>Review Setup Name</th>
                <th>Review Type</th>
                <th>Final Review Date</th>
                <th>Review Initiation Date</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.length > 0 ? (
                displayedData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.action}</td>
                    <td>{row.year}</td>
                    <td>{row.setupName}</td>
                    <td>{row.reviewType}</td>
                    <td>{row.finalDate}</td>
                    <td>{row.initiationDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-records">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onEntriesChange={handleEntriesChange}
        />
      </div>
    </div>
  );
};

export default PerformanceReview;