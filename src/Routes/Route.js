import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MyReview from "../pages/MyReview/MyReview";
import Register from "../pages/Register";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import ProtectedRoute from "./ProtectedRoute";

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
               return fetch(`https://wild-photo-server.vercel.app/services/${params.id}`);
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
            element: (
               <ProtectedRoute>
                  <AddService></AddService>
               </ProtectedRoute>
            ),
         },
         {
            path: "/myreviews",
            element: (
               <ProtectedRoute>
                  <MyReview></MyReview>
               </ProtectedRoute>
            ),
         },
      ],
   },
   {
      path: "*",
      element: <Error></Error>,
   },
]);
