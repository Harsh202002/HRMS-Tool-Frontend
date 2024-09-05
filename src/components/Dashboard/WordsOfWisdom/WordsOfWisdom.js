// WordsOfWisdom.js
import React from 'react';
import './WordsOfWisdom.css';
import noDataImage from '../../../Assets/no-data-image.jpeg';

const WordsOfWisdom = () => {
  return (
    <div className="wisdom-container">
      <div className="header">
        <h3>Words of Wisdom</h3>
      </div>
      <div className="divider"></div>
      <div className="no-data">
        <img src={noDataImage} alt="No Data Available" />
        <p>No Data Available!</p>
      </div>
    </div>
  );
};

export default WordsOfWisdom;