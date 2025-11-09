import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from '/logos.png'


const Navbar = () => {




  const links = (
    <>
      <li className="ml-2">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-200 font-semibold bg-blue-600 rounded-[5px] "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="ml-2">
        <NavLink
          to={"/allJobs"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-200 font-semibold bg-blue-600 rounded-[5px] "
              : ""
          }
        >
          All Jobs
        </NavLink>
      </li>
      <li className="ml-2">
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
      <li className="ml-2">
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
    </>
  );
  //
 
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
            <h1 className=" text-2xl font-bold text-blue-500 ">
              Freelance <span className="text">Hub</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ml-5 gap-x-6">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary "> Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
