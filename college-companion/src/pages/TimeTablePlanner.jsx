import { useState, useEffect } from "react";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const TimetablePlanner = () => {
  const [timetable, setTimetable] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("timetableData");
    if (stored) {
      setTimetable(JSON.parse(stored));
    } else {
      const defaultTable = {};
      daysOfWeek.forEach(day => defaultTable[day] = ["", "", "", "", "", ""]);
      setTimetable(defaultTable);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timetableData", JSON.stringify(timetable));
  }, [timetable]);

  const handleChange = (day, index, value) => {
    const updated = { ...timetable };
    updated[day][index] = value;
    setTimetable(updated);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Timetable Planner</h1>
      <div className="overflow-x-auto max-w-full">
        <table className="w-full text-sm bg-gray-800 border border-gray-700 rounded">
          <thead>
            <tr>
              <th className="border border-gray-700 p-2 bg-gray-700">Day / Slot</th>
              {[1, 2, 3, 4, 5, 6].map((slot) => (
                <th key={slot} className="border border-gray-700 p-2">
                  Slot {slot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {daysOfWeek.map((day) => (
              <tr key={day}>
                <td className="border border-gray-700 p-2 font-semibold bg-gray-700">{day}</td>
                {timetable[day]?.map((entry, index) => (
                  <td key={index} className="border border-gray-700 p-2">
                    <input
                      type="text"
                      value={entry}
                      onChange={(e) => handleChange(day, index, e.target.value)}
                      placeholder="--"
                      className="w-full px-2 py-1 bg-gray-900 text-white border border-gray-600 rounded"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-400 mt-3">All data is saved automatically.</p>
      </div>
    </div>
  );
};

export default TimetablePlanner;