import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // this includes the bounce animation

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2500); // show loader for 2.5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="loader mb-4">
        <div className="bounce"></div>
        <div className="bounce bounce2"></div>
        <div className="bounce bounce3"></div>
      </div>
      <h1 className="text-lg font-semibold text-center">
        Welcome to Mohammed Imad Umar's College Companion
      </h1>
    </div>
  );
};

export default Loader;