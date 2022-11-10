import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);

   const location = useLocation();
   console.log("from protected", location);
   if (loading) {
      return (
         <div className="spinner-border text-primary position-absolute top-50 start-50 translate-middle" role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
      );
   }

   if (user && user.uid) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
