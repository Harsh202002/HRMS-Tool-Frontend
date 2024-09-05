import React from 'react';
import './TDS.css';

const TDS = () => {
  return (
    <div className="tds-container">
      <div className="tds-header">
        <h2>TDS For the FY : 2024 - 2025</h2>
      </div>
      <table className="tds-table">
        <tbody>
          <tr>
            <td>Net Income</td>
            <td>0</td>
            <td>My Deductions</td>
            <td>50000</td>
          </tr>
          <tr>
            <td>Net Taxable Income (After Deduction)</td>
            <td>0</td>
            <td>Tax Deducted at Source</td>
            <td>0</td>
          </tr>
          <tr>
            <td>87A Rebate</td>
            <td>0</td>
            <td>Tax Deducted at Source after rebate</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Education and health cess</td>
            <td>0</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TDS;