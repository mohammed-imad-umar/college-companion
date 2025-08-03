import React, { useState, useEffect } from "react";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState(() => {
    const stored = localStorage.getItem("attendance_records");
    return stored ? JSON.parse(stored) : [];
  });

  const [subject, setSubject] = useState("");
  const [attended, setAttended] = useState("");
  const [total, setTotal] = useState("");

  const addRecord = () => {
    if (!subject || !attended || !total || isNaN(attended) || isNaN(total)) return;

    const newEntry = {
      subject,
      attended: parseInt(attended),
      total: parseInt(total),
    };

    const updated = [...attendanceData, newEntry];
    setAttendanceData(updated);
    localStorage.setItem("attendance_records", JSON.stringify(updated));
    setSubject("");
    setAttended("");
    setTotal("");
  };

  const deleteRecord = (index) => {
    const updated = attendanceData.filter((_, i) => i !== index);
    setAttendanceData(updated);
    localStorage.setItem("attendance_records", JSON.stringify(updated));
  };

  const calculatePercentage = (attended, total) => {
    return total > 0 ? ((attended / total) * 100).toFixed(1) : "0.0";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Attendance Tracker</h1>

      <div className="flex flex-col gap-2 mb-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Subject"
          className="p-2 rounded bg-gray-800 border border-gray-700"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="number"
          placeholder="Classes Attended"
          className="p-2 rounded bg-gray-800 border border-gray-700"
          value={attended}
          onChange={(e) => setAttended(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Classes"
          className="p-2 rounded bg-gray-800 border border-gray-700"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
        <button
          onClick={addRecord}
          className="glow-button bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
        >
          Add Record
        </button>
      </div>

      <div className="max-w-xl mx-auto space-y-4">
        {attendanceData.map((entry, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{entry.subject}</h3>
              <p className="text-sm text-gray-300">
                Attended: {entry.attended} / {entry.total} classes
              </p>
              <p
                className={`text-sm ${
                  calculatePercentage(entry.attended, entry.total) >= 75
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                Attendance: {calculatePercentage(entry.attended, entry.total)}%
              </p>
            </div>
            <button
              onClick={() => deleteRecord(index)}
              className="text-red-400 hover:text-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;