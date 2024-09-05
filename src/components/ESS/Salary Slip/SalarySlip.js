import React, { useState } from 'react';
import './SalarySlip.css'; // Import your CSS file here
import backButtonImage from '../../../Assets/backButtonImage.jpg';
import filterIconImage from '../../../Assets/filter-icon.png'; // Import the filter icon image

const SalarySlip = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false); // State to control the visibility of the basic search
  
    const toggleSearch = () => {
      setIsSearchVisible(!isSearchVisible); // Toggle the visibility of the basic search
    };
  
    return (
      <div className="salary-slip-container">
        <div className="salary-slip-header">
          <img src={backButtonImage} alt="Back" className="back-button" />
          <h1>Salary Slip</h1>
          <img
            src={filterIconImage}
            alt="Filter"
            className="filter-icon"
            onClick={toggleSearch}
          />
        </div>
  
        {isSearchVisible && (
          <div className="basic-search-container">
            <h2>Basic Search</h2>
            <div className="salary-slip-divider"></div>
            <div className="search-fields">
              <div className="salary-slip-field">
                <label htmlFor="month">Month</label>
                <select id="month">
                  <option>January</option>
                  <option>Feburary</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>october</option>
                  <option>November</option>
                  <option>December</option>
                  {/* Add month options here */}
                </select>
              </div>
              <div className="salary-slip-field">
                <label htmlFor="financial-year">Financial Year</label>
                <select id="financial-year">
                  <option>--Select--</option>
                  {/* Add financial year options here */}
                </select>
              </div>
            </div>
            <div className="salary-slip-search-buttons">
              <button className="salary-slip-search-button">Search</button>
              <button className="salary-slip-reset-button">Reset</button>
            </div>
          </div>
        )}
  
        <div className="salary-slip-details-container">
           <h3>Salary Slip Detail <span>(April-2024 To March-2025)</span></h3>
         <div className="details-content">
         <div className="salary-slip-no-records">No records found.</div>
             <p>Record Found: 0</p>
       </div>
</div>

      </div>
    );
  };
  
  export default SalarySlip;