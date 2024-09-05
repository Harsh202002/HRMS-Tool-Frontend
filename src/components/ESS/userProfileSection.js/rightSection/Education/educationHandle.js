import React, { useState } from "react";
import Education from "./education/education";
import Skill from "./skills/skill";

const Educationhandle = ({ onOpenSidebar }) => {
  const [visibleComponent, setVisibleComponent] = useState('education');

  const handleToggle = (componentName) => {
    setVisibleComponent(visibleComponent === componentName ? null : componentName);
  };

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Education
          isVisible={visibleComponent === 'education'}
          onToggle={() => handleToggle('education')}
          onOpenSidebar={onOpenSidebar}  
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Skill
          isVisible={visibleComponent === 'skill'}
          onToggle={() => handleToggle('skill')}
        />
      </div>
    </div>
  );
};

export default Educationhandle;
