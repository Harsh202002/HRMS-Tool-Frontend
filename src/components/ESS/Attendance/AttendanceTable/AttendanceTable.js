import React, { useState, useEffect } from 'react';
import './AttendanceTable.css';
import Pagination from '../Pagination/Pagination';
import attendanceService from '../../../../services/attendanceService';

const AttendanceTable = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState([]); 
  const [showEdited, setShowEdited] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
          throw new Error('Invalid attendance data.');
        }
  
        console.log('Fetched attendance record by ID:', data);
  
        
        const attendance = showEdited ? data.editedAttendance || [] : data.attendance || [];
  
        
        let filtered = attendance;
        if (filters.fromDate) {
          filtered = filtered.filter(row => new Date(row.date) >= new Date(filters.fromDate));
        }
        if (filters.toDate) {
          filtered = filtered.filter(row => new Date(row.date) <= new Date(filters.toDate));
        }
        if (filters.status) {
          filtered = filtered.filter(row => row.status.includes(filters.status));
        }
  
        setFilteredData(filtered);
      } catch (err) {
        console.error('Error fetching attendance data:', err.message);
        setError(err.message);
        setFilteredData([]); 
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [filters, showEdited]);
  

  
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData?.slice(indexOfFirstEntry, indexOfLastEntry) || []; // Safeguard slice

  return (
    <div className="attendance-table">
      <div className="header">
        <h2
          className={!showEdited ? 'active' : ''}
          onClick={() => setShowEdited(false)}
        >
          My Attendance
        </h2>
        <h2
          className={showEdited ? 'active' : ''}
          onClick={() => setShowEdited(true)}
        >
          Edited Attendance List
        </h2>
      </div>
      <div className="table-container">
        {loading ? (
          <p>Loading attendance data...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : filteredData.length === 0 ? (
          <p>No attendance records found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Day</th>
                <th>In Time</th>
                <th>Out Time</th>
                <th>Spent Hours</th>
                <th>Is Manual</th>
                <th>Status</th>
                <th>Remarks</th>
                <th>Missed Punch</th>
                <th>OverTime</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.day}</td>
                  <td>{row.checkInTime}</td>
                  <td>{row.checkOutTime}</td>
                  <td>{row.spentHours}</td>
                  <td>{row.isManual ? 'Yes' : 'No'}</td>
                  <td>{row.status}</td>
                  <td>{row.remarks}</td>
                  <td>{row.missedPunch ? 'Yes' : 'No'}</td>
                  <td>{row.overTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Pagination
        totalEntries={filteredData.length}
        entriesPerPage={entriesPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onEntriesChange={setEntriesPerPage}
      />
    </div>
  );
};

export default AttendanceTable;
