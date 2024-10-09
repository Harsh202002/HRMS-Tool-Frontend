import React, { useState } from 'react';
import './SalarySlip.css'; // Import your CSS file here

const SalarySlip = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [month, setMonth] = useState('');
    const [financialYear, setFinancialYear] = useState('');
    const [data] = useState([
        { id: 1, month: 'April', year: '2023-2024', details: 'Basic: $3000, HRA: $1500, Total: $4500' },
        { id: 2, month: 'May', year: '2023-2024', details: 'Basic: $3100, HRA: $1550, Total: $4650' },
        { id: 3, month: 'June', year: '2024-2025', details: 'Basic: $3200, HRA: $1600, Total: $4800' },
        { id: 4, month: 'June', year: '2024-2025', details: 'Basic: $3200, HRA: $1600, Total: $4800' },
        // Add more dummy data as needed
    ]);

    const [filteredData, setFilteredData] = useState(data);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const handleSearch = () => {
        const results = data.filter(item => 
            (item.month === month || month === '') && 
            (item.year === financialYear || financialYear === '')
        );
        setFilteredData(results);
    };

    const handleReset = () => {
        setMonth('');
        setFinancialYear('');
        setFilteredData(data);
    };

    return (
        <div className='salary-slip-main-container'>
            <div className="salary-slip-container">
                <div className="salary-slip-header">
                    <button className="back-button">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <h1>Salary Slip</h1>
                    <button className="filter-button" onClick={toggleSearch}>
                        <i className="fa-solid fa-filter"></i>
                    </button>
                </div>

                {isSearchVisible && (
                    <div className="basic-search-container">
                        <h2>Basic Search</h2>
                        <div className="salary-slip-divider"></div>
                        <div className="search-fields">
                            <div className="salary-slip-field">
                                <label htmlFor="month">Month</label>
                                <select 
                                    id="month" 
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                >
                                    <option value="">--Select--</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="salary-slip-field">
                                <label htmlFor="financial-year">Financial Year</label>
                                <select 
                                    id="financial-year"
                                    value={financialYear}
                                    onChange={(e) => setFinancialYear(e.target.value)}
                                >
                                    <option value="">--Select--</option>
                                    <option value="2023-2024">2023-2024</option>
                                    <option value="2024-2025">2024-2025</option>
                                    <option value="2025-2026">2025-2026</option>
                                    {/* Add more financial year options here */}
                                </select>
                            </div>
                        </div>
                        <div className="salary-slip-search-buttons">
                            <button className="salary-slip-search-button" onClick={handleSearch}>Search</button>
                            <button className="salary-slip-reset-button" onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                )}

                <div className="salary-slip-details-container">
                    <h3>Salary Slip Detail <span>(April-2024 To March-2025)</span></h3>
                    <div className="details-content">
                        {filteredData.length > 0 ? (
                            filteredData.map(item => (
                                <div key={item.id} className="salary-slip-record">
                                    <p>{item.details}</p>
                                </div>
                            ))
                        ) : (
                            <div className="salary-slip-no-records">No records found.</div>
                        )}
                        <p>Record Found: {filteredData.length}</p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default SalarySlip;
