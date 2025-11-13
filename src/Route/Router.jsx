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
import MyAcceptedTasks from "../Pages/MyAcceptedTasks";
import JobDetails from "../Pages/JobDetails";
import Error from "../Pages/Error";
import Spinner from "../Components/Spinner.jsx/Spinner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () =>
          fetch("https://freelance-hub-server-ebon.vercel.app/latest-jobs"),

        element: <Home></Home>,
      },
      {
        path: "/allJobs",
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () =>
          fetch("https://freelance-hub-server-ebon.vercel.app/jobs"),
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/jobDetails/:id",
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: ({ params }) =>
          fetch(
            `https://freelance-hub-server-ebon.vercel.app/jobs/${params.id}`
          ),
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
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
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
    element: <Error></Error>,
  },
]);
