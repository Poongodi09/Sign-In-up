import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./Context/AuthContext";

const App = () => {
  const { user } = useAuth();  // ✅ safe here (because wrapped in main.jsx)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* redirect if logged in */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
};

export default App;
