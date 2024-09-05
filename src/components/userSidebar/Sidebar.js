import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css"
const Sidebar = () => {
    const navigate = useNavigate();
    const [isEssOpen, setEssOpen] = useState(false);
    const [isDssOpen, setDssOpen] = useState(false);
    const toggleDssMenu = () => {
      setDssOpen(!isDssOpen);
    };
    const toggleEssMenu = () => {
        setEssOpen(!isEssOpen);
      };

    return(
        <nav className="sidebar">
        <ul>
          <li><button onClick={toggleDssMenu} className='dropdown-button'><i class="fa-solid fa-gauge"></i><span className='sidebar-tittle'>Dashboard</span></button></li>
          {isDssOpen && (
              <ul className="dropdown-menu">
               <li><button onClick={() => navigate('/dashboardlayout/dashboard')}>Dashboard</button></li>
              </ul>
            )}
          <li>
            <button onClick={toggleEssMenu} className="dropdown-button"><i class="fa-solid fa-users"></i><span className='sidebar-tittle'>Ess</span></button>
            {isEssOpen && (
              <ul className="dropdown-menu">
               <li><button onClick={() => navigate('/dashboardlayout/profile')}>My Profile</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/myreferrals')}>My Referrals</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/attendance')}>My Attendence</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/leavelist')}>My Leave</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/wfhrequest')}>WFH Request</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/myrequest')}>My Requests</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/myassets')}>My Assets</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/myshift')}>My Shift</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/accolades')}>My Accolades</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/resignation')}>My Resignation</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/salaryslip')}>Salary Slip</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/salarystructure')}>My Salary Structure</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/investmentdeclaration')}>My Investment Declaration</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/mytdsdetails')}>Tax Computation</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/loanrequest')}>My Advance/Loan Request</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/myinterview')}>My Interviews</button></li>
               <li><button onClick={() => navigate('/dashboardlayout/performancereview')}>My Performance Review</button></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    )
}
export default Sidebar