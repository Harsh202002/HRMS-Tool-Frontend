import React, { useState, useEffect, useRef } from 'react';
import employeeService from '../../services/employeeService';
import logo from "../../Assets/netfotechlogo.png";
import profile from "../../Assets/ImageAvtar.jpg";
import "./Navbar.css";

const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isBellOpen, setIsBellOpen] = useState(false);
    const [isQuestionOpen, setIsQuestionOpen] = useState(false);
    const [isPlusOpen, setIsPlusOpen] = useState(false);
    const [employeeData, setEmployeeData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const profileRef = useRef(null);
    const bellRef = useRef(null);
    const questionRef = useRef(null);
    const plusRef = useRef(null);

    useEffect(() => {
        const fetchEmployeeData = async () => {
          try {
        
            const user = JSON.parse(localStorage.getItem("user"));
            console.log("LocalStorage User:", user);
    

            const employeeId = user?.user?.employeeId;
            if (!employeeId) {
              throw new Error("Employee ID is missing. Please log in again.");
            }
    
            const response = await employeeService.fetchEmployeeById(employeeId);
            console.log("Fetched Employee Data:", response);
    
            if (response && response.success && response.employee) {
              setEmployeeData(response.employee);
            } else {
              throw new Error("No employee data found.");
            }
          } catch (err) {
            console.error("Error fetching employee data:", err.message);
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchEmployeeData();
      }, []);
    
    

    const togglePrMenu = () => {
        setIsProfileOpen(!isProfileOpen);
        closeOtherMenus('profile');
    };

    const toggleBellMenu = () => {
        setIsBellOpen(!isBellOpen);
        closeOtherMenus('bell');
    };

    const toggleQuestionMenu = () => {
        setIsQuestionOpen(!isQuestionOpen);
        closeOtherMenus('question');
    };

    const togglePlusMenu = () => {
        setIsPlusOpen(!isPlusOpen);
        closeOtherMenus('plus');
    };

    const closeOtherMenus = (currentMenu) => {
        if (currentMenu !== 'profile') setIsProfileOpen(false);
        if (currentMenu !== 'bell') setIsBellOpen(false);
        if (currentMenu !== 'question') setIsQuestionOpen(false);
        if (currentMenu !== 'plus') setIsPlusOpen(false);
    };

    const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setIsProfileOpen(false);
        }
        if (bellRef.current && !bellRef.current.contains(event.target)) {
            setIsBellOpen(false);
        }
        if (questionRef.current && !questionRef.current.contains(event.target)) {
            setIsQuestionOpen(false);
        }
        if (plusRef.current && !plusRef.current.contains(event.target)) {
            setIsPlusOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : !employeeData ? (
                <p>No data available</p>
            ) : (
                <>
                    <p className="navbar-name">
                        <img src={logo} alt="shrms-pro-logo" className="navbar-logo" />
                        Netfotech
                    </p>
    
                    <div className="navbar-right">
                        <i className="navbar-icon fas fa-calendar-alt"></i>
    
                        <div ref={plusRef} className="navbar-icon-plus-container" onClick={togglePlusMenu}>
                            <i className="navbar-icon fas fa-plus"></i>
                            {isPlusOpen && (
                                <div className="dropdown-content plus-dropdown">
                                    <a href="#">New Item 1</a>
                                    <a href="#">New Item 2</a>
                                    <a href="/">New Item 3</a>
                                </div>
                            )}
                        </div>
    
                        <div ref={bellRef} className="navbar-icon-bell-container" onClick={toggleBellMenu}>
                            <i className="navbar-icon fas fa-bell"></i>
                            <span className="notification-count">0</span>
                            {isBellOpen && (
                                <div className="dropdown-content bell-dropdown">
                                    <a href="#">Notification 1</a>
                                    <a href="#">Notification 2</a>
                                    <a href="#">Notification 3</a>
                                </div>
                            )}
                        </div>
    
                        <div ref={questionRef} className="navbar-icon-question-container" onClick={toggleQuestionMenu}>
                            <i className="navbar-icon fas fa-question-circle"></i>
                            {isQuestionOpen && (
                                <div className="dropdown-content question-dropdown">
                                    <a href="#">Help 1</a>
                                    <a href="#">Help 2</a>
                                    <a href="#">Help 3</a>
                                </div>
                            )}
                        </div>
    
                        <img className="pr-img" src={profile} alt="Profile" />
                        <div ref={profileRef} className="navbar-user">
                            <div className="navbar-user-dropdown">
                                <button className="dropdown-button-N" onClick={togglePrMenu}>
                                    <span>{`${employeeData.firstName || "N/A"} ${employeeData.lastName || "N/A"}`}</span>
                                    <i className="fa-solid fa-circle-chevron-down"></i>
                                </button>
                                {isProfileOpen && (
                                    <div className="dropdown-content">
                                        <a href="#">Profile</a>
                                        <a href="#">Settings</a>
                                        <a href="/">Logout</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
    
};

export default Navbar;
