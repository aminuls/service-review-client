import React from "react";
import SvgGen from "../components/Svg/SvgGen";

const Blog = () => {
   return (
      <div className="mb-5 pb-5">
         <SvgGen></SvgGen>
         <div>
            <h2 className="display-5">Blog Page</h2>
         </div>
         <div className="my-4 container text-start">
            <div className="accordion d-flex flex-column gap-3" id="accordionExample">
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingOne">
                     <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Tell the differences between SQL and NoSQL?
                     </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and
                        generally do not use SQL.
                     </div>
                  </div>
               </div>
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingTwo">
                     <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What is JWT, and how does it work?
                     </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it
                        is digitally signed.
                     </div>
                  </div>
               </div>
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingThree">
                     <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What is the difference between javascript and NodeJS?
                     </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming
                        language.
                     </div>
                  </div>
               </div>
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingThree">
                     <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How does NodeJS handle multiple requests at the same time?
                     </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an
                        infinite loop that receives requests and processes them.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Blog;
