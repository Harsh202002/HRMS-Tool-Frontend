import React, { useState, useEffect } from "react";
import "./Myassets.css";
import Pagination from "../Attendance/Pagination/Pagination";

const Myassets = () => {
    const [myassetsData, setmyassetsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  useEffect(() => {
    const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = [
            {
                id: 1,
                Viewdetails: "Aniket",
                Assetname: "Aniket@gmail.com",
                Manufacturename: "2024-08-01",
                Serialnumber: "Junior Software Engineer",
                Assigneddate: "intern",
                Remarks: "Pending",
                Downloaddocument: "2024-08-01",
                Status: "Approved",
                Accept: 3000,
                decline: "Pending",
            },
        ];
        setmyassetsData(data);
    };

    fetchData();
}, []);


    // Calculate indices for current page data
   const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = myassetsData.slice(indexOfFirstEntry, indexOfLastEntry);
    // Function to handle page change

    return (
        <div className="rmyassetslist-container">
            <div className="rmyassetslist-header">
                <div className="rmyassetslist-heading">
                    <button className="back-button">←</button>
                    <h2>My Assets</h2>
                </div>
            </div>
            <div className="rmyassetslist-table-container">
                <table className="rmyassetslist-table">
                    <thead>
                        <tr>
                            <th>View Details</th>
                            <th>Asset Name</th>
                            <th>Manufacture Name</th>
                            <th>Serial Number</th>
                            <th>Assigned Date</th>
                            <th>Remarks</th>
                            <th>Download Document</th>
                            <th>Status</th>
                            <th>Accept</th>
                            <th>Decline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.length > 0 ? (
                            currentEntries.map((myassets) => (
                                <tr key={myassets.id}>
                                    <td>{myassets.Viewdetails}</td>
                                    <td>{myassets.Assetname}</td>
                                    <td>{myassets.Manufacturename}</td>
                                    <td>{myassets.Serialnumber}</td>
                                    <td>{myassets.Assigneddate}</td>
                                    <td>{myassets.Remarks}</td>
                                    <td>{myassets.Downloaddocument}</td>
                                    <td>{myassets.Status}</td>
                                    <td>{myassets.Accept}</td>
                                    <td>{myassets.decline}</td>
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
            <Pagination
                    totalEntries={myassetsData.length}
                    entriesPerPage={entriesPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onEntriesChange={setEntriesPerPage}
                />

        </div>
    );
};


export default Myassets;
