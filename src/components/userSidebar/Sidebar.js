import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ role }) => {
    const navigate = useNavigate();
    const [isEssOpen, setEssOpen] = useState(false);
    const [isDssOpen, setDssOpen] = useState(false);
    const [isSssOpen, setSssOpen] = useState(false);
    const [isEmployeeSettingOpen, setIsEmployeeSettingOpen] = useState(false);
    const [isLeaveOpen, setIsLeaveOpen] = useState(false); // New state for Leave menu
    const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);

    // Toggle the Dashboard menu
    const toggleDssMenu = () => {
        setDssOpen(!isDssOpen);
        if (!isDssOpen) {
            setEssOpen(false);
        }
    };

    // Toggle the ESS menu
    const toggleEssMenu = () => {
        setEssOpen(!isEssOpen);
        if (!isEssOpen) {
            setDssOpen(false);
        }
    };

    const toggleSssMenu = () => {
        if (isEssOpen && isDssOpen) {
            setEssOpen(false);
            setDssOpen(false);
            setSssOpen(true);
        } else {
            setSssOpen((prev) => !prev);
        }
    };

    const toggleEmployeeSettingMenu = () => {
        setIsEmployeeSettingOpen(!isEmployeeSettingOpen);
    };

    // New function to toggle Leave menu
    const toggleLeaveMenu = () => {
        setIsLeaveOpen(!isLeaveOpen);
    };

    const toggleAttendanceMenu = () => {
        setIsAttendanceOpen(!isAttendanceOpen);
    };

    // Close all menus when the sidebar is collapsed
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
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                        <span className='sidebar-title'>Settings</span>
                        <i className={`fa-solid fa-chevron-right arrow ${isSssOpen ? 'rotate' : ''}`}></i>
                    </button>

                    {isSssOpen && (
                        <ul className="dropdown-menu">
                            <li><button onClick={() => navigate(`/dashboardlayout/workflow`)}>Work Flow</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/Accolade&rewards`)}>Accolades & Rewards</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/policy`)}>Policies</button></li>
                            <li><button onClick={() => navigate(`generalsetup`)}>General</button></li>
                            <li><button onClick={() => navigate(`userroles`)}>User/Roles</button></li>
                            <li>
                                <button onClick={toggleEmployeeSettingMenu} className='dropdown-button'>
                                    <span>Employee Setting</span>
                                    <i className={`fa-solid fa-chevron-right arrow ${isEmployeeSettingOpen ? 'rotate' : ''}`}></i>
                                </button>
                                {isEmployeeSettingOpen && (
                                    <ul className="dropdown-submenu">
                                        <li><button onClick={() => navigate(`/dashboardlayout/type-of-employment`)}>Type of Employment</button></li>
                                        <li><button onClick={() => navigate(`/dashboardlayout/education-setting`)}>Education Setting</button></li>
                                        <li><button onClick={() => navigate(`/dashboardlayout/request-reason`)}>Request Reason</button></li>
                                        <li><button onClick={() => navigate(`/dashboardlayout/standards-setting`)}>Standards Setting</button></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button onClick={toggleLeaveMenu} className='dropdown-button'>
                                    <span>Leave</span>
                                    <i className={`fa-solid fa-chevron-right arrow ${isLeaveOpen ? 'rotate' : ''}`}></i>
                                </button>
                                {isLeaveOpen && (
                                    <ul className="dropdown-submenu">
                                        <li><button onClick={() => navigate(`/dashboardlayout/leave-policy`)}>Leave Policy</button></li>
                                        <li><button onClick={() => navigate(`/dashboardlayout/leave-policy-period`)}>Leave Policy Period</button></li>
                                        <li><button onClick={() => navigate(`/dashboardlayout/leave-approval`)}>Leave Approval</button></li>
                                    </ul>
                                )}
                            </li>

                             {/* Attendance Setting */}
                             <li>
                                 <button onClick={toggleAttendanceMenu} className="dropdown-button">
                                 <span>Attendance Setting</span>
                                 <i className={`fa-solid fa-chevron-right arrow ${isAttendanceOpen ? 'rotate' : ''}`}></i>
                             </button>
                                 {isAttendanceOpen && (
                                 <ul className="dropdown-submenu">
                                 <li><button onClick={() => navigate(`/dashboardlayout/attendance-rule`)}>Attendance Rule</button></li>
                                 <li><button onClick={() => navigate(`/dashboardlayout/working-shift`)}>Working Shift</button></li>
                                 <li><button onClick={() => navigate(`/dashboardlayout/attendance-approval`)}>Attendance Approval</button></li>
                             </ul>
                     )}
                             </li>
                        </ul>
                    )}

                {isSssOpen && (
                    <ul className="dropdown-menu">
                        <li><button onClick={() => navigate(`workflow`)}>work Flow</button></li>
                        <li><button onClick={() => navigate(`generalsetup`)}>General</button></li>
                        <li><button onClick={() => navigate(`userroles`)}>User/Roles</button></li>
                        <li><button onClick={() => navigate(`backdateprocess`)}>BackDateProcess</button></li>

                    </ul>
                )}

                    
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
