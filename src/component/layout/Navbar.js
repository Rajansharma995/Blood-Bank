import React from "react";
// import { useNavigate } from "react-router-dom";
import Searchpage from "./Searchpage";
import "../../css/Navbar.css";


const Navbar = () => {
    // const navigate= useNavigate();
    // const navigatetologin = () => {
    //     navigate ("/Login");
    // }
    // const navigatetoregistration =() => {
    //     navigate("/Registration")
    // }
    return(
        <div className="nav">
            <a href="/home">
            </a>
            <div>
            <a href="/home">HOME</a>
            <a href='/aboutus'>ABOUT US</a>
            <a href="/giveblood">WHY TO</a>
            <a href="/dblood">WhO CAN</a>
            <a href="/donate">DONATE/REQUEST</a></div>
            <Searchpage />
  
         
        </div> 
    );
};
export default Navbar;


