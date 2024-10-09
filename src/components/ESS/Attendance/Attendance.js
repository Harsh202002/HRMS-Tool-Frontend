import React, { useState } from 'react';
import AttendanceHeader from './AttendanceHeader/AttendanceHeader';
import AttendanceTable from './AttendanceTable/AttendanceTable';
// import Footer from './Footer/Footer';
import './Attendance.css';
 
const Attendance = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
 
  const handlePageChange = (page) => setCurrentPage(page);
  const handleEntriesChange = (entries) => setEntriesPerPage(parseInt(entries));
 
  return (
    <div className='attendence-main-container'>
    <div className="attendance-container">
      <AttendanceHeader />
      <AttendanceTable
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