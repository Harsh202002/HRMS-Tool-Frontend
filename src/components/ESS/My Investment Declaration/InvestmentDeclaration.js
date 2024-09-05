import React from 'react';
import InvestmentHeader from "./Investment Header/InvestmentHeader";
import './InvestmentDeclaration.css';

const InvestmentDeclaration = () => {
  return (
    <div className="investment-declaration-main-container">
    
      <InvestmentHeader />

     
      <div className="investment-declaration-form-container">
        <h2>Investment Declaration Form For Tax Saving For Financial Year 2024-2025</h2>
        
        <div className="form-section">
         
          <div className="form-group">
            <label>Employee Code</label>
            <input type="text" value="109" readOnly />
          </div>
          <div className="form-group">
            <label>Employee Name</label>
            <input type="text" value="Siddhesh Rajesh Gotmare" readOnly />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" value="Kolkata" readOnly />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input type="text" value="Product Engineering & Innovations" readOnly />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input type="text" value="Jr. Software Engineer" readOnly />
          </div>
          <div className="form-group">
            <label>Date of Joining</label>
            <input type="text" value="06-03-2024" readOnly />
          </div>
          <div className="form-group">
            <label>Pan Number</label>
            <input type="text" value="DYVPG4339G" readOnly className="pan-input" />
          </div>
          <div className="form-group">
            <label>Regime</label>
            <select className="regime-select">
              <option value="">--Select--</option>
            </select>
          </div>
        </div>

        <div className="declaration-section">
          <p>
            Declaration: I <strong>Siddhesh Rajesh Gotmare</strong>, hereby declare that I will make investments against my
            declarations for the purpose of rebate/deduction to be considered in calculating my income tax for the Financial Year
            <strong> 2024-2025</strong> and will submit the supporting documents during the earned proof submission or at the time
            of resignation. I further undertake that wherever eligible investments are in the name of spouse/children/dependent
            parents, the same will be made out of my income and claim thereof shall not be made elsewhere to get Income Tax benefit.
          </p>
        </div>

        <div class="save-button-2">
          <button type="submit">Save</button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDeclaration;