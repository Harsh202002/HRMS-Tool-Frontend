import React from 'react';
//import MyTDSHeader from './TDSHeader/MyTDSHeader';
import backButtonImage from '../../../Assets/backButtonImage.jpg';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Deduction from './Deduction/Deduction';
import TDS from './TDS/TDS';
import NetTDS from './NetTDS/NetTDS';
import './MyTDSDetails.css';

const MyTDSDetails = () => {
  return (
  <div className="tds-details-main-container">  
    <div className="tds-details-container">
    <div className="investment-header-section">
      <img src={backButtonImage} alt="Back" className="back-button-image" />
      <h1>Investment Declaration Form</h1>
    </div>
      <PersonalInfo />
      <Deduction />
      <TDS />
      <NetTDS />
    
 </div>    
    </div>
  );
};

export default MyTDSDetails;