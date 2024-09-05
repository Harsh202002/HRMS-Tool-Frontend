import React from 'react';
import MyTDSHeader from './TDSHeader/MyTDSHeader';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Deduction from './Deduction/Deduction';
import TDS from './TDS/TDS';
import NetTDS from './NetTDS/NetTDS';
import './MyTDSDetails.css';

const MyTDSDetails = () => {
  return (
    
    <div className="tds-details-container">
      <MyTDSHeader />
      <PersonalInfo />
      <Deduction />
      <TDS />
      <NetTDS />
    
     
    </div>
  );
};

export default MyTDSDetails;