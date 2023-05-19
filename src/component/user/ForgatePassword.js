import React, { useState } from 'react';
import '../../css/ForgatePassword.css';
const ForgetPassword=()=> {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a JSON object with the email
    const data = {
      email: email
    };

    // Send a POST request to the backend API
    fetch('http://127.0.0.1:8000/api/sendemail/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_access_token',
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Something went wrong');
        }
      })
      .then((data) => {
        // Display success message
        setMessage(data.msg);
      })
      .catch((error) => {
      console.log(error);
      });
  };

  return (
    <div>
      <h1>Forget Password</h1>
      <div>{message}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgetPassword;