import React from "react";

import '../../css/Employeedash.css';
const EmployeeDashboard=()=>{
    return(
        <div className="emp-dashboard">
            <a href="/login/emp/uh">
                <button>Update Health</button>
            </a>
            <a href="/login/emp/ub">
                <button>Update BloodStock</button>
            </a>
            <a href="/login/emp/hr">
                <button>Handel Request</button>
            </a>
        </div>
    );
}
export default EmployeeDashboard;