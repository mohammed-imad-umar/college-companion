import { useState, useEffect } from "react";

const AttendanceTracker = () => {
  const [subjects, setSubjects] = useState(() => {
    const stored = localStorage.getItem("attendance_subjects");
    return stored ? JSON.parse(stored) : [];
  });

  const [subject, setSubject] = useState("");
  const [present, setPresent] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    localStorage.setItem("attendance_subjects", JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = () => {
    if (!subject.trim() || !present || !total) return;
    setSubjects([
      {
        id: Date.now(),
        subject,
        present: parseInt(present),
        total: parseInt(total),
      },
      ...subjects,
    ]);
    setSubject("");
    setPresent("");
    setTotal("");
  };

  const deleteSubject = (id) => {
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const calculatePercentage = (p, t) => {
    if (t === 0) return "0%";
    return `${((p / t) * 100).toFixed(1)}%`;
  };

  return (
    <div className="text-white p-6 max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Attendance Tracker</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-2 rounded bg-gray-700"
        />
        <input
          type="number"
          placeholder="Present"
          value={present}
          onChange={(e) => setPresent(e.target.value)}
          className="p-2 rounded bg-gray-700"
        />
        <input
          type="number"
          placeholder="Total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="p-2 rounded bg-gray-700"
        />
      </div>

      <button
        onClick={addSubject}
        className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded mb-6"
      >
        Add Subject
      </button>

      {subjects.length === 0 ? (
        <p className="text-gray-400 text-center">No attendance data yet.</p>
      ) : (
        <table className="w-full text-left border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2">Subject</th>
              <th className="p-2">Present</th>
              <th className="p-2">Total</th>
              <th className="p-2">%</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((s) => (
              <tr key={s.id} className="border-t border-gray-700">
                <td className="p-2">{s.subject}</td>
                <td className="p-2">{s.present}</td>
                <td className="p-2">{s.total}</td>
                <td className="p-2">{calculatePercentage(s.present, s.total)}</td>
                <td className="p-2">
                  <button
                    onClick={() => deleteSubject(s.id)}
                    className="text-red-400 hover:text-red-600"
                  >
                    ✖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AttendanceTracker;
