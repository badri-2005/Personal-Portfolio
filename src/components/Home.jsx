import React from "react";
import image1 from "../assets/Portfolio/image1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaPhoneSquare } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/in/badri-narayanan-b-r-8ab5a6246/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={22} />,
      href: "https://github.com/badri-2005",
    },
    {
      id: 3,
      label: "Phone",
      icon: <FaPhoneSquare size={22} />,
      href: "tel:+918838271155",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={22} />,
      href: "/BadriNarayanan-Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-[20%] left-0 z-40">
      <ul>
        {links.map(({ id, label, icon, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-36 h-12 px-3 ml-[-100px] hover:ml-[-8px] duration-300 bg-gray-500 " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white text-sm font-semibold"
              target="_blank"
              rel="noreferrer"
              download={download}
            >
              {label}
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => {

  return (
  <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center pt-24"
    >
      {/* Reduced max-width and added mx-auto to force the grid to the middle */}
      <div className="max-w-screen-lg mx-auto w-full grid grid-cols-1 md:grid-cols-2 px-8 gap-12 items-center">

        {/* Left Content - text is still left-aligned for a clean look, but the block is centered */}
        <div className="flex flex-col justify-center items-start space-y-4">
          <p className="text-gray-400 uppercase tracking-wide text-sm">
            Hi, I'm
          </p>

         <h1 className="text-5xl sm:text-2xl lg:text-7xl font-bold text-white ">
            Badri Narayanan
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400">
            Aspiring Web Dev & Data Engineer
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed text-justify text-sm sm:text-base">
            Passionate about building scalable web applications and learning
            data engineering concepts. Actively improving problem-solving,
            backend development, and modern frontend technologies.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Image - Smaller size to prevent overcrowding */}
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
 

