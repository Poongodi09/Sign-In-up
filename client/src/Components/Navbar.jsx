import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UseAuth } from "./../Context/AuthContext";
import "../Styles/Navbar.css";   

const Navbar = () => {
  
  const { user, logout } = UseAuth();

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
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
