import React, {useState} from "react";
import Basicinformation from "./basicInformation/basicInformation";
import Jobprofile from "./jobProfile/jobProfile";
import Emergencycontact from "./emergencyContact/emergencyContact";
import Addressinformation from "./addressInformation/addressInformation";
import Dependent from "./Dependent/dependent";
const Basicinformationhandle = () => {
    const [visibleComponent, setVisibleComponent] = useState('basicinformation');

    const handleToggle = (componentName) => {
        setVisibleComponent(visibleComponent === componentName ? null : componentName);
    };
    return(
        <div>
               <div style={{ marginTop: "20px" }}>
                <Basicinformation
                    isVisible={visibleComponent === 'basicinformation'}
                    onToggle={() => handleToggle('basicinformation')}
                />
                </div>
                <div style={{ marginTop: "20px" }}>
                <Jobprofile
                    isVisible={visibleComponent === 'jobprofile'}
                    onToggle={() => handleToggle('jobprofile')}
                />
                </div>
                <div style={{ marginTop: "20px" }}>
                <Emergencycontact
                    isVisible={visibleComponent === 'emergencycontact'}
                    onToggle={() => handleToggle('emergencycontact')}
                />
                </div>
                <div style={{ marginTop: "20px" }}>
                <Addressinformation
                    isVisible={visibleComponent === 'addressinformation'}
                    onToggle={() => handleToggle('addressinformation')}
                />
                </div>
                <div style={{ marginTop: "20px" }}>
                <Dependent
                    isVisible={visibleComponent === 'dependent'}
                    onToggle={() => handleToggle('dependent')}
                />
                </div>
        </div>
    )
}
export default Basicinformationhandle