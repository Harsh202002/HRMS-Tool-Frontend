import React from 'react';
import ShiftIcon from '../../../Assets/Shift.jpeg'; 
import './ShiftWidget.css';

const ShiftWidget = () => {
  return (
    <div className="shift-widget-container">
      <div className="shift-widget">
        <img src={ShiftIcon} alt="My Shift" className="shift-widget-image" />
        <div className="shift-info">
          <h3>My Shift</h3>
          <div className="shift-time">
            <span className="clock-icon">🕒</span> 10:00 To 19:00
          </div>
          <div className="shift-type">General</div>
        </div>
      </div>
    </div>
  );
};

export default ShiftWidget;