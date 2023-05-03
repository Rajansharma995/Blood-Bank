import React from "react";
import { useState } from "react";
import '../../css/Employeereg.css';
import { Navigate, useNavigate } from "react-router-dom";

const EmployeeRegistration=()=>{
    const [empUserName, setempUsername] = useState("");
    const [empPassword, setempPassword] = useState("");
    const [empName, setempName] = useState("");
    const [empMail, setempMail] = useState("");
    const [empPhone, setempPhone] = useState("");
    const [empAddress, setempAddress] = useState("");

    const navigate=useNavigate();
    const register=()=>{
        navigate('/login/emp');
    }
    return(
        <div className="emp-register">
        <h2>EMP Register</h2>
        <form className="empReg-form">
          <input
            name="empName"
            type="text "
            placeholder="Full Name"
            onChange={(e) => {
              setempName(e.target.value);
            }}
            required
          />
          <input
            name="emailId"
            type="text"
            placeholder="Email Address"
            onChange={(e) => {
              setempMail(e.target.value);
            }}
            required
          />
          <input
            name="empPhone"
            type="number"
            placeholder="Phone Number"
            onChange={(e) => {
              setempPhone(e.target.value);
            }}
            required
          />
          <input
            name="empAddress"
            type="text "
            placeholder="Address"
            onChange={(e) => {
              setempAddress(e.target.value);
            }}
            required
          />
          <input
            name="username"
            type="text"
            placeholder="User Name"
            onChange={(e) => {
              setempUsername(e.target.value);
            }}
          />
          <input
            name="password"
            type="text "
            placeholder="Password"
            onChange={(e) => {
              setempPassword(e.target.value);
            }}
          />
          <button onClick={register}>Register</button>
        </form>
      </div>
    );
  };
  export default EmployeeRegistration;
        
    