import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../Context/AuthContext";  // ✅ correct import
import "../styles/Navbar.css";   

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();             // clear state + localStorage
    navigate("/login");   // ✅ redirect to login after logout
  };

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span>Hello, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
