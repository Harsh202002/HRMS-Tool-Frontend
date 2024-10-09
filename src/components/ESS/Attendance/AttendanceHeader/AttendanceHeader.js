import React, { useState } from 'react';
import './AttendanceHeader.css';
import filterIcon from '../../../../Assets/filter-icon.png'; // Adjust the path based on your project structure

const AttendanceHeader = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [keyword, setKeyword] = useState(""); // State for keyword input
  const [fromDate, setFromDate] = useState(""); // State for from date input
  const [toDate, setToDate] = useState(""); // State for to date input
  const [filteredData, setFilteredData] = useState([]); // State for filtered data


  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
};

const handleKeywordChange = (e) => {
  setKeyword(e.target.value);
};

const handleFromDateChange = (e) => {
  setFromDate(e.target.value);
};

const handleToDateChange = (e) => {
  setToDate(e.target.value);
};

// const handleSearch = () => {
//   let filtered = referralData;

//   if (keyword) {
//       filtered = filtered.filter((entry) =>
//           entry.Reason.toLowerCase().includes(keyword.toLowerCase())
//       );
//   }

//   if (fromDate) {
//       filtered = filtered.filter((entry) => new Date(entry.StartDate) >= new Date(fromDate));
//   }

//   if (toDate) {
//       filtered = filtered.filter((entry) => new Date(entry.EndDate) <= new Date(toDate));
//   }

//   setFilteredData(filtered);
//   setCurrentPage(1); // Reset to the first page
// };

const handleReset = () => {
  setKeyword("");
  setFromDate("");
  setToDate("");
  // setFilteredData(referralData); // Reset to original data
  setCurrentPage(1); // Reset to the first page
};


  return (
    <div className="attendance-header-container">
      <div className="attendance-header">
        <div className="header-with-arrow">
          <span className="back-arrow">&lt;</span>
          <h2>My Attendance List</h2>
        </div>
        <div className="attendance-statuses">
          <div className="legend-item hh">
            <span className="status-box">HH</span>
            <span>Company Holiday</span>
          </div>
          <div className="legend-item w">
            <span className="status-box">W</span>
            <span>Week Off</span>
          </div>
          <div className="legend-item p">
            <span className="status-box">P</span>
            <span>Present</span>
          </div>
          <div className="legend-item cm">
            <span className="status-box">CM</span>
            <span>Comp Off</span>
          </div>
          <div className="legend-item a">
            <span className="status-box">A</span>
            <span>Absent</span>
          </div>
          <div className="legend-item l">
            <span className="status-box">L</span>
            <span>Leave</span>
          </div>
          <div className="legend-item hlf">
            <span className="status-box">HLF</span>
            <span>Half Day</span>
          </div>
          <div className="legend-item od">
            <span className="status-box">OD</span>
            <span>On Duty</span>
          </div>
          <div className="legend-item srt">
            <span className="status-box">SRT</span>
            <span>Short Leave</span>
          </div>
          <div className="legend-item mis">
            <span className="status-box">MIS</span>
            <span>Miss Punch</span>
          </div>
          {/* <div className="filter-icon" > */}
          <button className="filter-button" onClick={toggleFilterVisibility}>
                    <i className="fa-solid fa-filter"></i>
        </button>
          {/* </div> */}
        </div>
      </div>
      {isFilterVisible && (
                <div className="wfh-filter-section">
                    <h3>Basic Search</h3>
                    <div className="wfh-filter-fields">
                        <input
                            type="text"
                            placeholder="Keyword"
                            value={keyword}
                            onChange={handleKeywordChange}
                        />
                        <input
                            type="date"
                            placeholder="From Date"
                            value={fromDate}
                            onChange={handleFromDateChange}
                        />
                        <input
                            type="date"
                            placeholder="To Date"
                            value={toDate}
                            onChange={handleToDateChange}
                        />
                    </div>
                    <div className="wfh-filter-actions">
                        <button className="search-button">Search</button>
                        <button className="reset-button" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            )}
    </div>
  );
};

export default AttendanceHeader;