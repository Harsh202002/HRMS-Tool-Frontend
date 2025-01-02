import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile from './components/ESS/userProfileSection.js/profileSection.js';
import Navbar from './components/userNavbar/Navbar';
import Sidebar from './components/userSidebar/Sidebar.js';
import Login from './components/Auth/Login/Login.js'; // Login page
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
import authService from './services/authService.js';
import "./App.css";
import Workflow from './components/Settings/Work flow Management/Work flow/Workflow.js';
import AccoladesAndRewards from './components/Settings/Accolades & Rewards/Accolades&rewards.js';
import Policy from './components/Settings/Policies/Policy.js';
import TypeOfEmployment from './components/Settings/Employee Setting/TypeOfEmployeement/TypeOfEmployment.js';
import EducationSetting from './components/Settings/Employee Setting/Employee-education-setting/EducationSetting.js';
import RequestReason from './components/Settings/Employee Setting/Request-Reason/RequestReason.js';
import StandardSetting from './components/Settings/Employee Setting/Stanadard-Settings/StandardSetting.js';
import LeavePolicy from './components/Settings/Leave/Leave-Policy/LeavePolicy.js';
import LeavePolicyPeriod from './components/Settings/Leave/Leave-policy-Period/LeavePolicyPeriod.js';
import LeaveApproval from './components/Settings/Leave/Leave-Approval/LeaveApproval.js';
import BackDateProcess from './components/Processes/Attendence/Back Date Process/BackDateProcess.js';
import Userroles from "./components/Settings/User/Userroles.js"
import Generalsetup from './components/Settings/General Setup/Generalsetup.js';
import AttendanceRule from './components/Settings/Attendance Settings/Attendance-Rule/AttendanceRule.js';
import WorkingShift from './components/Settings/Attendance Settings/Working-shift/WorkingShift.js';
import AttendanceApproval from './components/Settings/Attendance Settings/Attendance-Approval/AttendanceApproval.js';
import AddEmployee from './components/Processes/Employee/AddEmployee.js';
import AllocationWfhPolicy from './components/Processes/Attendence/Allocation WFH Policy/AllocationWfhPolicy.js';

const App = () => {
  const [user, setUser] = useState(authService.getCurrentUser()); // Initialize user state

  const handleLoginSuccess = (user) => {
    setUser(user); // Set user after successful login
  }

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        
        {/* Private Routes */}
        <Route
          path="/dashboardlayout"
          element={
            user ? ( // Check if user exists
              <DashboardLayout username={user.username} />
            ) : (
              <Navigate to="/" /> // Redirect to login if not authenticated
            )
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="leavelist" element={<LeaveList />} />
          <Route path="myreferrals" element={<MyReferrals />} />
          <Route path="wfhrequest" element={<Wfhrequest />} />
          <Route path="myrequest" element={<Myrequest />} />
          <Route path="myassets" element={<Myassets />} />
          <Route path="myshift" element={<Calendar />} />
          <Route path="accolades" element={<Accolades />} />
          <Route path="resignation" element={<Resignation />} />
          <Route path="salaryslip" element={<SalarySlip />} />
          <Route path="salarystructure" element={<SalaryStructure />} />
          <Route path="investmentdeclaration" element={<InvestmentDeclaration />} />
          <Route path="mytdsdetails" element={<MyTDSDetails />} />
          <Route path="loanrequest" element={<LoanRequest />} />
          <Route path="myinterview" element={<MyInterview />} />
          <Route path="performancereview" element={<PerformanceReview />} />
          <Route path="workflow" element={<Workflow />} />
          <Route path="Accolade&rewards" element={<AccoladesAndRewards />} />
          <Route path="policy" element={<Policy />} />
          <Route path="type-of-employment" element={<TypeOfEmployment />} />
          <Route path="education-setting" element={<EducationSetting />} />
          <Route path="request-reason" element={<RequestReason />} />
          <Route path="standards-setting" element={<StandardSetting />} />
          <Route path="leave-policy" element={<LeavePolicy />} />
          <Route path="leave-policy-period" element={<LeavePolicyPeriod />} />
          <Route path="leave-approval" element={<LeaveApproval />} />
          <Route path="userroles" element={< Userroles/>} />
          <Route path="generalsetup" element={<Generalsetup />} />
          <Route path="backdateprocess" element={<BackDateProcess />} />
          <Route path="attendance-rule" element={<AttendanceRule />} />
          <Route path="working-shift" element={<WorkingShift />} />
          <Route path="attendance-approval" element={<AttendanceApproval />} />
          <Route path="addemployee" element={<AddEmployee/>} />
          <Route path="allocationwfhpolicy" element={<AllocationWfhPolicy/>} />


        </Route>
      </Routes>
    </Router>
  );
};

const DashboardLayout = ({ username }) => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar username={username} /> {/* Pass username to Sidebar */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;