import React, { useState } from "react";
// import { loginUser } from "../services/api";
import {Link,NavLink} from 'react-router-dom'


function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(form);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setMessage("✅ Login successful!");
    } catch (error) {
      setMessage("❌ " + error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit"><Link to="/"></Link>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
