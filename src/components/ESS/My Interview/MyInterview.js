import React, { useState } from 'react';
import './MyInterview.css';

const MyInterview = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeTab, setActiveTab] = useState('Previous'); // Default to 'Previous' tab
  const [searchKeyword, setSearchKeyword] = useState(''); // For filtering data by keyword

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  // Sample data for Previous, Today, and Upcoming
  const interviewData = [
    { feedback: 'Positive', resume: 'resume.pdf', jobId: '1234', jobTitle: 'Software Engineer', round: 'Technical', date: '2024-09-28', name: 'John Doe', mobile: '1234567890', email: 'john@example.com', status: 'Scheduled', remarks: 'N/A' },
    { feedback: 'Negative', resume: 'resume2.pdf', jobId: '1235', jobTitle: 'UI/UX Designer', round: 'HR', date: '2024-09-28', name: 'Jane Doe', mobile: '0987654321', email: 'jane@example.com', status: 'Completed', remarks: 'N/A' },
    { feedback: 'Positive', resume: 'resume.pdf', jobId: '1234', jobTitle: 'Software Engineer', round: 'Technical', date: '2024-09-28', name: 'sid', mobile: '1234567890', email: 'john@example.com', status: 'Scheduled', remarks: 'N/A' },
    { feedback: 'Negative', resume: 'resume2.pdf', jobId: '1235', jobTitle: 'UI/UX Designer', round: 'HR', date: '2024-09-28', name: 'mihir', mobile: '0987654321', email: 'jane@example.com', status: 'Completed', remarks: 'N/A' },
    { feedback: 'Positive', resume: 'resume.pdf', jobId: '1234', jobTitle: 'Software Engineer', round: 'Technical', date: '2024-09-28', name: 'harsh', mobile: '1234567890', email: 'john@example.com', status: 'Scheduled', remarks: 'N/A' },
    { feedback: 'Negative', resume: 'resume2.pdf', jobId: '1235', jobTitle: 'UI/UX Designer', round: 'HR', date: '2024-09-28', name: 'Jolyy', mobile: '0987654321', email: 'jane@example.com', status: 'Completed', remarks: 'N/A' },
    { feedback: 'Positive', resume: 'resume.pdf', jobId: '1234', jobTitle: 'Software Engineer', round: 'Technical', date: '2024-09-28', name: 'vishal', mobile: '1234567890', email: 'john@example.com', status: 'Scheduled', remarks: 'N/A' },
    { feedback: 'Negative', resume: 'resume2.pdf', jobId: '1235', jobTitle: 'UI/UX Designer', round: 'HR', date: '2024-09-28', name: 'bevan', mobile: '0987654321', email: 'jane@example.com', status: 'Completed', remarks: 'N/A' },
  ];

  // Sample data for Calendar Set and Waitlist
  const calendarData = [
    { calendar: '2024-09-30', jobTitle: 'Project Manager', jobDesc: 'Manage project timelines', clientName: 'ABC Corp', round: 'Final', slotsAllocated: 5, slotsAvailable: 2, slotsUtilised: 3, startDate: '2024-09-15', endDate: '2024-09-30' },
    { calendar: '2024-10-01', jobTitle: 'Backend Developer', jobDesc: 'Develop APIs', clientName: 'XYZ Inc', round: 'Technical', slotsAllocated: 8, slotsAvailable: 4, slotsUtilised: 4, startDate: '2024-09-20', endDate: '2024-10-05' },
  ];

  const handleSearch = () => {
    // Logic to filter data based on searchKeyword for each tab
    if (activeTab === 'Previous' || activeTab === 'Today' || activeTab === 'Upcoming') {
      return interviewData.filter(item =>
        Object.values(item).some(value => value.toLowerCase().includes(searchKeyword.toLowerCase()))
      );
    } else {
      return calendarData.filter(item =>
        Object.values(item).some(value => value.toLowerCase().includes(searchKeyword.toLowerCase()))
      );
    }
  };

  const filteredData = handleSearch();

  const renderTableContent = () => {
    if (activeTab === 'Previous' || activeTab === 'Today' || activeTab === 'Upcoming') {
      return filteredData.length > 0 ? (
        filteredData.map((row, index) => (
          <tr key={index}>
            <td>{row.feedback}</td>
            <td><a href={`#/${row.resume}`} download>{row.resume}</a></td>
            <td>{row.jobId}</td>
            <td>{row.jobTitle}</td>
            <td>{row.round}</td>
            <td>{row.date}</td>
            <td>{row.name}</td>
            <td>{row.mobile}</td>
            <td>{row.email}</td>
            <td>{row.status}</td>
            <td>{row.remarks}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="11" style={{ textAlign: 'center' }}>No records found for {activeTab}</td>
        </tr>
      );
    } else {
      return filteredData.length > 0 ? (
        filteredData.map((row, index) => (
          <tr key={index}>
            <td>{row.calendar}</td>
            <td>{row.jobTitle}</td>
            <td>{row.jobDesc}</td>
            <td>{row.clientName}</td>
            <td>{row.round}</td>
            <td>{row.slotsAllocated}</td>
            <td>{row.slotsAvailable}</td>
            <td>{row.slotsUtilised}</td>
            <td>{row.startDate}</td>
            <td>{row.endDate}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="10" style={{ textAlign: 'center' }}>No records found for {activeTab}</td>
        </tr>
      );
    }
  };

  const renderTableHeaders = () => {
    if (activeTab === 'Previous' || activeTab === 'Today' || activeTab === 'Upcoming') {
      return (
        <>
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
        </>
      );
    } else {
      return (
        <>
          <th>Calendar</th>
          <th>Job Title</th>
          <th>Job Description</th>
          <th>Client Name</th>
          <th>Interview Round</th>
          <th>Slots Allocated</th>
          <th>Slots Available</th>
          <th>Slots Utilised</th>
          <th>Start Date</th>
          <th>End Date</th>
        </>
      );
    }
  };

  return (
    <div className="myInterview-main-container">
      <div className="myInterview-container">
        <header className="myInterview-header">
          <button className="back-button">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <h1 className="myInterview-header-title">
            {activeTab === 'Calendar Set' ? 'Calendar Booking' :
              activeTab === 'Waitlist' ? 'My Interview' :
              'List of Shortlist Candidate from Screening'}
          </h1>
          <button className="filter-button" onClick={toggleFilter}>
            <i className="fa-solid fa-filter"></i>
          </button>
        </header>

        {/* Filter Section */}
        {showFilter && (
          <div className="myInterview-filter-section">
            <div className="myInterview-basic-search">
              <span>Basic Search</span>
              <div className="myInterview-divider"></div>
              <input
                type="text"
                placeholder="Key Words"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <div className="myInterview-button-group">
                <button className="myInterview-search-button" onClick={handleSearch}>Search</button>
                <button className="myInterview-reset-button" onClick={() => setSearchKeyword('')}>Reset</button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs Navigation */}
        <div className="myInterview-tabs">
          {['Previous', 'Today', 'Upcoming', 'Calendar Set', 'Waitlist'].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table Section */}
        <div className="myInterview-table-container">
          <table>
            <thead>
              <tr>{renderTableHeaders()}</tr>
            </thead>
            <tbody>{renderTableContent()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyInterview;
