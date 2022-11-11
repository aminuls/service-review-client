import React from "react";
import SvgGen from "../../components/Svg/SvgGen";
import useDocumentTitle from "../../useDocumentTitle";

const AddService = () => {
   useDocumentTitle("Add Service");
   const handleAddService = (e) => {
      e.preventDefault();
      const form = e.target;
      const serviceName = form.serviceName.value;
      const price = form.price.value;
      const imgUrl = form.imgUrl.value;
      const rating = form.rating.value;
      const description = form.description.value;

      const addService = {
         description,
         images: imgUrl,
         name: serviceName,
         price,
         rating,
      };
      fetch("https://wild-photo-server.vercel.app/services", {
         method: "POST",
         headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("wildPhotoToken")}`,
         },
         body: JSON.stringify(addService),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               alert("Service Added Successfully");
               form.reset();
            }
         });
   };
   return (
      <div>
         <SvgGen></SvgGen>
         <div className="card container border-0 mt-3 mb-5 pb-5">
            <form className="card-body" onSubmit={handleAddService}>
               <div className="form-floating mb-3">
                  <input type="text" name="serviceName" className="form-control" id="floatingInput" placeholder="Service Name" required />
                  <label htmlFor="floatingInput">Service Name</label>
               </div>
               <div className="row">
                  <div className="col-6 col-sm-5 col-md-4">
                     <div className="input-group mb-3">
                        <span className="input-group-text fs-5">$</span>
                        <div className="form-floating">
                           <input type="number" name="price" className="form-control" id="floatingInputGroup1" placeholder="Price" required />
                           <label htmlFor="floatingInputGroup1">Price</label>
                        </div>
                     </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3">
                     <div className="form-floating mb-3">
                        <input type="number" step="0.01" name="rating" className="form-control" id="floatingInput" placeholder="Service Name" />
                        <label htmlFor="floatingInput">Ratings</label>
                     </div>
                  </div>
                  <div className="col-6 col-sm-3 col-md-5">
                     <div className="form-floating mb-3">
                        <input type="text" name="imgUrl" className="form-control" id="floatingInput" placeholder="Image URL" required />
                        <label htmlFor="floatingInput">Image URL</label>
                     </div>
                  </div>
               </div>
               <div className="form-floating">
                  <textarea rows="5" name="description" className="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
                  <label htmlFor="floatingTextarea">Description</label>
               </div>
               <button className="btn btn-lg btn-primary mt-3" type="submit">
                  Add Service
               </button>
            </form>
         </div>
      </div>
   );
};

export default AddService;
