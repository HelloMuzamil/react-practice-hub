import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 border-r min-h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Dashboard Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/dashboard/profile"
            className="block p-2 rounded hover:bg-gray-200"
          >
            👤 Profile
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/settings"
            className="block p-2 rounded hover:bg-gray-200"
          >
            ⚙️ Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}
