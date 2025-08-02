import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  if (isAuthPage) return null; // hide navbar on login/signup pages

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">
        Mohammed Imad Umar’s College Companion
      </div>
      <div className="flex gap-4 items-center text-sm">
        <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/cgpa" className="hover:text-blue-400">CGPA</Link>
        <Link to="/assignments" className="hover:text-blue-400">Assignments</Link>
        <Link to="/notes" className="hover:text-blue-400">Notes</Link>
        <Link to="/class-links" className="hover:text-blue-400">Class Links</Link>
        <Link to="/syllabus" className="hover:text-blue-400">Syllabus</Link>
        <Link to="/attendance" className="hover:text-blue-400">Attendance</Link>
        <Link to="/timetable" className="hover:text-blue-400">Timetable</Link>
        <Link to="/sticky-notes" className="hover:text-blue-400">Sticky Notes</Link>
        <Link to="/login" className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;