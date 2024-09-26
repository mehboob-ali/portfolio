import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="h-screen  justify-center flex flex-col text-2xl text-white rounded-xl p-4">
      <h1 className="text-6xl font-semibold text-gray-300">MEHBOOB&nbsp;ALI</h1>
      <ul className="flex flex-col space-y-4 mt-8 text-gray-300 text-3xl">
        <Link to="/">
          <li className="hover:text-gray-100 text-gray-400">HOME</li>
        </Link>
        <Link to="/projects">
          <li className="hover:text-gray-100 text-gray-400">PROJECTS</li>
        </Link>
        <Link to="/skills">
          <li className="hover:text-gray-100 text-gray-400">SKILLS</li>
        </Link>
        <Link to="/education">
          <li className="hover:text-gray-100 text-gray-400">EDUCATION</li>
        </Link>
        <Link to="/contact">
          <li className="hover:text-gray-100 text-gray-400">CONTACT ME</li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
