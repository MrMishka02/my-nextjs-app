import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <nav className="bg-black h-24 flex justify-center">
      <div className="flex justify-between items-center h-full w-[90%] xl:w-[60%]">
        <img
          src={logo.src}
          alt="Navbar logo"
          className="w-14 m-4 cursor-pointer rounded-full hover:bg-slate-900 xl:w-20"
        />
        <ul className="flex justify-center items-center">
          <li className="m-4 hover:text-gray-400">
            <Link href="/">Home</Link>
          </li>
          <li className="m-4 hover:text-gray-400">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="m-4 hover:text-gray-400">
            <Link href="/about">About</Link>
          </li>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex w-[30%] h-8 pl-14 pr-8"
          >
            <FontAwesomeIcon icon={faGithub} size="2xs" />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex w-[30%] h-8 pr-8"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xs" />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
