import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/services",
            element: <Services></Services>,
         },
         {
            path: "/services/:id",
            element: <ServiceDetails></ServiceDetails>,
            loader: async ({ params }) => {
               return fetch(`http://localhost:5000/services/${params.id}`);
            },
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/blog",
            element: <Blog></Blog>,
         },
         {
            path: "/addservice",
            element: <Blog></Blog>,
         },
         {
            path: "/myreviews",
            element: <Blog></Blog>,
         },
      ],
   },
   {
      path: "*",
      element: <Error></Error>,
   },
]);
