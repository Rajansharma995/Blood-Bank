import React, {useState} from "react";
// import { Axios } from "axios";
import '../../css/Employeelog.css';
// import Axios from "axois";
import { useNavigate } from "react-router-dom";
const EmployeeLogin =() => {
    const[empUserName, setempUserName]= useState("");
    const[empPassword, setempPassword]=useState("");

    const navigate=useNavigate();
    // const Emplog=()=>{
    //     navigate('/login/emp/dashboard');
    // }
  
    const EmpLoginCheck=(e)=>{
        e.preventDefault();
        const body ={
            email: empUserName,
            password: empPassword,
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
                console.log(response);
              return response.json(); 
            
            }
            alert('username and password didnot match'); 
            return ;
          }).then((value) => {
            if(value) {
              const access_token = value.token.access; 
              console.log(access_token); 
              window.location ("/login/emp/dashboard"); 
            }
          }).catch((err) => {
            console.log(err); 
             
          }
          )
    
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
                <button onClick={EmpLoginCheck} type="submit">Submit</button>
            </form>
        </div>
    );
}
export default EmployeeLogin;