import React, { useState } from "react";
// import { registerUser } from "../services/api";
import "../../log.css"
import { useEffect } from "react";
import axios from "axios";

function Register() {
  const [Name,setName]=useState("");
  const [Email,setEmail]=useState("");
  const [pass,setPass]=useState("");

  const handlesubmit=()=>{
     const res =  axios.post("http://localhost:5000/api/register", {
        message:{"Name":Name,"Email":Email,"pass":pass},
      });
      console.log(res.data);
      
      
  }



  return (
    <div className="form-container">
      <h2>Register</h2>
        <input name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)} required />
        <input name="email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
        <input name="password" type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} required />
        <button onClick={handlesubmit}>Register</button>
    </div>
  );
}

export default Register;

