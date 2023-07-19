import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner></Spinner>
      </div>
    );
  }

  if (!user) {
    navigate("/login");
  }

  return <div>{children}</div>;
};

export default PrivateRoutes;
