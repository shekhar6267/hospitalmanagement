// AdminLoginPage.js
import React, { useState } from "react";
import { auth } from "../Firebase"

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" /><br/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLoginPage;
