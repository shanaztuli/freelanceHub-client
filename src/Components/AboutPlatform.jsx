import React from "react";


const AboutPlatform = () => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
       
        <div className="md:w-1/2">
          <img
            src={
              "https://images.unsplash.com/photo-1646323585878-5a9bde6a162e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2127https://images.unsplash.com/photo-1652498196872-ce0caa66642e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
            }
            alt="About Freelance Hub"
            className="w-full max-h-[650px] rounded-xl shadow-lg"
          />
        </div>

    
        <div className="md:w-1/2 flex flex-col gap-6 mx-3">
          <h2 className="text-4xl text font-bold">About Freelance Hub</h2>
          <p className="text-gray-300 text-lg">
            Freelance Hub is a cutting-edge online marketplace that connects
            talented freelancers with clients seeking high-quality services
            across multiple industries. Whether you need a skilled web
            developer, a creative graphic designer, a professional content
            writer, or a marketing expert, our platform offers a seamless way to
            find and hire the perfect talent. We are committed to providing a
            reliable, transparent, and secure environment where both freelancers
            and clients can collaborate efficiently. With features like
            real-time job postings, easy-to-use dashboards, and verified
            profiles, Freelance Hub empowers freelancers to showcase their
            skills while helping clients bring their projects to life. Join our
            vibrant community today and experience how effortless managing and
            completing projects can be on a trusted platform built for success.
          </p>
          <p className="text-gray-400 text-lg">
            Our mission is to empower freelancers to showcase their skills and
            grow their careers while helping clients find the perfect talent for
            their projects.
          </p>
          <button className="btn-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-max">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
