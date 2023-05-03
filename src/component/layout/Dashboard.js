import React, { useState } from "react";

import Footer from "./Footer";

import '../../css/Dashboard.css';
const Dashboard=()=>{
    const [bloodTable,setbloodTable]= useState([]);

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