import React from "react";
import "./licence.css";

const Licence = ({ isVisible, onToggle }) => {
    return (
        <div className="Licence-Profile">
            <div className="licence-btn-holder" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="Licence-profile-h3">Licence</h3>
                <button onClick={onToggle} className="toggle-button-Licence">
                    {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
                </button>
            </div>
            {isVisible && (
                <div>
                    <table className="Licence-table">
                        <thead>
                            <tr>
                                <th>Attachments</th>
                                <th>Licence</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Attached File</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Licence;
