import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import MyPostedJobs from "../Pages/MyPostedJobs";
import AddJobs from "../Pages/AddJobs";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import NotFound from "../Pages/Error";
import MyAcceptedTasks from "../Pages/MyAcceptedTasks";
import JobDetails from "../Pages/JobDetails";
import MyAddedJobs from "../Pages/MyAddedJobs";
import Error from "../Pages/Error";

 export const router = createBrowserRouter([
   {
     path: "/",
     Component: RootLayouts,
     children: [
       {
         index: true,
         loader: () => fetch("http://localhost:5001/latest-jobs"),

       element:<Home></Home>
       },
       {
         path: "/allJobs",
         loader: () => fetch("http://localhost:5001/jobs"),
        element:<AllJobs></AllJobs>
       },
       {
         path: "/jobDetails/:id",
         loader: ({ params }) =>
           fetch(`http://localhost:5001/jobs/${params.id}`),
         element: (
           <PrivateRoute>
             <JobDetails></JobDetails>
           </PrivateRoute>
         ),
       },

       {
         path: "/addJobs",
         element: (
           <PrivateRoute>
             <AddJobs></AddJobs>
           </PrivateRoute>
         ),
       },
       {
         path: "/myAcceptedTasks",
         element: (
           <PrivateRoute>
             <MyAcceptedTasks></MyAcceptedTasks>
           </PrivateRoute>
         ),
       },
       {
         path: "/myAddedJobs",
         element: (
           <PrivateRoute>
             <MyAddedJobs></MyAddedJobs>
           </PrivateRoute>
         ),
       },
     ],
   },

   {
     path: "/auth",
     element:<AuthLayout></AuthLayout>,
     children: [
       {
         path: "/auth/login",
         element: <Login></Login>,
       },
       {
         path: "/auth/register",
         element: <Register></Register>,
       },
     ],
   },
   {
     path: "/*",
     element:<Error></Error>,
   },
 ]);

