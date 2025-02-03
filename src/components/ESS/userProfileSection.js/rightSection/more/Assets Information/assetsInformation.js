import React, { useState, useEffect } from "react";
import "./assetsInformation.css";
import employeeService from "../../../../../../services/employeeService";


const Assetsinformation = ({ isVisible, onToggle }) => {
  const [assetData, setAssetData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssetData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.user) throw new Error("User data not found");

        const userId = storedUser.user.id;
        if (!userId) throw new Error("User ID is missing.");
        
        
        const response = await employeeService.fetchDataById(userId);

        console.log("Full Response Object:", response);

        
        if (response && Array.isArray(response.assets)) {
          setAssetData(response.assets);
        } else {
          throw new Error("No asset data found.");
        }
      } catch (err) {
        console.error("Error fetching asset data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAssetData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!assetData || assetData.length === 0) return <p>No asset data available</p>;

  return (
    <div className="Assetsinformation-Profile">
      <div className="assetinfo-btn-holder" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="Assetsinformation-profile-h3">Assets Information</h3>
        <button onClick={onToggle} className="toggle-button-Assetsinformation">
          {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
        </button>
      </div>

      {isVisible && (
        <div>
          <table className="Assetsinformation-table">
            <thead>
              <tr>
                <th>Assets Name</th>
                <th>Manufacturer Name</th>
                <th>Model No.</th>
                <th>Serial Number</th>
                <th>Asset Tag</th>
              </tr>
            </thead>
            <tbody>
              {assetData.map((asset, index) => (
                <tr key={index}>
                  <td>{asset.assetName}</td>
                  <td>{asset.manufacturer}</td>
                  <td>{asset.modelNumber}</td>
                  <td>{asset.serialNumber}</td>
                  <td>{asset.assetTag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Assetsinformation;
