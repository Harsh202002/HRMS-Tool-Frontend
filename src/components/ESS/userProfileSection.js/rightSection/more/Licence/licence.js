import React, { useState, useEffect } from "react";
import employeeService from "../../../../../../services/employeeService";
import "./licence.css";

const Licence = ({ isVisible, onToggle }) => {
  const [licenseData, setLicenseData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLicenseData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.user) throw new Error("User data not found");
  
        const userId = storedUser.user.id;
        if (!userId) throw new Error("User ID is missing.");
  
        // Fetch license data
        const response = await employeeService.fetchDataById(userId);
  
        console.log("License Object:", response);  
  
        // Ensure response contains Licences array
        if (response && Array.isArray(response.licenses)) {
          setLicenseData(response.licenses);
        } else {
          throw new Error("No license data found.");
        }
      } catch (err) {
        console.error("Error fetching license data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchLicenseData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!licenseData || licenseData.length === 0) return <p>No license details available</p>;

  return (
    <div className="Licence-Profile">
      <div className="licence-btn-holder" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="Licence-profile-h3">Licenses</h3>
        <button onClick={onToggle} className="toggle-button-Licence">
          {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
        </button>
      </div>
      
      {isVisible && (
        <div>
          <table className="Licence-table">
            <thead>
              <tr>
                <th>License Type</th>
                <th>From</th>
                <th>To</th>
                <th>Attached File</th>
              </tr>
            </thead>
            <tbody>
              {licenseData.map((license) => (
                <tr key={license.id}>
                  <td>{license.licenseType || "N/A"}</td>
                  <td>{license.validFrom ? new Date(license.validFrom).toLocaleDateString() : "N/A"}</td>
                  <td>{license.validTo ? new Date(license.validTo).toLocaleDateString() : "N/A"}</td>
                  <td>
                    {license.attachedFile ? (
                      <a href={license.attachedFile} target="_blank" rel="noopener noreferrer">
                        View File
                      </a>
                    ) : (
                      "No File"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Licence;
