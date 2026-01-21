import React from "react";
import image1 from "../assets/Portfolio/image1.jpg";
import { FaLinkedin, FaGithub, FaPhoneSquare } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center pt-24"
    >
      <div className="max-w-screen-lg mx-auto w-full grid grid-cols-1 md:grid-cols-2 px-8 gap-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col justify-center items-start space-y-4">
          <p className="text-gray-400 uppercase tracking-wide text-sm">
            Hi, I'm
          </p>

          <h1 className="text-4xl sm:text-2xl lg:text-6xl font-bold text-white">
            Badri Narayanan B R
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400">
            Aspiring Web Dev & Data Engineer
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed text-justify text-sm sm:text-base">
            Passionate about building scalable web applications and learning
            data engineering concepts. Actively improving problem-solving,
            backend development, and modern frontend technologies.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 pt-4 ml-14 lg:ml-28 sm:ml-28 ">
            <a
              href="https://www.linkedin.com/in/badri-narayanan-b-r-8ab5a6246/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-[#0a66c2] duration-300"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://github.com/badri-2005"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-[#ffffff] duration-300"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="tel:+918838271155"
              className="text-gray-300 hover:text-green-400 duration-300"
            >
              <FaPhoneSquare size={28} />
            </a>

            <a
              href="/BadriNarayanan-Resume.pdf"
              download
              className="text-gray-300 hover:text-cyan-400 duration-300"
            >
              <BsFillPersonLinesFill size={28} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={image1}
            alt="profile"
            className="rounded-2xl w-48 sm:w-60 md:w-72 shadow-xl shadow-gray-900"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
