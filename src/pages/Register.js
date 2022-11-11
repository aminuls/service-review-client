import React, { useContext, useState } from "react";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { AuthContext } from "../contexts/AuthProvider";
import SvgGen from "../components/Svg/SvgGen";

const auth = getAuth(app);
const Register = () => {
   const { setUser, createUserByMail, providerLogin } = useContext(AuthContext);
   const [passwordError, setPasswordError] = useState("");
   const [success, setSuccess] = useState(false);
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();
   const navigate = useNavigate();
   const location = useLocation();
   // console.log("from login", location);
   const from = location.state?.from?.pathname || "/";

   const handleGoogle = () => {
      providerLogin(googleProvider)
         .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(from, { replace: true });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleGithub = () => {
      providerLogin(githubProvider)
         .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(from, { replace: true });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleRegister = (event) => {
      event.preventDefault();
      setSuccess(false);
      const form = event.target;
      const name = form.name.value;
      const photourl = form.photourl.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(name, email, password);

      // validate password
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
         setPasswordError("Please provide at least two uppercase");
         return;
      }
      if (password.length < 6) {
         setPasswordError("Password should be at least 6 characters");
         return;
      }

      if (!/(?=.*[!@#$%^&*()])/.test(password)) {
         setPasswordError("Please add at least one special character");
         return;
      }
      setPasswordError("");

      createUserByMail(auth, email, password)
         .then((result) => {
            const user = result.user;
            // console.log(user);
            setUser(user);
            setSuccess(true);
            form.reset();
            updateUserName(name, photourl);
            navigate(from, { replace: true });
         })
         .catch((error) => {
            console.error(error);
            setPasswordError(error.message);
         });
   };

   const updateUserName = (name, photoURL) => {
      updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photoURL,
      })
         .then(() => {
            console.log("display name updated");
         })
         .catch((error) => console.error(error));
   };

   return (
      <div>
         <SvgGen></SvgGen>

         <div className="mx-auto container row row-cols-1 row-cols-md-2 mb-5 pb-5 align-items-start">
            <div className="col-12 col-md-7 col-lg-8 d-flex flex-column justify-content-center align-items-center">
               <div className="">
                  <img src="../images/signup.jpg" alt="signup" style={{ width: "100%", maxHeight: "80vh", objectFit: "cover" }} />
               </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
               <form onSubmit={handleRegister} className="fw-semibold">
                  <div className="mb-3 text-start">
                     <label htmlFor="formGroupExampleInput" className="form-label">
                        Your Name
                     </label>
                     <input name="name" type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name" required />
                  </div>
                  <div className="mb-3 text-start">
                     <label htmlFor="formGroupExampleInput" className="form-label">
                        Photo URL
                     </label>
                     <input name="photourl" type="text" className="form-control" id="formGroupExampleInput" placeholder="Photo url" required />
                  </div>
                  <div className="mb-3 text-start">
                     <label htmlFor="formGroupExampleInput" className="form-label">
                        Email address
                     </label>
                     <input name="email" type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter email" required />
                  </div>
                  <div className="mb-3 text-start">
                     <label htmlFor="formGroupExampleInput2" className="form-label">
                        Password
                     </label>
                     <input name="password" type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" required />
                  </div>
                  <div>
                     <div>
                        <p className="text-danger">{passwordError}</p>
                        {success && <p className="text-success">User Created Successfully</p>}
                     </div>
                     <button className="btn btn-primary px-3" type="submit">
                        Register
                     </button>
                  </div>
               </form>
               <p className="text-center mt-3">
                  Already have an account? Please <Link to="/login">Log in</Link>
               </p>
               <div className="d-flex justify-content-center gap-1">
                  <button onClick={handleGoogle} className="border-0 bg-transparent p-2">
                     <BsGoogle className="fs-2"></BsGoogle>
                  </button>
                  <button onClick={handleGithub} className="border-0 bg-transparent p-2">
                     <BsGithub className="fs-2"></BsGithub>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
