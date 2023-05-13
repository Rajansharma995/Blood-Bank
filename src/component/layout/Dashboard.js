import React, { useEffect, useState } from "react";

import Footer from "./Footer";

import '../../css/Dashboard.css';
// import  url  from "inspector";
// import axios from "axios";

const API ="http://127.0.0.1:8000/api/list/";

const Dashboard=()=>{
    const [bloodTable, setbloodTable] = useState([]);
    const token = localStorage.getItem('token');
    console.log(token); 
    const Home = async (url) => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response, "response");
        const data = await response.json(); // Updated to use response.json() instead of response.data
        if (data?.length > 0) {
          setbloodTable(data);
        }
        console.log(data);
      } catch (error) {
        console.log(error, "error");
      }
    };
    


    useEffect(()=>{
            Home(API);
     },[]);

    

    return(
        <div className="dashboard">
            <h1>Blood Stock</h1>
            <table className="blood-table">
                <thead>
                    <tr>
                        <th>Blood Group</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {bloodTable.length > 0 && bloodTable.map((val)=>{
                        return(
                            <tr key={val.b_id}>
                                <td>{val.blood_group}</td>
                                <td>{val.unit}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Footer />
        </div>
    );
}
export default Dashboard;