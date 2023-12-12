"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 1024) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <header className="bg-black h-24 flex justify-center sm:h-16">
      <div className="flex justify-between items-center h-full w-[90%] lg:w-[90%]">
        <Link href="/" className="hover:bg-gray-800 rounded-full sm:w-12">
          <Image src={logo.src} alt="Navbar logo" width={80} height={80} />
        </Link>
        <ul
          className={
            isOpen
              ? "flex-col absolute top-[6rem] right-0 w-[12rem] h-[15rem] bg-[#333] text-white sm:top-[4rem]"
              : "flex justify-center items-center text-white lg:hidden"
          }
        >
          <li className="m-4 hover:text-gray-400 lg:text-center">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="m-4 hover:text-gray-400 lg:text-center">
            <Link href="/projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li className="m-4 hover:text-gray-400 lg:text-center">
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
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
          <FaBars color="white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
