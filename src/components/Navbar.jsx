// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="  ">
      <nav className=" flex justify-between items-center mb-20">
        <h1 className="text-white text-4xl">Pr</h1>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/prashant-saxena-42b04a1b5/"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            href="https://github.com/PrashantSaxena000000?tab=repositories"
          >
            <FaGithub />
          </a>
          <a target="_blank" href="https://www.instagram.com/paladinpixel96/">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
