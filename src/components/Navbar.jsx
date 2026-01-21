import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "Projects", path: "/projects" },
    { id: 4, label: "Portfolio", path: "/portfolio" },
    { id: 5, label: "Skills", path: "/skills" },
    { id: 6, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed top-0 left-0 bg-black px-4 z-50">
<h1
  className="text-4xl ml-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
  style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
>
  Badri
</h1>


      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, label, path }) => (
          <li key={id} className="px-4 capitalize font-medium">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `cursor-pointer text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent duration-300 ${
                  isActive ? "text-cyan-400" : ""
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, label, path }) => (
            <li key={id} className="py-6 text-4xl">
              <NavLink
                to={path}
                onClick={() => setNav(false)}
className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent duration-300"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
