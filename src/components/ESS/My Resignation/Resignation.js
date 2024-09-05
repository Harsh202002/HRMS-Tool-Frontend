import React from 'react';
import './Resignation.css'; // Use a separate CSS file for Resignation
import backButtonImage from '../../../Assets/backButtonImage.jpg';

const Resignation = () => {
  return (
    <div className="resignation-main-container">
      <div className="resignation-header">
        <img src={backButtonImage} alt="Back" className="resignation-back-button-image" />
        <h1>My Resignation</h1>
      </div>

      <div className="resignation-table-container">
        <table className="resignation-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Name</th>
              <th>Location</th>
              <th>Department</th>
              <th>Job Title</th>
              <th>Resignation Date</th>
              <th>Approve LWD</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8" className="resignation-no-records">No records Found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resignation;