import React from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router";
import logo from '/logos.png'
import { AuthContext } from "../../AuthContext/AuthProvider";
import { use } from "react";
import { toast } from "react-toastify";
import userLogo from '../../assets/user.png'

const Navbar = () => {
const { user, logOut, loading } = use(AuthContext);



  const links = (
    <>
      <li className="ml-2 font-bold">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-200 font-semibold bg-blue-600 rounded-[5px]  "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="ml-2 font-bold">
        <NavLink
          to={"/allJobs"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-200  font-semibold bg-blue-600 rounded-[5px] "
              : ""
          }
        >
          All Jobs
        </NavLink>
      </li>
      <li className="ml-2 font-bold">
        <NavLink
          to={"/addJobs"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-200 font-semibold bg-blue-600 rounded-[5px] "
              : ""
          }
        >
          Add Jobs
        </NavLink>
      </li>
      {user && (
        <>
          <li className="ml-2 font-bold">
            <NavLink
              to={"/myAcceptedTasks"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-200 font-semibold bg-blue-600 rounded-[5px] "
                  : ""
              }
            >
              My Accepted Tasks
            </NavLink>
          </li>
          <li className="ml-2 font-bold">
            <NavLink
              to={"/myAddedJobs"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-200 font-semibold bg-blue-600 rounded-[5px] "
                  : ""
              }
            >
              My Added Jobs
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("You signed out");
        Navigate('/');
      })
      .catch();
  };
 
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown z-20">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>

        <div>
          <div className="flex gap-1">
            <img className="h-10" src={logo} alt="" />
            <h1 className=" text-2xl md:text-3xl font-bold text-blue-500 ">
              Freelance <span className="text">Hub</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ml-5 gap-x-6">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <img
            className="w-13 h-13 mr-2 rounded-full"
            src={user.photoURL}
            title={user.displayName}
            alt="userLogo"
          />
        )}
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-primary">
              {" "}
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/auth/login" className="btn btn-primary ">
              {" "}
              Login
            </Link>
            <Link to="/auth/register" className="btn ml-2 bg-base-200 font-bold ">
              {" "}
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
