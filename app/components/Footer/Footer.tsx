import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-slate-400">
      <p className="m-4">2023</p>
      <p className="m-4">&copy; Mikheil Gogia</p>
      <a
        href="https://github.com/MrMishka02"
        target="_blank"
        rel="noopener noreferrer"
        className="m-4"
      >
        <FontAwesomeIcon icon={faGithub} className="w-6 md:w-8 lg:w-10" />
      </a>
    </footer>
  );
};

export default Footer;
