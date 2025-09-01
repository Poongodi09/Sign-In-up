import React from "react";
import { useAuth } from "./../Context/AuthContext";   // ✅ use custom hook
import "./../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();   // ✅ get user from context

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>🏠 Welcome to Our App</h1>
        <p>This is the home page of your authentication project.</p>

        {user ? (
          <div className="welcome-box">
            <div className="welcome-content">
              <p>
                Hello <strong style={{ color: '#0077b6' }}>{user.name}!</strong> 🎉 <br />
                You are logged in with email:{" "}
                <strong style={{ color: '#0077b6' }}>{user.email}</strong>
              </p>
            </div>
            <div className="welcome-image">
              <img src="/gurl-3.png" alt="Welcome" />
            </div>
          </div>
        ) : (
          <div className="welcome-box">
            <p>
              You are not logged in. Please{" "}
              <Link to="/login">
                <strong style={{ color: '#e76f51', textDecoration: 'none' }}>
                  Login
                </strong>
              </Link>{" "}
              or{" "}
              <Link to="/register">
                <strong style={{ color: '#e76f51', textDecoration: 'none' }}>
                  Register
                </strong>
              </Link>{" "}
              to continue.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
