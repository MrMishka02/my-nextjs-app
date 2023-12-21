"use client";
import Link from "next/link";
import Image from "next/image";
import { saveAs } from "file-saver";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo/logo.png";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { Sidebar } from "..";

const Header = () => {
  const [showText, setShowText] = useState(false);

  const showDownloadCV = () => {
    setShowText(!showText);
  };

  const saveFile = () => {
    saveAs(
      "https://1drv.ms/b/s!Auuwj7M0nVDUmiKHoSjch-udhUAe?e=RiYcXC",
      "Mikheil Gogia - CV.pdf"
    );
  };

  return (
    <header className="h-24 flex justify-between sm:h-16">
      <Sidebar />
      <div className="flex justify-end items-center h-full w-[20%] mr-4 ">
        <div className="flex justify-between items-center w-[70%] text-white lg:flex-col lg:items-center">
          <a
            href="https://github.com/MrMishka02"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-[30%] text-center lg:ml-0 lg:mr-0 lg:text-center"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikheil-gogia-848315247/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-[30%] text-center pl-4 lg:mt-4 lg:text-center"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            className="cursor-pointer w-[40%] text-center
              lg:mt-4 lg:mr-0 lg:flex lg:justify-center lg:items-center"
            onClick={saveFile}
            onMouseLeave={showDownloadCV}
          >
            {showText ? (
              "DOWNLOAD CV"
            ) : (
              <FontAwesomeIcon
                icon={faCircleDown}
                size="2x"
                className="hover:hidden"
                onMouseEnter={showDownloadCV}
              />
            )}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
