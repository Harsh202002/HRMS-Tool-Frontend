// AccoladesRewards.js
import React from 'react';
import './AccoladesRewards.css';
import noDataImage from "../../../Assets/no-data-image.jpeg";

const AccoladesRewards = () => {

  return (
    <div className="accolades-container">
      <div className="header">
        <h3>Accolades and Rewards</h3>
      </div>
      <div className="divider"></div>
      <div className="no-data">
        <img src={noDataImage} alt="No Data Available" />
        <p>No Data Available!</p>
      </div>
    </div>
  );
};

export default AccoladesRewards;