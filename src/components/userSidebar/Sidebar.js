import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ employeeCode }) => {
    const navigate = useNavigate();
    const [isEssOpen, setEssOpen] = useState(false);
    const [isDssOpen, setDssOpen] = useState(false);

    const toggleDssMenu = () => {
        setDssOpen(!isDssOpen);
    };

    const toggleEssMenu = () => {
        setEssOpen(!isEssOpen);
    };

    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <button onClick={toggleDssMenu} className='dropdown-button'>
                        <i className="fa-solid fa-gauge"></i>
                        <span className='sidebar-title'>Dashboard</span>
                    </button>
                </li>
                {isDssOpen && (
                    <ul className="dropdown-menu">
                        <li><button onClick={() => navigate(`dashboard/${employeeCode}`)}>Dashboard</button></li>
                    </ul>
                )}
                <li>
                    <button onClick={toggleEssMenu} className="dropdown-button">
                        <i className="fa-solid fa-users"></i>
                        <span className='sidebar-title'>Ess</span>
                    </button>
                    {isEssOpen && (
                        <ul className="dropdown-menu">
                            <li><button onClick={() => navigate(`/dashboardlayout/profile/${employeeCode}`)}>My Profile</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/myreferrals/${employeeCode}`)}>My Referrals</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/attendance/${employeeCode}`)}>My Attendance</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/leavelist/${employeeCode}`)}>My Leave</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/wfhrequest/${employeeCode}`)}>WFH Request</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/myrequest/${employeeCode}`)}>My Requests</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/myassets/${employeeCode}`)}>My Assets</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/myshift/${employeeCode}`)}>My Shift</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/accolades/${employeeCode}`)}>My Accolades</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/resignation/${employeeCode}`)}>My Resignation</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/salaryslip/${employeeCode}`)}>Salary Slip</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/salarystructure/${employeeCode}`)}>My Salary Structure</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/investmentdeclaration/${employeeCode}`)}>My Investment Declaration</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/mytdsdetails/${employeeCode}`)}>Tax Computation</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/loanrequest/${employeeCode}`)}>My Advance/Loan Request</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/myinterview/${employeeCode}`)}>My Interviews</button></li>
                            <li><button onClick={() => navigate(`/dashboardlayout/performancereview/${employeeCode}`)}>My Performance Review</button></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
