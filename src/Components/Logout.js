// Logout.js
import React from "react";
import AuthService from "./AuthService";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
