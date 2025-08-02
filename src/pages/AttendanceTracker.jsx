import { useState, useEffect } from "react";

const AttendanceTracker = () => {
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("attendanceData");
    if (stored) {
      setSubjects(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("attendanceData", JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = () => {
    if (!subjectName || !totalClasses || !attendedClasses) {
      return alert("Fill all fields");
    }
    setSubjects([
      {
        id: Date.now(),
        name: subjectName,
        total: parseInt(totalClasses),
        attended: parseInt(attendedClasses),
      },
      ...subjects,
    ]);
    setSubjectName("");
    setTotalClasses("");
    setAttendedClasses("");
  };

  const deleteSubject = (id) => {
    setSubjects(subjects.filter((subj) => subj.id !== id));
  };

  const getPercentage = (attended, total) => {
    if (total === 0) return "0%";
    return `${((attended / total) * 100).toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Attendance Tracker</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Subject"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <input
            type="number"
            placeholder="Total Classes"
            value={totalClasses}
            onChange={(e) => setTotalClasses(e.target.value)}
            className="p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <input
            type="number"
            placeholder="Attended Classes"
            value={attendedClasses}
            onChange={(e) => setAttendedClasses(e.target.value)}
            className="p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </div>
        <button
          onClick={addSubject}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          Add Subject
        </button>

        <div className="grid sm:grid-cols-2 gap-4 pt-4">
          {subjects.map((subj) => (
            <div
              key={subj.id}
              className="bg-gray-800 p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{subj.name}</h2>
                <p className="text-sm text-gray-300">
                  {subj.attended}/{subj.total} classes attended
                </p>
                <p className="text-sm text-yellow-400">
                  Attendance: {getPercentage(subj.attended, subj.total)}
                </p>
              </div>
              <button
                onClick={() => deleteSubject(subj.id)}
                className="bg-red-600 hover:bg-red-700 text-sm px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracker;