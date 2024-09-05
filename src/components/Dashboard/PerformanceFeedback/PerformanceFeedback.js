import React from 'react';
import './PerformanceFeedback.css'; // Create this CSS file for styling
import noDataImage from '../../../Assets/no-data-image.jpeg'


function PerformanceFeedback() {
  return (
    <div className="performance-feedback-container">
      <div className="header">
        <h3>Performance Feedback</h3>
        <div className="divider-lines"></div>
      </div>
      <div className="no-data">
        <img src={noDataImage} alt="No Data" />
        <p>No Data Available!</p>
      </div>
    </div>
  );
}

export default PerformanceFeedback;