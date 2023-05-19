import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../../image/logo.png";
import "../../css/Login.css";
import ForgetPassword from "./ForgatePassword";

// import { func } from "prop-types";


const UserLogin = () => {
    const [userUserName , setuserUserName] = useState("");
    const [userPassword , setuserPassword] = useState("");

    const navigate= useNavigate();
  const navigatetoforgatepassword = () => {
    navigate ("/forgatepassword");
  }

  // const navigatetodashboard = () => {
  //   navigate ("/login/usr/dashboard");
  // }
    const UserLoginCheck=(e)=>{
     
      e.preventDefault();
      const body = {
       email:userUserName,
     password:userPassword
      }
     
      const requestOptions = {
        method: 'POST',
        headers: {
          'content-type':'application/json', 
          
        }, 
        body: JSON.stringify(body)
      }
      fetch('http://127.0.0.1:8000/api/login/',requestOptions).then(function(response){
        if(response.status ===200) {
          return response.json(); 
        }
        alert('username and password didnot match'); 
        return ;
      }).then((value) => {
        if(value) {
          const access_token = value.token.access; 
          localStorage.setItem('token', access_token);
          console.log(access_token); 
          navigate('/login/usr/dashboard');
        }
      }).catch((err) => {
        console.log(err); 
         
      }
      )
    };
        




  
       return(
        <div className="user-login">
          <h2><u>USER LOGIN</u></h2>
            <form >
                <input
                name="Username"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                    setuserUserName(e.target.value)
                }}
                required
                />
                <input
                name="UserPaaword"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                    setuserPassword(e.target.value)
                }}
                required
                />
                <button onClick={UserLoginCheck} type = 'submit' >Login</button>
                </form>
            <h4><a href="/reg/usr">Don't have an account</a></h4>
            {/* <button onClick={userLoginCheck}>Register</button> */}
            <button onClick={navigatetoforgatepassword}>Forgot Password</button>
           
        </div>
        
    );
}

export default UserLogin;