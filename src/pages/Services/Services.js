import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import Cards from "../../components/Cards/Cards";
import SvgGen from "../../components/Svg/SvgGen";
import useDocumentTitle from "../../useDocumentTitle";

const Services = () => {
   useDocumentTitle("Services");
   const [loading, setLoading] = useState(true)
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch("https://wild-photo-server.vercel.app/services")
         .then((res) => res.json())
         .then((service) => {
            setServices(service)
            setLoading(false)
         });
   }, []);
   return (
      <div>
         <SvgGen></SvgGen>
         <div className="container mx-auto mb-5">
            {loading ? (
               <div className="relative vh-100">
                  <div className="spinner-border position-fixed text-primary top-50 start-50" style={{ width: "3rem", height: "3rem", zIndex:"99999999" }} role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
               </div>
            ) : (
               <>
                  <h1 className="display-6 fw-semibold text-muted mb-4">All Creative Services</h1>
                  <Cards services={services}></Cards>
               </>
            )}
         </div>
      </div>
   );
};

export default Services;
