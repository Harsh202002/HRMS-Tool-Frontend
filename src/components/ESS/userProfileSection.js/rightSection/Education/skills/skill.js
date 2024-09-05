import React, {useState} from "react";
import "./skill.css"
const Skill = ({ isVisible, onToggle }) =>{
    return(
        <div className="Skill-Profile">
        <div className="skill-btn-holder" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="Skill-profile-h3">Skill</h3>
        <button onClick={onToggle} className="toggle-button-skill">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
        {isVisible && (
                  <div>
                  <table className="Skill-table">
                    <thead>
                      <tr>
                        <th>Skill</th>
                        <th>Experience</th>
                        <th>Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
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
export default Skill;