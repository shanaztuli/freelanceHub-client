import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import logo from "/logos.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12">
      <div className="grid md:grid-cols-5 gap-8">
        <div>
          <div className="flex gap-2">
            <img className="h-10" src={logo} alt="" />
            <h3 className="text-white font-bold text-2xl mb-2">
              Freelance Hub
            </h3>
          </div>
          <p className="text-sm">
            Freelance Hub connects talented freelancers with businesses
            worldwide. Explore, post, and accept tasks effortlessly in a trusted
            digital marketplace.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">All Jobs</li>
            <li className="hover:text-white cursor-pointer">Add a Job</li>
            <li className="hover:text-white cursor-pointer">
              My Accepted Tasks
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Features</h4>
          <ul className="space-y-1 text-sm">
            <li>Post & Manage Jobs</li>
            <li>Accept Tasks Easily</li>
            <li>Real-time Notifications</li>
            <li>Secure Firebase Authentication</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact & Social</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@freelancehub.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +1 (800) 555-FLNC
            </li>
            <div className="flex gap-3 mt-3 text-gray-400">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedin />
              </a>
            </div>
          </ul>
        </div>
      </div>

      <div className="text-left md:text-center text-gray-500 text-sm mt-8">
        © 2025 FreelanceHub — All Rights Reserved. Crafted with ❤️ for
        freelancers and businesses.
      </div>
    </footer>
  );
};

export default Footer;
