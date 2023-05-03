import React, { useState } from "react";

import '../../css/Search.css';

const Search=()=>{
    var[place, setplace] = useState("");
    var[blood, setblood]= useState("");
    const[searchList, setsearchList]= useState([]);

    return(
        <div className="search">
            {" "}
            <form>
                <input
                    type="text"
                    placeholder="PLACE"
                    name="place"
                    onChange={(e)=>{
                        setplace(e.target.value)
                    }}
                    />
                <input
                    type="text"
                    placeholder="BLOOD GROUP"
                    name="bloodgroup"
                    onChange={(e)=>{
                        setblood(e.target.vlaue);
                    }}
                />
            </form>
            <table className="blood-table">
                <thead>
                    <tr><th>Name</th>
                    <th>Phone</th>
                    <th>Place</th>
                    <th>BloodGroup</th></tr>
                </thead>
                <tbody>
                    {searchList.map((val,i)=>{
                        return(
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
}
export default Search;