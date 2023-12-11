"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black h-24 flex justify-center">
      <div className="flex justify-between items-center h-full w-[60%] lg:w-[90%]">
        <Link href="/">
          <img
            src={logo.src}
            alt="Navbar logo"
            className="w-20 m-4 cursor-pointer rounded-full hover:bg-slate-900 sm:w-14"
          />
        </Link>
        <ul
          className={
            isOpen
              ? "flex-col absolute top-[6rem] right-0 w-[12rem] h-[15rem] bg-[#333]"
              : "flex justify-center items-center lg:hidden"
          }
        >
          <li className="m-4 hover:text-gray-400 lg:text-center">
            <Link href="/">Home</Link>
          </li>
          <li className="m-4 hover:text-gray-400 lg:text-center">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="m-4 hover:text-gray-400 lg:text-center">
            <Link href="/about">About</Link>
          </li>
          <div className="flex justify-center items-center w-full lg:flex-col lg:items-center">
            <a
              href="https://github.com/MrMishka02"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-[30%] ml-14 mr-8 lg:ml-0 lg:mr-0 lg:text-center"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/mikheil-gogia-848315247/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-[30%] mr-8 lg:mt-4 lg:mr-0 lg:text-center"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </ul>
        <div
          className="hidden text-2xl cursor-pointer lg:block"
          onClick={toggleMenu}
        >
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
