import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const AuthLayout = () => {
    return (
      <div className="flex max-w-[1400px] mx-auto flex-col ">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="px-4 md:px-0 md:pb-8  md:flex-1 bg-base-200">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
};

export default AuthLayout;