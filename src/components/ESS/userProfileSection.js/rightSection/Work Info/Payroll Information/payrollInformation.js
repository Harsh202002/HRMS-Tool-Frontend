import React,{useState} from "react";
import "./payrollInformation.css"
const Payrollinformation = ({ isVisible, onToggle }) => {
    return(
        <div>
        <div className="payrollinformation-btn-holder" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="Payroll-profile-h3">Payroll Information</h3>
        <button onClick={onToggle} className="toggle-button-Payrollinformation">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
        <div className="payroll-form-wrapper">
        <form className="payroll-investment-form">
          <div className="payroll-form-section">
            <div className="payroll-form-item">
              <label className="payroll-label">Pan Number</label>
              <input type="text" value="CDFPC7407R" readOnly className="payroll-input" />
            </div>
            <div className="payroll-form-item">
              <label className="payroll-label">UAN Number</label>
              <input type="text" value="" readOnly className="payroll-input" />
            </div>
          </div>
          <div className="payroll-form-section">
            <div className="payroll-form-item">
              <label className="payroll-label">PF Number</label>
              <input type="text" value="" readOnly className="payroll-input" />
            </div>
            <div className="payroll-form-item">
              <label className="payroll-label">ESI Number</label>
              <input type="text" value="" readOnly className="payroll-input" />
            </div>
          </div>
          <div className="payroll-form-section">
            <div className="payroll-form-item">
              <label className="payroll-label">Account Holder Name</label>
              <input type="text" value="" readOnly className="payroll-input" />
            </div>
            <div className="payroll-form-item">
              <label className="payroll-label">Bank Name</label>
              <select className="payroll-select">
                <option>--Select--</option>
              </select>
            </div>
          </div>
          <div className="payroll-form-section">
            <div className="payroll-form-item">
              <label className="payroll-label">Account Number</label>
              <input type="text" value="" readOnly className="payroll-input payroll-pan-input" />
            </div>
            <div className="payroll-form-item">
              <label className="payroll-label">IFSC Code</label>
              <input type="text" value="" readOnly className="payroll-input" />
            </div>
          </div>
          <div className="payroll-form-section">
            <div className="payroll-form-item">
              <label className="payroll-label">GROSS Salary</label>
              <input type="text" value="" readOnly className="payroll-input" />
            </div>
            <div className="payroll-form-item">
              <label className="payroll-label">CTC</label>
              <input type="text" value="" readOnly className="payroll-input" />
            </div>
          </div>
          <div className="payroll-form-section">
            <div className="payroll-form-item">
              <label className="payroll-label">Over Time Rates(per hour)</label>
              <input type="number" value="0.00" readOnly className="payroll-input" />
            </div>
          </div>
        </form>
      </div>
        )}
      </div>
    )
}
export default Payrollinformation