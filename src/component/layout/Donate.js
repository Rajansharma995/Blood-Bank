import React from "react";

import {Link , Route , Routes} from "react-router-dom";

import Registration from "../user/UserRegistration";

import Login from "../user/UserLogin";

import "../../css/Donate.css";
const Donate = () => {
    return(
        <div className="donate">
            <Link to="/reg/usr">
                <button>Register</button>
            </Link>
            <Link to="/login/usr">
                <button>Login</button>
            </Link>

            <Routes>
                <Route path="/reg/usr" Component={Registration} />
                <Route path="/login/usr" Component={Login} />
            </Routes>
        </div>
    );
}
export default Donate;