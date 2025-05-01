import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full min-h-screen max-w-md  bg-white rounded-lg shadow-lg p-6 sm:p-8 flex flex-col justify-end">
        <h2 className="text-xl font-semibold mb-2">Welcome to PopX</h2>

        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="space-y-3">
          <Link to="/signUp">
            <button className="w-full bg-violet-800 text-white py-3 px-4 rounded-lg hover:bg-violet-900">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-600 font-semibold py-3 px-4 rounded-lg transition duration-300">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
