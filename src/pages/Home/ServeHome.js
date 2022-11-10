import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";

const ServeHome = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch("https://wild-photo-server.vercel.app/servehome")
         .then((res) => res.json())
         .then((service) => setServices(service));
   }, []);
   return (
      <div className="container mx-auto my-5">
         <h1 className="display-6 fw-semibold text-muted mb-4">Our Creative Services</h1>
         <Cards services={services}></Cards>
         <div className="mt-3">
            <Link to="/services">
               <button type="button" className="btn btn-primary btn-lg px-5">
                  View All
               </button>
            </Link>
         </div>
      </div>
   );
};

export default ServeHome;
