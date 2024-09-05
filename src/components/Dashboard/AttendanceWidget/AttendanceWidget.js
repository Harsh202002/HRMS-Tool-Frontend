import React, { useState, useEffect } from 'react';
import './AttendanceWidget.css';
import attendanceImage from '../../../Assets/attendance-image.jpg'; 

const AttendanceWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString();
  const formattedTime = time.toLocaleTimeString();

  return (
  <div className="attendance-widget-container">
    <div className="attendance-widget">
      <img src={attendanceImage} alt="Attendance" className="attendance-image" />
      <div className="attendance-info">
        <h3 className="attendance-title"> Attendance</h3>
        <div className="attendance-box">
          <span className="attendance-date">{formattedDate}</span>
          <span className="attendance-clock">{formattedTime}</span>
        </div>
        <div className="attendance-actions">
          <div className="check-in-box">Check-In</div>
          <button className="clock-out-button">Clock Out</button>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default AttendanceWidget;