import React from 'react';
import './OpenVacancy.css';
import noDataImage from '../../../Assets/no-data-image.jpeg'; // Ensure this path is correct and the image exists

const OpenVacancies = () => {
  return (
    <div className="open-vacancies-container">
      <div className="header">
        <h3>Open Vacancies</h3>
        <span className="search-icon">🔍</span>
      </div>
      <div className="divider-line"></div>
        <div className="no-data">
          <img src={noDataImage} alt="No Data Available" />
          <p>No Data Available!</p>
        </div>
      </div>
  
  );
};

export default OpenVacancies;