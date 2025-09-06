import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      {/* browserRouter */}
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Navbar />

        <div className="p-6">
          <Routes>
            {/* Normal Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />

            {/* Nested Routes inside Dashboard */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
