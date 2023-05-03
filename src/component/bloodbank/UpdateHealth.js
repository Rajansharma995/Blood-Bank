import React, { useState } from "react";

import '../../css/UpdateHealth.css'
const UpdateHealth = () => {
    var [userId,setuserId]= useState("");
    const[searchList,setsearchList]= useState([]);
    const[userVitals,setuserVitals]=useState("");
    const[userHeight,setuserHeight]=useState("");
    const[userWeight,setuserWeight]=useState("");
    const[userStatus,setuserStatus]= useState("");

    return (
        <div className="search">
          {" "}
          <form>
            <input
              type="text"
              placeholder="USER ID"
              name="userId"
              onChange={(e) => {
                setuserId(e.target.value);
              }}
              required
            />
          </form>
          <table className="blood-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>PHONE </th>
                <th>PLACE</th>
                <th>BLOODGROUP</th>
              </tr>
            </thead>
            <tbody>
              {searchList.map((val) => {
                return (
                  <tr key={val.user_id}>
                    <td>{val.userFName}</td>
                    <td>{val.userPhone}</td>
                    <td>{val.userPlace}</td>
                    <td>{val.userBloodGroup}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <form className="updatehealth">
            <input
              type="text"
              placeholder="VITALS"
              onChange={(e) => {
                setuserVitals(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="HEIGHT"
              onChange={(e) => {
                setuserHeight(e.target.value);
              }}
            />{" "}
            <input
              type="number"
              placeholder="WEIGHT"
              onChange={(e) => {
                setuserWeight(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              placeholder="DONAR STATUS"
              onChange={(e) => {
                setuserStatus(e.target.value);
              }}
            />
            <button>UPDATE</button>
          </form>
        </div>
      );
    };
    export default UpdateHealth;
    
