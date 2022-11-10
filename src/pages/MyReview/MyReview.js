import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import SvgGen from "../../components/Svg/SvgGen";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReview = () => {
   const { user } = useContext(AuthContext);
   const [myReview, setMyReview] = useState([]);
   const handleDelete = (id) => {
      const status = window.confirm("Are you sure? You want to delete it!");
      console.log(status);
      if (status) {
         fetch(`https://wild-photo-server.vercel.app/delete/${id}`, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount === 1) {
                  const result = myReview.find((review) => review._id !== id);
                  setMyReview(result);
                  alert("Deleted Successfully");
               }
            });
      }
   };

   const handleUpdate = () => {};

   useEffect(() => {
      fetch(`https://wild-photo-server.vercel.app/insmyreview/${user?.email}`)
         .then((res) => res.json())
         .then((data) => setMyReview(data));
   }, [user?.email]);

   return (
      <div>
         <SvgGen></SvgGen>
         <div className="mx-2 mx-lg-5 mb-5 pb-5">
            <h1 className="display-6 fw-semibold text-muted mb-3">My All Reviews</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
               {myReview?.map((singleReview) => {
                  const { _id, date, photo, review, username, service_name, time } = singleReview;
                  console.log(singleReview);
                  return (
                     <div className="col">
                        <div key={_id} className="card">
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
                                       <FiEdit onClick={handleUpdate} className="fs-4 text-primary" style={{ cursor: "pointer" }}></FiEdit>
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
      </div>
   );
};

export default MyReview;
