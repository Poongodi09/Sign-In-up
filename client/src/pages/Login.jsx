import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { FaLock, FaEnvelope } from "react-icons/fa"; // add icons
import { BiShow, BiHide } from "react-icons/bi";
import "../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");      
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://sign-in-up-backend-1w61.onrender.com/api/auth/login", { email, password });
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <span className="input-icon"><FaEnvelope /></span>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="input-wrapper">
          <span className="input-icon"><FaLock /></span>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span 
            className="toggle-password" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <BiHide /> : <BiShow />}
          </span>
        </div>

        <button type="submit">Login</button>
      </form>
    </div> 
  );
};

export default Login;
