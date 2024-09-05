import React, { useState } from 'react';
import "./basicInformation.css"
const Basicinformation = ({ isVisible, onToggle }) => {
  return (
    <div>
      <div className='btn-holder' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
        <h3 className='basic-i-h3'>Basic Information</h3>
        <button onClick={onToggle} className="toggle-button">
          {isVisible ? <i class="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i class="fa-solid fa-circle-chevron-down"></i>}
        </button>
      </div>
      {isVisible && (
        <div className="form">
          <div className="form-group">
            <label>Employment Source</label>
            <input type="text" value="NonRecruited" readOnly />
          </div>
          <div className="form-group">
            <label>Company</label>
            <select>
              <option>Nefotech Solutions</option>
            </select>
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" value="Kolkata" readOnly />
          </div>
          <div className="form-group">
            <label>Department</label>
            <select>
              <option>Product Engineering & Innovations</option>
            </select>
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <select>
              <option>Jr. Software Engineer</option>
            </select>
          </div>
          <div className="form-group">
            <label>Job Level</label>
            <select>
              <option>Entry Level</option>
            </select>
          </div>
          <div className="form-group">
            <label>Employee Code</label>
            <input type="text" value="0108" readOnly />
          </div>
          <div className="form-group">
            <label>Salutation</label>
            <select>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
            </select>
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" value="Harshit" readOnly />
          </div>
          <div className="form-group">
            <label>Middle Name</label>
            <input type="text" value="" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" value="Choudhary" readOnly />
          </div>
          <div className="form-group">
            <label>Date Of Birth</label>
            <input type="text" value="02-20-2002" readOnly />
          </div>
          <div className="form-group">
            <label>Date Of Joining</label>
            <input type="text" value="03-06-2024" readOnly />
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <div style={{ display: 'flex' }}>
              <input type="text" value="9874221980" readOnly />
              {/* <i className="eye-icon fas fa-eye"></i> */}
            </div>
          </div>
          <div className="form-group">
            <label>Extn No</label>
            <input type="text" value="" />
          </div>
          <div className="form-group">
            <label>Marital Status</label>
            <select>
              <option>Unmarried</option>
              <option>Married</option>
            </select>
          </div>
          <div className="form-group">
            <label>Father Name</label>
            <input type="text" value="" />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="text" value="22" readOnly />
          </div>
          <div className="form-group">
            <label>Home Phone No</label>
            <input type="text" value="" />
          </div>
          <div className="form-group">
            <label>Office Phone</label>
            <input type="text" value="" />
          </div>
          <div className="form-group">
            <label>Official Email</label>
            <div style={{ display: 'flex' }}>
              <input type="text" value="harshit@neftotech.in" readOnly />
              {/* <i className="eye-icon fas fa-eye"></i> */}
            </div>
          </div>
          <div className="form-group">
            <label>Nationality</label>
            <input type="text" value="INDIAN" readOnly />
          </div>
        </div>
      )}
    </div>
  )
}
export default Basicinformation