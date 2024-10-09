import React from 'react';
//import MyTDSHeader from './TDSHeader/MyTDSHeader';
//import backButtonImage from '../../../Assets/backButtonImage.jpg';
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
    <button className="back-button">
        <i className="fa-solid fa-chevron-left"></i>
        </button>
      <h1>  My TDS Details</h1>
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