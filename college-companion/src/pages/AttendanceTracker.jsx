import { useState } from "react";

const AttendanceTracker = () => {
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState("");

  const addSubject = () => {
    if (!subjectName.trim()) return;
    setSubjects([...subjects, { name: subjectName, attended: 0, total: 0 }]);
    setSubjectName("");
  };

  const markAttendance = (index, present) => {
    const updated = [...subjects];
    updated[index].total += 1;
    if (present) updated[index].attended += 1;
    setSubjects(updated);
  };

  const getPercentage = (subj) => {
    if (subj.total === 0) return "0%";
    return `${((subj.attended / subj.total) * 100).toFixed(1)}%`;
  };

  const deleteSubject = (index) => {
    const updated = subjects.filter((_, i) => i !== index);
    setSubjects(updated);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Attendance Tracker</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            placeholder="Enter subject name"
            className="flex-1 p-2 rounded bg-gray-800"
          />
          <button
            onClick={addSubject}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Add
          </button>
        </div>

        {subjects.length === 0 ? (
          <p className="text-center text-gray-400">No subjects yet.</p>
        ) : (
          <ul className="space-y-4">
            {subjects.map((subj, index) => (
              <li
                key={index}
                className="bg-gray-800 p-4 rounded flex flex-col sm:flex-row sm:justify-between items-start sm:items-center"
              >
                <div>
                  <h2 className="font-bold">{subj.name}</h2>
                  <p className="text-sm text-gray-400">
                    Attended: {subj.attended} / Total: {subj.total} —{" "}
                    <span className="text-blue-400">{getPercentage(subj)}</span>
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 flex gap-2">
                  <button
                    onClick={() => markAttendance(index, true)}
                    className="bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-sm"
                  >
                    Present
                  </button>
                  <button
                    onClick={() => markAttendance(index, false)}
                    className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-sm"
                  >
                    Absent
                  </button>
                  <button
                    onClick={() => deleteSubject(index)}
                    className="text-red-400 hover:text-red-600 text-sm ml-2"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AttendanceTracker;