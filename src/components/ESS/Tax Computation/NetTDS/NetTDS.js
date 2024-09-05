import React from 'react';
import './NetTDS.css';

const NetTDS = () => {
  return (
    <div className="net-tds-container">
        <div className="net-tds-header">
        <h2>TDS For the FY : 2024 - 2025</h2>
      </div>
      <table className="net-tds-table">
        <tbody>
          <tr>
            <td>Net TDS Payable (Annually)</td>
            <td>0</td>
            <td>Net TDS Payable (Monthly)</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NetTDS;