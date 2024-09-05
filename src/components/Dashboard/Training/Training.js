import React from 'react';
import './Training.css'; // Create a new CSS file for Training styles
import noDataImage from '../../../Assets/no-data-image.jpeg';

const Training = () => {
  return (
    <div className="training-container">
      <div className="header">
        <h3>Training</h3>
      </div>
      <div className="divider-l"></div>
      <div className="no-data">
        <img src={noDataImage} alt="No Data" />
        <p>No Data Available!</p>
      </div>
    </div>
  );
};

export default Training;