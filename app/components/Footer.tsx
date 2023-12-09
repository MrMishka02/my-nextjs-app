import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='flex items-center justify-between p-2 bg-slate-400'>
      <p>2023</p>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className='w-10' />
      </a>
      <p>&copy; Mikheil Gogia</p>
    </footer>
  );
};

export default Footer;
