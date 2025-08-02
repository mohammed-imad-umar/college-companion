import { useState } from "react";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const TimetablePlanner = () => {
  const [timetable, setTimetable] = useState({});
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [newEntry, setNewEntry] = useState("");

  const addEntry = () => {
    if (!newEntry.trim()) return;

    const updated = { ...timetable };
    if (!updated[selectedDay]) updated[selectedDay] = [];
    updated[selectedDay].push(newEntry);
    setTimetable(updated);
    setNewEntry("");
  };

  const deleteEntry = (day, index) => {
    const updated = { ...timetable };
    updated[day].splice(index, 1);
    setTimetable(updated);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Timetable Planner</h1>

        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="p-2 bg-gray-800 rounded text-white"
          >
            {days.map((day) => (
              <option key={day}>{day}</option>
            ))}
          </select>
          <input
            type="text"
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="Enter class/time"
            className="flex-1 p-2 rounded bg-gray-800"
          />
          <button
            onClick={addEntry}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Add
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {days.map((day) => (
            <div key={day} className="bg-gray-800 p-4 rounded shadow">
              <h2 className="font-semibold mb-2">{day}</h2>
              {timetable[day]?.length > 0 ? (
                <ul className="space-y-1">
                  {timetable[day].map((entry, index) => (
                    <li
                      key={index}
                      className="flex justify-between bg-gray-700 px-3 py-1 rounded"
                    >
                      <span>{entry}</span>
                      <button
                        onClick={() => deleteEntry(day, index)}
                        className="text-red-400 hover:text-red-600 text-sm"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400">No entries</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimetablePlanner;