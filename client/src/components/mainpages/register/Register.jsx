import { useState } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState({
    stuff_id: "",
    name: "",
    email: "",
    mobile: "",
    password: ""
  });
  
  const onChaneInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const registerSubmit =async e =>{
    e.preventDefault()
    try{
        await axios.post('/user/register', {...user})
        alert("registration successfull")
        
        
        localStorage.setItem('firstLogin', true)
        window.location.href="/login";
    }catch(err){
        alert(err.response.data.msg)
    }
  }
  return (
    <div className="register">
      <form onSubmit={registerSubmit}>
        <h1>Register</h1>
        <label htmlFor="staff_id">Staff ID</label>
        <input type="number" name="stuff_id" value={user.staff_id} onChange={onChaneInput} placeholder="Staff ID" required />
        <label htmlFor="name">Name</label>
        <input name="name" type="text"  value={user.name} onChange={onChaneInput} placeholder="Name" required />
        <label htmlFor="name">Email</label>
        <input name="email" type="email" value={user.email} onChange={onChaneInput} placeholder="Email" required />
        <label htmlFor="name">Mobile</label>
        <input name="mobile" type="number" value={user.mobile} onChange={onChaneInput} placeholder="Mobile" required />
        <label htmlFor="name">Password</label>
        <input
          name="password"
          type="password"
          value={user.password} onChange={onChaneInput}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
        <p className="loginRegisterChange"><span>Already have an account?</span> <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;
