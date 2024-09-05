import React,{useState} from "react";
import Workinformation from "./Work Information/workInformation";
import Payrollinformation from "./Payroll Information/payrollInformation";
const Workinfohandle = () => {
    const [visibleComponent, setVisibleComponent] = useState('workinformation');

    const handleToggle = (componentName) => {
        setVisibleComponent(visibleComponent === componentName ? null : componentName);
    };
    return(
        <div>
              <div style={{ marginTop: "20px" }}>
                <Workinformation
                    isVisible={visibleComponent === 'workinformation'}
                    onToggle={() => handleToggle('workinformation')}
                />
                </div>
                <div style={{ marginTop: "20px" }}>
                <Payrollinformation
                    isVisible={visibleComponent === 'payrollinformation'}
                    onToggle={() => handleToggle('payrollinformation')}
                />
                </div>
        </div>
    )
}
export default Workinfohandle