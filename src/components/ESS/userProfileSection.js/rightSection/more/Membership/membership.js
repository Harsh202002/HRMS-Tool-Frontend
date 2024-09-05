import React, {useState} from "react";
import "./membership.css"
const Membership = ({ isVisible, onToggle }) =>{
    return(
        <div className="Membership-Profile">
        <div className="membership-btn-holder" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="Membership-profile-h3">Membership</h3>
        <button onClick={onToggle} className="toggle-button-Membership">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="Membership-table">
                    <thead>
                      <tr>
                        <th>Membership</th>
                        <th>Membership No.</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
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
export default Membership;