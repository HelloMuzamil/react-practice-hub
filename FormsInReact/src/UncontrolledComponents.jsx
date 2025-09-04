import { useRef } from "react";

function UncontrolledComponents() {
  const emailRef = useRef();
  const passRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Uncontrolled Components
        </h2>

        <div className="space-y-4 mb-6">
          <input
            type="email"
            placeholder="Enter Email Please"
            ref={emailRef}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
          />
          <input
            type="password"
            placeholder="Enter Password Please"
            ref={passRef}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default UncontrolledComponents;
