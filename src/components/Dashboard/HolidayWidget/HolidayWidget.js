import React from 'react';
import './HolidayWidget.css';
import holidayImage from '../../../Assets/holiday-image.png'; // Update with your image path

const HolidayWidget = () => {
  return (
  <div className="holiday-widget-container">
     <div className="holiday-widget">
      <img src={holidayImage} alt="Holiday" className="holiday-image" />
      <div className="holiday-info">
      <h3>Holiday</h3>
        <div className="holiday-box-1">
          <span className="holiday-date">15/08/2024</span>
        </div>
        <div className="holiday-box-2">
        <span className="holiday-name">Independence Day</span>
        </div>
        {/* Add more holiday boxes as needed */}
      </div>
     </div>
  </div>
  );
}

export default HolidayWidget;