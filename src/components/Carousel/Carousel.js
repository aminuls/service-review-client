import React from "react";
import CaroItem from "./CaroItem";
import "./Carousel.css";

const Carousel = () => {
   return (
      <div>
         <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators gap-2">
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active rounded-circle" aria-current="true" aria-label="Slide 1" style={{ height: "12px", width: "12px" }}></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="rounded-circle" aria-label="Slide 2" style={{ height: "12px", width: "12px" }}></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="rounded-circle" aria-label="Slide 3" style={{ height: "12px", width: "12px" }}></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="rounded-circle" aria-label="Slide 4" style={{ height: "12px", width: "12px" }}></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="rounded-circle" aria-label="Slide 5" style={{ height: "12px", width: "12px" }}></button>
            </div>
            <div className="carousel-inner">
               <CaroItem img="../../images/banner-1.png" active="active"></CaroItem>
               <CaroItem img="../../images/banner-2.png" active=""></CaroItem>
               <CaroItem img="../../images/banner-3.png" active=""></CaroItem>
               <CaroItem img="../../images/banner-4.png" active=""></CaroItem>
               <CaroItem img="../../images/banner-5.png" active=""></CaroItem>
            </div>
            <button className="carousel-control-prev" style={{ width: "10%" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" style={{ width: "10%" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>
      </div>
   );
};

export default Carousel;
