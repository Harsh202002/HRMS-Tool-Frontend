import React, { useState } from "react";
import "./more.css";
import Licence from "./Licence/licence";
import Medicalpolicy from "./Medical Policy/medicalPolicy";
import Membership from "./Membership/membership";
import Bankdetails from "./Bank Details/bankDetails";
import Medicalhistory from "./Medical history/medicalHistory";
import Assetsinformation from "./Assets Information/assetsInformation";

const More = () => {
    const [visibleComponent, setVisibleComponent] = useState('licence');

    const handleToggle = (componentName) => {
        setVisibleComponent(visibleComponent === componentName ? null : componentName);
    };

    return (
        <div>
            <div style={{ marginTop: "20px" }}>
                <Licence
                    isVisible={visibleComponent === 'licence'}
                    onToggle={() => handleToggle('licence')}
                />
            </div>

            <div style={{ marginTop: "20px" }}>
                <Medicalpolicy
                    isVisible={visibleComponent === 'medicalpolicy'}
                    onToggle={() => handleToggle('medicalpolicy')}
                />
            </div>

            <div style={{ marginTop: "20px" }}>
                <Membership
                isVisible={visibleComponent === 'membership'}
                onToggle={() => handleToggle('membership')} 
                />
            </div>

            <div style={{ marginTop: "20px" }}>
                <Bankdetails
                isVisible={visibleComponent === 'bankdetails'}
                onToggle={() => handleToggle('bankdetails')}
                />
            </div>

            <div style={{ marginTop: "20px" }}>
                <Medicalhistory
                isVisible={visibleComponent === 'medicalhistory'}
                onToggle={() => handleToggle('medicalhistory')}
                />
            </div>

            <div style={{ marginTop: "20px" }}>
                <Assetsinformation
                isVisible={visibleComponent === 'assetsinformation'}
                onToggle={() => handleToggle('assetsinformation')}
                />
            </div>
        </div>
    );
};

export default More;
