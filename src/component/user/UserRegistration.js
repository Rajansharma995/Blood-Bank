import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Register.css";

const UserRegistration = () => {
  const [userPassword, setuserPassword] = useState("");
  const [userFName, setuserFName] = useState("");
  const [userMail, setuserMail] = useState("");
  const [userConfirmPassword, setuserConfirmPassword] = useState("");

  const navigate = useNavigate();

  const UserRegistrationsubmit = (e) => {
    e.preventDefault();
    const body = {
      name: userFName,
      email: userMail,
      password: userPassword,
      password2: userConfirmPassword,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://127.0.0.1:8000/api/register/", requestOptions)
      .then(function (response) {
        if (response.status === 201) {
          return response.json();
        }
        alert("Please fill the required parts");
      })
      .then((value) => {
        if (value) {
          const access_token = value.token.access;
          console.log(access_token);
          navigate("login/usr");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="User-register">
      <form className="userRegister-form">
        <input
          name="userFName"
          type="text"
          placeholder="Full Name"
          onChange={(e) => {
            setuserFName(e.target.value);
          }}
          required
        />
        <input
          name="Email-Id"
          type="text"
          placeholder="Email Place"
          onChange={(e) => {
            setuserMail(e.target.value);
          }}
          required
        />
        <input
          name="userPassword"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
          required
        />
        <input
          name="confirmpassword"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setuserConfirmPassword(e.target.value);
          }}
          required
        />
        <button onClick={UserRegistrationsubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;