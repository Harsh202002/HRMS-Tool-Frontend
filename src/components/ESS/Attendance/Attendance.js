import React, { useState } from 'react';
import AttendanceHeader from './AttendanceHeader/AttendanceHeader';
import AttendanceTable from './AttendanceTable/AttendanceTable';
// import Footer from './Footer/Footer';
import './Attendance.css';
 
const Attendance = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [filters, setFilters] = useState({ fromDate: '', toDate: '', status: '' });
 
  const handlePageChange = (page) => setCurrentPage(page);
  const handleEntriesChange = (entries) => setEntriesPerPage(parseInt(entries));
 
  return (
    <div className='attendance-main-container'>
    <div className="attendance-container">
       <AttendanceHeader onFilterChange={setFilters} />
      <AttendanceTable filters={filters}
        currentPage={currentPage}
        entriesPerPage={entriesPerPage}
        onPageChange={handlePageChange}
        onEntriesChange={handleEntriesChange}
      />
      {/* <Footer /> */}
    </div>
    </div>
  );
};
 
export default Attendance;