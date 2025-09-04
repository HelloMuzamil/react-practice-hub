import { useState, useEffect } from "react";

function App() {
  // localStorage-backed dark mode (simple)
  const [darkMode, setDarkMode] = useState(() => {
    const s = localStorage.getItem("darkMode");
    return s ? JSON.parse(s) : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">MyBrand</h1>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <a className="hover:text-blue-500" href="#">Home</a>
            <a className="hover:text-blue-500" href="#">Features</a>
            <a className="hover:text-blue-500" href="#">Pricing</a>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {darkMode ? "Light ☀️" : "Dark 🌙"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold mb-4">Build beautiful UIs with Tailwind</h2>
          <p className="text-lg/7 mb-6">Fast, consistent and responsive utility-first CSS — learn by doing.</p>
          <div className="flex gap-4">
            <button className="btn bg-blue-600 text-white hover:bg-blue-700">Get Started</button>
            <button className="btn bg-gray-100 dark:bg-gray-800">Learn More</button>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded shadow">Preview 1</div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded shadow">Preview 2</div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-bold mb-4">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({length:3}).map((_,i)=>(
            <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Card {i+1}</h4>
              <p className="text-sm/6 mb-4">Short description — use text-sm/6 to set font-size + line-height.</p>
              <button className="btn bg-blue-600 text-white hover:bg-blue-700">Action</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-6 text-sm text-center text-gray-500">
        © 2025 MyBrand
      </footer>
    </div>
  );
}

export default App;
