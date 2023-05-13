import React, { useState , useEffect } from "react";

import '../../css/Request.css';

const Request = () => {
    const [bloodTable, setbloodTable] = useState([]);
    const [bloodGroup, setbloodGroup] = useState();
    const [requestUnit, setrequestUnit] = useState(0);
    const token = localStorage.getItem('token');
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/requestor/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
            console.log(response,"he")
          setbloodTable(response.data);
        });
    }, []);
    

    const requestBlood = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            bloodGroup: bloodGroup,
            requestUnit: requestUnit
          })
        };
        fetch("http://127.0.0.1:8000/api/requestor/", requestOptions)
        .then((response) => {
          if (response.ok) {
            console.log("Blood requested successfully!");
            // do something after successful request
          } else {
            console.log("Error requesting blood:", response.statusText);
          }
        })
        .catch((error) => {
          console.log("Error requesting blood:", error);
        });
      };
    

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
                        {bloodTable?.map((val)=>{
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
                <select id="bloodgroup" onChange={()=>setbloodGroup(document.getElementById("bloodgroup"))} >
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
            <button onClick={(e)=>requestBlood(e)}>REQUEST</button>
                </form>
            
            </div>
    );
}
export default Request;