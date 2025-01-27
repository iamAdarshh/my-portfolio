import React from "react";
import ProfileImage from "../assets/profile.jpeg";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import Button, { ButtonVariants } from "./Button";

const About: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-50 py-16 px-12">
      <div className="flex gap-5 items-center justify-center md:flex-nowrap flex-wrap">
        {/* Profile Image */}
        <img
          src={ProfileImage}
          alt="Profile"
          className="rounded-full border-4 border-gray-700 h-72 w-72"
        />

        {/* Text and Buttons */}
        <div className="flex">
          <div className="flex flex-col sm:items-start justify-center text-center gap-3 items-center">
            <div className="text-lg font-sm text-gray-600">Hey, I'm</div>
            <h1 className="md:text-6xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500">
              Adarsh Choudhary
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              Full-Stack Developer / Student at University of Paderborn
            </p>
            <p className="text-lg text-gray-500 text-start">
              I'm a software engineer based in India, currently pursuing my
              Master's in Computer Science in Germany. I enjoy building
              interactive, user-friendly web applications and exploring new
              technologies.
            </p>
            <div className="flex gap-3">
              <Button className="text-sm">Download CV</Button>
              <Button
                variant={ButtonVariants.Light}
                className="flex gap-2 items-center text-gray-800 text-sm"
              >
                <span>Say hi</span>
                <FaArrowRight className="h-3" />
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-3">
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
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:space-x-8"></div>
    </section>
  );
};

export default About;
// import React from "react";

// const About: React.FC = () => {
//   return (
//     <div className="flex flex-col items-start justify-center text-center space-y-6 px-6">
//       <div className="text-xl font-normal text-gray-600">Hey, I'm</div>
//       <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500">
//         Darlene Robertson
//       </h1>
//       <p className="text-lg max-w-3xl text-gray-700">
//         I'm a software engineer based in Toronto, Canada and also a
//         communication and journalism student. I enjoy creating things that live
//         on the internet, whether that be websites, applications, or anything in
//         between. I have been freelancing for a year now while studying at the
//         university and I've managed to gain a decent amount of experience and
//         valuable knowledge from all different kinds of fields throughout my
//         projects/work.
//       </p>
//       <a
//         href="#contact"
//         className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
//       >
//         Say hi →
//       </a>
//     </div>
//   );
// };

// export default About;
