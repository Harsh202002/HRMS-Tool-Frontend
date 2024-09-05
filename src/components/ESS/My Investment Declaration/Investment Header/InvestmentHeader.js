import React from 'react';
import backButtonImage from '../../../../Assets/backButtonImage.jpg';
import './InvestmentHeader.css';

const InvestmentHeader = () => {
  return (
    <div className="investment-header-section">
      <img src={backButtonImage} alt="Back" className="back-button-image" />
      <h1>Investment Declaration Form</h1>
    </div>
  );
};

export default InvestmentHeader;