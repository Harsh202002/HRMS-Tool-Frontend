import React, { useState, useEffect } from "react";
import "./BackDateProcess.css";
import Pagination from "../../../ESS/Attendance/Pagination/Pagination";
import BDPSidebarForm from "./Back_Data_Sidebar_Form/BDPSidebarForm";

const BackDateProcess = () => {
    const [BackdateprocessData, setbackdateprocessData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // State for filtered data
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [keyword, setKeyword] = useState(""); // State for keyword input
    const [fromDate, setFromDate] = useState(""); // State for from date input
    const [toDate, setToDate] = useState(""); // State for to date input
    const [openSidebar, setOpenSidebar]= useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const data = [
                {
                    id: 1,
                    Company: "Netfotech Solutions",
                    Location: "Kolkata",
                    Action_date: "12-10-2024",
                    From_date: "12-10-2024",
                    To_date: "12-10-2024",
                    Back_date_process: "HR",
                    Status: "Successful",
                },
                // Add more data as needed
            ];
            setbackdateprocessData(data);
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
    const handleOpenSidebar = () => {
        setOpenSidebar(true);
    }

    const handleCloseSidebar = () => {
        setOpenSidebar(false);
    }

    const handleSearch = () => {
        let filtered = BackdateprocessData;

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
        setFilteredData(BackdateprocessData); // Reset to original data
        setCurrentPage(1); // Reset to the first page
    };

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

    return (
        <div className="backdateprocess-list-container">
            <div className="backdateprocess-list-header">
                <div className="backdateprocess-list-heading">
                    <button className="back-button">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <h2>Back Date Process</h2>
                </div>
                <div className="bdp-right-btn">

                <button className="filter-button" onClick={toggleFilterVisibility}>
                    <i className="fa-solid fa-filter"></i>
                </button>
                <button className="bdp-add-button" onClick={handleOpenSidebar}><i className="fa fa-plus"></i></button>
                </div>
            </div>

            {isFilterVisible && (
                <div className="bdp-filter-section">
                    <h3>Basic Search</h3>
                    <div className="bdp-filter-fields">
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
                    <div className="bdp-filter-actions">
                        <button className="search-button" onClick={handleSearch}>Search</button>
                        <button className="reset-button" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            )}

            <div className="backdateprocess-list-table-container">
                <table className="backdateprocess-list-table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Action Date</th>
                            <th>From date</th>
                            <th>To Date</th>
                            <th>Back Date Process By</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.length > 0 ? (
                            currentEntries.map((backdateprocess) => (
                                <tr key={backdateprocess.id}>
                                    <td>{backdateprocess.Company}</td>
                                    <td>{backdateprocess.Location}</td>
                                    <td>{backdateprocess.Action_date}</td>
                                    <td>{backdateprocess.From_date}</td>
                                    <td>{backdateprocess.To_date}</td>
                                    <td>{backdateprocess.Back_date_process}</td>
                                    <td>{backdateprocess.Status}</td>
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
            {openSidebar && (
                
                <BDPSidebarForm onClose={handleCloseSidebar}/>
            )}
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

export default BackDateProcess;
