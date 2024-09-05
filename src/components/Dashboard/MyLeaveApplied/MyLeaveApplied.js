// MyLeaveApplied.js
import React from 'react';
import './MyLeaveApplied.css';
import noDataImage from '../../../Assets/no-data-image.jpeg';

const MyLeaveApplied = () => {
  return (
    <div className="myleaveapplied-container">
         <div className="header">
        <h3>My Leave Applied</h3>
      </div>
      <div className="divider-2"></div>
      <div className="no-data">
      <img src={noDataImage} alt="No Data Available" /> 
        <p>No Data Available</p>
      </div>
    </div>
  );
};

export default MyLeaveApplied;