import React, {useState} from "react";
import "./medicalHistory.css"
const Medicalhistory = ({ isVisible, onToggle }) =>{
   
    return(
        <div className="Medicalhistory-Profile">
        <div className="medicalhistory-btn-holder" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="Medicalhistory-profile-h3">Medical History</h3>
        <button onClick={onToggle} className="toggle-button-Medicalhistory">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="Medicalhistory-table">
                    <thead>
                      <tr>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Blood-Group</th>
                        <th>Abled</th>
                        <th>Significant Medical History</th>
                        <th>Medical Problems</th>
                        <th>Medication Taken</th>
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
export default Medicalhistory;