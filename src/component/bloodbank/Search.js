import React, { useState, useEffect } from "react";

import '../../css/Search.css';

const Search = () => {
  const [place, setPlace] = useState("");
  const [blood, setBlood] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/emergency/");
      const data = await response.json();
      setSearchList(data);
    };
    fetchData();
  }, [place, blood]);

  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="PLACE"
          name="place"
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="BLOOD GROUP"
          name="bloodgroup"
          onChange={(e) => {
            setBlood(e.target.value);
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