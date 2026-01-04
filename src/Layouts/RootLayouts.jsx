import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Spinner from "../Components/Spinner.jsx/Spinner";

const RootLayouts = () => {
  const {state} = useNavigation;
  return (
    <div className="flex flex-col min-h-screen overflow-visible">
      <header className="w-full">
        <Navbar></Navbar>
      </header>
      <div className="flex flex-col min-h-screen  overflow-visible ">
        <main className="flex-1  pt-16">
          {state == "loading" ? <Spinner></Spinner> : <Outlet></Outlet>}
        </main>
      </div>
      <footer className="w-full">
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RootLayouts;
