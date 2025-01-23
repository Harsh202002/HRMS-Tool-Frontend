import React, { useState, useEffect } from "react";
import "./education.css";
import employeeService from "../../../../../../services/employeeService";

const Education = ({ isVisible, onToggle, onOpenSidebar }) => {
  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser || !storedUser.user) throw new Error("User data not found");

        const userId = storedUser.user.id; // Extract userId
        if (!userId) throw new Error("User ID is missing.");

        // Fetch education data using userId
        const response = await employeeService.fetchEducationById(userId);

        console.log("Fetched Education Data:", response);

        // Ensure the response structure matches the expected state
        if (response && Array.isArray(response.education) && response.education.length > 0) {
          setEducationData(response.education); // Assuming `response.education` contains the array
        } else {
          throw new Error("No education data found.");
        }
      } catch (err) {
        console.error("Error fetching education data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEducationData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!educationData || educationData.length === 0) return <p>No education details available</p>;

  return (
    <div>
      <div
        className="education-btn-holder"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <h3 className="D-profile-h3">Education</h3>
        <div>
          <button onClick={onToggle} className="toggle-button-Ed">
            {isVisible ? (
              <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i>
            ) : (
              <i className="fa fa-circle-chevron-down"></i>
            )}
          </button>
        </div>
      </div>

      {isVisible && (
        <div>
          <table className="education-table">
            <thead>
              <tr>
                <th>Download</th>
                <th>Standard</th>
                <th>Course</th>
                <th>Board/University</th>
                <th>College/Institution</th>
                <th>Subjects</th>
                <th>Passing Year</th>
              </tr>
            </thead>
            <tbody>
              {educationData.map((edu, index) => (
                <tr key={index}>
                  <td>
                    {edu.certificateUrl ? (
                      <a href={edu.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <button>Download</button>
                      </a>
                    ) : (
                      <button disabled>No Certificate</button>
                    )}
                  </td>
                  <td>{edu.Standard}</td>
                  <td>{edu.Course}</td>
                  <td>{edu.boardUniversity}</td>
                  <td>{edu.collegeInstitution}</td>
                  <td>{edu.subjects}</td>
                  <td>{edu.passingYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="rsidebar-btn-plus">
        <button onClick={onOpenSidebar} className="sidebar-button-Ed">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Education;
