import React, { useState } from 'react';
import './AttendanceTable.css';
import Pagination from '../Pagination/Pagination';
 
const sampleData = [
  { date: '07-01-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' },
  { date: '07-08-2024', day: 'Monday', inTime: '00:00', outTime: '00:00', spentHours: '00:00', isManual: 'No', status: 'A-A', remarks: 'Absent', missedPunch: '00:00', overTime: '00:00' }
];
 
const editedData = [
 
];
 
const AttendanceTable = () => {
  const [showEdited, setShowEdited] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
 
  const data = showEdited ? editedData : sampleData;
 
  // Calculate the indices for slicing the data array
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);
 
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
              <th>Action</th>
              <th>Date</th>
              <th>Day</th>
              <th>In Time</th>
              <th>Out Time</th>
              <th>Spent Hours</th>
              <th>Is manual</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Missed Punch</th>
              <th>OverTime</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((row, index) => (
              <tr key={index}>
                <td className="action-cell">...</td>
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
 
      {/* Add the Pagination component below the table */}
      <Pagination
        totalEntries={data.length}
        entriesPerPage={entriesPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onEntriesChange={setEntriesPerPage}
      />
    </div>
  );
};
 
export default AttendanceTable;