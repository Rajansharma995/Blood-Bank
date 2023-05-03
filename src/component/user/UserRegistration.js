import React, {useState} from "react";

import { useNavigate } from "react-router-dom";

import "../../css/Register.css";

const UserRegistration = () => {
    const [userUsername, setuserUsername]= useState("");
    const [userPassword, setuserPassword]= useState("");
    const [userFName, setuserFName]= useState("");
    const [userMail, setuserMail]= useState("");
    const [userPhonenumber, setuserPhonenumber]= useState("");
    const [userPlace, setuserPlace]= useState("");
    const [userGender, setuserGender]= useState("");
    const [userBloodGroup,setuserBloodGroup]= useState("");
    const [userAge, setuserAge]= useState("");

   const navigate= useNavigate();
 const navigatetologin = () => {
  navigate ("/login/usr");
   }
  
return(
    <div className="User-register">
        <form className="userRegister-form">
          
                <input
                name="userFName"
                type="text"
                placeholder="Full Name"
                onChange={(e)=> {
                    setuserFName(e.target.value);}
                }
                required
                />
                  <input
                name="userAge"
                type="text"
                placeholder="Age"
                onChange={(e)=> {
                    setuserAge(e.target.value);}
                }
                required
                />
                <input
                name="userGender"
                type="text"
                placeholder="Gender(M/F)"
                onChange={(e)=> {
                    setuserGender(e.target.value);}
                }
                required
                />
                <input
                name="userBloodGroup"
                type="text"
                placeholder="Blood Group"
                onChange={(e)=> {
                    setuserBloodGroup(e.target.value);}
                }
                required
                />
                <input
                name="Email-Id"
                type="text"
                placeholder="Email Place"
                onChange={(e)=> {
                    setuserMail(e.target.value);}
                }
                required
                />
                  <input
                name="userPhonenumber"
                type="number"
                placeholder="Phone Number"
                onChange={(e)=> {
                    setuserPhonenumber(e.target.value);}
                }
                required
                />
                  <input
                name="userPlace"
                type="text"
                placeholder="Place"
                onChange={(e)=> {
                    setuserPlace(e.target.value);}
                }
                required
                />
                  <input
                name="userUsername"
                type="text"
                placeholder="Username"
                onChange={(e)=> {
                    setuserUsername(e.target.value);}
                }
                required
                />
                  <input
                name="userPassword"
                type="text"
                placeholder="Password"
                onChange={(e)=> {
                    setuserPassword(e.target.value);}
                }
                required
                />
                  <button onClick={navigatetologin} >Register</button>
        </form>
      

    </div>
);
}
export default UserRegistration;