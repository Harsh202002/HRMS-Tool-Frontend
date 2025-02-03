import React, { useState, useEffect } from "react";
import "./medicalHistory.css";
import employeeService from "../../../../../../services/employeeService";

const Medicalhistory = ({ isVisible, onToggle }) => {
  const [medicalHistoryData, setMedicalHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicalHistoryData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.user) throw new Error("User data not found");

        const userId = storedUser.user.id;
        if (!userId) throw new Error("User ID is missing.");

        // Fetch medical history data
        const response = await employeeService.fetchDataById(userId);

        console.log("Full Response Object:", response);

        if (response && Array.isArray(response.medicalHistories)) {
          setMedicalHistoryData(response.medicalHistories);
        } else {
          throw new Error("No medical history data found.");
        }
      } catch (err) {
        console.error("Error fetching medical history data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicalHistoryData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!medicalHistoryData || medicalHistoryData.length === 0) return <p>No medical history available</p>;

  return (
    <div className="Medicalhistory-Profile">
      <div className="medicalhistory-btn-holder" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="Medicalhistory-profile-h3">Medical History</h3>
        <button onClick={onToggle} className="toggle-button-Medicalhistory">
          {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
        </button>
      </div>
      
      {isVisible && (
        <div>
          <table className="Medicalhistory-table">
            <thead>
              <tr>
                <th>Height</th>
                <th>Weight</th>
                <th>Blood Group</th>
                <th>Abled</th>
                <th>Significant Medical History</th>
                <th>Medical Problems</th>
                <th>Medication Taken</th>
              </tr>
            </thead>
            <tbody>
              {medicalHistoryData.map((history) => (
                <tr key={history.id}>
                  <td>{history.height}</td>
                  <td>{history.weight}</td>
                  <td>{history.bloodGroup}</td>
                  <td>{history.abled ? "Yes" : "No"}</td>
                  <td>{history.significantHistory || "N/A"}</td>
                  <td>{history.medicalProblems || "N/A"}</td>
                  <td>{history.medicationTaken || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Medicalhistory;
