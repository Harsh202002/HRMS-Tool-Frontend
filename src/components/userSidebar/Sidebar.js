import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ role }) => {
    const navigate = useNavigate();
    const [isEssOpen, setEssOpen] = useState(false);
    const [isDssOpen, setDssOpen] = useState(false);
    const [isSssOpen, setSssOpen] = useState(false);
    // Toggle the Dashboard menu
    const toggleDssMenu = () => {
        setDssOpen(!isDssOpen);  // Toggle Dashboard menu
        if (!isDssOpen) {
            setEssOpen(false);   // Close ESS if it's open
        }
    };

    // Toggle the ESS menu
    const toggleEssMenu = () => {
        setEssOpen(!isEssOpen);  // Toggle ESS menu
        if (!isEssOpen) {
            setDssOpen(false);   // Close Dashboard if it's open
        }
    };

    const toggleSssMenu = () => {
        if (isEssOpen && isDssOpen) {
            setEssOpen(false); // Close ESS menu
            setDssOpen(false); // Close DSS menu
            setSssOpen(true);  // Open SSS menu
        } else {
            setSssOpen((prev) => !prev); // Toggle SSS menu if ESS and DSS aren't both open
        }
    };
    

    // Close both dropdowns when the sidebar is collapsed
    const closeAllMenus = () => {
        setEssOpen(false);
        setDssOpen(false);
    };

    return (
        <nav className="sidebar" onMouseLeave={closeAllMenus}>
            <ul>
                <li>
                    <button onClick={toggleDssMenu} className='dropdown-button'>
                        <i className="fa-solid fa-gauge"></i>
                        <span className='sidebar-title'>Dashboard</span>
                        <i className={`fa-solid fa-chevron-right arrow ${isDssOpen ? 'rotate' : ''}`}></i>
                    </button>
                </li>
                {isDssOpen && (
                    <ul className="dropdown-menu">
                        <li><button onClick={() => navigate(`dashboard`)}>Dashboard</button></li>
                    </ul>
                )}
                <li>
                    <button onClick={toggleEssMenu} className="dropdown-button">
                        <i className="fa-solid fa-users"></i>
                        <span className='sidebar-title'>Ess</span>
                        <i className={`fa-solid fa-chevron-right arrow ${isEssOpen ? 'rotate' : ''}`}></i>
                    </button>
                    {isEssOpen && (
                        <ul className="dropdown-menu">
                            <li><button onClick={() => navigate(`/dashboardlayout/profile`)}>My Profile</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/myreferrals`)}>My Referrals</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/attendance`)}>My Attendance</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/leavelist`)}>My Leave</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/wfhrequest`)}>WFH Request</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/myrequest`)}>My Requests</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/myassets`)}>My Assets</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/myshift`)}>My Shift</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/accolades`)}>My Accolades</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/resignation`)}>My Resignation</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/salaryslip`)}>Salary Slip</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/salarystructure`)}>My Salary Structure</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/investmentdeclaration`)}>My Investment Declaration</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/mytdsdetails`)}>Tax Computation</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/loanrequest`)}>My Advance/Loan Request</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/myinterview`)}>My Interviews</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/performancereview`)}>My Performance Review</button></li>
                        </ul>
                    )}
                </li>
                <li>
                    <button onClick={toggleSssMenu} className='dropdown-button'>
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                        <span className='sidebar-title'>Settings</span>
                        <i className={`fa-solid fa-chevron-right arrow ${isSssOpen ? 'rotate' : ''}`}></i>
                    </button>
                {isSssOpen && (
                    <ul className="dropdown-menu">
                        <li><button onClick={() => navigate(`workflow`)}>work Flow</button></li>
                        <li><button onClick={() => navigate(`generalsetup`)}>General</button></li>
                    </ul>
                )}
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
