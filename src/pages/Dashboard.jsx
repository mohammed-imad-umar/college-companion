import { Link } from "react-router-dom";

const Dashboard = () => {
  const features = [
    { name: "CGPA Calculator", path: "/cgpa" },
    { name: "Assignment Tracker", path: "/assignments" },
    { name: "Notes App", path: "/notes" },
    { name: "Class Links", path: "/class-links" },
    { name: "Syllabus Vault", path: "/syllabus" },
    { name: "Attendance Tracker", path: "/attendance" },
    { name: "Timetable Planner", path: "/timetable" },
    { name: "Sticky Notes", path: "/sticky-notes" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to Mohammed Imad Umar’s College Companion
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.path}
            className="bg-gray-800 hover:bg-blue-700 p-6 rounded-lg text-center transition duration-200 shadow-md"
          >
            <h2 className="text-xl font-semibold">{feature.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;