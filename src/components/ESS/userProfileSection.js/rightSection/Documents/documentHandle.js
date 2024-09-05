import React, {useState} from "react";
import Attachment from "./Attachments/attachment";
import Payslips from "./PaySlips/paySlips";
const Documentshandle = ()=>{
    const [visibleComponent, setVisibleComponent] = useState('attachment');

    const handleToggle = (componentName) => {
        setVisibleComponent(visibleComponent === componentName ? null : componentName);
    };
    return(
        <div>
                <div style={{ marginTop: "20px" }}>
                <Attachment
                    isVisible={visibleComponent === 'attachment'}
                    onToggle={() => handleToggle('attachment')}
                />
                </div>
                <div style={{ marginTop: "20px" }}>
                <Payslips
                    isVisible={visibleComponent === 'payslips'}
                    onToggle={() => handleToggle('payslips')}
                />
                </div>
        </div>
    )
}
export default Documentshandle