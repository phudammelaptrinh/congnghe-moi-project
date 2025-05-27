import React from "react";
import { Navigate } from "react-router-dom";

// Hàm kiểm tra login
const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

const PrivateRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
