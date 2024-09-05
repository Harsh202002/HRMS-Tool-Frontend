
import React from 'react';
import './BalanceLeaves.css';

const BalanceLeaves = () => {
  return (
    <div className="leaves-container">
       <div className="header">
        <h3>Balance leaves</h3>
      </div>
      <div className="divider"></div>
      <div className="leaves-list">
        <div className="leave-item">
          <span className="leave-type el">EL</span>
          <span className="leave-days">1.0 D</span>
        </div>
        <div className="leave-item">
          <span className="leave-type marriage">Marriage Leave</span>
          <span className="leave-days">1.0 D</span>
        </div>
        <div className="leave-item">
          <span className="leave-type sl">SL</span>
          <span className="leave-days">6.0 D</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceLeaves;