import { House, Film, Clapperboard, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-pink-600 shadow-lg">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-4xl font-bold text-blue-500 flex items-center">
          Stream App <Film className="ml-2 h-10 w-10 text-blue-500" />
        </h1>
      </div>
      <nav className="bg-gray-900 p-4 rounded-t-lg shadow-lg">
        <ul className="flex items-center justify-center space-x-8">
          <li className="flex items-center">
            <House className="h-6 w-6 mr-2 text-gray-400" />
            <Link
              to="/"
              className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <Info className="h-6 w-6 mr-2 text-gray-400" />
            <Link
              to="/contact"
              className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
          <li className="flex items-center">
            <Clapperboard className="h-6 w-6 mr-2 text-gray-400" />
            <Link
              to="/film"
              className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Film
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
