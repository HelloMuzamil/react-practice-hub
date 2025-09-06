import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🏠 Home Page</h1>
      <div className="flex gap-4 mb-6">
        <Link
          to="dashboard"
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/profile"
          className="px-3 py-1 bg-purple-500 text-white rounded"
        >
          Profile
        </Link>
        <Link
          to="/dashboard/settings"
          className="px-3 py-1 bg-orange-500 text-white rounded"
        >
          Settings
        </Link>
      </div>

      {/* Nested content will load here */}
      <Outlet />
    </div>
  );
}

export default Home;
