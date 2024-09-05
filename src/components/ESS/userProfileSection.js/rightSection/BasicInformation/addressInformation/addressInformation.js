import React, {useState} from "react";
import "./addressInformation.css"
const Addressinformation = ({ isVisible, onToggle }) =>{
    return(
        <div  className="AddressInformation-Profile">
        <div className="btn-holder-AddressInformation" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="AI-profile-h3">Address Information</h3>
        <button onClick={onToggle} className="toggle-button-A">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i class="fa-solid fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="Address-table">
                    <thead>
                      <tr>
                        <th>Address Type</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Telephone</th>
                        <th>Zip code</th>
                        <th>Country</th>
                        <th>Parish</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Present</td>
                        <td>3 N.S Path Purani Bazar Titagarh</td>
                        <td>Titagarh</td>
                        <td>9874221980</td>
                        <td>700119</td>
                        <td>India</td>
                        <td>West Bengal</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
        )}
           
        </div>
    )
}
export default Addressinformation;