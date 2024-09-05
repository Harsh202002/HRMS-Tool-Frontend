import React from "react";
import "./medicalPolicy.css";

const Medicalpolicy = ({ isVisible, onToggle }) => {
    return (
        <div className="Medicalpolicy-Profile">
            <div className="medicalpolicy-btn-holder" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="Medicalpolicy-profile-h3">Medicalpolicy</h3>
                <button onClick={onToggle} className="toggle-button-Medicalpolicy">
                    {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
                </button>
            </div>
            {isVisible && (
                <div>
                    <table className="Medicalpolicy-table">
                        <thead>
                            <tr>
                                <th>Policy No.</th>
                                <th>Attachments</th>
                                <th>Provider</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Coverage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
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

export default Medicalpolicy;
