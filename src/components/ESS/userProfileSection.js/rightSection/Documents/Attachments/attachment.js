import React, {useState} from "react";
import "./attachment.css"
const Attachment = ({ isVisible, onToggle }) =>{
    return(
        <div className="Attachment-Profile">
        <div className="attachment-btn-holder" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="Attachment-profile-h3">Attachments</h3>
        <button onClick={onToggle} className="toggle-button-Attachment">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="Attachment-table">
                    <thead>
                      <tr>
                        <th>Attachments</th>
                        <th>Document Type</th>
                        <th>File</th>
                        <th>Description</th>
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
export default Attachment;