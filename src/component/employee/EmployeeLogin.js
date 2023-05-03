import React from "react";
import { useState } from "react";
import '../../css/Employeelog.css';
// import { Navigate, useNavigate } from "react-router-dom";
const EmployeeLogin =() => {
    const[empUserName, setempUserName]= useState("");
    const[empPassword, setempPassword]=useState("");

    // const navigate=useNavigate();
    // const Emplog=()=>{
    //     navigate('/login/emp/dashboard');
    // }
  
    const empLoginCheck=()=>{
        fetch('http://127.0.0.1:8000/admin/login/?next=/admin/',{
            empUserName:empUserName,
            empPassword:empPassword,
        }).then((response)=>{
            if(response.data.message){
                alert(response.data.message);
            }
            else{
                alert("welcome");
                window.location="/login/emp/dash";
            }
        });
    };

    return(
        <div className="emp-login">
            <h2>Employee Login</h2>
            <form>
                <input 
                name='username'
                type="text"
                placeholder="username"
                onChange={(e)=>{
                    setempUserName(e.target.value);
                }}/>
                <input
                name="password"
                type="text"
                placeholder="password"
                onChange={(e)=>{
                    setempPassword(e.target.value);
                }}
                />
                <button onClick={empLoginCheck}>Submit</button>
            </form>
        </div>
    );
}
export default EmployeeLogin;