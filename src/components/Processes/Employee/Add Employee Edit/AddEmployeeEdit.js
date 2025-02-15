import React, { useState } from 'react';
import './AddEmployeeEdit.css';
// import profile from "../../../Assets/ImageAvtar.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import EditableLeftSection from './Editable Left Section/EditableLeftSection';
import EditableBasicInformation from './Editable Basic Information/EditableBasicInformation';
// import Educationhandle from './rightSection/Education/educationHandle';
// import SidebarForm from './Editable button/sidebarForm';
// import Education from './rightSection/Education/education/education';
// import Documentshandle from './rightSection/Documents/documentHandle';
// import Investmentdeclaration from './rightSection/Investment Declaration/investmentDeclaration';
// import Workinfohandle from './rightSection/Work Info/handleWorkInfo';
// import More from './rightSection/more/more';

const AddEmployeeEdit = () => {
  const [activeTab, setActiveTab] = useState('Basic Information');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleComponent, setVisibleComponent] = useState('basicinformation');
  
      const handleToggle = (componentName) => {
          setVisibleComponent(visibleComponent === componentName ? null : componentName);
      };

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="editable-employee-profile">
      {/* <Leftsection/> */}
      <EditableLeftSection/>
      <div className="editable-right-panel">
        <div className="editable-tabs">
          <button className={`tab-button ${activeTab === 'Basic Information' ? 'active' : ''}`} onClick={() => setActiveTab('Basic Information')}>Basic Information</button>
          <button className={`tab-button ${activeTab === 'Education' ? 'active' : ''}`} onClick={() => setActiveTab('Education')}>Education</button>
          <button className={`tab-button ${activeTab === 'Documents' ? 'active' : ''}`} onClick={() => setActiveTab('Documents')}>Documents</button>
          <button className={`tab-button ${activeTab === 'Investment Declaration' ? 'active' : ''}`} onClick={() => setActiveTab('Investment Declaration')}>Investment Declaration</button>
          <button className={`tab-button ${activeTab === 'More' ? 'active' : ''}`} onClick={() => setActiveTab('More')}>More</button>
          <button className={`tab-button ${activeTab === 'Work Info' ? 'active' : ''}`} onClick={() => setActiveTab('Work Info')}>Work Info</button>
        </div>
        <div className="editable-tab-content">
          {activeTab === 'Basic Information' && (
            <EditableBasicInformation
            isVisible={visibleComponent === 'basicinformation'}
            onToggle={() => handleToggle('basicinformation')}
            />
          )}
          {/* {activeTab === 'Education' && (
            <Educationhandle onOpenSidebar={handleOpenSidebar} />
          )}
          {activeTab === 'Documents' && (
            <Documentshandle/>
          )}
           {activeTab === 'Investment Declaration' && (
            <Investmentdeclaration/>
          )}
            {activeTab === 'More' && (
            <More/>
          )}
           {activeTab === 'Work Info' && (
            <Workinfohandle/>
          )} */}
        </div>
      </div>
      {/* {isSidebarOpen && (
        <SidebarForm onClose={handleCloseSidebar} />
      )} */}
    </div>
  );
};

export default AddEmployeeEdit;
