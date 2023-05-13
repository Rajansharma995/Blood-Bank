import React, {useState} from "react";
// import{axios} from "axios";

import { useNavigate } from "react-router-dom";

import "../../css/Register.css";

const UserRegistration = () => {
    const [userUserName, setuserUserName]= useState("");
    const [userPassword, setuserPassword]= useState("");
    const [userFName, setuserFName]= useState("");
    const [userMail, setuserMail]= useState("");
    const [userPhonenumber, setuserPhonenumber]= useState("");
    const [userPlace, setuserPlace]= useState("");
    const [userGender, setuserGender]= useState("");
    const [userBloodGroup,setuserBloodGroup]= useState("");
    const [userAge, setuserAge]= useState("");
    const[userConfirmPassword, setuserConfirmPassword]=useState('');
  
  
    const navigate= useNavigate();
//  const navigatetologin = () => {
//   navigate ("/login/usr");
//    }


        const UserRegistrationsubmit=(e)=>{
          e.preventDefault();
          const body ={
            name: userFName,
            userAge: userAge,
            userGender: userGender,
            userBloodGroup: userBloodGroup,
            userPhonenumber: userPhonenumber,
            email: userMail,
            userPlace: userPlace,
            userUserName: userUserName,
            password: userPassword,
            password2: userConfirmPassword,
               }
          const requestOptions = {
            method: 'POST',
            headers: {
              'content-type':'application/json', 
              'Accept':'application/json',
            }, 
            body: JSON.stringify(body)
          }
          fetch('http://127.0.0.1:8000/api/register/',requestOptions).then(function(response){
        if(response.status ===201) {
          return response.json(); 
        }
        alert('please fill the required parts')
      }).then((value) => {
        if(value) {
          const access_token = value.token.access; 
          console.log(access_token); 
          navigate ("/login/usr/");
        }
      }).catch((err) => {
        console.log(err); 
        
      }
      )
        };
    
    
       

  
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
                name="userUserName"
                type="text"
                placeholder="Username"
                onChange={(e)=> {
                    setuserUserName(e.target.value);}
                }
                required
                />
                  <input
                name="userPassword"
                type="password"
                placeholder="Password"
                onChange={(e)=> {
                    setuserPassword(e.target.value);}
                }
                required
                />
                <input
                  name="confirmpassword"
                  type="password"
                  placeholder="ConfirmPassword"
                  onChange={(e)=>{
                    setuserConfirmPassword(e.target.value);
                  }}
                  required
                  />
                  
                  <button onClick={UserRegistrationsubmit} type="submit" >Register</button>
        </form>
      

    </div>
);
}
export default UserRegistration;