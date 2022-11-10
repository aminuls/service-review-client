import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';
import SvgGen from '../../components/Svg/SvgGen';

const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/services")
         .then((res) => res.json())
         .then((service) => setServices(service));
   }, []);
   return (
      <div>
         <SvgGen></SvgGen>
         <div className="container mx-auto mb-5">
            <h1 className="display-6 fw-semibold text-muted mb-4">All Creative Services</h1>
            <Cards services={services}></Cards>
         </div>
      </div>
   );
};

export default Services;
