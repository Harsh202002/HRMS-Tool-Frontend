import React, { useState, useEffect } from "react";
import "./WFHRequest.css";
import Pagination from "../Attendance/Pagination/Pagination";

const Wfhrequest = () => {
    const [WfhrequestData, setWfhrequestData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // State for filtered data
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [keyword, setKeyword] = useState(""); // State for keyword input
    const [fromDate, setFromDate] = useState(""); // State for from date input
    const [toDate, setToDate] = useState(""); // State for to date input

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const data = [
                {
                    id: 1,
                    StartDate: "2024-10-12",
                    EndDate: "2024-12-17",
                    Reason: "personal work",
                    Attachment: "none",
                    Status: "Pending",
                    ActionBy: "HR",
                    ReasonForDecline: "No pending leaves",
                },
                {
                    id: 2,
                    StartDate: "2024-3-7",
                    EndDate: "2024-4-8",
                    Reason: "Hard work",
                    Attachment: "none",
                    Status: "Pending",
                    ActionBy: "HR",
                    ReasonForDecline: "No pending leaves",
                },
                {
                    id: 3,
                    StartDate: "2024-16-5",
                    EndDate: "2024-4-6",
                    Reason: "personal work",
                    Attachment: "none",
                    Status: "Pending",
                    ActionBy: "HR",
                    ReasonForDecline: "No pending leaves",
                },
                {
                    id: 4,
                    StartDate: "2024-6-2",
                    EndDate: "2024-3-13",
                    Reason: "personal work",
                    Attachment: "none",
                    Status: "Pending",
                    ActionBy: "HR",
                    ReasonForDecline: "No pending leaves",
                },
                // Add more data as needed
            ];
            setWfhrequestData(data);
            setFilteredData(data); // Initialize filtered data
        };

        fetchData();
    }, []);

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
    };

    const handleToDateChange = (e) => {
        setToDate(e.target.value);
    };

    const handleSearch = () => {
        let filtered = WfhrequestData;

        if (keyword) {
            filtered = filtered.filter((entry) =>
                entry.Reason.toLowerCase().includes(keyword.toLowerCase())
            );
        }

        if (fromDate) {
            filtered = filtered.filter((entry) => new Date(entry.StartDate) >= new Date(fromDate));
        }

        if (toDate) {
            filtered = filtered.filter((entry) => new Date(entry.EndDate) <= new Date(toDate));
        }

        setFilteredData(filtered);
        setCurrentPage(1); // Reset to the first page
    };

    const handleReset = () => {
        setKeyword("");
        setFromDate("");
        setToDate("");
        setFilteredData(WfhrequestData); // Reset to original data
        setCurrentPage(1); // Reset to the first page
    };

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

    return (
        <div className="Wfhrequest-list-container">
            <div className="Wfhrequest-list-header">
                <div className="Wfhrequest-list-heading">
                    <button className="back-button">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <h2>WFH Request</h2>
                </div>
                <button className="filter-button" onClick={toggleFilterVisibility}>
                    <i className="fa-solid fa-filter"></i>
                </button>
            </div>

            {isFilterVisible && (
                <div className="wfh-filter-section">
                    <h3>Basic Search</h3>
                    <div className="wfh-filter-fields">
                        <input
                            type="text"
                            placeholder="Keyword"
                            value={keyword}
                            onChange={handleKeywordChange}
                        />
                        <input
                            type="date"
                            placeholder="From Date"
                            value={fromDate}
                            onChange={handleFromDateChange}
                        />
                        <input
                            type="date"
                            placeholder="To Date"
                            value={toDate}
                            onChange={handleToDateChange}
                        />
                    </div>
                    <div className="wfh-filter-actions">
                        <button className="search-button" onClick={handleSearch}>Search</button>
                        <button className="reset-button" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            )}

            <div className="Wfhrequest-list-table-container">
                <table className="Wfhrequest-list-table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>View</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Reason</th>
                            <th>Attachment</th>
                            <th>Status</th>
                            <th>Action By</th>
                            <th>Reason For Decline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.length > 0 ? (
                            currentEntries.map((Wfhrequest) => (
                                <tr key={Wfhrequest.id}>
                                    <td>
                                        <button>Edit</button>
                                    </td>
                                    <td>
                                        <button>View</button>
                                    </td>
                                    <td>{Wfhrequest.StartDate}</td>
                                    <td>{Wfhrequest.EndDate}</td>
                                    <td>{Wfhrequest.Reason}</td>
                                    <td>{Wfhrequest.Attachment}</td>
                                    <td>{Wfhrequest.Status}</td>
                                    <td>{Wfhrequest.ActionBy}</td>
                                    <td>{Wfhrequest.ReasonForDecline}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="no-records">
                                    No records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination
                totalEntries={filteredData.length}
                entriesPerPage={entriesPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onEntriesChange={setEntriesPerPage}
            />
        </div>
    );
};

export default Wfhrequest;
