import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Spinner from "../Components/Spinner.jsx/Spinner";

const RootLayouts = () => {
  const {state} = useNavigation;
  return (
    <div className="flex flex-col min-h-screen max-w-[1400px] mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        {state == "loading" ? (
          <Spinner></Spinner>
        ) : (
          <Outlet></Outlet>
        )}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RootLayouts;
