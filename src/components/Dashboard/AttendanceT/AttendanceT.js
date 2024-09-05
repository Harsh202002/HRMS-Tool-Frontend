import React from 'react';
import './AttendanceT.css'; 

function AttendanceT() {
  return (
    <div className="attendanceT-container">
      <div className="header">
        <h3>Attendance</h3>
        <div className="divider-lines"></div>
      </div>
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
          <tr>
            <td>12/08/2024</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>A-A</td>
          </tr>
          <tr>
            <td>12/08/2024</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>A-A</td>
          </tr>
          <tr>
            <td>12/08/2024</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>A-A</td>
          </tr>
          <tr>
            <td>12/08/2024</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>A-A</td>
          </tr>
          <tr>
            <td>12/08/2024</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>A-A</td>
          </tr>
          <tr>
            <td>12/08/2024</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>A-A</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceT;