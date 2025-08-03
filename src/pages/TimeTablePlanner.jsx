import React, { useState, useEffect } from "react";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Timings from morning to evening (customize as needed)
const periods = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 01:00",
  "01:00 - 02:00",
  "02:00 - 03:00",
  "03:00 - 04:00",
  "04:00 - 05:00",
];

const TimeTablePlanner = () => {
  const [timetable, setTimetable] = useState(() => {
    const saved = localStorage.getItem("college_timetable");
    return saved ? JSON.parse(saved) : {};
  });

  const handleChange = (day, period, value) => {
    const updated = {
      ...timetable,
      [day]: {
        ...timetable[day],
        [period]: value,
      },
    };
    setTimetable(updated);
  };

  useEffect(() => {
    localStorage.setItem("college_timetable", JSON.stringify(timetable));
  }, [timetable]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📅 TimeTable Planner</h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2 border border-gray-700">Day / Time</th>
              {periods.map((period, idx) => (
                <th key={idx} className="p-2 border border-gray-700 text-sm whitespace-nowrap">
                  {period}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day, dayIdx) => (
              <tr key={dayIdx} className="even:bg-gray-800">
                <td className="p-2 border border-gray-700 font-semibold">{day}</td>
                {periods.map((period, pIdx) => (
                  <td key={pIdx} className="border border-gray-700 p-1">
                    <input
                      type="text"
                      placeholder="Subject / Task"
                      value={timetable[day]?.[period] || ""}
                      onChange={(e) => handleChange(day, period, e.target.value)}
                      className="w-full bg-gray-700 p-1 rounded text-sm text-white"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTablePlanner;