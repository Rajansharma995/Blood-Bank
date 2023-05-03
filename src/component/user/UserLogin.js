import React , { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../image/logo.png";
import "../../css/Login.css";


const UserLogin = () => {
    const [userUserName , setuserUserName] = useState("");
    const [userPassword , setuserPassword] = useState("");

  //   const navigate= useNavigate();
  // const navigatetoregistration = () => {
  //   navigate ("/reg/usr");
  // }

  // const navigatetodashboard = () => {
  //   navigate ("/login/usr/dashboard");
  // }
    const UserLoginCheck=()=>{
      fetch('/http://127.0.0.1:8000/admin/login/',{
        userUserName:userUserName,
        userPassword:userPassword,
      }).then((response)=>{
        if(response.data.message){
          alert(response.data.message);
        }
        else{
          alert("welcome");
          window.location='/login/usr/dash';
        }
      });
    };
    return(
        <div className="user-login">
          <h2><u>USER LOGIN</u></h2>
            <form>
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
                type="text"
                placeholder="Password"
                onChange={(e) => {
                    setuserPassword(e.target.value)
                }}
                required
                />
                <button onClick={UserLoginCheck} >Login</button>
                </form>
            <h4><a href="/reg/usr">Don't have an account</a></h4>
            {/* <button onClick={userLoginCheck}>Register</button> */}
         
        </div>
    );
}

export default UserLogin;