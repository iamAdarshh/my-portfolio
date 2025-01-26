import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ProfileImage from "../assets/profile.jpeg";

const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-16">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-8">
        {/* Profile Image */}
        <div className="mb-8 sm:mb-0">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-80 h-80 rounded-full border-4 border-gray-700"
          />
        </div>

        {/* Text and Buttons */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            Hello, I'm Adarsh Choudhary
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Full-Stack Developer/Student at University of Paderborn
          </p>
          <p className="mt-4 text-lg text-gray-500">
            I am passionate about creating interactive and user-friendly web
            applications. I enjoy learning new technologies and improving my
            development skills.
          </p>
          <div className="mt-6 space-x-4">
            <button className="px-6 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800">
              Download CV
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-black">
              Contact Info
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/adarsh-choudhary-686804180/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/iamAdarshh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
