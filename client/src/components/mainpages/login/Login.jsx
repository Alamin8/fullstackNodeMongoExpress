import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    stuff_id: "",
    email: "",
    password: "",
  });

  const onChaneInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });
      localStorage.setItem("firstLogin", true);
      alert("Login successfull");

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="register">
      <form onSubmit={loginSubmit}>
        <h1>Login</h1>
        <label htmlFor="staff_id">Staff ID</label>
        <input
          type="number"
          name="stuff_id"
          value={user.staff_id}
          onChange={onChaneInput}
          placeholder="Staff ID"
          required
        />
        <label htmlFor="name">Email</label>
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={onChaneInput}
          placeholder="Email"
          required
        />
        <label htmlFor="name">Password</label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={onChaneInput}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        <p className="loginRegisterChange"><span>Not have an account?</span> <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
