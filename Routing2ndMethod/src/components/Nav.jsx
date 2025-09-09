import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">My Dashboard</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-300">
          Contact
        </Link>
        <Link to="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
