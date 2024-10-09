import React, { useState } from 'react';
import './PerformanceReview.css'; 
import Pagination from './Pagination/Pagination'; 

const PerformanceReview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Sample data
  const data = [
    { action: 'View', year: '2023-2024', setupName: 'Annual Review', reviewType: 'Performance', finalDate: '2024-03-31', initiationDate: '2024-01-01' },
    { action: 'View', year: '2022-2023', setupName: 'Mid-Year Review', reviewType: 'Performance', finalDate: '2023-09-30', initiationDate: '2023-07-01' },
    { action: 'View', year: '2021-2022', setupName: 'Quarterly Review', reviewType: 'Performance', finalDate: '2022-12-31', initiationDate: '2022-10-01' },
    { action: 'View', year: '2020-2021', setupName: 'Annual Review', reviewType: 'Performance', finalDate: '2021-03-31', initiationDate: '2021-01-01' },
    { action: 'View', year: '2019-2020', setupName: 'Year-End Review', reviewType: 'Performance', finalDate: '2020-03-31', initiationDate: '2020-01-01' },
    { action: 'View', year: '2019-2020', setupName: 'Year-End Review', reviewType: 'Performance', finalDate: '2020-03-31', initiationDate: '2020-01-01' },
    { action: 'View', year: '2022-2023', setupName: 'Mid-Year Review', reviewType: 'Performance', finalDate: '2023-09-30', initiationDate: '2023-07-01' },
    { action: 'View', year: '2023-2024', setupName: 'Annual Review', reviewType: 'Performance', finalDate: '2024-03-31', initiationDate: '2024-01-01' },
    { action: 'View', year: '2021-2022', setupName: 'Quarterly Review', reviewType: 'Performance', finalDate: '2022-12-31', initiationDate: '2022-10-01' },
    { action: 'View', year: '2020-2021', setupName: 'Annual Review', reviewType: 'Performance', finalDate: '2021-03-31', initiationDate: '2021-01-01' },
   
  ];

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
    <div className="performance-main-container">
      <div className="performnace-header">
        <button className="back-button">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
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
                    <td><button >View</button></td>
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
