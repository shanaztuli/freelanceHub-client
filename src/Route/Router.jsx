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
import NotFound from "../Pages/NotFound";
import MyAcceptedTasks from "../Pages/MyAcceptedTasks";

 export const router = createBrowserRouter([
   {
     path: "/",
     Component: RootLayouts,
     children: [
       {
         index: true,
       
         Component: Home,
       },
       {
         path: "/allJobs",
         Component: AllJobs,
       },

       {
         path: "/addJobs",
         element: 
         
             <AddJobs></AddJobs>,
          
       
       },
       {
         path: "/myAcceptedTasks",
         element:<MyAcceptedTasks></MyAcceptedTasks>
       },
     ],
   },

   {
     path: "/auth",
     Component: AuthLayout,
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
    path:'/*',
    element: <NotFound></NotFound>
   }
 ]);

