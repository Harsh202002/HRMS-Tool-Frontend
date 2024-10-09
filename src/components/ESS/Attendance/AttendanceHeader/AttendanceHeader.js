import React, { useState } from 'react';
import './AttendanceHeader.css';

const AttendanceHeader = ({ onFilterClick, onFilterChange }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    status: '',
  });

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
    if (onFilterClick) {
      onFilterClick(!showFilter);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSearchClick = () => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };

  const handleResetClick = () => {
    setFilters({
      fromDate: '',
      toDate: '',
      status: '',
    });
    if (onFilterChange) {
      onFilterChange({ fromDate: '', toDate: '', status: '' });
    }
  };

  return (
    <div className="attendance-header-container">
      <div className="attendance-header">
        <div className="header-with-arrow">
          <button className="back-button">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
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
          <button className="filter-button" onClick={handleFilterClick}>
            <i className="fa-solid fa-filter"></i>
          </button>
        </div>
      </div>
      {showFilter && (
        <div className="filter-section">
          <div className="filter-field">
            <label htmlFor="from-date">From Date</label>
            <input 
              type="date" 
              id="from-date" 
              name="fromDate" 
              value={filters.fromDate} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="filter-field">
            <label htmlFor="to-date">To Date</label>
            <input 
              type="date" 
              id="to-date" 
              name="toDate" 
              value={filters.toDate} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="filter-field">
            <label htmlFor="status">Status</label>
            <select 
              id="status" 
              name="status" 
              value={filters.status} 
              onChange={handleInputChange}
            >
              <option value="">--Select--</option>
              <option value="HH">Company Holiday</option>
              <option value="W">Week Off</option>
              <option value="P">Present</option>
              <option value="CM">Comp Off</option>
              <option value="A">Absent</option>
              <option value="L">Leave</option>
              <option value="HLF">Half Day</option>
              <option value="OD">On Duty</option>
              <option value="SRT">Short Leave</option>
              <option value="MIS">Miss Punch</option>
            </select>
          </div>
          <button className="attendance-search-button" onClick={handleSearchClick}>Search</button>
          <button className="attendance-reset-button" onClick={handleResetClick}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default AttendanceHeader;
