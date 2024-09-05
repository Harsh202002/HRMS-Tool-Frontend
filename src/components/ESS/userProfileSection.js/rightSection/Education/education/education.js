import React, { useState } from "react";
import "./education.css";

const Education = ({ isVisible, onToggle, onOpenSidebar }) => {
  return (
    <div>
      <div className="education-btn-holder" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="D-profile-h3">Education</h3>
        <div>
          <button onClick={onToggle} className="toggle-button-Ed">
            {isVisible ? (
              <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i>
            ) : (
              <i className="fa fa-circle-chevron-down"></i>
            )}
          </button>
         
        </div>
      </div>
      {isVisible && (
        <div>
        <table className="education-table">
          <thead>
            <tr>
              <th>Download</th>
              <th>Standard</th>
              <th>Course</th>
              <th>Board/University</th>
              <th>College/Institution</th>
              <th>Subjects</th>
              <th>Passing Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button>Download</button>
              </td>
              <td>Secondary</td>
              <td>General</td>
              <td>CBSE</td>
              <td>Bholananda National Vidyalaya</td>
              <td>PCM</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>
                <button>Download</button>
              </td>
              <td>Higher Secondary</td>
              <td>Science</td>
              <td>WBCHSE</td>
              <td>Titagarh Anglo Vernacular High</td>
              <td>Science</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>
                <button>Download</button>
              </td>
              <td>Graduation</td>
              <td>B Tech</td>
              <td>MAKAUT</td>
              <td>Guru Nanak Institute of Technology</td>
              <td>IT</td>
              <td>2024</td>
            </tr>
          </tbody>
        </table>
        </div>
      )}
      <div className="rsidebar-btn-plus"><button onClick={onOpenSidebar} className="sidebar-button-Ed">
            <i className="fa fa-plus"></i>
          </button>
      </div>
    </div>
   
  );
};

export default Education;
