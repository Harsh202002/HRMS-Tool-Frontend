// Gallery.js

import React from 'react';
import './Gallery.css'; // Import your CSS file
import noDataImage from '../../../Assets/no-data-image.jpeg';

const Gallery = () => {
  return (
    <div className="gallery-container">
        <div className="header">
        <h3>Gallery</h3>
      </div>
      <div className="divider"></div>
      <div className="no-data-content">
      <img src={noDataImage} alt="No Data Available" />
        <p>No Data Available!</p>
      </div>
    </div>
  );
};

export default Gallery;