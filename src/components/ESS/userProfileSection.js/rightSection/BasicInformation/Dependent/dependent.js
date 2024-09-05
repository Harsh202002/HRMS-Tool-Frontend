import React, {useState} from "react";
import "./dependent.css"
const Dependent = ({ isVisible, onToggle }) =>{
    return(
        <div className="Dependent-Profile">
        <div className="btn-holder-Dependent" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="D-profile-h3">Dependent</h3>
        <button onClick={onToggle} className="toggle-button-D">
       {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i>: <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
     {isVisible && (
                  <div>
                  <table className="Dependent-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Mobile No.</th>
                        <th>Email Id</th>
                        <th>Relation</th>
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
export default Dependent;