import React,{useState} from "react";
import "./jobProfile.css"
const Jobprofile = ({ isVisible, onToggle }) => {
    return (
      <div className="job-profile">
        <div className="btn-holder-job" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className="j-profile-h3">Job Profile</h3>
        <button onClick={onToggle} className="toggle-button-j">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
         </button>
        </div>
         {isVisible && (
        <div className="form">
          <div className="form-group">
            <label>About Me</label>
            <textarea readOnly />
          </div>
          <div className="form-group">
            <label>Previous Employer</label>
            <input type="text" readOnly />
          </div>
          <div className="form-group">
            <label>Total Work Experience</label>
            <div className="work-experience">
              <input type="text" value="00 Years" readOnly />
              <input type="text" value="05 Months" readOnly />
            </div>
          </div>
          <div className="form-group">
            <label>Probation Period</label>
            <input type="text" readOnly />
          </div>
          <div className="form-group">
            <label>Probation End Date</label>
            <input type="text" readOnly />
          </div>
          <div className="form-group">
            <label>Notice Period</label>
            <input type="text" readOnly />
          </div>
        </div>
         )}
      </div>
    );
  };
  export default Jobprofile