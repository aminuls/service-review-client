import "./Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
   const { user, logOut } = useContext(AuthContext);
   const [navDark, setnavDark] = useState(false);
   const [offset, setOffset] = useState(0);
   const handleSignOut = () => {
      logOut()
         .then(() => {})
         .catch((error) => {
            console.log(error);
         });
   };
   useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
   }, []);
   // console.log(offset);
   const handleNavBg = () => {
      setnavDark(!navDark);
   };
   return (
      <div>
         <Navbar fixed="top" className="px-md-2 p-0" collapseOnSelect expand="lg" bg={offset > 35 ? "dark" : navDark ? "dark" : "transparent"} variant={offset > 30 ? "dark" : "transparent"} style={{ transition: "ease-in-out .3s" }}>
            <Container fluid className="p-0 px-md-2">
               <Link to="/" className="navbar-brand p-0">
                  <div className="d-flex align-items-center text-start text-light gap-1">
                     <img src="../../logo.png" alt="logo" className="logo" />
                     <div className="company fs-2">
                        <p className="m-0 lh-1">Wild</p>
                        <p className="m-0 lh-1">Photography</p>
                     </div>
                  </div>
               </Link>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" className="p-1 me-2 bg-primary border-0 navbar-dark" onClick={handleNavBg} />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto fs-6 fw-semibold gap-3">
                     <Nav>
                        <Link role="button" className="nav-link text-light" to="/">
                           Home
                        </Link>
                     </Nav>
                     <Nav>
                        <Link role="button" className="nav-link text-light" to="/services">
                           Services
                        </Link>
                     </Nav>
                     <Nav>
                        <Link role="button" className="nav-link text-light" to="/blog">
                           Blog
                        </Link>
                     </Nav>
                     {user?.uid ? (
                        <>
                           <Nav>
                              <Link role="button" className="nav-link text-light" to="/addservice">
                                 Add Service
                              </Link>
                           </Nav>
                           <Nav>
                              <Link role="button" className="nav-link text-light" to="/myreviews">
                                 My Reviews
                              </Link>
                           </Nav>
                           <Nav>
                              <button onClick={handleSignOut} className="nav-link text-light bg-transparent border-0">
                                 Log out
                              </button>
                           </Nav>
                        </>
                     ) : (
                        <Nav>
                           <Link role="button" className="nav-link text-light" to="/login">
                              Log in
                           </Link>
                        </Nav>
                     )}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;
