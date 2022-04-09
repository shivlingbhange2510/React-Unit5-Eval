import React, { useState } from "react";
import axios from "axios";
export const Login = () => {
  const baseUrl = `https://masai-api-mocker.herokuapp.com`;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/auth/login`, { username:userName, password })
      .then((res) => {
        console.log("login", res);
      })
      .catch((er) => {
        console.log("login err ", er);
      });
  };
  return (
    <div>
      Login
      <p>username / email id</p>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>password / email id</p>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginUser}>login </button>
    </div>
  );
};
