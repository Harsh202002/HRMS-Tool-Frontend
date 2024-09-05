import React from 'react';
import './investmentDeclaration.css';

const Investmentdeclaration=()=> {
  return (
    <div className="unique-form-wrapper">
      <h2 className="unique-heading">
        Investment Declaration Form For Tax Saving For Financial Year <a href="#">2024-2025</a>
      </h2>
      <form className="unique-investment-form">
        <div className="unique-form-section">
          <div className="unique-form-item">
            <label className="unique-label">Employee Code</label>
            <input type="text" value="0108" readOnly className="unique-input" />
          </div>
          <div className="unique-form-item">
            <label className="unique-label">Employee Name</label>
            <input type="text" value="Harshit Choudhary" readOnly className="unique-input" />
          </div>
        </div>
        <div className="unique-form-section">
          <div className="unique-form-item">
            <label className="unique-label">Location</label>
            <input type="text" value="Kolkata" readOnly className="unique-input" />
          </div>
          <div className="unique-form-item">
            <label className="unique-label">Department</label>
            <input type="text" value="Product Engineering & Innovation" readOnly className="unique-input" />
          </div>
        </div>
        <div className="unique-form-section">
          <div className="unique-form-item">
            <label className="unique-label">Designation</label>
            <input type="text" value="Jr. Software Engineer" readOnly className="unique-input" />
          </div>
          <div className="unique-form-item">
            <label className="unique-label">Date of Joining</label>
            <input type="text" value="03-06-2024" readOnly className="unique-input" />
          </div>
        </div>
        <div className="unique-form-section">
          <div className="unique-form-item">
            <label className="unique-label">Pan Number</label>
            <input type="text" value="CDFPC7407R" readOnly className="unique-input unique-pan-input" />
          </div>
          <div className="unique-form-item">
            <label className="unique-label">Address (for the purpose of HRA)</label>
            <input type="text" value="3 NS Path Purani Bazar-INDIA" readOnly className="unique-input" />
          </div>
        </div>
        <div className="unique-form-section">
          <div className="unique-form-item">
            <label className="unique-label">Regime</label>
            <select className="unique-select">
              <option>--Select--</option>
            </select>
          </div>
        </div>
        <div className="unique-declaration">
          <p>
            Declaration: I <b>Harshit Choudhary</b>, hereby declare that I will make investments against my declarations for the purpose of rebate/deduction to be considered in calculating my income tax for the Financial Year <a href="#">2024-2025</a> and will submit the supporting documents during the earned proof submission or at the time of resignation. I further undertake that wherever eligible investments are in the name of spouse/children/dependent parents, the same will be made out of my income and claim thereof shall not be made elsewhere to get Income Tax benefit.
          </p>
        </div>
        <div className="unique-form-section unique-save-btn">
          <button type="button" className="unique-btn">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Investmentdeclaration;
