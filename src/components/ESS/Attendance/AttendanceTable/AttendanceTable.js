import React, { useState, useEffect } from 'react';
import './AttendanceTable.css';
import Pagination from '../Pagination/Pagination';

const sampleData = [
  { date: '07-01-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Tuesday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'P-P', remarks: 'Present', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Wednesday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'P-P', remarks: 'Present', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Thursday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Friday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'P-P', remarks: 'Present', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Saturday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'L', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Sunday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'P-P', remarks: 'Present', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Tuesday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'P-P', remarks: 'Present', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Wednesday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Thursday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'L', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-01-2024', day: 'Friday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'W', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
];

// Additional sample data for Edited Attendance List
const editedData = [
  { date: '07-01-2024', day: 'Monday', inTime: '09:00', outTime: '18:00', spentHours: '09:00', isManual: 'Yes', status: 'P-P', remarks: 'Present - Edited', missedPunch: '00:00', overTime: '00:00' },
  { date: '08-01-2024', day: 'Tuesday', inTime: '09:00', outTime: '18:00', spentHours: '09:00', isManual: 'Yes', status: 'P-P', remarks: 'Present - Edited', missedPunch: '00:00', overTime: '00:00' },
  // more edited data...
];

const AttendanceTable = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState(sampleData);
  const [showEdited, setShowEdited] = useState(false); // State to toggle between My Attendance and Edited Attendance

  useEffect(() => {
    let filtered = showEdited ? editedData : sampleData;

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
  }, [filters, showEdited]); // Depend on showEdited state

  // Calculate the indices for slicing the filteredData array
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

  return (
    <div className="attendance-table">
      <div className="header">
        <h2 className={showEdited ? '' : 'active'} onClick={() => setShowEdited(false)}>My Attendance</h2>
        <h2 className={showEdited ? 'active' : ''} onClick={() => setShowEdited(true)}>Edited Attendance List</h2>
      </div>
      <div className="table-container">
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
                <td>{row.inTime}</td>
                <td>{row.outTime}</td>
                <td>{row.spentHours}</td>
                <td>{row.isManual}</td>
                <td>{row.status}</td>
                <td>{row.remarks}</td>
                <td>{row.missedPunch}</td>
                <td>{row.overTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
