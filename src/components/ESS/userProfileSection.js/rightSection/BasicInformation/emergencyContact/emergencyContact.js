import React, {useState} from "react";
import "./emergencyContact.css"
const Emergencycontact = ({ isVisible, onToggle }) =>{
    return(
        <div className="emergencyContact-Profile">
        <div className="btn-holder-emergencyContact" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="E-profile-h3">Emergency Contact</h3>
        <button onClick={onToggle} className="toggle-button-Em">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="emergency-table">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Mobile No.</th>
                        <th>Alt. Mobile No.</th>
                        <th>Country Name</th>
                        <th>Email Id</th>
                        <th>Alt.Email Id</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ashok</td>
                        <td>Choudhary</td>
                        <td>3 N.S Path Purani Bazar Titagarh</td>
                        <td>9874221980</td>
                        <td>9007886749</td>
                        <td>India</td>
                        <td>Hard@gmail.com</td>
                        <td>abc@gmail.com</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
        )}
           
        </div>
    )
}
export default Emergencycontact;