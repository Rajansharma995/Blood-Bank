import React, { useState, useEffect } from "react";

import '../../css/Search.css';

const Search = () => {
  const [phonenumber, setphonenumber] = useState("");
  
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/emergency/");
      const data = await response.json();
      setSearchList(data);
    };
    fetchData();
  }, [phonenumber]);

  return (
    <div className="search">
      <form>
        <input
          type="number"
          placeholder="Phonenumber"
          name="phonenumber"
          onChange={(e) => {
            setphonenumber(e.target.value);
          }}
        />
       
      </form>
      <table className="blood-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Place</th>
            <th>BloodGroup</th>
          </tr>
        </thead>
        <tbody>
          {searchList.map((val, i) => {
            return (
              <tr key={i}>
                <td>{val.userFName}</td>
                <td>{val.userPhone}</td>
                <td>{val.userplace}</td>
                <td>{val.userBloodGroup}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;