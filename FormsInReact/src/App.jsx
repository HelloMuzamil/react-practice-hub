import { useState } from "react";
import UncontrolledComponents from "./UncontrolledComponents.jsx";
import OneStateWithMultipleVal from "./OneStateWithMultipleVal.jsx";
import OptimzedCode from "./OptimzedCode.jsx";
import Posts from "./Posts.jsx";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function submiting() {
    console.log(email);
    console.log(pass);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            React Form Components
          </h1>
          <p className="text-gray-600 text-lg">
            Controlled vs Uncontrolled Components Demo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Controlled Components */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                Controlled Components
              </h2>

              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  placeholder="Enter Email Please"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                />
                <input
                  type="password"
                  placeholder="Enter Password Please"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                />
              </div>

              <button
                onClick={submiting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Login
              </button>
            </div>
          </div>

          {/* Uncontrolled Components */}
          <UncontrolledComponents />

          {/* Multi-State Form */}
          <OneStateWithMultipleVal />

          {/* OptimizedCode */}
          <OptimzedCode />

          <Posts />
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-white rounded-lg shadow-md px-6 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Controlled
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Uncontrolled
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Multi-State
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
