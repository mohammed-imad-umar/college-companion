import React, { useEffect, useState } from "react";

const Loader = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto" />
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          College Companion by <span className="text-blue-400">Mohammed Imad Umar</span>
        </h1>
        <p className="text-sm text-gray-400">Initializing{dots}</p>
      </div>
    </div>
  );
};

export default Loader;
