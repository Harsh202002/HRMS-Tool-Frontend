// PersonalInfo.js
import React from 'react';
import './PersonalInfo.css';


const PersonalInfo = () => {
  return (
    <div className="personal-information">
     
      <h2>Personal Information</h2>
      <div className="info-row">
        <div>Emp Code: 109</div>
        <div>Name: Siddhesh Rajesh Gotmare</div>
      </div>
      <div className="info-row">
        <div>Financial Year: 2024 - 2025</div>
        <div>Assessment Year: 2025 - 2026</div>
      </div>
      <div className="info-row">
        <div>Department: Product Engineering & Innovations</div>
        <div>Designation: Jr. Software Engineer</div>
      </div>
    </div>
  );
};

export default PersonalInfo;