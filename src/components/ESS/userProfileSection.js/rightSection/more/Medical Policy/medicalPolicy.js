import React, { useState, useEffect } from "react";
import "./medicalPolicy.css";
import employeeService from "../../../../../../services/employeeService";


const Medicalpolicy = ({ isVisible, onToggle }) => {
  const [medicalPolicyData, setMedicalPolicyData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicalPolicyData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.user) throw new Error("User data not found");
  
        const userId = storedUser.user.id;
        if (!userId) throw new Error("User ID is missing.");
  
        // Fetch user-specific medical policies
        const response = await employeeService.fetchDataById(userId);
        console.log("Full Response Object:", response);  

        // Ensure response contains the expected medical policy array
        if (response && Array.isArray(response.medicalPolicies)) {
          setMedicalPolicyData(response.medicalPolicies);
        } else {
          throw new Error("No medical policy data found.");
        }
      } catch (err) {
        console.error("Error fetching medical policy data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicalPolicyData();
  }, []);

  // Handling different states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!medicalPolicyData || medicalPolicyData.length === 0) return <p>No medical policy details available.</p>;

  return (
    <div className="Medicalpolicy-Profile">
      <div className="medicalpolicy-btn-holder" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="Medicalpolicy-profile-h3">Medical Policy</h3>
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
                <th>Provider</th>
                <th>From</th>
                <th>To</th>
                <th>Coverage</th>
                <th>Attachment</th>
              </tr>
            </thead>
            <tbody>
              {medicalPolicyData.map((policy) => (
                <tr key={policy.id}>
                  <td>{policy.policyNo}</td>
                  <td>{policy.provider}</td>
                  <td>{new Date(policy.validFrom).toLocaleDateString()}</td>
                  <td>{new Date(policy.validTo).toLocaleDateString()}</td>
                  <td>{policy.coverage}</td>
                  <td>
                    {policy.attachment ? (
                      <a href={policy.attachment} target="_blank" rel="noopener noreferrer">View File</a>
                    ) : "No Attachment"}
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

export default Medicalpolicy;
