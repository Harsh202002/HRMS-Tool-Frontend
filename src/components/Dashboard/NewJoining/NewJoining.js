import React from 'react';
import './NewJoining.css';
import profilePlaceholder from '../../../Assets/ImageAvtar.jpg'; // Ensure this path is correct and the image exists

const NewJoining = () => {
  return (
    <div className="new-joining-container">
      <h3>New Joinings</h3>
      <div className="divider-line"></div>
      <div className="new-joining-content">
        <div className="welcome-text">
          <h2>Welcome!</h2>
        </div>
        <img src={profilePlaceholder} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <strong>Mr. Vishal Chaudhari</strong>
          <small>(Jr. Software Engineer)</small>
          <div className="date-location">
            <p>📅 22 Jul 2024</p>
            <p>📍 Pune - Product Engineering & Innovations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewJoining;