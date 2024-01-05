// Protected.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "./AuthService";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = !!AuthService.getToken();

    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return <Component />;
};

export default Protected;
