import React from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../../image/logo.png";
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
               <a>
            <img src={logo} alt="Bloodlogo"/>
            </a>
           
            <a href="/home">HOME</a>
            <a href='/aboutus'>ABOUT US</a>
            <a href="/giveblood">WHY TO GIVE BLOOD</a>
            <a href="/dblood">WhO CAN GIVE BLOOD</a>
            <a href="/">DONATE/REQUEST</a>
            <Searchpage />
  
         
        </div> 
    );
};
export default Navbar;


