import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
         <img src="../images/error.png" alt="error" />
         <div>
            <h3>
               Go to{" "}
               <Link to="/" className="text-decoration-none">
                  <button className="btn btn-primary btn-lg">Home page</button>
               </Link>
            </h3>
         </div>
      </div>
   );
};

export default Error;
