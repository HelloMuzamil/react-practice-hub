import { useState } from "react";

function OneStateWithMultipleVal() {
  const [data, setData] = useState({ Name: "", Email: "", Password: "" });
  const [submittedData, setSubmittedData] = useState(null);

  function handleName(e) {
    setData((prevdata) => ({ ...prevdata, Name: e.target.value }));
  }

  function handleEmail(e) {
    setData((prevdata) => ({ ...prevdata, Email: e.target.value }));
  }

  function handlePass(e) {
    setData((prevdata) => ({ ...prevdata, Password: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData(data);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Multi-State Form
        </h2>

        <div className="space-y-4 mb-6">
          <input
            name="Name"
            type="text"
            placeholder="Enter Name"
            onChange={handleName}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
          />
          <input
            name="Email"
            type="email"
            placeholder="Enter Email"
            onChange={handleEmail}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
          />
          <input
            name="Password"
            type="password"
            placeholder="Enter Password"
            onChange={handlePass}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Submit
        </button>

        {submittedData && (
          <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-l-4 border-green-400">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Submitted Data
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Name:</span> {submittedData.Name}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span>{" "}
                {submittedData.Email}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Password:</span>{" "}
                {"•".repeat(submittedData.Password.length)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OneStateWithMultipleVal;
