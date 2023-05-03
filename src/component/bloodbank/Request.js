import React, { useState } from "react";

import '../../css/Request.css';

const Request = () => {
    const[bloodTable, setbloodTable]= useState([]);
    // var[bloodGroup, setbloodGroup]= useState();
    const[requestUnit, setrequestUnit]=useState(0);
    



    return(
        <div className="request">
            <h3>
                REQUEST BLOOD
            </h3>
            <table className="blood-table">
                <thead>
             
                    <tr>
                        <th>BLOOD GROUP</th>
                        <th>UNIT</th>
                    </tr>
                </thead>
                <tbody>
                    {bloodTable.map((val)=>{
                        return(
                            <tr key={val.b_id}>
                                <td>{val.blood_group}</td>
                                <td>{val.unit}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <form>
            <select id="bloodgroup" >
          <option value="A+ve">A+ve</option>
          <option value="A-ve">A-ve</option>
          <option value="B+ve">B+ve</option>
          <option value="B-ve">B-ve</option>
          <option value="AB+ve">AB+ve</option>
          <option value="AB-ve">AB-ve</option>
          <option value="O+ve">O+ve</option>
          <option value="O-ve">O-ve</option>
          <option value="PNUll">P Null</option>
          
        </select>
        <input type="number" placeholder="UNITS" onChange={(e)=>{setrequestUnit(e.target.value )}} />
        <button >REQUEST</button>
            </form>
           
        </div>
    );
}
export default Request;