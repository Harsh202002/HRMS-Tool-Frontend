import React from 'react';
import './Celebration.css';
import noDataImage from '../../../Assets/no-data-image.jpeg';

const Celebration = () => {
  return (
    <div className="celebration-container">
      <h3>Celebrations</h3>
      <div className="divider-line"></div>
      <div className="celebration-content">
        <div className="no-data">
          <img src={noDataImage} alt="No Data Available" className="no-data-image" />
          <p>No Data Available!</p>
        </div>
      </div>
    </div>
  );
};

export default Celebration;