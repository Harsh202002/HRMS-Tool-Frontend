import React, { useState } from 'react';
import './MyInterview.css';
import backButtonImage from '../../../Assets/backButtonImage.jpg';

const MyInterview = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeTab, setActiveTab] = useState('Previous'); // Set default tab

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const renderTableContent = () => {
    switch (activeTab) {
      case 'Previous':
        return (
          <tr>
            <td colSpan="11" style={{ textAlign: 'center' }}>No records Found for Previous</td>
          </tr>
        );
      case 'Today':
        return (
          <tr>
            <td colSpan="11" style={{ textAlign: 'center' }}>No records Found for Today</td>
          </tr>
        );
      case 'Upcoming':
        return (
          <tr>
            <td colSpan="11" style={{ textAlign: 'center' }}>No records Found for Upcoming</td>
          </tr>
        );
      case 'Calendar Set':
        return (
          <tr>
            <td colSpan="11" style={{ textAlign: 'center' }}>No records Found for Calendar Set</td>
          </tr>
        );
      case 'Waitlist':
        return (
          <tr>
            <td colSpan="11" style={{ textAlign: 'center' }}>No records Found for Waitlist</td>
          </tr>
        );
      default:
        return null;
    }
  };

  return (
    <div className="myInterview-container">
  
      <header className="myInterview-header">
      <img src={backButtonImage} alt="Back" className="back-button-image" />
        <h1 className="myInterview-header-title">List of Shortlist Candidate from Screening</h1>
        <img 
          src="path-to-filter-icon" 
          alt="Filter" 
          className="myInterview-filter-icon" 
          onClick={toggleFilter} 
        />
      </header>

      {/* Filter Section */}
      {showFilter && (
        <div className="myInterview-filter-section">
          <div className="myInterview-basic-search">
            <span>Basic Search</span>
            <div className="myInterview-divider"></div>
            <input type="text" placeholder="Key Words" />
              <div className="myInterview-button-group">
            <button className="myInterview-search-button">Search</button>
            <button className="myInterview-reset-button">Reset</button>
          </div>
        </div>
    </div>
      )}

      {/* Tabs Navigation */}
      <div className="myInterview-tabs">
        <button 
          className={activeTab === 'Previous' ? 'active' : ''} 
          onClick={() => setActiveTab('Previous')}
        >
          Previous
        </button>
        <button 
          className={activeTab === 'Today' ? 'active' : ''} 
          onClick={() => setActiveTab('Today')}
        >
          Today
        </button>
        <button 
          className={activeTab === 'Upcoming' ? 'active' : ''} 
          onClick={() => setActiveTab('Upcoming')}
        >
          Upcoming
        </button>
        <button 
          className={activeTab === 'Calendar Set' ? 'active' : ''} 
          onClick={() => setActiveTab('Calendar Set')}
        >
          Calendar Set
        </button>
        <button 
          className={activeTab === 'Waitlist' ? 'active' : ''} 
          onClick={() => setActiveTab('Waitlist')}
        >
          Waitlist
        </button>
      </div>

      {/* Table Section */}
      <div className="myInterview-table-container">
        <table>
          <thead>
            <tr>
              <th>Feedback</th>
              <th>Resume</th>
              <th>Job ID</th>
              <th>Job Title</th>
              <th>Interview Round</th>
              <th>Interview Date</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Email ID</th>
              <th>Status</th>
              <th>Instruction/Remarks</th>
            </tr>
          </thead>
          <tbody>
            {renderTableContent()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInterview;