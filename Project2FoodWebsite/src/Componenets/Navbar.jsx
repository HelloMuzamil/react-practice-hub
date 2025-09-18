import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="ml-2.5 mt-3 flex justify-between ">
        {/* Left Side - Date & Heading */}
        <div>
          <p
            className="inline-block px-4 py-2 rounded-full 
                       bg-gradient-to-r from-green-400 to-blue-500 
                       text-white font-semibold shadow-md"
          >
            {new Date().toUTCString().slice(0, 16)}
          </p>

          <h1
            className="text-4xl font-extrabold mt-1.5 
                       bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
                       bg-clip-text text-transparent 
                       drop-shadow-md uppercase"
          >
            Food Website
          </h1>
        </div>

        {/* Right Side - Search Box */}
        <div>
          <input
            type="text"
            placeholder=" Search Something..."
            className="px-4 py-2 w-60 
                       rounded-full 
                       border border-gray-300 
                        shadow-sm 
                       placeholder-gray-400 text-gray-700 mr-7"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
