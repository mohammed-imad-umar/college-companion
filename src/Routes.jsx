import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CGPACalculator from "./pages/CGPACalculator";
import AssignmentTracker from "./pages/AssignmentTracker";
import NotesApp from "./pages/NotesApp";
import ClassLinks from "./pages/ClassLinks";
import SyllabusVault from "./pages/SyllabusVault";
import AttendanceTracker from "./pages/AttendanceTracker";
import TimetablePlanner from "./pages/TimetablePlanner";
import StickyNotes from "./pages/StickyNotes";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Loader from "./components/Loader";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cgpa" element={<CGPACalculator />} />
        <Route path="/assignments" element={<AssignmentTracker />} />
        <Route path="/notes" element={<NotesApp />} />
        <Route path="/class-links" element={<ClassLinks />} />
        <Route path="/syllabus" element={<SyllabusVault />} />
        <Route path="/attendance" element={<AttendanceTracker />} />
        <Route path="/timetable" element={<TimetablePlanner />} />
        <Route path="/sticky-notes" element={<StickyNotes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;