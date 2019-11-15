import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [token, setToken] = useState("");

  console.log(`token`, token);

  const submitHandler = e => {
    e.preventDefault();
    console.log(`submit`);
    axios
      .post(`http://localhost:3300/api/auth/login`, user)
      .then(res => setToken(res.data.token));
    setUser({
      username: "",
      password: ""
    });
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="your username"
          onChange={e => {
            setUser({ ...user, username: e.target.value });
          }}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="your password"
          onChange={e => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
