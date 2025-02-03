import React, { useState, useEffect } from "react";
import "./LeaveList.css";
import Pagination from "../../Attendance/Pagination/Pagination";
import Leavesidebarform from "./Leavesidebarform/leaveSidebarForm";
import employeeService from "../../../../services/employeeService";

const LeaveList = () => {
    const [leaveData, setLeaveData] = useState([]);
    const [activeTab, setActiveTab] = useState("myLeave"); // State to track the active tab
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page
     const [entriesPerPage, setEntriesPerPage] = useState(5); // State to define items per page
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.user) throw new Error("User data not found");
  
        const userId = storedUser.user.id;
        if (!userId) throw new Error("User ID is missing.");
  
       
        const response = await employeeService.fetchDataById(userId);
  
        console.log("Full Response Object:", response);  
  
        
        if (response && Array.isArray(response.leaves)) {
            setLeaveData(response.leaves);
        } else {
          throw new Error("No skill data found.");
        }
      } catch (err) {
        console.error("Error fetching skill data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchSkillData();
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!leaveData || leaveData.length === 0) return <p>No education details available</p>;

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1); 
    };

    
    const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = leaveData.slice(indexOfFirstEntry, indexOfLastEntry);


    return (
        <div className="leave-list-container">
            <div className="leave-list-header">
                <div className="leave-list-heading">
                    <button className="back-button">←</button>

                    <h2>{activeTab === "myLeave" ? "Leave List" : "Leave Credit List"}</h2>
                </div>
                <div className="leave-right-btn">
                <button className="filter-button">🔍</button>
                <button className="leave-add-button" onClick={handleOpenSidebar}><i className="fa fa-plus"></i></button>
                </div>
            </div>
            
            <div className="leave-list-tabs">
                <div
                    className={`tab ${activeTab === "myLeave" ? "active" : ""}`}
                    onClick={() => handleTabClick("myLeave")}
                >
                    My Leave
                </div>
                <div
                    className={`tab ${activeTab === "leaveCreditRequest" ? "active" : ""}`}
                    onClick={() => handleTabClick("leaveCreditRequest")}
                >
                    Leave Credit Request
                </div>
            </div>
            {activeTab === "myLeave" ? (
                <div>
                <div className="leave-list-table-container">
                    <div>
                    <table className="leave-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>View</th>
                                <th>Leave Type</th>
                                <th>Attachment</th>
                                <th>Leave From</th>
                                <th>Leave To</th>
                                <th>Days</th>
                                <th>Half Day</th>
                                <th>Reason for Leave</th>
                                <th>Leave Status</th>
                                <th>Remarks</th>
                                <th>Action By</th>
                                <th>Cancel Leave</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.length > 0 ? (
                                currentEntries.map((leave) => (
                                    <tr key={leave.id}>
                                        <td>
                                            <button>Edit</button>
                                        </td>
                                        <td>
                                            <button>View</button>
                                        </td>
                                        <td>{leave.leaveType}</td>
                                        <td>{leave.document}</td>
                                        <td>{leave.leaveFrom}</td>
                                        <td>{leave.leaveTo}</td>
                                        <td>{leave.duration}</td>
                                        <td>{leave.halfDay}</td>
                                        <td>{leave.reason}</td>
                                        <td>{leave.status}</td>
                                        <td>{leave.remarks}</td>
                                        <td>{leave.approvedBy}</td>
                                        <td>
                                            {leave.cancelLeave === "Yes" && (
                                                <button>Cancel</button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="13" className="no-records">
                                        No records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                   
                    </div>
                    {isSidebarOpen && (
        <Leavesidebarform onClose={handleCloseSidebar} />
      )}
                </div>
                <Pagination
                        totalEntries={leaveData.length}
                        entriesPerPage={entriesPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        onEntriesChange={setEntriesPerPage}
                    />
                </div>
            ) : (
                <div className="leave-list-table-container">
                    <table className="leave-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>View</th>
                                <th>Leave Type</th>
                                <th>Leave From</th>
                                <th>Leave To</th>
                                <th>Days</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Your leave credit request data rendering here */}
                            <tr>
                                <td colSpan="9" className="no-records">
                                    No records found
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};


export default LeaveList;
