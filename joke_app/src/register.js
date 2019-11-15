import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const submitHandler = e => {
    e.preventDefault();
    console.log(`submit`);
    axios
      .post(`http://localhost:3300/api/auth/register`, user)
      .then(res => console.log(res));
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
