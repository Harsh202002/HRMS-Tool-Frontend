import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile from './components/ESS/userProfileSection.js/profileSection.js';
import Navbar from './components/userNavbar/Navbar';
import Sidebar from './components/userSidebar/Sidebar.js';
import Login from './components/Auth/Employee/Login/Login.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Attendance from './components/ESS/Attendance/Attendance.js';
import LeaveList from './components/ESS/Leave List/LeaveList.js/LeaveList.js';
import MyReferrals from './components/ESS/MyReferrals/MyReferrals.js';
import Wfhrequest from './components/ESS/WFH Request/WFHRequest.js';
import Myrequest from './components/ESS/MyRequest/MyRequest.js';
import Myassets from './components/ESS/My Assets/Myassets.js';
import Calendar from './components/ESS/My Shift/MyShift.js';
import Accolades from './components/ESS/My Accolades/Accolades.js';
import Resignation from './components/ESS/My Resignation/Resignation.js';
import SalarySlip from './components/ESS/Salary Slip/SalarySlip.js';
import SalaryStructure from './components/ESS/My Salary Structure/SalaryStructure.js';
import InvestmentDeclaration from './components/ESS/My Investment Declaration/InvestmentDeclaration.js';
import MyTDSDetails from './components/ESS/Tax Computation/MyTDSDetails.js';
import LoanRequest from './components/ESS/Loan Request/LoanRequest.js';
import MyInterview from './components/ESS/My Interview/MyInterview.js';
import PerformanceReview from './components/ESS/PerformanceReview/PerformanceReview.js';
import AdminDashboard from './components/Auth/Admin/AdminDashboard/AdminDashboard.js';
import Register from './components/Auth/Admin/AdminRegister/Register';
import AdminLogin from './components/Auth/Admin/AdminLogin/AdminLogin.js';
import EmployeeRegister from './components/Auth/Admin/EmployeeRegister/EmployeeRegister.js';
import "./App.css";

const App = () => {
  const [employeeCode, setEmployeeCode] = useState(null);

  useEffect(() => {
    // Fetch employeeCode from localStorage
    const loggedInEmployeeCode = localStorage.getItem('employeeCode');
    if (loggedInEmployeeCode) {
      setEmployeeCode(loggedInEmployeeCode);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/employeeregister" element={<EmployeeRegister />} />
        <Route path="/employee/register/:adminId" element={<EmployeeRegister />} />
        <Route path="admindashboard" element={<AdminDashboard />} />
        <Route path="admindashboard/:adminId" element={<AdminDashboard />} />

        {/* Private Routes */}
        <Route
          path='/dashboardlayout'
          element={
            employeeCode ? ( // Check if employeeCode exists in localStorage
              <DashboardLayout employeeCode={employeeCode} />
            ) : (
              <Navigate to="/" /> // Redirect to login if not authenticated
            )
          }
        >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path="dashboard/:employeeCode" element={<Dashboard />} />
          <Route path='profile/:employeeCode' element={<Profile />} />
          <Route path='attendance/:employeeCode' element={<Attendance />} />
          <Route path='leavelist/:employeeCode' element={<LeaveList />} />
          <Route path='myreferrals/:employeeCode' element={<MyReferrals />} />
          <Route path='wfhrequest/:employeeCode' element={<Wfhrequest />} />
          <Route path='myrequest/:employeeCode' element={<Myrequest />} />
          <Route path='myassets/:employeeCode' element={<Myassets />} />
          <Route path='myshift/:employeeCode' element={<Calendar />} />
          <Route path='accolades/:employeeCode' element={<Accolades />} />
          <Route path='resignation/:employeeCode' element={<Resignation />} />
          <Route path='salaryslip/:employeeCode' element={<SalarySlip />} />
          <Route path='salarystructure/:employeeCode' element={<SalaryStructure />} />
          <Route path='investmentdeclaration/:employeeCode' element={<InvestmentDeclaration />} />
          <Route path='mytdsdetails/:employeeCode' element={<MyTDSDetails />} />
          <Route path='loanrequest/:employeeCode' element={<LoanRequest />} />
          <Route path='myinterview/:employeeCode' element={<MyInterview />} />
          <Route path='performancereview/:employeeCode' element={<PerformanceReview />} />
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="admindashboard/:adminId" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

const DashboardLayout = ({ employeeCode }) => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar employeeCode={employeeCode} /> {/* Pass employeeCode to Sidebar */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
