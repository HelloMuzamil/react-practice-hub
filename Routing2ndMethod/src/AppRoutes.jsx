import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/profile";

export default function AppRoutes() {
  let routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "profile", element: <Profile /> },
        { path: "settings", element: <Settings /> },
      ],
    },
    {
      path: "*",
      element: (
        <h1 className="text-center text-red-600 mt-10 text-2xl">
          404 Not Found
        </h1>
      ),
    },
  ];

  return useRoutes(routes);
}
