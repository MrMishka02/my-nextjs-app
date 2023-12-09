import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-blue-600 flex justify-between items-center">
      <img src="" alt="Navbar logo" className="m-4"/>
      <ul className="flex justify-center">
        <li className="m-4">
          <Link href="/">Home</Link>
        </li>
        <li className="m-4">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="m-4">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
