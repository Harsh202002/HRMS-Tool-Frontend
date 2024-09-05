import React, { useState } from 'react';
import './Accolades.css'; // Use a separate CSS file for Accolades
import backButtonImage from '../../../Assets/backButtonImage.jpg';
import filterIconImage from '../../../Assets/filter-icon.png'; 

const Accolades = () => {
        const [isSearchVisible, setIsSearchVisible] = useState(false); // State to control the visibility of the basic search
      
        const toggleSearch = () => {
          setIsSearchVisible(!isSearchVisible); // Toggle the visibility of the basic search
        };
  return (
    <div className="accolades-main-container">
      <div className="accolades-header">
        <img src={backButtonImage} alt="Back" className="accolades-back-button-image" />
        <h1>My Accolades</h1>
        <img
            src={filterIconImage}
            alt="Filter"
            className="filter-icon"
            onClick={toggleSearch}
          />
      </div>

         {isSearchVisible && (
            <div className="basic-search-container-1">
              <h2>Basic Search</h2>
              <div className="accolades-divider"></div>
              <div className="search-fields">
            <div className="accolades-field">
                <label htmlFor="search-keyword">Search Keyword</label>
               <input
                  type="text"
                   id="search-keyword"
                 placeholder="Enter keyword"
                 />
                </div>
                </div>
                <div className="accolades-search-buttons">
                  <button className="accolades-search-button">Search</button>
              <button className="accolades-reset-button">Reset</button>
                 </div>
             </div>
             )}


      <div className="accolades-table-container">
        <table className="accolades-table">
          <thead>
            <tr>
              <th>View</th>
              <th>Reward Name</th>
              <th>Reward Type</th>
              <th>Download</th>
              <th>Approval Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="accolades-no-records">No records Found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accolades;