import React, {useState} from "react";
import "./bankDetails.css"
const Bankdetails = ({ isVisible, onToggle }) =>{
    
    return(
        <div className="Bankdetails-Profile">
        <div className="bankdetails-btn-holder" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="Bankdetails-profile-h3">Bankdetails</h3>
        <button onClick={onToggle} className="toggle-button-Bankdetails">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> :<i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="Bankdetails-table">
                    <thead>
                      <tr>
                        <th>Account Holder Name</th>
                        <th>Account No.</th>
                        <th>Bank</th>
                        <th>IFSC Code.</th>
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
export default Bankdetails;