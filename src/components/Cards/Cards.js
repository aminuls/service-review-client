import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Cards = ({ services }) => {
   // console.log(services);
   return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
         {services.map((service) => {
            const { _id, description, images, name, price, rating } = service;
            return (
               <div key={_id} className="col">
                  <div className="card h-100">
                     <PhotoProvider speed={() => 800} easing={(type) => (type === 2 ? "cubic-bezier(0.36, 0, 0.66, -0.56)" : "cubic-bezier(0.34, 1.56, 0.64, 1)")} maskOpacity={0.8}>
                        <PhotoView src={images}>
                           <img src={images} className="card-img-top" alt="nature" />
                        </PhotoView>
                     </PhotoProvider>
                     <div className="card-body pb-0 text-start">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                           {description.length > 84 ? (
                              <>
                                 {`${description.slice(0, 84)}... `}
                                 <Link className="text-decoration-none" to={`/services/${_id}`}>
                                    See More
                                 </Link>
                              </>
                           ) : (
                              description
                           )}
                        </p>
                     </div>
                     <div className="card-footer bg-transparent border-0 m-0">
                        <div className="mb-3 w-100">
                           <Link to={`/services/${_id}`}>
                              <button type="button" className="btn btn-primary btn-danger btn-lg py-1 px-5 w-100">
                                 See Details
                              </button>
                           </Link>
                        </div>
                        <div className="d-flex justify-content-between">
                           <h5>Price: ${price}</h5>
                           <h5>Ratings: {rating}</h5>
                        </div>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Cards;
