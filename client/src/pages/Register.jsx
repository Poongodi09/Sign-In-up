import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      setLoading(true); // start loading
      await axios.post(
        "https://sign-in-up-backend-1w61.onrender.com/api/auth/register",
        { name, email, password, confirmPassword }
      );
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="auth-container">
      <h2 style={{ color: '#e76f51'}}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group underline">
          <span className="icon user"></span>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group underline">
          <span className="icon email"></span>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group underline">
          <span className="icon lock"></span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className={`icon eye ${showPassword ? "active" : ""}`}
            onClick={() => setShowPassword(!showPassword)}
          ></span>
        </div>

        <div className="input-group underline">
          <span className="icon lock"></span>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span
            className={`icon eye ${showConfirmPassword ? "active" : ""}`}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          ></span>
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
