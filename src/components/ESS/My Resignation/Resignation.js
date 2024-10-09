import React, { useState } from 'react';
import './Resignation.css'; // Use a separate CSS file for Resignation
import ResignationSidebar from './Resignationsidebar/ResignationSidebar'; // Import the sidebar component

const Resignation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dummy data
  const resignationData = [
    {
      id: 1,
      action: 'View',
      name: 'John Doe',
      location: 'New York',
      department: 'Finance',
      jobTitle: 'Financial Analyst',
      resignationDate: '2024-08-15',
      approveLWD: '2024-09-15',
      status: 'Pending'
    },
    {
      id: 2,
      action: 'View',
      name: 'Jane Smith',
      location: 'Los Angeles',
      department: 'HR',
      jobTitle: 'HR Manager',
      resignationDate: '2024-08-20',
      approveLWD: '2024-09-20',
      status: 'Approved'
    },
    {
      id: 3,
      action: 'View',
      name: 'Michael Brown',
      location: 'Chicago',
      department: 'IT',
      jobTitle: 'Software Engineer',
      resignationDate: '2024-08-22',
      approveLWD: '2024-09-22',
      status: 'Rejected'
    },
  ];

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="resignation-main-container">
      <div className="resignation-header">
        <button className="back-button">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <h1>My Resignation</h1>
        <button className="resignation-add-button" onClick={handleOpenSidebar}>
          <i className="fa fa-plus"></i>
        </button>
      </div>

      <div className="resignation-table-container">
        <table className="resignation-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Name</th>
              <th>Location</th>
              <th>Department</th>
              <th>Job Title</th>
              <th>Resignation Date</th>
              <th>Approve LWD</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {resignationData.length > 0 ? (
              resignationData.map((item) => (
                <tr key={item.id}>
                  <td><button>View</button></td>
                  <td>{item.name}</td>
                  <td>{item.location}</td>
                  <td>{item.department}</td>
                  <td>{item.jobTitle}</td>
                  <td>{item.resignationDate}</td>
                  <td>{item.approveLWD}</td>
                  <td>{item.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="resignation-no-records">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isSidebarOpen && (
        <ResignationSidebar onClose={handleCloseSidebar} />
      )}
    </div>
  );
};

export default Resignation;
