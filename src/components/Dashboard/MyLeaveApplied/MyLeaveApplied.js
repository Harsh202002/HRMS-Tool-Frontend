import React, { useState, useEffect } from 'react';
import './MyLeaveApplied.css';
import noDataImage from '../../../Assets/no-data-image.jpeg';
import employeeService from '../../../services/employeeService';

const MyLeaveApplied = () => {
  
  const [leaveData, setLeaveData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaveData = async () => {
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
          throw new Error("No leave data found.");
        }
      } catch (err) {
        console.error("Error fetching leave data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!leaveData || leaveData.length === 0) return <p>No leave data available</p>;

  return (
    <div className="myleaveapplied-container">
      <div className="header">
        <h3>My Leave Applied</h3>
      </div>
      <div className="divider-2"></div>

      {leaveData.length === 0 ? (
        <div className="no-data">
          <img src={noDataImage} alt="No Data Available" /> 
          <p>No Data Available</p>
        </div>
      ) : (
        <table className="myleaveapplied-table">
          <thead>
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {leaveData.map((leave, index) => (
              <tr key={index}>
                <td>{leave.leaveType}</td>
                <td>
                  {leave.document ? (
                    <a href={leave.document} target="_blank" rel="noopener noreferrer">
                      View Attachment
                    </a>
                  ) : (
                    "No Attachment"
                  )}
                </td>
                <td>{new Date(leave.leaveFrom).toLocaleDateString()}</td>
                <td>{new Date(leave.leaveTo).toLocaleDateString()}</td>
                <td>{leave.duration} {leave.duration > 1 ? 'days' : 'day'}</td>
                <td>{leave.halfDay ? "Yes" : "No"}</td>
                <td>{leave.reason}</td>
                <td>{leave.status}</td>
                <td>{leave.remarks || "No Remarks"}</td>
                <td>{leave.approvedBy || "Pending"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyLeaveApplied;
