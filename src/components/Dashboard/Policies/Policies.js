import React from 'react';
import './Policies.css';
import noDataImage from '../../../Assets/no-data-image.jpeg';



const Policies = () => {
  return (
    <div className="policies-container">
        <div className="header">
        <h3>Policies</h3>
      </div>
      <div className="divider-2"></div>
      <div className="no-data">
        <img src={noDataImage} alt="No Data Available" />  
        <p>No Data Available</p>
      </div>
    </div>
  );
};

export default Policies;