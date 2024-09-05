import React, {useState} from "react";
import "./paySlips.css"
const Payslips = ({ isVisible, onToggle }) =>{
    return(
        <div className="Payslips-Profile">
        <div className="payslip-btn-holder" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="Payslips-profile-h3">PaySlips</h3>
        <button onClick={onToggle} className="toggle-button-Payslips">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="Payslips-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>

                    </tbody>
                  </table>
                </div>
        )}
        </div>
    )
}
export default Payslips;