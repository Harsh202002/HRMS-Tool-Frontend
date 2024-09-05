// Deduction.js
import React from 'react';
import './Deduction.css';

const Deduction = () => {
  return (
    <div className="tds-details">
      <h2>All Deductions For the FY:2024 - 2025</h2>
      <table className="tds-table-1">
        <thead>
          <tr>
            <th>PARTICULARS</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>  Employer’s contribution to NPS account</td>
            <td>0</td>
          </tr>
          <tr>
            <td>  Any other income from other sources</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Deduction;