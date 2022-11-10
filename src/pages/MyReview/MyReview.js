import React, { useContext, useEffect, useState } from "react";
import SvgGen from "../../components/Svg/SvgGen";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReview = () => {
   const { user } = useContext(AuthContext);
   const [myReview, setMyReview] = useState([]);
   useEffect(() => {
      fetch(`http://localhost:5000/insmyreview/${user?.email}`)
         .then((res) => res.json())
         .then((data) => setMyReview(data));
   }, [user?.email]);

   return (
      <div>
         <SvgGen></SvgGen>
         <div className="mx-2 mx-lg-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
               {myReview?.map((singleReview) => {
                  const {_id, date, photo, review, username, service_name, time} =  singleReview;
                  console.log(singleReview);
                  return (
                     <div className="col">
                        <div className="card h-100">
                           <img src="..." className="card-img-top" alt="..." />
                           <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
