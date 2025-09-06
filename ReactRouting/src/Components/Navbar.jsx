import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-center gap-6">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
      <Link to="/about" className="hover:underline">
        About Us
      </Link>
      <Link to="/dashboard" className="hover:underline">
        Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;
