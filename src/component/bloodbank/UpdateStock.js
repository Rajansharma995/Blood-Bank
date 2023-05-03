import React,{useState}from "react";

import '../../css/UpdateStock.css';

const UpdateStock = () => {
    const [unitUpdate, setunitUpdate] = useState(0);
  
    const [bloodTable, setbloodTable] = useState([]);

 
  
    return (
      <div className="dashboard">
        <h1>UPDATE BLOOD STOCK</h1>
  
        <table className="update-blood-table">
          <thead>
            <tr>
              <th>Blood Group</th>
              <th>Unit </th>
            </tr>
          </thead>
          <tbody>
            {bloodTable.map((val) => {
              return (
                <tr key={val.b_id}>
                  <td>{val.blood_group}</td>
                  <td>{val.unit}</td>
                  <input
                    type="number"
                    onChange={(e) => {
                      setunitUpdate(e.target.value);
                    }}
                  />
                  
                </tr>
              );
            })}
          </tbody>
        </table>
        <button>UPDATE</button>
      </div>
    );
  };
  export default UpdateStock;
  