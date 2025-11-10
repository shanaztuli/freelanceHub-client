import React from "react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-20 px-8">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 flex flex-col gap-6">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold leading-snug"
          >
            Your Trusted Freelance Marketplace
          </motion.h1>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-xl"
          >
            Hire top freelancers or find your next project with ease.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <button
              onClick={() => navigate("/addJobs")}
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Create a Job
            </button>
            <button
              onClick={() => navigate("/allJobs")}
              className="border btn-primary border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Jobs
            </button>
          </motion.div>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <motion.img
            src="https://images.unsplash.com/photo-1588026193712-31163b26c043?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
            alt="Freelance Illustration 1"
            className="w-full h-[400px] rounded-2xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          />
          <motion.img
            src="https://plus.unsplash.com/premium_photo-1669686966146-da8d2400de46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjB3b3JraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
            alt="Freelance Illustration 2"
            className="w-full h-[400px] rounded-2xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
          />
          <motion.img
            src="https://plus.unsplash.com/premium_photo-1672997189450-2b751ffdd772?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjB3b3JraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
            alt="Freelance Illustration 3"
            className="w-full h-[300px] rounded-2xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.7, type: "spring", stiffness: 50 }}
          />
          <motion.img
            src="https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000https://cdn.undraw.co/illustrations/remotely_p27a.svg"
            alt="Freelance Illustration 4"
            className="w-full h-[300px] rounded-2xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, type: "spring", stiffness: 50 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
