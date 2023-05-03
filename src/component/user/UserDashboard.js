import React from "react";

import "../../css/Userdash.css";

const UserDashboard = () => {
    const donate = () => {
        alert("We will contact you");
    };
    const request = () => {
        window.location='/request';
    }
    // const profile =() => {
    //     window.location='/profile';
    // }

    return(
        <div className="user-dash">
            <button onClick={donate}>Donate</button>
            <button onClick={request}>Request</button>
            {/* <button onClick={profile}>Profile</button> */}
            
            
        </div>
    );
};
export default UserDashboard;