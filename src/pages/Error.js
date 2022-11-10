import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
         <img src="../images/error.jpg" alt="error" />
         <div className="mt-3">
            <h2 style={{ fontFamily: "cursive" }}>
               Go to{" "}
               <Link to="/" className="text-decoration-none">
                  Home page
               </Link>
            </h2>
         </div>
      </div>
   );
};

export default Error;
