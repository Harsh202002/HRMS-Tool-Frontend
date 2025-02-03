import React, { useState, useEffect } from "react";
import employeeService from "../../../../../../services/employeeService";
import "./membership.css";

const Membership = ({ isVisible, onToggle }) => {
  const [membershipData, setMembershipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembershipData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.user) throw new Error("User data not found");

        const userId = storedUser.user.id;
        if (!userId) throw new Error("User ID is missing.");

       
        const response = await employeeService.fetchDataById(userId);

        console.log("Full Response Object:", response);

       
        if (response && Array.isArray(response.memberships)) {
          setMembershipData(response.memberships);
        } else {
          throw new Error("No membership data found.");
        }
      } catch (err) {
        console.error("Error fetching membership data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembershipData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!membershipData || membershipData.length === 0) return <p>No membership details available</p>;

  return (
    <div className="Membership-Profile">
      <div
        className="membership-btn-holder"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <h3 className="Membership-profile-h3">Membership</h3>
        <button onClick={onToggle} className="toggle-button-Membership">
          {isVisible ? (
            <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i>
          ) : (
            <i className="fa fa-circle-chevron-down"></i>
          )}
        </button>
      </div>

      {isVisible && (
        <div>
          <table className="Membership-table">
            <thead>
              <tr>
                <th>Membership No.</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {membershipData.map((membership, index) => (
                <tr key={index}>
                  <td>{membership.membershipNo}</td>
                  <td>{new Date(membership.validFrom).toLocaleDateString()}</td>
                  <td>{new Date(membership.validTo).toLocaleDateString()}</td>
                  <td>{membership.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Membership;
