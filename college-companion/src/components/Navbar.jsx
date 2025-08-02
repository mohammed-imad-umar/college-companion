import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (!user) return null; // Hide navbar when logged out

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">College Companion</h1>
      <ul className="flex flex-wrap gap-4 text-sm">
        <li><Link to="/" className="hover:text-blue-400">Dashboard</Link></li>
        <li><Link to="/cgpa" className="hover:text-blue-400">CGPA</Link></li>
        <li><Link to="/assignments" className="hover:text-blue-400">Assignments</Link></li>
        <li><Link to="/notes" className="hover:text-blue-400">Notes</Link></li>
        <li><Link to="/links" className="hover:text-blue-400">Links</Link></li>
        <li><Link to="/syllabus" className="hover:text-blue-400">Syllabus</Link></li>
        <li><Link to="/attendance" className="hover:text-blue-400">Attendance</Link></li>
        <li><Link to="/timetable" className="hover:text-blue-400">Timetable</Link></li>
        <li><Link to="/stickynotes" className="hover:text-blue-400">Sticky Notes</Link></li>
      </ul>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;