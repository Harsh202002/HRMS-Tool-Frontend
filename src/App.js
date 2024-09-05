import React from 'react';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile from './components/ESS/userProfileSection.js/profileSection.js';
import Navbar from './components/userNavbar/Navbar';
import Sidebar from './components/userSidebar/Sidebar.js';
import Login from './components/Auth/Login/Login.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Attendance from './components/ESS/Attendance/Attendance.js';
import LeaveList from './components/ESS/Leave List/LeaveList.js/LeaveList.js';
import Myreferrals from './components/ESS/MyReferrals/MyReferrals.js';
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
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboardlayout' element={<DashboardLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
          <Route path='attendance' element={<Attendance/>} />
          <Route path='leavelist' element={<LeaveList/>} />
          <Route path='myreferrals' element={<Myreferrals/>} />
          <Route path='wfhrequest' element={<Wfhrequest/>} />
          <Route path='myrequest' element={<Myrequest/>} />
          <Route path='myassets' element={<Myassets/>} />
          <Route path='myshift' element={<Calendar/>} />
          <Route path='accolades' element={<Accolades/>} />
          <Route path='resignation' element={<Resignation/>} />
          <Route path='salaryslip' element={<SalarySlip/>} />
          <Route path='salarystructure' element={<SalaryStructure/>} />
          <Route path='investmentdeclaration' element={<InvestmentDeclaration/>} />
          <Route path='mytdsdetails' element={<MyTDSDetails/>} />
          <Route path='loanrequest' element={<LoanRequest/>} />
          <Route path='myinterview' element={<MyInterview/>} />
          <Route path='performancereview' element={<PerformanceReview/>} />
        </Route>
      </Routes>
    </Router>
  );
};

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;





// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Profile from './components/ESS/userProfileSection.js/profileSection.js';
// import Navbar from './components/userNavbar/Navbar';
// import Sidebar from './components/userSidebar/Sidebar.js';
// import Login from './components/Auth/Login/Login.js';
// import "./App.css";


// const App = () => {

//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Login/>}/>
//     <div className="dashboard-container">
//       <Navbar/>
//       <Sidebar/>
//         <div className="main-content">
//         {/* <Sidebar/> */}
//         <div><Profile/></div>
//         </div>
//         </div>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
