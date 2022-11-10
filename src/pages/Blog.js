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
                        How does the private router works?
                     </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        Basically private router protect or safe a path that cannot be possible without login/registering. Just think is it possible to order a item from any website without knowing your any kind of information. No, it Doesn't. So we
                        need to use private route to protect our soma path. If user login/register the website then it allow the user to go to the path or do something.
                     </div>
                  </div>
               </div>
               <div className="accordion-item border border-5 rounded-0">
                  <h2 className="accordion-header" id="headingThree">
                     <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What is node? How does the node works?
                     </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                     <div className="accordion-body fw-semibold">
                        It is a basic unit of a data structure, such as a linked list or tree data structure. Node contain data and also may link to other nodes. Links between nodes are often implement by pointers. It is a used as backend service
                        where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable,
                        lightweight, fast, and data-intensive.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Blog;
