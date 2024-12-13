import React from 'react';
import "./BDPSidebarForm.css"

const Leavesidebarform = ({ onClose }) => {
    return (
        <div className="bdp-r-sidebar-form">
            <hr className='hr-vertical'/>
            <div className='bdp-rgt-side'>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>Back Date Process</h2>
                    <button className="bdp-close-sidebar-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <hr />
                <div className='bdpform-list-table-container'>
                    <table className='bdpform-list-table'>
                        <thead>
                            <tr>
                                <th>Leave Type</th>
                                <th>Entitled</th>
                                <th>Availed</th>
                                <th>Applied</th>
                                <th>Leave Adjust</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>EL</td>
                                <td>1.0 D</td>
                                <td>0.0 D</td>
                                <td>0.0 D</td>
                                <td>0.0 D</td>
                                <td>1.0 D</td>
                            </tr>
                            <tr>
                                <td>MR</td>
                                <td>1.0 D</td>
                                <td>0.0 D</td>
                                <td>0.0 D</td>
                                <td>0.0 D</td>
                                <td>1.0 D</td>
                            </tr>
                            <tr>
                                <td>SL</td>
                                <td>1.0 D</td>
                                <td>0.0 D</td>
                                <td>0.0 D</td>
                                <td>0.0 D</td>
                                <td>1.0 D</td>
                            </tr>
                            <tr>
                                <td>LOP</td>
                                <td>1.0 D</td>
                                <td>0.0 D</td>
                                <td>0.0 D</td>
                                <td>0.0 D</td>
                                <td>1.0 D</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <form className='bdp-rsidebar-form'>

                    <div className="bdp-rsidebar-form-group" >
                        <label>Leave Name</label>
                        <select>
                            <option>--Select--</option>
                            <option>EL</option>
                            <option>MR</option>
                            <option>SL</option>
                            <option>LOP</option>
                        </select>
                    </div>
                    <div className="bdp-rsidebar-form-actions">
                        <button type="submit" className="bdp-rsidebar-save-button">Back Data Process</button>
                        <button type="reset" className="bdp-rsidebar-reset-button">Refresh</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Leavesidebarform;
