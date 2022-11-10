import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import SvgGen from "../../components/Svg/SvgGen";
import { AiFillStar } from "react-icons/ai";
import './ServiceDetails.css';

const ServiceDetails = () => {
   const service = useLoaderData();
   console.log(service);
   const { _id, description, name, price, rating, images } = service;
   const handleReview = (e) => {
      e.preventDefault();
      const form = e.target;
      const inputReview = e.target.reviewField.value;
      console.log(inputReview);
      const review = {
         service_name: name,
         service_id: _id,
         review: inputReview,
      };
      fetch("http://localhost:5000/insreview", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(review),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.acknowledged) {
               alert("Review Placed Successfully");
               form.reset();
            }
         })
         .catch((er) => console.error(er));
   };
   return (
      <div>
         <SvgGen></SvgGen>
         <div className="container-xxl mx-auto mb-5">
            <div className="row mx-lg-3">
               <div className="col-lg-8">
                  <div className="card mb-3">
                     <PhotoProvider speed={() => 800} easing={(type) => (type === 2 ? "cubic-bezier(0.36, 0, 0.66, -0.56)" : "cubic-bezier(0.34, 1.56, 0.64, 1)")} maskOpacity={0.8}>
                        <PhotoView src={images}>
                           <img src={images} className="card-img-top" alt="animal" style={{ maxHeight: "20rem", objectFit: "cover" }} />
                        </PhotoView>
                     </PhotoProvider>
                     <div className="card-body">
                        <div className="d-flex justify-content-between fs-5 align-items-baseline flex-column flex-sm-row flex-wrap">
                           <p className="card-text mb-1">{name}</p>
                           <p className="card-text mb-1">Price: ${price}</p>
                           <div className="card-text d-flex gap-1 align-items-baseline">
                              <p>Rating: {rating}</p>
                              <i className="fs-2 text-warning">
                                 <AiFillStar></AiFillStar>
                              </i>
                           </div>
                        </div>
                        <div className="text-start">
                           <p className="fs-4 my-1">Description:</p>
                           <p className="card-text">{description}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col">
                  {/* conditional */}
                  <form onSubmit={handleReview} class="mb-4 text-start">
                     <label for="exampleFormControlTextarea1" class="form-label">
                        Please Give a Review
                     </label>
                     <textarea name="reviewField" class="form-control" id="exampleFormControlTextarea1" placeholder="Type your review here" rows="3" required></textarea>
                     <div class="mt-2 d-flex align-items-center gap-2">
                        <label for="exampleFormControlInput1" class="form-label m-0 p-0">
                           Rating:
                        </label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" style={{width: "70px"}} required/>
                        <i className="fs-3 text-warning">
                           <AiFillStar></AiFillStar>
                        </i>
                     </div>
                     <button className="btn btn-primary mt-2" type="submit">
                        Place Review
                     </button>
                  </form>
                  {/* arraymap will be write here */}
                  <div class="card mb-3">
                     <div class="card-body">
                        <div className="d-flex justify-content-between align-items-center align-items-lg-start align-items-xl-center flex-row flex-lg-column flex-xl-row">
                           <div className="d-flex flex-lg-column flex-xl-row text-start align-items-center align-items-lg-start align-items-xl-center gap-2">
                              <img src="../../images/animal-1.png" class="rounded-circle" alt="..." style={{ width: "60px", height: "60px" }} />
                              <div>
                                 <p className="m-0">Aminul Islam</p>
                                 <p className="text-muted m-0">১০/১১/২০২২</p>
                              </div>
                           </div>
                           <div className="card-text d-flex gap-1 align-items-baseline">
                              <p>Rating: {rating}</p>
                              <i className="fs-3 text-warning">
                                 <AiFillStar></AiFillStar>
                              </i>
                           </div>
                        </div>
                        <div>
                           <p className="card-text text-start my-3 ms-1">{description}</p>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-body">
                        <div className="d-flex justify-content-between align-items-center align-items-lg-start align-items-xl-center flex-row flex-lg-column flex-xl-row">
                           <div className="d-flex flex-lg-column flex-xl-row text-start align-items-center align-items-lg-start align-items-xl-center gap-2">
                              <img src="../../images/animal-1.png" class="rounded-circle" alt="..." style={{ width: "60px", height: "60px" }} />
                              <div>
                                 <p className="m-0">Aminul Islam</p>
                                 <p className="text-muted m-0">30.10.2020</p>
                              </div>
                           </div>
                           <div className="card-text d-flex gap-1 align-items-baseline">
                              <p>Rating: {rating}</p>
                              <i className="fs-3 text-warning">
                                 <AiFillStar></AiFillStar>
                              </i>
                           </div>
                        </div>
                        <div>
                           <p className="card-text text-start my-3 ms-1">{description}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceDetails;
