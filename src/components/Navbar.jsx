import React from "react";
import { FaHouse, FaUser, FaCode, FaBriefcase, FaLaptopCode, FaEnvelope } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { id: 1, label: "Home", path: "/", icon: FaHouse },
    { id: 2, label: "About", path: "/about", icon: FaUser },
    { id: 3, label: "Projects", path: "/projects", icon: FaCode },
    { id: 4, label: "Portfolio", path: "/portfolio", icon: FaBriefcase },
    { id: 5, label: "Skills", path: "/skills", icon: FaLaptopCode },
    { id: 6, label: "Contact", path: "/contact", icon: FaEnvelope },
  ];

  return (
    <>
      <div className="flex justify-center items-center w-full h-20 text-white fixed top-0 left-0 bg-black px-4 z-50">
        <h1
          className="text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
        >
          Badri's Portfolio
        </h1>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] md:w-auto bg-black/80 backdrop-blur-md border border-cyan-900/50 rounded-2xl px-4 py-3 z-50">
        <ul className="flex items-center justify-between md:justify-center gap-1 sm:gap-2">
          {links.map(({ id, label, path, icon: Icon }) => (
            <li key={id}>
              <NavLink
                to={path}
                title={label}
                className={({ isActive }) =>
                  `w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl text-base sm:text-lg transition duration-300 ${
                    isActive
                      ? "text-cyan-300 bg-cyan-900/40"
                      : "text-gray-300 hover:text-cyan-300 hover:bg-cyan-900/20"
                  }`
                }
              >
                <Icon />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
