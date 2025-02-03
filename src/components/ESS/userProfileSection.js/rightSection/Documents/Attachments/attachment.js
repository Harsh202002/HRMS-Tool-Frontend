import React, { useState, useEffect } from "react";
import "./attachment.css";
import employeeService from "../../../../../../services/employeeService";

const Attachment = ({ isVisible, onToggle }) => {
  const [attachmentData, setAttachmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttachmentData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.user) throw new Error("User data not found");

        const userId = storedUser.user.id;
        if (!userId) throw new Error("User ID is missing.");

        // Fetch data from employeeService
        const response = await employeeService.fetchDataById(userId);

        console.log("Full Response Object:", response);

        // Check if response contains attachments
        if (response && Array.isArray(response.attachments)) {
          setAttachmentData(response.attachments);
        } else {
          throw new Error("No attachment data found.");
        }
      } catch (err) {
        console.error("Error fetching attachment data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAttachmentData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!attachmentData || attachmentData.length === 0) return <p>No attachments available.</p>;

  return (
    <div className="Attachment-Profile">
      <div className="attachment-btn-holder" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="Attachment-profile-h3">Attachments</h3>
        <button onClick={onToggle} className="toggle-button-Attachment">
          {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
        </button>
      </div>

      {isVisible && (
        <div>
          <table className="Attachment-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Document Type</th>
                <th>File</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {attachmentData.map((attachment, index) => (
                <tr key={attachment.id}>
                  <td>{index + 1}</td>
                  <td>{attachment.documentType}</td>
                  <td>
                    <a href={`/${attachment.file}`} target="_blank" rel="noopener noreferrer">
                      View File
                    </a>
                  </td>
                  <td>{attachment.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Attachment;
