import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Example: check if user is logged in
  const isLoggedIn = localStorage.getItem("token"); // replace with your auth logic

  if (!isLoggedIn) {
    // User is not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // User is logged in, render the protected component
  return children;
};

export default ProtectedRoute;
