import React, {useState} from "react";
import "./assetsInformation.css"
const Assetsinformation = ({ isVisible, onToggle }) =>{
    return(
        <div className="Assetsinformation-Profile">
        <div className="assetinfo-btn-holder" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="Assetsinformation-profile-h3">Assets Information</h3>
        <button onClick={onToggle} className="toggle-button-Assetsinformation">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="Assetsinformation-table">
                    <thead>
                      <tr>
                        <th>Assets Name</th>
                        <th>Manufacturer Name</th>
                        <th>Model No.</th>
                        <th>Serial Number</th>
                        <th>Asset Tag</th>
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
export default Assetsinformation;