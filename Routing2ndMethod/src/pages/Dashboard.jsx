import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-1">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">📊 Dashboard</h2>
        <Outlet />
      </main>
    </div>
  );
}
