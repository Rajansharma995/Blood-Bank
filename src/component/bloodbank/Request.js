
import React, { useState, useEffect } from "react";
import { decodeToken } from 'react-jwt';
import '../../css/Request.css';
import UploadImage from '../firebase/imageUploadFun';

const Request = () => {
  const [bloodTable, setBloodTable] = useState([]);

  const [form, setForm] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    age: "",
    contactnumber: "",
    email: '',
    incident: "",
    bloodgroup: 'A+',
    Gender: "",
    Hospital: "",
    unit: "",
    emergency: "true",
    requiredate: new Date(),
    image: ""
  });

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/requestor/", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setBloodTable(data);
      })
      .catch((error) => {
        console.log("Error fetching blood table:", error);
      });
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const requestBlood = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    };
    fetch("http://127.0.0.1:8000/api/requestform/", requestOptions)
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

  return (
    <div className="request">
      <h3>REQUEST BLOOD</h3>
      <table className="blood-table">
        <thead>
          <tr>
            <th>BLOOD GROUP</th>
            <th>UNIT</th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.bloodgroup}</td>
                <td>{val.unit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <form>
        <select id="bloodgroup" onChange={handleChange} name="bloodgroup" value={form.bloodgroup}>
          <option value="A+">A+ve</option>
          <option value="A-">A-ve</option>
          <option value="B+">B+ve</option>
          <option value="B-">B-ve</option>
          <option value="AB+">AB+ve</option>
          <option value="AB-">AB-ve</option>
          <option value="O+">O+ve</option>
          <option value="O-">O-ve</option>
          <option value="PNUll">P Null</option>
        </select>
        <input type="text" placeholder="First Name" name='firstname' onChange={handleChange} value={form.firstname} />
        <input type="text" placeholder="Middle Name"
          name='middlename' onChange={handleChange} value={form.middlename} />
        <input type="text" placeholder="Last Name" name='lastname' onChange={handleChange} value={form.lastname} />
       <input type="number" placeholder="Age" name='age' onChange={handleChange} value={form.age} />
        <input type="number" placeholder="Contact Number" name='contactnumber' onChange={handleChange} value={form.contactnumber} />
        <input type="text" placeholder="Email" name='email' onChange={handleChange} value={form.email} />
        <input type="text" placeholder="Incident" name='incident' onChange={handleChange} value={form.incident} />
        <input type="text" placeholder="Gender" name='Gender' onChange={handleChange} value={form.Gender} />
        <UploadImage setForm={setForm} />
        <input type="text" placeholder="Hospital" name='Hospital' onChange={handleChange} value={form.Hospital} />
        <input type="number" placeholder="Unit" name='unit' onChange={handleChange} value={form.unit} />
        <input type="text" placeholder="Emergency" name='emergency' onChange={handleChange} value={form.emergency} />
        <button type="submit" onClick={requestBlood}>REQUEST</button>
</form>
</div>
);
};

export default Request;