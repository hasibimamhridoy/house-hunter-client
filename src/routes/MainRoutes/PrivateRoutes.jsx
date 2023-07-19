import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  
  if (loading) {
    return <div>Loading</div>;
  }

  if (!user) {
    navigate("/login");
  }

  return <div>{children}</div>;
};

export default PrivateRoutes;
