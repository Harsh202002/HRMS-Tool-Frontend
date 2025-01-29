import React, { useState, useEffect } from 'react';
import './AttendanceT.css';
import attendanceService from '../../../services/attendanceService';

function AttendanceT() {
  const [currentPage, setCurrentPage] = useState(1);
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

 
  const fetchAttendanceData = async () => {
    setLoading(true);
    setError(null);

    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (!storedUser || !storedUser.user) {
        throw new Error('User data not found in localStorage.');
      }

      const userId = storedUser.user.id;
      if (!userId) {
        throw new Error('User ID is missing.');
      }

     
      const data = await attendanceService.fetchAttendanceById(userId);

      if (!data || typeof data !== 'object') {
        throw new Error('Invalid attendance data received.');
      }

      console.log('Fetched attendance record:', data);

      setAttendanceData(data.attendance || []);
    } catch (err) {
      console.error('Error fetching attendance data:', err.message);
      setError(err.message);
      setAttendanceData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, []);


  const entriesPerPage = 5;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = attendanceData.slice(indexOfFirstEntry, indexOfLastEntry);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="attendanceT-container">
      <div className="header">
        <h3>Attendance</h3>
        <div className="divider-lines"></div>
      </div>

      {loading && <p>Loading attendance data...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      <table className="attendanceT-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>In</th>
            <th>Out</th>
            <th>Hours</th>
            <th>Overtime</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.length > 0 ? (
            currentEntries.map((entry, index) => (
              <tr key={index}>
                <td>{new Date(entry.date).toLocaleDateString()}</td>
                <td>{entry.checkInTime || 'N/A'}</td>
                <td>{entry.checkOutTime || 'N/A'}</td>
                <td>{entry.spentHours || '00:00'}</td>
                <td>{entry.overtime || '00:00'}</td>
                <td>{entry.status || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No attendance data available.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span> Page {currentPage} </span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentEntries.length < entriesPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AttendanceT;
