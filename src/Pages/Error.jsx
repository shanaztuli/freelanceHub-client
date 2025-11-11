import React from "react";
import errorImg from "../assets/App-Error-BtCmwEV6.png";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Error = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar></Navbar>
      <img className="block mx-auto" src={errorImg} alt="" />

      <h2 className="text-3xl font-bold mb-2 text-center">
        Oops, page not found!{" "}
      </h2>
      <p className="text-center">
        The page you are looking for is not available.
      </p>
      <div className="flex justify-center">
        <Link to="/">
          {" "}
          <button className="btn btn-primary text-white "> Go Back</button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
