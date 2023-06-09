import React from "react";

import {Link , Route , Routes} from "react-router-dom";

import Registration from "../user/UserRegistration";

import Login from "../user/UserLogin";
// import logo from "../../image/logo.png";

import "../../css/Donate.css";
const Donate = () => {
    return(
        <div className="donate">
            {/* <img src={logo} alt="Bloodlogo" height={60} width={60}/> */}

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