import React from 'react';
//import backButtonImage from '../../../../Assets/backButtonImage.jpg';
import './InvestmentHeader.css';

const InvestmentHeader = () => {
  return (
    <div className="investment-header-section">
       <button className="back-button">
        <i className="fa-solid fa-chevron-left"></i>
        </button>
      <h1>Investment Declaration Form</h1>
    </div>
  );
};

export default InvestmentHeader;