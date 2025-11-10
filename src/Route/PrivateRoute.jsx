import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner.jsx/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Spinner/>; 
  }

  if (user && user.email) {
    return children; 
  }

  
  return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
