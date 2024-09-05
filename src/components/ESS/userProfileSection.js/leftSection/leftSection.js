import React from "react";
import "./leftSection.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import profile from "../../../../Assets/ImageAvtar.jpg"
const Leftsection = () => {
    return(
        <div className="left-section">
        <div className="left-panel-h">
          <div className="profile-header">
            <div><img className="profile-pic" src={profile} alt="Profile" /></div>
            <h2>Mr. Harshit Choudhary</h2>
            <p>Jr. Software Engineer</p>
            <div className="profile-completeness">
              <p><i className="profile-completeness-icon fas fa-check" ></i>Profile Completeness</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '41%' }}></div>
              </div>
              <span className='progress-number'>41%</span>
            </div>
          </div>
        </div>
        <div className="left-panel">
          <div className="info-section">
            <div className="info-box">
              <p className="title">Joining Date</p>
              <p>06 Mar 2024</p>
              <p className="subtitle">(0 Year 4 Months 30 Days)</p>
            </div>
            <div className="info-box">
              <p className="title">Basic Information</p>
              <p><i className="side-icon fas fa-hourglass-1" ></i>Full Time</p>
              <p><i className="side-icon fas fa-user-group" ></i>Product Engineering & Innovations</p>
            </div>
            <div className="info-box">
              <p className="title">Company</p>
              <p>Nefotech Solutions</p>
            </div>
            <div className="info-box">
              <p className="title">Location</p>
              <p>Kolkata</p>
            </div>
          </div>
        </div>
        <div className='left-panel-l'>
          <div className="info-box">
            <p className="title">Reporting Manager</p>
            <img className='left-img-icon' src={profile} alt="Manager" />
            <p>Rajdip Banerjee</p>
            <p className="contact"><i className="side-icon fas fa-phone" ></i>9831072104</p>
          </div>
          <div className="info-box">
            <p className="title">Functional Manager</p>
            <img className='left-img-icon' src={profile} alt="Manager" />
            <p>Anyone</p>
            <p className="contact"><i className="side-icon fas fa-phone" ></i>9831072104</p>
            <p className="title">Reporting HR</p>
            <img className='left-img-icon' src={profile} alt="HR" />
            <p>Nandini Choudhary</p>
            <p className="contact"><i className="side-icon fas fa-phone" ></i>7003586596</p>
          </div>
          <div className="info-box">
            <p className="title">Direct Reportees</p>
          </div>
        </div>
      </div>
    )
}
export default Leftsection