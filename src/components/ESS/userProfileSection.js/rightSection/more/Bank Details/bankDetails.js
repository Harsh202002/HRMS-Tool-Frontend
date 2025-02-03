import React, { useState, useEffect } from "react";
import "./bankDetails.css";
import employeeService from "../../../../../../services/employeeService";

const Bankdetails = ({ isVisible, onToggle }) => {
  const [bankDetailData, setBankDetailData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBankDetailData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.user) throw new Error("User data not found");

        const userId = storedUser.user.id;
        if (!userId) throw new Error("User ID is missing.");

        // Fetch bank details using employeeService
        const response = await employeeService.fetchDataById(userId);
        
        console.log("Fetched Bank Details Response:", response);

        if (response && Array.isArray(response.bankDetails)) {
          setBankDetailData(response.bankDetails);
        } else {
          throw new Error("No bank details found.");
        }
      } catch (err) {
        console.error("Error fetching bank details:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBankDetailData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!bankDetailData || bankDetailData.length === 0) return <p>No bank details available</p>;

  return (
    <div className="Bankdetails-Profile">
      <div
        className="bankdetails-btn-holder"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <h3 className="Bankdetails-profile-h3">Bank Details</h3>
        <button onClick={onToggle} className="toggle-button-Bankdetails">
          {isVisible ? (
            <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i>
          ) : (
            <i className="fa fa-circle-chevron-down"></i>
          )}
        </button>
      </div>
      {isVisible && (
        <div>
          <table className="Bankdetails-table">
            <thead>
              <tr>
                <th>Account Holder Name</th>
                <th>Account No.</th>
                <th>Bank</th>
                <th>IFSC Code</th>
              </tr>
            </thead>
            <tbody>
              {bankDetailData.map((bank, index) => (
                <tr key={index}>
                  <td>{bank.accountHolder}</td>
                  <td>{bank.accountNumber}</td>
                  <td>{bank.bankName}</td>
                  <td>{bank.ifscCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Bankdetails;
