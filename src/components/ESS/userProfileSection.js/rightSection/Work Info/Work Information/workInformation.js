import React, {useState} from "react";
import "./workInformation.css"
const Workinformation = ({ isVisible, onToggle }) =>{
    return(
        <div className="Workinformation-Profile">
        <div className="workinformation-btn-holder" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="Workinformation-profile-h3">Work Information</h3>
        <button onClick={onToggle} className="toggle-button-Workinformation">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="Workinformation-table">
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Job Title</th>
                        <th>Reporting Manager</th>
                        <th>From</th>
                        <th>To</th>
                        <th>CTC</th>
                        <th>Reason To Leave</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
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
export default Workinformation;