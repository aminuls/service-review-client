import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);

   const location = useLocation();
   // console.log("from protected", location);
   if (loading) {
      return (
         <div className="relative vh-100">
            <div className="spinner-border position-fixed text-primary top-50 start-50" style={{ width: "3rem", height: "3rem", zIndex: "99999999" }} role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         </div>
      );
   }

   if (user && user.uid) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
