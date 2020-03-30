import React, { useState } from "react";
import Form from "../components/Form";
import API from "../utils/API";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import "./Login.css";

export default function Login(props) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

//   const [user, getUsername] = useState("");
//   const [pass, getPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }



  function handleSubmit(event) {
    event.preventDefault();
    API.saveUser({
        username: userName,
        password: password
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }
  function handleSubmit2(event) {
    event.preventDefault();
    API.getUsers({
        'name' : new RegExp(userName, 'i'),
        'password' : new RegExp(password, 'i')
        
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className="Login">
    
      <Form handleSubmit={handleSubmit} userName={userName} setUsername={setUsername} setPassword={setPassword} handleSubmit2={handleSubmit2} />
    </div>
  );
}