import AppRoutes from "./AppRoutes";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fixed top */}
      <Nav />

      {/* Main content */}
      <div className="flex flex-1">
        <AppRoutes />
      </div>
    </div>
  );
}
