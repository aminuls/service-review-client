import React from "react";

const CaroItem = ({ img, active }) => {
   return (
      <div className={`carousel-item ${active}`} data-bs-interval="2000">
         <div className="carOverlay">
            <img src={img} className="d-block w-100" alt="banner-1" style={{ height: "calc(15rem + 26vw)" }} />
         </div>
         <div className="carousel-caption text-start translate-middle d-none d-md-block" style={{ left: "35%", top: "45%", width: "55%" }}>
            <h1 className="display-4 fw-semibold">
               We Capture the real
               <br /> <span className="display-1 text-info">Beauty</span> of your <br /> everyday <span className="display-1 text-danger fw-normal">Life</span>
            </h1>
         </div>
      </div>
   );
};

export default CaroItem;
