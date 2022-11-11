import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import SvgGen from "../../components/Svg/SvgGen";
import { AuthContext } from "../../contexts/AuthProvider";
import useDocumentTitle from "../../useDocumentTitle";

const MyReview = () => {
   useDocumentTitle("My Reviews");
   const [loading, setLoading] = useState(true);
   const { user } = useContext(AuthContext);
   const [myReview, setMyReview] = useState([]);
   const [modalData, setModalData] = useState({});

   const handleDelete = (id) => {
      const status = window.confirm("Are you sure? You want to delete it!");
      console.log(status);
      if (status) {
         fetch(`https://wild-photo-server.vercel.app/delete/${id}`, {
            method: "DELETE",
            headers: {
               authorization: `Bearer ${localStorage.getItem("wildPhotoToken")}`,
            },
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount === 1) {
                  setLoading(false);
                  const result = myReview.filter((review) => review._id !== id);
                  setMyReview(result);
                  alert("Deleted Successfully");
               }
            });
      }
   };
   // console.log(modalData);

   const handleUpdate = (id) => {
      fetch(`https://wild-photo-server.vercel.app/modal/${id}`, {
         headers: {
            authorization: `Bearer ${localStorage.getItem("wildPhotoToken")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            setModalData(data);
            setLoading(false);
         });
   };

   const updateReview = (event) => {
      event.preventDefault();
      const form = event.target;
      let inputReview = form.reviewField.value;
      let ratingField = form.ratingField.value;
      const updateReview = {
         review: inputReview,
         ratings: ratingField,
      };
      // fix url and create server for patch method
      fetch(`https://wild-photo-server.vercel.app/update/${modalData?._id}`, {
         method: "PATCH",
         headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("wildPhotoToken")}`,
         },
         body: JSON.stringify(updateReview),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount === 1) {
               setLoading(false);
               alert(`${modalData.service_name} is Updated`);
               const remaining = myReview.filter((singReview) => singReview._id !== modalData?._id);
               const updated = myReview.find((singReview) => singReview._id === modalData?._id);
               updated.review = inputReview;
               updated.ratings = ratingField;

               const newReview = [updated, ...remaining];
               setMyReview(newReview);
               console.log();
            }
         });
   };

   useEffect(() => {
      fetch(`https://wild-photo-server.vercel.app/insmyreview/${user?.email}`, {
         headers: {
            authorization: `Bearer ${localStorage.getItem("wildPhotoToken")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            setMyReview(data);
            setLoading(false);
         });
   }, [user?.email]);

   return (
      <div>
         <SvgGen></SvgGen>
         {loading ? (
            <div className="relative vh-100">
               <div className="spinner-border position-fixed text-primary top-50 start-50" style={{ width: "3rem", height: "3rem", zIndex: "99999999" }} role="status">
                  <span className="visually-hidden">Loading...</span>
               </div>
            </div>
         ) : (
            <>
               <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                     <form className="modal-content" onSubmit={updateReview}>
                        <div className="modal-header">
                           <h1 className="modal-title fs-5" id="exampleModalLabel">
                              {modalData?.service_name}
                           </h1>
                           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           <div className="mb-4 text-start">
                              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                 Update your Review
                              </label>
                              <textarea name="reviewField" className="form-control" id="exampleFormControlTextarea1" placeholder="Type your review here" rows="3" defaultValue={modalData?.review} required></textarea>
                              <div className="mt-2 d-flex align-items-center gap-2">
                                 <label htmlFor="exampleFormControlInput1" className="form-label m-0 p-0">
                                    Rating:
                                 </label>
                                 <input type="text" name="ratingField" defaultValue={modalData?.ratings} className="form-control" id="exampleFormControlInput1" style={{ width: "70px" }} required />
                                 <i className="fs-3 text-warning">
                                    <AiFillStar></AiFillStar>
                                 </i>
                              </div>
                           </div>
                        </div>
                        <div className="modal-footer">
                           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                              Cancel
                           </button>
                           <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">
                              Update Review
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
               ;
               <div className="mx-2 mx-lg-5 mb-5 pb-5">
                  <h1 className="display-6 fw-semibold text-muted mb-3">My All Reviews</h1>
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                     {myReview?.map((singleReview) => {
                        const { _id, date, photo, review, username, service_name, time } = singleReview;
                        // console.log(singleReview);
                        return (
                           <div key={_id} className="col">
                              <div className="card h-100">
                                 <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center align-items-lg-start align-items-xl-center flex-row flex-lg-column flex-xl-row">
                                       <div className="d-flex flex-lg-column flex-xl-row text-start align-items-center align-items-lg-start align-items-xl-center gap-2">
                                          <img src={photo} className="rounded-circle" alt="..." style={{ width: "60px", height: "60px" }} />
                                          <div>
                                             <p className="m-0">{username}</p>
                                             <p className="text-muted m-0">{`${time}`}</p>
                                          </div>
                                       </div>
                                       <div className="d-flex flex-column">
                                          <div className="d-flex justify-content-end gap-3">
                                             <FiEdit onClick={() => handleUpdate(_id)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="fs-4 text-primary" style={{ cursor: "pointer" }}></FiEdit>
                                             <AiFillDelete onClick={() => handleDelete(_id)} className="fs-4 text-danger" style={{ cursor: "pointer" }}></AiFillDelete>
                                          </div>
                                          <div className="card-text d-flex gap-1 align-items-baseline">
                                             <p className="m-0">Rating: {singleReview?.ratings}</p>
                                             <i className="fs-4 text-warning">
                                                <AiFillStar></AiFillStar>
                                             </i>
                                          </div>
                                       </div>
                                    </div>
                                    <div>
                                       <h4 className="p-0 text-start mt-2 mb-1 mx-1">{service_name}</h4>
                                       <p className="card-text text-start mb-3 ms-1">
                                          {review} <span className="text-muted">{date}</span>
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default MyReview;
