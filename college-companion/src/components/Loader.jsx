import React from "react";
import "../index.css";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-950 flex-col">
      <div className="loader mb-6">
        <div className="bounce bounce1"></div>
        <div className="bounce bounce2"></div>
        <div className="bounce bounce3"></div>
      </div>
      <h1 className="text-xl text-white font-semibold">
        Welcome to <span className="text-blue-400">College Companion</span>
      </h1>
      <p className="text-sm text-gray-400 mt-2">
        Designed & Developed by <span className="text-blue-300 font-medium">Mohammed Imad Umar</span>
      </p>
    </div>
  );
};

export default Loader;