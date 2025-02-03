import React, { useState, useEffect } from "react";
import employeeService from "../../../../../../services/employeeService";
import "./skill.css";

const Skill = ({ isVisible, onToggle }) => {
  const [skillData, setSkillData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.user) throw new Error("User data not found");
  
        const userId = storedUser.user.id;
        if (!userId) throw new Error("User ID is missing.");
  
       
        const response = await employeeService.fetchDataById(userId);
  
        console.log("Full Response Object:", response);  
  
        
        if (response && Array.isArray(response.skills)) {
          setSkillData(response.skills);
        } else {
          throw new Error("No skill data found.");
        }
      } catch (err) {
        console.error("Error fetching skill data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchSkillData();
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!skillData || skillData.length === 0) return <p>No education details available</p>;

  return (
    <div className="Skill-Profile">
      <div className="skill-btn-holder" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="Skill-profile-h3">Skill</h3>
        <button onClick={onToggle} className="toggle-button-skill">
          {isVisible ? <i className="fa-solid fa-circle-chevron-down fa-rotate-180"></i> : <i className="fa fa-circle-chevron-down"></i>}
        </button>
      </div>

      {isVisible && (
        <div>
          <table className="Skill-table">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Experience (Years)</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {skillData.length > 0 ? (
                skillData.map((skill, index) => (
                  <tr key={index}>
                    <td>{skill.skill}</td>
                    <td>{skill.experience}</td>
                    <td>{skill.level}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No skills found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Skill;
