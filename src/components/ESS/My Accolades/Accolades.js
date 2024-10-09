import React, { useState } from 'react';
import './Accolades.css';

const Accolades = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [data, setData] = useState([
        { id: 1, rewardName: 'Employee of the Month', rewardType: 'Recognition', approvalStatus: 'Approved' },
        { id: 2, rewardName: 'Best Performer', rewardType: 'Award', approvalStatus: 'Pending' },
        { id: 3, rewardName: 'Team Player', rewardType: 'Recognition', approvalStatus: 'Approved' },
    ]);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const handleSearch = () => {
        const filteredData = data.filter(item => 
            item.rewardName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.rewardType.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.approvalStatus.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        setData(filteredData);
    };

    const handleReset = () => {
        setSearchKeyword('');
        setData([
            { id: 1, rewardName: 'Employee of the Month', rewardType: 'Recognition', approvalStatus: 'Approved' },
            { id: 2, rewardName: 'Best Performer', rewardType: 'Award', approvalStatus: 'Pending' },
            { id: 3, rewardName: 'Team Player', rewardType: 'Recognition', approvalStatus: 'Approved' },
        ]);
    };

    return (
        <div className="accolades-main-container">
            <div className="accolades-header">
                <button className="back-button">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <h1>My Accolades</h1>
                <button className="filter-button" onClick={toggleSearch}>
                    <i className="fa-solid fa-filter"></i>
                </button>
            </div>

            {isSearchVisible && (
                <div className="basic-search-container-1">
                    <h2>Basic Search</h2>
                    <div className="accolades-divider"></div>
                    <div className="search-fields">
                        <div className="accolades-field">
                            <label htmlFor="search-keyword">Search Keyword</label>
                            <input
                                type="text"
                                id="search-keyword"
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                                placeholder="Enter keyword"
                            />
                        </div>
                    </div>
                    <div className="accolades-search-buttons">
                        <button className="accolades-search-button" onClick={handleSearch}>Search</button>
                        <button className="accolades-reset-button" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            )}

            <div className="accolades-table-container">
                <table className="accolades-table">
                    <thead>
                        <tr>
                            <th>View</th>
                            <th>Reward Name</th>
                            <th>Reward Type</th>
                            <th>Download</th>
                            <th>Approval Status</th>
                        </tr>
                    </thead>
                    <tbody>
    {data.length > 0 ? (
        data.map(item => (
            <tr key={item.id}>
                <td>
                    <button >View</button>
                </td>
                <td>{item.rewardName}</td>
                <td>{item.rewardType}</td>
                <td>
                    <button>Download</button>
                </td>
                <td>{item.approvalStatus}</td>
                  </tr>
                       ))
                   ) : (
                   <tr>
                     <td colSpan="5" className="accolades-no-records">No records found</td>
                 </tr>
                 )}
       </tbody>

                </table>
            </div>
        </div>
    );
};

export default Accolades;
