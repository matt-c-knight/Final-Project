import React, { useState, useContext } from "react";
// import * as React from "react";
import Form from "../components/Form";
import API from "../utils/API";
import { UserContext } from "../context/UserContext";



export default function Login(props) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userid, updateUserId } = useContext(UserContext);

//  const {userid, setuserid} = useContext(ThemeContext);
// console.log(userid);






  function handleSubmit(event) {
    event.preventDefault();
    API.saveUser({
        username: userName,
        password: password
    })
    .then(res => console.log(res.data._id))
    .catch(err => console.log(err))

  }
  function handleSubmit2(event) {
    event.preventDefault();
    API.getUser({
        'username' : userName,
        'password' : password
        
    })
    .then(res => {console.log("user",res)
    console.log(res.data._id)
    updateUserId(res.data._id)
    console.log(userid)
  })
    .catch(err => console.log(err))
  }

  return (
    <div className="Login">
    
      <Form handleSubmit={handleSubmit} userName={userName} setUsername={setUsername} setPassword={setPassword} handleSubmit2={handleSubmit2} />
      
    </div>
  );
}

 