import React from 'react';
import './MyTDSHeader.css';

import backButtonImage from '../../../../Assets/backButtonImage.jpg';

const MyTDSHeader = () => {
  return (
    <div className="tds-header-container">
      <img src={backButtonImage} alt="Back" className="back-button-image" />
      <h1>My TDS Details</h1>
    </div>
  );
};

export default MyTDSHeader;