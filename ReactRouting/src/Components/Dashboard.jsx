import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        📊 Dashboard I am On a Dashboard Page
      </h1>

      {/* Links for nested routes */}
      <div className="flex gap-4 mb-6">
        <Link
          to="profile"
          className="px-3 py-1 bg-purple-500 text-white rounded"
        >
          Profile
        </Link>
        <Link
          to="settings"
          className="px-3 py-1 bg-orange-500 text-white rounded"
        >
          Settings
        </Link>
      </div>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
